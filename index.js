function sequanceSquare(array) {
  const squaredArray = [];
  let arrIndex = array.length - 1;
  console.log(arrIndex >= 0);
  for (; arrIndex >= 0; arrIndex--) {
    console.log(arrIndex);
    const squaredValue = array[arrIndex] * array[arrIndex];
    let squaredArrayIndex = squaredArray.length - 1;
    while (squaredArrayIndex < 0) {
      if (squaredValue > squaredArray[squaredArrayIndex]) {
        squaredValue.splice(1, 0, squaredValue);
      }

      squaredArrayIndex--;
    }
    // squaredArray.push()
  }
  return squaredArray;
}

const result = sequanceSquare([1]);
document.getElementById('demo').innerHTML = `${result}`;
