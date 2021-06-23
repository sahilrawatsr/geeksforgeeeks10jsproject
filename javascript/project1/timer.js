const daysEL= document.getElementById('days')
const hoursEL=document.getElementById('hours')
const minsEL=document.getElementById('mins')
const secsEL=document.getElementById('secs')

const newYear='1 jan 2022'
function countdown(){
    const newYearDate= new Date(newYear);
    const currentDate= new Date();
    const totalSeconds = (newYearDate - currentDate) / 1000;

    const days= Math.floor(totalSeconds / 3600 / 24);
    const hours= Math.floor(totalSeconds/3600)%24;
    const mins=Math.floor(totalSeconds/60)%60;
    const secs=Math.floor(totalSeconds)%60;
    
    daysEL.innerHTML = formateTime(days);
    hoursEL.innerHTML = formateTime(hours);
    minsEL.innerHTML = formateTime(mins);
    secsEL.innerHTML = formateTime(secs);


}

function formateTime(time){
    return time<10?`0${time}`:time;
}

countdown();
setInterval(countdown,1000);
