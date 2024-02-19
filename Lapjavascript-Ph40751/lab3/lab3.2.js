function checkDogs(dogsJulia, dogsKate) {
  const juliaCopy = dogsJulia.slice();
  juliaCopy.splice(0, 2);
  juliaCopy.splice(-2);

  const allDogs = juliaCopy.concat(dogsKate);

  allDogs.forEach((age, i) => {
    const status = age >= 3 ? "người lớn" : "chó con";
    console.log(`Chó số ${i + 1} là ${status} và ${age} tuổi`);
  });
}

const dogsJulia1 = [3, 5, 2, 12, 7];
const dogsKate1 = [4, 1, 15, 8, 3];
checkDogs(dogsJulia1, dogsKate1);

const dogsJulia2 = [9, 16, 6, 8, 3];
const dogsKate2 = [10, 5, 6, 1, 4];
checkDogs(dogsJulia2, dogsKate2);
