---
title: Create a table
description: Step-by-step guide to creating a table in MySQL Workbench on Windows using the graphical interface.
---

# 3. Create a table

This section walks you through how to create a table using Workbench.

!!! warning "Warning"
    Before making a table, make sure you've already created a schema. Refer to [Create a schema](3-createschema.md). 
    
    You should be familiar with the contents of the previous sections!

## Steps

1. **Locate** the schema panel on the left side of the Workbench menu.

2. **Left-click** the button highlighted in red to expand your schema.

    ![Expanded schema with tables section visible](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Creating_Table_2_2_2.png "Expand schema button"){ .img-medium }

3. **Right-click** the Tables section under your schema.

    ![Right-click menu on Tables section](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Creating_Table_3_2.png "Table section"){ .img-medium }

4. **Left-click** the Create Table option.

    ![Create Table option in context menu](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Creating_Table_4_2.png "Create table menu"){ .img-medium }

5. **Type** a name for your table in the name box.

    ![Table editor with Table field](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Creating_Table_5_2.png "Enter a table name"){ .img-medium }

6. **Enter** each column’s details in the row of the Columns section.

    Example:
    ![Top row of the Columns section in the table editor, showing where to enter a column name, choose a datatype, and select column options such as PK, NN, and AI.](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Creating_Table_6_2.png "Columns section in the table editor"){ .img-medium }

    For each column:

    - **Type** a name in Column Name. We called it `student_id` but you can choose your own name.
    - **Select** a value in Datatype. For this tutorial, please **select** the `INT` datatype, but you can choose other datatypes later.
    - **Left-click** to check any options you want to apply, like PK for primary key, NN for not null, or AI for auto increment.

    !!! danger "Common issue and fix"
        If you can't find the Column editing section, **left-click** the button highlighted in red to open it:
        ![Button to open column editor in create table windoww](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/open-column-button.png "Button to open column editor"){ .img-medium }

7. **Left-click** the Apply button only when you are finished naming the table, and putting in column details.

8. **Read** the confirmation window showing the SQL command that will be executed.

    ![Confirmation of SQL script that will be run to create your table](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/confirm_apply_table_creation.png "Confirmation of SQL script that will be run to create your table"){ .img-medium }

9. **Left-click** the Apply button.

    !!! success "Success"
        If the SQL command runs correctly, you'll see this:

        ![Successfully created table](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@gh-pages/assets/images/table-script-success.png "Successfully created table"){ .img-medium }

    !!! danger "Common issue and fix"
        If the SQL script doesn't run correctly and you have an error, double-check the details you entered on the table creation window to make sure you have no typos.

10. **Left-click** the Finish button.

11. **Left-click** the button highlighted in red to expand the Tables section to confirm your table exists. If the table does not show up, **left-click** the Refresh button.
    ![Expand the Tables section](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/new_table_here.png "Expand button"){ .img-medium }

    !!! Success "Success"
        You successfully created a new table in your schema.
        ![New table visible in schema table list](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/new_table.png "New table in schema"){ .img-medium }

## Conclusion

You've created a table in Workbench. You'll use this table to insert data in the next part.
