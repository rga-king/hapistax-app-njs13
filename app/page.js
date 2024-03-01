import BaseHomeSection from './lib/components/BaseHomeSection';
import HomeContentWho from './lib/components/HomeContentWho';
import HomeContentWhat from './lib/components/HomeContentWhat';
import HomeContentHow from './lib/components/HomeContentHow';
import styles from './lib/styles/Home.module.css';

export const metadata = {
  title: 'HAPiSTAX',
}


const who = {
  id: 'who',
  heading: 'Who',
}

const what = {
  id: 'what',
  heading: 'What',
}
const how = {
  id: 'how',
  heading: 'How',
}

export default function Home() {
  return (
    <main className={styles.contents}>
      <BaseHomeSection
        id={who.id}
        heading={who.heading}
      >
        <HomeContentWho />
      </BaseHomeSection>
      <BaseHomeSection
        id={what.id}
        heading={what.heading}
      >
        <HomeContentWhat />
      </BaseHomeSection>
      <BaseHomeSection
        id={how.id}
        heading={how.heading}
      >
        <HomeContentHow />
      </BaseHomeSection>
      {/* <BaseHomeSection
        id={what.id}
        heading={what.heading}
        content={what.content}
      /> */}
      {/* <BaseHomeSection
        id={how.id}
        heading={how.heading}
        content={how.content}
      /> */}
    </main>
  )
}