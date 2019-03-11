import React, { useState } from 'react'
import Head from 'next/head'
import '../styles/index.css'
import axios from 'axios'

const Index = () => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const onSubmit = e => {
    e.preventDefault()

    setLoading(true)

    const url = e.target.action
    axios(url, {
      MERGE0: email,
      u: '883f0f3764fd0eae45407ac87',
      id: '74b403ab81',
    })
      .then(console.log)
      .catch(console.error)
      .finally(() => setLoading(false))
  }

  return (
    <div className="w-full max-h-full flex flex-col md:flex-row items-center justify-center font-sans">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <section className="flex-shrink flex-no-grow">
        <img
          src="/static/PHONE.png"
          className=""
          style={{ marginLeft: 25, maxWidth: '100%', width: '350px' }}
        />
      </section>
      <section className="max-w-full md:mx-10 px-4">
        <h1 className="text-pink-400 text-4xl mb-3 font-bold">SayThanks</h1>
        <p className="text-2xl font-light text-grey-500">
          Seamless micropayments for content
        </p>

        <form
          className="my-12"
          method="POST"
          action="https://saythanks.us20.list-manage.com/subscribe/post"
        >
          <label
            htmlFor="email"
            className="uppercase tracking-wide font-bold text-xs text-grey-400"
          >
            Find out when we launch
          </label>
          <input type="hidden" name="u" value="883f0f3764fd0eae45407ac87" />
          <input type="hidden" name="id" value="74b403ab81" />
          <div className="flex flex-col md:flex-row items-start md:items-center max-w-full">
            <input
              type="email"
              required
              className="py-2 pl-4 pr-10 text-xl shadow rounded-full 
                          focus:outline-none focus:shadow-outline
                          appearance-none flex-1 md:flex-0 w-full
                          inline-block max-w-full mt-4 sm:m-0"
              // style={{ width: '300px' }}
              autoCapitalize="off"
              autoCorrect="off"
              placeholder="Your email"
              name="MERGE0"
              id="MERGE0"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <button
              className="hover-button inline-block md:-ml-8 bg-pink-500 text-sm
                         text-white px-4 py-4 rounded-full shadow-lg 
                         font-medium uppercase tracking-wide focus:outline-none
                         mt-4 md:m-0 w-full md:w-auto"
              style={{
                transition: 'all .15s',
              }}
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Get Updates'}
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default Index
