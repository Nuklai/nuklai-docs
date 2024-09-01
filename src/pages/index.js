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
      title: 'Build on Nuklai',
      icon: CodeBracketIcon,
      to: '/docs/category/sdk',
    },
    {
      title: 'Developer Resources (Articles)',
      icon: CodeBracketIcon,
      to: '/blog',
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

function Feature({ title, description, icon: Icon }) {
  return (
    <div className={styles.featureCard}>
      <Icon className={styles.featureIcon} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

function DeveloperResources() {
  const resources = [
    {
      title: "Nuklai and Filecoin Foundation Collaborate to Archive the World's Data",
      icon: ArrowTrendingUpIcon,
      description: 'TLDR: Nuklai and Filecoin Foundation collaborate to archive global data, empowering AI with contextual data understanding...',
      url: 'https://example.com/nuklai-filecoin-collaboration',
    },
    {
      title: 'Smart Data City Roadmap: Vision for 2024/25',
      icon: ArrowTrendingUpIcon,
      description: 'The Smart Data Layer 1 foundation enhances data governance and security for collaboration while empowering developers to create innovative projects on top of the Nuklai netw...',
      url: 'https://example.com/smart-data-city-roadmap',
    },
    {
      title: 'Nuklai Bitcoin Campaign, Rate Web3 Projects and Testnet',
      icon: ArrowTrendingUpIcon,
      description: 'With almost 3000 contributions, the first phase of the Nuklai Bitcoin Research Campaign has come to a close. Now participants can antici...',
      url: 'https://example.com/nuklai-bitcoin-campaign',
    },
    {
      title: 'Submit, Exchange, and Collaborate Using World Class Data',
      icon: ArrowTrendingUpIcon,
      description: 'Our collaborative data marketplace and data-sharing infrastructure is set to unify the world of data, offering unparalleled opport...',
      url: 'https://example.com/collaborate-world-class-data',
    },
    {
      title: 'Submit, Exchange, and Collaborate Using World Class Data',
      icon: ArrowTrendingUpIcon,
      description: 'Our collaborative data marketplace and data-sharing infrastructure is set to unify the world of data, offering unparalleled opport...',
      url: 'https://example.com/collaborate-world-class-data',
    },
    {
      title: 'Submit, Exchange, and Collaborate Using World Class Data',
      icon: ArrowTrendingUpIcon,
      description: 'Our collaborative data marketplace and data-sharing infrastructure is set to unify the world of data, offering unparalleled opport...',
      url: 'https://example.com/collaborate-world-class-data',
    },
  ]

  return (
    <section className={styles.developerResources}>
      <h2 className={styles.sectionTitle}>Developer Resources</h2>
      <p className={styles.sectionSubtitle}>For developers who are looking to build highly scalable applications</p>
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
        <DeveloperResources />
      </main>
      <CustomFooter />
    </Layout>
  )
}
