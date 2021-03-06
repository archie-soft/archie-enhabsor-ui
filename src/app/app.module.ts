import { LOCALE_ID, NgModule } from "@angular/core";
import { registerLocaleData } from "@angular/common";
import localeHeExtra from "@angular/common/locales/extra/he";
import localeHe from "@angular/common/locales/he";

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatTableModule } from "@angular/material/table";
import { MatDialogModule } from "@angular/material/dialog";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { EditDocumentComponent } from './edit-document/edit-document.component';
import { ImportFolderComponent } from './import-folder/import-folder.component';
import { ImportFolderReportComponent } from './import-folder-report/import-folder-report.component';
import { ImportFileReportComponent } from './import-file-report/import-file-report.component';

registerLocaleData(localeHe, "he", localeHeExtra);

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    WelcomeComponent,
    ToolbarComponent,
    SearchResultsComponent,
    EditDocumentComponent,
    ImportFolderComponent,
    ImportFolderReportComponent,
    ImportFileReportComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatNativeDateModule,
    MatTooltipModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatTableModule,
    MatDialogModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "he" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
