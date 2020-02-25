const ajax = <T = any> (url: string): Promise<T> => {
  // 这里为什么要用any?
  return new Promise<any>((resolve, reject) => {
    setTimeout(() => {
      switch (url) {
        case '/user':
          return resolve({ name: 'wk' });
        case '/books':
          return resolve(['JavaScript', 'React']);
        case '/movies':
          return resolve(['电影1', '电影2']);
      }
    }, 3000);
  });
};
export default ajax;
