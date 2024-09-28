import { types, SnapshotIn } from 'mobx-state-tree';
import MeetingStore from './MeetingStore';

const AppStore = types.model('AppStore', {
   meeting: types.optional(MeetingStore, {})
})

export type AppStoreSnapshotIn = SnapshotIn<typeof AppStore>;

const initialStore: AppStoreSnapshotIn = {
    meeting: {}
}

export const createStore = (data: Partial<AppStoreSnapshotIn> = {}) => AppStore.create({ ...initialStore, ...data });

const store = createStore();
export default store;