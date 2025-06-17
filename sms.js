function checkSmsLength() {
    let smsMessage = prompt("Andika ujumbe wako wa sms");
    let characterCount = smsMessage.length;
    let smsLimit = 160;
    console.log("Your sms message," + characterCount)
    let overlimit = characterCount > smsLimit
    console.log("Your SMS Message:", smsMessage);
     console.log("Character Count:", characterCount);
    if (overlimit) {
        console.log('Status: Exceeds standard SMS limit!');
    } else {
        console.log('Status: Within standard SMS limit.');
    }
    console.log('Tuma Salama!');
}