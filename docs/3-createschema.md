---
title: Create a schema
description: Learn how to create a new schema in MySQL Workbench on Windows for organizing database objects.
---

# Create a Schema

A schema in MySQL Workbench represents a database that stores tables and data in those tables. 

This section explains how to create a new schema using the MySQL Workbench graphical interface.

!!! warning "Warning"
    Make sure you already created a connection, and you opened the connection. Refer to [Create a connection](./2-create-conn.md).

## Steps

1. Locate the schema panel on the left side of the menu interface.

    ![Schema panel showing all available schemas](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Creating_Schema_part_1.png "Schema panel")

2. **Click** the Create Schema button.

    ![Create schema button in the schema navigation bar](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@gh-pages/assets/images/Creating_Schema_part_2.png "Create schema button")

3. Enter the name of your new schema in the schema name field.

    ![Schema name field](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@gh-pages/assets/images/Creating_Schema_part_3.png "Enter schema name field")

4. **Click** Apply to begin create the schema.

5. Review the confirmation window showing the SQL command that was executed.


    ![Confirmation window showing that the command was executed](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@gh-pages/assets/images/Creating_Schema_part_4.png "Confirmation window")

6. **Click** Finish in the confirmation window.

    ![Confirmation window with the finish button](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@gh-pages/assets/images/Creating_Schema_part_5.png "Finish button")

7. Verify that the schema appears in the SCHEMAS section.

!!! success "Success"
    You have successfull created your new schema.

    ![Schema panel with the new schema added](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Creating_Schema_part_6.png "New schema added in the schema panel")

!!! note "Note"
    Use clear and simple names for your schema (e.g., `school_db` or `inventory`). Avoid spaces or special characters, as they may cause issues when writing SQL queries.

## Conclusion

You've created a schema in MySQL Workbench. Your schema is ready to store tables and data now.