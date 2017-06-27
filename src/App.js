import React from 'react';

export class App extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
			buyItems: ['tea','bread', 'fruit']
		}
	}
	addItem(e){
		e.preventDefault();
		const {buyItems} = this.state;
		// const newItem = document.getElementById('addInput').value;
		const newItems = this.newItem.value;

		this.setState({
			buyItems: [...this.state.buyItems, newItems]
		})

		this.addform.reset();
	}	
	render(){
		const {buyItems} = this.state;
		return(
		<div>
			<h1 className="text-center">Shoping List</h1>

			<form ref={(input) =>{this.addform = input}} onSubmit={(e) => {this.addItem(e)}} className="form-inline">
				<div className="input-group">
				  <input ref={(input) =>{this.newItem = input}} id="addInput" type="text" className="form-control" placeholder="Add Item" aria-describedby="basic-addon1"></input>
				<button className="btn btn-primary">Add+</button>
				</div>
			</form>


			<table className="table">
			  <thead>
			    <tr>
			      <th>Items</th>
			    </tr>
			  </thead>
				  <tbody>
			{
				buyItems.map(item => {
					return <tr key={item}>
				      <td>{item}</td>
				    </tr>
				})
			}
				  </tbody>
			</table>					
		</div>
		)		
	}
}
