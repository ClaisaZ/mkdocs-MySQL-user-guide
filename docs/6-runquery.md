---
title: Running queries
description: Step-by-step guide to running SQL queries in MySQL Workbench on Windows.
---

# Running queries

A query is an SQL command used to retrieve or work with data. In MySQL Workbench, queries are written and run in the SQL Editor. This part explains how to run a query using Workbench.

!!! warning "Before you begin"
    Before continuing, make sure you have already created a schema, created a table, and inserted data into that table.

## Steps

1. Open MySQL Workbench, and **click** to open your saved connection.

    ![Saved connection on the MySQL Workbench home screen](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Run_Query_1.png)

2. When the SQL Editor opens, make sure your schema appears in the SCHEMAS panel on the left.

    ![SQL Editor with the SCHEMAS panel visible](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Run_Query_2.png)

3. Expand your schema and confirm that your table is listed in the **Tables** section.

    ![Expanded schema showing the books table](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Run_Query_3.png)

4. Click the **Create a new SQL tab for executing queries** button.

    ![New SQL tab button in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Run_Query_4.png)

5. In the new SQL tab, type the following query:

    ```sql
    SELECT * FROM books;
    ```

    ![SELECT query typed in the SQL Editor](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Run_Query_5.png)

    !!! note "Note"
        If you used a different table name in the previous tutorial, replace `books` with the name of your own table.

6. Click the **Execute** button (lightning bolt icon) to run the query.

    ![Execute button in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Run_Query_6.png)

7. Look at the **Result Grid** at the bottom of the SQL Editor.

    The results will display all rows and columns from your table.

    ![Result Grid showing the query results](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Run_Query_7.png)

!!! success "Success"
    If the query runs successfully, you will see the data from your table in the **Result Grid**.

!!! note "Note"
    This part uses a `SELECT` query because it's safe for beginners.

## Example

A `SELECT` query is used to retrieve data from a table.

For example:

```sql
SELECT * FROM books;