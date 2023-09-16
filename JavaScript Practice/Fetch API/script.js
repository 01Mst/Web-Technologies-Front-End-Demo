//fetch('https://official-joke-api.appspot.com/jokes/programming/random')
//.then((res)=>res.json())
//.then((msg)=>console.log(msg[0].setup,msg[0].punchline))


/*const thatkal=new Promise((resolve,reject)=>{
    let bookingSuccess=false
    if(bookingSuccess){
        resolve(100)
    }
    else{
        reject()
    }
})*/


/*function success(amt){
    console.log("Booked!"+amt)
}
function failure(amt){
    console.log("Not Booked! ")
}



function thatkalBook(){
    return new Promise((resolve, reject) => {
        let booking=true;
    if(booking){
        resolve(2200)
    } else{
reject()
    }   
})
}


thatkalBook().then(success)
.catch(failure)
*/

let reachA=new Promise((resolve,reject)=>{
    let reached=false
    if(reached){
       
       setTimeout(resolve,3000,"A  Reached")
    }
    else{
        reject("A Not Reached")
    }
})

/*let reachB=new Promise((resolve,reject)=>{
    let reached=true;
    if(reached){
        setTimeout(resolve,1000,"B is Reached")
    }
    else{
        reject("B is not reached")
    }
})

let reachC=new Promise((resolve,reject)=>
{
    let reached=false;
    if(reached){
        setTimeout(resolve,2000,"C is Reached")
    }
    else{
        reject("C is not reached")
    }
})

Promise.any([reachA,reachB,reachC]).then((message)=>
{
    console.log(message)
}).catch((message)=>console.log(message))*/


//Error Handling

/*try{
    num=prompt("Enter a number")
    if(isNaN(num)){
        throw "Enter a number"
    }
    console.log(num**2)
}
catch(error){
    console.log(error)
}
*/

//ASYNC and AWAIT

async function fn(){
    return 'hello'
}
console.log(fn)

fn().then((msg)=>console.log(msg))

async function asyncStatus(){
   try{ console.log('Hi')
    res=await reachA
    console.log(res)
    console.log('bye')
}
catch(error){
    console.log(error)
}
}

asyncStatus()