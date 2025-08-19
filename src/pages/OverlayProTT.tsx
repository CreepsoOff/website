import { Button } from '@/components/ui/button';
import { Github, ImageDown, Palette, MoveDiagonal, Download, Globe, Layers, Share2, Filter, Eye, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

export function OverlayProTT() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  useEffect(() => {
    // Trigger entrance animation after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: ImageDown,
      title: "Smart Overlay System",
      description: "Overlay images above or behind tiles with pixel-perfect precision and transparency controls"
    },
    {
      icon: Palette,
      title: "Advanced Color Matching",
      description: "Intelligent color matching to the Wplace palette with customizable tolerance settings"
    },
    {
      icon: MoveDiagonal,
      title: "Flexible Positioning",
      description: "Drag, resize, and reposition overlays with intuitive controls and snap-to-grid functionality"
    }
  ];

  const capabilities = [
    { 
      icon: Layers, 
      title: "Multiple Overlays", 
      description: "Run several overlays simultaneously for complex projects"
    },
    { 
      icon: Share2, 
      title: "Direct Sharing", 
      description: "Share overlays instantly with friends and collaborators"
    },
    { 
      icon: Filter, 
      title: "Smart Color Matching", 
      description: "Automatic alignment with wplace.live color palette"
    },
    { 
      icon: Eye, 
      title: "Dual Display Modes", 
      description: "Switch between full overlay and precise dot mode"
    },
    { 
      icon: Zap, 
      title: "Real-time Processing", 
      description: "Instant overlay updates with zero lag performance"
    },
    { 
      icon: Globe, 
      title: "Universal Compatibility", 
      description: "Works seamlessly across all modern browsers"
    }
  ];

  return (
    <div className="overlay-pro-page">
      {/* Custom styles for this page only */}
      <style>{`
        .overlay-pro-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #0f0f23 0%, #1a1a3e 25%, #2d1b69 50%, #1e1e3f 75%, #0f0f23 100%);
          background-size: 400% 400%;
          animation: gradientShift 15s ease infinite;
          position: relative;
          overflow-x: hidden;
        }

        .overlay-pro-page::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.2) 0%, transparent 50%);
          pointer-events: none;
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fade-in-scale {
          animation: fadeInScale 0.6s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-pulse-hover:hover {
          animation: pulse 0.6s ease-in-out;
        }

        .feature-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(120, 119, 198, 0.2);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(120, 119, 198, 0.1), transparent);
          transition: left 0.5s;
        }

        .feature-card:hover::before {
          left: 100%;
        }

        .feature-card:hover {
          transform: translateY(-8px);
          border-color: rgba(120, 119, 198, 0.4);
          box-shadow: 0 20px 40px rgba(120, 119, 198, 0.2);
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(120, 119, 198, 0.3);
          transition: all 0.3s ease;
          text-align: left;
        }

        .stat-card:hover {
          transform: translateY(-5px);
          border-color: rgba(120, 119, 198, 0.5);
          box-shadow: 0 15px 35px rgba(120, 119, 198, 0.2);
        }

        .download-button {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .download-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s;
        }

        .download-button:hover::before {
          left: 100%;
        }

        .download-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
        }

        .github-link {
          transition: all 0.3s ease;
        }

        .github-link:hover {
          transform: translateX(5px);
          color: #667eea;
        }

        .title-gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-container {
          position: relative;
          z-index: 1;
        }
      `}</style>

      <section className="section-container flex flex-col items-center justify-center p-6 md:p-12 text-center space-y-12">
        {/* Hero Section */}
        <div className={`space-y-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="animate-float">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Globe className="h-16 w-16 text-blue-400 animate-pulse" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold title-gradient mb-4">
              Overlay Pro TT
            </h1>
          </div>
          
          <p className={`max-w-3xl text-xl md:text-2xl text-blue-100 leading-relaxed ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} 
             style={{ animationDelay: '0.2s' }}>
            Transform your <span className="text-blue-300 font-semibold">wplace.live</span> experience with the most advanced overlay system. 
            Achieve pixel-perfect accuracy with intelligent color matching and intuitive controls.
          </p>
        </div>

        {/* Product Capabilities Section */}
        <div className={`max-w-6xl w-full ${isVisible ? 'animate-fade-in-scale' : 'opacity-0'}`}
             style={{ animationDelay: '0.4s' }}>
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Powerful Features for <span className="text-blue-400">wplace.live</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <div key={index} className="stat-card p-6 rounded-xl animate-pulse-hover">
                <capability.icon className="h-10 w-10 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{capability.title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
             style={{ animationDelay: '0.6s' }}>
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card p-8 rounded-2xl text-center cursor-pointer"
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <div className={`transition-transform duration-300 ${hoveredFeature === index ? 'scale-110' : ''}`}>
                <feature.icon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-blue-200 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`space-y-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
             style={{ animationDelay: '0.8s' }}>
          <a
            href="https://github.com/CreepsoOff/Wplace-Overlay-Pro/releases/download/development/overlay-pro-tt.user.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="download-button text-white px-8 py-4 text-lg font-semibold rounded-xl">
              <Download className="mr-2 h-5 w-5" />
              Download Userscript
            </Button>
          </a>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
            <span className="text-blue-300">Compatible with Tampermonkey & Greasemonkey</span>
            <span className="hidden sm:block text-blue-500">•</span>
            <span className="text-blue-300">Works on all modern browsers</span>
          </div>
        </div>

        {/* GitHub Link */}
        <a
          href="https://github.com/CreepsoOff/Wplace-Overlay-Pro/tree/idea/rework"
          target="_blank"
          rel="noopener noreferrer"
          className={`github-link text-blue-300 hover:text-blue-100 flex items-center gap-2 justify-center group ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '1s' }}
        >
          <Github className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
          <span className="border-b border-blue-400 border-opacity-0 group-hover:border-opacity-100 transition-all duration-300">
            View source on GitHub
          </span>
        </a>

        {/* Installation Instructions */}
        <div className={`max-w-2xl w-full mt-12 p-6 rounded-xl bg-black bg-opacity-20 backdrop-blur-sm border border-blue-500 border-opacity-30 ${isVisible ? 'animate-fade-in-scale' : 'opacity-0'}`}
             style={{ animationDelay: '1.2s' }}>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Installation</h3>
          <ol className="text-left text-blue-200 space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5">1</span>
              Install Tampermonkey or Greasemonkey browser extension
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5">2</span>
              Click the download button above to install the userscript
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5">3</span>
              Visit wplace.live and enjoy enhanced overlay capabilities
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}