const axios = require('axios');

async function main() {
    try {

        const response = await axios.get('https://api.thecatapi.com/v1/images/search');
        const catImageUrl = response.data[0].url;
        console.log(`Cat image url: ${catImageUrl}`); 

    } catch (error) {
        console.error(`Error fetching cat image: ${error}`);
    }
}

main();


