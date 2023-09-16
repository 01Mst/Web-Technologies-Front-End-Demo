let ampm=document.getElementById('ampm')
let hr1=document.getElementById('hours')

function displayTime(){
    let dateTime=new Date();
    let hr=zero(dateTime.getHours());
    let min=zero(dateTime.getMinutes());
    let sec=zero(dateTime.getSeconds());
if(hr>12){
    hr=hr-12
    ampm.innerHTML='PM'
   
}
function zero(val){
   return val<10?"0"+val:val
}
   

    document.getElementById('hours').innerHTML=hr;
    document.getElementById('minutes').innerHTML=min;
    document.getElementById('seconds').innerHTML=sec;

}
setInterval(displayTime,100)