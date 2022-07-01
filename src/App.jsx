import { useState } from 'react'

const App = () => {

	const [ height, setHeight ] = useState(null)
	const [ width, setWidth ] = useState(null)
	const [ bmiResult, setBmiResult ] = useState(null)

	const calCulateBMI = (event) => {
		event.preventDefault()
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
			</form>
		</div>
	)
}

export default App