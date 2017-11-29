import React from 'react'

export class Homepage extends React.Component { 
    render() {
        return (

            <div className="container">
                <h1>
                    Portfolio
                </h1>
                <p>some content goes here</p>

                <div className="row">
                <div className="card col-xs-12 col-sm-12 col-md-12 col-lg-4 pl-3 pr-2">
                    <img src="https://ifsstech.files.wordpress.com/2008/10/169.jpg" class="img-fluid" alt="Responsive image" />
                    <p>Description</p>
                </div>
                <div className="card col-xs-12 col-sm-12 col-md-12 col-lg-4 pl-2 pr-2">
                    <img src="https://ifsstech.files.wordpress.com/2008/10/169.jpg" class="img-fluid" alt="Responsive image" />
                    <p>Description</p>
                </div>
                <div className="card col-xs-12 col-sm-12 col-md-12 col-lg-4 pl-2 pr-3">
                    <img src="https://ifsstech.files.wordpress.com/2008/10/169.jpg" class="img-fluid" alt="Responsive image" />
                    <p>Description</p>
                </div>
                </div>

            </div>

        )
    }
}

