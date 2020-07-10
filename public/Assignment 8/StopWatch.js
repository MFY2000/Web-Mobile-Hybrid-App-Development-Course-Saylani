class Stopwatch {
    constructor(display, results) {
        this.running = false;
        this.display = display;
        this.results = results;
        this.laps = [];
        this.reset();
        this.print(this.times);
    }
    
    reset() {
        this.times = [ 0, 0, 0 ];
    }
    
    start() {
        document.getElementById("PLAY_STOP").innerHTML = "<img onClick='stopwatch.stop();' height='50px' width='50px' src='../Images/Assignment 8/STOP.png' alt='Stop'>"

        if (!this.time) this.time = performance.now();
        if (!this.running) {
            this.running = true;
            requestAnimationFrame(this.step.bind(this));
        }
    }
    
    lap() {
        let time = this.times;
        this.laps.push(this.times);
        let temp = `<tr><th scope="row">${this.laps.length}</th><td>Lap no ${this.laps.length}</td><td>${this.format(time)}</td></tr>`
        document.getElementById("results").innerHTML += (temp);
    }
    
    stop() {
        document.getElementById("PLAY_STOP").innerHTML = "<img onClick='stopwatch.start();' height='50px' width='50px' src='../Images/Assignment 8/play-vector-png-.png' alt='Stop'>"
        this.running = false;
        this.time = null;
    }

    restart() {
        if (!this.time) this.time = performance.now();
        
        this.start();
        this.reset();
    }
    
    clear() {
        this.laps = [];
        clearChildren(this.results);
    }
    
    step(timestamp) {
        if (!this.running) return;
        this.calculate(timestamp);
        this.time = timestamp;
        this.print();
        requestAnimationFrame(this.step.bind(this));
    }
    
    calculate(timestamp) {
        var diff = timestamp - this.time;
        // Hundredths of a second are 100 ms
        this.times[2] += diff / 10;
        // Seconds are 100 hundredths of a second
        if (this.times[2] >= 100) {
            this.times[1] += 1;
            this.times[2] -= 100;
        }
        // Minutes are 60 seconds
        if (this.times[1] >= 60) {
            this.times[0] += 1;
            this.times[1] -= 60;
        }
    }
    
    print() {
        this.display.innerText = this.format(this.times);
    }
    
    format(times) {
        return `\
${pad0(times[0], 2)}:\
${pad0(times[1], 2)}:\
${pad0(Math.floor(times[2]), 2)}`;
    }
}

function pad0(value, count) {
    var result = value.toString();
    for (; result.length < count; --count)
        result = '0' + result;
    return result;
}

function clearChildren(node) {
    document.getElementById("results").innerHTML = null;
    
}

let stopwatch = new Stopwatch(
    document.querySelector('.stopwatch'),
    document.querySelector('.results'));












    
/**
 * Stopwatch Constructor
 */

 Stopwatch = function() { };

 Stopwatch.prototype = {
    startTime: 0,
    running: false,
    elapsed: undefined,
 
    start: function() {
       this.startTime = +new Date();
       this.elapsedTime = undefined;
       this.running = true;
    },
    stop: function() {
       this.elapsed = (+new Date()) - this.startTime;
       this.running = false;
    },
    getElapsedTime: function() {
       if (this.running) {
          return (+new Date()) - this.startTime;
       }
       else {
         return this.elapsed;
       }
    },
    isRunning: function() {
       return this.running;
    },
    reset: function() {
      this.elapsed = 0;
    }
 };
 
 
 /****************************************************/
 /****** Using the Stopwatch for good stuff **********/
 
 var canvas = document.getElementById('stopwatch'),
     ctx = canvas.getContext('2d'),
     startStopButton = document.getElementById('startStopButton'),
     secondsInput = document.getElementById('seconds'),
 
     TICK_WIDTH = 15,
     TEXT_MARGIN = 135,
     CENTROID_RADIUS = 10,
     DEGREE_DIAL_MARGIN = 55,
     TRACKING_DIAL_MARGIN = 80,
     DEGREE_ANNOTATIONS_TEXT_SIZE = 18,
     DEGREE_OUTER_DIAL_MARGIN = DEGREE_DIAL_MARGIN,
 
     CENTROID_STROKE_STYLE = 'rgba(0, 0, 0, 0.5)',
     CENTROID_FILL_STYLE ='rgba(80, 190, 240, 0.6)',
     GUIDEWIRE_FILL_STYLE = 'rgba(85, 190, 240, 0.8)',
     TICK_LONG_STROKE_STYLE = 'rgba(100, 140, 230, 0.9)',
     TICK_SHORT_STROKE_STYLE = 'rgba(100, 140, 230, 0.7)',   
     DEGREE_ANNOTATIONS_FILL_STYLE = 'rgba(0, 0, 230, 0.9)',
     TRACKING_DIAL_STROKING_STYLE = 'rgba(100, 140, 230, 0.5)',
 
     GUIDEWIRE_STROKE_STYLE = '#8ada55',
     GUIDEWIRE_FILL_STYLE = 'rgba(0, 0, 230, 0.9)';
 
     var circle = {
         x: canvas.width / 2,
         y: canvas.height / 2,
         radius: 150
     },
 
     timerSetting = 0,
     my_stopwatch = new Stopwatch();
 
 function windowToCanvas(canvas, x, y) {
    var bbox = canvas.getBoundingClientRect();
    return {
     x: x - bbox.left * (canvas.width  / bbox.width),
         y: y - bbox.top  * (canvas.height / bbox.height)
    };
 }
 
 // Drawing
 
 function drawCentroid() {
    ctx.beginPath();
        ctx.save();
            ctx.strokeStyle = CENTROID_STROKE_STYLE;
            ctx.fillStyle = CENTROID_FILL_STYLE;
         
            ctx.arc(circle.x, circle.y, CENTROID_RADIUS, 0, Math.PI*2, false);
            ctx.stroke();
            ctx.fill();
        ctx.restore();
 }
 
 function drawHand(loc) {
    var initialAngle = -Math.PI / 2 - (Math.PI / 180) * (timerSetting / 60 * 360),
        angle = initialAngle,
        stopwatchElapsed = my_stopwatch.getElapsedTime(),
        seconds,
        radius,
        endPt;
 
   if (stopwatchElapsed) {
      angle = -Math.PI / 2 - (Math.PI / 180) * ((timerSetting - stopwatchElapsed / 1000) / 60 * 360);
      seconds = parseFloat(timerSetting - stopwatchElapsed / 1000).toFixed(2);
 
      if (seconds > 0) {
          secondsInput.value = seconds;
      }
    }
 
    radius = circle.radius + TRACKING_DIAL_MARGIN;
 
    if (loc.x >= circle.x) {
     endPt = {
         x: circle.x + radius * Math.cos(angle),
             y: circle.y + radius * Math.sin(angle)
     };
    }
    else {
         endPt = {
         x: circle.x - radius * Math.cos(angle),
                 y: circle.y - radius * Math.sin(angle)
         };
    }
    
    ctx.save();
        ctx.strokeStyle = GUIDEWIRE_STROKE_STYLE;
        ctx.fillStyle = GUIDEWIRE_FILL_STYLE;
        ctx.lineWidth = 1.5;
 
        ctx.beginPath();
            ctx.moveTo(circle.x, circle.y);
            ctx.lineTo(endPt.x, endPt.y);
        ctx.stroke();
 
        ctx.beginPath();
            ctx.fillStyle = 'yellow';
            ctx.arc(endPt.x, endPt.y, 7, 0, Math.PI * 2, false);
        ctx.stroke();
        ctx.fill();
    ctx.restore();
 }
 
 function drawDegreeOuterDial() {
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
 
    ctx.arc(circle.x, circle.y, circle.radius +DEGREE_OUTER_DIAL_MARGIN, 0, Math.PI * 2, false);
 }
 
 function drawDegreeAnnotations() {
    var radius = circle.radius +TEXT_MARGIN;
 
    ctx.save();
     ctx.fillStyle = DEGREE_ANNOTATIONS_FILL_STYLE;
     ctx.font = DEGREE_ANNOTATIONS_TEXT_SIZE +'px Arial'; 
    
        for (var angle = Math.PI/2, i = 0; i < 60; angle += Math.PI/6, i += 5) {
         ctx.beginPath();
             ctx.fillText(i,
                 circle.x + Math.cos(angle) * (radius - TICK_WIDTH * 2),
                 circle.y - Math.sin(angle) * (radius - TICK_WIDTH*2)
             );
     }
    ctx.restore();
 }
    
 function drawDegreeDialTicks() {
    var radius = circle.radius + DEGREE_DIAL_MARGIN,
        ANGLE_MAX = 2 * Math.PI,
        ANGLE_DELTA = Math.PI / 64;
 
     ctx.save();
        for (var angle = 0, cnt = 0; angle < ANGLE_MAX; angle += ANGLE_DELTA, ++cnt) {
         ctx.beginPath();
 
               if (cnt % 4 === 0) {
             ctx.moveTo(
                 circle.x + Math.cos(angle) * (radius - TICK_WIDTH),
                             circle.y + Math.sin(angle) * (radius - TICK_WIDTH)
             );
                 ctx.lineTo(
                 circle.x + Math.cos(angle) * (radius),
                 circle.y + Math.sin(angle) * (radius)
             );
                  ctx.strokeStyle = TICK_LONG_STROKE_STYLE;
                  ctx.stroke();
               }
         else {
             ctx.moveTo(
                 circle.x + Math.cos(angle) * (radius - TICK_WIDTH / 2),
                             circle.y + Math.sin(angle) * (radius - TICK_WIDTH / 2)
             );
                 ctx.lineTo(
                 circle.x + Math.cos(angle) * (radius),
                             circle.y + Math.sin(angle) * (radius)
             );
                 ctx.strokeStyle = TICK_SHORT_STROKE_STYLE;
                 ctx.stroke();
         }
     }
     ctx.restore();
 }
 
 function drawDegreeTickDial() {
    ctx.save();
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.arc(circle.x, circle.y, circle.radius + DEGREE_DIAL_MARGIN - TICK_WIDTH, 0, Math.PI * 2, false);
        ctx.stroke();
    ctx.restore();
 }
 
 function drawTrackingDial() {
    ctx.save();
        ctx.strokeStyle = TRACKING_DIAL_STROKING_STYLE;
        ctx.beginPath();
            ctx.arc(circle.x, circle.y, circle.radius +TRACKING_DIAL_MARGIN, 0, Math.PI * 2, true);
        ctx.stroke();
    ctx.restore();
 }
 
 function drawDial() {
    var loc = {
     x: circle.x,
     y: circle.y
    };
    
    drawCentroid();
    drawHand(loc);
 
    drawTrackingDial();
    drawDegreeOuterDial();
 
    ctx.fillStyle = 'rgba(218, 165, 35, 0.2)';
    ctx.fill();
 
    ctx.beginPath();
        drawDegreeOuterDial();
    ctx.stroke();
     
    drawDegreeTickDial();
    drawDegreeDialTicks();
    drawDegreeAnnotations();
 }
 
 function redraw() {
     ctx.clearRect(0, 0, canvas.width, canvas.height); 
     drawDial();
 }
 
 function animate() {
    // Stopped running
    if (my_stopwatch.isRunning() && my_stopwatch.getElapsedTime() > timerSetting * 1000) {
        my_stopwatch.stop();
        secondsInput.value = 0;
     secondsInput.disabled = false;
     startStopButton.value = 'Start';
    }
    // Running
    else if (my_stopwatch.isRunning()) {
        redraw();
        requestAnimationFrame(animate);
    }
 }
 
 startStopButton.onclick = function(e) {
    var value = startStopButton.value;
 
    if (value === 'Start') {
        document.getElementById('time')
         .innerHTML = parseFloat(secondsInput.value);
    
       timerSetting = parseFloat(secondsInput.value);
       secondsInput.disabled = true;
       my_stopwatch.start();
       startStopButton.value = 'Stop';
       requestAnimationFrame(animate);
    }
    else {
       timerSetting = parseFloat(secondsInput.value);
       secondsInput.disabled = false;
       startStopButton.value = 'Start';
       my_stopwatch.stop();
    }
 
    my_stopwatch.reset();
 };
 
 secondsInput.onchange = function(e) {
    timerSetting = parseFloat(secondsInput.value);
    redraw();
 };
 
 // Init
 
 ctx.textAlign = 'center';
 ctx.textBaseline = 'middle';
 
 drawDial();