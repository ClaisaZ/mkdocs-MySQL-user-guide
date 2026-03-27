---
title: Run queries
description: Step-by-step guide to running SQL queries in MySQL Workbench on Windows.
---

# 5. Run queries

In Workbench, queries are written and run in the SQL Editor to retrieve or modify data. This part will explain the difference between queries and SQL scripts, and then walk you through how to write and run a query in Workbench.

!!! warning "Before you continue"
    Make sure you've already inserted data into your table, and your connection is opened. Refer to [Inserting data into tables](./5-insertdata.md).

    You should be familiar with the contents of the previous sections so you can follow this part easily!

## Queries vs SQL Scripts

Queries are statements that ask your database for information. Example of a query:

`SELECT * FROM customers WHERE city = 'Toronto';`

This query, or sometimes called an SQL request, gets all the customers from Toronto. A query is one SQL request, but an SQL script is a large group of SQL that can contain one or more queries (SQL requests).

## Steps

1. **Locate** the Schemas panel on the left side of the Workbench.

2. **Expand** your Schema and Tables section so you can confirm the table you created exists.

    ![SQL Editor with the SCHEMAS panel visible](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/run_query_2_4.png "Expanded menu showing table"){ .img-query-step-first-three .center-it }

3. **Left-click** the File button on the top-left corner of Workbench.

    ![File button in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/file-button.png "File button in MySQL Workbench"){ .img-query-step-first-three }

4. **Left-click** New Query Tab to create a new query tab in the SQL Editor.

    ![New SQL tab button in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Run_Query_3_2.png "New Query Tab option"){ .img-query-step-first-three .center-it }

    The area highlighted in red is your SQL Editor. This is where you write and run queries:
    ![SQL Editor](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/sqlEditor.png "SQL Editor highlighted in red"){ .img-medium .center-it }

    !!! note "Note"
        You can also **press** Ctrl + T at the same time on your keyboard to create a tab.

5. **Type** this into the SQL Editor:

    ```sql
    USE name_of_your_schema;
    SELECT * FROM name_of_your_table;
    ```

    **Replace** the placeholder names with the actual names of your schema and table.

    ![SELECT query typed in the SQL Editor](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Run_Query_4.png "SQL Script typed into the SQL Editor"){ .img-query-step }

    !!! note "Note"
        This part uses `USE` and `SELECT` queries because they are simple for beginners.

6. **Left-click** the Execute button (lightning bolt icon) to run the SQL script.

    ![Execute button in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Run_Query_5.png "Run query button"){ .img-query-step }

    !!! success "Success"
        If the SQL script runs successfully, you'll see the data from your table in the Result Grid, as well as an Output showing the query that was executed.

        ![Successful query execution](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Run_Query_6.png "Result Grid and Output panels"){ .img-medium }

## Next Steps

The next step is to use Workbench to view and edit the data in your table.
