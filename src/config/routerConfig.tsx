import Counter from '@/views/myUseState/myUseState';
import ClassVsHooks from '@/views/classVsHooks/ClassVsHooks';
import NewState from '@/views/myUseState/newState';
import UseState from '@/views/hooksSpecific/useState';
import UseReducer from '@/views/hooksSpecific/useReducer';
import ComplexUseReducer from '@/views/hooksSpecific/complexUseReducer';
import UseContext from '@/views/hooksSpecific/useContext';
import UseEffect from '@/views/hooksSpecific/useEffect';

const routerConfig = [
  { path: '/myUseState', name: 'myUseState', component: Counter, icon: 'smile' },
  { path: '/hooksComponent', name: 'hooksComponent', component: ClassVsHooks },
  { path: '/newState', name: 'newState', component: NewState },
  { path: '/useState', name: 'useState', component: UseState },
  { path: '/useReducer', name: 'useReducer', component: UseReducer },
  { path: '/complexUseReducer', name: 'complexUseReducer', component: ComplexUseReducer },
  { path: '/useContext', name: 'useContext', component: UseContext },
  { path: '/useEffect', name: 'useEffect', component: UseEffect },
];
export default routerConfig;
