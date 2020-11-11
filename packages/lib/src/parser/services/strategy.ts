import { PackageManager } from "./package-manager";

export interface Strategy {
  packageManager: PackageManager;
  packageName: string;
  version: string;
}
