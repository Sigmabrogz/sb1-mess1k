export interface Section {
  title: string;
  subsections: {
    title: string;
    items: string[];
  }[];
}

export const sections: Section[] = [
  {
    title: 'Data',
    subsections: [
      { title: 'Deep Fakes', items: ['BitMind'] },
      { title: 'IP', items: ['Story', 'Space & Time', 'Provably', 'Bagel Network', 'Index Network'] },
      { title: 'Provenance', items: ['Open Ledger', 'Sahara AI', 'Navigate AI'] },
      { title: 'Data Intelligence Tools', items: ['Arkham', 'Helika', 'Dune', 'Nansen'] },
      { title: 'Data Labeling', items: ['Fraction AI', 'Lightworks', 'Kiva', 'PublicAI', 'Synesis One'] },
      { title: 'Data Marketplace', items: ['Dria', 'Eidon', 'Masa', 'Ocean'] },
      { title: 'Robotics', items: ['Krang', 'Mecka', 'Sapien', 'OpenVision'] },
      { title: 'Scraping', items: ['Grass Protocol'] },
      { title: 'Synthetic Data', items: ['First Batch', 'Mizu'] }
    ]
  },
  {
    title: 'Applications',
    subsections: [
      { title: 'Art', items: ['Botto'] },
      { title: 'Auditing', items: ['MetaTrust'] },
      { title: 'Chat', items: ['Enqai', 'FreedomGPT'] },
      { title: 'Gaming', items: ['AI Arena', 'Echelon Prime', 'Nim Network', 'PlayAI'] },
      { title: 'Governance', items: ['Venice'] },
      { title: 'Trading', items: ['Hats', 'Compass Labs', 'Fere AI', 'Phoenix Network', 'Rug AI', 'MBD'] },
      { title: 'Prediction Markets', items: ['Gnosis', 'Polymarket'] },
      { title: 'Federated Learning', items: ['Flock'] },
      { title: 'Model Creators', items: ['Nous', 'Pond', 'Numer', 'RPS'] }
    ]
  },
  {
    title: 'Agents',
    subsections: [
      { title: 'Companions', items: ['Deva', 'MyShell', 'DogeAI', 'Nectar', 'Slate', 'Creator Bid', 'Way Finder', 'Polywrap', 'Open Agents', 'Chasm', 'Virtuals'] },
      { title: 'Tooling & Infra', items: ['Alethea AI', 'ChainGPT', 'Nimble Network', 'Naptha AI', 'GPT', 'Shinkai', 'Spectral Labs', 'Operator', 'Supersight', 'Delysium'] },
      { title: 'Marketplaces', items: ['Fetch', 'GaiaNet'] },
      { title: 'Defi', items: ['Robonet', 'Runloop'] },
      { title: 'Privacy', items: ['GaiaNet', 'Nevermind', 'Giza'] },
      { title: 'Payments', items: ['Agent Coin', 'Skyfire'] }
    ]
  },
  {
    title: 'Coordination Layers',
    subsections: [
      { title: 'Agentic-focused', items: ['Galadriel', 'Olas', 'Spectral', 'Talus', 'Theoriq', 'Sentient', 'Oasis Protocol', 'Morpheus', 'Allora', 'Nesa', 'Ritual', 'Mira Network', 'GenLayer'] },
      { title: 'Proof of Humanhood', items: ['HUMANID', 'Privasea', 'Humanity Protocol', 'Worldcoin'] },
      { title: 'Other Projects', items: ['KIP Protocol', 'Macro Cosmos', 'BitTensor', 'Near', 'Schelling AI', '0G Labs', 'basedai'] }
    ]
  },
  {
    title: 'Compute',
    subsections: [
      { title: 'Aggregated GPUs', items: ['AIOZ Network', 'Aethir Cloud', 'Akash Network', 'Exabits', 'Fluence Network', 'Hyperbolic', 'Netmind', 'Together', 'Gensyn', 'Render Network', 'Golem', 'Spheron', 'io.net'] },
      { title: 'Distributed Training', items: ['Nous', 'Pluralis', 'Heurist', 'Prime Intellect', 'SphereOne', 'Lilypad', 'Kuzco', 'Oasis AI'] },
      { title: 'Edge Compute', items: ['GaiaNet', 'Pin AI'] },
      { title: 'Inference Networks', items: ['Beyond Network', 'FortyTwo', 'AIZel Network', 'EZKL'] },
      { title: 'Verifiable Compute', items: ['AIZel Network', 'Inference Labs', 'Modulus Labs', 'Marlin', 'Phala Network', 'Ora'] }
    ]
  }
];