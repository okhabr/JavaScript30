function getTime() {
  let today = new Date();
  let h = (today.getHours()/12)*360;
  let m = (today.getMinutes()/60)*360;
  let s = (today.getSeconds()/60)*360;

document.querySelector(`.hour-hand`).style.transform = `rotate(${h}deg)`;
document.querySelector(`.min-hand`).style.transform = `rotate(${m}deg)`;
document.querySelector(`.second-hand`).style.transform = `rotate(${s}deg)`;
} 
setInterval( getTime, 1000);
