import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ArchieDocumentService } from "../archie-document.service";
import { ImportAttributes } from "../model/import-attributes";


@Component({
  selector: 'app-import-folder',
  templateUrl: './import-folder.component.html',
  styleUrls: ['./import-folder.component.css']
})
export class ImportFolderComponent implements OnInit {

  folders: string[];
  importAttributes: ImportAttributes = new ImportAttributes();
  dcCreator: string;

  constructor(
    private archieDocumentService: ArchieDocumentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initFoldersList();
    this.setDefaults();
  }
  initFoldersList(): void {
    this.archieDocumentService
      .getImportFolders()
      .subscribe((data: string[]) => (this.folders = data));
  }

  setDefaults(): void {
    this.importAttributes.dcAccessRights = "private";
    //this.importAttributes.textAction = "do-nothing";
  }

  import(): void {
    if (!this.validateUserInput()) {
      return;
    }
    // dc creators
    if (this.dcCreator) {
      this.importAttributes.dcCreator = this.dcCreator.split(",").map(Function.prototype.call, String.prototype.trim);
    }
    // post
    this.archieDocumentService
      .importFolder(this.importAttributes)
      .subscribe((data: any) => this.postImport(data));
  }

  validateUserInput() {
    // folderName
    if (!this.importAttributes.folderName) {
      alert("תיקייה: שכחת לבחור תיקיה עם קבצים ליבוא");
      return false;
    }
    // addFileNamesTo
    if (!this.importAttributes.addFileNamesTo) {
      alert("הוסף שמות קבצים לשדה: שכחת לבחור פעולה מהרשימה");
      return false;
    }
    // textAction
    if (!this.importAttributes.textAction) {
      alert("טיפול בטקסט: שכחת לבחור פעולה מהרשימה");
      return false;
    }
    // dcType
    if (!this.importAttributes.dcType) {
      alert("סוג: שכחת לבחור מהרשימה את הקטגוריה אליה משתייכים הקבצים");
      return false;
    }
    // dcAccessRights
    if (!this.importAttributes.dcAccessRights) {
      alert("סיווג: שכחת לבחור את רמת הסיווג מהרשימה");
      return false;
    }
    // title can't be empty
    if (this.importAttributes.addFileNamesTo === "do-nothing") {
      if (!this.importAttributes.dcTitle) {
        alert("לכל מסמך צריך שתהיה כותרת");
        return;
      }
    }
    // valid
    return true;
  }

  postImport(data: any): void {
    console.log("postImportFolder: " + data);
    alert("הקבצים נשלחו לשרת לקליטה - לחצו אישור לצפייה בדוח");
    this.router.navigate(["/import-folder-report"]);
  }

}
