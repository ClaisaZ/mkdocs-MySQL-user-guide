---
title: Introduction
description: Beginner-friendly introduction to using MySQL Workbench on Windows for basic database tasks.
---

# Introduction

MySQL is a *relational* database management system used to store, organize, and manage data. It allows users to create databases, store information in tables, and run queries to retrieve or modify data.

This documentation explains how to use *MySQL Workbench* on *Windows* to do basic database work with its GUI (graphical interface). It will walk you through creating a connection, creating a schema (database), creating tables, running queries, and viewing or editing data in Workbench.

This is a beginner's guide to Workbench’s GUI, not a detailed guide to database theory or advanced MySQL.

## Intended Users

This documentation is designed for users who want to learn how to install and use MySQL.

- Beginner developers who want to learn how to install and use MySQL.
- Students learning database management and core MySQL functionalities.
- First-time users who have never worked with a database GUI before.

## Prerequisite Knowledge

Before following this guide, users should be familiar with basic computer usage. This includes opening and navigating applications, downloading and installing software, and using a mouse and keyboard to interact with system interfaces. Users should also be comfortable navigating files and folders within the Windows operating system.

## Software Requirements

Before following this guide, make sure the following software is installed on your Windows computer. This guide is specifically written for users running the Windows operating system.

- [MySQL Installer for Windows](https://dev.mysql.com/downloads/installer/)
- [MySQL Workbench for Windows](https://dev.mysql.com/downloads/workbench/)

## Typographical Conventions

| Convention | Explanation | Examples |
|---|---|---|
| **Commands & actions** | Bolded words for commands or actions you need to perform. | **Click**, **Enter**, **Type**, **Return**, **Open**, **Select** |
| `Code, SQL, and file names` | Monospace text for SQL commands, code, and file names. | `SELECT * FROM users;`, `my.ini`, `mysql.exe` |
| *Important terms* | Italics for important terms when they are first introduced. | *schema*, *table*, *query* |

## Notes, Warnings, and Results

You'll see branded callouts throughout the guide to highlight important information.

!!! danger "Danger"
    Steps marked **Danger** can permanently delete data or cause errors. Read them carefully before continuing.

!!! warning "Warning"
    Steps marked **Warning** explain prerequisites or important conditions that may prevent you from completing the tutorial successfully.

!!! note "Note"
    **Note** boxes provide extra explanation about what MySQL or Workbench is doing and why a step matters.

!!! success "Success"
    **Success** shows the expected result so you can confirm you’re on the right track.
