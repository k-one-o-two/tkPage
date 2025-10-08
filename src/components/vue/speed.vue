<template>
  <Article :art="ascii.speed" :title="note.title" :html="note.html" />
</template>

<script>
import { Article } from '../article.vue'
import { ascii } from '../../ascii'

export default {
  name: 'SpeedNote',
  components: {
    Article
  },
  data() {
    return {
      note: {
        title: "On speed for paginated queries",
        html: `
          <div>
            <h3>The problem</h3>
            <p>
              Finally, something that is work-related and not some random stuff I do
              in my free time.
            </p>
            <p>
              Imagine, you have a huge table, or even a view and you need to query
              it from the database and present in the UI, with sorting and
              pagination.
            </p>
            <p>
              Looks pretty simple: we have
              <a href="https://www.postgresql.org/docs/current/queries-limit.html">
                LIMIT and OFFSET
              </a>
              specifically for that task. But I would not have written this article,
              if it was that easy.
            </p>
            <p>
              The problem here is that if the OFFSET value is too high your query is
              going to become extremely slow.
            </p>
            <h3>More details</h3>
            <p>
              I'm using <a href="https://www.postgresql.org/">Postgresql</a> with
              <a href="https://www.prisma.io/">Prisma</a> in
              <a href="https://nodejs.org/en">Node.js</a> so code snippets would be
              with those tools. So, consider this query:
            </p>
            <pre class="crt">
              <code class="language-javascript">{`
const data = await prisma.someTable
.findMany({
  where: {
      someProperty: 'someValue',
  },
  include: {
      otherTable: {
          andAnotherOne: true
      }
  },
  orderBy: {
      field: 'asc'
  },
  {
      skip: 1000,
      take: 10
  }
});
              `}</code>
            </pre>
            <p>
              And... this takes a while to run, easily requiring several seconds.
              And the more the "skip", the longer it takes.
            </p>
            <p>
              <b>The sample query takes 6.52s</b>
            </p>
            <h3>Why is that?</h3>
            <p>
              I have found a great article on this topic,
              <a href="https://use-the-index-luke.com/blog/2013-07/pagination-done-the-postgresql-way">
                here it is
              </a>
              . The key takeaway is that with the large skip, database requires a
              lot of memory, and the more it is, the more memory will be needed
              (image from the article above):
            </p>
            <NoteImage src="/7/1.png"></NoteImage>
            <p>
              That article suggests using indexes, which is indeed a good solution,
              but might not be applicable. In my app, there is an ability to sort
              this table and some fields are really hard to index. Some of them have
              the same value (which is not ok, but I don't control the data), some
              are composite.
            </p>
            <p>
              Another issue is that for pagination to work I have to send the total
              number of rows along with the paginated data. Therefore, I have to run
              another query to get that count (since the long-awaited
              <a href="https://github.com/prisma/prisma/issues/7550">
                findManyAndCount
              </a>
              had not been implemented yet)
            </p>
            <h3>My solution</h3>
            <p>
              Once I've realized that the issue is the memory, I've tried to reduce
              the consumption.
            </p>
            <p>
              So, just to test things, I have removed everything from the "include"
              property (for those who are unfamiliar with Prisma - it is pretty much
              SQL join with some extra stuff).
            </p>
            <p>
              <b>The sample query takes 55ms</b>
            </p>
            <p>
              Great! But useless - I still need those included columns, and let's
              not forget about the count query.
            </p>
            <p>
              But now we know, that queries with includes and without an offset run
              fast - so let's try to have one.
            </p>
            <p>
              The 1st idea was to pre-select the array of object ids we're going to
              need for this exact page of pagination and then use it in the big one.
            </p>
            <p>Now, let's have 2 queries:</p>
            <pre class="crt">
              <code class="language-javascript">{`
const ids = await prisma.someTable
.findMany({
  where: {
      someProperty: 'someValue',
  },
  select: {
      id: true,
  },
  orderBy: {
      field: 'asc'
  },
  {
      skip: 1000,
      take: 10
  }
});

const data = await prisma.someTable
.findMany({
  where: {
      id: {
         in: Object.values(ids).map((id) => id.id),
      },
  },
  include: {
      otherTable: {
          andAnotherOne: true
      }
  },
});
              `}</code>
            </pre>
            <p>
              <b>The sample query takes 99ms</b>
            </p>
            <p>
              Not as good as without data, but still much better than the initial
              solution. But I still need the count!
            </p>
            <p>
              Let's rewrite it a bit more. "ids" is just a simple array, therefore
              it should be actually easy to get the part we need without using sql
              at all. As as side effect - the full array of ids has the exact same
              length I needed to sent to the UI.
            </p>
            <p>
              So, I have removed pagination from the request at all, leaving sorting
              in the 1st one (the one that gets ids) and moved pagination task to
              js:
            </p>
            <pre class="crt">
              <code class="language-javascript">{`
const paginatedIds = ids.slice(skip, skip + take));
              `}</code>
            </pre>
            <p>
              And then use this paginatedIds array in the "in" clause of the 2nd
              query.
            </p>
            <p>
              <b>The sample query takes 81ms</b>
            </p>
            <p>
              So, yeah, I have not beaten the 55ms result, but that one was pretty
              much useless, and now I've got the count as well - therefore this is
              all I needed from this function and it won't take any more time than
              that.
            </p>
            <h3>done</h3>
            <p>
              I can't share the whole code because I've wrote it for work - but you
              don't have to trust me, better try this approach yourself and see if
              it is any good in your case.
            </p>
          </div>
        `
      }
    }
  }
}
</script>
