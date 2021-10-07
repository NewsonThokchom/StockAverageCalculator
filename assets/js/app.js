function calculate() {
  let holdingQty = document.getElementById("holdingQty").value;
  let holdingAvgPrice = document.getElementById("holdingAvgPrice").value;
  let newQty = document.getElementById("newQty").value;
  let newMarketPrice = document.getElementById("newMarketPrice").value;

  if (holdingQty == "") {
    alert("Holding quantity field is required.");
    return;
  }

  if (holdingAvgPrice == "") {
    alert("Holding price field is required.");
    return;
  }

  if (newQty == "") {
    alert("New quantity field is required.");
    return;
  }

  if (newMarketPrice == "") {
    alert("New Market Price field is required.");
    return;
  }

  let totalInvestedAmount =
    holdingQty * holdingAvgPrice + newQty * newMarketPrice;

  let totalQtyResult = parseInt(holdingQty) + parseInt(newQty);
  //   let totalQtyResult = +holdingQty + +newQty;

  let avgPriceResult = totalInvestedAmount / totalQtyResult;

  console.log(avgPriceResult);

  document.getElementById("totalQty").innerHTML = totalQtyResult + " qty";
  document.getElementById("averagePrice").innerHTML =
    "Rs. " + avgPriceResult.toFixed(2);
  document.getElementById("totalInvestedAmount").innerHTML =
    "Rs. " + totalInvestedAmount.toFixed(2);
}

function clearAll() {
  document.getElementById("holdingQty").value = "";
  document.getElementById("holdingAvgPrice").value = "";
  document.getElementById("newQty").value = "";
  document.getElementById("newMarketPrice").value = "";

  document.getElementById("totalQty").innerHTML = "0 qty";
  document.getElementById("averagePrice").innerHTML = "Rs. 0";
  document.getElementById("totalInvestedAmount").innerHTML = "Rs. 0";
}
