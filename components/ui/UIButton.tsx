const Button = ({
  children,
  className,
  onClick,
}: {
  type?: 'submit' | string;
  children: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent) => void;
}) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
