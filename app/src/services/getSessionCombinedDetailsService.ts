import {getMediaContext, getSessionDetails, getSessionMedia} from "../integrations/veriffHttpClient";
import Session from "../interfaces/session";
import Media from "../interfaces/media";
import MediaContext from "../interfaces/mediaContext";

const getSessionCombinedDetailsService = async (sessionId: string): Promise<Session> => {
    const [session, sessionMedia, mediaContext] = await Promise.all([
        getSessionDetails(sessionId),
        getSessionMedia(sessionId),
        getMediaContext(sessionId)
    ]);

    return sortOutSessionDetails(session, sessionMedia, mediaContext);
};

const sortOutSessionDetails = (session: Session, medias: Media[], mediaContexts: MediaContext[]): Session => {
    for (const media of medias) {
        media.mediaContext = mediaContexts.find(m => m.mediaId === media.id && m.context !== "none");
    }
    medias = medias
        .filter(m => m.mediaContext !== undefined)
        .sort((a, b) => (b.mediaContext?.probability ?? 0) - (a.mediaContext?.probability ?? 0));
    session.medias = {
        back: medias.filter(m => m?.context === "document-back" && m.mediaContext?.context === "back"),
        front: medias.filter(m => m?.context === "document-front" && m.mediaContext?.context === "front")
    }
    return session;
};

export default getSessionCombinedDetailsService;