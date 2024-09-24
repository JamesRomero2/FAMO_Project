import axios, { AxiosHeaders } from "axios";

const API_URL = "http://localhost/famoserver/api/v1/server.php";
const LOGIN_URL = "http://localhost/famoserver/api/v1/login.php";

const SERVER_API = axios.create({
    baseURL: API_URL,
})
const LOGIN_SERVER_API = axios.create({
    baseURL: LOGIN_URL,
})

export const requestToServer = async (method, eventName, data, HAS_BACKEND) => {
    if (HAS_BACKEND) {
        const sessionData = sessionStorage.getItem("user");
        const session = sessionData ? JSON.parse(sessionData) : null;

        if (eventName !== "login" && session && session.session_id) {
            data = {
                ...data,
                session_id: session.session_id,
            };
        }
        const config = {
            headers: new AxiosHeaders({
                "Content-Type": "application/json",
                "Event-Key": eventName,
            }),
            params: method === 'get' ? { parameter: data } : undefined,
        };
    
        try {
            let response;
            switch (method) {
                case "get":
                    response = await SERVER_API.get("", {...config});
                    break;
                case "post":
                    if (eventName === 'login') {
                        response = await LOGIN_SERVER_API.post("",  data, config);
                    } else {
                        response = await SERVER_API.post("",  data, config);
                    }
                    break;
                case "put":
                    response = await SERVER_API.put("",  data, config);
                    break;
                case "delete":
                    response = await SERVER_API.delete("", config);
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
                    first_name: 'John',
                    last_name: 'Doe',
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
            ],
            'allUsers': [
                {
                    name: 'John Doe',
                    role: 'Admin',
                    "last logged in": '2024-09-01 10:23:00',
                    status: 'active'
                },
                {
                    name: 'Jane Doe',
                    role: 'Director',
                    "last logged in": '2024-09-01 08:15:00',
                    status: 'active'
                },
                {
                    name: 'Michael Brown',
                    role: 'Civil and Sanitary Services Chief',
                    "last logged in": '2024-08-31 12:45:00',
                    status: 'inactive'
                },
                {
                    name: 'Emily White',
                    role: 'Lights, Sounds, and Event Services Chief',
                    "last logged in": '2024-08-30 09:30:00',
                    status: 'active'
                },
                {
                    name: 'David Johnson',
                    role: 'Electrical and Mechanical Service Chief',
                    "last logged in": '2024-08-29 14:50:00',
                    status: 'active'
                },
                {
                    name: 'Sarah King',
                    role: 'Building and Grounds Service Chief',
                    "last logged in": '2024-08-28 10:00:00',
                    status: 'inactive'
                },
                {
                    name: 'Chris Lee',
                    role: 'Warehouseman',
                    "last logged in": '2024-08-27 11:10:00',
                    status: 'active'
                },
                {
                    name: 'Rachel Morris',
                    role: 'Admin',
                    "last logged in": '2024-08-26 16:30:00',
                    status: 'active'
                },
                {
                    name: 'Tom Brown',
                    role: 'Director',
                    "last logged in": '2024-08-25 18:20:00',
                    status: 'active'
                },
                {
                    name: 'Anna Smith',
                    role: 'Civil and Sanitary Services Chief',
                    "last logged in": '2024-08-24 08:05:00',
                    status: 'inactive'
                }
            ],
            'addUser': [
                {
                    success: true
                }
            ]
        }
        return temporaryData[eventName] || {
            message: 'No temporary Data available for this event'
        }
    }
}