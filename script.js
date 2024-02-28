const hoursHtml =document.querySelector("#hoursHtml")
const minutesHtml =document.querySelector("#minutesHtml")


function setAlarm(){
   let h=hoursHtml.innerVal;
  // let m=minutesHtml.innerValue;
  console.log("h")
  setAlarm.innerHTML=h+":"+ m +":00"
}

setInterval(() => {
    let timefrompc=new Date()
    Time_in_Html.innerHTML=timefrompc.
    toLocaleTimeString()    
    },1000);
   
    let checkInterval=setInterval(() => {
     let alarmtime=setAlarm.innerHTML;
     alarmtime=alarmtime.split(":")
      let alarmhours=alarmtime[0];
      let alarmminutes=alarmtime[1];
      let systemTime=new Date();
      let systemhours=systemTime.getHours();
      let systemminutes=systemTime.getMinutes();  
      if(systemhours>12){
        systemhours=systemhours-12;
      } 
      if(alarmhours==systemhours &&
      alarmminutes==systemminutes){
        alarmSound.play()  
      } 
    },1000);