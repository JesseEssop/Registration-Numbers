var textArea = document.querySelector(".textArea");
var addBtn = document.querySelector(".addBtn");
var dropDown = document.querySelector(".townDropDown");

var regList = document.querySelector("#regList");
var resetBtn = document.querySelector(".resetBtn");
var ErrorElement = document.querySelector(".Error")

var existingReg = JSON.parse(localStorage.getItem("regNumber"));
var regInstance = RegCheck(existingReg)

addBtn.addEventListener('click', function () {
    dropDown.value = "";
    regInstance.add(textArea.value);
    localStorage.setItem("regNumber", JSON.stringify(regInstance.records()));
    var reggies = Object.keys(regInstance.records());
    regList.innerHTML = '';
    ErrorElement.innerHTML = regInstance.error();
    for (var z = 0; z < reggies.length; z++) {
        printReg(reggies[z]);
    }
})


function printReg(regNum) {
    var node = document.createElement("LI");
    var newReggieNum = document.createTextNode(regNum);
    node.appendChild(newReggieNum);
    var currentReg = document.getElementById("regList").appendChild(node);
}


dropDown.onchange = function () {
    var regTown = dropDown.value;
    var b = Object.keys(regInstance.towntest(regTown));
    regList.innerHTML = "";
    for (var x = 0; x < b.length; x++) {
        printReg(b[x]);
    }
    console.log(b)

}

window.onload = function () {
    var temp = Object.keys(regInstance.records());
    regList.innerHTML = "";
    for (var x = 0; x < temp.length; x++) {

        printReg(temp[x]);
    }
}

resetBtn.addEventListener('click', function () {
    localStorage.clear();
    regList.remove();
    location.reload();
})