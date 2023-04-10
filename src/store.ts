import { createStoreon, StoreonModule } from 'storeon'

interface pageState {
    toLink: string,
    transit: Boolean,
    opacityStart: Number,
    opacityEnd: Number,
    theme: string,
    usingCookie: Boolean
}

interface State {
    page: pageState
}
  
interface Events {
    'inc': undefined,
    'page/set/link': string,
    'page/set/transit': Boolean,
    'page/set/theme': string,
    'page/set/cookie': Boolean
}

const pageModule: StoreonModule<State, Events> = store => {
  store.on('@init', () => {

    // localStorage.removeItem("theme");
    // localStorage.removeItem("cookie");
    let theme = localStorage.getItem("theme");
    if (!theme) theme = "dark";

    let cookie = localStorage.getItem("cookie");
    if (!cookie) cookie = "no";

    const result = {
      page: {
          toLink: '/',
          transit: false,
          opacityStart: 0,
          opacityEnd: 1,
          theme: theme,
          usingCookie: cookie == "yes" ? true : false
      }
    }

    console.log("INIT");
    console.log({theme});
    console.log({cookie});

    return result;
  });
  store.on('page/set/link', (state, event) => ({ page: {...state.page, toLink: event, transit: true, opacityStart: 0, opacityEnd: 1 } }));
  store.on('page/set/transit', (state, event) => ({ page: {...state.page, transit: event, opacityStart: 1, opacityEnd: 0 } }));
  store.on('page/set/theme', (state, event) => {
    localStorage.theme = event;
    // console.log("theme", event);
    return { page: {...state.page, theme: event }};
  });
  store.on('page/set/cookie', (state, event) => {
    localStorage.cookie = event ? "yes" : "no";
    // console.log("event", event);
    return { page: {...state.page, usingCookie: event }};
  });
}

export const store = createStoreon<State, Events>([pageModule]);
export type { State, Events };