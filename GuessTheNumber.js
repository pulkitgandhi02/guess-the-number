// let random = ((Math.floor(Math.random())*100) + 1);

// guess = -1;
// while (guess !== random) {
//   guess = Number(prompt("Guess the Number: "))
//   if (isNaN(guess) || guess < 0 || guess  > 100) {
//     console.log("Try Again -> between 1 to 100");
//     continue
//   }

//   if (guess === "exit") {
//     break;
//   }

//   if (guess > random) {
//     console.log(("Too High, try again."))
//   }
//   if (guess < random) {
//     console.log(("Too Low, try again."))

//     if (guess === random) {
//       console.log((`Congrats! 🎉 ${guess} is the Right number.` ));
//     }
//   }
// }

alert("🎮 Welcome to the Guess the Number Game!\n\nI'm thinking of a number between 1 and 100.\nYou can type 'exit' to quit anytime.");

const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let isGameOver = false;

function checkGuess() {
  if (isGameOver) return;

  const inputField = document.getElementById("userInput");
  const message = document.getElementById("message");
  const attemptsDisplay = document.getElementById("attempts");

  let userGuess = inputField.value.trim();
  inputField.value = "";

  if (userGuess.toLowerCase() === "exit") {
    message.textContent = `👋 You exited the game. The number was ${randomNumber}.`;
    isGameOver = true;
    return;
  }

  const guess = Number(userGuess);

  if (isNaN(guess) || guess < 1 || guess > 100) {
    message.textContent = "❌ Please enter a valid number between 1 and 100.";
    return;
  }

  attempts++;

  if (guess > randomNumber) {
    message.textContent = "📈 Too High! Try again.";
  } else if (guess < randomNumber) {
    message.textContent = "📉 Too Low! Try again.";
  } else {
    message.textContent = `🎉 Correct! ${guess} is the right number.`;
    isGameOver = true;
  }

  attemptsDisplay.textContent = `Attempts: ${attempts}`;
}
