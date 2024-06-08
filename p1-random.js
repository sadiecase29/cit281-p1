/*
    CIT 281 Project 1
    Name: Sadie Case
*/
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function generateRandomString() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"; 
    const length = getRandomInteger(5, 25);
    let randomString = ''; 
    for (let i = 0; i < length; i++) {
        randomString += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }
    return randomString; 
}

console.log(generateRandomString());
