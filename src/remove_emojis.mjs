import fs from 'fs';
import path from 'path';

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else if (file.endsWith('.js') || file.endsWith('.jsx')) {
            results.push(file);
        }
    });
    return results;
}

const files = walk('/Users/programming.com/Desktop/Code/Prac/CustomDesign/src');
const emojiRegex = /[\p{Emoji_Presentation}\p{Extended_Pictographic}]+/gu;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let newContent = content;

    // We will find all lines and if a line has an emoji, we will replace the emoji and append it to end as comment.
    // However, some JSX has <div>🏠</div>. If we just remove it, the div is empty. 
    // We will just replace it with `{/* 🏠 */}` conditionally or `/* 🏠 */` if it's a string?
    // A simpler approach is to replace any Emoji in the file with `{/* emoji */}` if inside JSX, 
    // but without AST it's hard.
    
    // Let's just replace ` 'emoji ` with ` ' ` (for strings like `label: '🔘 Buttons'`)
    // And `>emoji<` with `>{/* emoji */}<` for JSX elements.
    
    // For App.jsx (and strings):
    // Match `pattern: '🔘 Buttons'` => `pattern: 'Buttons' /* 🔘 */`
    
    const lines = newContent.split('\n');
    let changed = false;
    for(let i=0; i<lines.length; i++) {
        let line = lines[i];
        if (emojiRegex.test(line)) {
            // Find all emojis in this line
            const emojis = line.match(emojiRegex).join('');
            
            // Remove the emojis from the line
            let cleanedLine = line.replace(emojiRegex, '').replace(/\s{2,}/g, ' '); // remove multiple spaces left behind if any
            
            // Add comment at end of line
            if (cleanedLine !== line) {
                // Remove trailing space before comment
                // cleanedLine += ` // ${emojis}`;
                lines[i] = cleanedLine;
                changed = true;
            }
        }
    }
    
    if (changed) {
        fs.writeFileSync(file, lines.join('\n'), 'utf8');
        console.log(`Removed emojis from ${file}`);
    }
});
