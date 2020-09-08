'use strict';

/** Currently not in used...... */

class Helper {

    parseInput(command) {

        let times = 0;
        let { channel_name, user_id, text} = command;


        if (text) {
            try {
                times = parseInt(text);
            } catch (error) {
                console.error(error);
            };
        };

    };

}


module.exports = new Helper();
