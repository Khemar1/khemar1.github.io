import RPi.GPIO as gpio
import time
import sys
import Tkinter as tk
from bluetooth import *
import os

gpio.setmode(gpio.BOARD)

def init():
	gpio.setmode(gpio.BOARD)
	gpio.setup(7, gpio.OUT)
	gpio.setup(11, gpio.OUT)
	gpio.setup(13, gpio.OUT)
	gpio.setup(15, gpio.OUT)

def forward(tf):	
	gpio.output(7, False)
	gpio.output(11, True)
	gpio.output(13, True)
	gpio.output(15, False)
	time.sleep(tf)
	gpio.cleanup()

def reverse(tf):	
	gpio.output(7, True)
	gpio.output(11, False)
	gpio.output(13, False)
	gpio.output(15, True)
	time.sleep(tf)
	gpio.cleanup()
	
def turn_left(tf):	
	gpio.output(7, True)
	gpio.output(11, True)
	gpio.output(13, True)
	gpio.output(15, False)
	time.sleep(tf)
	gpio.cleanup()

def turn_right(tf):	
	gpio.output(7, False)
	gpio.output(11, True)
	gpio.output(13, False)
	gpio.output(15, False)
	time.sleep(tf)
	gpio.cleanup()

def pivot_left(tf):	
	gpio.output(7, True)
	gpio.output(11, False)
	gpio.output(13, True)
	gpio.output(15, False)
	time.sleep(tf)
	gpio.cleanup()	

def pivot_right(tf):	
	gpio.output(7, False)
	gpio.output(11, True)
	gpio.output(13, False)
	gpio.output(15, True)
	time.sleep(tf)
	gpio.cleanup()

def stop():
        time.sleep(1)
        gpio.cleanup()
        

server_sock=BluetoothSocket( RFCOMM )
server_sock.bind(("",PORT_ANY))
server_sock.listen(1)

port = server_sock.getsockname()[1]

uuid = "00001101-0000-1000-8000-00805f9b34fb"

advertise_service( server_sock, "SampleServer",
                   service_id = uuid,
                   service_classes = [ uuid, SERIAL_PORT_CLASS ],
                   profiles = [ SERIAL_PORT_PROFILE ], 
#                   protocols = [ OBEX_UUID ] 
                    )
                   
print("Waiting for connection on RFCOMM channel %d" % port)

client_sock, client_info = server_sock.accept()
print("Accepted connection from ", client_info)

try:
    while True:
        init()
        data = client_sock.recv(1024)
        
	if data == 'upp' :
                print("Going up")
		forward(0.030)
               # os.system("sudo python forward.py")
	if data == 'downn' :
                print("Going down")
		reverse(0.030)
		
	if data == 'leftt' :
                print("Going left")
		turn_left(0.030)
		
	if data == 'rightt' :
                print("Going right")
		turn_right(0.030)

	if data == 'go':
                print("starting mapping")
                file = open("file.txt","r")
                l = file.read(1024)
                while (l):
                        client_sock.send(l)
                        l=file.read(1024)
                file.close()
        if data == 'stop':
                stop()
		
	data = '/0'
	
except IOError:
    pass

print("disconnected")

client_sock.close()
server_sock.close()
print("all done")
