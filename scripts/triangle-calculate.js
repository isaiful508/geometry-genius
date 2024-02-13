/**
 * objective: get base,height of a triangle.calculated the area by using privide formula.and then display area
 * step-1 get base value
 * 2.added an id in the base input field
 * 3.use getElementById to access the input value
 * 4.get value from the input feild.(value is string now)
 * 5.convert the value to a number .use parseFloat
 * 
 * 
 */

function calculatedTriangleArea(){
    // get triangle bas value
   const triangleBaseInput =document.getElementById('traingle-base');
   const triangleBaseText = triangleBaseInput.value;
   const base = parseFloat(triangleBaseText);
   console.log(base);
// get the triangle height
const traingleHeightInput = document.getElementById('traingle-height');
const triangleHeightText = traingleHeightInput.value;
const height = parseFloat(triangleHeightText);

console.log(height);


}