var contain = document.querySelector(".contain");
var countDownContainer = document.querySelector(".countDownContainer");
var lapDisplay = document.querySelector(".lapDisplay");
var lapList = document.querySelector(".listDisplay");

var millisecond1 = document.querySelector("#millisecond1");
var millisecond10 = document.querySelector("#millisecond10");
var second1 = document.querySelector("#second1");
var second10 = document.querySelector("#second10");
var minute1 = document.querySelector("#minute1");
var minute10 = document.querySelector("#minute10");

var second1Count = document.querySelector("#second1Count");
var second10Count = document.querySelector("#second10Count");
var minute1Count= document.querySelector("#minute1Count");
var minute10Count = document.querySelector("#minute10Count");

var digit1 = 0;
var digit2 = 0;
var digit3 = 0;
var digit4 = 0;
var digit5 = 0;
var digit6 = 0;

var timer = document.querySelector("#timer");
var countDown = document.querySelector("#countDown");

var start = document.querySelector("#start");
var stop = document.querySelector("#stop");
var reset = document.querySelector("#reset");
var lap = document.querySelector("#lap");
var day = document.querySelector("#dayButton");
var night = document.querySelector("#nightButton");
var body = document.querySelector("body");
var clock = document.querySelector(".clock");
var clockCount = document.querySelector(".clockCount");
var list = document.querySelector("ul");

var minuteUp = document.querySelector("#minuteUp");
var secondUp = document.querySelector("#secondUp");
var minuteDown = document.querySelector("#minuteDown");
var secondDown = document.querySelector("#secondDown");
var startCount = document.querySelector("#startCount");
var stopCount = document.querySelector("#stopCount");
var reseCount = document.querySelector("#resetCount");


day.disabled = true;
lap.disabled = true;
timer.disabled = true;
countDown.disabled = false;
stop.disabled = true;
stopCount.disabled = true;

var myvar;

start.addEventListener("click", function(){
    var st = Date.now();
    
   myvar = setInterval(function(){
    var sta = Date.now() - st;
    digit1 = Math.round(sta / 10);
    if(sta >= 100 || digit1 >= 10){
        changeMillisecond10();
    }
    else{
        millisecond1.textContent = digit1;
    }
    
    if(sta >= 100){
        st = Date.now();
    }
    


    start.disabled = true;
    stop.disabled = false;
    reset.disabled = true;
    lap.disabled = false;
    timer.disabled = true;
    countDown.disabled = true;
    
    if(digit6 == 9 && digit5 == 9 && digit4 == 9 && digit3 == 9 && digit2 == 9 && digit1 == 9){
        alert("Limit reached, restarting everything.");
        clearInterval(myvar);
        start.disabled = false;
        stop.disabled = true;
        lap.disabled = true;
        reset.disabled = false;
        timer.disabled = false;
        countDown.disabled = false;

        digit6 = 0;
        digit5 = 0;
        digit4 = 0;
        digit3 = 0;
        digit2 = 0;
        digit1 = 0;

        millisecond1.textContent = digit1;
        millisecond10.textContent = digit2;
        second1.textContent = digit3;
        second10.textContent = digit4;
        minute1.textContent = digit5;
        minute10.textContent = digit6;

        var child = list.lastElementChild;
        while(child){
            list.removeChild(child);
            child = list.lastElementChild;
        }
    }
    
  },21);
})

stop.addEventListener("click", function(){
  clearInterval(myvar);
  start.disabled = false;
  stop.disabled = true;
  lap.disabled = true;
  reset.disabled = false;
  timer.disabled = false;
  countDown.disabled = false;

});
startCount.addEventListener("click", function(){
    var st = Date.now();
    
   myvar = setInterval(function(){
    var sta = Date.now() - st;
    if(sta >= 1000){
        digit1 -= 1;
        if(digit1 == -1){
            digit2 -= 1;
            digit1 = 9;
        }
        if(digit2 == -1){
            digit3 -= 1;
            digit2 = 5;
        }
        if(digit3 == -1){
            digit4 -= 1;
            digit3 = 9;
        }
        second1Count.textContent = digit1;
        second10Count.textContent = digit2;
        minute1Count.textContent = digit3;
        minute10Count.textContent = digit4;
        st = Date.now();
    }
    
    
    startCount.disabled = true;
    stopCount.disabled = false;
    resetCount.disabled = true;
    timer.disabled = true;
    countDown.disabled = true;
    minuteUp.disabled = true;
    minuteDown.disabled = true;
    secondUp.disabled = true;
    secondDown.disabled = true;
    if(digit4 == 0 && digit3 == 0 && digit2 == 0 && digit1 == 0){
        clearInterval(myvar);
        
        startCount.disabled = false;
        stopCount.disabled = true;
        resetCount.disabled = false;
        minuteUp.disabled = false;
        minuteDown.disabled = false;
        secondUp.disabled = false;
        secondDown.disabled = false;
        alert('times up');
    }
    
  },1);
})

stopCount.addEventListener("click", function(){
  clearInterval(myvar);
  startCount.disabled = false;
  stopCount.disabled = true;
  resetCount.disabled = false;
  timer.disabled = false;
  countDown.disabled = false;
  minuteUp.disabled = false;
  minuteDown.disabled = false;
  secondUp.disabled = false;
  secondDown.disabled = false;


});
reset.addEventListener("click", function(){
  digit1 = 0;
  digit2 = 0;
  digit3 = 0;
  digit4 = 0;
  digit5 = 0;
  digit6 = 0;

  millisecond1.textContent = digit1;
  millisecond10.textContent = digit2;
  second1.textContent = digit3;
  second10.textContent = digit4;
  minute1.textContent = digit5;
  minute10.textContent = digit6;

  var child = list.lastElementChild;
  while(child){
    list.removeChild(child);
    child = list.lastElementChild;
  }
});
resetCount.addEventListener("click", function(){
    digit1 = 0;
    digit2 = 0;
    digit3 = 0;
    digit4 = 0;
  

    second1Count.textContent = digit1;
    second10Count.textContent = digit2;
    minute1Count.textContent = digit3;
    minute10Count.textContent = digit4;

  });

lap.addEventListener("click", function(){
  var item = document.createElement("li");
  item.appendChild(document.createTextNode((list.childElementCount + 1) + ". " + digit6 + digit5 + ":"
  + digit4 + digit3 + ":" + digit2 + digit1));
  list.appendChild(item);
})

minuteUp.addEventListener('click',function(){
    digit3 += 1;
    if(digit3 == 10){
        digit4 += 1;
        digit3 = 0;
    }
    minute10Count.textContent = digit4;
    minute1Count.textContent = digit3;
});
secondUp.addEventListener('click',function(){
    digit1 += 1;
    if(digit1 == 10){
        digit2 += 1;
        digit1 = 0;
    }
    if(digit2 == 6){
        digit2 = 0;
    }
    second10Count.textContent = digit2;
    second1Count.textContent = digit1;
});
minuteDown.addEventListener('click',function(){
    digit3 -= 1;
    if(digit3 == -1){
        digit4 -= 1;
        digit3 = 9;
    }
    if(digit4 == -1){
        digit4 = 9;
    }
    minute10Count.textContent = digit4;
    minute1Count.textContent = digit3;
});
secondDown.addEventListener('click',function(){
    digit1 -= 1;
    if(digit1 == -1){
        digit2 -= 1;
        digit1 = 9;
    }
    if(digit2 == -1){
        digit2 = 5;
    }
    second10Count.textContent = digit2;
    second1Count.textContent = digit1;
});


day.addEventListener("click", function(){
  day.disabled = true;
  night.disabled = false;
  body.classList.remove("night");
  body.classList.add("day");
  clock.className = 'clock';
  clockCount.className = 'clockCount';
})
night.addEventListener("click", function(){
  day.disabled = false;
  night.disabled = true;
  body.classList.remove("day");
  body.classList.add("night");
  clock.className = 'nightclock';
  clockCount.className = 'nightclockCount';
})

timer.addEventListener('click', function(){
    

    digit1 = 0;
    digit2 = 0;
    digit3 = 0;
    digit4 = 0;
    digit5 = 0;
    digit6 = 0;

    minute10.textContent = digit6;
    minute1.textContent = digit5;
    second10.textContent = digit4;
    second1.textContent = digit3;
    millisecond10.textContent = digit2;
    millisecond1.textContent = digit1;
    
    timer.disabled = true;
    countDown.disabled = false;
    contain.style.display = "block";
    lapDisplay.style.display = "block";
    lapList.style.display = "block";
    countDownContainer.style.display = "none";
});
countDown.addEventListener('click', function(){
    var child = list.lastElementChild;
    while(child){
        list.removeChild(child);
        child = list.lastElementChild;
    }
    lapDisplay.style.display = "none";
    lapList.style.display = "none";
    digit1 = 0;
    digit2 = 0;
    digit3 = 0;
    digit4 = 0;
    digit5 = 0;
    digit6 = 0;

    minute10Count.textContent = digit4;
    minute1Count.textContent = digit3;
    second10Count.textContent = digit2;
    second1Count.textContent = digit1;

    timer.disabled = false;
    countDown.disabled = true;
    contain.style.display = "none";
    countDownContainer.style.display = "block";
});

function changeMillisecond10(){
  
    digit2 += 1;
    digit1 = digit1 % 10;
    millisecond1.textContent = digit1;
    if(digit2 == 10){
        changeSecond1();
    }
    millisecond10.textContent = digit2;
}
function changeSecond1(){
  
    digit3 += 1;
    digit2 = 0;
    
    
    if(digit3 == 10)
    {
        changeSecond10();
    }
    second1.textContent = digit3;
  
}
function changeSecond10(){
  
    digit4 += 1;
    digit3 = 0;
    
    
    if(digit4 == 6){
        changeMinute1();
    }
    second10.textContent = digit4;
  
}
function changeMinute1(){
  
    digit5 += 1;
    digit4 = 0;
    
    
    if(digit5 == 10){
        changeMinute10();
        
      }
      minute1.textContent = digit5;
  
}
function changeMinute10(){
  
    digit6 += 1;
    digit5 = 0;
    
    
    
  if(digit6 == 100){
    digit6 = 0;
  }
  minute10.textContent = digit6;
}
