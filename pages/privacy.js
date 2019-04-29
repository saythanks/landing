import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import "../styles/privacy.css";
import Trend from "react-trend";

const Privacy = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-full font-sans">
      <div className="w-full max-h-full flex flex-col md:flex-row items-center justify-center font-sans py-8">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <title> Privacy Policy — SayThanks</title>
          <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
          <link rel="stylesheet" href="https://use.typekit.net/xzl5vod.css" />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
            integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
            crossorigin="anonymous"
          />
        </Head>{" "}
        <section className="max-w-full md:mx-10 px-4">
          <Link href="/">
            <a className="text-pink-400 text-6xl mb-3 font-bold no-underline">
              SayThanks{" "}
            </a>
          </Link>{" "}
          <h1 className="text-black text-5xl mb-3 font-bold no-underline text-center">
            Privacy Policy{" "}
          </h1>{" "}
        </section>{" "}
      </div>{" "}
      <div className="mx-auto max-w-xl px-8 max-h-full flex flex-col md:flex-row items-center justify-center font-sans py-8">
        <section className="container mx-auto px-4 pb-32 items-center">
          <div className="bg-white shadow-lg rounded bg-white p-12">
            <p className="leading-normal text-grey-400 text-lg">
            <Link href="/">
                <a className="text-pink-400 font-bold no-underline">
                  SayThanks
                </a>
              </Link> is a platform for creators to accept support from
              their audience and share exclusive content. At SayThanks,
              your privacy is important to us, and we want you to feel confident
              that your personal information is secure when using our products
              and our platform.
            </p>{" "}
            <div className="bg-grey-600 h-px my-12" />
            <h2 className="uppercase text-xl font-bold text-black-600 tracking-wide mt-3 mb-8 text-center">
              Website Visitors{" "}
            </h2>{" "}
            <p className="leading-normal text-grey-400 text-lg">
              Like most website operators, SayThanks collects non -
              personally - identifying information of the sort that web browsers
              and servers typically make available, such as the browser type,
              language preference, referring site, and the date and time of each
              visitor request. SayThanks 's purpose in collecting
              non-personally identifying information is to better understand how
              SayThanks's visitors use its website. From time to time,
              SayThanks may release non - personally - identifying information
              in the aggregate, e.g., by publishing a report on trends in the
              usage of its website. <br />
              <br />
              SayThanks also collects potentially personally - identifying
              information like Internet Protocol(IP) addresses for logged in
              users and for users making payments on{" "}
              <Link href="/">
                <a className="text-pink-400 font-bold no-underline">
                  SayThanks
                </a>
              </Link>
              . SayThanks only discloses logged in user and commenter IP
              addresses under the same circumstances that it uses and discloses
              personally-identifying information as described below, except that
              payee IP addresses and email addresses are visible and disclosed
              to the administrators of SayThanks and is handled by payment
              processors at the time of processing the payments.{" "}
            </p>{" "}
            <div className="bg-grey-600 h-px my-12" />
            <h2 className="uppercase text-xl font-bold text-black-600 tracking-wide mt-3 mb-8 text-center">
              Payments{" "}
            </h2>{" "}
            <p className="leading-normal text-grey-400 text-lg">
              To make a payment to a creator on SayThanks, you have to
              provide our payment processor(Stripe) with your payment
              information. They provide us with a token that represents your
              account, your card’ s expiration date, card type and the last four
              digits of your credit card. If you provide them with a name and
              email address then they also provide us with that information.{" "}
              <br />
              <br />
              We collect and process information about the creators you support,
              the level at which you support them, what rewards you receive and
              how often you support them.{" "}
            </p>{" "}
            <div className="bg-grey-600 h-px my-12" />
            <h2 className="uppercase text-xl font-bold text-black-600 tracking-wide mt-3 mb-8 text-center">
              Gathering of Personally - Identifying Information{" "}
            </h2>{" "}
            <p className="leading-normal text-grey-400 text-lg">
              Certain visitors to SayThanks 's websites choose to interact
              with SayThanks in ways that require SayThanks to
              gather personally-identifying information. The amount and type of
              information that SayThanks gathers depends on the nature of
              the interaction. For example, we ask visitors who sign up at{" "}
              <Link href="/">
                <a className="text-pink-400 font-bold no-underline">
                  saythanks.me
                </a>
              </Link>{" "}
              to provide a username and email address. Those who engage in
              transactions with SayThanks are asked to provide additional
              information, including as necessary the personal and financial
              information required to process those transactions. In each case,
              SayThanks collects such information only insofar as is
              necessary or appropriate to fulfill the purpose of the visitor' s
              interaction with SayThanks.SayThanks does not disclose
              personally - identifying information other than as described
              below.And visitors can always refuse to supply personally -
              identifying information, with the caveat that it may prevent them
              from engaging in certain website - related activities.{" "}
            </p>{" "}
            <div className="bg-grey-600 h-px my-12" />
            <h2 className="uppercase text-xl font-bold text-black-600 tracking-wide mt-3 mb-8 text-center">
              Aggregated Statistics{" "}
            </h2>{" "}
            <p className="leading-normal text-grey-400 text-lg">
              SayThanks may collect statistics about the behavior of
              visitors to its websites.SayThanks may display this
              information publicly or provide it to others.However, SayThanks does not disclose personally - identifying information
              other than as described below.{" "}
            </p>{" "}
            <div className="bg-grey-600 h-px my-12" />
            <h2 className="uppercase text-xl font-bold text-black-600 tracking-wide mt-3 mb-8 text-center">
              Protection of Certain Personally - Identifying Information{" "}
            </h2>{" "}
            <p className="leading-normal text-grey-400 text-lg">
              SayThanks discloses potentially personally - identifying and
              personally - identifying information only to those of its
              employees, contractors and affiliated organizations that(i) need
              to know that information in order to process it on SayThanks
              's behalf or to provide services available at SayThanks' s
              websites, and(ii) that have agreed not to disclose it to
              others.Some of those employees, contractors and affiliated
              organizations may be located outside of your home country; by
              using SayThanks 's websites, you consent to the transfer of
              such information to them. SayThanks will not rent or sell
              potentially personally-identifying and personally-identifying
              information to anyone. Other than to its employees, contractors
              and affiliated organizations, as described above, SayThanks
              discloses potentially personally-identifying and
              personally-identifying information only in response to a subpoena,
              court order or other governmental request, or when SayThanks
              believes in good faith that disclosure is reasonably necessary to
              protect the property or rights of SayThanks, third parties
              or the public at large. If you are a registered user of an SayThanks website and have supplied your email address, SayThanks may occasionally send you an email to tell you about new
              features, solicit your feedback, or just keep you up to date with
              what' s going on with SayThanks and our products.If you send
              us a request( for example via email or via one of our feedback
              mechanisms), we reserve the right to publish it in order to help
              us clarify or respond to your request or to help us support other
              users.SayThanks takes all measures reasonably necessary to
              protect against the unauthorized access, use, alteration or
              destruction of potentially personally - identifying and personally
              - identifying information.{" "}
            </p>{" "}
            <div className="bg-grey-600 h-px my-12" />
            <h2 className="uppercase text-xl font-bold text-black-600 tracking-wide mt-3 mb-8 text-center">
              Cookies{" "}
            </h2>{" "}
            <p className="leading-normal text-grey-400 text-lg">
              A cookie is a string of information that a website stores on a
              visitor 's computer, and that the visitor' s browser provides to
              the website each time the visitor returns. For more information,
              visit{" "}
              <a
                className="text-pink-400 font-bold no-underline"
                target="_blank"
                href="http://www.allaboutcookies.org/"
              >
                {" "}
                All About Cookies{" "}
              </a>{" "}
              <br />
              <br />
              SayThanks uses cookies to help SayThanks identify and
              track visitors, their usage of SayThanks website, and their
              website access preferences. Some cookies expire after a certain
              amount of time, or upon logging out(session cookies), others
              remain on your computer or terminal device for a longer
              period(persistent cookies). Our Site uses first party
              cookies(cookies set directly by Anchor) as well as third party
              cookies, as described below <br />
              <br />
              Strictly Necessary Cookies: Used to provide Users with the
              Services available through our Site and to use some of their
              features, such as the ability to log - in and access to secure
              areas. These cookies are served by Anchor and are essential for
              using and navigating the Site. Without these cookies, basic
              functions of our Site would not work. Because these cookies are
              strictly necessary to deliver the Site and the Services, you
              cannot refuse them. <br />
              <br />
              Analytics / Performance: Used to better understand the behavior of
              the Users on our Site and improve our Site accordingly, for
              example by making sure Users are finding what they need easily. The
              Site uses Google Analytics, a web analytics service provided by
              Google Inc. (“Google”). The information collected by
              Google(including your IP address) will be transmitted to and
              stored by Google on servers in the United States(Google is
              certified to the Privacy Shield for data transfers). How long a
              Google Analytics cookie remains on your computer or device depends
              on what it is and what it is used for.Some Google Analytics
              cookies expire at the end of your browser session, whilst others
              can remain for up to two years. You can prevent your data from
              being collected by Google Analytics on our Site by downloading and
              installing the{" "}
              <a
                className="text-pink-400 font-bold no-underline"
                href="https://tools.google.com/dlpage/gaoptout?hl=en"
              >
                {" "}
                Google Analytics Opt-out Browser Add-on{" "}
              </a>
              for your current web browser.For more information on Google
              Analytics privacy practices, read here.
              <br />
              <br />
              SayThanks visitors who do not wish to have cookies placed on
              their computers should set their browsers to refuse cookies before
              using SayThanks's websites, with the drawback that certain
              features of SayThanks's websites may not function properly
              without the aid of cookies.
            </p>{" "}
            <div className="bg-grey-600 h-px my-12" />
            <h2 className="uppercase text-xl font-bold text-black-600 tracking-wide mt-3 mb-8 text-center">
              Business Transfers{" "}
            </h2>{" "}
            <p className="leading-normal text-grey-400 text-lg">
              {" "}
              If SayThanks, or substantially all of its assets, were
              acquired, or in the unlikely event that SayThanks goes out
              of business or enters bankruptcy, user information would be one of
              the assets that is transferred or acquired by a third party. You
              acknowledge that such transfers may occur, and that any acquirer
              of SayThanks may continue to use your personal information
              as set forth in this policy.
            </p>
              <div className="bg-grey-600 h-px my-12" />
              <h2 className="uppercase text-xl font-bold text-black-600 tracking-wide mt-3 mb-8 text-center">
                Ads{" "}
              </h2>{" "}
              <p className="leading-normal text-grey-400 text-lg">
                {" "}
                We do not run any external advertisements on SayThanks.
                However, we use ad networks such as Twitter Ads to collect
                retargeting information to compile information about our users.
                This Privacy Policy covers the use of cookies by SayThanks
                and does not cover the use of cookies by any advertisers.
              </p>
              <div className="bg-grey-600 h-px my-12" />
              <h2 className="uppercase text-xl font-bold text-black-600 tracking-wide mt-3 mb-8 text-center">
                International Users{" "}
              </h2>{" "}
              <p className="leading-normal text-grey-400 text-lg">
                {" "}
                SayThanks is based in the United States. If you are
                accessing our Services from the European Union or other regions
                with laws governing data collection and use, please note that
                your Personal Data will be transmitted to our servers in the
                United States and the data may be transmitted to our service
                providers supporting our business operations (described above).
                The United States may have data protection laws less stringent
                than or otherwise different from the laws in effect in the
                country in which you are located. Where we transfer your
                Personal Data out of the EU we will take steps to ensure that
                your Personal Data receives an adequate level of protection
                where it is processed and your rights continue to be protected
                (GDPR).
                <br />
                <br />
                By providing your information to the Services you agree to the
                transfer of your information to the United States and processing
                globally in accordance with this Privacy Policy.
              </p>
              <div className="bg-grey-600 h-px my-12" />
              <h2 className="uppercase text-xl font-bold text-black-600 tracking-wide mt-3 mb-8 text-center">
                Privacy Policy Changes{" "}
              </h2>{" "}
              <p className="leading-normal text-grey-400 text-lg">
                {" "}
                Although most changes are likely to be minor, SayThanks
                may change its Privacy Policy from time to time, and in
                SayThanks's sole discretion. SayThanks encourages visitors to
                frequently check this page for any changes to its Privacy
                Policy. If you have a
              </p>
              <Link href="/">
                <a className="text-pink-400 font-bold no-underline">
                  SayThanks
                </a>
              </Link>
              <p className="leading-normal text-grey-400 text-lg">
                {" "}
              account, you might also receive an alert informing you of these
              changes. Your continued use of this site after any change in this
              Privacy Policy will constitute your acceptance of such change.
            </p>
          </div>{" "}
        </section>{" "}
      </div>{" "}
    </div>
  );
};

export default Privacy;
