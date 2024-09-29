export type DTOLap = {
    date_start: string,
    driver_number: number,
    duration_sector_1: number,
    duration_sector_2: number,
    duration_sector_3: number,
    i1_speed: number,
    i2_speed: number,
    is_pit_out_lap: boolean,
    lap_duration: number,
    lap_number: number,
    segments_sector_1: number[],
    segments_sector_2: number[],
    segments_sector_3: number[],
    st_speed: number,

    // technical fields
    meeting_key: number,
    session_key: number,
}

export const DEFAULT_LAP: DTOLap = {
    date_start: "Not Found",
    driver_number: 0,
    duration_sector_1: 0,
    duration_sector_2: 0,
    duration_sector_3: 0,
    i1_speed: 0,
    i2_speed: 0,
    is_pit_out_lap: false,
    lap_duration: 0,
    lap_number: 0,
    segments_sector_1: [0],
    segments_sector_2: [0],
    segments_sector_3: [0],
    st_speed: 0,

    // technical fields
    meeting_key: 0,
    session_key: 0,
}