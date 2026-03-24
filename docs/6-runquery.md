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

    ![Saved connection on the MySQL Workbench home screen](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Run_Query_1.png){ .img-small .center-it }

2. When the SQL Editor opens, make sure your schema appears in the SCHEMAS panel on the left. Also expand it to confirm that your table is inside the Tables section.

    ![SQL Editor with the SCHEMAS panel visible](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Run_Query_2_2.png){ .img-small .center-it }

3. Click **File** and click **New Query Tab** to create a new query tab in the SQL Editor. You can also press **Ctrl + T** to create a tab.

    ![New SQL tab button in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Run_Query_3_2.png){ .img-small .center-it }

    The area highlighted in red is your SQL Editor. This is where you write and run queries:
    ![SQL Editor](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/sqlEditor.png){ .img-medium .center-it }

4. In the new tab in the SQL Editor type:

    ```sql
    USE name_of_your_schema;
    SELECT * FROM name_of_your_table;
    ```

    Replace name the with the names of your schema and table.

    ![SELECT query typed in the SQL Editor](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Run_Query_4.png){ .img-query-step .center-it }

    !!! note "Note"
        This part uses a `USE` and `SELECT` query because it's safe for beginners.

5. Click the **Execute** button (lightning bolt icon) to run the query.

    ![Execute button in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Run_Query_5.png){ .img-query-step }

    !!! success "Success"
        If the query runs successfully, you will see the data from your table in the **Result Grid**, as well as an **Output** showing the query that was executed.

        ![Successful query execution](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Run_Query_6.png){ .img-medium .center-it }