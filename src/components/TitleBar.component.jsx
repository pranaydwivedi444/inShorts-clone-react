import React from 'react'
import Button from './Button.component';
import PlayStoreButtons from './PlayStoreButtons';

function TitleBar({titleContent}) {
  return (
    <div className="bg-red-500 h-16 shadow-md ">
      <div className=" m-4 flex flex-shrink items-center justify-between h-full" >
        <span className="text-white text-base font-light font-serif">
          {titleContent}{" "}
        </span>
        <div className="flex items-center h-full flex-row">
          <PlayStoreButtons
            logoSrc={
              "https://assets.inshorts.com/website_assets/images/appstore.png"
            }
          />
          <PlayStoreButtons
            logoSrc={
              "https://assets.inshorts.com/website_assets/images/playstore.png"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default TitleBar
