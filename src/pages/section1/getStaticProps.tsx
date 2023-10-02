import type { NextPage } from 'next';

interface Props {
  data: number;
}
const Example: NextPage<Props> = ({ data }) => {
  console.log(data);
  return (
    <main>
      <h1>getStaticProps Page</h1>
      <p>값:{data}</p>
    </main>
  );
};

export default Example;

export async function getStaticProps() {
  const delayInSeconds = 2;
  const data = await new Promise((resolve) =>
    setTimeout(() => resolve(Math.random()), delayInSeconds * 1000)
  );

  return {
    props: { data },
    revalidate: 5,
  };
}
