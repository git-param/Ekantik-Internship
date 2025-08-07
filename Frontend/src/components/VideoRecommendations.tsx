import { useState } from "react";
import { Play, Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const recommendedVideos = [
  {
    id: 1,
    title: "React Hooks Explained",
    duration: "15:32",
    thumbnail: "/placeholder.svg",
    description: "Complete guide to React hooks",
  },
  {
    id: 2,
    title: "Tailwind CSS Tutorial",
    duration: "22:45",
    thumbnail: "/placeholder.svg",
    description: "Master Tailwind CSS in one video",
  },
  {
    id: 3,
    title: "TypeScript Fundamentals",
    duration: "18:20",
    thumbnail: "/placeholder.svg",
    description: "Learn TypeScript from scratch",
  },
  {
    id: 4,
    title: "Vite.js Development",
    duration: "12:15",
    thumbnail: "/placeholder.svg",
    description: "Fast development with Vite",
  },
  {
    id: 5,
    title: "API Integration Guide",
    duration: "25:10",
    thumbnail: "/placeholder.svg",
    description: "Connect your React app to APIs",
  },
];

export default function VideoRecommendations({ onVideoSelect }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredVideos = recommendedVideos.filter((video) =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-lg font-semibold mb-4">Sources</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-3">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="bg-gray-800 rounded-lg p-3 cursor-pointer hover:bg-gray-700 transition-colors"
              onClick={() => onVideoSelect(video)}
            >
              <div className="flex items-start gap-3">
                <div className="w-16 h-12 bg-gray-600 rounded flex items-center justify-center flex-shrink-0">
                  <Play className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-sm line-clamp-2 mb-1">
                    {video.title}
                  </h3>
                  <p className="text-xs text-gray-400 mb-1">{video.duration}</p>
                  <p className="text-xs text-gray-500 line-clamp-2">
                    {video.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredVideos.length === 0 && (
          <div className="text-center py-8">
            <div className="text-gray-500 mb-2">No videos found</div>
            <div className="text-sm text-gray-600">
              Try adjusting your search terms
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
