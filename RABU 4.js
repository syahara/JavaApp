/* TENTUKAN `total` sama dengan 0
FOR setiap pertambahan 1 `index` dari 1 sampai dengan 100:
    IF `index` adalah ganjil:
        TAMBAHKAN `total` dengan `index`
    ELSE IF `index` adalah genap:
        KURANGI `total` dengan `index`
    ENDIF
ENDFOR
TULISKAN "TOTAL: `total`" */
var tugas1 = "TUGAS 1"
console.log(tugas1);

total = 0;
for (index = 1; index <= 100; index++) {
    if (index % 2 !== 0) {
        total = total + index;
    } else if (index % 2 === 0) {
        total = total - index;
    }
}
console.log('TOTAL:' + total);



/* SIMPAN karakter kosong pada `pagar`
FOR setiap pertambahan 1 pada `index1` dari 1 sampai 10:
    FOR setiap pertambahan 1 pada `index2` dari 0 sampai 10:
        TAMBAHKAN `pagar` dengan karakter "#"
    ENDFOR
    TULISKAN `pagar`
    SIMPAN karakter kosong pada `pagar`
ENDFOR */

var tugas2 = "TUGAS 2"
console.log(tugas2);

var pagar = "";
for (index = 1; index < 10; index++) {
    for (index2 = 0; index2 < 10; index2++) {
        pagar = pagar + "#";
    }
    console.log(pagar);
    pagar = "";
}

/*  SIMPAN karakter kosong pada `bintang`
FOR setiap pertambahan 1 pada `index1` dari 1 sampai 10:
    FOR setiap pertambahan 1 pada `index2` dari 0 sampai `index1`:
        TAMBAHKAN `bintang` dengan karakter "*"
    ENDFOR
    TULISKAN `bintang`
    SIMPAN karakter kosong pada `bintang`
ENDFOR */

var tugas3 = "TUGAS 3"
console.log(tugas3);

var bintang = "";
for (index = 1; index < 10; index++) {
    for (index2 = 0; index2 < index; index2++) {
        bintang = bintang + "*";
    }
    console.log(bintang);
    bintang = "";
}



























