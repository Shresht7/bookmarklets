const all = document.getElementsByTagName('*')

for (let i = 0; i < all.length; i++) {
    all[i].style.outline = '1px solid #' + (~~(Math.random() * (1 << 24))).toString(16)
}

// Math.random() * (1 << 24) generates a random floating-point number between 0 (inclusive) and 2^24 (exclusive).
// Bitwise NOT (~~) truncates the decimal, leaving you with an integer between 0 and 16,777,215.
