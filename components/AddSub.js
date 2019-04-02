import React from 'react';

export default class AddSub extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:'',
            number:''
        }
    }
    render() {
        return (
        <div className="mar15">
            <form onSubmit={this.handleAdd.bind(this)}>
            <button onClick={evt => this.props.back()} className="uk-button uk-button-small centr"> <i className="material-icons mar5">
                    arrow_back
                </i>BACK</button><br/>
            
            <label>Name: </label> <br/> 
            <input type="text" className="add-input" autoComplete="name" 
                onChange={(event) => {this.setState({name:event.target.value})}} value={this.state.name}></input> <br/>
            
            <label>Phone Number (10 digits): </label><br/> 
            <input type="tel" pattern="[0-9]{10}" className="add-input" autoComplete="tel"
                onChange={(event) => {this.setState({number:event.target.value})}} value={this.state.number}></input> <br/>
            
            <div className="substate">Subscribers to be Added:</div>
            Name: {this.state.name} <br/>
            Phone Number: {this.state.number} <br/>
            <button type="submit" className="uk-button uk-button-primary add-button">Add</button>
            </form>
        </div>);
    }
    handleAdd(evt) {
        this.props.add({
            name:this.state.name,
            number:this.state.number
        })
    }
}

