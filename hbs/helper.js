
const hbs = require('hbs');

hbs.registerHelper( 'getYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper( 'capitalizar', (str) =>{
    let words = str.split(' ');
    words.forEach( ( word, index) => {
        words[index] = word.charAt(0).toUpperCase() + word.slice(1).toLowercase();
    });
    return words.join(" ");
});

module.exports = (
    hbs
);