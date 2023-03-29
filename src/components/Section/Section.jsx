import style from 'components/Section/Section.module.css';
import PropTypes from 'prop-types';

const Section = props => {
  const { title, children } = props;
  return (
    <section className={style.mainSection}>
      <h1 className={style.mainTitle}>{title}</h1>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.array,
};

export default Section;
