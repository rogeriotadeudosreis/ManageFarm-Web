// import * as moment from 'moment';

export type ApiErrorFormatter = (apiError: ApiError) => string;

const toString = (apiError: ApiError): string => {
    let fullMessage = '';

    if (apiError.message) {
        fullMessage += apiError.message;
    }

    if (apiError.errors && apiError.errors.length) {
        fullMessage += ' ';
        fullMessage += apiError.errors[0];
    }

    return fullMessage || 'Ocorreu um problema inesperado.';
};

export class ApiError {
    constructor(
        public message?: string,
        public errors?: Array<string>,
        public status?: number,
        public timestamp?: string,
        public debugMessage?: string
    ) {

    }

    // static fromJson(json: any): ApiError {
    //     json = json || {};

    //     let timestamp = json.timestamp;

    //     if (moment.utc(timestamp, moment.ISO_8601, true).isValid()) {
    //         timestamp = moment.utc(timestamp).local().format('DD/MM/YYYY HH:MM');
    //     }

    //     return new ApiError(
    //         json.message,
    //         json.errors,
    //         json.status,
    //         timestamp,
    //         json.debugMessage
    //     );
    // }

    toString(formatter: ApiErrorFormatter): string {
        return formatter ? formatter(this) : toString(this);
    }
}
