import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { ArchieDocumentService } from "../archie-document.service";
import { StorageService } from "../storage.service";
import { ArchieDoc } from "../model/archie-doc";


@Component({
  selector: 'app-edit-document',
  templateUrl: './edit-document.component.html',
  styleUrls: ['./edit-document.component.css']
})
export class EditDocumentComponent implements OnInit {
  doc: ArchieDoc;
  dcCreators: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private archieDocumentService: ArchieDocumentService,
    private storageService: StorageService
  ) { }

  ngOnInit(): void {
    this.getDocDetails();
  }

  getDocDetails(): void {
    const docId = this.route.snapshot.paramMap.get("docId");
    this.archieDocumentService
      .getSearchResults("q=id:" + docId, 1, 1)
      .subscribe((data: any) => this.processSearchResults(data));
  }

  processSearchResults(data: any) {
    this.doc = data["response"]["docs"][0];
    if (this.doc.dcCreator) {
      this.dcCreators = this.doc.dcCreator.toString();
    }
  }

  goBack(): void {
    this.location.back();
  }

  getThumbnailLink(doc: ArchieDoc) {
    return this.storageService.getUrl(doc.dcAccessRights, "thumbnails", doc.id, "png");
  }

  saveDocument(): void {
    // creators
    if (this.dcCreators) {
      this.doc.dcCreator = this.dcCreators.split(",").map(Function.prototype.call, String.prototype.trim);
    }
    this.archieDocumentService
      .updateDocument(this.doc)
      .subscribe(() => this.goBack());
  }

}
