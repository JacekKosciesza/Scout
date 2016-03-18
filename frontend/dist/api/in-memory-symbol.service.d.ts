export declare class InMemorySymbolService {
    /**
    * Creates fresh copy of data each time.
    * Safe for consuming service to morph arrays and objects.
    */
    createDb(): {
        symbols: {
            "id": number;
            "name": string;
        }[];
    };
}
