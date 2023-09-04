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
const sortingArrayAndGetMaxMinValue = (oddArray, evenArray) => {
  // Sorting odd array value with bubble short
  for (let i = 0; i < oddArray.length; i++) {
    for (let j = 0; j < oddArray.length - ( i - 1 ); j++) {
      if (oddArray[j] > oddArray[j + 1]) {
        var swap = oddArray[j];
        oddArray[j] = oddArray[j + 1];
        oddArray[j + 1] = swap;
      }
    }
  }  

  console.log("Sorting odd array: ");
  console.log(oddArray);
  console.log("Min odd array");
  console.log(oddArray[0]);
  console.log("Max odd array");
  console.log(oddArray[oddArray.length - 1]);

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
  console.log("Sorting even array: ");
  console.log(evenArray);
  console.log("Min even array");
  console.log(evenArray[0]);
  console.log("Max even array");
  console.log(evenArray[evenArray.length - 1]);
};

sortingArrayAndGetMaxMinValue(oddArray, evenArray);
