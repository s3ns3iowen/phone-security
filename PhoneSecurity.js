//Ask the user for his/her name
user_name = prompt('What is your name?');

console.log('Hello,', user_name, '!');

const pin = '1234';
const user_pin = '';
const pin_count = 0;
const pin_limit = 3;
let out_of_pin_trials = false;

while(user_pin != pin && !out_of_pin_trials){
    if (pin_count < pin_limit){
        user_pin = prompt('Enter your PIN here:');
        pin_count += 1;
        if (pin_count == 1 && user_pin != pin) {
            console.log('Incorrect input! You have 2 trials left');
        } else if (pin_count == 2 && user_pin != pin){
            console.log('Incorrect input! You have 1 trial left');
        }
    } else {
        out_of_pin_trials = true;
    }
}

if (out_of_pin_trials) {
    console.log('You have reached maximum no. of trials, enter SIM PUK to continue');
} else {
    console.log('Welcome Back', user_name, '!');
}