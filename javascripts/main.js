console.log("Hello script");

var text1 = "Alice is feeling bored and drowsy while sitting on the riverbank with her older sister, who is reading a book with no pictures or conversations. She then notices a White Rabbit wearing a waistcoat and pocket watch, talking to itself as it runs past. She follows it down a rabbit hole, but suddenly falls a long way to a curious hall with many locked doors of all sizes.";
console.log("text1 length", text1.length);

console.log("indexOf Rabbit", text1.indexOf("Rabbit"));

console.log("lastIndexOf the", text1.lastIndexOf("the"));

console.log("slice(x, y)", text1.slice(9, 16));

console.log("slice(x)", text1.slice(9));

console.log("substr(x, y)", text1.substr(9, 16));

console.log("replace(x ,y)", text1.replace("She" ,"He")); //only first occurance
console.log("replace(/x/g ,y)", text1.replace(/She/g ,"He"));

//notice that the original string has not changed.
console.log("toUpperCase()", text1.toUpperCase());

var fname = "Alice";
var lname = "Wonderland"
var fullname = fname.concat(" in ", lname);
console.log("concat(x, y)", fullname);

console.log("charAt(x)", text1.charAt(20));

console.log('split(" ")', text1.split(" "));

console.log('split("")', text1.split(""));