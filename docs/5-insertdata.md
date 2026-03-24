---
title: Insert data
description: Learn how to insert data into a MySQL table in MySQL Workbench on Windows.
---

# Insert data

In MySQL Workbench, data is stored inside tables as rows. To add new information, users insert data into the columns of a table.

!!! warning "Warning"
Before inserting data, make sure you have already created a table.

This section explains how to insert data using the MySQL Workbench graphical interface.

## Steps

1. In MySQL Workbench, locate the schemas panel on the left side. 

    ![Schema panel in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Inserting_Data_1.png)

2. Expand your schema and locate the table you want to insert data into.

    ![Schema panel in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Inserting_Data_2.png)

3. Right-click the table and click **Select Rows**.

    ![Schema panel in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Inserting_Data_3.png)

4. A table view will open showing the current rows.

5. Click on an empty row (usually marked with NULL ) at the bottom of the table.

    ![Schema panel in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Inserting_Data_4.png)

6. Enter values into each column.
    
    - Type directly into each cell.

        ![Schema panel in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Inserting_Data_5.png)

    - Follow the datatype requirements (e.g. numbers for INT, text for VARCHAR).

    - If a column is set to Auto Increment, you can leave it blank and it will be filled automatically.


7. Click **Apply** in the bottom right corner.

    ![Schema panel in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Inserting_Data_6.png)

    - If you accidentally entered incorrect data, you can click **Revert** beside **Apply** to erase what you just entered.

        ![Schema panel in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Inserting_Data_7.png)

8. A confirmation window will appear showing the SQL statement used to insert the data.

    ![Schema panel in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Inserting_Data_8.png)

9. Click **Apply**, then click **Finish**.

    ![Schema panel in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Inserting_Data_9.png)

10. Verify that your row appears in the table, by clicking **Refresh**.

    ![Schema panel in MySQL Workbench](https://cdn.jsdelivr.net/gh/ClaisaZ/mkdocs-MySQL-user-guide@main/docs/assets/images/Inserting_Data_10.png)

<<<<<<< HEAD
## Tip

Make sure required columns ( marked with NN for Not Null ) are filled in before clicking **Apply**, or the insert may fail.


1. The tool first reads the Spotify playlist link or ID and requests the playlist’s metadata through Spotify’s app or API.

2. It collects the track list, including song titles, artists, album names, and sometimes duration or ISRC codes.

3. Because Spotify streams are protected, the downloader usually does not just pull plain audio files directly from Spotify.

4. Instead, many tools try to match each track against the same song on another source such as YouTube, local files, or a third-party music service.

5. The program searches those sources using the metadata and picks the closest match for each playlist item.

6. It then downloads or records the matched audio from that source rather than from Spotify itself.

7. After downloading, it converts the audio into a common format such as MP3 or M4A if needed.

8. The tool writes tags like title, artist, album, and cover art into each file so the songs stay organized.

9. It saves the files into a folder structure, often naming folders by playlist, artist, or album.

10. Some tools also generate an M3U or similar playlist file so the downloaded songs play in the same order.

11. Finally, the program reports any tracks it could not find, skipped, or matched imperfectly so the user can review them.

For legal and safer use, the cleanest route is usually Spotify’s built-in offline downloads for Premium or buying tracks from licensed sources.
=======
!!! note "Note"
Make sure required columns ( marked with NN for Not Null ) are filled in before clicking **Apply**, or the insert may fail.
>>>>>>> 5899744ec9d014eb354c8ddd5b5491cd7f30f6f1
