type ButtonProps = {
  onClick?: () => void;
  isEnabled?: boolean;
  type?: "button" | "submit";
  height?: string;
  width?: string;
  padding?: string;
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
  children?: React.ReactNode;
};

export default ButtonProps;
