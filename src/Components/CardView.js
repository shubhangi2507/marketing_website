
import React from 'react';
import { NavLink } from 'react-router-dom';
const ImageList = props => {
  const path = props.path;      
  const type = props.type;
  const images = props.Data.map(({ id, title, image}) => {
          let header;
          let closer;
        if(type==='title')
        {header = <NavLink className="header" to={`${path}/${title}`}>;
          closer =</NavLink>;
        }
        else if(type==='id')
        {header =<NavLink className="header" to={`${path}/${id}`}>;
        closer =</NavLink>;}
        else
        { header =   <div className="header"> {title};
        closer =</div>;}
    return (
            <React.Fragment key={id}>
        <div className="column"  >
                {header}
                <div className="ui fluid card">
                        <div className="image">
                                <img alt={title} src={image}   key={id} />
                        </div>
                        <div className="content">
                                {title}        
                        </div>
                </div>   
                {closer}     
        </div>
        </React.Fragment>
    );
  });

  return <>{images}</>;
};

export default ImageList;
