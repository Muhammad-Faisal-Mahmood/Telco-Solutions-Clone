const YouTubeEmbed = ({ videoId, title }) => {
  return (
    <div className="iframe-container">
      <iframe
        title={title}
        width="100%"
        height="400"
        src={`https://www.youtube.com/embed/${videoId}`}
        allowFullScreen
        
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;
