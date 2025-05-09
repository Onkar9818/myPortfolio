import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [project1Ref.current, project2Ref.current, project3Ref.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);
  return (
    <section id="work" ref={sectionRef} className='app-showcase'>
        <div className='w-full'>
            <div className='showcaselayout'>
                {/* LEFT */}
                <div className='first-project-wrapper' ref={project1Ref}>
                    <div className='image-wrapper'>
                        <img src="/images/clothing2.png" alt="Clothing"/>
                    </div>
                    <div className='text-content'>
                        <h2>
                            Made a User-Friendly Clothing store App 
                        </h2>
                        <p className='text-white-50 md:text-xl'>
                            An app built with a responsive front-end using HTML, CSS, and JavaScript for seamless UX and designed back-end RESTful APIs with Flask to manage product and user data.
                        </p>
                    </div>
                </div>
                {/* RIGHT */}

                <div className='project-list-wrapper overflow-hidden' >
                    <div className='project' ref={project2Ref}>
                        <div className='image-wrapper bg-[#ffefdb]'>
                            <img src="/images/faceapp.png" alt="Face recognition Attendance system"/>
                        </div>
                        <h2>Face recognition Attendance system</h2>
                    </div>
                    <div className='project' ref={project3Ref}>
                        <div className='image-wrapper bg-[#ffe7eb]'>
                            <img src="/images/portfolio.png" alt="portfolio"/>
                        </div>
                        <h2>Currently working on my portfolio</h2>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default ShowcaseSection