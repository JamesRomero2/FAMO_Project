CREATE TABLE requests (
    id INT AUTO_INCREMENT PRIMARY KEY,
    requested_by INT,
    request_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    status_id INT,
    rejection_justification TEXT,
    archive BOOLEAN DEFAULT FALSE, -- boolean to indicate archived requests
    FOREIGN KEY (requested_by) REFERENCES users(id),
    FOREIGN KEY (status_id) REFERENCES status(id)
);

CREATE TABLE request_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    request_id INT,
    item_name TEXT,
    category_id INT, -- foreign key to category table
    units_of_measurement_id INT, -- foreign key to units_of_measurement table
    quantity INT NOT NULL,
    justification TEXT NOT NULL,
    FOREIGN KEY (request_id) REFERENCES requests(id),
    FOREIGN KEY (category_id) REFERENCES categories(id),
    FOREIGN KEY (units_of_measurement_id) REFERENCES units_of_measurement(id)
);