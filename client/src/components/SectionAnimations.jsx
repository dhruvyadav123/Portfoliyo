import { useEffect, useRef, useState } from 'react';

function useInViewOnce(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  useEffect(() => {
    const element = ref.current;
    if (!element || visible) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -10% 0px',
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, visible]);

  return { ref, visible };
}

// Tag is rendered as a JSX component; the base ESLint rule cannot detect that usage.
// eslint-disable-next-line no-unused-vars
export function Reveal({ children, className = '', delay = 0, style = {}, as: Tag = 'div' }) {
  const { ref, visible } = useInViewOnce(0.1);

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s cubic-bezier(.22,1,.36,1) ${delay}s`,
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}

export function BookText({
  text,
  className = '',
  delay = 0,
  style = {},
  // eslint-disable-next-line no-unused-vars
  as: Tag = 'p',
}) {
  const { ref, visible } = useInViewOnce(0.2);
  const words = text.split(' ');

  return (
    <Tag ref={ref} className={className} style={style}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          style={{
            display: 'inline-block',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(12px)',
            transition: `opacity 0.5s ease ${delay + index * 0.04}s, transform 0.5s ease ${delay + index * 0.04}s`,
            marginRight: '0.28em',
          }}
        >
          {word}
        </span>
      ))}
    </Tag>
  );
}

export function DripHeading({
  text,
  accent = '',
  className = '',
  delay = 0,
  style = {},
  accentColor = '#eba134',
  baseColor = 'white',
  // eslint-disable-next-line no-unused-vars
  as: Tag = 'h2',
}) {
  const { ref, visible } = useInViewOnce(0.25);
  const combinedText = accent ? `${text} ${accent}` : text;
  const chars = combinedText.split('');
  const splitAt = accent ? text.length + 1 : chars.length + 1;

  return (
    <Tag ref={ref} className={className} style={style}>
      {chars.map((char, index) => (
        <span
          key={`${char}-${index}`}
          style={{
            display: 'inline-block',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0) rotateX(0deg)' : 'translateY(-20px) rotateX(-90deg)',
            transition: `opacity 0.4s ease ${delay + index * 0.03}s, transform 0.5s cubic-bezier(.22,1,.36,1) ${delay + index * 0.03}s`,
            color: index >= splitAt ? accentColor : baseColor,
            whiteSpace: char === ' ' ? 'pre' : 'normal',
          }}
        >
          {char}
        </span>
      ))}
    </Tag>
  );
}
