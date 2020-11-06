/*require('../uberinvoicereader')(__dirname + "/test.pdf", (data) => {
    console.log(data);
});*/

const assert = require('assert').strict;
const uir = require('../uberinvoicereader');

describe('Proper data', function () {
    describe('Issued by', function () {
        describe('Issued by Uber for', function () {
            it('Should be Futuristic Tomasz Burzyński for test1.pdf', function () {
                uir(__dirname + "/test1.pdf", (data) => {
                    assert.strictEqual(data.issued_by.for, "Futuristic Tomasz Burzyński");
                });
            });
            it('Should be Futuristic Tomasz Burzyński for test2.pdf', function () {
                uir(__dirname + "/test2.pdf", (data) => {
                    assert.strictEqual(data.issued_by.for, "Futuristic Tomasz Burzyński");
                });
            });
            it('Should be Futuristic Tomasz Burzyński for test3.pdf', function () {
                uir(__dirname + "/test3.pdf", (data) => {
                    assert.strictEqual(data.issued_by.for, "Futuristic Tomasz Burzyński");
                });
            });
            it('Should be Futuristic Tomasz Burzyński for test4.pdf', function () {
                uir(__dirname + "/test4.pdf", (data) => {
                    assert.strictEqual(data.issued_by.for, "Futuristic Tomasz Burzyński");
                });
            });
            it('Should be Futuristic Tomasz Burzyński for test5.pdf', function () {
                uir(__dirname + "/test5.pdf", (data) => {
                    assert.strictEqual(data.issued_by.for, "Futuristic Tomasz Burzyński");
                });
            });
        });
        describe('Issued by name', function () {
            it('Should be Uber Portier B.V. for test1.pdf', function () {
                uir(__dirname + "/test1.pdf", (data) => {
                    assert.strictEqual(data.issued_by.name, "Uber Portier B.V.");
                });
            });
            it('Should be Uber Portier B.V. for test2.pdf', function () {
                uir(__dirname + "/test2.pdf", (data) => {
                    assert.strictEqual(data.issued_by.name, "Uber Portier B.V.");
                });
            });
            it('Should be Uber Portier B.V. for test3.pdf', function () {
                uir(__dirname + "/test3.pdf", (data) => {
                    assert.strictEqual(data.issued_by.name, "Uber Portier B.V.");
                });
            });
            it('Should be Uber Portier B.V. for test4.pdf', function () {
                uir(__dirname + "/test4.pdf", (data) => {
                    assert.strictEqual(data.issued_by.name, "Uber Portier B.V.");
                });
            });
            it('Should be Uber Portier B.V. for test5.pdf', function () {
                uir(__dirname + "/test5.pdf", (data) => {
                    assert.strictEqual(data.issued_by.name, "Uber Portier B.V.");
                });
            });
        });
        describe('Issued by addr', function () {
            it('Should be Mr. Treublaan 7, 1097DP Amsterdam for test1.pdf', function () {
                uir(__dirname + "/test1.pdf", (data) => {
                    assert.strictEqual(data.issued_by.addr, "Mr. Treublaan 7, 1097DP Amsterdam");
                });
            });
            it('Should be Mr. Treublaan 7, 1097DP Amsterdam for test2.pdf', function () {
                uir(__dirname + "/test2.pdf", (data) => {
                    assert.strictEqual(data.issued_by.addr, "Mr. Treublaan 7, 1097DP Amsterdam");
                });
            });
            it('Should be Mr. Treublaan 7, 1097DP Amsterdam for test3.pdf', function () {
                uir(__dirname + "/test3.pdf", (data) => {
                    assert.strictEqual(data.issued_by.addr, "Mr. Treublaan 7, 1097DP Amsterdam");
                });
            });
            it('Should be Mr. Treublaan 7, 1097DP Amsterdam for test4.pdf', function () {
                uir(__dirname + "/test4.pdf", (data) => {
                    assert.strictEqual(data.issued_by.addr, "Mr. Treublaan 7, 1097DP Amsterdam");
                });
            });
            it('Should be Mr. Treublaan 7, 1097DP Amsterdam for test5.pdf', function () {
                uir(__dirname + "/test5.pdf", (data) => {
                    assert.strictEqual(data.issued_by.addr, "Mr. Treublaan 7, 1097DP Amsterdam");
                });
            });
        });
        describe('Issued by VAT', function () {
            it('Should be NL856287386B01 for test1.pdf', function () {
                uir(__dirname + "/test1.pdf", (data) => {
                    assert.strictEqual(data.issued_by.vat, "NL856287386B01");
                });
            });
            it('Should be NL856287386B01 for test2.pdf', function () {
                uir(__dirname + "/test2.pdf", (data) => {
                    assert.strictEqual(data.issued_by.vat, "NL856287386B01");
                });
            });
            it('Should be NL856287386B01 for test3.pdf', function () {
                uir(__dirname + "/test3.pdf", (data) => {
                    assert.strictEqual(data.issued_by.vat, "NL856287386B01");
                });
            });
            it('Should be NL856287386B01 for test4.pdf', function () {
                uir(__dirname + "/test4.pdf", (data) => {
                    assert.strictEqual(data.issued_by.vat, "NL856287386B01");
                });
            });
            it('Should be NL856287386B01 for test5.pdf', function () {
                uir(__dirname + "/test5.pdf", (data) => {
                    assert.strictEqual(data.issued_by.vat, "NL856287386B01");
                });
            });
        });
        describe('Issued by COC', function () {
            it('Should be 65851307 for test1.pdf', function () {
                uir(__dirname + "/test1.pdf", (data) => {
                    assert.strictEqual(data.issued_by.coc, "65851307");
                });
            });
            it('Should be 65851307 for test2.pdf', function () {
                uir(__dirname + "/test2.pdf", (data) => {
                    assert.strictEqual(data.issued_by.coc, "65851307");
                });
            });
            it('Should be 65851307 for test3.pdf', function () {
                uir(__dirname + "/test3.pdf", (data) => {
                    assert.strictEqual(data.issued_by.coc, "65851307");
                });
            });
            it('Should be 65851307 for test4.pdf', function () {
                uir(__dirname + "/test4.pdf", (data) => {
                    assert.strictEqual(data.issued_by.coc, "65851307");
                });
            });
            it('Should be 65851307 for test5.pdf', function () {
                uir(__dirname + "/test5.pdf", (data) => {
                    assert.strictEqual(data.issued_by.coc, "65851307");
                });
            });
        });
    });
    describe('Client', function () {
        describe('Company name', function () {
            it('Should be Fkwadrat Biuro Rachunkowe Sp. z o.o. for test1.pdf', function () {
                uir(__dirname + "/test1.pdf", (data) => {
                    assert.strictEqual(data.client.company_name, "Fkwadrat Biuro Rachunkowe Sp. z o.o.");
                });
            });
            it('Should be Fkwadrat Biuro Rachunkowe Sp. z o.o. for test2.pdf', function () {
                uir(__dirname + "/test2.pdf", (data) => {
                    assert.strictEqual(data.client.company_name, "Fkwadrat Biuro Rachunkowe Sp. z o.o.");
                });
            });
            it('Should be Fkwadrat Biuro Rachunkowe Sp. z o.o. for test3.pdf', function () {
                uir(__dirname + "/test3.pdf", (data) => {
                    assert.strictEqual(data.client.company_name, "Fkwadrat Biuro Rachunkowe Sp. z o.o.");
                });
            });
            it('Should be Fkwadrat Biuro Rachunkowe Sp. z o.o. for test4.pdf', function () {
                uir(__dirname + "/test4.pdf", (data) => {
                    assert.strictEqual(data.client.company_name, "Fkwadrat Biuro Rachunkowe Sp. z o.o.");
                });
            });
            it('Should be Fkwadrat Biuro Rachunkowe Sp. z o.o. for test5.pdf', function () {
                uir(__dirname + "/test5.pdf", (data) => {
                    assert.strictEqual(data.client.company_name, "Fkwadrat Biuro Rachunkowe Sp. z o.o.");
                });
            });
        });
        describe('Street', function () {
            it('Should be Wita Stwosza 40 for test1.pdf', function () {
                uir(__dirname + "/test1.pdf", (data) => {
                    assert.strictEqual(data.client.street, "Wita Stwosza 40");
                });
            });
            it('Should be Wita Stwosza 40 for test2.pdf', function () {
                uir(__dirname + "/test2.pdf", (data) => {
                    assert.strictEqual(data.client.street, "Wita Stwosza 40");
                });
            });
            it('Should be Wita Stwosza 40 for test3.pdf', function () {
                uir(__dirname + "/test3.pdf", (data) => {
                    assert.strictEqual(data.client.street, "Wita Stwosza 40");
                });
            });
            it('Should be Wita Stwosza 40 for test4.pdf', function () {
                uir(__dirname + "/test4.pdf", (data) => {
                    assert.strictEqual(data.client.street, "Wita Stwosza 40");
                });
            });
            it('Should be Wita Stwosza 40 for test5.pdf', function () {
                uir(__dirname + "/test5.pdf", (data) => {
                    assert.strictEqual(data.client.street, "Wita Stwosza 40");
                });
            });
        });
        describe('Post code', function () {
            it('Should be 02-661 for test1.pdf', function () {
                uir(__dirname + "/test1.pdf", (data) => {
                    assert.strictEqual(data.client.post_code, "02-661");
                });
            });
            it('Should be 02-661 for test2.pdf', function () {
                uir(__dirname + "/test2.pdf", (data) => {
                    assert.strictEqual(data.client.post_code, "02-661");
                });
            });
            it('Should be 02-661 for test3.pdf', function () {
                uir(__dirname + "/test3.pdf", (data) => {
                    assert.strictEqual(data.client.post_code, "02-661");
                });
            });
            it('Should be 02-661 for test4.pdf', function () {
                uir(__dirname + "/test4.pdf", (data) => {
                    assert.strictEqual(data.client.post_code, "02-661");
                });
            });
            it('Should be 02-661 for test5.pdf', function () {
                uir(__dirname + "/test5.pdf", (data) => {
                    assert.strictEqual(data.client.post_code, "02-661");
                });
            });

        });
        describe('City', function () {
            it('Should be Warszawa for test1.pdf', function () {
                uir(__dirname + "/test1.pdf", (data) => {
                    assert.strictEqual(data.client.city, "Warszawa");
                });
            });
            it('Should be Warszawa for test2.pdf', function () {
                uir(__dirname + "/test2.pdf", (data) => {
                    assert.strictEqual(data.client.city, "Warszawa");
                });
            });
            it('Should be Warszawa for test3.pdf', function () {
                uir(__dirname + "/test3.pdf", (data) => {
                    assert.strictEqual(data.client.city, "Warszawa");
                });
            });
            it('Should be Warszawa for test4.pdf', function () {
                uir(__dirname + "/test4.pdf", (data) => {
                    assert.strictEqual(data.client.city, "Warszawa");
                });
            });
            it('Should be Warszawa for test5.pdf', function () {
                uir(__dirname + "/test5.pdf", (data) => {
                    assert.strictEqual(data.client.city, "Warszawa");
                });
            });
        });
        describe('Country', function () {
            it('Should be Poland for test1.pdf', function () {
                uir(__dirname + "/test1.pdf", (data) => {
                    assert.strictEqual(data.client.country, "Poland");
                });
            });
            it('Should be Poland for test2.pdf', function () {
                uir(__dirname + "/test2.pdf", (data) => {
                    assert.strictEqual(data.client.country, "Poland");
                });
            });
            it('Should be Poland for test3.pdf', function () {
                uir(__dirname + "/test3.pdf", (data) => {
                    assert.strictEqual(data.client.country, "Poland");
                });
            });
            it('Should be Poland for test4.pdf', function () {
                uir(__dirname + "/test4.pdf", (data) => {
                    assert.strictEqual(data.client.country, "Poland");
                });
            });
            it('Should be Poland for test5.pdf', function () {
                uir(__dirname + "/test5.pdf", (data) => {
                    assert.strictEqual(data.client.country, "Poland");
                });
            });
        });
        describe('NIP', function () {
            it('Should be PL7010283960 for test1.pdf', function () {
                uir(__dirname + "/test1.pdf", (data) => {
                    assert.strictEqual(data.client.nip, "PL7010283960");
                });
            });
            it('Should be PL7010283960 for test2.pdf', function () {
                uir(__dirname + "/test2.pdf", (data) => {
                    assert.strictEqual(data.client.nip, "PL7010283960");
                });
            });
            it('Should be PL7010283960 for test3.pdf', function () {
                uir(__dirname + "/test3.pdf", (data) => {
                    assert.strictEqual(data.client.nip, "PL7010283960");
                });
            });
            it('Should be PL7010283960 for test4.pdf', function () {
                uir(__dirname + "/test4.pdf", (data) => {
                    assert.strictEqual(data.client.nip, "PL7010283960");
                });
            });
            it('Should be PL7010283960 for test5.pdf', function () {
                uir(__dirname + "/test5.pdf", (data) => {
                    assert.strictEqual(data.client.nip, "PL7010283960");
                });
            });
        });
    });
    describe("Seller", function () {
        describe('Name', function () {
            it('Should be Futuristic Tomasz Burzyński for test1.pdf', function () {
                uir(__dirname + "/test1.pdf", (data) => {
                    assert.strictEqual(data.seller.name, "Futuristic Tomasz Burzyński");
                });
            });
            it('Should be Futuristic Tomasz Burzyński for test2.pdf', function () {
                uir(__dirname + "/test2.pdf", (data) => {
                    assert.strictEqual(data.seller.name, "Futuristic Tomasz Burzyński");
                });
            });
            it('Should be Futuristic Tomasz Burzyński for test3.pdf', function () {
                uir(__dirname + "/test3.pdf", (data) => {
                    assert.strictEqual(data.seller.name, "Futuristic Tomasz Burzyński");
                });
            });
            it('Should be Futuristic Tomasz Burzyński for test4.pdf', function () {
                uir(__dirname + "/test4.pdf", (data) => {
                    assert.strictEqual(data.seller.name, "Futuristic Tomasz Burzyński");
                });
            });
            it('Should be Futuristic Tomasz Burzyński for test5.pdf', function () {
                uir(__dirname + "/test5.pdf", (data) => {
                    assert.strictEqual(data.seller.name, "Futuristic Tomasz Burzyński");
                });
            });
        });
        describe('Street', function () {
            it('Should be Grunwaldzka 160/312 for test1.pdf', function () {
                uir(__dirname + "/test1.pdf", (data) => {
                    assert.strictEqual(data.seller.street, "Grunwaldzka 160/312");
                });
            });
            it('Should be Grunwaldzka 160/312 for test2.pdf', function () {
                uir(__dirname + "/test2.pdf", (data) => {
                    assert.strictEqual(data.seller.street, "Grunwaldzka 160/312");
                });
            });
            it('Should be Grunwaldzka 160/312 for test3.pdf', function () {
                uir(__dirname + "/test3.pdf", (data) => {
                    assert.strictEqual(data.seller.street, "Grunwaldzka 160/312");
                });
            });
            it('Should be Grunwaldzka 160/312 for test4.pdf', function () {
                uir(__dirname + "/test4.pdf", (data) => {
                    assert.strictEqual(data.seller.street, "Grunwaldzka 160/312");
                });
            });
            it('Should be Grunwaldzka 160/312 for test5.pdf', function () {
                uir(__dirname + "/test5.pdf", (data) => {
                    assert.strictEqual(data.seller.street, "Grunwaldzka 160/312");
                });
            });
        });
        describe('Post code', function () {
            it('Should be 60-309 for test1.pdf', function () {
                uir(__dirname + "/test1.pdf", (data) => {
                    assert.strictEqual(data.seller.post_code, "60-309");
                });
            });
            it('Should be 60-309 for test2.pdf', function () {
                uir(__dirname + "/test2.pdf", (data) => {
                    assert.strictEqual(data.seller.post_code, "60-309");
                });
            });
            it('Should be 60-309 for test3.pdf', function () {
                uir(__dirname + "/test3.pdf", (data) => {
                    assert.strictEqual(data.seller.post_code, "60-309");
                });
            });
            it('Should be 60-309 for test4.pdf', function () {
                uir(__dirname + "/test4.pdf", (data) => {
                    assert.strictEqual(data.seller.post_code, "60-309");
                });
            });
            it('Should be 60-309 for test5.pdf', function () {
                uir(__dirname + "/test5.pdf", (data) => {
                    assert.strictEqual(data.seller.post_code, "60-309");
                });
            });
        });
        describe('City', function () {
            it('Should be Poznań for test1.pdf', function () {
                uir(__dirname + "/test1.pdf", (data) => {
                    assert.strictEqual(data.seller.city, "Poznań");
                });
            });
            it('Should be Poznań for test2.pdf', function () {
                uir(__dirname + "/test2.pdf", (data) => {
                    assert.strictEqual(data.seller.city, "Poznań");
                });
            });
            it('Should be Poznań for test3.pdf', function () {
                uir(__dirname + "/test3.pdf", (data) => {
                    assert.strictEqual(data.seller.city, "Poznań");
                });
            });
            it('Should be Poznań for test4.pdf', function () {
                uir(__dirname + "/test4.pdf", (data) => {
                    assert.strictEqual(data.seller.city, "Poznań");
                });
            });
            it('Should be Poznań for test5.pdf', function () {
                uir(__dirname + "/test5.pdf", (data) => {
                    assert.strictEqual(data.seller.city, "Poznań");
                });
            });
        });
        describe('Country', function () {
            it('Should be Poland for test1.pdf', function () {
                uir(__dirname + "/test1.pdf", (data) => {
                    assert.strictEqual(data.seller.country, "Poland");
                });
            });
            it('Should be Poland for test2.pdf', function () {
                uir(__dirname + "/test2.pdf", (data) => {
                    assert.strictEqual(data.seller.country, "Poland");
                });
            });
            it('Should be Poland for test3.pdf', function () {
                uir(__dirname + "/test3.pdf", (data) => {
                    assert.strictEqual(data.seller.country, "Poland");
                });
            });
            it('Should be Poland for test4.pdf', function () {
                uir(__dirname + "/test4.pdf", (data) => {
                    assert.strictEqual(data.seller.country, "Poland");
                });
            });
            it('Should be Poland for test5.pdf', function () {
                uir(__dirname + "/test5.pdf", (data) => {
                    assert.strictEqual(data.seller.country, "Poland");
                });
            });
        });
        describe('NIP', function () {
            it('Should be 5971710416 for test1.pdf', function () {
                uir(__dirname + "/test1.pdf", (data) => {
                    assert.strictEqual(data.seller.nip, "5971710416");
                });
            });
            it('Should be 5971710416 for test2.pdf', function () {
                uir(__dirname + "/test2.pdf", (data) => {
                    assert.strictEqual(data.seller.nip, "5971710416");
                });
            });
            it('Should be 5971710416 for test3.pdf', function () {
                uir(__dirname + "/test3.pdf", (data) => {
                    assert.strictEqual(data.seller.nip, "5971710416");
                });
            });
            it('Should be 5971710416 for test4.pdf', function () {
                uir(__dirname + "/test4.pdf", (data) => {
                    assert.strictEqual(data.seller.nip, "5971710416");
                });
            });
            it('Should be 5971710416 for test5.pdf', function () {
                uir(__dirname + "/test5.pdf", (data) => {
                    assert.strictEqual(data.seller.nip, "5971710416");
                });
            });
        });
    });
    describe('Invoice data', function () {
        describe('Invoice number', function () {
            it('Should be DHNFHSGK-03-2020-0000115 for test1.pdf', function () {
                uir(__dirname + "/test1.pdf", (data) => {
                    assert.strictEqual(data.invoice_number, "DHNFHSGK-03-2020-0000115");
                });
            });
            it('Should be DHNFHSGK-03-2020-0000116 for test2.pdf', function () {
                uir(__dirname + "/test2.pdf", (data) => {
                    assert.strictEqual(data.invoice_number, "DHNFHSGK-03-2020-0000116");
                });
            });
            it('Should be DHNFHSGK-03-2020-0000117 for test3.pdf', function () {
                uir(__dirname + "/test3.pdf", (data) => {
                    assert.strictEqual(data.invoice_number, "DHNFHSGK-03-2020-0000117");
                });
            });
            it('Should be DHNFHSGK-03-2020-0000118 for test4.pdf', function () {
                uir(__dirname + "/test4.pdf", (data) => {
                    assert.strictEqual(data.invoice_number, "DHNFHSGK-03-2020-0000118");
                });
            });
            it('Should be DHNFHSGK-03-2020-0000119 for test5.pdf', function () {
                uir(__dirname + "/test5.pdf", (data) => {
                    assert.strictEqual(data.invoice_number, "DHNFHSGK-03-2020-0000119");
                });
            });
        });
        describe('Invoice date', function () {
            it('Should be 3 listopada 2020 for test1.pdf', function () {
                uir(__dirname + "/test1.pdf", (data) => {
                    assert.strictEqual(data.invoice_date, "3 listopada 2020");
                });
            });
            it('Should be 3 listopada 2020 for test2.pdf', function () {
                uir(__dirname + "/test2.pdf", (data) => {
                    assert.strictEqual(data.invoice_date, "3 listopada 2020");
                });
            });
            it('Should be 3 listopada 2020 for test3.pdf', function () {
                uir(__dirname + "/test3.pdf", (data) => {
                    assert.strictEqual(data.invoice_date, "3 listopada 2020");
                });
            });
            it('Should be 3 listopada 2020 for test4.pdf', function () {
                uir(__dirname + "/test4.pdf", (data) => {
                    assert.strictEqual(data.invoice_date, "3 listopada 2020");
                });
            });
            it('Should be 3 listopada 2020 for test5.pdf', function () {
                uir(__dirname + "/test5.pdf", (data) => {
                    assert.strictEqual(data.invoice_date, "3 listopada 2020");
                });
            });
        });
        describe('Position', function () {
            describe('Count od positions', function () {
                it('Should be 1 for test1.pdf', function () {
                    uir(__dirname + "/test1.pdf", (data) => {
                        assert.strictEqual(data.positions.length, 1);
                    });
                });
                it('Should be 1 for test2.pdf', function () {
                    uir(__dirname + "/test2.pdf", (data) => {
                        assert.strictEqual(data.positions.length, 1);
                    });
                });
                it('Should be 1 for test3.pdf', function () {
                    uir(__dirname + "/test3.pdf", (data) => {
                        assert.strictEqual(data.positions.length, 1);
                    });
                });
                it('Should be 1 for test4.pdf', function () {
                    uir(__dirname + "/test4.pdf", (data) => {
                        assert.strictEqual(data.positions.length, 1);
                    });
                });
                it('Should be 1 for test5.pdf', function () {
                    uir(__dirname + "/test5.pdf", (data) => {
                        assert.strictEqual(data.positions.length, 1);
                    });
                });
            });
            describe('LP', function () {
                it('Should be 1 for test1.pdf', function () {
                    uir(__dirname + "/test1.pdf", (data) => {
                        assert.strictEqual(data.positions[0].lp, "1");
                    });
                });
                it('Should be 1 for test2.pdf', function () {
                    uir(__dirname + "/test2.pdf", (data) => {
                        assert.strictEqual(data.positions[0].lp, "1");
                    });
                });
                it('Should be 1 for test3.pdf', function () {
                    uir(__dirname + "/test3.pdf", (data) => {
                        assert.strictEqual(data.positions[0].lp, "1");
                    });
                });
                it('Should be 1 for test4.pdf', function () {
                    uir(__dirname + "/test4.pdf", (data) => {
                        assert.strictEqual(data.positions[0].lp, "1");
                    });
                });
                it('Should be 1 for test5.pdf', function () {
                    uir(__dirname + "/test5.pdf", (data) => {
                        assert.strictEqual(data.positions[0].lp, "1");
                    });
                });
            });
            describe('Sell date', function () {
                it('Should be 03.11.2020 for test1.pdf', function () {
                    uir(__dirname + "/test1.pdf", (data) => {
                        assert.strictEqual(data.positions[0].sell_date, "03.11.2020");
                    });
                });
                it('Should be 03.11.2020 for test2.pdf', function () {
                    uir(__dirname + "/test2.pdf", (data) => {
                        assert.strictEqual(data.positions[0].sell_date, "03.11.2020");
                    });
                });
                it('Should be 03.11.2020 for test3.pdf', function () {
                    uir(__dirname + "/test3.pdf", (data) => {
                        assert.strictEqual(data.positions[0].sell_date, "03.11.2020");
                    });
                });
                it('Should be 03.11.2020 for test4.pdf', function () {
                    uir(__dirname + "/test4.pdf", (data) => {
                        assert.strictEqual(data.positions[0].sell_date, "03.11.2020");
                    });
                });
                it('Should be 03.11.2020 for test4.pdf', function () {
                    uir(__dirname + "/test4.pdf", (data) => {
                        assert.strictEqual(data.positions[0].sell_date, "03.11.2020");
                    });
                });
            });
            describe('Description', function () {
                it('Should be Usługa transportowa - Cena for test1.pdf', function () {
                    uir(__dirname + "/test1.pdf", (data) => {
                        assert.strictEqual(data.positions[0].description, "Usługa transportowa - Cena");
                    });
                });
                it('Should be Usługa transportowa - Cena for test2.pdf', function () {
                    uir(__dirname + "/test2.pdf", (data) => {
                        assert.strictEqual(data.positions[0].description, "Usługa transportowa - Cena");
                    });
                });
                it('Should be Usługa transportowa - Cena for test3.pdf', function () {
                    uir(__dirname + "/test3.pdf", (data) => {
                        assert.strictEqual(data.positions[0].description, "Usługa transportowa - Cena");
                    });
                });
                it('Should be Usługa transportowa - Cena for test4.pdf', function () {
                    uir(__dirname + "/test4.pdf", (data) => {
                        assert.strictEqual(data.positions[0].description, "Usługa transportowa - Cena");
                    });
                });
                it('Should be Usługa transportowa - Cena for test5.pdf', function () {
                    uir(__dirname + "/test5.pdf", (data) => {
                        assert.strictEqual(data.positions[0].description, "Usługa transportowa - Cena");
                    });
                });
            });
            describe('Amount', function () {
                it('Should be 1 for test1.pdf', function () {
                    uir(__dirname + "/test1.pdf", (data) => {
                        assert.strictEqual(data.positions[0].amount, 1);
                    });
                });
                it('Should be 1 for test2.pdf', function () {
                    uir(__dirname + "/test2.pdf", (data) => {
                        assert.strictEqual(data.positions[0].amount, 1);
                    });
                });
                it('Should be 1 for test3.pdf', function () {
                    uir(__dirname + "/test3.pdf", (data) => {
                        assert.strictEqual(data.positions[0].amount, 1);
                    });
                });
                it('Should be 1 for test4.pdf', function () {
                    uir(__dirname + "/test4.pdf", (data) => {
                        assert.strictEqual(data.positions[0].amount, 1);
                    });
                });
                it('Should be 1 for test5.pdf', function () {
                    uir(__dirname + "/test5.pdf", (data) => {
                        assert.strictEqual(data.positions[0].amount, 1);
                    });
                });
            });
            describe('JM', function () {
                it('Should be szt. for test1.pdf', function () {
                    uir(__dirname + "/test1.pdf", (data) => {
                        assert.strictEqual(data.positions[0].jm, "szt.");
                    });
                });
                it('Should be szt. for test2.pdf', function () {
                    uir(__dirname + "/test2.pdf", (data) => {
                        assert.strictEqual(data.positions[0].jm, "szt.");
                    });
                });
                it('Should be szt. for test3.pdf', function () {
                    uir(__dirname + "/test3.pdf", (data) => {
                        assert.strictEqual(data.positions[0].jm, "szt.");
                    });
                });
                it('Should be szt. for test4.pdf', function () {
                    uir(__dirname + "/test4.pdf", (data) => {
                        assert.strictEqual(data.positions[0].jm, "szt.");
                    });
                });
                it('Should be szt. for test5.pdf', function () {
                    uir(__dirname + "/test5.pdf", (data) => {
                        assert.strictEqual(data.positions[0].jm, "szt.");
                    });
                });
            });
            describe('VAT', function () {
                describe('Percent', function(){
                    it('Should be 23 for test1.pdf', function () {
                        uir(__dirname + "/test1.pdf", (data) => {
                            assert.strictEqual(data.positions[0].vat_percent, 23);
                        });
                    });
                    it('Should be 23 for test2.pdf', function () {
                        uir(__dirname + "/test2.pdf", (data) => {
                            assert.strictEqual(data.positions[0].vat_percent, 23);
                        });
                    });
                    it('Should be 23 for test3.pdf', function () {
                        uir(__dirname + "/test3.pdf", (data) => {
                            assert.strictEqual(data.positions[0].vat_percent, 23);
                        });
                    });
                    it('Should be 23 for test4.pdf', function () {
                        uir(__dirname + "/test4.pdf", (data) => {
                            assert.strictEqual(data.positions[0].vat_percent, 23);
                        });
                    });
                    it('Should be 23 for test5.pdf', function () {
                        uir(__dirname + "/test5.pdf", (data) => {
                            assert.strictEqual(data.positions[0].vat_percent, 23);
                        });
                    });
                });
                describe('Amount', function () {
                    it('Should be 1,69 for test1.pdf', function () {
                        uir(__dirname + "/test1.pdf", (data) => {
                            assert.strictEqual(data.positions[0].vat_amount, 1.69);
                        });
                    });
                    it('Should be 1,67 for test2.pdf', function () {
                        uir(__dirname + "/test2.pdf", (data) => {
                            assert.strictEqual(data.positions[0].vat_amount, 1.67);
                        });
                    });
                    it('Should be 1,69 for test3.pdf', function () {
                        uir(__dirname + "/test3.pdf", (data) => {
                            assert.strictEqual(data.positions[0].vat_amount, 1.69);
                        });
                    });
                    it('Should be 1,78 for test4.pdf', function () {
                        uir(__dirname + "/test4.pdf", (data) => {
                            assert.strictEqual(data.positions[0].vat_amount, 1.78);
                        });
                    });
                    it('Should be 2,11 for test5.pdf', function () {
                        uir(__dirname + "/test5.pdf", (data) => {
                            assert.strictEqual(data.positions[0].vat_amount, 2.11);
                        });
                    });
                });
            });
            describe('Netto', function () {
                it('Should be 7,37 for test1.pdf', function () {
                    uir(__dirname + "/test1.pdf", (data) => {
                        assert.strictEqual(data.positions[0].netto, 7.37);
                    });
                });
                it('Should be 7,24 for test2.pdf', function () {
                    uir(__dirname + "/test2.pdf", (data) => {
                        assert.strictEqual(data.positions[0].netto, 7.24);
                    });
                });
                it('Should be 7,37 for test3.pdf', function () {
                    uir(__dirname + "/test3.pdf", (data) => {
                        assert.strictEqual(data.positions[0].netto, 7.37);
                    });
                });
                it('Should be 7,74 for test4.pdf', function () {
                    uir(__dirname + "/test4.pdf", (data) => {
                        assert.strictEqual(data.positions[0].netto, 7.74);
                    });
                });
                it('Should be 9,20 for test5.pdf', function () {
                    uir(__dirname + "/test5.pdf", (data) => {
                        assert.strictEqual(data.positions[0].netto, 9.20);
                    });
                });
            });
        });
        describe('After PTU', function () {
            it('Should be 7,37 for test1.pdf', function () {
                uir(__dirname + "/test1.pdf", (data) => {
                    assert.strictEqual(data.after_ptu, 7.37);
                });
            }); 
            it('Should be 7,24 for test2.pdf', function () {
                uir(__dirname + "/test2.pdf", (data) => {
                    assert.strictEqual(data.after_ptu, 7.24);
                });
            }); 
            it('Should be 7,37 for test3.pdf', function () {
                uir(__dirname + "/test3.pdf", (data) => {
                    assert.strictEqual(data.after_ptu, 7.37);
                });
            }); 
            it('Should be 7,74 for test4.pdf', function () {
                uir(__dirname + "/test4.pdf", (data) => {
                    assert.strictEqual(data.after_ptu, 7.74);
                });
            }); 
            it('Should be 9,20 for test5.pdf', function () {
                uir(__dirname + "/test5.pdf", (data) => {
                    assert.strictEqual(data.after_ptu, 9.20);
                });
            }); 
        });
        describe('Full VAT', function () {
            it('Should be 1,69 for test1.pdf', function () {
                uir(__dirname + "/test1.pdf", (data) => {
                    assert.strictEqual(data.all_vat, 1.69);
                });
            });
            it('Should be 1,67 for test2.pdf', function () {
                uir(__dirname + "/test2.pdf", (data) => {
                    assert.strictEqual(data.all_vat, 1.67);
                });
            });
            it('Should be 1,69 for test3.pdf', function () {
                uir(__dirname + "/test3.pdf", (data) => {
                    assert.strictEqual(data.all_vat, 1.69);
                });
            });
            it('Should be 1,78 for test4.pdf', function () {
                uir(__dirname + "/test4.pdf", (data) => {
                    assert.strictEqual(data.all_vat, 1.78);
                });
            });
            it('Should be 2,11 for test5.pdf', function () {
                uir(__dirname + "/test5.pdf", (data) => {
                    assert.strictEqual(data.all_vat, 2.11);
                });
            });
        });
        describe('Brutto', function () {
            it('Should be 9,06 for test1.pdf', function () {
                uir(__dirname + "/test1.pdf", (data) => {
                    assert.strictEqual(data.brutto, 9.06);
                });
            });
            it('Should be 8,91 for test2.pdf', function () {
                uir(__dirname + "/test2.pdf", (data) => {
                    assert.strictEqual(data.brutto, 8.91);
                });
            }); 
            it('Should be 9,06 for test3.pdf', function () {
                uir(__dirname + "/test3.pdf", (data) => {
                    assert.strictEqual(data.brutto, 9.06);
                });
            }); 
            it('Should be 9,52 for test4.pdf', function () {
                uir(__dirname + "/test4.pdf", (data) => {
                    assert.strictEqual(data.brutto, 9.52);
                });
            }); 
            it('Should be 11,31 for test5.pdf', function () {
                uir(__dirname + "/test5.pdf", (data) => {
                    assert.strictEqual(data.brutto, 11.31);
                });
            }); 
        });
    });
  });