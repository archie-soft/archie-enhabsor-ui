export class ImportAttributes {
  // global attributes
  folderName: string;
  textAction: string; // recognize (ocr), extrat (pdf), skip
  addFileNamesTo: string;
  // solr document fields
  isadFonds: string;
  isadSubFonds: string;
  isadSeries: string;
  isadFile: string;
  dcAccessRights: string;
  dcTitle: string;
  dcCreator: Array<string>;
  dcDateStart: string;
  dcDateEnd: string;
  dcDescription: string;
  dcType: string;
  dcSource: string;
  dcIdentifier: string;
  localStoragePermanent: boolean;
  localStorageCabinet: string;
  localStorageShelf: string;
  localStorageContainer: string;
}
