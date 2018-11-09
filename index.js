class StopWatch {

    constructor() {
        this.time = 0;
        this.interval = undefined;
        this.running = false;
        this.startTime = undefined;
        this.endTime = undefined;
    }

    start(cb) {
        this.interval = setInterval(() => {
            this.time++;
            if(cb) cb();
        },  1000);
        this.running = true;
        this.startTime = new Date();
    }

    stop() {
        if(this.interval)
            clearInterval(this.interval);
        this.running = false;
        this.endTime = new Date();
    }

    reset() {
        this.stop();
        this.time = 0;
        this.interval = undefined;
        this.running = false;
        this.startTime = undefined;
        this.endTime = undefined;
    }

    isRunning() {
        return this.running;
    }

    getTime() {
        return this.time;
    }

    getStartTime() {
        return this.startTime;
    }

    getEndTime() {
        return this.endTime;
    }

    /**
     * Returns time as string with format : mm:ss.
     */
    getTimeString() {
        const minutes = Math.floor(this.time / 60);
        const seconds = this.time - minutes * 60;

        let response = '';
        response+=minutes<10?'0'+minutes:minutes.toString();
        response+=':';
        response+=seconds<10?'0'+seconds:seconds.toString();

        return response;
    }
}

module.exports = new StopWatch();