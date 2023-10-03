import wixData from 'wix-data';
$w.onReady(function () {

});
export function button2_click(event) {
    $w('#input1').value = null
    $w('#dropdown2').value = null
    $w('#dropdown1').value = null
    $w("#dataset2").setFilter(wixData.filter());

}

export function button1_click(event) {
    let fieldVal = $w('#dropdown1').value;
    let varifiedVal = $w('#dropdown2').value;
    let locationVal = $w('#input1').value;
    $w("#dataset2").setFilter(wixData.filter()
        .startsWith("varified", varifiedVal).startsWith('field', fieldVal).startsWith('location', locationVal)
    );
    
}
