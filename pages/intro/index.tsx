import React, { useEffect, useState } from 'react';
import Contents from './components/Contents';
import IntroLayout from './components/IntroLayout';
import ProgressRatioBar from './components/ProgressRatioBar';
import Title from './components/Title';
import { addEvent, initSettingBeforeRender, initSettingAfterRender } from './source/settings';
import playData from './source/utils/playData';

const Intro = () => {
  const [isRender, setIsRender] = useState<boolean>(false);
  // console.log('index');

  //index의 useEffect 먼저 실행,
  useEffect(() => {
    console.log('index before Render');
    initSettingBeforeRender();
    addEvent();
    setIsRender(true);
  }, []);

  useEffect(() => {
    if (isRender) {
      initSettingAfterRender();
      console.log('index after Render');
      console.log(playData);
    }
  }, [isRender]);

  return (
    <>
      <IntroLayout id="root">
        {isRender ? (
          <>
            <ProgressRatioBar />
            {/* <div style={{ height: '1000vh' }}></div> */}
            <Title playId={0} />
            <Contents playId={1} />
          </>
        ) : (
          <div></div>
        )}
      </IntroLayout>
    </>
  );
};

export default Intro;
