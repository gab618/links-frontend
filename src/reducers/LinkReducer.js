import { LINK_CREATE } from '../actions/LinkActions';

const initalState = {
  link: null,
};

export default function (state = initalState, action) {
  const { type, payload } = action;
  switch (type) {
    case LINK_CREATE: {
      const response = payload ? payload.data : null;
      const link = response ? response.data : null;
      return { ...state, link };
    }
    default: {
      return state;
    }
  }
}
