import Container from "@/components/Container/Container";
import css from "./page.module.css";
import Link from "next/link";

const Home = () => {
  return (
    <section className={css.home}>
      <Container>
        <div className={css.home_wrapper}>
          <div className={css.title}>
            <h1>Campers of your dreams</h1>
          </div>
          <div className={css.sub_title}>
            <h2>You can find everything you want in our catalog</h2>
          </div>
          <Link href="/catalog" className={css.link}>
            View now
          </Link>
        </div>
      </Container>
    </section>
  );
};
export default Home;
