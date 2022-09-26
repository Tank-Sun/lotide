const assertEqual = require('../assertEqual');
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

const newArray = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(newArray.length, 2);
assertEqual(newArray[0], "Lighthouse");
assertEqual(newArray[1], "Labs");

const test1 = tail(['Tank']);
assertEqual(test1.length, 0);

const test2 = tail([]);
assertEqual(test2.length, 0);