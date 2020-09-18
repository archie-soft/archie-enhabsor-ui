import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from "./about/about.component";
import { WelcomeComponent } from "./welcome/welcome.component"
import { SearchResultsComponent } from "./search-results/search-results.component"
import { EditDocumentComponent } from "./edit-document/edit-document.component";
import { ImportFolderComponent } from "./import-folder/import-folder.component";
import { ImportFolderReportComponent } from "./import-folder-report/import-folder-report.component";
import { ImportFileReportComponent } from "./import-file-report/import-file-report.component";


const routes: Routes = [
  { path: "", redirectTo: "/welcome", pathMatch: "full" },
  { path: "welcome", component: WelcomeComponent },
  { path: "search", component: SearchResultsComponent },
  { path: "about", component: AboutComponent },
  { path: "edit/:docId", component: EditDocumentComponent },
  { path: "import-folder", component: ImportFolderComponent },
  { path: "import-folder-report", component: ImportFolderReportComponent },
  { path: "import-file-report/:folderId", component: ImportFileReportComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
