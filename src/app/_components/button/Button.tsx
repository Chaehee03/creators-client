import styled from "styled-components";
import ButtonProps from "./Button.type";

const Button = ({
  onClick,
  isEnabled = true,
  type = "button",
  width,
  height,
  padding,
  color,
  backgroundColor,
  borderColor,
  children,
  ...props
}: ButtonProps) => {
  return (
    <ButtonContainer
      color={color}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      width={width}
      height={height}
      padding={padding}
      type={type}
      onClick={isEnabled ? onClick : () => {}}
      {...props}
    >
      {children}
    </ButtonContainer>
  );
};

export default Button;

const ButtonContainer = styled.button<
  Pick<
    ButtonProps,
    "width" | "height" | "padding" | "color" | "backgroundColor" | "borderColor"
  >
>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  width: ${({ width }) => (width ? `${width}px` : `30px`)};
  height: ${({ height }) => (height ? `${height}px` : `30px`)};
  padding: ${({ padding }) => (padding ? padding : "0")};
  color: ${({ color }) => (color ? color : "#000000")};
  background: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "#FFFFFF"};
  border: ${({ borderColor }) => (borderColor ? borderColor : "#D9D9D9")};
`;
