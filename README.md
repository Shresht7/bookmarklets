# Bookmarklets

My collection of bookmarklets

## 📖 Usage

To use a bookmarklet:

1. Copy the JavaScript code shown below each bookmarklet title.
2. Open your browser's bookmarks manager.
3. Create a new bookmark and paste the code into the URL/location field.
4. Name the bookmark as you like.
5. Click the bookmarklet from your bookmarks bar while on any webpage to run it. Alternatively, run the bookmarklet using the address bar.

---

## Adjust Video Playback Rate

Set the video's playback rate. Shows a prompt to set the playback speed (defaults to 4x).

Use Case: Sometimes I want to go above the 2x speed limit of YouTube.

```js
javascript:(() => document.getElementsByTagName("video")[0].playbackRate = Number(prompt("Speed", "4")))();
```

## Make All Content Editable

Makes the entire webpage editable

```js
javascript:(()=>{document.body.contentEditable='true';document.designMode='on';})();
```

## Visualize DOM Elements

Make colorful boxes around every DOM element

```js
javascript:(function(){var all=document.getElementsByTagName('*');for(var i=0;i<all.length;i++){all[i].style.outline='1px solid #'+(~~(Math.random()*(1<<24))).toString(16)}})();
```

# Visualize Flex and Grid Elements

Highlights the flex and grid elements on the page

```js
javascript:(() => {document.querySelectorAll('*').forEach(el => {; let style = window.getComputedStyle(el);; let display = style.display;; if (display === 'grid') {; el.style.outline = '2px solid #561d89';; } else if (display === 'flex') {; let direction = style.flexDirection;; if (direction === 'row' || direction === 'row-reverse') {; el.style.outline = '2px solid #FF9800';; } else if (direction === 'column' || direction === 'column-reverse') {; el.style.outline = '2px solid #00BCD4';; }; }; });})();
```

---

## License 

This project is licensed under the [MIT License](./LICENSE)
