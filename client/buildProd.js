import fs from 'fs-extra';
const sourceFolder = 'dist';
const destinationFolder = '../server/dist';

// Ensure the source folder exists
if (!fs.existsSync(sourceFolder)) {
  console.error(`Source folder '${sourceFolder}' does not exist.`);
  process.exit(1);
}

// Copy the folder
fs.copySync(sourceFolder, destinationFolder, { overwrite: true });

console.log(`Folder '${sourceFolder}' successfully copied to '${destinationFolder}'.`);
