import AbstractClientError from "./abstractClientError";

class RequestNotAcceptedError extends AbstractClientError {
    constructor() {
        super(406, "This application only supports json response.");
    }
}

export default RequestNotAcceptedError;