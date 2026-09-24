import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { baseMeta } from '~/utils/meta';
import styles from './certificates.module.css';

const certificates = [
  {
    title: 'Full Stack Software Engineering',
    issuer: 'NIIT StackRoute, 2022',
    detail: 'Modern JavaScript, responsive design, and full-stack deployment.',
    image: '/certificates/NIIT-Certificate.png',
  },
  {
    title: 'Meta Front-End Developer',
    issuer: 'Meta',
    detail: 'React, UX, version control, and production front-end workflows.',
    image: '/certificates/Hacker-Rank-React-Developer.png',
  },
  {
    title: 'Generative AI',
    issuer: 'Generative AI',
    detail: 'Applied generative AI for product features and developer workflows.',
    image: '/certificates/Generative-AI.png',
  },
  {
    title: 'Microsoft Azure Essentials',
    issuer: 'Microsoft, AZ-900',
    detail: 'Cloud concepts, Azure services, and security basics.',
    image: '/certificates/Microsoft-Azure.png',
  },
  {
    title: 'AWS Cloud Practitioner',
    issuer: 'Great Learning, 2023',
    detail: 'Cloud fundamentals and AWS core services.',
    image: '/certificates/AWS-Certificate.png',
  },
  {
    title: 'Interview preparation',
    issuer: 'Remasto',
    detail: 'Data structures, system design, and full-stack interview practice.',
    image: '/certificates/interview-prep.png',
  },
];

export const meta = () => {
  return baseMeta({
    title: 'Certificates',
    description:
      'Certificates in full-stack engineering, front-end, cloud, and generative AI.',
  });
};

export const Certificates = () => {
  return (
    <Section className={styles.certificates} as="section">
      <div className={styles.content}>
        <div className={styles.intro}>
          <div className={styles.tag} aria-hidden>
            <Divider notchWidth="64px" notchHeight="8px" />
            <div className={styles.tagText}>Credentials</div>
          </div>
          <Heading className={styles.title} level={3} as="h1">
            <DecoderText text="Certificates" start delay={300} />
          </Heading>
          <Text className={styles.description} size="l" as="p">
            Formal training alongside the production work: full-stack engineering,
            front-end, cloud, and generative AI.
          </Text>
        </div>
        <div className={styles.list}>
          {certificates.map(item => (
            <article className={styles.item} key={item.title}>
              <img
                className={styles.image}
                src={item.image}
                alt={`${item.title} certificate`}
              />
              <Heading className={styles.itemTitle} level={4}>
                {item.title}
              </Heading>
              <Text className={styles.issuer} size="s" as="p">
                {item.issuer}
              </Text>
              <Text size="l" as="p">
                {item.detail}
              </Text>
            </article>
          ))}
        </div>
      </div>
      <Footer className={styles.footer} />
    </Section>
  );
};
