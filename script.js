

var kilo = 1000

function simpleCalc1() {
    var pricePerKilos2 = parseFloat(document.getElementById('2').value);
    var gramPerPortion3 = parseFloat(document.getElementById('3').value);
    var pricePerPortion4 = document.getElementById('4');
    parseFloat(pricePerPortion4.value = gramPerPortion3 / kilo * pricePerKilos2);
}

function simpleCalc2() {
    var pricePerKilos6 = parseFloat(document.getElementById('6').value);
    var gramPerPortion7 = parseFloat(document.getElementById('7').value);
    var pricePerPortion8 = document.getElementById('8');
    parseFloat(pricePerPortion8.value = gramPerPortion7 / kilo * pricePerKilos6);
}

function result() {
    var sum1 = parseFloat(document.getElementById('4').value);
    var sum2 = parseFloat(document.getElementById('8').value);
    var x = document.getElementById('result');
    parseFloat(x.innerHTML = sum1 + sum2);
    
}



// updateSubTotal(); // Initial call

// // SubTotal
// function updateSubTotal() {
//     var table = document.getElementById("myTable");
//     let subTotal = Array.from(table.rows).slice(1).reduce((total, row) => {
//         return total + parseFloat(row.cells[1].innerHTML);
//     }, 0);
//     document.getElementById("val").innerHTML = "SubTotal = $" + subTotal.toFixed(2);
// }


// //Remove Row
function onClickRemove(deleteButton) {
    let row = deleteButton.parentElement.parentElement;
    row.parentNode.removeChild(row);
    simpleCalc(); // Call after delete
}

// //Add Row
function onClickAdd(addButton) {
    let row = addButton.parentElement.parentElement;
    row.parentNode.appendChild(row);
    // simpleCalc(); // Call after delete
}


