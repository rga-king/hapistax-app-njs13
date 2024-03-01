import BaseHeader from './lib/components/BaseHeader2';
import './lib/styles/globals.css';
import site_styles from './lib/styles/Site.module.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={site_styles.wrapper}>
          <BaseHeader/>
          {children}
        </div>
      </body>
    </html>
  )
}