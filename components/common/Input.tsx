/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { styled, TextField } from '@mui/material';

type InputProps<T = any> = { value: T; onChange: (e?: any) => void; [k: string]: any };
const Input = ({ value, onChange, ...props }: InputProps) => (
  <StyledTextField
    className="input"
    size="small"
    fullWidth
    value={value}
    onChange={onChange}
    {...props}
  />
);

export default Input;

const StyledTextField = styled(TextField)<InputProps>(
  ({ colors }) => css`
    width: 21.875rem;
    height: 2rem;
    margin-bottom: 0.4375rem;
    .MuiInput-root {
      &::before {
        border-bottom: 1px solid ${colors} !important;
      }
      &::after {
        border-bottom: 2px solid ${colors} !important;
      }
    }
    .MuiInputLabel-root {
      font-weight: bold;
      font-size: 1rem;
    }
    .MuiInputLabel-root.Mui-focused {
      color: ${colors};
      font-size: 1rem !important;
    }

    & .MuiOutlinedInput-root {
      &.Mui-focused fieldset {
        border-color: black;
      }
    }
  `,
);
