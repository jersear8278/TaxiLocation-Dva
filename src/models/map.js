import * as mapService from '../services/map';

export default {
  namespace: 'map',
  state: {},
  reducers: {
    save(state, { payload: { destination } }) {
      return { destination };//回全域state
    },
  },
  effects: {
    *fetch({ payload: { selected = "0" } }, { call, put }) {
      const { destination } = yield call(mapService.fetch, { selected });
      yield put({
        type: 'save',
        payload: {
          destination,
        },
      });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/map') {
          dispatch({ type: 'fetch', payload: query });
        }
      });
    },
  },
}
