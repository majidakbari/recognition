import AbstractServerError from "./abstractServerError";

class ServiceUnavailableError extends AbstractServerError {
    constructor() {
        super(503, "Service unavailable.");
    }
}

export default ServiceUnavailableError;