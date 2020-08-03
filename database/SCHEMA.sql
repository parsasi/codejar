DROP TABLE IF EXISTS workspaces;
-- Workspaces have their internal id as well as a public code for the public access and an admin code for admin access link
CREATE TABLE workspaces (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    public_code VARCHAR(20) NOT NULL UNIQUE,
    time_created TIMESTAMP NOT NULL DEFAULT  CURRENT_TIMESTAMP,
    admin_code varchar(255) NOT NULL ,
    owner_email varchar(255)
)
