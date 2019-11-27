import Counter from '@/views/myUseState/myUseState';
import ClassVsHooks from '@/views/classVsHooks/ClassVsHooks';
import NewState from '@/views/myUseState/newState';
import UseState from '@/views/hooksSpecific/useState';
import UseReducer from '@/views/hooksSpecific/useReducer';
import ComplexUseReducer from '@/views/hooksSpecific/complexUseReducer';
import UseContext from '@/views/hooksSpecific/useContext';

const routerConfig = [
  {
    path: '/myUseState',
    title: 'myUseState',
    component: Counter,
  },
  {
    path: '/hooksComponent',
    title: 'hooksComponent',
    component: ClassVsHooks,
  },
  {
    path: '/newState',
    title: 'newState',
    component: NewState,
  },
  {
    path: '/useState',
    title: 'useState',
    component: UseState,
  },
  {
    path: '/useReducer',
    title: 'useReducer',
    component: UseReducer,
  },
  {
    path: '/complexUseReducer',
    title: 'complexUseReducer',
    component: ComplexUseReducer,
  },
  {
    path: '/useContext',
    title: 'useContext',
    component: UseContext,
  },
];
export default routerConfig;
