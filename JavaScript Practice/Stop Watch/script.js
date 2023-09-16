let startbtn=document.getElementById('start')
let stopbtn=document.getElementById('stop')
let resetbtn=document.getElementById('reset')

let hour=0;
let minute=0;
let second=0;
let count=0;



startbtn.addEventListener('click',function(){
    timer=true;
    stopwatch();
});

stopbtn.addEventListener('click',function(){
    timer=false;
});

resetbtn.addEventListener('click',function(){
    timer=false;
    hour=0;
    minute=0;
    second=0;
    count=0;

    document.getElementById('hours').innerHTML="00";
    document.getElementById('minutes').innerHTML="00";
    document.getElementById('seconds').innerHTML="00";
    document.getElementById('counts').innerHTML="00";

});

function stopwatch(){
    if(timer){
        count++;

    if(count==100){
        second++;
        count=0;
    }
    if(second==60){
        minute++;
        second=0;
    }
    if(minute==60){
       hour++;
       minute=0;
       second=0;
    }

    let hrstring=hour;
    let minstring=minute;
    let secstring=second;
    let countstring=count;


    if(hrstring<10){
        hrstring="0"+hrstring;
    }
    if(minstring<10){
        minstring="0"+minstring;
    }
    if(secstring<10){
        secstring="0"+secstring;
    }
    if(countstring<10){
        countstring="0"+countstring;
    }

    document.getElementById('hours').innerHTML=hrstring;
    document.getElementById('minutes').innerHTML=minstring;
    document.getElementById('seconds').innerHTML=secstring;
    document.getElementById('counts').innerHTML=countstring;
    
    setTimeout(stopwatch,10);
}
}