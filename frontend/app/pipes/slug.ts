import { Pipe, PipeTransform } from 'angular2/core'

@Pipe({ name: 'slug' })
export class Slug implements PipeTransform {
    transform(value: string, args: any[]) {
        // http://stackoverflow.com/questions/1053902/how-to-convert-a-title-to-a-url-slug-in-jquery
        let transformed = value.toLowerCase().replace(/[^\w ]+/g,'').replace(/ +/g,'-');
        return transformed;
    }
}