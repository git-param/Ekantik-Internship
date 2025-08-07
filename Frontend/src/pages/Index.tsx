import { useState } from "react";
import VideoRecommendations from "@/components/VideoRecommendations";
import ChatInterface from "@/components/ChatInterface";
import VideoPlayer from "@/components/VideoPlayer";

export default function Index() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [currentQuery, setCurrentQuery] = useState("");
  const [chatMessages, setChatMessages] = useState([]);

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  const handleQuerySubmit = (query) => {
    setCurrentQuery(query);
    // Add user message to chat
    setChatMessages((prev) => [...prev, { type: "user", content: query }]);

    // Simulate AI response with video timestamps
    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          type: "assistant",
          content: `Here are the relevant parts for "${query}":`,
          timestamps: [
            { time: "2:30", description: "Introduction to the topic" },
            { time: "5:45", description: "Main explanation" },
            { time: "8:12", description: "Practical examples" },
          ],
        },
      ]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      {/* Left Panel - Video Recommendations */}
      <div className="w-80 border-r border-gray-700 flex flex-col">
        <VideoRecommendations onVideoSelect={handleVideoSelect} />
      </div>

      {/* Center Panel - Chat Interface */}
      <div className="flex-1 border-r border-gray-700 flex flex-col">
        <ChatInterface
          messages={chatMessages}
          onQuerySubmit={handleQuerySubmit}
        />
      </div>

      {/* Right Panel - Video Player */}
      <div className="w-96 flex flex-col">
        <VideoPlayer
          selectedVideo={selectedVideo}
          currentQuery={currentQuery}
        />
      </div>
    </div>
  );
}
