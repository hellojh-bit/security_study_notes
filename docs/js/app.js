/* =========================================================
   화면 생성과 사용자 동작
   - 목차, 홈, SECTION, 검색, 모달, 테마, 모바일 메뉴를 담당합니다.
   ========================================================= */

(() => {
  "use strict";

  const elements = {
    html: document.documentElement,
    body: document.body,
    appShell: document.querySelector(".app-shell"),
    homeButton: document.getElementById("homeButton"),
    summaryTab: document.getElementById("summaryTab"),
    questionsTab: document.getElementById("questionsTab"),
    difficultyTabs: document.getElementById("difficultyTabs"),
    normalDifficultyButton: document.getElementById("normalDifficultyButton"),
    hardDifficultyButton: document.getElementById("hardDifficultyButton"),
    menuButton: document.getElementById("menuButton"),
    sidebar: document.getElementById("sidebar"),
    sidebarHeadingLabel: document.getElementById("sidebarHeadingLabel"),
    sidebarHeadingTitle: document.getElementById("sidebarHeadingTitle"),
    questionAllReset: document.getElementById("questionAllReset"),
    menuBackdrop: document.getElementById("menuBackdrop"),
    navigation: document.getElementById("studyNavigation"),
    main: document.getElementById("mainContent"),
    content: document.getElementById("contentContainer"),
    searchArea: document.getElementById("searchArea"),
    searchInput: document.getElementById("globalSearch"),
    searchResults: document.getElementById("searchResults"),
    themeButton: document.getElementById("themeButton"),
    themeIcon: document.querySelector(".theme-icon"),
    themeLabel: document.querySelector(".theme-label"),
    toTopButton: document.getElementById("toTopButton"),
    updateModal: document.getElementById("updateModal"),
    modalDialog: document.querySelector("#updateModal .modal"),
    modalCloseButton: document.getElementById("modalCloseButton"),
    updateLogContent: document.getElementById("updateLogContent")
  };

  const flattenedSections = studyData.flatMap((part) =>
    part.sections.map((section) => ({ ...section, part }))
  );

  /*
   * 본문의 소제목은 그대로 유지하고 빠른 이동 버튼만 큰 주제로 묶습니다.
   * 각 항목은 묶음의 시작 소제목 ID와 리모컨에 표시할 간결한 이름입니다.
   */
  const tocGroupStarts = {
    "section-01": [
      ["protection-goals", "정보보호 목표·관리"],
      ["osi-security-architecture", "OSI 보안구조"],
      ["basic-security-terms", "기본 보안용어"]
    ],
    "section-02": [
      ["crypto-basics", "암호학 기초·분류"],
      ["major-crypto-technologies", "주요 암호기술"],
      ["cryptanalysis", "암호 분석·안전성"],
      ["intellectual-property-protection", "지적 재산권 보호"]
    ],
    "section-03": [
      ["modern-block-cipher-components", "블록 암호 구조·공격"],
      ["modern-stream-cipher", "스트림 암호"],
      ["des", "대칭키 알고리즘"],
      ["block-cipher-modes", "블록 암호 운영모드"]
    ],
    "section-04": [
      ["key-distribution-problem", "키 배송·교환"],
      ["public-key-cryptography", "공개키 암호 원리"],
      ["rsa", "공개키 알고리즘"],
      ["hybrid-cryptosystem", "하이브리드 암호"]
    ],
    "section-05": [
      ["hash-basics-security", "해시 구조·공격"],
      ["hash-applications-limits", "해시 응용·SHA"],
      ["mac-mdc-basics", "MAC·MDC"],
      ["mac-implementations", "MAC 구현·보안"]
    ],
    "section-06": [
      ["digital-signature-basics", "전자서명 개요·방식"],
      ["special-digital-signatures", "특수서명·응용"],
      ["pki-overview", "PKI 개요·구성"],
      ["pki-trust-models", "PKI 신뢰구조"],
      ["x509-certificates", "인증서·폐지"]
    ],
    "section-07": [
      ["key-basics-keyspace", "키 종류·구조"],
      ["pbe-salt", "PBE·PBKDF2"],
      ["key-storage", "암호키 보호"],
      ["random-uses-properties", "난수·PRNG"]
    ],
    "section-08": [
      ["access-control-basics", "접근통제 기본"],
      ["access-control-process", "절차·책임추적성"],
      ["logical-access-reference-monitor", "논리적 통제·보안원칙"]
    ],
    "section-09": [
      ["authentication-basics", "인증요소·패스워드"],
      ["ipin-possession", "소유 기반 인증"],
      ["otp-skey", "OTP·S/KEY"],
      ["biometrics", "생체인증"],
      ["sso-iam", "SSO·IAM"],
      ["kerberos-basics", "Kerberos·SESAME"]
    ],
    "section-10": [
      ["mandatory-access-control", "접근통제 방식"],
      ["bell-lapadula", "기밀성·무결성 모델"],
      ["chinese-wall-and-other-models", "기타 보안 모델"]
    ],
    "section-11": [
      ["password-cracker", "패스워드·사회공학"],
      ["phishing", "피싱·파밍·스미싱"],
      ["covert-channel", "은닉 채널·방사"]
    ],
    "section-12": [
      ["secure-os-basics", "보안 OS·보호대상"],
      ["secure-os-security-functions", "보안커널·TCB·참조모니터"],
      ["tpm-overview-services", "TPM"]
    ],
    "section-13": [
      ["malware-basics", "악성 소프트웨어"],
      ["http-basics-connections", "HTTP 통신"],
      ["cookie-basics", "쿠키·세션·브라우저 보안"]
    ],
    "section-14": [
      ["windows-architecture", "Windows 구조·부팅"],
      ["windows-accounts-sid", "계정·인증"],
      ["windows-permissions-sharing", "권한·암호화"],
      ["windows-registry", "레지스트리 보안"],
      ["windows-firewall-account-hardening", "보안 설정·감사·패치"]
    ],
    "section-15": [
      ["unix-overview", "UNIX 구조·파일권한"],
      ["unix-process-init", "프로세스·부팅·cron"],
      ["unix-account-files", "계정·특수권한"],
      ["inetd-tcp-wrapper", "네트워크·PAM 인증"],
      ["linux-filesystems", "Linux 파일시스템"],
      ["root-login-account-lock", "root·패스워드 보안"],
      ["file-directory-r-command-security", "파일·r-command 보안"]
    ],
    "section-16": [
      ["server-maintenance-overview", "서버 보안 유지관리"],
      ["windows-log-overview", "Windows 로그"],
      ["unix-log-overview", "UNIX·Linux 로그"],
      ["syslog-configuration", "syslog 관리"],
      ["iis-w3c-log", "웹 서버 로그"],
      ["cracking-keylogger-tools", "보안 분석·탐지 도구"]
    ],
    "section-17": [
      ["process-memory-stack-frame", "메모리·버퍼 오버플로"],
      ["format-string-attack", "포맷 스트링"],
      ["race-condition-links", "Race Condition"],
      ["backdoor-overview", "백도어"],
      ["resource-exhaustion", "기타 시스템 공격"]
    ],
    "section-18": [
      ["blockchain-overview", "블록체인"],
      ["iot-overview-usecases", "IoT 보안"],
      ["cloud-overview-models", "클라우드·가상화"],
      ["ransomware-overview", "랜섬웨어"],
      ["apt", "APT·킬 체인·공급망"]
    ],
    "section-19": [
      ["protocol-overview", "프로토콜 기본"],
      ["osi-overview", "OSI 모델"],
      ["physical-data-link", "OSI 계층별 기능"],
      ["tcpip-overview", "TCP/IP 계층"],
      ["encapsulation", "캡슐화·주소·다중화"]
    ],
    "section-20": [
      ["data-link-layer", "데이터링크·IPv4 주소"],
      ["ipv4-datagram", "IPv4·ARP·ICMP"],
      ["ipv6-features", "IPv6"],
      ["udp", "UDP·TCP 구조"],
      ["tcp-connection", "TCP 연결·전송·종료"],
      ["application-protocols", "응용계층 프로토콜"]
    ],
    "section-21": [
      ["routing-overview", "라우팅 기본"],
      ["distance-vector", "라우팅 알고리즘"],
      ["rip-overview", "RIP·EIGRP"],
      ["ospf-overview", "OSPF·BGP"],
      ["router-modes", "라우터 설정·보안"],
      ["standard-acl", "ACL·필터링"],
      ["static-route", "경로·리소스 점검"]
    ],
    "section-22": [
      ["network-device-layers", "계층별 장비·NIC·허브"],
      ["bridge-overview", "브리지·스위치"],
      ["router-overview", "라우터"],
      ["gateway-overview", "게이트웨이·장비 비교"],
      ["vlan-overview", "VLAN"]
    ],
    "section-23": [
      ["wireless-network-types", "무선 네트워크 기초"],
      ["bluetooth-structure-attacks", "Bluetooth"],
      ["wireless-vulnerability-overview", "무선 취약점·인증"],
      ["wep-encryption", "WEP·WPA 보안"],
      ["wap-overview", "WAP·WTLS"],
      ["device-authentication", "기기인증·RFID"],
      ["ios-security", "모바일·BYOD 보안"]
    ],
    "section-24": [
      ["network-management-overview", "네트워크 관리·FCAPS"],
      ["snmp-overview", "SNMP 구성·MIB"],
      ["snmp-pdu-operations", "SNMP 연산·보안"],
      ["telnet-remote-login", "TELNET·Rlogin"],
      ["ssh-overview", "SSH"]
    ],
    "section-25": [
      ["network-program-overview", "ping"],
      ["traceroute-principle", "traceroute·tracert"],
      ["netstat-overview-options", "netstat·TCP 상태"],
      ["route-command", "route"],
      ["tcpdump-overview", "tcpdump"],
      ["ifconfig-overview-options", "ifconfig·ipconfig"],
      ["diagnostic-sequence", "진단 순서·명령 비교"]
    ],
    "section-26": [
      ["network-threat-overview", "네트워크 위협·DoS"],
      ["ddos-overview-history", "DDoS 구조·도구"],
      ["udp-icmp-flooding", "DDoS 유형·대응"],
      ["attack-preparation", "공격 준비·스캔"],
      ["sniffing-overview", "Sniffing"],
      ["spoofing-arp", "Spoofing"],
      ["session-hijacking-overview", "Session Hijacking"],
      ["remote-exploit", "Remote Attack·Exploit"]
    ],
    "section-27": [
      ["ids-overview", "IDS 개요·구성"],
      ["misuse-detection", "오용·이상 탐지"],
      ["ids-response", "대응·NIDS/HIDS"],
      ["false-positive-negative", "오탐·미탐"],
      ["honeypot-overview", "Honeypot·Honeynet"],
      ["snort-overview", "Snort Rule"],
      ["ips-overview", "IPS·보안시스템 비교"]
    ],
    "section-28": [
      ["firewall-overview", "방화벽 개요·특징"],
      ["firewall-access-auth-log", "기능·한계"],
      ["firewall-design-principles", "설계 원칙·정책"],
      ["packet-filtering-overview", "Packet Filtering·NAT"],
      ["stateful-firewall-overview", "Stateful·DPI"],
      ["proxy-firewall-overview", "Proxy·Bastion·Gateway"],
      ["screening-router", "방화벽 구축 구조"],
      ["iptables-overview", "iptables"]
    ],
    "section-29": [
      ["vpn-overview-definition", "VPN 개요·구성"],
      ["vpn-tunneling", "터널링 프로토콜"],
      ["vpn-data-authentication", "VPN 인증"],
      ["mpls-basics", "MPLS VPN"],
      ["ipsec-overview", "IPSec 개요"],
      ["ah-services-header", "AH·ESP"],
      ["security-association", "SA·SPD·SAD·처리"],
      ["ike-overview-components", "IKE·핵심 흐름"]
    ],
    "section-30": [
      ["traceback-overview", "공격 역추적"],
      ["esm-overview", "ESM·UTM"],
      ["nac-overview", "NAC"],
      ["siem-overview", "SIEM"],
      ["soar-overview", "SOAR"],
      ["pms-overview-components", "PMS"],
      ["security-platform-comparison", "보안 플랫폼 비교·정리"]
    ],
    "section-31": [
      ["ftp-overview", "FTP 기본·인증"],
      ["ftp-active-mode", "Active·Passive Mode"],
      ["anonymous-ftp", "Anonymous FTP"],
      ["tftp-overview", "TFTP·NFS·Samba"],
      ["ftp-security-risks", "FTPS·SFTP·TFTP 보안"],
      ["ftp-bounce-attack", "Bounce·접근통제"],
      ["proftpd-overview", "proftpd·vsftpd"]
    ],
    "section-32": [
      ["email-structure-overview", "이메일 구조·흐름"],
      ["smtp-overview", "SMTP"],
      ["pop3-overview", "POP3·IMAP4"],
      ["pem-overview", "PEM·PGP"],
      ["mime-overview", "MIME·S/MIME"],
      ["spf-overview", "SPF·DKIM·DMARC"],
      ["spam-response-overview", "스팸 대응·sendmail"]
    ],
    "section-33": [
      ["web-security-overview", "웹 보안·SSL/TLS"],
      ["tls-architecture", "TLS 프로토콜·Handshake"],
      ["https-shttp-comparison", "HTTPS·웹서버 보안"],
      ["sql-injection-overview", "SQL Injection·XSS"],
      ["csrf-overview", "CSRF·SSRF"],
      ["direct-object-reference", "파일·설정 취약점"],
      ["waf-overview", "WAF·개발 보안"]
    ],
    "section-34": [
      ["dhcp-overview", "DHCP 기초"],
      ["dhcp-packet-fields", "DHCP 동작·공격"],
      ["dns-overview", "DNS 구조"],
      ["root-name-server", "DNS 서버·질의"],
      ["dns-resolution-process", "조회·도구"],
      ["dns-security-overview", "DNS 공격"],
      ["bind-files", "BIND 설정"]
    ],
    "section-35": [
      ["database-overview", "DB 기본·키"],
      ["integrity-overview", "무결성·트랜잭션"],
      ["database-security-overview", "보안 위협·요구사항"],
      ["database-security-controls-overview", "흐름·추론 통제"],
      ["database-access-control", "접근통제·SQL·View"],
      ["db-encryption-overview", "DB 암호화"],
      ["mssql-security", "MS-SQL 보안 관리"]
    ],
    "section-36": [
      ["ecommerce-security-overview", "전자상거래 개요"],
      ["ecommerce-security-requirements", "보안 요구사항"],
      ["electronic-payment-system", "전자지불 시스템"],
      ["set-overview", "SET 개요·참여주체"],
      ["dual-signature-purpose", "이중서명·처리 절차"],
      ["ebxml-overview", "ebXML"],
      ["wpki-overview", "WPKI"]
    ],
    "section-37": [
      ["hacking-overview", "해킹 개요·분류"],
      ["incident-response-overview", "침해사고 대응·CERT"],
      ["incident-response-seven-stages", "대응 7단계"],
      ["digital-forensics-overview", "포렌식 개요·원칙"],
      ["forensic-process-overview", "수행 절차·기술·도구"],
      ["evidence-rules", "증거 분석·보존"],
      ["digital-evidence-recovery", "증거 복구·삭제"]
    ],
    "section-38": [
      ["application-security-overview", "메모리 공격"],
      ["java-security-overview", "Java 보안구조"],
      ["mobile-code-overview", "모바일 코드"],
      ["malicious-mobile-code", "악성 코드·Exploit"],
      ["java-applet-sandbox", "Java Sandbox"],
      ["activex-authenticode", "ActiveX 인증"],
      ["application-security-summary", "핵심 정리"]
    ],
    "section-39": [
      ["governance-overview", "정보보호 거버넌스"],
      ["it-security-management", "IT 보안관리"],
      ["iso27001-overview", "ISO 27001"],
      ["security-policy-overview", "정책 체계"],
      ["it-security-plan", "보안계획·전문가"],
      ["security-oversight-committee", "보안감독위원회"],
      ["hr-security-lifecycle", "인적 자원 보안"]
    ],
    "section-40": [
      ["risk-management-overview", "위험관리 개요"],
      ["risk-definition", "위험 구성요소"],
      ["risk-analysis-overview", "위험분석 접근법"],
      ["detailed-analysis-overview", "상세 위험분석"],
      ["risk-evaluation-doa", "위험평가·잔류위험"],
      ["risk-treatment-overview", "위험처리 전략"],
      ["quantitative-overview", "정량·정성 분석"]
    ],
    "section-41": [
      ["bcp-drp-overview", "BCP·DRP 개요"],
      ["bcp-five-steps", "수립 절차·BIA"],
      ["recovery-strategy-overview", "복구전략·사이트"],
      ["hardware-software-backup", "가용성·백업"],
      ["raid-overview", "RAID"],
      ["disaster-recovery-timeline", "RPO·RTO·MTD"],
      ["bcp-drp-test-types", "테스트·교육"]
    ],
    "section-42": [
      ["security-product-evaluation", "평가기준·TCSEC"],
      ["itsec-overview", "ITSEC·CC"],
      ["cc-components", "EAL·PP·ST·TOE"],
      ["ccra-overview", "CCRA·국내 인증"],
      ["bs7799-overview", "BS7799·ISMS-P"],
      ["ismsp-management-cycle", "관리체계·보호대책"],
      ["privacy-lifecycle-overview", "개인정보·국제기준"]
    ],
    "section-43": [
      ["privacy-act-overview", "개인정보법"],
      ["privacy-collection-use", "처리·권리"],
      ["network-act-overview", "정보통신망법"],
      ["network-access-permission", "이용자·불법정보"],
      ["network-security-measures", "ISMS·침해대응"],
      ["infrastructure-act-overview", "기반시설법"],
      ["critical-infrastructure-designation", "시설지정·ISAC"]
    ]
  };

  const initialQuestionIndex = StudyStorage.getQuestionIndex(questionData.length);
  const initialQuestion = questionData[initialQuestionIndex] || questionData[0] || null;
  const initialQuestionPart = StudyStorage.getQuestionPart(initialQuestion?.part || 1);
  const initialPartRecord = studyData.find((part) => part.part === initialQuestionPart);
  const initialQuestionSectionFallback = initialQuestion?.part === initialQuestionPart
    ? Number(initialQuestion.section?.match(/SECTION\s+0*(\d+)/i)?.[1])
    : initialPartRecord?.sections[0]?.number;
  const storedQuestionSection = StudyStorage.getQuestionSection(initialQuestionSectionFallback || 1);
  const initialQuestionSection = initialPartRecord?.sections.some((section) => section.number === storedQuestionSection)
    ? storedQuestionSection
    : initialPartRecord?.sections[0]?.number || 1;
  const validQuestionIds = new Set(questionData.map((question) => question.id));
  const initialSavedQuestionIds = new Set(StudyStorage.getSavedQuestions().filter((id) => validQuestionIds.has(id)));
  const initialFavoriteQuestionIds = new Set(
    StudyStorage.getFavoriteQuestions().filter((id) => initialSavedQuestionIds.has(id))
  );

  const state = {
    activeTab: "summary",
    currentView: "home",
    currentSectionId: null,
    openParts: new Set(StudyStorage.getOpenParts()),
    currentTheme: "light",
    currentQuestionIndex: initialQuestionIndex,
    activeQuestionPart: initialQuestionPart,
    activeQuestionSection: initialQuestionSection,
    questionOpenParts: new Set([...StudyStorage.getQuestionOpenParts(initialQuestionPart), initialQuestionPart]),
    currentDifficulty: StudyStorage.getQuestionDifficulty(),
    questionStates: StudyStorage.getQuestionStates(),
    questionSectionPositions: StudyStorage.getQuestionSectionPositions(),
    savedQuestionIds: initialSavedQuestionIds,
    favoriteQuestionIds: initialFavoriteQuestionIds,
    savedPracticeStates: {},
    sectionMemos: StudyStorage.getSectionMemos(),
    sectionMemoDrafts: {},
    savedQuestionsReturnIndex: null,
    currentSavedQuestionId: null,
    reviewMode: null,
    reviewReturnIndex: null,
    questionNotice: "",
    tocObserver: null,
    updateTrigger: null
  };

  function padSection(number) {
    return String(number).padStart(2, "0");
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function stripHtml(html) {
    const container = document.createElement("div");
    container.innerHTML = html || "";
    return (container.textContent || "").replace(/\s+/g, " ").trim();
  }

  function formatQuestionText(value) {
    return escapeHtml(value || "").replace(/\n/g, "<br>");
  }

  function getSectionRecord(sectionId) {
    return flattenedSections.find((item) => item.id === sectionId) || null;
  }

  function getPartRecord(partNumber) {
    return studyData.find((part) => part.part === Number(partNumber)) || null;
  }

  function getPartSectionNumber(partNumber, globalSectionNumber) {
    const part = getPartRecord(partNumber);
    const index = part?.sections.findIndex((section) => section.number === Number(globalSectionNumber)) ?? -1;
    return index >= 0 ? index + 1 : null;
  }

  function getSectionDisplayNumber(record) {
    if (!record) return null;
    return getPartSectionNumber(record.part?.part, record.number) || record.number;
  }

  function getTocItems(section) {
    const subtopics = Array.isArray(section.subtopics) ? section.subtopics : [];
    const groupStarts = tocGroupStarts[section.id];

    if (!Array.isArray(groupStarts) || groupStarts.length === 0) {
      return subtopics.map((subtopic) => ({
        target: subtopic.id,
        title: subtopic.title,
        memberIds: [subtopic.id]
      }));
    }

    const starts = groupStarts
      .map(([target, title]) => ({
        target,
        title,
        startIndex: subtopics.findIndex((subtopic) => subtopic.id === target)
      }))
      .filter((group) => group.startIndex >= 0)
      .sort((a, b) => a.startIndex - b.startIndex);

    return starts.map((group, index) => {
      const endIndex = starts[index + 1]?.startIndex ?? subtopics.length;
      return {
        target: group.target,
        title: group.title,
        memberIds: subtopics.slice(group.startIndex, endIndex).map((subtopic) => subtopic.id)
      };
    });
  }

  function setMainToTop(behavior = "auto") {
    elements.main.scrollTo({ top: 0, behavior });
  }

  /* ---------- 테마 ---------- */

  function applyTheme(theme, persist = true) {
    const safeTheme = theme === "dark" ? "dark" : "light";
    state.currentTheme = safeTheme;
    elements.html.dataset.theme = safeTheme;

    const isDark = safeTheme === "dark";
    elements.themeIcon.textContent = isDark ? "☀" : "☾";
    elements.themeLabel.textContent = isDark ? "밝은 모드" : "어두운 모드";
    elements.themeButton.setAttribute("aria-label", `${isDark ? "밝은" : "어두운"} 모드로 전환`);

    if (persist) StudyStorage.setTheme(safeTheme);
  }

  /* ---------- 요약·문제 탭 ---------- */

  function updateDifficultyUi() {
    const isHard = state.currentDifficulty === "hard";
    elements.normalDifficultyButton.classList.toggle("is-active", !isHard);
    elements.normalDifficultyButton.setAttribute("aria-pressed", String(!isHard));
    elements.hardDifficultyButton.classList.toggle("is-active", isHard);
    elements.hardDifficultyButton.setAttribute("aria-pressed", String(isHard));
  }

  function updatePrimaryTabUi(tab) {
    const isQuestions = tab === "questions";
    state.activeTab = isQuestions ? "questions" : "summary";

    elements.summaryTab.classList.toggle("is-active", !isQuestions);
    elements.summaryTab.setAttribute("aria-selected", String(!isQuestions));
    elements.questionsTab.classList.toggle("is-active", isQuestions);
    elements.questionsTab.setAttribute("aria-selected", String(isQuestions));

    elements.body.classList.toggle("question-mode", isQuestions);
    elements.appShell.classList.toggle("question-mode", isQuestions);
    elements.difficultyTabs.hidden = !isQuestions;
    elements.searchArea.hidden = false;
    elements.searchInput.value = "";
    elements.searchInput.placeholder = isQuestions
      ? "파트-SECTION-문제번호 형식(예 1-1-1) or 내용 검색"
      : "PART, SECTION, 본문 검색";
    elements.searchInput.setAttribute("aria-label", isQuestions ? "현재 난이도 문제 검색" : "전체 요약 내용 검색");
    elements.sidebarHeadingLabel.textContent = isQuestions ? "QUESTION BANK" : "CONTENTS";
    elements.sidebarHeadingTitle.textContent = isQuestions ? "문제 목차" : "필기 전체 목차";
    elements.questionAllReset.hidden = !isQuestions;
    elements.sidebar.setAttribute("aria-label", isQuestions ? "문제 PART 및 저장한 문제" : "PART 및 SECTION 목차");
    elements.menuButton.setAttribute("aria-label", isQuestions ? "문제 목차 열기" : "목차 열기");
    updateDifficultyUi();
    renderNavigation();

    closeSearchResults();
    if (isQuestions) closeMobileMenu();
  }

  function restoreSummaryView(forceHome = false) {
    const savedView = StudyStorage.getLastView();
    const savedSection = StudyStorage.getLastSection();
    if (!forceHome && savedView === "section" && getSectionRecord(savedSection)) {
      showSection(savedSection);
    } else {
      renderHome();
    }
  }

  function switchPrimaryTab(tab, options = {}) {
    const safeTab = tab === "questions" ? "questions" : "summary";
    updatePrimaryTabUi(safeTab);
    if (options.persist !== false) StudyStorage.setActiveTab(safeTab);

    if (safeTab === "questions") {
      renderQuestion();
    } else {
      restoreSummaryView(Boolean(options.forceHome));
    }
  }

  /* ---------- 왼쪽 목차 ---------- */

  function renderQuestionNavigation() {
    const difficultyLabel = state.currentDifficulty === "hard" ? "어려움" : "보통";
    elements.questionAllReset.disabled = !hasQuestionAllHistory();
    elements.questionAllReset.setAttribute("aria-label", `${difficultyLabel} 난이도 전체 문제 채점 초기화`);
    elements.questionAllReset.title = `${difficultyLabel} 난이도 전체 문제 채점 초기화`;

    const partItems = studyData.map((part) => {
      const count = questionData.filter((question) =>
        question.part === part.part && question.difficulty === state.currentDifficulty
      ).length;
      const isCurrent = state.activeQuestionPart === part.part;
      const isOpen = state.questionOpenParts.has(part.part);
      const hasHistory = hasQuestionPartHistory(part.part);

      const sections = part.sections.map((section, sectionIndex) => {
        const sectionCount = questionData.filter((question) =>
          question.part === part.part &&
          question.difficulty === state.currentDifficulty &&
          getQuestionSectionNumber(question) === section.number
        ).length;
        const isCurrentSection = isCurrent && state.activeQuestionSection === section.number;
        const hasSectionHistory = hasQuestionSectionHistory(part.part, section.number);
        const sectionResultCounts = getQuestionSectionResultCounts(part.part, section.number);
        return `
          <li>
            <div class="question-section-row">
              <button class="question-section-link ${isCurrentSection ? "is-current" : ""}" type="button" data-question-section="${section.number}" ${isCurrentSection ? 'aria-current="page"' : ""}>
                <span class="question-section-copy"><span class="section-number">SECTION ${padSection(sectionIndex + 1)}</span><span class="section-name">${escapeHtml(section.title)}</span></span>
                <span class="question-section-summary">
                  ${sectionResultCounts.incorrect ? `<span class="question-section-result-count is-incorrect" aria-label="틀린 문제 ${sectionResultCounts.incorrect}개" title="틀린 문제 ${sectionResultCounts.incorrect}개">${sectionResultCounts.incorrect}</span>` : ""}
                  ${sectionResultCounts.correct ? `<span class="question-section-result-count is-correct" aria-label="맞춘 문제 ${sectionResultCounts.correct}개" title="맞춘 문제 ${sectionResultCounts.correct}개">${sectionResultCounts.correct}</span>` : ""}
                  <span class="question-part-count">${sectionCount}문제</span>
                </span>
              </button>
              <button class="question-section-reset" type="button" data-question-section-reset="${section.number}" data-question-section-part="${part.part}" aria-label="PART ${part.part} SECTION ${padSection(sectionIndex + 1)} 채점 초기화" title="이 SECTION 채점 초기화" ${hasSectionHistory ? "" : "disabled"}>초기화</button>
            </div>
          </li>`;
      }).join("");

      return `
        <section class="question-part-group">
          <div class="question-part-row">
            <button
              class="question-part-link ${isCurrent ? "is-current" : ""}"
              type="button"
              data-question-part-toggle="${part.part}"
              aria-expanded="${isOpen}"
              aria-controls="question-part-${part.part}-sections"
            >
              <span class="question-part-main"><span class="question-part-arrow" aria-hidden="true">${isOpen ? "▼" : "▶"}</span><span><span class="part-number">PART ${part.part}</span>${escapeHtml(part.title)}</span></span>
              <span class="question-part-count">${count}문제</span>
            </button>
            <button
              class="question-part-reset"
              type="button"
              data-question-part-reset="${part.part}"
              aria-label="PART ${part.part} 채점 초기화"
              title="PART ${part.part} 채점 초기화"
              ${hasHistory ? "" : "disabled"}
            >초기화</button>
          </div>
          <ul class="question-section-list" id="question-part-${part.part}-sections" ${isOpen ? "" : "hidden"}>${sections}</ul>
        </section>`;
    }).join("");

    const savedQuestions = [...state.savedQuestionIds]
      .map((id) => questionData.find((question) => question.id === id))
      .filter(Boolean);

    elements.navigation.innerHTML = `
      <div class="question-part-list" aria-label="문제 PART 목록">${partItems}</div>
      <section class="saved-question-section" aria-labelledby="savedQuestionTitle">
        <div class="saved-question-heading">
          <button
            class="saved-question-toggle ${state.currentView === "saved-questions" || state.currentView === "saved-question" ? "is-current" : ""}"
            type="button"
            data-saved-question-view
            ${state.currentView === "saved-questions" || state.currentView === "saved-question" ? 'aria-current="page"' : ""}
          >
            <span class="saved-question-arrow" aria-hidden="true">★</span>
            <span id="savedQuestionTitle">저장한 문제</span>
            <span class="saved-question-count">${savedQuestions.length}</span>
          </button>
          <button class="saved-question-reset" type="button" data-saved-question-reset ${savedQuestions.length ? "" : "disabled"}>초기화</button>
        </div>
      </section>`;
  }

  function renderNavigation() {
    if (state.activeTab === "questions") {
      renderQuestionNavigation();
      return;
    }

    elements.navigation.innerHTML = studyData.map((part) => {
      const isOpen = state.openParts.has(part.part);
      const sections = part.sections.map((section, sectionIndex) => {
        const isCurrent = state.currentView === "section" && state.currentSectionId === section.id;
        return `
          <li>
            <button
              class="section-link"
              type="button"
              data-section-id="${section.id}"
              ${isCurrent ? 'aria-current="page"' : ""}
            >
              <span class="section-number">SECTION ${padSection(sectionIndex + 1)}</span>
              <span class="section-name">${escapeHtml(section.title)}</span>
            </button>
          </li>`;
      }).join("");

      return `
        <section class="part-group" data-part="${part.part}">
          <button
            class="part-toggle"
            type="button"
            aria-expanded="${isOpen}"
            aria-controls="part-${part.part}-sections"
            data-part-toggle="${part.part}"
          >
            <span class="part-arrow" aria-hidden="true">${isOpen ? "▼" : "▶"}</span>
            <span class="part-title"><span class="part-number">PART ${part.part}</span>${escapeHtml(part.title)}</span>
          </button>
          <ul class="section-list" id="part-${part.part}-sections" ${isOpen ? "" : "hidden"}>
            ${sections}
          </ul>
        </section>`;
    }).join("");
  }

  function toggleQuestionPart(partNumber) {
    const safePart = Number(partNumber);
    if (!Number.isInteger(safePart) || safePart < 1 || safePart > 7) return;
    if (state.questionOpenParts.has(safePart)) state.questionOpenParts.delete(safePart);
    else state.questionOpenParts.add(safePart);
    StudyStorage.setQuestionOpenParts(state.questionOpenParts);
    renderQuestionNavigation();
  }

  function togglePart(partNumber, forceOpen = null) {
    const shouldOpen = forceOpen === null ? !state.openParts.has(partNumber) : forceOpen;
    if (shouldOpen) state.openParts.add(partNumber);
    else state.openParts.delete(partNumber);

    StudyStorage.setOpenParts(state.openParts);
    renderNavigation();
  }

  function ensureCurrentSectionVisible() {
    if (!state.currentSectionId) return;
    window.requestAnimationFrame(() => {
      const current = elements.navigation.querySelector(`[data-section-id="${state.currentSectionId}"]`);
      current?.scrollIntoView({ block: "nearest", behavior: "smooth" });
    });
  }

  /* ---------- 홈 ---------- */

  function getSectionRange(part) {
    const first = 1;
    const last = part.sections.length;
    return first === last
      ? `SECTION ${padSection(first)}`
      : `SECTION ${padSection(first)}~${padSection(last)}`;
  }

  function renderHome() {
    state.currentView = "home";
    state.currentSectionId = null;
    StudyStorage.setLastView("home");
    disconnectTocObserver();

    const partCards = studyData.map((part) => `
      <button class="part-card" type="button" data-home-part="${part.part}">
        <span class="part-card-number">PART ${part.part}</span>
        <strong class="part-card-title">${escapeHtml(part.title)}</strong>
        <span class="part-card-meta">${getSectionRange(part)}<br><strong>총 ${part.sections.length}개 SECTION</strong></span>
      </button>
    `).join("");

    elements.content.innerHTML = `
      <article class="home-page">
        <header class="home-hero">
          <p class="home-kicker">SECURITY STUDY NOTE</p>
          <h1>정보보안기사 필기 대비</h1>
          <p class="home-description">
            정보보안기사 필기 내용을 PART와 SECTION별로 정리하는<br>
            개인 학습용 시험 대비 사이트입니다.
          </p>
          <p class="home-copyright-note">개인 학습용 사이트로, 구매한 교재 및 기출문제의 내용을 포함하므로 무단 공유·복제·배포를 금지합니다.</p>
          <div class="home-counts" aria-label="전체 목차 수">
            <span class="count-chip">총 <strong>7</strong>개 PART</span>
            <span class="count-chip">총 <strong>43</strong>개 SECTION</span>
          </div>
        </header>
        <section aria-labelledby="partCardsTitle">
          <h2 class="home-section-heading" id="partCardsTitle">PART 바로가기</h2>
          <div class="part-card-grid">${partCards}</div>
        </section>
        <button class="update-log-button" id="updateLogButton" type="button">
          <span aria-hidden="true">▤</span> 업데이트 로그
        </button>
      </article>`;

    renderNavigation();
    setMainToTop();
    updateFloatingButtons();
    document.title = "정보보안기사 필기 대비";
  }

  /* ---------- SECTION 본문 ---------- */

  function renderInternalToc(section, variant = "top") {
    if (!Array.isArray(section.subtopics) || section.subtopics.length === 0) return "";

    const buttons = getTocItems(section).map((item, index) => `
      <button class="toc-button" type="button" data-subtopic-target="${escapeHtml(item.target)}" data-subtopic-members="${escapeHtml(item.memberIds.join(" "))}">
        ${index + 1}. ${escapeHtml(item.title)}
      </button>`).join("");

    const variantClass = variant === "remote" ? "internal-toc-remote" : "internal-toc-top";
    const title = variant === "remote" ? "이 SECTION에서" : "SECTION 내부 소목차";

    return `
      <nav class="internal-toc ${variantClass}" aria-label="SECTION 내부 소목차">
        <p class="internal-toc-title">${title}</p>
        <div class="internal-toc-list">${buttons}</div>
      </nav>`;
  }

  function renderSectionBody(section) {
    if (Array.isArray(section.subtopics) && section.subtopics.length > 0) {
      return section.subtopics.map((subtopic, index) => `
        <section class="subtopic-section" id="${escapeHtml(subtopic.id)}" data-subtopic-id="${escapeHtml(subtopic.id)}">
          <h2 class="subtopic-title">${index + 1}. ${escapeHtml(subtopic.title)}</h2>
          <div class="subtopic-content">${subtopic.content || ""}</div>
        </section>`).join("");
    }

    if (section.content && section.content.trim()) return section.content;

    return `
      <div class="placeholder-note">
        <p>이 SECTION의 요약 내용은 추후 추가할 예정입니다.</p>
      </div>`;
  }

  function createSectionNavigation(sectionId) {
    const index = flattenedSections.findIndex((section) => section.id === sectionId);
    const previous = index > 0 ? flattenedSections[index - 1] : null;
    const next = index < flattenedSections.length - 1 ? flattenedSections[index + 1] : null;

    const button = (record, direction) => {
      const isPrevious = direction === "previous";
      const label = isPrevious ? "← 이전 SECTION" : "다음 SECTION →";
      if (!record) {
        return `
          <button class="section-nav-button ${isPrevious ? "previous" : "next"}" type="button" disabled>
            <span class="nav-direction">${label}</span>
            <span class="nav-target">이동할 SECTION이 없습니다.</span>
          </button>`;
      }

      return `
        <button class="section-nav-button ${isPrevious ? "previous" : "next"}" type="button" data-section-id="${record.id}">
          <span class="nav-direction">${label}</span>
          <span class="nav-target">SECTION ${padSection(getSectionDisplayNumber(record))} ${escapeHtml(record.title)}</span>
        </button>`;
    };

    return `
      <nav class="section-navigation" aria-label="이전 및 다음 SECTION">
        ${button(previous, "previous")}
        ${button(next, "next")}
      </nav>`;
  }

  function showSection(sectionId, options = {}) {
    const record = getSectionRecord(sectionId);
    if (!record) {
      renderHome();
      return;
    }

    state.currentView = "section";
    state.currentSectionId = record.id;
    state.openParts.add(record.part.part);

    StudyStorage.setLastView("section");
    StudyStorage.setLastSection(record.id);
    StudyStorage.setOpenParts(state.openParts);

    const hasSubtopics = Array.isArray(record.subtopics) && record.subtopics.length > 0;
    elements.content.innerHTML = `
      <article class="section-page ${hasSubtopics ? "has-internal-toc" : ""}" data-section-page="${record.id}">
        <div class="section-reading-column">
          <header class="section-header">
            <p class="section-kicker">PART ${record.part.part} ${escapeHtml(record.part.title)}</p>
            <h1>SECTION ${padSection(getSectionDisplayNumber(record))} ${escapeHtml(record.title)}</h1>
          </header>
          <hr class="section-divider">
          ${hasSubtopics ? renderInternalToc(record, "top") : ""}
          <div class="section-content">${renderSectionBody(record)}</div>
          ${createSectionNavigation(record.id)}
        </div>
        ${hasSubtopics ? renderInternalToc(record, "remote") : ""}
      </article>`;

    renderNavigation();
    setMainToTop();
    updateFloatingButtons();
    setupTocObserver(record);
    ensureCurrentSectionVisible();
    document.title = `SECTION ${padSection(getSectionDisplayNumber(record))} ${record.title} | 정보보안기사 필기 대비`;

    if (options.searchTerm) {
      window.requestAnimationFrame(() => highlightSearchTerm(options.searchTerm));
    }
  }

  /* ---------- 객관식 문제 ---------- */

  function getActiveQuestions() {
    return questionData.filter((question) => question.difficulty === state.currentDifficulty);
  }

  function getQuestionSectionNumber(question) {
    if (!question) return null;
    const explicit = Number(question.sectionNumber);
    if (Number.isInteger(explicit)) return explicit;
    const match = String(question.section || "").match(/SECTION\s+0*(\d+)/i);
    return match ? Number(match[1]) : null;
  }

  function getQuestionSectionRecord(questionOrSection = state.activeQuestionSection) {
    const sectionNumber = typeof questionOrSection === "object"
      ? getQuestionSectionNumber(questionOrSection)
      : Number(questionOrSection);
    return flattenedSections.find((section) => section.number === sectionNumber) || null;
  }

  function getQuestionPartSectionNumber(question) {
    if (!question) return null;
    return getPartSectionNumber(question.part, getQuestionSectionNumber(question)) || getQuestionSectionNumber(question);
  }

  function getQuestionSectionLabel(question) {
    const section = getQuestionSectionRecord(question);
    return section ? `SECTION ${padSection(getQuestionPartSectionNumber(question))} ${section.title}` : String(question?.section || "기출문제");
  }

  function getSectionMemoContext(question = null) {
    const partNumber = Number(question?.part ?? state.activeQuestionPart);
    const globalSectionNumber = Number(question ? getQuestionSectionNumber(question) : state.activeQuestionSection);
    const section = flattenedSections.find((item) =>
      item.part.part === partNumber && item.number === globalSectionNumber
    ) || null;
    const localSectionNumber = getPartSectionNumber(partNumber, globalSectionNumber) || globalSectionNumber;
    const key = `part-${partNumber}-section-${globalSectionNumber}`;
    const savedMemo = state.sectionMemos[key] || "";
    const draftMemo = Object.prototype.hasOwnProperty.call(state.sectionMemoDrafts, key)
      ? state.sectionMemoDrafts[key]
      : savedMemo;

    return {
      key,
      partNumber,
      localSectionNumber,
      title: section?.title || "기출문제",
      savedMemo,
      draftMemo
    };
  }

  function renderSectionMemo(question = null) {
    const memo = getSectionMemoContext(question);
    const isDirty = memo.draftMemo !== memo.savedMemo;
    const status = isDirty
      ? "저장되지 않은 내용이 있습니다."
      : memo.savedMemo
        ? "저장된 메모를 불러왔습니다."
        : "작성 후 저장 버튼을 눌러 주세요.";

    return `
      <aside class="section-memo-panel" data-section-memo-key="${escapeHtml(memo.key)}" aria-labelledby="sectionMemoTitle-${escapeHtml(memo.key)}">
        <div class="section-memo-heading">
          <p>PART ${memo.partNumber} · SECTION ${padSection(memo.localSectionNumber)}</p>
          <h2 id="sectionMemoTitle-${escapeHtml(memo.key)}">SECTION 메모장</h2>
          <span>${escapeHtml(memo.title)}</span>
        </div>
        <textarea class="section-memo-input" data-section-memo-input aria-label="${escapeHtml(memo.title)} SECTION 메모" placeholder="이 SECTION에서 기억할 내용을 메모하세요.">${escapeHtml(memo.draftMemo)}</textarea>
        <button class="section-memo-save" type="button" data-section-memo-save>저장</button>
        <p class="section-memo-status ${isDirty ? "is-dirty" : ""}" data-section-memo-status aria-live="polite">${status}</p>
      </aside>`;
  }

  function saveSectionMemo(button) {
    const panel = button.closest("[data-section-memo-key]");
    const key = panel?.dataset.sectionMemoKey;
    const input = panel?.querySelector("[data-section-memo-input]");
    const status = panel?.querySelector("[data-section-memo-status]");
    if (!key || !(input instanceof HTMLTextAreaElement)) return;

    const value = input.value;
    const nextMemos = { ...state.sectionMemos, [key]: value };
    const saved = StudyStorage.setSectionMemos(nextMemos);
    if (saved) {
      state.sectionMemos = nextMemos;
      state.sectionMemoDrafts[key] = value;
      status?.classList.remove("is-dirty", "is-error");
      if (status) status.textContent = "메모를 저장했습니다.";
      return;
    }

    status?.classList.add("is-error");
    if (status) status.textContent = "메모를 저장하지 못했습니다. 다시 시도해 주세요.";
  }

  function getActiveSectionQuestions() {
    return getActiveQuestions().filter((question) =>
      question.part === state.activeQuestionPart &&
      getQuestionSectionNumber(question) === state.activeQuestionSection
    );
  }

  function getQuestionSectionSequenceNumber(question) {
    if (!question) return "";
    const sectionNumber = getQuestionSectionNumber(question);
    const questionsInSection = questionData.filter((item) =>
      item.difficulty === question.difficulty &&
      item.part === question.part &&
      getQuestionSectionNumber(item) === sectionNumber
    );
    const index = questionsInSection.indexOf(question);
    return index >= 0 ? index + 1 : 1;
  }

  function getQuestionDisplayNumber(question) {
    if (!question) return "";
    return `${question.part}-${getQuestionPartSectionNumber(question)}-${getQuestionSectionSequenceNumber(question)}`;
  }

  function getQuestionSectionPositionKey(partNumber, sectionNumber, difficulty = state.currentDifficulty) {
    const safeDifficulty = difficulty === "hard" ? "hard" : "normal";
    return `${safeDifficulty}:part-${Number(partNumber)}:section-${Number(sectionNumber)}`;
  }

  function getRememberedSectionQuestion(partNumber, sectionNumber, difficulty = state.currentDifficulty) {
    const safeDifficulty = difficulty === "hard" ? "hard" : "normal";
    const key = getQuestionSectionPositionKey(partNumber, sectionNumber, safeDifficulty);
    const questionId = state.questionSectionPositions[key];
    if (!questionId) return null;

    return questionData.find((question) =>
      question.id === questionId &&
      question.difficulty === safeDifficulty &&
      question.part === Number(partNumber) &&
      getQuestionSectionNumber(question) === Number(sectionNumber)
    ) || null;
  }

  function rememberQuestionSectionPosition(question) {
    if (!question) return;
    const key = getQuestionSectionPositionKey(
      question.part,
      getQuestionSectionNumber(question),
      question.difficulty
    );
    if (state.questionSectionPositions[key] === question.id) return;

    state.questionSectionPositions[key] = question.id;
    StudyStorage.setQuestionSectionPositions(state.questionSectionPositions);
  }

  function clearQuestionSectionPositions(difficulty, partNumber = null, sectionNumber = null) {
    const safeDifficulty = difficulty === "hard" ? "hard" : "normal";
    const prefix = `${safeDifficulty}:part-${partNumber === null ? "" : Number(partNumber)}`;

    Object.keys(state.questionSectionPositions).forEach((key) => {
      if (partNumber === null) {
        if (key.startsWith(`${safeDifficulty}:`)) delete state.questionSectionPositions[key];
        return;
      }

      if (sectionNumber === null) {
        if (key.startsWith(`${prefix}:`)) delete state.questionSectionPositions[key];
        return;
      }

      if (key === getQuestionSectionPositionKey(partNumber, sectionNumber, safeDifficulty)) {
        delete state.questionSectionPositions[key];
      }
    });

    StudyStorage.setQuestionSectionPositions(state.questionSectionPositions);
  }

  function hasQuestionPartHistory(partNumber) {
    return questionData.some((question) => {
      if (question.part !== Number(partNumber) || question.difficulty !== state.currentDifficulty) return false;
      return getQuestionState(question).selected !== null;
    });
  }

  function hasQuestionAllHistory() {
    return questionData.some((question) =>
      question.difficulty === state.currentDifficulty &&
      getQuestionState(question).selected !== null
    );
  }

  function hasQuestionSectionHistory(partNumber, sectionNumber) {
    return questionData.some((question) =>
      question.part === Number(partNumber) &&
      question.difficulty === state.currentDifficulty &&
      getQuestionSectionNumber(question) === Number(sectionNumber) &&
      getQuestionState(question).selected !== null
    );
  }

  function getQuestionOutcome(question) {
    const saved = getQuestionState(question);
    if (!saved.checked) return "unanswered";
    return saved.selected === question.answer ? "correct" : "incorrect";
  }

  function getQuestionResultCounts() {
    return getActiveSectionQuestions().reduce((counts, question) => {
      const outcome = getQuestionOutcome(question);
      if (outcome === "correct") counts.correct += 1;
      if (outcome === "incorrect") counts.incorrect += 1;
      return counts;
    }, { correct: 0, incorrect: 0 });
  }

  function getQuestionSectionResultCounts(partNumber, sectionNumber) {
    return questionData.reduce((counts, question) => {
      if (
        question.difficulty !== state.currentDifficulty ||
        question.part !== Number(partNumber) ||
        getQuestionSectionNumber(question) !== Number(sectionNumber)
      ) return counts;

      const outcome = getQuestionOutcome(question);
      if (outcome === "incorrect") counts.incorrect += 1;
      if (outcome === "correct") counts.correct += 1;
      return counts;
    }, { incorrect: 0, correct: 0 });
  }

  function selectQuestionOption(number, focusAfterRender = false) {
    const question = questionData[state.currentQuestionIndex];
    if (!question || !getActiveSectionQuestions().includes(question)) return;
    if (!Number.isInteger(number) || number < 1 || number > question.options.length) return;

    state.questionNotice = "";
    saveQuestionState(question, { selected: number, checked: false });
    renderQuestion({ scroll: false });

    if (focusAfterRender) {
      window.requestAnimationFrame(() => {
        elements.content.querySelector(`[data-question-option="${number}"]`)?.focus();
      });
    }
  }

  function checkCurrentQuestion(focusAfterRender = false) {
    const question = questionData[state.currentQuestionIndex];
    if (!question || !getActiveSectionQuestions().includes(question)) return;

    const saved = getQuestionState(question);
    if (saved.checked) {
      moveCurrentQuestion(1);
      return;
    }

    if (saved.selected === null) {
      state.questionNotice = "답을 선택해 주세요.";
    } else {
      state.questionNotice = "";
      saveQuestionState(question, { selected: saved.selected, checked: true });
    }

    renderQuestion({ scroll: false });
    if (focusAfterRender) {
      window.requestAnimationFrame(() => elements.content.querySelector("[data-question-check]")?.focus());
    }
  }

  function moveCurrentQuestion(direction) {
    const questions = getActiveSectionQuestions();
    const currentQuestion = questionData[state.currentQuestionIndex];
    const currentIndex = questions.indexOf(currentQuestion);
    const nextIndex = currentIndex + direction;
    if (currentIndex < 0) return;
    if (nextIndex < 0) {
      window.alert("이전 문제가 없습니다.");
      return;
    }
    if (nextIndex >= questions.length) {
      window.alert("다음 문제가 없습니다.");
      return;
    }

    state.currentQuestionIndex = questionData.indexOf(questions[nextIndex]);
    state.reviewMode = null;
    state.reviewReturnIndex = null;
    state.questionNotice = "";
    StudyStorage.setQuestionIndex(state.currentQuestionIndex);
    StudyStorage.setQuestionPart(state.activeQuestionPart);
    StudyStorage.setQuestionSection(state.activeQuestionSection);
    renderQuestion();
  }

  function setQuestionSection(sectionNumber) {
    const section = flattenedSections.find((item) => item.number === Number(sectionNumber));
    if (!section) return;

    state.activeQuestionPart = section.part.part;
    state.activeQuestionSection = section.number;
    state.questionOpenParts.add(section.part.part);
    state.reviewMode = null;
    state.reviewReturnIndex = null;
    state.questionNotice = "";
    StudyStorage.setQuestionPart(section.part.part);
    StudyStorage.setQuestionSection(section.number);
    StudyStorage.setQuestionOpenParts(state.questionOpenParts);
    const sectionQuestions = getActiveSectionQuestions();
    const rememberedQuestion = getRememberedSectionQuestion(section.part.part, section.number);
    const targetQuestion = rememberedQuestion || sectionQuestions[0];
    if (targetQuestion) {
      state.currentQuestionIndex = questionData.indexOf(targetQuestion);
      StudyStorage.setQuestionIndex(state.currentQuestionIndex);
    }
    renderQuestion();
  }

  function setQuestionDifficulty(difficulty) {
    const safeDifficulty = difficulty === "hard" ? "hard" : "normal";
    if (state.currentDifficulty === safeDifficulty) return;

    state.currentDifficulty = safeDifficulty;
    state.reviewMode = null;
    state.reviewReturnIndex = null;
    state.questionNotice = "";
    StudyStorage.setQuestionDifficulty(safeDifficulty);
    updateDifficultyUi();
    elements.searchInput.value = "";
    elements.searchInput.placeholder = "파트-SECTION-문제번호 형식(예 1-1-1) or 내용 검색";
    closeSearchResults();
    const rememberedQuestion = getRememberedSectionQuestion(
      state.activeQuestionPart,
      state.activeQuestionSection,
      safeDifficulty
    );
    const targetQuestion = rememberedQuestion || getActiveSectionQuestions()[0] || getActiveQuestions()[0];
    if (targetQuestion) {
      state.activeQuestionPart = targetQuestion.part;
      state.activeQuestionSection = getQuestionSectionNumber(targetQuestion);
      state.questionOpenParts.add(targetQuestion.part);
      state.currentQuestionIndex = questionData.indexOf(targetQuestion);
      StudyStorage.setQuestionPart(targetQuestion.part);
      StudyStorage.setQuestionSection(state.activeQuestionSection);
      StudyStorage.setQuestionOpenParts(state.questionOpenParts);
      StudyStorage.setQuestionIndex(state.currentQuestionIndex);
    }
    renderQuestion();
  }

  function toggleSavedQuestion(question) {
    if (!question) return;
    if (state.savedQuestionIds.has(question.id)) {
      state.savedQuestionIds.delete(question.id);
      state.favoriteQuestionIds.delete(question.id);
      StudyStorage.setFavoriteQuestions([...state.favoriteQuestionIds]);
    } else {
      state.savedQuestionIds.add(question.id);
    }
    StudyStorage.setSavedQuestions([...state.savedQuestionIds]);
    renderQuestion({ scroll: false });
  }

  function getSavedQuestions() {
    const questions = [...state.savedQuestionIds]
      .map((id) => questionData.find((question) => question.id === id))
      .filter(Boolean);

    return [
      ...questions.filter((question) => state.favoriteQuestionIds.has(question.id)),
      ...questions.filter((question) => !state.favoriteQuestionIds.has(question.id))
    ];
  }

  function toggleFavoriteQuestion(questionId) {
    const question = questionData.find((item) => item.id === questionId);
    if (!question || !state.savedQuestionIds.has(question.id)) return;

    if (state.favoriteQuestionIds.has(question.id)) state.favoriteQuestionIds.delete(question.id);
    else state.favoriteQuestionIds.add(question.id);
    StudyStorage.setFavoriteQuestions([...state.favoriteQuestionIds]);

    if (state.currentView === "saved-question") renderSavedQuestionDetail({ scroll: false });
    else renderSavedQuestionsView({ scroll: false });
  }

  function getSavedPracticeState(question) {
    const saved = state.savedPracticeStates[question.id];
    if (!saved || typeof saved !== "object") return { selected: null, checked: false, notice: "" };

    const selected = Number(saved.selected);
    const isValidSelection = Number.isInteger(selected) && selected >= 1 && selected <= question.options.length;
    return {
      selected: isValidSelection ? selected : null,
      checked: isValidSelection && saved.checked === true,
      notice: typeof saved.notice === "string" ? saved.notice : ""
    };
  }

  function selectSavedPracticeOption(questionId, number, focusAfterRender = false) {
    const question = questionData.find((item) => item.id === questionId);
    if (!question || !state.savedQuestionIds.has(question.id)) return;
    if (!Number.isInteger(number) || number < 1 || number > question.options.length) return;

    state.savedPracticeStates[question.id] = { selected: number, checked: false, notice: "" };
    state.currentSavedQuestionId = question.id;
    renderSavedQuestionDetail({ scroll: false });
    if (focusAfterRender) {
      window.requestAnimationFrame(() => {
        elements.content.querySelector(`[data-saved-practice-option="${question.id}:${number}"]`)?.focus();
      });
    }
  }

  function checkSavedPracticeQuestion(questionId, focusAfterRender = false) {
    const question = questionData.find((item) => item.id === questionId);
    if (!question || !state.savedQuestionIds.has(question.id)) return;

    const saved = getSavedPracticeState(question);
    if (saved.checked) {
      moveSavedQuestion(1);
      return;
    }

    state.savedPracticeStates[question.id] = saved.selected === null
      ? { selected: null, checked: false, notice: "답을 선택해 주세요." }
      : { selected: saved.selected, checked: true, notice: "" };

    state.currentSavedQuestionId = question.id;
    renderSavedQuestionDetail({ scroll: false });
    if (focusAfterRender) {
      window.requestAnimationFrame(() => {
        elements.content.querySelector(`[data-saved-practice-check="${question.id}"]`)?.focus();
      });
    }
  }

  function openSavedQuestionsView() {
    state.savedQuestionsReturnIndex = state.currentQuestionIndex;
    state.savedPracticeStates = {};
    state.currentSavedQuestionId = null;
    state.reviewMode = null;
    state.reviewReturnIndex = null;
    state.questionNotice = "";
    renderSavedQuestionsView();
  }

  function returnFromSavedQuestions() {
    const question = questionData[state.savedQuestionsReturnIndex];
    state.savedQuestionsReturnIndex = null;
    state.savedPracticeStates = {};
    state.currentSavedQuestionId = null;
    if (question) {
      state.currentQuestionIndex = questionData.indexOf(question);
      state.activeQuestionPart = question.part;
      state.activeQuestionSection = getQuestionSectionNumber(question);
      state.questionOpenParts.add(question.part);
      state.currentDifficulty = question.difficulty;
      StudyStorage.setQuestionIndex(state.currentQuestionIndex);
      StudyStorage.setQuestionPart(question.part);
      StudyStorage.setQuestionSection(state.activeQuestionSection);
      StudyStorage.setQuestionOpenParts(state.questionOpenParts);
      StudyStorage.setQuestionDifficulty(question.difficulty);
      updateDifficultyUi();
    }
    renderQuestion();
  }

  function deleteSavedQuestion(questionId) {
    const question = questionData.find((item) => item.id === questionId);
    if (!question || !state.savedQuestionIds.has(question.id)) return;
    const displayNumber = getQuestionDisplayNumber(question);
    if (!window.confirm(`${displayNumber} 문제를 저장 목록에서 삭제하시겠습니까? 기존 답안과 채점 이력은 유지됩니다.`)) return;

    state.savedQuestionIds.delete(question.id);
    state.favoriteQuestionIds.delete(question.id);
    delete state.savedPracticeStates[question.id];
    if (state.currentSavedQuestionId === question.id) state.currentSavedQuestionId = null;
    StudyStorage.setSavedQuestions([...state.savedQuestionIds]);
    StudyStorage.setFavoriteQuestions([...state.favoriteQuestionIds]);
    renderSavedQuestionsView({ scroll: false });
  }

  function resetSavedQuestions() {
    if (!state.savedQuestionIds.size) return;
    if (!window.confirm("저장한 문제를 모두 초기화하시겠습니까? 문제별 답안과 채점 이력은 유지됩니다.")) return;

    state.savedQuestionIds.clear();
    state.favoriteQuestionIds.clear();
    state.savedPracticeStates = {};
    state.currentSavedQuestionId = null;
    StudyStorage.setSavedQuestions([]);
    StudyStorage.setFavoriteQuestions([]);
    if (state.currentView === "saved-questions" || state.currentView === "saved-question") renderSavedQuestionsView({ scroll: false });
    else if (state.reviewMode) renderQuestionReview();
    else renderQuestion({ scroll: false });
  }

  function resetAllQuestions() {
    const targets = questionData.filter((question) => question.difficulty === state.currentDifficulty);
    if (!targets.length || !hasQuestionAllHistory()) return;

    const difficultyLabel = state.currentDifficulty === "hard" ? "어려움" : "보통";
    if (!window.confirm(`${difficultyLabel} 난이도의 모든 문제 선택 답안과 채점 결과를 초기화하시겠습니까?`)) return;

    targets.forEach((question) => delete state.questionStates[question.id]);
    StudyStorage.setQuestionStates(state.questionStates);
    clearQuestionSectionPositions(state.currentDifficulty);
    const firstQuestion = targets[0];
    state.activeQuestionPart = firstQuestion.part;
    state.activeQuestionSection = getQuestionSectionNumber(firstQuestion);
    state.currentQuestionIndex = questionData.indexOf(firstQuestion);
    state.questionOpenParts.add(firstQuestion.part);
    StudyStorage.setQuestionPart(firstQuestion.part);
    StudyStorage.setQuestionSection(state.activeQuestionSection);
    StudyStorage.setQuestionIndex(state.currentQuestionIndex);
    StudyStorage.setQuestionOpenParts(state.questionOpenParts);
    state.questionNotice = "";
    state.reviewMode = null;
    state.reviewReturnIndex = null;
    renderQuestion({ scroll: false });
  }

  function resetQuestionPart(partNumber) {
    const safePart = Number(partNumber);
    if (!Number.isInteger(safePart) || safePart < 1 || safePart > 7) return;

    const targets = questionData.filter((question) =>
      question.part === safePart && question.difficulty === state.currentDifficulty
    );
    if (!targets.length) return;

    const difficultyLabel = state.currentDifficulty === "hard" ? "어려움" : "보통";
    if (!window.confirm(`PART ${safePart} ${difficultyLabel} 문제의 선택 답안과 채점 결과를 모두 초기화하시겠습니까?`)) return;

    targets.forEach((question) => delete state.questionStates[question.id]);
    StudyStorage.setQuestionStates(state.questionStates);
    clearQuestionSectionPositions(state.currentDifficulty, safePart);
    const firstQuestion = targets[0];
    state.activeQuestionPart = safePart;
    state.activeQuestionSection = getQuestionSectionNumber(firstQuestion);
    state.currentQuestionIndex = questionData.indexOf(firstQuestion);
    state.questionOpenParts.add(safePart);
    StudyStorage.setQuestionPart(safePart);
    StudyStorage.setQuestionSection(state.activeQuestionSection);
    StudyStorage.setQuestionIndex(state.currentQuestionIndex);
    StudyStorage.setQuestionOpenParts(state.questionOpenParts);
    state.questionNotice = "";
    state.reviewMode = null;
    state.reviewReturnIndex = null;
    renderQuestion({ scroll: false });
  }

  function resetQuestionSection(partNumber, sectionNumber) {
    const safePart = Number(partNumber);
    const safeSection = Number(sectionNumber);
    const section = flattenedSections.find((record) => record.part.part === safePart && record.number === safeSection);
    if (!section || !hasQuestionSectionHistory(safePart, safeSection)) return;
    const targets = questionData.filter((question) => question.part === safePart && question.difficulty === state.currentDifficulty && getQuestionSectionNumber(question) === safeSection);
    const difficultyLabel = state.currentDifficulty === "hard" ? "어려움" : "보통";
    if (!window.confirm(`PART ${safePart} SECTION ${padSection(getPartSectionNumber(safePart, safeSection))} ${difficultyLabel} 문제의 선택 답안과 채점 결과를 모두 초기화하시겠습니까?`)) return;
    targets.forEach((question) => delete state.questionStates[question.id]);
    StudyStorage.setQuestionStates(state.questionStates);
    clearQuestionSectionPositions(state.currentDifficulty, safePart, safeSection);
    const firstQuestion = targets[0];
    state.activeQuestionPart = safePart;
    state.activeQuestionSection = safeSection;
    state.currentQuestionIndex = questionData.indexOf(firstQuestion);
    state.questionOpenParts.add(safePart);
    StudyStorage.setQuestionPart(safePart);
    StudyStorage.setQuestionSection(safeSection);
    StudyStorage.setQuestionIndex(state.currentQuestionIndex);
    StudyStorage.setQuestionOpenParts(state.questionOpenParts);
    state.questionNotice = "";
    state.reviewMode = null;
    state.reviewReturnIndex = null;
    renderQuestion({ scroll: false });
  }

  function getQuestionState(question) {
    const saved = state.questionStates[question.id];
    if (!saved || typeof saved !== "object") return { selected: null, checked: false };

    const selected = Number(saved.selected);
    const isValidSelection = Number.isInteger(selected) && selected >= 1 && selected <= question.options.length;
    return {
      selected: isValidSelection ? selected : null,
      checked: isValidSelection && saved.checked === true
    };
  }

  function saveQuestionState(question, nextState) {
    state.questionStates[question.id] = {
      selected: nextState.selected,
      checked: nextState.checked === true
    };
    StudyStorage.setQuestionStates(state.questionStates);
  }

  function renderQuestionStatus(activeIndex, total) {
    const counts = getQuestionResultCounts();
    return `
      <div class="question-status-bar" aria-label="문제 진행 및 채점 현황">
        <p class="question-progress">현재 문제 <strong>${activeIndex + 1}</strong> / 전체 <strong>${total}</strong></p>
        <button class="question-result-filter is-incorrect" type="button" data-question-review="incorrect">틀린 문제 <strong>${counts.incorrect}</strong></button>
        <button class="question-result-filter is-correct" type="button" data-question-review="correct">맞춘 문제 <strong>${counts.correct}</strong></button>
      </div>`;
  }

  function renderOptionExplanations(question) {
    if (!Array.isArray(question.optionExplanations) || !question.optionExplanations.length) return "";

    return `
      <ol class="question-option-explanations" aria-label="보기별 상세 해설">
        ${question.optionExplanations.map((explanation, optionIndex) => {
          const number = optionIndex + 1;
          const isAnswer = number === question.answer;
          return `
            <li class="${isAnswer ? "is-correct" : "is-incorrect"}">
              <strong>${["①", "②", "③", "④", "⑤"][optionIndex] || number} ${isAnswer ? "정답 보기" : "오답 보기"}</strong>
              <p>${formatQuestionText(explanation)}</p>
            </li>`;
        }).join("")}
      </ol>`;
  }

  function openSavedQuestionDetail(questionId) {
    const question = questionData.find((item) => item.id === questionId);
    if (!question || !state.savedQuestionIds.has(question.id)) return;

    state.currentSavedQuestionId = question.id;
    renderSavedQuestionDetail();
  }

  function returnToSavedQuestionsList() {
    state.currentSavedQuestionId = null;
    renderSavedQuestionsView();
  }

  function moveSavedQuestion(direction) {
    const questions = getSavedQuestions();
    const currentIndex = questions.findIndex((question) => question.id === state.currentSavedQuestionId);
    const nextIndex = currentIndex + direction;
    if (currentIndex < 0) return;
    if (nextIndex < 0) {
      window.alert("이전 문제가 없습니다.");
      return;
    }
    if (nextIndex >= questions.length) {
      window.alert("다음 문제가 없습니다.");
      return;
    }

    state.currentSavedQuestionId = questions[nextIndex].id;
    renderSavedQuestionDetail();
  }

  function renderSavedQuestionsView(options = {}) {
    state.currentView = "saved-questions";
    state.currentSectionId = null;
    state.currentSavedQuestionId = null;
    disconnectTocObserver();

    const questions = getSavedQuestions();
    const items = questions.length ? questions.map((question) => {
      const part = getPartRecord(question.part);
      const difficultyLabel = question.difficulty === "hard" ? "어려움" : "보통";
      const isFavorite = state.favoriteQuestionIds.has(question.id);
      const displayNumber = getQuestionDisplayNumber(question);
      const section = getQuestionSectionRecord(question);
      return `
        <li class="saved-question-index-item ${isFavorite ? "is-favorite" : ""}">
          <button class="saved-question-index-open" type="button" data-saved-question-open="${escapeHtml(question.id)}">
            <strong>PART ${question.part} ${escapeHtml(part?.title || "")} · SECTION ${padSection(getQuestionPartSectionNumber(question))} ${escapeHtml(section?.title || "")} · ${difficultyLabel} · 문제 ${getQuestionSectionSequenceNumber(question)}</strong>
          </button>
          <div class="saved-question-index-actions">
            <button class="saved-question-favorite-button ${isFavorite ? "is-favorite" : ""}" type="button" data-saved-question-favorite="${escapeHtml(question.id)}" aria-pressed="${isFavorite}" aria-label="${displayNumber} 문제 ${isFavorite ? "즐겨찾기 해제" : "즐겨찾기 설정"}">
              <span aria-hidden="true">${isFavorite ? "★" : "☆"}</span>
            </button>
            <button class="saved-practice-delete" type="button" data-saved-question-delete="${escapeHtml(question.id)}" aria-label="${displayNumber} 문제 저장 목록에서 삭제">삭제</button>
          </div>
        </li>`;
    }).join("") : `
      <li class="question-review-empty">
        <strong>저장한 문제가 없습니다.</strong>
        <span>문제 화면의 저장 버튼을 누르면 이곳에 문제 목차가 표시됩니다.</span>
      </li>`;

    elements.content.innerHTML = `
      <article class="question-review-page saved-practice-page">
        <header class="question-review-header">
          <button class="question-review-back" type="button" data-saved-questions-back>← 풀던 문제로 돌아가기</button>
          <div>
            <p class="section-kicker">SAVED QUESTIONS</p>
            <h1>저장한 문제 목차 <span>${questions.length}</span></h1>
            <p class="saved-practice-note">목차를 누르면 저장 문제 전용 풀이 화면으로 이동합니다.</p>
          </div>
        </header>
        <ul class="saved-question-index-list">${items}</ul>
      </article>`;

    renderNavigation();
    if (options.scroll !== false) setMainToTop();
    updateFloatingButtons();
    document.title = `저장한 문제 목차 ${questions.length}개 | 정보보안기사 필기 대비`;
  }

  function renderSavedQuestionDetail(options = {}) {
    const questions = getSavedQuestions();
    let question = questions.find((item) => item.id === state.currentSavedQuestionId);
    if (!question) {
      renderSavedQuestionsView(options);
      return;
    }

    state.currentView = "saved-question";
    state.currentSectionId = null;
    disconnectTocObserver();

    const index = questions.indexOf(question);
    const saved = getSavedPracticeState(question);
    const isCorrect = saved.checked && saved.selected === question.answer;
    const isFavorite = state.favoriteQuestionIds.has(question.id);
    const displayNumber = getQuestionDisplayNumber(question);
    const questionNumber = getQuestionSectionSequenceNumber(question);
    const part = getPartRecord(question.part);
    const difficultyLabel = question.difficulty === "hard" ? "어려움" : "보통";
    const optionsMarkup = question.options.map((option, optionIndex) => {
      const number = optionIndex + 1;
      const isSelected = saved.selected === number;
      const isAnswer = saved.checked && question.answer === number;
      const isWrongSelection = saved.checked && isSelected && question.answer !== number;
      const classes = [
        "question-option",
        isSelected ? "is-selected" : "",
        isAnswer ? "is-correct" : "",
        isWrongSelection ? "is-incorrect" : ""
      ].filter(Boolean).join(" ");
      const inputId = `saved-${question.id}-option-${number}`;

      return `
        <label class="${classes}" for="${escapeHtml(inputId)}">
          <input
            id="${escapeHtml(inputId)}"
            type="radio"
            name="saved-question-answer-${escapeHtml(question.id)}"
            value="${number}"
            data-saved-practice-option="${escapeHtml(question.id)}:${number}"
            ${isSelected ? "checked" : ""}
          >
          <span class="question-option-number" aria-hidden="true">${["①", "②", "③", "④", "⑤"][optionIndex] || number}</span>
          <span class="question-option-text">${formatQuestionText(option)}</span>
        </label>`;
    }).join("");

    let resultMarkup = "";
    if (saved.notice) {
      resultMarkup = `<div class="question-result is-notice" role="alert">${escapeHtml(saved.notice)}</div>`;
    } else if (saved.checked) {
      resultMarkup = `
        <div class="question-result ${isCorrect ? "is-correct" : "is-incorrect"}" role="status">
          <strong>${isCorrect ? "정답입니다." : "오답입니다."}</strong>
          <span>정답은 ${question.answer}번입니다.</span>
          <div class="question-explanation">
            ${question.explanation ? `<strong>핵심 풀이</strong><p>${formatQuestionText(question.explanation)}</p>` : ""}
            <strong class="question-option-explanations-title">보기별 상세 해설</strong>
            ${renderOptionExplanations(question)}
          </div>
        </div>`;
    }

    elements.content.innerHTML = `
      <article class="question-page has-section-memo saved-question-detail-page" data-saved-practice-question="${escapeHtml(question.id)}">
        <div class="question-workspace">
          <div class="question-solving-column">
            <button class="question-review-back" type="button" data-saved-question-list-back>← 저장한 문제 목차로 돌아가기</button>

            <header class="question-page-header saved-question-detail-header">
              <div>
                <p class="section-kicker">PART ${question.part} ${escapeHtml(part?.title || "")} · ${difficultyLabel}</p>
                <h1>저장한 문제 풀이</h1>
              </div>
              <p class="question-progress">현재 문제 <strong>${index + 1}</strong> / 전체 <strong>${questions.length}</strong></p>
            </header>

            <section class="question-card">
              <div class="question-meta">
                <span>${escapeHtml(getQuestionSectionLabel(question))}</span>
                <div class="saved-question-detail-actions">
                  <button class="saved-question-favorite-button ${isFavorite ? "is-favorite" : ""}" type="button" data-saved-question-favorite="${escapeHtml(question.id)}" aria-pressed="${isFavorite}" aria-label="${displayNumber} 문제 ${isFavorite ? "즐겨찾기 해제" : "즐겨찾기 설정"}">
                    <span aria-hidden="true">${isFavorite ? "★" : "☆"}</span> ${isFavorite ? "즐겨찾기됨" : "즐겨찾기"}
                  </button>
                  <button class="saved-practice-delete" type="button" data-saved-question-delete="${escapeHtml(question.id)}" aria-label="${displayNumber} 문제 저장 목록에서 삭제">삭제</button>
                </div>
              </div>
              <p class="question-source">출처: ${escapeHtml(question.source || "")}</p>
              <h2 class="question-title"><span>${questionNumber}.</span> ${formatQuestionText(question.prompt)}${saved.checked ? `<em class="question-outcome-badge ${isCorrect ? "is-correct" : "is-incorrect"}">${isCorrect ? "정답" : "오답"}</em>` : ""}</h2>
              ${question.passage ? `<div class="question-passage">${formatQuestionText(question.passage)}</div>` : ""}
              ${question.image ? `<div class="question-image"><img src="${escapeHtml(question.image)}" alt="${questionNumber}번 문제 참고 이미지"></div>` : ""}
              <fieldset class="question-options">
                <legend class="visually-hidden">저장한 ${questionNumber}번 문제의 답을 하나 선택하세요.</legend>
                ${optionsMarkup}
              </fieldset>
              <div class="question-check-row">
                <button class="question-check-button" type="button" data-saved-practice-check="${escapeHtml(question.id)}">확인</button>
              </div>
              <div class="question-result-area" aria-live="polite">${resultMarkup}</div>
            </section>

            <p class="question-shortcuts">키보드: 1~4 보기 선택 · Enter 확인 · ← → 저장 문제 이동</p>
            <nav class="question-navigation" aria-label="저장한 이전 및 다음 문제">
              <button class="question-nav-button ${index === 0 ? "is-unavailable" : ""}" type="button" data-saved-question-move="-1" aria-disabled="${index === 0}">← 이전 문제</button>
              <span>저장 문제 ${questionNumber}번</span>
              <button class="question-nav-button ${index === questions.length - 1 ? "is-unavailable" : ""}" type="button" data-saved-question-move="1" aria-disabled="${index === questions.length - 1}">다음 문제 →</button>
            </nav>
          </div>
          ${renderSectionMemo(question)}
        </div>
      </article>`;

    renderNavigation();
    if (options.scroll !== false) setMainToTop();
    updateFloatingButtons();
    document.title = `저장한 문제 ${index + 1} / ${questions.length} | 정보보안기사 필기 대비`;
  }

  function openQuestionReview(mode) {
    const safeMode = mode === "correct" ? "correct" : mode === "incorrect" ? "incorrect" : null;
    if (!safeMode) return;

    state.reviewReturnIndex = state.currentQuestionIndex;
    state.reviewMode = safeMode;
    state.questionNotice = "";
    renderQuestionReview();
  }

  function returnFromQuestionReview() {
    const returnQuestion = questionData[state.reviewReturnIndex];
    const activeSectionQuestions = getActiveSectionQuestions();
    const question = activeSectionQuestions.includes(returnQuestion) ? returnQuestion : activeSectionQuestions[0];

    state.reviewMode = null;
    state.reviewReturnIndex = null;
    if (question) {
      state.currentQuestionIndex = questionData.indexOf(question);
      state.activeQuestionPart = question.part;
      state.activeQuestionSection = getQuestionSectionNumber(question);
      StudyStorage.setQuestionIndex(state.currentQuestionIndex);
      StudyStorage.setQuestionPart(question.part);
      StudyStorage.setQuestionSection(state.activeQuestionSection);
    }
    renderQuestion();
  }

  function renderQuestionReview() {
    state.currentView = "question-review";
    state.currentSectionId = null;
    disconnectTocObserver();

    const mode = state.reviewMode === "correct" ? "correct" : "incorrect";
    const title = mode === "correct" ? "맞춘 문제" : "틀린 문제";
    const questions = getActiveSectionQuestions().filter((question) => getQuestionOutcome(question) === mode);
    const difficultyLabel = state.currentDifficulty === "hard" ? "어려움" : "보통";
    const activePart = getPartRecord(state.activeQuestionPart);
    const activeSection = getQuestionSectionRecord();

    const cards = questions.length ? questions.map((question, questionIndex) => {
      const saved = getQuestionState(question);
      const part = getPartRecord(question.part);
      const displayNumber = getQuestionDisplayNumber(question);
      const options = question.options.map((option, optionIndex) => {
        const number = optionIndex + 1;
        const isAnswer = number === question.answer;
        const isWrongSelection = mode === "incorrect" && number === saved.selected && !isAnswer;
        return `
          <li class="review-option ${isAnswer ? "is-correct" : ""} ${isWrongSelection ? "is-incorrect" : ""}">
            <span class="question-option-number" aria-hidden="true">${["①", "②", "③", "④", "⑤"][optionIndex] || number}</span>
            <span>${formatQuestionText(option)}</span>
          </li>`;
      }).join("");

      return `
        <article class="question-review-card ${mode === "correct" ? "is-correct" : "is-incorrect"}">
          <div class="question-review-meta">
            <span>${questionIndex + 1} / ${questions.length}</span>
            <span>문제 ${displayNumber} · PART ${question.part} ${escapeHtml(part?.title || "")}</span>
          </div>
          <p class="question-source">출처: ${escapeHtml(question.source || "")}</p>
          <h2 class="question-title"><span>${displayNumber}.</span> ${formatQuestionText(question.prompt)}</h2>
          ${question.passage ? `<div class="question-passage">${formatQuestionText(question.passage)}</div>` : ""}
          <ul class="review-options">${options}</ul>
          <p class="question-review-answer">내가 선택한 답 <strong>${saved.selected}번</strong> · 정답 <strong>${question.answer}번</strong></p>
        </article>`;
    }).join("") : `
      <div class="question-review-empty">
        <strong>${title}가 없습니다.</strong>
        <span>SECTION ${padSection(getPartSectionNumber(state.activeQuestionPart, state.activeQuestionSection))} ${escapeHtml(activeSection?.title || "")}의 ${difficultyLabel} 문제에서 채점한 결과가 이곳에 표시됩니다.</span>
      </div>`;

    elements.content.innerHTML = `
      <article class="question-review-page">
        <header class="question-review-header">
          <button class="question-review-back" type="button" data-question-review-back>← 풀던 문제로 돌아가기</button>
          <div>
            <p class="section-kicker">PART ${state.activeQuestionPart} ${escapeHtml(activePart?.title || "")} · SECTION ${padSection(getPartSectionNumber(state.activeQuestionPart, state.activeQuestionSection))} ${escapeHtml(activeSection?.title || "")} · ${difficultyLabel} 채점 이력</p>
            <h1>${title} <span>${questions.length}</span></h1>
          </div>
        </header>
        <div class="question-review-list">${cards}</div>
      </article>`;

    renderNavigation();
    setMainToTop();
    updateFloatingButtons();
    document.title = `SECTION ${padSection(getPartSectionNumber(state.activeQuestionPart, state.activeQuestionSection))} ${title} | 정보보안기사 필기 대비`;
  }

  function renderQuestion(options = {}) {
    state.reviewMode = null;
    state.currentView = "question";
    state.currentSectionId = null;
    disconnectTocObserver();

    const activeSectionQuestions = getActiveSectionQuestions();
    if (!activeSectionQuestions.length) {
      const part = getPartRecord(state.activeQuestionPart);
      const section = getQuestionSectionRecord();
      const difficultyLabel = state.currentDifficulty === "hard" ? "어려움" : "보통";
      elements.content.innerHTML = `
        <article class="question-page has-section-memo question-empty-page">
          <div class="question-workspace">
            <div class="question-solving-column">
              <header class="question-page-header">
                <div>
                  <p class="section-kicker">PART ${state.activeQuestionPart} ${escapeHtml(part?.title || "")}</p>
                  <h1>SECTION ${padSection(getPartSectionNumber(state.activeQuestionPart, state.activeQuestionSection))} ${escapeHtml(section?.title || "")} · ${difficultyLabel} 문제</h1>
                </div>
                ${renderQuestionStatus(-1, 0)}
              </header>
              <div class="question-empty">
                <strong>이 분류에 등록된 문제가 없습니다.</strong>
                <span>${difficultyLabel} 난이도의 문제 자료가 추가되면 이곳에 표시됩니다.</span>
              </div>
            </div>
            ${renderSectionMemo()}
          </div>
        </article>`;
      renderNavigation();
      if (options.scroll !== false) setMainToTop();
      updateFloatingButtons();
      document.title = `${difficultyLabel} 문제 | 정보보안기사 필기 대비`;
      return;
    }

    let question = questionData[state.currentQuestionIndex];
    if (!activeSectionQuestions.includes(question)) {
      question = getRememberedSectionQuestion(state.activeQuestionPart, state.activeQuestionSection) || activeSectionQuestions[0];
      state.currentQuestionIndex = questionData.indexOf(question);
    }
    const index = activeSectionQuestions.indexOf(question);

    const saved = getQuestionState(question);
    const isCorrect = saved.checked && saved.selected === question.answer;
    const isSaved = state.savedQuestionIds.has(question.id);
    const part = getPartRecord(question.part);
    const difficultyLabel = question.difficulty === "hard" ? "어려움" : "보통";
    const questionNumber = getQuestionSectionSequenceNumber(question);

    StudyStorage.setQuestionIndex(state.currentQuestionIndex);
    StudyStorage.setQuestionPart(question.part);
    StudyStorage.setQuestionSection(getQuestionSectionNumber(question));
    rememberQuestionSectionPosition(question);

    const optionsMarkup = question.options.map((option, optionIndex) => {
      const number = optionIndex + 1;
      const isSelected = saved.selected === number;
      const isAnswer = saved.checked && question.answer === number;
      const isWrongSelection = saved.checked && isSelected && question.answer !== number;
      const classes = [
        "question-option",
        isSelected ? "is-selected" : "",
        isAnswer ? "is-correct" : "",
        isWrongSelection ? "is-incorrect" : ""
      ].filter(Boolean).join(" ");

      return `
        <label class="${classes}" for="question-option-${number}">
          <input
            id="question-option-${number}"
            type="radio"
            name="question-answer"
            value="${number}"
            data-question-option="${number}"
            ${isSelected ? "checked" : ""}
          >
          <span class="question-option-number" aria-hidden="true">${["①", "②", "③", "④", "⑤"][optionIndex] || number}</span>
          <span class="question-option-text">${formatQuestionText(option)}</span>
        </label>`;
    }).join("");

    let resultMarkup = "";
    if (state.questionNotice) {
      resultMarkup = `<div class="question-result is-notice" role="alert">${escapeHtml(state.questionNotice)}</div>`;
    } else if (saved.checked) {
      resultMarkup = `
        <div class="question-result ${isCorrect ? "is-correct" : "is-incorrect"}" role="status">
          <strong>${isCorrect ? "정답입니다." : "오답입니다."}</strong>
          <span>정답은 ${question.answer}번입니다.</span>
          <div class="question-explanation">
            ${question.explanation ? `<strong>핵심 풀이</strong><p>${formatQuestionText(question.explanation)}</p>` : ""}
            <strong class="question-option-explanations-title">보기별 상세 해설</strong>
            ${renderOptionExplanations(question)}
          </div>
        </div>`;
    }

    elements.content.innerHTML = `
      <article class="question-page has-section-memo" data-question-page="${escapeHtml(question.id)}">
        <div class="question-workspace">
          <div class="question-solving-column">
            <header class="question-page-header">
              <div>
                <p class="section-kicker">PART ${question.part} ${escapeHtml(part?.title || "")} · ${difficultyLabel}</p>
                <h1>객관식 기출문제</h1>
              </div>
              ${renderQuestionStatus(index, activeSectionQuestions.length)}
            </header>

            <section class="question-card" aria-labelledby="questionTitle">
              <div class="question-meta">
                <span>${escapeHtml(getQuestionSectionLabel(question))}</span>
                <button class="question-save-button ${isSaved ? "is-saved" : ""}" type="button" data-question-save aria-pressed="${isSaved}" aria-label="${isSaved ? "저장 해제" : "문제 저장"}">
                  <span aria-hidden="true">${isSaved ? "★" : "☆"}</span> ${isSaved ? "저장됨" : "저장"}
                </button>
              </div>
              <p class="question-source">출처: ${escapeHtml(question.source || "")}</p>
              <h2 class="question-title" id="questionTitle"><span>${questionNumber}.</span> ${formatQuestionText(question.prompt)}${saved.checked ? `<em class="question-outcome-badge ${isCorrect ? "is-correct" : "is-incorrect"}">${isCorrect ? "정답" : "오답"}</em>` : ""}</h2>
              ${question.passage ? `<div class="question-passage">${formatQuestionText(question.passage)}</div>` : ""}
              ${question.image ? `<div class="question-image"><img src="${escapeHtml(question.image)}" alt="${questionNumber}번 문제 참고 이미지"></div>` : ""}

              <fieldset class="question-options">
                <legend class="visually-hidden">${questionNumber}번 문제의 답을 하나 선택하세요.</legend>
                ${optionsMarkup}
              </fieldset>

              <div class="question-check-row">
                <button class="question-check-button" type="button" data-question-check>확인</button>
              </div>
              <div class="question-result-area" aria-live="polite">${resultMarkup}</div>
            </section>

            <p class="question-shortcuts">키보드: 1~4 보기 선택 · Enter 확인 · ← → 문제 이동</p>

            <nav class="question-navigation" aria-label="이전 및 다음 문제">
              <button class="question-nav-button ${index === 0 ? "is-unavailable" : ""}" type="button" data-question-move="-1" aria-disabled="${index === 0}">← 이전 문제</button>
              <span>문제 ${questionNumber}번</span>
              <button class="question-nav-button ${index === activeSectionQuestions.length - 1 ? "is-unavailable" : ""}" type="button" data-question-move="1" aria-disabled="${index === activeSectionQuestions.length - 1}">다음 문제 →</button>
            </nav>
          </div>
          ${renderSectionMemo(question)}
        </div>
      </article>`;

    renderNavigation();
    if (options.scroll !== false) setMainToTop();
    updateFloatingButtons();
    document.title = `문제 ${index + 1} / ${activeSectionQuestions.length} | 정보보안기사 필기 대비`;
  }

  /* ---------- 내부 소목차 ---------- */

  function disconnectTocObserver() {
    if (state.tocObserver) {
      state.tocObserver.disconnect();
      state.tocObserver = null;
    }
  }

  function setActiveTocButton(subtopicId) {
    elements.content.querySelectorAll(".toc-button").forEach((button) => {
      const memberIds = (button.dataset.subtopicMembers || button.dataset.subtopicTarget || "").split(" ");
      button.classList.toggle("is-active", memberIds.includes(subtopicId));
    });
  }

  function setupTocObserver(section) {
    disconnectTocObserver();
    if (!Array.isArray(section.subtopics) || section.subtopics.length === 0 || !("IntersectionObserver" in window)) return;

    setActiveTocButton(section.subtopics[0].id);

    state.tocObserver = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible[0]) setActiveTocButton(visible[0].target.dataset.subtopicId);
    }, {
      root: elements.main,
      rootMargin: "-12% 0px -86% 0px",
      threshold: 0
    });

    elements.content.querySelectorAll("[data-subtopic-id]").forEach((sectionElement) => {
      state.tocObserver.observe(sectionElement);
    });
  }

  /* ---------- 검색 ---------- */

  function buildSearchText(record) {
    const subtopicText = (record.subtopics || [])
      .map((subtopic) => `${subtopic.title} ${stripHtml(subtopic.content)}`)
      .join(" ");
    return `PART ${record.part.part} SECTION ${getSectionDisplayNumber(record)} ${record.part.title} ${record.title} ${subtopicText} ${stripHtml(record.content)}`.replace(/\s+/g, " ").trim();
  }

  function buildQuestionSearchText(question) {
    const part = getPartRecord(question.part);
    return [
      getQuestionDisplayNumber(question),
      `PART ${question.part}`,
      part?.title,
      getQuestionSectionLabel(question),
      question.source,
      question.prompt,
      question.passage,
      ...(question.options || []),
      question.explanation,
      ...(question.optionExplanations || [])
    ].filter(Boolean).join(" ").replace(/\s+/g, " ").trim();
  }

  function makeSnippet(text, query) {
    const normalizedText = text.toLocaleLowerCase("ko-KR");
    const normalizedQuery = query.toLocaleLowerCase("ko-KR");
    const index = normalizedText.indexOf(normalizedQuery);
    if (index < 0) return text.length > 90 ? `${text.slice(0, 90)}…` : text;

    const start = Math.max(0, index - 34);
    const end = Math.min(text.length, index + query.length + 48);
    return `${start > 0 ? "…" : ""}${text.slice(start, end)}${end < text.length ? "…" : ""}`;
  }

  function searchStudyData(rawQuery) {
    const query = rawQuery.trim();
    if (!query) return [];
    const normalized = query.toLocaleLowerCase("ko-KR");

    return flattenedSections
      .map((record) => ({ record, searchText: buildSearchText(record) }))
      .filter(({ searchText }) => searchText.toLocaleLowerCase("ko-KR").includes(normalized))
      .map(({ record, searchText }) => ({ record, snippet: makeSnippet(searchText, query) }));
  }

  function searchQuestionData(rawQuery) {
    const query = rawQuery.trim();
    if (!query) return [];
    const normalized = query.toLocaleLowerCase("ko-KR");

    return getActiveQuestions()
      .map((question) => ({
        question,
        displayNumber: getQuestionDisplayNumber(question),
        searchText: buildQuestionSearchText(question)
      }))
      .filter(({ searchText }) => searchText.toLocaleLowerCase("ko-KR").includes(normalized))
      .sort((a, b) => Number(b.displayNumber === query) - Number(a.displayNumber === query))
      .map(({ question, displayNumber, searchText }) => ({
        question,
        displayNumber,
        snippet: makeSnippet(searchText, query)
      }));
  }

  function findQuestionByDisplayNumber(rawQuery) {
    const query = rawQuery.trim().replace(/\s+/g, "");
    if (!/^\d+-\d+-\d+$/.test(query)) return null;
    return getActiveQuestions().find((question) => getQuestionDisplayNumber(question) === query) || null;
  }

  function openQuestionSearchResult(questionId) {
    const question = questionData.find((item) =>
      item.id === questionId && item.difficulty === state.currentDifficulty
    );
    if (!question) return;

    state.activeQuestionPart = question.part;
    state.activeQuestionSection = getQuestionSectionNumber(question);
    state.questionOpenParts.add(question.part);
    state.currentQuestionIndex = questionData.indexOf(question);
    state.reviewMode = null;
    state.reviewReturnIndex = null;
    state.questionNotice = "";
    StudyStorage.setQuestionPart(question.part);
    StudyStorage.setQuestionSection(state.activeQuestionSection);
    StudyStorage.setQuestionOpenParts(state.questionOpenParts);
    StudyStorage.setQuestionIndex(state.currentQuestionIndex);
    closeSearchResults();
    closeMobileMenu();
    elements.searchInput.blur();
    renderQuestion();
  }

  function renderQuestionSearchResults(query) {
    const results = searchQuestionData(query);
    const visibleResults = results.slice(0, 30);
    const difficultyLabel = state.currentDifficulty === "hard" ? "어려움" : "보통";

    elements.searchResults.innerHTML = results.length
      ? `
        <p class="search-result-count">${difficultyLabel} 문제 검색 결과 ${results.length}개${results.length > 30 ? " · 상위 30개 표시" : ""}</p>
        ${visibleResults.map(({ question, displayNumber, snippet }) => {
          const part = getPartRecord(question.part);
          return `
            <button class="search-result-item" type="button" role="option" data-search-question="${escapeHtml(question.id)}">
              <span class="search-result-meta">${difficultyLabel} · PART ${question.part} ${escapeHtml(part?.title || "")}</span>
              <span class="search-result-title">문제 ${displayNumber}</span>
              <span class="search-result-snippet">${escapeHtml(snippet)}</span>
            </button>`;
        }).join("")}`
      : `<p class="search-empty">현재 ${difficultyLabel} 문제에서 일치하는 내용을 찾지 못했습니다.</p>`;

    elements.searchResults.hidden = false;
    elements.searchInput.setAttribute("aria-expanded", "true");
  }

  function renderSearchResults(query) {
    const trimmed = query.trim();
    if (!trimmed) {
      closeSearchResults();
      return;
    }

    if (state.activeTab === "questions") {
      renderQuestionSearchResults(trimmed);
      return;
    }

    const results = searchStudyData(trimmed);
    const visibleResults = results.slice(0, 30);

    elements.searchResults.innerHTML = results.length
      ? `
        <p class="search-result-count">검색 결과 ${results.length}개${results.length > 30 ? " · 상위 30개 표시" : ""}</p>
        ${visibleResults.map(({ record, snippet }) => `
          <button class="search-result-item" type="button" role="option" data-search-section="${record.id}">
            <span class="search-result-meta">PART ${record.part.part} ${escapeHtml(record.part.title)}</span>
            <span class="search-result-title">SECTION ${padSection(getSectionDisplayNumber(record))} ${escapeHtml(record.title)}</span>
            <span class="search-result-snippet">${escapeHtml(snippet)}</span>
          </button>`).join("")}`
      : `<p class="search-empty">일치하는 내용을 찾지 못했습니다.</p>`;

    elements.searchResults.hidden = false;
    elements.searchInput.setAttribute("aria-expanded", "true");
  }

  function closeSearchResults() {
    elements.searchResults.hidden = true;
    elements.searchInput.setAttribute("aria-expanded", "false");
  }

  function highlightSearchTerm(term) {
    const query = term.trim();
    const root = elements.content.querySelector(".section-page");
    if (!query || !root) return;

    const lowerQuery = query.toLocaleLowerCase("ko-KR");
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || ["SCRIPT", "STYLE", "BUTTON", "MARK"].includes(parent.tagName)) {
          return NodeFilter.FILTER_REJECT;
        }
        return node.nodeValue.toLocaleLowerCase("ko-KR").includes(lowerQuery)
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_REJECT;
      }
    });

    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach((textNode) => {
      const text = textNode.nodeValue;
      const fragment = document.createDocumentFragment();
      let cursor = 0;
      let searchFrom = 0;
      const lowerText = text.toLocaleLowerCase("ko-KR");

      while (true) {
        const matchIndex = lowerText.indexOf(lowerQuery, searchFrom);
        if (matchIndex < 0) break;
        fragment.append(document.createTextNode(text.slice(cursor, matchIndex)));
        const mark = document.createElement("mark");
        mark.className = "search-highlight";
        mark.textContent = text.slice(matchIndex, matchIndex + query.length);
        fragment.append(mark);
        cursor = matchIndex + query.length;
        searchFrom = cursor;
      }

      fragment.append(document.createTextNode(text.slice(cursor)));
      textNode.replaceWith(fragment);
    });

    const firstHighlight = root.querySelector("mark.search-highlight");
    firstHighlight?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  /* ---------- 업데이트 로그 모달 ---------- */

  function renderUpdateLogs() {
    const logs = [...updateLogs].sort((a, b) => b.date.localeCompare(a.date));
    elements.updateLogContent.innerHTML = logs.map((log) => `
      <section class="log-entry">
        <time class="log-date" datetime="${escapeHtml(log.date.replaceAll(".", "-").replace(" ", "T"))}">${escapeHtml(log.date)}</time>
        <ul>${log.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </section>`).join("");
  }

  function openUpdateModal(trigger) {
    state.updateTrigger = trigger;
    renderUpdateLogs();
    elements.updateModal.hidden = false;
    elements.body.classList.add("modal-open");
    window.requestAnimationFrame(() => elements.modalDialog.focus());
  }

  function closeUpdateModal() {
    if (elements.updateModal.hidden) return;
    elements.updateModal.hidden = true;
    elements.body.classList.remove("modal-open");
    state.updateTrigger?.focus();
    state.updateTrigger = null;
  }

  function trapModalFocus(event) {
    if (event.key !== "Tab" || elements.updateModal.hidden) return;
    const focusable = [...elements.modalDialog.querySelectorAll(
      'button:not(:disabled), [href], input:not(:disabled), [tabindex]:not([tabindex="-1"])'
    )];
    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && (document.activeElement === first || document.activeElement === elements.modalDialog)) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  /* ---------- 모바일 목차 ---------- */

  function isMobileLayout() {
    return window.matchMedia("(max-width: 900px)").matches;
  }

  function openMobileMenu() {
    if (!isMobileLayout()) return;
    const menuName = state.activeTab === "questions" ? "문제 목차" : "목차";
    elements.sidebar.classList.add("is-open");
    elements.menuBackdrop.hidden = false;
    elements.menuButton.setAttribute("aria-expanded", "true");
    elements.menuButton.setAttribute("aria-label", `${menuName} 닫기`);
    elements.body.classList.add("menu-open");
  }

  function closeMobileMenu() {
    const menuName = state.activeTab === "questions" ? "문제 목차" : "목차";
    elements.sidebar.classList.remove("is-open");
    elements.menuBackdrop.hidden = true;
    elements.menuButton.setAttribute("aria-expanded", "false");
    elements.menuButton.setAttribute("aria-label", `${menuName} 열기`);
    elements.body.classList.remove("menu-open");
  }

  function updateFloatingButtons() {
    const shouldShowTop = state.activeTab === "summary" && state.currentView === "section" && elements.main.scrollTop > 360;
    elements.toTopButton.hidden = !shouldShowTop;
  }

  /* ---------- 이벤트 ---------- */

  function attachEvents() {
    elements.homeButton.addEventListener("click", () => {
      closeMobileMenu();
      closeSearchResults();
      switchPrimaryTab("summary", { forceHome: true });
    });

    elements.summaryTab.addEventListener("click", () => switchPrimaryTab("summary"));
    elements.questionsTab.addEventListener("click", () => switchPrimaryTab("questions"));
    elements.normalDifficultyButton.addEventListener("click", () => setQuestionDifficulty("normal"));
    elements.hardDifficultyButton.addEventListener("click", () => setQuestionDifficulty("hard"));
    elements.questionAllReset.addEventListener("click", resetAllQuestions);

    elements.themeButton.addEventListener("click", () => {
      applyTheme(state.currentTheme === "dark" ? "light" : "dark");
    });

    elements.menuButton.addEventListener("click", () => {
      if (elements.sidebar.classList.contains("is-open")) closeMobileMenu();
      else openMobileMenu();
    });

    elements.menuBackdrop.addEventListener("click", closeMobileMenu);

    elements.navigation.addEventListener("click", (event) => {
      const questionSectionResetButton = event.target.closest("[data-question-section-reset]");
      if (questionSectionResetButton) {
        resetQuestionSection(questionSectionResetButton.dataset.questionSectionPart, questionSectionResetButton.dataset.questionSectionReset);
        return;
      }

      const questionPartResetButton = event.target.closest("[data-question-part-reset]");
      if (questionPartResetButton) {
        resetQuestionPart(questionPartResetButton.dataset.questionPartReset);
        return;
      }

      const questionPartToggleButton = event.target.closest("[data-question-part-toggle]");
      if (questionPartToggleButton) {
        toggleQuestionPart(questionPartToggleButton.dataset.questionPartToggle);
        return;
      }

      const questionSectionButton = event.target.closest("[data-question-section]");
      if (questionSectionButton) {
        setQuestionSection(questionSectionButton.dataset.questionSection);
        closeMobileMenu();
        return;
      }

      const savedQuestionView = event.target.closest("[data-saved-question-view]");
      if (savedQuestionView) {
        openSavedQuestionsView();
        closeMobileMenu();
        return;
      }

      const savedQuestionReset = event.target.closest("[data-saved-question-reset]");
      if (savedQuestionReset) {
        resetSavedQuestions();
        return;
      }

      const partButton = event.target.closest("[data-part-toggle]");
      if (partButton) {
        togglePart(Number(partButton.dataset.partToggle));
        return;
      }

      const sectionButton = event.target.closest("[data-section-id]");
      if (sectionButton) {
        showSection(sectionButton.dataset.sectionId);
        closeMobileMenu();
      }
    });

    elements.content.addEventListener("click", (event) => {
      const sectionMemoSaveButton = event.target.closest("[data-section-memo-save]");
      if (sectionMemoSaveButton) {
        saveSectionMemo(sectionMemoSaveButton);
        return;
      }

      const savedQuestionsBackButton = event.target.closest("[data-saved-questions-back]");
      if (savedQuestionsBackButton) {
        returnFromSavedQuestions();
        return;
      }

      const savedQuestionListBackButton = event.target.closest("[data-saved-question-list-back]");
      if (savedQuestionListBackButton) {
        returnToSavedQuestionsList();
        return;
      }

      const savedQuestionOpenButton = event.target.closest("[data-saved-question-open]");
      if (savedQuestionOpenButton) {
        openSavedQuestionDetail(savedQuestionOpenButton.dataset.savedQuestionOpen);
        return;
      }

      const savedQuestionFavoriteButton = event.target.closest("[data-saved-question-favorite]");
      if (savedQuestionFavoriteButton) {
        toggleFavoriteQuestion(savedQuestionFavoriteButton.dataset.savedQuestionFavorite);
        return;
      }

      const savedQuestionDeleteButton = event.target.closest("[data-saved-question-delete]");
      if (savedQuestionDeleteButton) {
        deleteSavedQuestion(savedQuestionDeleteButton.dataset.savedQuestionDelete);
        return;
      }

      const savedPracticeCheckButton = event.target.closest("[data-saved-practice-check]");
      if (savedPracticeCheckButton) {
        checkSavedPracticeQuestion(savedPracticeCheckButton.dataset.savedPracticeCheck, true);
        return;
      }

      const savedQuestionMoveButton = event.target.closest("[data-saved-question-move]");
      if (savedQuestionMoveButton && !savedQuestionMoveButton.disabled) {
        moveSavedQuestion(Number(savedQuestionMoveButton.dataset.savedQuestionMove));
        return;
      }

      const reviewBackButton = event.target.closest("[data-question-review-back]");
      if (reviewBackButton) {
        returnFromQuestionReview();
        return;
      }

      const reviewButton = event.target.closest("[data-question-review]");
      if (reviewButton) {
        openQuestionReview(reviewButton.dataset.questionReview);
        return;
      }

      const saveButton = event.target.closest("[data-question-save]");
      if (saveButton) {
        toggleSavedQuestion(questionData[state.currentQuestionIndex]);
        window.requestAnimationFrame(() => elements.content.querySelector("[data-question-save]")?.focus());
        return;
      }

      const checkButton = event.target.closest("[data-question-check]");
      if (checkButton) {
        checkCurrentQuestion(true);
        return;
      }

      const moveButton = event.target.closest("[data-question-move]");
      if (moveButton && !moveButton.disabled) {
        moveCurrentQuestion(Number(moveButton.dataset.questionMove));
        return;
      }

      const partCard = event.target.closest("[data-home-part]");
      if (partCard) {
        const part = getPartRecord(partCard.dataset.homePart);
        if (part) {
          state.openParts.add(part.part);
          StudyStorage.setOpenParts(state.openParts);
          showSection(part.sections[0].id);
        }
        return;
      }

      const sectionButton = event.target.closest("[data-section-id]");
      if (sectionButton) {
        showSection(sectionButton.dataset.sectionId);
        return;
      }

      const tocButton = event.target.closest("[data-subtopic-target]");
      if (tocButton) {
        const target = document.getElementById(tocButton.dataset.subtopicTarget);
        target?.scrollIntoView({ behavior: "smooth", block: "start" });
        setActiveTocButton(tocButton.dataset.subtopicTarget);
        return;
      }

      const updateButton = event.target.closest("#updateLogButton");
      if (updateButton) openUpdateModal(updateButton);
    });

    elements.content.addEventListener("input", (event) => {
      const memoInput = event.target.closest("[data-section-memo-input]");
      if (!(memoInput instanceof HTMLTextAreaElement)) return;

      const panel = memoInput.closest("[data-section-memo-key]");
      const key = panel?.dataset.sectionMemoKey;
      const status = panel?.querySelector("[data-section-memo-status]");
      if (!key) return;

      state.sectionMemoDrafts[key] = memoInput.value;
      status?.classList.remove("is-error");
      status?.classList.add("is-dirty");
      if (status) status.textContent = "저장되지 않은 내용이 있습니다.";
    });

    elements.content.addEventListener("change", (event) => {
      const savedPracticeOption = event.target.closest("[data-saved-practice-option]");
      if (savedPracticeOption) {
        const [questionId, number] = savedPracticeOption.dataset.savedPracticeOption.split(":");
        selectSavedPracticeOption(questionId, Number(number), true);
        return;
      }

      const option = event.target.closest("[data-question-option]");
      if (!option) return;

      const question = questionData[state.currentQuestionIndex];
      const selected = Number(option.dataset.questionOption);
      if (question) selectQuestionOption(selected, true);
    });

    elements.searchInput.addEventListener("input", (event) => renderSearchResults(event.target.value));
    elements.searchInput.addEventListener("focus", () => {
      if (elements.searchInput.value.trim()) renderSearchResults(elements.searchInput.value);
    });
    elements.searchInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && state.activeTab === "questions") {
        const exactQuestion = findQuestionByDisplayNumber(elements.searchInput.value);
        if (exactQuestion) {
          event.preventDefault();
          openQuestionSearchResult(exactQuestion.id);
          return;
        }
      }

      if (event.key === "ArrowDown" && !elements.searchResults.hidden) {
        const firstResult = elements.searchResults.querySelector(".search-result-item");
        if (firstResult) {
          event.preventDefault();
          firstResult.focus();
        }
      }
    });

    elements.searchResults.addEventListener("click", (event) => {
      const questionResult = event.target.closest("[data-search-question]");
      if (questionResult) {
        openQuestionSearchResult(questionResult.dataset.searchQuestion);
        return;
      }

      const result = event.target.closest("[data-search-section]");
      if (!result) return;
      const query = elements.searchInput.value;
      closeSearchResults();
      closeMobileMenu();
      showSection(result.dataset.searchSection, { searchTerm: query });
    });

    elements.searchResults.addEventListener("keydown", (event) => {
      const items = [...elements.searchResults.querySelectorAll(".search-result-item")];
      const currentIndex = items.indexOf(document.activeElement);
      if (currentIndex < 0) return;

      if (event.key === "ArrowDown") {
        event.preventDefault();
        items[Math.min(currentIndex + 1, items.length - 1)]?.focus();
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        if (currentIndex === 0) elements.searchInput.focus();
        else items[currentIndex - 1]?.focus();
      }
    });

    document.addEventListener("click", (event) => {
      if (!elements.searchArea.contains(event.target)) closeSearchResults();
    });

    elements.main.addEventListener("scroll", updateFloatingButtons, { passive: true });
    elements.toTopButton.addEventListener("click", () => setMainToTop("smooth"));

    elements.modalCloseButton.addEventListener("click", closeUpdateModal);
    elements.updateModal.addEventListener("click", (event) => {
      if (event.target === elements.updateModal) closeUpdateModal();
    });
    elements.updateModal.addEventListener("keydown", trapModalFocus);

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        if (!elements.updateModal.hidden) {
          closeUpdateModal();
        } else if (elements.sidebar.classList.contains("is-open")) {
          closeMobileMenu();
          elements.menuButton.focus();
        } else if (!elements.searchResults.hidden) {
          closeSearchResults();
          elements.searchInput.focus();
        } else if (state.currentView === "saved-question") {
          returnToSavedQuestionsList();
        } else if (state.currentView === "saved-questions") {
          returnFromSavedQuestions();
        } else if (state.reviewMode) {
          returnFromQuestionReview();
        }
        return;
      }

      if (state.activeTab !== "questions" || !elements.updateModal.hidden) return;
      if (event.altKey || event.ctrlKey || event.metaKey) return;

      const target = event.target instanceof HTMLElement ? event.target : null;
      const isTextEntry = target?.matches('textarea, input:not([type="radio"]), [contenteditable="true"]');
      if (isTextEntry) return;

      if (state.currentView === "saved-questions") return;

      if (state.currentView === "saved-question") {
        if (/^[1-4]$/.test(event.key)) {
          event.preventDefault();
          selectSavedPracticeOption(state.currentSavedQuestionId, Number(event.key), true);
          return;
        }

        if (event.key === "Enter" && !target?.closest("button, a")) {
          event.preventDefault();
          checkSavedPracticeQuestion(state.currentSavedQuestionId, true);
          return;
        }

        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          moveSavedQuestion(event.key === "ArrowLeft" ? -1 : 1);
        }
        return;
      }

      if (state.reviewMode) return;

      if (/^[1-4]$/.test(event.key)) {
        event.preventDefault();
        selectQuestionOption(Number(event.key), true);
        return;
      }

      if (event.key === "Enter" && !target?.closest("button, a")) {
        event.preventDefault();
        checkCurrentQuestion(true);
        return;
      }

      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
        moveCurrentQuestion(event.key === "ArrowLeft" ? -1 : 1);
      }
    });

    window.addEventListener("resize", () => {
      if (!isMobileLayout()) closeMobileMenu();
    });
  }

  /* ---------- 초기 실행 ---------- */

  function initialize() {
    const savedTheme = StudyStorage.getTheme();
    applyTheme(savedTheme === "dark" ? "dark" : "light", false);
    attachEvents();
    renderNavigation();
    switchPrimaryTab(StudyStorage.getActiveTab(), { persist: false });
  }

  initialize();
})();
