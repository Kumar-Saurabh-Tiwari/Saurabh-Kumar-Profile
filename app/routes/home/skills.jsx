import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Icon } from '~/components/icon';
import { List, ListItem } from '~/components/list';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import styles from './skills.module.css';

const groups = [
  {
    title: 'Frontend',
    detail: 'React.js, Next.js, Angular 18+, TypeScript, PWAs, and Tailwind CSS.',
  },
  {
    title: 'Backend',
    detail: 'Node.js, Express.js, WebSockets, Firebase realtime sync, and REST APIs.',
  },
  {
    title: 'Databases',
    detail: 'MongoDB, MySQL, PostgreSQL, and Firestore.',
  },
  {
    title: 'AI',
    detail: 'LLM pipelines, RAG, OCR, and the tools used to build them.',
    stack: [
      { name: 'OpenAI', icon: 'openai' },
      { name: 'Groq', icon: 'groq' },
      { name: 'Ollama', icon: 'ollama' },
      { name: 'Claude', icon: 'claude' },
      { name: 'Gemini', icon: 'gemini' },
      { name: 'Cursor', icon: 'cursor' },
      { name: 'Copilot', icon: 'copilot' },
      { name: 'Perplexity', icon: 'perplexity' },
    ],
  },
  {
    title: 'Cloud',
    detail: 'AWS, Azure, Docker, GitHub Actions, and Vercel.',
  },
];

const SkillsText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Skills" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Three years shipping production software. The toolkit covers real-time systems, LLM
      interfaces, and cloud delivery — from schema through deployment.
    </Text>
    <List className={styles.list} data-visible={visible}>
      {groups.map(group => (
        <ListItem key={group.title}>
          <Text size="l" as="span">
            {group.title}. {group.detail}
          </Text>
          {group.stack && (
            <ul className={styles.stack}>
              {group.stack.map(item => (
                <li className={styles.stackItem} key={item.name}>
                  <Icon className={styles.stackIcon} icon={item.icon} size={18} />
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          )}
        </ListItem>
      ))}
    </List>
  </Fragment>
);

export const Skills = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.skills}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  Toolkit
                </div>
              </div>
              <SkillsText visible={visible} titleId={titleId} />
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
