import {getMediaContext, getSessionDetails, getSessionMedia} from "../integrations/verifHttpClient";

const getSessionCombinedDetailsService = async (sessionId: string) => {
    const [session, sessionMedia, mediaContext] = await Promise.all([
        getSessionDetails(sessionId),
        getSessionMedia(sessionId),
        getMediaContext(sessionId)
    ]);

    return {
        a: session,
        b: sessionMedia,
        c: mediaContext
    };
};

export default getSessionCombinedDetailsService;