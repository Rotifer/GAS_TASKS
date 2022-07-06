# GAS Tasks

General pieces of code for specific purposes. Much of the code here needs to be cleaned up.

## Download a set of lists from a webpage

The Sheets function __IMPORTHTML__ can be used to download both tables and lists from webpages.
Unfortunately, Google Sheets does not provide a means to call spreadsheet functions as VBA does
where you can use the _WorksheetFunction__ to call Excel functions. However, with a little extra work, 
we can set the formula of a cell with a call to the function.

In this example, I wished to download 29 lists from a [webpage](https://www.doctoralerts.com/list-pathogenic-viruses/).

Task:

- There are 29 lists to download starting at list 4 up to 29 on the webpage.

The approach is as follows:

- Construct the call to function _IMPORTHTML_ in a loop passing in the list number.
- Set the value of cell A1 to the value of the function call:
  - `=IMPORTHTML("https://www.doctoralerts.com/list-pathogenic-viruses/", "list", ${i})`
- Collect the returned values into an array
- When all lists have been collected, instert a new sheet.
- Loop over the array to write its element values to consecutive rows in the new sheet.

[ __Source code__ ](https://github.com/Rotifer/GAS_TASKS/blob/main/download_weblist_data.js) 