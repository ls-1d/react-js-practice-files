type ButtonProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};
function Button({ handleClick }: ButtonProps) {
    return (
        <div>
            <button onClick={(e) => handleClick(e, 1)}>ClickMe</button>
        </div>
    );
}

export default Button;
