// ALL DOM ELEMENTS WITH ELEMENT AT THE END OF THE NAME

let cart = document.querySelector('#cart tbody');
let calc = document.getElementById('calc');
let product = document.getElementsByClassName('product')[0];
let deleteButton1 = document.querySelectorAll('.btn-delete')[0]
let deleteButton2 = document.querySelectorAll('.btn-delete')[1]
//let deleteButton3 = document.querySelectorAll('.btn-delete')[2]
let createBtn = document.getElementById('create');





function updateSubtot(product) {
  // Iteration 1.1
  let priceUnit = product.querySelectorAll('.pu span')[0].innerText;
  let quantity = product.querySelectorAll('input')[0].value;

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
calc.onclick = calcAllHandler;




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





function deleteProduct(event){
  //event.currentTarget
  //console.log("event.currentTarget", event.currentTarget)

  //let productTr = event.currentTarget.parentNode.parentNode
  //console.log("productTr is " + productTr)

  //productTr.remove()

  event.currentTarget.parentNode.parentNode.remove()

}

deleteButton1.onclick = deleteProduct;
deleteButton2.onclick = deleteProduct;
//deleteButton3.onclick = deleteProduct;





function createProduct(event){


  let inputProductName = document.getElementsByClassName('input-text')[0].value;
  console.log(inputProductName)

  let inputPrice = document.getElementsByClassName('input-price')[0].value;
  console.log(inputPrice)


  // create a new product tr

  let tbody = document.getElementsByTagName('tbody')[0];
  let newProductElement = tbody.querySelector(".product").cloneNode(true)
  tbody.appendChild(newProductElement)

  newProductElement.querySelectorAll('.pu span')[0].innerText = inputPrice
  newProductElement.querySelectorAll('.product span')[0].innerText = inputProductName
  newProductElement.querySelectorAll('input')[0].value = 0
  
  
}

createBtn.onclick = createProduct;