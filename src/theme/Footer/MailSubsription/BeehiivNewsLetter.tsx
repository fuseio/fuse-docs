import React from 'react'
import styles from './styles.module.css'

const BeehiivNewsLetter = () => {
  return (
    <div className={styles.mailChimp}>
      <div className={styles.mailChimp__title}>Subscribe to Newsletter</div>
      <iframe 
        src="https://embeds.beehiiv.com/b585ef59-5562-4611-928d-6ff081772079?slim=true" 
        data-test-id="beehiiv-embed" 
        height="52" 
        style={{margin: 0, borderRadius: 0, backgroundColor: "transparent"}}
      />
    </div>
  )
}

export default BeehiivNewsLetter
