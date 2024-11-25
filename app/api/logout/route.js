import { axiosInstance } from "@/app/services/axios";
export async function POST(request) {
    try {
        const resp = await axiosInstance.post('api/v1/logout');

        return new Response(
            JSON.stringify({ message: resp.data }),
            { status: 200, headers: { 'Content-Type': 'application/json', 'Set-Cookie': `token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT;`, } }
        );
    } catch (error) {
        console.error('Error:', error);
        return new Response(
            JSON.stringify({ error: error.message }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}