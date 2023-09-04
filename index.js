/*
  1. Membuat array dengan 100 random value 
     dengan batasan nilai 1 sampai 50

    ~ deklarasi array 
      --> let array = []
    ~ membuat perulangan value random 
    ~ didalam perulangan menggunakan Math.random 
      untuk generate value random dengan batasan 1 sampai 50
    
  2. Menggunakan method array.push() 
     untuk memasukkan pecahan array 2 array 
     dengan array indeks ganjil dan array indeks genap

    ~ deklarasi 2 array 
      --> let arrayIndeksGanjil = [] 
      --> let arrayIndeksGenap = []
    ~ menggunakan perulangan untuk push value ke array baru 
      dengan indeks ganjil dan genap

  3. Menggunakan 2 array untuk mencari nilai min, max, total dan rata-rata

    ~ perulangan untuk mencari nilai minimal (bubble sort)
      --> let arrayIndeksGanjil[].min
    ~ perulangan untuk mencari nilai maximal (bubble sort)
      --> let arrayIndeksGanjil[].max
    ~ mencari total dengan perulangan untuk menambahkan semua nilai 
    ~ mencari rata-rata dengan perulangan untuk menambahkan semua 
      nilai kemudian dibagi jumlah indeks

  4. Membandingakan value dari min, max, total dan rata-rata 
     dari kedua array
    ~ menggunakan logika untuk membandingan 
      value min dan max kedua array
    ~ menggunakan logika untuk membandingkan
      value total dari kedua array
    ~ menggunakan logika untuk membandingkan
      value rata-rata dari kedua array

  -- catatan --
  1. Tidak boleh menggunakan fungsi bawaaan min dan max
  2. Dinamis dengan membuat fungsi
  3. Push ke github dengan visibilitas publik
*/

// Homework Week 4 | Number 1
let array = [];

for (let i = 0; i < 100; i++) {
  array.push(Math.round(Math.random() * 50));
}

console.log("Default generate array: ");
console.log(array);
console.log("\n");

// Homework Week 4 | Number 2
let oddArray = []; // ganjil
let evenArray = []; // genap
for (let i = 0; i < array.length; i++) {
  if (i % 2 === 0) {
    evenArray.push(array[i]);
  } else {
    oddArray.push(array[i]);
  }
}

console.log("Odd index array from default array: ");
console.log(oddArray);
console.log("\n");

console.log("Even index array from default array: ");
console.log(evenArray);
console.log("\n");

// Homework Week 4 - Number 3
let minOddArray = 0;
let maxOddArray = 0;
let minEvenArray = 0;
let maxEvenArray = 0;
const sortingArrayAndGetMaxMinValue = (oddArray, evenArray) => {
  // Sorting odd array value with bubble short
  for (let i = 0; i < oddArray.length; i++) {
    for (let j = 0; j < oddArray.length - (i - 1); j++) {
      if (oddArray[j] > oddArray[j + 1]) {
        var swap = oddArray[j];
        oddArray[j] = oddArray[j + 1];
        oddArray[j + 1] = swap;
      }
    }
  }
  minOddArray = oddArray[0];
  maxOddArray = oddArray[oddArray.length - 1];

  console.log("Sorting odd array: ");
  console.log(oddArray);
  console.log("\n");

  // Sorting even array value with bubble short
  for (let i = 0; i < evenArray.length; i++) {
    for (let j = 0; j < evenArray.length - i - 1; j++) {
      if (evenArray[j] > evenArray[j + 1]) {
        var swap = evenArray[j];
        evenArray[j] = evenArray[j + 1];
        evenArray[j + 1] = swap;
      }
    }
  }
  minEvenArray = evenArray[0];
  maxEvenArray = evenArray[evenArray.length - 1];

  console.log("Sorting even array: ");
  console.log(evenArray);
};
sortingArrayAndGetMaxMinValue(oddArray, evenArray);

console.log(`Min odd array value = ${minOddArray}`);
console.log(`Max odd array value = ${maxOddArray}`);
console.log(`Min even array value = ${minEvenArray}`);
console.log(`Max even array value = ${maxEvenArray}`);
console.log("\n");

let sumOddArray = 0;
let sumEvenArray = 0;
let averageOddArray = 0;
let averageEvenArray = 0;

const getArrayTotalAndAverage = (oddArray, evenArray) => {
  for (let i = 0; i < oddArray.length; i++) {
    sumOddArray += oddArray[i];
    averageOddArray = sumOddArray / oddArray.length;
  }

  for (let i = 0; i < evenArray.length; i++) {
    sumEvenArray += evenArray[i];
    averageEvenArray = sumEvenArray / evenArray.length;
  }
};
getArrayTotalAndAverage(oddArray, evenArray);

console.log(`Sum of odd array value =  ${sumOddArray}`);
console.log(`Sum of even array value = ${sumEvenArray}`);
console.log("\n");

console.log(`Average of odd array value = ${averageOddArray}`);
console.log(`Average of even array value = ${averageEvenArray}`);
console.log("\n");

const compareMinArrayValue = (minOddArray, minEvenArray) => {
  if (minOddArray < minEvenArray) {
    console.log(
      `Result = Minimal odd value less than minimal even value | ${minOddArray} < ${minEvenArray}`
    );
  } else if (minOddArray == minEvenArray) {
    console.log(
      `Result = Minimal odd value is equal with minimal even value | ${minOddArray} = ${minEvenArray}`
    );
  } else {
    console.log(
      `Result = Minimal odd value is more than minimal even value | ${minOddArray} > ${minEvenArray}`
    );
  }
};
compareMinArrayValue(minOddArray, minEvenArray);

const compareMaxArrayValue = (maxOddArray, maxEvenArray) => {
  if (maxOddArray < maxEvenArray) {
    console.log(
      `Result = Maximal odd value less than maximal even value | ${maxOddArray} < ${maxEvenArray}`
    );
  } else if (maxOddArray == maxEvenArray) {
    console.log(
      `Result = Maximal odd value is equal with maximal even value | ${maxOddArray} = ${maxEvenArray}`
    );
  } else {
    console.log(
      `Result = Maximal odd value is more than maximal even value | ${maxOddArray} > ${maxEvenArray}`
    );
  }
};
compareMaxArrayValue(maxOddArray, maxEvenArray);

const compareSumArrayValues = (sumOddArray, sumEvenArray) => {
  if (sumOddArray < sumEvenArray) {
    console.log(
      `Result = Sum odd value less than sum even value | ${sumOddArray} < ${sumEvenArray}`
    );
  } else if (sumOddArray == sumEvenArray) {
    console.log(
      `Result = Sum odd value is equal with sum even value | ${sumOddArray} = ${sumEvenArray}`
    );
  } else {
    console.log(
      `Result = Sum odd value more than sum even value | ${sumOddArray} > ${sumEvenArray}`
    );
  }
};
compareSumArrayValues(sumOddArray, sumEvenArray);

const compareAverageArrayValues = (averageOddArray, averageEvenArray) => {
  if (averageOddArray < averageEvenArray) {
    console.log(
      `Result = Average of odd value less than average even value | ${averageOddArray} < ${averageEvenArray}`
    );
  } else if (averageOddArray == averageEvenArray) {
    console.log(
      `Result = Average of odd value is equal with average even value | ${averageOddArray} = ${averageEvenArray}`
    );
  } else {
    console.log(
      `Result = Average of odd value more than average even value | ${averageOddArray} > ${averageEvenArray}`
    );
  }
};
compareAverageArrayValues(averageOddArray, averageEvenArray);
