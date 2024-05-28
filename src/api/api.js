import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;
export const getTime = async () => {
    try {
        const response = await axios.get(`${baseUrl}/ip`);
        return response.data;
    } catch (error) {
        return error;
    }
};
