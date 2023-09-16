/*
'Chennai': population = 4646732
           literacyRate = 90.20
           language = 'Tamil'
'Bengaluru':population = 8443675
            literacyRate = 88.71
            language = 'Kannada'
'Mumbai':population = 12442373
        literacyRate = 89.73
        language = 'Marathi'
'Delhi': population = 16787941
         literacyRate = 86.20
         language = 'Hindi'
The Indian city of Bengaluru has a population of 8443675. Language spoken is Kannada and literacy rate is 88.71%.
*/


const button=document.querySelector('button')
let resultdiv=document.createElement('div')
resultdiv.id='result'
document.getElementById('wrapper').appendChild(resultdiv)

button.addEventListener('click',displayStats)

function displayStats()

{
//console.log('clicked')
const input=document.getElementById("input")
const city=input.options[input.selectedIndex].value
//console.log(city)
let population=0, literacyRate=0, language=0;

switch(city){
    case 'Bengaluru':
        population = 8443675
            literacyRate = 88.71
            language = 'Kannada'
            break

    case 'Chennai':
        population = 4646732
       literacyRate = 90.20
        language = 'Tamil'
        break

    case 'Mumbai':
        population = 12442373
        literacyRate = 89.73
        language = 'Marathi'
        break

    case 'Delhi':
        population = 16787941
         literacyRate = 86.20
         language = 'Hindi'
         break
}

let text = 'The Indian city of  has a population of '+population+' Language spoken is '+language+' and literacy rate is '+literacyRate+'%.';

document.getElementById('result').innerHTML= text
}
function isPositive(num){
    return num>0;
}
console.log(isPositive(5));

function greet(name){
console.log('hi',name)
}

greet(8)

function addAll(num){
    let sum=0;
    for(let i=0;i<num.length;i++){
       sum=sum+num[i];
    }
   return sum
}

let num1=[1,2,3,4,5];
console.log(addAll(num1))

let sumAll=(num)=>
{
    let sum=0
    for(let val of num){
        sum+=val
    }
   return sum
}

num1=[1,2,3,4,5,6]
console.log(sumAll(num1))

function printConsole(name){
    console.log("Hello "+name)
}

function printPage(name){
    const heading=document.querySelector("h3");
    heading.innerHTML="Hello "+name;
}

function greet1(callback){
    callback('Thulasimani 19')
}

greet1(printConsole)
greet1(printPage)