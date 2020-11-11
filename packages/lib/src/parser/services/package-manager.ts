export abstract class PackageManager {
  public readonly name: string = "abstract";

  public async install(packageName: string, version: string): Promise<void> {}
}
