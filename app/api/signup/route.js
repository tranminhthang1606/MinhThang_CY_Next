import { axiosInstance } from "@/app/services/axios";

export async function POST(request) {
    try {
        const body = await request.json();
        const resp = await axiosInstance.post('api/v1/signup', body);

        return new Response(
            JSON.stringify({ message: resp.data }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
    } catch (error) {
        console.error('Error:', error);
        return new Response(
            JSON.stringify({ error: error.message }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}