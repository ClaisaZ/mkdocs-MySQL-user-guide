---
title: View and edit data
description: Learn how to view, update, and edit table data in MySQL Workbench on Windows.
---

# 7. View and edit data

In Workbench you can view and change data in a table, allowing you to update values, correct mistakes, and more. This part walks you through how to view and edit table data in Workbench.

!!! warning "Warning"
    Before following this part, make sure you've already inserted data into a table, and you have your connection opened. Refer to [Inserting data into tables](./5-insertdata.md).

    You should be familiar with the contents of the previous sections!

## Steps

### Edit data

1. **Locate** the schema panel on the left side of the Workbench menu.

2. **Expand** your schema and locate the table you want to view or edit.

    ![Expand table section by clicking the arrow button](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Inserting_Data_2.png "Expanding schema to locate table")

3. **Right-click** the table you want to edit, and **left-click** the Select Rows option. The Result Grid from the last part will show up again.

    ![Right-click to see Select rows option](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Inserting_Data_3.png "Select rows")

    ![Table view showing all current data](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/view_data_1.png "Table with current data")

4. **Left-click** on the cell you want to edit and **type** the new value

    ![Schema panel in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/view_data_2.png "Data inside a cell in a table")

5. **Apply** the changes you made to the cell the same way you did in the previous parts.

6. **Refresh** the Result Grid, your table should be edited now.

### Delete data

1. **Left-click** on the button highlighted in red beside the row you want to delete, and then **right-click** on the same button to open the options menu for that row.

    ![Schema panel in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/select-all-row.png "Open options menu on a row")

2. **Left-click** the Delete Row(s) option in the options menu.

    ![Schema panel in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/delete-rows-option.png "Delete Row(s) option")

3. **Apply** the changes the same way you did in the previous parts.

4. **Refresh** the Result Grid, your row should be deleted now.

    !!! success "Success"
        The row you deleted should be empty now.

        ![Empty row in a table after being deleted](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/empty-row.png "Empty row after deleted")


!!! warning "Warning"
    Be careful when editing values in a Primary Key column. Primary Keys must remain unique, so changing them may cause errors or affect how rows are identified.

## Conclusion

You just viewed and edited table data in Workbench. This way you can update existing values and remove unwanted rows.
