---
title: Create a Connection
description: Step-by-step guide for creating a MySQL Workbench connection on Windows for first-time users.
---

# 1. Create a Connection

Before creating schemas, tables, or queries in Workbench, you need to connect to an SQL Server with a connection. This part shows how to create a new connection in Workbench.

## Steps

1. **Open** MySQL Workbench.

2. **Left-click** the + icon next to MySQL Connections on the home screen.

    ![Workbench add new connection button](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Creating_Connection_2-2.png "Workbench add new connection button"){ .img-medium }

3. **Type** the following details into the Setup New Connection window:

    - A name (of your choosing) in Connection Name
    - `localhost` in Hostname
    - `3306` in Port
    - `root` in Username

    ![A window displaying the fields needed to set up a new database connection. ](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Creating_Connection_combined2.png){ .img-medium title="A window displaying the fields needed to set up a new database connection." }

    !!! danger "Common issue and fix"
        If `root` does not work for username, check the username you created when you installed MySQL Server and use that instead of `root`. The username is usually `root` by default unless you set a different username during setup.

4. **Left-click** the Test Connection button to verify the connection is working. If prompted, **enter** your MySQL password.

    !!! success "Success"
        If the connection settings are correct, you'll see a successful connection message:

        ![Successful Test Connection message in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Creating_Connection_7.png){ .img-medium .center-it title="Successful Test Connection message in MySQL Workbench" }

    !!! danger "Common issue and fix"
        If the connection test fails, double-check your password, hostname, and port number (`3306`) to make sure you have no typos. Most connection issues are caused by incorrect login details.

5. **Left-click** OK to save the connection.

    !!! warning "Warning"
        Before continuing to the next part, you should **left-click** on your connection (the box highlighted in red) to open it.

        ![Connection on homescreen](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/open-connection.png "Connection highlighted in red on the home page")

## Conclusion

You've created a connection in MySQL Workbench. You can use this to access your MySQL server to do things like creating a schema, creating tables, and running queries.
