// ALL DOM ELEMENTS WITH ELEMENT AT THE END OF THE NAME

let cartEL = document.querySelector('#cart tbody');
let calcEl = document.getElementById('calc');
let productEl = document.getElementsByClassName('product')[0];
let tbodyEl = document.getElementsByTagName('tbody')[0];
let createBtnEl = document.getElementById('create');
var deleteBtnEl = document.querySelectorAll('.btn-delete');



for(let i=0; i<deleteBtnEl.length; i++){
  deleteBtnEl[i].onclick = deleteProduct;
}



function updateSubtot(productEl) {
  // Iteration 1.1
  let priceUnit = productEl.querySelectorAll('.pu span')[0].innerText;
  let quantity = productEl.querySelectorAll('input')[0].value;

  return priceUnit * quantity
}


  // Don't actually need to write the 'event' parameter here:
function calcAllHandler(event) {
  // Iteration 1.2

  let totalPrice = 0;
  
  //HENDRIK'S
  //let allProductElements = document.getElementsByClassName('product')

  //for (let i=0; i < allProductElements.length; i++) {

    //updateSubtot(allProductElements[i]);

  for (let i=0; i < document.getElementsByClassName('product').length; i++) {


    let product = document.getElementsByClassName('product')[i];
    //console.log("product is " + product)

    let subTotal = document.querySelectorAll('.subtot span')[i];
    //console.log("subTotal is " + subTotal)

    subTotal.innerText = updateSubtot(product)
    //console.log("subTotal is now " + subTotal)

    //add up all subTotals
    totalPrice += Number(subTotal.innerText)
    document.querySelectorAll("h2 span")[0].innerText = totalPrice
    //console.log("totalPrice returned is " + totalPrice)


  }

}
calcEl.onclick = calcAllHandler;




//HENDRIK'S SOLUTION
/*
let $calc = document.getElementById('calc');
function calcAllHandler() {
  let allProductElements = document.getElementsByClassName('product')
  let price = allProductElements[0].querySelector('.pu span').innerText
  let qty = allProductElements[0].querySelector('input').value
  allProductElements[0].querySelector('.subtot span').innerText = Number(price) * Number(qty)
  let price1 = allProductElements[0].querySelector('.pu span').innerText
  let qty1 = allProductElements[1].querySelector('input').value
  allProductElements[1].querySelector('.subtot span').innerText = Number(price1) * Number(qty1)
}
$calc.onclick = calcAllHandler;
*/


//Ian's code -- WITH REMOVE CHILD*****
// function deleteProduct(){

//   let activeButton = event.currentTarget;
//   let parentProduct = activeButton.parentNode.parentNode;
//   tbody.removeChild(parentProduct);

// }


function deleteProduct(event){

  event.currentTarget.parentNode.parentNode.remove()

}





function createProduct(event){


  let inputProductName = document.getElementsByClassName('input-text')[0].value;
  console.log(inputProductName)

  let inputPrice = document.getElementsByClassName('input-price')[0].value;
  console.log(inputPrice)


  // create a new product tr

  let newProductEl = tbodyEl.querySelector(".product").cloneNode(true)
  tbodyEl.appendChild(newProductEl)

  newProductEl.querySelectorAll('.pu span')[0].innerText = inputPrice
  newProductEl.querySelectorAll('.product span')[0].innerText = inputProductName
  newProductEl.querySelectorAll('input')[0].value = 0
  newProductEl.querySelector('.btn-delete').onclick = deleteProduct;
  
  
}

createBtnEl.onclick = createProduct;