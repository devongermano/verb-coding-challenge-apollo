import { DigitalHumaniApi } from "./dataSources";

export interface Context {
    dataSources: {
        digitalHumaniApi: DigitalHumaniApi
    }
}
