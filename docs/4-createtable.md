---
title: Create a table
description: Step-by-step guide to creating a table in MySQL Workbench on Windows using the graphical interface.
---

# 3. Create a table

This section walks you through how to create a table using Workbench.

!!! warning "Warning"
    Before making a table, make sure you've already created a schema. Refer to [Create a schema](3-createschema.md). You should be familiar with the contents of the previous sections.

## Steps

1. **Locate** the schema panel on the left side of the Workbench menu.

2. **Left-click** the button highlighted in red to expand your schema.

    ![Expanded schema with tables section visible](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Creating_Table_2_2_2.png "Expand schema button"){ .img-medium }

3. **Right-click** the Tables section under your schema.

    ![Right-click menu on Tables section](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Creating_Table_3_2.png "Table section"){ .img-medium }

4. **Left-click** the Create Table option.

    ![Create Table option in context menu](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Creating_Table_4_2.png "Create table menu"){ .img-medium }

5. **Type** a name for your table in the name box.

    ![Table editor with Table field](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Creating_Table_5_2.png "Enter a table name")

6. **Enter** each column’s details in the top row of the **Columns** section, one column at a time.

    Example:
    ![Top row of the Columns section in the table editor, showing where to enter a column name, choose a datatype, and select column options such as PK, NN, and AI.](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Creating_Table_6_2.png "Columns section in the table editor")

    For each column:

    - **Type** the column name in **Column Name**.
    - **Select** a value in **Datatype**.
    - **Left-click** to check any options you want to apply, like **PK** for primary key, **NN** for not null, or **AI** for auto increment.

    !!! danger "Issue"
    If you can't find the Column editing section, click the button highlighted in red:
    ![Button to open column editor in create table windoww](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/open-column-button.png "Button to open column editor")

7. **Click** Apply.

    ![Apply button at the bottom right](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Creating_Table_10.png "Click Apply button to confirm")

8. Review the confirmation window to ensure that the table has been created.

    ![Confirmation window will pop up](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Creating_Table_11.png "Confirmation window")

9. **Click** Apply again, then **click** Finish

    ![Apply and Finish buttons in confirmation window](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Creating_Table_12.png "Apply and Finish buttons")

10. Verify that your table has been created by navigating back to your tables section in your schema.

    !!! Success "Success"
        You have created a new table!
    ![New table visible in schema table list](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Creating_Table_13_2.png "New table in schema")

!!! note "Note"
    It is recommended to create a Primary Key (PK) for your table, often using an INT column with **Auto Increment (AI)**. This ensures each row has a unique identifier.
  
## Conclusion

You've created a table in Workbench. Now you can start to inserting data into it.
