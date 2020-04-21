// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  // create two variables
  const price = product.querySelector(".price span");
  const priceValue = Number(price.innerText);

  const quantity = product.querySelector(".quantity input");
  const quantityValue = quantity.valueAsNumber; 
  
  //Use the values you extracted to calculate the subtotal price
  const subtotal = priceValue * quantityValue;
  // Set the subtotal price to the corresponding DOM element
  const $subtotal = product.querySelector(".subtotal span");
  $subtotal.innerText = subtotal;

  return subtotal // to be available to the rest of code
}

function calculateAll() {
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  // ITERATION 2
  const allProducts = document.querySelectorAll('.product');
  let total = 0; 
  
  for(let i = 0; i < allProducts.length; i++) {
    total = total + updateSubtotal(allProducts[i]); // allProducts[i] ---> this will be every single product
  }
  
  // ITERATION 3
  //... your code goes here
  const $total = document.querySelector("#total-value span"); 

  $total.innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
