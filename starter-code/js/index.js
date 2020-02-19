var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');


let $product = document.querySelectorAll('.product')[0]


function updateSubtot($product) {
  // Iteration 1.1
  let priceUnit = $product.querySelectorAll('.pu span')[0].innerText;
  let quantity = $product.querySelectorAll('input')[0].value;

//  console.log(priceUnit)
//  console.log(quantity)

  return priceUnit * quantity
}

//updateSubtot($product)


function calcAll(event) {
  // Iteration 1.2

  //console.log("event.currentTarget", event.currentTarget)

  
  let totalPrice = Number(document.querySelectorAll('h2 span')[0].innerText);
  //console.log(typeof totalPrice)
  //console.log(totalPrice)


//  for (let i=0; i < 2; i++) {

  for (let i=0; i < document.querySelectorAll('.product')[0].length; i++) {


    let $product = document.querySelectorAll('.product')[i];
    console.log("product is " + $product)

    let subTotal = $product.querySelectorAll('.pu span')[i].innerText;
    console.log("subTotal is " + subTotal)
    
    subTotal = updateSubtot($product)
    console.log("subTotal is now " + subTotal)

      //add up all subTotals

      totalPrice = subTotal
      console.log("totalPrice returned is " + totalPrice)

   
  }



}
$calc.onclick = calcAll;

