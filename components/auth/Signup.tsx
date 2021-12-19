/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Box, styled } from '@mui/material';
import { Text } from '../common';
import ImageUploading, { ImageType } from 'react-images-uploading';
import { CancelImageIcon, CameraIcon } from '../../public/svgs';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

type SignupProps = {
  image: string;
};

const Signup = ({ image }: SignupProps) => {
  const onChange = (imageList: Array<any>) => {
    if (imageList.length === 0) return;
    const formData = new FormData();
    console.log(imageList[0].file);
    formData.append('files', imageList[0].file);
    console.log(formData);
    // onUploadProfileImage(formData);
  };

  return (
    <Wrapper>
      <Section>
        <Text className="title">가입을 위해 기본적인 정보를 작성해주세요!</Text>

        <UploadImageWrapper>
          <ImageUploading value={[]} onChange={onChange}>
            {({ onImageUpload, isDragging, dragProps }) => (
              <>
                <DragSenser
                  {...dragProps}
                  onClick={onImageUpload}
                  isDragging={isDragging}
                ></DragSenser>
                {image ? (
                  <Box css={imageBox}>
                    <img src={image} alt="" css={currentImage} />
                    <CancelImageIcon css={cancelImage} onClick={() => {}} />
                  </Box>
                ) : (
                  <Box css={imageBox}>
                    <AccountCircleIcon css={currentImage} />
                    <CameraIcon css={cancelImage} onClick={() => {}} />
                  </Box>
                )}
              </>
            )}
          </ImageUploading>
        </UploadImageWrapper>

        {/* <Box>
          <TextField
            size="small"
            fullWidth
            label="이름"
            error={emailError}
            helperText={emailError && '잘못된 이메일 형식입니다.'}
            value={email}
            onChange={handleEmailChange}
            type="email"
            sx={input}
          ></TextField>
        </Box>

        <Box>
          <TextField
            size="small"
            fullWidth
            label="비밀번호"
            value={password}
            onChange={handlePasswordChange}
            type="password"
            sx={input}
          ></TextField>
        </Box> */}
      </Section>
    </Wrapper>
  );
};

export default Signup;

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
  border: 0.5rem solid #ffffff67;

  & .title {
    font-size: 1.1rem;
    font-weight: bold;
  }
`);

const UploadImageWrapper = styled(Box)(css`
  width: fit-content;
  height: fit-content;
`);

const DragSenser = styled(Box)<any>(
  ({ isDragging }) => css`
    margin-top: 5.38rem;
    margin-left: 6.05rem;
    width: 11rem;
    height: 11rem;
    margin-top: 0.125rem;
    margin-left: 0.125rem;
    position: absolute;
    border-radius: 50%;
    cursor: pointer;
    background-color: ${isDragging && 'rgba(0, 0, 0, 0.3)'};
    &:hover {
      background-color: rgba(0, 0, 0, 0.3);
    }
  `,
);

const imageBox = css`
  width: 130px;
  height: 130px;
`;

const currentImage = css`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  color: gray;
`;

const cancelImage = css`
  width: 40px;
  height: 40px;
  position: relative;
  top: -45px;
  left: 85px;
  cursor: pointer;
  z-index: 1000;
`;
