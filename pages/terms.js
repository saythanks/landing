import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import "../styles/index.css";
import Trend from "react-trend";

const Index = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-full font-sans">
      <div className="w-full max-h-full flex flex-col md:flex-row items-center justify-center font-sans py-8">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <link rel="stylesheet" href="https://use.typekit.net/xzl5vod.css" />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
            integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
            crossorigin="anonymous"
          />
        </Head>
        <section className="max-w-full md:mx-10 px-4">
          <Link href="/">
            <a className="text-pink-400 text-6xl mb-3 font-bold no-underline">
              SayThanks
            </a>
          </Link>
          <h1 className="text-black text-5xl mb-3 font-bold no-underline text-center">
            Terms of Use
          </h1>
        </section>
      </div>
      <div className="max-w-xl mx-auto max-h-full flex flex-col md:flex-row items-center justify-center font-sans py-8">
        <section className="container mx-auto pb-32 items-center">
          <div className="bg-white shadow-lg rounded bg-white p-12">
            <h2 className="uppercase text-lg font-bold text-black-600 tracking-wide mt-3 mb-8 text-center">
              Welcome to SayThanks!
            </h2>
            <p className="leading-normal text-grey-400 text-lg">
              By using{" "}
              <Link href="/">
                <a className="text-pink-400 font-bold no-underline">
                  SayThanks
                </a>
              </Link>
              , you are allowing to be bound by our website’s Terms and
              Conditions, all relevant laws and regulations, and you are liable
              to agree with any applicable local laws. These are SayThanks’s
              terms of use and apply to all users of this website and mobile
              applications.
              <br />
              <br />
              ‘We’, ‘our’ or ‘us’ refers to SayThanks. You will be forbidden
              from using this site if you do not agree with any of these terms.
              Copyright and trademark law protects all materials used on this
              website. You also agree to our{" "}
              <Link href="/privacy">
                <a className="text-pink-400 font-bold no-underline">
                  privacy policy
                </a>
              </Link>
              . We are not accountable for the quality, timing or legitimacy of
              content or payment. We may make changes to these terms: if these
              changes are substantial and affect your privileges unfavourably,
              we will let you know by announcing the details on the site or via
              email before the changes come into effect. If you continue to use
              SayThanks after any modifications to the terms, it will indicate
              that you have accepted the revised terms.
            </p>
            <div className="bg-grey-600 h-px my-12" />

            <h2 className="uppercase text-lg font-bold text-black-600 tracking-wide mt-3 mb-8 text-center">
              Acceptable Use and Prohibited Content
            </h2>
            <p className="leading-normal text-grey-400 text-lg">
              By using SayThanks, you agree to not use the platform to publish,
              promote or raise fund for these types of content. This includes
              anything prohibited by the payment providers connected to the
              platform such as PayPal Inc and Stripe. For the avoidance of doubt
              the acceptable use and prohibited activities can be found at{" "}
              <a
                href="https://www.paypal.com/us/webapps/mpp/ua/acceptableuse-full"
                className="text-pink-400 font-bold no-underline"
              >
                PayPal Acceptable Use Agreement
              </a>
              <span> and </span>
              <a
                href="https://stripe.com/gb/prohibited-businesses"
                className="text-pink-400 font-bold no-underline"
              >
                Stripe Prohibited Businesses
              </a>
              .
              <br />
              <br />
              We do not provide our services to creators who involve with:
              <ul>
                <li>
                  tobacco, narcotics, steroids, cannabis, certain controlled
                  substances or other products that present a risk to consumer
                  safety;{" "}
                </li>
                <li>
                  drug paraphernalia (equipment, product, or material that is
                  modified for making, using, or concealing drugs);{" "}
                </li>
                <li>seeds or plants;</li>
                <li>chemicals; </li>
                <li>
                  military &amp; semi-military goods &amp; services (including
                  weapons, military software or technologies);{" "}
                </li>
                <li>adult content;</li>
                <li>bitcoin or other cryptocurrencies; </li>
                <li>binary options; or </li>
                <li>
                  individuals, entities or countries which are subject to
                  international sanctions;
                </li>
                <li>smart drugs / nootropics; </li>
                <li>
                  {" "}
                  plagiarism services, multi-level marketing schemes,
                  CFD/options traders located in offshore;{" "}
                </li>
                <li>winnings/gambling payments; </li>
                <li>lotteries, syndicates; </li>
                <li>
                  illegal activities, support of terrorism (including
                  eco-terrorism and groups that support similar such
                  activities), extremism, violence, insurgency;{" "}
                </li>
                <li>
                  transactions which involve or related to pharmaceuticals.
                </li>
              </ul>
            </p>
            <div className="bg-grey-600 h-px my-12" />

            <h2 className="uppercase text-lg font-bold text-black-600 tracking-wide mt-3 mb-8 text-center">
              Use License
            </h2>
            <p className="leading-normal text-grey-400 text-lg">
              You are liable for all the activity on your profile. We can
              terminate your account if we find any breach in terms. You should
              not break any law or prompt others to break the law.
            </p>
            <ul className="leading-normal text-grey-400 text-lg">
              <li>
                We reserve the right to force forfeiture of any username under
                circumstances that we deem necessary.
              </li>
              <li>
                Do not vex or bully others, or support violence or hatred
                towards others.
              </li>
              <li>
                Do not share others’ personal information or differently abuse
                it. Users with access to their SayThanks personal information
                should not use it for anything irrelevant to SayThanks.
              </li>
              <li>
                Do not post messages that are false or differently misleading.
              </li>
              <li>
                Do not generate an account to stop others from using the name or
                to trade the name.
              </li>
              <li>
                Do not modify or copy the materials on this website. You can
                only utilise the materials for any commercial purpose, or for
                any public display.{" "}
              </li>
              <li>
                Do not attempt to decompile or modify engineer any software
                included on SayThanks site.
              </li>
              <li>
                You are not supposed to spam others and cannot use SayThanks to
                host or distribute, malicious or destructive software.
              </li>
              <li>
                Do not support a creator and then share their SayThanks content
                without permission from the creator.{" "}
              </li>
              <li>
                This license will automatically terminate if you infringe any of
                these restrictions and may be terminated by SayThanks at any
                time.
              </li>
            </ul>
            <div className="bg-grey-600 h-px my-12" />

            <h2 className="uppercase text-lg font-bold text-black-600 tracking-wide mt-3 mb-8 text-center">
              Indemnity
            </h2>
            <p className="leading-normal text-grey-400 text-lg">
              You have to reimburse us for all damages and liabilities,
              including legal fees, which may result from these terms or relate
              to your use of SayThanks. We maintain the right to exclusive
              control over the defense of a claim included in this clause. If we
              exercise this right, then you have to assist us in our defense.
              Your responsibility to indemnify under this clause also refers to
              our affiliates, officers, directors, agents, employees, and
              third-party service providers.
            </p>
            <div className="bg-grey-600 h-px my-12" />

            <h2 className="uppercase text-lg font-bold text-black-600 tracking-wide mt-3 mb-8 text-center">
              Disclaimer
            </h2>
            <p className="leading-normal text-grey-400 text-lg">
              SayThanks is presented “as is” and without warranty of any sort.
              Any warranty of merchantability, fitness for a specific purpose,
              non-infringement, and any other warranty is eliminated to the
              greatest extent as authorised by law. Besides, SayThanks does not
              warrant or present any representations concerning the correctness,
              possible results, or authenticity of the use of the elements on
              its Internet web site or otherwise compared to such materials or
              on any sites associated with this site.
              <br />
              <br />
              SayThanks does not take responsibility for the accuracy or
              precision of user-generated content. SayThanks does not directly
              or indirectly endorse or support any word or claim made by any of
              its users.
            </p>
            <div className="bg-grey-600 h-px my-12" />

            <h2 className="uppercase text-lg font-bold text-black-600 tracking-wide mt-3 mb-8 text-center">
              Limitations
            </h2>
            <p className="leading-normal text-grey-400 text-lg">
              SayThanks is not accountable to you for any concomitant,
              consequential or vindictive damages resulting out of these terms,
              or attempted use or your use of SayThanks. We will not be
              responsible for any damages arising out of the inability to use
              the materials on SayThanks's site even if SayThanks representative
              has been informed orally or in writing of the occurrence of such
              damage.
              <br />
              <br />
              To the extent authorised by law, our liability for losses is
              limited to the amount of money we have received through your use
              of SayThanks. We are not liable for damage associated with failure
              to achieve rewards. For this clause “we” and “our” is established
              to include our members, officers, agents, directors, employees,
              and third-party service providers.
            </p>
            <div className="bg-grey-600 h-px my-12" />

            <h2 className="uppercase text-lg font-bold text-black-600 tracking-wide mt-3 mb-8 text-center">
              Revisions and Errata
            </h2>
            <p className="leading-normal text-grey-400 text-lg">
              SayThanks website may contain elements which comprise of
              technical, typographical, or sometimes photographic errors. We do
              not guarantee that any of the contents on our site are genuine,
              comprehensive, or contemporary.
              <br />
              <br />
              SayThanks can make changes to the materials received on its
              website at any time without notification. However, we do not make
              any commitment to refresh the contents.
            </p>
            <div className="bg-grey-600 h-px my-12" />

            <h2 className="uppercase text-lg font-bold text-black-600 tracking-wide mt-3 mb-8 text-center">
              Links
            </h2>
            <p className="leading-normal text-grey-400 text-lg">
              SayThanks has not studied all of the sites associated with its
              Internet web site and is not liable for the elements of any such
              linked site. The addition of any link does not indicate approval
              by SayThanks site. Handling of any such linked web site is at the
              user's own risk.
            </p>
            <div className="bg-grey-600 h-px my-12" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
