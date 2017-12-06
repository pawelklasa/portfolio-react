import React from 'react'

import {
    // eslint-disable-next-line
    Link
} from 'react-router-dom';

//css
import '../../assets/css/lily.css';

export class Contact extends React.Component {
    render() {
        return (
            <div className="container">
                <h2>Lily</h2>
				
				<div class="grid row card-deck">
					<figure class="card effect-lily col-12 col-xs-12 col-md-12 col-lg-4">
						<img src="http://www.jasondunn.com/images/Cape-Breton-Lighthouse-16-9-HDR.jpg" alt="img12"/>
						<figcaption>
							<div>
								<h2>Nice <span>Lily</span></h2>
								<p>Lily likes to play with crayons and pencils</p>
							</div>
							<a href="">View more</a>
						</figcaption>			
					</figure>
					<figure class="card effect-lily col-12 col-xs-12 col-md-12 col-lg-4">
						<img src="http://www.jasondunn.com/images/Cape-Breton-Lighthouse-16-9-HDR.jpg" alt="img1"/>
						<figcaption>
							<div>
								<h2>Nice <span>Lily</span></h2>
								<p>Lily likes to play with crayons and pencils</p>
							</div>
							<a href="">View more</a>
						</figcaption>			
					</figure>
					<figure class="card effect-lily col-12 col-xs-12 col-md-12 col-lg-4">
						<img src="http://www.jasondunn.com/images/Cape-Breton-Lighthouse-16-9-HDR.jpg" alt="img12"/>
						<figcaption>
							<div>
								<h2>Nice <span>Lily</span></h2>
								<p>Lily likes to play with crayons and pencils</p>
							</div>
							<a href="">View more</a>
						</figcaption>			
					</figure>
				</div>
            </div>
        )
    }
}

