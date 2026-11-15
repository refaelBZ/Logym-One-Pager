import Footer from '../Footer';
import SiteHeader from '../SiteHeader';
import styles from './style.module.scss';

export default function SiteShell({ children, current }) {
  return (
    <>
      <a className={styles.skip} href="#main">Skip to content</a>
      <SiteHeader variant="site" current={current} />
      <main id="main" className={styles.main} tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </>
  );
}
