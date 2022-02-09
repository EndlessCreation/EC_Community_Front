import React, { ReactChild, useEffect, useState } from 'react';
import Background from './components/Background';
import Contents from './components/Contents';
import IntroLayout from './components/IntroLayout';
import Matrix from './components/Matrix';
import ProgressRatioBar from './components/ProgressRatioBar';
import Title from './components/Title';
import { addEvent, initSettingBeforeRender, initSettingAfterRender } from './source/settings';
import playData from './source/utils/playData';

const IntroInterAction = ({ children }: { children: ReactChild }) => {
  const [isRender, setIsRender] = useState<boolean>(false);
  // console.log('index');

  //index의 useEffect 먼저 실행,
  useEffect(() => {
    console.log('index before Render');
    try {
      initSettingBeforeRender();
      addEvent();
      setIsRender(true);
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    try {
      if (isRender) {
        initSettingAfterRender();
        console.log('index after Render');
        console.log(playData);
      }
    } catch (e) {
      console.log(e);
    }
  }, [isRender]);

  return (
    <>
      <IntroLayout id="intro-root">
        {isRender ? (
          <>
            <ProgressRatioBar playId={0} />
            <Title playId={1} />
            <Contents playId={2} />
            <Matrix playId={3} />
            {/* <Background playId={4} /> */}
            {children}
          </>
        ) : (
          <div></div>
        )}
      </IntroLayout>
    </>
  );
};

export default IntroInterAction;
