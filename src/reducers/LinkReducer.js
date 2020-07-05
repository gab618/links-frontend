import { LINK_CREATE, LINK_LIST, LINK_GET } from '../actions/LinkActions';

const initalState = {
  link: null,
  links: [],
};

export default function (state = initalState, action) {
  const { type, payload } = action;
  switch (type) {
    case LINK_CREATE: {
      const response = payload ? payload.data : null;
      const link = response ? response.data : null;
      return { ...state, link };
    }
    case LINK_GET: {
      const response = payload ? payload.data : null;
      const link = response ? response.data : null;
      return { ...state, link };
    }
    case LINK_LIST: {
      const response = payload ? payload.data : null;
      const links = response ? response.data : null;
      return { ...state, links };
    }
    default: {
      return state;
    }
  }
}
