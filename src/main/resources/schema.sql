CREATE TABLE Billett
(
    id integer AUTO_INCREMENT NOT NULL,
    fornavn VARCHAR(255) NOT NULL,
    etternavn VARCHAR(255) NOT NULL,
    epost VARCHAR(255) NOT NULL,
    telefonnr VARCHAR(255) NOT NULL,
    antall  integer NOT NULL,
    film VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);