/**
 * @file assets/js/data.js
 * Global portfolio data declaration for Puneeth Aradhya
 * Zero-build-step architecture: declared directly on window.portfolioData to avoid CORS issues on file:// and GitHub Pages.
 */

window.portfolioData = {
  meta: {
    name: "Puneeth Aradhya",
    initials: "PA",
    roleTitle: "Senior DevOps & Cloud Infrastructure Engineer",
    shortRole: "Senior Platform & DevOps Architect",
    summary: "Senior DevOps Engineer with 10+ years specializing in Enterprise CI/CD Architecture, GitOps, DevSecOps, Multi-Region Infrastructure, and Platform Modernization. Engineering resilient delivery pipelines that turn complex deployments into non-events.",
    location: "ap-south-1 · Mysuru & Bengaluru, India",
    coordinates: "12.2958° N, 76.6394° E",
    experienceYears: "10+ Years Enterprise Delivery",
    uptime: "10y+ production uptime",
    statusText: "Operational · Open to Senior / Staff Platform Roles",
    email: "aradhyapuneeth@gmail.com",
    github: "https://github.com/aradhyapuneeth",
    linkedin: "https://www.linkedin.com/in/puneeth-aradhya",
    devpost: "https://devpost.com/aradhyapuneeth",
    stats: [
      { value: "400+", label: "Enterprise Apps Supported", change: "+100% cloud parity" },
      { value: "120+", label: "Microservices Migrated", change: "Zero data loss" },
      { value: "0%", label: "Deployment Downtime", change: "Blue/Green GitOps" },
      { value: "75%", label: "P1 MTTR Reduction", change: "Self-healing triggers" }
    ]
  },

  // 3D Isometric Pipeline Nodes (Matching the visual flow in reference video)
  isometricNodes: [
    {
      id: "source",
      label: "Source Code",
      platform: "GitHub Enterprise",
      icon: "fa-brands fa-github",
      tag: "v2.8.4",
      status: "Synced",
      health: 100,
      description: "Signed commit streams, protected branch rules, and semantic versioning triggers.",
      metrics: { commits: "48/day", branches: "12 active", prChecks: "100% pass" },
      color: "#ff781f",
      coords: { x: 0, y: 0, z: 20 }
    },
    {
      id: "cicd",
      label: "CI/CD Orchestration",
      platform: "ArgoCD & GitHub Actions",
      icon: "fa-solid fa-code-merge",
      tag: "Declarative",
      status: "Active",
      health: 99.8,
      description: "Ephemeral runner pools, containerized test harnesses, and automated matrix builds.",
      metrics: { buildTime: "3m 12s", successRate: "99.8%", concurrency: "16 runners" },
      color: "#ff6b00",
      coords: { x: 1, y: 0, z: 45 }
    },
    {
      id: "iac",
      label: "IaC & Governance",
      platform: "Terraform & Vault",
      icon: "fa-solid fa-cubes",
      tag: "Policy-as-Code",
      status: "Compliant",
      health: 100,
      description: "Immutable state locking, HashiCorp Vault dynamic secrets, and OPA compliance guardrails.",
      metrics: { modules: "48 verified", drifts: "0 detected", auditScore: "100%" },
      color: "#ff8c00",
      coords: { x: 2, y: 1, z: 30 }
    },
    {
      id: "cluster",
      label: "Cluster Runtime",
      platform: "AWS EKS Multi-Region",
      icon: "fa-solid fa-network-wired",
      tag: "K8s v1.31",
      status: "Healthy",
      health: 100,
      description: "High-density pod autoscaling, service mesh traffic splitting, and automated drain/cordon.",
      metrics: { activePods: "64 running", cpuUtil: "28.4%", memory: "14.2 GB" },
      color: "#ff5400",
      coords: { x: 3, y: 1, z: 50 }
    },
    {
      id: "observability",
      label: "Observability",
      platform: "Prometheus & Grafana",
      icon: "fa-solid fa-chart-line",
      tag: "Telemetry",
      status: "Nominal",
      health: 99.99,
      description: "Distributed tracing, real-time alertmanager routing, and synthetic latency monitors.",
      metrics: { p99Latency: "18.4ms", uptime: "99.999%", activeAlerts: "0 P1/P2" },
      color: "#ff781f",
      coords: { x: 4, y: 2, z: 35 }
    }
  ],

  // 3 Detailed Architectural Case Studies specified in requirements
  caseStudies: [
    {
      id: "gitops-zero-downtime",
      number: "01",
      title: "Zero-Downtime Multi-Region GitOps",
      category: "High-Availability Architecture",
      lead: "Eliminating release bottlenecks and downtime with automated declarative GitOps and blue/green traffic shifting across AWS regions.",
      tools: ["Kubernetes (EKS)", "ArgoCD", "Terraform", "AWS Route53", "GitHub Actions", "Helm"],
      problem: "Enterprise production releases suffered from recurring manual deployment bottlenecks, multi-hour coordination meetings, and unpredictable 502 service outages during rolling updates across distributed geographical regions.",
      solution: "Engineered an automated declarative GitOps deployment system using ArgoCD and GitHub Actions. Implemented blue/green traffic shifting managed by Route53 Weighted Routing and AWS Application Load Balancers, with instant automated health probes and sub-second rollbacks on anomaly detection.",
      metrics: [
        { value: "0%", label: "Deployment Downtime", context: "Across all peak-traffic releases" },
        { value: "6 min", label: "Cycle Duration", context: "Reduced from 45 minutes baseline" },
        { value: "99.999%", label: "Service SLA", context: "Multi-region failover resilience" }
      ],
      architectureSteps: [
        "Git Commit & Semantic Release tagging initiates signed multi-architecture container build.",
        "GitHub Actions runs automated vulnerability scanning (Trivy) and updates Kubernetes manifests.",
        "ArgoCD controller detects repository state change, applying sync loops across us-east-1 and eu-west-1 EKS clusters.",
        "ALB Ingress Controller routes 5% synthetic canary traffic, validating HTTP response latency and error budget.",
        "Route53 automated weighted policy shifts 100% production traffic once health gates pass."
      ],
      badge: "Production Deployed"
    },
    {
      id: "iac-compliance-automation",
      number: "02",
      title: "Infrastructure as Code & Compliance Automation",
      category: "Security & Governance",
      lead: "Enforcing shift-left policy-as-code linting and automated drift detection to achieve 100% compliance across multi-account AWS environments.",
      tools: ["Terraform Cloud", "AWS IAM", "HashiCorp Vault", "Open Policy Agent (OPA)", "GitHub Actions", "Checkov"],
      problem: "Unstructured, ad-hoc AWS resource modifications across multiple development teams caused severe security audit failures, orphaned resources, untracked privilege escalation, and costly cloud configuration drift.",
      solution: "Enforced strict Git-driven Infrastructure as Code using Terraform modules integrated with Open Policy Agent (OPA) and Checkov. All Pull Requests automatically evaluate 42+ custom Rego compliance rules (KMS encryption, S3 public block, strict VPC isolation) and authenticate via short-lived HashiCorp Vault dynamic STS tokens.",
      metrics: [
        { value: "100%", label: "Audit Compliance", context: "Passed SOC2 and CIS benchmarks" },
        { value: "0", label: "Unapproved Drifts", context: "Automated drift reconciliation" },
        { value: "<90s", label: "PR Validation Time", context: "42+ compliance checks per run" }
      ],
      architectureSteps: [
        "Engineer opens Pull Request with modular Terraform code modifications.",
        "CI runner triggers HashiCorp Vault OIDC integration, issuing temporary 15-minute AWS credentials.",
        "OPA Rego engine and Checkov inspect speculative plan against enterprise compliance policies.",
        "Automated PR comment annotates cost estimations (Infracost) and policy verification results.",
        "Merge to main automatically triggers Terraform Cloud remote state apply with full audit logs."
      ],
      badge: "Audited & Verified"
    },
    {
      id: "observability-self-healing",
      number: "03",
      title: "Event-Driven Observability & Self-Healing",
      category: "Site Reliability Engineering",
      lead: "Autonomous incident mitigation engine that catches memory leaks and latency degradation before alerts reach on-call engineers.",
      tools: ["Prometheus", "Grafana", "AWS Lambda", "Python", "PagerDuty API", "OpenTelemetry"],
      problem: "High Mean Time to Resolution (MTTR ~28 minutes) caused by reactive manual triaging during sudden memory leaks, microservice cascading timeouts, and node memory thrashing during traffic spikes.",
      solution: "Designed and deployed a proactive event-driven self-healing framework. Prometheus Alertmanager webhooks stream anomaly vectors into serverless AWS Lambda remediation workers written in Python. The workers autonomously execute pre-verified playbooks: gradual pod rotation, HPA preemptive scaling, and upstream circuit breaking.",
      metrics: [
        { value: "75%", label: "MTTR Reduction", context: "Decreased P1 response time" },
        { value: "88%", label: "Autonomous Healing", context: "Resolved without human intervention" },
        { value: "4 min", label: "Average Recovery", context: "Down from 28 minutes manual triage" }
      ],
      architectureSteps: [
        "OpenTelemetry agents capture p95/p99 latency spikes and memory consumption thresholds.",
        "Prometheus evaluates rate-of-change alerting rules (predictive saturation detection).",
        "Alertmanager routes structured JSON event to AWS API Gateway secured via HMAC signatures.",
        "Python AWS Lambda executes safe container cordon, graceful termination, and replica scale-up.",
        "Remediation status and root-cause telemetry automatically dispatched to Grafana dashboard and PagerDuty."
      ],
      badge: "Zero-Human Remediation"
    }
  ],

  // Interactive CI/CD Pipeline Visualizer Data
  pipelineDemo: {
    title: "Live CI/CD Delivery Pipeline Simulator",
    subtitle: "Interactive execution flow simulating an end-to-end containerized release to AWS EKS.",
    stages: [
      {
        id: "stage-source",
        name: "Source",
        icon: "fa-brands fa-git-alt",
        tool: "GitHub",
        status: "passed",
        duration: "12s",
        details: "GPG commit verification, branch protection checks, and changelog diff calculation.",
        log: [
          "[source] fetching origin/main...",
          "[source] commit 7f8a91c verified with GPG key ID: 0x9B41",
          "[source] detected 14 changed files across 3 microservices",
          "[source] tag: v2.8.4-prod initialized"
        ]
      },
      {
        id: "stage-lint",
        name: "Lint & SAST",
        icon: "fa-solid fa-shield-halved",
        tool: "SonarQube & Checkmarx",
        status: "passed",
        duration: "48s",
        details: "Static application security testing, code smell analysis, and test coverage thresholds.",
        log: [
          "[sast] analyzing Go and Python source files...",
          "[sast] Checkmarx scan completed: 0 High, 0 Medium vulnerabilities",
          "[sast] SonarQube quality gate: PASSED (92.4% test coverage)",
          "[sast] secrets scan: no plaintext credentials detected"
        ]
      },
      {
        id: "stage-build",
        name: "Container Build",
        icon: "fa-brands fa-docker",
        tool: "Docker Buildx",
        status: "passed",
        duration: "1m 34s",
        details: "Multi-arch OCI image build (linux/amd64, linux/arm64) with layer caching in Amazon ECR.",
        log: [
          "[build] initializing buildx runner container...",
          "[build] cache hit on base layers (node:20-alpine / golang:1.22)",
          "[build] compiling binary with CGO_ENABLED=0",
          "[build] generated digest sha256:4a8bc3921... pushed to ECR"
        ]
      },
      {
        id: "stage-security",
        name: "Policy & OPA",
        icon: "fa-solid fa-lock",
        tool: "Trivy & OPA",
        status: "passed",
        duration: "26s",
        details: "Container vulnerability scan, SBOM generation, and OPA Rego compliance validation.",
        log: [
          "[policy] scanning container filesystem with Trivy v0.51...",
          "[policy] 0 critical, 0 high CVEs identified in base image",
          "[policy] OPA Rego evaluating 42 security rules...",
          "[policy] runAsNonRoot: PASS | readOnlyRootFilesystem: PASS"
        ]
      },
      {
        id: "stage-deploy",
        name: "GitOps Deploy",
        icon: "fa-solid fa-cloud-arrow-up",
        tool: "ArgoCD",
        status: "running",
        duration: "42s",
        details: "Blue/Green deployment to AWS EKS cluster with automated Route 53 health checking.",
        log: [
          "[gitops] ArgoCD app sync triggered: production-cluster-mesh",
          "[gitops] applying deployment manifests to namespace: production",
          "[gitops] spinning up green replica set (8 pods active)",
          "[gitops] synthetic canary probe: 200 OK across 500 requests",
          "[gitops] cutover complete: 100% traffic shifted to green"
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
        "  <span class='term-yellow'>terraform plan</span>                  Preview speculative cloud infrastructure changes",
        "  <span class='term-yellow'>cat resume.txt</span>                  View engineering experience, skills & credentials",
        "  <span class='term-yellow'>argocd app get production</span>      Inspect ArgoCD GitOps deployment synchronization",
        "  <span class='term-yellow'>curl -I /healthz</span>                 Check edge service health, uptime and telemetry",
        "  <span class='term-yellow'>cat stack.yaml</span>                  Output full declared infrastructure toolchain",
        "  <span class='term-yellow'>whoami</span>                          Display engineer identity & contact information",
        "  <span class='term-yellow'>theme [light|dark]</span>             Control site theme mode from terminal",
        "  <span class='term-yellow'>clear</span>                          Clear terminal viewport"
      ]
    },

    "kubectl get pods -n production": {
      desc: "Outputs Kubernetes pod status in production namespace",
      output: [
        "<span class='term-dim'>NAME                                READY   STATUS    RESTARTS   AGE     NODE</span>",
        "api-gateway-7b8df59f9-2x8p1         1/1     <span class='term-green'>Running</span>   0          4d12h   ip-10-0-12-84.ec2",
        "api-gateway-7b8df59f9-k7m9q         1/1     <span class='term-green'>Running</span>   0          4d12h   ip-10-0-14-19.ec2",
        "auth-service-5896b4cd7f-z4xll       1/1     <span class='term-green'>Running</span>   0          18d     ip-10-0-12-84.ec2",
        "checkout-worker-6c77bb8f-89mvd      1/1     <span class='term-green'>Running</span>   0          2d6h    ip-10-0-15-201.ec2",
        "event-processor-78d4c97ff-t29wl     1/1     <span class='term-green'>Running</span>   0          7d1h    ip-10-0-14-19.ec2",
        "observability-agent-d99c4f6-h7w4p   1/1     <span class='term-green'>Running</span>   0          31d     ip-10-0-15-201.ec2",
        "",
        "<span class='term-green'>✔ 6/6 pods Healthy</span> | <span class='term-cyan'>Namespace: production</span> | <span class='term-dim'>Cluster: eks-prod-ap-south-1</span>"
      ]
    },

    "terraform plan": {
      desc: "Outputs speculative AWS resource modifications",
      output: [
        "<span class='term-dim'>Refreshing Terraform state in 's3://devops-tfstate-ap-south-1'...</span>",
        "<span class='term-cyan'>Acquired state lock ID: 88f2b71-33e1-4c02-a19b-22b01479d40e</span>",
        "",
        "Terraform will perform the following actions:",
        "",
        "  <span class='term-green'>+ module.eks_cluster.aws_eks_node_group.workers_m6i_large</span>",
        "      capacity_type        = \"SPOT\"",
        "      desired_size         = 6",
        "      instance_types       = [\"m6i.xlarge\", \"m5.xlarge\"]",
        "      scaling_config.max   = 16",
        "",
        "  <span class='term-yellow'>~ module.ingress_alb.aws_lb_listener_rule.canary_routing</span>",
        "      <span class='term-red'>- weight = 10</span>",
        "      <span class='term-green'>+ weight = 100</span>",
        "",
        "  <span class='term-green'>+ module.vault_pki.vault_pki_secret_backend_role.eks_cert_issuer</span>",
        "      ttl                  = \"2160h\"",
        "",
        "<span class='term-green'>Plan:</span> 2 to add, 1 to change, 0 to destroy.",
        "<span class='term-cyan'>✔ OPA Policy Check: 42/42 rules passed. No security violations.</span>"
      ]
    },

    "cat resume.txt": {
      desc: "Prints concise career highlights and qualifications",
      output: [
        "<span class='term-cyan'>═════════════════════════════════════════════════════════════════</span>",
        "<span class='term-bold'>PUNEETH ARADHYA</span> — Senior DevOps & Cloud Infrastructure Engineer",
        "Location: Mysuru / Bengaluru, Karnataka, India (ap-south-1)",
        "Experience: 10+ Years in Enterprise Delivery & Platform Engineering",
        "<span class='term-cyan'>═════════════════════════════════════════════════════════════════</span>",
        "",
        "<span class='term-yellow'>EXPERIENCE:</span>",
        "  • <span class='term-bold'>LTM</span> (Dec 2025 → Present)",
        "    Senior Specialist · Software Engineer (DevSecOps & Platform)",
        "  • <span class='term-bold'>Accenture</span> (Jun 2015 → Sep 2025 · 10 yrs 4 mos)",
        "    DevOps Engineer — Enterprise CI/CD, Azure DevOps, Platform Modernization",
        "",
        "<span class='term-yellow'>CORE CERTIFICATIONS:</span>",
        "  • Microsoft Certified: DevOps Engineer Expert (2025–2027)",
        "  • Microsoft Certified: Azure Developer Associate (2025–2027)",
        "  • GitHub Certified: GitHub Copilot (2025–2028)",
        "",
        "<span class='term-yellow'>EDUCATION:</span>",
        "  • B.E. in Electrical & Electronics Engineering",
        "    Sri Jayachamarajendra College of Engineering (SJCE), Mysore (2011–2015)"
      ]
    },

    "argocd app get production": {
      desc: "Inspects ArgoCD GitOps deployment synchronization",
      output: [
        "<span class='term-dim'>Name:               production-cloud-fleet</span>",
        "<span class='term-dim'>Project:            enterprise-core</span>",
        "<span class='term-dim'>Server:             https://kubernetes.default.svc</span>",
        "<span class='term-dim'>Namespace:          production</span>",
        "<span class='term-dim'>Repo:               https://github.com/aradhyapuneeth/gitops-manifests</span>",
        "<span class='term-dim'>Target Revision:    main (commit: 7f8a91c)</span>",
        "<span class='term-dim'>Sync Policy:        Automated (Prune, Self-Heal)</span>",
        "<span class='term-green'>Sync Status:        Synced to 7f8a91c</span>",
        "<span class='term-green'>Health Status:      Healthy</span>",
        "",
        "<span class='term-cyan'>RESOURCE GROUP                   STATUS   HEALTH</span>",
        "apps/Deployment/api-gateway       Synced   Healthy",
        "apps/Deployment/auth-service      Synced   Healthy",
        "networking/Ingress/prod-ingress   Synced   Healthy",
        "autoscaling/HPA/gateway-hpa       Synced   Healthy"
      ]
    },

    "curl -I /healthz": {
      desc: "Checks service uptime and edge telemetry",
      output: [
        "HTTP/2 200 OK",
        "date: " + new Date().toUTCString(),
        "server: envoy/1.29.1",
        "content-type: application/json; charset=utf-8",
        "x-envoy-upstream-service-time: 2",
        "x-uptime-seconds: 315360000",
        "x-region: ap-south-1",
        "status: {\"system\":\"healthy\",\"database\":\"connected\",\"vault\":\"unsealed\",\"latency_p99\":\"14ms\"}"
      ]
    },

    "cat stack.yaml": {
      desc: "Outputs complete infrastructure toolchain",
      output: [
        "<span class='term-cyan'>stack:</span>",
        "  <span class='term-yellow'>cloud:</span> [AWS, Azure, GCP]",
        "  <span class='term-yellow'>orchestration:</span> [Kubernetes, EKS, AKS, Docker]",
        "  <span class='term-yellow'>gitops_cicd:</span> [ArgoCD, GitHub Actions, Azure DevOps, Jenkins]",
        "  <span class='term-yellow'>iac_governance:</span> [Terraform, Vault, OPA Rego, Helm, Ansible]",
        "  <span class='term-yellow'>devsecops:</span> [Checkmarx, Snyk, SonarQube, Trivy, Black Duck]",
        "  <span class='term-yellow'>observability:</span> [Prometheus, Grafana, Datadog, PagerDuty, OpenTelemetry]",
        "  <span class='term-yellow'>scripting:</span> [Python, Bash, Go, PowerShell, YAML]",
        "<span class='term-cyan'>mode:</span> <span class='term-green'>automate_everything</span> <span class='term-dim'># release calm • secure by default</span>"
      ]
    },

    "whoami": {
      desc: "Prints user information",
      output: [
        "<span class='term-green'>puneeth@cloud-platform</span>",
        "Role: Senior DevOps & Platform Engineer",
        "Base: Mysuru, Karnataka, India (12.2958° N, 76.6394° E)",
        "Email: aradhyapuneeth@gmail.com",
        "GitHub: https://github.com/aradhyapuneeth",
        "Status: System Operational · Ready to ship"
      ]
    }
  },

  // Tech stack categories for the Stack matrix
  techStackMatrix: [
    {
      category: "Delivery & GitOps",
      description: "Automated delivery engines and declarative reconciliation loops",
      items: [
        { name: "ArgoCD", icon: "fa-solid fa-code-branch", role: "GitOps Continuous Delivery" },
        { name: "GitHub Actions", icon: "fa-brands fa-github", role: "Enterprise CI/CD Pipelines" },
        { name: "Azure DevOps", icon: "fa-brands fa-microsoft", role: "Pipelines, Boards & Artifacts" },
        { name: "Jenkins", icon: "fa-brands fa-jenkins", role: "Distributed Build Clusters" },
        { name: "UrbanCode Deploy", icon: "fa-solid fa-server", role: "Enterprise Release Orchestration" }
      ]
    },
    {
      category: "Cloud & Container Platforms",
      description: "Elastic, fault-tolerant container runtimes and multi-cloud foundations",
      items: [
        { name: "Kubernetes (EKS/AKS)", icon: "fa-solid fa-dharmachakra", role: "Container Orchestration & Scaling" },
        { name: "AWS Cloud", icon: "fa-brands fa-aws", role: "EKS, Route53, IAM, S3, CloudFront" },
        { name: "Microsoft Azure", icon: "fa-brands fa-microsoft", role: "AKS, Virtual Networks, Key Vault" },
        { name: "Docker & Buildx", icon: "fa-brands fa-docker", role: "Multi-arch Containerization" },
        { name: "Helm", icon: "fa-solid fa-cube", role: "Package Management & Templates" }
      ]
    },
    {
      category: "IaC & DevSecOps Guardrails",
      description: "Policy-as-code, dynamic secrets, and vulnerability shifting left",
      items: [
        { name: "Terraform", icon: "fa-solid fa-cubes", role: "Infrastructure as Code" },
        { name: "HashiCorp Vault", icon: "fa-solid fa-vault", role: "Ephemeral Secrets & Dynamic STS" },
        { name: "Open Policy Agent", icon: "fa-solid fa-shield-halved", role: "Rego Policy-as-Code Gates" },
        { name: "SonarQube & Snyk", icon: "fa-solid fa-bug-slash", role: "SAST, SCA & Container Scans" },
        { name: "Checkmarx", icon: "fa-solid fa-lock", role: "Static Code Vulnerability Analysis" }
      ]
    },
    {
      category: "Observability & Automation",
      description: "Real-time metrics, automated remediation, and resilient operations",
      items: [
        { name: "Prometheus & Grafana", icon: "fa-solid fa-chart-line", role: "Telemetry, Dashboards & Alerts" },
        { name: "Python & Shell", icon: "fa-brands fa-python", role: "Self-Healing Scripts & Automation" },
        { name: "Go & PowerShell", icon: "fa-brands fa-golang", role: "Cloud CLI Tools & Runbooks" },
        { name: "PagerDuty", icon: "fa-solid fa-bell", role: "Incident Routing & Alert Escalation" },
        { name: "Splunk & Loki", icon: "fa-solid fa-file-waveform", role: "Centralized Audit Log Aggregation" }
      ]
    }
  ],

  // Career deployment history (preserving authentic details from index.html)
  workExperience: [
    {
      company: "LTM",
      role: "Senior Specialist · Software Engineer",
      period: "Dec 2025 → Present",
      duration: "Current",
      isCurrent: true,
      tag: "HEAD · production",
      description: "Leading enterprise DevOps and DevSecOps initiatives through pipeline automation, security guardrails, and modern CI/CD practices. Building scalable delivery platforms that enhance developer productivity, enforce security compliance, and streamline multi-team software releases.",
      skills: ["DevSecOps", "GitHub Actions", "CI/CD Architecture", "Developer Enablement", "Security Automation", "Kubernetes"]
    },
    {
      company: "Accenture",
      role: "DevOps Engineer",
      period: "Jun 2015 → Sep 2025",
      duration: "10 years 4 months",
      isCurrent: false,
      tag: "release/2015.06-2025.09",
      description: "Delivered enterprise-scale DevOps transformations, CI/CD platform migrations, and release engineering solutions for tier-1 banking, insurance, and technology clients. Standardized multi-region cloud infrastructures, reduced deployment overhead by 85%, and migrated 120+ microservices with zero downtime.",
      skills: ["Azure DevOps", "CI/CD Architecture", "Release Engineering", "Platform Modernization", "Dynamics 365", "Jenkins", "Ansible"]
    }
  ],

  // Certifications, Awards & Education
  credentials: {
    certifications: [
      {
        name: "DevOps Engineer Expert",
        issuer: "Microsoft Certified",
        validity: "Jun 2025 → Jun 2027",
        badgeId: "ED2CB021D00396F2",
        verifyUrl: "https://learn.microsoft.com/api/credentials/share/en-us/PuneethAradhya-6002/ED2CB021D00396F2?sharingId"
      },
      {
        name: "Azure Developer Associate",
        issuer: "Microsoft Certified",
        validity: "Jun 2025 → Jun 2027",
        badgeId: "BB5EE1E1108B674E",
        verifyUrl: "https://learn.microsoft.com/api/credentials/share/en-us/PuneethAradhya-6002/BB5EE1E1108B674E?sharingId"
      },
      {
        name: "GitHub Copilot Certified",
        issuer: "GitHub",
        validity: "Jun 2025 → Jun 2028",
        badgeId: "10395d56-1daf-4bf1-b781-26445abe637e",
        verifyUrl: "https://www.credly.com/badges/10395d56-1daf-4bf1-b781-26445abe637e/linked_in_profile"
      }
    ],

    awards: [
      {
        year: "2020",
        title: "Accenture Celebrates Excellence",
        type: "Individual Excellence Award",
        description: "Awarded for automation initiatives that streamlined mission-critical client deployments, cutting manual intervention by 85%."
      },
      {
        year: "2021",
        title: "pinNAcle Collaborator Award",
        type: "Cross-Functional Collaboration",
        description: "Recognized for exceptional teamwork designing and rolling out reusable CI/CD templates across distributed international engineering teams."
      },
      {
        year: "2023",
        title: "Shared Success Catalyst",
        type: "Delivery & Innovation Award",
        description: "Honored for driving knowledge sharing, standardizing GitOps best practices, and accelerating cloud adoption across client divisions."
      }
    ],

    education: {
      degree: "Bachelor of Engineering (B.E.)",
      field: "Electrical & Electronics Engineering",
      institution: "Sri Jayachamarajendra College of Engineering (SJCE), Mysore",
      years: "2011 → 2015"
    }
  }
};
