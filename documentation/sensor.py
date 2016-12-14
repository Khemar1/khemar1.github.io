import RPi.GPIO as GPIO
import time


def distance():
    GPIO.setmode(GPIO.BOARD)

    TRIG = 35
    ECHO = 37

    GPIO.setup(TRIG, GPIO.OUT)
    GPIO.setup(TRIG, 0)

    GPIO.setup(ECHO, GPIO.IN)

    time.sleep(0.1)

    #print "Starting Measurment..."

    GPIO.output(TRIG, 1)
    time.sleep(0.00001)
    GPIO.output(TRIG, 0)

    while GPIO.input(ECHO) == 0:
        pass
    start = time.time()

    while GPIO.input(ECHO) == 1:
        pass
    stop = time.time()

    tl = (stop - start) 
    distance = tl / 0.000148
    
    return distance


print(distance())
GPIO.cleanup()
