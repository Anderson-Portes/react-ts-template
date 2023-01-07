interface IconProps {
  name: string;
  marginEnd: number | undefined;
};

const Icon = ({ name, marginEnd } : IconProps) : JSX.Element => {
  return (
    <i className={'bi bi-'+name+(marginEnd && ' me-'+marginEnd)}></i>
  );
};

export default Icon;