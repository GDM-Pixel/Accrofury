// src/pages/api/reservations.js
import { XataClient } from '../../xata';

export async function post({ request }) {
    try {
        const formData = await request.json();
        const xata = new XataClient({ apiKey: process.env.XATA_API_KEY });

        const record = await xata.db.Reservations.create(formData);

        return new Response(JSON.stringify(record), {
            status: 201,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error('Error creating reservation:', error);
        return new Response(JSON.stringify({ message: 'Error creating reservation' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}