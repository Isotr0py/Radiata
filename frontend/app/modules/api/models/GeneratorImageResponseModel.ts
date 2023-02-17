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
import type { Data } from './Data';
import {
    DataFromJSON,
    DataFromJSONTyped,
    DataToJSON,
} from './Data';

/**
 * 
 * @export
 * @interface GeneratorImageResponseModel
 */
export interface GeneratorImageResponseModel {
    /**
     * 
     * @type {string}
     * @memberof GeneratorImageResponseModel
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof GeneratorImageResponseModel
     */
    message?: string;
    /**
     * 
     * @type {Data}
     * @memberof GeneratorImageResponseModel
     */
    data: Data;
}

/**
 * Check if a given object implements the GeneratorImageResponseModel interface.
 */
export function instanceOfGeneratorImageResponseModel(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function GeneratorImageResponseModelFromJSON(json: any): GeneratorImageResponseModel {
    return GeneratorImageResponseModelFromJSONTyped(json, false);
}

export function GeneratorImageResponseModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): GeneratorImageResponseModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': json['status'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'data': DataFromJSON(json['data']),
    };
}

export function GeneratorImageResponseModelToJSON(value?: GeneratorImageResponseModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
        'message': value.message,
        'data': DataToJSON(value.data),
    };
}

