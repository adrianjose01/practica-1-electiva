var nombre = document.getElementById("name");
var tipo = document.getElementById("type");
var cantidad = document.getElementById("amount");
var currentBalance = document.getElementById("balances");
var container = document.getElementById("tracker");
var form = document.getElementById("form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var html;
    if (tipo.value === "1") {
        html = "<div class=\"transactions-tracker bg-green\">\n    <p>".concat(nombre.value, "</p>\n    <div class=\"transactions-tracker__expense-delete\"\">\n      <span>DOP ").concat(cantidad.value, "</span>\n      <button class=\"delete-btn\">\n        <img src=\"./icons8-trash-can.svg\" alt=\"delete icon\" />\n      </button>\n    </div>\n  </div>");
        currentBalance.innerText = (+currentBalance.innerText + +cantidad.value).toString();
    }
    else {
        html = " <div class=\"transactions-tracker bg-red\">\n    <p>".concat(nombre.value, "</p>\n    <div class=\"transactions-tracker__expense-delete\">\n      <span>DOP ").concat(cantidad.value, "</span>\n      <button class=\"delete-btn\">\n        <img src=\"./icons8-trash-can.svg\" alt=\"delete icon\" />\n      </button>\n    </div>\n  </div>");
        currentBalance.innerText = (+currentBalance.innerText - +cantidad.value).toString();
    }
    container.insertAdjacentHTML("beforeend", html);
});
