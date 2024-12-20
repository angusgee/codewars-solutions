// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point

// A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

interface scoreCount {
    [key: number]: number;
}

function score(dice: number[]): number {
    let scoreMap: scoreCount = {};
    for (let i = 0; i < dice.length; i++) {
        if (!(dice[i] in scoreMap)) {
            scoreMap[dice[i]] = 1;
        } else {
            scoreMap[dice[i]] += 1;
        }
    }
    let totalScore = 0;

    if (scoreMap["1"] >= 3) {
        totalScore += 1000;
        scoreMap["1"] -= 3;
    }
    if (scoreMap["6"] >= 3) totalScore += 600;
    if (scoreMap["5"] >= 3) {
        totalScore += 500;
        scoreMap["5"] -= 3;
    }
    if (scoreMap["4"] >= 3) totalScore += 400;
    if (scoreMap["3"] >= 3) totalScore += 300;
    if (scoreMap["2"] >= 3) totalScore += 200;
    if (scoreMap["1"] > 0) totalScore += scoreMap["1"] * 100;
    if (scoreMap["5"] > 0) totalScore += scoreMap["5"] * 50;

    return totalScore;
}

console.log(score([5, 1, 3, 4, 1])); // 250:  50 (for the 5) + 2 * 100 (for the 1s)
console.log(score([1, 1, 1, 3, 1])); //   1100: 1000 (for three 1s) + 100 (for the other 1)
console.log(score([2, 4, 4, 5, 4])); //   450:  400 (for three 4s) + 50 (for the 5)
