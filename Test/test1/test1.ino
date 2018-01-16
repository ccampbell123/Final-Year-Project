void setup() {
  Serial.begin(9600);
  pinMode(11, OUTPUT);
  pinMode(12, OUTPUT);
  pinMode(13, OUTPUT);
  
}

void loop() {
  if (Serial.available() > 0) {
    char input = Serial.read();
    if (input == '1') {
      digitalWrite(11, HIGH);
      Serial.println("RED ON!");
    }
    if (input == '2') {
      digitalWrite(11, LOW);
      Serial.println("RED OFF!");
    }
    if (input == '3') {
      digitalWrite(12, HIGH);
      Serial.println("YELLOW ON!");
    }
    if (input == '4') {
      digitalWrite(12, LOW); 
      Serial.println("YELLOW OFF!");
    }
    if (input == '5') {
      digitalWrite(10, HIGH);
      Serial.println("GREEN ON!");
    }
    if (input == '6') { 
      digitalWrite(10, LOW);
      Serial.println("GREEN OFF!");
    }
  }
}
