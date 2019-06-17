# everyeye-rss
A npm package for retrieving videogame news from https://www.everyeye.it website

## Installation

Install it as dependency for you project

```bash
npm i https://github.com/ontech7/everyeye-rss.git
```

Import it in your project adding this in the head of the **.js** file

```javascript
var everyeye = require('everyeye-rss');
```

## Docs

(*function*) Returns '**maxLength**' news in a '**news**' object, from the latest to the earliest.

```javascript
rss(maxLength);
```

**news**: (*Object*) News info.<br/>
|- title: (*Array of String*) News titles.<br/>
|- description: (*Array of String*) News descriptions.<br/>
|- link: (*Array of String*) News links.<br/>
|- creator: (*Array of String*) News creators.<br/>
|_ pubDate: (*Array of String*) News publish dates.<br/>

## Example

```javascript
everyeye.rss(5).then((result) => console.log(result.title));
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
