const Content = ({ content }) => {
  const { title, subtitle, description } = content;
  return (
    <div className="px-4 text-left">
      <h2 className="mb-6 text-2xl font-bold text-purple display-font">
        {title}
      </h2>
      <h3 className="lg:text-[38px] leading-tight text-3xl font-bold display-font text-purple mb-4">
        {subtitle}
      </h3>
      <p className="text-2xl font-semibold lg:text-2xl text-dark-grey">
        {description}
      </p>
    </div>
  );
};

export default Content;
