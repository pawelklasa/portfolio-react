import React from 'react'

export class Footer extends React.Component { 
    render() {
        return (
            <div>            
                <footer class="container-fluid w-100 bg-faded footer">
                    <span className="navbar-text"><i class="fa fa-copyright" aria-hidden="true"></i>oded and designed by pawel klasa</span>
                    <span className="navbar-text float-right">
                        View this on <a href="https://github.com/pawelklasa/portfolio-react" target="_blank" rel="noopener noreferrer">GitHub <i class="fa fa-github" aria-hidden="true"></i></a>
                    </span>
                </footer>     
            </div>
        )
    }
}
