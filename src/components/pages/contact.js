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

				<h2 className='padding'>Projects</h2>
				
				<div class="grid row card-deck">
					<figure class="card effect-lily col-12 col-xs-12 col-md-12 col-lg-4">
						<img src="http://www.jasondunn.com/images/Cape-Breton-Lighthouse-16-9-HDR.jpg" alt="img12"/>
						<figcaption>
							<div>
								<h2>SKY <span></span></h2>
								<p>Lily likes to play with crayons and pencils</p>
							</div>
							<a href="">View more</a>
						</figcaption>			
					</figure>
					<figure class="card effect-lily col-12 col-xs-12 col-md-12 col-lg-4">
						<img src="https://wallpaperscraft.com/image/plane_sky_clouds_airport_hdr_64662_3840x2160.jpg" alt="img1"/>
						<figcaption>
							<div>
								<h2> <span>TalkTalk</span></h2>
								<p>Lily likes to play with crayons and pencils</p>
							</div>
							<a href="">View more</a>
						</figcaption>			
					</figure>
					<figure class="card effect-lily col-12 col-xs-12 col-md-12 col-lg-4">
						<img src="https://i1.wp.com/www.kenlyonsphotography.com.au/wp-content/uploads/2014/10/140409-London-England-195928-1024px.jpg?ssl=1" alt="img12"/>
						<figcaption>
							<div>
								<h2> <span>JLR</span></h2>
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

