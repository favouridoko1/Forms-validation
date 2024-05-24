const form = document.querySelector("form");
const names = document.getElementsByTagName("input");
const firstName = document.querySelector(".firstname");
const lastName = document.querySelector(".lastname");
const othersName = document.querySelector(".othersname");
const email = document.querySelector(".email");
const phone = document.querySelector(".phone");
const gender = document.querySelector(".gender");

function handleSubmit(e) {
  e.preventDefault();
  let letters = /^[A-Za-z]+$/;

  const fName = firstName.value.match(letters) && firstName.value.length > 1;
  const lName = lastName.value.match(letters) && lastName.value.length > 1;

  if (fName && lName) {
    console.log({
      firstName: firstName.value,
      lastName: lastName.value,
      othersName: othersName.value,
      email: email.value,
      phone: phone.value,
      gender: gender.value,
    });
  } else {
    console.log("an error occured");
    alert("Name must be letter, and not less than 1 character");
  }
}

form.addEventListener("submit", handleSubmit);
