import axios, { AxiosHeaders } from "axios";

// MAKE THIS TRUE IF BACKEND IS CONNECTED AND ADD API_URL
const HAS_BACKEND = false;
const API_URL = "http://localhost/msis/server/api/v1/server.php";


const SERVER_API = axios.create({
    baseURL: API_URL,
})

export const requestToServer = async (method, eventName, data) => {
    console.log(data);
    if (HAS_BACKEND) {
        const config = {
            headers: new AxiosHeaders({
                "Content-Type": "application/json",
                "Event-Key": eventName,
            }),
            params: method === 'get' ? { parameter: data } : undefined,
            data: method !== 'get' ? data : undefined,
        };
    
        try {
            let response;
            switch (method) {
                case "get":
                    response = await SERVER_API.get("", {...config});
                    break;
                case "post":
                    response = await SERVER_API.post("", config);
                    break;
                case "put":
                    response = await SERVER_API.put("", config);
                    break;
                case "delete":
                    response = await SERVER_API.delete("", {
                        ...config,
                    });
                    break;
                default:
                    throw new Error("INVALID HTTP METHOD");
            }
            return response.data;
        } catch (error) {
            console.error('Error sending request:', error);
            throw error;
        }
    } else {
        const temporaryData = {
            'login' : [
                {
                    role: 1
                }
            ],
            'shelf': [
                {
                    supply: 5000,
                    category: 100,
                    user: 50
                }
            ]
        }
        return temporaryData[eventName] || {
            message: 'No temporary Data available for this event'
        }
    }
}