import { useEffect, useRef, useState } from "react";

const Title = ({ children }) => {
  const titleRef = useRef();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsActive(true);
          console.log("observer is intersecting: " + entry.isIntersecting);
          // observer.disconnect();
        } else setIsActive(false); // Optional : reset when it leaves the viewport
      },
      {
        threshold: .1, // Adjust the value is needed
      }
    );

    if (titleRef.current) observer.observe(titleRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
    };
  }, []);

  return (
    <div className="w-fit" ref={titleRef}>
       <h2
        className={`title-underline-border max-w-[400px] ms-5 lg:ms-0 text-4xl font-bold leading-12 wrap-break-word ${
          isActive ? " active" : ""
        }`}
      >
        {children}
      </h2>
    </div>
  );
};
export default Title;
