import React from 'react'
import LinkItem from '@theme/Footer/LinkItem'
import styles from './styles.module.css'
import BeehiivNewsLetter from '../../MailSubsription/BeehiivNewsLetter'

function ColumnLinkItem({ item }) {
  return item.html ? (
    <li
      className={styles.footer__item}
      // Developer provided the HTML, so assume it's safe.
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: item.html }}
    />
  ) : (
    <li key={item.href ?? item.to} className={styles.footer__item}>
      <LinkItem item={item} />
    </li>
  )
}
function Column({ column }) {
  return (
    <div className={styles.footerColumn}>
      <div className='footer__title'>{column.title}</div>
      <ul className='footer__items clean-list'>
        {column.items.map((item, i) => (
          <ColumnLinkItem key={i} item={item} />
        ))}
      </ul>
    </div>
  )
}
export default function FooterLinksMultiColumn({ columns }) {
  return (
    <div className={styles.footer__links}>
      {columns.map((column, i) => (
        <Column key={i} column={column} />
      ))}
      {/* Subscribe */}
      <BeehiivNewsLetter />
    </div>
  )
}

const SubscribeComp = () => {
  return (
    <div className={styles.container}>
      <h3>Subscribe to our newsletter</h3>
      <p>Join text Join ... </p>
      <div className={styles.input_container}>
        <input type='text' placeholder='Enter Your Email' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}
