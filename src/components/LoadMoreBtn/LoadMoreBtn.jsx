import { useEffect } from 'react';
import style from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onLoadMore }) => {

  useEffect(() => {
    window.scrollBy({
      top: 600,
      behavior: 'smooth'
    });
  }, [onLoadMore])

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