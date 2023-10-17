var playerNameInput = document.getElementById("playerName");
const nameError = document.querySelector(".name_error");
const submitButton = document.querySelector("#submitName");

submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  const playerName = playerNameInput.value.trim();

  if (playerName === "" || playerName === null) {
    playerNameInput.style.border = "2px solid #ff5476";
    nameError.style.display = "block";
  } else {
    nameError.style.display = "none";
    window.location.href = `ready.html?playerName=${encodeURIComponent(
      playerName
    )}`;
  }
});

// Displays text saying 'Correct Answer' or 'Wrong Answer' depending on the selected answer by the player

// const answerStatus = document.getElementById("answerStatus");

// answerStatus.addEventListener("click", function (event) {
//   event.preventDefault();

//   if (answer is correct) {
//     answerStatus.style.color = "green";
//     answerStatus.innerText = "Correct Answer";
//   } else {
//     answerStatus.style.color = "red";
//     answerStatus.innerText = "Wrong Answer";
//   }
// });
