

import React from "react";
import { Link } from "react-router-dom";

function VideoCard({ video }) {
  return (
    <Link to={`/watch/${video.videoId}`} className="block">
      {/* Thumbnail */}
      <div className="relative w-full pb-[56.25%] bg-gray-100 rounded overflow-hidden group">
        <img
          src={video.thumbnailUrl}
          alt={video.title}
          className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Duration Badge */}
        {video.duration && (
          <span className="absolute bottom-2 right-2 bg-black text-white text-xs sm:text-sm px-1.5 py-0.5 rounded">
            {video.duration}
          </span>
        )}
      </div>

      {/* Video Info */}
      <div className="mt-2 flex gap-2 sm:gap-3">
        {/* Avatar */}
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-300 flex items-center justify-center font-bold text-sm sm:text-base">
          {video.channelName.charAt(0).toUpperCase()}
        </div>

        {/* Text Info */}
        <div className="flex-1">
          <h3 className="font-semibold line-clamp-2 text-sm sm:text-base">{video.title}</h3>
          <p className="text-xs sm:text-sm text-gray-600">{video.channelName}</p>
          <p className="text-xs sm:text-sm text-gray-500">{video.views} views</p>
        </div>
      </div>
    </Link>
  );
}

export default VideoCard;
