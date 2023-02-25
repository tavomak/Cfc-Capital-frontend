import Image from 'next/image';
import Link from 'next/link';

const MorePosts = ({ posts }) => (
  <>
    {posts.map((item) => (
      <div className="col-md-4 pb-5" key={item?.id}>
        <div className="card shadow" style={{ height: '100%' }}>
          <div className="card-header">
            <Link href={`/prensa/${item?.slug}`}>
              <a href="!#" className="noticeImg d-block mb-4">
                <Image
                  src={item?.coverImage?.url}
                  alt="Cfc Capital Logo"
                  width={16}
                  height={9}
                  layout="responsive"
                  objectFit="contain"
                />
              </a>
            </Link>
          </div>
          <div className="card-body d-flex flex-column">
            <p className="display-font">
              {item?.title}
            </p>
            <Link href={`/prensa/${item?.slug}`}>
              <a href={`/prensa/${item?.slug}`} className="btn btn-primary display-font mt-auto">
                Ver más
              </a>
            </Link>
          </div>
        </div>
      </div>
    ))}
  </>
);

export default MorePosts;
