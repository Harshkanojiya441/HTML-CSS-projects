var arr = ["Orange", "Apples", "Grapess", "Banana", "Orange", "Grapess"];

function removeDuplicates() {
    return arr.filter((item, index) => arr.indexOf(item) === index);
} 

console.log(removeDuplicates(arr));