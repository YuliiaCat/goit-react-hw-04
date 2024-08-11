import style from './ErrorMessage.module.css';

const ErrorMessage = ({ error }) => <p className={style.text}>{error}</p>

export default ErrorMessage