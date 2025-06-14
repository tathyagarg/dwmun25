  export type Committee = {
    name: string;
    agenda: string;
    maps?: string;
    img: string;
    logo: string;
    slug: string;
    description?: string;
    chairpersons: {name: string, image: string, role: string}[];
    guide: string;
    note?: string;
  }

  export const committees: Committee[] = [
    {
      name: "UNHRC",
      agenda:
        "Human Rights Violations Arising from the Division of Cyprus with emphasis on the Protection of Displaced and Minority Communities.\n\nFreeze Date: August 16, 1974",
      img: "/images/bgs/hrc.jpeg",
      logo: "/images/logos/HRC.png",
      slug: "unhrc",
      description: "The United Nations Human Rights Council is reviewing human rights violations resulting from the division of Cyprus, frozen at a crucial moment following the Turkish military intervention on August 16, 1974. The focus is on the rights of displaced populations, minority protection, property restitution, and reconciliation efforts between Greek and Turkish Cypriots. Delegates must address past abuses, propose frameworks for justice and reparations, and explore avenues for peaceful coexistence and reunification in line with international human rights standards.",
      chairpersons: [
        {
          name: "BS Chetan Swaroop Reddy",
          image: "/images/chairs/unhrc/chetan.jpeg",
          role: "Co-Chairperson",
        },
        {
          name: "Ritobrata Sarkar",
          image: "/images/chairs/unhrc/rito.jpeg",
          role: "Co-Chairperson",
        },
        {
          name: "Shloke Jaitly",
          image: "/images/chairs/unhrc/shloke.jpg",
          role: "Moderator",
        }
      ],
      guide: "unhrc.pdf"
    },
    {
      name: "UNSC",
      agenda:
        "Deliberating on the situation in Western Sahara with special emphasis on reviewing and renewing the mandate of the United Nations Mission for the Referendum in Western Sahara (MINURSO)",
      img: "/images/bgs/sc.jpeg",
      logo: "/images/logos/SC.png",
      slug: "unsc",
      description: "The United Nations Security Council is deliberating on the long-standing conflict in Western Sahara, a disputed territory claimed by both the Sahrawi people, represented by the Polisario Front, and Morocco. With the region experiencing periodic instability and humanitarian concerns, the focus is on reviewing and possibly renewing the mandate of MINURSO, the UN mission tasked with facilitating a referendum for self-determination. The agenda centers on evaluating MINURSO's effectiveness, addressing political deadlocks, and considering changes to ensure lasting peace and autonomy in Western Sahara.",
      chairpersons: [
        {
          name: "Eshwar R A",
          image: "/images/chairs/unsc/eshwar.png",
          role: "Chairperson"
        },
        {
          name: "Ajinkya Mhaskar",
          image: "/images/chairs/unsc/ajinkya.jpg",
          role: "Vice Chairperson"
        },
        {
          name: "Arnav Yadav",
          image: "/images/chairs/unsc/arnav.jpeg",
          role: "Moderator"
        }
      ],
      guide: "unsc.pdf",
      note: "Observer status Nations will not be allowed to participate in Substantive Voting procedure I.e. voting on the Draft Resolution and their amendments. However they may be allowed to sponsor resolutions if they are able to avail sponsorship rights from a permanent or non-permanent member (proxy sponsorship)\n\nHowever, during the rest of committee time, they will be allowed full participation during committee debate and procedural voting"
    },
    {
      name: "CCC",
      agenda: "Evaluating regional security in the wake of the tensions at Pahalgam, with a special reference on Indo-Pakistani relations and the growing threat of cross-border terrorism.\n\nFreeze Date: 6th May, 2025",
      img: "/images/bgs/ccc.jpeg",
      logo: "/images/logos/CCC.png",
      slug: "ccc",
      description: "In this Crisis Committee, delegates will navigate the unfolding Indo-Pakistani conflict, frozen on the day when Indian airstrikes targeted alleged terror camps in Pakistan. As the Indo-Pakistani ceasefire agreement is broken, the delegates of the continuous crisis committee rush to try and mediate the growing conflict. The delegates will have to navigate this conflict in real time as both the Indian and Pakistani cabinet ministers rush to try and get an upper hand over the other nation. The Americans view the failed ceasefire as backfiring, as the conflict grows further and gains international attention. Now, the world is involved in trying to stop the following conflict, but the Indians and Pakistanis are unwilling to back down.",
      chairpersons: [
        {
          name: "Saachi Pathak",
          image: "/images/chairs/ccc/saachi.jpg",
          role: "Co-Chairperson"
        },
        {
          name: "Avyan Eklavya Singh",
          image: "/images/chairs/ccc/avyan.jpg",
          role: "Co-Chairperson"
        },
        {
          name: "Aabid Maldar",
          image: "/images/chairs/ccc/aabid.webp",
          role: "Crisis Director"
        },
        {
          name: "Aahil Khan",
          image: "/images/chairs/ccc/aahil.jpeg",
          role: "Moderator"
        }
      ],
      guide: "ccc.pdf"
    },
    {
      name: "Lok Sabha",
      maps: "LS",
      agenda: "Deliberation on the Delimitation of Parliamentary and Assembly Constituencies.",
      img: "/images/bgs/lok-sabha.jpeg",
      logo: "/images/logos/LS.png",
      slug: "lok-sabha",
      description: "The Lok Sabha will deliberate on the critical issue of delimitation, the redrawing of boundaries for parliamentary and assembly constituencies based on demographic changes. This process, essential for ensuring fair representation and upholding democratic principles, involves constitutional, political, and regional sensitivities. The discussion will address whether delimitation should reflect current population data and how to manage regional imbalances in representation while preserving the federal structure and political equity across states.",
      chairpersons: [
        {
          name: "Shubh Bansal",
          role: "Chairperson",
          image: "/images/chairs/lok-sabha/shubh.jpeg",
        },
        {
          name: "Sanatan Goyal",
          role: "Vice Chairperson",
          image: "/images/chairs/lok-sabha/sanatan.jpeg",
        },
        {
          name: "Surya Reddy",
          role: "Vice Chairperson",
          image: "/images/chairs/lok-sabha/surya.jpeg",
        }
      ],
      guide: "lok-sabha.pdf"
    },
    {
      name: "UNODC",
      agenda:
        "Countering the Surge of Synthetic Drug Production and Trafficking in Southeast Asia",
      img: "/images/bgs/odc.jpeg",
      logo: "/images/logos/ODC.png",
      slug: "unodc",
      description: "The United Nations Office on Drugs and Crime will discuss the alarming rise in synthetic drug production and trafficking in Southeast Asia, especially methamphetamines and new psychoactive substances. The region has become a global hotspot for drug manufacture and export, posing severe challenges to public health, law enforcement, and regional security. The agenda aims to strengthen cross-border cooperation, regulatory frameworks, and rehabilitation initiatives, while also tackling the role of organized crime and corruption in sustaining the illicit drug economy.",
      chairpersons: [
        {
          name: "Aarav Sinha",
          image: "/images/chairs/unodc/aarav.jpg",
          role: "Co-Chairperson"
        },
        {
          name: "Priyanshu Biswas",
          image: "/images/chairs/unodc/priyanshu.jpg",
          role: "Co-Chairperson"
        },
        {
          name: "Leena Kalakala",
          image: "/images/chairs/unodc/leena.jpeg",
          role: "Moderator"
        }
      ],
      guide: "unodc.pdf"
    },
    {
      name: "IPC",
      agenda:
        "Discussing the Advent of Social Media as a Source of Information",
      img: "/images/bgs/ipc.jpeg",
      logo: "/images/logos/IPC.png",
      slug: "ipc",
      description: "The Indian Press Corps will debate the evolving role of social media as a primary source of news and information in modern society. While platforms like X (formerly Twitter), Instagram, and YouTube democratize content creation and provide real-time updates, they also contribute to misinformation, echo chambers, and declining trust in traditional journalism. The discussion will explore how social media is reshaping public discourse, the responsibilities of digital influencers, and the need for regulatory mechanisms to ensure the credibility and ethical dissemination of information.",
      chairpersons: [
        {
          name: "Tannmay Kumar Baid",
          image: "/images/chairs/ipc/tannmay.jpeg",
          role: "Chairperson"
        },
        {
          name: "Suhani Bhuwania",
          image: "/images/chairs/ipc/suhani.jpg",
          role: "Vice Chairperson"
        },
        {
          name: "Kapishnu P K",
          image: "/images/chairs/ipc/kapishnu.jpeg",
          role: "Moderator"
        }
      ],
      guide: "ipc.pdf"
    },
  ];
  
  export const people = [
    {
      name: "Chirantana Hedge",
      role: "Secretary General",
      image: "/images/secretariat/chirantana.png",
    },
    {
      name: "Saachi Pathak",
      role: "Director General",
      image: "/images/secretariat/saachi.png",
    },
    {
      name: "Aarav Sinha",
      role: "Head of OC",
      image: "/images/secretariat/aarav.png",
    },
    {
      name: "Ipshita Basu",
      role: "Head of Design (Printing)",
      image: "/images/secretariat/ipshita.png",
    },
    {
      name: "Advika Gupta",
      role: "Head of Design (Digital)",
      image: "/images/secretariat/advika.png",
    },
    {
      name: "Niona Chakma",
      role: "Head of Social Media",
      image: "/images/secretariat/niona.png",
    },
    {
      name: "Tathya Garg",
      role: "Head of Tech",
      image: "/images/secretariat/tathya.png",
    },
    {
      name: "Kanika Mohan",
      role: "Head of Delegate Affairs",
      image: "/images/secretariat/kanika.png",
    },
    {
      name: "Tejus Reddy B",
      role: "Head of Logistics",
      image: "/images/secretariat/tejus.png",
    },
  ];
