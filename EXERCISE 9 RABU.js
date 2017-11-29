/*
SIMPAN 'nama'
SIMPAN 'angka pembilang'
SIMPAN 'angka penyebut'
HITUNG 'hasil bagi' dari 'angka pembilang' dibagi 'angka penyebut'
TULISKAN "Halo 'nama', 'angka pembilang' dibagi 'angka penyebut' adalah sama dengan 'hasil bagi'
*/

var a = 'nama';
var num1 = 25;
var num2 = 5;
var hitung = (num1/num2)
  console.log('halo '  + a + ' '  + num1 + ' dibagi '+ num2 + ' adalah sama dengan ' + hitung);


/*
SIMPAN 'alas' dari segitiga
SIMPAN 'tinggi' dari segitiga
HITUNG 'luas segitiga' dari 'alas' dikali 'tinggi' dibagi 2
TULISKAN "Luas Segitiga: 'luas segitiga'
*/

var alas = 2;
var tinggi = 14;
var hitung = (0.5 * (alas * tinggi));
  console.log('Luas Segitiga ' + hitung);

/*
MASUKKAN sebuah tahun pada `tahun`
IF `tahun` habis dibagi 4 THEN:
    IF `tahun` tidak habis dibagi 100 THEN:
        TULISKAN "`tahun` adalah tahun kabisat"
    ELSE:
        IF `tahun` habis dibagi 400 THEN:
            TULISKAN "`tahun` adalah tahun kabisat"
        ELSE:
            TULISKAN "`tahun` adalah bukan tahun kabisat"
        ENDIF
    ENDIF
ELSE:
    TULISKAN "`tahun` adalah bukan tahun kabisat"
ENDIF */

var tahun = 1992;
 if (tahun %4 === 0){
   if (tahun %100 !== 0){
     console.log(tahun + " adalah tahun kabisat");
   } 
   else {
     if (tahun %400 === 0){
      console.log(tahun + " adalah tahun kabisat" ); 
   }
    else {
       console.log(tahun+ " bukan tahun kabisat");
    }
   }
 }
  else {
    console.log('tahun' + tahun);
  }   