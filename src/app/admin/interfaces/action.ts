import { StatusCodes } from "http-status-codes";

export default interface ActionResponse {
    message: string
    status: StatusCodes
}