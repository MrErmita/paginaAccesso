
const NAME_REGEX = "^[a-zA-Z]+$";
const PASSWORD_REGEX = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$";
//PASSWORD_REGEX needs at least 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character
const PHONE_REGEX = "^[0-9]{10}$";
const CF_REGEX = "^[A-Z]{6}[0-9]{2}[A-Z][0-9]{2}[A-Z][0-9]{3}[A-Z]$" //regex codice fiscale

// function checkMail() {
//     let mail = document.getElementById("mailIn").value;
//     console.log(mail);
//     if(!MAIL_REGEX.match(mail)) {
//         document.getElementById("mailIn").style.border = "2px solid red";
//     } else {
//         document.getElementById("mailIn").style.borderColor = "black";
//     }
// }
