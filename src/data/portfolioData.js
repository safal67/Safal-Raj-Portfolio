export const portfolioData = {
  personal: {
    name: "Safal Raj",
    title: "Associate Product Manager | Product, Analytics & Growth",
    subheading: "MBA (NMIMS '26) & B.Tech IT (VIT '23). Specializing in GenAI Application Development, Fraud Risk Analytics, Data-Driven Product Strategy, and Go-to-Market Execution.",
    location: "Mumbai, Maharashtra",
    phone: "+91-9334200274",
    email: "safalraj49@gmail.com",
    linkedin: "https://www.linkedin.com/in/safal-raj-891b59201/",
    github: "https://github.com/safal67",
    image: "/safal-raj.jpg",
    summary: "MBA (NMIMS, 2026) & B.Tech IT (VIT) with hands-on experience turning data into decisions — from optimizing bank fraud-detection rules saving ₹5.21 Cr to shipping a GenAI-powered investigation tool reducing analyst review time by 89% at IndusInd Bank, alongside product, GTM, and market-research experience across PwC and Jindal Steel & Power.",
  },

  keyMetrics: [
    {
      value: "₹5.21 Cr",
      label: "Fraud Decline Cut",
      subtext: "Reduced decline value from ₹6 Cr → ₹0.79 Cr (86% cut) at IndusInd Bank",
      accentColor: "from-cyan-400 to-blue-500"
    },
    {
      value: "89%",
      label: "Review Time Cut",
      subtext: "GenAI Mule Narrative cut analyst review time from 45 min to < 5 min",
      accentColor: "from-teal-400 to-emerald-400"
    },
    {
      value: "17,000+",
      label: "Accounts / Run Automated",
      subtext: "Automated end-to-end DOT MNRL/FRI account screening",
      accentColor: "from-blue-400 to-indigo-500"
    },
    {
      value: "10%",
      label: "Cloud Cost Cut",
      subtext: "Achieved via FinOps framework implementation at PwC India",
      accentColor: "from-emerald-400 to-cyan-400"
    }
  ],

  featuredCaseStudy: {
    id: "indusind-genai-fraud",
    company: "IndusInd Bank",
    role: "Management Associate — Fraud Analytics",
    period: "Jun 2026 – Present",
    title: "GenAI Mule Narrative & Rule-Based Fraud Detection System",
    subtitle: "Automating high-risk account investigations & rule-based compliance for 17,000+ accounts while saving ₹5.21 Cr in decline value.",
    category: "AI & Fintech Product",
    tags: ["GenAI Application", "Fraud Analytics", "Rule Engine", "Process Automation", "Risk & Compliance"],
    
    problemStatement: "Risk analysts were spending ~45 minutes per flagged account manually evaluating customer transaction histories, regulatory databases, and freeze logs. In parallel, over-sensitive fraud rules caused ₹6 Cr in legitimate transaction decline value, impairing customer trust and operational bandwidth.",
    
    targetUsers: [
      { role: "Fraud Risk Analysts", pain: "High cognitive load, repetitive manual cross-checking across 8+ databases per case." },
      { role: "Compliance Officers", pain: "Lack of auditability & consistent narrative format for high-risk account freezes." },
      { role: "Bank Executive Leadership", pain: "High fraud decline rates causing customer friction and revenue drop." }
    ],

    solutionOverview: "Productized a dual-layer risk system: (1) Optimized Falcon score segmentation & behavioral transaction rules. (2) Developed an LLM-powered 'GenAI Mule Narrative' application that aggregates data feeds, flags risk triggers, and outputs explainable narrative reports in under 5 minutes.",
    
    keyFeatures: [
      "Falcon Score & Behavioral Segmentation: Reduced false-positive fraud alerts by 73% while preserving full risk coverage.",
      "Regulatory Data Integration: Automated screening across Digital Freeze, MNRL, LEA, FRI, CPV, and NRI exclusion feeds.",
      "GenAI Narrative Engine: Synthesizes complex account logs into natural language executive summaries with flagged anomaly highlights.",
      "Audit & Disposition Workflow: One-click approval flow for risk officers with full historical audit trails."
    ],

    impactMetrics: [
      { label: "Decline Value Cut", stat: "86%", detail: "₹6 Cr → ₹0.79 Cr" },
      { label: "Alert Reduction", stat: "73%", detail: "Fewer false positive alerts" },
      { label: "Analyst Review Time", stat: "89% faster", detail: "45 mins → < 5 mins" },
      { label: "Automated Screening", stat: "17,000+", detail: "Accounts processed per run" }
    ],

    simulatorData: [
      {
        accountId: "ACC-98214-IND",
        accountHolder: "Rajesh Kumar (Mule Suspect)",
        riskScore: "88/100 (HIGH RISK)",
        rulesTriggered: ["MNRL Match", "Rapid Velocity (5 Txns in 3 mins)", "Digital Freeze Flagged"],
        rawLog: "Account opened 30 days ago. Received ₹2.5L via IMPS, immediately split into 5 UPI transfers to unverified wallets within 180 seconds. IP location mismatch (Mumbai vs Bihar).",
        generatedNarrative: "RECOMMENDATION: IMMEDIATE FREEZE. Account ACC-98214-IND exhibits textbook mule behavior. Rapid velocity of ₹2.5L inbound funds dispersed within 3 mins across 5 wallets. Matched against regulatory MNRL watchlist feed. CPV verification pending."
      },
      {
        accountId: "ACC-44109-IND",
        accountHolder: "Ananya Sharma (Legitimate User)",
        riskScore: "14/100 (LOW RISK)",
        rulesTriggered: ["Falcon Score 410", "High Value International Travel"],
        rawLog: "Account active for 4 years. Single transaction of ₹85,000 for flight booking via MakeMyTrip. Previous travel history confirmed.",
        generatedNarrative: "RECOMMENDATION: CLEAR / PASS. Transaction aligns with historical international spending pattern. Falcon score is normal for user tier. No regulatory freeze or watchlist hits."
      }
    ]
  },

  projects: [
    {
      id: "saas-product-dev",
      title: "SaaS Project Management Application",
      organization: "NMIMS (2025)",
      type: "Product Strategy & PRD",
      summary: "Designed a project-management application including user research, product roadmap, GTM strategy, and pricing analysis — projected to improve team efficiency by 30%.",
      tags: ["Product Strategy", "User Research", "PRD", "Pricing Analysis", "GTM"],
      hasPRD: true,
      prdId: "prd-saas-pm"
    },
    {
      id: "brand-repositioning",
      title: "Brand Repositioning Strategy",
      organization: "NMIMS (2025)",
      type: "Brand Strategy & Marketing",
      summary: "Led a rebranding project covering market research, customer personas, competitive positioning, and integrated marketing communications (IMC) strategy.",
      tags: ["Brand Strategy", "Market Research", "Customer Personas", "IMC", "Positioning"],
      hasPRD: false
    },
    {
      id: "pwc-finops",
      title: "Cloud FinOps & Infrastructure Optimization",
      organization: "PwC India (2023)",
      type: "Tech Consulting & Analytics",
      summary: "Reduced cloud infrastructure costs by 10% through FinOps framework implementation and resource optimization. Built executive dashboards tracking KPIs to drive data-driven client recommendations.",
      tags: ["FinOps", "Data Dashboards", "Cloud Cost Optimization", "SQL", "Agile"],
      hasPRD: false
    },
    {
      id: "supply-chain-analytics",
      title: "Automotive Supply Chain Optimization",
      organization: "NMIMS (2025)",
      type: "Operations & Tech Gap Analysis",
      summary: "Analyzed supply chain structure of an Indian automotive company to identify localization and technology gaps, recommending strategies that enhance efficiency and responsiveness.",
      tags: ["Supply Chain", "Tech Gap Analysis", "Process Optimization", "Automotive"],
      hasPRD: false
    },
    {
      id: "laptop-pricing-sidm",
      title: "Laptop Pricing & Consumer Regression Model",
      organization: "SIDM & NMIMS (2025)",
      type: "Data Science & Pricing Analytics",
      summary: "Conducted data analysis and market trend analysis to identify key factors influencing laptop pricing and analyzed customer purchase decisions using statistical modeling and regression.",
      tags: ["Statistical Modeling", "Regression Analysis", "Pricing Analytics", "Market Trends"],
      hasPRD: false
    },
    {
      id: "prepbee-growth",
      title: "Growth Funnel & SEO Optimization",
      organization: "PrepBee (2023–2024)",
      type: "Growth & Content Marketing",
      summary: "Increased customer engagement by 15% and expanded reach by 30% through strategic content creation and SEO; A/B testing lifted click-through rates by a further 30%.",
      tags: ["A/B Testing", "Growth Hacking", "Funnel Optimization", "SEO", "Google Analytics"],
      hasPRD: false
    },
    {
      id: "ml-phishing",
      title: "ML-Based Phishing Detection",
      organization: "VIT Vellore (2021)",
      type: "Machine Learning & Cybersecurity",
      summary: "Built ML algorithms to detect phishing websites via URL analysis and researched phishing tactics to protect users from fraud and data breaches.",
      tags: ["Machine Learning", "URL Analysis", "Python", "Cybersecurity", "Data Analytics"],
      hasPRD: false
    }
  ],

  samplePRDs: [
    {
      id: "prd-genai-mule",
      title: "PRD: GenAI Mule Narrative Application",
      author: "Safal Raj (Product Manager)",
      status: "Shipped to Production",
      version: "v2.1",
      sections: [
        {
          heading: "1. Problem & Context",
          content: "Bank fraud analysts were struggling with high case volumes (17,000+ accounts/run). Manual account evaluation required toggling between 8 databases (MNRL, Digital Freeze, FRI, CPV), averaging 45 mins/case. Analysts needed an automated, explainable narrative summary for every high-risk flag."
        },
        {
          heading: "2. User Personas & Requirements",
          content: "- Fraud Analyst: Needs 1-page consolidated risk narrative in < 30 seconds.\n- Regulatory Auditor: Requires explicit rule-hit audit trail & freeze timestamp logs.\n- Risk Head: Demands drop in false-positive transaction decline values."
        },
        {
          heading: "3. Product Specification & Architecture",
          content: "Feeds Aggregator (SQL/Kafka) → Behavioral Falcon Rule Engine → GenAI Prompt Orchestrator → Output Dashboard with Freeze Action buttons."
        },
        {
          heading: "4. Success Metrics & Results",
          content: "1. Analyst Review Time: 45 min → < 5 min (89% cut).\n2. Fraud Decline Value: ₹6 Cr → ₹0.79 Cr (86% reduction).\n3. Scalability: Process 17,000+ accounts per screening run."
        }
      ]
    },
    {
      id: "prd-saas-pm",
      title: "PRD: NextGen SaaS Project Management Platform",
      author: "Safal Raj (Product Manager)",
      status: "Concept & Prototyping",
      version: "v1.0",
      sections: [
        {
          heading: "1. Executive Summary",
          content: "Designing an agile project management tool optimized for cross-functional product & engineering teams to eliminate status meeting overhead and automate sprint reporting."
        },
        {
          heading: "2. Target Market & User Research",
          content: "Surveyed 40+ engineering managers and PMs. 72% cited out-of-date Jira/Asana boards as the #1 cause of roadmap misalignment. Key need: automated progress updating based on Git commits & PR approvals."
        },
        {
          heading: "3. Core Features & Functional Requirements",
          content: "- Automated Sprint Burndown: Syncs with GitHub/GitLab.\n- AI Release Notes Generator: Converts closed PRs into customer-facing release notes.\n- Dynamic Capacity Planning: Real-time velocity tracker based on historical sprint output."
        },
        {
          heading: "4. Pricing & Business Model",
          content: "- Freemium: Free up to 5 team members.\n- Pro ($12/user/mo): Unlimited integrations & AI Release Notes.\n- Enterprise: Custom SLA & SSO security."
        }
      ]
    }
  ],

  experience: [
    {
      role: "Management Associate — Fraud Analytics",
      company: "IndusInd Bank",
      location: "Mumbai, Maharashtra",
      period: "Jun 2026 – Present",
      bullets: [
        "Optimized credit card fraud detection rules using Falcon score segmentation and transaction-behavior analysis, reducing fraud alerts by 73% and decline value by 86% (₹6 Cr → ₹0.79 Cr) while maintaining fraud-risk coverage.",
        "Automated end-to-end DOT MNRL/FRI account identification and screening by integrating regulatory data feeds with customer-account mapping, eligibility filtering, freeze validation, and CPV screening — enabling scalable processing of 17,000+ accounts per run.",
        "Designed a rule-based compliance and risk screening framework covering Digital Freeze, MNRL, LEA, FRI, BFIL segregation, Nodal Government, NRI exclusion, CPV dispositioning, and regulatory classification, improving consistency and auditability of high-risk account reviews.",
        "Co-developed a Generative AI-powered Mule Narrative application that automated account investigation and generated explainable narratives on risk scores, fraud indicators, and flagging reasons — reducing analyst review time from ~45 minutes to under 5 minutes (~89% reduction)."
      ]
    },
    {
      role: "Sales and Marketing Intern",
      company: "Jindal Steel and Power Limited",
      location: "Gurgaon, India",
      period: "Apr 2025 – May 2025",
      bullets: [
        "Conducted competitive benchmarking across 5+ competitors and market segmentation to refine B2B brand positioning.",
        "Built a website prototype optimized for lead generation, UX, and marketing-automation funnels.",
        "Developed a 360° quarterly marketing calendar and supported GTM planning by aligning product roadmap with regional demand forecasting and capacity expansion."
      ]
    },
    {
      role: "Technology Consulting Intern",
      company: "PwC India",
      location: "Gurgaon, India",
      period: "Jan 2023 – Jul 2023",
      bullets: [
        "Reduced cloud infrastructure costs by 10% through FinOps framework implementation and resource optimization.",
        "Built executive dashboards tracking KPIs to drive data-driven recommendations for client solutions.",
        "Contributed to internal tool development, enhancing managed-services operational efficiency and workflow automation."
      ]
    },
    {
      role: "Content Marketing Intern",
      company: "PrepBee",
      location: "Remote",
      period: "Nov 2023 – Jan 2024",
      bullets: [
        "Increased customer engagement by 15% and expanded reach by 30% through strategic content creation, SEO, and performance marketing.",
        "A/B testing lifted click-through rate by a further 30%."
      ]
    }
  ],

  education: [
    {
      degree: "Master of Business Administration (MBA)",
      institution: "NMIMS School of Business Management, Mumbai",
      score: "73.26 / 100",
      year: "2026",
      details: "Specialization in Product, Analytics & Growth. Focus on Data-Driven Strategy, GTM Planning, and Digital Product Development."
    },
    {
      degree: "Bachelor of Technology (B.Tech) in Information Technology",
      institution: "Vellore Institute of Technology (VIT), Vellore",
      score: "CGPA 8.63 / 10",
      year: "2023",
      details: "Focus on Software Engineering, ML Algorithms & Cyber Security."
    }
  ],

  skills: [
    {
      category: "Product & Analytics",
      skills: ["Product Strategy", "Roadmap Planning", "A/B Testing", "Go-to-Market Strategy", "Data Analysis", "SQL", "Agile", "User Research", "Rule-Based Decisioning", "PRD Authoring"]
    },
    {
      category: "Risk, Compliance & Automation",
      skills: ["Fraud Analytics", "Regulatory Screening Frameworks", "Process Automation", "GenAI Application Development", "FinOps Framework"]
    },
    {
      category: "Tools & Technologies",
      skills: ["SQL", "Excel", "PowerPoint", "Google Analytics", "CRM Software", "Marketing Automation", "Python & ML"]
    },
    {
      category: "Core Strengths",
      skills: ["Strategic Planning", "Cross-Functional Collaboration", "Stakeholder Management", "Problem Solving", "Communication"]
    }
  ],

  certifications: [
    { title: "KPMG Lean Six Sigma Green Belt", issuer: "KPMG", year: "2024" },
    { title: "Management Consulting Simulation", issuer: "Forage", year: "2024" },
    { title: "Advanced Google Analytics", issuer: "Google", year: "2022" }
  ],

  achievements: [
    { title: "National Finalist", detail: "A-1 Launchpad (2024)" },
    { title: "Semi-Finalist", detail: "Tata Imagination Challenge (2024)" },
    { title: "Semi-Finalist", detail: "Airtel iCreate (2024)" },
    { title: "National Finalist", detail: "JPMC Code for Good (2022)" }
  ]
};
