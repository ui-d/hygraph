type HeroProps = {
  title: string;
};

export const Hero = ({ title }: HeroProps) => {
  return <p>{title}</p>;
};
