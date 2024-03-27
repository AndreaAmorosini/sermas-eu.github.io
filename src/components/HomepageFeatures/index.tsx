import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  path: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'XR',
    path: require('@site/static/img/xr.png').default,
    description: (
      <>
        Extended Reality (XR) is an umbrella term used to describe all immersive technologies that blend
        the physical and digital worlds, including augmented reality (AR), virtual reality (VR)
        and mixed reality (MR).
      </>
    ),
  },
  {
    title: 'SERMAS TOOLKIT',
    path: require('@site/static/img/sermas-toolkit.png').default,
    description: (
      <>
        The SERMAS Toolkit is a comprehensive set of formal and systematic methods and tools to help
        innovators model, develop, analyse, test, and user-study socially acceptable XR Systems.
      </>
    ),
  },
  {
    title: 'SERMAS XR AGENT',
    path: require('@site/static/img/sermas-xr-agent.png').default,
    description: (
      <>
        The SERMAS XR Agent is software that acts on a user's or other systems' behalf.
      </>
    ),
  },
];

function Feature({ title, path, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={path} alt={title} role='img' />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
