setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
  const currentDate = new Date()
  var seconds = currentDate.getSeconds()
  var minutes = currentDate.getMinutes()
  var hours = currentDate.getHours()

  // console.log("hours=",hours)
  const city = gettingCity();

  if(city=="newyork"){
    if(hours - 10>=0){
      hours = hours - 10
    }else{
      hours = 12+hours-10;
    }
    if(minutes - 30>=0){
      minutes = minutes -30
    }else{
      hours = hours -1
      minutes = 60 + minutes - 30
    }
    
  }
  else if(city=="berlin"){
    if(hours - 4>=0){
      hours = hours - 4
    }else{
      hours = 12+hours-4;
    }
    if(minutes - 30>=0){
      minutes = minutes -30
    }else{
      hours = hours -1
      minutes = 60 + minutes - 30
    }

  }

  else if(city=="pakistan"){
    
    if(minutes - 30>=0){
      minutes = minutes -30
    }else{
      hours = hours -1
      minutes = 60 + minutes - 30
    }

  }

  else if(city=="london"){
    if(hours - 5>=0){
      hours = hours - 5
    }else{
      hours = 12+hours-5;
    }
    if(minutes - 30>=0){
      minutes = minutes -30
    }else{
      hours = hours -1
      minutes = 60 + minutes - 30
    }

  }

  digital(hours, minutes, city)
  
  
  const secondsRatio = currentDate.getSeconds() / 60
  const minutesRatio = (secondsRatio + minutes) / 60
  const hoursRatio = (minutesRatio + hours) / 12
  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minutesRatio)
  setRotation(hourHand, hoursRatio)

  
  
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

function digital(hours,minutes,city){
  const digitalBox = document.getElementsByClassName('digital')[0];
  var city = city[0].toUpperCase()+city.slice(1);
  var ampm = "A.M."
  if(hours>12){
    hours = hours - 12;
    ampm = "P.M."
  }
  
  digitalBox.innerText=`Time in ${city} currently is ${hours}:${minutes} ${ampm}`

}

// getting country


function gettingCity(){
  const city = document.getElementById("city").value;
  console.log(city)
  return city
}


setClock()

