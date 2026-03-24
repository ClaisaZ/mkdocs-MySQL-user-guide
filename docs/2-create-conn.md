---
title: Create a connection
description: Step-by-step guide for creating a MySQL Workbench connection on Windows for first-time users.
---

# Create a connection

Before users can create schemas, tables, or run queries in MySQL Workbench, they must first establish a connection to a MySQL Server. A connection allows MySQL Workbench to communicate with the database server so that users can manage databases and execute SQL commands.

This section explains how to create a new connection using the MySQL Workbench graphical interface.

## Steps

1. Open **MySQL Workbench**.

2. On the home screen, click the + icon next to MySQL Connections.

    ![Schema panel in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Creating_Connection_2-2.png)

3. In the Setup New Connection window, enter these connection details:

    - Connection Name: enter a name for the connection
    - Hostname: `localhost`
    - Port: `3306`
    - Username: `root`

    ![Setup New Connection window with the required fields](assets/images/Creating_Connection_combined.png){ .img-medium .center-it title="Setup New Connection window" }

    You do not need to worry about Password yet.

4. Click **Test Connection** to verify that the connection settings are correct. If prompted, enter your MySQL password.

!!! success "Success"
    If the connection settings are correct, Workbench will display a successful connection message:

    ![Successful Test Connection message in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Creating_Connection_7.png){ .img-medium .center-it title="Successful Test Connection message in MySQL Workbench" }

5. Click **OK** to save the connection.

!!! note "Note"
    If the connection test fails, double-check your **password**, **hostname**, and **port number (3306)**. Most connection issues are caused by incorrect login details.

## Conclusion

You've created a connection in MySQL Workbench. You can use this to access your MySQL server to do things like creating a schema, creating tables, and running queries.