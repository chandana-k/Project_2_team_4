/* Users table seed data */
INSERT INTO Users (email, password, createdAt, updatedAt) VALUES (
  "sjdcnskjenf",
  "sdfdrg dv",
  "2017-11-17 07:38:07",
  "2017-11-17 07:38:07"
);
INSERT INTO Users (email, password, createdAt, updatedAt) VALUES (
  "sploople",
  "doink doink",
  "2017-11-17 07:38:07",
  "2017-11-17 07:38:07"
);
INSERT INTO Users (email, password, createdAt, updatedAt) VALUES (
  "chubble",
  "glorg",
  "2017-11-17 07:38:07",
  "2017-11-17 07:38:07"
);

/* Tables table seed data */
INSERT INTO Tables (tableName, createdAt, updatedAt, UserId) VALUES (
  "general-1",
  "2017-11-17 07:38:07",
  "2017-11-17 07:38:07",
  1
);
INSERT INTO Tables (tableName, createdAt, updatedAt, UserId) VALUES (
  "general-2",
  "2017-11-17 07:38:07",
  "2017-11-17 07:38:07",
  2
);
INSERT INTO Tables (tableName, createdAt, updatedAt, UserId) VALUES (
  "birthday-1",
  "2017-11-17 07:38:07",
  "2017-11-17 07:38:07",
  1
);

/* Seed the permissions table */

INSERT INTO permissions (createdAt, updatedAt, tableId, userId) VALUES (
  "2017-11-17 07:38:07",
  "2017-11-17 07:38:07",
  1,
  2
);

INSERT INTO permissions (createdAt, updatedAt, tableId, userId) VALUES (
  "2017-11-17 07:38:07",
  "2017-11-17 07:38:07",
  1,
  3
);

INSERT INTO permissions (createdAt, updatedAt, tableId, userId) VALUES (
  "2017-11-17 07:38:07",
  "2017-11-17 07:38:07",
  1,
  4
);

INSERT INTO permissions (createdAt, updatedAt, tableId, userId) VALUES (
  "2017-11-17 07:38:07",
  "2017-11-17 07:38:07",
  3,
  1
);