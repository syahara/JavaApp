var tanggal = 27; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan = 6;// assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun = 1992; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

switch (true){
  case tanggal < 30 && tanggal > 0:
    console.log(tanggal)
    break
  default:
    console.log("salah")
}

switch (bulan) {
  case 1:
    console.log("januari")
    break
  case 2:
    console.log("februari")
    break
  case 3:
    console.log("maret")
    break
  case 4:
    console.log("april")
    break
  case 5:
    console.log("mei")
    break
  case 6:
    console.log("juni")
    break
  case 7:
    console.log("juli")
    break
  case 8:
    console.log("agustus")
    break
  case 9:
    console.log("september")
    break
  case 10:
    console.log("oktober")
    break
  case 11:
    console.log("November")
    break
  case 12:
    console.log("Desember")
  default:
    console.log("salah")
}

switch (true){
  case tahun < 2200 && tahun > 1900:
    console.log(tahun)
    break
  default:
    console.log("salah")
}

       