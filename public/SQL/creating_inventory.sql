CREATE TABLE inventory (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category_id INT NOT NULL,
    item_name VARCHAR(100) NOT NULL,
    unit_id INT NOT NULL,
    no_of_stock INT NOT NULL,
    new_delivery INT NOT NULL,
    date_delivery DATE,
    item_out INT NOT NULL,
    total_cost DECIMAL(10, 2),
    item_balance INT NOT NULL,
    FOREIGN KEY (category_id) REFERENCES categories(id),
    FOREIGN KEY (unit_id) REFERENCES units_of_measurement(id)
);

INSERT INTO inventory (category_id, item_name, unit_id, no_of_stock, new_delivery, date_delivery, item_out, total_cost, item_balance)
VALUES
(1, 'AIRCON OUTLET EAGLE', 1, 121, 0, NULL, 121, NULL, 0),
(1, 'AMCO METAL BOX SURFACE', 1, 0, 0, NULL, 0, NULL, 0),
(1, 'ARMAK SELF FUSING RUBBER TAPE', 1, 0, 0, NULL, 0, NULL, 0),
(1, 'BALLAST (18-20)watts GE', 1, 26, 1, NULL, 25, NULL, 1),
(2, 'ACRILIC LATEX HANSA YELLOW', 2, 154, 0, NULL, 0, NULL, 154),
(3, 'Aero Tape', 1, 30, 1, NULL, 0, 29.00, 29),
(4, 'ANGLE BAR 1X 1 X 20" X 3MM', 1, 63, 0, NULL, 0, NULL, 63);

INSERT INTO inventory (category_id, item_name, unit_id, no_of_stock, new_delivery, date_delivery, item_out, total_cost, item_balance)
VALUES
(1, 'CIRCUIT BREAKER (20AMPS) BOLT ON', 1, 129, 0, NULL, 0, NULL, 129),
(1, 'CIRCUIT BREAKER 200AT 3POLE BOLT ON', 7, 6, 0, NULL, 0, NULL, 6),
(1, 'CIRCUIT BREAKER 250AT 3POLE BOLT ON', 1, 1, 0, NULL, 0, NULL, 1),
(1, '100 AT 3POLE BOLT ON CB IN NEMA 3R ENCLUSURE', 1, 0, 0, NULL, 0, NULL, 0),
(1, '150AT 3POLE BOLT ON CB IN NEMA 3R ENCLUSURE', 5, 5, 0, NULL, 0, NULL, 5);

INSERT INTO inventory (category_id, item_name, unit_id, no_of_stock, new_delivery, date_delivery, item_out, total_cost, item_balance)
VALUES
(2, 'ACRILIC LATEX LAMP BLACK', 2, 80, 0, NULL, 0, NULL, 80),
(2, 'ACRILIC LATEX RAW SIENNA', 2, 80, 0, NULL, 0, NULL, 80),
(2, 'CEMENTITOUS WATER PROOFING BOSTIK', 4, 0, 0, NULL, 0, NULL, 0),
(2, 'CLEAR GLOSS LACQUER', 3, 0, 0, NULL, 0, NULL, 0),
(2, 'COTTON RUGS ROUND WHITE', 5, 30, 0, NULL, 2, NULL, 28);

INSERT INTO inventory (category_id, item_name, unit_id, no_of_stock, new_delivery, date_delivery, item_out, total_cost, item_balance)
VALUES
(3, 'BUTANE GAS BLOW TORCH HEAD', 1, 0, 0, NULL, 0, 0.00, 0),
(3, 'Cable Tie 2.5 x100mm 100/pcs', 6, 52, 0, NULL, 0, NULL, 52),
(3, 'FREON (R-22, 13.6 KG./ DRUM)', 8, 0, 0, NULL, 0, NULL, 0),
(3, 'MANIFOLD HOSE, 3 HOSE/ SET 3 FT (BLUE, RED, YELLOW)', 10, 15, 0, NULL, 0, NULL, 15),
(3, 'SILVER ROD', 1, 791, 20, NULL, 0, NULL, 771);

INSERT INTO inventory (category_id, item_name, unit_id, no_of_stock, new_delivery, date_delivery, item_out, total_cost, item_balance)
VALUES
(4, 'ANGLE BAR 1 1/2 X 1 1/2 X 20 X 4MM', 1, 38, 0, NULL, 8, NULL, 30),
(4, 'CONCRETE DRILL BIT 1/4', 1, 8, 0, NULL, 0, NULL, 8),
(4, 'CONCRETE DRILL BIT 1/2', 1, 14, 0, NULL, 0, NULL, 14),
(4, 'CONCRETE NAIL NO. 1', 5, 120, 0, NULL, 0, NULL, 120),
(4, 'HEAVY DUTY SAFETY SOLVENT DEGREASER', 11, 2, 0, NULL, 0, NULL, 2);