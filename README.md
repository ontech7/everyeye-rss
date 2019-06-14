# everyeye-rss
A npm package for retrieving videogame news from https://www.everyeye.it website

## Installation

First of all, install all required packages using **npm** inside the project folder

```bash
npm install
```

Run it from the entry point

```bash
node index.js
```

## Usages

(int) News you want to store:

```javascript
return news_maxLength;
```
(Array of String) News titles:

```javascript
return news_title;
```

(Array of String) News descriptions:

```javascript
return news_description;
```

(Array of String) News links:

```javascript
return news_link;
```

(Array of String) News creators:

```javascript
return news_creator;
```

(Array of String) News publish dates:

```javascript
return news_pubDate;
```

## Example

```javascript
var news_count = 5;
console.log(news_title);
```
Output:

```bash
[ "I migliori videogiochi dell'E3 2019: da Final Fantasy 7 a Cyberpunk 2077",
  "I numeri dell'E3 2019: partecipanti, successo sui social media e molto altro",
  'Ubisoft ha scelto Londra per Watch Dogs Legion prima del voto sulla Brexit',
  'Blair Witch: il nuovo gioco horror degli autori di Layers of Fear',
  'Su DMAX torna House of Esports: focus su Fortnite, Overwatch e grandi ospiti',
  'Everyeye.it cerca nuovi newser per la sezione Videogiochi' ]
```

## Sorry not sorry for bad README
