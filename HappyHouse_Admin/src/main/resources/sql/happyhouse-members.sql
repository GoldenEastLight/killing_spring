CREATE TABLE members (
	email varchar(50) PRIMARY KEY,
	password varchar(50) NOT NULL,
	name varchar(50) NOT NULL,
	grade int DEFAULT 3,
	
);