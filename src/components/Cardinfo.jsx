export function CardInfo() {
    return (
        <div className="card-info space-y-6">
            <div className="cardholder">
                <div className="cardholder__title font-bold uppercase">
                    Fulanito de Tal
                </div>
                <div className="cadholder__label text-xs text-gray">
                    Cardholder
                </div>
            </div>
            <div className="cardnumber">
                <div className="cardnumber__title font-bold uppercase">
                    4363 8406 1093 5822
                </div>
                <div className="cardnumber__label text-xs text-gray">
                    Card Number
                </div>
            </div>
        </div>
    )
}