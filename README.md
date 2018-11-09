# NodeJS module to handle a stopwatch a simple way
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest) [![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest)

Ok, well I developped this simple stopwatch module cause I needed it. It is pretty usefull if you need to handle a stopwatch easily.

## npm
`npm install gus-stopwatch`

## usage

```js
    const stopwatch = require('gus-stopwatch');

    //start takes an optional callback that is executed at each additional second. Pretty useful to update view or something
    stopwatch.start(() => console.log("one more second"));

    //well.. this stops the stopwatch. 
    stopwatch.stop();

    //reset stopwatch to zero and initial state
    stopwatch.reset();

    //return true if stopwatch is currently running
    stopwatch.isRunning() 

    //return current time in seconds
    stopwatch.getTime()

    //return datetime at which stopwatch was started
    stopwatch.getStartTime()

    //return datetime at which stopwatch was stopped.
    //caution, it must have been stopped, of course
    stopwatch.getEndTime() 

    //return a cool string display of the stopwatch
    // something like => 'mm:ss'
    stopwatch.getTimeString();
```