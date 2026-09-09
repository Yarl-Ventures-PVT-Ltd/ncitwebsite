const fs = require('fs');
const path = require('path');

const fileToFix = 'src/lib/mock-data/insights.ts';
let content = fs.readFileSync(fileToFix, 'utf8');

// Replace all occurrences of http://www.ncit.lk and https://www.ncit.lk with nothing to make them relative to root,
// or better just replace http(s)://www.ncit.lk/wp-content with /wp-content

content = content.replace(/https?:\/\/www\.ncit\.lk\/wp-content/g, '/wp-content');
// Also replace in case they used ncit.lk without www
content = content.replace(/https?:\/\/ncit\.lk\/wp-content/g, '/wp-content');

// Some images might just be relative paths, they should be fine as long as they start with /wp-content or similar.
// Ensure any remaining https://www.ncit.lk/something is changed to /something 
// EXCEPT external links that need to go to ncit.lk (but we want all internal links to be local)
content = content.replace(/href="https?:\/\/(www\.)?ncit\.lk\//g, 'href="/');
content = content.replace(/src="https?:\/\/(www\.)?ncit\.lk\//g, 'src="/');

fs.writeFileSync(fileToFix, content);
console.log('Fixed insights.ts URLs');
