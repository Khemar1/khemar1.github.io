#include <stdio.h>
#include <stdlib.h>
#include <wiringPi.h>
#include <time.h>
#include <stdint.h>
#include <unistd.h>

int p[4] = {7,0,2,3};

void init()
{

	wiringPiSetup();
	pinMode (7, OUTPUT);
	pinMode (0, OUTPUT);
	pinMode (2, OUTPUT);
	pinMode (3, OUTPUT);

}

void cleanUp(int pins[])
{
	int i =0;
	for(i = 0; i < sizeof(pins); i++)
	{
		digitalWrite(pins[i], LOW);
	}
}

void forward(int t)
{
	digitalWrite(7, HIGH);
	digitalWrite(0, LOW);
	digitalWrite(2, LOW);
	digitalWrite(3, HIGH);
	delay(t);
	cleanUp(p);
}
void backwards(int t)
{
	digitalWrite(7, LOW);
	digitalWrite(0, HIGH);
	digitalWrite(2, HIGH);
	digitalWrite(3, LOW);
	delay(t);
	cleanUp(p);
}
void turnR(int t)
{
	digitalWrite(7, LOW);
	digitalWrite(0, LOW);
	digitalWrite(2, LOW);
	digitalWrite(3, HIGH);
	delay(t);
	cleanUp(p);
}
void turnL(int t)
{
	digitalWrite(7, HIGH);
	digitalWrite(0, LOW);
	digitalWrite(2, LOW);
	digitalWrite(3, LOW);
	delay(t);
	cleanUp(p);
}
void pivotR(int t)
{
	digitalWrite(7, LOW);
	digitalWrite(0, HIGH);
	digitalWrite(2, LOW);
	digitalWrite(3, HIGH);
	delay(t);
	cleanUp(p);
}
void pivotL(int t)
{
	digitalWrite(7, HIGH);
	digitalWrite(0, LOW);
	digitalWrite(2, HIGH);
	digitalWrite(3, LOW);
	delay(t);
	cleanUp(p);
}

static float ping()
{
	int TRIG = 27;
	int ECHO = 25;
	long ping      = 0;
	long pong      = 0;
	float distance = 0;
	long timeout   = 5000000000000; // 0.5 sec ~ 171 m

	pinMode(TRIG, OUTPUT);
	pinMode(ECHO, INPUT);

	// Ensure trigger is low.
	digitalWrite(TRIG, LOW);
	delay(50);

	// Trigger the ping.
	digitalWrite(TRIG, HIGH);
	delayMicroseconds(10); 
	digitalWrite(TRIG, LOW);

	// Wait for ping response, or timeout.
	while (digitalRead(ECHO) == LOW && micros() < timeout) {
	}

	// Cancel on timeout.
	if (micros() > timeout) {
		printf("Out of range.\n");
		return 0;
	}

	ping = micros();

	// Wait for pong response, or timeout.
	while (digitalRead(ECHO) == HIGH && micros() < timeout) {
	}

	// Cancel on timeout.
	if (micros() > timeout) {
		printf("Out of range.\n");
		return 0;
	}

	pong = micros();

	// Convert ping duration to distance.
	distance = (float) (pong - ping) * 0.017150;

	//printf("Distance: %.2f cm.\n", distance);

	int ar[2] = {27,25};
	cleanUp(ar);	
	return distance;
}

int main()
{
	init();
	float dist;
	//printf("distanc: %.2f cm", ping());
	int i=0;
	while(i < 6)
	{
		dist=ping();

		if(dist < 20.0){
			i++;
			backwards(400);
			pivotR(600);
		}else{
			forward(200);
		}
	}

	return 0;

}
// gcc -Wall -o ctest ctest.c -lwiringPi




