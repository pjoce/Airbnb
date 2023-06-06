import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { PicturesWrapper } from './style';
import PictureBrowser from '@/components/PictureBrowser';

const Pictures = memo((props) => {
  const { pictureUrls } = props;
  const [showBrowser, setShowBrowser] = useState(false);
  return (
    <PicturesWrapper>
      <div className="top">
        <div className="left">
          <div className="item" onClick={() => setShowBrowser(true)}>
            <img src={pictureUrls?.[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
          {
            pictureUrls?.slice(1, 5).map(item => {
              return (
                <div key={item} className="item" onClick={() => setShowBrowser(true)}>
                  <img src={item} alt=""/>
                  <div className="cover"></div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="see_pictures" onClick={() => setShowBrowser(true)}>查看照片</div>
      { showBrowser && <PictureBrowser pictureUrls={pictureUrls} close={() => setShowBrowser(false)} /> }
    </PicturesWrapper>
  );
});
Pictures.propTypes = {
  pictureUrls: PropTypes.array
};

export default Pictures;
