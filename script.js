let jokes = {
    questionKnock: ['Nanay ni wally', 'Cabalen', 'Maling', 'Kesha'],
    answerKnock: ['Nanay ni wally na ko sa forever',
    'Cabalen bilinan ng lola wag ng uminom ng serbesa',
    'Start twerking like maling',
    'La-Kesha layaw, La-Kesha layaw jeproks'] 
};

function generateRandomNum(num) {
    let randNum = Math.floor(Math.random() * num);
    return randNum;
}

function jokeFormat(question, answer) {
    return `Knock knock \nWho's there? \n${question} \n${question} who? \n${answer}`;
}

function generateJoke() {
    const joke = [];
    
    let randIndex = generateRandomNum(jokes['questionKnock'].length);
    const jokeQA = jokes['questionKnock'][randIndex];
    const jokeAns = jokes['answerKnock'][randIndex];
    
    joke.push(jokeFormat(jokeQA, jokeAns));
    return joke.join();
}

console.log(generateJoke());
// console.log(generateRandomNum(5));