import fs from 'fs';
import path from 'path';

console.log('Analyzing current bundle and applying optimizations...');

// Remove unused Lucide icons by creating a custom icon bundle
const iconUsageMap = new Map();
const srcFiles = [];

function findFiles(dir, ext) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const file of files) {
    if (file.isDirectory() && file.name !== 'node_modules') {
      findFiles(path.join(dir, file.name), ext);
    } else if (file.name.endsWith(ext)) {
      srcFiles.push(path.join(dir, file.name));
    }
  }
}

findFiles('./client/src', '.tsx');
findFiles('./client/src', '.ts');

// Scan for actual Lucide icon usage
const iconPattern = /import\s*\{\s*([^}]+)\s*\}\s*from\s*["']lucide-react["']/g;
const lucideIconNames = [
  'Calculator', 'Settings', 'Menu', 'X', 'ChevronDown', 'ChevronUp', 'ChevronLeft', 'ChevronRight',
  'Check', 'Copy', 'Download', 'Upload', 'Search', 'Filter', 'Sort', 'Info', 'Help', 'Star',
  'Heart', 'Eye', 'EyeOff', 'Home', 'User', 'Mail', 'Phone', 'Calendar', 'Clock', 'Globe'
];

for (const file of srcFiles) {
  const content = fs.readFileSync(file, 'utf8');
  let match;
  
  while ((match = iconPattern.exec(content)) !== null) {
    const iconList = match[1];
    let iconMatch;
    while ((iconMatch = individualIconPattern.exec(iconList)) !== null) {
      iconUsageMap.set(iconMatch[0], (iconUsageMap.get(iconMatch[0]) || 0) + 1);
    }
  }
}

console.log('Used icons found:', Array.from(iconUsageMap.keys()).length);
console.log('Most used icons:', Array.from(iconUsageMap.entries()).sort((a, b) => b[1] - a[1]).slice(0, 10));

// Create optimized icon bundle
const usedIcons = Array.from(iconUsageMap.keys());
const iconBundle = `// Auto-generated optimized icon bundle
${usedIcons.map(icon => `export { ${icon} } from 'lucide-react';`).join('\n')}
`;

fs.writeFileSync('./client/src/components/icons.ts', iconBundle);
console.log('Created optimized icon bundle at client/src/components/icons.ts');

// Bundle size analysis
const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
const heavyDeps = [
  '@radix-ui/react-dialog',
  '@radix-ui/react-dropdown-menu', 
  'recharts',
  'lucide-react',
  '@tanstack/react-query'
];

console.log('\nBundle optimization opportunities:');
heavyDeps.forEach(dep => {
  if (packageJson.dependencies[dep]) {
    console.log(`- ${dep}: Consider lazy loading or tree shaking`);
  }
});

console.log('\nOptimizations applied:');
console.log('- Created custom icon bundle with only used icons');
console.log('- Identified heavy dependencies for lazy loading');