import React from "react";
import { Download } from "lucide-react";

export default function Projects() {
  return (
    <section className="px-6 md:px-20 py-12 bg-gradient-to-br from-blue-50 via-white to-blue-50 min-h-screen">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-800">
        Featured Projects
      </h2>

      <div className="max-w-6xl mx-auto">
        {/* Project Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col space-y-6">
          {/* Videos Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <iframe
              className="rounded-xl w-full aspect-video"
              src="https://www.youtube.com/embed/EaLbtOWtDYk"
              title="Blaster Video 1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            <iframe
              className="rounded-xl w-full aspect-video"
              src="https://www.youtube.com/embed/a7JzDJCGCb0"
              title="Blaster Video 2"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            <iframe
              className="rounded-xl w-full aspect-video"
              src="https://www.youtube.com/embed/ZLY-ZU9wn3c"
              title="Blaster Video 3"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Text & Download */}
          <div>
            <h3 className="text-2xl font-semibold text-blue-900 mb-2">Blaster</h3>
            <p className="text-gray-700 mb-6">
              Blaster is a futuristic action game that delivers nonstop adrenaline and 
              heart-pounding excitement. Players are thrown into visually striking sci-fi 
              battlefields where every encounter demands quick reflexes and sharp strategy. 
              Armed with advanced weapons and explosive abilities, you’ll face relentless 
              enemies across neon-lit stations, alien worlds, and dangerous arenas. 
              Each level offers cinematic intensity, blending smooth controls, 
              immersive sound, and dynamic environments that heighten the thrill of combat. 
              Whether you’re unleashing devastating attacks, dodging enemy fire, 
              or planning tactical strikes, Blaster ensures no two battles feel the same. 
              With endless replayability, it keeps you engaged and coming back for more.
            </p>
            <a
              href="https://drive.usercontent.google.com/download?id=1vazQg0P8voDWU9Lx2CHSYhVvNoEcVTRS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600 text-white font-medium shadow-md hover:bg-blue-700 transition"
            >
              <Download className="w-5 h-5 mr-2" /> Download
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
