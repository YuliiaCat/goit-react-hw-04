import { useEffect } from 'react';
import style from './ImageModal.module.css';
import ReactDOM from 'react-dom';

const ImageModal = ({ onClose, image }) => {
  const portalRoot = document.getElementById('root-modal');

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose])

  return ReactDOM.createPortal (
    <div className={style.modal} onClick={onClose}>
      <div className={style.content} onClick={(e) => e.stopPropagation()}>
        <img 
          className={style.img}
          src={image.urls.regular} 
          alt={image.description} 
        />
        <div className={style.description}>
          <p className={style.text}>Likes: {image.likes}</p>
          <p className={style.text}>Author: {image.user.name}</p>
        </div>
      </div>
    </div>,
    portalRoot,
  );
}

export default ImageModal