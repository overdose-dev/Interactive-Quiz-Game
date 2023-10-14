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
