const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, '.');

const dirsToIgnore = ['node_modules', '.git', 'dist', 'build'];
const extsToProcess = ['.js', '.jsx', '.json', '.html', '.md', '.css'];

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let newContent = content
        .replace(/Demo Hotel/gi, 'Demo Hotel')
        .replace(/Demo/gi, 'Demo')
        .replace(/DemoHotel/gi, 'DemoHotel')
        .replace(/DemoHotelhotels/gi, 'demohotels')
        .replace(/Demo-Hotel-Template/gi, 'Demo-Hotel-Template');
        
    if (content !== newContent) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`Updated: ${filePath}`);
    }
}

function traverseDirectory(dir) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            if (!dirsToIgnore.includes(file)) {
                traverseDirectory(filePath);
            }
        } else {
            const ext = path.extname(file);
            if (extsToProcess.includes(ext)) {
                replaceInFile(filePath);
            }
        }
    }
}

traverseDirectory(directoryPath);
console.log('Rebranding complete!');
