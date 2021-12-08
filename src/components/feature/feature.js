import React from 'react';
import './feature.css';

const imageStyle = {
  width: '100%',
  height: '100%'
};

export default function Feature({itemClass, bkgndImage, title, text}) {
  // var itemImageStyle = {
  //   backgroundImage : `url(${bkgndImage});`
  // };

  console.log('URL', bkgndImage);

  return (
    <div className={`bfItem ${itemClass}`}>
      {/* <div styles={{backgroundImage: `url("https://via.placeholder.com/500")`}} className="ico"></div> */}
      <div className="ico"></div>
      <div className="title">{title}</div>
      <p className="text">{text}</p>
    </div>
  )
}


/*
[dymanic image src/loading]
https://stackoverflow.com/a/54033931
https://stackoverflow.com/a/54311930
https://stackoverflow.com/a/45334965
https://medium.com/react-courses/5-top-methods-to-import-and-load-images-dynamically-on-cra-react-local-production-build-855d3ba3e704
https://codinglead.co/react/dynamic-image-sources-create-react-app
https://forum.freecodecamp.org/t/how-to-addressing-dynamic-image-path-in-react/447667

[dynamic background image]
*/
