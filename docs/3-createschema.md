---
title: Create a schema
description: Learn how to create a new schema in MySQL Workbench on Windows for organizing database objects.
---

# 2. Create a Schema

A schema in MySQL Workbench represents a database that stores tables and data in those tables. 

This section explains how to create a new schema using the MySQL Workbench graphical interface.

!!! warning "Warning"
    Make sure you already created a connection, and you opened the connection. Refer to [Create a connection](./2-create-conn.md).

## Steps

1. In MySQL Workbench, locate the schema panel on the left side of the menu interface.

    ![Schema panel in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Creating_Schema_part_1.png)

2. Click the **Create** Schema button.

    ![Schema panel in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@gh-pages/assets/images/Creating_Schema_part_2.png)

3. In the Schema Name field, enter the name of your new schema.

    ![Schema panel in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@gh-pages/assets/images/Creating_Schema_part_3.png)

4. Click **Apply** to begin creating the schema.

5. A confirmation window will appear showing the SQL command was executed.

    ![Schema panel in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@gh-pages/assets/images/Creating_Schema_part_4.png)

6. Click **Finish**.

    ![Schema panel in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@gh-pages/assets/images/Creating_Schema_part_5.png)

7. Verify that the schema appears in the SCHEMAS section.

    ![Schema panel in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Creating_Schema_part_6.png)

!!! note "Note"
    Use clear and simple names for your schema (e.g., `school_db` or `inventory`). Avoid spaces or special characters, as they may cause issues when writing SQL queries.

## Conclusion

You've created a schema in MySQL Workbench. Your schema is ready to store tables and data now.