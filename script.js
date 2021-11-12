
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
            var array = 0;

            //iterate through columns
            //columns would be accessed using the "col" variable assigned in the for loop
            array = parseFloat(row.cells[j].firstChild.value);
            // parseFloat(x.innerHTML = array);
            // parseFloat(document.getElementById('result').value = array);

            console.log(array)

            for (v = 2, col; col = row.cells[v]; v++) {
                var sumvalue = 0;
                var value2 = 0;

                value2 = parseFloat(row.cells[v].firstChild.value);

                console.log(value2);

                sumvalue = array + value2;

                console.log(sumvalue)

                for (s = 3, col; col = row.cells[s]; s++) {
                    parseFloat(document.getElementById('result').value = sumvalue);
                }
            }

        }

    }

}


// Third idea to pass the values in an array - in used but not working.
function testt() {
    var table = document.getElementById("mytab1");
    var array = [];
    var rowSum = 0;
    var dieresh = 0;
    var pol = 0
    var outFirst = 0;
    var outSecond;
    var outCell;


    for (var i = 0, row; row = table.rows[i]; i++) {
        console.log("Outside loop iteration :", i);
        console.log("Array initial", array);

        for (var j = 1, col; col = row.cells[j]; j++) {
            console.log("Inside Loop iteration :", j);

            // check if array value is false or NaN
            // if (array[j] === false || array[j] != array[j]) {
            //     console.log("NaN found at place " + j);
            //     // change NaN values to 0, not working...
            //     array[j] = 0;
            //     console.log(array[j]);
            // } else {
            console.log("My array before push is :", array);
            array.push(parseFloat(row.cells[j].firstChild.value))

            console.log("My array after push is :", array);
            outFirst = array[i];
            console.log("Important", outFirst);

            // parseFloat(dieresh = outFirst / kilo);
            // console.log(dieresh)
            // outSecond = array[i];
            // pol = dieresh * outSecond;
            // rowSum = pol;
            // rowSum = dieresh * array[0];
            //  

            // }
            // sum = array[i] / 1000 * array[j]
            // console.log(rowSum);
            console.log(parseFloat(document.getElementById("result").value = outFirst));
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


}

function test() {
    var table = document.getElementById("mytab1");
    var array = [];
    var correctVal;
    var rowSum = 0;
    var finalSum = 0;
    for (var i = 0, row; row = table.rows[i]; i++) {
        var sum1 = 0;
        console.log('Outside Loop : ', i)
        for (var j = 0, col; col = row.cells[j]; j++) {
            console.log(array)
            correctVal = row.cells[j].firstChild.value;
            correctVal = correctVal || 0;
            console.log("correctval first", correctVal)
            console.log(j)
            array.push(parseFloat(correctVal));
            console.log("old else", array);
            rowSum += array[j];
            rowSum = rowSum || 0;
            console.log("Row Sum", rowSum);

        }
        //add the two cells in each row and print the sum in each 4th cell
        array = [];
        sum1 = rowSum;
        rowSum = 0;
        console.log("sum for cell", sum1)
        var a = 'a' + (i + 1).toString();
        if (i = row ) {
            
            var cellSum = document.getElementById(a);
            parseFloat(cellSum.value = sum1);
            sum1 = sum1 || 0;

        }
        finalSum += sum1;
        console.log("Final Sum", finalSum);
    }
    //Print the sum of the cells
    document.getElementById("result").innerHTML = finalSum;
}



// First Idea with HardCoding, is working but i am trying to refactor it in another branch
// const kilo = 1000

// function calc1() {

//     var pricePerKilos2 = parseFloat(document.getElementById('2').value);
//     var gramPerPortion3 = parseFloat(document.getElementById('3').value);
//     var pricePerPortion4 = document.getElementById('4');
//     parseFloat(pricePerPortion4.value = gramPerPortion3 / kilo * pricePerKilos2);
// }

// function calc2() {

//     var pricePerKilos6 = parseFloat(document.getElementById('6').value);
//     var gramPerPortion7 = parseFloat(document.getElementById('7').value);
//     var pricePerPortion8 = document.getElementById('8');
//     parseFloat(pricePerPortion8.value = gramPerPortion7 / kilo * pricePerKilos6);
// }

// function calc3() {

//     var pricePerKilos10 = parseFloat(document.getElementById('10').value);
//     var gramPerPortion11 = parseFloat(document.getElementById('11').value);
//     var pricePerPortion12 = document.getElementById('12');
//     parseFloat(pricePerPortion12.value = gramPerPortion11 / kilo * pricePerKilos10);
// }

// function calc4() {

//     var pricePerKilos14 = parseFloat(document.getElementById('14').value);
//     var gramPerPortion15 = parseFloat(document.getElementById('15').value);
//     var pricePerPortion16 = document.getElementById('16');
//     parseFloat(pricePerPortion16.value = gramPerPortion15 / kilo * pricePerKilos14);
// }

// function calc5() {

//     var pricePerKilos18 = parseFloat(document.getElementById('18').value);
//     var gramPerPortion19 = parseFloat(document.getElementById('19').value);
//     var pricePerPortion20 = document.getElementById('20');
//     parseFloat(pricePerPortion20.value = gramPerPortion19 / kilo * pricePerKilos18);
// }

// function calc6() {

//     var pricePerKilos22 = parseFloat(document.getElementById('22').value);
//     var gramPerPortion23 = parseFloat(document.getElementById('23').value);
//     var pricePerPortion24 = document.getElementById('24');
//     parseFloat(pricePerPortion24.value = gramPerPortion23 / kilo * pricePerKilos22);
// }


// function result() {

//     var sum1 = parseFloat(document.getElementById('4').value);
//     console.log(sum1)
//     sum1 = sum1 || 0

//     var sum2 = parseFloat(document.getElementById('8').value);
//     console.log(sum2)
//     sum2 = sum2 || 0

//     var sum3 = parseFloat(document.getElementById('12').value);
//     console.log(sum3)
//     sum3 = sum3 || 0

//     var sum4 = parseFloat(document.getElementById('16').value);
//     console.log(sum4)
//     sum4 = sum4 || 0

//     var sum5 = parseFloat(document.getElementById('20').value);
//     console.log(sum5)
//     sum5 = sum5 || 0

//     var sum6 = parseFloat(document.getElementById('24').value);
//     console.log(sum6)
//     sum6 = sum6 || 0

//     var x = sum1 + sum2 + sum3 + sum4 + sum5 + sum6;
//     var fixed = x.toFixed(2);
//     var y = document.getElementById('result');
//     y.innerText = fixed;
// }


// function clearValues() {
//     // document.getElementsByClassName("form-control").reset();
//     document.querySelector("form").value = '';
//     document.getElementById('result').innerHTML = '';
//   }


