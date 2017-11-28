/*
Anda tinggal di kawasan percetakan Jakarta Pusat, dan mengikuti program Bootcamp di daerah kebayoran lama.
Selama anda mengikuti Bootcamp, ada tiga pilihan transportasi menuju kebayoran, yaitu Ojek Online, TransJakarta, dan KRL. Dengan ketentuan sebagai berikut
1. Jika naik OjekOnline harga perkm adalah Rp.2000
2. Jika naik TransJakarta harga nya adalah Rp.3500 sekali jalan, 
3. Jika naik KRL harga sekali jalan adalah Rp.4500, namun jarak dari rumah ke stasiun terdekat cukup jauh, dan harus naik gojek dengan jarak tempuh 4,2km 

Tentukan biaya perbulan yang anda keluarkan untuk biaya transportasi! */
var jenisTransportasi = ["Ojek Online", "KRL", "TransJakarta"];
console.log("Jenis transportasi yang tersedia adalah " + jenisTransportasi.join("-"));


var uangBulanan = 5000000;
console.log("Jika uang perbulan " + uangBulanan);

function Duit(uangBulanan) {
    if (uangBulanan >= 5000000) {
        return 'Ojol';
    } else if (uangBulanan >= 4000000) {
        return 'KRL';
    } else if (uangBulanan >= 2000000) {
        return 'TJ';
    } else if (uangBulanan < 500000) {
        return 'kasian banget lau :(';
    }
}
console.log(Duit(uangBulanan));
console.log("maka menggunakan transportasi " + (Duit(uangBulanan)));

var jarak = "17";
var biaya = "3500";
var BiayaTransport = jarak * biaya;
var biayaTransportIncrement = 0;


switch (Duit(uangBulanan)) {
    case "Ojol":
        console.log("Biaya perjalanan : " + BiayaTransport);
        for (var fare = 1; fare <= 30; fare++) {
            biayaTransportIncrement += BiayaTransport;
            console.log('Biaya perjalanan hari ke ' + fare + " Sebesar " + (biayaTransportIncrement));
            uangBulanan = uangBulanan - BiayaTransport;
        }
        console.log('Sisa Uang : ' + uangBulanan);
        break;
    case "TJ":
        console.log("Biaya perjalanan : " + 3500 + " dan harus jalan kaki 500 m");
        for (var fare = 1; fare <= 30; fare++) {
            biayaTransportIncrement += 3500;
            console.log('Biaya perjalanan hari ke ' + fare + " Sebesar " + (biayaTransportIncrement));
            uangBulanan = uangBulanan - 3500;
        }
        console.log('Sisa Uang : ' + uangBulanan);
        break;
    case "KRL":
        console.log("Biaya perjalanan : " + ((1, 2 * biaya) + 4500) + " dan harus naik gojek dahulu");
        for (var fare = 1; fare <= 30; fare++) {
            biayaTransportIncrement += ((1, 2 * biaya) + 4500);
            console.log('Biaya perjalanan hari ke ' + fare + " Sebesar " + (biayaTransportIncrement));
            uangBulanan = uangBulanan - ((1, 2 * biaya) + 4500);
        }
        console.log('Sisa Uang : ' + uangBulanan);
        break;
    case "kasian banget lau :(":
        console.log("Biaya perjalanan : " + "gak boleh pelit wooy")
}



