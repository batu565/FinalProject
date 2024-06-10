const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

document.addEventListener('DOMContentLoaded', async () => {
    const apiKey = '4282a37fc64f4fca80a720342950f569';
    const weatherbitUrl = `https://api.weatherbit.io/v2.0/current?lat=YOUR_LATITUDE&lon=YOUR_LONGITUDE&key=${apiKey}`;

    try {
        const response = await fetch(weatherbitUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const weatherData = await response.json();
        console.log('Weather data:', weatherData);
    } catch (error) {
        if (error instanceof TypeError) {
            console.error('Network error:', error);
        } else {
            console.error('Error fetching weather data:', error);
        }
    }
});

// Example of adding a delay between requests
async function makeRequestWithDelay() {
    await delay(1000); // Add a delay of 1 second (1000 milliseconds)
    // Make your API request here
}
