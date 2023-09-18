// Soal 1
function faktorial(angka) {
  if (angka === 0) {
    return 1;
  } else {
    return angka * faktorial(angka - 1);
  }
}
const input = 5;
const hasil = faktorial(input);
console.log(hasil);

// Soal 2
function transposeMatriks(matriks) {
  const baris = matriks.length;
  console.log(baris);
  const kolom = matriks[0].length;
  console.log(kolom);

  const hasil = new Array(kolom).fill(0).map(() => new Array(baris).fill(0));
  //   console.log(hasil);

  for (let i = 0; i < baris; i++) {
    for (let j = 0; j < kolom; j++) {
      hasil[j][i] = matriks[i][j];
    }
  }

  return hasil;
}

// Contoh penggunaan
const matriksInput = [
  [1, 2, 3],
  [4, 5, 6],
];

const matriksTranspose = transposeMatriks(matriksInput);
console.log(matriksTranspose);

// Soal 3
function adalahBilanganPrima(angka) {
  if (angka <= 1) {
    return false;
  }
  if (angka <= 3) {
    return true;
  }
  if (angka % 2 === 0 || angka % 3 === 0) {
    return false;
  }
  let i = 5;
  while (i * i <= angka) {
    if (angka % i === 0 || angka % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }
  return true;
}

function bilanganPrimaDariArray(arr) {
  return arr.filter(adalahBilanganPrima);
}

// Contoh penggunaan
const arrInput = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const output = bilanganPrimaDariArray(arrInput);
console.log(output);
