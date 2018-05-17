describe("ChangeHandler", function() {

    // Constructor tests
    it("initializes with the given amountDue", function() {
        const changehandler = new ChangeHandler(5);
        
        expect(changehandler.amountDue).toBe(5);
    });

    it("initializes cashTendered to 0", function() {
        const changehandler = new ChangeHandler(0);
        
        expect(changehandler.cashTendered).toBe(0);

    });

    // Insert coin tests
    it("insert quarter adds 25", function() {
        const changehandler = new ChangeHandler(0);
        changehandler.insertCoin("quarter");
        expect(changehandler.cashTendered).toBe(25);
    });

    it("insert dime adds 10", function() {
        const changehandler = new ChangeHandler(0);
        changehandler.insertCoin("dime");
        expect(changehandler.cashTendered).toBe(10);
    });

    it("insert nickel adds 5", function() {
        const changehandler = new ChangeHandler(0);
        changehandler.insertCoin("nickel");
        expect(changehandler.cashTendered).toBe(5);
    });

    it("insert penny adds 1", function() {
        const changehandler = new ChangeHandler(0);
        changehandler.insertCoin("penny");
        expect(changehandler.cashTendered).toBe(1);
    });

    it("subsequent coins continue to add value", function() {
        const changehandler = new ChangeHandler(0);
        changehandler.insertCoin("penny");
        changehandler.insertCoin("dime");
        changehandler.insertCoin("quarter");
        expect(changehandler.cashTendered).toBe(36);
    });

    // isPaymentSufficient tests
    it("isPaymentSufficient returns true when enough cashTendered", function() {
        const changehandler = new ChangeHandler(10);

        changehandler.insertCoin("dime");
        expect(changehandler.isPaymentSufficient()).toBe(true);
    });

    it("isPaymentSufficient returns false when not enough cashTendered", function() {
        const changehandler = new ChangeHandler(500);

        changehandler.insertCoin("dime");
        expect(changehandler.isPaymentSufficient()).toBe(false);
        
    });
    
    it("isPaymentSufficient returns true when exact cashTendered", function() {
        
        const changehandler = new ChangeHandler(10);

        changehandler.insertCoin("dime");
        expect(changehandler.isPaymentSufficient()).toBe(true);
        
    });

    // Give change tests
    it("giveChange returns no coins when exact change", function() {
        const changehandler = new ChangeHandler(100);
        changehandler.insertCoin("quarter");
        changehandler.insertCoin("quarter");
        changehandler.insertCoin("quarter");
        changehandler.insertCoin("quarter");

        expect(changehandler.giveChange()).toBe({
            quarters: 0,
            dimes: 0,
            nickels: 0,
            pennies: 0
        });
    });

    it("giveChange returns correct coins for 10", function() {
        
    });

    it("giveChange returns correct coins for 27", function() {
        
    });

    it("giveChange returns correct coins for 68", function() {
        
    });

    it("giveChange returns correct coins for 15", function() {
        
    });

    it("giveChange returns correct coins for 2", function() {
        
    });

});