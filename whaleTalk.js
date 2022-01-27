let input = 'turpentine and turtles lives in the sea.';
let vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for(let i = 0; i < input.length; i++) {
  // console.log('Index is ' + input[i]);
  for(let m = 0; m < vowels.length; m++) {
  // console.log('M is ' + m);
  if(input[i] === vowels[m]) {
   if(input[i] === 'e'){
     resultArray.push('ee');
   }
   else if (input[i] === 'u') {
     resultArray.push('uu');
   }
   else {
     resultArray.push(input[i]);
   
      }
    }
  }
}
  
console.log(resultArray.join("").toUpperCase());
