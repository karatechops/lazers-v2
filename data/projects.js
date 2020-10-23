/* eslint-disable max-len */
export const data = [
  {
    title: 'HPE Design',
    path: '#hpe-design',
    thumb: '/static/thumb-hpe-design.jpg',
    desc:
      "Hot on the heels of creating the HPE Developer Community portal the HPE Design portal was created. A one-stop-shop for Design at HPE. The HPE Design website presented a fair challenge in its oscillating line headers. To implement this animation I chose to use a charting library and dynamically change the line values given to the chart over time. To loop the animation the chart values ease back to their original points, then the animation begins all over again with new destination values. It was important to me that the line animation was always changing and never on the same loop, the dynamic loop provides a level of intrigue and uniqueness to the end-user.<br/><br/>The stack for the HPE Design portal was a joy to work with, I chose headless WordPress, Grommet's UI/UX library, and Next.js. Utilizing headless WordPress allowed our customers, the HPE Design and marketing team, ease of content creation, and editing through an interface they were already familiar with.",
    link: 'https://itg.hpe.design',
    bgTint: { hue: 320, saturate: 1, brightness: 1 },
  },
  {
    title: 'HPE DEV',
    path: '#hpe-dev',
    thumb: '/static/thumb-hpe-dev.jpg',
    desc:
      "Since I first began developing websites, I've been a big open source enthusiast. Developing and designing the HPE Developer Portal was an honor. In addition to the open-source libraries I've had the pleasure of contributing towards, I gave back to the open-source community by creating the HPE Developer portal for the HPE's Developer program team. This project required a custom-designed CMS built from scratch. For authoring page content, I created a modular Content Block system using HPE's React UI/UX library, Grommet. The dynamic content block system allowed content authors, HPE Developer's marketing team, to preview their page layouts in realtime.",
    link: 'https://hpedev.io',
    bgTint: { hue: 110, saturate: 1, brightness: 1 },
  },
  {
    title: 'Project Vending',
    path: '#project-vending',
    thumb: '/static/thumb-project-vending.jpg',
    desc:
      "Wouldn't it be cool if you could provision VMs like dressing a sundae? A few rainbow sprinkles here, a mongo DB there, perfect. In this prototype for Hewlett Packard Enterprise's OneSphere, I set out to envision a new way for developers to provision VMs with their favorite stack, on the fly.",
    link: 'https://hpedev.io',
    bgTint: { hue: -20, saturate: 1, brightness: 1 },
  },
  {
    title: 'Omnivore',
    path: '#omnivore',
    thumb: '/static/thumb-omnivore.jpg',
    desc:
      "Omnivore creates next-gen service industry point of sale software and integrations. The scope of this project was to develop Omnivore's marketing website to inform future customers of Omnivore's offerings. The tech stack utilizes headless WordPress to provide the Omnivore team with a content creation system that they were familiar with. The frontend utilizes Next.js to supercharge load times via serverside rendered pages.",
    link: 'https://omnivore.io',
    bgTint: { hue: 60, saturate: 1, brightness: 1 },
  },
  {
    title: 'HP Labs',
    path: '#hp-labs',
    thumb: '/static/thumb-hp-labs.jpg',
    desc:
      'The Labs project entailed rich photograph heavy design work and a full-stack Node approach. The development stack included a custom React CMS, React front-end, and custom server-side rendering.',
    link: 'https://labs.hpe.com',
    bgTint: { hue: 0, saturate: 0, brightness: 2 },
  },
  {
    title: 'HP Pathfinder',
    path: '#hp-pathfinder',
    thumb: '/static/thumb-hp-pathfinder.jpg',
    desc:
      "The HP Pathfinder website was a joint effort between myself and HPE's Head of Design. I worked with HPE's designer to craft a visually rich experience and implement it with a fullstack Node and React application.",
    link: 'https://www.hewlettpackardpathfinder.com',
    bgTint: { hue: 240, saturate: 1, brightness: 1 },
  },
  {
    title: 'HPE iVenues',
    path: '#hpe-intelligent-venues',
    thumb: '/static/thumb-hpe-intelligent-venues.jpg',
    desc:
      "The HPE Intelligent Venues project used HPE's vast library of illustrations to tell a story. To make this project come to life I chose to provide a unique scroll experience. As the user scrolls down the page, the animation's timelines are progressed. This functionality allowed for a video timeline scrubbing effect to accompany the user's journey through the page.",
    // link: 'https://www.hewlettpackardpathfinder.com',
    bgTint: { hue: 0, saturate: 0, brightness: 2 },
  },
  {
    title: 'Breakout Band',
    path: '#tt-breakout-band',
    thumb: '/static/thumb-touchtunes-bob.jpg',
    desc:
      'Long time client, TouchTunes, contracted me to create and design a web application to power their yearly battle of the bands. The design needed to include robust searching, a media player, and a secure voting mechanism.',
    link: 'http://phase2demo.touchtunesbreakoutband.com',
    bgTint: { hue: -10, saturate: 1, brightness: 1 },
  },
  {
    title: 'Bank of New York',
    path: '#bank-of-new-york',
    thumb: '/static/thumb-bny.jpg',
    desc:
      "This single-page site was developed and designed for Bank of New York to educate costumers on financial regulation reform. I leveraged Greensock's GSAP Javascript library to leverage the animation tools necessary to complete this project.",
    link: 'http://bny.8ar.ms',
    bgTint: { hue: 220, saturate: 1, brightness: 1 },
  },
  {
    title: 'Realtor.com',
    path: '#realtor-dot-com',
    thumb: '/static/thumb-realtor.jpg',
    desc:
      "For the Realtor.com Listings campaign, I designed and developed a number ticker engine mimicking a train station's departure board. The ticker engine was built on top of Greensock's GSAP platform which provided a smooth journey from prototype to production. This campaign kicked off the Realtor.com re-design with Elizabeth Banks.",
    // link: 'http://bny.8ar.ms',
    bgTint: { hue: 0, saturate: 0, brightness: 0.75 },
  },
  {
    title: 'TouchTunes Media',
    path: '#tt-media',
    thumb: '/static/thumb-touchtunes-media.jpg',
    desc:
      "TouchTunes Media was a design and development for long-time client TouchTunes. The design leverages the TouchTunes brand's use of lively photography and bold text. The development of the single-page site uses scroll position monitoring to bring the story to life.",
    link: 'http://touchtunesmedia.com',
    bgTint: { hue: 0, saturate: 1, brightness: 0.75 },
  },
  {
    title: 'Left as rain',
    path: '#left-as-rain',
    thumb: '/static/thumb-lar.jpg',
    desc:
      'Left as rain has been a pet project between a close friend and myself since 2007. Together, we designed and developed the Left as rain brand and website. While we put the brand to rest many years ago, the site sees a fair amount of traffic and a following still exists.',
    link: 'https://leftasrain.com',
    bgTint: { hue: 230, saturate: 1, brightness: 1 },
  },
  {
    title: 'AMNH',
    path: '#american-museum-of-natural-history',
    thumb: '/static/thumb-amnh.jpg',
    desc:
      'Working with Illustrator Kyle Platts to design and develop advertising for The American Museum of Natural History yielded a fun, rich, and interactive experience. The magnifying glass functionality was built as a jQuery plugin. The circle masks out a larger image of the illustration and pans it depending on where the cursor is.',
    // link: 'https://leftasrain.com',
    bgTint: { hue: 250, saturate: 1, brightness: 1 },
  },
  {
    title: 'Dog School',
    path: '#dog-school',
    thumb: '/static/thumb-otsfd.jpg',
    desc:
      'Opening their doors in 1975, Olde Towne School for Dogs has a deep history in the Washington DC metro area. For this project, I hired a DC-based photographer, Cade Martin, to capture great shots of the building, dogs, and dog trainers. We had a vision of elegant type with vivid photography to showcase the long-standing business. As the site rarely sees updates, we chose a static build to allow for ease of deployment and fast loading performance.',
    link: 'https://otsfd.com',
    bgTint: { hue: 460, saturate: 1, brightness: 1 },
  },
];
/* eslint-enable max-len */
