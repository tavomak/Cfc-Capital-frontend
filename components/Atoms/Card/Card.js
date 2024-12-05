const Card = ({
  header,
  children,
  footer,
  containerClassName,
  cardClassName,
}) => (
  <article className={`${containerClassName}`}>
    <div
      className={`overflow-hidden rounded-3xl  shadow transition hover:shadow-lg h-full ${cardClassName}`}
    >
      {header}
      {children}
      {footer}
    </div>
  </article>
);

export default Card;
