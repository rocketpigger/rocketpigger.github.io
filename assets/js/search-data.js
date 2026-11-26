// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "news-pvtsizing-a-turbo-rl-based-batch-sampling-optimization-framework-for-pvt-robust-analog-circuit-synthesis-was-presented-at-dac-2024-in-san-francisco",
          title: 'PVTSizing: A TuRBO-RL-Based Batch-Sampling Optimization Framework for PVT-Robust Analog Circuit Synthesis was presented...',
          description: "",
          section: "News",},{id: "news-litedvs-a-low-data-redundancy-dynamic-vision-sensor-with-hybrid-readout-and-in-pixel-denoising-was-presented-at-date-2026-in-verona-italy",
          title: 'LiteDVS: A Low-Data-Redundancy Dynamic Vision Sensor with Hybrid Readout and In-Pixel Denoising was...',
          description: "",
          section: "News",},{id: "news-toposizing-an-llm-aided-framework-of-topology-based-understanding-and-sizing-for-ams-circuits-was-published-in-ieee-tcad",
          title: 'TopoSizing: An LLM-Aided Framework of Topology-Based Understanding and Sizing for AMS Circuits was...',
          description: "",
          section: "News",},{id: "news-pvtsizing-2-0-was-released-as-an-arxiv-preprint",
          title: 'PVTSizing 2.0 was released as an arXiv preprint.',
          description: "",
          section: "News",},{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=OQSPtRcAAAAJ", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%66%61%72%65%77%65%6C%6C.%6B%7A%63@%70%6B%75.%65%64%75.%63%6E", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/zckong", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
