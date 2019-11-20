import Counter from '@/views/myUseState/myUseState';
import ClassVsHooks from '@/views/classVsHooks/ClassVsHooks';

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
];
export default routerConfig;
