-- Active: 1654760059842@@127.0.0.1@3305@investimentos

DROP SCHEMA IF EXISTS `investimentos` ;

CREATE SCHEMA IF NOT EXISTS `investimentos` ;

USE `investimentos` ;

-- -----------------------------------------------------

-- Table `investimentos`.`ativos`

-- -----------------------------------------------------

CREATE TABLE
    IF NOT EXISTS `investimentos`.`ativos` (
        `codAtivo` INT NOT NULL AUTO_INCREMENT,
        `valor` DECIMAL(10, 2) NOT NULL,
        `quantidade` INT NOT NULL,
        PRIMARY KEY (`codAtivo`)
    ) ENGINE = InnoDB AUTO_INCREMENT = 1;

INSERT INTO
    investimentos.ativos (valor, quantidade)
VALUES (23.50, 50), (21.20, 100), (100.90, 9), (99.50, 175);

-- -----------------------------------------------------

-- Table `investimentos`.`clientes`

-- -----------------------------------------------------

CREATE TABLE
    IF NOT EXISTS `investimentos`.`clientes` (
        `codCliente` INT NOT NULL AUTO_INCREMENT,
        `saldo` DECIMAL(10, 2) NOT NULL,
        PRIMARY KEY (`codCliente`)
    ) ENGINE = InnoDB AUTO_INCREMENT = 1;

INSERT INTO
    investimentos.clientes (saldo)
VALUES (20.90), (1190.34), (346.98), (11234.50), (9.54);

-- -----------------------------------------------------

-- Table `investimentos`.`ativos_do_cliente`

-- -----------------------------------------------------

CREATE TABLE
    IF NOT EXISTS `investimentos`.`ativos_do_cliente` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `codCliente` INT NOT NULL,
        `codAtivo` INT NOT NULL,
        `qtdeAtivo` INT NOT NULL,
        PRIMARY KEY (`id`),
        FOREIGN KEY (`codCliente`) REFERENCES `investimentos`.`clientes` (`codCliente`),
        FOREIGN KEY (`codAtivo`) REFERENCES `investimentos`.`ativos` (`codAtivo`)
    ) ENGINE = InnoDB AUTO_INCREMENT = 1;

INSERT INTO
    investimentos.ativos_do_cliente (
        codCliente,
        codAtivo,
        qtdeAtivo
    )
VALUES (1, 1, 5), (2, 2, 30), (3, 3, 22), (4, 4, 30);

-- -----------------------------------------------------

-- Table `investimentos`.`depositos`

-- -----------------------------------------------------

CREATE TABLE
    IF NOT EXISTS `investimentos`.`depositos` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `valor` DECIMAL(10, 2) NOT NULL,
        `codCliente` INT NOT NULL,
        PRIMARY KEY (`id`),
        INDEX `codCliente` (`codCliente` ASC) VISIBLE,
        FOREIGN KEY (`codCliente`) REFERENCES `investimentos`.`clientes` (`codCliente`)
    ) ENGINE = InnoDB AUTO_INCREMENT = 1;

INSERT INTO
    investimentos.depositos (valor, codCliente)
VALUES (130.58, 1), (1350.00, 2), (11398.70, 3), (10.55, 4);

-- -----------------------------------------------------

-- Table `investimentos`.`saques`

-- -----------------------------------------------------

CREATE TABLE
    IF NOT EXISTS `investimentos`.`saques` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `valor` DECIMAL(10, 2) NOT NULL,
        `codCliente` INT NOT NULL,
        PRIMARY KEY (`id`),
        FOREIGN KEY (`codCliente`) REFERENCES `investimentos`.`clientes` (`codCliente`)
    ) ENGINE = InnoDB AUTO_INCREMENT = 1;

INSERT INTO
    investimentos.saques (valor, codCliente)
VALUES (13.58, 1), (135.00, 2), (1138.70, 3), (101.55, 4);