const addbtn = document.querySelector(".add-btn");
let count = 1;

addbtn.onclick = () => {
  const table = document.querySelector(".table");

  const inputName = document.querySelector("#input-name");
  const nameValue = inputName.value;

  const inputAge = document.querySelector("#input-age");
  const ageValue = inputAge.value;

  const inputAddress = document.querySelector("#input-address");
  const addressValue = inputAddress.value;

  if (nameValue === "" || ageValue === "" || addressValue === "") {
    alert("Please fill the blank");
    return;
  }

  table.innerHTML += `
    <tr>
        <td>${count}</td>
        <td>${nameValue}</td>
        <td>${ageValue}</td>
        <td>${addressValue}</td>
    </tr>`;

  count++;

  inputName.value = "";
  inputAge.value = "";
  inputAddress.value = "";
};
