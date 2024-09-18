const buttonContainer = document.getElementById('buttonContainer');
const priceContainer = document.getElementById('priceContainer');

// Set a price per item
const pricePerItem = 250;

document.getElementById('add').addEventListener('click', () => {
  const count = document.getElementById("buttonContainer").innerHTML.trim();
  const newCount = Number(count) + 1;
  
  document.getElementById("buttonContainer").innerHTML = newCount;

  // Update the price
  updatePrice(newCount);
});

document.getElementById('remove').addEventListener('click', () => {
  const count = document.getElementById("buttonContainer").innerHTML;
  if (Number(count) > 0) {
    const newCount = Number(count) - 1;
    buttonContainer.innerHTML = newCount;

    // Update the price
    updatePrice(newCount);
  }
});

// Function to update the price
function updatePrice(count) {
  const totalPrice = count * pricePerItem;
  priceContainer.innerHTML = `Pris: ${totalPrice} KR.`;
}
