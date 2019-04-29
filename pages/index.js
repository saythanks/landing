import React, { useState } from 'react'
import Head from 'next/head'
import '../styles/index.css'
import Trend from 'react-trend'

const Index = () => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  return (
    <div className="min-h-full font-sans">
      <div className="w-full max-h-full flex flex-col md:flex-row items-center justify-center font-sans py-16">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <link rel="stylesheet" href="https://use.typekit.net/xzl5vod.css" />
          <title> SayThanks — A Beautiful Way to Support Content Creators </title>
          <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
            integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
            crossorigin="anonymous"
          />
        </Head>
        <section className="flex-shrink flex-no-grow">
          <img
            src="/static/PHONE.png"
            className=""
            style={{ marginLeft: 25, maxWidth: '100%', width: '250px' }}
          />
        </section>
        <section className="max-w-full md:mx-10 px-4">
          <h1 className="text-pink-400 text-5xl mb-3 font-bold mb-10">
            SayThanks
          </h1>
          <p className="text-3xl font-light text-grey-500 mb-2 ">
            Make money doing what you love
          </p>
          <p className="text-3xl font-medium text-grey-900 mb-4 ">
            Thanks to the people who love what you do
          </p>

          <form
            className="my-12"
            method="POST"
            action="https://saythanks.us20.list-manage.com/subscribe/post"
          >
            <label
              htmlFor="email"
              className="uppercase tracking-wide font-bold text-xs text-grey-400 mb-1 block"
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
                {loading ? 'Loading...' : 'Get Early Access'}
              </button>
            </div>
          </form>
        </section>
      </div>
      <section className="container flex mx-auto pb-32">
        <div className="w-1/3 px-6 ">
          <div className="bg-white shadow-lg rounded bg-white p-6">
            <div
              className="flex items-center justify-center bg-orange text-orange-lightest inline-block
                            rounded-full w-12 h-12 text-lg -mt-12 shadow-lg"
            >
              <i className="fas fa-coins" />
            </div>
            <h2 className="uppercase text-lg font-bold text-grey-600 tracking-wide mt-3 mb-4">
              Seamless Micropayments
            </h2>
            <p className="leading-normal text-grey-500 text-lg">
              It's difficult to get user to pay you a subscription, but micro
              donations are easy. Small payments, but not small revenue.
            </p>
          </div>
        </div>
        <div className="w-1/3 px-6">
          <div className="bg-white shadow-lg rounded bg-white p-6">
            <div
              className="flex items-center justify-center bg-purple-500 text-purple-050 inline-block
                          rounded-full w-12 h-12 text-lg -mt-12 shadow-lg"
            >
              <i className="fas fa-people-carry" />
            </div>
            <h2 className="uppercase text-lg font-bold text-grey-600 tracking-wide mt-3 mb-4">
              Aligned Incentives
            </h2>
            <p className="leading-normal text-grey-500 text-lg">
              Instead of focusing on clicks or affiliate links, focus on
              creating great content, focus on what you want to be doing.
            </p>
          </div>
        </div>
        <div className="w-1/3 px-6 ">
          <div className="bg-white shadow-lg rounded bg-white p-6">
            <div
              className="flex items-center justify-center bg-red-500 text-red-050 inline-block
                          rounded-full w-12 h-12 text-lg -mt-12 shadow-lg"
            >
              <i className="fas fa-snowboarding" />
            </div>
            <h2 className="uppercase text-lg font-bold text-grey-600 tracking-wide mt-3 mb-4">
              Leverage your Audience
            </h2>
            <p className="leading-normal text-grey-500 text-lg">
              Enable your followers to return value for all that you give them
              for free. That is what they want to do.
            </p>
          </div>
        </div>
      </section>
      {/* 
      <section className="py-12">
        <div className="max-w-sm">
          <Trend
            smooth
            autoDraw
            autoDrawDuration={5000}
            autoDrawEasing="ease-out"
            data={[0, 2, 5, 9, 8, 10, 11, 7, 9, 8, 10, 12, 15, 22, 26]}
            gradient={['#00c6ff', '#F0F', '#FF0']}
            radius={10}
            strokeWidth={2}
            strokeLinecap={'round'}
          />
        </div>
      </section> */}
    </div>
  )
}

export default Index
