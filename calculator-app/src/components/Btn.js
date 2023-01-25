import './Btn.css'

function Btn(props) {
    return (
        <button className={props.className} onClick={props.func}>
            {props.text}</button>
    )
};

export default Btn;