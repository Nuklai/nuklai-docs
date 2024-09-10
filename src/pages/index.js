import React from 'react'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import {
  HomeIcon,
  BoltIcon,
  CodeBracketIcon,
  DocumentTextIcon,
  ArrowTrendingUpIcon,
  PuzzlePieceIcon,
  DocumentDuplicateIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline'
import CustomFooter from "../components/Footer/footer"
import styles from './index.module.css'

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className={styles.newBadge}>
        <a
          href="https://wallet.nuklaivm.com/"
          style={{ color: 'white' }}
          target="_blank"
        >
          {' '}
          <span>New</span> Announcing our Nuklai Wallet{' '}
        </a>
      </div>
      <h1 className={styles.title}>Nuklai Protocol</h1>
      <p className={styles.subtitle}>
        Building lightning-fast VMs & on-chain dApps, empowering next-gen
        blockchain developers and AI Data scientists.
      </p>
    </header>
  )
}

function MainLinks() {
  const links = [
    {
      title: 'Getting Started',
      icon: HomeIcon,
      to: '/docs/intro',
    },
    {
      title: 'Nuklai Data Marketplace',
      icon: BoltIcon,
      to: '/docs/category/navigating-the-marketplace',
    },
    {
      title: 'Building on Nuklai',
      icon: CodeBracketIcon,
      to: '/docs/category/developer-sdks',
    },
    {
      title: 'Developer Resources (Tutorials)',
      icon: CodeBracketIcon,
      to: '/docs/sdk/nuklai-sdk/examples',
    },
  ]

  return (
    <div className={styles.mainLinks}>
      {links.map((link, idx) => (
        <Link key={idx} to={link.to} className={styles.mainLink}>
          <link.icon className={styles.linkIcon} />
          {link.title}
          <span className={styles.chevron}>›</span>
        </Link>
      ))}
    </div>
  )
}

// Coming back to this
// function Feature({ title, description, icon: Icon }) {
//   return (
//     <div className={styles.featureCard}>
//       <Icon className={styles.featureIcon} />
//       <h3>{title}</h3>
//       <p>{description}</p>
//     </div>
//   )
// }

function BlogPosts() {
  const resources = [
    {
      title: "Nuklai and Filecoin Foundation Collaborate to Archive the World's Data",
      icon: ArrowTrendingUpIcon,
      description: 'TLDR: Nuklai and Filecoin Foundation collaborate to archive global data, empowering AI with contextual data understanding...',
      url: 'https://www.nukl.ai/blog/nuklai-and-filecoin-foundation-collaborate-to-archive-the-worlds-data',
    },
    {
      title: 'Smart Data City Roadmap: Vision for 2024/25',
      icon: ArrowTrendingUpIcon,
      description: 'The Smart Data Layer 1 foundation enhances data governance and security for collaboration while empowering developers to create innovative projects on top of the Nuklai netw...',
      url: 'https://www.nukl.ai/blog/smart-data-city-roadmap',
    },
    {
      title: 'Nuklai Bitcoin Campaign, Rate Web3 Projects and Testnet',
      icon: ArrowTrendingUpIcon,
      description: 'With almost 3000 contributions, the first phase of the Nuklai Bitcoin Research Campaign has come to a close. Now participants can antici...',
      url: 'https://www.nukl.ai/blog/development-update-april',
    },
    {
      title: 'Submit, Exchange, and Collaborate Using World Class Data',
      icon: ArrowTrendingUpIcon,
      description: 'Our collaborative data marketplace and data-sharing infrastructure is set to unify the world of data, offering unparalleled opport...',
      url: 'https://www.nukl.ai/blog/nuklai-beta-is-here-submit-exchange-and-collaborate-using-world-class-data',
    },
    {
      title: 'Submit, Exchange, and Collaborate Using World Class Data',
      icon: ArrowTrendingUpIcon,
      description: 'We’re beyond humbled by the record-breaking sale of the NAI token and the faith of our community in the future of blockchain-based data economies. You can learn about the remaining funding round for NAI here.',
      url: 'https://www.nukl.ai/blog/calling-developers-join-nuklais-upcoming-bug-bounty-program',
    },
    {
      title: 'AllianceBlock Partners With Crunchbase To Bring Powerful Business Data To DeFi For The First Time',
      icon: ArrowTrendingUpIcon,
      description: 'Our collaborative data marketplace and data-sharing infrastructure is set to unify the world of data, offering unparalleled opport...',
      url: 'https://www.nukl.ai/blog/alliance-block-partners-with-crunchbase-to-bring-powerful-business-data-to-de-fi-for-the-first-time',
    },
  ]

  return (
    <section className={styles.developerResources}>
      <h2 className={styles.sectionTitle}>Blog Posts</h2>
      <p className={styles.sectionSubtitle}>Get up to speed with our latest updates form the Nuklai Marketplace & the NuklaiVM.</p>
      <div className={styles.resourceGrid}>
        {resources.map((resource, idx) => (
          <a key={idx} href={resource.url} className={styles.resourceCard} target="_blank" rel="noopener noreferrer">
            <resource.icon className={styles.resourceIcon} />
            <h3>{resource.title}</h3>
            <p>{resource.description}</p>
          </a>
        ))}
      </div>
    </section>
  )
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <main className={styles.main}>
        <HomepageHeader />
        <MainLinks />
        <BlogPosts />
      </main>
      <CustomFooter />
    </Layout>
  )
}
