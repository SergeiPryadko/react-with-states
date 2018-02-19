import React from 'react';

export default props => {
    return (
        <div className="rowButton">
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">Add Users
            </button>
            <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Users</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <input type='text' className="form-control" ref={(input) => props.userInput.input = input}/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={props.addUser}>Add user</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}