const CardContentTitle = ({ content }) => {
  const { title, subtitle, description, postDescription } = content;
  return (
    <div className="px-4 text-left">
      <h2 className="mb-6 text-2xl font-bold text-medium-purple display-font">
        {title}
      </h2>
      <h3 className="mb-4 text-3xl font-bold leading-tight lg:text-4xl display-font text-medium-purple">
        {subtitle}
      </h3>
      <p className="w-11/12 text-lg font-semibold lg:text-xl text-dark-grey ">
        {description}
      </p>
      {postDescription && (
        <p className="w-11/12 mt-4 text-medium-purple">{postDescription}</p>
      )}
    </div>
  );
};

export default CardContentTitle;
