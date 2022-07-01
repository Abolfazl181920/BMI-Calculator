import { useState } from 'react'

const App = () => {

	const [ height, setHeight ] = useState("")
	const [ width, setWidth ] = useState("")
	const [ bmiResult, setBmiResult ] = useState(null)
	const [ status, setStatus ] = useState("")

	const calCulateBMI = (event) => {
		event.preventDefault()

		let bmi = Number(width / (height / 100) ** 2).toFixed(2)
		setBmiResult(bmi)

		let bmiStatus = getStatus(bmi)
		setStatus(bmiStatus)
	}

	const getStatus = (bmi) => {
		if (bmi < 18.5) return "UnderWeight";
		else if (bmi >=18.5) return "Normal";
		else if (bmi >= 24.5 && bmi < 29.9) return "OverWeight";
		else return "Nothing"
	}

	return (
		<div className="App">
			<form action="#" className="flex">
				<label htmlFor="height"></label>
				<label htmlFor="width"></label>

				<input
					value={height}
					onChange={(event) => setHeight(event.target.value)}
					type="number"
					placeholder="Enter Height"
					name="height"
				/>
				<input
					value={width}
					onChange={(event) => setWidth(event.target.value)}
					type="number"
					placeholder="Enter Width"
					name="width"
				/>
				<button onClick={calCulateBMI}>Calculate BMI</button>

				<>
					<span> {bmiResult} </span>
					<span> {status} </span>
				</>
			</form>
		</div>
	)
}

export default App