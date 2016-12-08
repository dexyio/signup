var userid = document.getElementById("userid"),
  password = document.getElementById("password"),
  confirm_password = document.getElementById("confirm_password"),
  singup = document.getElementById("signup");

function validatePassword() {
  if (password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

function onclickSignup() {
  redirect_url = "http://www.dexy.io/signup/create_account/" + userid.value + "/" + password.value;
  window.location.href = redirect_url;
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;
signup.onclick = onclickSignup;

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

$(window, document, undefined).ready(function() {
    var head = document.getElementById("head");
    var email = getUrlParameter('email');
    head.innerHTML = "New account for '" + email + "'";
});
