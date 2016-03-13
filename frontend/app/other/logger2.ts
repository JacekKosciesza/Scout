import {Injectable} from 'angular2/core';

@Injectable()
export class Logger2 {
    logs:string[] = []; // capture logs for testing
    
    log(message: string){
        this.logs.push(message);
        console.log(`logger2: ${message}`);
    }
}