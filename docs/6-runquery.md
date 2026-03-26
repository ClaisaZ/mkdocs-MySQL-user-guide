---
title: Running queries
description: Step-by-step guide to running SQL queries in MySQL Workbench on Windows.
---

# 6. Running queries

A query is an SQL command used to retrieve or work with data. In MySQL Workbench, queries are written and run in the SQL Editor. This part explains how to run a query using Workbench.

!!! warning "Warning"
    Before following this part, make sure you've already inserted data into a table, and you have your connection opened. Refer to [Inserting data into tables](./5-insertdata.md).

    You should be familiar with the contents of the previous sections so you can follow this part easily!

## Steps

1. **Locate** the schema panel on the left side of the Workbench menu.

2. **Expand** your schema, then **expand** the Tables section to confirm the table you created exists.

    ![SQL Editor with the SCHEMAS panel visible](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/run_query_2_4.png "Expanded menu showing table"){ .img-query-step-first-three .center-it }

3. **Left-click** File at the top left, then **left-click** New Query Tab to create a new query tab in the SQL Editor.

    ![New SQL tab button in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Run_Query_3_2.png "New Query Tab option"){ .img-query-step-first-three .center-it }

    !!! note "Note"
        You can also **press** Ctrl + T at the same time on your keyboard to create a tab.

    The area highlighted in red is your SQL Editor. This is where you write and run queries:
    ![SQL Editor](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/sqlEditor.png "SQL Editor highlighted in red"){ .img-medium .center-it }

4. **Type** this into the SQL Editor:

    ```sql
    USE name_of_your_schema;
    SELECT * FROM name_of_your_table;
    ```

    **Replace** the placeholder names with the actual names of your schema and table.

    ![SELECT query typed in the SQL Editor](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Run_Query_4.png "SQL Script typed into the SQL Editor"){ .img-query-step }

    !!! note "Note"
        This part uses a `USE` and `SELECT` query because it's safe for beginners.

5. **Left-click** the Execute button (lightning bolt icon) to run the query.

    ![Execute button in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Run_Query_5.png "Run query button"){ .img-query-step }

    !!! success "Success"
        If the query runs successfully, you'll see the data from your table in the Result Grid, as well as an Output showing the query that was executed.

        ![Successful query execution](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Run_Query_6.png "Result Grid and Output panels"){ .img-medium }

## Conclusion

You just ran a query in Workbench. You can use the SQL Editor to write and run your SQL scripts.
