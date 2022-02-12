/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Slider from 'react-slick';
import { styled } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }: any) => (
  <ArrowBackIosIcon
    {...props}
    className={'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')}
  >
    Previous
  </ArrowBackIosIcon>
);
const SlickArrowRight = ({ currentSlide, slideCount, ...props }: any) => (
  <ArrowForwardIosIcon
    {...props}
    className={
      'slick-next slick-arrow' + (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
    }
  >
    Next
  </ArrowForwardIosIcon>
);

const StyledSlider = styled(Slider)(css`
  margin: 0 4rem;
  & .slick-arrow {
    color: black;

    &:hover {
      color: black;
    }
  }
`);

const settings = {
  dots: true,
  fade: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  focusOnSelect: true,
  autoplay: true,
  autoplaySpeed: 5000,
  prevArrow: <SlickArrowLeft />,
  nextArrow: <SlickArrowRight />,
};

export default function CustomSlider({ children, ...props }: any) {
  return (
    <StyledSlider {...settings} {...props}>
      {children}
    </StyledSlider>
  );
}
