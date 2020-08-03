DROP TABLE IF EXISTS workspaces;
DROP TABLE IF EXISTS files;
-- Workspaces have their internal id as well as a public code for the public access and an admin code for admin access link
CREATE TABLE workspaces (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    public_code VARCHAR(20) NOT NULL UNIQUE,
    time_created TIMESTAMP NOT NULL DEFAULT  CURRENT_TIMESTAMP,
    admin_code varchar(255) NOT NULL ,
    owner_email varchar(255)
);

CREATE TABLE files (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    extention varchar(15),
    content LONGTEXT,
    nano_id varchar(50) NOT NULL UNIQUE,
    time_created TIMESTAMP NOT NULL DEFAULT  CURRENT_TIMESTAMP,
    time_saved TIMESTAMP,
    workspace_id INTEGER NOT NULL,
    FOREIGN KEY (workspace_id) REFERENCES workspaces(id) ON DELETE CASCADE
);
