import MediaContext from "./mediaContext";

interface Media {
    id: string,
    mimeType: string,
    context: "document-front" | "document-back",
    mediaContext?: MediaContext
}

export default Media;