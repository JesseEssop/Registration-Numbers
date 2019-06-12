var textArea = document.querySelector(".textArea");
var addBtn = document.querySelector(".addBtn");
var dropDown = document.querySelector(".townDropDown");
var existingReg = JSON.parse(localStorage.getItem("regNumber")) || {};
var regList = document.querySelector("#regList");


var regInstance = RegCheck(existingReg);
// var reggie = Object.keys(existingReg);



addBtn.addEventListener('click', function () {

    regInstance.add(textArea.value);
    localStorage.setItem("regNumber", JSON.stringify(regInstance.records()));
    if (regInstance.testie() === true) {
        var reggieList = (textArea.value).toUpperCase();
        printReg(reggieList);
    } else {
        regInstance.error();
    }

})

function printReg(regNum) {
    var node = document.createElement("LI");
    var newReggieNum = document.createTextNode(regNum);
    node.appendChild(newReggieNum);
    var currentReg = document.getElementById("regList").appendChild(node);
}


dropDown.onchange = function () {
    var regVal = document.getElementById("townDrop").value;
    var reggieTest = regInstance.add(regVal);
    for (n = 0; n < reggieTest.length; n++) {
        addNewReggie(reggieTest[i]);
    }

}
window.onload = function () {
    var temp = Object.keys(regInstance.records());
    console.log(temp);
    regList.innerHTML = "";
    for (var x = 0; x < temp.length; x++) {
        console.log(temp[x])
        printReg(temp[x]);
    }


}
