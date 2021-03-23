const FACTS = [
  "Animals are best friends.",
  "Looking at animals makes you calm.",
  "Petting a cat lowers blood pressure.",
];

const cache = {};

const getTimeStamp = () => {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d.getTime();
};

const getRandomFact = () => {
  const randomIndex = Math.floor(Math.random() * FACTS.length);
  return FACTS[randomIndex];
};

export default (req, res) => {
  const timeStamp = getTimeStamp();
  let dailyFact = cache[timeStamp];
  if (!dailyFact) {
    const fact = getRandomFact();
    cache[timeStamp] = fact;
    dailyFact = fact;
  }

  res.status(200).json({ fact: dailyFact });
};
