'use client'

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

// Define the star type
interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speedX: number;
  speedY: number;
}

export default function Home() {
  const router = useRouter();
  
  // Prefetch the research page
  useEffect(() => {
    router.prefetch('/research');
  }, [router]);
  
  const [activeImage, setActiveImage] = useState(0);
  // Properly type the stars state
  const [stars, setStars] = useState<Star[]>([]);
  const [showProfile, setShowProfile] = useState(false);
  const [showAiesec, setShowAiesec] = useState(false);
  const [showMvp, setShowMvp] = useState(false);
  const profileCardRef = useRef<HTMLDivElement | null>(null);  
  const aiesecCardRef = useRef<HTMLDivElement | null>(null);  
  const mvpCardRef = useRef<HTMLDivElement | null>(null);  

  const images = [
    { src: "/jesser.jpg", alt: "Profile picture" },
    { src: "/aiesec.jpg", alt: "AIESEC logo" },
    { src: "/mvpws.png", alt: "Picture 3" },
    { src: "/curvy.png", alt: "Picture 4" },
  ];

  useEffect(() => {
    // Generate initial stars
    const initialStars: Star[] = Array.from({ length: 100 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.8 + 0.2,
      speedX: (Math.random() - 0.5) * 0.05,
      speedY: (Math.random() - 0.5) * 0.05,
    }));
    
    setStars(initialStars);
    
    // Animation loop for stars
    const animateStars = () => {
      setStars(prevStars => 
        prevStars.map(star => {
          // Update position
          let newX = star.x + star.speedX;
          let newY = star.y + star.speedY;
          
          // Wrap around edges
          if (newX > 100) newX = 0;
          if (newX < 0) newX = 100;
          if (newY > 100) newY = 0;
          if (newY < 0) newY = 100;
          
          return {
            ...star,
            x: newX,
            y: newY,
          };
        })
      );
    };
    
    const animationId = setInterval(animateStars, 50);
    
    // Add click event listener to close cards when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (profileCardRef.current && !profileCardRef.current.contains(event.target as Node) && showProfile) {
        setShowProfile(false);
      }
      if (aiesecCardRef.current && !aiesecCardRef.current.contains(event.target as Node) && showAiesec) {
        setShowAiesec(false);
      }
      if (mvpCardRef.current && !mvpCardRef.current.contains(event.target as Node) && showMvp) {
        setShowMvp(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      clearInterval(animationId);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showProfile, showAiesec, showMvp]);

  const handleImageClick = (index: any) => {
    setActiveImage(index);
    
    // Navigate to research page if the 4th image is clicked
    if (index === 3) {
      // Add a small delay to show the highlight effect before navigation
      const curvyElement = document.querySelector('.curvy-image');
      if (curvyElement) {
        curvyElement.classList.add('scale-105');
      }
      
      // Navigate after a brief delay to show the highlight effect
      setTimeout(() => {
        router.push('/research');
      }, 150);
      return;
    }
    
    // Show appropriate card based on which image is clicked
    if (index === 0) {
      setShowProfile(true);
      setShowAiesec(false);
      setShowMvp(false);
    } else if (index === 1) {
      setShowAiesec(true);
      setShowProfile(false);
      setShowMvp(false);
    } else if (index === 2) {
      setShowMvp(true);
      setShowProfile(false);
      setShowAiesec(false);
    } else {
      setShowProfile(false);
      setShowAiesec(false);
      setShowMvp(false);
    }
  };

  const anyCardOpen = showProfile || showAiesec || showMvp;

  return (
    <div className="flex items-center justify-center h-screen w-screen overflow-hidden font-[family-name:var(--font-geist-sans)] bg-black text-white">
      <div className="relative w-full h-full">
        {/* Curved connecting lines */}
        <svg className={`absolute top-0 left-0 w-full h-full z-10 overflow-visible transition-opacity duration-500 ${anyCardOpen ? 'opacity-30' : 'opacity-100'}`} viewBox="0 0 100 100" preserveAspectRatio="none">
          <path 
            d="M 15 50 C 20 30, 33 30, 38 50" 
            stroke="white" 
            strokeWidth="0.3" 
            strokeDasharray="5,5" 
            fill="none"
          />
          <path 
            d="M 38 50 C 43 30, 57 30, 62 50" 
            stroke="white" 
            strokeWidth="0.3" 
            strokeDasharray="5,5" 
            fill="none"
          />
          <path 
            d="M 62 50 C 67 30, 80 30, 85 50" 
            stroke="white" 
            strokeWidth="0.3" 
            strokeDasharray="5,5" 
            fill="none"
          />
        </svg>
        
        {/* Vertical lines from each image */}
        <svg className={`absolute top-0 left-0 w-full h-full z-10 overflow-visible transition-opacity duration-500 ${anyCardOpen ? 'opacity-30' : 'opacity-100'}`} viewBox="0 0 100 100" preserveAspectRatio="none">
          <path 
            d="M 15 30 L 15 50" 
            stroke="white" 
            strokeWidth="0.3" 
            fill="none"
          />
          <path 
            d="M 38 30 L 38 50" 
            stroke="white" 
            strokeWidth="0.3" 
            fill="none"
          />
          <path 
            d="M 62 30 L 62 50" 
            stroke="white" 
            strokeWidth="0.3" 
            fill="none"
          />
          <path 
            d="M 85 30 L 85 50" 
            stroke="white" 
            strokeWidth="0.3" 
            fill="none"
          />
        </svg>
        
        {/* Image 1 */}
        <div 
          className={`absolute top-1/2 left-[15%] transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full overflow-hidden border-4 ${activeImage === 0 ? 'border-yellow-500 shadow-lg shadow-yellow-300/50' : 'border-yellow-600'} ${!anyCardOpen ? 'cursor-pointer hover:scale-105' : 'cursor-default'} transition-all z-20 ${anyCardOpen ? 'scale-75' : ''}`}
          onClick={() => !anyCardOpen && handleImageClick(0)}
        >
          <Image
            src={images[0].src}
            alt={images[0].alt}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        
        {/* Image 2 */}
        <div 
          className={`absolute top-1/2 left-[38%] transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full overflow-hidden border-4 ${activeImage === 1 ? 'border-blue-500 shadow-lg shadow-blue-300/50' : 'border-blue-700'} ${!anyCardOpen ? 'cursor-pointer hover:scale-105' : 'cursor-default'} transition-all z-20 ${anyCardOpen ? 'scale-75' : ''}`}
          onClick={() => !anyCardOpen && handleImageClick(1)}
        >
          <Image
            src={images[1].src}
            alt={images[1].alt}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        
        {/* Image 3 */}
        <div 
          className={`absolute top-1/2 left-[62%] transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full overflow-hidden border-4 ${activeImage === 2 ? 'border-orange-500 shadow-lg shadow-orange-300/50' : 'border-orange-700'} ${!anyCardOpen ? 'cursor-pointer hover:scale-105' : 'cursor-default'} transition-all z-20 ${anyCardOpen ? 'scale-75' : ''}`}
          onClick={() => !anyCardOpen && handleImageClick(2)}
        >
          <Image
            src={images[2].src}
            alt={images[2].alt}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        
        {/* Image 4 */}
        <div 
          className={`curvy-image absolute top-1/2 left-[85%] transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full overflow-hidden border-4 ${activeImage === 3 ? 'border-purple-500 shadow-lg shadow-purple-300/50' : 'border-purple-700'} ${!anyCardOpen ? 'cursor-pointer hover:scale-105' : 'cursor-default'} transition-all z-20 ${anyCardOpen ? 'scale-75' : ''}`}
          onClick={() => !anyCardOpen && handleImageClick(3)}
        >
          <Image
            src={images[3].src}
            alt={images[3].alt}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        
        {/* Profile Card */}
        {showProfile && (
          <div 
            ref={profileCardRef}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] max-w-[90%] bg-black/80 backdrop-blur-md border border-yellow-500/30 rounded-xl p-8 z-30 animate-fadeIn"
          >
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-yellow-500 flex-shrink-0">
                <Image
                  src={images[0].src}
                  alt={images[0].alt}
                  width={128}
                  height={128}
                  style={{ objectFit: "cover" }}
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold text-white">Jesser Nasri</h1>
                <p className="text-yellow-400">Business Intelligence Student</p>
                <p className="text-yellow-400">Travel Agent</p>
                <p className="text-gray-300 text-sm mt-2">
                  "Life is not measured by the number of breaths we take, but by the moments that take our breath away."
                </p>
              </div>
            </div>
            
            <div className="mt-6 space-y-4">
              <div>
                <h2 className="text-lg font-semibold text-yellow-400 mb-2">About Me</h2>
                <p className="text-gray-300 text-sm">
                  I am a Business Intelligence student and a travel agent specializing in sales. 
                   I enjoy helping people plan great trips while combining my passion for data, travel, and communication. 
                   With experience in both tech and tourism, I thrive in dynamic environments and love working with people from different backgrounds.
                </p>
              </div>
              
              <div>
                <h2 className="text-lg font-semibold text-yellow-400 mb-2">Contact</h2>
                <div className="flex flex-wrap gap-4">
                  <a href="mailto:jesser2622@gmail.com" className="text-white hover:text-yellow-400 transition-colors">
                    jesser2622@gmail.com
                  </a>
                  <a href="tel:+21656561713" className="text-white hover:text-yellow-400 transition-colors">
                    +216 56 56 17 13
                  </a>
                  <a href="https://www.linkedin.com/in/jesser-nasri-22b431296" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition-colors">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* AIESEC Card */}
        {showAiesec && (
          <div 
            ref={aiesecCardRef}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] max-w-[90%] bg-black/80 backdrop-blur-md border border-blue-500/30 rounded-xl p-8 z-30 animate-fadeIn"
          >
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500 flex-shrink-0">
                <Image
                  src={images[1].src}
                  alt={images[1].alt}
                  width={128}
                  height={128}
                  style={{ objectFit: "cover" }}
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold text-white">AIESEC</h1>
                <p className="text-blue-400">Global Youth Leadership Organization</p>
                <p className="text-gray-300 text-sm mt-2">
                  The world's largest youth-run organization developing leadership in young people through cross-cultural exchanges.
                </p>
              </div>
            </div>
            
            <div className="mt-6 space-y-4">
              <div>
                <h2 className="text-lg font-semibold text-blue-400 mb-2">About AIESEC</h2>
                <p className="text-gray-300 text-sm">
                  AIESEC is present in over 120 countries and territories, offering young people the opportunity to develop their leadership potential through international internships and volunteer experiences.
                </p>
              </div>
              
              <div className="mt-6 flex justify-center">
                <a 
                  href="https://aiesec.org" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors inline-flex items-center gap-2"
                >
                  Visit AIESEC Website
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        )}
        
        {/* MVP Workshop Card */}
        {showMvp && (
          <div 
            ref={mvpCardRef}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] max-w-[90%] bg-black/80 backdrop-blur-md border border-orange-500/30 rounded-xl p-8 z-30 animate-fadeIn"
          >
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-orange-500 flex-shrink-0">
                <Image
                  src={images[2].src}
                  alt={images[2].alt}
                  width={128}
                  height={128}
                  style={{ objectFit: "cover" }}
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold text-white">MVPWorkshop</h1>
                <p className="text-orange-400">Blockchain Development Studio</p>
                <p className="text-gray-300 text-sm mt-2">
                  A leading blockchain development company specializing in Web3 solutions and decentralized applications.
                </p>
              </div>
            </div>
            
            <div className="mt-6 space-y-4">
              <div>
                <h2 className="text-lg font-semibold text-orange-400 mb-2">About MVPWorkshop</h2>
                <p className="text-gray-300 text-sm">
                  MVPWorkshop helps businesses leverage blockchain technology to create innovative solutions. With expertise in smart contracts, DeFi, and Web3 development, they build secure and scalable decentralized applications.
                </p>
              </div>
              
              <div className="mt-6 flex justify-center">
                <a 
                  href="https://mvpworkshop.co/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-full transition-colors inline-flex items-center gap-2"
                >
                  Visit MVPWorkshop Website
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        )}
        
        {/* Animated stars in background */}
        <div className="absolute inset-0 overflow-hidden">
          {stars.map((star, i) => (
            <div 
              key={i}
              className="absolute rounded-full"
              style={{
                top: `${star.y}%`,
                left: `${star.x}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: star.opacity,
                backgroundColor: 'white',
                transition: 'top 0.5s linear, left 0.5s linear',
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}


























