var textAreaTemp = document.querySelector(".textAreaTemp");
var addBtnTemp = document.querySelector(".addBtnTemp");
var dropDownTemp = document.querySelector(".townDropDownTemp");


var resetBtnTemp = document.querySelector(".resetBtnTemp");
var ErrorTemp = document.querySelector(".ErrorTemp")            

var reggieTemp = document.querySelector(".userReggieTemplate").innerHTML;
var regUserTemp = Handlebars.compile(reggieTemp);
var regDataElem = document.querySelector("#regListTemp");

var existingRegTemp = JSON.parse(localStorage.getItem("RegNumTemp"));
//console.log(existingRegTemp)

var regInstanceTemp = RegCheck(existingRegTemp)


window.onload = showRegTemp();

function addReggieTemp() {
    dropDownTemp.value = "";
    regInstanceTemp.add(textAreaTemp.value);
   localStorage.setItem("RegNumTemp", JSON.stringify(regInstanceTemp.records()));

    var reggiesTemp = regInstanceTemp.records();

    RegTemplate(reggiesTemp); 
}
addBtnTemp.addEventListener('click',addReggieTemp); 

function RegTemplate (regNumber){
    var temps = Object.keys(regNumber);
    var createReggie = {regNumber: temps };
    var reggieHTML = regUserTemp(createReggie);
    regDataElem.innerHTML = reggieHTML;

}

function showRegTemp () {
    var regTemp = regInstanceTemp.records();
    RegTemplate(regTemp);
}


dropDownTemp.onchange = function () {
    var choice = dropDownTemp.value;
    var bTemp = regInstanceTemp.towntest(choice);
    console.log(bTemp)
    RegTemplate(bTemp); 
}



resetBtnTemp.addEventListener('click', function () {
    localStorage.clear();
    regListTemp.remove();
    location.reload();
})