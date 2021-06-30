import React from 'react';
import './Components/index.css';

function App(){
    return(
        <div>
            <div className="container">
                <div className="d-flex flex-column my-flex-container-column justify-content-center">
                   <div className="p-2 my-flex-item">Drag & drop your file here</div>
                   <div className="p-2 my-flex-item">or</div>
                   <div className="d-flex flex-row justify-content-center ">
                   <button type="button" className="btn btn-outline-dark">Browse files</button>
                   </div>
                </div>
            </div>

        </div>
        
    );
}
export default App;

