import logo1x from "./img/logo_bank.png"; // Tell webpack this JS file uses this image.
import logo2x from "./img/logo_bank@2x.png";
import "./App.css";
import { useState } from "react";
import { CardInfo } from "./components/Cardinfo";
import { ButtonRounded } from "./components/ButtonRounded";
import { AmountBar } from "./components/AmountsBar";
import { Calculator } from "./components/Calculator";

function App() {
	const [balance, setBalance] = useState(1733);
	const [income, setIncome] = useState(12000);
	const [outcome, setOutcome] = useState(10267);
	const [calcAmount, setCalcAmount] = useState(0);
	const [isDeposit, setIsDeposit] = useState(null);
	const [submitDisabled, setSubmitDisabled] = useState(true);

	function validate(s) {
		var rgx = /^[0-9]*\.?[0-9]*$/;
		return Boolean(s.match(rgx));
	}

	const onChangeCalcAmount = (event) => {
		const newAmount = event.target.value;
		console.log(validate(newAmount));
		validate(newAmount) && setCalcAmount(newAmount);
		if (newAmount <= 0 || (!isDeposit && newAmount > balance)) {
			setSubmitDisabled(true);
		} else {
			setSubmitDisabled(false);
		}
	};

	const onClickNumber = (event) => {
		const numValue = event.target.innerHTML;
		let newAmount =
			Number(calcAmount) === 0 ? numValue : calcAmount + numValue;
		numValue === "Clear" && (newAmount = "0");
		console.log(newAmount);
		validate(newAmount) && setCalcAmount(newAmount);
		if (newAmount <= 0 || (!isDeposit && newAmount > balance)) {
			setSubmitDisabled(true);
		} else {
			setSubmitDisabled(false);
		}
		event.preventDefault();
	};

	const onClickAccept = (event) => {
		if (isDeposit) {
			const newBalance = balance + Number(calcAmount);
			const newIncome = income + Number(calcAmount);
			setBalance(newBalance);
			setIncome(newIncome);
		} else {
			const newBalance = balance - Number(calcAmount);
			const newOutcome = outcome + Number(calcAmount);
			setBalance(newBalance);
			setOutcome(newOutcome);
		}
		setCalcAmount(0);
		event.preventDefault();
	};

	return (
		<div className="App max-w-screen-lg mx-auto">
			<header className="header m-6">
				<div className="logo">
					<img
						src={logo1x}
						alt="logo bank"
						srcSet={logo2x}
						width="154"
					/>
				</div>
			</header>
			<main className="main-container rounded-3xl border border-blue border-solid m-6 shadow-md p-12 flex justify-between flex-wrap w-auto">
				<div className="left-col flex flex-col justify-between">
					<CardInfo></CardInfo>
					<div className="transaction-type space-y-4 mt-8">
						<div className="choose-message text-xs text-gray mb-8">
							Choose one of the following options:
						</div>
						<ButtonRounded
							compClass="block"
							isActive={isDeposit === null ? false : !isDeposit}
							onClick={setIsDeposit}
						>
							Whithdrawal
						</ButtonRounded>
						<ButtonRounded
							compClass="block"
							isActive={isDeposit === null ? false : isDeposit}
							onClick={setIsDeposit}
						>
							Deposit
						</ButtonRounded>
					</div>
				</div>
				<div className="right-col relative">
					{isDeposit === null && (
						<div className="unactive-courtain absolute w-full h-full bg-white bg-opacity-70 top-0 left-0"></div>
					)}
					<AmountBar
						balance={balance}
						income={income}
						outcome={outcome}
					></AmountBar>
					<Calculator
						calcAmount={calcAmount}
						onChange={onChangeCalcAmount}
						onClickNumber={onClickNumber}
						onClickAccept={onClickAccept}
						submitDisabled={submitDisabled}
					></Calculator>
				</div>
			</main>
			<footer className="text-xs m-6 text-right">
				Powered by{" "}
				<span className="uppercase font-bold">Javier Benavides</span>
			</footer>
		</div>
	);
}

export default App;
