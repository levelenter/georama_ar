import fs from "fs";
import path from "path";
const mediaDirPath = "./convert/origin/media";

function readMediaDir(): string[] {
  const mediaPath = path.resolve(mediaDirPath);
  return fs.readdirSync(mediaPath);
}

export const mediaFiles = readMediaDir();
