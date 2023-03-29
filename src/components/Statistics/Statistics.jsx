import style from 'components/Statistics/Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = props => {
  const { good, bad, neutral, total, positiveFeedback, bgColor } = props;

  return (
    <section className={style.statsSection}>
      <h2>Statistics</h2>
      <div className={style.statsElements}>
        <span className={style.goodElem}>
          <p>Good</p>
          <p>{good}</p>
        </span>
        <span className={style.neutralElem}>
          <p>Neutral</p>
          <p>{neutral}</p>
        </span>
        <span className={style.badElem}>
          <p>Bad</p>
          <p>{bad}</p>
        </span>
      </div>
      <div className={style.positiveFeedback}>
        <h3>Positive feedback</h3>
        <p style={bgColor}>{positiveFeedback}</p>

        <span className={style.totalElem}>
          <p>Total:</p>
          <p>{total}</p>
        </span>
      </div>
    </section>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  bad: PropTypes.number,
  neutral: PropTypes.number,
  total: PropTypes.number,
  positiveFeedback: PropTypes.string,
  bgColor: PropTypes.object,
};

export default Statistics;
