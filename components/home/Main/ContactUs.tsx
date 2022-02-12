/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Box, styled } from '@mui/material';
import { ResponsiveLayout, Text } from '../../common';
import ScrollRevealSlideAnimation from '../../common/ScrollRevealSlideAnimation';
import Footer from '../../layouts/HomeLayout/Footer';

type ContactUsProps = {};

const ContactUs: React.FunctionComponent<ContactUsProps> = () => {
  return (
    <Wrapper>
      <ResponsiveLayout css={{ flex: 1, paddingTop: 0, paddingBottom: 0 }}>
        <Content>
          <Text className="title">
            <span>C</span>ontact us
          </Text>
          <Box className="container">
            <ScrollRevealSlideAnimation startPosition={1}>
              <a
                className="link"
                href="https://github.com/EndlessCreation"
                target="_blank"
                rel="noreferrer"
              >
                <Box className="logo github" />
                <Text className="description">Github</Text>
              </a>
            </ScrollRevealSlideAnimation>
            <ScrollRevealSlideAnimation startPosition={2}>
              <a
                className="link"
                href="https://www.instagram.com/endless__creation/"
                target="_blank"
                rel="noreferrer"
              >
                <Box className=" logo instagram" />
                <Text className="description">Instagram</Text>
              </a>
            </ScrollRevealSlideAnimation>
            <ScrollRevealSlideAnimation startPosition={3}>
              <a
                className="link"
                href="http://pf.kakao.com/_eMyib/chat"
                target="_blank"
                rel="noreferrer"
              >
                <Box className="logo kakaoTalk" />
                <Text className="description">KakaoTalk</Text>
              </a>
            </ScrollRevealSlideAnimation>
          </Box>
        </Content>
      </ResponsiveLayout>
      <Footer></Footer>
    </Wrapper>
  );
};

export default ContactUs;

const Wrapper = styled(Box)(css`
  height: calc(var(--vh, 1vh) * 100);

  display: flex;
  flex-direction: column;
`);

const Content = styled(Box)<any>(
  css`
    padding: 0 4rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    & .title {
      font-size: 2.5rem;
      font-weight: bold;
      margin-bottom: 2rem;

      & span {
        color: #0eb371;
      }
    }

    & .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-align: center;
      @media screen and (max-width: 768px) {
        flex-direction: column;
      }

      & .link {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        @media screen and (max-width: 768px) {
          margin-top: 2rem;
        }

        & .logo {
          width: 7rem;
          height: 7rem;
          display: flex;
          @media screen and (max-width: 768px) {
            width: 4.5rem;
            height: 4.5rem;
          }

          &.github {
            background-image: url('https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png');
            background-size: contain;
            background-repeat: no-repeat;
          }
          &.instagram {
            background-size: contain;
            background-repeat: no-repeat;
            background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/264px-Instagram_logo_2016.svg.png');
          }
          &.kakaoTalk {
            background-size: contain;
            background-repeat: no-repeat;
            background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/KakaoTalk_logo.svg/200px-KakaoTalk_logo.svg.png');
          }
        }

        & > .description {
          margin-top: 1rem;
          font-size: 1.6rem;
          color: #000000;
        }
      }
    }
  `,
);
