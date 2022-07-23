import React, { useEffect, useRef, useState } from 'react';
import '../styles/fade.css';

interface FadeRightModel {
  children: React.ReactNode;
  extClass: string;
}

const FadeInRight: React.FC<FadeRightModel> = ({ children, extClass }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { current } = domRef;
    if (!current) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(entry.isIntersecting);
        }
      });
    });
    observer.observe(current);
    // eslint-disable-next-line consistent-return
    return () => observer.unobserve(current);
  }, [domRef]);

  return (
    <div
      className={`${extClass} fade-in-right ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {children}
    </div>
  );
};

export default FadeInRight;
