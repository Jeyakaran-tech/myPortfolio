import React from 'react';
import "./landing_page.css";
import {Grid,Cell} from 'react-mdl';
 

const landing_page = () => {
    return (
        <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
         
            <div className="banner-text">
              <h1>Data Scientist | Machine Learning Engineer</h1>

            <hr/>

          <p>Python | R | Advanced Java | JavaFX | React | React Bootstrap | Pl/Sql | Microsoft Azure</p>
                  
           
        </div>
        </Cell>
        </Grid>
        </div>
    );
};

export default landing_page;