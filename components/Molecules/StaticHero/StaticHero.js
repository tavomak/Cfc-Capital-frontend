import Image from 'next/image';

const Hero = ({ image, alt, heroImages }) => (
  <section>
    <div className="content hidden md:block">
      <Image
        src={heroImages ? heroImages?.desktop : `/hero-${image}.jpg`}
        alt={`${alt} | CFC Capital`}
        width={1280}
        height={577}
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
    </div>
    <div className="content md:hidden">
      <Image
        src={heroImages ? heroImages?.mobile : `/m-${image}.jpg`}
        alt={`${alt} | CFC Capital`}
        width={1280}
        height={577}
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
    </div>
  </section>
);

export default Hero;

// const GradientSection = ({
//   title,
//   subtitle,
//   content,
//   children,
//   imageUrl,
//   classFirstCol,
//   classSecondCol,
//   type,
//   componentType,
// }) => (
//   <section
//     className={`py-5 ${type === "circle" ? "bg-gradient-circle" : "bg-secondary-gradient"}`}
//   >
//     <div className="container md:px-4">
//       <div className="row justify-content-around align-items-center text-center text-lg-start">
//         <div className={classFirstCol}>
//           {!componentType ? (
//             <>
//               {title}
//               {subtitle}
//               {content}
//             </>
//           ) : (
//             <>
//               {title && <div dangerouslySetInnerHTML={{ __html: title }} />}
//               {subtitle && (
//                 <div dangerouslySetInnerHTML={{ __html: subtitle }} />
//               )}
//               {content && <div dangerouslySetInnerHTML={{ __html: content }} />}
//             </>
//           )}
//         </div>
//         <div className={classSecondCol}>
//           {children || (
//             <Image
//               src={imageUrl}
//               alt={title}
//               layout="responsive"
//               objectFit="contain"
//               width={800}
//               height={578}
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   </section>
// );
