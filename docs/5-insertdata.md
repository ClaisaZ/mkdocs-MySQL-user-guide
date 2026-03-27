---
title: Insert Data
description: Learn how to insert data into a MySQL table in MySQL Workbench on Windows.
---

# 4. Insert Data

In MySQL Workbench, data is stored inside tables as rows. To add new information, users insert data into the columns of a table. This section explains how to insert data using the MySQL Workbench graphical interface.

!!! warning "Warning"
    Before inserting data, make sure you have already created a table. Refer to [Create a table](./4-createtable.md).

    You should be familiar with the contents of the previous sections so you can follow this part easily!

## Steps

1. **Locate** the Schemas panel on the left side of the Workbench.

2. **Expand** your schema and Tables section to locate the table you want to insert data into.

    ![Table section in schema panel](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/new_table.png "Table section"){ .img-medium }

3. **Right-click** that table.

4. **Left-click** the Select Rows option.

    ![Select rows option](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/right-click-select-table.png "Select rows option"){ .img-medium }

    !!! success "Success"
        You should see the Result Grid appear after clicking Select Rows.

        ![Result grid appearing](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@gh-pages/assets/images/result-grid.png "Result Grid"){ .img-medium }

5. **Left-click** on an empty cell to be able to type in it.

    ![Empty cell to enter data](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Inserting_Data_4_2.png "Empty cell for entering data")

6. **Type** values into each column.

    - You can type directly into each cell.

        ![Data entry example](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Inserting_Data_5.png "Showing multiple data entries"){ .img-medium }

    - Follow the datatype requirements (e.g. numbers for INT, text for VARCHAR).

7. **Left-click** the Apply button in the bottom right corner.

    !!! note "Note"
        If you accidentally entered incorrect data, you can **left-click** the Revert button beside Apply to erase what you just put.

        ![Revert button for errors](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/revert-button.png "Revert button"){ .img-medium }

8. **Read** the confirmation window showing the SQL command that will be executed.

    ![Confirmation window showing SQL statement](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/review-insert-data.png "SQL script confirmation to insert data"){ .img-medium }

9. **Left-click** the Apply button.

    !!! success "Success"
        If the SQL command runs correctly, you'll see this:

        ![Successfully inserted data](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@gh-pages/assets/images/table-script-success.png "Successfully inserted data"){ .img-medium }

    !!! danger "Common issue and fix"
        - Make sure your required columns (marked with NN for Not Null) are filled in before clicking the Apply button, or the insert will fail.

        - If you used the wrong datatype in a column, it will fail. For example, typing text like `hello` into an `INT` column that requires an integer like `1`, `2`, `3` will fail.

10. **Left-click** the Refresh button if you do not see changes in the Result Grid.

    ![Refresh button if data has not updated](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/view_data_6.png "Refresh button")

    !!! success "Success"
        You successfully inserted data into your table, you'll see the data here:

        ![Successfully inserted data](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@gh-pages/assets/images/new-data.png "Newly inserted data"){ .img-medium }

## Conclusion

Now your table contains saved rows, and you can now view, edit, or query that data. We'll query that data in the next part.
