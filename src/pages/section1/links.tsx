import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
const Links = () => {
  const router = useRouter();

  useEffect(() => {
    router.prefetch('/section1/getStaticProps');
  }, [router]);
  return (
    <main>
      <h1>Links</h1>
      <div style={{ height: '200vh' }} />
      <button
        onClick={() => {
          router.push('/section1/getStaticProps');
        }}
      >
        /getStaticProps
      </button>

      {/*eslint-disabled-next-line @next/next/no-html-link-for-pages*/}
      {/*<a href="/section1/getStaticProps">getStaticProps</a>*/}
      {/*<Link href={'/section1/getStaticProps'}>/getStaticProps</Link>*/}
    </main>
  );
};
export default Links;
