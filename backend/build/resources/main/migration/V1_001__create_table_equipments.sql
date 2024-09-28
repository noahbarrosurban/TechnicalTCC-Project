CREATE TABLE equipments (
    id UUID PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    segment VARCHAR(255) NOT NULL,
    model VARCHAR(255) NOT NULL,
    serial_number VARCHAR(255) NOT NULL,
    status BOOLEAN NOT NULL,
    acquisition_date DATE NOT NULL
);