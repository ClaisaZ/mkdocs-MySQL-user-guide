---
title: Insert data
description: Learn how to insert data into a MySQL table in MySQL Workbench on Windows.
---

# 5. Insert data

In MySQL Workbench, data is stored inside tables as rows. To add new information, users insert data into the columns of a table. This section explains how to insert data using the MySQL Workbench graphical interface.

!!! warning "Warning"
    Before inserting data, make sure you have already created a table. Refer to [Create a table](./4-createtable.md).You should be familiar with the contents of the previous sections.

## Steps

1. In MySQL Workbench, locate the schemas panel on the left side. 

    ![Schema panel showing all available schemas](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Inserting_Data_1.png "Schemas panel")

2. Expand your schema and locate the table you want to insert data into.

    ![Table section in schema panel](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Inserting_Data_2.png "Table section")

3. Right-click the table and click **Select Rows**.

    ![Select rows option](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Inserting_Data_3.png "Select rows option")

4. A table view will open showing the current rows.

5. Click on an empty row (usually marked with NULL ) at the bottom of the table.

    ![Empty cell to enter data](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Inserting_Data_4.png "Empty cell for entering data")

6. Enter values into each column.
    
    - Type directly into each cell.

        ![Data entry example](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Inserting_Data_5.png "Showing multiple data entrys")

    - Follow the datatype requirements (e.g. numbers for INT, text for VARCHAR).

    - If a column is set to Auto Increment, you can leave it blank and it will be filled automatically.


7. Click **Apply** in the bottom right corner.

    ![Apply button](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Inserting_Data_6.png "Apply button")

    - If you accidentally entered incorrect data, you can click **Revert** beside **Apply** to erase what you just entered.

        ![Revert button for errors](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Inserting_Data_7.png "Revert button")

8. A confirmation window will appear showing the SQL statement used to insert the data.

    ![Confirmation window showing SQL statement](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Inserting_Data_8.png "Confirmation window")

9. Left-click **Apply**.

    !!! success "Success"
        If the query runs successfully, you will see this pop up. Now you can click **Finish**.


    ![Confirmation window with apply and finish](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Inserting_Data_9.png "Confirmation window") 

10. Verify that your row appears in the table, by clicking **Refresh**.

    ![Refresh button if data has not updated](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Inserting_Data_10.png "Refresh button")

!!! note "Note"
    Make sure required columns ( marked with NN for Not Null ) are filled in before clicking **Apply**, or the insert may fail.

## Conclusion

Now your table contains saved rows, and you can now view, edit, or query that data. We'll query that data in the next part.
