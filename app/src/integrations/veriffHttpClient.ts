import axios, {AxiosError, Method} from "axios";
import ServiceUnavailableError from "../errors/serverErrors/serviceUnavailableError";
import ModelNotFoundError from "../errors/clinetErrors/modelNotFoundError";
import Session from "../interfaces/session";
import Media from "../interfaces/media";
import MediaContext from "../interfaces/mediaContext";

const getSessionDetails = async (sessionId: string): Promise<Session> => {
    return await call(`sessions/${sessionId}`, "get");
};

const getSessionMedia = async (sessionId: string): Promise<Media[]> => {
    return await call(`sessions/${sessionId}/media`, "get");
};

const getMediaContext = async (sessionId: string): Promise<MediaContext[]> => {
    return await call(`media-context/${sessionId}`, "get");
};

const call = async (uri: string, method: Method) => {
    try {
        const baseUrl = process.env.VERIFF_BASE_URL || "https://api.veriff.internal";
        const response = await axios.request({
            method: method,
            url: `${baseUrl}/${uri}`
        });
        return response.data;
    } catch (err) {
        if (err instanceof AxiosError) {
            if (err.status == "404") {
                throw new ModelNotFoundError();
            }
        }
        throw new ServiceUnavailableError();
    }
};

export {getSessionDetails, getSessionMedia, getMediaContext};