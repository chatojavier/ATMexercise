import { currencyFormat } from "../currencyFormat"

export function AmountBar({ balance, income, outcome }) {
    return (
        <div className="amount-bar flex justify-end space-x-12 mb-8">
            <div className="amount-balance text-blue">
                <AmountNumber>{currencyFormat(balance)}</AmountNumber>
                <div className="amount-label text-gray text-xs text-right">Balance</div>
            </div>
            <div className="amount-income text-green">
                <AmountNumber>{currencyFormat(income)}</AmountNumber>
                <div className="amount-label text-gray text-xs text-right">Income</div>
            </div>
            <div className="amount-outcome text-red">
                <AmountNumber>{currencyFormat(outcome)}</AmountNumber>
                <div className="amount-label text-gray text-xs text-right">Outcome</div>
            </div>
        </div>
    )
}

function AmountNumber({ children }) {
    return (
        <div className="amount-number text-xl font-bold">
            ${children}
        </div>
    )
}