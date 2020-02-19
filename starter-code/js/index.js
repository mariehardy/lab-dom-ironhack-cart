let cart = document.querySelector('#cart tbody');
let calc = document.getElementById('calc');

//let deleteButtons = document.querySelectorAll('.btn-delete')
//console.log(deleteButtons)
//console.log(deleteButtons[1])

let deleteButton1 = document.querySelectorAll('.btn-delete')[0]
console.log(deleteButton1)

let deleteButton2 = document.querySelectorAll('.btn-delete')[1]
console.log(deleteButton2)



function updateSubtot(product) {
  // Iteration 1.1
  let priceUnit = product.querySelectorAll('.pu span')[0].innerText;
  let quantity = product.querySelectorAll('input')[0].value;

  return priceUnit * quantity
}


function calcAll(event) {
  // Iteration 1.2

  //console.log("event.currentTarget", event.currentTarget)

  let totalPrice = 0;

  for (let i=0; i < document.getElementsByClassName('product').length; i++) {


    let product = document.getElementsByClassName('product')[i];
    console.log("product is " + product)

    let subTotal = document.querySelectorAll('.subtot span')[i];
    console.log("subTotal is " + subTotal)

    subTotal.innerText = updateSubtot(product)
    console.log("subTotal is now " + subTotal)

    //add up all subTotals
    totalPrice += Number(subTotal.innerText)
    document.querySelectorAll("h2 span")[0].innerText = totalPrice
    console.log("totalPrice returned is " + totalPrice)

  }

}
calc.onclick = calcAll;


function deleteProduct(event){
  //event.currentTarget
  //console.log("event.currentTarget", event.currentTarget)

  let productTr = event.currentTarget.parentNode.parentNode
  //console.log("productTr is " + productTr)

  productTr.remove()

}

deleteButton1.onclick = deleteProduct;
deleteButton2.onclick = deleteProduct;