import { Command, flags } from "@oclif/command";
import { resolve } from "path";
import { parse } from "@ptool/lib";
import { readFileSync } from "fs";
import { AbstractPM } from "./pm/abstract";

class PtoolCli extends Command {
  static description = "Install from .pfile";

  static flags = {
    version: flags.version({ char: "v" }),
    help: flags.help({ char: "h" }),
    force: flags.boolean({ char: "f" }),
  };

  static args = [{ name: "file" }];

  async run() {
    const { args } = this.parse(PtoolCli);
    let file: string = args.file;
    let content: string = "";

    try {
      file = resolve(file);
    } catch (error) {
      this.debug(error);
      this.error("Failed to resolve file");
    }

    try {
      content = readFileSync(file, "utf8");
    } catch (error) {
      this.debug(error);
      this.error("Failed to read file");
    }

    const strategy = parse(content, { abstract: new AbstractPM() }, "\n");

    this.debug("strategy", strategy);
  }
}

export = PtoolCli;
