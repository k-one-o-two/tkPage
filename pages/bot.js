import { Article } from '../components/article';

function Notes() {
  const note = {
    title: 'On Telegram bot development',
    html: (
      <div>
        <h3>Why</h3>
        <p>
          As you may have noticed, I like taking pictures. I also like looking
          at others pics and encouraging people to make and share them.
        </p>
        <p>
          Since I'm somewhat active in the Nerdsbay community, I have decided to
          create a telegram channel for people to share their photos. No
          discussions, just photos.
        </p>
        <p>
          But immediately, there is a problem - how do I let people send their
          images to the channel - obviously, I'd like to be able to either
          approve or reject those pics.
        </p>
        <h3>Let's start</h3>
        <p>
          So, we need a public channel, a private group where people will be
          able to approve images and a bot which will forward messages from the
          user to that group and then to the channel.
        </p>
        <p>
          To create a bot, you have to interact with the{' '}
          <a href="https://t.me/BotFather">bot father</a> - this is pretty
          straight-forward and I'm gonna skip it here.
        </p>
        <p>
          We'll be using node.js, let's start with adding a couple of packages
          we'll need.
        </p>
        <pre>
          <code className="language-javascript">
            npm install node-telegram-bot-api
          </code>
        </pre>
        <pre>
          <code className="language-javascript">npm install locallydb</code>
        </pre>
        <p>
          The 1st one is the api that we're going to use to interact with the
          bot, the 2nd - a rather dumb "database".
        </p>
        <p>
          The api works pretty much like a web socket - it starts polling and
          lets you to subscribe to some events. First of all, we need a "photo"
          event.
        </p>
        <pre>
          <code className="language-javascript">{`
const bot = new TelegramBot(token, { polling: true });

bot.on('photo', (msg) => {});
            `}</code>
        </pre>
        <p>
          All the files are stored by telegram separately, so we don't actually
          need to download it - only memorize it's "file_unique_id". Let's save
          it to the collection:
        </p>
        <pre>
          <code className="language-javascript">
            {`
chatsArray.insert({
  user: msg.chat.id,
  fileId: msg.photo[0].file_unique_id,
  msgId: msg.message_id,
});`}
          </code>
        </pre>
        <p>
          We're going to need the id of this chat to be able to respond to the
          user, who sent the picture.
        </p>
        <p>
          Now we need to forward this message to the admin group, this is pretty
          straightforward as well.
        </p>
        <pre>
          <code className="language-javascript">
            bot.forwardMessage(groupID, msg.chat.id, msg.message_id);
          </code>
        </pre>
        <p>
          Next, the bot needs to react to the message in that group and forward
          the message to the channel and additionally notify the original sender
          that their picture has been approved (or not).
        </p>
        <p>
          This is why we have saved the user id into the array - in some cases,
          a user can hide their username on forwarded messages - the only way to
          trace the user back is by the file uniq id .
        </p>
        <pre>
          <code className="language-javascript">{`
bot.onText(/ok\\s?(.*)/, (msg, match) => {
  const comment = match[1]; // the captured "comment"
  bot.forwardMessage(channelID, msg.chat.id, msg.reply_to_message.message_id); // forwarding to the channel
  const savedUser = getUserByFile(fileId);
  bot.sendMessage(
    savedUser.user,
    'we have approved your photo',
    {
      reply_to_message_id: savedUser.msgId,
    },
  );
  ...
const getUserByFile = (fileId) => {
  const list = chatsArray.where({ fileId });
  if (list.length() === 0) {
    return null;
  }

  return list.items[0];
};
        `}</code>
        </pre>
        <p>
          Here the bot reacts to a message that matches the regexp (i.e.
          messages like "ok we like it") if this message came as a reply to the
          photo in the group.
        </p>
        <p>
          Additionally, you may want to check that this reply is indeed in the
          group or it has some approved users in it.
        </p>
        <h3>That's it</h3>
        <p>
          You may see this code here:{' '}
          <a href="https://github.com/k-one-o-two/img-bot">on Github.</a>
        </p>
        <h3>Wait, how do I run it?</h3>
        <p>
          The good thing is that you don't need any domain or even a static IP
          to host this bot backend. But if you're unhappy with running it on
          your machine, there's a great option.
        </p>
        <p>
          You can obtain an{' '}
          <a href="https://www.oracle.com/cloud/free/">Oracle free tier</a>{' '}
          virtual machine. On which you can install any OS you like.
        </p>
        <p>
          After trying several options to run my little node script and detach
          it from the ssh terminal, I've found out that{' '}
          <a href="https://www.npmjs.com/package/forever">forever</a> works nest
          for me.
        </p>
        <p>So, install it and run your script:</p>
        <pre>
          <code className="language-javascript">
            npm install -g forever && forever start ./app.js
          </code>
        </pre>
        <h3>Done</h3>
        <p>
          In case you'd need a telegram bot for something, you now know how to
          start!
        </p>
      </div>
    ),
  };

  return <Article title={note.title} html={note.html}></Article>;
}

export default Notes;
