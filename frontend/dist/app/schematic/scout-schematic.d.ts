import { Parser } from './parser';
import { Symbol } from './symbol';
export declare class ScoutSchematic {
    private _parser;
    codename: string;
    symbols: Array<Symbol>;
    constructor(_parser: Parser);
    onFileContentReady(fileContent: string): void;
}
