const fetch = require('node-fetch');

exports.handler = async (event) => {
    if (event.httpMethod !== 'DELETE') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    const { id } = event.queryStringParameters;
    if (!id) {
        return { statusCode: 400, body: 'Missing record ID' };
    }
    
    const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
    const AIRTABLE_BASE_ID = 'appCQATw4gkWsJSMV';
    const AIRTABLE_TABLE_NAME = 'Bookings';

    const airtableUrl = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}/${id}`;

    try {
        const response = await fetch(airtableUrl, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${AIRTABLE_API_KEY}`
            }
        });

        if (response.ok) {
            return {
                statusCode: 200,
                body: JSON.stringify({ message: 'Booking deleted successfully' })
            };
        } else {
            const errorData = await response.json();
            return {
                statusCode: response.status,
                body: JSON.stringify({ error: 'Failed to delete booking', details: errorData })
            };
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Server error', details: error.message })
        };
    }
};
