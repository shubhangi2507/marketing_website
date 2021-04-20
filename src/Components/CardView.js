
import React from 'react';
import { NavLink } from 'react-router-dom';
const ImageList = props => {
  const path = props.path;      
  const type = props.type;
  const images = props.Data.map(({ id, title, image}) => {
          let header;
        if(type==='title')
        {header = <NavLink className="header" to={`${path}/${title}`}>{title}</NavLink>;}
        else if(type==='id')
        {header =<NavLink className="header" to={`${path}/${id}`}>{title}</NavLink>;}
        else
        { header =   <div className="header"> {title} </div>;}
    return (
            <React.Fragment key={id}>
        <div className="column"  >
                <div className="ui fluid card">
                        <div className="image">
                                <img alt={title} src={image}   key={id} />
                        </div>
                        <div className="content">
                                {header}        
                        </div>
                </div>        
        </div>
        </React.Fragment>
    );
  });

  return <>{images}</>;
};

export default ImageList;
