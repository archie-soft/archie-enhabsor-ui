export interface ArchieDoc {
  id: string;
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
  dcFormat: string;
  dcIdentifier: string;
  localStoragePermanent: boolean;
  localStorageCabinet: string;
  localStorageShelf: string;
  localStorageContainer: string;
  localTextActionCode: string;
  fileDigest: string;
  importTime: string;
  content: string;
}
