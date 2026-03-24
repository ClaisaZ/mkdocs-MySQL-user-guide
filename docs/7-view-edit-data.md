---
title: View and edit data
description: Learn how to view, update, and edit table data in MySQL Workbench on Windows.
---

# View and edit data

In MySQL Workbench, users can view and modify existing data directly within a table. This allows you to update values, correct mistakes, or remove data.

!!! warning "Before you begin"
    Before editing data, make sure you have already created a table and inserted data into it.

This section explains how to view and edit data using the MySQL Workbench graphical interface.

## Steps

1. In MySQL Workbench, locate the schemas panel on the left side. 

    ![Schema panel in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Inserting_Data_1.png)

2. Expand your schema and locate the table you want to view or edit.

    ![Schema panel in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Inserting_Data_2.png)

3. Right-click the table and select **Select Rows**.

    ![Schema panel in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Inserting_Data_3.png)

4. A table view will open showing the current data.

    ![Schema panel in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/view_data_1.png)

5. To edit a value, click directly on the cell you want to change and type the new value.

    ![Schema panel in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/view_data_2.png)

6.  To delete a row, right-click the row on the left, then select **Delete Row**

    ![Schema panel in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/view_data_3.png)

7. Click **Apply** in the bottom right corner to save your changes

8. A confirmation window will appear showing the SQL statement used to update or delete the data.

    ![Schema panel in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/view_data_4.png)

9. Click **Apply**, then click **Finish**.

    ![Schema panel in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Creating_Table_10.png)

10. Verify that your changes have been applied by clicking **Refresh**.

    ![Schema panel in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/view_data_6.png)

!!! note "Note"
    Be careful when editing values in a Primary Key column. Primary Keys must remain unique, so changing them may cause errors or affect how rows are identified.

## Conclusion

You just viewed and edited table data in Workbench. This way you can update existing values and remove unwanted rows.
