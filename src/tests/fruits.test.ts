import app from "../app";
import supertest from "supertest";
import httpStatus from "http-status";
import { FruitInput } from "services/fruits-service";

describe("fruit GET tests", () => {


    it("should create a banana fruit", async () => {

        const body: FruitInput = {
            name: "banana",
            price: 100
        }

        const result = await supertest(app).post("/fruits").send(body)

        expect(result.status).toBe(201)
    })


    it("should create a orange fruit", async () => {

        const body: FruitInput = {
            name: "orange",
            price: 200
        }

        const result = await supertest(app).post("/fruits").send(body)

        expect(result.status).toBe(201)
    })


    it("should get a specified fruit", async () => {

        const result = await supertest(app).get("/fruits/1")

        expect(result.status).toBe(httpStatus.OK)

        expect(result.body).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                name: expect.any(String),
                price: expect.any(Number)
            })
        )
    })

    it("should return all fruits", async () => {
        
        const result = await supertest(app).get("/fruits")
        
        expect(result.status).toBe(httpStatus.OK)

        expect(result.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    id: expect.any(Number),
                    name: expect.any(String),
                    price: expect.any(Number)
                })
            ])
        )
    })



})

