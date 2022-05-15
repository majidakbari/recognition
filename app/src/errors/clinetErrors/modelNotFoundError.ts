import AbstractClientError from "./abstractClientError";

class ModelNotFoundError extends AbstractClientError {
    constructor() {
        super(404, "Model not found.");
    }
}

export default ModelNotFoundError;