import { useEffect, useState } from 'react';

const defaultSlides = [
  'https://images.pexels.com/photos/5926238/pexels-photo-5926238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
];

function Slider() {
  const [slides, setSlides] = useState(defaultSlides);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // SET TIMER PLACE
    return () => {
      // CLEAR TIMER PLACE
    };
  });

  useEffect(() => {
    // DOWNLOAD PLACE
  }, []);

  function prevSlide() {
    if (currentSlide === 0) {
      setCurrentSlide(slides.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  }

  function nextSlide() {
    if (currentSlide === slides.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  }

  return (
    <div className="sliderContainer">
      <img src={slides[currentSlide]} alt="slide" />
    </div>
  );
}

export default Slider;
