import './index.css'

export default function CardSelectButton ( {text, clickHandler, id} ) {
    return (
        <button className={`rounded my-1`} onClick={clickHandler} id={id}>{text}</button>
    )
}