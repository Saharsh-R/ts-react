import { useState } from "react";

type CheckOutStep = 'Details' | 'Shipping'  | 'Payment'

function Checkout() {
    const [step, setStep] = useState<CheckOutStep>('Details')

    const handleChange = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (step === 'Details'){
            setStep('Shipping')
        } else if (step === 'Shipping') {
            setStep('Payment')
        }

    }
	return (
		<>
			<h1>Let's do shopping</h1>
            <p>Your current step is: <strong>{step}</strong></p>
            {step !== 'Payment' ? <button onClick= {handleChange} > Next step</button> : <p>This is your last step!</p>}
		</>
	);
}

export default Checkout;
