const form = document.getElementById("message-form");
      
form.addEventListener("submit", function(event) {
  event.preventDefault();
  if(validateForm()) {
    updateOutput();
  }
});

function validateForm() {
  const name = document.forms["message-form"]["full-name"].value;
  const birthDate = document.forms["message-form"]["birth-date"].value;
  const gender = document.forms["message-form"]["gender"].value;
  const messages = document.forms["message-form"]["messages"].value;

  if (name == "") {
    alert("Nama harus diisi");
    return false;
  }

  if (birthDate == "") {
    alert("Tanggal Lahir harus diisi");
    return false;
  }

  if (gender == "") {
    alert("Jenis Kelamin harus dipilih");
    return false;
  }

  if (messages == "") {
    alert("Pesan harus diisi");
    return false;
  }

  return true;
}

function updateOutput() {
  const outputName = document.getElementById("sender-full-name");
  const outputBirthDate = document.getElementById("sender-birth-date");
  const outputGender = document.getElementById("sender-gender");
  const outputMessage = document.getElementById("sender-message");

  outputName.innerHTML = document.forms["message-form"]["full-name"].value;
  outputBirthDate.innerHTML = document.forms["message-form"]["birth-date"].value;
  outputGender.innerHTML = document.forms["message-form"]["gender"].value;
  outputMessage.innerHTML = document.forms["message-form"]["messages"].value;
}
