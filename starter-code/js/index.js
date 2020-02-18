var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');

let product = document.querySelectorAll('.product')

function updateSubtot(product) {
  // Iteration 1.1
  let priceUnit = document.getElementsByTagName('span')[1].innerText;
  let productQuantity = document.querySelectorAll('input')[0].value;
  console.log(priceUnit)

  return priceUnit * productQuantity
}

function calcAll() {
  // Iteration 1.2

  //for (let i=0;i<2;i++) {

  let subTotal = document.getElementsByTagName('span')[0];


  subTotal.innerText = updateSubtot(product)
  console.log(subTotal)

  //add up all subTotals
  //return in Total
  //}
}
$calc.onclick = calcAll;