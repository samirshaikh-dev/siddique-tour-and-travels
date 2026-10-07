const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\sufiy\\.gemini\\antigravity-ide\\brain\\9b994df5-71d5-4065-a17d-ff5e1c6e812b';
const destDir = path.join(__dirname, '..', 'public', 'images');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const files = [
  { src: 'hero_makkah_sanctuary_1791389819959.jpg', dest: 'hero-makkah.jpg' },
  { src: 'madinah_nabawi_sanctuary_1791389841293.jpg', dest: 'madinah-sanctuary.jpg' },
  { src: 'luxury_haram_suite_view_1791389870414.jpg', dest: 'luxury-suite.jpg' },
  { src: 'ziyarat_holy_mountains_1791389910977.jpg', dest: 'ziyarat-mountains.jpg' },
];

for (const f of files) {
  const sourcePath = path.join(srcDir, f.src);
  const targetPath = path.join(destDir, f.dest);
  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, targetPath);
    console.log(`Copied ${f.src} -> ${f.dest}`);
  } else {
    console.warn(`File not found: ${sourcePath}`);
  }
}
