'use strict';

var current = 'C';
var max = 12;

for (var i = 0; i < max; i++) {
    console.log(current, scale(current).notes);
    var next_index = (notes.indexOf(current) + 7) % notes.length;
    current = notes[next_index];
}