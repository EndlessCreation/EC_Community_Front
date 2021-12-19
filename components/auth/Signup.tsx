/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Box, Button, Checkbox, styled, TextField } from '@mui/material';
import { Text } from '../common';
import ImageUploading, { ImageType } from 'react-images-uploading';
import { CancelImageIcon, CameraIcon } from '../../public/svgs';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import useInput from '../../lib/hooks/useInput';
import Input from '../common/Input';
import { useState } from 'react';

type SignupProps = {
  image: string;
};

const Signup = ({ image }: SignupProps) => {
  const [name, onNameChange] = useInput('');
  const [year, onYearChange] = useInput(null);
  const [isActive, setIsActive] = useState(true);

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
                    <CameraIcon css={cancelImage} onClick={onImageUpload} />
                  </Box>
                )}
              </>
            )}
          </ImageUploading>
        </UploadImageWrapper>

        <InputWrapper>
          <Input value={name} onChange={onNameChange} label="이름" colors="black" />
          <Input value={year} onChange={onYearChange} label="기수" colors="black" type="number" />

          <CheckWrapper>
            <Text>혹시 졸업생이신가요?</Text>
            <Checkbox
              checked={!isActive}
              onChange={(e) => {
                setIsActive(!e.target.checked);
              }}
            />
          </CheckWrapper>
          <Button className="button" variant="contained">
            가입 요청
          </Button>
        </InputWrapper>
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
  background: #ffffffd1;
  backdrop-filter: blur(8px);
  border-radius: 3px;

  & .title {
    font-size: 1.1rem;
    font-weight: bold;
  }
`);

const UploadImageWrapper = styled(Box)(css`
  width: 9.375rem;
  height: 9.375rem;
`);

const DragSenser = styled(Box)<any>(
  ({ isDragging }) => css`
    width: 8rem;
    height: 8rem;
    margin-top: 0.6875rem;
    margin-left: 0.6875rem;
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
  width: 9.375rem;
  height: 9.375rem;
`;

const currentImage = css`
  width: 9.375rem;
  height: 9.375rem;
  border-radius: 50%;
  color: #a0a0a0;
`;

const cancelImage = css`
  width: 2.5rem;
  height: 2.5rem;
  position: relative;
  top: -3rem;
  left: 6rem;
  cursor: pointer;
  z-index: 1000;
`;

const InputWrapper = styled(Box)(css`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;

  & .input + .input {
    margin-top: 2rem;
  }

  & .button {
    font-size: 1.2rem;
    height: 3.5rem;
    margin-top: 3rem;
  }
`);

const CheckWrapper = styled(Box)(css`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  & > p {
    margin-right: 1rem;
  }
`);
