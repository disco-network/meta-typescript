import fs = require("./filesystem");

export class MetaTypeScriptCompiler {

  constructor(private fileSystem: fs.FileSystem) {
  }

  public processFile(path: string) {
    this.fileSystem.read(path);
  }
}
