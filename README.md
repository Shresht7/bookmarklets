# Bookmarklets

My collection of bookmarklets

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
