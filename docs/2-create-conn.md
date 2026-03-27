---
title: Create a Connection
description: Step-by-step guide for creating a MySQL Workbench connection on Windows for first-time users.
---

# 1. Create a Connection

Before creating schemas, tables, or queries in Workbench, you need to connect to an SQL Server with a connection. This part shows how to create a new connection in Workbench.

## Steps

1. **Open** MySQL Workbench.

2. **Left-click** the + icon next to MySQL Connections on the home screen.

    ![Add Connection (+) button beside MySQL Connections on the MySQL Workbench home screen](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Creating_Connection_2-2.png "Add Connection button on the Workbench home screen"){ .img-medium }

    A window titled "Setup New Connection" should appear.

3. **Type** the following details into the New Connection window:

    - A name (of your choosing) in Connection Name
    - `localhost` in Hostname
    - `3306` in Port
    - `root` in Username

    ![Setup New Connection window showing the Connection Name, Hostname, Port, and Username fields](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Creating_Connection_combined2.png){ .img-medium title="Setup New Connection window with the fields used to create a local connection." }

    !!! danger "Incorrect username?"
        If `root` doesn't work for username, check the username you created when you installed MySQL Server, and use that instead of `root`. The username is usually `root` by default unless you set a different username during setup.

4. **Left-click** the Test Connection button to verify the connection is working. If prompted, **enter** your MySQL password.

    !!! success "Success"
        If the connection settings are correct, you'll see a successful connection message. Good job 👍

        ![Successful connection message shown after testing the MySQL Workbench connection](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Creating_Connection_7.png){ .img-medium .center-it title="Successful Test Connection message in MySQL Workbench" }

    !!! danger "Test connection failed?"
        Double-check your password, hostname, and port number (`3306`) to make sure you have no typos. Most connection issues are caused by incorrect login details.

5. **Left-click** OK to save the connection.

    !!! warning "Warning"
        Before you continue to the next part, you should **left-click** on your connection (the box highlighted in red) to open it.

        ![Saved connection tile on the MySQL Workbench home screen highlighted in red](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/open-connection.png "Saved connection tile highlighted on the Workbench home screen")

## Next Steps

You've created a connection in Workbench that you can use to access your MySQL server, next, we're gonna use this connection to create a schema.
