import style from './ImageCard.module.css';

const ImageCard = ({ image, onOpen }) => {
  return (
    <div className={style.card} onClick={onOpen}>
      <img 
        className={style.img}
        src={image.urls.small} 
        alt={image.description}
      />
    </div>
  );
}

export default ImageCard