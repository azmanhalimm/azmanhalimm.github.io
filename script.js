const bithYear = 2000;
const ageresult = document.getElementById("ageresult");

const today = new Date();
const currentYear = today.getFullYear();
const age = currentYear - bithYear;
ageresult.textContent = age;