import React from 'react';


class SubscribersList extends React.Component{
    
    render() {
       let i = -1;
        let tableRows = this.props.subscribers.map(subscriber => {
            i++;
            subscriber['id'] = i;
            return <tr key={i}><td>{subscriber.name}</td><td>{subscriber.number}</td><td>
                    <button className="uk-button uk-button-danger centr" onClick={evt=>{this.props.deleteSub(subscriber.id)}}><i className="material-icons mar5">
                            delete
                            </i>Delete</button></td></tr>
        });
        return(
            <div>
                <table className="uk-table uk-table-striped">
                    <thead>
                        <tr><th className="theader">NAME</th><th className="theader">PHONE</th></tr>
                    </thead>
                    <tbody>
                        {tableRows}
                    </tbody>
                </table>
            </div>
        );
    }
}


export default SubscribersList