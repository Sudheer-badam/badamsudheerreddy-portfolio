const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.resolve(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      results.push(file);
    }
  });
  return results;
}

const files = walk('./src').filter(f => f.endsWith('.jsx') || f.endsWith('.css'));
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // CSS border-radius
  content = content.replace(/border-radius:\s*0;/g, 'border-radius: 16px;');
  
  // React borderRadius
  content = content.replace(/borderRadius:\s*'0px'/g, "borderRadius: '16px'");
  content = content.replace(/borderRadius:\s*'2px'/g, "borderRadius: '16px'");
  content = content.replace(/borderRadius:\s*'4px'/g, "borderRadius: '16px'");
  content = content.replace(/borderRadius:\s*'6px'/g, "borderRadius: '16px'");
  content = content.replace(/borderRadius:\s*'8px'/g, "borderRadius: '16px'");
  // Added 1.5px to 16px to match if it was a tiny radius
  content = content.replace(/borderRadius:\s*'1\.5px'/g, "borderRadius: '16px'");

  if (original !== content) {
    fs.writeFileSync(file, content);
    console.log('Updated ' + file);
  }
});
