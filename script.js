

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

function test() {
    var table = document.getElementById("mytab1");
    var value = 0;
        
    var value2 = 0;
    var value1 = 0;


    for (var i = 0, row; row = table.rows[i]; i++) {
        //iterate through rows
        //rows would be accessed using the "row" variable assigned in the for loop
        //    console.log(table.rows[i])


       
        for (var j = 1, col; col = row.cells[j]; j++) {
            //iterate through columns
            //columns would be accessed using the "col" variable assigned in the for loop


            value = parseFloat(row.cells[j].firstChild.value);
            value1 += value;
            // console.log(value1);
            

        }
        


    }
    console.log(value1);
}



// var lv_input = document.getElementById("table01").rows[0].cells[2].firstChild.value;
// console.log(lv_input);

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


