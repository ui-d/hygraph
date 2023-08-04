type ActionButton = {
  id: string;
  size: string;
  text: string;
};

type HeroProps = {
  title: string;
  description: string;
  actionButtons: ActionButton[];
};

export const Hero = ({ title, description, actionButtons }: HeroProps) => {
  return (
    <>
      <p>{title}</p>
      <p>{description}</p>
      {actionButtons?.map((actionButton) => (
        <a key={actionButton.id} href='#'>
          {actionButton.text}
        </a>
      ))}
    </>
  );
};
