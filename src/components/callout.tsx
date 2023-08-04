type ActionButton = {
  id: string;
  size: string;
  text: string;
};

type CalloutProps = {
  title: string;
  description: string;
  actionButton: ActionButton;
};
export const Callout = ({ title, description, actionButton }: CalloutProps) => {
  return (
    <>
      <p>{title}</p>
      <p>{description}</p>
      <a href='#'>{actionButton.text}</a>
    </>
  );
};
