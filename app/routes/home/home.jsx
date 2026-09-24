import curalinkTexture from '~/assets/curalink-phone.png';
import kolinkTexture from '~/assets/kolink-chat.png';
import panTexture from '~/assets/pan-admin-dashboard.png';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { Skills } from './skills';
import { Certificates } from './certificates';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Full Stack Developer',
    description: `Portfolio of ${config.name} — a full stack developer building MERN, Next.js, and Angular products with LLM integration and cloud delivery.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const skills = useRef();
  const certificates = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, skills, certificates, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Kolink Chat"
        description="Connect every social platform in one place to publish posts and manage chat, DMs, and comments"
        buttonText="View project"
        buttonLink="https://kolink-chat-landing.vercel.app/"
        model={{
          type: 'laptop',
          alt: 'Kolink Chat workspace for posts, DMs, and comments',
          textures: [
            {
              srcSet: `${kolinkTexture} 1280w`,
              placeholder: kolinkTexture,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="CuraLink AI Research"
        description="Ask a clinical question and CuraLink searches the studies behind every answer"
        buttonText="View project"
        buttonLink="https://curalink-ai-research.vercel.app/"
        model={{
          type: 'phone',
          alt: 'CuraLink AI research session',
          textures: [
            {
              srcSet: `${curalinkTexture} 1280w`,
              placeholder: curalinkTexture,
            },
            {
              srcSet: `${curalinkTexture} 1280w`,
              placeholder: curalinkTexture,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="PAN admin dashboard"
        description="An admin and payments platform built with Next.js, MongoDB, and Stripe"
        buttonText="View project"
        buttonLink="https://admin.panglobal.network"
        model={{
          type: 'laptop',
          alt: 'PAN admin dashboard',
          textures: [
            {
              srcSet: `${panTexture} 1280w`,
              placeholder: panTexture,
            },
          ],
        }}
      />
      <Skills
        id="skills"
        sectionRef={skills}
        visible={visibleSections.includes(skills.current)}
      />
      <Certificates
        id="certificates"
        sectionRef={certificates}
        visible={visibleSections.includes(certificates.current)}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
