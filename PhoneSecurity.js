//Ask the user for his/her name
user_name = prompt('What is your name?');

console.log('Hello,', user_name, '!');

let pin = '1234';
let user_pin = '';
let pin_count = 0;
let pin_limit = 3;
let out_of_pin_trials = false;

while(user_pin != pin && !out_of_pin_trials){
    if (pin_count < pin_limit){
        user_pin = prompt('Enter your PIN here:');
        pin_count += 1;
        if (pin_count == 1 && user_pin != pin) {
            alert('Incorrect input! You have 2 trials left');
        } else if (pin_count == 2 && user_pin != pin){
            alert('Incorrect input! You have 1 trial left');
        }
    } else {
        out_of_pin_trials = true;
    }
}

if (out_of_pin_trials) {
    alert('You have reached maximum no. of trials, enter SIM PUK to continue');

    let puk_number = '12345678';
    let user_puk = '';
    let puk_count = 0;
    let puk_limit = 3;
    let out_of_puk_trials = false;

    while(user_puk != puk_number && !out_of_puk_trials){
        if (puk_count < puk_limit){
            user_puk = prompt('Enter your SIM PUK here:');
            puk_count += 1;
            if (puk_count == 1 && user_puk != puk_number) {
                alert('Incorrect input! You have 2 trials left');
            } else if (puk_count == 2 && user_puk != puk_number){
                alert('Incorrect input! You have 1 trial left');
            }
        } else {
            out_of_puk_trials = true;
        }
    }

    if (out_of_puk_trials) {
        alert('You have been permanently barred, kindly visit our nearest centre.');
    } else {
        console.log('Welcome Back', user_name, '!');
    }

} else {
    console.log('Welcome Back', user_name, '!');
}