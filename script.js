const MAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CF_REGEX = /^[A-Z]{6}[0-9]{2}[A-Z][0-9]{2}[A-Z][0-9]{3}[A-Z]$/i;
const IVA_REGEX = /^[0-9]{11}$/;

const DEF_COLOR = "#ffffff"

function optim(id, value) {
  if (value) {
    document.getElementById(id).style.border = "2px solid #4B6043";
    document.getElementById(id).style.backgroundColor = "#95BB72";
  } else if (!value) {
    document.getElementById(id).style.border = "2px solid #A52A2A";
    document.getElementById(id).style.backgroundColor = "#FFC0C0";
  }
}

function checkMail(id) {
  let mail = document.getElementById(id).value;
  if (MAIL_REGEX.test(mail)) {
    optim(id, true);
    document.getElementById("emailError").style.display = "none";
  } else {
    optim(id, false);
    document.getElementById("emailError").style.display = "block";
  }
}

function checkCf(id) {
  let cf = document.getElementById(id).value;
  console.log(cf);
  if (CF_REGEX.test(cf)) {
    optim(id, true);
    document.getElementById("cFiscError").style.display = "none";
  } else {
    optim(id, false);
    document.getElementById("cFiscError").style.display = "block";
  }
}

function checkIva(id) {
  let iva = document.getElementById(id).value;
  console.log(iva);
  if (IVA_REGEX.test(iva)) {
    optim(id, true);
    document.getElementById("ivaError").style.display = "none";
  } else {
    optim(id, false);
    document.getElementById("ivaError").style.display = "block";
  }
}



// function checkHobbies() {
//     let check = getElementsByClassName("hobbyCheckbox");
//     let count = 0;
//     for (let i = 0; i < check.length; i++) {
//         if (check[i].checked) {
//             count++;
//         }
//     }
//     if (count >= 2) {
//         return true;
//     } else {
//         return false;
//     }
// }

