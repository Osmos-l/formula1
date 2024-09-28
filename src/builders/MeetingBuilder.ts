import Meeting, { MeetingInstance } from "@/stores/models/Meeting";

class MeetingBuilder {
    private meeting: MeetingInstance;

    constructor() {
        this.meeting = {
            circuit_key: 0,
            circuit_short_name: '',
            country_code: '',
            country_key: 0,
            country_name: '',
            date_start: '',
            gmt_offset: '',
            location: '',
            meeting_key: 0,
            meeting_name: '',
            meeting_official_name: '',
            year: 0,
        };
    }

    withCircuitKey(circuitKey: number) {
        this.meeting.circuit_key = circuitKey;
        return this;
    }

    withCircuitShortName(circuitShortName: string) {
        this.meeting.circuit_short_name = circuitShortName;
        return this;
    }

    withCountryCode(countryCode: string) {
        this.meeting.country_code = countryCode;
        return this;
    }

    withCountryKey(countryKey: number) {
        this.meeting.country_key = countryKey;
        return this;
    }

    withCountryName(countryName: string) {
        this.meeting.country_name = countryName;
        return this;
    }

    withDateStart(dateStart: string) {
        this.meeting.date_start = dateStart;
        return this;
    }

    withGmtOffset(gmtOffset: string) {
        this.meeting.gmt_offset = gmtOffset;
        return this;
    }

    withLocation(location: string) {
        this.meeting.location = location;
        return this;
    }

    withMeetingKey(meetingKey: number) {
        this.meeting.meeting_key = meetingKey;
        return this;
    }

    withMeetingName(meetingName: string) {
        this.meeting.meeting_name = meetingName;
        return this;
    }

    withMeetingOfficialName(meetingOfficialName: string) {
        this.meeting.meeting_official_name = meetingOfficialName;
        return this;
    }

    withYear(year: number) {
        this.meeting.year = year;
        return this;
    }

    build() {
        return Meeting.create(this.meeting);
    }
}

export default MeetingBuilder;