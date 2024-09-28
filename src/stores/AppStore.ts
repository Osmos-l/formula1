import { types, SnapshotIn } from 'mobx-state-tree';

const AppStore = types.model('AppStore', {
    count: types.optional(types.number, 0),
    name: types.optional(types.string, '')
})

type AppStoreSnapshotIn = SnapshotIn<typeof AppStore>;

const initialStore: AppStoreSnapshotIn = {
    count: 0,
    name: ''
}

export const createStore = (data: Partial<AppStoreSnapshotIn> = {}) => AppStore.create({ ...initialStore, ...data });

const store = createStore();
export default store;