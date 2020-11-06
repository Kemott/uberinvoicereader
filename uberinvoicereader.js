const PdfReader = require('pdfreader');

const map_tab = {
    header: 0,
    metadata: 1,
    issued_by_for_bot: 2,
    issued_by_bot: 3,
    bot_first_slash: 4,
    bot_addr: 5,
    bot_second_slash: 6,
    issued_by_vat: 7,
    bot_third_slash: 8,
    bot_coc_label: 9,
    bot_coc_number: 10,
    client_company_name: 11,
    client_street: 12,
    client_post_code_part_1: 13,
    client_post_code_part_2: 14,
    client_city: 15,
    client_country: 16,
    client_nip_label: 17,
    client_nip: 18,
    issued_by_label_top_part_1: 19,
    issued_by_label_top_part_2: 20,
    seller_name: 21,
    seller_street: 22,
    seller_post_code_part_1: 23,
    seller_post_code_part_2: 24,
    seller_city: 25,
    seller_country: 26,
    seller_nip_label: 27,
    seller_nip: 28,
    invoice_number_label: 29,
    invoice_number_part_1: 30,
    invoice_number_part_2: 31,
    invoice_number_part_3: 32,
    invoice_number_part_4: 33,
    invoice_date_label: 34,
    invoice_date: 35,
    tab_label_1: 36,
    tab_label_2_part_1: 37,
    tab_label_2_part_2: 38,
    tab_label_3: 39,
    tab_label_4: 40,
    tab_label_5: 41,
    tab_label_6_part_1: 42,
    tab_label_6_part_2: 43,
    tab_label_7_part_1: 44,
    tab_label_7_part_2: 45,
    tab_label_8: 46,
    tab_lp: 47,
    sell_date: 48,
    position_description_part_1: 49,
    position_description_part_2: 50,
    position_description_part_3: 51,
    position_amount: 52,
    position_jm: 53,
    position_vat_label: 54,
    position_vat: 55,
    position_vat_amount: 56,
    position_netto: 57,
    after_ptu_label: 58,
    after_ptu: 59,
    all_vat_label: 60,
    all_vat: 61,
    brutto_label: 62,
    brutto: 63
}

module.exports =  (path, next) => {
    let i = 0;
    let tab = [];
    let result = {};
    result.issued_by = {};
    result.client = {};
    result.seller = {};
    result.positions = [];
    let position = {};
    let pdfReader = new PdfReader.PdfReader()
    pdfReader.parseFileItems(path, (err, item) => {
        if (!item) {
            //console.log(`Zakończono wczytywanie faktury: ${path}`);
            let txt = tab[map_tab.issued_by_for_bot].text;
            txt.trim();
            txt.replace(/ {2,}/g, ' ');
            let splitted = txt.split(' ');
            splitted.pop();
            splitted.shift();
            splitted.shift();
            splitted.shift();
            txt = splitted.join(' ');
            result.issued_by.for = txt;

            result.issued_by.name = tab[map_tab.issued_by_bot].text.trim();
            result.issued_by.addr = tab[map_tab.bot_addr].text.trim();

            txt = tab[map_tab.issued_by_vat].text.trim();
            splitted = txt.split(' ');
            result.issued_by.vat = splitted[1].trim();


            result.issued_by.coc = tab[map_tab.bot_coc_number].text.trim();
            result.client.company_name = tab[map_tab.client_company_name].text.trim();
            result.client.street = tab[map_tab.client_street].text.trim();
            result.client.post_code = tab[map_tab.client_post_code_part_1].text + tab[map_tab.client_post_code_part_2].text;
            result.client.post_code.trim();
            result.client.city = tab[map_tab.client_city].text.trim();
            result.client.country = tab[map_tab.client_country].text.trim();
            result.client.nip = tab[map_tab.client_nip].text.trim();
            result.seller.name = tab[map_tab.seller_name].text.trim();
            result.seller.street = tab[map_tab.seller_street].text.trim();
            result.seller.post_code = tab[map_tab.seller_post_code_part_1].text + tab[map_tab.seller_post_code_part_2].text;
            result.seller.post_code.trim();
            result.seller.city = tab[map_tab.seller_city].text.trim();
            result.seller.country = tab[map_tab.seller_country].text.trim();
            result.seller.nip = tab[map_tab.seller_nip].text.trim();
            result.invoice_number = tab[map_tab.invoice_number_part_1].text.trim() + tab[map_tab.invoice_number_part_2].text.trim() + tab[map_tab.invoice_number_part_3].text.trim() + tab[map_tab.invoice_number_part_4].text.trim();
            result.invoice_number.trim();
            result.invoice_date = tab[map_tab.invoice_date].text.trim();
            position.lp = tab[map_tab.tab_lp].text.trim();
            position.sell_date = tab[map_tab.sell_date].text.trim();
            position.description = tab[map_tab.position_description_part_1].text + ' ' + tab[map_tab.position_description_part_2].text + tab[map_tab.position_description_part_3].text.substring(1);
            position.description.trim();
            position.amount = parseInt(tab[map_tab.position_amount].text.trim(), 10);
            position.jm = tab[map_tab.position_jm].text.trim();
            position.vat_percent = parseInt(tab[map_tab.position_vat].text.trim(), 10);
            position.vat_amount = parseFloat(tab[map_tab.position_vat_amount].text.trim().replace(',','.'));
            position.netto = parseFloat(tab[map_tab.position_netto].text.trim().replace(',','.'));
            result.positions.push(position);
            result.after_ptu = parseFloat(tab[map_tab.after_ptu].text.trim().replace(',','.'));
            result.all_vat = parseFloat(tab[map_tab.all_vat].text.trim().replace(',','.'));
            result.brutto = parseFloat(tab[map_tab.brutto].text.trim().replace(',','.'));
            next(result);
        } else {
            tab[i] = item;
            i = i + 1;
        }
    });
    return tab;
};