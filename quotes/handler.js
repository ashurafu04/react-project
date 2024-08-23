const QUOTES = require("./data/index.json");

const randomQuote = () =>{
    return QUOTES[Math.floor(Math.random() * QUOTES.length)];
}

const randomTen = () => {
    let randomList = new Set();

    while (randomList.size < 10) {
        let random = Math.floor(Math.random() * QUOTES.length);
        if(!randomList.has(random)) {
            randomList.add(random);
        }
    }
    
    return [...randomList].map(index =>{
        return QUOTES[index];
    })

    /*let array = [...randomList];
    let output = [];
    for (let i in array) {
        output.push(QUOTES[array[i]]);
    }*/
        
}
module.exports = {randomQuote,randomTen};