setTimeout(() => getItems(), 2000);

function getItems() {
    let i = 0;
    let priceBefore;
    let table = '<table border = "1">';
    document.querySelectorAll('div.bi1 ').forEach(div => {
        i++;
        let title = div.querySelector('a.bj5').querySelector('span').innerText;
        let link = div.querySelector('a.bj5').href;
        let price = div.querySelector('span.ZI9r').innerText;
        if (div.querySelector('span.X5gV')) {
            priceBefore = div.querySelector('span.X5gV').innerText;
        } else priceBefore = null;
        let additional = div.querySelector('span.a8b6').innerText;
        if (additional.includes('Доставит')) additional = '';

        table += `<tr>
                    <td>${i}</td>
                    <td><a href="${link}">${title}</a></td>
                    <td>${price}</td>
                    <td><s>${priceBefore ? priceBefore : ''}</s></td>
                    <td>${additional}</td>
                </tr>`;
    })

    table += '</table>';

    copyToClipboard(table);

}

function copyToClipboard(data) {
    const blob = new Blob([data], { type: "text/html" });
    navigator.clipboard.write([new ClipboardItem({ [blob.type]: blob })])
        .then(() => { console.log('Copied'); })
        .catch(err => { console.log('Something went wrong', err); });
}
