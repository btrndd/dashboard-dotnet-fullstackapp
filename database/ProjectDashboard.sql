--QUERY PARA CRIAR O DB E TABELAS
USE MASTER

DROP DATABASE IF EXISTS ProjectDashboard;

CREATE DATABASE ProjectDashboard;

USE ProjectDashboard;

CREATE TABLE Users(
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Name VARCHAR(60) NOT NULL,
    LastName VARCHAR(60) NOT NULL,
    Email VARCHAR(60) NOT NULL,
    Phone VARCHAR(20) NOT NULL,
    BirthDate DATE NOT NULL
)

CREATE TABLE Auths(
    Id INT IDENTITY(1,1) PRIMARY KEY,
    UserId INT NOT NULL
    FOREIGN KEY REFERENCES Users(Id)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
    Password VARCHAR(MAX) NOT NULL,
    Status BIT NOT NULL    
)

INSERT INTO Users (Name, LastName, Email, Phone, BirthDate)
VALUES
  ('Bruno', 'Trindade', 'bruno@mail.com', '27999009999', '1996-04-01');

INSERT INTO Auths (UserId, Password, Status)
VALUES
  (@@IDENTITY, '123456', 1);

INSERT INTO Users (Name, LastName, Email, Phone, BirthDate)
VALUES
  ('Gabriela', 'Paganini', 'gabriel@mail.com', '27999779999', '1991-01-03');

INSERT INTO Auths (UserId, Password, Status)
VALUES
  (@@IDENTITY, '123abc', 1);


-- QUERY COM SELECT DEVOLVENDO TODOS OS USUÁRIOS ATIVOS
SELECT ps.Name AS Usuario,
ps.Email AS Email,
au.Status AS Status
FROM Users AS ps
INNER JOIN Auths AS au
ON ps.Id = au.UserId
WHERE au.Status = 0;

-- QUERY DE UPDATE NA TABELA
UPDATE ProjectDashboard.dbo.Auths
SET Auths.Status = 0
WHERE Auths.UserId = 2;

-- QUERY DE DELETE NA TABELA
DELETE FROM ProjectDashboard.dbo.Users
WHERE pessoas.LastName = 'Trindade';
