import React from 'react'
import { Form, redirect, useActionData } from 'react-router-dom'

export default function Contact() {
  const data: any = useActionData()
  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <Form method="post" action="/contact">
        <label>
          <span>Your email adress:</span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Your message:</span>
          <textarea name="message"></textarea>
        </label>
        <button>Submit</button>
        {data && data.error && <p>{data.error}</p>}
      </Form>
    </div>
  )
}

export const contactAction = async ({ request }: any) => {
  const data = await request.formData()
  const submission = {
    email: data.get('email'),
    message: data.get('message'),
  }

  // some RG
  if (submission.message.length < 10)
    return { error: 'Message must be over 10 chars long' }

  // send post request

  // redirect the user
  return redirect('/')
}
