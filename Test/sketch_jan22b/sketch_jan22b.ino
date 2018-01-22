int switchstate = 0;

void setup() {
  // put your setup code here, to run once:
  
  Serial.begin(9600);
  pinMode(2, INPUT);
  pinMode(3, OUTPUT);
  pinMode(4, OUTPUT);
  pinMode(5, OUTPUT);
}

void loop() {

  char input = Serial.read();
  
  checkInput(input);
  
  // put your main code here, to run repeatedly:
  switchstate = digitalRead(2);
  
  if (switchstate == LOW) {
    digitalWrite(3, LOW);
    digitalWrite(4, LOW);
    digitalWrite(5, LOW);
  } else {
    digitalWrite(3, HIGH);
    digitalWrite(4, HIGH);
    digitalWrite(5, HIGH);
    Serial.println("Button pressed");
  }
}

void checkInput(char input) {
  if (input == 'a') {
    digitalWrite(5, HIGH);
    delay(1000);
    digitalWrite(5, LOW);
    
  } 
}





