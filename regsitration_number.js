function RegCheck(reg) {
    var regString = reg || {};
    var errorMessage = "";
    var test = false;

    var regex = /^[A-Z]{2}\s[-0-9\s]{3}\s[0-9]{3}$/;

function messageService(){
    return errorMessage;
}

    function updateString() {
        var regKey = Object.keys(regString);
    }

    function addNewReg(oldReg) {
        errorMessage = "";
        var regNum = oldReg.toUpperCase().trim();
        var wack = regex.test(regNum);
        //console.log(wack)

        if (wack === true) {
            //console.log(regNum)

            if (regNum.startsWith("CA") || regNum.startsWith("CK") || regNum.startsWith("CY") === true) {
                test = true;
                if (regString[regNum] === undefined) {
                    regString[regNum] = 0;
                }else{
                    errorMessage = "Registration number already entered"
                }
            }
            // console.log(regString + " aaa")
        }
        if(wack === false) {
            test = false;
            console.log("test")
            errorMessage = "Enter valid registration number";
        }
    }

    function regPlace(town) {
        var newReg = Object.keys(regString);
        var newTown = [];
        for (var i = 0; i < newReg.length; i++) {
            if (newReg[i].startsWith(town)) {
                newTown.push(newReg[i])
            }
}
        //console.log(newTown + " ME")
        return newTown
    }



    function testResult() {
        return test;
    }

    function displayReg() {
        return regString;
    }



    return {
        add: addNewReg,
        records: displayReg,
        string: updateString,
        error:messageService,
        testie: testResult,
        towntest: regPlace,
        
    }
}
