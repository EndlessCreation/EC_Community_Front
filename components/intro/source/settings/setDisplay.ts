//디스플레이 크기, 종류 관련 설정 여기에

import playData from '../utils/playData';

export default function setDisplay() {
    
    const { displayData } = playData;
    const UserAgent = navigator.userAgent;

    if (
      UserAgent.match(
        /iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/
      ) != null ||
      UserAgent.match(/LG|SAMSUNG|Samsung/) != null
    ) {
      displayData.type = "mobile"
    } else {
      displayData.type = "web";
    
    }
    displayData.innerWidth = window.innerWidth;
    displayData.innerHeight = window.innerHeight;  

}