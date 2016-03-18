import { SymbolSettings } from './symbol-settings';
import { Logger } from '../../other/logger.ts';
export declare class SymbolGeneralSettings {
    private _logger;
    active: boolean;
    submitted: boolean;
    model: SymbolSettings;
    pinTextPositionOffsets: number[];
    constructor(_logger: Logger);
    onSubmit(): void;
    newSymbol(): void;
    diagnostic: string;
}
