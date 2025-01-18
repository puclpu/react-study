const Button = ({text, color, children}) => {
    return (
        <button>
            {text} - {color.toUpperCase()}
            {children}
        </button>
    );
};

Button.defaultProps = {
    color: "black",
};

export default Button;