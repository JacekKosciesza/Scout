import {Pipe, PipeTransform} from 'angular2/core'
/*
 * Generates slug from the value
  * Usage:
 *   value | slug
 * Example:
 *   {{ "This is sparta" |  slug }}
 *   formats to: "this-is-sparta"
 * Links
 *   http://stackoverflow.com/questions/1053902/how-to-convert-a-title-to-a-url-slug-in-jquery
*/
@Pipe({name: 'slug'})
export class SlugPipe implements PipeTransform {
    transform(value: string, args: any[]) {
        let transformed = value.toLowerCase().replace(/[^\w ]+/g,'').replace(/ +/g,'-');
        return transformed;
    }
}