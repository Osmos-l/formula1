import { types, flow } from "mobx-state-tree";
import Meeting, { MeetingInstance } from "@/stores/models/Meeting";
import { fetchLatestMeeting } from "@/api/meetingService";

const MeetingStore = types
    .model('MeetingStore', {
        meetings: types.array(Meeting),
        latestMeeting: types.maybeNull(Meeting),
        isLoading: types.optional(types.boolean, false),
    })    
    .views(() => ({
    }))
    .actions((self) => ({
        fetchLatestMeeting: flow(function* (): Generator<Promise<MeetingInstance | null>, void, MeetingInstance | null> { 
            self.isLoading = true 
            try {
                const latestMeeting: MeetingInstance | null = yield fetchLatestMeeting();

                if (latestMeeting) {
                    self.latestMeeting = latestMeeting;
                }
                
            } catch (error) {
                console.error(`Error on fetchLatestMeeting ${error}`)
            } finally {
                self.isLoading = false;
            }
        }),
    }))

export const createDefaultMeetingStore = () => {
    return MeetingStore.create({
        latestMeeting: null,
        meetings: [],
        isLoading: false,
    });
};

export default MeetingStore;