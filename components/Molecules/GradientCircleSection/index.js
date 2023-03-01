import Image from 'next/image';

const GradientCircleSection = ({
  title, subTitle, content, children, imageUrl, classFirstCol, classSecondCol,
}) => (
  <section className="py-5 bg-gradient-circle">
    <div className="container py-5">
      <div className="row justify-content-around align-items-center text-center text-lg-start">
        <div className={classFirstCol}>
          {title && title}
          {subTitle && subTitle}
          {content && content}
        </div>
        <div className={classSecondCol}>
          {children || (
            <Image
              src={imageUrl}
              alt={title}
              layout="responsive"
              objectFit="contain"
              width={120}
              height={87}
            />
          )}
        </div>
      </div>
    </div>
  </section>
);

export default GradientCircleSection;
