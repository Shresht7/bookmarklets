// A simple script to turn the javascript in the src folder into bookmarklet ready javascript code
// Usage: node ./script/prepare.js ./src/playbackRate.js

// Imports
const fs = require('node:fs')

// Get the filepath from the command-line arguments and check if it exists
const file = process.argv[2]
if (!file || !fs.existsSync(file)) {
    console.error(`Could not find file: ${file}`)
    return process.exit(1)
}

// Read the file contents
const contents = fs.readFileSync(file, { encoding: 'utf-8' })

// Minify the JS for bookmarklet usage:
// - Remove all newlines and excessive whitespace
// - Ensure statements are separated by semicolons
// - Remove comments
const text = "javascript:(() => {" + contents
    // Remove single-line comments
    .replace(/\/\/.*$/gm, '')
    // Remove multi-line comments
    .replace(/\/\*[\s\S]*?\*\//g, '')
    // Remove newlines and leading/trailing whitespace on each line
    .split('\n').map(line => line.trim()).join('; ')
    // Collapse multiple spaces to one
    .replace(/\s+/g, ' ')
    // Trim any extra whitespace at the start or end
    .trim() + "})();";

// Write to stdout
process.stdout.write(text)
