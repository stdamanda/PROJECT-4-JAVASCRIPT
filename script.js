//akan ditampilkan di depan
//document.writeln("Hello World")
//akan ditampilkan dibelakang, atau di inspect --> console
console.log("Hai");
/**
 * ini komen lebih dari 1
 * line
 */

/**
 * TIPE DATA  :
 *
 * 1. Number
 * 2. string
 * 3. Boolean
 * 4. Object
 * 5. Function
 */

// 1. Number
console.log(2 + 2);
console.log(2.3); //Kalau desimal pake .

// 2. String
console.log("Hallo ...");

// 3. Tipe data boolean
console.log(1 == 2);
console.log(true);
console.log(false);

/**
 * VARIABLE --> let, const
 */
var fullname = "Amanda";
console.log(fullname);

const name1 = "Jhon Doe";
console.log(name1);
//name1 = "nama baru"
//console.log(name1)

let names = "Richard Roe";
console.log(names);
names = "baru";
console.log(names);

/**
 * OPERATOR ARITMATIKA
 */

// 1. Penjumlahan
let result = 3 + 5;
console.log(result);

// 2. Pengurangan
let resultPengurangan = 10 - 8;
console.log(resultPengurangan);

// 3. Perkalian
let resultPerkalian = 10 * 2;
console.log(resultPerkalian);

// 4. Pembagian
let resultPembagian = 10 / 2;
console.log(resultPembagian);

// 5. Modulus
let resultModulus = 10 % 3;
console.log(resultModulus);

// const number1 = prompt('Number 1')
// const number2 = prompt('Number 2')
// const result_ = number1/number2
// alert("Hasil bagi : " + result_)

/**
 * OPERATOR PERBANDINGAN
 */
let hasil = 5 == 5; //true
console.log(hasil);

let hasil2 = 5 > 3; //true
console.log(hasil2);

let hasil3 = 5 < 3; //false
console.log(hasil3);

let hasil4 = 5 === "5";
console.log(hasil4);

/**
 * OPERATOR LOGIKA
 */
const nilaiUjian = 70;
const nilaiAbsen = 80;

const lulusUjian = nilaiUjian > 75;
const lulusAbsen = nilaiAbsen > 75;

const lulus = lulusUjian && lulusAbsen;
console.log("Hasil Ujian : ", lulus);

const lulus2 = lulusUjian || lulusAbsen;
console.log("Hasil Ujian : ", lulus2);

/**
 * STRING TEMPLATE
 */
const nameBaru = "Amanda Nabila Hasya";
const value = 80;
console.log("Nama : " + nameBaru + " , Value : " + value);
console.log(`Nama : ${nameBaru} 
Value =  ${value}`);

/**
 * ARRAY
 */
const cars = ["Ayla", "Agya", "Calya", "Avanza"];
const motorCycle = ["Vario", "Beat", "Scoopy", "NMax"];
console.log(cars.length);
console.log("Data : ", cars);
console.log("Data ke-1 = ", cars[0]);
console.table(cars);

//Namabhin data di array
cars.push("Kijang", "BMW", "Pajero");
console.log(cars);

//GABUNGIN ATAU CONCAT
const group = cars.concat(motorCycle);
console.table(group); //Jadi nanti array motorcycle ditambahin setelah array cars

/**
 * LOOP
 */

//FOR
for (i = 0; i < cars.length; i++) {
  document.writeln(cars[i] + "<br>");
  console.log(cars[i] + "<br>");
}

for (i = 0; i < cars.length; i+= 2) {
  document.writeln(cars[i] + "<br>");
  console.log(cars[i] + "<br>");
}

document.writeln("-----------------------------" + '<br>')
//WHILE
var u = 0;
while(u < cars.length){
    document.writeln(`Loop : ${cars[u] + '<br>'}`)
    u++
}

const food = [{
    data : 1,
    rasa : 'Manis',
    warna : 'Hijau',
    bentuk : 'Bulat'
},
{
    data : 2,
    rasa : 'Pahit',
    warna : 'Hitam',
    bentuk : 'Oval'
},
{
    data : 3,
    rasa : 'Asam',
    warna : 'Merah',
    bentuk : 'Kotak'
}]

document.writeln("-----------------------------" + '<br>')


food.forEach(foods => {
    for(let value in foods){
        document.writeln(`${foods[value]}  </br>`)
    }
})
document.writeln("-----------------------------" + '<br>')

/**
 * CONDITIONAL
 */
const score = 71
if(score < 60){
    document.writeln('TIDAK LULUS <br>')
}else if(score >= 60 && score <= 70){
    document.writeln('CUKUP <br>')
}
else{
    document.writeln('LULUS <br>')
}

document.writeln("-----------------------------" + '<br>')
const hasilUjian = score > 70 ? 'LULUS' : (score < 60 ? 'TIDAK LULUS' : 'CUKUP')
document.writeln(hasilUjian)

document.writeln('<br>' + "-----------------------------" + '<br>')
const role = 'Programer'
switch(role){
    case 'Programer' :
        document.writeln('Coding')
        break
    case 'UI/UX' :
        document.writeln('Design')
        break
    case 'Product Manager' :
        document.writeln('Lead')
        break
    default : 
        document.writeln('Kerja')
}

document.writeln('<br>' + "-----------------------------" + '<br>')

/**
 * FUNCTION
 */

//DECALATION
function user(nama, email){
    document.writeln(`Nama : ${nama} , Email : ${email}`)
}

user('dwi', 'dwi@gmail.com')

document.writeln('<br>' + "-----------------------------" + '<br>')

//EXPRESSION
const user6 = function(nama , email){
    const result4 = `Nama : ${nama}, Email : ${email}`
    return result4
}

const amanda = user6('Amanda' , 'amanda@gmail.com')
document.writeln(amanda)
document.writeln('<br>' + "-----------------------------" + '<br>')

const user7 = (nama, email) => {
    const result5 = `Nama : ${nama}, Email : ${email}`
    return result5
}
document.writeln(user7('Amanda' , 'amanda@gmail.com'))

document.writeln('<br>' + "-----------------------------" + '<br>')

//BMI CALC
// const bmiMan = () => {
//     const berat = parseFloat(document.getElementById("berat".value))
//     const tinggi = parseFloat(document.getElementById("tinggi".value))
//     console.log(berat)
//     const bmiManCount = berat/(tinggi*tinggi)
//     let indicator 
//     console.log(bmiManCount)

//     document.getElementById("resultBMI"), innerHtml = `${indocator}`

    // if(bmiManCount < 17){
    //     indicator = "Sangat Kurus"
    // } else if(bmiManCount >= 17 && bmiManCount <= 18.5){
    //     indicator = "Kurus"
    // }else if(bmiManCount > 18.5 && bmiManCount <= 25){
    //     indicator = "Normal"
    // }else if(bmiManCount > 25 && bmiManCount <= 27){
    //     indicator = "Gemuk"
    // } else{
    //     indicator = "Over Weight"
    // }
//     return indicator

// }
//document.writeln(bmiMan(70, 1.7))

function bmiMan(){
    var bmiMan
    var weight = parseInt(document.getElementById("berat").value)
    var height = parseInt(document.getElementById("tinggi").value)

    bmiManCount = (weight / Math.pow((height/100),2)).toFixed(2)

    if(bmiManCount < 17){
        indicator = "Sangat Kurus"
    } else if(bmiManCount >= 17 && bmiManCount <= 18.5){
        indicator = "Kurus"
    }else if(bmiManCount > 18.5 && bmiManCount <= 25){
        indicator = "Normal"
    }else if(bmiManCount > 25 && bmiManCount <= 27){
        indicator = "Gemuk"
    } else{
        indicator = "Over Weight"
    }

    document.getElementById("resultBmi").textContent = bmiManCount
    document.getElementById("resultIndicator").textContent = indicator
}