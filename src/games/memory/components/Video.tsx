import { FC } from "react";

const Video: FC<{ hide: boolean }> = ({ hide }) => {
  return (
    <div className="flex flex-col">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/eSJbukpiNIk"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className={hide ? "opacity-0 h-0" : ""}
      ></iframe>
    </div>
  );
};

export default Video;
