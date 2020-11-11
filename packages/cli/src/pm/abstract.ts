import { PackageManager } from "@ptool/lib";

export class AbstractPM extends PackageManager {
  public readonly name = "string";

  public async install(name: string, version: string): Promise<void> {
    console.log("abstract", "install", version);
  }
}
