#include <stdio.h>
#include <stdlib.h>
#include <wiringPi.h>
#include <time.h>
#include <stdint.h>
#include <unistd.h>
#include "functions.c"

int p[5] = {7,0,2,3,6};
int turned = 0, again=0;

void init()
{

	wiringPiSetup();
	pinMode (7, OUTPUT);
	pinMode (0, OUTPUT);
	pinMode (2, OUTPUT);
	pinMode (3, OUTPUT);
	pinMode (6, OUTPUT);

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
	digitalWrite(6, HIGH);
	delay(t);
	cleanUp(p);
	if (mouseHeading == SOUTH){
		mouseRow +=1;
		addWall(WEST);
		addWall(EAST);
		removeWall(NORTH);
	}else if(mouseHeading == EAST){
		mouseColumn +=1;
		addWall(SOUTH);
		addWall(NORTH);
		removeWall(WEST);
	}else if(mouseHeading == NORTH){
		mouseRow -= 1;
		addWall(WEST);
		addWall(EAST);
		removeWall(SOUTH);
	}else{
		mouseColumn -= 1;
		addWall(NORTH);
		addWall(SOUTH);
		removeWall(EAST);
	}

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

        mouseColumn += 1;
        mouseHeading = EAST;

}
void pivotL(int t)
{
	digitalWrite(7, HIGH);
	digitalWrite(0, LOW);
	digitalWrite(2, HIGH);
	digitalWrite(3, LOW);
	digitalWrite(6, LOW);
	delay(t);
	cleanUp(p);

	changeHeading(mouseHeading);
}

int getCM() {

	int TRIG=27;
	int ECHO=25;	
	pinMode(TRIG, OUTPUT);
	pinMode(ECHO, INPUT);

	//TRIG pin must start LOW
	digitalWrite(TRIG, LOW);
	delay(30);

	//Send trig pulse
	digitalWrite(TRIG, HIGH);
	delayMicroseconds(20);
	digitalWrite(TRIG, LOW);

	//Wait for echo start
	while(digitalRead(ECHO) == LOW);

	//Wait for echo end
	long startTime = micros();
	while(digitalRead(ECHO) == HIGH);
	long travelTime = micros() - startTime;

	//Get distance in cm
	int distance = travelTime / 58;

	int ar[2] = {27,25};
	cleanUp(ar);

	return distance;
}

int getCM2() {

	int TRIG=4;
	int ECHO=5;
	pinMode(TRIG, OUTPUT);
	pinMode(ECHO, INPUT);

	//TRIG pin must start LOW
	digitalWrite(TRIG, LOW);
	delay(30);

	//Send trig pulse
	digitalWrite(TRIG, HIGH);
	delayMicroseconds(20);
	digitalWrite(TRIG, LOW);

	//Wait for echo start
	while(digitalRead(ECHO) == LOW);

	//Wait for echo end
	long startTime = micros();
	while(digitalRead(ECHO) == HIGH);
	long travelTime = micros() - startTime;

	//Get distance in cm
	int distance = travelTime / 58;

	int ar[2] = {4,5};
	cleanUp(ar);

	return distance;
}

void check(){
	int dist = getCM();

	if(dist < 15){
	printf("too close\n");
	if(turned == 1){
	addWall(EAST);
	}else{
	addWall(SOUTH);
	}
	backwards(200);
	pivotL(1300);
	dist=getCM();
		if(dist < 15){
			printf("too close again...\n");
			pivotL(1000);
			backwards(500);
			dist = getCM();
			if(dist < 15){
			
				printf("giving up...\n");
				exit(0);	
			}
		}
	}
}

int main()
{
	init();
	int  side;
	//char map[5][5];
	//printf("distanc: %.2f cm", ping());
	int i=0;
	//mouseRow = 4;
	//mouseColumn = 0;
	//mouseHeading = NORTH;
	//values[0][0]=255;
	//addWall(EAST);

	Maze();
	print();

	//forward(1500);
	while(i < 50)
	{
		if(mouseRow == 19 || mouseColumn == 9)
			exit(0);						
	
		check();
		side = getCM2();
		forward(1500);
		system("clear");
        	Maze();
        	print();

		if(side < 15){
			turnL(200);
		     	//addWall(WEST);
			system("clear");
        		Maze();
   		     	print();
			
			side=getCM2();
			if(side < 15){
			 turnL(150);
        		system("clear");
        		Maze();
        		print();
			}
			//i++;
		}else if(side > 15){
			turnR(200);
			system("clear");
        		Maze();
        		print();

		}else {
			forward(10);
			system("clear");
        		Maze();
        		print();

		}
		i++;
	}
	Maze();
	print();
	//cleanUp(p);
	return 0;

}
// gcc -Wall -o ctest ctest.c -lwiringPi



