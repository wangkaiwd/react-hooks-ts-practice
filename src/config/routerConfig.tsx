import Counter from '@/views/myUseState/myUseState';
import ClassVsHooks from '@/views/classVsHooks/ClassVsHooks';
import NewState from '@/views/myUseState/newState';
import UseState from '@/views/hooksSpecific/useState';
import UseReducer from '@/views/hooksSpecific/useReducer';
import ComplexUseReducer from '@/views/hooksSpecific/complexUseReducer';
import UseContext from '@/views/hooksSpecific/useContext';
import UseEffect from '@/views/hooksSpecific/useEffect';
import UseMemo from '@/views/hooksSpecific/useMemo';
import UseRef from '@/views/hooksSpecific/useRef';
import ControlVersusUnControl from '@/views/controlVersusUnControl/controlVersusUnControl';
import FetchData from '@/views/fetchData/fetchData';

const routerConfig = [
  { path: '/hooksComponent', name: 'hooksComponent', component: ClassVsHooks },
  { path: '/newState', name: 'newState', component: NewState },
  { path: '/useState', name: 'useState', component: UseState },
  { path: '/useReducer', name: 'useReducer', component: UseReducer },
  { path: '/complexUseReducer', name: 'complexUseReducer', component: ComplexUseReducer },
  { path: '/useContext', name: 'useContext', component: UseContext },
  { path: '/useEffect', name: 'useEffect', component: UseEffect },
  { path: '/useMemo', name: 'useMemo', component: UseMemo },
  { path: '/useRef', name: 'useRef', component: UseRef },
  { path: '/controlAndUnControl', name: 'controlAndUnControl', component: ControlVersusUnControl },
  { path: '/fetchData', name: 'fetchData', component: FetchData },
];
export default routerConfig;
