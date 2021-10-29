
// First Idea with HardCoding, deactivated and but working
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

// Second idea with for loops, deaactivated and not working
function notused() {
    var table = document.getElementById("mytab1");

    for (var i = 0, row; row = table.rows[i]; i++) {
        //iterate through rows
        //rows would be accessed using the "row" variable assigned in the for loop
        //    console.log(table.rows[i])



        // var x = document.getElementById('result').value;

        for (var j = 1, col; col = row.cells[j]; j++) {
            var value1 = 0;

            //iterate through columns
            //columns would be accessed using the "col" variable assigned in the for loop
            value1 = parseFloat(row.cells[j].firstChild.value);
            // parseFloat(x.innerHTML = value1);
            // parseFloat(document.getElementById('result').value = value1);

            console.log(value1)

            for (v = 2, col; col = row.cells[v]; v++) {
                var sumvalue = 0;
                var value2 = 0;

                value2 = parseFloat(row.cells[v].firstChild.value);

                console.log(value2);

                sumvalue = value1 + value2;

                console.log(sumvalue)

                for (s = 3, col; col = row.cells[s]; s++) {
                    parseFloat(document.getElementById('result').value = sumvalue);
                }
            }

        }

    }

}


// Third idea to pass the values in an array - in used but not working.
function test() {
    var table = document.getElementById("mytab1");
    var value1 = [];
    var sum = 0;
    for (var i = 0, row; row = table.rows[i]; i++) {

        for (var j = 1, col; col = row.cells[j]; j++) {


            value1.push(parseFloat(row.cells[j].firstChild.value))


            // check if array value is false or NaN
            if (value1[j] === false || value1[j] != value1[j]) {
                console.log("NaN found at place " + j);
                // change NaN values to 0, not working...
                value1[j] = 0;

                console.log(value1)  

            }
            sum += value1[j]

            // console.log(sum)
            // console.log(value1)

        }
        parseFloat(document.getElementById('result').value = sum)

    }


// Script idea to add or remove rows

    // updateSubTotal(); // Initial call

    // // SubTotal
    // function updateSubTotal() {
    //     var table = document.getElementById("myTable");
    //     let subTotal = Array.from(table.rows).slice(1).reduce((total, row) => {
    //         return total + parseFloat(row.cells[1].innerHTML);
    //     }, 0);
    //     document.getElementById("val").innerHTML = "SubTotal = $" + subTotal.toFixed(2);
    // }


  //--> Remove Row
    // function onClickRemove(deleteButton) {
    //     let row = deleteButton.parentElement.parentElement;
    //     row.parentNode.removeChild(row);
    //     simpleCalc(); // Call after delete
    // }

  //--> Add Row
    // function onClickAdd(addButton) {
    //     let row = addButton.parentElement.parentElement;
    //     row.parentNode.appendChild(row);
    //     // simpleCalc(); // Call after delete
    // }

}
