export const Projects = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <h3 className="text-3xl md:text-4xl font-bold text-color-text-main">Projects</h3>
      <div className="flex flex-col gap-8 w-full max-w-2xl">
        {/* The Room Project */}
        <div className="flex items-center gap-6 p-6 rounded-lg border-2 border-color-border transition-all duration-300 shadow-lg">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-color-accent-secondary flex-shrink-0">
            <img src="/theroomlogo.png" alt="The Room project" className="w-full h-full object-cover bg-black" />
          </div>
          <div className="flex-grow">
            <a href="https://room-for-everything.vercel.app/" target="_blank">
              <p className="text-lg font-semibold text-color-text-main underline decoration-color-accent-secondary underline-offset-4 hover:decoration-2 hover:translate-x-1 hover:-translate-y-1 transition-all duration-500">
                The Room <span className="text-color-accent-secondary">🡥</span>
              </p>
            </a>
            <p className="text-color-text-secondary mt-1">A Second brain app</p>
          </div>
          <div className="flex-shrink-0">
            <a 
              href="https://github.com/sanesomehow/room-for-everything/" 
              target="_blank" 
              className="p-2 rounded-full transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 text-color-accent-secondary hover:text-color-accent-primary hover:scale-150 transition-all duration-300"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>

        {/* WordWise Project */}
        <div className="flex items-center gap-6 p-6 rounded-lg border-2 border-color-border transition-all duration-300 shadow-lg">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-color-accent-secondary flex-shrink-0">
            <img src="/wordwiselogo.png" alt="WordWise project" className="w-full h-full object-cover bg-black" />
          </div>
          <div className="flex-grow">
            <a href="https://wordwise-nu.vercel.app/" target="_blank">
              <p className="text-lg font-semibold text-color-text-main underline decoration-color-accent-secondary underline-offset-4 hover:decoration-2 hover:translate-x-1 hover:-translate-y-1 transition-all duration-500">
                WordWise <span className="text-color-accent-secondary">🡥</span>
              </p>
            </a>
            <p className="text-color-text-secondary mt-1">Text, Voice & OCR-Based Word Lookup</p>
          </div>
          <div className="flex-shrink-0">
            <a 
              href="https://github.com/Sanesomehow/wordwise-APK" 
              target="_blank" 
              className="p-2 rounded-full transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 text-color-accent-secondary hover:text-color-accent-primary hover:scale-150 transition-all duration-300"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
