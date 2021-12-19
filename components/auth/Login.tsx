/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Box, styled } from '@mui/material';
import KakaoLogin from 'react-kakao-login';
import GoogleLogin from 'react-google-login';
import { GoogleIcon, KakaoIcon, LogoWithText } from '../../public/svgs';

const OAuthButton = ({ OauthIcon, title, ...props }: any) => {
  return (
    <Box css={oauthButtonWrapper} {...props}>
      <Box css={oauthIcon}>
        <OauthIcon />
      </Box>
      <Box textAlign="center" flex={1}>
        {title}
      </Box>
    </Box>
  );
};

type LoginPageProps = {};

const Login = ({}: LoginPageProps) => {
  return (
    <Wrapper>
      <Section>
        <LogoWithText css={logo} />
        <Box css={oauthWrapper}>
          <KakaoLogin
            useLoginForm={true}
            token={process.env.NEXT_PUBLIC_KAKAO_KEY!}
            onSuccess={(result) => {
              // onOauth({ mode: 'kakao', access_token: result.response.access_token });
              console.log(result);
            }}
            onFail={(result) => console.log(result)}
            render={(props) => (
              <OAuthButton
                {...props}
                OauthIcon={KakaoIcon}
                title="카카오톡 계정으로 로그인"
                css={{ color: '#000000', background: '#FEE600' }}
              />
            )}
          ></KakaoLogin>
          <GoogleLogin
            clientId={process.env.NEXT_PUBLIC_GOOGLE_KEY!}
            render={(props) => (
              <OAuthButton
                {...props}
                OauthIcon={GoogleIcon}
                title="구글 계정으로 로그인"
                css={{ color: '#000000', background: '#FFFFFF', border: '1px solid #D1D1D1' }}
              />
            )}
            onSuccess={(result) => {
              // onOauth({ mode: 'google', access_token: result.accessToken })
              console.log(result);
            }}
            onFailure={(result) => console.log(result)}
            cookiePolicy={'single_host_origin'}
          />
        </Box>
      </Section>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled(Box)(css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('https://images.unsplash.com/photo-1509909756405-be0199881695?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');
  background-size: cover;
  background-repeat: no-repeat;
`);

const Section = styled(Box)(css`
  width: 100%;
  padding: 3rem;
  max-width: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffffe2;
  border-radius: 3px;
`);

const logo = css`
  width: 18.75rem;
  margin-bottom: 80px;
`;

const oauthWrapper = css`
  width: calc(100% - 50px);
`;

const oauthButtonWrapper = css`
  width: 100%;
  height: 56px;
  padding: 0 20px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  & :hover {
    filter: brightness(0.9);
  }
`;

const oauthIcon = css`
  width: 25px;
  display: flex;
  align-items: center;
`;
