export function Button(props) {

    return (
        <button className={props.className}>
            {props.text}
        </button>
    )
}