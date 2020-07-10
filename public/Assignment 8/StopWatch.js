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
    while (node.lastChild)
        node.removeChild(node.lastChild);
}

let stopwatch = new Stopwatch(
    document.querySelector('.stopwatch'),
    document.querySelector('.results'));