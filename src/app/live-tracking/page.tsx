"use client";

import LapsPreview from "@/components/LapsPreview";
import MeetingPreview from "@/components/MeetingPreview";
import WeatherPreview from "@/components/WeatherPreview";
import { getLatestSessionFromMeeting } from "@/api/openf1";
import { inject, observer } from "mobx-react";
import { MeetingInstance } from "@/stores/models/Meeting";
import { useEffect, useState } from "react";
import { DTOSession } from "@/api/models/session";
import AppStore from "@/stores/AppStore";
import { Instance } from "mobx-state-tree";

interface MyComponentProps {
    store: Instance<typeof AppStore>;
}
const LiveTracking = inject("store")(observer(({ store }: MyComponentProps) => {
    const { meeting: meetingStore } = store;
    const [session, setSession] = useState<DTOSession | null>(null);

    const loadData = async () => {
        await meetingStore.fetchLatestMeeting();
        fetchSession(meetingStore.latestMeeting);
    }

    const fetchSession = async (meeting: MeetingInstance | null) => {
        setSession(meeting ? await getLatestSessionFromMeeting(meeting) : null);
    }

    useEffect(() => {
        loadData();
    }, [meetingStore])
 
  return (
    <div className="w-screen h-screen max-h-screen max-w-screen overflow-hidden">
        <div className="grid grid-rows-6 grid-flow-col gap-4">
            <div className="row-span-1 col-span-2 h-[20vh] max-h-[20vh]">
                { (meetingStore.latestMeeting && session) && ( <MeetingPreview meeting={meetingStore.latestMeeting} session={session} /> ) }
            </div>
            <div className="row-span-5 col-span-2 h-[80vh] max-h-[80vh]">
                { session && ( <LapsPreview session={session} /> ) }
            </div>
            <div className="row-span-6 col-span-1">
                { session && ( <WeatherPreview session={session} /> ) }
            </div>
        </div>
    </div>
  );
}));

export default LiveTracking;