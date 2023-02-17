/* tslint:disable */
/* eslint-disable */
/**
 * FastAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ImageInformation } from './ImageInformation';
import {
    ImageInformationFromJSON,
    ImageInformationFromJSONTyped,
    ImageInformationToJSON,
} from './ImageInformation';

/**
 * 
 * @export
 * @interface ImageGenerationResult
 */
export interface ImageGenerationResult {
    /**
     * 
     * @type {string}
     * @memberof ImageGenerationResult
     */
    type?: ImageGenerationResultTypeEnum;
    /**
     * 
     * @type {{ [key: string]: ImageInformation; }}
     * @memberof ImageGenerationResult
     */
    images: { [key: string]: ImageInformation; };
    /**
     * 
     * @type {number}
     * @memberof ImageGenerationResult
     */
    performance: number;
}


/**
 * @export
 */
export const ImageGenerationResultTypeEnum = {
    result: 'result'
} as const;
export type ImageGenerationResultTypeEnum = typeof ImageGenerationResultTypeEnum[keyof typeof ImageGenerationResultTypeEnum];


/**
 * Check if a given object implements the ImageGenerationResult interface.
 */
export function instanceOfImageGenerationResult(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "images" in value;
    isInstance = isInstance && "performance" in value;

    return isInstance;
}

export function ImageGenerationResultFromJSON(json: any): ImageGenerationResult {
    return ImageGenerationResultFromJSONTyped(json, false);
}

export function ImageGenerationResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImageGenerationResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': !exists(json, 'type') ? undefined : json['type'],
        'images': (mapValues(json['images'], ImageInformationFromJSON)),
        'performance': json['performance'],
    };
}

export function ImageGenerationResultToJSON(value?: ImageGenerationResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'images': (mapValues(value.images, ImageInformationToJSON)),
        'performance': value.performance,
    };
}

