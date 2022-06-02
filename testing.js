//check here : https://stackoverflow.com/questions/3065342/how-do-i-iterate-through-table-rows-and-cells-in-javascript



function test() {
    var table = document.getElementById("mytab1");

    // Loop through rows
    for (var i = 0, row; row = table.rows[i]; i++) {
        console.log("Outside loop iteration :", i);
        // Loop through columns
        for (var j = 0, col; col = row.cells[j]; j++) {
            console.log("Inside Loop iteration :", j);
        }
        //add the two cells in each row and print the sum in each 4th cell

    }
    //Print the sum of the cells
    document.getElementById("result").innerHTML = finalSum;
}