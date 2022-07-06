/**
 * Download a set of lists from a URL. Uses the function IMPORTHTML to write the values to a sheet from where they are then
 * processed and added to an array which is then written to a new sheet.
 * 
 * @returns void
 */
function getViralLists() {
  const listStart = 4;
  const listEnd = 29;
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const pasteCell = ss.getRange("Sheet1!A1");
  let retVals = [];
  const sh = ss.getSheetByName("Sheet1")
  for(let i = listStart; i <= listEnd; i++) {
    let formula =`=IMPORTHTML("https://www.doctoralerts.com/list-pathogenic-viruses/", "list", ${i})`;
    pasteCell.setValue(formula);
    let values = sh.getDataRange().getValues().map((row) => { return row[0]; });
    for( value of values) {
      retVals.push(value);
    }
    
  }
  const newSh = ss.insertSheet();
  newSh.setName("Viruses");
  const firstCell = newSh.getRange("A1");
  for(let i = 0; i < retVals.length; i++) {
    firstCell.offset(i, 0).setValue(retVals[i]);
  }
}
