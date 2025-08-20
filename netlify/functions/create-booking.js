// Function to create a new booking in Airtable
const fetch = require('node-fetch');

exports.handler = async (event) => {
    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        // Parse the data from the request body
        const data = JSON.parse(event.body);

        // Get the secure Airtable API key from environment variables
        const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
        const AIRTABLE_BASE_ID = 'appCQATw4gkWsJSMV';
        const AIRTABLE_TABLE_NAME = 'Bookings';

        const airtableUrl = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`;

        // Make the POST request to the Airtable API
        const response = await fetch(airtableUrl, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ fields: data }) // `data` should contain the correct fields for Airtable
        });

        // Check for success or error
        if (response.ok) {
            return {
                statusCode: 200,
                body: JSON.stringify({ message: 'Booking created successfully' })
            };
        } else {
            const errorData = await response.json();
            return {
                statusCode: response.status,
                body: JSON.stringify({ error: 'Failed to create booking', details: errorData })
            };
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Server error', details: error.message })
        };
    }
};
