/* =========================================================
   첨부 PDF 추가 문제 (원문 178~210번)
   - 184번은 인쇄 답안의 명백한 오탈자를 상세 해설에 따라 바로잡았습니다.
   ========================================================= */

(() => {
  "use strict";

  const SOURCE = "2026 알기사 정보보안기사(산업기사) 핵심기출 1200제";
  const addedQuestions = [
    {
      number: 178, part: 4, pdfPage: 1, section: "SECTION 14 윈도우 서버 보안",
      prompt: "다음 파일시스템(FAT, NTFS)에 대한 설명 중 옳지 않은 것은?",
      options: ["FAT 뒤의 숫자는 표현 가능한 최대 클러스터 개수와 관련되어 있다.", "NTFS 파일시스템은 대용량 볼륨, 보안 및 암호화를 지원한다.", "NTFS 파일시스템은 타 운영체제 호환이 용이하다.", "저용량 볼륨에서는 FAT가 NTFS보다 속도가 빠르다."], answer: 3,
      explanation: "FAT32는 여러 운영체제에서 널리 읽을 수 있어 NTFS보다 호환성이 좋다. NTFS는 Windows NT 계열 이외의 운영체제와의 호환이 상대적으로 제한되므로 ③이 옳지 않다.",
      notes: ["FAT12·FAT16·FAT32의 숫자는 파일 할당 테이블에서 클러스터를 식별하는 비트 수와 관련되므로 옳다.", "NTFS는 대용량 볼륨과 접근권한·암호화 등 향상된 기능을 지원한다.", "다른 운영체제와의 호환성은 일반적으로 FAT 계열이 더 우수하므로 틀리다.", "구조가 단순한 FAT는 저용량 볼륨에서 NTFS보다 빠를 수 있으므로 옳다."]
    },
    {
      number: 179, part: 4, pdfPage: 1, section: "SECTION 14 윈도우 서버 보안",
      prompt: "다음은 NTFS 파일 시스템 구조에서 무엇에 대한 설명인가?",
      passage: "볼륨에 존재하는 모든 파일과 디렉터리에 대한 정보를 가지고 있는 테이블로 NTFS에서 파일크기, 생성일자, 접근권한 등의 정보를 포함한다.",
      options: ["MBR", "VBR", "MFT", "FAT"], answer: 3,
      explanation: "MFT(Master File Table)는 NTFS 볼륨에 있는 모든 파일과 디렉터리의 위치, 시간, 크기, 이름, 접근권한 등 속성 정보를 보관하는 핵심 테이블이다.",
      notes: ["MBR은 디스크의 부트 코드와 파티션 테이블 등을 저장하는 영역이다.", "VBR은 해당 볼륨을 부팅하기 위한 코드와 파일시스템 설정 정보를 담는다.", "NTFS 파일과 디렉터리의 메타데이터를 저장하는 테이블은 MFT이므로 정답이다.", "FAT는 FAT 파일시스템에서 클러스터 연결 상태를 관리하는 파일 할당 테이블이다."]
    },
    {
      number: 180, part: 4, pdfPage: 1, section: "SECTION 14 윈도우 서버 보안",
      prompt: "윈도우 시스템을 설치할 때 기본적으로 생성되며, 시스템에서 최고 권한을 가진 계정으로 사용자가 원격 접속이나 로그인 할 수 없는 계정은?",
      options: ["Administrator", "SYSTEM", "User", "Guest"], answer: 2,
      explanation: "SYSTEM은 로컬에서 Administrator보다 높은 시스템 최고 권한을 가지지만 사용자가 이 계정으로 직접 원격 접속하거나 로그인할 수 없는 Windows 내부 계정이다.",
      notes: ["Administrator는 강력한 관리자 권한을 가지며 사용자가 로그인할 수 있는 계정이다.", "사용자 직접 로그인은 불가능하면서 시스템 최고 권한을 갖는 계정은 SYSTEM이므로 정답이다.", "User는 일반 사용자 계정을 뜻하므로 지문과 다르다.", "Guest는 매우 제한된 권한을 가진 기본 계정이다."]
    },
    {
      number: 181, part: 4, pdfPage: 1, section: "SECTION 14 윈도우 서버 보안",
      prompt: "다음 중 윈도우(Windows)의 Administrators 그룹에 대한 설명으로 틀린 것은?",
      options: ["대표적인 관리자 그룹으로 윈도우 시스템의 모든 권한을 가지고 있다.", "사용자 계정을 만들거나 없앨 수 있다.", "윈도우가 사용 가능한 모든 자원에 대한 권한을 설정할 수 있다.", "해당 컴퓨터 밖의 네트워크에서도 일반 사용자보다 특별한 권한을 행사할 수 있다."], answer: 4,
      explanation: "Administrators 그룹의 관리 권한은 해당 로컬 컴퓨터 안에서 유효하다. 컴퓨터 밖의 네트워크에서도 자동으로 특별한 권한을 행사할 수 있다는 설명은 틀리다.",
      notes: ["Administrators는 로컬 Windows 시스템의 대표적인 관리자 그룹으로 강력한 권한을 갖는다.", "사용자 계정을 만들거나 삭제할 수 있으므로 옳다.", "로컬 시스템 자원의 접근권한을 설정할 수 있으므로 옳다.", "로컬 관리자 권한이 외부 네트워크 자원에 자동으로 적용되는 것은 아니므로 틀리다."]
    },
    {
      number: 182, part: 4, pdfPage: 2, section: "SECTION 14 윈도우 서버 보안",
      prompt: "다음 지문에서 설명하는 Users 그룹에 대한 설명 중 틀린 것은?",
      passage: "윈도우에서는 사용자 계정을 추가하면 일반 사용자 그룹인 Users 그룹에 자동으로 포함한다. NTFS로 포맷된 볼륨에서는 이 그룹의 구성원이 운영체제 및 설치된 프로그램의 무결성을 손상시킬 수 없도록 새로 설치된 시스템의 기본 보안 설정이 지정된다.",
      options: ["Users 그룹의 구성원은 워크스테이션을 종료할 수 있고, 서버도 종료할 수 있다.", "Users 그룹의 구성원은 로컬 그룹을 만들 수는 있지만 자신이 만든 로컬 그룹만 관리할 수 있다.", "Users 그룹의 구성원은 관리자가 설치하거나 배포한 인증된 프로그램을 실행할 수 있다.", "Users 그룹의 구성원은 자신의 모든 데이터 파일(%userprofile%) 및 레지스트리에서 자신에 속하는 부분(HKEY_CURRENT_USER)을 완전하게 제어할 수 있다."], answer: 1,
      explanation: "Users 그룹 구성원은 워크스테이션을 종료할 수 있지만 서버를 종료할 수는 없다. 서버 종료는 관리자 권한이 필요한 작업이다.",
      notes: ["Users는 워크스테이션 종료는 가능하지만 서버 종료 권한은 없으므로 틀리다.", "로컬 그룹을 만들 수 있으나 자신이 만든 그룹만 관리할 수 있다는 설명은 옳다.", "관리자가 설치하거나 배포한 인증된 프로그램을 실행할 수 있다.", "자신의 프로필 데이터와 HKEY_CURRENT_USER 영역을 제어할 수 있으므로 옳다."]
    },
    {
      number: 183, part: 4, pdfPage: 2, section: "SECTION 14 윈도우 서버 보안",
      prompt: "다음 문장에서 설명하는 Windows 시스템의 인증 구성요소는?",
      passage: "- 사용자에게 SID(Security Identifier)를 부여한다.\n- SID에 기반하여 파일이나 디렉터리에 대한 접근 허용 여부를 결정한다.\n- 이에 대한 감사 메시지를 생성한다.",
      options: ["LSA(Local Security Authority)", "LAM(Local Authentication Manager)", "SAM(Security Account Manager)", "SRM(Security Reference Monitor)"], answer: 4,
      explanation: "SRM은 사용자에게 SID를 부여하고 SID를 기반으로 객체 접근 허용 여부를 결정하며, 해당 접근에 관한 감사 메시지를 생성한다.",
      notes: ["LSA는 계정 로그인 검증과 시스템 자원 접근권한 검사를 담당하는 보안 기관이다.", "LAM은 PDF에서 설명한 Windows 핵심 인증 구성요소가 아니다.", "SAM은 사용자·그룹 계정 정보 데이터베이스와 로그인 정보 비교를 담당한다.", "SID 기반 접근 결정과 감사 메시지 생성은 SRM의 역할이므로 정답이다."]
    },
    {
      number: 184, part: 4, pdfPage: 2, section: "SECTION 14 윈도우 서버 보안",
      prompt: "다음은 윈도우 서버에서 Administrator 계정의 SID(Security Identifier)를 나타내고 있다. 숫자로 표현되는 각 사용자의 고유한 ID에 해당되는 필드는?",
      options: ["㉠", "㉡", "㉢", "㉣"], answer: 4,
      explanation: "㉣은 RID(Relative Identifier)로 각 사용자 계정을 구별하는 고유 번호이다. Administrator는 500, Guest는 501, 일반 사용자는 보통 1000 이상의 번호를 갖는다. PDF의 인쇄 답안은 ③으로 표기되어 있으나, 같은 페이지의 상세 해설은 ㉣을 RID로 설명하고 ㉢을 시스템 고유 번호로 구분하므로 상세 해설에 따라 ④로 바로잡았다.",
      notes: ["㉠은 SID의 접두 영역으로 사용자별 RID가 아니다.", "㉡은 뒤의 시스템·도메인 식별 영역과 이어지는 부분으로 사용자별 고유 번호가 아니다.", "㉢은 시스템을 설치할 때 시스템 특성을 바탕으로 생성되는 시스템·도메인 고유 식별 영역이므로 사용자별 RID가 아니다.", "㉣의 500은 Administrator 계정에 부여된 RID로, 각 사용자 계정을 구별하는 고유 번호이므로 정답이다."],
      image: "assets/questions/q184-sid.jpg"
    },
    {
      number: 185, part: 4, pdfPage: 3, section: "SECTION 14 윈도우 서버 보안",
      prompt: "SAM(Security Account Manager) 파일이 노출되면 패스워드 공격 시도로 인해 계정 및 패스워드 데이터베이스 정보가 노출될 우려가 존재한다. 안전한 보안설정을 위해 SAM 파일에 접근할 수 있도록 허용할 그룹은?",
      options: ["Administrator, System 그룹", "Administrator, Power Users 그룹", "Administrator, Account Operators 그룹", "Administrator, Server Operators 그룹"], answer: 1,
      explanation: "SAM 파일에는 계정과 패스워드 관련 정보가 있으므로 Administrator와 SYSTEM 그룹만 접근하도록 제한하여 정보 탈취 위험을 줄여야 한다.",
      notes: ["SAM에 필요한 최고 관리자와 시스템 계정만 허용하는 최소 권한 설정이므로 정답이다.", "Power Users까지 허용하면 불필요하게 공격면이 넓어진다.", "Account Operators까지 SAM 파일 접근을 허용하는 것은 적절하지 않다.", "Server Operators까지 SAM 파일 접근을 허용하는 것은 적절하지 않다."]
    },
    {
      number: 186, part: 4, pdfPage: 3, section: "SECTION 14 윈도우 서버 보안",
      prompt: "윈도우 NTFS의 파일 및 디렉터리에 대한 보안규칙 중 올바르지 않은 것은?",
      options: ["접근 권한은 누적된다.", "부모 디렉터리의 권한이 하위디렉터리 및 파일에 상속된다.", "허용보다는 거부가 우선한다.", "디렉터리에 대한 접근 권한이 파일에 대한 접근 권한보다 우선한다."], answer: 4,
      explanation: "NTFS에서는 파일에 직접 설정된 권한이 디렉터리 권한보다 우선하며, 부모 폴더의 권한은 기본적으로 하위 폴더와 파일에 상속된다.",
      notes: ["여러 그룹에 속한 사용자의 허용 권한은 일반적으로 누적된다.", "부모 디렉터리 권한은 기본적으로 하위 폴더와 파일에 상속된다.", "명시적 거부 권한은 허용 권한보다 우선한다.", "파일에 대한 접근권한이 디렉터리 권한보다 우선하므로 틀리다."]
    },
    {
      number: 187, part: 4, pdfPage: 3, section: "SECTION 14 윈도우 서버 보안",
      prompt: "다음 지문의 내용을 확인하기 위해 필요한 윈도우 명령어는?",
      options: ["net use", "net share", "net session", "net computer"], answer: 2,
      explanation: "net share 명령은 현재 컴퓨터에 설정된 공유 자원과 공유 이름, 경로, 설명을 확인한다.",
      notes: ["net use는 네트워크 공유 자원 연결·차단과 연결 정보를 관리한다.", "공유된 폴더와 관리 공유 목록을 확인하는 명령은 net share이므로 정답이다.", "net session은 현재 서버에 연결된 세션을 관리한다.", "net computer는 도메인 데이터베이스에 컴퓨터를 추가하거나 제거할 때 사용한다."],
      image: "assets/questions/q187-net-share.jpg"
    },
    {
      number: 188, part: 4, pdfPage: 4, section: "SECTION 14 윈도우 서버 보안",
      prompt: "윈도우에서 관리 목적상 기본적으로 공유되는 폴더 중 Null Session 취약점을 갖는 것은?",
      options: ["Admin$", "C$", "IPC$", "D$"], answer: 3,
      explanation: "IPC$의 Null Session 취약점을 악용하면 계정과 암호 없이 시스템에 접속하여 사용자 계정 정보, 보안 정책, 네트워크 공유 현황 등을 수집할 수 있다.",
      notes: ["Admin$는 Windows 관리 디렉터리를 위한 관리 공유이다.", "C$는 C 드라이브의 관리 공유이다.", "Null Session 공격에 이용될 수 있는 공유는 IPC$이므로 정답이다.", "D$는 D 드라이브의 관리 공유이다."]
    },
    {
      number: 189, part: 4, pdfPage: 4, section: "SECTION 14 윈도우 서버 보안",
      prompt: "다음 중 설치된 하드웨어와 소프트웨어 설치 드라이버 설정에 대한 정보를 포함하고 있는 윈도우 레지스트리 루트키(Registry Key)는?",
      options: ["HKEY_LOCAL_MACHINE", "HKEY_CLASSES_ROOT", "HKEY_USERS", "HKEY_CURRENT_USER"], answer: 1,
      explanation: "HKEY_LOCAL_MACHINE(HKLM)은 컴퓨터에 설치된 하드웨어와 소프트웨어, 드라이버와 시스템 설정 등 컴퓨터 전체에 적용되는 정보를 저장한다.",
      notes: ["컴퓨터 전체의 하드웨어·소프트웨어·드라이버 정보를 저장하는 HKLM이므로 정답이다.", "HKCR은 파일 확장자 연결과 COM/OLE 등록 정보를 저장한다.", "HKU는 시스템의 모든 사용자 계정 프로필 정보를 저장한다.", "HKCU는 현재 로그인한 사용자의 설정 정보를 저장한다."]
    },
    {
      number: 190, part: 4, pdfPage: 4, section: "SECTION 14 윈도우 서버 보안",
      prompt: "윈도우 레지스트리의 주요 하이브(Hive)의 하위 키는 여러 개가 있다. 다음 중 시스템 및 원격 로그인을 진행할 때 윈도우 시스템이 파일을 참조하여 ‘인가되지 않은 사용자의 접근을 제한’할 경우 이용하는 파일은?",
      options: ["SECURITY", "HOST", "SYSTEM", "SAM"], answer: 4,
      explanation: "SAM 파일은 사용자의 비밀번호를 저장하는 계정 데이터베이스이며, Windows는 시스템 및 원격 로그인 시 이를 참조하여 인가되지 않은 사용자의 접근을 제한한다.",
      notes: ["SECURITY 하이브는 시스템 보안 정책과 권한 할당 정보를 저장한다.", "HOST는 이 용도의 Windows 레지스트리 하이브 파일이 아니다.", "SYSTEM 하이브는 부팅에 필요한 시스템 환경과 드라이버·서비스 정보를 저장한다.", "사용자 계정과 비밀번호 정보를 참조하는 SAM이므로 정답이다."]
    },
    {
      number: 191, part: 4, pdfPage: 4, section: "SECTION 14 윈도우 서버 보안",
      prompt: "다음 중 레지스트리 종류에 대한 설명으로 옳지 않은 것은?",
      options: ["HKEY_CURRENT_CONFIG: HKEY_LOCAL_MACHINE의 서브로 존재하는 정보로서 실행 시간에 수집한 정보가 저장된다.", "HKEY_CURRENT_USER: 전체 사용자들에 관한 정보가 저장된다.", "HKEY_CLASSES_ROOT: 파일과 프로그램 간 연결 정보와 OLE 객체정보가 저장된다.", "HKEY_LOCAL_MACHINE: 사용자에 관계없이 시스템에 적용되는 하드웨어와 소프트웨어 정보가 저장된다."], answer: 2,
      explanation: "HKEY_CURRENT_USER는 현재 시스템에 로그인한 사용자와 관련된 설정을 저장한다. 전체 사용자 정보는 HKEY_USERS에 저장된다.",
      notes: ["HKCC는 현재 하드웨어 프로필의 실행 시점 설정 정보를 나타내므로 옳다.", "HKCU는 전체 사용자가 아니라 현재 로그인한 사용자의 정보만 저장하므로 틀리다.", "HKCR은 파일 연결과 COM/OLE 클래스 등록 정보를 저장하므로 옳다.", "HKLM은 사용자와 무관한 컴퓨터 전체 하드웨어·소프트웨어 정보를 저장한다."]
    },
    {
      number: 192, part: 4, pdfPage: 5, section: "SECTION 14 윈도우 서버 보안",
      prompt: "Window 운영체제 컴퓨터를 원격 제어하기 위해 사용되는 도구와 가장 거리가 먼 것은?",
      options: ["NetBus", "pcAnywhere", "VNC(Virtual Network Computing)", "Back Office"], answer: 4,
      explanation: "Back Office는 Microsoft의 네트워크 관리 프로그램이며, NetBus·pcAnywhere·VNC처럼 원격 제어를 위한 도구와는 가장 거리가 멀다.",
      notes: ["NetBus는 원격 제어 기능을 가진 트로이목마형 도구로 알려져 있다.", "pcAnywhere는 Symantec의 원격 제어 유틸리티이다.", "VNC는 화면을 공유하여 다른 컴퓨터를 원격 제어하는 시스템이다.", "Back Office는 Microsoft의 네트워크 관리 제품이므로 정답이다."]
    },
    {
      number: 193, part: 4, pdfPage: 5, section: "SECTION 14 윈도우 서버 보안",
      prompt: "Windows 서버의 보안 옵션 설정 중 보안 강화를 위한 설정으로 옳지 않은 것은?",
      options: ["‘로그인 하지 않고 시스템 종료 허용’을 ‘사용 안함’으로 설정하였다.", "원격 관리를 위해 ‘원격 시스템에서 강제로 종료’ 정책의 ‘Administrators’ 외 서버에 등록된 계정을 모두 등록하였다.", "‘이동식 미디어 포맷 및 꺼내기 허용’ 정책이 ‘Administrators’로 되어 있다.", "‘SAM 계정과 공유의 익명 열거 허용 안함’ 정책을 설정하였다."], answer: 2,
      explanation: "원격 강제 종료 권한은 Administrators에만 부여해야 한다. 다른 계정과 그룹까지 모두 등록하면 권한 남용이나 거부 서비스 공격에 악용될 수 있다.",
      notes: ["로그인 전 시스템 종료를 금지하면 비인가 사용자의 시스템 종료를 막아 보안이 강화된다.", "원격 강제 종료 권한을 여러 계정에 부여하는 것은 위험하므로 보안 강화 설정으로 옳지 않다.", "이동식 미디어 포맷·꺼내기 권한을 Administrators로 제한하는 것은 적절하다.", "SAM 계정과 공유의 익명 열거를 막으면 정보 노출을 줄일 수 있다."]
    },
    {
      number: 194, part: 4, pdfPage: 6, section: "SECTION 15 유닉스/리눅스 서버 보안",
      prompt: "리눅스/유닉스 시스템에서 다음 설명에 해당되는 최상위 디렉터리를 올바르게 짝지은 것은?",
      passage: "(㉠): 시스템의 환경 설정 및 주요 설정 파일을 담고 있다.\n(㉡): 프로그램 실행 시 생성되는 임시 파일을 담고 있다.\n(㉢): 프린터나 터미널 같은 물리적인 장치를 다루기 위한 특수 파일을 담고 있다.",
      options: ["㉠ /usr, ㉡ /temp, ㉢ /dev", "㉠ /usr, ㉡ /tmp, ㉢ /var", "㉠ /etc, ㉡ /temp, ㉢ /var", "㉠ /etc, ㉡ /tmp, ㉢ /dev"], answer: 4,
      explanation: "시스템 환경과 주요 설정 파일은 /etc, 임시 파일은 /tmp, 물리 장치를 나타내는 특수 파일은 /dev에 저장된다.",
      notes: ["설정 파일은 /usr가 아니라 /etc에 저장되며 /temp는 표준 임시 디렉터리가 아니다.", "설정 파일은 /etc이고 장치 파일은 /dev이므로 틀리다.", "임시 파일은 /tmp이고 장치 파일은 /dev이므로 틀리다.", "/etc, /tmp, /dev를 올바르게 연결했으므로 정답이다."]
    },
    {
      number: 195, part: 4, pdfPage: 6, section: "SECTION 15 유닉스/리눅스 서버 보안",
      prompt: "다음에 설명하는 유닉스 파일시스템의 영역은 무엇인가?",
      passage: "파일시스템 내의 파일이나 디렉터리의 소유자, 소유그룹, 접근 모드(읽기, 쓰기, 실행 권한), 크기, 속성, 시간 및 디스크 블록 내의 포인터 등에 대한 각종 정보를 저장하고 있는 영역으로서 각 파일이나 디렉터리별로 고유한 식별번호를 가지고 있다.",
      options: ["boot 블록", "super 블록", "i-node 블록", "data 블록"], answer: 3,
      explanation: "i-node 블록은 파일의 허가권, 소유자·그룹, 크기, 시간 정보와 데이터 블록 주소 등 메타데이터를 저장하며 파일마다 고유한 i-node 번호를 갖는다.",
      notes: ["boot 블록은 부팅에 필요한 정보를 저장하는 영역이다.", "super 블록은 파일시스템 전체의 요약 정보와 사용 가능한 블록 등을 관리한다.", "파일별 메타데이터와 데이터 블록 포인터를 저장하는 i-node 블록이므로 정답이다.", "data 블록은 파일의 실제 내용을 저장한다."]
    },
    {
      number: 196, part: 4, pdfPage: 6, section: "SECTION 15 유닉스/리눅스 서버 보안",
      prompt: "다음 중 유닉스 파일시스템의 i-node가 가지고 있지 않은 정보는?",
      options: ["파일 이름", "파일의 링크 수", "파일 크기", "마지막으로 수정된 시간"], answer: 1,
      explanation: "i-node에는 링크 수, 파일 크기, 소유자·그룹, 권한, 시간 정보 등이 저장되지만 실제 파일 이름은 디렉터리 엔트리에 저장된다.",
      notes: ["파일 이름은 i-node가 아니라 디렉터리 엔트리에 저장되므로 정답이다.", "하드 링크 수는 i-node에 포함된다.", "파일 크기는 i-node에 포함된다.", "마지막 수정 시간은 i-node에 포함된다."]
    },
    {
      number: 197, part: 4, pdfPage: 7, section: "SECTION 15 유닉스/리눅스 서버 보안",
      prompt: "서버의 파일 시스템에 대한 시간 속성이 잘못 기술된 것은?",
      options: ["mtime: 파일을 생성하거나 내용을 수정한 시간", "atime: 최근 파일을 읽거나 실행시킨 시간", "ctime: 파일 속성이 변경된 시간", "rtime: 파일을 실시간 실행시킨 시간"], answer: 4,
      explanation: "유닉스 파일 시간 속성은 atime, mtime, ctime으로 구분하며 rtime이라는 파일 시간 속성은 없다.",
      notes: ["PDF에서는 mtime을 파일 생성 또는 마지막 내용 변경 시각으로 설명하므로 옳은 선택지이다.", "atime은 파일을 마지막으로 읽거나 실행한 접근 시각이다.", "ctime은 소유자·권한 등 파일 상태 정보가 마지막으로 변경된 시각이다.", "rtime은 유닉스 파일시스템의 표준 시간 속성이 아니므로 정답이다."]
    },
    {
      number: 198, part: 4, pdfPage: 7, section: "SECTION 15 유닉스/리눅스 서버 보안",
      prompt: "다음 중 리눅스에서 Process ID(PID) 1번을 가지고 있는 프로세스는 무엇인가?",
      options: ["init", "부트로더", "OS 커널", "BIOS"], answer: 1,
      explanation: "전통적인 리눅스에서 PID 1은 init 프로세스이며, 다른 모든 사용자 공간 프로세스는 init의 자손으로 생성된다.",
      notes: ["PID 1을 갖는 최초의 사용자 공간 프로세스는 init이므로 정답이다.", "부트로더는 운영체제 커널을 메모리에 적재하는 프로그램이다.", "커널 자체를 PID 1 프로세스라고 하지 않는다.", "BIOS는 하드웨어 초기화와 부팅을 시작하는 펌웨어이다."]
    },
    {
      number: 199, part: 4, pdfPage: 7, section: "SECTION 15 유닉스/리눅스 서버 보안",
      prompt: "좀비(Zombie) 프로세스란 실행이 종료되었지만 아직 삭제되지 않은 프로세스를 의미한다. 좀비 프로세스를 확인하고 중지시키기 위한 UNIX명령어로 올바른 것은?",
      options: ["ps 명령어 실행 후 STAT 값이 Z로 표시되는 프로세스가 좀비 프로세스이며, kill명령어 사용", "ls 명령어 실행 후 STAT 값이 B로 표시되는 프로세스가 좀비 프로세스이며, kill명령어 사용", "ss 명령어 실행 후 STAT 값이 B로 표시되는 프로세스가 좀비 프로세스이며, kill명령어 사용", "zs 명령어 실행 후 STAT 값이 Z로 표시되는 프로세스가 좀비 프로세스이며, kill명령어 사용"], answer: 1,
      explanation: "ps 명령으로 프로세스 상태를 확인할 때 STAT 값이 Z인 항목이 좀비 프로세스이다. 필요하면 부모 프로세스를 종료하는 등 조치하며 kill 명령을 사용할 수 있다.",
      notes: ["ps의 STAT 열에서 Z 상태를 확인하는 방법이므로 정답이다.", "ls는 파일과 디렉터리를 표시하는 명령이며 STAT B로 좀비를 확인하지 않는다.", "ss는 소켓 상태를 확인하는 명령이며 좀비 프로세스 확인 명령이 아니다.", "zs라는 표준 좀비 확인 명령은 없다."]
    },
    {
      number: 200, part: 4, pdfPage: 8, section: "SECTION 15 유닉스/리눅스 서버 보안",
      prompt: "다음 중 리눅스에서 기존 파일 시스템에 새로운 파일 시스템을 하위 디렉터리로 연결하기 위해 사용하는 명령어는 무엇인가?",
      options: ["mkfs", "mount", "fsck", "mknod"], answer: 2,
      explanation: "mount 명령은 저장장치의 파일시스템을 유닉스 디렉터리 트리의 특정 디렉터리에 논리적으로 연결한다.",
      notes: ["mkfs는 파티션에 파일시스템을 생성할 때 사용한다.", "새 파일시스템을 디렉터리에 연결하는 명령은 mount이므로 정답이다.", "fsck는 파일시스템을 검사하고 복구할 때 사용한다.", "mknod는 장치 파일 같은 특수 파일을 만들 때 사용한다."]
    },
    {
      number: 201, part: 4, pdfPage: 8, section: "SECTION 15 유닉스/리눅스 서버 보안",
      prompt: "침해당한 리눅스 서버의 하드 디스크를 umount 명령을 통해 분리하는 과정에서 ‘Device is busy’라는 문구 때문에 분리하지 못하고 있는 상황이다. 디바이스를 사용 중인 프로세스를 찾기 위해 사용할 수 있는 명령어로 옳은 것은?",
      options: ["mount", "lsof", "ps", "netstat"], answer: 2,
      explanation: "lsof(list open files)는 특정 파일이나 마운트 지점을 열어 사용 중인 프로세스 목록을 확인할 수 있어 Device is busy 원인을 찾는 데 사용된다.",
      notes: ["mount는 파일시스템을 연결하거나 마운트 상태를 확인하는 명령이다.", "열린 파일과 이를 사용하는 프로세스를 찾는 lsof가 정답이다.", "ps는 전체 프로세스 상태를 보여주지만 특정 디바이스 사용 파일을 직접 찾는 명령은 아니다.", "netstat는 네트워크 연결과 통계를 확인하는 명령이다."]
    },
    {
      number: 202, part: 4, pdfPage: 8, section: "SECTION 15 유닉스/리눅스 서버 보안",
      prompt: "유닉스 시스템에서 secure.txt 파일의 소유자에게는 읽기와 실행권한을 부여하고 다른 사용자에게는 읽기 권한을 제거하는 권한 변경 명령으로 알맞은 것은?",
      options: ["chmod 401 secure.txt", "chmod 504 secure.txt", "chmod o+rx, a-r secure.txt", "chmod u=rx, o-r secure.txt"], answer: 4,
      explanation: "chmod u=rx, o-r secure.txt는 소유자에게 읽기·실행 권한을 지정하고 다른 사용자(other)의 읽기 권한을 제거한다.",
      notes: ["401은 소유자에게 읽기만, 다른 사용자에게 실행 권한을 주므로 요구와 다르다.", "504는 소유자에게 읽기·실행을 주지만 다른 사용자에게 읽기 권한을 주므로 틀리다.", "다른 사용자에게 읽기와 실행을 추가한 뒤 전체 사용자의 읽기를 제거하므로 요구와 다르다.", "소유자 권한을 rx로 지정하고 다른 사용자의 읽기 권한을 제거하므로 정답이다."]
    },
    {
      number: 203, part: 4, pdfPage: 8, section: "SECTION 15 유닉스/리눅스 서버 보안",
      prompt: "다음 문장에서 리눅스 시스템의 침해 흔적을 조사하기 위해 루트 권한을 가진 setuid를 찾는 명령어로 괄호 안에 들어갈 적합한 것은?",
      passage: "find / -user root -type f \\( (        ) -exec ls -al {} \\;",
      options: ["-perm -06000 \\)", "-perm 00100 \\)", "-perm -00400 \\)", "-perm -00200 \\)"], answer: 1,
      explanation: "-perm -06000은 setuid(4000) 또는 setgid(2000) 비트를 포함하는 파일을 검색한다. 루트 소유 일반 파일 조건과 함께 특수 권한 파일을 조사할 수 있다.",
      notes: ["06000은 setuid와 setgid 비트를 포함하므로 정답이다.", "00100은 소유자의 실행 권한 비트만 나타낸다.", "00400은 소유자의 읽기 권한 비트만 나타낸다.", "00200은 소유자의 쓰기 권한 비트만 나타낸다."]
    },
    {
      number: 204, part: 4, pdfPage: 9, section: "SECTION 15 유닉스/리눅스 서버 보안",
      prompt: "소유권 없는 파일을 찾는 명령어 및 옵션이 아닌 것은?",
      options: ["find / -ls 2> /dev/null", "find / \\( -nouser -o -nogroup \\) -xdev -exec ls -al {} \\; 2> /dev/null", "find / -nouser -print", "find / -nogroup -print"], answer: 1,
      explanation: "-nouser와 -nogroup은 각각 /etc/passwd와 /etc/group에 대응되는 소유자나 그룹이 없는 파일을 찾는다. 단순히 find / -ls를 실행하면 전체 파일 목록을 출력하므로 소유권 없는 파일만 찾는 명령이 아니다.",
      notes: ["루트 아래 파일 목록을 출력할 뿐 소유자·그룹 부재 조건이 없으므로 정답이다.", "-nouser 또는 -nogroup 조건으로 소유권 없는 파일을 찾는 명령이다.", "-nouser는 소유자가 존재하지 않는 파일을 찾는다.", "-nogroup은 소유 그룹이 존재하지 않는 파일을 찾는다."]
    },
    {
      number: 205, part: 4, pdfPage: 9, section: "SECTION 15 유닉스/리눅스 서버 보안",
      prompt: "매일 오전 8시 40분에 /usr/logreport.sh 스크립트가 실행되도록 하기 위해 crontab에 넣을 설정 내용으로서 적절한 것은?",
      options: ["* 40 08 * * -exec {/usr/logreport.sh}", "40 08 * * * /usr/logreport.sh", "* * * 08 40 -exec {/usr/logreport.sh}", "* * * 08 40 /usr/logreport.sh"], answer: 2,
      explanation: "crontab의 앞 다섯 필드는 분·시·일·월·요일 순이다. 매일 오전 8시 40분 실행은 40 08 * * * /usr/logreport.sh로 작성한다.",
      notes: ["분 필드 앞에 불필요한 *가 있고 -exec 형식도 crontab 실행 명령 형식이 아니다.", "분 40, 시 08, 나머지 모든 날짜를 뜻하므로 정답이다.", "필드 순서가 잘못되었고 -exec 사용도 부적절하다.", "08과 40을 일·월 필드에 둔 형태라 오전 8시 40분을 의미하지 않는다."]
    },
    {
      number: 206, part: 4, pdfPage: 9, section: "SECTION 15 유닉스/리눅스 서버 보안",
      prompt: "유닉스 시스템에서 실행중인 프로세스별 CPU 점유율, 메모리 점유율, 시스템 부하율 등에 대한 전반적인 모니터링이 가능한 명령어는?",
      options: ["df", "iostat", "netstat", "top"], answer: 4,
      explanation: "top은 실행 중인 프로세스의 CPU·메모리 사용률, 상태와 시스템 부하 등 정보를 실시간으로 확인하는 명령이다.",
      notes: ["df는 파일시스템의 디스크 사용량을 확인한다.", "iostat는 CPU와 디스크 입출력 통계를 보여준다.", "netstat는 네트워크 연결과 통계를 확인한다.", "프로세스별 CPU·메모리와 시스템 부하를 종합 모니터링하는 top이 정답이다."]
    },
    {
      number: 207, part: 4, pdfPage: 10, section: "SECTION 15 유닉스/리눅스 서버 보안",
      prompt: "다음은 passwd 파일 구조를 나타내는 그림이다. ‘G’가 의미하는 것은?",
      passage: "Test : x : 500 : 500 : Gen-User : /home/test : /usr/bin/bash\n A     B      C       D          E                 F                    G",
      options: ["홈 디렉터리 위치", "지정된 셸(Shell)", "패스워드", "설명"], answer: 2,
      explanation: "/etc/passwd의 일곱 번째 필드는 로그인 시 사용할 셸을 나타낸다. 예시의 G는 /usr/bin/bash이므로 지정된 셸이다.",
      notes: ["홈 디렉터리는 여섯 번째 필드 F인 /home/test이다.", "일곱 번째 필드 G는 로그인 셸이므로 정답이다.", "패스워드 표시 필드는 두 번째 필드 B이다.", "사용자 설명 필드는 다섯 번째 필드 E이다."]
    },
    {
      number: 208, part: 4, pdfPage: 10, section: "SECTION 15 유닉스/리눅스 서버 보안",
      prompt: "다음은 어떤 리눅스 시스템의 /etc/passwd 과정의 일부분이다. 이를 통해 알 수 있는 내용이 아닌 것은?",
      passage: "sys_admin:x:509:509:System Manager:/home/sys_admin:/bin/bash\nsec_admin:x:510:509:Security Manager:/home/sec_manager:/bin/bash\nprog_user:x:0:511:Program Developer:/home/prog_user:/bin/csh",
      options: ["이 시스템은 shadow suite를 사용하고 있다.", "sys_admin이란 사용자와 sec_admin이란 사용자는 동일한 그룹에 속해있다.", "prog_user란 사용자는 로그인시 C셸로 로그인한다.", "sys_admin, sec_admin, prog_user란 사용자는 모두 일반 사용자이다."], answer: 4,
      explanation: "prog_user의 사용자 ID가 0이므로 일반 사용자가 아니라 root와 같은 최고 권한을 갖는 계정이다. 따라서 세 계정이 모두 일반 사용자라는 설명은 틀리다.",
      notes: ["비밀번호 필드가 x이므로 암호화된 비밀번호를 /etc/shadow에 분리 저장하는 shadow suite를 사용한다.", "sys_admin과 sec_admin의 그룹 ID가 모두 509이므로 동일 그룹에 속한다.", "prog_user의 로그인 셸이 /bin/csh로 지정되어 있으므로 옳다.", "prog_user의 UID가 0이어서 일반 사용자가 아니므로 정답이다."]
    },
    {
      number: 209, part: 4, pdfPage: 10, section: "SECTION 15 유닉스/리눅스 서버 보안",
      prompt: "다음 중 /etc/passwd 파일의 각 리눅스 계정에서 사용자 정의 셸을 제거하기 위한 변경 값으로 적절한 것은?",
      options: ["/bin/false", "/bin/nosh", "/bin/nobash", "/bin/disable"], answer: 1,
      explanation: "로그인이 필요 없는 계정의 로그인 셸을 /sbin/nologin 또는 /bin/false로 설정하면 대화형 셸 접근을 차단할 수 있다.",
      notes: ["로그인을 차단하기 위한 유효한 셸 값으로 /bin/false를 사용할 수 있으므로 정답이다.", "/bin/nosh는 일반적인 로그인 차단용 셸 경로가 아니다.", "/bin/nobash는 일반적인 로그인 차단용 셸 경로가 아니다.", "/bin/disable은 일반적인 로그인 차단용 셸 경로가 아니다."]
    },
    {
      number: 210, part: 4, pdfPage: 10, section: "SECTION 15 유닉스/리눅스 서버 보안",
      prompt: "다음 중 리눅스에서 모든 계정의 패스워드를 암호화된 형태로 저장하고 있는 파일은?",
      options: ["/etc/security", "/etc/shadow", "/etc/login.defs", "/etc/profile"], answer: 2,
      explanation: "현대 유닉스·리눅스 시스템은 암호화된 패스워드 정보를 접근이 제한된 /etc/shadow 파일에 저장한다.",
      notes: ["/etc/security는 시스템별 보안 설정 디렉터리로 사용될 수 있으나 계정 암호 저장 파일은 아니다.", "암호화된 계정 패스워드를 저장하는 파일은 /etc/shadow이므로 정답이다.", "/etc/login.defs는 사용자 계정 생성과 로그인 정책의 기본값을 정의한다.", "/etc/profile은 로그인 시 적용할 환경변수와 셸 초기 설정을 담는다."]
    }
  ];

  const existingKeys = new Set(questionData.map((question) => `${question.source}::${question.originalNumber}`));
  const uniqueQuestions = addedQuestions.filter((item) => !existingKeys.has(`${SOURCE}::${item.number}`));

  questionData.push(...uniqueQuestions.map((item) => ({
    id: `pdf-test-${String(item.number).padStart(3, "0")}`,
    originalNumber: item.number,
    source: SOURCE,
    section: item.section,
    pdfPage: item.pdfPage,
    prompt: item.prompt,
    passage: item.passage || null,
    options: item.options,
    answer: item.answer,
    explanation: item.explanation,
    image: item.image || null,
    part: item.part,
    difficulty: "normal",
    optionExplanations: item.notes
  })));
})();
