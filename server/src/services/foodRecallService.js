const fetch = require('node-fetch');

async function getFoodRecalls(limit = 10) 
{
    const url = 'https://api.fda.gov/food/enforcement.json?limit=${limit}'

    try{
        const response = await fetch(url);
        if (!response.ok){
            throw new Error('openFDA API error: ${response.status');
        }

        const data = await response.json();
        return data.results;
    }
    catch (error) {
        console.error('Error fetching food recalls:', error);
    }
}

module.exports = { getFoodRecalls };
