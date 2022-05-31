
// First Idea with HardCoding, is working but i am trying to refactor it in another branch
const kilo = 1000

function calc1() {
    
    var pricePerKilos2 = parseFloat(document.getElementById('2').value);
    var gramPerPortion3 = parseFloat(document.getElementById('3').value);
    var pricePerPortion4 = document.getElementById('4');
    parseFloat(pricePerPortion4.value = gramPerPortion3 / kilo * pricePerKilos2);
}

function calc2() {
    
    var pricePerKilos6 = parseFloat(document.getElementById('6').value);
    var gramPerPortion7 = parseFloat(document.getElementById('7').value);
    var pricePerPortion8 = document.getElementById('8');
    parseFloat(pricePerPortion8.value = gramPerPortion7 / kilo * pricePerKilos6);
}

function calc3() {
    
    var pricePerKilos10 = parseFloat(document.getElementById('10').value);
    var gramPerPortion11 = parseFloat(document.getElementById('11').value);
    var pricePerPortion12 = document.getElementById('12');
    parseFloat(pricePerPortion12.value = gramPerPortion11 / kilo * pricePerKilos10);
}

function calc4() {
    
    var pricePerKilos14 = parseFloat(document.getElementById('14').value);
    var gramPerPortion15 = parseFloat(document.getElementById('15').value);
    var pricePerPortion16 = document.getElementById('16');
    parseFloat(pricePerPortion16.value = gramPerPortion15 / kilo * pricePerKilos14);
}

function calc5() {
    
    var pricePerKilos18 = parseFloat(document.getElementById('18').value);
    var gramPerPortion19 = parseFloat(document.getElementById('19').value);
    var pricePerPortion20 = document.getElementById('20');
    parseFloat(pricePerPortion20.value = gramPerPortion19 / kilo * pricePerKilos18);
}

function calc6() {
    
    var pricePerKilos22 = parseFloat(document.getElementById('22').value);
    var gramPerPortion23 = parseFloat(document.getElementById('23').value);
    var pricePerPortion24 = document.getElementById('24');
    parseFloat(pricePerPortion24.value = gramPerPortion23 / kilo * pricePerKilos22);
}


function result() {
 
    var sum1 = parseFloat(document.getElementById('4').value);
    console.log(sum1)
    sum1 = sum1 || 0
    
    var sum2 = parseFloat(document.getElementById('8').value);
    console.log(sum2)
    sum2 = sum2 || 0

    var sum3 = parseFloat(document.getElementById('12').value);
    console.log(sum3)
    sum3 = sum3 || 0

    var sum4 = parseFloat(document.getElementById('16').value);
    console.log(sum4)
    sum4 = sum4 || 0

    var sum5 = parseFloat(document.getElementById('20').value);
    console.log(sum5)
    sum5 = sum5 || 0

    var sum6 = parseFloat(document.getElementById('24').value);
    console.log(sum6)
    sum6 = sum6 || 0

    var x = sum1 + sum2 + sum3 + sum4 + sum5 + sum6;
    var fixed = x.toFixed(2);
    var y = document.getElementById('result');
    y.innerText = fixed;
}


function clearValues() {
    document.querySelector("form").value = '';
    document.getElementById('result').innerHTML = '';
  }


