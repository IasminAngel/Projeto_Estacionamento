CREATE DATABASE Wallpark;
USE Wallpark;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    -- APENAS USO DE FUNCIONARIOS
);

CREATE TABLE clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE veiculos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT NOT NULL,
    modelo VARCHAR(50) NOT NULL,
    cor VARCHAR(30) NOT NULL,
    placa VARCHAR(10) UNIQUE NOT NULL,
    tipo ENUM('pequeno', 'grande') NOT NULL,
    FOREIGN KEY (cliente_id) REFERENCES clientes(id) ON DELETE CASCADE
);

CREATE TABLE vagas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    numero INT UNIQUE NOT NULL,
    status ENUM('disponível', 'reservado', 'lotado') NOT NULL DEFAULT 'disponível'
);

CREATE TABLE estacionamentos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    veiculo_id INT NOT NULL,
    vaga_id INT,
    data_entrada DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    data_saida DATETIME,
    total_horas INT,
    total_valor DECIMAL(10,2),
    FOREIGN KEY (veiculo_id) REFERENCES veiculos(id) ON DELETE CASCADE,
    FOREIGN KEY (vaga_id) REFERENCES vagas(id) ON DELETE SET NULL
);

CREATE TABLE pagamentos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    estacionamento_id INT NOT NULL,
    forma_pagamento ENUM('à vista', 'cartão de débito', 'mensal') NOT NULL,
    valor DECIMAL(10,2) NOT NULL,
    data_pagamento TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (estacionamento_id) REFERENCES estacionamentos(id) ON DELETE CASCADE
);

CREATE TABLE relatorios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    data_relatorio DATE NOT NULL,
    tipo ENUM('diário', 'mensal') NOT NULL,
    total_veiculos INT NOT NULL,
    total_receita DECIMAL(10,2) NOT NULL
);