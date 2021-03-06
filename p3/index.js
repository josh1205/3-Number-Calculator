

var num1;
var num2;
var num3;
var results = document.getElementsByClassName("results");
console.log("Results:" + results);

function getInputValue(){
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    num3 = document.getElementById("num3").value;
    console.log(num1);
    console.log(num2);
    console.log(num3);

    let charTest1 = isNaN(num1);
    let charTest2 = isNaN(num2);
    let charTest3 = isNaN(num3);
    
    if(charTest1 == true){
        alert("1st input is not a number\nResults will not be displayed");
    }
    else if(charTest2 == true){
        alert("2nd input is not a number\nResults will not be displayed");
    }
    else if(charTest3 == true){
        alert("3rd input is not a number\nResults will not be displayed");
    }
    else{
        maxFunc();
        minFunc();
        meanFunc()
        medianFunc();
        rangeFunc();
        modeFunc();
    }

}

function maxFunc(){
    let maxNum = Math.max(num1, num2, num3);
    console.log("MAX: " + maxNum);
    results[0].textContent = "Max: " + maxNum;
}

function minFunc() {
    let minNum = Math.min(num1, num2, num3);
    console.log("MIN: " + minNum);
    results[1].textContent = "Min: " + minNum;
}

function meanFunc() {
    let meanNum = (parseInt(num1) + parseInt(num2) + parseInt(num3) / 3);
    meanNum = meanNum.toFixed(2);
    console.log("MEAN: " + meanNum);
    results[2].textContent = "Mean: " + meanNum;

}

function medianFunc() {
    var median = [num1, num2, num3];
    median.sort();
    console.log("MEDIAN: " + median[1]);
    results[3].textContent = "Median: " + median[1];
}

function rangeFunc() {
    let rangeNum = Math.max(num1, num2, num3) - Math.min(num1, num2, num3);
    console.log("RANGE: " + rangeNum);
    results[4].textContent = "Range: " + rangeNum;
}

function modeFunc() {
    if(num1 == num2){
        console.log("Mode:" + num1);
        results[5].textContent = "Mode: " + num1;
    }
    else if(num1 == num3){
        console.log("Mode:" + num1);
        results[5].textContent = "Mode: " + num1;
    }
    else if(num2 == num3){
        console.log("Mode:" + num2);
        results[5].textContent = "Mode: " + num2;
    }
    else{
        console.log("No mode");
        results[5].textContent = "Mode: None";
    }
}