import { useState, useEffect } from 'react';

const strToCryptic = (str, lastGen) => {
  const randomIntFromInterval = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  const doneArr = [];
  let crypted = Array.from({ length: str.length }, (v, i) => {
    const isDone = doneArr[i] || Math.random() > 0.5;
    if (isDone) {
      doneArr[i] = true;
      return str[i];
    }
    return String.fromCodePoint(randomIntFromInterval(0, 8000));
  }).join('');

  return crypted;
};

export function Card({ title, children, link }) {
  const [clip, setClip] = useState('');
  const [cryptedTitle, setCryptedTitle] = useState('');

  useEffect(() => {
    setCryptedTitle(strToCryptic(title));
  }, [title]);

  useEffect(() => {
    const path = generateRandomPoints(170, 200);
    let downFacingPoints = `M-4,-4 L1004,-4 L1004,100 L${path.a} L${path.b} L${path.c} L${path.d} L${path.e} L-4,200 L-4,-4 Z`;
    setClip(downFacingPoints);

    const interval = setInterval(() => {
      const path = generateRandomPoints(170, 200);
      let downFacingPoints = `M-4,-4 L1004,-4 L1004,100 L${path.a} L${path.b} L${path.c} L${path.d} L${path.e} L-4,200 L-4,-4 Z`;
      setClip(downFacingPoints);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <a href={link}>
      <div
        className="card card-l2"
        style={{
          clipPath: `path("${clip}")`,
          transition: 'clip-path 0.3s ease-in',
        }}
      >
        <h2 className="title">{title}</h2>
        <div className="content">{children}</div>
      </div>
    </a>
  );
}

function generateRandomPoints(minSpread, maxSpread) {
  let points = {};
  points.a = `${getRandomInt(800, 1000)},${getRandomInt(minSpread, maxSpread)}`;
  points.b = `${getRandomInt(600, 800)},${getRandomInt(minSpread, maxSpread)}`;
  points.c = `${getRandomInt(400, 600)},${getRandomInt(minSpread, maxSpread)}`;
  points.d = `${getRandomInt(200, 400)},${getRandomInt(minSpread, maxSpread)}`;
  points.e = `${getRandomInt(0, 200)},${getRandomInt(minSpread, maxSpread)}`;
  return points;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
