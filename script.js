
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
    var correctVal = 0;
    var wrong = isNaN();
    for (var i = 0, row; row = table.rows[i]; i++) {
        var sum1 = 0;

        for (var j = 0, col; col = row.cells[j]; j++) {
            console.log(array)
            correctVal = row.cells[j].firstChild.value;
            console.log("correctval first",correctVal)
            if (correctVal != wrong){
                correctVal = 0;
                console.log("correctval",correctVal)
            } else{
                console.log(j)
                array.push(parseFloat(row.cells[j].firstChild.value));
                console.log("eimai sto else",array);
                j++
            }
           
            // if (array[j] == wrong) {
            //     console.log("mphka sto if")
            //     array[j] = 0
            //     console.log(array)
            // } else {
            //     sum1 += array[j];
            //     console.log(array);
            // }
            
            // sum1 += (col.textContent != '',isNaN) ? parseInt(col.textContent) : 0;
            // sum1 += col.textContent;
        }

        // var a = 'a' + (i + 1).toString();
        var a = 'a' + (i + 1).toString();
        document.getElementById(a).value = sum1;

        sum1 = 0;
    }
}
