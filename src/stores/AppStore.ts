import { types, SnapshotIn } from 'mobx-state-tree';
import MeetingStore, { createDefaultMeetingStore } from './MeetingStore';

const AppStore = types.model('AppStore', {
    meeting: MeetingStore
});

export type AppStoreSnapshotIn = SnapshotIn<typeof AppStore>;

const initialStore: AppStoreSnapshotIn = {
    meeting: createDefaultMeetingStore(),
};

export const createStore = (data: Partial<AppStoreSnapshotIn> = {}) => 
    AppStore.create({ ...initialStore, ...data });

const store = createStore();
export default store;
