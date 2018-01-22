# Final-Year-Project

https://q-a-assistant.info/computer-internet-technology/serialport-lib-parsers-readline-is-not-a-function-error-nodejs/528255

Next Task - Control i o (control leds on and off)

// Socket.IO message from the browser
socket.on('serialEvent', function (data) {

    // The message received as a String
    console.log(data);

    // Sending String character by character
    for(var i=0; i<data.length; i++){
        myPort.write(new Buffer(data[i], 'ascii'), function(err, results) {
            // console.log('Error: ' + err);
            // console.log('Results ' + results);
        });
    }

    // Sending the terminate character
    myPort.write(new Buffer('\n', 'ascii'), function(err, results) {
        // console.log('err ' + err);
        // console.log('results ' + results);
    });
});

arduino

String inData = "";

void loop(){
    while (Serial.available() > 0) {
        char received = Serial.read();
        inData.concat(received);

        // Process message when new line character is received
        if (received == '\n') {
            // Message is ready in inDate
        }
    }
}

https://stackoverflow.com/questions/15028240/raspberry-pi-arduino-node-js-and-serial-port?rq=1

