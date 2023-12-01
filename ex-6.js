// Exercise #6: Reverse the String
let companyName = "TechUp Thailand";
let reversedCompanyName = "";

// Start coding here
let i = 14;
for(let text of companyName){
    reversedCompanyName = reversedCompanyName + companyName[i];
    i--;
}
console.log(reversedCompanyName);
