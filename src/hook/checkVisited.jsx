import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function useCheckFirstVisit(delay) {
  const navigate = useNavigate();

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');

    const timer = setTimeout(() => {
      if (!hasVisited) {
        localStorage.setItem('hasVisited', 'true');
        navigate('/loading');
      } else {
        navigate('/rainpaul');
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [navigate, delay]);
}

export default useCheckFirstVisit;
