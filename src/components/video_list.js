import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) =>{
  // map iterate through an array and passes the element to the function, which at the end results in a array of results
  const videoItmes=props.videos.map((video)=>{
    return <VideoListItem
      onVideoSelect={props.onVideoSelect}
      key={video.etag}
      video ={video} />
  });

  return (
    //react returns a list of components when you pass an array
    <ul className="col-md-4 list-group">
      {videoItmes}
    </ul>
  );
};

export default VideoList;
