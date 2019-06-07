import { render, VNode } from 'inferno';
import { h } from 'inferno-hyperscript';
import { BrowserRouter, Route } from 'inferno-router';
import { version } from '../package.json';

import { Login } from './login';

const Top = (): VNode => {
  return h('.content', [
    h('h2', 'Top')
  , h('p', version)
  , h('a', { href: '/login' }, 'Login')
  ]);
};

const App = (): VNode => {
  return h(BrowserRouter, [
    , h(Route, { exact: true, path: '/', component: Top })
    , h(Route, { path: '/login', component: Login })
  ]);
};

render(
  h(App),
  document.querySelector('#container')
);