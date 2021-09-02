const costPrice = document.querySelector("#initial");
const quantityStocks = document.querySelector("#quantity");
const sellingPrice = document.querySelector("#current");
const showBtn = document.querySelector("#btn");
const outputDiv = document.querySelector("#output");

function calculateProfitAndLoss(initialPrice, currentPrice, quantity) {
  if (currentPrice > initialPrice) {
    var profit = ((currentPrice - initialPrice) * quantity).toFixed(2);
    var profitPercentage = (profit * 100).toFixed(2);
    showOutput(
      `Yay 🎉🥳, the profit is ${profit} and the percent is ${profitPercentage}%`,
      "r"
    );
  } else if (currentPrice < initialPrice) {
    var loss = ((initialPrice - currentPrice) * quantity).toFixed(2);
    var lossPercentage = (loss * 100).toFixed(2);
    showOutput(
      `Hey, the loss is ${loss} and the percent is ${lossPercentage}% 🙁`,
      "e"
    );
  } else if (currentPrice === initialPrice && quantity !== 0) {
    showOutput(`Hey congrats, you have neither profit nor loss! 😉`, "y");
  } else {
    showOutput(`Please Enter Valid Input`, "e");
  }
  console.log(initialPrice, currentPrice);
}

function showOutput(message, response) {
  outputDiv.innerText = message;
  if (response === "r") {
    outputDiv.style.color = "green";
  } else if (response === "e") {
    outputDiv.style.color = "red";
  } else {
    outputDiv.style.color = "inherit";
  }
}

function clickHandler(e) {
  if (
    costPrice.value === "" ||
    sellingPrice.value === "" ||
    quantityStocks.value === ""
  ) {
    alert("Please enter all the attributes!");
  } else {
    var initialPrice = Number.parseFloat(costPrice.value).toFixed(2);
    var currentPrice = Number.parseFloat(sellingPrice.value).toFixed(2);
    var quantity = Number.parseFloat(quantityStocks.value).toFixed(2);

    calculateProfitAndLoss(initialPrice, currentPrice, quantity);
  }
}

showBtn.addEventListener("click", clickHandler);
