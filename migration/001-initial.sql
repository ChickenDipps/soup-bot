-- Up

CREATE TABLE User(
  ID INTEGER PRIMARY KEY,
  username VARCHAR(32) NOT NULL
);

CREATE TABLE Server(
  ID INTEGER PRIMARY KEY,
  name VARCHAR(100) NOT NULL
);

CREATE TABLE User_Server(
  userID INTEGER NOT NULL,
  serverID INTEGER NOT NULL,
  FOREIGN KEY (userID) REFERENCES User(ID),
  FOREIGN KEY (serverID) REFERENCES SERVER(ID),
  PRIMARY KEY (userID, serverID)
);

CREATE TABLE Quote(
  ID INTEGER PRIMARY KEY,
  message VARCHAR(4000) NOT NULL,
  userID INTEGER NOT NULL,
  serverID INTEGER NOT NULL,
  dateTime DATETIME NOT NULL,
  FOREIGN KEY (userID) REFERENCES User(ID),
  FOREIGN KEY (serverID) REFERENCES SERVER(ID)
);

-- Down