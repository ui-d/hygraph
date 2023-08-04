type FeatureActionButton = {
  id: string;
  size: string;
  text: string;
};

type FeatureSectionProps = {
  label?: string;
  title: string;
  description: string;
  featureActionButton: FeatureActionButton;
};

export const FeatureSection = ({
  title,
  description,
  featureActionButton,
}: FeatureSectionProps) => {
  return (
    <>
      <p>{title}</p>
      <p>{description}</p>
      <a href='#'>{featureActionButton.text}</a>
    </>
  );
};
