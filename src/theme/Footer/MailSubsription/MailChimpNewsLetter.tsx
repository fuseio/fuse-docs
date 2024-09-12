import MailchimpSubscribe from 'react-mailchimp-subscribe'
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { object, string } from 'yup'
import styles from './styles.module.css'

const SignupSchema = object().shape({
  email: string().email('Invalid email').required('Required'),
})

const CustomForm = ({ status, message, onValidated }) => {
  function submit(email) {
    onValidated({
      EMAIL: email,
    })
  }
  setTimeout(() => {
    status = ''
  }, 1000)

  return (
    <div className={styles.mailChimp}>
      <div className={styles.mailChimp__title}>Subscribe to Newsletter</div>
      {/* <div className={styles.mailChimp__description}>Description Sample</div> */}
      <Formik
        initialValues={{ email: '' }}
        validationSchema={SignupSchema}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={(v, { resetForm }) => {
          submit(v.email)
          resetForm({ values: { email: '' } })
          // combinedAnalyticsClickHandler(
          //   'news_letter_subscription',
          //   'Newsletter Subscribe',
          //   ''
          // )
        }}
      >
        {({ isSubmitting, dirty }) => (
          <Form className={styles.mailChimp__form}>
            {status === 'sending' && (
              <div className={styles.mailChimp__form__status}>sending...</div>
            )}

            {status === 'success' && (
              <div className={styles.mailChimp__form__status}>{message}</div>
            )}

            {status === 'error' && (
              <div className={styles.mailChimp__form__error}>{message}</div>
            )}
            <ErrorMessage name='email'>
              {(msg) => (
                <div className={styles.mailChimp__form__error}>{msg}</div>
              )}
            </ErrorMessage>

            <Field
              className={styles.mailChimp__form__input}
              name='email'
              placeholder='Enter your email'
            />
            <br />
            <button
              disabled={!dirty || isSubmitting}
              className={styles.mailChimp__form__submit}
              type='submit'
              value={message}
            >
              Subscribe
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

const MailChimpNewsLetter = () => {
  return (
    <>
      <MailchimpSubscribe
        url={
          '//fuse.us10.list-manage.com/subscribe/post?u=32f2983d12ae44ce73e66f86c&amp;id=358e4085be'
        }
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </>
  )
}

export default MailChimpNewsLetter
