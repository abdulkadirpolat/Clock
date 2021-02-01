const secondClock = document.querySelector('.second-clock');
const minClock = document.querySelector('.min-clock'); 
const hourClock = document.querySelector('.hour-clock');

 
  
function fromDate(){
    const time = new Date();


    const second = time.getSeconds(); 
    const secondDeg = ((second/60 )*360 ) +90 ;
    secondClock.style.transform=`rotate(${secondDeg}deg)`;

    const min = time.getMinutes();
    const minDeg = ((min/60)*360 )+90 ;
    minClock.style.transform=`rotate(${minDeg}deg) `;

    const hour= time.getHours();
    const hourDeg = ((hour/12)*360 )+90  ;
    hourClock.style.transform=`rotate(${hourDeg}deg) `;

    }
   
 setInterval(fromDate,500)
 
 