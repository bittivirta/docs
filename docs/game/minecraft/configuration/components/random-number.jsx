/* prettier-ignore */
import CodeBlock from "@theme/CodeBlock";
import Button from "@site/src/components/Button";
import { useState } from "react";

function getNewSeedsConfig() {
  const RandomNumber = () => Math.floor(Math.random() * 9999000000) + 10000000;
  const seeds = [
    "seed-village",
    "seed-desert",
    "seed-igloo",
    "seed-jungle",
    "seed-swamp",
    "seed-monument",
    "seed-shipwreck",
    "seed-ocean",
    "seed-outpost",
    "seed-endcity",
    "seed-slime",
    "seed-nether",
    "seed-mansion",
    "seed-fossil",
    "seed-portal",
    "seed-ancientcity",
    "seed-trailruins",
    "seed-trialchambers",
    "seed-buriedtreasure",
    "seed-mineshaft",
    "seed-stronghold",
  ];
  const seedValues = seeds.reduce((acc, seed) => {
    acc[seed] = RandomNumber();
    return acc;
  }, {});
  const seedConfig = Object.entries(seedValues)
    .map(([key, value]) => `    ${key}: ${value}`)
    .join("\n");
  return `world-settings:
  default:
    #...
// highlight-start
${seedConfig}
// highlight-end
    #...
`;
}

function SpigotSeeds() {
  const [code, setCode] = useState(getNewSeedsConfig());
  function refreshSeeds() {
    setCode(getNewSeedsConfig());
  }
  return (
    <>
      <Button onClick={refreshSeeds}>Generoi uudelleen</Button>
      <CodeBlock language="yaml">{code}</CodeBlock>
    </>
  );
}

export { SpigotSeeds };
