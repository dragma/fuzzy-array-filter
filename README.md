# fuzzy-array-filter

A simple fuzzy filter function for [`array.prototype.filter`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/filter) using [fuse.js](http://fusejs.io/).

## How to use it

### Simple

```javascript
ìmport fuzzyFilter from 'fuzzy-array-filter';

const array = ['There is a house in New Orleans',
  'They call the Rising Sun',
  'And \'s been the ruin of many a poor boy',
  'And God, I know I\'m one',
  'My mother was a tailor',
  'She sewed my new blue jeans',
  'My father was a gamblin man',
  'Down in New Orleans',
  'Now the only thing a gambler needs',
  'Is a suitcase and trunk',
  'And the only time he\'s satisfied',
  'Is when he\'s on a drunk',
  'Oh mother, tell your children',
  'Not to do what I have done',
  'Spend your lives in sin and misery',
  'In the House of the Rising Sun' ];

console.log(array.filter(fuzzySearch('new orleans')));
// => [ 'There is a house in New Orleans', 'Down in New Orleans' ]

```

Default fuzzy options are
```JSON
{
  "threshold": 0.4,
  "location": 0,
  "distance": 100,
  "maxPatternLength": 32,
  "keys": []
}
```

### With custom options

```javascript
ìmport fuzzyFilter from 'fuzzy-array-filter';

const array = theRisingSunArray; // the previous one

const options = {
  caseSensitive: true,
};

console.log(array.filter(fuzzySearch('new orleans', options)));
// => []

console.log(array.filter(fuzzySearch('man', options)));
// => [ 'And \'s been the ruin of many a poor boy', 'My father was a gamblin man' ]


```

For more details, please see the [fuse.js](http://fusejs.io/) options documentation

## Dependencies

* [fuse.js](https://www.npmjs.com/package/fuse.js)

## ToDo

* It must filter more complex arrays