import { Symbol } from './symbol';
export declare class Parser {
    private symbols;
    GetSymbols(content: string): Array<Symbol>;
    private GetLines(content);
}
