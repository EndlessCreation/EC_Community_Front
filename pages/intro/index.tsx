import React, { useEffect, useState } from 'react';
import IntroLayout from './components/IntroLayout';
import ProgressRatioBar from './components/ProgressRatioBar';
import Title from './components/Title';
import { addEvent } from './source/controller/addEvent';

const Intro = () => {
  const [isRender, setIsRender] = useState<boolean>(false);
  // console.log('index');

  //index의 useEffect 먼저 실행
  useEffect(() => {
    addEvent();
    setIsRender(true);
  }, []);

  return (
    <>
      <IntroLayout>
        {isRender ? (
          <>
            <ProgressRatioBar />
            <div style={{ height: '1000vh' }}></div>
            <Title playId={0} />
          </>
        ) : (
          <div></div>
        )}
      </IntroLayout>
    </>
  );
};

export default Intro;
