import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import CategoryIndex from '@site/src/components/CategoryIndex';


function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="hero -mt-5 bg-waves-animated bg-cover">
      <div className="container py-10">
        <h1 className="text-6xl text-white">{siteConfig.title}</h1>
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
          <h2 className="text-3xl">Valitse aihe, josta kaipaat lisätietoa</h2>
          <CategoryIndex cols={3} variation="large" items={[
            {
              "link": "/client-area",
              "icon": ["fat", "users"],
              "title": "Asiakasalue",
              "description": "Asiakasalueen käyttöohjeet"
            },
            {
              "link": "/hosting",
              "icon": ["fat", "hotel"],
              "title": "Webhotelli",
              "description": "Webhotellien käyttöohjeet"
            },
            {
              "link": "/servers",
              "icon": ["fat", "usb-drive"],
              "title": "Virtuaalipalvelimet",
              "description": "Virtuaalimien käyttöohjeet"
            },
            {
              "link": "/game",
              "icon": ["fat", "gamepad-alt"],
              "title": "Pelipalvelimet",
              "description": "Pelipalvelinten käyttöohjeet"
            },
            {
              "link": "/docs",
              "icon": ["fat", "book"],
              "title": "Dokumentaatio",
              "description": "Dokumentaation käyttöohjeet"
            },
            {
              "link": "/company",
              "icon": ["fat", "building"],
              "title": "Yritys",
              "description": "Tietoa Bittivirrasta"
            },
          ]} />
        </div>
      </main>
    </Layout>
  );
}
