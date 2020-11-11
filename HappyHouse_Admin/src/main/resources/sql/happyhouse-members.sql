CREATE DATABASE web_study_db;

USE web_study_db;

CREATE TABLE MEMBER (
   id varchar(30) PRIMARY KEY,
   pw varchar(30) NOT NULL,
   name varchar(30) NOT NULL,
   email varchar(40),
   gender varchar(10) NOT NULL,
   phone varchar(20) NOT NULL,
   birthday datetime,
   grade int DEFAULT 1,
   bandate datetime DEFAULT now()
);

CREATE TABLE notice (
   NO int PRIMARY KEY AUTO_INCREMENT,
   title varchar(30) NOT NULL,
   member_id varchar(30),
   content varchar(1000),
   writedate datetime DEFAULT now(),
   importance int DEFAULT 1,
   FOREIGN KEY(member_id)
   REFERENCES member(id)
);

CREATE TABLE dongcode (
   SELECT * FROM happyhouse.dongcode d 
);

ALTER TABLE dongcode MODIFY COLUMN dongcode varchar(30) PRIMARY KEY;

CREATE TABLE interest_location (
   member_id varchar(30),
   location_id varchar(30),
   PRIMARY KEY (member_id, location_id),
   FOREIGN KEY (member_id)
   REFERENCES member(id),
   FOREIGN KEY (location_id)
   REFERENCES dongcode(dongcode)
);

INSERT INTO MEMBER (
                  id,
                  pw,
                  name,
                  email,
                  gender,
                  phone,
                  birthday
            ) VALUES (
                  '일이디',
                  '일스워드',
                  '일길동',
                  '일메일@naver.com',
                  '남',
                  '010-1111-1111',
                  '2000-01-01'
            );
            
INSERT INTO MEMBER (
                  id,
                  pw,
                  name,
                  email,
                  gender,
                  phone,
                  birthday
            ) VALUES (
                  '이이디',
                  '이스워드',
                  '이길동',
                  '이메일@naver.com',
                  '여',
                  '010-2222-2222',
                  '2000-02-02'
            );
            
SELECT * FROM MEMBER;

INSERT INTO notice (
                  title,
                  member_id,
                  content
            ) VALUES (
                  '일타이틀',
                  '일이디',
                  '일내용'
            ),       (
                  '이타이틀',
                  '이이디',
                  '이내용'
            );
            
SELECT * FROM notice;


#1111010100
#1111010200
#1111010300
#1111010400
#1111010500
#1111010600
#1111010700
#1111010800
INSERT INTO interest_location (
                           member_id,
                           location_id
                  ) VALUES (
                           '일이디', 
                           '1111010100'
                  ),       (
                           '일이디', 
                           '1111010200'
                  ),       (
                           '이이디', 
                           '1111010300'
                  ); 
                   
SELECT * FROM interest_location;

select * from member;

CREATE TABLE members (
   email varchar(50) PRIMARY KEY,
   password varchar(50) NOT NULL,
   name varchar(50) NOT NULL,
   grade int DEFAULT 3
);

CREATE TABLE visit_count (
	visit10s int,
    visit20s int,
    visit30s int,
    visit40s int,
    visit50s int,
    visit60s int
);