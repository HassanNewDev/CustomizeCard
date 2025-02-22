// Function to update the card with user input
function updateCard() {
  const frontText = document.getElementById("frontText").value;
  const insideText = document.getElementById("insideText").value;

  document.getElementById("frontDisplay").innerText = frontText;
  document.getElementById("insideDisplay").innerText = insideText;
}

// Function to save the card as an image
function saveCard() {
  const card = document.getElementById("card");

  html2canvas(card).then((canvas) => {
    const link = document.createElement("a");
    link.download = "custom-card.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
}