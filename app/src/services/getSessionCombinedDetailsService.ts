import {getSessionDetails} from "../integrations/verifHttpClient";

const getSessionCombinedDetailsService = async (sessionId: string) => {
    await getSessionDetails(sessionId);
    return {};
};

export default getSessionCombinedDetailsService;