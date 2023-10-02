import { useEffect, useState } from 'react';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
// import NoSSR from '../../../components/section1/NoSSR';
const NoSSR = dynamic(() => import('../../../components/section1/NoSSR'), {
  ssr: false,
});

const Example: NextPage = () => {
  const [data, setData] = useState(0);
  useEffect(() => {
    const delay = 2;
    new Promise<number>((resolve) =>
      setTimeout(() => resolve(Math.random()), delay * 1000)
    ).then((result) => setData(result));
  }, []);
  return (
    <main>
      <h1>clientSide Rendering</h1>
      <p>값 :{data}</p>
      <h1>no SSR</h1>
      <NoSSR />
    </main>
  );
};
export default Example;
