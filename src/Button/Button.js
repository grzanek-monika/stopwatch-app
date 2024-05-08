import styles from './Button.module.scss'

const Button = props => {
    return(
        <button>{props.children}</button>
    )
}

export default Button;