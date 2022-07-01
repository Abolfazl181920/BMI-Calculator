const App = () => {

	const calCulateBmi = (event) => {
		event.preventDefault()
	}
	
	return (
		<div className="App">
			<form action="#" className="flex">
				<label htmlFor="height"></label>
				<input type="number" placeholder="Enter Height" name="height" />
				<label htmlFor="width"></label>
				<input type="number" placeholder="Enter Width" name="width" />
				<button onClick={calCulateBmi}>Calculate BMI</button>
			</form>
		</div>
	)
}

export default App