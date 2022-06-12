// Write your solution here! push() unshift()
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    return cats.push(name);
}
function destructivelyPrependCat(name){
    return cats.unshift(name);
}
function destructivelyRemoveLastCat(){
    return cats.pop();
}
function destructivelyRemoveFirstCat(){
    return cats.shift();
}
function appendCat(name){
    return [...cats, name];
}
function prependCat(name){
    let duplCats = [name, ...cats];
    return duplCats;
}
function removeLastCat(){
    let lastIndex = cats.length - 1;
    return cats.slice(0, lastIndex);
}
function removeFirstCat(){
    return cats.slice(1);
}
console.log(prependCat('Broom'))
console.log(removeLastCat())

