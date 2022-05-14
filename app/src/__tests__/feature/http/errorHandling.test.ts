// @ts-ignore
import request from "supertest"
import {Express} from "express-serve-static-core"
import createServer from "../../../utils/createServer"

let server: Express

beforeAll(() => {
    server = createServer();
})

describe("show proper error messages in case of having invalid request.", () => {
    it("should return 404 when route does not exist.", done => {
        request(server)
            .get("/foo")
            .expect("Content-Type", /json/)
            .expect(404)
            .end((err, res) => {
                if (err) return done(err)
                expect(res.body).toMatchObject({
                    error: "Client Error",
                    message: "Route not found."
                })
                done()
            })
    })

    it("should return 405 when request method is not correct.", done => {
        request(server)
            .get("/api/webhook")
            .expect("Content-Type", /json/)
            .expect(405)
            .end((err, res) => {
                if (err) return done(err)
                expect(res.body).toMatchObject({
                    error: "Client Error",
                    message: "Method not allowed."
                })
                done()
            })
    })
})