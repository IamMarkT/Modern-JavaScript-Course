// template string
const title = 'Best reads of 2020';
const author = 'Mark';
const likes = 84;

// concatenation way
// let result = 'The blog called ' + title + ' by ' + author + ' has ' +likes + ' likes.';

// template string way 
    // back ticks = 'FN + esc' on Anne Pro 2
let result = `The blog called ${title} by ${author} has ${likes} likes.`; 

// creating html templates
let html = `
<h2>${title}</h2>
<p>By ${author}</p>
<span>This blog has ${likes} likes. </span>
`;

console.log(result);
console.log(html);
