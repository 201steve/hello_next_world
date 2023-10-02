import { GetServerSideProps, NextPage } from 'next';

interface Props {
  data: number;
}
const Example: NextPage<Props> = ({ data }) => {
  return (
    <main>
      <h1>getServerSideProps</h1>
      <p>값:{data}</p>
    </main>
  );
};
export default Example;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const delay = 2;
  const data = await new Promise((resolve) =>
    setTimeout(() => resolve(Math.random()), delay * 1000)
  );
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=5, stale-while-revalidate=10'
  );

  return {
    props: { data },
  };
};
