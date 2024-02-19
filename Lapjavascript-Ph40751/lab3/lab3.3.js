function calcAverageHumanAge(ages) {
  const dogAges = ages.map((age) => (age <= 2 ? age * 2 : 16 + age * 4));
  const adults = dogAges.filter((age) => age > 18);
  const average = adults.reduce((sum, age) => sum + age, 0) / adults.length;
  return average;
}

const ages1 = [5, 2, 4, 1, 15, 8, 3];
console.log(calcAverageHumanAge(ages1));

const ages2 = [16, 6, 10, 5, 6, 1, 4];
console.log(calcAverageHumanAge(ages2));
