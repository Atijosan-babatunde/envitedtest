import { Suspense } from 'react';

const pageLoader =
  (Component: React.LazyExoticComponent<() => JSX.Element>) => (props: any) =>
    (
      <Suspense fallback={<div>loading...</div>}>
        <Component {...props} />
      </Suspense>
    );

export default pageLoader;
