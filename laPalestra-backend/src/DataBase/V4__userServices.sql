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