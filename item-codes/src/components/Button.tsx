import "../App.css";

type ButtonProps = {
  onButtonClick: () => void;
  children: string;
  selected?: string;
  product?: string;
  custom?: string;
};

export const Button = ({
  onButtonClick,
  children,
  selected,
  product,
  custom,
}: ButtonProps) => {
  return (
    <button className="button-61" onClick={() => onButtonClick()}>
      {children}
    </button>
  );
};
