let jokes = {
    filipino: {
        questionKnockFil: [
        'Nanay ni wally',
        'Cabalen', 
        'Maling', 
        'Kesha', 
        'Saging bananacue'
        ],

        answerKnockFil: [
        'Nanay ni wally na ko sa forever',
        'Cabalen bilinan ng lola wag ng uminom ng serbesa',
        'Start twerking like maling',
        'La-Kesha layaw, La-Kesha layaw jeproks',
        'Akala ko ikaw ay saging, bananacue sa aking paningin'
        ] 
    },
    english: {
        questionKnockEng: [
        'Tank', 
        'Hawaii'
        ],
        
        answerKnockEng: [
        'You\'re Welcome', 
        'I\'m good. Hawaii you?'
        ]
    }
    
};

//Return a random number
function generateRandomNum(num) {
    const randNum = Math.floor(Math.random() * num);
    return randNum;
}

//Format of knockx2 joke
function jokeFormat(question, answer) {
    return `Knock knock \nWho's there? \n${question} \n${question} who? \n${answer}`;
}

//Create a random knockx2 joke
function generateJoke() {
    const joke = [];
    let randIndex;
    let jokeQA;
    let jokeAns;

    let mykey = Object.keys(jokes).length;
    const lang = generateRandomNum(mykey);

    if(lang === 0) {
        randIndex = generateRandomNum(jokes['filipino']['questionKnockFil'].length);
        jokeQA = jokes['filipino']['questionKnockFil'][randIndex];
        jokeAns = jokes['filipino']['answerKnockFil'][randIndex];
        joke.push(jokeFormat(jokeQA, jokeAns));
    }
    else if(lang === 1) {
        randIndex = generateRandomNum(jokes['english']['questionKnockEng'].length);
        jokeQA = jokes['english']['questionKnockEng'][randIndex];
        jokeAns = jokes['english']['answerKnockEng'][randIndex];
        joke.push(jokeFormat(jokeQA, jokeAns));
    }
    return joke.join();
}

function executeProgram() {
    console.log(generateJoke());
}

executeProgram();