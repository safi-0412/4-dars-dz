


const ism = prompt("Ismingizni kiriting")
const harif = prompt("Bironta harif kiriting")

if (ism.toLowerCase().includes(harif.toLowerCase())) {
  alert(` ${ism} isimning ichida  "${harif}" harif mavjud `);
} 
else {
  alert(` ${ism} isimning ichida "${harif}" harif mavjud emas`);
}