export type Meeting = {
    circuit_key: number,
    circuit_short_name: string,
    meeting_key: number,
    location: string,
    country_name: string,
    meeting_code: string,
    meeting_name: string,
    meeting_official_name: string,
    year: number
}

export const DEFAULT_MEETING: Meeting = {
    circuit_key: 0,
    circuit_short_name: "Not Found",
    meeting_key: 0,
    location: "Nount Found",
    country_name: "Not Found",
    meeting_code: "N/A",
    meeting_name: "Not Found",
    meeting_official_name: "Not Found",
    year: 0
}