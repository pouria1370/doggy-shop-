import React from "react";
import "./directoryViewer.style.scss";
import DirectoryItem from "../directoryItem/directoryItem.component";

const DirectoryViewer = ({dogs, authority, title }) => {
  return(
  <div className="dogs-viewer">
    
    <div className='details-dogs'>
    <div className="title">{title}</div>
    <span className="authority">/authority:{authority}</span>
    </div>
    <div className="dogs">
      {dogs
        .filter((item,index) => index< 4)
        .map((item) => (
          <DirectoryItem item={item} key={item.id}  />
        ))}
    </div>
  </div>
);}

export default DirectoryViewer;
