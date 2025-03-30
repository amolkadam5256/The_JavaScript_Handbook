let randomNumber = Math.floor(Math.random() * 100) + 1;
        let attemptsLeft = 10;

        const userGuess = document.getElementById("userGuess");
        const checkBtn = document.getElementById("checkBtn");
        const message = document.getElementById("message");
        const attemptsDisplay = document.getElementById("attempts");
        const restartBtn = document.getElementById("restartBtn");

        checkBtn.addEventListener("click", () => {
            let guess = parseInt(userGuess.value);
            
            if (isNaN(guess) || guess < 1 || guess > 100) {
                message.textContent = "❌ Please enter a valid number between 1 and 100!";
                message.style.color = "red";
                return;
            }

            attemptsLeft--;
            attemptsDisplay.textContent = attemptsLeft;

            if (guess === randomNumber) {
                message.textContent = `🎉 Congratulations! ${guess} is correct! You won!`;
                message.style.color = "green";
                endGame();
            } else if (guess > randomNumber) {
                message.textContent = "📉 Too high! Try a smaller number.";
                message.style.color = "blue";
            } else {
                message.textContent = "📈 Too low! Try a bigger number.";
                message.style.color = "blue";
            }

            if (attemptsLeft === 0) {
                message.textContent = `😢 Game Over! The correct number was ${randomNumber}.`;
                message.style.color = "red";
                endGame();
            }
        });

        function endGame() {
            userGuess.disabled = true;
            checkBtn.disabled = true;
            restartBtn.classList.remove("hidden");
        }

        restartBtn.addEventListener("click", () => {
            randomNumber = Math.floor(Math.random() * 100) + 1;
            attemptsLeft = 10;
            attemptsDisplay.textContent = attemptsLeft;
            message.textContent = "";
            userGuess.value = "";
            userGuess.disabled = false;
            checkBtn.disabled = false;
            restartBtn.classList.add("hidden");
        });