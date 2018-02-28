// https://www.hackerrank.com/challenges/two-characters/problem

// process.stdin.resume();
// process.stdin.setEncoding('ascii');

// var input_stdin = "";
// var input_stdin_array = "";
// var input_currentline = 0;

// process.stdin.on('data', function (data) {
//     input_stdin += data;
// });

// process.stdin.on('end', function () {
//     input_stdin_array = input_stdin.split("\n");
//     main();    
// });

// function readLine() {
//     return input_stdin_array[input_currentline++];
// }

/////////////// ignore above this line ////////////////////

function twoCharaters(s) {
    // Complete this function
    let letters = getLetters(s.split(''));
    let count = 0;

    for (let i = 0; i < letters.length; i++) {
        for (let j = 0; j < letters.length; j += 1) {
            if (i != j) {
                let rmLetters = `${letters[i]}${letters[j]}`
                let text = removeLetter(s, rmLetters)                
                if (validText(text)) {
                    count = text.length > count ? text.length : count;
                }
            }
        }
        letters.splice(i, 1);
        i = -1;
    }
    return count;
}

function removeLetter(text, letters) {    
    text = text.split('');
    let newText = '';
    for (let i = 0; i < text.length; i++) {
        if(letters.includes(text[i])){
            newText += text[i];
        }        
    }
    return newText;
}

function getLetters(text) {
    let arr = [];
    for (let i = 0; i < text.length; i += 1) {
        if (!arr.includes(text[i])) {
            arr.push(text[i]);
        }
    }
    return arr;
}

function validText(s) {
    let sa = s.split('');
    for (let i = 0; i < sa.length; i += 1) {
        // console.log(i, sa[i]);
        let odd = true, even = true;
        if (i % 2 == 0) {
            odd = sa[i] === sa[0];
        } else {
            even = sa[i] === sa[1];
        }
        if (!even || !odd) return false;
    }
    return true;
}

function main() {
    // var l = parseInt(readLine());
    var s = "beabeefeab"; //readLine();
    var result = twoCharaters(s);
    process.stdout.write("" + result + "\n");
}

main();