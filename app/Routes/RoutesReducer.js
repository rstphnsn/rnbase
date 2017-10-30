import { ActionConst } from 'react-native-router-flux';

const initialState = {
  scene: {}
};

export function routesReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ActionConst.FOCUS:
      return Object.assign({}, state, {
        scene: action.params
      });
    default:
      return state;
  }
}
