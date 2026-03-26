---
title: Create a schema
description: Learn how to create a new schema in MySQL Workbench on Windows for organizing database objects.
---

# 2. Create a Schema

A schema in Workbench represents a database that stores tables and data in those tables. This section walks you through how to create a new schema.

!!! warning "Warning"
    Make sure you already created a connection and it's opened right now. Refer to [Create a connection](./2-create-conn.md).

## Steps

1. **Locate** the schema panel on the left side of the Workbench menu.

    ![Schema panel showing all available schemas](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Creating_Schema_part_1_2.png "Schema panel highlighted in red box"){ .img-medium }

2. **Left-click** the Create Schema button highlighted in red.

    ![Create schema button in the schema navigation bar](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@gh-pages/assets/images/Creating_Schema_part_2_2.png "Create schema button"){ .img-medium }

3. **Type** a name for your schema in the Name box.

    ![Enter schema name field](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@gh-pages/assets/images/Creating_Schema_part_3_2.png "Enter schema name field"){ .img-medium }

4. **Left-click** the Apply button.

5. **Read** the confirmation window showing the SQL command that will be executed.

    ![Confirmation window showing that the command was executed](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@gh-pages/assets/images/confirmation_window.png "Confirmation window"){ .img-medium }

6. **Left-click** the Apply button.

    !!! success "Success"
        If the SQL command runs correctly, you'll see this:

        ![Confirmation window with the finish button](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@gh-pages/assets/images/confirmation_window_finish_2_2.png "Finish button"){ .img-medium }

7. **Left-click** the Finish button.

8. **Left-click** the Refresh button circled in red if you don't see your new schema in the schema panel.

    ![Refresh button circled in red](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@gh-pages/assets/images/refresh_button.png "Refresh button circled in red"){ .img-medium }

    !!! success "Success"
        Your newly created schema should show up in the schemas panel on the left side.

## Conclusion

You've created a schema in MySQL Workbench. You'll use this schema to create a table in the next part.