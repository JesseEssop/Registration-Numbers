function RegCheck(reg) {
    var regString = reg || {};
    var errorMessage = "Enter valid registration number";
    var test = false;

    var regex = /^[A-Z]{2}\s\d[0-9\s]{1,7}$/;
    var regExists = false;


    function updateString() {
        var regKey = Object.keys(regString);
    }

    function addNewReg(oldReg) {
        var regNum = oldReg.toUpperCase().trim();
        var wack = regex.test(regNum);
        console.log(wack)

        if (wack === true) {
            console.log(regNum)

            if (regNum.startsWith("CA") || regNum.startsWith("CK") || regNum.startsWith("CY") === true) {
                test = true;
                if (regString[regNum] === undefined) {
                    regString[regNum] = 0;
                }
            }
            console.log(regString + " aaa")
        }
        else {
            test = false;
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
        console.log(newTown + " ME")
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
        error: errorMessage,
        testie: testResult,
        towntest: regPlace,
    }
}
