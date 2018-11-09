const stopwatch = require('../index.js');

function sleep(s) {
    return new Promise(resolve => setTimeout(resolve, s*1000));
  }

test('Test basic stopwatch', () => {
    const TIME_SECONDS = 3

    const now = new Date();
    stopwatch.start(() => console.log("tick"));
    expect(stopwatch.isRunning()).toBe(true);
    return sleep(TIME_SECONDS+1).then(() => {
        stopwatch.stop();
        
        console.log('stopwatch.getTime() : '+ stopwatch.getTime());
        expect(stopwatch.getTime()).toBe(TIME_SECONDS);

        expect(stopwatch.isRunning()).toBe(false);
        
        console.log('stopwatch.getTimeString() : '+stopwatch.getTimeString());
        return expect(stopwatch.getTimeString()).toBe("00:0"+TIME_SECONDS);
    })
    
    // setTimeout(() => {
        
    // }, TIME_SECONDS*1000);

})
