export interface Project {
  title: string;
  description: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface WorkItem {
  company: string;
  dates: string;
  subtitle?: string;
  projects: Project[];
  stats?: Stat[];
  images?: string[];
  video?: string;
}

export const workData: WorkItem[] = [
  {
    company: 'Shopify',
    dates: '2025',
    subtitle: 'Campaigns',
    projects: [
      {
        title: 'Structuring marketing at scale',
        description:
          "Introduced Shopify's Campaigns primitive. A new Admin-level entity for organizing, tracking, and evaluating marketing initiatives across channels. Re-architected legacy traffic aggregation into an extensible system integrated with attribution, redirects, and reporting.",
      },
    ],
    stats: [
      { label: 'Monthly users', value: '50K' },
      { label: 'Large merchants', value: '50% retention' },
    ],
    video: '/campaigns.mp4',
  },
  {
    company: 'Shopify',
    dates: '2023',
    subtitle: 'Send-time optimization',
    projects: [
      {
        title: 'Data-driven delivery recommendations',
        description:
          'Led design for send-time optimization in Shopify Email, simplifying the scheduling flow while introducing intelligent timing recommendations based on aggregate and store-level behavior. Improved campaign performance without adding friction to the sending workflow.',
      },
    ],
    stats: [
      { label: 'CTR Increase', value: '+16%' },
      { label: 'GMV in 90d', value: '$21M' },
    ],
    video: '/send-time.mp4',
  },
  {
    company: 'Shopify',
    dates: '2022',
    subtitle: 'Custom code',
    projects: [
      {
        title: 'Unblocking legacy merchants at scale',
        description:
          "Designed the Custom Liquid section that helped legacy merchants migrate highly customized abandoned checkout emails to Shopify’s new Automations framework. Built a code-your-own email workflow with live preview, plus a new Custom Code block in the builder.",
      },
    ],
    stats: [
      { label: 'Monthly GMV recovery', value: '$7M+' },
      { label: 'MoM growth', value: '6%' },
    ],
    video: '/custom-code.mp4',
  },
  {
    company: 'Empatico',
    dates: '2022',
    subtitle: 'Sign-up flow',
    projects: [
      {
        title: 'Aligning speed with match quality',
        description:
          'Redesigned teacher onboarding for a global classroom video platform, resolving friction between fast signup and high-quality availability data. Re-sequenced the flow to balance fast signup with the availability data needed to improve conversion and match quality.',
      },
    ],
    stats: [
      { label: 'Completion time reduced', value: '77%' },
      { label: 'Match rate', value: '98%' },
    ],
    video: '/empatico-signup.mov',
  },
  {
    company: 'Lucky Orange',
    dates: '2021',
    subtitle: 'Platform rebuild',
    projects: [
      {
        title: 'Enterprise analytics platform',
        description:
          "Led end-to-end design for Lucky Orange's enterprise analytics platform, re-architecting workflows across replay, heatmaps, surveys, and reporting into a cohesive, enterprise-ready experience. Built and scaled an accessible design system that improved consistency and increased delivery speed as the team grew.",
      },
    ],
    stats: [
      { label: 'Shopify CRO Apps', value: '#1 rated' },
      { label: 'Global installs', value: '500k+' },
      { label: 'Verified reviews', value: '4.7★ avg rating' },
    ],
    video: '/Lucky-Short.mp4',
  },
  {
    company: 'Signal Kit',
    dates: '2018',
    subtitle: 'Zero-to-one',
    projects: [
      {
        title: 'Building a communication platform',
        description:
          'Led end-to-end product design for Signal Kit, a district-wide communication platform connecting administrators, teachers, and parents. Designed core workflows, established a scalable design system, and partnered closely with engineering to ship a cohesive, enterprise-ready product.',
      },
    ],
    stats: [
      { label: 'Districts in 12mo', value: '200+' },
      { label: 'Full workflow', value: '0→1' },
    ],
    video: '/composer2.mp4',
  },
  {
    company: 'Atlassian',
    dates: '2015',
    subtitle: 'Git Guide',
    projects: [
      {
        title: 'Crafting a learning center for engineers',
        description:
          'While at <a href="https://www.instrument.com/" target="_blank" rel="noopener noreferrer" class="underline">Instrument</a>, I led design for Git Guide, an educational platform helping engineers navigate complex Git concepts. Reorganized and recategorized content to better align with real developer mental models and day-to-day workflows.',
      },
    ],
    video: '/git_walkthrough_1080b.mp4',
  },
];
