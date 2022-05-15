import axios from "axios";

const baseUrl = process.env.VERIFF_BASE_URL || "https://api.veriff.internal";

const getSessionDetails = async (sessionId: string) => {
    try {
        await axios.get(`${baseUrl}/sessions/${sessionId}`);
    } catch (err) {
        console.log(err)
    }
};

export {getSessionDetails};