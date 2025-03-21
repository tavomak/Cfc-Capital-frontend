const CardContentTitle = ({ content, descriptionColor }) => {
  const { title, subtitle, description } = content;
  const descriptionClassName = descriptionColor
    ? 'text-medium-purple'
    : 'text-medium-gray';

  return (
    <div className="px-4 text-left">
      <h2 className="mb-6 text-2xl font-bold text-medium-purple display-font">
        {title}
      </h2>
      <h3 className="mb-4 text-3xl font-bold leading-tight lg:text-4xl display-font text-medium-purple">
        {subtitle}
      </h3>
      <p className={`${descriptionClassName} text-2xl font-semibold`}>
        {description}
      </p>
    </div>
  );
};

export default CardContentTitle;
