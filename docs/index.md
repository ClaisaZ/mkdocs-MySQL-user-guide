---
title: Introduction
description: Beginner-friendly introduction to using MySQL Workbench on Windows for basic database tasks.
---

<div id="index-no-auto-glossary" hidden></div>

# Introduction

MySQL is a relational database management system used to store, organize, and manage data. It allows users to create databases, store information in tables, and run queries to retrieve or modify data.

This documentation will walk you through how to use MySQL Workbench on Windows to do basic database work with its GUI (graphical interface). You'll learn to create a connection, create a schema (database), create a table, run queries, and view or edit data.

This is a beginner's guide to Workbench’s GUI, not a detailed guide to database theory or advanced MySQL.

## Intended Users

This documentation is designed for users who want to learn how to use MySQL Workbench for basic database tasks.

- Beginner developers who want to learn to use MySQL Workbench.
- Students learning database management and core MySQL functionalities.
- First-time users who have never worked with a database GUI before.

## Prerequisite Knowledge

Before following this guide, users should be familiar with basic computer usage. This includes opening and navigating applications, downloading and installing software, and using a mouse and keyboard to interact with system interfaces. Users should also be comfortable navigating files and folders within the Windows operating system.

## Software Requirements

This guide assumes that the following software is already correctly installed on your Windows computer. This is written specifically for people running the Windows OS.

- [MySQL Server](https://dev.mysql.com/downloads/installer/) installed and running locally, with a configured MySQL user account (for example, `root`) and password
- [MySQL Workbench](https://dev.mysql.com/downloads/workbench/)

## Typographical Conventions

<div class="typo-conventions-only">
  <table>
    <thead>
      <tr>
        <th>Convention</th>
        <th>Explanation</th>
        <th>Examples</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Commands &amp; actions</strong></td>
        <td>Bolded words for commands or actions you need to perform.</td>
        <td><strong>Click</strong>, <strong>Enter</strong>, <strong>Type</strong>, <strong>Return</strong>, <strong>Open</strong>, <strong>Select</strong></td>
      </tr>
      <tr>
        <td><code>Code, SQL, and input values</code></td>
        <td>Monospace text for SQL commands, and input values.</td>
        <td><code>SELECT * FROM users;</code>, username=<code>root</code></td>
      </tr>
      <tr>
        <td>Important terms</td>
        <td>Important terms are underlined when they are first introduced. Hovering over them shows their definition.</td>
        <td>
            <span class="glossary-term" tabindex="0" data-term="schema">schema</span>,
            <span class="glossary-term" tabindex="0" data-term="table">table</span>,
            <span class="glossary-term" tabindex="0" data-term="query">query</span>
        </td>
      </tr>
    </tbody>
  </table>
</div>

## Notes, Warnings, and Results

You'll see branded callouts throughout the guide to highlight important information.

!!! danger "Issue"
    Steps marked **Issue** tell you a common issue, and how to fix it.

!!! warning "Warning"
    Steps marked **Warning** explain prerequisites or important conditions that may prevent you from completing the tutorial successfully.

!!! note "Note"
    **Note** boxes provide extra explanation about what MySQL or Workbench is doing and why a step matters.

!!! success "Success"
    **Success** shows the expected result so you can confirm you’re on the right track.
