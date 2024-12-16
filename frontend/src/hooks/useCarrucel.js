import { useState, useRef, useEffect, useCallback } from 'react';

const useCarrucel = (totalImages, autoScroll = true, intervalTime = 3000) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };

  const scrollRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const scrollUp = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  }, [totalImages]);

  const scrollDown = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  }, [totalImages]);

  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    let interval;
    if (autoScroll && !isPaused) {
      interval = setInterval(() => {
        scrollRight();
      }, intervalTime);
    }
    return () => clearInterval(interval);
  }, [autoScroll, intervalTime, isPaused, scrollRight]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return {
    currentIndex,
    sliderRef,
    scrollLeft,
    scrollRight,
    scrollUp,
    scrollDown,
    goToIndex,
    handleMouseEnter,
    handleMouseLeave,
  };
};

export { useCarrucel };

