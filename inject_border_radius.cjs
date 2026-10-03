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

const files = walk('./src').filter(f => f.endsWith('.jsx'));
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Add borderRadius: '16px' to style objects that have border, background, or boxShadow but no borderRadius
  // This is a naive but effective way for inline styles.
  // We look for style={{ ... }}
  content = content.replace(/style=\{\{([^}]+)\}\}/g, (match, inner) => {
    // If it already has borderRadius, leave it
    if (inner.includes('borderRadius')) {
      return match;
    }
    // If it has background (but not just transparent/none), border, or boxShadow
    if (
      (inner.includes('background:') && !inner.includes('background: \'none\'') && !inner.includes('background: \'transparent\'')) ||
      (inner.includes('border:') && !inner.includes('border: \'none\'') && !inner.includes('border: 0')) ||
      inner.includes('boxShadow:')
    ) {
      return `style={{ borderRadius: '16px', ${inner.trim()} }}`;
    }
    return match;
  });

  if (original !== content) {
    fs.writeFileSync(file, content);
    console.log('Updated ' + file);
  }
});
