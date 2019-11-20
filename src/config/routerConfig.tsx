import Counter from '@/views/myUseState/myUseState';
import ClassVsHooks from '@/views/classVsHooks/ClassVsHooks';
import NewState from '@/views/myUseState/newState';

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
];
export default routerConfig;
