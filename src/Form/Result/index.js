import "./style.css";

const Result = ({ amount, currencyGet, currencyHave, conversionedAmount }) => {

    return (
        <div className="result">
            <p className="result__text">
                <span>{conversionedAmount} {currencyHave}</span>
                <span className="result__separator"> = </span>
                <span>{amount} {currencyGet}</span></p>
            <p className="result__text result__text--smollerText">
                Kurs z dnia 2024-05-27
            </p>
        </div>
    );
};

export default Result;