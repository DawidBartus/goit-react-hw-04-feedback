import style from 'components/Section/Section.module.css';

const Section = props => {
  const { title, children } = props;
  return (
    <section className={style.mainSection}>
      <h1 className={style.mainTitle}>{title}</h1>
      {children}
    </section>
  );
};

export default Section;
