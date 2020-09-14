'use strict';



const _ = require('lodash');


function randomLetters(commandObj) {
    let numChosen = commandObj.text || 5;
    let playingLetters = [];
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    // console.log(commandObj);
    
    for(let i = 0; i < numChosen; i++) {
        let getLetters = alphabet[Math.floor(_.random(0, 25))];

        playingLetters.push(` ${getLetters} `);
    }
    
    return `<@${commandObj.channel_id}> !!
    <@${commandObj.user_id}> started a word game, 
    here's your letters -> ${playingLetters}`;
}

randomLetters(10);


module.exports = randomLetters;
