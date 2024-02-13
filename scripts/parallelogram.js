

function calculateParallelogram(){
    // get the bas of paralleogram
   const paralleogramBaseInput = document.getElementById('parallelogram-base');
   const parallelogramBaseText = paralleogramBaseInput.value;
   const base = parseFloat(parallelogramBaseText);
   console.log(base);

 // get the height of paralleogram
const paralleogramHeightInput = document.getElementById('parallelogram-height');
const parallelogramHeightText = paralleogramHeightInput.value;
const height = parseFloat(parallelogramHeightText);
console.log(height);

// calculate the pallelograme area

const area = base * height;
console.log('calculation of parallelograme', area);

// display the calulation resulsts
const pallelogrameAreaSpan = document.getElementById('parallelogram');
pallelogrameAreaSpan.innerText = area;

}