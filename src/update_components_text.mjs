import fs from 'fs';
import path from 'path';

const dir = '/Users/programming.com/Desktop/Code/Prac/CustomDesign/src/data';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.js') || f.endsWith('.jsx'));

const targetStrings = [
    'Hover Me',
    'Click Me',
    'Submit',
    'Sign In',
    'Get Started',
    'Card Title',
    'John Doe',
    'Follow',
    'Hello World',
    'Add to Cart',
    'Buy Now',
    'Send',
    'Save'
];

files.forEach(file => {
    const fullPath = path.join(dir, file);
    let content = fs.readFileSync(fullPath, 'utf8');
    let changed = false;

    targetStrings.forEach(text => {
        // Find exactly >Text<
        const exactPattern = new RegExp(`>\\s*${text}\\s*<`, 'g');
        if (exactPattern.test(content)) {
            content = content.replace(exactPattern, `>{c.text || '${text}'}<`);
            changed = true;
        }
        
        // Find "Text" that might be a value etc or generic
        // Actually exactPattern handles 99% of UI text
    });

    if (changed) {
        fs.writeFileSync(fullPath, content);
        console.log(`Updated ${file}`);
    }
});
