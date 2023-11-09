import inquirer from "inquirer";
let score = 0;
let attempts = 0;
function play() {
    inquirer
        .prompt([
        /* Pass your questions in here */
        {
            type: "number",
            name: "num",
            message: "Enter a Number between 0 and 9: ",
        },
    ])
        .then((answers) => {
        // Use user feedback for... whatever!!
        let val = Math.floor(Math.random() * 10);
        if (answers.num == val) {
            console.log("You guess correct Number");
            score = score + 10;
        }
        else {
            console.log("You Guess is not correct");
            console.log("Correct Guess is:", val);
        }
        playagain();
        attempts++;
    })
        .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        }
        else {
            // Something else went wrong
        }
    });
}
function playagain() {
    inquirer
        .prompt([
        /* Pass your questions in here */
        {
            type: "list",
            name: "option",
            message: "Select option",
            choices: ["New Game", "Quit"],
        },
    ])
        .then((answers) => {
        // Use user feedback for... whatever!!
        if (answers.option === "New Game") {
            console.log("Inside New Game");
            play();
        }
        else if (answers.option === "Quit") {
            console.log(`Your score is : ${score} in ${attempts} attempts`);
        }
    })
        .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        }
        else {
            // Something else went wrong
        }
    });
}
play();
