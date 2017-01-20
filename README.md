---
csl: ../../../../Desktop/apa.csl
bibliography: ../../../RPiCitations.bib
---

January 18, 2017

*Proposal for the development of AutoVehicle*

Prepared by [Khemar Bryan](khemar1.github.io), [Jan Yalda](janyalda.github.io),
[Bilal Al-Fanous](bilfnous.github.io)  
*Computer Engineering Technology Students*  


**AutoVehicle**
===============

Project Website : https://khemar1.github.io

 

Table of Contents
-----------------

1.  [Executive Summary](#executive-summary)

2.  [Background](#background)

3.  [Methodology](#methodology)

4.  [Concluding Remarks](#concluding-remarks)

5.  [References](#references)

 

### **Executive Summary**

As students in the Computer Engineering Technology program, we will be
integrating the knowledge and skills we have learned from our program into this
Internet of Things themed capstone project. This proposal requests the approval
to build the hardware portion that will connect to a database as well as to a
mobile device application. The internet connected hardware will include distance
sensors and actuators for controlling the movement of the vehicle. The database
will store the mapped area. The mobile device functionality will include remote
controlling the vehicle and displaying the mapped area and will be further
detailed in the mobile application proposal. I will continue to work together
this Winter semester with Jan Yalda and Bilal Al-Fanous, who also built similar
hardware last term and worked on the mobile application with me. The hardware
will be completed in CENG 317 Hardware Production Techniques independently and
the application will be completed in CENG 319 Software Project. These will be
integrated together in the subsequent term in CENG 355 Computer Systems Project
as a member of a 3-student group.

### **Background**

The problem solved by this project is how to have a robotic vehicle that will be
controlled as an RC car with a mobile application, and which can work
independently as an autonomous car.

The Hardware which consists of the vehicle’s chassis where all the parts are
either connected or mounted on which includes the actuators, the H-bridge
driver, the ultrasonic sensors and the brain of it all the Raspberry Pi 3. The
vehicle’s sensors are used to avoid obstacles that are detected and at the same
time send data to be used to map an area that will be displayed in the mobile
application. Through Wi-Fi the ability to remote control the vehicle is possible
using the mobile application.

I have searched for prior art via Humber’s IEEE subscription selecting “My
Subscribed Content” [1] and have found and read the following three articles
which provides insight into similar efforts.

-   Algorithm Fusion for Feature Extraction and Map Construction from SONAR
    Data@7158986

-   SLAM for robot navigation @4694832

-   An Open-Source Scaled Automobile Platform for Fault-Tolerant Electronic
    Stability Control @5398839

In the Computer Engineering Technology program, we have learned about the
following topics from the respective relevant courses:

-   Java Docs from CENG 212 Programming Techniques In Java,

-   Construction of circuits from CENG 215 Digital And Interfacing Systems,

-   Rapid application development and Gantt charts from CENG 216 Intro to
    Software Engineering,

-   Micro computing from CENG 252 Embedded Systems,

-   SQL from CENG 254 Database With Java,

-   Web access of databases from CENG 256 Internet Scripting; and,

-   Wireless protocols such as 802.11 from TECH152 Telecom Networks.

This knowledge and skill set will enable me to build the subsystems and
integrate them together as my capstone project.

### **Methodology**

This proposal is assigned in the first week of class and is due at the beginning
of class in the second week of the fall semester. My coursework will focus on
the first two of the 3 phases of this project:  
Phase 1 Hardware build.  
Phase 2 System integration.  
Phase 3 Demonstration to future employers.

*Phase 1 Hardware build*

The hardware build will be completed in the fall term. It will fit within the
CENG Project maximum dimensions of 12 13/16" x 6" x 2 7/8" (32.5cm x 15.25cm x
7.25cm) which represents the space below the tray in the parts kit. The highest
AC voltage that will be used is 16Vrms from a wall adaptor from which +/- 15V or
as high as 45 VDC can be obtained. Maximum power consumption will be 20 Watts.

*Phase 2 System integration*

The system integration will be completed in the fall term.

*Phase 3 Demonstration to future employers*

This project will showcase the knowledge and skills that I have learned to
potential employers.

The tables below provide rough effort and non-labour estimates respectively for
each phase. A Gantt chart will be added by week 3 to provide more project
schedule details and a more complete budget will be added by week 4. It is
important to start tasks as soon as possible to be able to meet deadlines.

| **Labour Estimates**                                                                      | **Hrs**        | **Notes**                                                                                                                      |
|-------------------------------------------------------------------------------------------|----------------|--------------------------------------------------------------------------------------------------------------------------------|
| **Phase 1**                                                                               |                |                                                                                                                                |
| Writing proposal.                                                                         | 9              | Tech identification quiz.                                                                                                      |
| Creating project schedule. Initial project team meeting.                                  | 9              | Proposal due.                                                                                                                  |
| Creating budget. Status Meeting.                                                          | 9              | Project Schedule due.                                                                                                          |
| Acquiring components and writing progress report.                                         | 9              | Budget due.                                                                                                                    |
| Mechanical assembly and writing progress report. Status Meeting.                          | 9              | Progress Report due (components acquired milestone).                                                                           |
| PCB fabrication.                                                                          | 9              | Progress Report due (Mechanical Assembly milestone).                                                                           |
| Interface wiring, Placard design, Status Meeting.                                         | 9              | PCB Due (power up milestone).                                                                                                  |
| Preparing for demonstration.                                                              | 9              | Placard due.                                                                                                                   |
| Writing progress report and demonstrating project.                                        | 9              | Progress Report due (Demonstrations at Open House Saturday, November 12th, 2016 from 10 a.m. - 2 p.m.).                        |
| Editing build video.                                                                      | 9              | Peer grading of demonstrations due.                                                                                            |
| Incorporation of feedback from demonstration and writing progress report. Status Meeting. | 9              | 30 second build video due.                                                                                                     |
| Practice presentations                                                                    | 9              | Progress Report due.                                                                                                           |
| 1st round of Presentations, Collaborators present.                                        | 9              | Presentation PowerPoint file due.                                                                                              |
| 2nd round of Presentations                                                                | 9              | Build instructions up due.                                                                                                     |
| Project videos, Status Meeting.                                                           | 9              | 30 second script due.                                                                                                          |
| **Phase 1 Total**                                                                         | **135**        |                                                                                                                                |
| **Phase 2**                                                                               |                |                                                                                                                                |
| Meet with collaborators                                                                   | 9              | Status Meeting                                                                                                                 |
| Initial integration.                                                                      | 9              | Progress Report                                                                                                                |
| Meet with collaborators                                                                   | 9              | Status Meeting                                                                                                                 |
| Testing.                                                                                  | 9              | Progress Report                                                                                                                |
| Meet with collaborators                                                                   | 9              | Status Meeting                                                                                                                 |
| Meet with collaborators                                                                   | 9              | Status Meeting                                                                                                                 |
| Incorporation of feedback.                                                                | 9              | Progress Report                                                                                                                |
| Meet with collaborators                                                                   | 9              | Status Meeting                                                                                                                 |
| Testing.                                                                                  | 9              | Progress Report                                                                                                                |
| Meet with collaborators                                                                   | 9              | Status Meeting                                                                                                                 |
| Prepare for demonstration.                                                                | 9              | Progress Report                                                                                                                |
| Complete presentation.                                                                    | 9              | Demonstration at Open House Saturday, April 8th, 2017 10 a.m. to 2 p.m.                                                        |
| Complete final report. 1st round of Presentations.                                        | 9              | Presentation PowerPoint file due.                                                                                              |
| Write video script. 2nd round of Presentations, delivery of project.                      | 9              | Final written report including final budget and record of expenditures, covering both this semester and the previous semester. |
| Project videos.                                                                           | 9              | Video script due                                                                                                               |
| **Phase 2 Total**                                                                         | **135**        |                                                                                                                                |
| **Phase 3**                                                                               |                |                                                                                                                                |
| Interviews                                                                                | TBD            |                                                                                                                                |
| **Phase 3 Total**                                                                         | **TBD**        |                                                                                                                                |
| **Material Estimates**                                                                    | **Cost**       | **Notes**                                                                                                                      |
| **Phase 1**                                                                               |                |                                                                                                                                |
| Raspberry Pi 3 Kit                                                                        | \$99.00        | CanaKit                                                                                                                        |
| 4WD Robot Platform                                                                        | \$42.94        | Creatron Inc                                                                                                                   |
| L298N H-Bridge                                                                            | \$15.82        | Creatron Inc                                                                                                                   |
| Mini Bread Board                                                                          | \$3.67         | Creatron Inc                                                                                                                   |
| Jumper Wires(3-sets)                                                                      | \$6.86         | Creatron Inc                                                                                                                   |
| HC-SR04 Ultrasonic Sensors (4)                                                            | \$22.56        | Creatron Inc                                                                                                                   |
| Standoffs F/F                                                                             | \$3.38         | Sayal Elec                                                                                                                     |
| Portable Battery                                                                          | \$45.19        | Scosche                                                                                                                        |
| Philips Head Screws                                                                       | \$5.64         | Sayal Elec                                                                                                                     |
| **Phase 1 Total**                                                                         | **\<\$200.00** |                                                                                                                                |
| **Phase 2**                                                                               |                |                                                                                                                                |
| Materials to improve functionality, fit, and finish of project.                           |                |                                                                                                                                |
| **Phase 2 Total**                                                                         | **TBD**        |                                                                                                                                |
| **Phase 3**                                                                               |                |                                                                                                                                |
| Off campus colocation                                                                     | \<\$100.00     | An example: [4].                                                                                                               |
| *Shipping*                                                                                | *TBD*          |                                                                                                                                |
| *Tax*                                                                                     | *TBD*          |                                                                                                                                |
| *Duty*                                                                                    | *TBD*          |                                                                                                                                |
| **Phase 3 Total**                                                                         | **TBD**        |                                                                                                                                |

### **Concluding remarks**

This proposal presents a plan for providing an IoT solution for AutoVehicle This
is an opportunity to integrate the knowledge and skills developed in our program
to create a collaborative IoT capstone project. I request approval of this
project.

### **References**

[1] Institute of Electrical and Electronics Engineers. (2015, August 28). IEEE
Xplore Digital Library [Online]. Available:
https://ieeexplore.ieee.org/search/advsearch.jsp
