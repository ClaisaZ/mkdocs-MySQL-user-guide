<div class="troubleshooting-conventions-only">
   <table>
      <thead>
         <tr>
            <th>Symptom</th>
            <th>Possible Cause</th>
            <th>Solution</th>
         </tr>
      </thead>
      <tbody>
         <tr>
            <td>Cannot click the AI check box.</td>
            <td>Column datatype is not numeric or not set as Primary Key.</td>
            <td>Change datatype to INT and enable PK, then select AI.</td>
         </tr>
         <tr>
            <td>Error when inserting text into a column.</td>
            <td>Incorrect datatype (e.g. using INT instead of VARCHAR).</td>
            <td>Change the column datatype to VARCHAR for text values and INT for numeric values.</td>
         </tr>
         <tr>
            <td>Table does not appear after creation.</td>
            <td>Schema not refreshed.</td>
            <td>Right click the schema and click Refresh.</td>
         </tr>
         <tr>
            <td>Cannot type in a cell when inserting data.</td>
            <td>Table is not in edit mode.</td>
            <td>Click on an empty row (NULL row) at the bottom to start editing.</td>
         </tr>
         <tr>
            <td>Cannot find the table when inserting data.</td>
            <td>Wrong schema selected.</td>
            <td>Make sure you are using the correct schema.</td>
         </tr>
         <tr>
            <td>Text is being cut off or truncated.</td>
            <td>VARCHAR length is too short.</td>
            <td>Increase the size (e.g. change VARCHAR(5) to VARCHAR(50)).</td>
         </tr>
         <tr>
            <td>Cannot delete a row.</td>
            <td>Changes not applied or wrong row selected.</td>
            <td>Select the correct row, then click Apply after deleting.</td>
         </tr>
         <tr>
            <td>Error about duplicate values.</td>
            <td>Primary Key must be unique.</td>
            <td>Enter a unique value or avoid changing the Primary Key.</td>
         </tr>
         <tr>
            <td>Query returns an error message.</td>
            <td>Syntax error in SQL.</td>
            <td>Check for missing keywords, commas, or semicolons in your query.</td>
         </tr>
         <tr>
            <td>Table does not exist error.</td>
            <td>Incorrect table name.</td>
            <td>Make sure the table name matches exactly, including spelling.</td>
         </tr>
         <tr>
            <td>Unknown database error.</td>
            <td>Schema name is incorrect or not selected.</td>
            <td>Verify the schema name and include the USE command before running the query.</td>
         </tr>
         <tr>
            <td>Cannot connect to the MySQL server.</td>
            <td>The MySQL server is not running, or the connection settings are incorrect.</td>
            <td>Make sure the MySQL server is running, then check the hostname, port, username, and password in your connection settings.</td>
         </tr>
         <tr>
            <td>Access denied for user 'root'.</td>
            <td>The password is incorrect, or the account does not have permission to connect.</td>
            <td>Re-enter the correct password and make sure you are using the correct MySQL account.</td>
         </tr>
         <tr>
            <td>No database selected appears when running a query.</td>
            <td>No default schema is selected in MySQL Workbench.</td>
            <td>Double-click your schema in the SCHEMAS panel to set it as the default schema, then run the query again.</td>
         </tr>
         <tr>
            <td>The query runs, but no rows appear in the Result Grid.</td>
            <td>The table is empty, or no matching data has been inserted yet.</td>
            <td>Make sure you inserted data into the table first, then run the query again.</td>
         </tr>
         <tr>
            <td>Changes disappear after editing data.</td>
            <td>The changes were not applied.</td>
            <td>After editing the row, click Apply and complete the confirmation step to save the changes.</td>
         </tr>
      </tbody>
   </table>
</div>