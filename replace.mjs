import fs from 'fs';
import path from 'path';

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Backgrounds
    content = content.replace(/bg-\[#090b0e\]/g, 'bg-navy-dark');
    content = content.replace(/bg-\[#001633\]/g, 'bg-navy-dark');
    content = content.replace(/bg-\[#001229\]/g, 'bg-navy-dark');
    content = content.replace(/bg-\[#1A1F3C\]/g, 'bg-navy-slate');
    content = content.replace(/bg-\[#001a3d\]/g, 'bg-navy-slate');
    
    // Text colors
    content = content.replace(/text-\[#f1f3f5\]/g, 'text-text-main');
    content = content.replace(/text-\[#FFFFFF\]/g, 'text-text-main');
    // text-white can be contextual, let's replace but carefully. Actually text-white is mainly used for text
    content = content.replace(/text-white/g, 'text-text-main');
    
    content = content.replace(/text-\[#E2E8F0\]/g, 'text-text-muted');
    
    // Borders
    content = content.replace(/border-white/g, 'border-text-main');
    content = content.replace(/border-text-main\/5/g, 'border-text-main/10'); // to make it visible in light mode
    
    // Backgrounds (white)
    content = content.replace(/bg-white/g, 'bg-text-main');

    // Luxury Gold
    content = content.replace(/\[#C5A059\]/gi, 'luxury-gold');
    content = content.replace(/\[#c5a45f\]/gi, 'luxury-gold');
    content = content.replace(/\[#DBB040\]/gi, 'luxury-gold');
    content = content.replace(/from-luxury-gold/g, 'from-luxury-gold'); // if any duplicates

    // Champagne
    content = content.replace(/\[#ecd39d\]/gi, 'luxury-champagne');
    content = content.replace(/\[#EAD07F\]/gi, 'luxury-champagne');
    
    fs.writeFileSync(filePath, content, 'utf8');
}

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDirectory(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            replaceInFile(fullPath);
        }
    }
}

processDirectory('./src');
console.log('Done replacing colors.');
