---
title: View and edit data
description: Learn how to view, update, and edit table data in MySQL Workbench on Windows.
---

# 6. View and edit data

In Workbench you can view and change data in a table, allowing you to update values, correct mistakes, and more. This part walks you through how to view and edit table data in Workbench.

!!! warning "Warning"
    Before following this part, make sure you've already inserted data into a table, and you have your connection opened. Refer to [Inserting data into tables](./5-insertdata.md).

    You should be familiar with the contents of the previous sections so you can follow this part easily!

## Steps

### Editing data

1. **Locate** the schema panel on the left side of the Workbench menu.

2. **Expand** your schema and Tables section to locate the table you want to view or edit.

    ![Expand table section by clicking the arrow button](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Inserting_Data_2.png "Expanding schema to locate table")

3. **Right-click** that table.

4. **Left-click** the Select Rows option. The Result Grid from the last part will show up again.

    ![Right-click to see Select rows option](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Inserting_Data_3.png "Select rows")

    ![Table view showing all current data](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/view_data_1.png "Table with current data")

5. **Left-click** on the cell you want to edit.

    ![The cell to edit](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/miyu.png "Left click this cell")

6. **Type** in the new value you want.

    ![Schema panel in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/view_data_2.png "Data inside a cell in a table")

7. **Apply** the changes you made to the cell the same way you did in the previous parts.

8. **Refresh** the Result Grid, your table should be edited now.

### Deleting data

1. **Left-click** on the button highlighted in red beside the row you want to delete.

    ![Schema panel in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/select-all-row.png "Open options menu on a row")

2. **Right-click** the same button to open the menu options for that row.

3. **Left-click** the Delete Row(s) option in the options menu.

    ![Schema panel in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/delete-rows-option.png "Delete Row(s) option")

    !!! warning "Warning"
        Be careful when editing values in a Primary Key column. Primary Keys must remain unique, so changing them may cause errors or affect how rows are identified.

4. **Apply** the changes the same way you did in the previous parts.

5. **Refresh** the Result Grid, your row should be deleted now.

    !!! success "Success"
        The row you deleted should be empty now.

        ![Empty row in a table after being deleted](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/empty-row.png "Empty row after deleted")

## Conclusion

You just viewed and edited table data in Workbench. This way you can update existing values and remove unwanted rows.
