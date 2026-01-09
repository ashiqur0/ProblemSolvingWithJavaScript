/**
 * 🧠 Important Interview Point
 * 👉 Always check 3 && 5 first, otherwise numbers like 15 will match 3 or 5 early and never reach "PingPong".
 */

/**
 * Problem 10: PingPong Challenge
 * Write a function that prints numbers from 1 to 20.
 */

const pingPong = () => {
    for (let i = 1; i <= 20; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('PingPong');
        } else if (i % 3 === 0) {
            console.log('Ping');
        } else if (i % 5 === 0) {
            console.log('Pong');
        } else {
            console.log(i);
        }
    }
}
pingPong();
