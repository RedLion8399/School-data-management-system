let settingsOpen: boolean;

window.onload = () => {
  settingsOpen = false;
};

/**
 * Toggle the settings menu on and off.
 *
 * When the settings menu is open, the icon is set to a cross and the
 * settings menu is displayed as a block. The icon is positioned at the
 * top left of the window.
 *
 * When the settings menu is closed, the icon is set to a gear and the
 * settings menu is not displayed. The icon is positioned statically
 * in the regular flow of the page.
 */
function toggleSettings() {
  const settingsIcon = document.getElementById("settings-icon")!;
  const settings = document.getElementById("settings-container")!;
  if (settingsOpen) {
    settingsOpen = false;
    settingsIcon.classList.add("fa-gear");
    settingsIcon.classList.remove("fa-xmark");
    settings.style.display = "none";

    settingsIcon.style.position = "static";
    settingsIcon.style.top = "auto";
    settingsIcon.style.left = "auto";
  } else {
    settingsOpen = true;
    settingsIcon.classList.remove("fa-gear");
    settingsIcon.classList.add("fa-xmark");
    settings.style.display = "block";

    settingsIcon.style.position = "fixed";
    settingsIcon.style.top = "25px";
    settingsIcon.style.left = "10px";

    if (isRowEmpty()) {
      addRow();
    }
  }
}

let subjectTable = document.getElementById("subject-selection")!;
subjectTable.addEventListener("input", (event) => {
  const target = event.target as HTMLInputElement;
  const row = target.closest("tr") as HTMLTableRowElement;
  addSubject(row);
  if (isRowEmpty()) {
    addRow();
  }
  deleteUnusedRows();
});

function addSubject(self: HTMLElement) {
  let subjectName;
  let subjectColor;
}

/**
 * Checks if all cells in all rows of the table with the id "subject-selection"
 * are filled.
 *
 * @returns {boolean} True if all cells are filled, false otherwise
 */
function isRowEmpty() {
  let table: HTMLTableElement = document.getElementById(
    "subject-selection"
  ) as HTMLTableElement;
  let rows: HTMLCollectionOf<HTMLTableRowElement> = table.rows;
  for (let i = 0; i < rows.length; i++) {
    let cells = rows[i].cells;
    for (let j = 0; j < cells.length; j++) {
      if (cells[j].innerHTML == "") {
        return false;
      }
    }
  }
  return true;
}

/**
 * Deletes all empty rows from the subject setting table and deletes them.
 * The last row is not deleted but all rows in between.
 */
function deleteUnusedRows() {
  let table: HTMLTableElement = document.getElementById(
    "subject-selection"
  ) as HTMLTableElement;
  let rows: HTMLCollectionOf<HTMLTableRowElement> = table.rows;
  for (let i = 0; i < rows.length; i++) {
    let cells: HTMLCollectionOf<HTMLTableCellElement> = rows[i].cells;
    if (cells[0].innerHTML != "<br>") {
      continue;
    }
    if (i == rows.length - 1) {
      continue;
    }
    table.deleteRow(i);
  }
}

/**
 * Adds a new row to the table with the id "subject-selection".
 * The row is copied from the template with the id "subject-template"
 * and added to the bottom of the table.
 */
function addRow() {
  let table = document.getElementById("subject-selection") as HTMLTableElement;
  let template: HTMLTemplateElement = document.getElementById(
    "subject-template"
  ) as HTMLTemplateElement;
  let templateClone: Node = template.content.cloneNode(true);
  table.appendChild(templateClone);
}
