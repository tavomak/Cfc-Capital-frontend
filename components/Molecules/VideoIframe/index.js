import styles from './styles.module.scss';

const VideoEmbed = ({ url }) => (
  <div className={styles.videoResponsive}>
    <iframe
      width="853"
      height="480"
      src={url}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
      className={styles.videoResponsiveIframe}
    />
  </div>
);

export default VideoEmbed;
