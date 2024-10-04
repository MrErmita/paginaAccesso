const MAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CF_REGEX = /^[A-Z]{6}[0-9]{2}[A-Z][0-9]{2}[A-Z][0-9]{3}[A-Z]$/i;
const IVA_REGEX = /^[0-9]{11}$/;

function optim(id, value) {
  if (value) {
    document.getElementById(id).style.border = "2px solid green";
  } else if (!value) {
    document.getElementById(id).style.border = "2px solid red";
  }
}

function checkMail(id) {
  let mail = document.getElementById(id).value;
  if (MAIL_REGEX.test(mail)) {
    optim(id, true);
  } else {
    optim(id, false);
  }
}

function checkCf(id) {
  let cf = document.getElementById(id).value;
  console.log(cf);
  if (CF_REGEX.test(cf)) {
    optim(id, true);
  } else {
    optim(id, false);
  }
}

function checkIva(id) {
  let iva = document.getElementById(id).value;
  console.log(iva);
  if (IVA_REGEX.test(iva)) {
    optim(id, true);
  } else {
    optim(id, false);
  }
}

