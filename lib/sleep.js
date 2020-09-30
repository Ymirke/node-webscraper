const ceil = require('lodash.ceil');

const generateRandomRealisticTime = () => {
  const randomNumber = Math.random();
  const randomTimeInMs = randomNumber * 4000;

  if (randomTimeInMs < 900) {
    return generateRandomRealisticTime();
  }

  return randomTimeInMs;
};

const sleep = (message, milliseconds) => {
  console.log(`${message} \n ${ceil(milliseconds / 1000, 2)} s \n`);
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

module.exports = {
  sleep,
  generateRandomRealisticTime,
};
