function RegCheck(reg) {
    var regString = reg || {};
    var errorMessage = "Enter valid registration number";
    var test = false;

    var regex = /[A-Z]{2}\s\d[-0-9\s]{1,7}/;
    var regExists = false;


    function updateString() {
        var regKey = Object.keys(regString);
    }

    function addNewReg(oldReg) {
        var regNum = oldReg.toUpperCase().trim();
        var wack = regex.test(regNum);

        if (wack === true) {
            if (regNum.startsWith("CA") === true || regNum.startsWith("CK") === true || regNum.startsWith("CY") === true) {

                if (regString[regNum] === undefined) {
                    test = true;
                    regString[regNum] = 0;
                } else {
                    test = false;
                }

            }
        }
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
        testie: testResult
    }
}
