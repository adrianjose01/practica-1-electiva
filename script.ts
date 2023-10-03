const nombre = document.getElementById("name")! as HTMLInputElement;
const tipo = document.getElementById("type")! as HTMLSelectElement;
const cantidad = document.getElementById("amount")! as HTMLInputElement;
const currentBalance = document.getElementById("balances")! as HTMLSpanElement;
const container = document.getElementById("tracker")! as HTMLDivElement;
const form = document.getElementById("form")! as HTMLFormElement;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let html: string;
  if (tipo.value === "1") {
    html = `<div class="transactions-tracker bg-green">
    <p>${nombre.value}</p>
    <div class="transactions-tracker__expense-delete"">
      <span>DOP ${cantidad.value}</span>
      <button class="delete-btn">
        <img src="./icons8-trash-can.svg" alt="delete icon" />
      </button>
    </div>
  </div>`;
    currentBalance.innerText = (
      +currentBalance.innerText + +cantidad.value
    ).toString();
  } else {
    html = ` <div class="transactions-tracker bg-red">
    <p>${nombre.value}</p>
    <div class="transactions-tracker__expense-delete">
      <span>DOP ${cantidad.value}</span>
      <button class="delete-btn">
        <img src="./icons8-trash-can.svg" alt="delete icon" />
      </button>
    </div>
  </div>`;
    currentBalance.innerText = (
      +currentBalance.innerText - +cantidad.value
    ).toString();
  }
  container.insertAdjacentHTML("beforeend", html);
});
