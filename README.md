# fuzzy-array-filter

[![npm version](https://badge.fury.io/js/fuzzy-array-filter.svg)](https://badge.fury.io/js/fuzzy-array-filter)

A simple fuzzy filter function for [`array.prototype.filter`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/filter) using [fuse.js](http://fusejs.io/).

## Install

```sh
npm i -S fuzzy-array-filter
```

## How to use it : Simple data structure

### Basics

use this wrapper with simple array `[val1, val2, ...]` il is really (really) easy :

```js
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

console.log(array.filter(fuzzyFilter('new orleans')));
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

```js
ìmport fuzzyFilter from 'fuzzy-array-filter';

const array = theRisingSunArray; // the previous one

const options = {
  caseSensitive: true,
};

console.log(array.filter(fuzzyFilter('new orleans', options)));
// => []

console.log(array.filter(fuzzySearch('man', options)));
// => [ 'And \'s been the ruin of many a poor boy', 'My father was a gamblin man' ]


```

For more details, please see the [fuse.js](http://fusejs.io/) options documentation

## How to use it : More complex data structures

### Basics

When you use this wrapper with more complex data structure, make sure you have provided some custom options.
You **MUST** fill the `id` and the `keys` options **AND** `id` **MUST** be one of the `keys` values.

In most of use cases `keys = [id, [whatever]]`.

### Simple complex

```js
const array = [
  {names: 'Edwina' },
  {names: 'Augusta' },
  {names: 'Lina' },
  {names: 'Ware' },
  {names: 'Kim' },
  {names: 'Nita' },
  {names: 'Garrett' },
  {names: 'Concepcion' },
  {names: 'Laverne' },
  {names: 'Alford' },
  {names: 'Jill' },
  {names: 'Reed' },
  {names: 'Shaw' },
];

const options = {
  keys: ['names'],
  id: 'names'
}

const filteredArray = array.filter(fuzzyFilter('in', options))
console.log(filteredArray)

```

### Complex

```js
const array2 = [
  {names: { first: 'Edwina' } },
  {names: { first: 'Augusta' } },
  {names: { first: 'Lina' } },
  {names: { first: 'Ware' } },
  {names: { first: 'Kim' } },
  {names: { first: 'Nita' } },
  {names: { first: 'Garrett' } },
  {names: { first: 'Concepcion' } },
  {names: { first: 'Laverne' } },
  {names: { first: 'Alford' } },
  {names: { first: 'Jill' } },
  {names: { first: 'Reed' } },
  {names: { first: 'Shaw' } },
];

const options2 = {
  keys: ['names.first'],
  id: 'names.first'
}

const filteredArray2 = array2.filter(fuzzyFilter('in', options2))
console.log(filteredArray2)

```

### More complex

```js
const array3 = [
  {names: { first: ['Edwina'] } },
  {names: { first: ['Augusta'] } },
  {names: { first: ['Lina'] } },
  {names: { first: ['Ware'] } },
  {names: { first: ['Kim'] } },
  {names: { first: ['Nita'] } },
  {names: { first: ['Garrett'] } },
  {names: { first: ['Concepcion'] } },
  {names: { first: ['Laverne'] } },
  {names: { first: ['Alford'] } },
  {names: { first: ['Jill'] } },
  {names: { first: ['Reed'] } },
  {names: { first: ['Shaw'] } },
];

const options3 = {
  keys: ['names.first'],
  id: 'names.first'
}

const filteredArray3 = array3.filter(fuzzyFilter('in', options3))
console.log(filteredArray2)

```


## Dependencies

* [fuse.js](https://www.npmjs.com/package/fuse.js)

## ToDo

* Any idea ?
