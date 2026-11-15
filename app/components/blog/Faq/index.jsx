import styles from './style.module.scss';

export default function Faq({ items }) {
  if (!items?.length) return null;

  return (
    <section className={styles.faq} aria-labelledby="article-questions">
      <h2 id="article-questions" className={styles.title}>Questions</h2>
      {items.map((item) => (
        <div className={styles.item} key={item.question}>
          <h3 className={styles.question}>{item.question}</h3>
          <p className={styles.answer}>{item.answer}</p>
        </div>
      ))}
    </section>
  );
}
