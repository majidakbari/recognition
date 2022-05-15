interface MediaContext {
    id: string,
    mediaId: string,
    context: "back" | "front" | "none",
    probability: number
}

export default MediaContext;