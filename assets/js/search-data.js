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
          description: "publications in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "More information can be found on my LinkedIn profile.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-i-ve-started-my-phd-at-the-university-of-edinburgh",
          title: 'I’ve started my PhD at the University of Edinburgh!',
          description: "",
          section: "News",},{id: "news-i-placed-3rd-overall-and-1st-in-ood-detection-in-the-mavic-c-challenge-as-team-idcom",
          title: 'I placed 3rd overall and 1st in OOD detection in the MAVIC-C challenge...',
          description: "",
          section: "News",},{id: "news-the-mavic-c-challenge-paper-was-published-at-the-pbvs-workshop-at-cvpr-2026-code-available-on-github",
          title: 'The MAVIC-C challenge paper was published at the PBVS workshop at CVPR 2026....',
          description: "",
          section: "News",},{id: "news-our-paper-on-cross-modal-knowledge-transfer-for-sar-target-recognition-was-accepted-at-spie-sensors-imaging-2026",
          title: 'Our paper on “cross-modal knowledge transfer for SAR target recognition” was accepted at...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%4C%75%63%61%73.%48%69%72%73%63%68@%65%64.%61%63.%75%6B", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=hSDo6kUAAAAJ", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/luhirsch", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/lucas-hirsch-ee", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-4831-2543", "_blank");
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
