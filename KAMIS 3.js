var arr = ["0001","Roman Alamsyah","Bandar Lampung","21/05/1989","Membaca"];
arr.splice(0,4,"Roman Alamsyah Elsharawy","Provinsi Bandar Lampung","21/05/1989","pria","SMA Internasional Metro");

console.log(arr);

var datearr = arr[3].split("/");
switch (datearr[1]) {
	case "01":
		console.log("januari");
		break;
		case "02":
		console.log("februari");
		break
		case "03":
		console.log("maret");
		break;
		case "04":
		console.log("april");
		break;
		case "05":
		console.log("mei");
		break;
		case "06":
		console.log("juni");
		break;
		case "07":
		console.log("juli");
		break;
		case "08":
		console.log("agustus");
		break;
		case "09":
		console.log("september");
		break;
		case "10":
		console.log("oktober");
		break;
		case "11":
		console.log("november");
		break;
		case "12":
		console.log("desember");
		break;
	
}

console.log(datearr.sort().reverse());
console.log(datearr.join("-"));
