const YouTubeEmbed = ({ videoId, title }) => {
  return (
    <div className="iframe-container mx-32 my-12">
      <iframe
        title={title}
        width="800"
        height="500"
        src={`https://www.youtube.com/embed/${videoId}`}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;
