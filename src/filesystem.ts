export interface FileSystem {
  read(path: string): string;
  write(path: string, content: string);
  deleteFile(path: string);
  fileExists(path: string): boolean;
  getContainedFilesRecursive(path: string, predicate: (path: string) => boolean): string[];
}
