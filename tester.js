const uir = require('../uberinvoicereader');

uir(__dirname + "/test/test1.pdf", (data) => {
    console.log(data);
});