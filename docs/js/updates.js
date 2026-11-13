/* =========================================================
   업데이트 로그 데이터
   - 새 기록은 updateLogs 배열의 맨 위에 추가하세요.
   - 날짜별 변경 사항은 items 배열에 작성합니다.
   ========================================================= */

const updateLogs = [
  {
    date: "2026.10.24 19:02:05",
    items: [
      "기출문제 추가",
      "첨부 PDF의 판독 가능한 기출문제 추가",
      "원문 580~600번 문제 지문·보기·정답·해설 반영",
      "PART·SECTION별 문제 분류 및 보기별 상세 해설 반영"
    ]
  },
  {
    date: "2026.10.24 18:49:09",
    items: [
      "기출문제 추가",
      "첨부 PDF의 판독 가능한 기출문제 추가",
      "원문 548~579번 문제 지문·보기·정답·해설 반영",
      "PART·SECTION별 문제 분류 및 보기별 상세 해설 반영"
    ]
  },
  {
    date: "2026.10.24 18:26:49",
    items: [
      "기출문제 추가",
      "첨부 PDF의 판독 가능한 기출문제 추가",
      "이전 PDF에서 보류된 517번 문제와 이번 PDF의 이어진 정답·해설 연결 반영",
      "원문 517~547번 문제 지문·보기·정답·해설 반영",
      "PART·SECTION별 문제 분류 및 보기별 상세 해설 반영"
    ]
  },
  {
    date: "2026.10.24 18:06:50",
    items: [
      "기출문제 추가",
      "첨부 PDF의 판독 가능한 기출문제 추가",
      "원문 485~516번 문제 지문·보기·정답·해설 반영",
      "PART·SECTION별 문제 분류 및 보기별 상세 해설 반영",
      "원문 517번은 다음 페이지의 인쇄 정답·해설 확인 후 반영 예정"
    ]
  },
  {
    date: "2026.08.28 10:31:08",
    items: [
      "문제 목차의 각 SECTION에 채점된 맞춘 문제 수 표시 추가",
      "SECTION 목차 집계를 오답 수·정답 수·전체 문제 수 순서로 정리",
      "보통·어려움 난이도별 정답·오답 수 자동 갱신 및 초기화 연동"
    ]
  },
  {
    date: "2026.08.28 10:13:43",
    items: [
      "난이도·PART·SECTION별 마지막으로 풀던 문제 자동 저장 및 복원 기능 추가",
      "문제 목차의 각 SECTION에 채점된 오답 수 표시 추가",
      "전체·PART·SECTION 초기화 시 저장된 마지막 문제 위치도 함께 초기화"
    ]
  },
  {
    date: "2026.08.28 10:02:27",
    items: [
      "문제 풀이 화면 중앙 배치 및 오른쪽 SECTION 메모장 추가",
      "PART·SECTION별 메모 분리 저장 및 자동 불러오기 기능 추가",
      "저장 문제 전용 풀이 화면에 동일한 SECTION 메모 연동",
      "태블릿·모바일 화면에서 메모장이 문제 아래로 배치되도록 반응형 구조 적용"
    ]
  },
  {
    date: "2026.08.27 16:51:07",
    items: [
      "기출문제 추가",
      "첨부 PDF의 판독 가능한 기출문제 추가",
      "원문 451~484번 문제 지문·보기·정답·해설 반영",
      "PART·SECTION별 문제 분류 및 보기별 상세 해설 반영"
    ]
  },
  {
    date: "2026.08.27 14:40:34",
    items: [
      "기출문제 추가",
      "첨부 PDF의 판독 가능한 기출문제 추가",
      "원문 420~450번 문제 지문·보기·정답·해설 반영",
      "PART·SECTION별 문제 분류 및 보기별 상세 해설 반영"
    ]
  },
  {
    date: "2026.08.27 14:16:27",
    items: [
      "기출문제 추가",
      "첨부 PDF의 판독 가능한 기출문제 추가",
      "이전 PDF에서 보류된 385번 문제와 이번 PDF의 이어진 정답·해설 연결 반영",
      "원문 385~419번 문제 지문·보기·정답·해설 반영",
      "PART·SECTION별 문제 분류 및 보기별 상세 해설 반영"
    ]
  },
  {
    date: "2026.08.27 14:07:22",
    items: [
      "기출문제 추가",
      "첨부 PDF의 판독 가능한 기출문제 추가",
      "원문 349~384번 문제 지문·보기·정답·해설 반영",
      "PART·SECTION별 문제 분류 및 보기별 상세 해설 반영",
      "원문 385번은 다음 페이지의 인쇄 정답·해설 확인 후 반영 예정"
    ]
  },
  {
    date: "2026.08.27 09:13:10",
    items: [
      "기출문제 추가",
      "첨부 PDF의 판독 가능한 기출문제 추가",
      "이전 PDF에서 보류된 315번 문제와 이번 PDF의 이어진 정답·해설 연결 반영",
      "원문 315~348번 문제 지문·보기·정답·해설 반영",
      "PART·SECTION별 문제 분류 및 보기별 상세 해설 반영"
    ]
  },
  {
    date: "2026.08.26 17:35:08",
    items: [
      "현재 난이도의 전체 문제 선택 답안·채점 결과 초기화 기능 추가",
      "전체 초기화 후 해당 난이도의 첫 문제로 자동 이동",
      "채점 후 문제 질문 옆 정답·오답 상태 표시 추가"
    ]
  },
  {
    date: "2026.08.26 17:08:02",
    items: [
      "문제 초기화 후 첫 문제 자동 이동 기능 추가",
      "PART 초기화는 해당 PART의 첫 문제, SECTION 초기화는 해당 SECTION의 1번 문제로 이동"
    ]
  },
  {
    date: "2026.08.26 16:57:58",
    items: [
      "문제 검색창 안내 문구 개선",
      "문제번호 검색과 내용 검색 구분을 or 문구로 명확하게 표시"
    ]
  },
  {
    date: "2026.08.26 14:09:32",
    items: [
      "기출문제 추가",
      "첨부 PDF의 판독 가능한 기출문제 추가",
      "문제 지문·보기·정답·해설 및 PART·SECTION별 분류 반영",
      "보기별 상세 해설 반영",
      "PART별 SECTION 번호 재시작 및 요약·문제 화면 반영",
      "SECTION별 난이도·채점 이력 초기화 기능 추가"
    ]
  },
  {
    date: "2026.08.26 10:47:48",
    items: [
      "기출문제 추가",
      "첨부 PDF의 기출문제 추가",
      "문제 지문·보기·정답·해설 반영",
      "PART·SECTION별 문제 분류 반영",
      "보기별 상세 해설 반영"
    ]
  },
  {
    date: "2026.08.26 10:20:44",
    items: [
      "기출문제 추가",
      "첨부 PDF의 판독 가능한 기출문제 추가",
      "문제 지문·보기·정답·해설 반영",
      "PART·SECTION별 문제 분류 반영",
      "보기별 상세 해설 반영",
      "윈도우 공유 목록 문제 이미지 반영",
      "SID 문제 이미지 및 인쇄 답안 오탈자 교정 반영"
    ]
  },
  {
    date: "2026.08.26 09:14:33",
    items: [
      "기출문제 추가",
      "첨부 PDF의 기출문제 추가",
      "문제 지문·보기·정답·해설 반영",
      "PART·SECTION별 문제 분류 반영",
      "보기별 상세 해설 반영",
      "레인보우 테이블·HTTP 요청 형식 문제 이미지 반영"
    ]
  },
  {
    date: "2026.08.26 00:06:12",
    items: [
      "기출문제 추가",
      "첨부 PDF의 기출문제 추가",
      "문제 지문·보기·정답·해설 반영",
      "PART·SECTION별 문제 분류 반영",
      "보기별 상세 해설 반영"
    ]
  },
  {
    date: "2026.08.25 23:29:36",
    items: [
      "기출문제 추가",
      "첨부 PDF의 기출문제 추가",
      "문제 지문·보기·정답·해설 반영",
      "PART·SECTION별 문제 분류 반영",
      "보기별 상세 해설 반영",
      "문제 목차에 PART 1~7 및 SECTION 01~43 계층 반영",
      "검색 번호를 PART-SECTION-문제번호 형식으로 변경"
    ]
  },
  {
    date: "2026.08.25 22:47:16",
    items: [
      "기출문제 추가",
      "첨부 PDF의 기출문제 추가",
      "문제 지문·보기·정답·해설 반영",
      "PART별 문제 분류 반영",
      "보기별 상세 해설 반영"
    ]
  },
  {
    date: "2026.08.25 15:09:21",
    items: [
      "맞춘 문제·틀린 문제 PART별 분리",
      "현재 선택한 PART를 기준으로 맞춘·틀린 문제 수 계산",
      "채점 결과 목록에 현재 PART의 문제만 표시"
    ]
  },
  {
    date: "2026.08.25 14:36:04",
    items: [
      "문제 검색창 안내 문구 개선",
      "검색 번호 형식을 파트-문제번호 예시와 함께 명확하게 표시"
    ]
  },
  {
    date: "2026.08.25 14:32:20",
    items: [
      "문제 검색 번호와 풀이 화면 번호 표시 분리",
      "검색·검색 결과·저장 문제 목차에서는 PART-순번 형식 유지",
      "일반 문제와 저장 문제 풀이 화면에서는 PART 내부 순번만 표시"
    ]
  },
  {
    date: "2026.08.25 14:26:20",
    items: [
      "문제 번호·검색 및 초기화 상태 개선",
      "보통·어려움 난이도별로 PART-순번 형식의 독립 문제 번호 적용",
      "현재 난이도의 문제 번호·지문·보기·해설 키워드 검색 기능 추가",
      "문제 번호 검색 후 Enter 입력 시 해당 문제로 바로 이동",
      "채점 이력이 없는 PART와 저장 문제가 없는 상태의 초기화 버튼 비활성화",
      "일반·저장·채점 목록 화면에서 PDF 원문 번호 표시 제거"
    ]
  },
  {
    date: "2026.08.25 13:06:29",
    items: [
      "저장 문제 즐겨찾기 및 PART별 이동 범위 개선",
      "즐겨찾기한 저장 문제를 전체 저장 목록 최상단에 자동 정렬",
      "저장 문제 목차와 전용 풀이 화면에 별표 즐겨찾기·삭제 버튼 추가",
      "정답·오답 모두 핵심 풀이와 보기별 상세 해설을 표시하도록 개선",
      "일반 문제 화면의 진행 수와 이전·다음 이동을 현재 PART 안으로 제한",
      "이전 또는 다음 문제가 없을 때 안내 알림 추가"
    ]
  },
  {
    date: "2026.08.25 12:52:18",
    items: [
      "저장 문제 목차·전용 풀이 화면 분리",
      "저장한 문제 선택 시 PART·난이도·원문 번호만 표시하는 목차 화면 추가",
      "목차 항목 선택 후 저장 문제 전용 단일 문제 풀이 화면으로 이동",
      "저장 문제 안에서만 동작하는 이전·다음 이동과 독립 채점 기능 추가",
      "저장 문제 목차의 항목별 개별 삭제 버튼 유지"
    ]
  },
  {
    date: "2026.08.25 12:30:54",
    items: [
      "저장한 문제 재풀이 화면 개선",
      "목차의 저장한 문제 선택 시 저장 문제 전체를 세로형 문제 카드로 표시",
      "기존 채점 이력과 분리된 독립 선택·채점 기능 추가",
      "저장 문제별 개별 삭제 버튼 및 기존 전체 초기화 기능 유지"
    ]
  },
  {
    date: "2026.08.25 12:07:57",
    items: [
      "문제 이력·채점 통계 및 복습 기능 개선",
      "문제별 선택 답안과 채점 상태 자동 복원 및 확인 버튼 재입력 시 다음 문제 이동 추가",
      "맞춘·틀린 문제 세로 목록과 풀던 문제 복귀 기능 추가",
      "PART별 채점 초기화와 저장한 문제 접기·초기화 기능 추가",
      "34문항의 보기별 상세 해설 136개 및 개인 학습용 이용 주의 문구 추가"
    ]
  },
  {
    date: "2026.08.25 10:24:51",
    items: [
      "기출문제 분류·저장·단축키 기능 확장",
      "문제 출처 표기와 문제 저장·저장한 문제 목록 추가",
      "오답 선택 시 34문항 전체 풀이과정 표시",
      "숫자·Enter·방향키 단축키와 PART 1~7 문제 목차 추가",
      "보통·어려움 난이도 구분 및 관련 학습 상태 저장 추가"
    ]
  },
  {
    date: "2026.08.25 09:46:09",
    items: [
      "기출문제 탭 및 테스트 문제 추가",
      "객관식 문제 풀이 화면 추가",
      "보기 선택과 정답 확인 기능 추가",
      "이전·다음 문제 이동 기능 추가",
      "첨부 PDF의 테스트용 문제 반영"
    ]
  },
  {
    date: "2026.08.12 00:30:06",
    items: [
      "SECTION 43 정보보호 관련 법규 내용 추가",
      "개인정보 보호법의 보호원칙·처리·가명정보·안전조치·정보주체 권리와 안전성 확보조치 기준 정리",
      "정보통신망법의 이용자 보호·불법정보·ISMS·침해사고 대응 및 정보통신기반 보호법의 시설 지정·취약점 분석·복구·ISAC 정리"
    ]
  },
  {
    date: "2026.08.12 00:09:13",
    items: [
      "SECTION 42 정보보호 인증제도 내용 추가",
      "보안제품 평가·TCSEC·ITSEC·CC·EAL·PP/ST/TOE·CCRA와 BS7799 정리",
      "ISMS-P 101개 인증기준·관리체계 수립/운영·보호대책 12개 분야·개인정보 처리단계·GDPR·OECD·사이버 위기경보 정리"
    ]
  },
  {
    date: "2026.08.11 23:48:27",
    items: [
      "SECTION 41 BCP/DRP 내용 추가",
      "BCP·DRP·BCM·BIA·수립 5단계와 Mirror/Hot/Warm/Cold/Tertiary Site·상호 지원계약 정리",
      "MTBF/MTTF/MTTR·가용성·RAID 0~5/0+1/1+0·백업 유형·RPO/RTO/WRT/MTD·BCP/DRP 테스트 정리"
    ]
  },
  {
    date: "2026.08.11 23:28:32",
    items: [
      "SECTION 40 정보보호 위험 관리 내용 추가",
      "위험관리 개념·위험 구성요소·전체/잔여위험·위험분석 접근법과 상세 위험분석 절차 정리",
      "위험평가·DoA·잔류위험·수용/감소/전가/회피 전략·정량/정성 위험분석과 계산식 정리"
    ]
  },
  {
    date: "2026.08.11 23:14:16",
    items: [
      "SECTION 39 정보보호 거버넌스와 관리 체계 수립 내용 추가",
      "정보보호 거버넌스·IT 보안관리·ISO/IEC 27000 Series·ISO 27001:2013/2022 통제구조 정리",
      "정책/표준/기준선/지침/절차·IT 보안계획·보안전문가/감독위원회 역할·고용주기별 인적 자원 보안 정리"
    ]
  },
  {
    date: "2026.08.11 17:49:49",
    items: [
      "SECTION 38 각종 애플리케이션 보안위협 및 대응책 내용 추가",
      "Salami Technique·Data Diddling·Evil Twin Attack과 대응방안 정리",
      "Java 보안구조·Mobile Code·Java Applet/ActiveX·Sandbox·Authenticode 비교 정리"
    ]
  },
  {
    date: "2026.08.11 17:10:54",
    items: [
      "SECTION 37 침해사고대응(디지털 포렌식) 내용 추가",
      "해킹 개요·해커 분류·공격 순서와 CERT/CSIRT 역할·침해사고 대응 7단계 정리",
      "포렌식 기본 원칙·수행 절차·증거 규칙/보존/분석·Bitstream Image·증거 복구·Data Sanitization 정리"
    ]
  },
  {
    date: "2026.08.11 14:38:12",
    items: [
      "SECTION 36 전자상거래 보안 내용 추가",
      "전자상거래 공격·보안 요구사항·전자화폐 특성·전자지불 유형과 정보보호 요구사항 정리",
      "SET 참여주체·전자봉투·이중서명·거래 처리·장단점과 ebXML·WPKI 구성요소 정리"
    ]
  },
  {
    date: "2026.08.11 14:31:47",
    items: [
      "SECTION 35 데이터베이스 보안 내용 추가",
      "데이터베이스 특성·키 유형·무결성·트랜잭션 ACID·보안 위협과 요구사항 정리",
      "흐름/추론/접근통제·GRANT/REVOKE·View·DB 암호화 방식·MS-SQL 인증/Role/xp_cmdshell 보안 관리 정리"
    ]
  },
  {
    date: "2026.08.11 14:12:42",
    items: [
      "SECTION 34 DHCP와 DNS 보안 내용 추가",
      "RARP·BOOTP·DHCP 구성과 DORA 동작·Relay·DHCP Starvation 공격 정리",
      "DNS 계층·Domain/Zone·Resource Record·Zone Transfer·질의 방식·조회 도구·Spoofing·Cache Poisoning·DNSSEC·BIND 보안설정 정리"
    ]
  },
  {
    date: "2026.08.11 13:47:51",
    items: [
      "SECTION 33 웹 보안(Web Security) 내용 추가",
      "SSL/TLS 구조·Handshake·Record·HTTPS·PFS·주요 공격과 IIS/Apache 보안설정 정리",
      "SQL Injection·XSS·CSRF·SSRF·파일/설정 취약점·WAF·S-SDLC·시큐어 코딩 정리"
    ]
  },
  {
    date: "2026.08.11 13:32:45",
    items: [
      "SECTION 32 이메일 보안 내용 추가",
      "이메일 전달구조·SMTP 명령/응답·POP3/IMAP4·PEM/PGP·MIME/S/MIME 정리",
      "SPF·DKIM·DMARC·스팸 필터링·sendmail 파일과 access 제어 규칙 정리"
    ]
  },
  {
    date: "2026.08.09 23:55:23",
    items: [
      "SECTION 31 FTP 보안 내용 추가",
      "FTP 제어/데이터 연결·로그인 인증·Active/Passive Mode·Anonymous FTP·TFTP·NFS·Samba 정리",
      "FTP 보안위험·FTPS/SFTP·Bounce Attack·접근통제·proftpd/vsftpd 설정과 관련 파일 정리"
    ]
  },
  {
    date: "2026.08.09 23:34:52",
    items: [
      "SECTION 01~30 빠른 이동 소목차 간소화",
      "비슷한 세부 소주제를 핵심 주제 단위로 묶어 PC 오른쪽 리모컨과 모바일 상단 버튼 수 축소",
      "본문 내용·본문 소제목·검색·이전/다음 SECTION 이동 기능 유지"
    ]
  },
  {
    date: "2026.08.09 23:25:07",
    items: [
      "SECTION 30 최신 네트워크 보안기술 내용 추가",
      "공격 역추적·TCP 연결/IP 패킷 역추적·ESM 구성요소와 상관분석·UTM/ESM 비교 정리",
      "NAC 접근통제/무결성 검사·SIEM·SOAR Playbook·PMS 준비/분배 단계와 통합 비교 정리"
    ]
  },
  {
    date: "2026.08.09 21:31:07",
    items: [
      "SECTION 29 VPN 내용 추가",
      "VPN 개요·보안기능·Intranet/Extranet/Remote Access·터널링·PPTP/L2F/L2TP·SSL VPN·SOCKS v5·MPLS VPN 정리",
      "IPSec 개요·AH/ESP·전송/터널 모드·SA·SPD/SAD·아웃바운드/인바운드 처리·IKE 키 관리 정리"
    ]
  },
  {
    date: "2026.08.09 20:32:51",
    items: [
      "SECTION 28 침입차단시스템(Firewall) 내용 추가",
      "방화벽 개요·기능·한계·설계 원칙·Deny All/Permit All·Packet Filtering·NAT·Stateful Inspection 정리",
      "Proxy·Bastion Host·Application/Circuit Gateway·방화벽 구축 구조 4가지·iptables Table/Chain/Rule/명령 예시 정리"
    ]
  },
  {
    date: "2026.08.09 20:10:16",
    items: [
      "SECTION 27 IDS/IPS 내용 추가",
      "IDS 개요·구성요소·오용/이상 탐지·수동/능동 대응·NIDS/HIDS·탐지 시점·설치 위치·오탐/미탐 정리",
      "Honeypot/Honeynet·Snort Rule 구조/Action/Header/Option·IPS 필요성·Firewall/IDS/IPS 비교 정리"
    ]
  },
  {
    date: "2026.08.09 20:02:12",
    items: [
      "SECTION 26 네트워크 기반 공격의 이해 내용 추가",
      "네트워크 위협·수동/능동 공격·DoS/DDoS/DRDoS·Botnet·반사/증폭·자원 소진·웹/DB 부하 공격 정리",
      "Footprinting/Scanning/Enumeration·Port Scan·Nmap·Sniffing·Spoofing·TCP/HTTP Session Hijacking·Remote Attack/Exploit 정리"
    ]
  },
  {
    date: "2026.08.09 19:07:54",
    items: [
      "SECTION 25 네트워크 기반 프로그램 활용 내용 추가",
      "ping·ICMP Echo·traceroute/tracert·TTL·홉별 경로 추적·netstat 출력과 TCP 연결/종료 상태 정리",
      "route 정적 경로·tcpdump 패킷 필터·ifconfig 인터페이스 설정·Windows ipconfig/DHCP/DNS 캐시 명령 정리"
    ]
  },
  {
    date: "2026.08.09 18:45:56",
    items: [
      "SECTION 24 네트워크 관리 내용 추가",
      "네트워크 관리 개요·FCAPS 5대 기능·SNMP Manager/Agent·SMI/MIB·PDU·UDP 161/162 정리",
      "Community String·SNMP 버전·TELNET/Rlogin/SSH 비교·SSH 구성/포트 포워딩/암호화 통신 정리"
    ]
  },
  {
    date: "2026.08.09 18:06:18",
    items: [
      "SECTION 23 무선통신 보안 내용 추가",
      "무선 네트워크 유형·특성·CSMA/CA·IEEE 802.11·AP/Bridge·Bluetooth·무선 LAN 취약점/인증 정리",
      "WEP/TKIP/CCMP·WPA/WPA2·802.1X/EAP·RADIUS·WAP/WTLS·기기인증·RFID·iOS/Android·BYOD 정리"
    ]
  },
  {
    date: "2026.08.09 17:53:15",
    items: [
      "SECTION 22 네트워크 장비의 이해 내용 추가",
      "랜카드·리피터/허브·브리지·MAC 주소·스위치 모니터링·L2/L3/L4/L7 스위치 정리",
      "Store-and-Forward/Cut-Through/Fragment-Free·라우터·게이트웨이·장비 비교·VLAN 구성/종류/장점 정리"
    ]
  },
  {
    date: "2026.08.09 17:29:17",
    items: [
      "SECTION 21 라우팅 내용 추가",
      "라우팅 개요·정적/동적 라우팅·AS/IGP/EGP·거리 벡터/링크 상태/경로 벡터·RIP/RIPv2 정리",
      "IGRP/EIGRP·OSPF 계층·BGP·라우터 모드/암호·Standard/Extended ACL·Ingress/Egress·Null Routing·uRPF·점검 명령 정리"
    ]
  },
  {
    date: "2026.08.09 17:18:11",
    items: [
      "SECTION 20 TCP/IP 내용 추가",
      "데이터링크·포워딩/라우팅·IPv4 클래스/CIDR/VLSM·특수 주소·IPv4 데이터그램·ARP/RARP/GARP·ICMP 정리",
      "IPv6 특징/주소/전환·UDP/TCP 서비스·TCP 세그먼트/연결/전송/종료·HTTP/FTP/TELNET/DNS 정리"
    ]
  },
  {
    date: "2026.08.09 16:39:43",
    items: [
      "SECTION 19 네트워크 개요 내용 추가",
      "프로토콜 개념·구문/의미/타이밍·주요 기능·OSI 7계층 구조와 계층별 역할 정리",
      "TCP/IP 5계층·캡슐화/역캡슐화·물리/논리/포트 주소·다중화/역다중화 정리"
    ]
  },
  {
    date: "2026.08.09 15:41:59",
    items: [
      "SECTION 18 최신 보안 주제들 내용 추가",
      "블록체인·합의기법·이중거래·블록 헤더·IoT 활용·암호/통신 프로토콜 정리",
      "클라우드·가상화·컨테이너·SECaaS·랜섬웨어·APT·Cyber Kill Chain·Supply Chain Attack 정리"
    ]
  },
  {
    date: "2026.08.09 15:29:20",
    items: [
      "SECTION 17 각종 시스템 보안위협 및 대응책 내용 추가",
      "프로세스 메모리·Stack/Heap Buffer Overflow·Stack Canary·DEP/NX·ASLR·Format String Attack 정리",
      "Race Condition·Hard/Symbolic Link·Backdoor·HIDS·자원 고갈·Reverse Engineering·Rootkit·Logic Bomb 정리"
    ]
  },
  {
    date: "2026.08.09 15:23:30",
    items: [
      "SECTION 16 서버 보안 관리 내용 추가",
      "서버관리자 업무·계정/자원/네트워크 관리·Windows 감사정책·UNIX/Linux 로그 분석 정리",
      "syslog·로그 순환·IIS/Apache 로그·크래킹/키로거·취약점/무결성/스캔 도구·Snort·방화벽 정리"
    ]
  },
  {
    date: "2026.08.09 14:40:41",
    items: [
      "SECTION 15 유닉스/리눅스 서버 보안 내용 추가",
      "UNIX 구조·파일시스템·i-node·권한·프로세스·init·Run Level·mount·cron 정리",
      "passwd/shadow·umask·SetUID/SetGID/Sticky Bit·inetd/TCP Wrapper·PAM·Linux 파일시스템·서버 보안 점검 정리"
    ]
  },
  {
    date: "2026.08.08 17:20:46",
    items: [
      "SECTION 14 윈도우 서버 보안 내용 추가",
      "윈도우 구조·FAT/NTFS·부팅 순서·계정/SID·LSA/SAM/SRM·NTFS 권한·공유·IPC$ 정리",
      "EFS·BitLocker·레지스트리·방화벽·계정 보안·Null Session·불필요 서비스·감사정책·패치 관리 정리"
    ]
  },
  {
    date: "2026.08.08 17:09:17",
    items: [
      "SECTION 13 클라이언트 보안 내용 추가",
      "악성 소프트웨어·바이러스·웜·트로이목마·스파이웨어·기타 악성코드와 탐지/대응 정리",
      "HTTP 연결·요청/응답·메서드·상태코드·Cookie 보안·Session ID 관리·웹브라우저 보안영역 정리"
    ]
  },
  {
    date: "2026.08.08 16:55:28",
    items: [
      "SECTION 12 보안 운영체제 내용 추가",
      "보호대상·물리적/시간적/논리적/암호적 분리·파일시스템 보호·보안 운영체제 보안 기능 정리",
      "Security Kernel·TCB·Reference Monitor·SKDB·Trusted Path·TPM 개요/서비스/구성요소 정리"
    ]
  },
  {
    date: "2026.08.08 16:44:41",
    items: [
      "SECTION 11 접근통제 보안위협 및 대응책 내용 추가",
      "Dictionary·Brute Force·Hybrid·Rainbow Table·Credential Stuffing 등 패스워드 공격 정리",
      "사회공학·Phishing·Pharming·Smishing·Covert Channel·Emanation·TEMPEST 대응 정리"
    ]
  },
  {
    date: "2026.08.08 16:33:08",
    items: [
      "SECTION 10 접근통제 보안 모델 내용 추가",
      "MAC·DAC·RBAC·Access Control Matrix·Capability List·ACL 비교 정리",
      "BLP·Biba·Clark-Wilson·Chinese Wall·Information Flow·State Machine 모델 정리"
    ]
  },
  {
    date: "2026.08.08 16:20:21",
    items: [
      "SECTION 09 사용자 인증 내용 추가",
      "인증요소·패스워드·Challenge-Response·영지식·i-PIN·소유 기반 인증 정리",
      "스마트카드 공격·OTP/S/KEY·생체인증·SSO·EAM/IAM·Kerberos·SESAME 정리"
    ]
  },
  {
    date: "2026.08.08 16:04:54",
    items: [
      "SECTION 08 접근통제 개요 내용 추가",
      "접근통제 기본 개념·주체·객체·접근·식별·인증·인가·책임추적성 정리",
      "논리적 접근통제·Reference Monitor·Input Reliability·Least Privilege·Need-to-Know·Separation of Duty 정리"
    ]
  },
  {
    date: "2026.08.08 15:52:06",
    items: [
      "SECTION 07 키, 난수 내용 추가",
      "키 공간·세션키·마스터키·CEK·KEK·PBE·Salt·PBKDF2·암호키 저장 정리",
      "난수 용도·무작위성·예측 불가능성·재현 불가능성·RNG·PRNG·CSPRNG·DRBG 정리"
    ]
  },
  {
    date: "2026.08.08 15:39:08",
    items: [
      "SECTION 06 전자서명과 PKI 내용 추가",
      "전자서명 서비스·요구사항·RSA·ElGamal·Schnorr·DSS/DSA·ECDSA·KCDSA·특수 전자서명 정리",
      "전자투표·전자입찰·PKI 구성요소·신뢰구조·X.509·CRL·OCSP·CMP 정리"
    ]
  },
  {
    date: "2026.08.07 13:58:10",
    items: [
      "SECTION 05 해시함수와 응용 내용 추가",
      "일방향 해시함수·보안 요구사항·주요 해시 알고리즘·랜덤 오라클·해시 공격·SHA-512·SHA-3 정리",
      "MDC·MAC·HMAC·CBC-MAC·CMAC·CCM·GCM 및 재전송 공격 대응 정리"
    ]
  },
  {
    date: "2026.08.07 13:35:59",
    items: [
      "SECTION 04 비대칭키 암호 내용 추가",
      "키 배송 문제·Diffie-Hellman·RSA/OAEP·Rabin·ElGamal·ECC·하이브리드 암호시스템 정리",
      "SECTION 04 빠른 이동 소목차 8개 및 영문 풀네임 추가"
    ]
  },
  {
    date: "2026.08.06 23:22:18",
    items: [
      "SECTION 01~03 정보보안기사 필기 범위 내용 보강 및 영문 풀네임 정리",
      "SECTION 03 대칭키 암호 내용 및 빠른 이동 소목차 8개 추가",
      "ECB·CBC·CFB·OFB·CTR 블록 암호 운영모드 비교 및 오류 전파 특성 추가"
    ]
  },
  {
    date: "2026.08.06 15:53:30",
    items: [
      "SECTION 02 암호학 개요 내용 추가",
      "SECTION 02 빠른 이동 소목차 6개 추가"
    ]
  },
  {
    date: "2026.08.06 13:06:09",
    items: [
      "SECTION 01 정보보호관리의 개념 내용 추가",
      "SECTION 내부 빠른 이동 리모컨 추가"
    ]
  },
  {
    date: "2026.08.05 22:33:44",
    items: [
      "정보보안기사 필기 요약 사이트 초기 구조 제작",
      "PART 1~7 및 SECTION 01~43 목차 추가"
    ]
  }
];
