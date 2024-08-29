import axios from 'axios';
import inquirer from 'inquirer';
// Function to fetch recipes from the API
async function fetchRecipes(query) {
    const options = {
        method: 'GET',
        url: 'https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe',
        params: { query },
        headers: {
            'X-RapidAPI-Key': '3a92b5a07emshea4daea6c2a03a3p128bfcjsn7672313dcc78',
            'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
        }
    };
    try {
        const response = await axios.request(options);
        return response.data;
    }
    catch (error) {
        throw new Error('Failed to fetch recipes');
    }
}
// Main function to prompt user for input and display recipes
async function main() {
    try {
        // Prompt user for recipe query
        const userInput = await inquirer.prompt({
            type: 'input',
            name: 'query',
            message: 'Enter a recipe to search for:'
        });
        // Fetch recipes based on user input
        const recipes = await fetchRecipes(userInput.query);
        // Display fetched recipes
        console.log('Fetched recipes:', recipes);
    }
    catch (error) {
        //console.error('Error:', error.message);
    }
}
// Call the main function to start the application
main();
