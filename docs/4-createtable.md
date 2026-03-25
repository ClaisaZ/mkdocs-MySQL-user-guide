---
title: Create a table
description: Step-by-step guide to creating a table in MySQL Workbench on Windows using the graphical interface.
---

# Create a table

An SQL table stores data in rows and columns. Columns define the kind of data each entry can hold, and rows contain the actual data. This section shows how to create a table using Workbench.

!!! warning "Warning"
    Before making a table, make sure you have already created a schema. Refer to [Create a schema](.3-createschema.md).

## Steps

1. In MySQL Workbench, locate the schema panel on the left side.

    ![Schema panel showing available databases](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Creating_Table_1.png)

2. Expand your schema by clicking the arrow next to its name. 

    ![Expanded schema with tables section visible](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Creating_Table_2.png)

3. Right-click on the Tables section inside your schema.

    ![Right-click menu on Tables section](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Creating_Table_3.png "Table section")

4. Click **Create Table**.

    ![Create Table option in context menu](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Creating_Table_4.png "Create table menu")

5. In the Table Name field, enter a name for your table. 

    ![Table editor with Table field](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Creating_Table_5.png "Enter a table name")

6. In the Columns section, define your table structure by adding columns one at a time.

    ![Columns section in table editor](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Creating_Table_6.png "Table structure editor")

    - Enter a column name.

        ![Column name input field](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Creating_Table_7.png "Enter a column name")

    - Select a data type in the Datatype field, such as INT, VARCHAR, or DATE.

        ![Datatype selection field](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Creating_Table_8.png "Datatype selection field")

    - Check any needed options, such as PK for primary key, NN for not null, or AI for auto increment.

        ![Column options like PK, NN, AI](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Creating_Table_9.png "Specific table options like PK, NN, AI")

7. Click **Apply**

    ![Apply button at the bottom right](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Creating_Table_10.png "Click Apply button to confirm")

8. A confirmation window will appear showing that the table has been created.

    ![Confirmation window will pop up](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Creating_Table_11.png "Confirmation window")

9. Click **Apply** again, then click **Finish**

    ![Apply and Finish buttons in confirmation window](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Creating_Table_12.png "Apply and Finish buttons")

10. Verify that your table has been created by navigating back to your tables section in your schema.

    ![New table visible in schema table list](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Creating_Table_13.png "New table in schema")

!!! note "Note"
    It is recommended to create a Primary Key (PK) for your table, often using an INT column with **Auto Increment (AI)**. This ensures each row has a unique identifier.
  
## Conclusion

You've created a table in Workbench. Now you can start to inserting data into it.
