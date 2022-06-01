'use strict';

// function run() {
//   console.log(this);
//   console.log(`I've done run in ${this.city}`);
// }

// run();

// function run1(city) {
//   console.log(`I've done run in ${city}`);
// }

// ===
// 1. what is context? +++
// 2. when context is lost? +++
// 3. how to fix context?

const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  intervalId: null,
  // input: none
  // output: undefined
  startTimer() {
    this.intervalId = setInterval(() => {
      this.secondsPassed += 1;

      if (this.secondsPassed == 60) {
        this.minsPassed += 1;
        this.secondsPassed = 0;
      }
    }, 1000);
  },
  stopTimer() {
    clearTimeout(this.intervalId);
  },
  getTime() {
    if (this.secondsPassed < 10) {
      return `${this.minsPassed}:0${this.secondsPassed}`;
    }
    return `${this.minsPassed}:${this.secondsPassed}`;
  },
  resetTimer() {
    this.secondsPassed = 0;
    this.minsPassed = 0;
  },
};

//test data
timer.startTimer();
// timer.stopTimer();
// timer.resetTimer();

// timer.stopTimer();
// console.log(timer.getTime());
