import './css/Home.css';
import './Home.js';

const Button = (props) => {
    return (
        <button>{props.text}</button>
    )

}
Button.defaultProps = {
    text: "Кнопка"
}
    export default Button