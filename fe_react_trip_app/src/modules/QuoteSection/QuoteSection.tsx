import Container from "@UI/Container";
import QuoteCard from "@components/QuoteCard";
import styles from './QuoteSection.module.scss';

export default function QuoteSection() {
  return (
    <section className={styles.quoteSection}>
      <Container>
        <QuoteCard />
      </Container>
    </section>
  );
}
