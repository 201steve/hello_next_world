import { Fragment, useEffect } from 'react';
import Header from '../../components/common/Header';
import styles from '../styles/header.module.scss';
import Link from 'next/link';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { VscFeedback } from 'react-icons/vsc';
import MapSection from '../../components/home/MapSection';
import { Store } from '../../types/store';
import { NextPage } from 'next';
import useStores from '../../hooks/useStores';

interface Props {
  stores: Store[];
}
const Home: NextPage<Props> = ({ stores }) => {
  const { initializeStores } = useStores();

  useEffect(() => {
    initializeStores(stores);
  }, [initializeStores, stores]);

  return (
    <Fragment>
      <Header
        rightElements={[
          <button
            key="button"
            className={styles.box}
            style={{ marginRight: 8 }}
            onClick={() => {
              alert('복사');
            }}
          >
            <AiOutlineShareAlt size={20} />
          </button>,
          <Link href="/Feedback" className={styles.box} key="link">
            <VscFeedback size={20} />
          </Link>,
        ]}
      />
      <main style={{ width: '100%', height: '100%' }}>
        <MapSection />
      </main>
    </Fragment>
  );
};

export default Home;

export const getStaticProps = async () => {
  //* TODO : next api route로 불러오기
  const stores = (await import('../../public/stores.json')).default;

  return {
    props: { stores },
    revalidate: 60 * 60,
  };
};
