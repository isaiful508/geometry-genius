

// function calculateParallelogram(){
//     // get the bas of paralleogram
//    const paralleogramBaseInput = document.getElementById('parallelogram-base');
//    const parallelogramBaseText = paralleogramBaseInput.value;
//    const base = parseFloat(parallelogramBaseText);
//    console.log(base);

//  // get the height of paralleogram
// const paralleogramHeightInput = document.getElementById('parallelogram-height');
// const parallelogramHeightText = paralleogramHeightInput.value;
// const height = parseFloat(parallelogramHeightText);
// console.log(height);

// // calculate the pallelograme area

// const area = base * height;
// console.log('calculation of parallelograme', area);

// // display the calulation resulsts
// const pallelogrameAreaSpan = document.getElementById('parallelogram');
// pallelogrameAreaSpan.innerText = area;

// }

// using function parameter
function calculateParallelogram() {
  const base = getInputValueById('parallelogram-base');
  // console.log('base value:', base);

  const height = getInputValueById('parallelogram-height');
  // console.log('height value:', height);

  const area = base * height;
  console.log('area of the parallelogram:', area);

  setInnerTextById('parallelogram',area);


}

function getInputValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);

  const inputValueText = inputField.value;
  const inputValue = parseFloat(inputValueText);
  // console.log(inputValue);
  return inputValue;
}

function setInnerTextById(elementId,area){
  const element = document.getElementById(elementId);
  element.innerText = area;
}