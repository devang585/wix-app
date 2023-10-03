// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction
import wixData from 'wix-data';
$w.onReady(function () {

});

/**
*	Adds an event handler that runs when the element is clicked.
	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
*	 @param {$w.MouseEvent} event
*/
export function button2_click(event) {
    $w('#input1').value = null
    $w('#dropdown2').value = null
    $w('#dropdown1').value = null
    // Reset Button //
    $w("#dataset2").setFilter(wixData.filter());

}

export function button1_click(event) {
    let fieldVal = $w('#dropdown1').value;
    let varifiedVal = $w('#dropdown2').value;
    let locationVal = $w('#input1').value;
    // console.log(fieldVal + varifiedVal + locationVal);
    // $w('#dataset2').setSort(wixData.sort().ascending('rating'));
    $w("#dataset2").setFilter(wixData.filter()
        .startsWith("varified", varifiedVal).startsWith('field', fieldVal).startsWith('location', locationVal)
    );
    
}