import React from "react";

class PhotoItem extends React.Component{
  render(){
    return (
      <div>
        <img src={this.props.photo.url} alt={this.props.photo.id} className="img-thumbnail img-responsive"/>
      </div>
    );
  };
}

export default PhotoItem;
