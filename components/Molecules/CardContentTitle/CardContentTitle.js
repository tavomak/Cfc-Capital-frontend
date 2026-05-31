const CardContentTitle = ({ content }) => {
  const { title, subtitle, description, postDescription } = content;
  return (
    <div className="pe-6 text-left px-4 lg:px-0">
      <h2 className="mb-6 whitespace-pre-line text-2xl font-bold text-medium-purple display-font">
        {title}
      </h2>
      <h3 className="mb-4 whitespace-pre-line text-3xl font-bold leading-tight lg:text-4xl display-font text-medium-purple">
        {subtitle}
      </h3>
      <p className="w-11/12 whitespace-pre-line text-lg font-semibold lg:text-xl text-dark-grey ">
        {description}
      </p>
      {postDescription && (
        <p className="w-11/12 whitespace-pre-line my-4 text-medium-purple">
          {postDescription}
        </p>
      )}
    </div>
  );
};

export default CardContentTitle;
