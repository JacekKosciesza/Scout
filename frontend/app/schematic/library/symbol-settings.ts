export class SymbolSettings {
    constructor(
        public name: string,
        public designator: string,
        public unitsPerPackage: number,
        public showPinNumberTest: boolean,
        public pinTextPositionOffset: number        
    ) { }
}