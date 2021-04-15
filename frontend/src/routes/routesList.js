import Home from '../pages';
import Agendar from '../pages/agendar';
import ListaAgendados from '../pages/listaAgendados';

export default [
  {
    name: 'Home',
    path: '/',
    component: Home,
  },
  {
    name: 'Agendar',
    path: '/agendar',
    component: Agendar,
  },
  {
    name: 'ListaAgendados',
    path: '/listaagendados',
    component: ListaAgendados,
  },
];
