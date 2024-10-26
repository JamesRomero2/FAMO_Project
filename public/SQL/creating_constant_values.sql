-- ROLES TABLE
CREATE TABLE roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    description VARCHAR(255) NOT NULL,
    deleted BOOLEAN DEFAULT FALSE
);

INSERT INTO roles (id, description, deleted) VALUES
(1, 'Admin', FALSE),
(2, 'Director', FALSE),
(3, 'Civil and Sanitary Services Chief', FALSE),
(4, 'Lights, Sounds, and Event Services Chief', FALSE),
(5, 'Electrical and Mechanical Service Chief', FALSE),
(6, 'Building and Grounds Service Chief', FALSE),
(7, 'Warehouseman', FALSE);

-- Create categories table
CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    description VARCHAR(100) NOT NULL,
    code VARCHAR(10) NOT NULL
);

INSERT INTO categories (description, code)
VALUES
('ELECTRICAL', 'ELEC'),
('PAINTING MATERIALS', 'PAINT'),
('AIRCON TECH', 'AIRCON'),
('CARPENTRY/MASONRY MATERIALS', 'CARP');

-- Create units_of_measurement table
CREATE TABLE units_of_measurement (
    id INT AUTO_INCREMENT PRIMARY KEY,
    description VARCHAR(100) NOT NULL,
    unit VARCHAR(20) NOT NULL
);

INSERT INTO units_of_measurement (description, unit)
VALUES
('Pieces', 'pcs.'),
('Liters', 'Liters'),
('Gallon', 'gals.'),
('Pair', 'pairs'),
('Kilogram', 'kilos'),
('Set', 'sets'),
('Can', 'can'),
('Meter', 'meter'),
('Rolls', 'rolls'),
('Tank', 'tank'),
('Bag', 'bags'),
('Milliliters', 'ml');

CREATE TABLE status (
    id INT AUTO_INCREMENT PRIMARY KEY,
    description VARCHAR(50) NOT NULL
);

INSERT INTO status (description) VALUES ('Pending'), ('Approved'), ('Rejected');