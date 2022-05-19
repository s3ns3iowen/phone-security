# Phone Security
This is an algorithm for a mobile phone PIN unlock system using JavaScript.

## More Details

1. The user is allowed 3 attempts to input his/her 4 digit passcode
2. Every wrong input returns an error message with the amount of trials left. Maximum number of trials is 3
3. Correct input returns a welcome message into the mobile phone
4. If the no. of trials are exhausted, the system automatically locks and prompts the user to input a SIM card PUK of 8 digits to unlock the system.
5. Repeat the same procedure until the no. of trials (3) are exhausted after which the system prompts the user to take the mobile phone back to the manufacturer.

Assume the user has the following presets:
PIN: 1234
SIM card PUK: 123456789
