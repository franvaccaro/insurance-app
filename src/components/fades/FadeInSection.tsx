import React, { useEffect, useRef, useState } from 'react';
import '../styles/fade.css';

interface FadeInSectionModel {
  children: React.ReactNode;
  extClass: string,
}

const FadeInSection: React.FC<FadeInSectionModel> = ({ children, extClass }) => {
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
      className={`${extClass} fade-in ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
