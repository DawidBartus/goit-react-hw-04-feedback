import style from 'components/FeedbackOptions/FeedbackOptions.module.css';

const FeedbackOptions = props => {
  const { options, onClick } = props;

  return (
    <ul className={style.bttnHolder}>
      {options.map(option => {
        return (
          <li key={option} className={style.listElem}>
            <button
              type="button"
              className={style.bttnIteam}
              name={option}
              onClick={onClick}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default FeedbackOptions;
