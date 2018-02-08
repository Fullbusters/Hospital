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
Address         VARCHAR(66) NOT NULL
);


DROP TABLE IF EXISTS Comments;
CREATE TABLE Comments
(
Comment_Id    BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
Creation_Date   DATE NOT NULL,
Comment       VARCHAR(400) NOT NULL
);

DROP TABLE IF EXISTS Relationship;
CREATE TABLE Relationship
(
Id              BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
Patient_Id      BIGINT NOT NULL,
Comment_Id      BIGINT NOT NULL
);

ALTER TABLE Relationship
  ADD CONSTRAINT Relationship_UK UNIQUE (Patient_Id, Comment_Id);

ALTER TABLE Relationship
  ADD CONSTRAINT Relationship_FK1 FOREIGN KEY (Patient_Id)
  REFERENCES Patients(Patient_Id);

ALTER TABLE Relationship
  ADD CONSTRAINT Relationship_FK2 FOREIGN KEY (Comment_Id)
  REFERENCES Comments(Comment_Id);

 INSERT INTO Patients (First_Name, Last_Name, Date_Of_Birth, Sex, Country, State,Address )
 VALUES ('Name', 'Surname', '1999-12-19','male','Ukraine','','Ivano-Frankivsk');

INSERT INTO Comments (Creation_Date, Comment)
    VALUES ('2017-02-08', 'Hello World!');

INSERT INTO Relationship(Patient_Id, Comment_Id)
    VALUES (1,1);