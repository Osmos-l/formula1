export type DTOSession = {
    circuit_key: number,
    circuit_short_name: string,
    country_code: string,
    country_key: number,
    country_name: string,
    date_start: string,
    date_end: string,
    gmt_offset: string,
    location: string,
    meeting_key: number,
    session_key: number,
    session_name: string,
    session_type: string,
    year: number
}

export const DEFAULT_SESSION: DTOSession = {
    circuit_key: 0,
    circuit_short_name: 'Not Found',
    country_code: 'Not Found',
    country_key: 0,
    country_name: 'Not Found',
    date_start: 'Not Found',
    date_end: 'Not Found',
    gmt_offset: 'Not Found',
    location: 'Not Found',
    meeting_key: 0,
    session_key: 0,
    session_name: 'Not Found',
    session_type: 'Not Found',
    year: 0
}