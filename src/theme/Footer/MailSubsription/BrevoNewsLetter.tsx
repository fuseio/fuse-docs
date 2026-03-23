import React, { useState, FormEvent } from 'react'
import styles from './styles.module.css'

const BREVO_FORM_ACTION =
  'https://a0440f5e.sibforms.com/serve/MUIFADpjKgXCE5DXRQ2xQFcXSjlAPO-jsPRfo0kxYIELQ6LZDGIsplRRAWb-HvYLOhi4oF_fn0dl-FNl5v88jFKFmmM8X2heMtWiC1jBuZYJy3MxBcrMFBxp1NPEHLhVJqrWozekKVafzweKXDXs_GtDsM1EJNRy2rf_R5CmhiFCpJq-_FsGX1Hg3zm3L4BfnZuEcrqDfE-LI8xF'

const BrevoNewsLetter = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error')
      setMessage('Please enter a valid email address.')
      return
    }

    setStatus('loading')

    try {
      const formData = new FormData()
      formData.append('EMAIL', email)
      formData.append('email_address_check', '')
      formData.append('locale', 'en')

      await fetch(BREVO_FORM_ACTION, {
        method: 'POST',
        body: formData,
        mode: "no-cors",
      })

      setStatus('success')
      setMessage('Your subscription has been successful.')
      setEmail('')
    } catch {
      setStatus('error')
      setMessage('Your subscription could not be saved. Please try again.')
    }
  }

  return (
    <div className={styles.mailChimp}>
      <div className={styles.mailChimp__title}>Subscribe to Newsletter</div>
      <form onSubmit={handleSubmit} className={styles.mailChimp__form}>
        <input
          className={styles.mailChimp__form__input}
          type="email"
          name="EMAIL"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            if (status !== 'idle' && status !== 'loading') {
              setStatus('idle')
            }
          }}
          placeholder="Enter Your Email"
          required
        />
        <button
          className={styles.mailChimp__form__submit}
          type="submit"
          disabled={status === 'loading'}
          aria-label="Subscribe"
        >
          {status === 'loading' ? (
            'Sending...'
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="#FFFFFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </form>
      {/* Honeypot field for spam protection */}
      <input type="text" name="email_address_check" value="" style={{ display: 'none' }} readOnly />
      {status === 'success' && (
        <div className={styles.mailChimp__form__status}>{message}</div>
      )}
      {status === 'error' && (
        <div className={styles.mailChimp__form__error}>{message}</div>
      )}
    </div>
  )
}

export default BrevoNewsLetter
