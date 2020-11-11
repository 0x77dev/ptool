import { commandParser } from "./services/command-parser";
import { PackageManager } from "./services/package-manager";
import { Strategy } from "./services/strategy";

export const parse = (
  text: string,
  packageManagerMap: { [pm: string]: PackageManager },
  separator = "\n"
): Strategy[] => {
  return text
    .split(separator)
    .map((command) => commandParser(command, packageManagerMap));
};

export { commandParser, PackageManager, Strategy };
