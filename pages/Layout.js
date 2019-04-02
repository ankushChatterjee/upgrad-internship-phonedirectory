import React from 'react';
import Header from '../components/Header';
import SubscribersList from '../components/SubscirbersList';
import AddSub from '../components/AddSub';


class Layout extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            subscribers:[],
            show:'SUBLIST'
        }
    }
    render() {

        if(this.state.show == 'SUBLIST'){
            return(<div>
                <Header text="PHONE DIRECTORY" />
                <button className="uk-button uk-button-primary add-button mar15 centr" 
                    onClick={(evt)=>this.setState({show:'ADD'})}><i className="material-icons mar5">
                    add_circle
                    </i> Add</button>
                <SubscribersList deleteSub={this.deleteSub.bind(this)} subscribers={this.state.subscribers} />
                </div>
            );
        }else{
            return(<div>
                <Header text="ADD SUBSCRIBER" />
                <AddSub back={this.handleBack.bind(this)} add={this.addSubscriber.bind(this)} />
            </div>)
        }
   
    }

    addSubscriber(newsub) {
        let subs = this.state.subscribers;
        subs.push(newsub);
        this.setState({subscribers:subs,show:'SUBLIST'});
    }
    deleteSub(i){
        let subs = this.state.subscribers;
        subs.splice(i,1);
        this.setState({subscribers:subs});
    }
    handleBack(){
        this.setState({show:'SUBLIST'})
    }
}


export default Layout