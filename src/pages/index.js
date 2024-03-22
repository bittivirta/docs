import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import CategoryIndex from '@site/src/components/CategoryIndex';
import Translate from '@docusaurus/Translate';
import Button from '@site/src/components/Button';
import { faBook, faBuilding, faGamepadAlt, faHotel, faMemoPad, faUsbDrive } from "@fortawesome/pro-thin-svg-icons";
import { faEnvelope } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="hero -mt-5 bg-waves-animated bg-cover">
      <div className="container py-10">
        <h1 className="text-6xl text-white"><Translate id="home.hero.title" /></h1>
        <p className="text-2xl text-white"><Translate id="home.hero.subtitle" /></p>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description="Bittivirta Docs is the help article database for Bittivirta Services.">
      <HomepageHeader />
      <main>
        <div className="container py-20">
          <h2 className="text-3xl"><Translate id="home.pages.title" /></h2>
          <CategoryIndex cols={3} variation="large" items={[
            {
              "link": "/general",
              "icon": faMemoPad,
              "title": <Translate id="home.pages.general.title" />,
              "description": <Translate id="home.pages.general.subtitle" />
            },
            {
              "link": "/hosting/web",
              "icon": faHotel,
              "title": <Translate id="home.pages.webhosting.title" />,
              "description": <Translate id="home.pages.webhosting.subtitle" />
            },
            {
              "link": "/server/vps",
              "icon": faUsbDrive,
              "title": <Translate id="home.pages.vps.title" />,
              "description": <Translate id="home.pages.vps.subtitle" />
            },
            {
              "link": "/game",
              "icon": faGamepadAlt,
              "title": <Translate id="home.pages.game.title" />,
              "description": <Translate id="home.pages.game.subtitle" />
            },
            {
              "link": "/docs",
              "icon": faBook,
              "title": <Translate id="home.pages.docs.title" />,
              "description": <Translate id="home.pages.docs.subtitle" />
            },
            {
              "link": "/company",
              "icon": faBuilding,
              "title": <Translate id="home.pages.company.title" />,
              "description": <Translate id="home.pages.company.subtitle" />
            },
          ]} />
        </div>
        <div className="container py-20">
          <h2 className="text-3xl"><Translate id="home.questions.title" /></h2>
          <p className="text-xl"><Translate id="home.questions.subtitle" /></p>
          <Button to="/company/contact-us" size="lg"><FontAwesomeIcon icon={faEnvelope} fixedWidth /> <Translate id="home.questions.button" /></Button>
        </div>
      </main>
    </Layout>
  );
}
