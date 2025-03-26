document.getElementById("calculate-btn").addEventListener("click", function () {
    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);
    let bmiResult = document.getElementById("bmi-result");
    let bmiCategory = document.getElementById("bmi-category");

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        bmiResult.textContent = "Invalid Input";
        bmiCategory.textContent = "N/A";
        bmiCategory.style.color = "#000";
        return;
    }

    let bmi = (weight / ((height / 100) ** 2)).toFixed(1);
    bmiResult.textContent = bmi;

    if (bmi < 18.5) {
        bmiCategory.textContent = "Underweight";
        bmiCategory.style.color = "#f39c12";
    } else if (bmi < 25) {
        bmiCategory.textContent = "Normal Weight";
        bmiCategory.style.color = "#2ecc71";
    } else if (bmi < 30) {
        bmiCategory.textContent = "Overweight";
        bmiCategory.style.color = "#f1c40f";
    } else {
        bmiCategory.textContent = "Obese";
        bmiCategory.style.color = "#e74c3c";
    }
});
