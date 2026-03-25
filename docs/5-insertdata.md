---
title: Insert data
description: Learn how to insert data into a MySQL table in MySQL Workbench on Windows.
---

# Insert data

In MySQL Workbench, data is stored inside tables as rows. To add new information, users insert data into the columns of a table. This section explains how to insert data using the MySQL Workbench graphical interface.

!!! warning "Warning"
    Before inserting data, make sure you have already created a table. Refer to [Create a table](./4-createtable.md).

## Steps

1. In MySQL Workbench, locate the schemas panel on the left side. 

    ![Schema panel in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Inserting_Data_1.png)

2. Expand your schema and locate the table you want to insert data into.

    ![Schema panel in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Inserting_Data_2.png)

3. Right-click the table and click **Select Rows**.

    ![Schema panel in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Inserting_Data_3.png)

4. A table view will open showing the current rows.

5. Click on an empty row (usually marked with NULL ) at the bottom of the table.

    ![Schema panel in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Inserting_Data_4.png)

6. Enter values into each column.
    
    - Type directly into each cell.

        ![Schema panel in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Inserting_Data_5.png)

    - Follow the datatype requirements (e.g. numbers for INT, text for VARCHAR).

    - If a column is set to Auto Increment, you can leave it blank and it will be filled automatically.


7. Click **Apply** in the bottom right corner.

    ![Schema panel in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Inserting_Data_6.png)

    - If you accidentally entered incorrect data, you can click **Revert** beside **Apply** to erase what you just entered.

        ![Schema panel in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Inserting_Data_7.png)

8. A confirmation window will appear showing the SQL statement used to insert the data.

    ![Schema panel in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Inserting_Data_8.png)

9. Click **Apply**, then click **Finish**.

    ![Schema panel in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Inserting_Data_9.png)

10. Verify that your row appears in the table, by clicking **Refresh**.

    ![Schema panel in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Inserting_Data_10.png)

!!! note "Note"
    Make sure required columns ( marked with NN for Not Null ) are filled in before clicking **Apply**, or the insert may fail.

## Conclusion

Now your table contains saved rows, and you can now view, edit, or query that data. We'll query that data in the next part.
