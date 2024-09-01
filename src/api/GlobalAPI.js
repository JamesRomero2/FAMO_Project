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
            ],
            'mynotifs': [
                {
                    important: true,
                    message: 'Notification 1',
                    date_published: '2024-08-01 12:00:00',
                },
                {
                    important: false,
                    message: 'Notification 2',
                    date_published: '2024-07-02 15:30:00',
                },
                {
                    important: false,
                    message: 'Notification 3',
                    date_published: '2024-06-03 09:45:00',
                },
                {
                    important: true,
                    message: 'Notification 4',
                    date_published: '2024-05-04 18:00:00',
                },
                {
                    important: false,
                    message: 'Notification 5',
                    date_published: '2024-04-05 08:15:00',
                }
            ]
        }
        return temporaryData[eventName] || {
            message: 'No temporary Data available for this event'
        }
    }
}