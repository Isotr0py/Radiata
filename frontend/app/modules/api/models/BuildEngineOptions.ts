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
/**
 * 
 * @export
 * @interface BuildEngineOptions
 */
export interface BuildEngineOptions {
    /**
     * 
     * @type {string}
     * @memberof BuildEngineOptions
     */
    model_id: string;
    /**
     * 
     * @type {string}
     * @memberof BuildEngineOptions
     */
    hf_token?: string;
    /**
     * 
     * @type {string}
     * @memberof BuildEngineOptions
     */
    subfolder?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BuildEngineOptions
     */
    fp16?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BuildEngineOptions
     */
    verbose?: boolean;
    /**
     * 
     * @type {number}
     * @memberof BuildEngineOptions
     */
    opt_image_height?: number;
    /**
     * 
     * @type {number}
     * @memberof BuildEngineOptions
     */
    opt_image_width?: number;
    /**
     * 
     * @type {number}
     * @memberof BuildEngineOptions
     */
    min_latent_resolution?: number;
    /**
     * 
     * @type {number}
     * @memberof BuildEngineOptions
     */
    max_latent_resolution?: number;
    /**
     * 
     * @type {number}
     * @memberof BuildEngineOptions
     */
    max_batch_size?: number;
    /**
     * 
     * @type {number}
     * @memberof BuildEngineOptions
     */
    onnx_opset?: number;
    /**
     * 
     * @type {boolean}
     * @memberof BuildEngineOptions
     */
    build_static_batch?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BuildEngineOptions
     */
    build_dynamic_shape?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BuildEngineOptions
     */
    build_preview_features?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BuildEngineOptions
     */
    force_engine_build?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BuildEngineOptions
     */
    force_onnx_export?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BuildEngineOptions
     */
    force_onnx_optimize?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof BuildEngineOptions
     */
    onnx_minimal_optimization?: boolean;
}

/**
 * Check if a given object implements the BuildEngineOptions interface.
 */
export function instanceOfBuildEngineOptions(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "model_id" in value;

    return isInstance;
}

export function BuildEngineOptionsFromJSON(json: any): BuildEngineOptions {
    return BuildEngineOptionsFromJSONTyped(json, false);
}

export function BuildEngineOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BuildEngineOptions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'model_id': json['model_id'],
        'hf_token': !exists(json, 'hf_token') ? undefined : json['hf_token'],
        'subfolder': !exists(json, 'subfolder') ? undefined : json['subfolder'],
        'fp16': !exists(json, 'fp16') ? undefined : json['fp16'],
        'verbose': !exists(json, 'verbose') ? undefined : json['verbose'],
        'opt_image_height': !exists(json, 'opt_image_height') ? undefined : json['opt_image_height'],
        'opt_image_width': !exists(json, 'opt_image_width') ? undefined : json['opt_image_width'],
        'min_latent_resolution': !exists(json, 'min_latent_resolution') ? undefined : json['min_latent_resolution'],
        'max_latent_resolution': !exists(json, 'max_latent_resolution') ? undefined : json['max_latent_resolution'],
        'max_batch_size': !exists(json, 'max_batch_size') ? undefined : json['max_batch_size'],
        'onnx_opset': !exists(json, 'onnx_opset') ? undefined : json['onnx_opset'],
        'build_static_batch': !exists(json, 'build_static_batch') ? undefined : json['build_static_batch'],
        'build_dynamic_shape': !exists(json, 'build_dynamic_shape') ? undefined : json['build_dynamic_shape'],
        'build_preview_features': !exists(json, 'build_preview_features') ? undefined : json['build_preview_features'],
        'force_engine_build': !exists(json, 'force_engine_build') ? undefined : json['force_engine_build'],
        'force_onnx_export': !exists(json, 'force_onnx_export') ? undefined : json['force_onnx_export'],
        'force_onnx_optimize': !exists(json, 'force_onnx_optimize') ? undefined : json['force_onnx_optimize'],
        'onnx_minimal_optimization': !exists(json, 'onnx_minimal_optimization') ? undefined : json['onnx_minimal_optimization'],
    };
}

export function BuildEngineOptionsToJSON(value?: BuildEngineOptions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'model_id': value.model_id,
        'hf_token': value.hf_token,
        'subfolder': value.subfolder,
        'fp16': value.fp16,
        'verbose': value.verbose,
        'opt_image_height': value.opt_image_height,
        'opt_image_width': value.opt_image_width,
        'min_latent_resolution': value.min_latent_resolution,
        'max_latent_resolution': value.max_latent_resolution,
        'max_batch_size': value.max_batch_size,
        'onnx_opset': value.onnx_opset,
        'build_static_batch': value.build_static_batch,
        'build_dynamic_shape': value.build_dynamic_shape,
        'build_preview_features': value.build_preview_features,
        'force_engine_build': value.force_engine_build,
        'force_onnx_export': value.force_onnx_export,
        'force_onnx_optimize': value.force_onnx_optimize,
        'onnx_minimal_optimization': value.onnx_minimal_optimization,
    };
}

