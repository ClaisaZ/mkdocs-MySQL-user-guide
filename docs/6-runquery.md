---
title: Running queries
description: Step-by-step guide to running SQL queries in MySQL Workbench on Windows.
---

# 6. Running queries

A query is an SQL command used to retrieve or work with data. In MySQL Workbench, queries are written and run in the SQL Editor. This part explains how to run a query using Workbench.

!!! warning "Warning"
    Before following part, make sure you've already inserted data into a table, and you have your connection opened. Refer to [Inserting data into tables](./5-insertdata.md). You should be familiar with the contents of the previous sections.

## Steps

1. In MySQL Workbench, locate the schemas panel on the left side to confirm your schema exists.. 

    ![Schema panel in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Inserting_Data_1_2.png)

2. Expand your schema, then expand "Tables" to confirm the table you created exists. 

    ![SQL Editor with the SCHEMAS panel visible](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/run_query_2_4.png){ .img-query-step-first-three .center-it }

2. Click **File** at the top left, and left-click **New Query Tab** to create a new query tab in the SQL Editor. You can also press **Ctrl + T** to create a tab.

    ![New SQL tab button in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Run_Query_3_2.png){ .img-query-step-first-three .center-it }

    The area highlighted in red is your SQL Editor. This is where you write and run queries:
    ![SQL Editor](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/sqlEditor.png){ .img-medium .center-it }

3. In the new tab in the SQL Editor type:

    ```sql
    USE name_of_your_schema;
    SELECT * FROM name_of_your_table;
    ```

    Replace the placeholder names with the actual names of your schema and table.

    ![SELECT query typed in the SQL Editor](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Run_Query_4.png){ .img-query-step .center-it }

    !!! note "Note"
        This part uses a `USE` and `SELECT` query because it's safe for beginners.

4. Left-click the **Execute** button (lightning bolt icon) to run the query.

    ![Execute button in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Run_Query_5.png){ .img-query-step }

    !!! success "Success"
        If the query runs successfully, you will see the data from your table in the **Result Grid**, as well as an **Output** showing the query that was executed.

        ![Successful query execution](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Run_Query_6.png){ .img-medium .center-it }

## Conclusion

You just ran a query in Workbench. You can use the SQL Editor to view data, check results, and work with your schema is basic SQL commands.
