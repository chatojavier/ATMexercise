import { currencyFormat } from "../currencyFormat";

export function Calculator({ calcAmount, onChange, onClickNumber, onClickAccept, submitDisabled }) {
    let numberButtonsList = [];
    for (let index = 1; index < 10; index++) {
        const element = <NumberButton key={index} value={index} onClickNumber={onClickNumber}>index</NumberButton>;
        numberButtonsList.push(element);
    }

    return (
        <div className="calculator">
            <NumberScreen value={calcAmount} onChange={onChange}></NumberScreen>
            <div className="calculator__buttons grid grid-cols-3 gap-2 mt-6">
                {numberButtonsList}
                <NumberButton key="dot" value={"."} onClickNumber={onClickNumber}></NumberButton>
                <NumberButton key="0" value={0} onClickNumber={onClickNumber}></NumberButton>
                <NumberButton key="clear" value="Clear" color="gray" onClickNumber={onClickNumber}></NumberButton>
                <NumberButton key="accept" value="Accept" color="green" colSpan={3} onClickAccept={onClickAccept} submitDisabled={submitDisabled}></NumberButton>
            </div>
        </div>
    )
}

function NumberScreen({ value, onChange }) {
    return (
        <input pattern="^[0-9]{1,2}([,.][0-9]{1,2})?$" step="0.01" className="number-screen w-full p-4 shadow-inner flex justify-between font-bold text-xl rounded-xl text-right | focus:outline-none focus:ring focus:ring-blue focus:ring-opacity-50" value={currencyFormat(value)} step=".01" onChange={onChange}>
        </input >
    )
}

function NumberButton({ value, color, onClickNumber, colSpan, onClickAccept, submitDisabled }) {
    return (
        <button className={"number-button p-3 font-bold text-xl rounded-xl border border-solid text-center active:bg-gradient-to-br active:text-white" + (submitDisabled ? " opacity-30 cursor-default" : " hover:shadow") + (colSpan ? ` col-span-${colSpan}` : "") + (color ? ` border-${color} text-${color} from-${color} to-${color}-dark` : " border-blue text-blue from-blue to-blue-dark")} onClick={onClickAccept ? onClickAccept : onClickNumber} disabled={submitDisabled}>
            {value}
        </button>
    )
}