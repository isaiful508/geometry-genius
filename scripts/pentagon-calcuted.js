function calculatePentagonArea(){
   const perimeter = getInputValueById('pentagon-parimeter');
    const apothem = getInputValueById('pentagon-apothem');
    const area = 0.5*perimeter*apothem;
    setInnerById('pentagon-area', area)
}
function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

function setInnerById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}