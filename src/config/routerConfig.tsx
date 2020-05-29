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
import ChildrenPassProps from '@/views/childrenPassProps/childrenPassProps';
import UseReducerWithContext from '@/views/useReducerWithContext/useReducerWithContext';
import PersistState from '@/views/FAQ/PersistState';
import MeasureDom from '@/views/FAQ/MeasureDom';
import ComponentUpdated from '@/views/FAQ/ComponentUpdated';
import PreviousState from '@/views/FAQ/PreviousState';

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
  { path: '/childrenPassProps', name: 'childrenPassProps', component: ChildrenPassProps },
  { path: '/useReducerWithContext', name: 'useReducerWithContext', component: UseReducerWithContext },
  { path: '/faq/persist', name: 'persistState', component: PersistState },
  { path: '/faq/measureDom', name: 'measureDom', component: MeasureDom },
  { path: '/faq/componentUpdated', name: 'componentUpdated', component: ComponentUpdated },
  { path: '/faq/previousState', name: 'previousState', component: PreviousState },
];
export default routerConfig;
