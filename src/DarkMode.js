const html = document.getElementsByTagName('html')[0]
if (!html.style.filter.includes('invert()')) {
    html.style.filter += ' invert()'
} else {
    html.style.filter = html.style.filter.replace('invert()', '')
}
