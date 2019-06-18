describe('Registration Numbers test', function () {
    it('This test only takes in a registration number that starts with CA, CY or CK', function () {
        var testInstance = RegCheck();
        testInstance.add("CA 983 098");
        assert.equal(testInstance.towntest("CA"), "CA 983 098");
        testInstance.add("CK 278 399");
        assert.equal(testInstance.towntest("CK"), "CK 278 399");
        testInstance.add("CY 180 701");
        assert.equal(testInstance.towntest("CY"), "CY 180 701");
    })
    it('This test does not take in a registration number that has special characters', function () {
        var testInstance = RegCheck();
        testInstance.add("CA 9798@#$%");
        assert.equal(testInstance.add("CA 9798@#$%"), undefined);
        testInstance.add("CY !@#$%^9*&^");
        assert.equal(testInstance.add("CY !@#$%^9*&^"), undefined);
        testInstance.add("CK 3653@#^22");
        assert.equal(testInstance.add("CK 3653@#^22"), undefined);
    })
    it('This test takes in an empty string and returns undefined', function () {
        var testInstance = RegCheck();
        testInstance.add(" ");
        assert.equal(testInstance.add("CA"), undefined);
        assert.equal(testInstance.add("CK"), undefined);
        assert.equal(testInstance.add("CY"), undefined);
    })
    it('This test returns an error message when the same registration number is entered ', function () {
        var testInstance = RegCheck();
        testInstance.add("CA 364 968");
        testInstance.add("CA 364 968");
        assert.equal(testInstance.error(), "Registration number already entered");
    })




})