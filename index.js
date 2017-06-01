export const CONTINUE = 100
export const SWITCHING_PROTOCOLS = 101
export const OK = 200
export const CREATED = 201
export const ACCEPTED = 202
export const NON_AUTHORITATIVE_INFORMATION = 203
export const NO_CONTENT = 204
export const RESET_CONTENT = 205
export const PARTIAL_CONTENT = 206
export const MULTI_STATUS = 207
export const ALREADY_REPORTED = 208
export const IM_USED = 226
export const MULTIPLE_CHOICES = 300
export const MOVED_PERMANENTLY = 301
export const FOUND = 302
export const SEE_OTHER = 303
export const NOT_MODIFIED = 304
export const USE_PROXY = 305
export const SWITCH_PROXY = 306
export const TEMPORARY_REDIRECT = 307
export const PERMANENT_REDIRECT = 308
export const BAD_REQUEST = 400
export const UNAUTHORIZED = 401
export const PAYMENT_REQUIRED = 402
export const FORBIDDEN = 403
export const NOT_FOUND = 404
export const METHOD_NOT_ALLOWED = 405
export const NOT_ACCEPTABLE = 406
export const PROXY_AUTHENTICATION_REQUIRED = 407
export const REQUEST_TIMEOUT = 408
export const CONFLICT = 409
export const GONE = 410
export const LENGTH_REQUIRED = 411
export const PRECONDITION_FAILED = 412
export const REQUEST_ENTITY_TOO_LARGE = 413
export const REQUEST_URI_TOO_LONG = 414
export const UNSUPPORTED_MEDIA_TYPE = 415
export const REQUESTED_RANGE_NOT_SATISFIABLE = 416
export const EXPECTATION_FAILED = 417
export const IM_A_TEAPOT = 418
export const MISDIRECTED_REQUEST = 421
export const UNPROCESSABLE_ENTITY = 422
export const UPGRADE_REQUIRED = 426
export const PRECONDITION_REQUIRED = 428
export const LOCKED = 423
export const FAILED_DEPENDENCY = 424
export const TOO_MANY_REQUESTS = 429
export const REQUEST_HEADER_FIELDS_TOO_LARGE = 431
export const UNAVAILABLE_FOR_LEGAL_REASONS = 451
export const INTERNAL_SERVER_ERROR = 500
export const NOT_IMPLEMENTED = 501
export const BAD_GATEWAY = 502
export const SERVICE_UNAVAILABLE = 503
export const GATEWAY_TIMEOUT = 504
export const HTTP_VERSION_NOT_SUPPORTED = 505
export const VARIANT_ALSO_NEGOTIATES = 506
export const INSUFFICIENT_STORAGE = 507
export const LOOP_DETECTED = 508
export const NOT_EXTENDED = 510
export const NETWORK_AUTHENTICATION_REQUIRED = 511

export const STATUS_MAP = {
    [CONTINUE]: 'Continue',
    [SWITCHING_PROTOCOLS]: 'Switching Protocols',
    [OK]: 'OK',
    [CREATED]: 'Created',
    [ACCEPTED]: 'Accepted',
    [NON_AUTHORITATIVE_INFORMATION]: 'Non-Authoritative Information',
    [NO_CONTENT]: 'No Content',
    [RESET_CONTENT]: 'Reset Content',
    [PARTIAL_CONTENT]: 'Partial Content',
    [MULTI_STATUS]: 'Multi Status',
    [ALREADY_REPORTED]: 'Already Reported',
    [IM_USED]: 'IM Used',
    [MULTIPLE_CHOICES]: 'Multiple Choices',
    [MOVED_PERMANENTLY]: 'Moved Permanently',
    [FOUND]: 'Found',
    [SEE_OTHER]: 'See Other',
    [NOT_MODIFIED]: 'Not Modified',
    [USE_PROXY]: 'Use Proxy',
    [SWITCH_PROXY]: 'Switch Proxy',
    [TEMPORARY_REDIRECT]: 'Temporary Redirect',
    [PERMANENT_REDIRECT]: 'Permanent Redirect',
    [BAD_REQUEST]: 'Bad Request',
    [UNAUTHORIZED]: 'Unauthorized',
    [PAYMENT_REQUIRED]: 'Payment Required',
    [FORBIDDEN]: 'Forbidden',
    [NOT_FOUND]: 'Not Found',
    [METHOD_NOT_ALLOWED]: 'Method Not Allowed',
    [NOT_ACCEPTABLE]: 'Not Acceptable',
    [PROXY_AUTHENTICATION_REQUIRED]: 'Proxy Authentication Required',
    [REQUEST_TIMEOUT]: 'Request Time-out',
    [CONFLICT]: 'Conflict',
    [GONE]: 'Gone',
    [LENGTH_REQUIRED]: 'Length Required',
    [PRECONDITION_FAILED]: 'Precondition Failed',
    [REQUEST_ENTITY_TOO_LARGE]: 'Request Entity Too Large',
    [REQUEST_URI_TOO_LONG]: 'Request-URI Too Large',
    [UNSUPPORTED_MEDIA_TYPE]: 'Unsupported Media Type',
    [REQUESTED_RANGE_NOT_SATISFIABLE]: 'Requested Range not Satisfiable',
    [EXPECTATION_FAILED]: 'Expectation Failed',
    [IM_A_TEAPOT]: 'I\'m a teapot',
    [MISDIRECTED_REQUEST]: 'Misdirected Request',
    [UNPROCESSABLE_ENTITY]: 'Unprocessable Entity',
    [UPGRADE_REQUIRED]: 'Locked',
    [PRECONDITION_REQUIRED]: 'Failed Dependency',
    [LOCKED]: 'Upgrade Required',
    [FAILED_DEPENDENCY]: 'Precondition Required',
    [TOO_MANY_REQUESTS]: 'Too Many Requests',
    [REQUEST_HEADER_FIELDS_TOO_LARGE]: 'Request Header Fields Too Large',
    [UNAVAILABLE_FOR_LEGAL_REASONS]: 'Unavailable For Legal Reasons',
    [INTERNAL_SERVER_ERROR]: 'Internal Server Error',
    [NOT_IMPLEMENTED]: 'Not Implemented',
    [BAD_GATEWAY]: 'Bad Gateway',
    [SERVICE_UNAVAILABLE]: 'Service Unavailable',
    [GATEWAY_TIMEOUT]: 'Gateway Time-out',
    [HTTP_VERSION_NOT_SUPPORTED]: 'HTTP Version not Supported',
    [VARIANT_ALSO_NEGOTIATES]: 'Variant Also Negotiates',
    [INSUFFICIENT_STORAGE]: 'Insufficient Storage',
    [LOOP_DETECTED]: 'Loop Detected',
    [NOT_EXTENDED]: 'Not Extended',
    [NETWORK_AUTHENTICATION_REQUIRED]: 'Network Authentication Required',
}
