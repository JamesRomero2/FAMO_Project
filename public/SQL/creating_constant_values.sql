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


