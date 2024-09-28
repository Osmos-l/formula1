import { DTOMeeting } from '@/models/openf1/meeting';
import { getRequest } from '@/api/httpService';
import { MeetingInstance } from '@/stores/models/Meeting';
import MeetingBuilder from '@/builders/MeetingBuilder';

export const fetchLatestMeeting = async (): Promise<MeetingInstance | null> => {
    const response = await getRequest<DTOMeeting[]>('/meetings', {
        params: { meeting_key: 'latest' }
    });

    if (response && response.data && response.data.length > 0) {
        const meetingData = response.data[0];

        return new MeetingBuilder()
            .withCircuitKey(meetingData.circuit_key)
            .withCircuitShortName(meetingData.circuit_short_name)
            .withCountryCode(meetingData.country_code)
            .withCountryKey(meetingData.country_key)
            .withCountryName(meetingData.country_name)
            .withDateStart(meetingData.date_start)
            .withGmtOffset(meetingData.gmt_offset)
            .withLocation(meetingData.location)
            .withMeetingKey(meetingData.meeting_key)
            .withMeetingName(meetingData.meeting_name)
            .withMeetingOfficialName(meetingData.meeting_official_name)
            .withYear(meetingData.year)
            .build();
    } else {
        console.warn("No latest meeting found");
        return null;
    }
};
