import type { APIRoute } from 'astro';
import { XataClient } from "../../../xata";

const client = new XataClient({apiKey: import.meta.env.XATA_API_KEY});

export async function GET() {
    try {
        const resa = await client.db.Reservations.getAll();
        return new Response(JSON.stringify(resa), {
        status:200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
    }
    catch (error) {}   
}
export const POST: APIRoute = async ({request}) => {
const resa = await request.json();
const createdResa = await client.db.Reservations.create(resa);
return new Response(JSON.stringify(createdResa), {
        status:200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
};




