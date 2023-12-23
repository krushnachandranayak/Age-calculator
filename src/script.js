function calculateAge() {
    const birthDateInput = document.getElementById('birthDate');
    const resultElement = document.getElementById('result');

    // Get the selected birthdate
    const birthDate = new Date(birthDateInput.value);

    // Get the current date
    const currentDate = new Date();

    // Calculate the age
    const age = currentDate.getFullYear() - birthDate.getFullYear();

    // Display the result
    resultElement.textContent = `Your age is ${age} years.`;
}
