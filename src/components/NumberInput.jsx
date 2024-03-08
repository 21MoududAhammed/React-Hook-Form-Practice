export default function NumberInput({value,onChange,...rest}){
    function handleChange(e){
        e.preventDefault();
        const value = e.target.valueAsNumber;
        onChange(value);
    }
    return (
        <input type="number" value={value} onChange={handleChange} {...rest} />
    );
}
