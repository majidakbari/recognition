import Media from "./media";

interface Session {
    id: string,
    status: string,
    medias: {
        back?: Media[],
        front?: Media[]
    }
}

export default Session;