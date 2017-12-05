import React from 'react'
import {
    // eslint-disable-next-line
    Link
  } from 'react-router-dom';

//css
import '/Users/pawelklasa/Desktop/portfolio-react/src/Assets/css/projects.css';

export class Projects extends React.Component { 
    render() {
        return (
            <div className="container-fluid">
                <h2 className="pl-0 pr-0 pl-md-1 pr-md-1 pl-lg-1 pr-lg-1 mt-2 mb-3">
                    Projects
                </h2>
                {/* <p className="pl-0 pr-0 pl-md-1 pr-md-1 pl-lg-1 pr-lg-1">some content goes here</p> */}
                <div className="row pl-0 pr-0 pl-md-3 pr-md-3 pl-lg-3 pr-lg-3">
                    <div className="card col-sm-12 col-md-6 col-lg-3 pl-0 pr-0 pl-md-1 pr-md-1 pl-lg-1 pr-lg-1">
                        <Link to='/sky'>
                            <img src="http://www.jasondunn.com/images/Cape-Breton-Lighthouse-16-9-HDR.jpg" class="img-fluid" alt="Responsive" />
                            <p>
                                British Sky Broadcasting
                            </p>
                        </Link>
                    </div>
                    <div className="card col-sm-12 col-md-6 col-lg-3 pl-0 pr-0 pl-md-1 pr-md-1 pl-lg-1 pr-lg-1">
                        <img src="https://wallpaperscraft.com/image/plane_sky_clouds_airport_hdr_64662_3840x2160.jpg" class="img-fluid" alt="Responsive" />
                        <p>
                            TalkTalk
                        </p>
                    </div>
                    <div className="card col-sm-12 col-md-6 col-lg-3 pl-0 pr-0 pl-md-1 pr-md-1 pl-lg-1 pr-lg-1">
                        <img src="https://i1.wp.com/www.kenlyonsphotography.com.au/wp-content/uploads/2014/10/140409-London-England-195928-1024px.jpg?ssl=1" class="img-fluid" alt="Responsive" />
                        <p>
                            Title
                        </p>
                    </div>
                    <div className="card col-sm-12 col-md-6 col-lg-3 pl-0 pr-0 pl-md-1 pr-md-1 pl-lg-1 pr-lg-1">
                        <img src="http://xinature.com/wp-content/uploads/2017/03/fields-trees-agriculture-rice-hills-landscapes-plots-rivers-vietnam-green-wallpapers-1920x1080.jpg" class="img-fluid" alt="Responsive" />
                        <p>
                            Title
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

