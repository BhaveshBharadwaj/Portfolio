/**
 * @file assets/js/data.js
 * Global portfolio data declaration for Bhavesh Bharadwaj
 * Zero-build-step architecture: declared directly on window.portfolioData to avoid CORS issues on file:// and GitHub Pages.
 */

window.portfolioData = {
  meta: {
    name: "Bhavesh Bharadwaj",
    initials: "BB",
    roleTitle: "Associate Cloud Engineer",
    shortRole: "Cloud Engineer & DevOps Automation Specialist",
    summary: "Cloud Engineer with 4+ years of professional experience administering and automating Google Cloud Platform environments. Experienced in GCP IAM, VPC & firewall security, Organization Policies, monitoring with Prometheus, Grafana and Google Cloud Monitoring, CI/CD with GitHub Actions and Cloud Build, and infrastructure automation using Terraform, Docker, Python and Bash. Holds Google Associate Cloud Engineer and AWS DevOps Engineer – Professional certifications. Available to join immediately.",
    location: "asia-south1 · Hyderabad, India",
    coordinates: "17.3850° N, 78.4867° E",
    experienceYears: "4+ Years Cloud & DevOps",
    uptime: "4+ years production uptime",
    statusText: "Operational · Available to Join Immediately",
    email: "bhaveshbharadwaj24@gmail.com",
    phone: "+91-8790419675",
    github: "https://github.com/bhaveshbharadwaj",
    linkedin: "https://www.linkedin.com/in/bhaveshbharadwaj",
    stats: [
      { value: "4+ Yrs", label: "Cloud & DevOps Experience", change: "GCP & AWS production" },
      { value: "40%", label: "Manual Effort Reduced", change: "Serverless ETL workflows" },
      { value: "21%", label: "Process Efficiency Gain", change: "Data & workflow automation" },
      { value: "Immediate", label: "Notice Period", change: "Ready to deploy" }
    ]
  },

  // 3D Isometric Pipeline Nodes (Representing Bhavesh's GCP & Cloud Architecture)
  isometricNodes: [
    {
      id: "source",
      label: "Source & Version Control",
      platform: "GitHub & Git",
      icon: "fa-brands fa-github",
      tag: "v1.4.0",
      status: "Synced",
      health: 100,
      description: "Repository management, protected branches, pull requests, and automated triggers.",
      metrics: { commits: "24/day", branches: "6 active", prChecks: "100% pass" },
      color: "#ff781f",
      coords: { x: 0, y: 0, z: 20 }
    },
    {
      id: "cicd",
      label: "CI/CD & Cloud Build",
      platform: "Cloud Build & Actions",
      icon: "fa-solid fa-code-merge",
      tag: "Automated",
      status: "Active",
      health: 99.8,
      description: "Automated container builds, unit testing, and continuous deployment pipelines.",
      metrics: { buildTime: "2m 45s", successRate: "99.8%", concurrency: "8 runners" },
      color: "#ff6b00",
      coords: { x: 1, y: 0, z: 45 }
    },
    {
      id: "iac",
      label: "IaC & GCP Governance",
      platform: "Terraform & GCP IAM",
      icon: "fa-solid fa-cubes",
      tag: "Least-Privilege",
      status: "Compliant",
      health: 100,
      description: "Declarative infrastructure, service account least-privilege, Org Policies & VPC firewalls.",
      metrics: { modules: "26 verified", drifts: "0 detected", auditScore: "100%" },
      color: "#ff8c00",
      coords: { x: 2, y: 1, z: 30 }
    },
    {
      id: "cluster",
      label: "Container Runtime & Data",
      platform: "GKE & BigQuery",
      icon: "fa-solid fa-network-wired",
      tag: "Kubernetes & Serverless",
      status: "Healthy",
      health: 100,
      description: "Scalable GKE clusters, Cloud Run services, Cloud Functions, and BigQuery data processing.",
      metrics: { activePods: "32 running", queryLatency: "180ms", processingRate: "1.2M rows/hr" },
      color: "#ff5400",
      coords: { x: 3, y: 1, z: 50 }
    },
    {
      id: "observability",
      label: "Observability & Alerting",
      platform: "Cloud Monitoring & Grafana",
      icon: "fa-solid fa-chart-line",
      tag: "Telemetry",
      status: "Nominal",
      health: 99.99,
      description: "Prometheus metrics scraping, custom Grafana dashboards, Cloud Audit Logs, and alerting.",
      metrics: { p99Latency: "14.2ms", uptime: "99.99%", activeAlerts: "0 P1/P2" },
      color: "#ff781f",
      coords: { x: 4, y: 2, z: 35 }
    }
  ],

  // 3 Detailed Architectural Case Studies reflecting Bhavesh's Experience & Projects
  caseStudies: [
    {
      id: "serverless-data-pipeline",
      number: "01",
      title: "Automated Serverless Data Pipeline on GCP",
      category: "Data Engineering & Serverless ETL",
      lead: "Eliminating manual reporting toil with an event-driven serverless pipeline integrating BigQuery, Cloud Functions, and scheduled workflows.",
      tools: ["Google BigQuery", "Cloud Functions", "Python", "Cloud Storage", "Google Cloud Monitoring", "Cloud Scheduler"],
      problem: "Manual ingestion and transformation of large, heterogeneous business datasets caused critical delays in decision-making, frequent reporting bottlenecks, and human operational error in report generation.",
      solution: "Engineered an event-driven serverless ETL pipeline on Google Cloud Platform. Cloud Storage object finalization triggers Python-based Cloud Functions that clean, validate, and load structured records into BigQuery. Scheduled workflows automate downstream analytical transformations and sync KPI reporting.",
      metrics: [
        { value: "40%", label: "Manual Effort Reduction", context: "Automated daily ingestion & reporting" },
        { value: "<3 min", label: "Pipeline Latency", context: "From raw upload to BigQuery tables" },
        { value: "99.9%", label: "Data Accuracy", context: "Automated schema validation checks" }
      ],
      architectureSteps: [
        "Raw data files uploaded to secure Google Cloud Storage bucket with IAM restricted service accounts.",
        "Cloud Storage Pub/Sub event triggers serverless Python Cloud Function with automated schema sanitization.",
        "Processed records ingested into partitioned Google BigQuery dataset with optimized query clustering.",
        "Cloud Scheduler initiates automated analytical aggregations and triggers KPI report generation.",
        "Cloud Monitoring and Alerting track data freshness, execution status, and resource usage."
      ],
      badge: "Production Deployed"
    },
    {
      id: "gcp-iac-least-privilege",
      number: "02",
      title: "GCP Infrastructure as Code & Least-Privilege IAM",
      category: "Security, Governance & IaC",
      lead: "Enforcing declarative Terraform provisioning, granular service account privileges, and Organization Policies across GCP projects.",
      tools: ["Terraform", "GCP IAM", "Service Accounts", "VPC & Firewall Rules", "Secret Manager", "Organization Policies"],
      problem: "Ad-hoc resource provisioning and broad IAM roles across cloud environments introduced security vulnerabilities, elevated permissions risks, and inconsistent firewall and VPC network topologies.",
      solution: "Standardized GCP infrastructure using modular Terraform templates. Configured strict least-privilege IAM roles and dedicated service accounts for applications, hardened VPC firewall boundaries, isolated private subnets with OS Login and IAP, and enforced organizational guardrails.",
      metrics: [
        { value: "100%", label: "Least-Privilege Audit", context: "Zero permanent broad primitive roles" },
        { value: "0", label: "Configuration Drift", context: "All infrastructure managed via Terraform" },
        { value: "100%", label: "Secret Hygiene", context: "Managed securely via GCP Secret Manager" }
      ],
      architectureSteps: [
        "Modular Terraform repository structures networking, VPCs, firewall rules, and compute resources.",
        "Dedicated GCP Service Accounts configured with minimal role bindings strictly required by workloads.",
        "GCP Secret Manager integration securely provisions API keys and database credentials dynamically.",
        "Cloud Audit Logs and Cloud Logging stream IAM events to centralized monitoring for security posture.",
        "Terraform CI/CD execution ensures all modifications are peer-reviewed and tested before apply."
      ],
      badge: "Security Hardened"
    },
    {
      id: "containerized-storage-observability",
      number: "03",
      title: "Containerized Cloud Storage & Full-Stack Observability",
      category: "Containers, Microservices & SRE",
      lead: "Developing containerized web services with secure cloud storage backends, monitored by Prometheus, Grafana, and Cloud Monitoring.",
      tools: ["Docker", "Google Kubernetes Engine (GKE)", "Flask / FastAPI", "AWS S3 / Cloud Storage", "Prometheus", "Grafana"],
      problem: "Monolithic file storage and lack of real-time telemetry prevented visibility into latency spikes, storage operation bottlenecks, and application error rates.",
      solution: "Developed a containerized microservice application using Python (Flask/FastAPI) and Docker, deploying to Google Kubernetes Engine (GKE) and connecting securely to cloud object storage. Integrated Prometheus metrics exporters and designed real-time Grafana dashboards with Google Cloud Monitoring alerts.",
      metrics: [
        { value: "99.95%", label: "Service Availability", context: "Containerized GKE replica sets" },
        { value: "Real-time", label: "Metric Telemetry", context: "Prometheus scraping & Grafana visualization" },
        { value: "Automated", label: "Alert Dispatch", context: "Proactive threshold alerts on error spikes" }
      ],
      architectureSteps: [
        "Multi-stage Docker builds produce lightweight, secure container images running as non-root.",
        "Deployments orchestrated on GKE with resource limits, liveness/readiness probes, and horizontal scaling.",
        "Secure IAM-authenticated storage connectors interact with cloud buckets without static access keys.",
        "Prometheus scrapes application metrics endpoints, streaming performance telemetry to Grafana.",
        "Google Cloud Monitoring dashboards and alert policies notify teams of anomalies proactively."
      ],
      badge: "SRE Monitored"
    }
  ],

  // Interactive CI/CD Pipeline Visualizer Data (Tailored to Cloud Build & GitHub Actions)
  pipelineDemo: {
    title: "Live Cloud Delivery Pipeline Simulator",
    subtitle: "Interactive execution flow simulating an end-to-end containerized release to Google Kubernetes Engine (GKE).",
    stages: [
      {
        id: "stage-source",
        name: "Source & PR",
        icon: "fa-brands fa-git-alt",
        tool: "GitHub",
        status: "passed",
        duration: "10s",
        details: "Branch protection rules, pull request validation, and semantic version tagging.",
        log: [
          "[source] fetching origin/main from repository...",
          "[source] pull request #24 verified with required approvals",
          "[source] detected changes in: /data-pipeline, /api-service, /terraform",
          "[source] commit 9e4a12b checked out successfully"
        ]
      },
      {
        id: "stage-lint",
        name: "Lint & Validate",
        icon: "fa-solid fa-shield-halved",
        tool: "Flake8 & Pytest",
        status: "passed",
        duration: "32s",
        details: "Static code analysis, Python unit testing, and Dockerfile syntax validation.",
        log: [
          "[lint] executing flake8 on Python modules...",
          "[lint] 0 syntax errors, PEP 8 formatting confirmed",
          "[test] running pytest suite: 48 passed in 14.2s",
          "[security] secret scanning: 0 API keys or credentials exposed"
        ]
      },
      {
        id: "stage-build",
        name: "Container Build",
        icon: "fa-brands fa-docker",
        tool: "Docker & Cloud Build",
        status: "passed",
        duration: "1m 15s",
        details: "Container image build with layer caching, pushed to Google Artifact Registry.",
        log: [
          "[build] Cloud Build worker initialized...",
          "[build] cache hit on python:3.11-slim base layer",
          "[build] installing dependencies from requirements.txt",
          "[build] image tagged asia-south1-docker.pkg.dev/prod/apps/service:v1.4.0",
          "[build] pushed container digest sha256:8b71d9a..."
        ]
      },
      {
        id: "stage-security",
        name: "IaC & Governance",
        icon: "fa-solid fa-lock",
        tool: "Terraform & GCP IAM",
        status: "passed",
        duration: "24s",
        details: "Terraform plan verification, GCP IAM least-privilege review, and Org Policy compliance.",
        log: [
          "[iac] running terraform validate...",
          "[iac] validating GCP resource specifications against Org Policies",
          "[iac] checking IAM least-privilege bindings: PASSED",
          "[iac] VPC firewall ingress rules verified strictly internal"
        ]
      },
      {
        id: "stage-deploy",
        name: "GKE Deployment",
        icon: "fa-solid fa-cloud-arrow-up",
        tool: "Google Cloud Build",
        status: "running",
        duration: "38s",
        details: "Rolling update to Google Kubernetes Engine cluster with automated health checks.",
        log: [
          "[deploy] authenticating to GKE cluster: gke-prod-asia-south1",
          "[deploy] applying updated Kubernetes deployment manifests",
          "[deploy] rolling update: 4 new pods initialized, health probes 200 OK",
          "[deploy] Cloud Monitoring telemetry active, zero downtime recorded"
        ]
      }
    ]
  },

  // Interactive Terminal Command Map
  terminalCommands: {
    "help": {
      desc: "Lists available CLI commands",
      output: [
        "<span class='term-cyan'>AVAILABLE COMMANDS:</span>",
        "  <span class='term-yellow'>kubectl get pods -n production</span>   Inspect real-time Kubernetes pods status",
        "  <span class='term-yellow'>terraform plan</span>                  Preview speculative GCP infrastructure changes",
        "  <span class='term-yellow'>cat resume.txt</span>                  View Bhavesh's complete experience, skills & credentials",
        "  <span class='term-yellow'>gcloud info</span>                     Display GCP environment context & configuration",
        "  <span class='term-yellow'>cat stack.yaml</span>                  Output full declared cloud & DevOps toolchain",
        "  <span class='term-yellow'>whoami</span>                          Display engineer identity & contact information",
        "  <span class='term-yellow'>curl -I /healthz</span>                 Check edge service health, uptime and telemetry",
        "  <span class='term-yellow'>theme [light|dark]</span>             Control site theme mode from terminal",
        "  <span class='term-yellow'>clear</span>                          Clear terminal viewport"
      ]
    },

    "kubectl get pods -n production": {
      desc: "Outputs Kubernetes pod status in production namespace",
      output: [
        "<span class='term-dim'>NAME                                READY   STATUS    RESTARTS   AGE     NODE</span>",
        "data-pipeline-worker-6b8f9-4d8w1    1/1     <span class='term-green'>Running</span>   0          5d14h   gke-node-pool-1.c",
        "data-pipeline-worker-6b8f9-9m2k7    1/1     <span class='term-green'>Running</span>   0          5d14h   gke-node-pool-1.c",
        "api-service-7f98d4cc-x2p09          1/1     <span class='term-green'>Running</span>   0          12d     gke-node-pool-2.c",
        "bigquery-sync-agent-884b6-h8t3p     1/1     <span class='term-green'>Running</span>   0          21d     gke-node-pool-2.c",
        "prometheus-node-exporter-4m12a     1/1     <span class='term-green'>Running</span>   0          30d     gke-node-pool-1.c",
        "cloud-logging-fluentbit-d891b       1/1     <span class='term-green'>Running</span>   0          30d     gke-node-pool-2.c",
        "",
        "<span class='term-green'>✔ 6/6 pods Healthy</span> | <span class='term-cyan'>Namespace: production</span> | <span class='term-dim'>Cluster: gke-prod-asia-south1</span>"
      ]
    },

    "terraform plan": {
      desc: "Outputs speculative GCP resource modifications",
      output: [
        "<span class='term-dim'>Acquiring state lock from 'gs://bhavesh-tfstate-asia-south1'...</span>",
        "<span class='term-cyan'>Lock acquired: id=gcp-state-91ab42-lock</span>",
        "",
        "Terraform will perform the following actions:",
        "",
        "  <span class='term-green'>+ google_container_node_pool.app_pool</span>",
        "      cluster              = \"gke-prod-asia-south1\"",
        "      node_count           = 4",
        "      machine_type         = \"e2-standard-4\"",
        "      autoscaling.max      = 10",
        "",
        "  <span class='term-green'>+ google_bigquery_dataset.analytics_prod</span>",
        "      dataset_id           = \"reporting_analytics_pipeline\"",
        "      location             = \"asia-south1\"",
        "",
        "  <span class='term-yellow'>~ google_project_iam_member.service_account_least_privilege</span>",
        "      <span class='term-red'>- role = \"roles/editor\"</span>",
        "      <span class='term-green'>+ role = \"roles/bigquery.dataEditor\"</span>",
        "",
        "<span class='term-green'>Plan:</span> 2 to add, 1 to change, 0 to destroy.",
        "<span class='term-cyan'>✔ GCP Organization Policy Check: 0 violations detected.</span>"
      ]
    },

    "gcloud info": {
      desc: "Displays GCP project configuration and active account",
      output: [
        "<span class='term-cyan'>Google Cloud SDK [508.0.0]</span>",
        "Account: <span class='term-yellow'>bhaveshbharadwaj24@gmail.com</span>",
        "Project: <span class='term-green'>production-cloud-fleet</span>",
        "Current Zone: <span class='term-dim'>asia-south1-a (Hyderabad/Mumbai)</span>",
        "Default Region: <span class='term-dim'>asia-south1</span>",
        "GKE Context: <span class='term-green'>gke_production-cloud-fleet_asia-south1_prod-cluster</span>",
        "Status: <span class='term-green'>Authenticated & Active</span>"
      ]
    },

    "cat resume.txt": {
      desc: "Prints concise career highlights and qualifications",
      output: [
        "<span class='term-cyan'>═════════════════════════════════════════════════════════════════</span>",
        "<span class='term-bold'>BHAVESH BHARADWAJ</span> — Associate Cloud Engineer",
        "Location: Hyderabad, India (asia-south1 / UTC+05:30)",
        "Phone: +91-8790419675 | Email: bhaveshbharadwaj24@gmail.com",
        "Experience: 4+ Years in Cloud Engineering & Infrastructure Automation",
        "Availability: <span class='term-green'>Available to join immediately</span>",
        "<span class='term-cyan'>═════════════════════════════════════════════════════════════════</span>",
        "",
        "<span class='term-yellow'>PROFESSIONAL EXPERIENCE:</span>",
        "  • <span class='term-bold'>Cognizant Technology Solutions</span>, Hyderabad (Feb 2025 – Dec 2026)",
        "    Associate Cloud Engineer — GCP Administration, IAM Least-Privilege,",
        "    CI/CD with GitHub Actions & Cloud Build, Terraform IaC, Docker, GKE,",
        "    BigQuery Data Pipelines, Monitoring with Grafana & Prometheus.",
        "  • <span class='term-bold'>Sutherland Global Services</span>, Hyderabad (May 2023 – Dec 2024)",
        "    Junior Data Analyst — PostgreSQL Query Optimization, Python (Pandas) ETL,",
        "    Automated KPI Reporting, 21% Decision Workflow Efficiency Improvement.",
        "",
        "<span class='term-yellow'>CORE CERTIFICATIONS:</span>",
        "  • Google Associate Cloud Engineer",
        "  • Google Cloud Digital Leader",
        "  • AWS Certified DevOps Engineer – Professional",
        "  • AWS Certified Cloud Practitioner",
        "",
        "<span class='term-yellow'>EDUCATION:</span>",
        "  • B.Tech in Computer Science and Engineering",
        "    St. Peter's Engineering College, JNTUH (2019 – 2023)",
        "",
        "<span class='term-yellow'>LANGUAGES:</span>",
        "  • English, Telugu, Hindi, Japanese"
      ]
    },

    "curl -I /healthz": {
      desc: "Checks service uptime and edge telemetry",
      output: [
        "HTTP/2 200 OK",
        "date: " + new Date().toUTCString(),
        "server: gke-ingress/envoy",
        "content-type: application/json; charset=utf-8",
        "x-cloud-trace-context: 9a71b4e288921a/1",
        "x-region: asia-south1 (Hyderabad)",
        "status: {\"system\":\"healthy\",\"gcp_iam\":\"least_privilege\",\"bigquery\":\"connected\",\"uptime\":\"4y+\"}"
      ]
    },

    "cat stack.yaml": {
      desc: "Outputs complete infrastructure toolchain",
      output: [
        "<span class='term-cyan'>stack:</span>",
        "  <span class='term-yellow'>cloud_platforms:</span> [Google Cloud Platform (GCP), AWS (S3, EC2, IAM)]",
        "  <span class='term-yellow'>gcp_services:</span> [IAM, GKE, Cloud Run, Cloud Functions, BigQuery, VPC, Secret Manager, Cloud Storage]",
        "  <span class='term-yellow'>containers_orchestration:</span> [Docker, Google Kubernetes Engine (GKE)]",
        "  <span class='term-yellow'>cicd_devops:</span> [GitHub Actions, Google Cloud Build, Git, GitHub]",
        "  <span class='term-yellow'>iac_governance:</span> [Terraform, GCP IAM, Organization Policies, Firewall Rules]",
        "  <span class='term-yellow'>monitoring_logging:</span> [Google Cloud Monitoring, Cloud Logging, Cloud Audit Logs, Prometheus, Grafana]",
        "  <span class='term-yellow'>scripting_development:</span> [Python, Bash, SQL, FastAPI, Flask, REST APIs]",
        "  <span class='term-yellow'>databases:</span> [PostgreSQL, BigQuery]",
        "  <span class='term-yellow'>os_admin:</span> [Linux Ubuntu Administration, Networking]",
        "<span class='term-cyan'>status:</span> <span class='term-green'>ready_to_join_immediately</span>"
      ]
    },

    "whoami": {
      desc: "Prints user information",
      output: [
        "<span class='term-green'>bhavesh@cloud-platform</span>",
        "Name: Bhavesh Bharadwaj",
        "Role: Associate Cloud Engineer",
        "Location: Hyderabad, India (17.3850° N, 78.4867° E)",
        "Phone: +91-8790419675",
        "Email: bhaveshbharadwaj24@gmail.com",
        "Certifications: Google Associate Cloud Engineer, AWS DevOps Engineer – Professional",
        "Status: Available to join immediately"
      ]
    }
  },

  // Tech stack categories for the Stack matrix
  techStackMatrix: [
    {
      category: "GCP Administration & Security",
      description: "Least-privilege IAM, organizational governance, network security, and managed services",
      items: [
        { name: "GCP IAM & Service Accounts", icon: "fa-solid fa-key", role: "Least-Privilege Security" },
        { name: "VPC & Firewall Rules", icon: "fa-solid fa-shield-halved", role: "Network Isolation & IAP" },
        { name: "Organization Policies", icon: "fa-solid fa-building-shield", role: "Enterprise Compliance" },
        { name: "Compute Engine & Cloud Run", icon: "fa-solid fa-server", role: "Serverless & VM Workloads" },
        { name: "Cloud Functions & Storage", icon: "fa-solid fa-cloud", role: "Event-Driven Processing" }
      ]
    },
    {
      category: "Containers & Orchestration",
      description: "Elastic, fault-tolerant container clusters and multi-cloud foundations",
      items: [
        { name: "Google Kubernetes Engine (GKE)", icon: "fa-solid fa-dharmachakra", role: "Container Orchestration & Scaling" },
        { name: "Docker", icon: "fa-brands fa-docker", role: "Containerization & Multi-stage Builds" },
        { name: "Cloud Run", icon: "fa-solid fa-cubes", role: "Managed Serverless Containers" },
        { name: "AWS Cloud (S3, EC2, IAM)", icon: "fa-brands fa-aws", role: "Multi-Cloud Storage & Compute" },
        { name: "Firebase & Secret Manager", icon: "fa-solid fa-vault", role: "App Backend & Secrets Vault" }
      ]
    },
    {
      category: "CI/CD & Infrastructure as Code",
      description: "Automated delivery engines, Git repository operations, and declarative IaC",
      items: [
        { name: "Terraform (IaC)", icon: "fa-solid fa-cubes", role: "Declarative Infrastructure as Code" },
        { name: "GitHub Actions", icon: "fa-brands fa-github", role: "Automated CI/CD Workflows" },
        { name: "Google Cloud Build", icon: "fa-solid fa-code-merge", role: "GCP Native Build & Deployment" },
        { name: "Git & GitHub", icon: "fa-brands fa-git-alt", role: "Repository & PR Management" },
        { name: "Bash Scripting", icon: "fa-solid fa-terminal", role: "Linux & Cloud CLI Automation" }
      ]
    },
    {
      category: "Monitoring, Logging & Data",
      description: "Full-stack observability, event tracking, and data processing systems",
      items: [
        { name: "Google Cloud Monitoring", icon: "fa-solid fa-chart-line", role: "Metrics, Dashboards & Alerting" },
        { name: "Cloud Logging & Audit Logs", icon: "fa-solid fa-file-waveform", role: "Audit Trail & Log Analysis" },
        { name: "Prometheus & Grafana", icon: "fa-solid fa-gauge-high", role: "Telemetry & Custom Visualizations" },
        { name: "BigQuery & SQL", icon: "fa-solid fa-database", role: "Scalable Data Analytics & ETL" },
        { name: "Python, FastAPI & PostgreSQL", icon: "fa-brands fa-python", role: "Automation, APIs & Relational DB" }
      ]
    }
  ],

  // Career deployment history (reflecting authentic details from Bhavesh's Resume)
  workExperience: [
    {
      company: "Cognizant Technology Solutions",
      location: "Hyderabad, India",
      role: "Associate Cloud Engineer",
      period: "Feb 2025 → Dec 2026",
      duration: "Current",
      isCurrent: true,
      tag: "HEAD · production",
      description: "Administering and automating GCP and Google Workspace environments with least-privilege IAM and secure service accounts. Building automated workflows with Python, Bash, and Apps Script, designing scalable BigQuery and Kubernetes data pipelines, maintaining CI/CD pipelines via GitHub Actions and Cloud Build, and automating infrastructure using Terraform and Docker. Monitoring cloud health using Cloud Monitoring, Grafana, and Prometheus.",
      skills: ["Google Cloud Platform", "Terraform", "Docker", "GKE", "GitHub Actions", "Cloud Build", "BigQuery", "Prometheus", "Grafana", "Python", "GCP IAM"]
    },
    {
      company: "Sutherland Global Services",
      location: "Hyderabad, India",
      role: "Junior Data Analyst",
      period: "May 2023 → Dec 2024",
      duration: "1 year 8 months",
      isCurrent: false,
      tag: "release/2023.05-2024.12",
      description: "Wrote and optimized complex SQL queries on PostgreSQL, reducing processing latency. Automated business reporting using Python (Pandas), Excel, and Tableau to enable faster decision-making. Cleaned, transformed, and validated high-volume datasets across systems, improving business decision processes by 21%.",
      skills: ["PostgreSQL", "SQL Optimization", "Python (Pandas)", "Data ETL", "Tableau", "Workflow Automation", "KPI Analysis"]
    }
  ],

  // Projects specified in Resume
  projects: [
    {
      title: "Automated Data Pipeline on GCP (Serverless)",
      platform: "Google Cloud Platform",
      tools: ["Python", "BigQuery", "Cloud Functions", "Cloud Storage", "Cloud Scheduler"],
      description: "Built an event-driven serverless ETL pipeline using Python, BigQuery, and serverless functions. Automated data ingestion and transformation with scheduled workflows, reducing manual reporting effort by 40%."
    },
    {
      title: "Containerized Cloud File Storage System on AWS",
      platform: "Amazon Web Services",
      tools: ["Docker", "Python Flask", "AWS S3", "AWS IAM", "CI/CD"],
      description: "Developed a Flask application using AWS S3 for scalable storage and IAM for least-privilege access control. Containerized the application with Docker and designed an automated deployment workflow aligned with CI/CD practices."
    }
  ],

  // Certifications, Education & Languages
  credentials: {
    certifications: [
      {
        name: "Google Associate Cloud Engineer",
        issuer: "Google Cloud",
        validity: "Active Credential",
        badgeId: "GCP-ACE",
        verifyUrl: "https://cloud.google.com/certification"
      },
      {
        name: "Google Cloud Digital Leader",
        issuer: "Google Cloud",
        validity: "Active Credential",
        badgeId: "GCP-CDL",
        verifyUrl: "https://cloud.google.com/certification"
      },
      {
        name: "AWS Certified DevOps Engineer – Professional",
        issuer: "Amazon Web Services",
        validity: "Active Credential",
        badgeId: "AWS-DOP",
        verifyUrl: "https://aws.amazon.com/certification"
      },
      {
        name: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        validity: "Active Credential",
        badgeId: "AWS-CCP",
        verifyUrl: "https://aws.amazon.com/certification"
      }
    ],

    education: {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science and Engineering",
      institution: "St. Peter's Engineering College, JNTUH",
      years: "Aug 2019 → Mar 2023"
    },

    languages: [
      { name: "English", level: "Professional Working Proficiency" },
      { name: "Telugu", level: "Native / Bilingual" },
      { name: "Hindi", level: "Professional Working Proficiency" },
      { name: "Japanese", level: "Conversational / Elementary" }
    ]
  }
};
