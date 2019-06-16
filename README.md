# everyeye-rss
A npm package for retrieving videogame news from https://www.everyeye.it website

## Installation

First of all, install all required packages using **npm** inside the project folder

```bash
npm install
```

Import it in your project adding this in the head of the .js file

```javascript
var everyeye = require('everyeye-rss');
```

## Docs

(function) Returns 'maxLength' news in a 'news' object

```javascript
rss(maxLength, callback);
```

news: (Object) News info
- title: (Array of String) News titles
- description: (Array of String) News descriptions
- link: (Array of String) News links
- creator: (Array of String) News creators
- pubDate: (Array of String) News publish dates

## Example

```javascript
everyeye.rss(5, function(result) {
  console.log(result.title);
}
```
Output:

```bash
[ "I migliori videogiochi dell'E3 2019: da Final Fantasy 7 a Cyberpunk 2077",
  "I numeri dell'E3 2019: partecipanti, successo sui social media e molto altro",
  'Ubisoft ha scelto Londra per Watch Dogs Legion prima del voto sulla Brexit',
  'Blair Witch: il nuovo gioco horror degli autori di Layers of Fear',
  'Su DMAX torna House of Esports: focus su Fortnite, Overwatch e grandi ospiti']
```

You can test it through `node test.js` inside the main folder

## Sorry not sorry for bad README
