import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import styles from '../../src/styles/header.module.scss';
interface Props {
  rightElements?: React.ReactElement[];
}

const LOGO_URL: string =
  'https://lecture-1.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finflearn.f5698af2.png&w=128&q=75';
const Header = ({ rightElements }: Props) => {
  return (
    <header className={styles.header}>
      <div className={styles.flexItem}>
        <Link href="/" className={styles.box}>
          <Image src={LOGO_URL} width={110} height={20} alt="인프런 로고" />
        </Link>
      </div>
      {rightElements && <div className={styles.flexItem}>{rightElements}</div>}
    </header>
  );
};
export default Header;
