
//Used these a global variables to reach all functions
var num1;
var num2;
var num3;
var results = document.getElementsByClassName("results");
console.log("Results:" + results);


//Main function that calls all other functions when user clicks go
function getInputValue(){
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    num3 = document.getElementById("num3").value;
    console.log(num1);
    console.log(num2);
    console.log(num3);

    //Variables used to see if inputs are letter
    let charTest1 = isNaN(num1);
    let charTest2 = isNaN(num2);
    let charTest3 = isNaN(num3);

    //if else statement to see if inputs are letters
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

//Functions finds the max of three numbers
function maxFunc(){
    let maxNum = Math.max(num1, num2, num3);
    console.log("MAX: " + maxNum);
    results[0].textContent = "Max: " + maxNum;
}
//Functions finds the min of three numbers
function minFunc() {
    let minNum = Math.min(num1, num2, num3);
    console.log("MIN: " + minNum);
    results[1].textContent = "Min: " + minNum;
}

//Functions finds the mean of three numbers
function meanFunc() {
    let meanNum = (parseInt(num1) + parseInt(num2) + parseInt(num3) / 3);
    meanNum = meanNum.toFixed(2);
    console.log("MEAN: " + meanNum);
    results[2].textContent = "Mean: " + meanNum;

}

//Functions finds the median of three numbers
function medianFunc() {
    var median = [num1, num2, num3];
    median.sort();
    console.log("MEDIAN: " + median[1]);
    results[3].textContent = "Median: " + median[1];
}

//Functions finds the range of three numbers
function rangeFunc() {
    let rangeNum = Math.max(num1, num2, num3) - Math.min(num1, num2, num3);
    console.log("RANGE: " + rangeNum);
    results[4].textContent = "Range: " + rangeNum;
}
//Functions finds the mode of three numbers
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