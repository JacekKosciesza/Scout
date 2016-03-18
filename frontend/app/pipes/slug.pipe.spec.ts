
/// <reference path="../../typings/browser/ambient/jasmine/index.d.ts" />

import {it, describe, expect, beforeEach, inject} from 'angular2/testing';
import {SlugPipe} from "./slug.pipe";

describe('Slug pipe tests', () => {
    let pipe:SlugPipe;

    beforeEach(() => {
        pipe = new SlugPipe();
    });

    it('Should generate slug from value', () => {
        var result = pipe.transform('This is sparta', null);

        (<any>expect(result)).toEqual('this-is-sparta');
    });
});
