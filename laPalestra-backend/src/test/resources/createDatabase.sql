BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS User
(
  id int auto_increment  PRIMARY KEY NOT NULL ,
  first_name TEXT NOT NULL,
  last_name TEXT,
  phone TEXT
);


CREATE TABLE IF NOT EXISTS Service
(
  id int auto_increment PRIMARY KEY NOT NULL,
  description TEXT,
  price DOUBLE
);

CREATE TABLE IF NOT EXISTS Gym
(
  id int auto_increment PRIMARY KEY NOT NULL,
  maxSpaces INTEGER,
  address TEXT
);

CREATE TABLE IF NOT EXISTS userServices
(
  id_user INTEGER,
  id_gym INTEGER,
  id_service INTEGER,
  date DATETIME,
  FOREIGN KEY (id_user) REFERENCES User (id),
  FOREIGN KEY (id_gym) REFERENCES Gym (id),
  FOREIGN KEY (id_service) REFERENCES Service (id)
);
COMMIT;