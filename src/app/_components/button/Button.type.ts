type ButtonProps = {
  onClick?: () => void;
  isEnabled?: boolean;
  type?: "button" | "submit";
  height?: string;
  width?: string;
  padding?: string;
  color?: string;
  children?: React.ReactNode;
};

export default ButtonProps;
