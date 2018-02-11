DROP DATABASE IF EXISTS hospital;
CREATE DATABASE hospital CHARACTER SET utf8;
use hospital;


DROP TABLE IF EXISTS Patients;
CREATE TABLE Patients
(
Patient_Id      BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
First_Name      VARCHAR(36) NOT NULL,
Last_Name       VARCHAR(36) NOT NULL,
Date_Of_Birth   DATE NOT NULL,
Sex             VARCHAR(6) NOT NULL,
Country         VARCHAR(36) NOT NULL,
State           VARCHAR(36),
Address         VARCHAR(66) NOT NULL,
Comment_Id      VARCHAR(1000)
);


DROP TABLE IF EXISTS Comments;
CREATE TABLE Comments
(
Comment_Id    BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
Creation_Date   DATE NOT NULL,
Comment       VARCHAR(400) NOT NULL,
Patient_Id    BIGINT
);

alter table comments
  add constraint FK_1
foreign key (Patient_id) references patients (Patient_id)
;

 INSERT INTO Patients (First_Name, Last_Name, Date_Of_Birth, Sex, Country, State,Address )
 VALUES ('Name', 'Surname', '1999-12-19','male','Ukraine','','Ivano-Frankivsk');


INSERT INTO Patients (First_Name, Last_Name, Date_Of_Birth, Sex, Country, State,Address )
VALUES ('123', 'SurName', '2000-12-19','female','Ukraine','','Ivano-Franki');

INSERT INTO Patients (First_Name, Last_Name, Date_Of_Birth, Sex, Country, State,Address )
VALUES ('qwerty', 'LastName', '2001-12-19','male','USA','','Ivano-Franki');

INSERT INTO Comments (Creation_Date, Comment, Patient_id)
    VALUES ('2017-02-08', 'Hello World!','1');

INSERT INTO Comments (Creation_Date, Comment, Patient_id)
VALUES ('2017-02-09', 'Hello 09!','1');

INSERT INTO Comments (Creation_Date, Comment, Patient_id)
VALUES ('2017-02-10', 'Hello 10!','2');

INSERT INTO Comments (Creation_Date, Comment, Patient_id)
VALUES ('2017-02-11', 'Hello 11!','3');

