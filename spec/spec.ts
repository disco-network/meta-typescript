import fs = require("./helpers/filesystem");
import ctr = require("./helpers/counter");
import main = require("../src/index");

describe("test", () => {
  it("should work", () => {
    let fileSystem = new fs.FileSystem();
    fileSystem.read = ctr.create(args => {
      expect(args[0]).toBe("file.ts");
      return "Hi";
    });
    let compiler = new main.MetaTypeScriptCompiler(fileSystem);

    compiler.processFile("file.ts");

    expect(ctr.get(fileSystem.read)).toBe(1);
  });
});
