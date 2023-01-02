/***********************************************************************************
 * Exercise challenge : Song 99 Bottles Of Beer
 * ---------------------------------------------------------------------------------
 * @author Melissa Kouadio <angemelisk@gmail.com>
 * @description :
 * In this exercise you need to console.log the lyrics of our own 99 Bottles of Beer song 
 * @typeof {string|Array}
 * @typeof {number}
 * @typeof {function}
 * **********************************************************************************/ 

let lyricText = ["bottles of beer on the wall","bottles of beer"];
let bottles = 99;

/******************************************************************************
 * @function songLyric
 * @description:
 * Prompt the user for a number to begin counting down bottles
 * everytime a bottle drops, the subtracted number should go up by 1
 ******************************************************************************/
function songLyric() {

    let numberBegin = parseInt(prompt(`${bottles} ${lyricText[0]}, take one down`));

    do {
        console.log(`${bottles} ${lyricText[0]}`);
        console.log(`${bottles} ${lyricText[1]}`);
        let text = "";
        if(numberBegin > 1 ){
            text = "Take " + numberBegin + " down and pass them around, "
            console.log(text);
        } else if(numberBegin > 2) {
            text = "Take " + (numberBegin - 1) + " down and pass it around"
            console.log(text);
        }
        else if(numberBegin == 1) {
            text = "Take " + numberBegin + " down and pass it around"
            console.log(text);
        } 
        if(bottles == 1) {
            console.log("no more beer on the wall");
        }
        numberBegin ++;
        bottles --;    
    } while(bottles >= 1)
}

