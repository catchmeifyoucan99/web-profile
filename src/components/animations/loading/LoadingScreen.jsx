import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 1;
        if (newProgress === 100) {
          clearInterval(interval);
          navigate('/rainpaul');
        }
        return newProgress;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="w-full h-screen bg-[#f1f1f1] m-0 flex items-center justify-center">
      <div className="w-max h-max">
        <div className="flex justify-between">
          <div className="flex font-gilroy font-bold">
            Loading
            <p>...</p>
          </div>
          <div className="flex font-gilroy font-bold">
            <p>{progress}%</p>
          </div>
        </div>
        <div className="w-[400px] h-[40px] bg-transparent border-2 p-1.5 border-black flex items-center">
          <span
            className="w-full h-full bg-black"
            style={{ width: `${progress}%` }}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
