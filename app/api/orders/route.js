import { axiosInstance } from "@/app/services/axios";

export async function GET(request) {
    try {
        const resp = await axiosInstance.get('api/v1/orders');

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