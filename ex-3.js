// Exercise #3: Find a Minimum Number
let numbers = [100, 20, 3, 1000];
let minNumber;
//Start coding here
minNumber = Math.max(...numbers);
for (let i=0 ; i<=3 ; i++){
   if (minNumber > numbers[i]){
    minNumber = numbers[i];
   }
}
console.log(minNumber);

