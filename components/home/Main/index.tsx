/** @jsxImportSource @emotion/react */
import Top from './Top';
import Identity from './Identity';
import Activity from './Activity';
import Introduction from './Introduction';
import ContactUs from './ContactUs';
const fullPage = require('react-full-page');

const mainContents = [
  { title: 'Top', component: <Top /> },
  { title: 'Introduction', component: <Introduction /> },
  { title: 'Identity', component: <Identity /> },
  { title: 'Activity', component: <Activity /> },
  { title: 'ContactUs', component: <ContactUs /> },
];

const Main = () => {
  return (
    <fullPage.FullPage _touchSensitivity={1}>
      {mainContents.map((content, index) => (
        <fullPage.Slide key={index}>{content.component}</fullPage.Slide>
      ))}
    </fullPage.FullPage>
  );
};

export default Main;
