import React from 'react';

export default props => {
    return (
        <div className="rowButton">
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Add Users</button>
            <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="usersHeader">
                                <h2 className="usersHeader__title">Users</h2>
                            </div>
                            <input type='text' ref={(input) => {this.userInput = input}} />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={this.addUser}>Add user</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}