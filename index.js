// console.log("Tes koneksi index js");
// console.log("tes");

// let cuaca = "cerahh";

// if (cuaca === "cerah") {
//   console.log("pergi keluar");
// } else {
//   console.log("dirumah aja");
// }

// contoh if else
// let lapar = false;
// if (lapar) {
//   console.log("makan");
// } else {
//   console.log("berhenti makan");
// }

// contoh if else if
// let stopLight = "mati lampu";

if (stopLight === "green") {
  console.log("boleh lewat");
} else if (stopLight === "yellow") {
  console.log("Hati hati");
} else if (stopLight === "red") {
  console.log("tidak boleh lewat");
} else {
  console.log("Super hati hati ketika lewat");
}

// contoh default value
// let lapar;
// if (lapar) {
//   lapar = console.log("makan");
// } else {
//   lapar = console.log("ngemil");
// }

// contoh switch case
let stopLight = "red";
switch (stopLight) {
  case "green":
    console.log("boleh lewat");
    break;
  case "yellow":
    console.log("Hati hati");
    break;
  case "red":
    console.log("tidak boleh lewat");
    break;
  default:
    console.log("Super hati hati ketika lewat");
}

// contoh ternary
let stopLight = "yellow";

stopLight === "green"
  ? console.log("boleh lewat")
  : stopLight === "yellow"
  ? console.log("Hati hati")
  : stopLight === "red"
  ? console.log("tidak boleh lewat")
  : console.log("Super hati hati ketika lewat");
