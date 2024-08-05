function VideoComponent() {
  return (
    <div>
      <h2>Видео про лес</h2>
      <iframe
        width="560"
        height="315"
        src="https://pixabay.com/ru/videos/%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D1%8C%D1%8F-%D0%BB%D0%B5%D1%81-%D0%BE%D1%81%D0%B5%D0%BD%D1%8C-%D0%B6%D0%B8%D0%B2%D0%BE%D0%BF%D0%B8%D1%81%D0%BD%D1%8B%D0%B9-4k-185726/"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoComponent;
