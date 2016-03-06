import { Symbol, Definition, F0, FN, Draw, Arc, Circle, Polyline, Rectangle, Text, Pin, ShapeFactory, Shape } from './symbol'

export class Parser {
    private symbols: Array<Symbol> = [];
    
    public GetSymbols(content: string): Array<Symbol> {
        let symbol: Symbol;
        let isDraw: boolean = false;
        let lines = this.GetLines(content);
        
        for (let line of lines) {
            line = line.replace('\n', '');
            line = line.replace(/\s+/g, ' ');
            //console.log(line);
            let parameters = line.split(' ')
            let commend = parameters[0];

            // TODO: use factory pattern           
            switch (commend)
            {
                case 'DEF':
                    symbol = new Symbol();
                    symbol.Definition = new Definition(parameters);
                    break;
                case 'F0':
                    symbol.Fields.push(new F0(parameters))
                    break;
                case 'F':
                    symbol.Fields.push(new FN(parameters))
                    break;
                case 'ALIAS':
                    break;
                case '$FPLIST':
                    break;
                case '$ENDFPLIST':
                    break;
                case 'DRAW':
                    isDraw = true;
                    break;
                case 'ENDDRAW':
                    isDraw = false;
                    break;
                case 'ENDDEF':
                    this.symbols.push(symbol);
                    break;
                default:
                    if (isDraw) {
                        let shape = new ShapeFactory().Create(commend, parameters);
                        symbol.Shapes.push(shape);
                    } 
                    break;
            }
        }
        
        // console.log(this.symbols);
        return this.symbols;
    }
    
    private GetLines(content: string) : Array<string> {
        return content.split('\n');
    }
}