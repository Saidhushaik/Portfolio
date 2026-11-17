
document.addEventListener("DOMContentLoaded", () => {

  // ====================================
  // 1. ANIMATIONS
  // ====================================

  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true
    });
  }

  // ====================================
  // 2. NAVIGATION
  // ====================================

  const navbar = document.getElementById("navbar");
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const open = navLinks.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(open));
    });
  }

  document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
      const target = document.querySelector(
        link.getAttribute("href")
      );

      if (!target) return;

      event.preventDefault();

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      target.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start"
      });

      if (navLinks && menuToggle) {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  });

  function updateNavbar() {
    if (navbar) {
      navbar.classList.toggle("scrolled", window.scrollY > 50);
    }
  }

  window.addEventListener("scroll", updateNavbar, {
    passive: true
  });

  updateNavbar();

  // ====================================
  // 3. CHATBOT ELEMENTS
  // ====================================

  const panel = document.getElementById("chatbot-panel");
  const fab = document.getElementById("chatbot-fab");
  const closeButton = document.getElementById("chatbot-close");
  const form = document.getElementById("chatbot-form");
  const input = document.getElementById("chatbot-input");
  const messages = document.getElementById("chatbot-messages");

  if (!panel || !fab || !closeButton ||
      !form || !input || !messages) {
    return;
  }

  // ====================================
  // 4. OPEN AND CLOSE CHATBOT
  // ====================================

  function setChatOpen(open) {
    panel.classList.toggle("chatbot-hidden", !open);
    panel.setAttribute("aria-hidden", String(!open));
    fab.setAttribute("aria-expanded", String(open));
    fab.textContent = open ? "✕" : "💬";
  }

  fab.addEventListener("click", () => {
    const hidden = panel.classList.contains("chatbot-hidden");
    setChatOpen(hidden);
  });

  closeButton.addEventListener("click", () => {
    setChatOpen(false);
    fab.focus();
  });

  // ====================================
  // 5. CHATBOT KNOWLEDGE BASE
  // ====================================

  const knowledge = [
    {
      keywords: ["geico", "insurance", "current role", "current company"],
      answer:
        "Saidhu works as an AI Data Engineer at GEICO " +
        "from June 2024 to the present. He builds " +
        "Spark ETL/ELT pipelines on AWS EMR, develops " +
        "Kafka streaming pipelines, and works with " +
        "Airflow, Redshift, Azure Data Factory, " +
        "Terraform, Jenkins, and AWS CodeBuild. " +
        "His resume reports approximately 30% fewer " +
        "pipeline failures and 20% lower storage costs."
    },
    {
      keywords: ["brillio", "telecom"],
      answer:
        "Saidhu worked as a Data Engineer at Brillio LLC " +
        "from December 2022 to May 2024. He built " +
        "telecom data pipelines using GCP Pub/Sub, " +
        "Dataflow, Apache Beam, Dataproc, PySpark, " +
        "and BigQuery. His resume reports about " +
        "35% improved data latency."
    },
    {
      keywords: ["hashtek", "data analyst"],
      answer:
        "Saidhu worked as a Data Analyst at HashTek " +
        "Solutions from August 2020 to November 2021. " +
        "He worked with Spark SQL, Spark Streaming, " +
        "Kafka, Hive, Oozie, Vertica, Grafana, " +
        "Prometheus, and data validation."
    },
    {
      keywords: ["certification", "certifications", "certified", "certificate"],
      answer:
        "Saidhu's listed certifications are AWS " +
        "Certified Developer Associate (May 2025), " +
        "Databricks Generative AI Fundamental " +
        "(May 2025), Cisco Analytics Engineer " +
        "(December 2025), and Snowflake Data " +
        "Engineering Professional (January 2026)."
    },
    {
      keywords: ["education", "degree", "university", "college", "master", "graduated"],
      answer:
        "Saidhu earned a Master of Science in Big Data " +
        "Analytics from Bay Atlantic University in " +
        "Washington, DC, from January 2022 to May 2023."
    },
    {
      keywords: ["project", "projects", "highlights", "achievement"],
      answer:
        "Saidhu's engineering highlights include " +
        "insurance data pipelines on AWS EMR, " +
        "GCP telecom streaming pipelines using " +
        "Pub/Sub and Dataflow, Redshift and BigQuery " +
        "data warehousing, and pipeline reliability " +
        "improvements with Airflow, Terraform, " +
        "and CI/CD."
    },
    {
      keywords: ["kafka", "streaming", "real time", "real-time"],
      answer:
        "Saidhu has experience with Kafka streaming " +
        "pipelines at GEICO, Pub/Sub and Dataflow " +
        "streaming at Brillio, and Spark Streaming " +
        "with Kafka at HashTek Solutions."
    },
    {
      keywords: ["python", "pyspark", "spark", "sql"],
      answer:
        "Saidhu uses Python, SQL, Apache Spark, " +
        "PySpark, and Spark SQL for ETL/ELT " +
        "pipelines, data transformations, data " +
        "quality checks, and analytics."
    },
    {
      keywords: ["aws", "amazon", "redshift", "emr", "s3"],
      answer:
        "Saidhu's AWS skills include S3, EMR, " +
        "Redshift, Lambda, SNS, IAM, and CodeBuild. " +
        "At GEICO, he works with Spark on EMR, " +
        "Redshift SQL, S3 lifecycle policies, " +
        "and SNS monitoring alerts."
    },
    {
      keywords: ["gcp", "google", "bigquery", "dataflow", "dataproc", "pub/sub"],
      answer:
        "Saidhu's GCP skills include BigQuery, " +
        "Dataflow, Dataproc, Pub/Sub, Cloud Storage, " +
        "Cloud Monitoring, and Cloud Logging. " +
        "He worked with these technologies on " +
        "telecom data pipelines at Brillio."
    },
    {
      keywords: ["azure", "adf", "synapse"],
      answer:
        "Saidhu's Azure skills include Azure Data " +
        "Factory, Azure Data Lake, and Azure Synapse. " +
        "His GEICO responsibilities include " +
        "maintaining Azure Data Factory workflows."
    },
    {
      keywords: ["airflow", "terraform", "monitoring", "devops", "jenkins", "ci/cd"],
      answer:
        "Saidhu has experience with Airflow, " +
        "Terraform, Jenkins, AWS CodeBuild, " +
        "Prometheus, Grafana, and cloud monitoring " +
        "tools for orchestration, infrastructure " +
        "automation, and pipeline reliability."
    },
    {
      keywords: ["contact", "email", "phone", "linkedin", "hire", "reach"],
      answer:
        "You can reach Saidhu at " +
        "shaiksaidhu9@gmail.com or call " +
        "+1 (240) 505-5737. His LinkedIn profile " +
        "is linkedin.com/in/shaik52."
    },
    {
      keywords: ["experience", "work history", "companies", "background", "about saidhu", "who is saidhu"],
      answer:
        "Saidhu is an AI Data Engineer with 5+ years " +
        "of experience in data engineering and " +
        "analytics. He has worked at GEICO as an " +
        "AI Data Engineer, Brillio LLC as a Data " +
        "Engineer, and HashTek Solutions as a " +
        "Data Analyst."
    },
    {
      keywords: ["skill", "technology", "technologies", "tech stack", "tools", "programming"],
      answer:
        "Saidhu's technical skills include Python, " +
        "SQL, Scala, Java, Spark, PySpark, Kafka, " +
        "Apache Beam, Airflow, AWS, GCP, Azure, " +
        "Snowflake, Redshift, BigQuery, Terraform, " +
        "Jenkins, Docker, and data modeling."
    }
  ];

  // ====================================
  // 6. GENERATE CHATBOT ANSWERS
  // ====================================

  function getBotAnswer(question) {
    const text = question
      .toLowerCase()
      .replace(/[^\w\s/+.-]/g, " ")
      .replace(/\s+/g, " ")
      .trim();

    if (/^(hi|hello|hey|good morning|good afternoon)$/.test(text)) {
      return "Hello! 👋 Welcome to Saidhu's portfolio. " +
        "Ask me about his experience, skills, " +
        "education, certifications, or projects.";
    }

    for (const item of knowledge) {
      if (item.keywords.some(keyword => text.includes(keyword))) {
        return item.answer;
      }
    }

    return "I don't have that information in Saidhu's " +
      "portfolio. You can ask about his experience " +
      "at GEICO, Brillio, or HashTek, technical skills, " +
      "education, certifications, projects, or contact details.";
  }

  // ====================================
  // 7. DISPLAY CHAT MESSAGES
  // ====================================

  function addMessage(text, sender) {
    const bubble = document.createElement("div");
    bubble.className = "chat-message " + sender;
    bubble.textContent = text;

    messages.appendChild(bubble);
    messages.scrollTop = messages.scrollHeight;
  }

  // ====================================
  // 8. SEND QUESTIONS
  // ====================================

  function sendQuestion(question) {
    const text = question.trim();
    if (!text) return;

    addMessage(text, "user");
    input.value = "";

    const answer = getBotAnswer(text);
    addMessage(answer, "bot");
  }

  form.addEventListener("submit", event => {
    event.preventDefault();
    sendQuestion(input.value);
  });

  document.querySelectorAll("[data-question]").forEach(button => {
    button.addEventListener("click", () => {
      sendQuestion(button.dataset.question);
    });
  });

  // ====================================
  // 9. AUTO-OPEN CHATBOT
  // ====================================

  setChatOpen(true);

});
