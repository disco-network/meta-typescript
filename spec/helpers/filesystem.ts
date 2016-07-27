import fs = require("../../src/filesystem");

export class FileSystem implements fs.FileSystem {

  public read: (path: string) => string;
  public write: (path: string, content: string) => void;
  public deleteFile: (path: string) => void;
  public fileExists: (path: string) => boolean;
  public getContainedFilesRecursive: (path: string, predicate: (path: string) => boolean) => string[];
}
