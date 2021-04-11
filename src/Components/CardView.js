
import React from 'react';
import { NavLink } from 'react-router-dom';
const ImageList = props => {
  const path = props.path;      
  const images = props.Data.map(({ id, title, image }) => {
    return (
            <React.Fragment>
        <div className="column" key={id} >
                <div className="ui fluid card">
                        <div className="image">
                                <img alt={title} src={image}   key={id}  />
                        </div>
                        <div className="content">
                        <NavLink className="header" to={`${path}/${id}`}>{title}</NavLink>
                        </div>
                </div>        
        </div>
        </React.Fragment>
    );
  });

  return <>{images}</>;
};

export default ImageList;
