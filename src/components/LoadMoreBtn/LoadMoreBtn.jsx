import style from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <button 
      type='button'
      className={style.btn}
      onClick={onLoadMore}
    >
      Load More
    </button>
  );
}

export default LoadMoreBtn