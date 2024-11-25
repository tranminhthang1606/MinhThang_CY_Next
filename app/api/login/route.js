import { axiosInstance } from "@/app/services/axios";
export async function POST(request) {
    console.log(request);
    try {   
        const body = await request.json();
        const resp = await axiosInstance.post('api/v1/login', body);

        return new Response(
            JSON.stringify({ message: resp.data }),
            { status: 200, headers: { 'Content-Type': 'application/json', 'Set-Cookie': `token=${resp.data.token}; HttpOnly; Path=/; Max-Age=3600`, } }
        );
    } catch (error) {
        console.error('Error:', error);
        return new Response(
            JSON.stringify({ error: error.message }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}