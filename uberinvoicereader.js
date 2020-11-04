const PdfReader = require('pdfreader');

const map_tab = {
    header: 0,
    metadata: 1,
    issued_by_as_bot: 2,
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
    result.client = {};
    result.seller = {};
    result.positions = [];
    let position = {};
    let pdfReader = new PdfReader.PdfReader()
    pdfReader.parseFileItems(path, (err, item) => {
        if (!item) {
            //console.log(tab[15]);
            //console.log(tab[16]);
            //console.log(tab[17]);
            //console.log(tab[18]);
            //console.log(`Zakończono wczytywanie faktury: ${path}`);
            result.issued_by_as_bot = tab[map_tab.issued_by_as_bot].text;
            result.issued_by_bot = tab[map_tab.issued_by_bot].text;
            result.issued_by_addr = tab[map_tab.bot_addr].text;
            result.issued_by_vat = tab[map_tab.issued_by_vat].text;
            result.issued_by_coc = tab[map_tab.bot_coc_number].text;
            result.client.company_name = tab[map_tab.client_company_name].text;
            result.client.street = tab[map_tab.client_street].text;
            result.client.post_code = tab[map_tab.client_post_code_part_1].text + tab[map_tab.client_post_code_part_2].text;
            result.client.country = tab[map_tab.client_country].text;
            result.client.nip = tab[map_tab.client_nip].text;
            result.seller.name = tab[map_tab.seller_name].text;
            result.seller.street = tab[map_tab.seller_street].text;
            result.seller.post_code = tab[map_tab.seller_post_code_part_1].text + tab[map_tab.seller_post_code_part_2].text;
            result.seller.city = tab[map_tab.seller_city].text;
            result.seller.country = tab[map_tab.seller_country].text;
            result.seller.nip = tab[map_tab.seller_nip].text;
            result.invoice_number = tab[map_tab.invoice_number_part_1].text + tab[map_tab.invoice_number_part_2].text + tab[map_tab.invoice_number_part_3].text + tab[map_tab.invoice_number_part_4].text;
            result.invoice_date = tab[map_tab.invoice_date].text;
            position.lp = tab[map_tab.tab_lp].text;
            position.sell_date = tab[map_tab.sell_date].text;
            position.description = tab[map_tab.position_description_part_1].text + tab[map_tab.position_description_part_2].text + tab[map_tab.position_description_part_3].text;
            position.amount = tab[map_tab.position_amount].text;
            position.jm = tab[map_tab.position_jm].text;
            position.vat = tab[map_tab.position_vat].text;
            position.vat_amount = tab[map_tab.position_vat_amount].text;
            position.netto = tab[map_tab.position_netto].text;
            result.positions.push(position);
            result.after_ptu = tab[map_tab.after_ptu].text;
            result.all_vat = tab[map_tab.all_vat].text;
            result.brutto = tab[map_tab.brutto].text;
            next(result);
        } else {
            tab[i] = item;
            i = i + 1;
        }
    });
    return tab;
};