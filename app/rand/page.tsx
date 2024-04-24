'use client';
function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export default function Rand() {
  console.log('X');
  const randomNum = getRandomInt(2);
  if (randomNum) {
    throw new Error('1is Given');
  }
  return <h1>rand</h1>;
}
