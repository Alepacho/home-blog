import { lazy } from "solid-js";

// import  { Home } from './pages/home';

export const routes = [
    {
      	path: "/",
      	component: lazy(() => import('./pages/home')) 
    },
    {
      	path: "/projects",
      	component: lazy(() => import('./pages/projects'))
    },
    {
      	path: "/blog",
      	component: lazy(() => import('./pages/blog'))
    },
    {
      	path: "/*all",
      	component: lazy(() => import("./pages/notfound")) // [...all]
    }
];