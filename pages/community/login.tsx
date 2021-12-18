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

const LoginPage = ({}: LoginPageProps) => {
  return (
    <Box css={loginWrapper}>
      <Box>
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
      </Box>
    </Box>
  );
};

export default LoginPage;

const loginWrapper = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;

  & > .MuiBox-root {
    width: 100%;
    max-width: 50rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const logo = css`
  width: 18.75rem;
  margin-bottom: 80px;
`;

const oauthWrapper = css`
  width: calc(100% - 50px);
`;

const oauthButtonWrapper = css`
  width: calc(100% - 40px);
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
