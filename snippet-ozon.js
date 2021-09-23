
setTimeout(() => getItems(), 2000);

function getItems() {
    let i = 0;
    let priceBefore;
    let table = '<table border = "1">';
    document.querySelectorAll('div.bv5 ').forEach(div => {
        i++;
        let title = div.querySelector('a.by').querySelector('span').innerText;
        let link = div.querySelector('a.by').href;
        let price = div.querySelector('span._2DV4').innerText;
        if (div.querySelector('span.skSe')) {
            priceBefore = div.querySelector('span.skSe').innerText;
        } else priceBefore = null;

        table += `<tr>
                    <td>${i}</td>
                    <td><a href="${link}">${title}</a></td>
                    <td>${price}</td>
                    <td><s>${priceBefore ? priceBefore : ''}</s></td>
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



