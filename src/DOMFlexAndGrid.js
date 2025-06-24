document.querySelectorAll('*').forEach(el => {
    let style = window.getComputedStyle(el);
    let display = style.display;
    if (display === 'grid') {
        el.style.outline = '2px solid #561d89';
    } else if (display === 'flex') {
        let direction = style.flexDirection;
        if (direction === 'row' || direction === 'row-reverse') {
            el.style.outline = '2px solid #FF9800';
        } else if (direction === 'column' || direction === 'column-reverse') {
            el.style.outline = '2px solid #00BCD4';
        }
    }
});
