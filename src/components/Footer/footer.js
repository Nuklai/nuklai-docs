import React from 'react'
import Link from '@docusaurus/Link'
import { FaDiscord, FaLinkedin, FaTwitter, FaTelegram } from 'react-icons/fa'
import styles from './footer.module.css'

export default function CustomFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <img src="/img/logo-light.png" alt="Nuklai Logo" />
          </div>
          <p className={styles.description}>
            Nuklai is a layer 1 blockchain infrastructure provider for data
            economies. It brings together the power of community-driven data
            analysis with the datasets of some of the most successful modern
            businesses to empower next-generation AI and LLMs.
          </p>
        </div>
        <div className={styles.links}>
          <div className={styles.contactSection}>
            <h4>Contact</h4>
            <a href="mailto:hello@nuklai.com" className={styles.contactLink}>
              hello@nuklai.com
            </a>
          </div>
          <div className={styles.socialSection}>
            <h4>Social</h4>
            <div className={styles.socialIcons}>
              <Link to="https://discord.com/invite/nuklai" className={styles.socialIcon}>
                <FaDiscord />
              </Link>
              <Link to="https://www.linkedin.com/company/nuklai/" className={styles.socialIcon}>
                <FaLinkedin />
              </Link>
              <Link to="https://twitter.com/NuklaiData" className={styles.socialIcon}>
                <FaTwitter />
              </Link>
              <Link to="https://t.me/NuklaiOfficial" className={styles.socialIcon}>
                <FaTelegram />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        Copyright © {new Date().getFullYear()} Nuklai Protocol
      </div>
    </footer>
  )
}
