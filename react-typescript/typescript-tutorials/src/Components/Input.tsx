type InputProps = {
    value: string;
    handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input({ value, handleOnChange }: InputProps) {
    return (
        <div>
            <input value={value} onChange={(e) => handleOnChange(e)} type="text" />
        </div>
    );
}

export default Input;
