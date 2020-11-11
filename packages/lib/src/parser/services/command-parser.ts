import { PackageManager } from "./package-manager";
import { Strategy } from "./strategy";

export const commandParser = (
  command: string,
  packageManagerMap: { [pm: string]: PackageManager }
): Strategy => {
  const [packageManagerName, packageName] = command.split(" ");
  let version = "latest";

  if (packageName.split("==").length > 0) {
    version = packageName.split("==")[1];
  }

  const managers: string[] = Object.keys(packageManagerMap);

  if (!managers.includes(packageManagerName)) {
    throw new Error("Package manager not found");
  }

  return {
    packageManager: packageManagerMap[packageManagerName],
    packageName,
    version,
  };
};
