import Counter from '@/views/myUseState/myUseState';
import ClassVsHooks from '@/views/classVsHooks/ClassVsHooks';
import NewState from '@/views/myUseState/newState';
import UseState from '@/views/hooksSpecific/useState';

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
];
export default routerConfig;
