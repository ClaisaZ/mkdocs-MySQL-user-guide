---
title: Create a table
description: Step-by-step guide to creating a table in MySQL Workbench on Windows using the graphical interface.
---

# Create a table

A table in MySQL Workbench is used to store data in rows and columns. Each table consists of columns which have a field that defines the type of data, and rows that hold the actual information.

This section explains how to create a new table using the MySQL Workbench graphical interface.

## Steps

1. In MySQL Workbench, locate the schema panel on the left side.

    ![Schema panel in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Creating_Table_1.png)

2. Expand your schema by clicking the arrow next to its name. 

    ![Schema panel in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Creating_Table_2.png)

3. Right-click on the Tables section inside your schema.

    ![Schema panel in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Creating_Table_3.png)

4. Click **Create Table**.

    ![Schema panel in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Creating_Table_4.png)

5. In the Table Name field, enter a name for your table. 

    ![Schema panel in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Creating_Table_5.png)

6. In the Columns section, define your table structure by adding columns one at a time.

    ![Schema panel in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Creating_Table_6.png)

    - Enter a column name.

        ![Schema panel in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Creating_Table_7.png)

    - Select a data type in the Datatype field, such as INT, VARCHAR, or DATE.

        ![Schema panel in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Creating_Table_8.png)

    - Check any needed options, such as PK for primary key, NN for not null, or AI for auto increment.

        ![Schema panel in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Creating_Table_9.png)

7. Click **Apply**

    ![Schema panel in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Creating_Table_10.png)

8. A confirmation window will appear showing that the table has been created.

    ![Schema panel in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Creating_Table_11.png)

9. Click **Apply** again, then click **Finish**

    ![Schema panel in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Creating_Table_12.png)

10. Verify that your table has been created by navigating back to your tables section in your schema.

    ![Schema panel in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Creating_Table_13.png)

!!! note "Note"
    It is recommended to create a Primary Key (PK) for your table, often using an INT column with **Auto Increment (AI)**. This ensures each row has a unique identifier.
  
## Conclusion

You've created a table in Workbench. Now you can start to inserting data into it.
