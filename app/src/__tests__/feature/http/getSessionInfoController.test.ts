// @ts-ignore
import request from "supertest"
import {Express} from "express-serve-static-core"
import createServer from "../../../utils/createServer"
import * as httpClient from "../../../integrations/veriffHttpClient";
import ModelNotFoundError from "../../../errors/clinetErrors/modelNotFoundError";
import ServiceUnavailableError from "../../../errors/serverErrors/serviceUnavailableError";
import Session from "../../../interfaces/session";
import Media from "../../../interfaces/media";
import MediaContext from "../../../interfaces/mediaContext";
import {getSessionDetails} from "../../../integrations/veriffHttpClient";

// let server: Express

// beforeAll(() => {
//     server = createServer();
// });

const session = {
    id: "90d61876-b99a-443e-994c-ba882c8558b6",
    status: "internal_manual_review",
};

const sessionMedia = [
    {
        id: "7f2dcbd8-5b5f-4f1a-bfa4-016ddf4dd662",
        mimeType: "image/png",
        context: "document-front"
    },
    {
        id: "663ae1db-32b6-4a4e-a828-98e3e94ca11e",
        mimeType: "image/png",
        context: "document-back"
    },
    {
        id: "40f1e462-6db8-4313-ace3-83e4f5619c56",
        mimeType: "image/png",
        context: "document-back"
    },
    {
        id: "a6c90b4f-ddfc-49eb-89ad-05b7f1274f96",
        mimeType: "image/png",
        context: "document-front"
    },
    {
        id: "40851916-3e86-45cd-b8ce-0e948a8a7751",
        mimeType: "image/png",
        context: "document-front"
    }
];

const mediaContext = [
    {
        id: "a4338068-d99b-416b-9b2d-ee8eae906eea",
        mediaId: "a6c90b4f-ddfc-49eb-89ad-05b7f1274f96",
        context: "back",
        probability: 0.9739324
    },
    {
        id: "93d1a76b-b133-41cc-ae85-aa8b80d93f57",
        mediaId: "40f1e462-6db8-4313-ace3-83e4f5619c56",
        context: "front",
        probability: 0.2931033
    },
    {
        id: "2277b909-f74e-4dc0-b152-328713948ec5",
        mediaId: "663ae1db-32b6-4a4e-a828-98e3e94ca11e",
        context: "none",
        probability: 0.9253487
    },
    {
        id: "5da01045-6baf-482c-9913-5ce069bbec96",
        mediaId: "7f2dcbd8-5b5f-4f1a-bfa4-016ddf4dd662",
        context: "front",
        probability: 0.8734357
    },
    {
        id: "2ab2e6fe-6727-4a04-bbdf-9f012569bce9",
        mediaId: "40851916-3e86-45cd-b8ce-0e948a8a7751",
        context: "front",
        probability: 0.9264236
    }
]


jest.mock("../../../integrations/veriffHttpClient", () => ({
    getSessionDetails: () => Promise.resolve(session as Session),
    getSessionMedia: () => Promise.resolve(sessionMedia as Media[]),
    getMediaContext: () => Promise.resolve(mediaContext as MediaContext[])
}));

// mock1.mockImplementation(async (_: string) => );
// mock2.mockImplementation(async (_: string) => );
// mock3.mockImplementation(async (_: string) =>


describe("show session details endpoint should act as expected.", () => {
    // it("should return 404 when session id does not exist.", done => {
    //     const mock = jest.spyOn(httpClient, 'getSessionDetails');
    //     mock.mockImplementation(async (_: string) => {
    //         throw new ModelNotFoundError();
    //     });
    //
    //     request(server)
    //         .get("/api/session/1")
    //         .expect("Content-Type", /json/)
    //         .expect(404)
    //         .end((err, res) => {
    //             if (err) return done(err)
    //             expect(res.body).toMatchObject({
    //                 error: "Client Error",
    //                 message: "Model not found."
    //             })
    //             done()
    //         })
    //
    //     mock.mockRestore();
    // })
    //
    // it("should return 503 whenever at least one of third party APIs is unavailable.", done => {
    //     const mock = jest.spyOn(httpClient, 'getSessionDetails');
    //     mock.mockImplementation(async (_: string) => {
    //         throw new ServiceUnavailableError();
    //     });
    //
    //     request(server)
    //         .get("/api/session/1")
    //         .expect("Content-Type", /json/)
    //         .expect(503)
    //         .end((err, res) => {
    //             if (err) return done(err)
    //             expect(res.body).toMatchObject({
    //                 error: "Server Error",
    //                 message: "Service unavailable."
    //             })
    //             done()
    //         })
    //     mock.mockRestore();
    // })

    it("should return 200 with correct response structure.", done => {


        // const mock1 = jest.spyOn(httpClient, 'getSessionDetails');
        // const mock2 = jest.spyOn(httpClient, 'getSessionMedia');
        // const mock3 = jest.spyOn(httpClient, 'getMediaContext');
        // mock1.mockImplementation(async (_: string) => Promise.resolve(session as Session));
        // mock2.mockImplementation(async (_: string) => Promise.resolve(sessionMedia as Media[]));
        // mock3.mockImplementation(async (_: string) => Promise.resolve(mediaContext as MediaContext[]));

        request(createServer())
            .get("/api/session/1")
            .expect("Content-Type", /json/)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err)
                expect(res.body).toMatchObject({
                    "id": "90d61876-b99a-443e-994c-ba882c8558b6",
                    "status": "internal_manual_review",
                    "medias": {
                        "back": [],
                        "front": [
                            {
                                "id": "40851916-3e86-45cd-b8ce-0e948a8a7751",
                                "mimeType": "image/png",
                                "context": "document-front",
                                "mediaContext": {
                                    "id": "2ab2e6fe-6727-4a04-bbdf-9f012569bce9",
                                    "mediaId": "40851916-3e86-45cd-b8ce-0e948a8a7751",
                                    "context": "front",
                                    "probability": 0.9264236
                                }
                            },
                            {
                                "id": "7f2dcbd8-5b5f-4f1a-bfa4-016ddf4dd662",
                                "mimeType": "image/png",
                                "context": "document-front",
                                "mediaContext": {
                                    "id": "5da01045-6baf-482c-9913-5ce069bbec96",
                                    "mediaId": "7f2dcbd8-5b5f-4f1a-bfa4-016ddf4dd662",
                                    "context": "front",
                                    "probability": 0.8734357
                                }
                            }
                        ]
                    }
                })
                done()
            })
        // mock1.mockRestore();
        // mock2.mockRestore();
        // mock3.mockRestore();
    })
})