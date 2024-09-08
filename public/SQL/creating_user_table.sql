CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    last_logged_in DATETIME,
    role TINYINT UNSIGNED CHECK (role BETWEEN 1 AND 7),
    status ENUM('active', 'inactive') DEFAULT 'active',
    deleted BOOLEAN DEFAULT FALSE
);


INSERT INTO users (username, email, password, first_name, last_name, last_logged_in, role, status, deleted) VALUES
('johndoe', 'johndoe@example.com', 'hashed_password_1', 'John', 'Doe', '2024-09-01 10:23:00', 1, 'active', FALSE),
('janedoe', 'janedoe@example.com', 'hashed_password_2', 'Jane', 'Doe', '2024-09-01 08:15:00', 2, 'active', FALSE),
('michaelb', 'michaelb@example.com', 'hashed_password_3', 'Michael', 'Brown', '2024-08-31 12:45:00', 3, 'inactive', FALSE),
('emilyw', 'emilyw@example.com', 'hashed_password_4', 'Emily', 'White', '2024-08-30 09:30:00', 4, 'active', FALSE),
('davidj', 'davidj@example.com', 'hashed_password_5', 'David', 'Johnson', '2024-08-29 14:50:00', 5, 'active', FALSE),
('sarahk', 'sarahk@example.com', 'hashed_password_6', 'Sarah', 'King', '2024-08-28 10:00:00', 6, 'inactive', TRUE),
('chrisl', 'chrisl@example.com', 'hashed_password_7', 'Chris', 'Lee', '2024-08-27 11:10:00', 7, 'active', FALSE),
('rachelm', 'rachelm@example.com', 'hashed_password_8', 'Rachel', 'Morris', '2024-08-26 16:30:00', 1, 'active', FALSE),
('tomb', 'tomb@example.com', 'hashed_password_9', 'Tom', 'Brown', '2024-08-25 18:20:00', 2, 'active', FALSE),
('annas', 'annas@example.com', 'hashed_password_10', 'Anna', 'Smith', '2024-08-24 08:05:00', 3, 'inactive', TRUE);

