/* =========================================================
   학습 데이터
   - PART/SECTION 명칭과 순서는 이 배열에서 관리합니다.
   - 상세 내용을 추가할 때는 각 SECTION의 subtopics 또는 content를 수정하세요.
   ========================================================= */

const studyData = [
  {
    part: 1,
    title: "정보보호 개요",
    sections: [
      {
        id: "section-01",
        number: 1,
        title: "정보보호관리의 개념",
        subtopics: [
          {
            id: "protection-goals",
            title: "정보보호의 목표",
            content: `
              <p><strong>정보보호(Information Security)</strong>는 정보와 정보시스템을 보호하여 다음의 보안 목표를 유지하는 것을 의미합니다.</p>
              <div class="table-scroll">
                <table class="concept-table">
                  <thead><tr><th>목표</th><th>핵심 의미</th></tr></thead>
                  <tbody>
                    <tr><td><strong>기밀성</strong><br><span class="term-en">Confidentiality</span></td><td>인가된 사용자만 필요에 따라 정보에 접근할 수 있어야 합니다.</td></tr>
                    <tr><td><strong>무결성</strong><br><span class="term-en">Integrity</span></td><td>정보는 정해진 절차와 부여된 권한에 의해서만 변경되어야 합니다.</td></tr>
                    <tr><td><strong>가용성</strong><br><span class="term-en">Availability</span></td><td>인가된 사용자가 필요할 때 정보와 서비스를 정상적으로 이용할 수 있어야 합니다.</td></tr>
                    <tr><td><strong>인증성</strong><br><span class="term-en">Authenticity</span></td><td>사용자·정보 등이 진짜임을 확인하고 신뢰할 수 있어야 합니다.</td></tr>
                    <tr><td><strong>책임추적성</strong><br><span class="term-en">Accountability</span></td><td>개체의 행동을 유일하게 추적하여 행위 주체를 확인할 수 있어야 합니다.</td></tr>
                  </tbody>
                </table>
              </div>
              <div class="important-box">
                <span class="box-title">시험 핵심</span>
                <p><strong>기밀성 · 무결성 · 가용성</strong>은 정보보호의 3대 목표인 <strong>CIA (Confidentiality · Integrity · Availability)</strong>입니다.</p>
              </div>`
          },
          {
            id: "protection-countermeasures",
            title: "정보보호관리와 정보보호대책",
            content: `
              <p>정보보호대책은 성격에 따라 <strong>기술적·물리적·관리적 보호대책</strong>으로 구분할 수 있습니다.</p>
              <div class="table-scroll">
                <table class="concept-table protection-table">
                  <thead><tr><th>구분</th><th>보호 대상·핵심 내용</th><th>대표 키워드</th></tr></thead>
                  <tbody>
                    <tr><td><strong>기술적 보호대책</strong><br><span class="term-en">Technical Safeguard</span></td><td>정보(데이터)와 정보시스템을 기술적으로 보호</td><td>암호화, 접근통제, 보안기술</td></tr>
                    <tr><td><strong>물리적 보호대책</strong><br><span class="term-en">Physical Safeguard</span></td><td>자연재해 및 물리적 위협으로부터 시설·자산을 보호</td><td>자연재해, 시설, 물리적 접근</td></tr>
                    <tr><td><strong>관리적 보호대책</strong><br><span class="term-en">Administrative Safeguard</span></td><td>조직의 제도와 사람을 중심으로 보안을 관리</td><td>법, 제도, 규정, 정책, 교육</td></tr>
                  </tbody>
                </table>
              </div>`
          },
          {
            id: "osi-security-architecture",
            title: "OSI 보안구조",
            content: `
              <p><strong>OSI (Open Systems Interconnection) 보안구조</strong>는 보안을 <strong>보안 공격(Security Attack) · 보안 메커니즘(Security Mechanism) · 보안 서비스(Security Service)</strong>의 관점에서 체계적으로 다룹니다.</p>
              <dl class="study-definitions compact-definitions">
                <div><dt>보안 공격</dt><dd>정보의 안전성을 침해하는 행위</dd></div>
                <div><dt>보안 메커니즘</dt><dd>보안 공격을 예방·탐지하거나 공격으로부터 복구하기 위한 방법</dd></div>
                <div><dt>보안 서비스</dt><dd>정보 전송과 시스템의 보안을 강화하기 위해 제공하는 서비스</dd></div>
              </dl>
              <h3>OSI 기본 보안 서비스</h3>
              <div class="table-scroll">
                <table class="concept-table">
                  <thead><tr><th>서비스</th><th>핵심</th></tr></thead>
                  <tbody>
                    <tr><td><strong>인증</strong><br><span class="term-en">Authentication</span></td><td>통신 상대 또는 데이터 출처가 주장한 실체와 일치하는지 확인</td></tr>
                    <tr><td><strong>접근통제</strong><br><span class="term-en">Access Control</span></td><td>비인가된 자원의 사용을 방지</td></tr>
                    <tr><td><strong>데이터 기밀성</strong><br><span class="term-en">Data Confidentiality</span></td><td>비인가된 정보 노출을 방지</td></tr>
                    <tr><td><strong>데이터 무결성</strong><br><span class="term-en">Data Integrity</span></td><td>데이터의 비인가 변경·삽입·삭제 등을 탐지</td></tr>
                    <tr><td><strong>부인방지</strong><br><span class="term-en">Non-repudiation</span></td><td>송신·수신 사실을 나중에 부인하지 못하도록 증거를 제공</td></tr>
                  </tbody>
                </table>
              </div>
              <h3>OSI 보안 메커니즘</h3>
              <div class="table-scroll">
                <table class="concept-table">
                  <thead><tr><th>구분</th><th>주요 메커니즘</th></tr></thead>
                  <tbody>
                    <tr><td><strong>특정 보안 메커니즘</strong><br><span class="term-en">Specific Security Mechanism</span></td><td>암호화(Encipherment), 전자서명(Digital Signature), 접근통제, 데이터 무결성, 인증 교환(Authentication Exchange), 트래픽 패딩(Traffic Padding), 라우팅 제어(Routing Control), 공증(Notarization)</td></tr>
                    <tr><td><strong>전반적 보안 메커니즘</strong><br><span class="term-en">Pervasive Security Mechanism</span></td><td>신뢰 기능(Trusted Functionality), 보안 레이블(Security Label), 사건 탐지(Event Detection), 보안 감사 추적(Security Audit Trail), 보안 복구(Security Recovery)</td></tr>
                  </tbody>
                </table>
              </div>
              <h3>보안 목표별 공격</h3>
              <div class="table-scroll">
                <table class="concept-table attack-table">
                  <thead><tr><th>위협 대상</th><th>대표 공격</th></tr></thead>
                  <tbody>
                    <tr><td><strong>기밀성</strong></td><td>스누핑(Snooping), 트래픽 분석(Traffic Analysis)</td></tr>
                    <tr><td><strong>무결성</strong></td><td>변경(Modification), 가장(Masquerade), 재연(Replay), 부인(Repudiation)</td></tr>
                    <tr><td><strong>가용성</strong></td><td>서비스 거부 공격(DoS, Denial of Service)</td></tr>
                  </tbody>
                </table>
              </div>
              <h3>공격 방식에 따른 분류</h3>
              <div class="attack-types">
                <div class="attack-type passive"><strong>소극적 공격(Passive Attack)</strong><span>정보 획득이 목적이며 데이터나 시스템에 직접적인 변화를 주지 않음</span></div>
                <div class="attack-type active"><strong>적극적 공격(Active Attack)</strong><span>데이터를 변경하거나 시스템의 정상 동작에 영향을 줌</span></div>
              </div>`
          },
          {
            id: "basic-security-terms",
            title: "기본 보안용어 정의",
            content: `
              <dl class="study-definitions">
                <div><dt>자산(Asset)</dt><dd>데이터 또는 자산 소유자가 가치를 부여한 실체</dd></div>
                <div><dt>취약점(Vulnerability)</dt><dd>공격자가 허가되지 않은 접근을 시도하는 데 이용할 수 있는 시스템·네트워크의 약점</dd></div>
                <div><dt>위협(Threat)</dt><dd>손실이나 손상을 일으킬 가능성이 있는 잠재적 원인 또는 환경</dd></div>
                <div><dt>위험(Risk)</dt><dd>위협이 취약점을 이용할 가능성과 그로 인한 영향</dd></div>
                <div><dt>노출(Exposure)</dt><dd>위협으로 인해 자산에 손실이 발생할 수 있는 상태</dd></div>
                <div><dt>대책/안전장치(Countermeasure/Safeguard)</dt><dd>취약점을 제거하거나 위협이 취약점을 이용할 가능성을 낮추는 보호 수단</dd></div>
                <div><dt>사회공학(Social Engineering)</dt><dd>사람의 신뢰나 심리를 이용해 정상적인 보안 절차를 우회하도록 유도하는 침입 수단</dd></div>
              </dl>
              <h3>시점별 통제</h3>
              <div class="control-timeline" aria-label="시점별 통제">
                <div class="control-step"><span class="control-time">사전</span><strong>예방통제</strong><p>Preventive Control · 위협과 취약점이 발생하기 전에 대처</p></div>
                <span class="control-arrow" aria-hidden="true">→</span>
                <div class="control-step"><span class="control-time">발생·진행</span><strong>탐지통제</strong><p>Detective Control · 발생한 위협을 탐지</p></div>
                <span class="control-arrow" aria-hidden="true">→</span>
                <div class="control-step"><span class="control-time">사후</span><strong>교정통제</strong><p>Corrective Control · 탐지된 위협·취약점의 영향을 줄이고 복구</p></div>
              </div>`
          }
        ],
        content: ""
      }
    ]
  },
  {
    part: 2,
    title: "암호학",
    sections: [
      {
        id: "section-02",
        number: 2,
        title: "암호학 개요",
        subtopics: [
          {
            id: "crypto-basics",
            title: "암호학의 기본 개념",
            content: `
              <p><strong>암호학(Cryptography)</strong>은 암호기술과 암호해독을 연구하는 학문입니다. 암호를 설계하는 <strong>암호기술(Cryptography)</strong>과 암호를 분석·해독하는 <strong>암호분석(Cryptanalysis)</strong>을 함께 다룹니다.</p>
              <h3>암호화와 복호화의 기호</h3>
              <div class="table-scroll">
                <table class="concept-table">
                  <thead><tr><th>기호</th><th>의미</th></tr></thead>
                  <tbody>
                    <tr><td><strong>M, P</strong></td><td>평문(Plaintext)</td></tr>
                    <tr><td><strong>C</strong></td><td>암호문(Ciphertext)</td></tr>
                    <tr><td><strong>E</strong></td><td>암호화 알고리즘(Encryption)</td></tr>
                    <tr><td><strong>D</strong></td><td>복호화 알고리즘(Decryption)</td></tr>
                    <tr><td><strong>K</strong></td><td>키(Key)</td></tr>
                  </tbody>
                </table>
              </div>
              <div class="important-box">
                <span class="box-title">기호적 표현</span>
                <p><code>C = E<sub>K</sub>(P)</code> : 평문 P를 키 K로 암호화하여 암호문 C를 생성 <span class="term-en">(C = E(K, P))</span></p>
                <p><code>P = D<sub>K</sub>(C)</code> : 암호문 C를 키 K로 복호화하여 평문 P를 복원 <span class="term-en">(P = D(K, C))</span></p>
              </div>
              <h3>암호 알고리즘과 키의 분리</h3>
              <p>암호 알고리즘 자체의 비밀이 아니라 <strong>키의 비밀성</strong>에 안전성을 두는 것이 기본 원칙입니다. 공개된 알고리즘이라도 키가 안전하면 암호체계가 안전해야 한다는 <strong>케르크호프스 원리(Kerckhoffs's Principle)</strong>와 연결됩니다.</p>
              <h3>암호와 보안상식</h3>
              <ul>
                <li>비밀로 감춘 암호 알고리즘에 안전성을 의존하지 않습니다.</li>
                <li>약한 암호의 사용은 잘못된 안전감을 주어 오히려 위험할 수 있습니다.</li>
                <li>어떤 암호라도 언젠가는 해독될 수 있다는 전제에서 안전성을 고려합니다.</li>
                <li>암호기술은 전체 정보보호 체계를 구성하는 여러 수단 중 하나입니다.</li>
              </ul>`
          },
          {
            id: "crypto-classification",
            title: "암호기법의 분류",
            content: `
              <div class="table-scroll">
                <table class="concept-table">
                  <thead><tr><th>분류</th><th>핵심 내용</th></tr></thead>
                  <tbody>
                    <tr><td><strong>치환암호</strong><br><span class="term-en">Substitution Cipher</span></td><td>비트·문자·블록을 다른 비트·문자·블록으로 대체</td></tr>
                    <tr><td><strong>전치암호</strong><br><span class="term-en">Transposition Cipher</span></td><td>평문의 요소 자체는 유지하고 위치를 재배열하여 의미를 숨김</td></tr>
                    <tr><td><strong>블록암호</strong><br><span class="term-en">Block Cipher</span></td><td>정해진 크기의 비트 블록을 한 번에 처리</td></tr>
                    <tr><td><strong>스트림암호</strong><br><span class="term-en">Stream Cipher</span></td><td>데이터를 1비트 또는 1바이트 단위로 연속 처리</td></tr>
                  </tbody>
                </table>
              </div>
              <h3>암호화 구간에 따른 분류</h3>
              <div class="table-scroll">
                <table class="concept-table">
                  <thead><tr><th>방식</th><th>핵심 특징</th></tr></thead>
                  <tbody>
                    <tr><td><strong>링크 암호화</strong><br><span class="term-en">Link Encryption</span></td><td>통신 링크마다 암호화하며, 중간 장비에서 라우팅 처리를 위해 복호화 후 다시 암호화</td></tr>
                    <tr><td><strong>종단간 암호화</strong><br><span class="term-en">End-to-End Encryption</span></td><td>송신지에서 암호화하고 최종 목적지에서 복호화하며, 중간 장비는 필요한 라우팅 정보만 확인</td></tr>
                  </tbody>
                </table>
              </div>
              <h3>구현 방식에 따른 분류</h3>
              <dl class="study-definitions compact-definitions">
                <div><dt>하드웨어 암호시스템</dt><dd><span class="term-en">Hardware Cryptosystem</span> · 컴퓨터·통신기기의 내부 버스나 외부 인터페이스 등에 전용 암호처리 하드웨어를 설치하여 암호화</dd></div>
                <div><dt>소프트웨어 암호시스템</dt><dd><span class="term-en">Software Cryptosystem</span> · 암호처리 소프트웨어를 이용하여 데이터를 암호화</dd></div>
              </dl>`
          },
          {
            id: "major-crypto-technologies",
            title: "주요 암호기술에 대한 개괄",
            content: `
              <div class="table-scroll">
                <table class="concept-table">
                  <thead><tr><th>기술</th><th>핵심 의미</th></tr></thead>
                  <tbody>
                    <tr><td><strong>대칭키 암호</strong><br><span class="term-en">Symmetric-Key Cryptography</span></td><td>암호화 키와 복호화 키가 동일한 방식</td></tr>
                    <tr><td><strong>비대칭키 암호</strong><br><span class="term-en">Asymmetric-Key / Public-Key Cryptography</span></td><td>암호화 키와 복호화 키가 서로 다른 방식</td></tr>
                    <tr><td><strong>하이브리드 암호시스템</strong><br><span class="term-en">Hybrid Cryptosystem</span></td><td>대칭키 암호와 공개키 암호를 조합하여 사용하는 방식</td></tr>
                    <tr><td><strong>일방향 해시함수</strong><br><span class="term-en">One-Way Hash Function</span></td><td>임의 길이 메시지에서 고정 길이의 해시값을 생성</td></tr>
                    <tr><td><strong>메시지 인증코드(MAC)</strong><br><span class="term-en">Message Authentication Code</span></td><td>메시지의 무결성과 메시지 인증을 확인</td></tr>
                    <tr><td><strong>전자서명</strong><br><span class="term-en">Digital Signature</span></td><td>온라인에서 서명·날인과 같은 역할을 수행하여 서명자 인증, 무결성, 부인방지를 제공</td></tr>
                    <tr><td><strong>의사난수 생성기(PRNG)</strong><br><span class="term-en">Pseudorandom Number Generator</span></td><td>암호기술에 필요한 난수처럼 보이는 수열을 알고리즘으로 생성</td></tr>
                  </tbody>
                </table>
              </div>`
          },
          {
            id: "cryptanalysis",
            title: "암호 분석(암호 해독)",
            content: `
              <p><strong>암호 분석</strong>은 정당한 통신 참여자가 아닌 제3자가 암호문으로부터 평문이나 키를 알아내려는 시도입니다.</p>
              <div class="table-scroll">
                <table class="concept-table">
                  <thead><tr><th>공격</th><th>공격자가 가진 정보·능력</th></tr></thead>
                  <tbody>
                    <tr><td><strong>암호문 단독 공격(COA)</strong><br><span class="term-en">Ciphertext-Only Attack</span></td><td>암호문만 가지고 대응되는 평문 또는 키를 추정</td></tr>
                    <tr><td><strong>기지 평문 공격(KPA)</strong><br><span class="term-en">Known-Plaintext Attack</span></td><td>일부 평문과 그에 대응하는 암호문 쌍을 알고 분석</td></tr>
                    <tr><td><strong>선택 평문 공격(CPA)</strong><br><span class="term-en">Chosen-Plaintext Attack</span></td><td>공격자가 선택한 평문과 그 평문의 암호문을 얻어 분석</td></tr>
                    <tr><td><strong>선택 암호문 공격(CCA)</strong><br><span class="term-en">Chosen-Ciphertext Attack</span></td><td>공격자가 선택한 암호문과 그에 대응하는 평문을 얻어 분석</td></tr>
                  </tbody>
                </table>
              </div>
              <div class="important-box">
                <span class="box-title">구분 포인트</span>
                <p><strong>COA → KPA → CPA/CCA</strong> 순으로 공격자가 이용할 수 있는 정보나 선택 능력이 커집니다.</p>
              </div>`
          },
          {
            id: "crypto-security-evaluation",
            title: "암호 알고리즘의 안전성 평가",
            content: `
              <h3>안전성 개념</h3>
              <dl class="study-definitions compact-definitions">
                <div><dt>계산적 안전성</dt><dd><span class="term-en">Computational Security</span> · 공격에 필요한 계산량이 너무 커 현실적인 시간과 자원으로는 공격이 불가능한 경우</dd></div>
                <div><dt>무조건적 안전성</dt><dd><span class="term-en">Unconditional Security</span> · 무한한 계산 능력을 가정하더라도 암호문만으로 평문을 결정할 수 없는 경우</dd></div>
              </dl>
              <h3>암호제품 평가체계</h3>
              <div class="table-scroll">
                <table class="concept-table">
                  <thead><tr><th>체계</th><th>핵심</th></tr></thead>
                  <tbody>
                    <tr><td><strong>CC</strong><br><span class="term-en">Common Criteria</span></td><td>정보보호제품의 보안 기능과 보증 수준을 평가하기 위한 공통평가기준이며 ISO/IEC 15408과 연결됨</td></tr>
                    <tr><td><strong>CMVP</strong><br><span class="term-en">Cryptographic Module Validation Program</span></td><td>암호모듈이 정해진 보안 요구사항을 충족하는지 시험·검증하는 제도</td></tr>
                  </tbody>
                </table>
              </div>
              <h3>암호기술 평가 범위</h3>
              <p>암호 알고리즘 평가 · 암호모듈 평가 · 정보보호제품 평가 · 응용시스템 평가</p>`
          },
          {
            id: "intellectual-property-protection",
            title: "지적 재산권 보호",
            content: `
              <div class="table-scroll">
                <table class="concept-table">
                  <thead><tr><th>기술</th><th>핵심 의미</th></tr></thead>
                  <tbody>
                    <tr><td><strong>스테가노그래피</strong><br><span class="term-en">Steganography</span></td><td>정보를 다른 매체 안에 숨겨 존재 자체를 감추는 전통적인 정보 은닉 기법</td></tr>
                    <tr><td><strong>디지털 워터마킹</strong><br><span class="term-en">Digital Watermarking</span></td><td>사용자가 쉽게 인식하지 못하도록 저작권 정보를 디지털 콘텐츠에 삽입</td></tr>
                    <tr><td><strong>핑거프린팅</strong><br><span class="term-en">Fingerprinting</span></td><td>구매자 정보를 콘텐츠에 삽입하여 불법 배포 시 최초 배포자를 추적</td></tr>
                    <tr><td><strong>디지털 저작권 관리(DRM)</strong><br><span class="term-en">Digital Rights Management</span></td><td>디지털 콘텐츠의 사용·접근 권한을 콘텐츠 소유자의 정책에 따라 제어</td></tr>
                  </tbody>
                </table>
              </div>
              <h3>DRM 구성요소</h3>
              <p>메타데이터(Metadata) · 패키저(Packager) · 시큐어 컨테이너(Secure Container) · 식별자(Identifier) · DRM 제어기(DRM Controller)</p>
              <h3>DRM 모델</h3>
              <p>콘텐츠 제공자(Content Provider) · 콘텐츠 배포자(Content Distributor) · 콘텐츠 소비자(Content Consumer) · 클리어링하우스(Clearinghouse)</p>
              <div class="important-box">
                <span class="box-title">구분 포인트</span>
                <p><strong>워터마킹</strong>은 저작권 정보 표시, <strong>핑거프린팅</strong>은 구매자 식별·추적, <strong>DRM</strong>은 콘텐츠 이용 권한 제어가 핵심입니다.</p>
              </div>`
          }
        ],
        content: ""
      },
      {
        id: "section-03",
        number: 3,
        title: "대칭키 암호",
        subtopics: [
          {
            id: "modern-block-cipher-components",
            title: "현대 블록 암호의 구성요소",
            content: `
              <p><strong>현대 블록 암호(Modern Block Cipher)</strong>는 고정 길이의 평문 블록을 같은 길이의 암호문 블록으로 변환합니다. 안전한 블록 암호는 치환과 전치를 반복하여 평문·키의 통계적 관계를 감추도록 설계합니다.</p>
              <div class="table-scroll">
                <table class="concept-table">
                  <thead><tr><th>구성요소</th><th>영문</th><th>핵심 역할</th></tr></thead>
                  <tbody>
                    <tr><td><strong>P-박스</strong></td><td><span class="term-en">P-box, Permutation Box</span></td><td>입력 비트의 위치를 바꾸는 전치 요소. <strong>단순(Straight) · 확장(Expansion) · 축소(Compression)</strong> P-박스로 구분</td></tr>
                    <tr><td><strong>S-박스</strong></td><td><span class="term-en">S-box, Substitution Box</span></td><td>입력 비트 패턴을 다른 출력 패턴으로 치환하는 비선형 요소. 입력과 출력 비트 수가 서로 달라도 됨</td></tr>
                    <tr><td><strong>XOR</strong></td><td><span class="term-en">Exclusive OR</span></td><td>평문·중간값과 키를 결합할 때 널리 사용하는 비트 연산</td></tr>
                  </tbody>
                </table>
              </div>
              <div class="important-box">
                <span class="box-title">구분 포인트</span>
                <p><strong>S-box = 치환(Substitution)</strong>, <strong>P-box = 전치/순열(Permutation)</strong>로 기억합니다.</p>
              </div>`
          },
          {
            id: "product-cipher-structures",
            title: "합성 암호와 블록 구조",
            content: `
              <p><strong>합성 암호(Product Cipher)</strong>는 치환·전치와 그 밖의 구성요소를 여러 단계 결합한 복합 암호입니다. Claude Shannon이 제시한 <strong>확산(Diffusion)</strong>과 <strong>혼돈(Confusion)</strong>을 반복적으로 얻는 것이 핵심입니다.</p>
              <dl class="study-definitions">
                <div><dt>확산(Diffusion)</dt><dd><strong>평문과 암호문의 관계</strong>를 숨김. 평문의 한 비트 변화가 여러 암호문 비트에 넓게 영향을 주도록 만듦</dd></div>
                <div><dt>혼돈(Confusion)</dt><dd><strong>키와 암호문의 관계</strong>를 복잡하게 만들어 키를 추정하기 어렵게 함</dd></div>
                <div><dt>라운드(Round)</dt><dd>확산과 혼돈을 얻기 위해 반복 적용하는 한 단계의 합성 암호 연산</dd></div>
              </dl>
              <h3>대표적인 두 구조</h3>
              <div class="table-scroll">
                <table class="concept-table">
                  <thead><tr><th>구조</th><th>핵심 특징</th><th>대표 알고리즘</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Feistel 구조</strong><br><span class="term-en">Feistel Network</span></td><td>블록을 좌·우로 나누어 라운드마다 한쪽에 라운드 함수를 적용하고 XOR한 뒤 교환. <strong>암호화와 복호화 구조가 같고 서브키 순서만 반대</strong></td><td>DES, SEED</td></tr>
                    <tr><td><strong>SPN 구조</strong><br><span class="term-en">Substitution-Permutation Network</span></td><td><strong>치환(Substitution)과 순열(Permutation)</strong>을 여러 라운드 반복해 혼돈과 확산을 구현</td><td>AES, ARIA 계열</td></tr>
                  </tbody>
                </table>
              </div>`
          },
          {
            id: "block-cipher-attacks",
            title: "블록 암호에 대한 공격",
            content: `
              <div class="table-scroll">
                <table class="concept-table">
                  <thead><tr><th>공격</th><th>영문</th><th>핵심</th></tr></thead>
                  <tbody>
                    <tr><td><strong>차분 분석</strong></td><td><span class="term-en">Differential Cryptanalysis</span></td><td>두 평문 사이의 <strong>차이(Difference)</strong>가 암호문 차이에 어떻게 나타나는지 분석하여 키를 추정</td></tr>
                    <tr><td><strong>선형 분석</strong></td><td><span class="term-en">Linear Cryptanalysis</span></td><td>알고리즘의 비선형 관계를 확률적으로 <strong>선형 근사</strong>하여 평문·암호문 관계에서 키를 추정하는 기지 평문 공격 계열</td></tr>
                    <tr><td><strong>전수공격법</strong></td><td><span class="term-en">Exhaustive Key Search / Brute-Force Attack</span></td><td>가능한 키를 전부 시도해 올바른 키를 찾음. 키 공간이 작을수록 현실적인 위협이 됨</td></tr>
                    <tr><td><strong>통계적 분석</strong></td><td><span class="term-en">Statistical Analysis</span></td><td>문자·단어·패턴의 빈도 등 알려진 통계적 특성을 이용해 해독</td></tr>
                    <tr><td><strong>수학적 분석</strong></td><td><span class="term-en">Mathematical Analysis</span></td><td>암호 알고리즘의 수학적 구조와 성질을 이용해 해독</td></tr>
                    <tr><td><strong>중간 일치 공격</strong></td><td><span class="term-en">Meet-in-the-Middle Attack</span></td><td>다중 암호화의 앞·뒤 계산 결과를 중간에서 비교하여 탐색량을 줄임. <strong>Double DES의 핵심 취약점</strong></td></tr>
                  </tbody>
                </table>
              </div>
              <div class="important-box">
                <span class="box-title">암기</span>
                <p><strong>차분 = 입력 차이</strong>, <strong>선형 = 선형 근사</strong>, <strong>전수 = 모든 키 시도</strong>, <strong>중간 일치 = 다중 암호의 중간값 비교</strong></p>
              </div>`
          },
          {
            id: "modern-stream-cipher",
            title: "현대 스트림 암호",
            content: `
              <p><strong>스트림 암호(Stream Cipher)</strong>는 키 스트림(Key Stream)을 생성하여 평문과 결합하고, 한 번에 <strong>r비트</strong>씩 암호화·복호화합니다. 일반적으로 XOR 연산을 사용합니다.</p>
              <div class="table-scroll">
                <table class="concept-table">
                  <thead><tr><th>종류</th><th>키 스트림 생성·동기</th><th>특징</th></tr></thead>
                  <tbody>
                    <tr><td><strong>동기식 스트림 암호</strong><br><span class="term-en">Synchronous Stream Cipher</span></td><td>키 스트림이 평문·암호문과 독립적으로 생성되어 송·수신 측의 <strong>동기화</strong>가 필요</td><td>전송 중 비트 오류는 보통 해당 비트에만 영향. 비트 삽입·삭제로 동기가 어긋나면 이후 복호화가 깨질 수 있음</td></tr>
                    <tr><td><strong>비동기식/자기 동기식</strong><br><span class="term-en">Self-Synchronizing Stream Cipher</span></td><td>이전 암호문 등으로부터 다음 키 스트림을 생성</td><td>일정 구간 뒤 자동으로 동기를 회복할 수 있지만 오류가 제한된 범위로 전파될 수 있음</td></tr>
                  </tbody>
                </table>
              </div>
              <h3>동기식 스트림 암호의 주요 구성</h3>
              <dl class="study-definitions">
                <div><dt>One-Time Pad (OTP)</dt><dd>메시지와 같은 길이의 <strong>진정한 난수 키</strong>를 딱 한 번만 사용하는 방식. 키가 완전한 난수이고 재사용되지 않으면 <strong>완전한 비밀성(Perfect Secrecy)</strong>을 가짐</dd></div>
                <div><dt>귀환 시프트 레지스터(FSR)</dt><dd><span class="term-en">Feedback Shift Register</span> · 레지스터의 일부 출력값을 다시 입력으로 되먹임하여 비트열을 생성. OTP의 현실적 절충에 활용</dd></div>
                <div><dt>선형 귀환 시프트 레지스터(LFSR)</dt><dd><span class="term-en">Linear Feedback Shift Register</span> · XOR 기반 선형 귀환으로 구현이 쉽고 빠르지만 <strong>선형성 때문에 단독 사용 시 예측 가능성</strong>이 문제가 됨</dd></div>
                <div><dt>비선형 귀환 시프트 레지스터(NLFSR)</dt><dd><span class="term-en">Nonlinear Feedback Shift Register</span> · 비선형 귀환함수를 사용해 LFSR의 선형적 취약성을 보완</dd></div>
              </dl>
              <div class="important-box">
                <span class="box-title">One-Time Pad 조건</span>
                <p><strong>키는 완전한 난수 · 평문과 같은 길이 · 한 번만 사용 · 안전하게 공유</strong>해야 합니다. 키를 재사용하면 완전한 비밀성이 깨집니다.</p>
              </div>`
          },
          {
            id: "des",
            title: "DES",
            content: `
              <p><strong>DES (Data Encryption Standard)</strong>는 IBM이 개발한 암호를 바탕으로 미국 NBS(현재 <strong>NIST, National Institute of Standards and Technology</strong>)가 표준화한 대칭키 블록 암호입니다. 1975년 제안 과정을 거쳐 <strong>1977년 FIPS (Federal Information Processing Standards)</strong> 연방 표준으로 효력이 발생했습니다.</p>
              <div class="table-scroll">
                <table class="concept-table">
                  <thead><tr><th>항목</th><th>DES</th></tr></thead>
                  <tbody>
                    <tr><td><strong>블록 크기</strong></td><td>64비트 평문 → 64비트 암호문</td></tr>
                    <tr><td><strong>키 길이</strong></td><td>64비트 입력 중 패리티 8비트를 제외한 <strong>실제 유효 키 56비트</strong></td></tr>
                    <tr><td><strong>구조</strong></td><td><strong>Feistel Network</strong> 변형</td></tr>
                    <tr><td><strong>라운드</strong></td><td><strong>16회</strong>, 각 라운드에서 48비트 서브키 사용</td></tr>
                    <tr><td><strong>전체 흐름</strong></td><td>초기 전치(IP) → 16 Feistel 라운드 → 최종 전치(IP<sup>-1</sup>)</td></tr>
                  </tbody>
                </table>
              </div>
              <h3>DES 라운드 함수</h3>
              <p><strong>확장 P-box(32→48비트) → 라운드 키와 XOR → 8개의 S-box(각 6→4비트) → 단순 P-box(32비트)</strong> 순으로 처리합니다. 복호화는 같은 Feistel 구조에서 라운드 키 순서를 반대로 사용합니다.</p>
              <h3>취약점과 다중 DES</h3>
              <ul>
                <li><strong>56비트 키 공간</strong>이 작아 현대에는 전수공격(Brute-Force Attack)에 안전하지 않습니다.</li>
                <li><strong>Double DES</strong>: 서로 다른 두 키로 DES를 두 번 적용하지만 <strong>Meet-in-the-Middle Attack</strong> 때문에 기대만큼 안전성이 증가하지 않습니다.</li>
                <li><strong>Triple DES / TDEA (Triple Data Encryption Algorithm)</strong>: DES를 세 번 적용하며 대표적으로 <strong>EDE (Encrypt-Decrypt-Encrypt)</strong> 순서를 사용합니다. 2-key 또는 3-key 구성이 있습니다.</li>
              </ul>`
          },
          {
            id: "aes",
            title: "AES",
            content: `
              <p><strong>AES (Advanced Encryption Standard)</strong>는 DES를 대체하기 위해 <strong>NIST (National Institute of Standards and Technology)</strong>가 공개 경쟁을 거쳐 선정한 <strong>Rijndael</strong> 기반 대칭키 블록 암호로, <strong>FIPS 197</strong>에 규정되어 있습니다.</p>
              <div class="table-scroll">
                <table class="concept-table">
                  <thead><tr><th>구분</th><th>블록 크기</th><th>키 길이</th><th>라운드</th></tr></thead>
                  <tbody>
                    <tr><td><strong>AES-128</strong></td><td>128비트</td><td>128비트</td><td><strong>10</strong></td></tr>
                    <tr><td><strong>AES-192</strong></td><td>128비트</td><td>192비트</td><td><strong>12</strong></td></tr>
                    <tr><td><strong>AES-256</strong></td><td>128비트</td><td>256비트</td><td><strong>14</strong></td></tr>
                  </tbody>
                </table>
              </div>
              <h3>AES Cipher의 라운드 연산</h3>
              <p>AES는 시험에서 <strong>SPN (Substitution-Permutation Network) 계열 구조</strong>로 구분합니다. 상태(State)를 바이트 단위로 처리하며 다음 네 변환을 반복합니다.</p>
              <ol>
                <li><strong>SubBytes</strong> — S-box를 이용한 비선형 바이트 치환</li>
                <li><strong>ShiftRows</strong> — 행을 서로 다른 크기로 순환 이동</li>
                <li><strong>MixColumns</strong> — 각 열의 데이터를 섞어 확산</li>
                <li><strong>AddRoundKey</strong> — 상태와 라운드 키를 XOR</li>
              </ol>
              <div class="important-box">
                <span class="box-title">시험 핵심</span>
                <p><strong>마지막 라운드에는 MixColumns가 없습니다.</strong> AES는 블록 크기는 항상 128비트이고, 키 길이에 따라 라운드 수만 10·12·14회로 달라집니다.</p>
              </div>`
          },
          {
            id: "other-symmetric-algorithms",
            title: "기타 대칭키 암호 알고리즘",
            content: `
              <h3>국제 암호 알고리즘</h3>
              <div class="table-scroll">
                <table class="concept-table">
                  <thead><tr><th>알고리즘</th><th>핵심 특징</th></tr></thead>
                  <tbody>
                    <tr><td><strong>IDEA</strong><br><span class="term-en">International Data Encryption Algorithm</span></td><td>DES 대체 후보로 알려진 스위스 계열 블록 암호. <strong>64비트 블록 · 128비트 키 · 8라운드</strong>가 핵심</td></tr>
                    <tr><td><strong>RC5</strong></td><td>Ron Rivest가 1994년 발표. <strong>32/64/128비트 블록</strong> 등 블록 크기·키 길이·라운드 수를 가변적으로 설정할 수 있고 덧셈·XOR·회전 연산을 사용</td></tr>
                  </tbody>
                </table>
              </div>
              <h3>국내 암호 알고리즘</h3>
              <div class="table-scroll">
                <table class="concept-table">
                  <thead><tr><th>알고리즘</th><th>개발·구조</th><th>블록/키</th></tr></thead>
                  <tbody>
                    <tr><td><strong>SEED</strong></td><td>1999년 <strong>KISA (Korea Internet &amp; Security Agency)</strong>와 국내 암호전문가가 개발한 <strong>Feistel 구조</strong> 블록 암호</td><td><strong>128비트 블록 · 128비트 키</strong></td></tr>
                    <tr><td><strong>ARIA</strong><br><span class="term-en">Academy · Research Institute · Agency</span></td><td><strong>NSRI (National Security Research Institute)</strong> 주도로 개발한 <strong>ISPN (Involutional Substitution-Permutation Network)</strong> 구조</td><td><strong>128비트 블록 · 128/192/256비트 키</strong>, 12/14/16라운드</td></tr>
                    <tr><td><strong>HIGHT</strong><br><span class="term-en">HIGh security and light weigHT</span></td><td>2005년 KISA·<strong>ETRI (Electronics and Telecommunications Research Institute)</strong> 부설연구소·고려대 공동 개발. 저전력·경량 환경을 위한 블록 암호</td><td><strong>64비트 블록 · 128비트 키</strong></td></tr>
                    <tr><td><strong>LEA</strong><br><span class="term-en">Lightweight Encryption Algorithm</span></td><td>2013년 개발된 경량·고속 암호. <strong>ARX (Addition-Rotation-XOR) 기반 GFN</strong> 구조</td><td><strong>128비트 블록 · 128/192/256비트 키</strong></td></tr>
                  </tbody>
                </table>
              </div>
              <div class="important-box">
                <span class="box-title">국산 블록 암호 숫자 암기</span>
                <p><strong>SEED 128/128 · ARIA 128/(128·192·256) · HIGHT 64/128 · LEA 128/(128·192·256)</strong></p>
              </div>`
          },
          {
            id: "block-cipher-modes",
            title: "블록 암호 운영모드",
            content: `
              <p>블록 암호는 고정된 <strong>n비트 블록을 n비트 블록으로 변환하는 함수</strong>입니다. 긴 메시지를 안전하게 처리하기 위해 운영모드(Mode of Operation)를 사용하며, NIST SP 800-38A는 다음 5가지 기밀성 모드를 정의합니다.</p>
              <div class="table-scroll">
                <table class="concept-table">
                  <thead><tr><th>모드</th><th>동작·장점</th><th>단점·주의</th></tr></thead>
                  <tbody>
                    <tr><td><strong>ECB</strong><br><span class="term-en">Electronic Codebook</span></td><td>각 평문 블록을 <strong>독립적으로 암호화</strong>. 가장 단순하며 암·복호화 모두 병렬 처리 가능</td><td>같은 키에서 <strong>같은 평문 블록 → 같은 암호문 블록</strong>이 되어 패턴이 노출됨. 블록 삭제·교환·재전송 조작에 취약</td></tr>
                    <tr><td><strong>CBC</strong><br><span class="term-en">Cipher Block Chaining</span></td><td>평문 블록을 이전 암호문 블록과 <strong>XOR 후 암호화</strong>. 같은 평문 블록도 위치에 따라 다른 암호문 생성. 복호화 병렬 처리 가능</td><td>암호화는 이전 암호문에 의존하여 병렬 처리 불가. 첫 블록에 <strong>IV (Initialization Vector)</strong> 필요</td></tr>
                    <tr><td><strong>CFB</strong><br><span class="term-en">Cipher Feedback</span></td><td>이전 암호문을 암호화한 출력과 평문을 XOR하여 <strong>블록 암호를 스트림처럼 사용</strong>. 패딩 불필요, 자기 동기화 가능</td><td>암호화는 피드백 때문에 병렬 처리하기 어려움. 오류가 이후 일정 구간에 전파됨</td></tr>
                    <tr><td><strong>OFB</strong><br><span class="term-en">Output Feedback</span></td><td>암호 알고리즘의 <strong>출력값을 다시 피드백</strong>하여 키 스트림을 만들고 평문과 XOR. 패딩 불필요, 암·복호화 구조 동일</td><td>피드백 구조라 블록별 병렬 처리 불가. 자기 동기화되지 않으며 같은 키에서 IV 재사용 금지</td></tr>
                    <tr><td><strong>CTR</strong><br><span class="term-en">Counter</span></td><td>증가하는 <strong>카운터를 암호화해 키 스트림</strong>을 만들고 평문과 XOR. 암·복호화 병렬 처리, 임의 접근 가능, 패딩 불필요</td><td>같은 키에서 <strong>카운터 블록을 절대 재사용하면 안 됨</strong></td></tr>
                  </tbody>
                </table>
              </div>
              <h3>암호문 비트 오류가 복호화에 미치는 영향</h3>
              <div class="table-scroll">
                <table class="concept-table">
                  <thead><tr><th>모드</th><th>C<sub>j</sub>의 1비트 오류 영향</th><th>오류 전파</th></tr></thead>
                  <tbody>
                    <tr><td><strong>ECB</strong></td><td>해당 P<sub>j</sub> 블록의 비트들이 무작위적으로 오류</td><td>다른 블록에는 영향 없음</td></tr>
                    <tr><td><strong>CBC</strong></td><td>P<sub>j</sub>는 무작위 오류, <strong>P<sub>j+1</sub>의 같은 위치 비트가 반전</strong></td><td>그다음 블록부터 정상으로 재동기화</td></tr>
                    <tr><td><strong>CFB</strong></td><td>P<sub>j</sub>의 <strong>같은 위치 비트가 반전</strong></td><td>이후 일정 세그먼트에 무작위 오류 후 재동기화</td></tr>
                    <tr><td><strong>OFB</strong></td><td>P<sub>j</sub>의 <strong>같은 위치 비트만 반전</strong></td><td>다른 블록에 오류 전파 없음</td></tr>
                    <tr><td><strong>CTR</strong></td><td>P<sub>j</sub>의 <strong>같은 위치 비트만 반전</strong></td><td>다른 블록에 오류 전파 없음</td></tr>
                  </tbody>
                </table>
              </div>
              <div class="important-box">
                <span class="box-title">사진 표 기준 빠른 비교</span>
                <p><strong>병렬</strong>: ECB 암·복호화 / CBC·CFB 복호화 / CTR 암·복호화 · <strong>패딩 불필요</strong>: CFB·OFB·CTR · <strong>패턴 노출 주의</strong>: ECB · <strong>오류가 해당 비트에만 머무름</strong>: OFB·CTR</p>
              </div>`
          }
        ],
        content: ""
      },
      {
        id: "section-04",
        number: 4,
        title: "비대칭키 암호",
        subtopics: [
          {
            id: "key-distribution-problem",
            title: "키 배송 문제와 해결방법",
            content: `
              <p>대칭키 암호에서는 송신자와 수신자가 같은 비밀키를 사용하므로, 통신 전에 그 키를 <strong>안전하게 전달·공유해야 하는 키 배송 문제(Key Distribution Problem)</strong>가 발생합니다.</p>
              <div class="table-scroll">
                <table class="concept-table">
                  <thead><tr><th>해결방법</th><th>핵심</th><th>시험 포인트</th></tr></thead>
                  <tbody>
                    <tr><td><strong>키의 사전 공유</strong><br><span class="term-en">Pre-Shared Key, PSK</span></td><td>통신 전에 안전한 별도 경로를 통해 비밀키를 미리 공유</td><td>구현은 단순하지만 사용자가 많아질수록 키의 수와 관리 부담이 크게 증가</td></tr>
                    <tr><td><strong>키배포센터</strong><br><span class="term-en">Key Distribution Center, KDC</span></td><td>신뢰할 수 있는 제3자가 통신 당사자에게 <strong>세션 키(Session Key)</strong>를 온라인으로 분배</td><td>KDC와 각 사용자는 장기 비밀키를 공유. 중앙집중 관리가 쉽지만 KDC가 중요한 보안·가용성 지점이 됨</td></tr>
                    <tr><td><strong>Diffie-Hellman 키 교환</strong><br><span class="term-en">Diffie-Hellman Key Exchange, DH</span></td><td>비밀키 자체를 전송하지 않고 공개 값을 교환하여 동일한 공유 비밀을 계산</td><td><strong>인증 기능이 없으면 중간자 공격(MITM)</strong>에 취약</td></tr>
                    <tr><td><strong>공개키 암호 이용</strong><br><span class="term-en">Public-Key Cryptography</span></td><td>임의로 만든 대칭 세션 키를 수신자의 공개키로 암호화해 전달</td><td>수신자의 <strong>공개키가 진짜인지 인증</strong>해야 함. 인증서·PKI가 이 문제를 보완</td></tr>
                  </tbody>
                </table>
              </div>
              <div class="important-box">
                <span class="box-title">핵심</span>
                <p><strong>대칭키의 가장 큰 운영 문제 = 안전한 키 배송</strong>입니다. 공개키 암호는 이 문제를 크게 완화하지만 공개키 자체의 신뢰성을 확인하는 절차가 필요합니다.</p>
              </div>`
          },
          {
            id: "diffie-hellman",
            title: "Diffie-Hellman 키 교환",
            content: `
              <p><strong>Diffie-Hellman Key Exchange (DH)</strong>는 공개된 통신로에서 두 사람이 같은 공유 비밀(Shared Secret)을 만드는 <strong>키 합의(Key Agreement)</strong> 방식입니다. DH 자체는 메시지를 암호화하는 알고리즘이 아니라 <strong>공유 키를 만드는 방법</strong>이라는 점이 중요합니다.</p>
              <h3>기본 절차</h3>
              <ol>
                <li>Alice와 Bob이 큰 소수 <strong>p</strong>와 생성원 <strong>g</strong>를 공개적으로 정합니다.</li>
                <li>Alice는 비밀값 <strong>a</strong>를 고르고 <strong>A = g<sup>a</sup> mod p</strong>를 Bob에게 보냅니다.</li>
                <li>Bob은 비밀값 <strong>b</strong>를 고르고 <strong>B = g<sup>b</sup> mod p</strong>를 Alice에게 보냅니다.</li>
                <li>Alice는 <strong>K = B<sup>a</sup> mod p</strong>, Bob은 <strong>K = A<sup>b</sup> mod p</strong>를 계산합니다.</li>
                <li>양쪽은 동일한 <strong>K = g<sup>ab</sup> mod p</strong>를 얻으며, a와 b는 네트워크로 전송하지 않습니다.</li>
              </ol>
              <h3>안전성과 공격</h3>
              <div class="table-scroll">
                <table class="concept-table">
                  <thead><tr><th>항목</th><th>내용</th></tr></thead>
                  <tbody>
                    <tr><td><strong>이산대수 문제</strong><br><span class="term-en">Discrete Logarithm Problem, DLP</span></td><td>g, p, g<sup>a</sup> mod p를 알아도 비밀 지수 a를 구하기 어렵다는 계산적 난이도를 이용</td></tr>
                    <tr><td><strong>중간자 공격</strong><br><span class="term-en">Man-in-the-Middle Attack, MITM</span></td><td>공격자가 Alice와 Bob 사이에서 각각 별도의 키를 합의하면 두 사람은 공격자와 키를 공유하게 됨. <strong>DH만으로는 상대방 인증을 제공하지 않음</strong></td></tr>
                    <tr><td><strong>DoS</strong><br><span class="term-en">Denial of Service</span></td><td>공격자가 반복적인 키 교환 요청 등으로 계산·연결 자원을 소모시켜 서비스 가용성을 떨어뜨릴 수 있음</td></tr>
                  </tbody>
                </table>
              </div>
              <div class="important-box">
                <span class="box-title">시험 핵심</span>
                <p><strong>DH = 키 합의 · 이산대수 문제 · 인증 없는 DH는 MITM 취약</strong>으로 묶어서 기억합니다. MITM 방어에는 전자서명·인증서 등으로 교환한 공개값과 상대 신원을 인증하는 절차가 필요합니다.</p>
              </div>`
          },
          {
            id: "public-key-cryptography",
            title: "공개키 암호의 원리와 특징",
            content: `
              <p><strong>비대칭키 암호(Asymmetric-Key Cryptography)</strong> 또는 <strong>공개키 암호(Public-Key Cryptography)</strong>는 서로 수학적으로 연관된 <strong>공개키(Public Key)</strong>와 <strong>개인키/비밀키(Private Key)</strong> 한 쌍을 사용합니다. 공개키는 공개할 수 있지만 개인키는 소유자만 안전하게 보관해야 합니다.</p>
              <div class="table-scroll">
                <table class="concept-table">
                  <thead><tr><th>구분</th><th>핵심</th></tr></thead>
                  <tbody>
                    <tr><td><strong>기밀성</strong></td><td>수신자의 <strong>공개키로 암호화</strong> → 수신자의 <strong>개인키로 복호화</strong></td></tr>
                    <tr><td><strong>장점</strong></td><td>대칭키처럼 통신 당사자끼리 비밀키를 미리 공유할 필요가 없어 키 배송·관리 문제가 완화됨</td></tr>
                    <tr><td><strong>단점</strong></td><td>대칭키 암호보다 일반적으로 연산량이 크므로 대용량 데이터 자체를 암호화하기보다 <strong>키 교환·키 운반·전자서명</strong> 등에 주로 활용</td></tr>
                    <tr><td><strong>기반 난제</strong></td><td>정수 <strong>소인수분해(Integer Factorization)</strong>, <strong>이산대수(Discrete Logarithm)</strong>, <strong>타원곡선 이산대수(ECDLP)</strong> 등 계산하기 어려운 수학 문제를 이용</td></tr>
                  </tbody>
                </table>
              </div>
              <h3>공개키의 중간자 공격</h3>
              <p>공격자가 자신의 공개키를 수신자의 공개키인 것처럼 바꾸어 전달하면 송신자는 공격자의 키로 암호화할 수 있습니다. 즉 <strong>공개키가 누구의 것인지 검증하지 않으면 MITM이 가능</strong>합니다.</p>
              <div class="important-box">
                <span class="box-title">대응</span>
                <p><strong>공개키 인증서(Public-Key Certificate)</strong>와 <strong>PKI (Public Key Infrastructure)</strong>를 이용해 공개키와 소유자의 신원을 결합하고 검증합니다. 인증서와 PKI의 상세 내용은 SECTION 06에서 다룹니다.</p>
              </div>`
          },
          {
            id: "rsa",
            title: "RSA 암호시스템과 OAEP",
            content: `
              <p><strong>RSA (Rivest-Shamir-Adleman)</strong>는 대표적인 공개키 암호 알고리즘으로, 큰 정수의 <strong>소인수분해(Integer Factorization)</strong>가 어렵다는 성질을 기반으로 합니다. 암호화·복호화에 서로 다른 지수 <strong>e</strong>와 <strong>d</strong>를 사용합니다.</p>
              <h3>RSA 키 생성</h3>
              <ol>
                <li>서로 다른 큰 소수 <strong>p, q</strong>를 선택하고 <strong>n = pq</strong>를 계산합니다.</li>
                <li><strong>φ(n) = (p-1)(q-1)</strong>을 계산합니다.</li>
                <li>φ(n)과 서로소인 공개 지수 <strong>e</strong>를 선택합니다.</li>
                <li><strong>ed ≡ 1 (mod φ(n))</strong>을 만족하는 개인 지수 <strong>d</strong>를 계산합니다.</li>
                <li><strong>공개키 = (n, e)</strong>, <strong>개인키 = (n, d)</strong>로 사용하며 p, q와 d는 비밀로 보호합니다.</li>
              </ol>
              <h3>암호화와 복호화</h3>
              <p><strong>암호화: C = M<sup>e</sup> mod n</strong> · <strong>복호화: M = C<sup>d</sup> mod n</strong></p>
              <div class="table-scroll">
                <table class="concept-table">
                  <thead><tr><th>공격</th><th>핵심</th></tr></thead>
                  <tbody>
                    <tr><td><strong>수학적 공격</strong></td><td>공개된 n을 소인수분해하여 p, q를 알아내고 개인키를 유도하려는 공격</td></tr>
                    <tr><td><strong>타이밍 공격</strong><br><span class="term-en">Timing Attack</span></td><td>복호화·서명 연산에 걸리는 시간 차이 같은 <strong>부채널(Side Channel)</strong> 정보를 관찰해 비밀정보를 추정</td></tr>
                    <tr><td><strong>선택 암호문 공격</strong><br><span class="term-en">Chosen-Ciphertext Attack, CCA</span></td><td>공격자가 선택한 암호문과 그 처리 결과를 이용하여 평문이나 키에 관한 정보를 얻으려는 공격. 부적절한 패딩 처리도 공격 단서가 될 수 있음</td></tr>
                  </tbody>
                </table>
              </div>
              <h3>OAEP</h3>
              <p><strong>OAEP (Optimal Asymmetric Encryption Padding)</strong>는 RSA 자체를 다른 알고리즘으로 바꾸는 것이 아니라, RSA 암호화에 적용하는 <strong>확률적 패딩(Probabilistic Padding) 방식</strong>입니다. 난수성과 해시 기반 마스킹을 추가해 동일 평문의 암호문이 매번 같아지는 문제 등 <strong>Raw RSA의 구조적 약점</strong>을 보완합니다. PKCS #1에서는 <strong>RSAES-OAEP</strong> 암호화 스킴으로 정의됩니다.</p>
              <div class="important-box">
                <span class="box-title">교정 포인트</span>
                <p><strong>OAEP는 "RSA를 개량한 별도 암호 알고리즘"이 아니라 RSA용 패딩/인코딩 방식</strong>으로 이해하는 것이 정확합니다.</p>
              </div>`
          },
          {
            id: "rabin",
            title: "Rabin 암호시스템",
            content: `
              <p><strong>Rabin Cryptosystem</strong>은 큰 정수의 <strong>소인수분해 문제(Integer Factorization Problem)</strong>를 기반으로 하는 공개키 암호입니다. 암호화 연산 자체가 매우 단순한 제곱 연산이라는 특징이 있습니다.</p>
              <dl class="study-definitions">
                <div><dt>키 구성</dt><dd>큰 소수 p, q를 선택하여 <strong>n = pq</strong>를 공개하고 p, q는 비밀로 보관하는 형태</dd></div>
                <div><dt>암호화</dt><dd>대표적인 기본형에서 <strong>C = M<sup>2</sup> mod n</strong>으로 계산</dd></div>
                <div><dt>복호화</dt><dd>n에 대한 제곱근을 계산하며 일반적으로 <strong>4개의 평문 후보</strong>가 생기므로 올바른 평문을 식별하기 위한 추가 정보·형식이 필요</dd></div>
                <div><dt>안전성</dt><dd>Rabin 복호화의 어려움은 정수 소인수분해 문제와 밀접하게 연결되어 있음</dd></div>
              </dl>
              <div class="important-box">
                <span class="box-title">암기</span>
                <p><strong>Rabin = 소인수분해 기반 · 제곱으로 암호화 · 복호화 시 4개의 후보</strong></p>
              </div>`
          },
          {
            id: "elgamal",
            title: "ElGamal 암호시스템",
            content: `
              <p><strong>ElGamal Cryptosystem</strong>은 Diffie-Hellman과 마찬가지로 <strong>이산대수 문제(Discrete Logarithm Problem)</strong>의 어려움을 이용하는 공개키 암호입니다.</p>
              <h3>기본 구조</h3>
              <ol>
                <li>공개 파라미터 p, g를 정하고 수신자는 개인키 <strong>x</strong>를 선택합니다.</li>
                <li><strong>y = g<sup>x</sup> mod p</strong>를 계산하여 공개키의 일부로 공개합니다.</li>
                <li>송신자는 암호화할 때마다 새로운 임의의 값 <strong>k</strong>를 선택해 <strong>C<sub>1</sub> = g<sup>k</sup> mod p</strong>, <strong>C<sub>2</sub> = M · y<sup>k</sup> mod p</strong>를 계산합니다.</li>
                <li>수신자는 개인키 x를 이용해 공유값을 복원하고 C<sub>2</sub>에서 이를 제거하여 M을 얻습니다.</li>
              </ol>
              <ul>
                <li>암호화 때마다 임의의 k를 사용하므로 같은 평문도 다른 암호문이 될 수 있는 <strong>확률적 암호(Probabilistic Encryption)</strong>입니다.</li>
                <li>암호문이 두 요소 <strong>(C<sub>1</sub>, C<sub>2</sub>)</strong>로 구성되어 평문보다 길어집니다.</li>
                <li>임시 난수 k의 품질과 재사용 방지가 매우 중요합니다.</li>
                <li>기본 ElGamal 암호는 <strong>가변성(Malleability)</strong>이 있으므로 인증 없이 그대로 사용할 때 능동 공격에 주의해야 합니다.</li>
              </ul>
              <div class="important-box">
                <span class="box-title">암기</span>
                <p><strong>ElGamal = 이산대수 기반 · 매 암호화마다 임의의 k 사용 · 암호문은 두 부분</strong></p>
              </div>`
          },
          {
            id: "ecc",
            title: "타원곡선 암호 ECC",
            content: `
              <p><strong>ECC (Elliptic Curve Cryptography)</strong>는 유한체 위 타원곡선의 점들로 이루어진 군(Group)의 연산을 이용하는 공개키 암호 기술입니다. 대표적인 타원곡선은 <strong>y<sup>2</sup> = x<sup>3</sup> + ax + b</strong> 형태로 표현합니다.</p>
              <h3>핵심 원리</h3>
              <dl class="study-definitions">
                <div><dt>점 덧셈(Point Addition)</dt><dd>곡선 위 두 점으로 새로운 점을 구하는 군 연산</dd></div>
                <div><dt>점 배가(Point Doubling)</dt><dd>같은 점을 더해 새로운 점을 구하는 연산</dd></div>
                <div><dt>스칼라 곱(Scalar Multiplication)</dt><dd>점 P를 k번 더해 <strong>Q = kP</strong>를 구하는 연산. 정방향 계산은 효율적</dd></div>
                <div><dt>ECDLP</dt><dd><span class="term-en">Elliptic Curve Discrete Logarithm Problem</span> · P와 Q = kP를 알아도 k를 계산하기 어렵다는 성질이 ECC 안전성의 핵심</dd></div>
              </dl>
              <h3>특징과 활용</h3>
              <ul>
                <li>비슷한 보안 강도를 목표로 할 때 전통적인 RSA·유한체 DH보다 <strong>상대적으로 짧은 키</strong>를 사용할 수 있어 저장공간·통신량·연산 자원이 제한된 환경에 유리합니다.</li>
                <li><strong>ECDH (Elliptic Curve Diffie-Hellman)</strong>: 타원곡선을 이용한 키 합의</li>
                <li><strong>ECDSA (Elliptic Curve Digital Signature Algorithm)</strong>: 타원곡선을 이용한 전자서명 알고리즘</li>
              </ul>
              <div class="important-box">
                <span class="box-title">시험 핵심</span>
                <p><strong>ECC = 타원곡선 이산대수 문제(ECDLP) · 짧은 키로 효율적인 보안 강도 · ECDH는 키 합의, ECDSA는 전자서명</strong></p>
              </div>`
          },
          {
            id: "hybrid-cryptosystem",
            title: "하이브리드 암호시스템",
            content: `
              <p><strong>하이브리드 암호시스템(Hybrid Cryptosystem)</strong>은 <strong>대칭키 암호의 빠른 처리 속도</strong>와 <strong>공개키 암호의 편리한 키 배송</strong>을 결합한 방식입니다.</p>
              <h3>기본 흐름</h3>
              <ol>
                <li>송신자가 임의의 <strong>세션 키(Session Key)</strong>를 생성합니다.</li>
                <li>실제 메시지는 빠른 <strong>대칭키 암호</strong>와 세션 키로 암호화합니다.</li>
                <li>세션 키는 수신자의 <strong>공개키</strong>로 암호화하여 안전하게 전달합니다.</li>
                <li>수신자는 자신의 <strong>개인키</strong>로 세션 키를 복구한 뒤, 그 세션 키로 메시지를 복호화합니다.</li>
              </ol>
              <div class="table-scroll">
                <table class="concept-table">
                  <thead><tr><th>기술</th><th>담당 역할</th><th>이유</th></tr></thead>
                  <tbody>
                    <tr><td><strong>대칭키 암호</strong></td><td>대용량 실제 데이터 암호화</td><td>빠르고 효율적</td></tr>
                    <tr><td><strong>공개키 암호</strong></td><td>세션 키 보호·전달 또는 키 합의</td><td>비밀키를 미리 직접 공유하는 문제를 완화</td></tr>
                  </tbody>
                </table>
              </div>
              <div class="important-box">
                <span class="box-title">한 줄 암기</span>
                <p><strong>데이터는 대칭키로 빠르게, 대칭키(세션 키)는 공개키 기술로 안전하게.</strong> 이 결합 원리는 TLS, PGP 등 여러 보안 프로토콜·시스템에서 활용됩니다.</p>
              </div>
              <h3>SECTION 04 전체 비교</h3>
              <div class="table-scroll">
                <table class="concept-table">
                  <thead><tr><th>기술</th><th>주요 목적</th><th>기반 문제·핵심</th></tr></thead>
                  <tbody>
                    <tr><td><strong>Diffie-Hellman</strong></td><td>키 합의</td><td>유한체 이산대수 · 인증 없으면 MITM</td></tr>
                    <tr><td><strong>RSA</strong></td><td>암호화·키 운반·전자서명</td><td>정수 소인수분해</td></tr>
                    <tr><td><strong>Rabin</strong></td><td>공개키 암호화</td><td>정수 소인수분해 · 복호화 후보 4개</td></tr>
                    <tr><td><strong>ElGamal</strong></td><td>공개키 암호화</td><td>이산대수 · 임의의 k 사용</td></tr>
                    <tr><td><strong>ECC</strong></td><td>키 합의·전자서명 등</td><td>타원곡선 이산대수(ECDLP)</td></tr>
                    <tr><td><strong>Hybrid</strong></td><td>실용적인 데이터 암호화</td><td>대칭키의 속도 + 공개키의 키 배송 장점 결합</td></tr>
                  </tbody>
                </table>
              </div>`
          }
        ],
        content: ""
      },
      {
        id: "section-05",
        number: 5,
        title: "해시함수와 응용",
        subtopics: [
          {
            id: "hash-basics-security",
            title: "일방향 해시함수와 보안 요구사항",
            content: `
              <p><strong>일방향 해시함수(One-Way Hash Function)</strong>는 임의 길이의 메시지 <strong>M</strong>을 입력받아 고정 길이의 <strong>해시값(Hash Value)·메시지 다이제스트(Message Digest)</strong> <code>h = H(M)</code>을 출력합니다. 정의역이 치역보다 훨씬 크므로 서로 다른 입력이 같은 해시값을 갖는 <strong>충돌(Collision)</strong> 자체는 이론적으로 존재할 수 있지만, 안전한 암호학적 해시함수에서는 공격자가 유용한 충돌을 찾기 어려워야 합니다.</p>
              <h3>일방향 해시함수의 기본 특징</h3>
              <ul>
                <li><strong>임의 길이 입력 → 고정 길이 출력</strong>: 입력 크기와 무관하게 알고리즘이 정한 길이의 다이제스트를 생성합니다.</li>
                <li><strong>효율성</strong>: 정상 사용자는 해시값을 빠르게 계산할 수 있어야 합니다.</li>
                <li><strong>일방향성(One-Wayness)</strong>: 해시값으로부터 원래 메시지를 역산하기는 계산상 어려워야 합니다.</li>
                <li><strong>눈사태 효과(Avalanche Effect)</strong>: 메시지가 1비트만 바뀌어도 해시값이 크게 달라지는 것이 바람직합니다.</li>
                <li><strong>무결성 확인</strong>: 원본과 수신본의 해시값을 비교하면 데이터 변경 여부를 확인할 수 있습니다.</li>
              </ul>
              <h3>암호학적 해시함수의 3대 안전성</h3>
              <div class="table-scroll">
                <table class="concept-table">
                  <thead><tr><th>요구사항</th><th>공격자에게 주어진 것</th><th>공격자가 어렵게 해야 할 일</th></tr></thead>
                  <tbody>
                    <tr><td><strong>역상 저항성</strong><br><span class="term-en">Preimage Resistance</span></td><td>해시값 <strong>y</strong></td><td><code>H(M) = y</code>를 만족하는 메시지 M을 찾는 것</td></tr>
                    <tr><td><strong>제2역상 저항성</strong><br><span class="term-en">Second-Preimage Resistance</span></td><td>특정 메시지 <strong>M</strong></td><td><code>M' ≠ M</code>이면서 <code>H(M') = H(M)</code>인 M'을 찾는 것</td></tr>
                    <tr><td><strong>충돌 저항성</strong><br><span class="term-en">Collision Resistance</span></td><td>특정 메시지 지정 없음</td><td><code>M ≠ M'</code>이면서 <code>H(M) = H(M')</code>인 임의의 두 메시지를 찾는 것</td></tr>
                  </tbody>
                </table>
              </div>
              <p>교재에서 <strong>약한 일방향성(Weak One-Wayness)</strong>, <strong>강한 일방향성(Strong One-Wayness)</strong>, <strong>충돌 회피성(Collision Freeness)</strong> 등의 표현이 함께 쓰이기도 합니다. 시험에서는 위의 <strong>역상·제2역상·충돌 저항성</strong>을 기준으로 구분하는 것이 가장 명확합니다.</p>
              <div class="important-box">
                <span class="box-title">이상적인 n비트 해시의 공격 난이도</span>
                <p><strong>역상 ≈ 2<sup>n</sup> · 제2역상 ≈ 2<sup>n</sup> · 충돌 ≈ 2<sup>n/2</sup></strong>입니다. 충돌은 <strong>생일 공격(Birthday Attack)</strong> 때문에 n비트 전체가 아니라 약 n/2비트 수준의 보안강도를 갖는다는 점이 핵심입니다.</p>
              </div>`
          },
          {
            id: "hash-construction-algorithms",
            title: "해시함수 구조와 주요 알고리즘",
            content: `
              <h3>반복 해시함수와 Merkle–Damgård 구조</h3>
              <p><strong>반복 해시함수(Iterated Hash Function)</strong>는 긴 메시지를 일정 크기의 블록으로 나눈 뒤 <strong>압축함수(Compression Function)</strong>를 반복 적용해 고정 길이의 결과를 만듭니다. 대표적인 설계 방식인 <strong>Merkle–Damgård Construction</strong>은 메시지를 패딩하고 각 블록을 이전 연쇄값(Chaining Value)과 함께 압축함수에 넣어 최종 다이제스트를 얻습니다.</p>
              <p>적절한 패딩을 사용하는 Merkle–Damgård 구조에서는 <strong>압축함수의 충돌 저항성</strong>을 전체 해시함수의 충돌 저항성으로 연결할 수 있습니다. MD5, SHA-1, SHA-2 계열이 이 계열의 반복 구조를 사용합니다.</p>
              <h3>키가 없는 해시함수의 설계 분류</h3>
              <ul>
                <li><strong>블록 암호 기반</strong>: 검증된 블록 암호를 압축함수 구성에 이용</li>
                <li><strong>전용 해시함수(Dedicated Hash Function)</strong>: 해시를 위해 처음부터 설계한 전용 알고리즘</li>
                <li><strong>모듈 연산 기반</strong>: 모듈러 연산을 기반으로 구성</li>
              </ul>
              <h3>대표적인 전용 해시 알고리즘</h3>
              <div class="table-scroll">
                <table class="concept-table">
                  <thead><tr><th>알고리즘</th><th>주요 특징</th><th>시험 포인트</th></tr></thead>
                  <tbody>
                    <tr><td><strong>MD5</strong><br><span class="term-en">Message Digest 5</span></td><td>MD2 → MD4 → MD5로 발전 · 512비트 블록 · 128비트 다이제스트 · 4라운드(64단계)</td><td>충돌 공격이 실용적으로 가능하여 보안용으로 사용하지 않음</td></tr>
                    <tr><td><strong>SHA-1</strong><br><span class="term-en">Secure Hash Algorithm 1</span></td><td>512비트 블록 · 160비트 다이제스트 · 80단계</td><td>충돌 안전성이 깨져 새로운 보안 용도에는 부적합</td></tr>
                    <tr><td><strong>SHA-2</strong><br><span class="term-en">Secure Hash Algorithm 2</span></td><td>SHA-224·256·384·512와 SHA-512/224·SHA-512/256</td><td>SHA-224/256은 512비트 블록, SHA-384/512 계열은 1024비트 블록</td></tr>
                    <tr><td><strong>RIPEMD-160</strong><br><span class="term-en">RACE Integrity Primitives Evaluation Message Digest</span></td><td>512비트 블록 · 160비트 다이제스트 · 병렬 구조</td><td>RIPE 프로젝트에서 발전한 160비트 해시</td></tr>
                    <tr><td><strong>Tiger</strong></td><td>64비트 시스템을 고려해 설계된 전용 해시</td><td>Ross Anderson·Eli Biham이 1995년 제안</td></tr>
                    <tr><td><strong>HAVAL</strong></td><td>1024비트 블록 · 128/160/192/224/256비트 가변 다이제스트</td><td>출력 길이와 라운드 수를 선택할 수 있는 구조</td></tr>
                    <tr><td><strong>HAS-160</strong><br><span class="term-en">Hash Function Algorithm Standard 160</span></td><td>512비트 블록 · 160비트 다이제스트 · Little Endian</td><td>국내 KCDSA용으로 개발·표준화된 해시함수</td></tr>
                  </tbody>
                </table>
              </div>
              <h3>SHA 계열 빠른 비교</h3>
              <div class="table-scroll">
                <table class="concept-table">
                  <thead><tr><th>구분</th><th>다이제스트</th><th>메시지 블록</th><th>워드</th><th>단계 수</th></tr></thead>
                  <tbody>
                    <tr><td><strong>SHA-1</strong></td><td>160비트</td><td>512비트</td><td>32비트</td><td>80</td></tr>
                    <tr><td><strong>SHA-224</strong></td><td>224비트</td><td>512비트</td><td>32비트</td><td>64</td></tr>
                    <tr><td><strong>SHA-256</strong></td><td>256비트</td><td>512비트</td><td>32비트</td><td>64</td></tr>
                    <tr><td><strong>SHA-384</strong></td><td>384비트</td><td>1024비트</td><td>64비트</td><td>80</td></tr>
                    <tr><td><strong>SHA-512</strong></td><td>512비트</td><td>1024비트</td><td>64비트</td><td>80</td></tr>
                  </tbody>
                </table>
              </div>
              <div class="important-box">
                <span class="box-title">SHA-3 교정 포인트</span>
                <p>NIST의 SHA-3 경쟁 최종 후보는 <strong>BLAKE · Grøstl · JH · Keccak · Skein</strong>이었고, <strong>Keccak이 2012년 우승 알고리즘으로 선정</strong>되었습니다. 이후 <strong>2015년 FIPS 202로 SHA-3가 표준화</strong>되었습니다. SHA-3는 SHA-2와 다른 <strong>Keccak 기반 스펀지(Sponge) 구조</strong>를 사용하며 SHA3-224·256·384·512와 SHAKE128·SHAKE256을 정의합니다.</p>
              </div>`
          },
          {
            id: "hash-attacks-random-oracle",
            title: "랜덤 오라클 모델과 해시 공격",
            content: `
              <h3>랜덤 오라클 모델</h3>
              <p><strong>랜덤 오라클 모델(Random Oracle Model)</strong>은 Bellare와 Rogaway가 1993년 제안한 <strong>이상적인 해시함수의 수학적 모델</strong>입니다. 같은 입력에는 항상 같은 값을 주지만, 새로운 입력의 출력은 기존 출력과 독립적인 난수처럼 보인다고 가정합니다. 실제 해시 알고리즘 그 자체가 아니라 암호 시스템의 안전성을 분석하기 위한 이상화 모델입니다.</p>
              <h3>생일 문제와 충돌 공격</h3>
              <p><strong>생일 역설(Birthday Paradox)</strong> 때문에 무작위 집단에서 생일이 같은 두 사람이 생각보다 빨리 나타납니다. 365일을 가정하면 약 <strong>23명</strong>만 있어도 같은 생일을 가진 사람이 존재할 확률이 50%를 넘습니다. 이를 해시에 적용한 <strong>생일 공격(Birthday Attack)</strong>은 특정 해시값의 원문을 찾는 것이 아니라 <strong>같은 해시값을 만드는 임의의 두 메시지</strong>를 찾는 충돌 공격입니다.</p>
              <div class="table-scroll">
                <table class="concept-table">
                  <thead><tr><th>n비트 이상적 해시 공격</th><th>대략적 난이도</th><th>목표</th></tr></thead>
                  <tbody>
                    <tr><td>역상 공격</td><td><strong>2<sup>n</sup></strong></td><td>주어진 y에 대해 H(M)=y인 M 찾기</td></tr>
                    <tr><td>제2역상 공격</td><td><strong>2<sup>n</sup></strong></td><td>주어진 M과 같은 해시를 갖는 다른 M' 찾기</td></tr>
                    <tr><td>충돌 공격</td><td><strong>2<sup>n/2</sup></strong></td><td>같은 해시를 갖는 임의의 M, M' 쌍 찾기</td></tr>
                  </tbody>
                </table>
              </div>
              <h3>교재에 제시된 해시 공격 유형</h3>
              <dl class="study-definitions">
                <div><dt>무차별 공격(Brute-Force Attack)</dt><dd>가능한 입력을 대량으로 시도해 역상·제2역상 또는 충돌을 찾는 일반적인 공격</dd></div>
                <div><dt>일치블록 연쇄공격</dt><dd>공격에 사용할 여러 메시지 후보를 미리 준비하고 목표 메시지와 같은 해시값을 갖는 후보를 찾는 방식</dd></div>
                <div><dt>중간자 연쇄공격</dt><dd>최종 해시값이 아니라 반복 해시 과정의 <strong>중간 연쇄값</strong>에서 충돌을 찾는 방식</dd></div>
                <div><dt>고정점 연쇄공격</dt><dd>특정 입력에서 연쇄변수가 고정되는 성질을 이용해 메시지 중간에 블록을 삽입해도 전체 해시값이 변하지 않는 상황을 노리는 방식</dd></div>
                <div><dt>차분 공격(Differential Attack)</dt><dd>압축함수의 입력 차이가 출력 차이에 미치는 통계적 특성을 분석하여 충돌 경로를 찾는 방식</dd></div>
              </dl>
              <div class="important-box">
                <span class="box-title">시험 핵심</span>
                <p><strong>n비트 해시의 충돌 보안강도는 생일 공격 때문에 약 n/2비트</strong>입니다. 예를 들어 이상적인 160비트 해시의 일반 충돌 탐색은 약 2<sup>80</sup> 수준이 됩니다.</p>
              </div>`
          },
          {
            id: "hash-applications-limits",
            title: "해시함수의 응용과 한계",
            content: `
              <h3>무결성 점검</h3>
              <p>파일을 저장할 때 계산한 해시값과 나중에 다시 계산한 해시값을 비교하여 <strong>변경 여부</strong>를 확인할 수 있습니다. 원본 파일 전체를 두 번 비교하지 않고 짧은 다이제스트를 비교할 수 있어 효율적입니다.</p>
              <h3>소프트웨어 변경 검출</h3>
              <p>소프트웨어 배포자가 제공한 신뢰 가능한 해시값과 사용자가 내려받은 파일의 해시값을 비교하면 다운로드 과정에서 파일이 변조되었는지 확인하는 데 활용할 수 있습니다. 단, 공격자가 <strong>파일과 공개된 해시값을 함께 바꿀 수 있는 상황</strong>이라면 단순 해시 비교만으로는 진위를 보장할 수 없습니다.</p>
              <h3>전자서명에서의 해시</h3>
              <p>전자서명에서는 긴 원문 전체에 직접 서명하는 대신 먼저 원문의 해시값을 계산한 뒤 그 <strong>다이제스트에 서명</strong>하여 연산량을 줄이고 메시지 무결성을 확인합니다. 해시함수는 빠른 계산과 역상·제2역상·충돌 저항성이 요구됩니다.</p>
              <h3>일방향 해시함수만으로 해결할 수 없는 것</h3>
              <ul>
                <li><strong>송신자 인증 불가</strong>: 키가 없는 해시값은 누구나 다시 계산할 수 있으므로 누가 메시지를 만들었는지 증명하지 못합니다.</li>
                <li><strong>위조된 실체 검출 불가</strong>: 단순 해시는 조작·변경 탐지에는 유용하지만 메시지의 실제 작성자를 인증하지 않습니다.</li>
                <li>인증이 필요하면 <strong>MAC (Message Authentication Code)</strong> 또는 <strong>전자서명(Digital Signature)</strong>을 사용해야 합니다.</li>
              </ul>
              <div class="important-box">
                <span class="box-title">구분</span>
                <p><strong>Hash = 무결성 확인의 재료 · MAC = 공유 비밀키를 이용한 무결성+메시지 인증 · 전자서명 = 공개키 기술을 이용한 무결성+서명자 인증+부인방지</strong></p>
              </div>`
          },
          {
            id: "sha512-sha3",
            title: "SHA-512와 SHA-3",
            content: `
              <h3>SHA-512</h3>
              <p><strong>SHA-512 (Secure Hash Algorithm 512)</strong>는 SHA-2 계열의 해시함수로, 임의 길이 메시지를 처리해 <strong>512비트 다이제스트</strong>를 생성합니다.</p>
              <div class="table-scroll">
                <table class="concept-table">
                  <thead><tr><th>항목</th><th>SHA-512</th></tr></thead>
                  <tbody>
                    <tr><td><strong>메시지 길이</strong></td><td>2<sup>128</sup>비트 미만</td></tr>
                    <tr><td><strong>처리 블록</strong></td><td>1024비트</td></tr>
                    <tr><td><strong>워드 길이</strong></td><td>64비트</td></tr>
                    <tr><td><strong>다이제스트</strong></td><td>512비트</td></tr>
                    <tr><td><strong>단계 수</strong></td><td>80단계</td></tr>
                    <tr><td><strong>이상적 충돌 탐색</strong></td><td>약 2<sup>256</sup> 연산</td></tr>
                  </tbody>
                </table>
              </div>
              <h3>SHA-512 메시지 준비와 패딩</h3>
              <ol>
                <li>원문 뒤에 <strong>1비트</strong>를 붙인 뒤 필요한 만큼 0을 붙입니다.</li>
                <li>마지막에 원래 메시지 길이를 나타내는 <strong>128비트 길이 필드</strong>를 붙입니다.</li>
                <li>전체 길이가 <strong>1024비트의 배수</strong>가 되도록 만들어 압축함수로 처리합니다.</li>
              </ol>
              <h3>SHA-3</h3>
              <p><strong>SHA-3 (Secure Hash Algorithm 3)</strong>는 SHA-1의 충돌 문제 이후 차세대 표준을 위해 진행된 공개 경쟁에서 선정된 <strong>Keccak</strong>을 기반으로 합니다. 최종 후보 5종은 <strong>BLAKE · Grøstl · JH · Keccak · Skein</strong>이었으며, Keccak이 2012년 선정되고 2015년 <strong>FIPS 202</strong>로 표준화되었습니다.</p>
              <ul>
                <li><strong>SHA3-224 · SHA3-256 · SHA3-384 · SHA3-512</strong>: 고정 길이 해시</li>
                <li><strong>SHAKE128 · SHAKE256</strong>: 가변 길이 출력을 제공하는 XOF (Extendable-Output Function)</li>
                <li>SHA-2와는 내부 구조가 다르며 <strong>스펀지 구조(Sponge Construction)</strong>를 사용합니다.</li>
              </ul>
              <div class="important-box">
                <span class="box-title">시험 포인트</span>
                <p><strong>SHA-512 = 1024비트 블록 · 512비트 다이제스트 · 64비트 워드 · 80단계 · 길이 필드 128비트</strong></p>
              </div>`
          },
          {
            id: "mac-mdc-basics",
            title: "메시지 인증코드 MAC과 MDC",
            content: `
              <p><strong>MAC (Message Authentication Code)</strong>은 송신자와 수신자가 공유하는 <strong>비밀키</strong>와 메시지를 입력으로 사용하여 고정 길이의 인증값을 만드는 기술입니다. 수신자는 같은 키로 MAC을 다시 계산해 수신한 MAC과 비교합니다.</p>
              <h3>MDC와 MAC의 차이</h3>
              <div class="table-scroll">
                <table class="concept-table">
                  <thead><tr><th>구분</th><th>MDC</th><th>MAC</th></tr></thead>
                  <tbody>
                    <tr><td><strong>풀네임</strong></td><td>Modification Detection Code</td><td>Message Authentication Code</td></tr>
                    <tr><td><strong>비밀키</strong></td><td>사용하지 않음</td><td><strong>송·수신자가 공유</strong></td></tr>
                    <tr><td><strong>주요 목적</strong></td><td>변경 탐지·무결성 확인</td><td><strong>무결성 + 메시지 출처 인증</strong></td></tr>
                    <tr><td><strong>공격자가 값 재계산</strong></td><td>가능</td><td>키를 모르면 정상 MAC 생성이 어려움</td></tr>
                  </tbody>
                </table>
              </div>
              <h3>MAC의 특징</h3>
              <ul>
                <li>메시지에 대한 <strong>변경·위조 검출</strong>과 공유키 소유자에 대한 <strong>메시지 인증</strong>을 제공합니다.</li>
                <li>대칭키 기반이므로 전자서명보다 일반적으로 계산이 빠릅니다.</li>
                <li><strong>기밀성</strong>은 제공하지 않습니다. 내용을 숨기려면 별도의 암호화가 필요합니다.</li>
                <li>송·수신자가 같은 비밀키를 사용하므로 <strong>키 배송 문제</strong>가 존재합니다.</li>
                <li>MAC만으로는 <strong>제3자에 대한 증명·부인방지</strong>를 제공할 수 없습니다. 두 당사자가 모두 같은 MAC을 만들 수 있기 때문입니다.</li>
              </ul>
              <div class="important-box">
                <span class="box-title">한 줄 구분</span>
                <p><strong>MDC = 키 없음·변경 탐지 / MAC = 공유키 있음·무결성+인증</strong></p>
              </div>`
          },
          {
            id: "mac-implementations",
            title: "HMAC·CBC-MAC·CMAC·CCM·GCM",
            content: `
              <h3>축소 MAC (Nested MAC)</h3>
              <p>MAC의 안전성을 높이기 위해 해시를 <strong>두 단계</strong>로 적용하는 형태입니다. 첫 단계에서 키와 메시지를 결합해 중간 다이제스트를 만들고, 두 번째 단계에서 다시 키와 중간값을 결합해 최종 MAC을 만듭니다. 대표적인 실용 설계가 HMAC입니다.</p>
              <h3>HMAC</h3>
              <p><strong>HMAC (Hash-based Message Authentication Code)</strong>은 암호학적 해시함수와 공유 비밀키를 결합해 MAC을 만드는 표준적인 방식입니다. 특정 해시 하나에만 묶이지 않고 적절한 반복형 해시함수와 함께 사용할 수 있습니다. <strong>RFC 2104</strong>로 널리 알려졌으며 TLS의 전통적 MAC 구성, IPsec 등 여러 보안 프로토콜에서 활용되어 왔습니다.</p>
              <p><code>HMAC(K, m) = H((K' ⊕ opad) ∥ H((K' ⊕ ipad) ∥ m))</code></p>
              <dl class="study-definitions compact-definitions">
                <div><dt>ipad</dt><dd>Inner Padding · 내부 해시에서 키와 XOR하는 고정 패딩</dd></div>
                <div><dt>opad</dt><dd>Outer Padding · 외부 해시에서 키와 XOR하는 고정 패딩</dd></div>
                <div><dt>핵심</dt><dd>키를 블록 길이에 맞춘 뒤 <strong>내부 해시 → 외부 해시</strong>의 두 단계로 MAC을 계산</dd></div>
              </dl>
              <h3>블록 암호 기반 MAC</h3>
              <div class="table-scroll">
                <table class="concept-table">
                  <thead><tr><th>방식</th><th>풀네임·구조</th><th>핵심</th></tr></thead>
                  <tbody>
                    <tr><td><strong>CBC-MAC</strong></td><td>Cipher Block Chaining Message Authentication Code</td><td>CBC와 유사하게 메시지 블록을 연쇄 처리하여 <strong>마지막 블록의 결과</strong>를 MAC으로 사용. 기본형은 메시지 길이·도메인 관리에 주의</td></tr>
                    <tr><td><strong>CMAC</strong></td><td>Cipher-based Message Authentication Code</td><td>CBC-MAC을 보완한 표준 방식. 블록 암호(AES 등)를 사용하며 데이터의 인증·무결성을 제공</td></tr>
                    <tr><td><strong>CCM</strong></td><td>Counter with CBC-MAC</td><td><strong>CTR 암호화 + CBC-MAC 인증</strong>을 결합해 기밀성과 인증을 함께 제공. AES 기반 구성과 IEEE 802.11 무선 보안 등에 활용</td></tr>
                    <tr><td><strong>GCM</strong></td><td>Galois/Counter Mode</td><td><strong>CTR 기반 암호화 + Galois 필드 기반 인증</strong>을 결합한 인증 암호 방식. 병렬 처리가 가능해 고속 구현에 유리</td></tr>
                  </tbody>
                </table>
              </div>
              <h3>MAC 검증</h3>
              <p>수신자는 동일한 키와 동일한 MAC 알고리즘으로 수신 메시지의 MAC을 다시 계산합니다. <strong>계산한 MAC과 수신 MAC이 같으면 정상</strong>으로 판단하고, 다르면 메시지 또는 MAC이 전송 중 변경되었거나 인증에 실패한 것으로 판단합니다.</p>
              <div class="important-box">
                <span class="box-title">구분 암기</span>
                <p><strong>HMAC = Hash 기반 · CMAC = Cipher 기반 · CCM = CTR + CBC-MAC · GCM = Galois/Counter 인증 암호</strong></p>
              </div>`
          },
          {
            id: "mac-attacks-limitations",
            title: "MAC 공격·재전송 방지·한계",
            content: `
              <h3>재전송 공격</h3>
              <p><strong>재전송 공격(Replay Attack)</strong>은 공격자가 과거에 정상적으로 전송된 <strong>메시지 + MAC</strong>을 그대로 저장했다가 다시 보내는 공격입니다. 기존 MAC이 유효하므로 <strong>MAC만으로는 메시지의 신선성(Freshness)</strong>을 보장하지 못합니다.</p>
              <h3>재전송 공격 방지 방법</h3>
              <div class="table-scroll">
                <table class="concept-table">
                  <thead><tr><th>방법</th><th>동작</th><th>주의점</th></tr></thead>
                  <tbody>
                    <tr><td><strong>순서번호</strong><br><span class="term-en">Sequence Number</span></td><td>메시지마다 증가하는 번호를 넣고 번호까지 MAC 계산에 포함</td><td>통신 상대별 마지막 번호를 관리해야 함</td></tr>
                    <tr><td><strong>타임스탬프</strong><br><span class="term-en">Timestamp</span></td><td>현재 시각을 메시지와 MAC 계산에 포함하고 허용 시간창을 검사</td><td>송·수신자 시계 동기화 필요</td></tr>
                    <tr><td><strong>비표</strong><br><span class="term-en">Nonce, Number Used Once</span></td><td>매 요청마다 한 번만 사용하는 값을 포함하여 같은 메시지 재사용을 구분</td><td>Nonce를 재사용하지 않는 것이 핵심</td></tr>
                    <tr><td><strong>시도/응답</strong><br><span class="term-en">Challenge/Response</span></td><td>검증자가 난수 Challenge를 보내고 상대가 그 값을 포함한 인증 응답을 반환</td><td>응답이 현재 세션의 Challenge와 연결되어야 함</td></tr>
                  </tbody>
                </table>
              </div>
              <h3>MAC으로 해결할 수 없는 문제</h3>
              <dl class="study-definitions">
                <div><dt>제3자에 대한 증명</dt><dd>송신자와 수신자가 같은 공유키를 알고 있으므로 어느 쪽이 MAC을 만들었는지 제3자에게 독립적으로 증명하기 어려움</dd></div>
                <div><dt>부인방지(Non-repudiation)</dt><dd>공유키 당사자 모두 같은 MAC을 생성할 수 있으므로 송신 사실을 제3자에게 증명하는 부인방지 기능이 없음</dd></div>
                <div><dt>해결</dt><dd><strong>전자서명(Digital Signature)</strong>을 사용하면 개인키 소유자만 서명을 만들 수 있어 제3자 검증과 부인방지를 제공할 수 있음</dd></div>
              </dl>
              <div class="important-box">
                <span class="box-title">SECTION 05 핵심 연결</span>
                <p><strong>Hash는 키 없이 무결성 확인 → MAC은 공유키를 더해 인증까지 제공 → Replay는 MAC만으로 막지 못하므로 순서번호·Timestamp·Nonce·Challenge/Response 추가 → 제3자 증명·부인방지는 전자서명</strong></p>
              </div>`
          }
        ],
        content: ""
      },
      {
        id: "section-06", number: 6, title: "전자서명과 PKI",
        subtopics: [
          {
            id: "digital-signature-basics", title: "전자서명의 개요·서비스·요구사항",
            content: `
              <p><strong>전자서명(Digital Signature)</strong>은 공개키 암호 기술을 이용해 전자문서의 <strong>서명자 인증, 메시지 무결성, 부인방지(Non-repudiation)</strong>를 제공하는 기술입니다. 서명자는 자신의 <strong>개인키(Private Key)</strong>로 서명을 생성하고 검증자는 서명자의 <strong>공개키(Public Key)</strong>로 검증합니다.</p>
              <h3>전자서명 과정과 키</h3>
              <ol>
                <li>송신자는 <strong>서명 알고리즘(Signing Algorithm)</strong>에 메시지와 자신의 개인키를 입력해 서명 S를 생성합니다.</li>
                <li>메시지 M과 서명 S를 수신자에게 전달합니다.</li>
                <li>수신자는 <strong>검증 알고리즘(Verifying Algorithm)</strong>에 메시지·서명·서명자의 공개키를 적용합니다.</li>
                <li>검증 결과가 참이면 서명을 받아들이고, 거짓이면 위조·변경 가능성이 있으므로 거부합니다.</li>
              </ol>
              <div class="important-box"><span class="box-title">키 사용 방향</span><p><strong>서명 생성 = 서명자의 개인키 / 서명 검증 = 서명자의 공개키</strong>입니다. 수신자의 공개키로 기밀성을 제공하는 공개키 암호화와 혼동하지 않습니다.</p></div>
              <h3>직접서명과 중재서명</h3>
              <ul>
                <li><strong>직접 전자서명(Direct Digital Signature)</strong>: 송신자와 수신자가 직접 서명 생성·검증을 수행합니다. 서명자의 공개키가 진짜라는 신뢰가 필요합니다.</li>
                <li><strong>중재 전자서명(Arbitrated Digital Signature)</strong>: 신뢰하는 제3자·중재자가 서명 과정에 참여하여 검증이나 분쟁 해결을 돕습니다.</li>
              </ul>
              <h3>전자서명 서비스</h3>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>서비스</th><th>의미</th></tr></thead><tbody>
                <tr><td><strong>메시지 인증</strong><br><span class="term-en">Message Authentication</span></td><td>메시지가 주장된 서명자로부터 생성되었음을 확인</td></tr>
                <tr><td><strong>메시지 무결성</strong><br><span class="term-en">Message Integrity</span></td><td>서명 이후 메시지가 변경되지 않았는지 검출</td></tr>
                <tr><td><strong>부인방지</strong><br><span class="term-en">Non-repudiation</span></td><td>서명자가 나중에 자신의 정상 서명 사실을 쉽게 부인하지 못하게 함</td></tr>
                <tr><td><strong>기밀성</strong><br><span class="term-en">Confidentiality</span></td><td><strong>전자서명 자체는 제공하지 않음.</strong> 필요하면 메시지와 서명을 별도로 암호화</td></tr>
              </tbody></table></div>
              <h3>전자서명의 요구사항</h3>
              <ul>
                <li><strong>위조 불가(Unforgeable)</strong>: 합법적인 개인키 소유자만 유효한 서명을 만들 수 있어야 함</li>
                <li><strong>서명자 인증(User/Signer Authentication)</strong>: 누가 서명했는지 검증할 수 있어야 함</li>
                <li><strong>부인 불가(Non-repudiation)</strong>: 서명자가 유효한 서명 사실을 사후에 부인하기 어려워야 함</li>
                <li><strong>변경 불가</strong>: 서명된 메시지가 바뀌면 검증에 실패해야 함</li>
                <li><strong>재사용 불가</strong>: 한 문서의 유효한 서명을 다른 문서의 서명으로 그대로 이용할 수 없어야 함</li>
              </ul>`
          },
          {
            id: "digital-signature-algorithms", title: "RSA·ElGamal·Schnorr·DSS·ECDSA",
            content: `
              <h3>RSA 전자서명</h3>
              <p><strong>RSA (Rivest–Shamir–Adleman)</strong>는 공개키 암호화뿐 아니라 전자서명에도 사용할 수 있습니다. 개념적으로 암호화와 키 사용 역할이 반대이며 <strong>서명에는 개인키 d, 검증에는 공개키 e</strong>를 사용합니다. 교재의 단순식은 <code>S = M^d mod n</code>, <code>M' = S^e mod n</code>으로 이해할 수 있으나 실제 안전한 RSA 서명은 원문을 그대로 계산하지 않고 <strong>해시와 전자서명용 패딩</strong>을 사용합니다.</p>
              <h3>ElGamal·Schnorr</h3>
              <ul>
                <li><strong>ElGamal 전자서명</strong>: ElGamal 공개키 암호와 같은 키 체계를 이용하지만 <strong>서명 알고리즘과 암호화 알고리즘은 다릅니다.</strong> 이산대수 문제의 어려움에 기반하며 DSA의 기반이 된 방식입니다.</li>
                <li><strong>Schnorr 전자서명</strong>: ElGamal 계열의 이산대수 기반 전자서명으로, 서명 계산을 간결하게 구성하여 효율적인 서명 크기와 검증을 목표로 합니다.</li>
              </ul>
              <h3>DSS와 DSA</h3>
              <p><strong>DSS (Digital Signature Standard)</strong>는 미국 NIST의 전자서명 표준이고, <strong>DSA (Digital Signature Algorithm)</strong>는 역사적으로 DSS의 대표 알고리즘입니다. DSA는 이산대수 문제에 기반하며 <strong>암호화·키교환용이 아니라 전자서명용</strong>으로 설계되었습니다.</p>
              <p>교재에서는 ElGamal을 개선한 서명 방식으로 DSA를 비교합니다. 현재 <strong>FIPS 186-5</strong>에서는 새로운 DSA 서명 생성은 승인하지 않고 과거 DSA 서명의 검증만 허용하며, RSA·ECDSA·EdDSA 등을 표준 서명 방식으로 다룹니다.</p>
              <h3>타원곡선·국산 전자서명</h3>
              <ul>
                <li><strong>ECDSA (Elliptic Curve Digital Signature Algorithm)</strong>: DSA의 원리를 타원곡선에 적용. 같은 보안강도에서 비교적 짧은 키 사용 가능</li>
                <li><strong>KCDSA (Korean Certificate-based Digital Signature Algorithm)</strong>: 한국형 인증서 기반 전자서명 알고리즘</li>
                <li><strong>EC-KCDSA (Elliptic Curve KCDSA)</strong>: KCDSA를 타원곡선에 적용한 전자서명 방식</li>
              </ul>
              <div class="important-box"><span class="box-title">시험 연결</span><p><strong>RSA = 소인수분해 / ElGamal·DSA·Schnorr = 이산대수 / ECDSA·EC-KCDSA = 타원곡선</strong></p></div>`
          },
          {
            id: "digital-signature-methods", title: "메시지 복원형·부가형 전자서명",
            content: `
              <h3>메시지 복원형</h3>
              <p><strong>메시지 복원형 전자서명(Digital Signature with Message Recovery)</strong>은 서명값에서 메시지 전체 또는 일부를 복원할 수 있도록 구성하는 방식입니다. 교재에서는 송신자가 자신의 개인키로 메시지를 처리하고 수신자가 송신자의 공개키로 검증하면서 메시지를 복원하는 흐름으로 설명합니다. 서명과 별도로 원문 전체를 전송하지 않는 형태를 만들 수 있지만, 메시지 전체를 직접 서명 연산에 포함하는 단순 구성은 긴 메시지에서 부담이 커질 수 있습니다.</p>
              <h3>부가형</h3>
              <p><strong>부가형 전자서명(Digital Signature with Appendix)</strong>은 원문 메시지와 전자서명을 <strong>별도로 함께 전송</strong>합니다. 일반적으로 메시지를 해시한 <strong>고정 길이 다이제스트</strong>에 서명하므로 긴 메시지에도 효율적입니다.</p>
              <ol>
                <li>송신자: <code>h = H(M)</code>으로 메시지 해시 계산</li>
                <li>송신자: 개인키로 h에 서명하여 S를 생성하고 <strong>(M, S)</strong> 전송</li>
                <li>수신자: M을 다시 해시하고 서명자의 공개키로 S를 검증</li>
                <li>두 결과가 일치하면 메시지 무결성과 서명 유효성 확인</li>
              </ol>
              <div class="important-box"><span class="box-title">구분 암기</span><p><strong>복원형 = 서명에서 메시지 복원 / 부가형 = 메시지와 서명을 별도 전송, 해시 후 서명</strong></p></div>`
          },
          {
            id: "special-digital-signatures", title: "특수 전자서명",
            content: `
              <p>익명성·사생활 보호·검증자 제한·대리 권한·복수 서명 등이 필요할 때 특수 전자서명 방식을 사용합니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>방식</th><th>핵심 개념</th><th>시험 포인트</th></tr></thead><tbody>
                <tr><td><strong>부인방지 전자서명</strong><br><span class="term-en">Undeniable Signature</span></td><td>D. Chaum 제안. 검증자가 임의로 검증하지 못하고 <strong>서명자의 협력</strong>이 있어야 검증 가능</td><td>검증 통제·프라이버시</td></tr>
                <tr><td><strong>의뢰 부인방지 서명</strong></td><td>분쟁 시 임의의 검증자가 아니라 <strong>지정된 제3자</strong>가 확인 과정에 관여하도록 구성</td><td>지정 확인자·분쟁 해결</td></tr>
                <tr><td><strong>수신자 지정 서명</strong><br><span class="term-en">Designated Verifier Signature</span></td><td>특정 수신자·검증자만 서명의 유효성을 확인</td><td>검증자 제한</td></tr>
                <tr><td><strong>은닉 서명</strong><br><span class="term-en">Blind Digital Signature</span></td><td>D. Chaum 제안. 서명자는 <strong>문서 내용을 보지 못한 상태</strong>에서 서명하고 사용자는 은닉을 제거해 정상 서명을 획득</td><td>익명성·전자화폐·전자투표</td></tr>
                <tr><td><strong>위임 서명</strong><br><span class="term-en">Proxy Digital Signature</span></td><td>원 서명자가 대리인에게 <strong>서명 권한을 위임</strong>하여 정해진 범위에서 대신 서명</td><td>권한 위임</td></tr>
                <tr><td><strong>다중서명</strong><br><span class="term-en">Multisignature</span></td><td>여러 사람이 동일 문서에 서명하고 필요하면 여러 서명값을 하나로 결합</td><td>복수 참여자·결합 서명</td></tr>
              </tbody></table></div>
              <h3>은닉 서명 흐름</h3>
              <ol><li>사용자가 메시지를 <strong>은닉(Blinding)</strong>하여 전달</li><li>서명자는 원문을 알지 못한 채 은닉값에 서명</li><li>사용자가 <strong>은닉 해제(Unblinding)</strong> 후 원문에 대한 유효한 서명을 획득</li></ol>`
          },
          {
            id: "signature-applications", title: "전자투표·전자입찰",
            content: `
              <h3>전자투표</h3>
              <p><strong>전자투표(Electronic Voting)</strong>는 전산 시스템으로 투표·집계·검증을 수행합니다. 장소 제약을 줄이고 무기명 투표와 신속한 집계가 가능하지만 <strong>유권자 인증과 투표 내용의 기밀성·익명성을 동시에 만족</strong>해야 합니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>요구사항</th><th>의미</th></tr></thead><tbody>
                <tr><td><strong>완전성(Completeness)</strong></td><td>정상적인 모든 투표가 정확히 집계되어야 함</td></tr>
                <tr><td><strong>익명성(Anonymity)</strong></td><td>특정 투표자와 투표 내용을 연결할 수 없어야 함</td></tr>
                <tr><td><strong>건전성(Soundness)</strong></td><td>부정한 투표자가 선거 과정을 방해하거나 잘못된 결과를 만들지 못해야 함</td></tr>
                <tr><td><strong>이중투표 방지</strong></td><td>한 유권자가 두 번 이상 투표하지 못해야 함</td></tr>
                <tr><td><strong>정당성(Eligibility)</strong></td><td>정당한 선거권을 가진 사람만 투표할 수 있어야 함</td></tr>
                <tr><td><strong>검증 가능성(Verifiability)</strong></td><td>선거 결과의 무결성을 확인하고 검증할 수 있어야 함</td></tr>
              </tbody></table></div>
              <h3>전자투표 방식</h3>
              <ul>
                <li><strong>PSEV (Poll Site E-Voting)</strong>: 지정 투표소의 전자투표 장치를 이용하는 현장 방식</li>
                <li><strong>Kiosk 방식</strong>: 공공장소 등의 터치스크린·키오스크를 네트워크로 연결</li>
                <li><strong>REV (Remote Internet E-Voting)</strong>: 가정·직장 등 원격지에서 PC·모바일·인터넷 등으로 투표. 접근성은 높지만 인증·단말·네트워크 보안 요구가 큼</li>
              </ul>
              <h3>전자입찰</h3>
              <p><strong>전자입찰(Electronic Bidding)</strong>은 다수 공급자의 입찰을 전자적으로 접수하고 인터넷 기반 시스템에서 입찰 절차를 수행하는 방식입니다.</p>
              <ul>
                <li><strong>독립성</strong>: 각 구성요소의 독자적 자율성 보장</li><li><strong>비밀성</strong>: 민감한 개별 정보의 사전 노출 방지</li><li><strong>무결성</strong>: 입찰 정보의 누락·변조 확인</li><li><strong>공평성</strong>: 참여자에게 동일 조건과 정보 적용</li><li><strong>안전성</strong>: 참여자 간 공모나 공고자·서버의 독단적 조작 방지</li>
              </ul>`
          },
          {
            id: "pki-overview", title: "전자서명의 한계와 PKI 개요",
            content: `
              <h3>전자서명만으로 해결할 수 없는 문제</h3>
              <p>서명 검증에는 공개키가 필요하지만 공개키만 받았다고 해서 <strong>그 공개키가 실제 서명자의 것인지</strong> 자동으로 알 수 있는 것은 아닙니다. 공격자가 자신의 공개키를 타인의 것이라고 속여 배포하면 전자서명 기술만으로는 신원과 공개키의 연결을 보장하기 어렵습니다.</p>
              <p>신뢰기관이 <strong>신원(Identity)과 공개키(Public Key)를 인증서로 결합</strong>하고 인증서의 발급·검증·갱신·폐지와 관련 정책을 관리하는 체계가 <strong>PKI (Public Key Infrastructure, 공개키 기반구조)</strong>입니다.</p>
              <h3>PKI의 역할</h3>
              <ul><li>공개키 소유자와 신원을 인증서로 연결</li><li>인증서 발급·갱신·폐지와 상태 검증</li><li>인증기관 간 신뢰관계와 인증 경로(Certification Path) 구성</li><li>정책·절차·하드웨어·소프트웨어·인력 등 공개키 운용 요소 관리</li></ul>
              <div class="important-box"><span class="box-title">핵심 연결</span><p><strong>전자서명 → 공개키의 소유자 확인 필요 → CA가 서명한 인증서 → PKI가 신원과 공개키를 신뢰 관계로 연결</strong></p></div>`
          },
          {
            id: "pki-components", title: "PKI의 주요 구성요소",
            content: `
              <p>PKI는 인증서뿐 아니라 발급·등록·검증기관, 저장소와 최종 사용자까지 포함하는 <strong>신뢰 인프라</strong>입니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>구성요소</th><th>풀네임</th><th>역할</th></tr></thead><tbody>
                <tr><td><strong>PAA</strong></td><td>Policy Approving Authority</td><td>PKI 전반의 최상위 <strong>정책·절차를 수립·승인</strong>하고 하위 기관 정책의 적정성을 검사</td></tr>
                <tr><td><strong>PCA</strong></td><td>Policy Certification Authority</td><td>PAA 정책 아래 도메인 정책을 수립하고 하위 CA 공개키를 인증하며 인증서·폐지목록 등을 관리</td></tr>
                <tr><td><strong>CA</strong></td><td>Certification Authority</td><td><strong>인증서 발급·갱신·폐지</strong>, 공개키와 주체의 신원 결합, 다른 CA와 상호인증</td></tr>
                <tr><td><strong>VA</strong></td><td>Validation Authority</td><td>인증서 유효성·폐지상태 등 <strong>인증서 상태 검증</strong> 서비스 제공</td></tr>
                <tr><td><strong>RA</strong></td><td>Registration Authority</td><td>사용자의 <strong>신원 확인·등록·인증서 신청 접수</strong>. 최종 발급 책임은 CA</td></tr>
                <tr><td><strong>Repository / Directory</strong></td><td>저장소·디렉터리</td><td>인증서·폐지정보 등을 저장·검색·배포. <strong>LDAP</strong>로 접근할 수 있음</td></tr>
                <tr><td><strong>Subject / End Entity</strong></td><td>사용자·최종 개체</td><td>키쌍 보호, 인증서 신청·획득·사용, 필요 시 갱신·폐지 요청</td></tr>
              </tbody></table></div>
              <p><strong>RA = 신원 확인·등록 / CA = 인증서 발급·서명·폐지</strong>로 구분합니다. RA는 선택적이며 별도 RA가 없으면 CA가 등록 기능을 함께 수행할 수 있습니다.</p>
              <p><strong>LDAP (Lightweight Directory Access Protocol)</strong>는 디렉터리에 저장된 인증서·폐지정보 등을 검색하는 데 사용할 수 있는 경량 디렉터리 접근 프로토콜입니다.</p>`
          },
          {
            id: "pki-trust-models", title: "PKI의 계층·네트워크·혼합 구조",
            content: `
              <h3>계층 구조</h3>
              <p><strong>계층 구조(Hierarchical Trust Model)</strong>는 최상위 <strong>Root CA</strong>를 신뢰 출발점으로 두고 하위 CA가 트리 형태로 연결됩니다. 사용자는 루트까지 이어지는 <strong>인증 경로(Certification Path)</strong>를 검증합니다.</p>
              <ul><li><strong>장점</strong>: 신뢰 경로 탐색과 관리가 비교적 단순, 정책 일관성 유지가 쉬움</li><li><strong>단점</strong>: 상위 CA에 신뢰 집중, 최상위 키 손상 시 영향 범위가 큼</li></ul>
              <h3>네트워크 구조</h3>
              <p><strong>네트워크 구조(Network/Peer Trust Model)</strong>는 단일 최상위 CA 없이 여러 CA가 독립적으로 존재하고 서로 <strong>상호인증(Cross Certification)</strong>하여 신뢰관계를 형성합니다.</p>
              <ul><li><strong>장점</strong>: 조직·도메인의 자율성과 유연성 유지</li><li><strong>단점</strong>: CA가 늘면 상호인증 관계와 인증 경로 탐색이 복잡</li></ul>
              <h3>혼합 구조</h3>
              <p><strong>혼합 구조(Hybrid Trust Model)</strong>는 도메인 내부의 계층 구조와 도메인 간 네트워크 구조의 장점을 결합하여 독립성을 유지하면서 상호 신뢰를 연결합니다.</p>
              <div class="important-box"><span class="box-title">구조 구분</span><p><strong>계층 = Root CA 중심 트리 / 네트워크 = CA 간 상호인증 / 혼합 = 도메인 내부 계층 + 도메인 간 연동</strong></p></div>`
          },
          {
            id: "x509-certificates", title: "X.509 공개키 인증서",
            content: `
              <p><strong>공개키 인증서(PKC, Public-Key Certificate)</strong>는 주체의 신원정보와 공개키를 결합하고 <strong>CA가 자신의 개인키로 서명</strong>한 전자 증명서입니다. 검증자는 CA의 공개키로 인증서 서명을 검증합니다.</p>
              <p><strong>X.509</strong>는 ITU-T가 정의한 공개키 인증서 형식이며, 인터넷 PKI에서는 X.509 v3 구조와 확장필드가 널리 사용됩니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>필드</th><th>구분</th><th>의미</th></tr></thead><tbody>
                <tr><td><strong>Version</strong></td><td>필수</td><td>인증서 버전, v3에서 확장필드 사용</td></tr>
                <tr><td><strong>Serial Number</strong></td><td>필수</td><td>발급 CA가 부여하는 고유 일련번호</td></tr>
                <tr><td><strong>Signature Algorithm ID</strong></td><td>필수</td><td>CA의 인증서 서명 알고리즘</td></tr>
                <tr><td><strong>Issuer Name</strong></td><td>필수</td><td>인증서를 발급한 CA</td></tr>
                <tr><td><strong>Validity Period</strong></td><td>필수</td><td>Not Before ~ Not After의 유효기간</td></tr>
                <tr><td><strong>Subject Name</strong></td><td>필수</td><td>인증서 주체 이름</td></tr>
                <tr><td><strong>Subject Public Key Info</strong></td><td>필수</td><td>주체 공개키와 공개키 알고리즘</td></tr>
                <tr><td><strong>Issuer Unique Identifier</strong></td><td>선택</td><td>발급자 이름 재사용 구분</td></tr>
                <tr><td><strong>Subject Unique Identifier</strong></td><td>선택</td><td>주체 이름 재사용 구분</td></tr>
                <tr><td><strong>Extensions</strong></td><td>v3 선택</td><td>키 용도·정책·대체 이름·경로 제약 등</td></tr>
                <tr><td><strong>Signature</strong></td><td>필수</td><td>인증서 내용에 대한 CA의 전자서명</td></tr>
              </tbody></table></div>
              <h3>X.509 v3 주요 확장영역</h3>
              <ul>
                <li><strong>Key and Policy Information</strong>: Authority Key Identifier, Subject Key Identifier, Key Usage, Certificate Policies 등</li>
                <li><strong>Subject and Issuer Attributes</strong>: Subject Alternative Name, Issuer Alternative Name 등 DNS·IP·URI·전자우편 등의 대체 이름</li>
                <li><strong>Certification Path Constraints</strong>: Basic Constraints, Name Constraints, Policy Constraints 등 CA 여부와 인증 경로 제약</li>
              </ul>
              <div class="important-box"><span class="box-title">X.509 핵심</span><p><strong>주체 신원 + 주체 공개키 + 유효기간 + 발급자 + CA 전자서명</strong></p></div>`
          },
          {
            id: "certificate-status-protocols", title: "인증서 폐지·CRL·OCSP·CMP",
            content: `
              <h3>인증서 폐지</h3>
              <p>유효기간이 남아 있어도 신뢰할 수 없는 상황이면 인증서를 <strong>폐지(Revocation)</strong>해야 합니다. 대표 사유는 <strong>주체 개인키 침해, CA가 더 이상 사용자를 인증하지 않음·소속 변경, CA 개인키 침해, 인증서 대체·업무 종료</strong> 등입니다.</p>
              <h3>CRL</h3>
              <p><strong>CRL (Certificate Revocation List, 인증서 폐지 목록)</strong>은 CA가 폐지된 인증서 정보를 목록 형태로 만들어 <strong>Repository·Directory</strong>에 게시하는 방식입니다. 검증자는 인증서의 일련번호가 CRL에 포함되는지 확인합니다.</p>
              <ul><li>발급자, 서명 알고리즘, 갱신시각, 폐지 인증서 일련번호·폐지시각·폐지사유 등이 포함될 수 있음</li><li>CRL 자체도 CA의 전자서명으로 진위·무결성 보호</li><li>목록이 커지거나 갱신 주기가 길면 최신 상태 확인이 지연될 수 있음</li></ul>
              <h3>OCSP</h3>
              <p><strong>OCSP (Online Certificate Status Protocol)</strong>는 CRL 전체 대신 특정 인증서의 현재 상태를 <strong>온라인 질의</strong>합니다. 대표 응답은 <strong>good · revoked · unknown</strong>입니다. 교재의 RFC 2560은 1999년 OCSP 정의였으며 현재는 이를 대체한 <strong>RFC 6960</strong>이 기준입니다.</p>
              <h3>CMP</h3>
              <p><strong>CMP (Certificate Management Protocol)</strong>는 PKI 환경에서 인증서·키의 등록, 발급, 갱신, 폐지 등 <strong>인증서 생명주기 관리</strong>를 위한 프로토콜입니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>핵심</th><th>풀네임</th></tr></thead><tbody>
                <tr><td><strong>CRL</strong></td><td>폐지 인증서를 목록으로 배포</td><td>Certificate Revocation List</td></tr>
                <tr><td><strong>OCSP</strong></td><td>특정 인증서 상태를 온라인 질의</td><td>Online Certificate Status Protocol</td></tr>
                <tr><td><strong>CMP</strong></td><td>인증서 생명주기 관리</td><td>Certificate Management Protocol</td></tr>
              </tbody></table></div>
              <div class="important-box"><span class="box-title">SECTION 06 핵심 연결</span><p><strong>전자서명 → 공개키 진위 확인 필요 → PKI·CA·인증서 → X.509 형식 → 인증서 폐지상태는 CRL 또는 OCSP로 확인</strong></p></div>`
          }
        ],
        content: ""
      },
      {
        id: "section-07", number: 7, title: "키, 난수",
        subtopics: [
          {
            id: "key-basics-keyspace", title: "키의 개요와 키 공간",
            content: `
              <p>대칭키 암호, 공개키 암호, <strong>MAC (Message Authentication Code)</strong>, 전자서명 등 대부분의 암호기술은 알고리즘과 함께 <strong>키(Key)</strong>를 사용합니다. 대칭키 암호는 통신 당사자가 같은 비밀키를 공유하고, 공개키 암호·전자서명은 수학적으로 연결된 공개키와 개인키의 <strong>키 쌍(Key Pair)</strong>을 사용합니다.</p>
              <h3>키 공간</h3>
              <p><strong>키 공간(Key Space)</strong>은 사용할 수 있는 모든 가능한 키의 집합입니다. n비트 키라면 일반적으로 가능한 키의 수는 <strong>2<sup>n</sup></strong>개이므로 키 길이가 충분히 길수록 <strong>전수조사 공격(Brute-Force Attack)</strong>에 필요한 계산량이 커집니다.</p>
              <ul>
                <li>키 길이만 길다고 항상 안전한 것은 아니며 <strong>알고리즘의 안전성·난수 품질·키 관리</strong>가 함께 보장되어야 합니다.</li>
                <li>키가 공격자에게 노출되면 암호문을 가지고 있는 공격자가 평문을 얻을 수 있으므로 <strong>키 자체는 평문과 같은 수준의 중요한 비밀정보</strong>로 보호해야 합니다.</li>
                <li>키의 생성·분배·저장·사용·교체·폐기 전체 과정을 안전하게 관리하는 것이 <strong>키 관리(Key Management)</strong>의 핵심입니다.</li>
              </ul>
              <div class="important-box"><span class="box-title">시험 핵심</span><p><strong>키 공간 = 가능한 키의 전체 집합 / n비트 키 → 일반적으로 2<sup>n</sup>개의 후보 / 키 노출은 평문 노출과 같은 수준의 위험</strong></p></div>`
          },
          {
            id: "session-master-keys", title: "세션키와 마스터키",
            content: `
              <p>용도와 사용기간에 따라 하나의 장기 키로 모든 데이터를 직접 처리하지 않고 <strong>키 계층(Key Hierarchy)</strong>을 구성할 수 있습니다. 교재에서는 SSL/TLS 통신을 예로 세션마다 바뀌는 키와 이를 보호하는 상위 키를 구분합니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>핵심</th><th>사용 특성</th></tr></thead><tbody>
                <tr><td><strong>세션키</strong><br><span class="term-en">Session Key</span></td><td>하나의 통신 세션에서 실제 데이터 보호에 사용하는 임시 키</td><td>세션마다 새롭게 생성·교체하여 장기간 같은 키를 쓰는 위험을 줄임</td></tr>
                <tr><td><strong>마스터키</strong><br><span class="term-en">Master Key</span></td><td>세션키 같은 하위 키를 보호하거나 파생하는 데 사용하는 상위 수준의 키</td><td>세션키보다 장기간·반복적으로 쓰일 수 있으므로 더 엄격한 보호가 필요</td></tr>
              </tbody></table></div>
              <p>현대 TLS에서는 버전에 따라 세부 키 생성 방식이 다르지만, 시험에서는 <strong>세션키는 통신 세션마다 바뀌는 임시 키, 마스터키는 하위 키를 보호·파생하는 상위 키</strong>라는 관계를 먼저 기억합니다.</p>
              <div class="important-box"><span class="box-title">구분 암기</span><p><strong>Session Key = 세션 단위·짧은 수명 / Master Key = 상위 키·하위 키 보호 또는 파생</strong></p></div>`
          },
          {
            id: "cek-kek", title: "CEK와 KEK",
            content: `
              <p>콘텐츠 자체를 암호화하는 키와 그 암호키를 다시 보호하는 키를 분리하면 대용량 데이터와 키를 효율적으로 관리할 수 있습니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>키</th><th>풀네임</th><th>역할</th></tr></thead><tbody>
                <tr><td><strong>CEK</strong></td><td>Content Encryption Key<br><span class="term-en">콘텐츠 암호화 키</span></td><td>사용자가 이용하는 <strong>콘텐츠·데이터를 직접 암호화</strong>하는 키. 교재에서는 Contents Encrypting Key라는 표현도 사용</td></tr>
                <tr><td><strong>KEK</strong></td><td>Key Encryption Key<br><span class="term-en">키 암호화 키</span></td><td>CEK 등 <strong>다른 암호키를 암호화·보호</strong>하는 상위 키</td></tr>
              </tbody></table></div>
              <p>흐름은 <strong>평문 데이터 → CEK로 암호화 → 암호문</strong>, 그리고 <strong>CEK → KEK로 암호화(키 래핑) → 암호화된 CEK</strong>로 이해하면 됩니다. 데이터가 매우 커도 KEK로 전체 데이터를 다시 암호화할 필요 없이 작은 CEK만 안전하게 보호할 수 있습니다.</p>
              <div class="important-box"><span class="box-title">핵심 연결</span><p><strong>CEK가 데이터를 암호화하고, KEK가 CEK를 암호화합니다. 즉 KEK → CEK → Data의 키 계층</strong>입니다.</p></div>`
          },
          {
            id: "pbe-salt", title: "PBE와 Salt의 역할",
            content: `
              <h3>패스워드 기반 암호</h3>
              <p><strong>PBE (Password-Based Encryption, 패스워드 기반 암호)</strong>는 사용자가 기억하는 패스워드로부터 암호키를 만들어 데이터를 보호하는 방식입니다. 사람이 정한 패스워드는 무작위 암호키보다 엔트로피가 낮을 수 있으므로 패스워드를 그대로 키로 쓰지 않고 <strong>Salt와 키 유도 함수(KDF)</strong>를 사용합니다.</p>
              <h3>Salt</h3>
              <p><strong>Salt</strong>는 패스워드로부터 키를 유도할 때 패스워드와 함께 입력하는 <strong>무작위 값</strong>입니다. 같은 패스워드를 사용하더라도 Salt가 다르면 서로 다른 결과가 나오게 하여 미리 계산한 사전·레인보우 테이블을 그대로 재사용하기 어렵게 만듭니다.</p>
              <ul>
                <li><strong>Salt는 비밀키가 아닙니다.</strong> 일반적으로 파생된 값과 함께 저장할 수 있지만 사용자·레코드마다 충분히 무작위이고 중복 가능성이 낮아야 합니다.</li>
                <li>Salt가 없으면 같은 패스워드는 같은 파생 결과를 만들 수 있어 공격자가 미리 계산한 테이블을 재사용하기 쉽습니다.</li>
                <li>Salt는 사전공격 자체를 없애는 것이 아니라 <strong>공격자가 각 Salt마다 별도로 계산</strong>하도록 만들어 대규모 사전계산 공격의 효율을 떨어뜨립니다.</li>
              </ul>
              <div class="important-box"><span class="box-title">Salt 핵심</span><p><strong>같은 Password + 다른 Salt → 다른 파생키 / Salt = 사전·레인보우 테이블의 재사용을 어렵게 함</strong></p></div>`
          },
          {
            id: "pbkdf2", title: "PBKDF2와 반복 횟수",
            content: `
              <p><strong>PBKDF (Password-Based Key Derivation Function)</strong>는 패스워드로부터 암호학적 키를 만드는 함수이며, 대표적인 방식이 <strong>PBKDF2 (Password-Based Key Derivation Function 2)</strong>입니다.</p>
              <h3>PBKDF2 입력과 동작</h3>
              <dl class="study-definitions compact-definitions">
                <div><dt>Password</dt><dd>사용자가 입력한 패스워드·패스프레이즈</dd></div>
                <div><dt>Salt</dt><dd>무작위 값. 동일 패스워드의 파생 결과가 반복되지 않도록 함</dd></div>
                <div><dt>Iteration Count</dt><dd>PRF 계산을 반복하는 횟수. 반복을 늘려 패스워드 추측 한 번의 비용을 높임</dd></div>
                <div><dt>Derived Key Length</dt><dd>최종적으로 필요한 파생키의 길이</dd></div>
              </dl>
              <p>PBKDF2는 내부적으로 <strong>PRF (Pseudorandom Function)</strong>를 반복 적용하며 HMAC을 사용할 수 있습니다. 교재의 예시는 <strong>HMAC-SHA-256</strong>을 이용하여 Password·Salt·반복 횟수로부터 키를 유도하는 흐름입니다.</p>
              <h3>교재 수치와 현행 기준 구분</h3>
              <ul>
                <li>교재·NIST SP 800-132의 기본 시험 포인트: <strong>Salt는 최소 128비트 이상을 권고</strong>하고, 당시 문서의 최소 반복 횟수 기준은 <strong>1,000회</strong>입니다.</li>
                <li>실무에서는 1,000회를 고정값처럼 사용하지 않습니다. NIST는 반복 횟수를 시스템이 허용하는 범위에서 <strong>가능한 크게 선택</strong>하도록 설명하므로, 환경·정책에 맞춰 훨씬 높은 비용을 적용하고 주기적으로 조정해야 합니다.</li>
              </ul>
              <div class="important-box"><span class="box-title">시험 핵심</span><p><strong>PBKDF2 = Password + Salt + Iteration Count + 필요한 Key Length → Derived Key. Salt는 사전계산을 어렵게 하고 반복은 무차별 대입의 계산비용을 높입니다.</strong></p></div>`
          },
          {
            id: "key-storage", title: "암호키 저장과 보호",
            content: `
              <p>안전한 알고리즘을 사용해도 암호키가 유출되면 보호 효과가 사라집니다. 따라서 키는 일반 데이터와 분리하고 접근권한·저장 위치·사용 범위를 엄격하게 통제해야 합니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>방식</th><th>설명</th><th>보안 포인트</th></tr></thead><tbody>
                <tr><td><strong>서버 저장</strong></td><td>암호키를 서버 또는 별도 키 관리 저장소에 보관</td><td>웹·DB 서버의 데이터와 같은 위치에 평문 키를 두기보다 <strong>논리적·물리적으로 분리</strong>하고 접근을 최소화</td></tr>
                <tr><td><strong>스마트카드·USB 토큰</strong></td><td>전용 보안 토큰 내부에 키를 저장·사용</td><td>키가 외부로 직접 노출되는 범위를 줄임</td></tr>
                <tr><td><strong>HSM</strong><br><span class="term-en">Hardware Security Module</span></td><td>암호키의 생성·저장·암호연산을 보호된 하드웨어 안에서 수행하는 보안 모듈</td><td>키 추출과 위·변조·비인가 접근을 어렵게 하고 중요한 키를 중앙에서 보호</td></tr>
              </tbody></table></div>
              <p>상위 키인 Master Key·KEK가 노출되면 여러 하위 키가 함께 위험해질 수 있으므로 <strong>상위 키일수록 더 강한 저장·접근통제·교체 정책</strong>이 필요합니다.</p>
              <div class="important-box"><span class="box-title">핵심 원칙</span><p><strong>암호문과 키 분리 · 키 접근 최소화 · 평문 키 노출 최소화 · 중요한 키는 HSM 등 보호된 환경에서 관리</strong></p></div>`
          },
          {
            id: "random-uses-properties", title: "난수의 용도와 3가지 성질",
            content: `
              <h3>암호기술에서 난수의 용도</h3>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>용도</th><th>예시</th></tr></thead><tbody>
                <tr><td><strong>비밀키 생성</strong></td><td>대칭키 암호, MAC에서 사용할 키 생성</td></tr>
                <tr><td><strong>키쌍 생성</strong></td><td>공개키 암호·전자서명용 공개키/개인키 생성 과정</td></tr>
                <tr><td><strong>IV 생성</strong><br><span class="term-en">Initialization Vector</span></td><td>CBC·CFB·OFB 등 블록 암호 운용모드에서 사용하는 초기값 생성</td></tr>
                <tr><td><strong>Nonce 생성</strong><br><span class="term-en">Number Used Once</span></td><td>재전송 공격 대응, CTR 등에서 한 번만 사용해야 하는 값 생성</td></tr>
                <tr><td><strong>Salt 생성</strong></td><td>PBE·PBKDF에서 패스워드와 함께 사용할 무작위 값 생성</td></tr>
                <tr><td><strong>일회용 패드</strong><br><span class="term-en">One-Time Pad</span></td><td>평문과 같은 길이의 무작위 키열 생성</td></tr>
              </tbody></table></div>
              <h3>난수의 성질</h3>
              <dl class="study-definitions">
                <div><dt>무작위성(Randomness)</dt><dd>통계적인 편중 없이 수열이 무작위로 보이는 성질</dd></div>
                <div><dt>예측 불가능성(Unpredictability)</dt><dd>과거에 생성된 수열을 알아도 다음 값을 현실적으로 예측할 수 없는 성질</dd></div>
                <div><dt>재현 불가능성(Reconstruction/Reproducibility Impossibility)</dt><dd>같은 난수열을 다시 재현하기 어려운 성질. 교재에서는 세 성질 중 가장 엄격한 조건으로 설명</dd></div>
              </dl>
              <p>교재의 분류는 <strong>무작위성 → 예측 불가능성 → 재현 불가능성</strong> 순으로 조건이 엄격해지는 관계로 정리합니다. 암호용 난수는 단순히 통계적으로 고르게 보이는 것뿐 아니라 <strong>공격자가 다음 값을 예측하기 어려워야</strong> 합니다.</p>
              <div class="important-box"><span class="box-title">시험 구분</span><p><strong>Randomness = 편중 없음 / Unpredictability = 다음 수 예측 불가 / Reconstruction Impossibility = 같은 수열 재현 불가</strong></p></div>`
          },
          {
            id: "rng-prng", title: "RNG·PRNG·CSPRNG",
            content: `
              <h3>하드웨어 난수 생성기</h3>
              <p><strong>RNG (Random Number Generator)</strong>는 열잡음·전기적 잡음·진동·음향 등 물리적 현상의 불확실성을 센서로 측정하여 난수의 원천으로 사용할 수 있습니다. 이런 물리적 불확실성에서 얻는 정보량을 <strong>엔트로피(Entropy)</strong>라고 하며, 좋은 암호용 난수는 신뢰할 수 있는 엔트로피 원천이 중요합니다.</p>
              <h3>의사난수 생성기</h3>
              <p><strong>PRNG (Pseudorandom Number Generator)</strong>는 외부에서 주어진 <strong>종자(Seed)</strong>로 내부 상태(Internal State)를 초기화한 뒤 결정적 알고리즘으로 긴 의사난수열을 생성합니다. 같은 알고리즘·Seed·상태라면 같은 결과를 재현할 수 있으므로 <strong>Seed의 품질과 내부 상태 보호</strong>가 핵심입니다.</p>
              <ol>
                <li>엔트로피 원천에서 충분히 예측하기 어려운 <strong>Seed</strong>를 얻음</li>
                <li>Seed로 PRNG의 <strong>Internal State</strong>를 초기화</li>
                <li>내부 상태를 갱신하면서 <strong>Pseudorandom Number</strong>를 연속 생성</li>
                <li>필요하면 새로운 엔트로피로 <strong>Reseeding</strong>하여 상태를 갱신</li>
              </ol>
              <h3>암호학적 의사난수 생성기</h3>
              <p><strong>CSPRNG (Cryptographically Secure Pseudorandom Number Generator)</strong> 또는 <strong>DRBG (Deterministic Random Bit Generator)</strong>는 암호용으로 설계되어 출력 일부를 알아도 다음 출력을 예측하기 어렵도록 합니다. NIST SP 800-90A는 대표적으로 <strong>Hash_DRBG, HMAC_DRBG, CTR_DRBG</strong> 같은 결정적 난수비트 생성 방식을 정의합니다.</p>
              <div class="important-box"><span class="box-title">SECTION 07 핵심 연결</span><p><strong>좋은 Entropy → 안전한 Seed → CSPRNG/DRBG 내부 상태 → 예측하기 어려운 난수 → 키·IV·Nonce·Salt 생성 → 키는 HSM·키 계층으로 안전하게 보호</strong></p></div>`
          }
        ],
        content: ""
      }
    ]
  },
  {
    part: 3,
    title: "접근통제",
    sections: [
      {
        id: "section-08", number: 8, title: "접근통제 개요",
        subtopics: [
          {
            id: "access-control-basics", title: "접근통제 기본 개념",
            content: `
              <p><strong>접근통제(Access Control)</strong>는 정보자원에 대한 접근 요청을 미리 정해진 보안정책에 따라 허용하거나 거부하여, 인가되지 않은 사용이나 부적절한 접근으로부터 자원을 보호하는 보안대책입니다.</p>
              <ul>
                <li><strong>비인가 사용자</strong>가 정보자원을 사용하는 것을 막아야 합니다.</li>
                <li><strong>인가된 사용자라도 비인가된 방식</strong>으로 정보자원에 접근하는 행위를 막을 수 있어야 합니다.</li>
                <li>인가된 사용자가 허용된 방식으로 접근하더라도 실수 또는 고의로 자산을 훼손하거나 잘못 사용하는 위험을 줄여야 합니다.</li>
                <li>사람·프로세스·시스템 등의 <strong>주체(Subject)</strong>가 파일·데이터·프로그램 같은 <strong>객체(Object)</strong>에 접근할 때, 객체와 그 처리 환경을 위협으로부터 보호하는 것이 목적입니다.</li>
              </ul>
              <div class="important-box"><span class="box-title">시험 핵심</span><p><strong>접근통제는 단순히 '로그인 여부'만 확인하는 것이 아니라 누가(Subject), 무엇에(Object), 어떤 행위(Access)를 할 수 있는지를 정책에 따라 통제하는 것입니다.</strong></p></div>`
          },
          {
            id: "subject-object-access", title: "주체·객체·접근",
            content: `
              <p>접근통제는 <strong>주체(Subject) → 접근(Access) → 객체(Object)</strong>의 관계로 이해하면 쉽습니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>구성요소</th><th>의미</th><th>예시</th></tr></thead><tbody>
                <tr><td><strong>주체</strong><br><span class="term-en">Subject</span></td><td>객체 또는 객체 내부 데이터에 대한 접근을 요청하는 <strong>능동적인 개체</strong>. 행위자(Actor)라고도 이해할 수 있음</td><td>사용자, 프로그램, 프로세스 등</td></tr>
                <tr><td><strong>객체</strong><br><span class="term-en">Object</span></td><td>접근통제의 대상이 되는 <strong>수동적인 개체</strong>. 주체가 접근하여 사용하려는 자원</td><td>데이터베이스, 파일, 프로그램, 디렉터리 등</td></tr>
                <tr><td><strong>접근</strong><br><span class="term-en">Access</span></td><td>주체와 객체 사이에서 이루어지는 정보 흐름 또는 객체에 수행하는 행위</td><td>읽기(Read), 생성(Create), 수정(Write/Modify), 삭제(Delete) 등</td></tr>
              </tbody></table></div>
              <div class="important-box"><span class="box-title">구분 암기</span><p><strong>Subject = 접근을 시도하는 능동적 개체 / Object = 접근 대상인 수동적 자원 / Access = 주체가 객체에 수행하는 행위</strong></p></div>`
          },
          {
            id: "access-control-process", title: "접근통제 절차",
            content: `
              <p>전통적인 접근통제 절차는 <strong>식별(Identification) → 인증(Authentication) → 인가(Authorization)</strong>의 3단계로 구성됩니다. 최근에는 실제 행위를 기록·추적하는 <strong>책임추적성(Accountability)</strong>까지 함께 고려합니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>단계</th><th>핵심 질문·설명</th><th>대표 예</th></tr></thead><tbody>
                <tr><td><strong>식별</strong><br><span class="term-en">Identification</span></td><td><strong>“나는 누구인가?”</strong> 사용자가 자신의 신원을 시스템에 밝히고, 시스템이 신원을 구별할 수 있는 식별자를 제시하는 단계</td><td>사용자명(User Name), 계정번호, ID</td></tr>
                <tr><td><strong>인증</strong><br><span class="term-en">Authentication</span></td><td><strong>“그 사람이 정말 맞는가?”</strong> 주장한 신원이 실제 본인인지 증명하고 시스템이 이를 검증하는 단계</td><td>Password, PIN, Token, Smart Card, 생체정보 등</td></tr>
                <tr><td><strong>인가</strong><br><span class="term-en">Authorization</span></td><td><strong>“무엇을 할 수 있는가?”</strong> 인증된 주체에게 특정 객체에 접근하거나 업무를 수행할 권한을 부여·제한하는 단계</td><td>ACL (Access Control List), 보안등급, 권한정보</td></tr>
                <tr><td><strong>책임추적성</strong><br><span class="term-en">Accountability</span></td><td><strong>“누가 무엇을 했는가?”</strong> 사용자의 행위를 기록·추적하여 행위의 주체를 확인할 수 있게 하는 단계</td><td>Audit Log, 활동 기록, 추적정보</td></tr>
              </tbody></table></div>
              <p>특히 <strong>식별자(Identifier)</strong>는 개인의 신원을 구분하는 출발점이므로 뒤의 인증·권한부여뿐 아니라 책임추적성을 확보하는 데도 중요합니다.</p>
              <div class="important-box"><span class="box-title">순서 암기</span><p><strong>Identification(신원 제시) → Authentication(신원 검증) → Authorization(권한 부여) → Accountability(행위 기록·추적)</strong></p></div>`
          },
          {
            id: "accountability", title: "책임추적성",
            content: `
              <p><strong>책임추적성(Accountability)</strong>은 <strong>책임성</strong>이라고도 하며, 사용자의 시스템 이용과 그에 따른 행위를 기록하고 추적하여 특정 행위에 대한 책임 주체를 확인할 수 있게 하는 성질입니다.</p>
              <ul>
                <li>사용자 행위의 <strong>기록과 추적</strong>을 통해 사고 예방과 사후 분석에 도움을 줍니다.</li>
                <li>잘못이 없는 사람에게 책임이 돌아가는 것을 막고 실제 행위자를 식별하는 근거가 됩니다.</li>
                <li>식별·인증·접근통제·<strong>감사(Audit)</strong>가 함께 동작해야 실질적인 책임추적성을 확보할 수 있습니다.</li>
                <li>여러 사람이 하나의 계정을 공유하면 행위자를 특정하기 어려워져 책임추적성이 약해집니다. 따라서 <strong>개인별 고유 계정</strong>과 감사기록이 중요합니다.</li>
              </ul>
              <div class="important-box"><span class="box-title">시험 핵심</span><p><strong>Accountability = 누가 어떤 행위를 했는지 기록·추적할 수 있는 성질. 공용 계정은 책임추적성을 약화시킵니다.</strong></p></div>`
          },
          {
            id: "logical-access-reference-monitor", title: "논리적 접근통제와 Reference Monitor",
            content: `
              <h3>논리적 접근통제</h3>
              <p><strong>논리적 접근통제(Logical Access Control)</strong>는 소프트웨어와 시스템의 보안 메커니즘을 이용해 사용자·프로세스가 프로그램, 데이터베이스, 파일, 네트워크 등의 자원에 접근하는 것을 통제합니다. 식별·인증·인가·감사 기능이 운영체제, 응용프로그램, DBMS, 통신관리시스템 등에 구현될 수 있습니다.</p>
              <h3>Reference Monitor</h3>
              <p><strong>참조 모니터(Reference Monitor)</strong>는 주체가 객체에 접근하려는 모든 요청을 보안정책에 따라 중재하는 접근통제의 핵심 개념입니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>성질</th><th>설명</th></tr></thead><tbody>
                <tr><td><strong>완전한 중재</strong><br><span class="term-en">Complete Mediation</span></td><td>모든 주체의 객체 접근 요청이 반드시 참조 모니터를 거치도록 함</td></tr>
                <tr><td><strong>변조 방지</strong><br><span class="term-en">Tamperproof</span></td><td>공격자나 일반 사용자가 참조 모니터 자체를 우회·변조할 수 없어야 함</td></tr>
                <tr><td><strong>검증 가능성</strong><br><span class="term-en">Verifiable</span></td><td>정확한 동작을 분석·시험할 수 있을 정도로 충분히 작고 단순해야 함</td></tr>
              </tbody></table></div>
              <p>교재의 표현으로는 운영체제 안에서 접근통제 정책을 중재하는 <strong>Single Point</strong>로 이해할 수 있으며, 모든 접근 요청을 통과시켜 객체에 대한 접근을 통제해야 합니다.</p>
              <div class="important-box"><span class="box-title">Reference Monitor 3요소</span><p><strong>항상 호출(Complete Mediation) + 변조 불가(Tamperproof) + 검증 가능(Verifiable)</strong></p></div>`
          },
          {
            id: "access-control-requirements", title: "접근통제 요구사항과 보안 원칙",
            content: `
              <p>교재는 안전한 접근통제를 위한 핵심 요구사항으로 <strong>입력의 신뢰성, 최소 권한, 직무분리</strong>를 제시합니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>원칙</th><th>의미</th><th>시험 포인트</th></tr></thead><tbody>
                <tr><td><strong>입력의 신뢰성</strong><br><span class="term-en">Input Reliability</span></td><td>접근제어 시스템이 입력되는 사용자 정보를 신뢰할 수 있어야 한다는 요구사항</td><td>충분한 <strong>사용자 인증(Authentication)</strong> 기능이 전제되어야 함</td></tr>
                <tr><td><strong>최소 권한</strong><br><span class="term-en">Least Privilege</span></td><td>사용자가 맡은 작업을 수행하는 데 필요한 최소한의 자원과 권한만 부여</td><td>고의·실수로 자원에 가할 수 있는 피해와 권한 남용의 범위를 최소화</td></tr>
                <tr><td><strong>직무분리</strong><br><span class="term-en">Separation of Duty, SoD</span></td><td>한 개인이 전체 업무를 단독으로 장악하지 못하도록 기능·업무 단계를 둘 이상의 사람에게 나누는 원칙</td><td>오류·부정·권한남용을 예방. 공모(Collusion)는 약점이 될 수 있으며 <strong>직무순환(Job Rotation)</strong>을 함께 활용</td></tr>
              </tbody></table></div>
              <h3>Need-to-Know와 최소 권한</h3>
              <p><strong>알 필요성(Need-to-Know)</strong>은 업무 수행에 꼭 필요한 정보에만 접근하도록 제한하는 개념입니다. <strong>최소 권한 원칙(Principle of Least Privilege)</strong>과 같은 방향의 보안 원칙이며, 필요 이상으로 많은 권한을 부여하는 <strong>Maximum Privilege</strong>와 반대되는 관점입니다.</p>
              <h3>직무분리 예</h3>
              <p>한 사람이 거래의 <strong>발생 → 승인 → 수정 → 확인 → 완료</strong> 전 과정을 혼자 처리할 수 없게 서로 다른 담당자로 나누는 방식입니다. 정적 직무분리는 서로 충돌하는 역할을 동시에 맡지 못하게 하고, 동적 직무분리는 실제 업무 수행 시점에 동일인이 상충되는 단계들을 수행하지 못하게 합니다.</p>
              <div class="important-box"><span class="box-title">SECTION 08 핵심 연결</span><p><strong>Subject → Identification → Authentication → Authorization → Object 접근 → Audit/Accountability. 이 전 과정은 Input Reliability · Least Privilege · Need-to-Know · Separation of Duty 원칙으로 안전하게 통제합니다.</strong></p></div>`
          }
        ],
        content: ""
      },
      {
        id: "section-09", number: 9, title: "사용자 인증",
        subtopics: [
          {
            id: "authentication-basics", title: "인증 기본 개념과 인증요소",
            content: `
              <h3>메시지 인증과 사용자 인증</h3>
              <p><strong>메시지 인증(Message Authentication)</strong>은 전달된 메시지가 변조되지 않았는지, 순서가 바뀌거나 삭제되지 않았는지 등을 확인해 <strong>메시지의 무결성과 출처의 정당성</strong>을 확인하는 기능입니다. 암호화 방식, <strong>MAC (Message Authentication Code)</strong>, 해시함수 등을 이용할 수 있습니다.</p>
              <p><strong>사용자 인증(User Authentication)</strong>은 사용자가 주장하는 신원이 실제 그 사람인지 확인하는 과정입니다. 공개된 통신망에서는 누구나 접속을 시도할 수 있으므로 불법 접근·정보변경·정보유출을 막기 위한 핵심 절차입니다. 정상 사용자 A는 자신이 A임을 증명할 수 있어야 하고, 제3자 C는 A로 가장(Impersonation)할 수 없어야 합니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>인증요소</th><th>의미</th><th>예</th></tr></thead><tbody>
                <tr><td><strong>Type 1: 지식</strong><br><span class="term-en">Something You Know</span></td><td>사용자가 알고 있는 정보</td><td>Password, PIN</td></tr>
                <tr><td><strong>Type 2: 소유</strong><br><span class="term-en">Something You Have</span></td><td>사용자가 가지고 있는 물건·토큰</td><td>Token, Smart Card, 보안키</td></tr>
                <tr><td><strong>Type 3: 생체</strong><br><span class="term-en">Something You Are</span></td><td>사용자 자체의 신체적 특징</td><td>지문, 홍채, 얼굴</td></tr>
                <tr><td><strong>행위</strong><br><span class="term-en">Something You Do</span></td><td>사용자의 행동 특성</td><td>서명, 키 입력 패턴</td></tr>
              </tbody></table></div>
              <h3>강한 인증과 다중요소 인증</h3>
              <p><strong>2FA (Two-Factor Authentication)</strong>는 서로 다른 인증요소 중 두 가지를, <strong>MFA (Multi-Factor Authentication)</strong>는 둘 이상의 서로 다른 요소를 함께 사용합니다. 같은 종류의 비밀번호를 두 번 묻는 것은 두 요소 인증이 아닙니다. 예를 들어 ATM의 <strong>카드(소유) + PIN(지식)</strong> 조합은 대표적인 강한 인증입니다.</p>
              <div class="important-box"><span class="box-title">시험 핵심</span><p><strong>Message Authentication = 메시지 무결성·출처 확인 / User Authentication = 사용자의 신원 확인 / Strong Authentication = 서로 다른 인증요소를 결합</strong></p></div>`
          },
          {
            id: "knowledge-password", title: "지식 기반 인증과 패스워드",
            content: `
              <h3>지식 기반 인증</h3>
              <p><strong>지식 기반 인증(What You Know)</strong>은 사용자가 알고 있는 비밀정보를 검증값과 비교하는 방식입니다. 비용이 낮고 특별한 장비 없이 사용할 수 있지만, 사용자가 비밀을 잊거나 공격자가 추측·탈취할 수 있다는 약점이 있습니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>장점</th><th>단점</th></tr></thead><tbody>
                <tr><td>비용이 낮고 구현이 간단함<br>별도 인증 장치가 거의 필요 없음<br>사용자에게 익숙함</td><td>분실·망각 가능<br>사전 공격·무차별 대입 등 추측 공격에 노출<br>피싱·사회공학으로 탈취 가능<br>재사용·공유 시 피해 확대</td></tr>
              </tbody></table></div>
              <h3>패스워드 유형</h3>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>유형</th><th>특징</th></tr></thead><tbody>
                <tr><td><strong>고정 패스워드</strong><br><span class="term-en">Fixed/Reusable Password</span></td><td>같은 비밀번호를 반복 사용. 구현은 쉽지만 재사용·탈취 위험이 큼</td></tr>
                <tr><td><strong>일회용 패스워드</strong><br><span class="term-en">OTP, One-Time Password</span></td><td>한 번만 유효한 동적 패스워드. 재사용·재전송 위험을 크게 줄임</td></tr>
                <tr><td><strong>패스프레이즈</strong><br><span class="term-en">Passphrase</span></td><td>단어·문장을 조합한 긴 인증문자열. 기억하기 쉬우면서 충분한 길이·무작위성을 확보할 수 있음</td></tr>
              </tbody></table></div>
              <h3>추측 공격과 패스워드 정책</h3>
              <p>교재의 단순 추정식은 패스워드 추측 성공 가능성을 <strong>P ≈ (L × R) / S</strong>로 설명합니다. 여기서 <strong>L</strong>은 패스워드 사용기간(Lifetime), <strong>R</strong>은 공격자의 추측 속도(Rate), <strong>S</strong>는 가능한 패스워드 공간(Size)입니다. 즉 공간을 크게 하고 사용기간·허용 추측 횟수를 줄일수록 유리합니다.</p>
              <ul>
                <li>대·소문자, 숫자, 특수문자 등으로 <strong>추측하기 어려운 패스워드 공간</strong>을 확보합니다.</li>
                <li>동일 비밀번호의 공유·재사용을 피하고, 연속 인증 실패에는 <strong>시도 제한·지연·잠금</strong>을 적용합니다.</li>
                <li>유출·침해가 확인되면 비밀번호를 즉시 교체하고, 저장 시 평문 대신 안전한 <strong>Salt + 패스워드 해시/KDF</strong>를 사용합니다.</li>
              </ul>
              <div class="important-box"><span class="box-title">공격 구분</span><p><strong>Brute Force = 모든 후보 대입 / Dictionary Attack = 사전·빈출 단어 중심 대입 / Social Engineering = 사람을 속여 비밀을 획득</strong></p></div>`
          },
          {
            id: "password-protection-protocols", title: "패스워드 보호·식별 프로토콜",
            content: `
              <h3>패스워드 저장·검증 방식</h3>
              <ol>
                <li><strong>평문 저장</strong>: 사용자가 보낸 값과 저장된 원문을 비교하는 가장 단순한 방식으로, 파일 유출 시 즉시 패스워드가 노출되어 매우 위험합니다.</li>
                <li><strong>해시 저장</strong>: 패스워드 자체 대신 <strong>h(P)</strong>를 저장하고 로그인 시 입력값을 해시하여 비교합니다.</li>
                <li><strong>Salting</strong>: 사용자마다 무작위 <strong>Salt</strong>를 패스워드와 결합하여 해시합니다. 동일 패스워드라도 서로 다른 해시가 생성되어 미리 계산한 레인보우 테이블 공격을 어렵게 합니다.</li>
              </ol>
              <h3>시도-응답 개인 식별 프로토콜</h3>
              <p><strong>Challenge-Response</strong> 방식은 검증자가 매번 새로운 난수·Nonce 등의 도전값(Challenge)을 보내고, 사용자가 비밀을 이용해 응답(Response)을 계산해 보내는 방식입니다. 고정 비밀 자체를 그대로 전송하지 않고 <strong>재전송 공격(Replay Attack)</strong>을 어렵게 합니다.</p>
              <p><strong>일방향 개인 식별</strong>은 클라이언트가 서버에게 자신을 증명하는 방식이고, <strong>상호 개인 식별(Mutual Authentication)</strong>은 클라이언트와 서버가 서로의 신원을 확인합니다.</p>
              <h3>영지식 개인 식별 프로토콜</h3>
              <p><strong>ZKP (Zero-Knowledge Proof)</strong>는 증명자(Prover)가 비밀 자체를 공개하지 않고도 그 비밀을 알고 있다는 사실을 검증자(Verifier)에게 증명하는 개념입니다. 교재의 미로·동굴 예처럼 비밀을 노출하지 않고 반복적인 도전과 응답으로 지식을 증명하며, <strong>Guillou–Quisquater 계열 식별 방식</strong>이 대표적인 예로 소개됩니다.</p>
              <div class="important-box"><span class="box-title">시험 핵심</span><p><strong>Hash = 원문 비밀을 직접 저장하지 않음 / Salt = 같은 패스워드의 같은 해시를 방지 / Challenge-Response = 매회 달라지는 도전값 / Zero Knowledge = 비밀을 공개하지 않고 지식 보유만 증명</strong></p></div>`
          },
          {
            id: "ipin-possession", title: "i-PIN과 소유 기반 인증",
            content: `
              <h3>i-PIN</h3>
              <p><strong>i-PIN (Internet Personal Identification Number)</strong>은 인터넷에서 주민등록번호를 직접 사용하지 않고 본인확인기관을 통해 이용자를 확인하기 위한 대체 본인확인 수단입니다. 웹사이트에 주민등록번호를 반복 제공하는 위험을 줄이고 별도의 아이디·패스워드 등을 이용해 본인을 확인합니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>i-PIN</th><th>주민등록번호 기반 식별</th></tr></thead><tbody>
                <tr><td><strong>성격</strong></td><td>인터넷 본인확인을 위한 대체 식별·인증 수단</td><td>국가가 부여한 고정된 개인 식별번호</td></tr>
                <tr><td><strong>웹사이트 이용</strong></td><td>본인확인기관을 거쳐 확인하므로 사이트에 주민등록번호 제공을 줄일 수 있음</td><td>사이트가 번호를 직접 수집·보관하면 유출 위험이 커질 수 있음</td></tr>
                <tr><td><strong>목적</strong></td><td>주민등록번호 노출 감소·온라인 본인확인</td><td>개인 식별</td></tr>
              </tbody></table></div>
              <h3>소유 기반 인증</h3>
              <p><strong>소유 기반 인증(What You Have)</strong>은 사용자가 가지고 있는 카드·토큰·키 등의 소유 여부로 신원을 확인합니다. 운전면허증, 신분증, 암호키, 보안토큰, 메모리카드, 스마트카드 등이 예입니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>장점</th><th>단점</th></tr></thead><tbody>
                <tr><td>카드·토큰 등 익숙한 수단 사용 가능<br>소유물과 서버 검증을 결합해 지식요소보다 강하게 구성 가능<br>생체인증에 비해 저렴한 경우가 많음</td><td>분실·도난 시 인증 곤란<br>복제 가능한 매체는 위조 위험<br>발급·회수·폐기 등 자산관리 필요</td></tr>
              </tbody></table></div>`
          },
          {
            id: "smart-card-security", title: "메모리카드·스마트카드와 공격",
            content: `
              <h3>메모리카드와 스마트카드</h3>
              <p><strong>메모리카드(Memory Card)</strong>는 정보를 저장할 수 있으나 자체 처리능력이 제한적이며, 자기띠(Magnetic Stripe) 카드처럼 저장된 정보를 읽는 형태가 대표적입니다.</p>
              <p><strong>스마트카드(Smart Card)</strong>는 마이크로프로세서, 운영체제, 보안모듈, 메모리 등을 갖춰 카드 내부에서 정보를 처리할 수 있습니다. 접점이 있는 <strong>접촉식(Contact)</strong>과 RF 등을 이용하는 <strong>비접촉식(Contactless)</strong>이 있으며, 카드 내부에 암호키를 보호하고 인증·암호 연산을 수행할 수 있습니다.</p>
              <h3>스마트카드 공격기법</h3>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>공격</th><th>설명</th></tr></thead><tbody>
                <tr><td><strong>소프트웨어 공격</strong><br><span class="term-en">Software Attack</span></td><td>애플리케이션·프로토콜의 오류나 취약한 명령처리를 악용</td></tr>
                <tr><td><strong>마이크로 프로빙</strong><br><span class="term-en">Microprobing</span></td><td>칩을 물리적으로 분석·탐침하여 내부 신호·메모리에 접근</td></tr>
                <tr><td><strong>도청</strong><br><span class="term-en">Eavesdropping</span></td><td>카드와 리더 사이 또는 내부 처리 중 발생하는 신호를 관찰</td></tr>
                <tr><td><strong>장애 유발</strong><br><span class="term-en">Fault Induction</span></td><td>전압·클럭·온도·레이저 등 비정상 조건으로 오류를 유도해 비밀정보를 추론</td></tr>
                <tr><td><strong>부채널 공격</strong><br><span class="term-en">Side-Channel Attack</span></td><td>정상 연산 과정의 시간·전력·전자기파 같은 물리적 누설을 분석</td></tr>
              </tbody></table></div>
              <p><strong>DPA (Differential Power Analysis, 차분 전력 분석)</strong>는 암호연산 중 여러 전력 소비 흔적을 수집하고 통계적으로 비교하여 내부 비밀키를 추정하는 대표적인 부채널 공격입니다.</p>
              <div class="important-box"><span class="box-title">구분 암기</span><p><strong>Fault Attack = 일부러 오동작을 유도 / Side Channel = 정상 동작 중 새어 나오는 정보 관찰 / DPA = 여러 전력 흔적의 통계 분석</strong></p></div>`
          },
          {
            id: "otp-skey", title: "OTP·동기화 방식·S/KEY",
            content: `
              <h3>일회용 패스워드</h3>
              <p><strong>OTP (One-Time Password)</strong>는 매 인증마다 한 번만 유효한 동적 패스워드를 생성해 사용하는 방식입니다. 동일 비밀번호를 반복 전송하지 않으므로 고정 패스워드보다 도청·재전송 공격에 강합니다. 토큰과 인증서버가 공유하는 비밀값과 <strong>이벤트·시간·Challenge</strong> 등의 입력을 이용해 값을 생성합니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>방식</th><th>동작</th><th>핵심 장단점</th></tr></thead><tbody>
                <tr><td><strong>질의-응답</strong><br><span class="term-en">Challenge-Response / Asynchronous</span></td><td>서버가 Challenge를 제시하고 토큰이 비밀키로 Response를 계산</td><td>별도 시간·카운터 동기화 부담이 작지만 질의·응답 절차가 필요</td></tr>
                <tr><td><strong>이벤트 동기화</strong><br><span class="term-en">Event/Counter Synchronous</span></td><td>인증할 때마다 양쪽 카운터를 증가시켜 같은 이동값으로 OTP 생성</td><td>구조가 단순하지만 버튼 오입력·누락으로 카운터가 어긋나면 재동기화 필요</td></tr>
                <tr><td><strong>시간 동기화</strong><br><span class="term-en">Time Synchronous</span></td><td>공유 비밀과 현재 시간 구간을 이용해 OTP 생성</td><td>입력이 간단하지만 토큰과 서버의 시계 차이를 관리해야 함</td></tr>
              </tbody></table></div>
              <p>현대 표준에서는 <strong>HOTP (HMAC-Based One-Time Password)</strong>가 카운터 기반 이동값을, <strong>TOTP (Time-Based One-Time Password)</strong>가 시간 기반 이동값을 사용합니다.</p>
              <h3>S/KEY와 Lamport 해시 체인</h3>
              <p><strong>S/KEY</strong>는 Bellcore에서 개발된 일회용 패스워드 방식으로, 일방향 해시함수를 반복 적용한 <strong>Lamport Hash Chain</strong>을 이용합니다. 초기 비밀값에 해시를 여러 번 적용해 마지막 값을 서버에 등록하고, 로그인할 때마다 이전 단계의 값을 역순으로 제시합니다. 서버는 제출된 값에 해시를 한 번 적용해 현재 저장값과 비교한 뒤 저장값을 갱신합니다.</p>
              <ol>
                <li>클라이언트와 서버가 비밀·Seed와 반복 횟수 n을 설정</li>
                <li>클라이언트가 반복 해시하여 <strong>hⁿ(P)</strong>를 만들고 서버는 마지막 검증값을 보관</li>
                <li>첫 로그인은 <strong>hⁿ⁻¹(P)</strong>, 다음은 <strong>hⁿ⁻²(P)</strong>처럼 역순 사용</li>
                <li>정해진 횟수를 모두 사용하면 새로운 체인으로 초기화</li>
              </ol>
              <div class="important-box"><span class="box-title">시험 핵심</span><p><strong>OTP = 한 번만 유효 / HOTP = Counter / TOTP = Time / S/KEY = 일방향 해시 체인을 뒤에서부터 사용</strong></p></div>`
          },
          {
            id: "biometrics", title: "생체인증과 평가 지표",
            content: `
              <h3>생체인증의 개념</h3>
              <p><strong>생체인증(Biometrics)</strong>은 개인의 생리적·행동적 특성을 측정해 신원을 확인하는 <strong>What You Are/Do</strong> 계열 인증입니다. 센서로 생체 데이터를 획득하고 특징을 추출해 <strong>Biometric Template</strong>을 생성한 뒤 저장된 템플릿과 비교합니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>범주</th><th>대표 예</th><th>특징</th></tr></thead><tbody>
                <tr><td><strong>생리적 특징</strong><br><span class="term-en">Physiological</span></td><td>지문, 홍채, 망막, 얼굴, 손 형상 등</td><td>신체 자체의 비교적 안정적인 특징 사용</td></tr>
                <tr><td><strong>행동적 특징</strong><br><span class="term-en">Behavioral</span></td><td>서명, 음성·발성 특성, 키 입력 패턴, 걸음걸이 등</td><td>행동 습관을 측정하므로 시간·상태에 따른 변동 가능</td></tr>
              </tbody></table></div>
              <h3>생체인증 기술 평가항목</h3>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>항목</th><th>질문</th></tr></thead><tbody>
                <tr><td><strong>보편성</strong> Universality</td><td>모든 사람이 해당 생체특징을 가지고 있는가?</td></tr>
                <tr><td><strong>유일성</strong> Uniqueness</td><td>사람마다 충분히 다른 특징인가?</td></tr>
                <tr><td><strong>지속성</strong> Permanence</td><td>시간이 지나도 안정적으로 유지되는가?</td></tr>
                <tr><td><strong>획득성</strong> Collectability</td><td>정량적인 측정·수집이 가능한가?</td></tr>
                <tr><td><strong>성능</strong> Performance</td><td>정확도·속도·자원 측면에서 실용적인가?</td></tr>
                <tr><td><strong>수용성</strong> Acceptability</td><td>사용자가 거부감 없이 받아들일 수 있는가?</td></tr>
                <tr><td><strong>반기만성</strong> Anti-Circumvention</td><td>위조·우회·스푸핑에 견딜 수 있는가?</td></tr>
              </tbody></table></div>
              <h3>오류율과 임계값</h3>
              <ul>
                <li><strong>FRR (False Rejection Rate)</strong>: 정당한 사용자를 거부하는 비율. 교재에서는 <strong>Type I Error</strong>로 분류합니다.</li>
                <li><strong>FAR (False Acceptance Rate)</strong>: 비인가 사용자를 정상 사용자로 잘못 받아들이는 비율. 교재에서는 <strong>Type II Error</strong>로 분류합니다.</li>
                <li><strong>EER/CER (Equal Error Rate / Crossover Error Rate)</strong>: FAR과 FRR이 같아지는 지점. 일반적으로 <strong>값이 낮을수록 정확도가 높음</strong>을 의미합니다.</li>
              </ul>
              <p>임계값을 엄격하게 하면 보안은 강화되지만 정상 사용자를 거부하는 FRR이 증가할 수 있고, 임계값을 느슨하게 하면 편의성은 높아지지만 FAR이 증가할 수 있어 서로 상충합니다.</p>
              <div class="important-box"><span class="box-title">장단점</span><p><strong>장점: 분실·망각이 어렵고 타인에게 양도하기 어려움 / 단점: 오인식 가능, 센서·환경 영향, 개인정보·템플릿 유출 문제, 초기 장비 비용과 위조 방지 필요</strong></p></div>`
          },
          {
            id: "sso-iam", title: "SSO·EAM·IAM",
            content: `
              <h3>통합 인증 체계</h3>
              <p><strong>SSO (Single Sign-On)</strong>는 한 번의 로그인·인증으로 서로 연계된 여러 정보시스템과 애플리케이션에 추가 로그인 없이 접근할 수 있게 하는 통합 인증 방식입니다. 인증정보를 한곳에서 확인하고 각 서비스에 인증 결과를 전달해 사용자 편의성과 중앙 통제를 높입니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>구성요소</th><th>역할</th></tr></thead><tbody>
                <tr><td><strong>사용자</strong></td><td>ID/Password 등 로그인 정보 제공</td></tr>
                <tr><td><strong>인증 서버</strong><br><span class="term-en">Authentication Server</span></td><td>사용자 신원을 검증하고 통합 인증 수행</td></tr>
                <tr><td><strong>LDAP</strong><br><span class="term-en">Lightweight Directory Access Protocol</span></td><td>사용자·계정·권한 등의 디렉터리 정보 조회·연동</td></tr>
                <tr><td><strong>SSO Agent</strong></td><td>각 서비스에서 인증 토큰·세션을 수신·검증해 접근 연결</td></tr>
              </tbody></table></div>
              <h3>적용 효과와 장단점</h3>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>장점</th><th>단점</th></tr></thead><tbody>
                <tr><td>여러 계정·패스워드 관리 비용 감소<br>한 번의 인증으로 사용자 편의성 증가<br>인증·권한을 중앙에서 효율적으로 관리<br>정책 일관성·감사 편의성 향상</td><td>중앙 SSO 서버 장애가 <strong>SPoF (Single Point of Failure)</strong>가 될 수 있음<br>SSO 자격증명 탈취 시 여러 서비스가 동시에 위험<br>중앙 시스템 공격의 영향 범위가 큼<br>구축·연동·권한관리 복잡성 증가 가능</td></tr>
              </tbody></table></div>
              <p>표준화된 통합인증에서는 <strong>SAML (Security Assertion Markup Language)</strong>처럼 인증·속성·권한 정보를 시스템 사이에서 전달하는 표준을 사용할 수 있습니다. SAML 2.0은 XML 기반 Assertion을 이용해 <strong>IdP (Identity Provider)</strong>의 인증 결과를 <strong>SP (Service Provider)</strong>가 신뢰하는 웹 SSO에 널리 사용됩니다.</p>
              <h3>EAM과 IAM</h3>
              <ul>
                <li><strong>EAM (Extranet Access Management)</strong>: 인터넷·엑스트라넷 환경에서 인증뿐 아니라 여러 웹·업무 자원에 대한 <strong>접근권한과 정책</strong>을 중앙 관리하는 확장된 접근관리 개념</li>
                <li><strong>IAM (Identity and Access Management)</strong>: 사용자 계정의 생성·변경·폐기와 역할·권한·접근정책을 통합 관리하는 <strong>식별/접근 관리</strong></li>
              </ul>
              <div class="important-box"><span class="box-title">시험 연결</span><p><strong>SSO = 한 번 인증으로 여러 서비스 / SAML = 시스템 간 인증·권한 Assertion 교환 / EAM = 기업 외부까지 포함한 접근관리 / IAM = 계정·신원·권한의 생명주기 통합관리</strong></p></div>`
          },
          {
            id: "kerberos-basics", title: "Kerberos 개요와 구성요소",
            content: `
              <h3>Kerberos</h3>
              <p><strong>Kerberos</strong>는 MIT의 Project Athena에서 개발된 <strong>대칭키 기반 네트워크 인증 프로토콜</strong>입니다. 신뢰하는 제3자인 <strong>KDC (Key Distribution Center)</strong>가 발급하는 <strong>Ticket</strong>을 이용하여 개방된 네트워크에서 클라이언트와 서버를 인증하며, 사용자는 매 서비스마다 패스워드를 다시 전송하지 않고 SSO 형태로 서비스를 이용할 수 있습니다.</p>
              <ul>
                <li><strong>확장성·투명성·안전성</strong>을 목표로 하며 다수 서비스에 동일한 계정 기반 인증을 제공할 수 있습니다.</li>
                <li>클라이언트와 서비스가 서로를 직접 신뢰하기보다 <strong>KDC를 신뢰</strong>하고 KDC가 만든 Ticket을 사용합니다.</li>
                <li>패스워드 자체를 네트워크에 반복 전송하지 않고 <strong>세션키·Ticket·Timestamp/Authenticator</strong>를 사용합니다.</li>
              </ul>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>구성요소</th><th>역할</th></tr></thead><tbody>
                <tr><td><strong>KDC</strong><br><span class="term-en">Key Distribution Center</span></td><td>Kerberos의 핵심 신뢰기관. 보통 <strong>AS + TGS</strong> 역할을 포함</td></tr>
                <tr><td><strong>AS</strong><br><span class="term-en">Authentication Server</span></td><td>사용자 초기 인증 후 TGS 이용에 필요한 Ticket을 발급</td></tr>
                <tr><td><strong>TGS</strong><br><span class="term-en">Ticket Granting Server</span></td><td>TGT를 확인하고 특정 서비스용 Service Ticket을 발급</td></tr>
                <tr><td><strong>TGT</strong><br><span class="term-en">Ticket-Granting Ticket</span></td><td>TGS에게 서비스 Ticket을 요청할 때 사용하는 Ticket</td></tr>
                <tr><td><strong>Ticket</strong></td><td>클라이언트와 서비스 서버 사이의 세션키·신원·유효시간 등의 정보를 서버 비밀키로 보호한 인증자료</td></tr>
                <tr><td><strong>Principal</strong></td><td>Kerberos가 식별·인증하는 사용자 또는 서비스 주체</td></tr>
              </tbody></table></div>`
          },
          {
            id: "kerberos-flow-security", title: "Kerberos 절차·취약점·버전 4/5",
            content: `
              <h3>Kerberos 인증 절차</h3>
              <ol>
                <li>사용자가 로그인하고 클라이언트가 <strong>AS</strong>에 초기 인증을 요청합니다.</li>
                <li>AS는 인증 후 클라이언트-TGS 세션키와 <strong>TGT</strong>를 발급합니다. 사용자의 패스워드 자체가 네트워크를 돌아다니는 대신 패스워드에서 유도된 비밀키가 복호화·검증에 사용됩니다.</li>
                <li>클라이언트는 TGT와 <strong>Authenticator</strong>를 <strong>TGS</strong>에 보내 원하는 서비스의 Ticket을 요청합니다.</li>
                <li>TGS는 검증 후 클라이언트-서비스 서버 세션키와 <strong>Service Ticket</strong>을 발급합니다.</li>
                <li>클라이언트는 Service Ticket과 Authenticator를 실제 서비스 서버에 제시해 인증받습니다.</li>
                <li>필요하면 서버도 응답을 보내 <strong>상호 인증(Mutual Authentication)</strong>을 수행하며, 이후 세션키로 안전한 통신을 구성합니다.</li>
              </ol>
              <h3>장점과 취약점</h3>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>장점</th><th>취약점·주의점</th></tr></thead><tbody>
                <tr><td>패스워드를 서비스마다 전송하지 않음<br>Ticket 기반 SSO<br>상호 인증 지원<br>세션키와 Timestamp로 재전송 공격 완화</td><td>KDC 장애 시 전체 인증이 영향을 받는 <strong>SPoF</strong><br>약한 사용자 비밀번호는 사전·추측 공격 위험<br>Ticket·세션키 탈취 시 유효시간 동안 악용 가능<br>KDC 자체가 공격받으면 영향이 매우 큼<br>Timestamp 사용으로 클라이언트·서버의 <strong>시간 동기화</strong> 필요</td></tr>
              </tbody></table></div>
              <h3>Kerberos Version 4와 Version 5</h3>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>Version 4</th><th>Version 5</th></tr></thead><tbody>
                <tr><td><strong>암호 알고리즘 의존성</strong></td><td>DES에 강하게 의존</td><td>암호 유형을 식별해 다양한 알고리즘 사용 가능</td></tr>
                <tr><td><strong>네트워크 주소</strong></td><td>IPv4 중심의 주소 표현에 의존</td><td>주소 유형·길이를 일반화해 여러 네트워크 환경 지원</td></tr>
                <tr><td><strong>Ticket 수명</strong></td><td>5분 단위·8비트 값으로 표현하여 최대 약 <strong>1,280분</strong>으로 제한</td><td>시작·종료 시간을 이용해 보다 유연한 수명 설정</td></tr>
                <tr><td><strong>기능</strong></td><td>초기 규격의 제약 존재</td><td>전달(Forwardable)·갱신(Renewable) 등 Ticket 기능과 프로토콜 표현 확장</td></tr>
              </tbody></table></div>
              <div class="important-box"><span class="box-title">시험 핵심</span><p><strong>KDC = AS + TGS / TGT는 TGS 이용권 / Service Ticket은 실제 서비스 이용권 / Kerberos는 대칭키·Ticket·Timestamp 기반이며 KDC 집중과 시간 동기화가 핵심 약점</strong></p></div>`
          },
          {
            id: "sesame", title: "SESAME",
            content: `
              <h3>SESAME</h3>
              <p><strong>SESAME (Secure European System for Applications in a Multi-vendor Environment)</strong>은 Kerberos의 한계를 보완하기 위해 개발된 분산 환경용 인증·권한관리 구조입니다. Kerberos처럼 중앙 인증 개념을 사용하면서 <strong>공개키 암호</strong>와 권한정보를 결합하여 상호운용성과 접근통제를 강화합니다.</p>
              <ul>
                <li>대칭키 방식뿐 아니라 <strong>공개키 기반 인증</strong>을 활용하여 Kerberos의 비밀키 공유·관리 문제를 보완합니다.</li>
                <li><strong>PAC (Privilege Attribute Certificate)</strong>에 사용자의 역할·그룹·권한 같은 특권 정보를 담아, 단순 신원 인증을 넘어 서비스 접근권한까지 전달합니다.</li>
                <li>인증과 인가(Authorization)를 연계하여 다중 벤더·분산 환경에서 자원 접근을 통제하는 것을 목표로 합니다.</li>
              </ul>
              <div class="important-box"><span class="box-title">SECTION 09 핵심 연결</span><p><strong>Password/Challenge → OTP·Smart Card·Biometrics로 인증 강화 → SSO로 여러 서비스에 인증결과 연계 → Kerberos는 KDC·Ticket 기반 SSO → SESAME는 공개키와 PAC를 이용해 인증+권한관리까지 확장</strong></p></div>`
          }
        ],
        content: ""
      },
      {
        id: "section-10", number: 10, title: "접근통제 보안 모델",
        subtopics: [
          {
            id: "mandatory-access-control", title: "강제적 접근통제(MAC)",
            content: `
              <h3>강제적 접근통제(MAC, Mandatory Access Control)</h3>
              <p><strong>MAC</strong>은 객체의 소유자가 임의로 권한을 바꿀 수 없고, 시스템이 정한 <strong>보안 레이블(Security Label)</strong>과 사용자의 <strong>보안 취급인가(Security Clearance)</strong>를 비교하여 접근을 강제적으로 통제하는 방식입니다.</p>
              <ul>
                <li><strong>Security Level</strong>: 자원이 얼마나 민감하고 중요한지를 나타내는 보안 등급·레이블</li>
                <li><strong>Security Clearance</strong>: 사용자가 어느 보안 수준까지 접근할 수 있는지를 나타내는 취급인가</li>
                <li>전통적인 MAC은 <strong>MLS (Multilevel Security)</strong> 정책에 기반하며, 서로 다른 분류 수준의 정보를 같은 시스템에서 보호합니다.</li>
                <li>정책은 보안관리자가 중앙에서 정하고 운영체제가 집행합니다. 사용자는 자신의 판단으로 권한을 다른 사용자에게 넘길 수 없습니다.</li>
                <li>한 객체의 정보를 다른 객체로 복사할 때에도 원래 정보에 적용되던 MAC의 제약사항이 새 객체에 전파됩니다.</li>
                <li>정책이 전체 주체에 일관되게 적용되므로 특정 사용자·객체만 예외적으로 임의 설정하기 어렵습니다.</li>
              </ul>
              <h3>접근통제 기술 유형</h3>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>유형</th><th>대표 방식</th><th>핵심</th></tr></thead><tbody>
                <tr><td><strong>Mandatory</strong></td><td>Rule-based, Administratively directed</td><td>시스템·관리자가 정책을 강제</td></tr>
                <tr><td><strong>Discretionary</strong></td><td>Identity, User directed</td><td>사용자 신원과 객체 소유자의 재량</td></tr>
                <tr><td><strong>Non-discretionary</strong></td><td>Role-based, Task-based, Lattice-based</td><td>역할·업무·격자 등 조직 정책에 따라 부여</td></tr>
                <tr><td><strong>기타</strong></td><td>Content-dependent, Restricted Interface</td><td>내용·인터페이스 조건 등에 따라 통제</td></tr>
              </tbody></table></div>
              <h3>한계</h3>
              <p>기능이 매우 제한적이고 관리 부담과 비용이 크며 사용자 친화성이 떨어질 수 있습니다. 따라서 전통적으로 군·정부처럼 <strong>엄격한 다중등급 보안</strong>이 필요한 환경에 적합하며, 일반 상업 환경에서는 적용이 까다로울 수 있습니다.</p>
              <div class="important-box"><span class="box-title">시험 핵심</span><p><strong>MAC = 시스템/관리자 중심 + Security Label ↔ Clearance 비교 + 사용자의 임의 권한 변경 불가 + MLS</strong></p></div>`
          },
          {
            id: "discretionary-access-control", title: "임의적 접근통제(DAC)",
            content: `
              <h3>임의적 접근통제(DAC, Discretionary Access Control)</h3>
              <p><strong>DAC</strong>은 객체의 소유자 또는 권한을 가진 주체가 자신의 재량으로 다른 주체에게 접근권한을 부여·변경·회수할 수 있는 <strong>신원 기반(Identity-based)</strong> 접근통제 방식입니다. 초기 형식화에는 <strong>Access Control Matrix</strong>가 사용되었습니다.</p>
              <ul>
                <li>주체의 <strong>신원(Identity)</strong>을 기준으로 접근 여부를 결정합니다.</li>
                <li>MAC의 중앙집중적 관리와 달리 권한 관리가 사용자·객체 소유자 쪽으로 분산될 수 있어 일반 목적 운영체제에서 유연하게 쓰입니다.</li>
                <li>Windows·Linux·UNIX 계열의 파일/디렉터리 권한처럼 사용자의 신원과 권한 목록을 이용하는 방식이 대표적입니다.</li>
                <li>접근권한 변경 행위는 <strong>Audit Log</strong>로 기록하고, 정책대로 통제되는지 지속적으로 검토할 필요가 있습니다.</li>
              </ul>
              <h3>장점과 단점</h3>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>장점</th><th>단점·위험</th></tr></thead><tbody>
                <tr><td>객체별로 세밀한 권한 설정 가능<br>소유자가 다른 사용자에게 권한을 쉽게 부여·회수 가능<br>유연하고 일반 환경에 적용하기 쉬움</td><td>사용자가 직접 권한을 관리하므로 전체 정책의 일관성이 약해질 수 있음<br>소유권·권한 위임이 바뀔 때 관리가 복잡함<br>위임된 권한이 의도와 다르게 확산될 수 있음<br><strong>Trojan Horse</strong> 같은 프로그램이 사용자의 권한을 악용할 위험</td></tr>
              </tbody></table></div>
              <div class="important-box"><span class="box-title">구분 암기</span><p><strong>MAC = 관리자/시스템이 강제 / DAC = 객체 소유자의 재량 + 사용자 신원 기반</strong></p></div>`
          },
          {
            id: "access-control-implementations", title: "접근통제 행렬·ACL·Capability",
            content: `
              <h3>Access Control Matrix</h3>
              <p><strong>접근통제 행렬(Access Control Matrix)</strong>은 <strong>행(Row)=주체, 열(Column)=객체, 셀(Cell)=접근권한</strong>으로 주체와 객체의 권한 관계를 표현합니다. 개념은 명확하지만 실제 시스템은 가능한 주체×객체 조합에 비해 권한이 없는 셀이 많아 <strong>희소 행렬</strong>이 되므로 그대로 저장하면 공간 효율이 떨어집니다.</p>
              <h3>Capability List</h3>
              <p><strong>자격 목록(Capability List / Capability Table / Capability Ticket)</strong>은 <strong>주체 중심</strong>으로, 한 주체가 접근할 수 있는 <strong>객체와 해당 권한</strong>을 묶어 관리합니다.</p>
              <ul>
                <li>권한관계의 <strong>행(Row)</strong>에 가까운 관점입니다.</li>
                <li>Capability는 객체와 권한을 나타내는 위조하기 어려운 토큰·참조로 이해할 수 있으며, 시스템 정책에 따라 전달 가능 여부를 통제해야 합니다.</li>
                <li>Capability 기반 시스템은 주체가 보유한 Capability를 제시하여 객체에 대한 권한을 증명합니다.</li>
              </ul>
              <h3>ACL</h3>
              <p><strong>ACL (Access Control List)</strong>은 <strong>객체 중심</strong>으로, 특정 객체에 대해 어떤 주체가 어떤 권한을 갖는지 목록으로 저장합니다. 권한관계의 <strong>열(Column)</strong>에 가까운 관점이며 파일·디렉터리 권한 관리에서 널리 사용됩니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>구현</th><th>기준</th><th>질문</th></tr></thead><tbody>
                <tr><td><strong>Access Control Matrix</strong></td><td>주체 × 객체 전체 관계</td><td>누가 무엇에 어떤 권한을 갖는가?</td></tr>
                <tr><td><strong>Capability List</strong></td><td>주체 중심 · Row</td><td>이 사용자가 어떤 객체들을 사용할 수 있는가?</td></tr>
                <tr><td><strong>ACL</strong></td><td>객체 중심 · Column</td><td>이 객체를 누가 어떤 권한으로 사용할 수 있는가?</td></tr>
              </tbody></table></div>
              <div class="important-box"><span class="box-title">시험 핵심</span><p><strong>Capability = 주체 중심 / ACL = 객체 중심. Access Control Matrix를 실제로 저장할 때 행·열 관점으로 나눈 형태로 이해하면 쉽습니다.</strong></p></div>`
          },
          {
            id: "role-based-access-control", title: "역할기반 접근통제(RBAC)",
            content: `
              <h3>RBAC (Role-Based Access Control)</h3>
              <p><strong>RBAC</strong>은 사용자 개인이 아니라 조직의 <strong>역할(Role)</strong>에 권한을 부여하고, 사용자를 그 역할에 할당하는 비임의적 접근통제 방식입니다. 업무 기능·직무·책임을 기준으로 권한을 묶기 때문에 조직 환경의 중앙 권한관리에 적합합니다.</p>
              <ul>
                <li><strong>사용자 ↔ 역할</strong>과 <strong>역할 ↔ 권한</strong>을 분리하여 관리합니다.</li>
                <li>한 사용자가 여러 역할을 가질 수 있고 하나의 역할에 여러 사용자가 속할 수 있어 <strong>다대다 관계</strong>가 가능합니다.</li>
                <li>직무가 바뀌면 개별 객체의 권한을 일일이 수정하기보다 역할 할당을 변경하여 관리할 수 있습니다.</li>
                <li>역할 설계에 <strong>최소 권한(Least Privilege)</strong>과 <strong>직무분리(Separation of Duty)</strong>를 반영하기 쉽습니다.</li>
              </ul>
              <h3>Authorization Creep</h3>
              <p>사용자의 직무·부서가 바뀌었는데 기존 권한을 회수하지 않고 새 권한만 계속 추가하면 불필요한 권한이 누적되는 <strong>Authorization Creep(권한 누적)</strong>이 발생합니다. 정기적인 권한 검토와 역할 재조정이 필요합니다.</p>
              <h3>MAC · DAC · RBAC 비교</h3>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>항목</th><th>MAC</th><th>DAC</th><th>RBAC</th></tr></thead><tbody>
                <tr><td><strong>권한 결정 기준</strong></td><td>Security Label · Clearance</td><td>사용자 신원·객체 소유자</td><td>역할(Role)·직무</td></tr>
                <tr><td><strong>권한 관리 주체</strong></td><td>System / 중앙 관리자</td><td>Data Owner</td><td>Central Authority / 관리자</td></tr>
                <tr><td><strong>정책 성격</strong></td><td>강제적·Rule-based</td><td>임의적·Identity/User-directed</td><td>비임의적·Role-based</td></tr>
                <tr><td><strong>장점</strong></td><td>중앙집중·정책 일관성</td><td>유연·권한 부여 용이</td><td>관리 용이·최소권한·직무분리</td></tr>
                <tr><td><strong>대표 적용</strong></td><td>MLS·군/정부 등</td><td>ACL·일반 OS</td><td>기업 조직·업무 역할</td></tr>
              </tbody></table></div>
              <div class="important-box"><span class="box-title">한 줄 암기</span><p><strong>MAC = 등급 / DAC = 신원·소유자 / RBAC = 역할</strong></p></div>`
          },
          {
            id: "bell-lapadula", title: "BLP 기밀성 모델",
            content: `
              <h3>Bell–LaPadula Model (BLP)</h3>
              <p><strong>BLP (Bell–LaPadula Confidentiality Model)</strong>는 기밀성 중심의 대표적인 <strong>MAC·MLS</strong> 보안 모델입니다. 시스템을 보안 상태들의 집합과 안전한 상태전이로 표현하는 <strong>State Machine Model</strong>이며, 정보가 높은 기밀등급에서 낮은 등급으로 누출되는 것을 막는 데 초점을 둡니다.</p>
              <h3>보안 규칙</h3>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>규칙</th><th>핵심</th><th>허용 방향</th></tr></thead><tbody>
                <tr><td><strong>Simple Security Property</strong><br><span class="term-en">ss-property</span></td><td><strong>No Read Up</strong>: 자신의 Clearance보다 높은 등급의 객체를 읽을 수 없음</td><td>읽기: 같거나 낮은 등급</td></tr>
                <tr><td><strong>*-Property</strong><br><span class="term-en">Star Property</span></td><td><strong>No Write Down</strong>: 자신의 등급보다 낮은 객체에 쓸 수 없음</td><td>쓰기: 같거나 높은 등급</td></tr>
                <tr><td><strong>Strong *-Property</strong></td><td>읽기·쓰기를 동일 보안등급 사이로 제한하는 강한 규칙</td><td>읽기·쓰기: 같은 등급</td></tr>
              </tbody></table></div>
              <h3>Dominance</h3>
              <p>보안 레벨은 단순 등급뿐 아니라 범주(Category/Compartment)를 함께 고려할 수 있습니다. 한 보안 레벨이 다른 레벨을 <strong>지배(Dominate)</strong>하려면 일반적으로 <strong>등급이 같거나 높고, 상대가 요구하는 범주를 모두 포함</strong>해야 합니다.</p>
              <h3>트로이목마 방어와 한계</h3>
              <p>높은 등급 사용자가 낮은 등급 파일을 읽는 것은 가능하지만, 그 내용을 낮은 등급으로 다시 쓰는 것은 <strong>No Write Down</strong>에 의해 막히므로 트로이목마를 통한 기밀정보 유출을 제한할 수 있습니다.</p>
              <ul>
                <li>목표가 <strong>기밀성</strong>이므로 데이터의 정확성·신뢰성을 보장하는 <strong>무결성</strong> 문제는 직접 해결하지 않습니다.</li>
                <li>낮은 등급 주체가 높은 등급 객체에 쓰는 것이 허용될 수 있어 높은 등급 데이터가 오염될 수 있습니다.</li>
                <li>공유 메모리·네트워크 자원 등 정상 통로 밖의 <strong>Covert Channel(은닉 채널)</strong>을 이용한 정보 유출까지 완전히 해결하지는 못합니다.</li>
              </ul>
              <div class="important-box"><span class="box-title">BLP 암기</span><p><strong>기밀성 = No Read Up + No Write Down. 정보는 아래 → 위 방향으로만 흐르게 제한합니다.</strong></p></div>`
          },
          {
            id: "biba-integrity-model", title: "Biba 무결성 모델",
            content: `
              <h3>Biba Integrity Model</h3>
              <p><strong>Biba</strong>는 BLP 이후 제안된 대표적인 <strong>무결성 중심 MAC 모델</strong>입니다. BLP와 반대로 낮은 신뢰 수준의 데이터가 높은 무결성 영역을 오염시키는 것을 막는 데 초점을 둡니다.</p>
              <h3>보안 규칙</h3>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>규칙</th><th>핵심</th><th>의미</th></tr></thead><tbody>
                <tr><td><strong>Simple Integrity Property</strong></td><td><strong>No Read Down</strong></td><td>낮은 무결성 객체를 읽지 않아 오염을 방지</td></tr>
                <tr><td><strong>Integrity *-Property</strong></td><td><strong>No Write Up</strong></td><td>낮은 무결성 주체가 높은 무결성 객체를 수정하지 못하게 함</td></tr>
                <tr><td><strong>Invocation Property</strong></td><td><strong>No Invoke Up</strong></td><td>낮은 무결성 주체가 자신보다 높은 무결성 주체·프로그램을 호출하지 못하게 함</td></tr>
              </tbody></table></div>
              <p>즉 Biba에서는 신뢰도가 낮은 데이터가 위쪽 무결성 수준으로 올라가 중요한 데이터를 오염시키는 흐름을 차단합니다.</p>
              <div class="important-box"><span class="box-title">BLP ↔ Biba 반대</span><p><strong>BLP(기밀성): No Read Up / No Write Down ↔ Biba(무결성): No Read Down / No Write Up</strong></p></div>`
          },
          {
            id: "clark-wilson", title: "Clark-Wilson 무결성 모델",
            content: `
              <h3>Clark-Wilson Integrity Model</h3>
              <p><strong>Clark-Wilson</strong>은 상업·금융 환경에서의 데이터 무결성을 위해 제안된 <strong>트랜잭션 기반 무결성 모델</strong>입니다. Biba보다 실제 업무 절차에 가까우며, 사용자가 중요 데이터를 마음대로 직접 수정하지 않고 검증된 절차를 통해서만 변경하도록 합니다.</p>
              <h3>Well-Formed Transaction</h3>
              <ul>
                <li><strong>TP (Transformation Procedure)</strong>: 입금·인출처럼 데이터 상태를 정해진 규칙대로 변경하는 검증된 프로그램·절차</li>
                <li><strong>CDI (Constrained Data Item)</strong>: 무결성이 보호되어야 하며 TP를 통해서만 수정하도록 제한된 중요 데이터</li>
                <li>올바른 트랜잭션은 CDI를 한 <strong>일관된(Well-formed)</strong> 상태에서 다른 일관된 상태로 변경해야 합니다.</li>
              </ul>
              <h3>무결성 모델의 목적</h3>
              <ol>
                <li>허가되지 않은 사용자의 데이터 수정을 예방</li>
                <li>허가된 사용자의 부적절한 수정을 예방 — <strong>직무분리(Separation of Duty)</strong>와 업무 분담 활용</li>
                <li><strong>내부·외부 일관성</strong>을 유지 — Well-Formed Transaction으로 보장</li>
              </ol>
              <p>교재 관점에서 Biba는 주로 첫 번째 목표에 초점을 두는 반면, Clark-Wilson은 업무 절차·직무분리를 이용해 세 목표를 함께 다루는 모델로 구분합니다.</p>
              <div class="important-box"><span class="box-title">시험 핵심</span><p><strong>Clark-Wilson = 상업 환경 + 무결성 + Well-Formed Transaction + TP/CDI + Separation of Duty</strong></p></div>`
          },
          {
            id: "chinese-wall-and-other-models", title: "Chinese Wall·정보흐름·상태기계",
            content: `
              <h3>Chinese Wall Model (Brewer–Nash Model)</h3>
              <p><strong>Chinese Wall</strong>은 상업 환경에서 <strong>이해 충돌(Conflict of Interest, COI)</strong>을 방지하기 위한 동적 접근통제 모델입니다. 사용자의 <strong>과거 접근 이력</strong>에 따라 이후 접근 가능 대상이 달라집니다.</p>
              <ul>
                <li>처음에는 여러 기업의 정보에 접근할 수 있지만, 특정 기업의 정보에 접근한 뒤에는 <strong>같은 이해충돌 집합(COI Class)의 경쟁 기업</strong> 정보 접근이 제한됩니다.</li>
                <li>서로 이해충돌 관계가 아닌 다른 업종·집합의 정보에는 접근할 수 있습니다.</li>
                <li>금융·투자·컨설팅 환경에서 고객 기업 간 비밀정보 유출과 이해충돌을 막는 예로 자주 설명됩니다.</li>
              </ul>
              <h3>정보흐름 모델(Information Flow Model)</h3>
              <p>정보흐름 모델은 정보가 보안 수준 사이에서 <strong>허용된 방향으로만 이동</strong>하도록 정보의 흐름 자체를 통제합니다. BLP는 기밀성 관점에서 높은 수준 → 낮은 수준의 누출을, Biba는 무결성 관점에서 낮은 수준 → 높은 수준의 오염을 제한하는 대표적인 정보흐름 관점의 모델입니다.</p>
              <p><strong>Covert Channel(은닉 채널)</strong>은 정상적인 접근통제·통신 경로가 아닌 시스템 자원의 상태나 타이밍 등을 이용해 정책에 어긋나는 정보 흐름을 만드는 통로입니다.</p>
              <h3>상태기계 모델(State Machine Model)</h3>
              <p>시스템을 <strong>보안 상태(State)</strong>와 그 사이의 <strong>상태전이(Transition)</strong>로 표현합니다. 초기 상태가 안전하고 허용된 모든 상태전이가 보안정책을 보존한다면 시스템이 계속 안전한 상태를 유지한다고 봅니다. BLP와 Biba 같은 모델의 기초가 됩니다.</p>
              <div class="important-box"><span class="box-title">SECTION 10 핵심 연결</span><p><strong>MAC=등급 / DAC=신원·소유자 / RBAC=역할 → BLP=기밀성(No Read Up, No Write Down) → Biba=무결성(No Read Down, No Write Up) → Clark-Wilson=트랜잭션·직무분리 → Chinese Wall=이해충돌·과거 접근 이력</strong></p></div>`
          }
        ],
        content: ""
      },
      {
        id: "section-11", number: 11, title: "접근통제 보안위협 및 대응책",
        subtopics: [
          {
            id: "password-cracker", title: "패스워드 크래커와 공격기법",
            content: `
              <h3>패스워드 크래커(Password Cracker)</h3>
              <p><strong>패스워드 크래커</strong>는 패스워드를 추측하거나 패스워드 해시를 분석하여 인증정보를 알아내는 도구·기법을 말합니다. 공격자는 사전 단어, 가능한 문자 조합, 개인정보 기반 변형, 미리 계산한 해시 등을 이용할 수 있습니다.</p>
              <h3>사전 공격(Dictionary Attack)</h3>
              <ul>
                <li>자주 쓰는 단어·이름·전화번호·생일 등 <strong>가능성이 높은 후보를 사전 파일</strong>로 만들어 순서대로 대입합니다.</li>
                <li>공격 대상의 개인정보를 알고 있으면 후보를 좁힐 수 있어 더욱 효율적입니다.</li>
                <li>패스워드 해시를 확보한 경우 사전 후보를 같은 방식으로 해시하여 <strong>저장된 해시와 일치할 때까지 비교</strong>하는 오프라인 공격도 가능합니다.</li>
              </ul>
              <h3>무차별 공격(Brute-Force Attack)</h3>
              <ul>
                <li>정답을 찾을 때까지 가능한 <strong>모든 문자 조합</strong>을 체계적으로 시도하는 공격입니다.</li>
                <li>충분한 시간이 있으면 결국 후보 공간을 모두 검사할 수 있지만, 패스워드의 길이·문자 종류가 늘수록 필요한 계산량이 급격히 증가합니다.</li>
                <li>교재의 <strong>War Dialing</strong>은 번호 범위를 자동으로 순차 시도하여 연결 가능한 모뎀을 찾는 고전적 자동 탐색 기법으로, 가능한 대상을 광범위하게 반복 시도한다는 점에서 함께 소개됩니다.</li>
              </ul>
              <h3>하이브리드 공격(Hybrid Attack)</h3>
              <p><strong>사전 공격 + 무차별 공격</strong>을 결합합니다. 사전 단어·개인정보 후보에 숫자·기호·대소문자 변형 등을 붙여 <strong>hello → hello1 → hello01 → hello$1</strong>처럼 현실적으로 자주 쓰이는 변형을 집중 탐색합니다.</p>
              <h3>레인보우 테이블 공격(Rainbow Table Attack)</h3>
              <p><strong>Rainbow Table</strong>은 패스워드 후보와 해시 관계를 반복적인 해시·축약(Reduction) 연산으로 체인화하고, 체인의 일부 값만 저장하여 필요할 때 역추적하는 <strong>미리 계산된 해시 탐색 기법</strong>입니다. 전수조사보다 저장공간과 계산시간을 절충하는 <strong>Time–Memory Trade-Off</strong>를 이용합니다.</p>
              <ul>
                <li>기본 아이디어는 1980년 Martin Hellman의 시간–메모리 절충 연구에서 출발했으며, 이후 Rainbow Table 방식으로 발전했습니다.</li>
                <li>동일한 패스워드가 동일한 해시로 저장되는 환경에서는 매우 빠르게 후보를 찾을 수 있습니다.</li>
                <li><strong>Salt</strong>를 패스워드마다 서로 다르게 적용하면 같은 패스워드도 해시가 달라져 미리 계산한 Rainbow Table의 재사용을 어렵게 만들 수 있습니다.</li>
              </ul>
              <h3>Credential Stuffing과 LM Hash</h3>
              <ul>
                <li><strong>Credential Stuffing</strong>: 한 서비스에서 유출된 <strong>ID·패스워드 조합</strong>을 다른 서비스에 자동 대입하는 공격입니다. 여러 사이트에서 같은 비밀번호를 재사용할수록 위험합니다.</li>
                <li><strong>LM Hash (LAN Manager Hash)</strong>: 구형 Windows의 취약한 패스워드 해시 방식입니다. 현대 Windows에서는 기본적으로 사용되지 않는 레거시 방식이지만, 오래된 시스템의 패스워드 크래킹 문맥에서 자주 등장합니다.</li>
              </ul>
              <div class="important-box"><span class="box-title">시험 구분</span><p><strong>Dictionary = 사전 후보 / Brute Force = 모든 조합 / Hybrid = 사전+변형 / Rainbow Table = 미리 계산한 해시 체인 / Credential Stuffing = 유출 계정정보 재사용</strong></p></div>`
          },
          {
            id: "social-engineering", title: "사회공학과 인간기반 공격",
            content: `
              <h3>사회공학(Social Engineering)</h3>
              <p><strong>사회공학</strong>은 신뢰할 만한 개인이나 조직을 사칭하거나 사람의 심리·행동 특성을 이용하여 공격 대상이 스스로 민감한 정보를 제공하거나 보안절차를 우회하도록 만드는 공격입니다.</p>
              <ul>
                <li><strong>Human-Based Social Engineering Attack</strong>: 사람과 직접 접촉하거나 행동을 관찰하여 정보를 얻는 방식</li>
                <li><strong>ICT-Based Social Engineering Attack</strong>: 이메일·웹사이트·SMS 등 정보통신기술을 이용해 사용자를 속이는 방식</li>
              </ul>
              <h3>인간기반 사회공학 공격</h3>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>공격</th><th>핵심</th></tr></thead><tbody>
                <tr><td><strong>Shoulder Surfing</strong><br><span class="term-en">어깨너머 훔쳐보기</span></td><td>화면·키보드·서류 등을 몰래 관찰하여 패스워드나 민감정보를 알아냄</td></tr>
                <tr><td><strong>Dumpster Diving</strong><br><span class="term-en">쓰레기통 뒤지기</span></td><td>폐기된 문서·메모·저장매체 등에서 정보를 수집</td></tr>
                <tr><td><strong>Blackmail</strong><br><span class="term-en">협박</span></td><td>상대방을 협박하여 원하는 정보·행동을 얻음</td></tr>
                <tr><td><strong>Piggybacking / Tailgating</strong><br><span class="term-en">따라 들어가기</span></td><td>인가된 사람을 따라 통제구역에 함께 들어가 물리적 접근통제를 우회</td></tr>
                <tr><td><strong>Collusion</strong><br><span class="term-en">내부자 결탁</span></td><td>내부자가 외부자 또는 다른 내부자와 공모해 정보·권한을 악용</td></tr>
              </tbody></table></div>
              <h3>대응책</h3>
              <ul>
                <li>전화·대화 상대의 음성이나 요구 내용이 평소와 다르면 즉시 의심하고 <strong>신원을 재확인</strong>합니다.</li>
                <li>중요 정보를 제공하기 전에 조직이 정한 별도의 <strong>본인확인 절차</strong>를 거칩니다.</li>
                <li>이메일·팩스로 민감정보 전송을 요구하면 요청자에게 <strong>별도 채널로 직접 확인</strong>합니다.</li>
                <li>중요 서류와 저장매체는 일반 쓰레기로 버리지 않고 <strong>문서세단·안전한 폐기</strong> 절차를 사용합니다.</li>
                <li>임직원을 대상으로 사회공학 사례와 대응절차에 대한 <strong>정기적인 보안인식 교육</strong>을 실시합니다.</li>
              </ul>
              <div class="important-box"><span class="box-title">핵심</span><p><strong>사회공학의 공격 대상은 기술 자체가 아니라 사람의 신뢰·습관·심리입니다. 대응의 기본은 신원확인, 최소정보 공개, 안전한 폐기, 보안교육입니다.</strong></p></div>`
          },
          {
            id: "phishing", title: "피싱(Phishing)",
            content: `
              <h3>피싱(Phishing)</h3>
              <p><strong>Phishing</strong>은 개인정보(Private Data)와 낚시(Fishing)의 의미가 결합된 표현으로, 정상 기관·서비스를 사칭한 메시지로 사용자를 <strong>가짜 웹사이트</strong>에 유도하여 ID·패스워드·신용카드번호·금융정보 등을 입력하게 만드는 대표적인 ICT 기반 사회공학 공격입니다.</p>
              <h3>대표 절차</h3>
              <ol>
                <li>공격자가 금융기관·쇼핑몰·공공기관 등을 사칭한 이메일·메시지를 발송합니다.</li>
                <li>메시지의 링크를 누르면 정상 사이트처럼 꾸민 <strong>Phisher의 위조 사이트</strong>로 이동합니다.</li>
                <li>사용자가 로그인·결제·본인확인을 위해 입력한 인증정보가 공격자에게 전달됩니다.</li>
              </ol>
              <h3>대응</h3>
              <ul>
                <li>이메일·메시지에 포함된 링크를 바로 누르기보다 공식 주소를 직접 입력하거나 공식 앱을 사용합니다.</li>
                <li>발신자 주소와 접속한 사이트의 <strong>도메인</strong>을 확인하고, 개인정보·인증정보를 요구하는 비정상적 요청을 의심합니다.</li>
                <li>의심되는 요청은 메시지에 적힌 연락처가 아닌 <strong>기관의 공식 연락처</strong>로 확인합니다.</li>
              </ul>`
          },
          {
            id: "pharming-smishing", title: "파밍·스미싱과 대응",
            content: `
              <h3>파밍(Pharming)</h3>
              <p><strong>Pharming</strong>은 사용자가 정상적인 사이트 주소를 입력하더라도 <strong>호스트 설정·DNS 정보 등을 변조</strong>하여 공격자가 준비한 위조 사이트로 접속되게 만드는 공격입니다. 사용자가 링크를 직접 눌러 가짜 사이트로 이동하는 전형적인 피싱과 달리, <strong>이름 해석·주소 연결 과정</strong>을 변조해 정상 접근을 가로챌 수 있다는 점이 핵심입니다.</p>
              <ul>
                <li>로컬 <strong>hosts 파일 변조</strong>, 악성코드 감염, DNS 관련 변조·오염 등이 공격 경로가 될 수 있습니다.</li>
                <li>사용자가 평소 알고 있던 주소를 직접 입력해도 위조 사이트로 연결될 수 있어 피싱보다 알아차리기 어려울 수 있습니다.</li>
              </ul>
              <h3>스미싱(Smishing)</h3>
              <p><strong>Smishing = SMS + Phishing</strong>입니다. 문자메시지로 택배·청첩장·과태료·보안알림 등을 사칭하여 악성 URL 클릭이나 앱 설치를 유도하고, 인증정보·금융정보 탈취 또는 금전 피해로 이어지게 합니다.</p>
              <h3>피싱 · 파밍 · 스미싱 비교</h3>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>공격</th><th>주요 수단</th><th>핵심 차이</th></tr></thead><tbody>
                <tr><td><strong>Phishing</strong></td><td>이메일·메신저·위조 링크</td><td>사회공학 메시지로 사용자를 가짜 사이트에 유도</td></tr>
                <tr><td><strong>Pharming</strong></td><td>hosts·DNS 등 주소 해석 변조</td><td>정상 주소를 입력해도 위조 사이트로 연결될 수 있음</td></tr>
                <tr><td><strong>Smishing</strong></td><td>SMS·문자메시지의 URL</td><td>문자를 미끼로 악성 링크·앱 설치·정보입력을 유도</td></tr>
              </tbody></table></div>
              <h3>공통 대응책</h3>
              <ul>
                <li>출처가 불명확한 URL·첨부파일·앱을 실행하지 않고, 공식 사이트·공식 앱을 이용합니다.</li>
                <li>OS·브라우저·보안 소프트웨어를 최신 상태로 유지하고 악성코드 감염 여부를 점검합니다.</li>
                <li>민감정보 입력 전에 도메인과 인증서 경고 등을 확인하고, 이상이 있으면 즉시 접속을 중단합니다.</li>
              </ul>
              <div class="important-box"><span class="box-title">구분 암기</span><p><strong>Phishing = 속여서 링크 클릭 / Pharming = 주소 해석을 속여 강제 이동 / Smishing = SMS로 속임</strong></p></div>`
          },
          {
            id: "covert-channel", title: "은닉 채널(Covert Channel)",
            content: `
              <h3>은닉 채널(Covert Channel)</h3>
              <p><strong>은닉 채널</strong>은 원래 정보전송을 위해 설계된 정상 통신경로가 아닌 시스템 자원이나 상태를 이용하여 <strong>보안정책·접근통제를 우회해 정보를 전달</strong>하는 비정상 통신경로입니다. SECTION 10에서 다룬 정보흐름 모델이 정상적인 정보 흐름만 허용하려는 이유와 직접 연결됩니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>유형</th><th>원리</th><th>예</th></tr></thead><tbody>
                <tr><td><strong>Covert Storage Channel</strong></td><td>공유 가능한 저장상태나 속성 값을 바꾸어 정보를 전달</td><td>파일 속성, 공유 자원의 상태·플래그 등</td></tr>
                <tr><td><strong>Covert Timing Channel</strong></td><td>작업·응답·자원 사용의 시간 간격을 조절하여 정보를 전달</td><td>CPU 사용 패턴, 패킷 전송 간격 등</td></tr>
              </tbody></table></div>
              <h3>대응</h3>
              <ul>
                <li>정보흐름 분석을 통해 허용되지 않은 데이터 흐름과 공유자원을 식별합니다.</li>
                <li>불필요한 공유자원·고해상도 타이밍 정보를 제한하고, 서로 다른 보안영역 사이의 격리를 강화합니다.</li>
                <li>로그·트래픽·자원 사용 패턴을 모니터링하여 정상 목적과 다른 비정상 채널 사용을 탐지합니다.</li>
              </ul>
              <div class="important-box"><span class="box-title">시험 연결</span><p><strong>Covert Channel = 정상 통신경로가 아닌 경로로 정책을 우회한 정보 흐름. Storage Channel과 Timing Channel로 구분합니다.</strong></p></div>`
          },
          {
            id: "emanation", title: "방사(Emanation) 보안위협",
            content: `
              <h3>방사(Emanation)</h3>
              <p>컴퓨터·모니터·케이블·통신장비 등 전자장치는 동작 과정에서 의도하지 않은 <strong>전자기 신호(Electromagnetic Emanation)</strong>를 방출할 수 있습니다. 공격자가 이러한 누설 신호를 수집·분석하여 화면·처리정보·통신내용 등을 추정하면 기밀성이 침해될 수 있습니다.</p>
              <h3>대응책</h3>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>대응</th><th>핵심</th></tr></thead><tbody>
                <tr><td><strong>TEMPEST</strong></td><td>정보처리 장비에서 발생하는 의도하지 않은 전자기 방사를 통제하여 누설 신호로부터 정보가 재구성되지 않도록 하는 방사보안 개념·대책. 차폐·필터링·접지·안전거리 확보 등을 함께 고려</td></tr>
                <tr><td><strong>White Noise</strong><br><span class="term-en">백색잡음</span></td><td>공격자가 유용한 누설 신호를 구분하기 어렵도록 충분한 잡음을 발생시켜 신호 분석을 방해하는 방법</td></tr>
                <tr><td><strong>Control Zone</strong><br><span class="term-en">통제구역</span></td><td>보호 장비와 비인가자·비보안 장비 사이에 물리적 완충거리와 통제영역을 두어 누설 신호의 수집 가능성을 낮춤</td></tr>
              </tbody></table></div>
              <ul>
                <li>차폐된 공간·케이블과 적절한 필터·접지를 사용하고, 중요 장비를 외부 경계로부터 떨어뜨려 배치합니다.</li>
                <li>보호 수준은 장비뿐 아니라 전원선·통신선 등 <strong>전도성 경로</strong>를 통한 누설 가능성까지 함께 고려해야 합니다.</li>
              </ul>
              <div class="important-box"><span class="box-title">SECTION 11 핵심 연결</span><p><strong>Password 공격 = 인증정보 공격 / Social Engineering = 사람 공격 / Phishing·Pharming·Smishing = ICT 기반 사회공학 / Covert Channel = 접근통제 우회 정보흐름 / Emanation = 전자기 누설 → TEMPEST·White Noise·Control Zone으로 대응</strong></p></div>`
          }
        ],
        content: ""
      }
    ]
  },
  {
    part: 4,
    title: "시스템 보안",
    sections: [
      {
        id: "section-12", number: 12, title: "보안 운영체제",
        subtopics: [
          {
            id: "secure-os-basics", title: "보안 운영체제의 개요",
            content: `
              <h3>보안 운영체제(Secure Operating System)</h3>
              <p><strong>보안 운영체제</strong>는 기존 운영체제가 가진 보안상의 결함을 악용하는 해킹으로부터 시스템을 보호하기 위해 <strong>운영체제 내부에 보안기능을 구현·통합한 운영체제</strong>입니다. 응용 프로그램 환경은 유지하면서 시스템 자원에 대한 강력한 보안기능을 운영체제 수준에서 제공합니다.</p>
              <p>교재의 보안 운영체제 개념도는 운영체제 커널 위에 <strong>Security Kernel</strong>을 두고, 인증·무결성·키 관리·감사 추적·보안 통신·암호 기능과 접근통제 모듈을 결합하는 구조로 설명합니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>구성·약어</th><th>영문 풀네임</th><th>핵심</th></tr></thead><tbody>
                <tr><td><strong>SKDB</strong></td><td>Security Kernel Database</td><td>보안커널이 접근권한 판단에 참조하는 보안정보 데이터베이스</td></tr>
                <tr><td><strong>DAC</strong></td><td>Discretionary Access Control</td><td>임의적 접근통제</td></tr>
                <tr><td><strong>MAC</strong></td><td>Mandatory Access Control</td><td>강제적 접근통제</td></tr>
                <tr><td><strong>RBAC</strong></td><td>Role-Based Access Control</td><td>역할기반 접근통제</td></tr>
              </tbody></table></div>
              <div class="important-box"><span class="box-title">핵심 구조</span><p><strong>응용 프로그램 → System Call Interface → Security Kernel → OS Kernel</strong>의 흐름에서 보안커널이 시스템 자원 접근을 통제합니다.</p></div>`
          },
          {
            id: "protection-targets-separation", title: "보호대상과 분리 방법",
            content: `
              <h3>보호대상</h3>
              <p>보안 운영체제가 보호해야 할 주요 대상은 다음과 같습니다.</p>
              <ol>
                <li><strong>메모리</strong></li>
                <li><strong>보조기억장치</strong>상의 파일 또는 데이터의 집합</li>
                <li>메모리상에서 <strong>실행 중인 프로그램</strong></li>
                <li><strong>파일들의 디렉터리</strong></li>
                <li><strong>하드웨어 장치</strong></li>
              </ol>
              <h3>보호를 위한 분리(Separation)</h3>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>분리 방법</th><th>핵심 내용</th></tr></thead><tbody>
                <tr><td><strong>물리적 분리</strong><br><span class="term-en">Physical Separation</span></td><td>사용자별로 별도의 장비만 사용하도록 제한합니다. 강한 형태의 분리가 가능하지만 실용성은 낮습니다.</td></tr>
                <tr><td><strong>시간적 분리</strong><br><span class="term-en">Temporal Separation</span></td><td>프로세스가 동일 시간에 하나씩만 실행되도록 하여 동시 실행으로 발생할 수 있는 문제를 제거하고 운영체제의 처리를 단순화합니다.</td></tr>
                <tr><td><strong>논리적 분리</strong><br><span class="term-en">Logical Separation</span></td><td>각 프로세스에 논리적인 구역을 지정합니다. 프로세스는 자신의 구역 안에서는 자유롭게 동작하지만 할당된 구역 밖에는 영향을 줄 수 없습니다.</td></tr>
                <tr><td><strong>암호적 분리</strong><br><span class="term-en">Cryptographic Separation</span></td><td>내부에서 사용하는 정보를 외부에서 알 수 없도록 암호화하여 분리합니다.</td></tr>
              </tbody></table></div>
              <p>교재는 위 방법을 <strong>구현 복잡도가 증가하는 순서</strong>로 제시하며, 실제로는 여러 분리 방법을 <strong>조합</strong>하여 운영할 수 있다고 설명합니다.</p>
              <div class="important-box"><span class="box-title">순서 암기</span><p><strong>물리적 → 시간적 → 논리적 → 암호적 분리</strong></p></div>`
          },
          {
            id: "file-system-protection", title: "파일시스템 보호",
            content: `
              <h3>파일 보호의 기본</h3>
              <ul>
                <li>파일 보호는 <strong>파일 공유 문제와 함께</strong> 고려해야 합니다. 무조건 보호만 강화하면 자원의 활용성과 공유가 떨어질 수 있습니다.</li>
                <li>파일 소유자가 보호장치를 마련해 <strong>무단 접근을 막는 것</strong>이 파일 보호의 기본입니다.</li>
              </ul>
              <h3>파일 보호기법</h3>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>기법</th><th>내용</th><th>주의점·특징</th></tr></thead><tbody>
                <tr><td><strong>파일 이름 명명</strong><br><span class="term-en">Naming</span></td><td>다른 사용자가 파일 이름을 모르고 추측하기 어렵다는 가정에 근거하여 이름 자체를 접근 장벽으로 사용합니다.</td><td>실제 파일 이름은 기억하기 쉬운 문자열을 많이 쓰고 내용도 암시하므로 <strong>추측될 수 있어 약한 보호</strong>입니다.</td></tr>
                <tr><td><strong>패스워드</strong><br><span class="term-en">Password</span></td><td>사용자마다 서로 다른 패스워드를 제공하고, 올바른 패스워드를 아는 사용자만 파일을 이용하게 합니다.</td><td>패스워드를 임의로 정하고 <strong>자주 변경</strong>하면 패스워드를 모르는 사용자의 접근을 더 어렵게 할 수 있습니다.</td></tr>
                <tr><td><strong>암호화</strong><br><span class="term-en">Cryptography / Encryption</span></td><td>파일 내용 자체를 암호화하여 파일은 공유하더라도 <strong>인가된 사용자만 내용을 해독</strong>할 수 있게 합니다.</td><td>암·복호화 키를 파일시스템 자체에 기록·관리할 필요를 줄일 수 있지만, 암·복호화에 <strong>시간과 노력</strong>이 듭니다.</td></tr>
              </tbody></table></div>`
          },
          {
            id: "secure-os-security-functions", title: "보안 운영체제의 보안 기능",
            content: `
              <h3>1. 사용자 식별 및 인증</h3>
              <p>접근통제가 사용자 신분증명에 의해 이루어질 경우 정확한 신분증명이 필요하므로, 보안 운영체제는 <strong>개별 사용자를 완전하게 식별</strong>하고 각 사용자를 <strong>고유하게 식별</strong>할 수 있어야 합니다.</p>
              <h3>2. 임의적·강제적 접근통제</h3>
              <ul>
                <li><strong>DAC (Discretionary Access Control)</strong>: <strong>신분기반정책(Identity-Based Policy)</strong>으로도 설명하며, 주체나 주체가 속한 그룹의 신분에 근거해 객체 접근을 제한합니다.</li>
                <li><strong>MAC (Mandatory Access Control)</strong>: 규칙에 따라 주체가 가진 권한과 객체의 보안 속성을 바탕으로 접근을 강제적으로 제한합니다.</li>
              </ul>
              <h3>3. 객체 재사용(Object Reuse) 보호</h3>
              <p>새 파일이나 자원에 할당되는 메모리·저장공간에 <strong>이전 사용자의 데이터가 삭제되지 않은 채 남아 있으면</strong> 비밀 데이터가 노출될 수 있습니다. 메모리·레지스터·저장장치 등 재사용 가능한 자원은 <strong>재할당 전에 잔존 정보를 제거</strong>해야 합니다.</p>
              <h3>4. 완전한 조정</h3>
              <p>DAC와 MAC이 효과적이려면 일부가 아닌 <strong>모든 접근을 통제</strong>해야 하므로, 보안 운영체제는 접근통제를 우회할 수 없도록 완전한 중재·조정을 수행해야 합니다.</p>
              <h3>5. 신뢰 경로(Trusted Path)</h3>
              <p>패스워드 설정, 접근 허용 변경 등 보안 관련 작업을 수행할 때 사용자와 보안 기능 사이에 <strong>안전한 통신경로</strong>를 제공해야 합니다.</p>
              <h3>6. 감사 및 감사 기록</h3>
              <p>모든 보안 관련 사건은 <strong>감사 기록부(Audit Log)</strong>에 기록되어야 하며, 감사 기록 자체도 명확하게 보호되어야 합니다.</p>
              <div class="important-box"><span class="box-title">시험 핵심</span><p><strong>식별·인증 → DAC/MAC → Object Reuse 보호 → 모든 접근 통제 → Trusted Path → Audit Log</strong></p></div>`
          },
          {
            id: "security-kernel", title: "보안커널(Security Kernel)",
            content: `
              <h3>기본 개념</h3>
              <p><strong>보안커널(Security Kernel)</strong>은 <strong>TCB 내의 하드웨어·소프트웨어·펌웨어</strong>로 구성되며, <strong>참조모니터(Reference Monitor) 개념을 실제로 구현하고 집행</strong>합니다. 주체와 객체 사이의 모든 접근과 보안 관련 기능을 중재합니다.</p>
              <p>보안커널은 TCB의 핵심으로서 신뢰할 수 있는 컴퓨팅 시스템을 구축하는 데 사용되며, 다음 성질이 중요합니다.</p>
              <ul>
                <li>참조모니터 기능은 <strong>분석·시험할 수 있을 만큼 작고 단순</strong>하게 구성하는 것이 바람직합니다.</li>
                <li><strong>모든 접근 시도마다 실행</strong>되어야 하며 우회할 수 없어야 합니다.</li>
                <li>완전하고 포괄적인 방식으로 충분히 <strong>시험·검증</strong>할 수 있어야 합니다.</li>
              </ul>
              <h3>보호링(Protection Ring)</h3>
              <p>보호링은 시스템의 기능을 권한 수준에 따라 동심원 형태의 계층으로 분리하는 개념입니다. <strong>안쪽 링일수록 높은 권한</strong>을 가지며, 가장 안쪽의 보안커널·운영체제 핵심 기능을 외부의 사용자 작업·유틸리티 기능으로부터 보호합니다.</p>
              <div class="important-box"><span class="box-title">연결</span><p><strong>Reference Monitor = 추상적 통제 개념 / Security Kernel = 그 개념을 실제로 구현하는 TCB의 핵심</strong></p></div>`
          },
          {
            id: "trusted-computing-base", title: "신뢰 컴퓨팅 기반(TCB)",
            content: `
              <h3>TCB (Trusted Computing Base)</h3>
              <p><strong>TCB</strong>는 하나의 컴퓨터 시스템 안에서 보안을 집행하는 <strong>하드웨어(H/W)·펌웨어(F/W)·소프트웨어(S/W)의 모든 보호 메커니즘의 총체</strong>이며, 시스템과 조화를 이루어 보안정책을 적용할 책임을 갖습니다.</p>
              <dl class="study-definitions compact-definitions">
                <div><dt>Trusted Path</dt><dd>사용자·프로그램과 커널 사이의 신뢰할 수 있는 통신채널. TCB는 이 채널이 손상되거나 가로채이지 않도록 보호합니다.</dd></div>
                <div><dt>Security Perimeter</dt><dd>시스템에서 <strong>신뢰 구성요소와 비신뢰 구성요소를 구분하는 가상의 보안 경계</strong>입니다. 물리적 실체가 아니라 개념적 경계입니다.</dd></div>
              </dl>
              <p>교재의 건물 비유처럼 TCB의 안전성은 단일 부품 하나가 아니라 <strong>보안정책을 집행하는 구성요소 전체가 올바르게 설계·결합되어야</strong> 확보됩니다.</p>
              <div class="important-box"><span class="box-title">관계 정리</span><p><strong>TCB = 보호 메커니즘 전체 / Security Kernel = TCB의 핵심 구현부 / Security Perimeter = 신뢰·비신뢰 영역의 경계</strong></p></div>`
          },
          {
            id: "reference-monitor", title: "참조모니터(Reference Monitor)",
            content: `
              <h3>참조모니터 개념</h3>
              <p><strong>참조모니터(Reference Monitor)</strong>는 주체(Subject)의 객체(Object)에 대한 <strong>모든 접근을 중재</strong>하는 추상적인 통제 개념입니다. 승인되지 않은 접근이나 변경으로부터 객체를 보호하기 위해 모든 접근 요청을 검사합니다.</p>
              <h3>참조모니터의 3가지 필수 조건</h3>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>조건</th><th>의미</th></tr></thead><tbody>
                <tr><td><strong>Must be tamperproof</strong></td><td>참조모니터 자체가 <strong>부정조작·변조되지 않아야</strong> 합니다.</td></tr>
                <tr><td><strong>Always invoked</strong></td><td>모든 접근에서 <strong>항상 호출</strong>되어야 하며 우회할 수 없어야 합니다.</td></tr>
                <tr><td><strong>Must be verifiable</strong></td><td>동작이 올바른지 <strong>분석·시험을 통해 검증</strong>할 수 있어야 합니다.</td></tr>
              </tbody></table></div>
              <p>주체가 참조모니터를 거치지 않고 객체에 직접 접근할 수 있다면 참조모니터의 기본 개념을 위반한 것입니다.</p>
              <p>참조모니터는 <strong>SKDB (Security Kernel Database)</strong>를 참조하여 각 객체에 대한 접근권한 여부를 결정합니다.</p>
              <div class="important-box"><span class="box-title">세 개념 구분</span><p><strong>참조모니터</strong>는 추상적 개념 → 이를 H/W·F/W·S/W로 구현한 것이 <strong>보안커널</strong> → 보안커널을 포함한 보호 메커니즘 전체가 <strong>TCB</strong>입니다.</p></div>`
          },
          {
            id: "tpm-overview-services", title: "TPM 개요와 기본 서비스",
            content: `
              <h3>TPM (Trusted Platform Module)</h3>
              <p><strong>TPM</strong>은 <strong>TCG (Trusted Computing Group)</strong>라는 산업계 컨소시엄에 의해 표준화된 신뢰 컴퓨팅 기술의 핵심 하드웨어 모듈입니다.</p>
              <h3>특징</h3>
              <ul>
                <li>신뢰 컴퓨팅의 기반에 위치하므로 <strong>훼손 방지(Tamper Protection)</strong>가 중요하며 일반적으로 하드웨어로 구현됩니다.</li>
                <li>칩 형태의 TPM은 소프트웨어 공격뿐 아니라 장비가 물리적으로 탈취되는 상황에서도 보호된 정보가 쉽게 노출되지 않도록 돕습니다.</li>
                <li>대표적인 신뢰 관련 연산은 <strong>암호키 생성·저장, 패스워드 저장, 플랫폼·프로그램 무결성 측정값 저장, 디지털 인증 관련 연산</strong>입니다.</li>
              </ul>
              <h3>TPM의 기본 서비스</h3>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>서비스</th><th>핵심 내용</th></tr></thead><tbody>
                <tr><td><strong>인증된 부트 서비스</strong><br><span class="term-en">Authenticated Boot</span></td><td>운영체제를 단계적으로 부팅하면서 적재되는 각 부분이 사용이 승인된 상태·버전인지 확인할 수 있도록 무결성 측정의 기반을 제공합니다.</td></tr>
                <tr><td><strong>인증 서비스</strong><br><span class="term-en">Attestation / Authentication</span></td><td>TPM에 의해 설정이 완료된 뒤 다른 부분의 설정을 인증할 수 있으며, TPM의 <strong>개인키(Private Key)</strong>로 설정 정보에 서명하여 디지털 증거를 만들 수 있습니다.</td></tr>
                <tr><td><strong>암호화 서비스</strong><br><span class="term-en">Encryption / Sealing</span></td><td>특정 기계가 특정한 설정 상태일 때만 그 기계에서 데이터를 복호화할 수 있도록 데이터를 보호하는 방식을 지원합니다.</td></tr>
              </tbody></table></div>`
          },
          {
            id: "tpm-components", title: "TPM 기능 구성요소",
            content: `
              <h3>TPM 내부 구성요소</h3>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>구성요소</th><th>기능</th></tr></thead><tbody>
                <tr><td><strong>I/O</strong></td><td>모든 TPM 명령이 들어오고 나가는 통로이며 다른 TPM 구성요소와의 통신을 제공합니다.</td></tr>
                <tr><td><strong>암호화 보조 프로세서</strong><br><span class="term-en">Cryptographic Coprocessor</span></td><td>암호화 및 관련 처리를 수행하기 위한 전용 처리 기능을 제공합니다.</td></tr>
                <tr><td><strong>키 생성</strong><br><span class="term-en">Key Generation</span></td><td>교재 기준으로 RSA 공개키/개인키 쌍과 대칭키를 생성합니다.</td></tr>
                <tr><td><strong>HMAC 엔진</strong></td><td>다양한 인증 프로토콜에서 사용하는 HMAC 연산을 수행합니다.</td></tr>
                <tr><td><strong>무작위 숫자 발생기</strong><br><span class="term-en">RNG, Random Number Generator</span></td><td>키 생성, 전자서명의 난수값, <strong>Nonce</strong> 등 암호 연산에 필요한 난수를 생성합니다.</td></tr>
                <tr><td><strong>SHA-1 엔진</strong></td><td>교재의 TPM 구성도에서 전자서명과 HMAC 등에 사용하는 SHA 해시 연산을 담당하는 구성요소로 제시됩니다.</td></tr>
                <tr><td><strong>전원 탐지</strong><br><span class="term-en">Power Detection</span></td><td>TPM 전원 상태와 플랫폼 전원 상태를 관리합니다.</td></tr>
                <tr><td><strong>Opt-In</strong></td><td>고객·사용자의 의도에 따라 TPM을 <strong>활성화 또는 비활성화</strong>할 수 있는 안전한 메커니즘을 제공합니다.</td></tr>
                <tr><td><strong>실행 엔진</strong><br><span class="term-en">Execution Engine</span></td><td>I/O 포트에서 받은 TPM 명령을 수행할 프로그램 코드를 실행합니다.</td></tr>
                <tr><td><strong>비휘발성 메모리</strong><br><span class="term-en">Non-Volatile Memory</span></td><td>TPM의 신원·영구 상태 등 전원이 꺼져도 유지되어야 하는 정보를 저장합니다.</td></tr>
                <tr><td><strong>휘발성 메모리</strong><br><span class="term-en">Volatile Memory</span></td><td>실행을 위한 임시 저장공간으로 현재 TPM 상태, 암호키, 세션 정보 등 임시 인자를 저장합니다.</td></tr>
              </tbody></table></div>
              <div class="important-box"><span class="box-title">SECTION 12 핵심 연결</span><p><strong>보안 운영체제 = OS 수준 보안 → Security Kernel = Reference Monitor 구현 → TCB = 보호 메커니즘 전체 → TPM = 신뢰 컴퓨팅을 지원하는 플랫폼 보안 모듈</strong></p></div>`
          }
        ],
        content: ""
      },
      {
        id: "section-13", number: 13, title: "클라이언트 보안",
        subtopics: [
          {
            id: "malware-basics", title: "악성 소프트웨어 개요와 분류",
            content: `
              <h3>악성 소프트웨어(Malicious Software, Malware)</h3>
              <p><strong>악성 소프트웨어</strong>는 개발자가 의도적으로 사용자가 원하지 않는 작업을 컴퓨터 프로그램에 포함시키거나, 시스템을 공격·파괴하거나 정보를 유출하도록 만든 프로그램을 말합니다. 의도적으로 시스템에 악영향을 주도록 작성된 프로그램을 통틀어 <strong>악성 코드(Malicious Code)</strong>라고도 합니다.</p>
              <h3>분류 기준</h3>
              <ul>
                <li><strong>독립성</strong>: 다른 호스트 프로그램이 있어야 실행되는 <strong>기생형(Parasitic)</strong>과 운영체제 위에서 스스로 실행될 수 있는 <strong>독립형</strong>으로 나눌 수 있습니다.</li>
                <li><strong>자기 복제 여부</strong>: 자신을 복제하여 확산하는 악성코드와 복제 기능 없이 특정 악성 행위를 수행하는 악성코드로 구분합니다.</li>
                <li>대표적으로 <strong>바이러스는 기생형·자기복제형</strong>, <strong>웜은 독립형·자기복제형</strong>, <strong>트로이목마는 자기복제를 하지 않는 위장형 프로그램</strong>입니다.</li>
              </ul>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>컴퓨터 바이러스</th><th>트로이목마</th><th>웜</th></tr></thead><tbody>
                <tr><td><strong>자기 복제</strong></td><td>있음</td><td>없음</td><td>있음</td></tr>
                <tr><td><strong>실행 형태</strong></td><td>파일·부트섹터 등 <strong>숙주 필요</strong></td><td>유용한 프로그램처럼 <strong>위장</strong></td><td><strong>독자적으로 존재·실행</strong></td></tr>
                <tr><td><strong>주요 전파</strong></td><td>감염된 파일·프로그램 실행</td><td>사용자가 위장된 프로그램 실행</td><td>네트워크를 통해 스스로 확산</td></tr>
                <tr><td><strong>대표 영향</strong></td><td>파일·시스템 손상</td><td>정보 유출·원격제어 등</td><td>네트워크·시스템 자원 소모</td></tr>
              </tbody></table></div>
              <div class="important-box"><span class="box-title">구분 암기</span><p><strong>Virus = 숙주 필요 + 자기복제 / Worm = 독립 실행 + 자기복제 / Trojan Horse = 정상 프로그램처럼 위장 + 자기복제 없음</strong></p></div>`
          },
          {
            id: "virus-types", title: "바이러스와 세대별 분류",
            content: `
              <h3>바이러스(Virus)</h3>
              <p>컴퓨터 바이러스는 다른 프로그램을 변형시키거나 자신의 코드를 삽입하여 <strong>감염(Infect)</strong>시키고, 감염된 프로그램이 실행될 때 자신을 복제하여 다른 대상에 확산합니다. 정상 파일·프로그램의 존재를 필요로 하는 <strong>기생형 악성코드</strong>입니다.</p>
              <h3>세대별 바이러스</h3>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>세대</th><th>유형</th><th>핵심 특징</th></tr></thead><tbody>
                <tr><td>1세대</td><td><strong>원시형 바이러스</strong><br><span class="term-en">Primitive Virus</span></td><td>구조가 단순하고 분석이 비교적 쉬운 초기 바이러스</td></tr>
                <tr><td>2세대</td><td><strong>암호화 바이러스</strong><br><span class="term-en">Encryption Virus</span></td><td>바이러스 본체의 대부분을 암호화하고 실행 시 복호화하여 단순 분석을 어렵게 함</td></tr>
                <tr><td>3세대</td><td><strong>은폐형 바이러스</strong><br><span class="term-en">Stealth Virus</span></td><td>감염 사실을 숨기기 위해 파일 크기·내용 등 원래 상태처럼 보이도록 조작</td></tr>
                <tr><td>4세대</td><td><strong>갑옷형 바이러스</strong><br><span class="term-en">Armour Virus</span></td><td>분석·디버깅을 방해하는 기법으로 코드를 보호하여 백신 개발을 어렵게 함</td></tr>
                <tr><td>5세대</td><td><strong>매크로 바이러스</strong><br><span class="term-en">Macro Virus</span></td><td>MS Office의 VBA·VBScript 등 <strong>매크로·스크립트 기능</strong>을 이용해 문서 파일을 감염</td></tr>
              </tbody></table></div>
              <h3>매크로 바이러스 특징</h3>
              <ul>
                <li>매크로를 사용하는 플랫폼과 응용프로그램에 의존하며, 문서가 열리고 매크로가 실행될 때 동작할 수 있습니다.</li>
                <li>문서는 일반 실행파일과 달리 사용자 사이에서 자주 교환되므로 감염 문서를 통한 확산 위험이 큽니다.</li>
                <li>PDF처럼 스크립트를 포함할 수 있는 문서 형식도 악성 스크립트에 악용될 수 있으므로 출처가 불분명한 문서의 실행 기능을 주의해야 합니다.</li>
              </ul>`
          },
          {
            id: "virus-detection-prevention", title: "바이러스 탐지와 예방",
            content: `
              <h3>안티바이러스의 기본 절차</h3>
              <p>백신은 악성코드를 완벽하게 막는 것만이 아니라 감염 이후의 <strong>탐지 → 식별 → 제거</strong>를 통해 피해를 줄이는 역할도 합니다.</p>
              <ol>
                <li><strong>탐지(Detection)</strong>: 감염 여부와 위치를 파악</li>
                <li><strong>식별(Identification)</strong>: 어떤 바이러스인지 판별</li>
                <li><strong>제거(Removal)</strong>: 바이러스 코드·감염 요소를 제거하고 가능한 경우 원상 복구</li>
              </ol>
              <h3>안티바이러스 필터링 방법</h3>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>방법</th><th>원리</th><th>특징</th></tr></thead><tbody>
                <tr><td><strong>Signature Scanning</strong><br>시그니처 스캐닝</td><td>알려진 바이러스에 고유한 실행코드·명령어 패턴인 <strong>Signature</strong>를 찾아 비교</td><td>알려진 악성코드 탐지에 효과적이지만 <strong>시그니처 DB 갱신</strong>이 필요하고 신종·변형에 한계</td></tr>
                <tr><td><strong>Behavioral Virus Scanning</strong><br>행위 기반 탐지</td><td>프로그램이 실행 중 보이는 파일 변조·비정상 접근 등 <strong>행동을 감시</strong></td><td>시그니처가 없어도 새로운 위협을 탐지할 가능성이 있음</td></tr>
              </tbody></table></div>
              <h3>예방</h3>
              <ul>
                <li>신뢰할 수 있는 출처의 소프트웨어만 사용하고 출처가 불분명한 첨부파일·프로그램을 실행하지 않습니다.</li>
                <li>중요 데이터는 정기적으로 안전하게 백업하고, 안티바이러스 엔진과 시그니처를 최신 상태로 유지합니다.</li>
                <li>Windows Script Host, ActiveX, VBScript, JavaScript 등 실행 기능은 필요 범위로 제한하고 최신 보안 업데이트를 적용합니다.</li>
                <li>현업·업무 특성에 맞춘 악성코드 대응 보안정책을 수립하고 지속적인 보안 교육을 실시합니다.</li>
              </ul>
              <div class="important-box"><span class="box-title">시험 핵심</span><p><strong>Signature = 알려진 패턴 비교 / Behavioral Scanning = 실행 행위 감시. 백신은 최신 시그니처와 업데이트가 중요합니다.</strong></p></div>`
          },
          {
            id: "worm", title: "웜(Worm)",
            content: `
              <h3>웜(Worm)의 개요</h3>
              <p><strong>웜</strong>은 자신을 복제하여 <strong>네트워크 연결을 통해 컴퓨터에서 컴퓨터로 전파</strong>되는 독립형 악성코드입니다. 다른 숙주 프로그램이 없어도 스스로 실행·복제할 수 있으며, 대량 확산 과정에서 네트워크 대역폭과 시스템 자원을 고갈시킬 수 있습니다.</p>
              <h3>웜 확산 모델</h3>
              <p>감염 호스트 수가 적은 <strong>서서히 시작하는 단계</strong>를 지나 취약 호스트가 빠르게 감염되는 <strong>빠른 확산 단계</strong>로 들어가며, 감염 가능한 시스템 대부분에 도달하면 확산 속도가 둔화되는 포화 단계에 이릅니다.</p>
              <h3>웜의 실행</h3>
              <ol>
                <li>대상 시스템의 취약점을 찾고 <strong>Buffer Overflow, Format String, SQL Injection, PHP Injection</strong> 등 취약점을 악용하여 접근권한을 확보합니다.</li>
                <li>접근에 성공하면 원격 시스템에서 웜 코드 또는 추가 악성코드를 실행·설치합니다.</li>
                <li>필요에 따라 <strong>Bot/Zombie</strong>, <strong>Keylogger</strong> 등의 악성 프로그램을 내려받아 추가 공격기능을 수행할 수 있습니다.</li>
              </ol>
              <h3>대응</h3>
              <ul>
                <li>취약점 패치와 안티바이러스·호스트 보안을 최신 상태로 유지합니다.</li>
                <li>네트워크에서 비정상적인 스캔·연결 증가를 감시하고 방화벽·침입탐지/차단시스템으로 확산 경로를 제한합니다.</li>
                <li>감염이 확인된 시스템을 신속히 격리하여 다른 호스트로의 추가 전파를 막습니다.</li>
              </ul>
              <div class="important-box"><span class="box-title">바이러스와 차이</span><p><strong>바이러스는 감염시킬 숙주 파일이 필요하지만, 웜은 독립적으로 존재하며 네트워크를 통해 스스로 확산합니다.</strong></p></div>`
          },
          {
            id: "trojan-spyware-malware", title: "트로이목마·스파이웨어·기타 악성코드",
            content: `
              <h3>트로이목마(Trojan Horse)</h3>
              <p>사용자가 기대하는 기능과 실제 내부 기능이 다른 프로그램으로, 정상·유용한 프로그램인 것처럼 <strong>위장</strong>하여 사용자가 직접 실행하도록 유도합니다. <strong>자기복제 기능은 없으며</strong>, 실행 뒤 정보 탈취·파일 파괴·원격 접근권한 제공 같은 악성 행위를 수행할 수 있습니다.</p>
              <p>대표적인 역사적 예로 교재는 1998년 Cult of the Dead Cow가 공개한 <strong>Back Orifice</strong>를 제시합니다.</p>
              <h3>스파이웨어(Spyware)와 애드웨어(Adware)</h3>
              <ul>
                <li><strong>Spyware</strong>: 사용자의 동의 없이 또는 사용자가 충분히 인지하지 못한 상태에서 설치되어 웹 이용기록·검색·시스템 정보 등 활동정보를 수집·전송하는 프로그램입니다.</li>
                <li><strong>Adware</strong>: 광고 표시를 목적으로 하는 소프트웨어입니다. 정상적인 광고 지원 프로그램도 있지만, 과도한 추적·강제 광고·설정 변경을 수행하면 보안·프라이버시 문제가 됩니다.</li>
              </ul>
              <h3>기타 악성 소프트웨어</h3>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>유형</th><th>핵심</th></tr></thead><tbody>
                <tr><td><strong>Rabbit</strong></td><td>자신을 빠르게 복제하여 시스템 자원을 소모시키는 프로그램</td></tr>
                <tr><td><strong>Logic Bomb</strong></td><td>특정 날짜·조건이 충족되면 악성 기능이 실행되도록 숨겨 둔 코드</td></tr>
                <tr><td><strong>Trapdoor / Backdoor</strong></td><td>정상 인증·보안절차를 우회하여 시스템에 접근할 수 있도록 만든 숨은 통로</td></tr>
                <tr><td><strong>Mobile Code</strong></td><td>네트워크를 통해 다른 시스템으로 이동하여 실행될 수 있는 코드로, 악성 기능에 악용될 수 있음</td></tr>
                <tr><td><strong>Exploit</strong></td><td>하나 이상의 취약점을 악용하도록 작성된 공격 코드</td></tr>
                <tr><td><strong>Downloader</strong></td><td>감염 시스템에 다른 악성 프로그램을 내려받아 설치하는 프로그램</td></tr>
                <tr><td><strong>Auto-rooter</strong></td><td>해커의 침투·권한획득 절차를 자동화한 공격 도구</td></tr>
                <tr><td><strong>Virus Generator Kit</strong></td><td>바이러스를 자동으로 생성할 수 있게 하는 도구</td></tr>
                <tr><td><strong>Spammer Program</strong></td><td>감염된 시스템의 자원을 이용해 대량 스팸을 발송</td></tr>
                <tr><td><strong>DDoS Client</strong></td><td>감염 호스트를 이용해 분산 서비스 거부 공격에 참여</td></tr>
                <tr><td><strong>Keylogger</strong></td><td>키보드 입력을 기록하여 계정·패스워드 등 정보를 탈취</td></tr>
                <tr><td><strong>Rootkit</strong></td><td>침입 흔적과 악성 활동을 숨기고 높은 권한을 지속적으로 유지하도록 지원</td></tr>
                <tr><td><strong>Attack Kit</strong></td><td>여러 공격기법과 Payload를 조합해 공격을 수행·생성하는 도구 모음</td></tr>
                <tr><td><strong>Zombie</strong></td><td>공격자에게 장악되어 원격 명령을 수행하는 감염 컴퓨터</td></tr>
                <tr><td><strong>Crimeware</strong></td><td>금융정보·개인정보 탈취 등 금전적 범죄를 목적으로 하는 악성 소프트웨어</td></tr>
                <tr><td><strong>Browser Hijacker</strong></td><td>브라우저 홈·검색 설정 등을 사용자 의도와 다르게 변경</td></tr>
                <tr><td><strong>Dialer</strong></td><td>사용자 모르게 특정 전화번호 등에 연결을 시도하는 프로그램</td></tr>
                <tr><td><strong>Joke / Hoax</strong></td><td>사용자를 놀라게 하는 장난 프로그램 / 존재하지 않는 위협을 경고해 행동을 유도하는 거짓 정보</td></tr>
              </tbody></table></div>`
          },
          {
            id: "http-basics-connections", title: "HTTP 개요와 연결 방식",
            content: `
              <h3>HTTP (Hypertext Transfer Protocol)</h3>
              <p><strong>HTTP</strong>는 웹에서 클라이언트와 서버가 웹 자원과 메시지를 주고받기 위한 <strong>응용계층 프로토콜</strong>입니다. 기본 HTTP 서버 포트는 <strong>TCP 80</strong>이며, 클라이언트는 일반적으로 임시 포트를 사용합니다.</p>
              <p>HTTP는 TCP 서비스를 이용하지만 HTTP 자체는 요청 사이의 사용자 상태를 자동으로 기억하지 않는 <strong>Stateless Protocol</strong>입니다. 로그인 상태 같은 연속성이 필요하면 쿠키·세션 등의 별도 상태관리 수단을 사용합니다.</p>
              <h3>비영속 연결과 영속 연결</h3>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>비영속 연결</th><th>영속 연결</th></tr></thead><tbody>
                <tr><td><strong>TCP 사용</strong></td><td>요청할 객체마다 새 연결을 생성하고 응답 뒤 종료</td><td>하나의 TCP 연결을 유지하며 여러 요청·응답에 재사용</td></tr>
                <tr><td><strong>특징</strong></td><td>연결 설정·종료가 반복되어 오버헤드가 큼</td><td>연결 설정 비용을 줄이고 연속 자원 전송에 효율적</td></tr>
                <tr><td><strong>HTTP 관계</strong></td><td>초기 HTTP 방식에서 주로 사용</td><td><strong>HTTP/1.1은 기본적으로 지속 연결</strong>을 사용</td></tr>
              </tbody></table></div>
              <div class="important-box"><span class="box-title">핵심</span><p><strong>HTTP는 Stateless / TCP는 연결지향. HTTP/1.1의 지속 연결은 하나의 TCP 연결을 여러 요청·응답에 재사용합니다.</strong></p></div>`
          },
          {
            id: "http-request", title: "HTTP 요청 메시지와 메서드",
            content: `
              <h3>HTTP 요청 메시지</h3>
              <p>요청 메시지는 <strong>요청 라인(Request Line) → 요청 헤더(Request Headers) → 빈 라인(Empty Line) → 선택적 본문(Body)</strong> 순서로 구성됩니다.</p>
              <dl class="study-definitions compact-definitions">
                <div><dt>Request Line</dt><dd><strong>Method + URI/URL + HTTP Version</strong>으로 구성됩니다.</dd></div>
                <div><dt>Request Header</dt><dd>요청에 필요한 부가정보를 <strong>Header-Name: Value</strong> 형식으로 전달합니다.</dd></div>
                <div><dt>Empty Line</dt><dd>헤더의 끝을 나타냅니다.</dd></div>
                <div><dt>Body</dt><dd>POST 등에서 서버로 전달할 데이터를 담을 수 있습니다.</dd></div>
              </dl>
              <h3>주요 HTTP 메서드</h3>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>메서드</th><th>용도</th></tr></thead><tbody>
                <tr><td><strong>GET</strong></td><td>URI가 가리키는 자원을 조회. 파라미터를 Query String으로 URI에 포함할 수 있음</td></tr>
                <tr><td><strong>HEAD</strong></td><td>GET과 유사하지만 메시지 본문 없이 헤더만 요청</td></tr>
                <tr><td><strong>POST</strong></td><td>처리할 데이터를 요청 본문에 담아 서버에 전달</td></tr>
                <tr><td><strong>PUT</strong></td><td>지정한 URI의 자원을 생성하거나 교체하는 용도로 사용</td></tr>
                <tr><td><strong>DELETE</strong></td><td>지정한 자원의 삭제를 요청</td></tr>
                <tr><td><strong>TRACE</strong></td><td>요청이 서버까지 전달되는 과정을 진단하기 위한 루프백 기능</td></tr>
                <tr><td><strong>OPTIONS</strong></td><td>서버·자원이 지원하는 통신 옵션·메서드 등을 확인</td></tr>
                <tr><td><strong>CONNECT</strong></td><td>프록시 등을 통해 대상 서버로 터널을 설정</td></tr>
              </tbody></table></div>
              <h3>GET과 POST의 보안 관점</h3>
              <ul>
                <li><strong>GET</strong> 데이터는 URI에 나타날 수 있어 주소창·로그·방문기록·Referer 등에 노출될 가능성이 있으므로 민감정보 전달에 부적합합니다.</li>
                <li><strong>POST</strong>는 데이터를 본문에 넣어 URI 노출은 줄이지만 <strong>POST 자체가 암호화를 제공하는 것은 아닙니다.</strong> 기밀정보 전송에는 HTTPS가 필요합니다.</li>
                <li>교재의 고정된 GET 길이 제한 표현과 달리 HTTP 표준 자체에 공통된 255자 제한이 있는 것은 아니며, 실제 한계는 클라이언트·서버·중간장비에 따라 달라질 수 있습니다.</li>
              </ul>
              <h3>주요 요청 헤더</h3>
              <ul>
                <li><strong>Host</strong>: 요청 대상 서버의 호스트명과 포트 정보</li>
                <li><strong>User-Agent</strong>: 요청 클라이언트의 애플리케이션·브라우저·OS 정보</li>
                <li><strong>Referer</strong>: 현재 요청으로 이동하게 한 이전 문서의 URL 정보</li>
              </ul>`
          },
          {
            id: "http-response", title: "HTTP 응답 메시지와 상태코드",
            content: `
              <h3>HTTP 응답 메시지</h3>
              <p>응답 메시지는 <strong>상태 라인(Status Line) → 응답 헤더(Response Headers) → 빈 라인 → 선택적 본문</strong>으로 구성됩니다. 상태 라인은 <strong>HTTP Version + Status Code + Reason Phrase</strong>를 포함합니다.</p>
              <h3>주요 HTTP 상태코드</h3>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>분류</th><th>코드</th><th>의미</th></tr></thead><tbody>
                <tr><td rowspan="2"><strong>1xx 정보</strong></td><td>100 Continue</td><td>요청을 계속 진행</td></tr>
                <tr><td>101 Switching Protocols</td><td>프로토콜 전환</td></tr>
                <tr><td rowspan="4"><strong>2xx 성공</strong></td><td>200 OK</td><td>요청 성공</td></tr>
                <tr><td>201 Created</td><td>새 자원 생성 완료</td></tr>
                <tr><td>202 Accepted</td><td>요청을 접수했으나 처리는 아직 완료되지 않을 수 있음</td></tr>
                <tr><td>204 No Content</td><td>성공했지만 응답 본문 없음</td></tr>
                <tr><td rowspan="4"><strong>3xx 재지정</strong></td><td>300 Multiple Choices</td><td>여러 선택 가능한 응답이 존재</td></tr>
                <tr><td>301 Moved Permanently</td><td>자원이 영구적으로 이동</td></tr>
                <tr><td>302 Found</td><td>임시 이동. 교재의 Moved Temporarily 표현에 해당</td></tr>
                <tr><td>304 Not Modified</td><td>캐시된 자원이 변경되지 않음</td></tr>
                <tr><td rowspan="6"><strong>4xx 클라이언트 오류</strong></td><td>400 Bad Request</td><td>잘못된 요청</td></tr>
                <tr><td>401 Unauthorized</td><td>인증이 필요하거나 인증 정보가 유효하지 않음</td></tr>
                <tr><td>403 Forbidden</td><td>서버가 요청을 이해했지만 접근을 거부</td></tr>
                <tr><td>404 Not Found</td><td>요청한 자원을 찾을 수 없음</td></tr>
                <tr><td>405 Method Not Allowed</td><td>해당 자원에서 요청 메서드를 허용하지 않음</td></tr>
                <tr><td>406 Not Acceptable</td><td>클라이언트 조건에 맞는 응답 표현을 제공할 수 없음</td></tr>
                <tr><td rowspan="3"><strong>5xx 서버 오류</strong></td><td>500 Internal Server Error</td><td>서버 내부 오류</td></tr>
                <tr><td>501 Not Implemented</td><td>요청 기능·메서드를 서버가 지원하지 않음</td></tr>
                <tr><td>503 Service Unavailable</td><td>일시적으로 서비스를 제공할 수 없음</td></tr>
              </tbody></table></div>
              <p>대표적인 응답 헤더로 <strong>Content-Type</strong>은 본문의 데이터 형식을, <strong>Content-Length</strong>는 본문의 바이트 길이를 나타냅니다.</p>
              <div class="important-box"><span class="box-title">상태코드 앞자리</span><p><strong>1xx 정보 / 2xx 성공 / 3xx 재지정 / 4xx 클라이언트 오류 / 5xx 서버 오류</strong></p></div>`
          },
          {
            id: "cookie-basics", title: "쿠키(Cookie) 개요와 구조",
            content: `
              <h3>쿠키(Cookie)</h3>
              <p><strong>쿠키</strong>는 웹사이트가 사용자의 브라우저에 저장하도록 보내는 작은 데이터로, HTTP의 Stateless 특성을 보완해 사용자 상태·환경설정·식별정보 등을 다음 요청에 다시 전달할 수 있게 합니다. 교재는 일반적인 쿠키 파일 크기를 약 <strong>4KB</strong> 수준으로 설명합니다.</p>
              <h3>쿠키의 이용</h3>
              <ul>
                <li><strong>사이트 개인화</strong>: 사용자 식별정보·환경설정을 기억해 재방문 시 적용</li>
                <li><strong>장바구니</strong>: 선택한 상품·수량 같은 상태를 유지</li>
                <li><strong>사이트 이용방식 추적</strong>: 방문·이용정보를 기록해 서비스 분석에 활용</li>
              </ul>
              <h3>Set-Cookie의 주요 속성</h3>
              <p><strong>Set-Cookie: name=value; Expires/Max-Age; Domain; Path; Secure; HttpOnly</strong>와 같은 형태로 쿠키 값과 적용 범위를 설정할 수 있습니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>속성</th><th>의미</th></tr></thead><tbody>
                <tr><td><strong>Expires / Max-Age</strong></td><td>쿠키의 유효기간을 지정. 만료 정보가 없으면 일반적으로 브라우저 세션에 묶인 세션 쿠키로 사용</td></tr>
                <tr><td><strong>Path</strong></td><td>쿠키가 전송될 URL 경로 범위를 지정</td></tr>
                <tr><td><strong>Domain</strong></td><td>쿠키가 적용될 도메인 범위를 지정</td></tr>
                <tr><td><strong>Secure</strong></td><td>HTTPS 연결에서만 쿠키가 전송되도록 제한</td></tr>
                <tr><td><strong>HttpOnly</strong></td><td>JavaScript의 document.cookie 등에서 쿠키에 접근하지 못하도록 제한</td></tr>
              </tbody></table></div>
              <h3>쿠키에 관한 오해</h3>
              <ul>
                <li>쿠키는 바이러스처럼 실행되는 프로그램이 아니라 <strong>데이터</strong>이므로 자체적으로 실행·복제하지 않습니다.</li>
                <li>브라우저가 정한 도메인·경로 규칙에 따라 전송되므로 아무 웹사이트나 다른 사이트의 쿠키를 자유롭게 읽을 수 있는 것은 아닙니다.</li>
                <li>다만 공용 PC나 탈취된 브라우저 프로필에서는 저장된 쿠키가 노출될 수 있으므로 로그인 상태·세션 쿠키 보호가 중요합니다.</li>
              </ul>`
          },
          {
            id: "cookie-security", title: "쿠키 보안 취약점과 보호 속성",
            content: `
              <h3>쿠키 보안 위협</h3>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>위협</th><th>원리</th><th>대응 핵심</th></tr></thead><tbody>
                <tr><td><strong>XSS</strong><br><span class="term-en">Cross-Site Scripting</span></td><td>악성 스크립트가 사용자 브라우저에서 실행되면서 <strong>document.cookie</strong> 등으로 접근 가능한 쿠키를 탈취</td><td>출력 인코딩·입력검증·CSP와 함께 <strong>HttpOnly</strong> 적용</td></tr>
                <tr><td><strong>Sniffing</strong></td><td>암호화되지 않은 네트워크 구간에서 전송되는 쿠키가 도청될 수 있음</td><td><strong>HTTPS + Secure</strong> 쿠키 사용</td></tr>
                <tr><td><strong>공용 PC의 쿠키 노출</strong></td><td>브라우저 프로필·저장파일 등에 접근 가능한 사용자가 남은 쿠키를 악용</td><td>로그아웃·세션 종료·공용기기에서 로그인 유지 금지</td></tr>
              </tbody></table></div>
              <h3>HttpOnly와 Secure</h3>
              <ul>
                <li><strong>HttpOnly</strong>: 클라이언트 스크립트에서 쿠키 값에 직접 접근하지 못하게 하여 XSS로 인한 <strong>쿠키 탈취 위험을 줄입니다.</strong> 단, XSS 자체를 제거하는 속성은 아닙니다.</li>
                <li><strong>Secure</strong>: 쿠키가 <strong>HTTPS</strong>를 통해서만 전송되도록 제한해 평문 HTTP 전송 노출 위험을 줄입니다. Secure 자체가 쿠키 값을 암호화하는 것은 아닙니다.</li>
              </ul>
              <h3>쿠키 관리 원칙</h3>
              <p>지속 쿠키(Persistent Cookie)는 만료 시점까지 남을 수 있고, 세션 쿠키(Session Cookie)는 일반적으로 브라우저 세션과 함께 종료됩니다. 주민번호·신용정보·패스워드 같은 <strong>중요정보를 쿠키에 직접 저장하지 않는 것</strong>이 원칙이며, 불가피한 데이터는 최소화하고 적절히 보호해야 합니다.</p>
              <div class="important-box"><span class="box-title">구분 암기</span><p><strong>HttpOnly = 스크립트 접근 제한 / Secure = HTTPS 전송 제한</strong></p></div>`
          },
          {
            id: "session-browser-security", title: "세션과 웹브라우저 보안",
            content: `
              <h3>세션(Session)</h3>
              <p><strong>세션</strong>은 클라이언트별 상태정보를 <strong>서버에 저장</strong>하는 방식입니다. 서버는 각 클라이언트를 식별할 <strong>Session ID</strong>를 부여하고, 브라우저는 보통 세션 쿠키를 통해 그 식별자를 서버에 전달합니다.</p>
              <p>중요 상태가 서버에 저장된다는 장점이 있지만, 공격자가 유효한 Session ID를 얻으면 정상 사용자로 위장할 수 있으므로 <strong>Session Hijacking</strong>에 대한 보호가 필요합니다.</p>
              <h3>안전한 Session ID 관리</h3>
              <ul>
                <li>Session ID는 <strong>안전한 서버에서 생성</strong>하고 충분한 길이와 예측 불가능성을 갖도록 암호학적으로 안전한 난수 생성기를 사용합니다.</li>
                <li>Session ID를 URL에 포함하면 브라우저 기록·로그·Referer 등에 노출될 수 있으므로 <strong>URL Rewrite 방식의 세션 ID 노출을 피하고 안전한 쿠키를 사용</strong>합니다.</li>
                <li>장시간 동일 세션을 유지하지 말고 유휴·절대 만료시간을 적용하며, 인증 등 중요한 상태 변화 뒤에는 <strong>Session ID를 재발급</strong>하는 것이 안전합니다.</li>
                <li>세션 쿠키에는 HTTPS 환경에서 <strong>Secure·HttpOnly</strong> 등 적절한 보안 속성을 적용합니다.</li>
              </ul>
              <h3>웹브라우저 보안영역</h3>
              <p>교재는 Internet Explorer의 전통적인 <strong>보안 영역(Security Zone)</strong>을 통해 사이트 특성에 따라 서로 다른 보안 수준을 적용하는 방식을 설명합니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>영역</th><th>대상</th><th>일반적 보안 수준</th></tr></thead><tbody>
                <tr><td><strong>Internet</strong></td><td>다른 영역에 별도로 지정되지 않은 인터넷 사이트</td><td>중간~높음</td></tr>
                <tr><td><strong>Local Intranet</strong></td><td>조직 내부 네트워크의 사이트</td><td>인터넷 영역보다 낮게 설정 가능</td></tr>
                <tr><td><strong>Trusted Sites</strong></td><td>사용자가 신뢰한다고 지정한 사이트</td><td>낮음</td></tr>
                <tr><td><strong>Restricted Sites</strong></td><td>신뢰하지 않거나 제한이 필요한 사이트</td><td>높음</td></tr>
              </tbody></table></div>
              <div class="important-box"><span class="box-title">SECTION 13 핵심 연결</span><p><strong>악성코드 방어 = 실행·감염 통제 → HTTP = Stateless 요청/응답 → Cookie = 클라이언트 상태 전달 → Session = 서버 상태 + Session ID → Session ID가 탈취되면 Session Hijacking 위험</strong></p></div>`
          }
        ],
        content: ""
      },
      {
        id: "section-14", number: 14, title: "윈도우 서버 보안",
        subtopics: [
          {
            id: "windows-architecture", title: "윈도우 시스템 구조와 특징",
            content: `
              <p>윈도우 운영체제는 하드웨어 위에 <strong>HAL(Hardware Abstraction Layer)</strong>, 마이크로 커널과 각종 관리자, 시스템 서비스, 사용자 모드 응용프로그램이 계층적으로 구성됩니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>구성요소</th><th>핵심 역할</th></tr></thead><tbody>
                <tr><td><strong>HAL</strong><br><span class="term-en">Hardware Abstraction Layer</span></td><td>하드웨어의 차이를 추상화해 운영체제와 장치 사이에 일관된 인터페이스를 제공합니다.</td></tr>
                <tr><td><strong>Kernel Mode</strong></td><td>커널·장치 드라이버 등 핵심 구성요소가 높은 권한으로 실행되는 영역입니다.</td></tr>
                <tr><td><strong>User Mode</strong></td><td>일반 응용프로그램이 제한된 권한으로 실행되는 영역입니다.</td></tr>
                <tr><td><strong>System Services</strong></td><td>사용자 모드 프로그램이 커널의 기능을 이용할 수 있도록 시스템 호출 인터페이스를 제공합니다.</td></tr>
                <tr><td><strong>Executive Managers</strong></td><td>객체·프로세스·가상 메모리·보안 참조·로컬 프로시저 호출 등 운영체제 자원을 관리합니다.</td></tr>
              </tbody></table></div>
              <h3>윈도우의 주요 특징</h3>
              <ul>
                <li><strong>GUI(Graphical User Interface)</strong>, Plug &amp; Play, 선점형 멀티태스킹을 지원합니다.</li>
                <li><strong>OLE(Object Linking and Embedding)</strong>와 같은 객체 연결·삽입 기능, 네트워크 기능, 응용프로그램별 보호된 주소공간을 제공합니다.</li>
                <li>교재의 <strong>NTVDM(NT Virtual DOS Machine)</strong>은 과거 32비트 NT 계열에서 DOS·16비트 프로그램 호환을 위해 사용된 구성요소입니다.</li>
              </ul>
              <div class="important-box"><span class="box-title">핵심 흐름</span><p><strong>하드웨어 → HAL → 커널 모드 → 시스템 서비스 → 사용자 모드 응용프로그램</strong></p></div>`
          },
          {
            id: "windows-filesystems", title: "FAT·NTFS 파일시스템",
            content: `
              <h3>FAT16 · FAT32 · NTFS</h3>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>특징</th><th>보안 관점</th></tr></thead><tbody>
                <tr><td><strong>FAT16</strong></td><td>FAT 엔트리 폭이 16비트인 초기 파일시스템으로, 교재는 파티션·클러스터 크기 제한을 강조합니다.</td><td>사용자별 접근권한 같은 보안 기능이 약합니다.</td></tr>
                <tr><td><strong>FAT32</strong></td><td>Windows 95 OSR2 계열부터 널리 사용되었으며 FAT16보다 많은 클러스터를 다룰 수 있습니다.</td><td>호환성은 좋지만 세밀한 파일 접근통제 기능이 부족합니다.</td></tr>
                <tr><td><strong>NTFS</strong><br><span class="term-en">NT File System</span></td><td>대용량 볼륨, 안정성·복구 기능, 파일/폴더 단위 권한, 압축·암호화 등 확장 기능을 제공합니다.</td><td>Windows 서버 보안에서는 일반적으로 NTFS가 적합합니다.</td></tr>
              </tbody></table></div>
              <p>FAT/FAT32에서 NTFS로는 <strong>CONVERT</strong> 유틸리티를 이용한 변환이 가능하지만, 일반적인 변환 도구로 NTFS를 FAT/FAT32로 바로 되돌리는 방식은 지원하지 않습니다.</p>
              <h3>NTFS의 디스크 구조</h3>
              <dl class="study-definitions compact-definitions">
                <div><dt>MBR</dt><dd><span class="term-en">Master Boot Record</span> · 디스크 앞부분의 부트 코드와 파티션 정보를 포함하는 전통적 부팅 구조입니다.</dd></div>
                <div><dt>VBR</dt><dd><span class="term-en">Volume Boot Record</span> · 해당 볼륨의 부팅 코드와 파일시스템 관련 정보를 가집니다.</dd></div>
                <div><dt>MFT</dt><dd><span class="term-en">Master File Table</span> · NTFS 파일·디렉터리의 속성과 위치 등 메타데이터를 엔트리 단위로 관리합니다.</dd></div>
                <div><dt>System Files / File Area</dt><dd>NTFS 동작에 필요한 시스템 메타데이터와 실제 파일 데이터가 위치하는 영역입니다.</dd></div>
              </dl>
              <div class="important-box"><span class="box-title">디스크 파괴형 악성코드</span><p>교재는 <strong>MBR 또는 VBR의 부트 코드·파티션/파일시스템 정보를 변조</strong>해 부팅을 방해하는 공격을 설명합니다. 복구를 위해 부트 정보와 중요 데이터를 별도로 백업하는 것이 중요합니다.</p></div>`
          },
          {
            id: "windows-boot", title: "윈도우 부팅 순서",
            content: `
              <p>교재에는 시험 구분을 위해 <strong>Windows XP/2000/2003 계열</strong>과 <strong>Vista/Server 2008 이후 계열</strong>의 전통적인 부팅 흐름이 함께 제시됩니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>계열</th><th>부팅 흐름</th></tr></thead><tbody>
                <tr><td><strong>XP / 2000 / 2003</strong></td><td>POST → CMOS의 부팅 장치 확인 → MBR → <strong>NTLDR</strong> → <strong>NTDETECT.com</strong> → <strong>ntoskrnl.exe</strong></td></tr>
                <tr><td><strong>Vista / Server 2008 이후</strong></td><td>POST → 부팅 장치 확인 → 부트 레코드 → <strong>Windows Boot Manager</strong>가 BCD를 읽음 → <strong>winload.exe</strong>가 커널과 부팅 드라이버를 로드</td></tr>
              </tbody></table></div>
              <ul>
                <li><strong>POST(Power-On Self-Test)</strong>: 전원 인가 후 기본 하드웨어 상태를 점검합니다.</li>
                <li><strong>NTLDR</strong>: 과거 NT 계열의 부트 로더로 boot.ini 등을 읽어 부팅 메뉴를 구성합니다.</li>
                <li><strong>NTDETECT.com</strong>: 과거 계열에서 CPU·버스·메모리·입력장치 등 하드웨어 정보를 탐지합니다.</li>
                <li><strong>BCD(Boot Configuration Data)</strong>: Vista 계열부터 부팅 설정 정보를 관리하는 저장소입니다.</li>
              </ul>`
          },
          {
            id: "windows-accounts-sid", title: "윈도우 계정·그룹과 SID",
            content: `
              <h3>기본 계정과 그룹</h3>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>계정/그룹</th><th>핵심</th></tr></thead><tbody>
                <tr><td><strong>Administrator</strong></td><td>시스템 전반을 관리하는 높은 권한의 기본 관리자 계정입니다.</td></tr>
                <tr><td><strong>SYSTEM</strong></td><td>운영체제 서비스가 사용하는 매우 높은 권한의 로컬 시스템 계정입니다.</td></tr>
                <tr><td><strong>Guest</strong></td><td>제한된 임시 접근용 기본 계정으로, 서버에서는 필요하지 않다면 비활성화하는 것이 원칙입니다.</td></tr>
                <tr><td><strong>Administrators</strong></td><td>시스템 관리 권한을 가진 관리자 그룹입니다.</td></tr>
                <tr><td><strong>Account / Backup / Print / Server Operators</strong></td><td>계정·백업·인쇄·서버 운영처럼 특정 관리 기능을 위임받는 전통적인 기본 그룹입니다.</td></tr>
                <tr><td><strong>Users</strong></td><td>일반 사용자에게 기본적인 사용 권한을 제공하는 그룹입니다.</td></tr>
              </tbody></table></div>
              <h3>SID(Security Identifier)</h3>
              <p>윈도우는 계정·그룹을 이름이 아니라 <strong>SID</strong>라는 고유 식별자로 식별합니다. SID는 Revision, Identifier Authority, Sub-authority와 RID 등의 값으로 구성됩니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>대표 SID</th><th>의미</th></tr></thead><tbody>
                <tr><td><strong>S-1-1-0</strong></td><td>Everyone</td></tr>
                <tr><td><strong>S-1-5-7</strong></td><td>Anonymous Logon</td></tr>
                <tr><td><strong>S-1-5-18</strong></td><td>Local System</td></tr>
                <tr><td><strong>S-1-5-19</strong></td><td>Local Service</td></tr>
                <tr><td><strong>S-1-5-20</strong></td><td>Network Service</td></tr>
                <tr><td><strong>S-1-5-21-…-500</strong></td><td>해당 컴퓨터/도메인의 기본 Administrator RID</td></tr>
                <tr><td><strong>S-1-5-21-…-501</strong></td><td>해당 컴퓨터/도메인의 기본 Guest RID</td></tr>
              </tbody></table></div>
              <p>로그온이 성공하면 사용자의 SID와 그룹·권한 등이 포함된 <strong>Access Token</strong>이 생성되고, 보호된 객체에 접근할 때 토큰과 객체의 접근통제 정보가 비교됩니다.</p>`
          },
          {
            id: "windows-auth-sam", title: "윈도우 인증과 SAM",
            content: `
              <h3>인증 구성요소</h3>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>구성요소</th><th>역할</th></tr></thead><tbody>
                <tr><td><strong>Winlogon</strong></td><td>대화형 로그온 절차를 시작하고 사용자 로그온을 처리합니다.</td></tr>
                <tr><td><strong>LSA</strong><br><span class="term-en">Local Security Authority</span></td><td>로컬 보안 정책과 로그온 검증 등 보안 하위 시스템의 중심 역할을 수행합니다.</td></tr>
                <tr><td><strong>SAM</strong><br><span class="term-en">Security Account Manager</span></td><td>로컬 사용자·그룹 계정 및 인증에 필요한 계정 정보를 관리합니다.</td></tr>
                <tr><td><strong>SRM</strong><br><span class="term-en">Security Reference Monitor</span></td><td>커널 영역에서 접근 토큰과 객체의 보안 정보를 이용해 접근 허용 여부를 검사합니다.</td></tr>
              </tbody></table></div>
              <h3>SAM 파일 보호</h3>
              <p>SAM 하이브 파일은 일반적으로 <strong>%SystemRoot%\\System32\\config\\SAM</strong>에 위치하며, 실행 중인 Windows에서는 운영체제가 파일 접근을 제한합니다. 권한도 Administrators·SYSTEM 등 꼭 필요한 주체로 제한해야 합니다.</p>
              <ul>
                <li>과거 NT 계열은 <strong>LM/NTLM</strong> 계열 인증을 사용했고, 도메인 환경에서는 <strong>Kerberos</strong>가 중심이 됩니다.</li>
                <li>SAM과 관련 레지스트리 하이브가 노출되면 오프라인 패스워드 해시 공격에 악용될 수 있으므로 파일·백업본의 접근권한까지 보호해야 합니다.</li>
              </ul>
              <div class="important-box"><span class="box-title">시험 핵심</span><p><strong>LSA = 보안 정책·로그온 검증 / SAM = 로컬 계정 DB / SRM = 접근 허용 여부 검사</strong></p></div>`
          },
          {
            id: "windows-permissions-sharing", title: "NTFS 권한·공유·IPC$",
            content: `
              <h3>파일과 디렉터리 접근권한</h3>
              <p>NTFS는 사용자·그룹별로 파일과 폴더에 대한 접근권한을 설정할 수 있습니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>표준 권한</th><th>핵심</th></tr></thead><tbody>
                <tr><td><strong>Full Control</strong></td><td>권한 변경·소유권을 포함한 모든 작업</td></tr>
                <tr><td><strong>Modify</strong></td><td>읽기·쓰기·실행과 삭제</td></tr>
                <tr><td><strong>Read &amp; Execute</strong></td><td>내용 읽기와 실행</td></tr>
                <tr><td><strong>List Folder Contents</strong></td><td>폴더 내용과 하위 항목 목록 확인</td></tr>
                <tr><td><strong>Read</strong></td><td>내용·속성·권한 읽기</td></tr>
                <tr><td><strong>Write</strong></td><td>파일/폴더 생성과 데이터 쓰기</td></tr>
              </tbody></table></div>
              <p>교재의 기본 규칙은 <strong>여러 허용 권한은 누적</strong>되고, <strong>명시적인 Deny는 Allow보다 우선</strong>하며, 파일에 직접 설정한 권한은 상위 폴더에서 상속된 권한보다 구체적으로 적용된다는 점입니다. 실제 평가에서는 명시/상속 여부까지 함께 확인해야 합니다.</p>
              <h3>공유 자원과 네트워크 드라이브</h3>
              <ul>
                <li>네트워크 공유는 탐색기 또는 <strong>net use</strong> 명령으로 드라이브 문자에 연결할 수 있습니다.</li>
                <li>공유 이름 끝에 <strong>$</strong>를 붙이면 일반 목록에서 숨겨지는 숨김 공유가 되지만 보안 경계가 되는 것은 아닙니다.</li>
                <li><strong>C$ · D$ · ADMIN$</strong> 등은 관리 목적의 기본 관리 공유이며 <strong>net share</strong>로 확인할 수 있습니다.</li>
                <li><strong>IPC$</strong>는 프로세스 간 통신과 네트워크 관리 기능에 사용되는 특수 공유입니다.</li>
              </ul>
              <div class="important-box"><span class="box-title">권한 계산</span><p>네트워크 공유 파일에 접근할 때는 <strong>공유 권한과 NTFS 권한을 모두 통과</strong>해야 하므로 결과적으로 더 제한적인 권한이 적용됩니다.</p></div>`
          },
          {
            id: "windows-efs-bitlocker", title: "EFS와 BitLocker",
            content: `
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>기능</th><th>보호 단위</th><th>핵심 특징</th></tr></thead><tbody>
                <tr><td><strong>EFS</strong><br><span class="term-en">Encrypting File System</span></td><td>NTFS의 파일·폴더</td><td>사용자 인증서/키를 이용해 선택한 파일이나 폴더를 암호화합니다. 접근권한만으로는 막기 어려운 오프라인 데이터 노출 위험을 줄입니다.</td></tr>
                <tr><td><strong>BitLocker</strong></td><td>볼륨/디스크</td><td>볼륨 단위 암호화를 제공하며 TPM과 연계해 부팅 환경의 무결성을 확인하고 저장장치 전체를 보호할 수 있습니다.</td></tr>
              </tbody></table></div>
              <ul>
                <li><strong>EFS</strong>는 파일 단위, <strong>BitLocker</strong>는 볼륨 단위라는 차이를 먼저 구분합니다.</li>
                <li>교재의 Windows 버전별 지원 알고리즘 표는 구형 버전을 기준으로 한 역사적 내용이므로, 시험에서는 <strong>EFS = 파일/폴더 암호화, BitLocker = 볼륨 암호화</strong>라는 기능 구분을 중심으로 봅니다.</li>
                <li>암호화는 접근통제를 대체하지 않으므로 키·복구키·인증서에 대한 별도 보호가 필요합니다.</li>
              </ul>`
          },
          {
            id: "windows-registry", title: "레지스트리 구조와 주요 하이브",
            content: `
              <p><strong>Registry</strong>는 Windows와 응용프로그램의 구성·사용자·하드웨어·보안 설정을 계층형 키와 값으로 저장하는 데이터베이스입니다. 관리에는 <strong>regedit</strong> 등의 도구를 사용합니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>루트 키</th><th>핵심 내용</th></tr></thead><tbody>
                <tr><td><strong>HKCR</strong><br>HKEY_CLASSES_ROOT</td><td>파일 확장자와 파일 형식, COM 객체 등 연결·클래스 정보를 제공합니다.</td></tr>
                <tr><td><strong>HKCU</strong><br>HKEY_CURRENT_USER</td><td>현재 로그인한 사용자의 데스크톱·환경·응용프로그램 설정을 제공합니다.</td></tr>
                <tr><td><strong>HKLM</strong><br>HKEY_LOCAL_MACHINE</td><td>컴퓨터 전체의 하드웨어·시스템·소프트웨어·보안 관련 설정을 저장합니다.</td></tr>
                <tr><td><strong>HKU</strong><br>HKEY_USERS</td><td>시스템에 로드된 사용자 프로필별 설정을 보관합니다.</td></tr>
                <tr><td><strong>HKCC</strong><br>HKEY_CURRENT_CONFIG</td><td>현재 하드웨어 프로필과 관련된 구성 정보를 제공합니다.</td></tr>
              </tbody></table></div>
              <h3>HKLM의 주요 하이브</h3>
              <dl class="study-definitions compact-definitions">
                <div><dt>HARDWARE</dt><dd>현재 탐지된 하드웨어와 드라이버 매핑 등의 동적 정보</dd></div>
                <div><dt>SAM</dt><dd>로컬 사용자·그룹 계정과 인증 관련 정보</dd></div>
                <div><dt>SECURITY</dt><dd>LSA 보안 정책과 시스템 보안 관련 정보</dd></div>
                <div><dt>SOFTWARE</dt><dd>설치된 소프트웨어와 시스템 전체 응용프로그램 설정</dd></div>
                <div><dt>SYSTEM</dt><dd>부팅과 서비스·드라이버·CurrentControlSet 등 시스템 동작 설정</dd></div>
              </dl>`
          },
          {
            id: "registry-security-attacks", title: "레지스트리 보호와 공격 흔적",
            content: `
              <h3>레지스트리 보호</h3>
              <ul>
                <li>레지스트리는 중요 설정을 담고 있으므로 관리자 권한과 <strong>UAC(User Account Control)</strong>를 이용해 불필요한 변경을 제한합니다.</li>
                <li>변경 전 시스템 복원 지점/백업을 준비하고, 필요한 경우 키를 <strong>.reg</strong> 파일로 내보내 복구 가능성을 확보합니다.</li>
              </ul>
              <h3>부팅·로그온 시 자동실행에 악용되는 대표 위치</h3>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>범위</th><th>대표 키</th></tr></thead><tbody>
                <tr><td>현재 사용자 · 매번 실행</td><td><strong>HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run</strong></td></tr>
                <tr><td>현재 사용자 · 1회 실행</td><td><strong>HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\RunOnce</strong></td></tr>
                <tr><td>전체 사용자 · 매번 실행</td><td><strong>HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run</strong></td></tr>
                <tr><td>전체 사용자 · 1회 실행</td><td><strong>HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\RunOnce</strong></td></tr>
              </tbody></table></div>
              <p>파일 확장자 연결 정보는 <strong>HKCR</strong> 아래의 클래스/명령 설정과 연결되며, 공격자가 실행 명령을 변조하면 특정 파일 형식 실행 시 악성 프로그램이 함께 실행되도록 만들 수 있습니다.</p>
              <h3>포렌식에 활용되는 대표 정보</h3>
              <ul>
                <li>최근 사용 문서 목록: <strong>RecentDocs</strong> 계열 키</li>
                <li>원격 데스크톱/터미널 서비스 접속 흔적: <strong>Terminal Server Client</strong> 관련 키</li>
                <li>설치 소프트웨어·사용자 프로그램 설정: <strong>HKCU\\Software</strong> 등</li>
                <li>열기/저장 대화상자 사용 흔적: <strong>OpenSaveMRU</strong> 계열 키</li>
              </ul>`
          },
          {
            id: "windows-firewall-account-hardening", title: "방화벽과 계정 보안 설정",
            content: `
              <h3>Windows 방화벽</h3>
              <p>Windows 방화벽은 네트워크에서 들어오고 나가는 트래픽을 규칙에 따라 허용·차단하여 호스트를 보호합니다. 서비스·프로그램·포트별로 필요한 통신만 허용하는 <strong>최소 허용 원칙</strong>이 중요합니다.</p>
              <h3>계정 관리 보안</h3>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>설정</th><th>목적</th></tr></thead><tbody>
                <tr><td><strong>Administrator 이름 변경</strong></td><td>기본 관리자 계정 이름을 그대로 노출해 공격 대상이 되는 위험을 줄입니다.</td></tr>
                <tr><td><strong>Guest 계정 비활성화/이름 변경</strong></td><td>불필요한 익명·저권한 진입점을 줄입니다.</td></tr>
                <tr><td><strong>계정 잠금 임계값·잠금 기간</strong></td><td>반복 로그인 실패에 계정 잠금을 적용해 패스워드 추측 공격의 효율을 낮춥니다.</td></tr>
                <tr><td><strong>Administrators 그룹 최소화</strong></td><td>관리자 그룹에는 관리 업무에 필요한 최소 사용자만 포함합니다.</td></tr>
                <tr><td><strong>패스워드 정책</strong></td><td>교재 예시는 최소 길이 8자, 최대 사용 기간 90일 등 조직 정책에 따른 복잡도·사용기간 통제를 설명합니다.</td></tr>
              </tbody></table></div>
              <div class="important-box"><span class="box-title">주의</span><p>교재의 패스워드 길이·기간 숫자는 시험용 예시/정책 값입니다. 실제 운영에서는 조직의 최신 보안 기준과 적용 환경에 맞춰 더 강한 정책을 사용할 수 있습니다.</p></div>`
          },
          {
            id: "windows-service-hardening", title: "공유·Null Session·서비스 보안",
            content: `
              <h3>공유 권한과 사용자 그룹</h3>
              <p>공유 폴더에 <strong>Everyone</strong>이 불필요하게 포함되어 있으면 익명 또는 불필요한 사용자까지 접근할 가능성이 있으므로 제거하고 업무상 필요한 사용자·그룹에만 최소 권한을 부여합니다.</p>
              <h3>기본 관리 공유</h3>
              <p><strong>C$ · D$ · ADMIN$ · IPC$</strong> 등 기본 공유는 관리 목적으로 생성됩니다. 필요에 따라 공유를 제한하되, 단순히 <strong>net share … /delete</strong>로 삭제하면 재부팅 후 다시 생성될 수 있으므로 운영정책과 관련 서비스/레지스트리 설정까지 함께 점검해야 합니다.</p>
              <h3>Null Session 차단</h3>
              <p><strong>Null Session</strong>은 사용자 인증 정보 없이 IPC$ 등에 연결하는 익명 세션을 뜻합니다. 구형 Windows 환경에서는 다음과 같은 <strong>RestrictAnonymous</strong> 정책/레지스트리 값으로 익명 열거·접근을 제한했습니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>값</th><th>교재 기준 의미</th></tr></thead><tbody>
                <tr><td><strong>0</strong></td><td>익명 접근 제한 없음</td></tr>
                <tr><td><strong>1</strong></td><td>SAM 계정·공유 등의 익명 열거 제한</td></tr>
                <tr><td><strong>2</strong></td><td>명시적인 익명 권한이 없는 접근을 더 강하게 제한</td></tr>
              </tbody></table></div>
              <h3>불필요한 서비스 제거</h3>
              <p>사용하지 않는 서비스는 공격 표면을 넓힐 수 있으므로 <strong>사용 목적을 확인한 뒤 중지·사용 안 함</strong>으로 설정합니다.</p>
              <ul>
                <li>교재의 대표 예: <strong>Alerter, ClipBook, Messenger, Simple TCP/IP Services</strong></li>
                <li>Simple TCP/IP Services 예: Echo, Discard, Character Generator, Daytime, Quote of the Day</li>
              </ul>
              <div class="important-box"><span class="box-title">운영 원칙</span><p>서비스는 이름만 보고 무조건 삭제하기보다 <strong>업무 영향과 의존성을 확인한 뒤 불필요한 것만 비활성화</strong>합니다.</p></div>`
          },
          {
            id: "windows-audit-patch", title: "감사정책과 패치 관리",
            content: `
              <h3>감사 정책에 따른 시스템 로깅</h3>
              <p>감사 설정이 너무 약하면 침해사고 원인 분석과 법적 증거 확보가 어렵고, 지나치게 많은 항목을 감사하면 중요 이벤트가 묻히고 로그·시스템 부담이 커질 수 있습니다. 따라서 <strong>보안정책에 따라 필요한 성공/실패 이벤트를 선택해 감사</strong>해야 합니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>대표 감사 범주</th><th>확인 대상</th></tr></thead><tbody>
                <tr><td><strong>계정 로그온 / 로그온 이벤트</strong></td><td>인증·로그온의 성공과 실패</td></tr>
                <tr><td><strong>계정 관리</strong></td><td>사용자·그룹 계정의 생성·변경·삭제</td></tr>
                <tr><td><strong>개체 액세스</strong></td><td>감사 대상 파일·폴더·레지스트리 등 객체 접근</td></tr>
                <tr><td><strong>정책 변경</strong></td><td>보안·감사 정책의 변경</td></tr>
                <tr><td><strong>권한 사용</strong></td><td>특권·사용자 권한의 사용</td></tr>
                <tr><td><strong>프로세스 추적</strong></td><td>프로세스 생성·종료 등 상세 추적</td></tr>
                <tr><td><strong>시스템 이벤트</strong></td><td>시스템 시작·종료 및 보안 관련 시스템 사건</td></tr>
              </tbody></table></div>
              <h3>패치 관리</h3>
              <p>운영체제와 서비스의 알려진 취약점을 줄이기 위해 <strong>보안 패치를 지속적으로 적용</strong>하고, 적용 전 호환성·업무 영향을 검토하며 적용 결과와 이상 여부를 감사 로그로 확인합니다.</p>
              <div class="important-box"><span class="box-title">SECTION 14 핵심 연결</span><p><strong>계정 최소화 → NTFS·공유 최소권한 → SAM·레지스트리 보호 → 불필요 서비스/익명 접근 차단 → 방화벽·패치 → 감사 로그로 추적</strong></p></div>`
          }
        ],
        content: ""
      },
      {
        id: "section-15", number: 15, title: "유닉스/리눅스 서버 보안",
        subtopics: [
          {
            id: "unix-overview", title: "UNIX 개요와 시스템 구조",
            content: `
              <p><strong>UNIX</strong>는 다중 사용자·다중 작업을 지원하는 대화식 운영체제로, 하드웨어 위에 <strong>Kernel → Shell → Utility/Application</strong>이 계층적으로 구성됩니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>특징</th><th>핵심 내용</th></tr></thead><tbody>
                <tr><td><strong>대화식 운영체제</strong></td><td>사용자가 명령을 입력하면 Shell이 해석하고 결과를 돌려줍니다.</td></tr>
                <tr><td><strong>다중 사용자</strong></td><td>여러 사용자가 동시에 접속해 시스템 자원을 공유합니다.</td></tr>
                <tr><td><strong>다중 작업</strong></td><td>여러 프로세스를 동시에 실행·관리합니다.</td></tr>
                <tr><td><strong>높은 이식성</strong></td><td>대부분 C 언어로 작성되어 서로 다른 하드웨어로 이식하기 쉽습니다.</td></tr>
                <tr><td><strong>계층적 파일시스템</strong></td><td>루트 디렉터리 <strong>/</strong>를 기준으로 파일과 디렉터리가 트리 구조를 이룹니다.</td></tr>
                <tr><td><strong>도구의 조합</strong></td><td>작은 명령을 파이프·리다이렉션으로 조합해 복잡한 작업을 처리합니다.</td></tr>
              </tbody></table></div>
              <h3>Kernel과 Shell</h3>
              <ul>
                <li><strong>Kernel</strong>: CPU·메모리·디스크·입출력 장치와 프로세스를 관리하고 시스템 호출을 제공합니다.</li>
                <li><strong>Shell</strong>: 사용자 명령을 해석하여 Kernel이 수행하도록 전달하는 명령 해석기입니다. 대표적으로 Bourne Shell, Bash, C Shell, Korn Shell, Tcsh 등이 있습니다.</li>
              </ul>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>계열</th><th>대표 UNIX/운영체제</th></tr></thead><tbody>
                <tr><td>Oracle</td><td>Solaris</td></tr><tr><td>IBM</td><td>AIX</td></tr><tr><td>HP</td><td>HP-UX</td></tr><tr><td>Open Source</td><td>Linux</td></tr><tr><td>University</td><td>BSD 계열</td></tr>
              </tbody></table></div>`
          },
          {
            id: "unix-filesystem-structure", title: "디렉터리와 파일시스템 구조",
            content: `
              <h3>주요 디렉터리</h3>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>디렉터리</th><th>주요 용도</th></tr></thead><tbody>
                <tr><td><strong>/</strong></td><td>모든 파일과 디렉터리의 시작점인 루트 디렉터리</td></tr>
                <tr><td><strong>/etc</strong></td><td>시스템·서비스의 주요 설정 파일</td></tr>
                <tr><td><strong>/bin</strong></td><td>일반 사용자와 시스템이 사용하는 기본 실행 명령</td></tr>
                <tr><td><strong>/dev</strong></td><td>디스크·터미널 등 장치를 나타내는 장치 파일</td></tr>
                <tr><td><strong>/usr</strong></td><td>응용프로그램·라이브러리·공유 데이터</td></tr>
                <tr><td><strong>/var</strong></td><td>로그·메일·스풀 등 실행 중 크기가 변하는 데이터</td></tr>
                <tr><td><strong>/tmp</strong></td><td>임시 파일 저장 공간</td></tr>
                <tr><td><strong>/home</strong></td><td>일반 사용자의 홈 디렉터리</td></tr>
                <tr><td><strong>/mnt</strong></td><td>파일시스템을 일시적으로 연결하는 마운트 지점</td></tr>
              </tbody></table></div>
              <h3>파일시스템의 논리 구조</h3>
              <dl class="study-definitions compact-definitions">
                <div><dt>Boot Block</dt><dd>파일시스템 앞부분의 부팅 코드 영역</dd></div>
                <div><dt>Super Block</dt><dd>파일시스템 크기, 블록 수, 사용 가능한 블록·inode 등 전체 관리정보</dd></div>
                <div><dt>i-node List</dt><dd>파일 유형·권한·소유자·크기·시간정보·데이터 블록 주소 등 파일 메타데이터</dd></div>
                <div><dt>Data Block</dt><dd>파일의 실제 내용과 디렉터리 엔트리가 저장되는 영역</dd></div>
              </dl>
              <p><strong>i-node</strong>에는 파일명이 직접 저장되지 않습니다. 디렉터리 엔트리가 <strong>파일명과 i-node 번호</strong>를 연결하며, i-node는 링크 수·UID·GID·파일 크기·atime·mtime·ctime·직접/간접 블록 주소 등을 가집니다.</p>
              <div class="important-box"><span class="box-title">핵심 구분</span><p><strong>디렉터리 엔트리 = 파일명 ↔ i-node 번호 / i-node = 파일의 속성과 데이터 위치</strong></p></div>`
          },
          {
            id: "unix-commands-permissions", title: "파일 명령과 접근권한",
            content: `
              <h3>기본 디렉터리·파일 명령</h3>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>목적</th><th>대표 명령</th></tr></thead><tbody>
                <tr><td>현재 위치·목록</td><td><strong>pwd, ls, ls -l</strong></td></tr>
                <tr><td>디렉터리 이동·생성·삭제</td><td><strong>cd, mkdir, rmdir</strong></td></tr>
                <tr><td>파일 생성·복사·이동·삭제</td><td><strong>touch, cp, mv, rm</strong></td></tr>
                <tr><td>파일 내용 확인</td><td><strong>cat, more, head, tail</strong></td></tr>
              </tbody></table></div>
              <h3><code>ls -l</code> 출력과 권한</h3>
              <p>첫 글자는 파일 유형, 이어지는 9글자는 <strong>소유자(User)·그룹(Group)·기타 사용자(Other)</strong>의 권한을 각각 3비트씩 나타냅니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>기호</th><th>파일</th><th>디렉터리</th><th>숫자값</th></tr></thead><tbody>
                <tr><td><strong>r</strong></td><td>내용 읽기</td><td>목록 확인</td><td>4</td></tr>
                <tr><td><strong>w</strong></td><td>내용 수정</td><td>파일 생성·삭제·이름 변경</td><td>2</td></tr>
                <tr><td><strong>x</strong></td><td>실행</td><td>디렉터리 진입·하위 객체 접근</td><td>1</td></tr>
              </tbody></table></div>
              <p>대표 파일 유형은 <strong>- 일반 파일, d 디렉터리, b 블록 장치, c 문자 장치, l 심볼릭 링크, p Named Pipe, s Socket</strong>입니다.</p>
              <div class="important-box"><span class="box-title">권한 계산</span><p><strong>rwx = 4 + 2 + 1 = 7</strong> · 예: <strong>750 = 소유자 rwx / 그룹 r-x / 기타 사용자 ---</strong></p></div>`
          },
          {
            id: "unix-permission-management", title: "chmod·chown·chgrp",
            content: `
              <h3>권한과 소유권 변경</h3>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>명령</th><th>용도</th><th>예시</th></tr></thead><tbody>
                <tr><td><strong>chmod</strong></td><td>파일·디렉터리의 접근권한 변경</td><td><code>chmod 640 report.txt</code><br><code>chmod u+x script.sh</code></td></tr>
                <tr><td><strong>chown</strong></td><td>소유자 또는 소유자·그룹 변경</td><td><code>chown user:group file</code></td></tr>
                <tr><td><strong>chgrp</strong></td><td>소유 그룹 변경</td><td><code>chgrp security file</code></td></tr>
              </tbody></table></div>
              <p>기호 모드는 <strong>u(User), g(Group), o(Other), a(All)</strong>와 <strong>+, -, =</strong>를 조합합니다. 숫자 모드는 r=4, w=2, x=1을 각 주체별로 합산합니다.</p>
              <ul>
                <li>파일 소유자는 일반적으로 자신이 소유한 파일의 권한을 변경할 수 있습니다.</li>
                <li>소유자 변경은 시스템에 따라 관리자 권한이 요구되며, 중요 파일은 소유자·그룹과 권한을 함께 점검합니다.</li>
                <li>권한을 과도하게 넓히는 <strong>777</strong> 설정은 피하고 업무상 필요한 최소 권한만 부여합니다.</li>
              </ul>`
          },
          {
            id: "unix-process-init", title: "프로세스와 init",
            content: `
              <p><strong>Process</strong>는 실행 중인 프로그램입니다. 각 프로세스는 고유한 <strong>PID(Process ID)</strong>를 가지며 부모 프로세스가 자식 프로세스를 생성하는 계층 구조를 이룹니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>전통적 PID</th><th>프로세스</th><th>핵심 역할</th></tr></thead><tbody>
                <tr><td><strong>0</strong></td><td>swapper/scheduler</td><td>초기 커널 프로세스와 스케줄링 관련 역할</td></tr>
                <tr><td><strong>1</strong></td><td>init</td><td>시스템 초기화 후 각종 서비스 프로세스를 시작·관리하는 최초 사용자 공간 프로세스</td></tr>
                <tr><td><strong>2</strong></td><td>pagedaemon 계열</td><td>전통 UNIX에서 가상 메모리 페이지 관리와 관련된 커널 프로세스</td></tr>
              </tbody></table></div>
              <h3>프로세스 상태와 관계</h3>
              <ul>
                <li><strong>fork</strong>로 자식 프로세스를 만들고 <strong>exec</strong> 계열 호출로 다른 프로그램을 실행합니다.</li>
                <li>부모가 종료 상태를 회수하지 않은 자식은 <strong>Zombie</strong>, 부모보다 먼저 남겨진 자식은 init/systemd 계열이 인계할 수 있습니다.</li>
                <li>서비스처럼 백그라운드에서 지속적으로 동작하는 프로세스를 <strong>Daemon</strong>이라고 합니다.</li>
              </ul>
              <div class="important-box"><span class="box-title">시험 관점</span><p>교재의 <strong>PID 0·1·2</strong> 설명은 전통 UNIX 기준입니다. 현대 Linux는 systemd와 커널 스레드 구성에 따라 표시 방식이 다를 수 있습니다.</p></div>`
          },
          {
            id: "unix-runlevel-mount", title: "부팅·Run Level·마운트",
            content: `
              <h3>System V 계열 Run Level</h3>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>레벨</th><th>전통적 의미</th></tr></thead><tbody>
                <tr><td><strong>0</strong></td><td>시스템 종료</td></tr><tr><td><strong>S/s</strong></td><td>단일 사용자 모드</td></tr><tr><td><strong>1</strong></td><td>관리 목적의 단일 사용자 모드</td></tr><tr><td><strong>2</strong></td><td>다중 사용자 모드(배포판별 네트워크 서비스 차이)</td></tr><tr><td><strong>3</strong></td><td>네트워크가 가능한 다중 사용자 텍스트 모드</td></tr><tr><td><strong>4</strong></td><td>사용자 정의/미사용</td></tr><tr><td><strong>5</strong></td><td>그래픽 로그인 다중 사용자 모드</td></tr><tr><td><strong>6</strong></td><td>재부팅</td></tr>
              </tbody></table></div>
              <p>전통적인 init은 설정에 따라 Run Level별 스크립트를 실행해 서비스를 시작·중지합니다. 현대 Linux의 <strong>systemd target</strong>은 이 개념을 대체하지만 시험에서는 전통 Run Level 표를 구분해야 합니다.</p>
              <h3>파일시스템 연결</h3>
              <ul>
                <li><strong>mount</strong>: 장치의 파일시스템을 디렉터리 트리에 연결합니다. 예: <code>mount /dev/sdb1 /mnt/data</code></li>
                <li><strong>umount</strong>: 사용 중인 연결을 해제합니다. 열린 파일·현재 작업 디렉터리 등 사용 중인 상태에서는 실패할 수 있습니다.</li>
                <li><strong>/etc/fstab</strong>: 부팅 시 또는 관리 명령에서 사용할 장치·마운트 지점·파일시스템·옵션을 정의합니다.</li>
              </ul>`
          },
          {
            id: "cron-crontab", title: "cron·crontab 정기 작업",
            content: `
              <p><strong>cron</strong>은 정해진 시간에 명령을 실행하는 데몬이며, <strong>crontab</strong>은 실행할 시간과 명령을 기록한 설정입니다. 반복 작업·백업·로그 정리 등에 사용하지만 공격자가 지속성 확보 수단으로 악용할 수 있으므로 등록 내역과 권한을 점검해야 합니다.</p>
              <h3>사용자 crontab의 5개 시간 필드</h3>
              <div class="code-block"><code>분  시  일  월  요일  실행할_명령</code></div>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>필드</th><th>범위</th></tr></thead><tbody>
                <tr><td>분</td><td>0~59</td></tr><tr><td>시</td><td>0~23</td></tr><tr><td>일</td><td>1~31</td></tr><tr><td>월</td><td>1~12</td></tr><tr><td>요일</td><td>0~7(0과 7은 일요일로 취급 가능)</td></tr>
              </tbody></table></div>
              <ul>
                <li><strong>*</strong> 모든 값, <strong>-</strong> 범위, <strong>,</strong> 목록, <strong>/</strong> 간격을 뜻합니다.</li>
                <li>시스템 crontab은 시간 필드 뒤에 <strong>실행 사용자</strong> 필드가 추가될 수 있습니다.</li>
                <li><code>crontab -l</code> 목록 확인, <code>crontab -e</code> 편집, <code>crontab -r</code> 삭제에 사용합니다.</li>
              </ul>`
          },
          {
            id: "unix-account-files", title: "/etc/passwd와 /etc/shadow",
            content: `
              <h3><code>/etc/passwd</code>의 7개 필드</h3>
              <div class="code-block"><code>login_name : password : UID : GID : comment : home_directory : login_shell</code></div>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>필드</th><th>의미</th></tr></thead><tbody>
                <tr><td>login name</td><td>사용자 계정명</td></tr><tr><td>password</td><td><strong>x</strong> 등이 있으면 암호 정보가 shadow에 분리되었음을 의미</td></tr><tr><td>UID</td><td>사용자 식별번호</td></tr><tr><td>GID</td><td>기본 그룹 식별번호</td></tr><tr><td>comment</td><td>사용자 설명 정보</td></tr><tr><td>home</td><td>로그인 후 시작 디렉터리</td></tr><tr><td>shell</td><td>로그인 시 실행할 Shell</td></tr>
              </tbody></table></div>
              <h3><code>/etc/shadow</code>의 주요 필드</h3>
              <div class="code-block"><code>username : password_hash : lastchg : min : max : warn : inactive : expire : reserved</code></div>
              <ul>
                <li><strong>lastchg</strong>: 1970-01-01부터 마지막 패스워드 변경일까지의 일수</li>
                <li><strong>min/max</strong>: 최소·최대 사용 일수</li>
                <li><strong>warn</strong>: 만료 전 경고 일수, <strong>inactive</strong>: 만료 후 비활성화까지의 일수</li>
                <li><strong>expire</strong>: 계정 만료일을 1970-01-01부터의 일수로 표시</li>
              </ul>
              <p><code>pwconv</code>는 패스워드 정보를 shadow 체계로 전환하는 데 사용됩니다. <code>/etc/passwd</code>는 계정 조회를 위해 일반 읽기가 가능할 수 있으므로 <strong>해시가 직접 저장되지 않도록</strong> 점검합니다.</p>`
          },
          {
            id: "unix-password-policy", title: "계정·패스워드 정책과 umask",
            content: `
              <h3>계정 관리 핵심</h3>
              <ul>
                <li><strong>UID 0</strong>은 root와 같은 관리자 권한을 의미하므로 root 이외의 UID 0 계정이 있는지 확인합니다.</li>
                <li>로그인이 필요 없는 시스템 계정은 <strong>/sbin/nologin</strong> 또는 적절한 비로그인 Shell을 사용합니다.</li>
                <li>사용하지 않는 계정은 잠금·삭제하고, 비밀번호 없는 계정과 불필요한 공용 계정을 금지합니다.</li>
              </ul>
              <h3>패스워드 점검 기준</h3>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>항목</th><th>교재의 대표 기준</th><th>Linux 대표 위치</th></tr></thead><tbody>
                <tr><td>최소 길이</td><td><strong>8자 이상</strong></td><td><code>/etc/login.defs</code>, PAM 품질 모듈 설정</td></tr>
                <tr><td>최대 사용기간</td><td><strong>90일 이하</strong></td><td><code>PASS_MAX_DAYS 90</code></td></tr>
                <tr><td>최소 사용기간</td><td><strong>1일 이상</strong></td><td><code>PASS_MIN_DAYS 1</code></td></tr>
                <tr><td>로그인 실패 잠금</td><td>조직 정책에 따른 임계값</td><td>PAM의 <code>pam_faillock</code> 등</td></tr>
              </tbody></table></div>
              <div class="important-box"><span class="box-title">시험 기준과 현행 운영</span><p>8자·90일·1일은 교재의 대표 점검값입니다. 실제 운영에서는 조직의 최신 정책, MFA 적용 여부와 인증 환경을 함께 고려합니다.</p></div>
              <h3>umask</h3>
              <p><strong>umask</strong>는 새 파일·디렉터리의 기본 권한에서 제거할 권한을 지정합니다. 일반적으로 파일은 666, 디렉터리는 777을 기준으로 계산하며, 예를 들어 <strong>umask 022 → 파일 644·디렉터리 755</strong>가 됩니다.</p>`
          },
          {
            id: "unix-special-permissions", title: "SetUID·SetGID·Sticky Bit",
            content: `
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>특수권한</th><th>기호/8진수</th><th>동작</th></tr></thead><tbody>
                <tr><td><strong>SetUID</strong></td><td>소유자 x 위치의 s / <strong>4000</strong></td><td>실행 중 프로세스의 EUID가 파일 소유자 권한을 사용</td></tr>
                <tr><td><strong>SetGID</strong></td><td>그룹 x 위치의 s / <strong>2000</strong></td><td>실행 파일은 파일 그룹 권한 사용, 디렉터리는 새 파일이 상위 디렉터리 그룹을 상속</td></tr>
                <tr><td><strong>Sticky Bit</strong></td><td>기타 x 위치의 t / <strong>1000</strong></td><td>공용 디렉터리에서 파일 소유자·디렉터리 소유자·root만 삭제/이름 변경 가능</td></tr>
              </tbody></table></div>
              <p><strong>RUID/RGID</strong>는 프로세스를 실행한 실제 사용자·그룹, <strong>EUID/EGID</strong>는 파일 접근권한 판단에 사용되는 유효 사용자·그룹입니다. SetUID/SetGID 프로그램은 실행 중 유효 권한을 바꿀 수 있습니다.</p>
              <ul>
                <li>root 소유 SetUID 프로그램의 취약점은 관리자 권한 획득으로 이어질 수 있으므로 불필요한 설정을 제거합니다.</li>
                <li><code>find / -perm -4000 -type f</code>, <code>find / -perm -2000 -type f</code> 등으로 목록을 점검할 수 있습니다.</li>
                <li><strong>/tmp</strong>와 같은 공용 디렉터리는 일반적으로 Sticky Bit를 사용합니다.</li>
              </ul>
              <div class="important-box"><span class="box-title">기호 암기</span><p><strong>SetUID = u+s / SetGID = g+s / Sticky = o+t</strong></p></div>`
          },
          {
            id: "inetd-tcp-wrapper", title: "inetd와 TCP Wrapper",
            content: `
              <h3>inetd Super Server</h3>
              <p><strong>inetd</strong>는 여러 네트워크 서비스의 연결 요청을 대신 기다리다가 요청이 오면 해당 서버 프로그램을 실행하는 전통적인 Super Server입니다. <code>/etc/inetd.conf</code>는 다음 필드로 서비스를 정의합니다.</p>
              <div class="code-block"><code>service  socket_type  protocol  wait/nowait  user  server_program  arguments</code></div>
              <p>사용하지 않는 서비스는 설정을 주석 처리·비활성화하고, 설정 변경 뒤 inetd가 다시 읽도록 조치합니다. 현대 Linux에서는 systemd socket activation 또는 개별 데몬이 이를 대신하는 경우가 많습니다.</p>
              <h3>TCP Wrapper</h3>
              <p><strong>TCP Wrapper</strong>는 inetd와 실제 서비스 사이에서 <strong>tcpd</strong>가 클라이언트 정보를 확인해 접근을 허용·거부하고 기록을 남기는 방식입니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>파일</th><th>역할</th></tr></thead><tbody>
                <tr><td><strong>/etc/hosts.allow</strong></td><td>먼저 검사하는 허용 규칙</td></tr>
                <tr><td><strong>/etc/hosts.deny</strong></td><td>allow에 일치하지 않을 때 검사하는 거부 규칙</td></tr>
              </tbody></table></div>
              <div class="code-block"><code>daemon_list : client_list [ : shell_command ]</code></div>
              <p>판정 순서는 <strong>hosts.allow 일치 → 허용 / hosts.deny 일치 → 거부 / 둘 다 불일치 → 기본 허용</strong>입니다. 따라서 대표적인 제한 정책은 <code>hosts.deny</code>에 <strong>ALL: ALL</strong>을 두고 필요한 대상만 <code>hosts.allow</code>에 등록하는 방식입니다.</p>
              <p>대표 패턴은 <strong>ALL, LOCAL, KNOWN, UNKNOWN, PARANOID, EXCEPT</strong>입니다. TCP Wrapper는 해당 방식으로 연동된 서비스에만 적용된다는 점을 주의합니다.</p>`
          },
          {
            id: "pam", title: "PAM 인증 프레임워크",
            content: `
              <p><strong>PAM(Pluggable Authentication Modules)</strong>은 응용프로그램과 인증 방식 사이를 분리하는 공통 인증 프레임워크입니다. 로그인·FTP·Telnet·SSH 같은 프로그램은 PAM API를 호출하고, 관리자는 서비스별 설정에서 필요한 모듈을 조합합니다.</p>
              <div class="important-box"><span class="box-title">구조</span><p><strong>응용프로그램 → PAM API → 서비스별 PAM 설정 → 인증 모듈</strong></p></div>
              <h3>설정 형식</h3>
              <div class="code-block"><code>type  control  module-path  module-arguments</code></div>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>type</th><th>역할</th></tr></thead><tbody>
                <tr><td><strong>auth</strong></td><td>패스워드·OTP·생체정보 등으로 사용자 신원 인증</td></tr>
                <tr><td><strong>account</strong></td><td>계정 만료·접속시간·접속 위치 등 계정 사용 가능 여부 확인</td></tr>
                <tr><td><strong>password</strong></td><td>패스워드 변경과 복잡도·이력 등 정책 적용</td></tr>
                <tr><td><strong>session</strong></td><td>로그인 전후 자원·로그·환경 등 세션 처리</td></tr>
              </tbody></table></div>
              <h3>control 플래그</h3>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>플래그</th><th>핵심 동작</th></tr></thead><tbody>
                <tr><td><strong>requisite</strong></td><td>실패하면 즉시 전체 실패로 종료</td></tr>
                <tr><td><strong>required</strong></td><td>실패해도 나머지를 수행하지만 최종 결과는 실패</td></tr>
                <tr><td><strong>sufficient</strong></td><td>앞선 required 실패가 없다면 성공 시 즉시 전체 성공 가능</td></tr>
                <tr><td><strong>optional</strong></td><td>대개 다른 결정적 모듈이 없을 때만 결과에 영향</td></tr>
              </tbody></table></div>`
          },
          {
            id: "linux-filesystems", title: "Linux와 주요 파일시스템",
            content: `
              <p><strong>Linux</strong>는 UNIX 계열의 오픈소스 운영체제 커널로, 1991년 Linus Torvalds가 공개한 커널에서 출발했습니다. GNU 도구와 결합된 다양한 배포판이 서버·PC·임베디드 환경에서 사용됩니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>파일시스템</th><th>핵심 특징</th></tr></thead><tbody>
                <tr><td><strong>Minix</strong></td><td>초기 Linux에서 사용된 단순한 파일시스템</td></tr>
                <tr><td><strong>ext</strong></td><td>Linux 초기 Extended File System</td></tr>
                <tr><td><strong>ext2</strong></td><td>Second Extended FS, 저널링이 없어 비정상 종료 뒤 fsck 시간이 길 수 있음</td></tr>
                <tr><td><strong>ext3</strong></td><td>ext2에 저널링을 추가해 복구 성능을 개선</td></tr>
                <tr><td><strong>ReiserFS</strong></td><td>저널링과 작은 파일 처리 특성을 가진 Linux 파일시스템</td></tr>
                <tr><td><strong>XFS</strong></td><td>대용량·고성능 환경을 위한 저널링 파일시스템</td></tr>
                <tr><td><strong>msdos / umsdos</strong></td><td>DOS 계열 파일시스템 호환</td></tr>
                <tr><td><strong>iso9660</strong></td><td>CD-ROM용 표준 파일시스템</td></tr>
                <tr><td><strong>NFS</strong></td><td>원격 파일시스템을 네트워크로 공유·마운트</td></tr>
                <tr><td><strong>proc</strong></td><td>프로세스·커널 정보를 파일처럼 제공하는 가상 파일시스템</td></tr>
              </tbody></table></div>
              <div class="important-box"><span class="box-title">저널링</span><p>변경 내용을 Journal에 먼저 기록하여 비정상 종료 뒤 일관성 회복 시간을 줄입니다. <strong>ext2 = 비저널링 / ext3 = 저널링</strong>을 우선 구분합니다.</p></div>`
          },
          {
            id: "root-login-account-lock", title: "root 원격 접속과 계정 잠금",
            content: `
              <h3>root 원격 직접 접속 제한</h3>
              <p>root가 원격에서 직접 로그인하면 관리자 계정명이 고정된 상태로 공격 대상이 되고 사용자별 행위 추적도 어려워집니다. 일반 계정으로 접속한 뒤 승인된 경우에만 <strong>su/sudo</strong>로 권한을 상승하도록 구성합니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>OS/서비스</th><th>교재의 대표 점검 위치·항목</th></tr></thead><tbody>
                <tr><td>SunOS</td><td><code>/etc/default/login</code>의 <strong>CONSOLE=/dev/console</strong></td></tr>
                <tr><td>Linux Telnet 계열</td><td><code>/etc/securetty</code>에서 원격 터미널 항목 제한</td></tr>
                <tr><td>SSH</td><td><code>sshd_config</code>의 <strong>PermitRootLogin</strong> 제한</td></tr>
                <tr><td>AIX</td><td><code>/etc/security/user</code>의 root <strong>rlogin=false</strong></td></tr>
                <tr><td>HP-UX</td><td><code>/etc/securetty</code> 등 해당 버전의 보안 설정 확인</td></tr>
              </tbody></table></div>
              <h3>로그인 실패 잠금</h3>
              <p>반복 인증 실패에 잠금 임계값을 적용해 Brute Force 공격을 제한합니다. 교재에는 Solaris의 RETRIES, AIX의 loginretries, HP-UX의 AUTH_MAXTRIES, Linux PAM 모듈 설정이 OS별 예로 제시됩니다.</p>
              <div class="important-box"><span class="box-title">현행 Linux</span><p>교재의 <strong>pam_tally/pam_tally2</strong>는 구형 예시입니다. 최신 배포판에서는 <strong>pam_faillock</strong> 사용 여부와 배포판 정책 파일을 확인합니다.</p></div>`
          },
          {
            id: "password-policy-os-checks", title: "OS별 패스워드 보안 점검",
            content: `
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>점검 항목</th><th>핵심 조치</th><th>대표 확인 예</th></tr></thead><tbody>
                <tr><td><strong>Shadow 사용</strong></td><td>패스워드 해시를 일반 계정 파일과 분리하고 shadow 권한 제한</td><td><code>/etc/passwd</code> 두 번째 필드가 x인지, <code>/etc/shadow</code> 존재·권한 확인</td></tr>
                <tr><td><strong>UID 0 최소화</strong></td><td>UID 0은 root 계정에만 부여</td><td><code>/etc/passwd</code>의 UID 필드 검색</td></tr>
                <tr><td><strong>최소 길이</strong></td><td>교재 기준 8자 이상</td><td>Linux <code>/etc/login.defs</code>·PAM, AIX <code>/etc/security/user</code>, HP-UX <code>/etc/default/security</code></td></tr>
                <tr><td><strong>최대 사용기간</strong></td><td>교재 기준 90일 이하</td><td>Linux <code>PASS_MAX_DAYS</code>, AIX maxage, HP-UX PASSWORD_MAXDAYS</td></tr>
                <tr><td><strong>최소 사용기간</strong></td><td>교재 기준 1일 이상</td><td>Linux <code>PASS_MIN_DAYS</code>, AIX minage, HP-UX PASSWORD_MINDAYS</td></tr>
              </tbody></table></div>
              <ul>
                <li>설정 파일의 기본값만 바꾸면 <strong>기존 계정에 즉시 반영되지 않을 수 있으므로</strong> 개별 계정 정책도 함께 점검합니다.</li>
                <li>Solaris·AIX·HP-UX의 파일명과 단위(일/주)는 버전별 차이가 있으므로 시험에서는 교재 표의 OS별 위치와 키워드를 구분합니다.</li>
                <li>패스워드 정책은 길이뿐 아니라 금지 패스워드, 재사용 방지, MFA, 안전한 복구 절차와 함께 운영합니다.</li>
              </ul>`
          },
          {
            id: "file-directory-r-command-security", title: "파일·디렉터리와 r-command 보안",
            content: `
              <h3>root PATH에서 현재 디렉터리 제거</h3>
              <p>root의 <strong>PATH</strong>에 현재 디렉터리를 뜻하는 <strong>.</strong>이 앞쪽에 있으면 공격자가 둔 동일 이름의 악성 명령을 먼저 실행할 수 있습니다. 불필요한 <strong>.</strong>을 제거하고, 꼭 필요하면 마지막에 두며 신뢰 가능한 절대경로를 사용합니다.</p>
              <h3>소유자 없는 파일·디렉터리</h3>
              <p>삭제된 계정의 UID/GID가 남은 객체는 새 계정에 번호가 재사용될 때 의도치 않은 소유권이 생길 수 있습니다. <code>find</code>의 <strong>-nouser·-nogroup</strong> 조건으로 찾아 업무상 필요성을 확인한 뒤 삭제하거나 올바른 소유자로 변경합니다.</p>
              <h3><code>/etc/hosts.equiv</code>와 <code>$HOME/.rhosts</code></h3>
              <p>rlogin·rsh·rexec 같은 <strong>r-command</strong>의 호스트 기반 신뢰 설정은 인증을 약화시킬 수 있습니다. 사용하지 않는 것이 원칙이며 불가피하다면 다음을 적용합니다.</p>
              <ul>
                <li><code>/etc/hosts.equiv</code> 소유자는 <strong>root</strong>, 사용자 <code>.rhosts</code>는 해당 계정 소유자로 설정합니다.</li>
                <li>권한은 소유자만 읽고 쓸 수 있도록 <strong>600 이하</strong>로 제한합니다.</li>
                <li>모든 호스트를 신뢰하는 <strong>+</strong> 항목을 제거하고 꼭 필요한 호스트·계정만 명시합니다.</li>
                <li>가능하면 r-command를 비활성화하고 암호화·강한 인증을 제공하는 <strong>SSH</strong>를 사용합니다.</li>
              </ul>
              <div class="important-box"><span class="box-title">SECTION 15 핵심 연결</span><p><strong>계정·UID 최소화 → passwd/shadow·PAM 보호 → 파일 권한·umask·특수권한 점검 → 불필요한 inetd/r-command 차단 → TCP Wrapper·SSH로 접근 제한 → cron·로그·소유권을 지속 점검</strong></p></div>`
          }
        ],
        content: ""
      },
      {
        id: "section-16", number: 16, title: "서버 보안 관리",
        subtopics: [
          {
            id: "server-maintenance-overview", title: "서버관리자 업무와 보안 유지 관리",
            content: `
              <p>서버관리자는 시스템을 안정적으로 구축·운영하는 것뿐 아니라 배치 후에도 <strong>지속적인 보안 유지 관리</strong>를 수행해야 합니다. 새로운 취약점과 공격기법이 계속 등장하므로 한 번의 설정만으로 보안이 끝나지 않습니다.</p>
              <h3>보안 유지 관리 절차</h3>
              <ol>
                <li><strong>로그 감시·분석</strong>: 계정 사용, 서비스 오류, 비정상 접근 흔적을 확인합니다.</li>
                <li><strong>정기 명령 수행</strong>: 계정·프로세스·포트·파일 권한과 자원 사용량을 점검합니다.</li>
                <li><strong>정기 보안 테스트</strong>: 취약점 분석, 무결성 검사, 침입탐지 결과를 검토합니다.</li>
                <li><strong>취약점 보완</strong>: 패치·설정 변경·서비스 차단 후 결과를 재검증합니다.</li>
              </ol>
              <h3>로깅의 의미</h3>
              <p><strong>로깅(Logging)</strong>은 이미 발생했거나 발생 중인 행위를 기록하는 보안 절차입니다. 효과적인 로그는 시스템의 피해·고장 원인과 발생 시점을 찾도록 도와주며, 사후 분석과 책임추적성의 근거가 됩니다.</p>
              <div class="important-box"><span class="box-title">핵심 흐름</span><p><strong>기록 생성 → 안전한 보관 → 지속적인 모니터링 → 이상 징후 분석 → 대응 및 재검증</strong></p></div>`
          },
          {
            id: "admin-account-resource-network", title: "계정·자원·네트워크 관리",
            content: `
              <h3>관리자 계정과 사용자 계정</h3>
              <p>root로 직접 로그인하면 관리자 계정명이 고정되어 공격 대상이 되고 사용자별 행위 추적도 어려워집니다. 일반 계정으로 로그인한 뒤 승인된 경우에만 <strong>su 또는 sudo</strong>로 권한을 상승하는 방식이 권장됩니다.</p>
              <ul>
                <li><strong>/etc/passwd</strong>는 계정 정보를 담고, 패스워드 해시는 접근이 제한된 <strong>/etc/shadow</strong>에 분리합니다.</li>
                <li>원격 접근이 불필요한 계정은 로그인 셸과 서비스 접근권한을 제한합니다.</li>
                <li>계정 사용기간·만료일은 <code>/etc/shadow</code>의 관련 필드와 계정 정책에 맞게 설정합니다.</li>
              </ul>
              <h3>자원·네트워크 관리</h3>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>영역</th><th>대표 명령</th><th>관리 목적</th></tr></thead><tbody>
                <tr><td>프로세스</td><td><strong>ps, kill, wait, su, nice</strong></td><td>실행 상태·종료·대기·권한·우선순위 관리</td></tr>
                <tr><td>메모리</td><td><strong>free</strong></td><td>실제 메모리와 Swap 사용 현황</td></tr>
                <tr><td>메일·디스크</td><td><strong>quota, du</strong></td><td>사용량 제한과 디렉터리별 디스크 사용량</td></tr>
                <tr><td>인터페이스·세션</td><td><strong>ifconfig, netstat -an</strong></td><td>네트워크 설정과 현재 통신 세션·대기 포트</td></tr>
                <tr><td>실시간 자원</td><td><strong>top, ps -elf, ps aux</strong></td><td>CPU·메모리와 프로세스 상태</td></tr>
                <tr><td>사용자</td><td><strong>who, w</strong></td><td>현재 로그인 사용자</td></tr>
                <tr><td>패킷·DNS</td><td><strong>snoop, nslookup</strong></td><td>패킷 캡처와 DNS 이름·주소 질의</td></tr>
                <tr><td>경로·서비스</td><td><strong>hostname, traceroute, inetd</strong></td><td>호스트명·통신 경로·전통 UNIX 서비스 관리</td></tr>
              </tbody></table></div>`
          },
          {
            id: "windows-log-overview", title: "Windows 이벤트 로그 분석",
            content: `
              <p>Windows는 이벤트(Event)를 중심으로 로그를 기록하며 <strong>이벤트 뷰어(Event Viewer)</strong>에서 조회합니다. UNIX/Linux는 로그가 여러 파일과 경로에 분산되는 경우가 많다는 차이가 있습니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>로그</th><th>기록 내용</th><th>교재의 구형 파일명</th></tr></thead><tbody>
                <tr><td><strong>응용 프로그램</strong></td><td>응용프로그램이 기록한 이벤트</td><td>AppEvent.Evt</td></tr>
                <tr><td><strong>보안</strong></td><td>로그온, 개체 접근, 권한 사용 등 감사정책에 따른 이벤트</td><td>SecEvent.Evt</td></tr>
                <tr><td><strong>시스템</strong></td><td>운영체제 구성요소·드라이버·서비스 이벤트</td><td>SysEvent.Evt</td></tr>
                <tr><td><strong>디렉터리 서비스</strong></td><td>Active Directory 관련 이벤트</td><td>도메인 컨트롤러 구성</td></tr>
                <tr><td><strong>파일 복제 서비스</strong></td><td>도메인 컨트롤러 간 파일 복제 이벤트</td><td>도메인 컨트롤러 구성</td></tr>
                <tr><td><strong>DNS 서버</strong></td><td>Windows DNS 서비스 이벤트</td><td>DNS 서버 구성</td></tr>
              </tbody></table></div>
              <h3>현재 세션 확인</h3>
              <ul>
                <li><strong>net session</strong>: 현재 연결된 원격 세션을 확인합니다.</li>
                <li><strong>net session /delete</strong>: 선택한 원격 세션을 종료합니다.</li>
                <li><strong>psloggedon</strong>: 로컬 또는 원격 시스템에 로그인한 사용자 정보를 확인하는 Sysinternals 계열 도구입니다.</li>
              </ul>
              <div class="important-box"><span class="box-title">보호 원칙</span><p>공격자의 삭제·변조에 대비해 <strong>중앙 수집, 접근통제, 무결성 보호, 시간 동기화</strong>를 함께 적용합니다.</p></div>`
          },
          {
            id: "windows-audit-event-files", title: "Windows 감사정책과 이벤트 파일",
            content: `
              <h3>감사정책의 대표 범주</h3>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>감사 종류</th><th>핵심 대상</th></tr></thead><tbody>
                <tr><td><strong>개체 액세스</strong></td><td>감사 대상으로 설정한 파일·디렉터리·레지스트리 등 개체 접근</td></tr>
                <tr><td><strong>계정 관리</strong></td><td>사용자·그룹 계정의 생성·변경·삭제</td></tr>
                <tr><td><strong>계정 로그온</strong></td><td>도메인 계정 인증과 로그온 유효성 검사</td></tr>
                <tr><td><strong>권한 사용</strong></td><td>백업·복원 등 사용자 권한과 특권 사용</td></tr>
                <tr><td><strong>로그온 이벤트</strong></td><td>대화식·네트워크 로그온과 로그오프</td></tr>
                <tr><td><strong>디렉터리 서비스 액세스</strong></td><td>감사 설정된 Active Directory 개체 접근</td></tr>
                <tr><td><strong>정책 변경</strong></td><td>사용자 권한 할당·감사정책·신뢰정책 변경</td></tr>
                <tr><td><strong>프로세스 추적</strong></td><td>프로세스 생성·종료 등 상세 활동</td></tr>
                <tr><td><strong>시스템 이벤트</strong></td><td>시작·종료와 시스템 보안에 영향을 주는 이벤트</td></tr>
              </tbody></table></div>
              <p>감사를 너무 적게 설정하면 원인 분석이 어렵고, 모든 성공·실패를 무조건 기록하면 중요 이벤트가 묻히고 시스템·저장공간 부담이 커집니다. <strong>위험과 분석 목적에 맞춰 성공·실패 항목을 선택</strong>해야 합니다.</p>
              <h3>이벤트 로그의 주요 필드</h3>
              <p><strong>유형(정보·경고·오류·감사 성공·감사 실패), 날짜·시간, 원본, 이벤트 ID, 사용자, 컴퓨터</strong>를 함께 확인합니다.</p>
              <p>교재의 구형 Windows는 <code>%Windows%\\System32\\Config</code> 아래 <strong>.Evt</strong> 파일을 예로 들며, 바이너리이므로 텍스트 편집기가 아니라 이벤트 뷰어로 확인합니다. 최신 Windows는 <strong>.evtx</strong> 형식을 사용합니다.</p>`
          },
          {
            id: "unix-log-overview", title: "UNIX/Linux 로그 구조와 경로",
            content: `
              <p>UNIX/Linux는 <strong>syslog 계열 데몬</strong>이 중앙에서 메시지를 처리하기도 하지만 로그인·프로세스·서비스별 데몬이 별도 파일을 남기기도 합니다. 시스템과 배포판별 저장 위치를 함께 확인해야 합니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>대표 경로</th><th>교재 기준 운영체제 예</th></tr></thead><tbody>
                <tr><td><strong>/usr/adm</strong></td><td>초기 BSD 계열, HP-UX 9.x, SunOS 4.x</td></tr>
                <tr><td><strong>/var/adm</strong></td><td>최근 UNIX, 일부 AIX·Solaris·HP-UX 계열</td></tr>
                <tr><td><strong>/var/log</strong></td><td>Linux·FreeBSD·일부 Solaris</td></tr>
                <tr><td><strong>/var/run</strong></td><td>Linux의 현재 실행·세션 관련 데이터</td></tr>
              </tbody></table></div>
              <div class="important-box"><span class="box-title">파일 형식</span><p><strong>messages·secure·history</strong> 같은 텍스트 로그와 <strong>utmp·wtmp·btmp·lastlog·pacct</strong>처럼 전용 명령으로 읽는 바이너리 로그를 구분합니다.</p></div>`
          },
          {
            id: "unix-session-account-logs", title: "UNIX 세션·계정·명령 로그",
            content: `
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>로그</th><th>기록 내용</th><th>대표 확인 명령</th></tr></thead><tbody>
                <tr><td><strong>utmp</strong></td><td>현재 로그인 사용자와 터미널 상태</td><td><code>who, w, users, finger</code></td></tr>
                <tr><td><strong>wtmp</strong></td><td>로그인·로그아웃, 부팅·종료 이력</td><td><code>last</code></td></tr>
                <tr><td><strong>btmp</strong></td><td>실패한 로그인 시도</td><td><code>lastb</code></td></tr>
                <tr><td><strong>pacct/acct</strong></td><td>수행 명령·프로세스 회계 정보와 터미널</td><td><code>lastcomm, acctcom</code></td></tr>
                <tr><td><strong>history</strong></td><td>셸에서 실행한 명령 순서</td><td><code>history</code>, 셸별 history 파일</td></tr>
                <tr><td><strong>lastlog</strong></td><td>사용자별 마지막 로그인</td><td><code>lastlog, finger</code></td></tr>
                <tr><td><strong>sulog</strong></td><td>su 성공·실패와 변경 전후 계정</td><td>전용 로그 파일</td></tr>
              </tbody></table></div>
              <ul>
                <li>바이너리 로그는 <code>cat</code>이나 일반 편집기가 아니라 해당 형식을 이해하는 명령으로 확인합니다.</li>
                <li>history와 로그 파일 권한을 제한하고 공격자의 삭제·변조 가능성을 중앙 로그와 교차 검증합니다.</li>
                <li>sulog는 날짜·시간·터미널·성공/실패·변경 전 계정·변경 후 계정 정보를 기록합니다.</li>
              </ul>`
          },
          {
            id: "unix-service-security-logs", title: "UNIX 서비스·보안 로그",
            content: `
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>로그</th><th>핵심 내용</th></tr></thead><tbody>
                <tr><td><strong>dmesg</strong></td><td>부팅 시 출력되는 커널·장치 메시지</td></tr>
                <tr><td><strong>cron</strong></td><td>정기 작업 데몬이 수행한 작업</td></tr>
                <tr><td><strong>messages</strong></td><td>일반 시스템 메시지와 일부 장치·서비스 정보</td></tr>
                <tr><td><strong>secure</strong></td><td>원격접속·su·xinetd/TCP Wrapper 등 인증·보안 메시지</td></tr>
                <tr><td><strong>loginlog</strong></td><td>일부 SunOS 계열의 일정 횟수 이상 실패한 로그인</td></tr>
                <tr><td><strong>xferlog</strong></td><td>FTP 업로드·다운로드 내역</td></tr>
                <tr><td><strong>HTTPD Access/Error</strong></td><td>웹 요청 처리와 웹 서버 오류</td></tr>
              </tbody></table></div>
              <h3>xferlog 핵심 필드</h3>
              <p><strong>전송 시각·소요시간·원격 호스트·파일 크기·파일명·전송 유형·특수 동작·전송 방향·접근 방식·사용자명·서비스명·인증 여부·전송 결과</strong>를 기록합니다.</p>
              <ul>
                <li><strong>a</strong>: ASCII / <strong>b</strong>: Binary</li>
                <li><strong>C</strong>: Compress / <strong>U</strong>: Uncompress / <strong>T</strong>: Tar</li>
                <li><strong>o</strong>: 클라이언트→서버 / <strong>i</strong>: 서버→클라이언트</li>
                <li><strong>C</strong>: 전송 성공 / <strong>I</strong>: 전송 실패·오류</li>
              </ul>`
          },
          {
            id: "syslog-configuration", title: "syslog 설정·facility·priority",
            content: `
              <p><strong>syslogd</strong>는 커널·응용프로그램·서비스가 전달한 메시지를 설정에 따라 파일, 콘솔, 사용자 또는 원격 서버로 보냅니다. 전통적 설정 파일은 <strong>/etc/syslog.conf</strong>입니다.</p>
              <div class="code-block"><code>facility.priority    action</code></div>
              <h3>facility: 메시지 발생 서비스</h3>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>facility</th><th>의미</th><th>facility</th><th>의미</th></tr></thead><tbody>
                <tr><td><strong>auth</strong></td><td>인증·보안</td><td><strong>authpriv</strong></td><td>접근 제한 인증</td></tr>
                <tr><td><strong>kern</strong></td><td>커널</td><td><strong>daemon</strong></td><td>일반 데몬</td></tr>
                <tr><td><strong>cron</strong></td><td>정기 작업</td><td><strong>ftp</strong></td><td>FTP 데몬</td></tr>
                <tr><td><strong>mail</strong></td><td>메일</td><td><strong>lpr</strong></td><td>프린터</td></tr>
                <tr><td><strong>news</strong></td><td>Network News</td><td><strong>ntp</strong></td><td>시간 동기화</td></tr>
                <tr><td><strong>syslog</strong></td><td>syslog 자체</td><td><strong>user</strong></td><td>사용자 프로그램</td></tr>
                <tr><td><strong>local0~7</strong></td><td>관리자 정의</td><td><strong>*</strong></td><td>모든 facility</td></tr>
              </tbody></table></div>
              <h3>priority: 높은 순서</h3>
              <p><strong>emerg → alert → crit → err → warning → notice → info → debug</strong></p>
              <p>특정 priority를 지정하면 일반적으로 <strong>그 수준과 더 심각한 메시지</strong>가 포함됩니다. <strong>none</strong>은 해당 facility를 제외하며 여러 선택자는 세미콜론으로 구분합니다.</p>`
          },
          {
            id: "syslog-action-log-management", title: "syslog action·모니터링·순환",
            content: `
              <h3>action: 로그를 보낼 위치</h3>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>형식</th><th>동작</th></tr></thead><tbody>
                <tr><td><strong>/var/log/파일</strong></td><td>로그 파일에 저장</td></tr>
                <tr><td><strong>/dev/console</strong></td><td>콘솔 또는 장치로 출력</td></tr>
                <tr><td><strong>@원격호스트</strong></td><td>원격 로그 서버로 전송</td></tr>
                <tr><td><strong>사용자명 / *</strong></td><td>지정 사용자 / 모든 로그인 사용자에게 전달</td></tr>
              </tbody></table></div>
              <div class="code-block"><code>#kern.* /dev/console            # 주석이므로 미적용
*.info;mail.none;news.none;authpriv.none /var/log/messages
authpriv.* /var/log/secure</code></div>
              <h3>로그 모니터링·순환</h3>
              <ul>
                <li><strong>tail -f</strong>: 텍스트 로그에 추가되는 내용을 실시간 확인합니다.</li>
                <li>바이너리 로그는 <code>last</code>·<code>who</code> 등 전용 명령으로 조회합니다.</li>
                <li><strong>logrotate</strong>: 로그를 주기적으로 순환·압축·보관·메일 발송해 용량을 관리합니다.</li>
              </ul>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>구성</th><th>대표 위치</th></tr></thead><tbody>
                <tr><td>실행 파일</td><td><code>/usr/sbin/logrotate</code></td></tr>
                <tr><td>기본·서비스별 설정</td><td><code>/etc/logrotate.conf</code>, <code>/etc/logrotate.d</code></td></tr>
                <tr><td>처리 상태</td><td><code>/var/lib/logrotate.status</code> 계열</td></tr>
                <tr><td>정기 실행</td><td><code>/etc/cron.daily/logrotate</code> 계열</td></tr>
              </tbody></table></div>`
          },
          {
            id: "iis-w3c-log", title: "IIS W3C 웹 서버 로그",
            content: `
              <p>IIS는 기본적으로 <strong>W3C 확장 로그 파일 형식</strong>을 사용하며 관리자가 기록할 필드를 선택할 수 있습니다. 교재에는 W3C·NCSA·Microsoft IIS 로그 형식이 함께 소개됩니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>필드</th><th>의미</th></tr></thead><tbody>
                <tr><td><strong>date / time</strong></td><td>요청 날짜와 시간</td></tr>
                <tr><td><strong>c-ip / cs-username</strong></td><td>클라이언트 IP와 인증 사용자명</td></tr>
                <tr><td><strong>s-computername / s-ip / s-port</strong></td><td>서버 이름·IP·포트</td></tr>
                <tr><td><strong>cs-method</strong></td><td>GET·POST 등 HTTP 메서드</td></tr>
                <tr><td><strong>cs-uri-stem / cs-uri-query</strong></td><td>요청 경로와 Query String</td></tr>
                <tr><td><strong>sc-status</strong></td><td>서버의 HTTP 상태코드</td></tr>
                <tr><td><strong>cs(Referer) / cs(Cookie)</strong></td><td>이전 페이지와 전달된 Cookie</td></tr>
              </tbody></table></div>
              <p><strong>날짜·시간 → 서버/클라이언트 IP → 메서드와 URI → 상태코드 → User-Agent → 송수신 크기 → 처리시간</strong>을 연결해 비정상 요청을 분석합니다.</p>
              <div class="important-box"><span class="box-title">주의</span><p>Referer와 User-Agent는 클라이언트가 보내므로 <strong>변조·누락될 수 있습니다.</strong></p></div>`
          },
          {
            id: "apache-web-log", title: "Apache Access·Error 로그",
            content: `
              <p>Apache는 정상 요청을 <strong>access_log</strong>, 오류를 <strong>error_log</strong>에 기록합니다. 위치·이름은 설정에 따라 다르며 <strong>LogFormat</strong>으로 형식을 정의합니다.</p>
              <ul>
                <li><strong>common</strong>: 클라이언트·사용자·시각·요청·상태·크기</li>
                <li><strong>referer / agent</strong>: Referer / User-Agent 별도 기록</li>
                <li><strong>combined</strong>: common에 Referer와 User-Agent 결합</li>
              </ul>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>인자</th><th>의미</th><th>인자</th><th>의미</th></tr></thead><tbody>
                <tr><td><strong>%a / %h</strong></td><td>클라이언트 IP / 원격 호스트</td><td><strong>%u</strong></td><td>인증 사용자</td></tr>
                <tr><td><strong>%r / %m</strong></td><td>요청 첫 줄 / 메서드</td><td><strong>%U / %H</strong></td><td>URL 경로 / 프로토콜</td></tr>
                <tr><td><strong>%s / %b</strong></td><td>상태코드 / 응답 크기</td><td><strong>%t / %T</strong></td><td>요청 시각 / 처리시간</td></tr>
                <tr><td><strong>%{Referer}i</strong></td><td>Referer</td><td><strong>%{User-Agent}i</strong></td><td>User-Agent</td></tr>
              </tbody></table></div>
              <p>Error 로그에서는 <strong>시각·심각도(debug→emerg)·클라이언트 IP·경로·성공/실패·원인</strong>을 확인합니다. Permission denied와 비정상 경로 탐색이 반복되면 추가 분석합니다.</p>`
          },
          {
            id: "cracking-keylogger-tools", title: "크래킹·키로거 도구와 대응",
            content: `
              <p>교재의 패스워드 점검 도구는 관리자 감사에도 쓰일 수 있지만 무단 사용은 공격이 됩니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>도구</th><th>교재의 핵심 설명</th></tr></thead><tbody>
                <tr><td><strong>John the Ripper</strong></td><td>사전·Brute Force 등을 이용한 대표 패스워드 점검 도구</td></tr>
                <tr><td><strong>pwdump</strong></td><td>Windows 패스워드 해시를 덤프하는 계열 도구</td></tr>
                <tr><td><strong>L0phtCrack</strong></td><td>Windows 패스워드 취약성 점검 도구</td></tr>
                <tr><td><strong>ipcrack</strong></td><td>원격 계정 패스워드 취약성 점검의 교재 예시</td></tr>
                <tr><td><strong>chntpw</strong></td><td>물리 접근 가능한 시스템의 로컬 계정 데이터 수정 계열 도구</td></tr>
                <tr><td><strong>ERD Commander</strong></td><td>Windows 복구·관리 환경의 교재 예시</td></tr>
              </tbody></table></div>
              <h3>키로거와 대응</h3>
              <p><strong>키로거(Keylogger)</strong>는 하드웨어 또는 소프트웨어 형태로 키보드 입력을 기록해 ID·패스워드·문서 내용을 탈취할 수 있습니다.</p>
              <ul>
                <li>물리 포트·주변기기 점검, 승인되지 않은 프로그램 차단, 백신·EDR 점검을 수행합니다.</li>
                <li>MFA와 보안 입력 경로를 사용하고 중요 정보 노출을 줄입니다.</li>
                <li>키보드 보안 프로그램은 보호된 입력이 일반 프로그램에 그대로 노출되지 않도록 통제합니다.</li>
              </ul>`
          },
          {
            id: "vulnerability-analysis-tools", title: "취약점 분석 도구",
            content: `
              <p>취약점 분석은 알려진 취약점과 잘못된 설정을 정기적으로 점검하는 활동입니다. 장비·소프트웨어·서비스가 추가되거나 큰 변경이 생긴 뒤에도 다시 수행합니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>도구</th><th>교재의 핵심 특징</th></tr></thead><tbody>
                <tr><td><strong>SATAN</strong></td><td>네트워크를 통해 시스템 취약점을 찾아 보고하는 초기 분석 도구</td></tr>
                <tr><td><strong>SARA</strong></td><td>SATAN 계열을 확장한 네트워크 취약점 분석 도구</td></tr>
                <tr><td><strong>SAINT</strong></td><td>UNIX 계열 원격 취약점 점검과 HTML 보고서</td></tr>
                <tr><td><strong>COPS</strong></td><td>UNIX 내부의 잘못된 설정·취약한 패스워드 점검</td></tr>
                <tr><td><strong>Nessus</strong></td><td>클라이언트-서버 구조와 플러그인 방식의 취약점 스캐너</td></tr>
                <tr><td><strong>nmap</strong></td><td>TCP Connect·Stealth 등 다양한 방식의 포트·서비스 조사</td></tr>
              </tbody></table></div>
              <div class="important-box"><span class="box-title">운영 원칙</span><p>취약점 스캔은 <strong>승인된 범위·시간·대상</strong>에서 수행하고 실제 영향과 오탐 여부를 검토한 뒤 조치합니다.</p></div>`
          },
          {
            id: "integrity-scan-tools", title: "무결성 검사와 스캔 탐지",
            content: `
              <h3>Tripwire</h3>
              <p><strong>Tripwire</strong>는 정상 상태의 파일·디렉터리 정보를 DB에 저장한 뒤 현재 상태와 비교하여 변경을 탐지합니다. MD5·SHA·CRC-32 등 체크값을 사용할 수 있습니다.</p>
              <ol>
                <li>초기 파일·디렉터리의 해시값을 생성해 DB에 저장합니다.</li>
                <li>주기적으로 현재 값을 계산해 기준 DB와 비교합니다.</li>
                <li>차이가 나면 변경 내용을 보고하고 정상 변경인지 침해 흔적인지 판단합니다.</li>
              </ol>
              <p>공격자가 기준 DB까지 바꾸면 탐지가 무력화되므로 <strong>기준 DB를 읽기 전용 매체나 별도 보호영역에 보관</strong>합니다. 정상 패치 뒤에는 검증 후 기준값을 갱신합니다.</p>
              <h3>스캔 탐지 도구</h3>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>도구</th><th>교재의 핵심 설명</th></tr></thead><tbody>
                <tr><td><strong>mscan</strong></td><td>도메인 내 시스템·서비스·취약정보 수집 도구 예시</td></tr>
                <tr><td><strong>sscan</strong></td><td>UNIX·Windows의 네트워크 취약점 점검에 사용된 도구</td></tr>
                <tr><td><strong>portsentry</strong></td><td>포트 스캔을 탐지·기록하고 차단 명령을 실행하도록 구성 가능한 도구</td></tr>
              </tbody></table></div>`
          },
          {
            id: "ids-firewall-tools", title: "침입탐지와 방화벽",
            content: `
              <h3>Snort</h3>
              <p><strong>Snort</strong>는 실시간 트래픽 분석과 IP 패킷 처리를 수행하는 오픈소스 네트워크 침입탐지/방지 도구입니다.</p>
              <ul>
                <li>프로토콜 분석, 콘텐츠 검색·조합과 규칙 기반 탐지를 지원합니다.</li>
                <li>Buffer Overflow, 포트 스캔, CGI 공격, SMB 프로브, OS Fingerprinting 등의 징후를 탐지할 수 있습니다.</li>
                <li>패킷을 분석해 콘솔·로그·경고 시스템으로 결과를 전달합니다.</li>
              </ul>
              <h3>호스트·패킷 필터링</h3>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>도구</th><th>핵심 동작</th></tr></thead><tbody>
                <tr><td><strong>TCP Wrapper</strong></td><td>UNIX 서비스 앞에서 접속 호스트를 확인해 허용·차단하고 기록을 남기는 접근통제 도구</td></tr>
                <tr><td><strong>IPchains / iptables</strong></td><td>프로토콜·주소·포트·상태 등의 규칙으로 패킷을 허용·차단하는 Linux 패킷 필터링 방화벽 계열</td></tr>
              </tbody></table></div>
              <div class="important-box"><span class="box-title">SECTION 16 핵심 연결</span><p><strong>계정·자원 관리 → Windows/UNIX 로그 수집 → syslog·웹 로그 분석 → 로그 순환·무결성 보호 → 취약점/포트 점검 → Snort·방화벽으로 탐지와 차단</strong></p></div>`
          }
        ],
        content: ""
      },
      {
        id: "section-17", number: 17, title: "각종 시스템 보안위협 및 대응책",
        subtopics: [
          {
            id: "process-memory-stack-frame", title: "프로세스 메모리와 스택 프레임",
            content: `
              <p>프로세스의 가상 메모리는 대표적으로 <strong>Text·Data·Heap·Stack</strong> 영역으로 나뉩니다. 버퍼 오버플로를 이해하려면 각 영역의 용도와 성장 방향을 먼저 구분해야 합니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>영역</th><th>저장 내용</th><th>핵심 특징</th></tr></thead><tbody>
                <tr><td><strong>Text</strong></td><td>프로그램 코드·상수</td><td>실행 명령이 위치하며 일반적으로 쓰기가 제한됩니다.</td></tr>
                <tr><td><strong>Data</strong></td><td>전역변수·정적변수</td><td>프로그램 수명 동안 유지되는 데이터가 저장됩니다.</td></tr>
                <tr><td><strong>Heap</strong></td><td>동적으로 할당한 메모리</td><td><code>malloc()</code> 등으로 할당하고 해제하며 보통 낮은 주소에서 높은 주소 방향으로 확장됩니다.</td></tr>
                <tr><td><strong>Stack</strong></td><td>함수 인자·지역변수·복귀주소</td><td>함수 호출마다 스택 프레임이 생기며 보통 높은 주소에서 낮은 주소 방향으로 확장됩니다.</td></tr>
              </tbody></table></div>
              <h3>스택 프레임(Stack Frame)</h3>
              <p>함수가 호출되면 <strong>인자, 호출 함수로 돌아갈 복귀주소(Return Address), 이전 Frame Pointer, 지역변수</strong> 등이 프레임에 저장됩니다. <strong>Frame Pointer</strong>는 현재 프레임의 기준을, <strong>Stack Pointer</strong>는 스택의 현재 끝을 가리킵니다.</p>
              <div class="important-box"><span class="box-title">LIFO</span><p>스택은 <strong>Last-In, First-Out</strong> 구조입니다. 마지막에 저장한 값이 가장 먼저 제거됩니다.</p></div>`
          },
          {
            id: "buffer-overflow-principle", title: "버퍼 오버플로 개념과 공격 원리",
            content: `
              <p><strong>버퍼 오버플로(Buffer Overflow)</strong>는 정해진 버퍼 크기보다 많은 데이터를 기록해 인접 메모리를 덮어쓰는 현상입니다. 단순 종료뿐 아니라 제어 데이터가 변조되면 프로그램 흐름이 바뀔 수 있습니다.</p>
              <ol>
                <li>입력 길이를 확인하지 않는 취약한 함수가 고정 크기 버퍼에 데이터를 복사합니다.</li>
                <li>버퍼 경계를 넘은 데이터가 인접한 지역변수·포인터·복귀주소 등을 덮습니다.</li>
                <li>변조된 제어 데이터가 사용되면 비정상 주소로 이동하거나 공격자가 의도한 흐름이 실행될 수 있습니다.</li>
              </ol>
              <h3>교재 코드의 핵심</h3>
              <p><code>char buffer[10]</code>에 길이를 검사하지 않고 <code>strcpy(buffer, argv[1])</code>로 복사하면 10바이트를 넘는 입력이 주변 스택 데이터를 침범할 수 있습니다. <code>argv[0]</code>은 실행 파일 이름이고 이후 원소는 명령행 인자입니다.</p>
              <div class="important-box"><span class="box-title">Shellcode</span><p>공격 목적의 짧은 기계어 명령열을 뜻합니다. 전통적인 사례는 셸을 실행해 취약한 프로그램의 권한으로 명령을 수행하는 형태이며, 방어 관점에서는 <strong>메모리 손상과 제어 흐름 탈취</strong>가 핵심입니다.</p></div>`
          },
          {
            id: "stack-heap-overflow", title: "Stack Overflow와 Heap Overflow",
            content: `
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>주요 공격 대상</th><th>발생 결과</th></tr></thead><tbody>
                <tr><td><strong>Stack Buffer Overflow</strong></td><td>지역 버퍼 주변의 복귀주소·Frame Pointer·지역변수</td><td>함수 반환 흐름 변조, 프로그램 충돌, 권한 있는 코드 흐름 탈취</td></tr>
                <tr><td><strong>Heap Overflow</strong></td><td>동적 객체·함수 포인터·할당자 관리정보</td><td>인접 객체나 연결정보 손상, 잘못된 포인터 사용, 임의 흐름 실행</td></tr>
              </tbody></table></div>
              <h3>스택 버퍼 오버플로</h3>
              <p>취약한 버퍼를 지나 저장된 복귀주소까지 덮으면 함수가 끝날 때 원래 호출 지점이 아닌 다른 위치로 흐름이 바뀔 수 있습니다. 과거에는 <strong>SetUID root</strong> 프로그램의 취약점이 권한 상승으로 이어지는 사례가 많았습니다.</p>
              <p><strong>NOP(No Operation)</strong>은 기능을 수행하지 않고 다음 명령으로 넘어가는 명령입니다. 과거 공격은 실제 코드 앞에 여러 NOP을 둔 <strong>NOP Sled</strong>로 정확한 주소 예측의 어려움을 줄이기도 했습니다.</p>
              <h3>힙 오버플로</h3>
              <p>Heap은 프로그램 실행 중 필요한 만큼 할당·해제되는 공간입니다. 경계를 넘는 쓰기로 인접한 동적 객체나 연결 리스트 등의 관리정보가 손상되면 이후 메모리 할당·해제 과정에서 비정상 동작이 발생할 수 있습니다.</p>`
          },
          {
            id: "buffer-overflow-defense", title: "버퍼 오버플로 대응책",
            content: `
              <h3>컴파일·개발 단계 방어</h3>
              <ul>
                <li><strong>입력 길이 검증</strong>: 목적 버퍼의 실제 크기와 종료문자 공간까지 확인합니다.</li>
                <li><strong>안전한 API</strong>: 크기 제한 없는 <code>strcpy·strcat·sprintf·gets</code> 등의 사용을 피하고 크기를 지정하는 함수나 검증된 라이브러리를 사용합니다.</li>
                <li><strong>메모리 안전 언어·정적 분석</strong>: 가능한 영역에는 자동 경계검사와 메모리 안전성을 제공하는 언어를 사용하고 경고를 오류로 다룹니다.</li>
                <li><strong>Stack Guard/Canary</strong>: 복귀주소 앞의 임의 값을 함수 종료 때 검사해 변조되면 실행을 중단합니다.</li>
                <li><strong>Stack Shield</strong>: 복귀주소를 별도 안전 영역에 보관하거나 정상 값과 비교해 변조를 탐지합니다.</li>
              </ul>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>취약한 사용 예</th><th>개선 방향</th></tr></thead><tbody>
                <tr><td><code>strcat()</code></td><td>남은 공간을 계산한 제한 함수·안전 래퍼 사용</td></tr>
                <tr><td><code>strcpy()</code></td><td>목적 버퍼 크기를 전달하고 종료문자를 보장</td></tr>
                <tr><td><code>sprintf()</code></td><td><code>snprintf()</code>처럼 최대 출력 길이를 제한</td></tr>
                <tr><td><code>gets()</code></td><td><code>fgets()</code>처럼 입력 길이를 제한</td></tr>
              </tbody></table></div>
              <h3>실행 단계 방어</h3>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>기법</th><th>핵심 역할</th></tr></thead><tbody>
                <tr><td><strong>DEP/NX</strong></td><td>Stack·Heap 같은 데이터 영역을 실행 불가로 만들어 삽입 코드 실행을 어렵게 합니다.</td></tr>
                <tr><td><strong>ASLR</strong></td><td>스택·힙·라이브러리 등의 주소를 실행마다 무작위화해 주소 예측을 어렵게 합니다.</td></tr>
                <tr><td><strong>Stack Canary</strong></td><td>복귀주소 변조 전에 손상되는 보호값을 검사합니다.</td></tr>
                <tr><td><strong>최소권한</strong></td><td>취약점이 발생해도 획득 가능한 권한과 피해 범위를 줄입니다.</td></tr>
              </tbody></table></div>
              <p>한 가지 기법만으로 완전히 막을 수 없으므로 <strong>안전한 코딩 + 컴파일러 보호 + DEP/NX + ASLR + 최소권한</strong>을 계층적으로 적용합니다.</p>`
          },
          {
            id: "format-string-attack", title: "포맷 스트링 공격",
            content: `
              <p><strong>포맷 스트링 공격(Format String Attack)</strong>은 외부 입력을 검증하지 않고 <code>printf·fprintf·sprintf</code> 계열 함수의 포맷 문자열 자체로 사용할 때 발생합니다. 데이터의 형식과 길이에 대한 잘못된 처리로 메모리를 읽거나 쓰고 프로세스를 종료시킬 수 있습니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>지정자</th><th>의미</th><th>보안상 주의</th></tr></thead><tbody>
                <tr><td><strong>%d / %u</strong></td><td>부호 있는 / 없는 정수</td><td rowspan="4">인자 수·자료형이 맞지 않으면 스택의 다른 값을 참조할 수 있습니다.</td></tr>
                <tr><td><strong>%f / %lf</strong></td><td>실수</td></tr>
                <tr><td><strong>%s</strong></td><td>문자열</td></tr>
                <tr><td><strong>%x</strong></td><td>16진수</td></tr>
                <tr><td><strong>%n</strong></td><td>현재까지 출력한 문자 수를 포인터 위치에 기록</td><td>임의 메모리 쓰기에 악용될 수 있어 특히 위험합니다.</td></tr>
              </tbody></table></div>
              <h3>안전한 사용</h3>
              <ul>
                <li>사용자 입력을 포맷으로 쓰는 <code>printf(userInput)</code> 형태를 금지합니다.</li>
                <li>고정 포맷을 사용해 <code>printf(&quot;%s&quot;, userInput)</code>처럼 입력을 데이터 인자로 전달합니다.</li>
                <li>출력 길이를 제한하고 컴파일러 포맷 경고·정적 분석을 활성화합니다.</li>
              </ul>
              <div class="important-box"><span class="box-title">위험성</span><p>프로그램 중지, 프로세스 메모리 노출, 메모리 값 변조와 제어 흐름 탈취로 이어질 수 있습니다.</p></div>`
          },
          {
            id: "race-condition-links", title: "Race Condition과 파일 링크",
            content: `
              <p><strong>Race Condition</strong>은 둘 이상의 프로세스나 스레드가 공유자원에 동시에 접근할 때 <strong>실행 순서에 따라 결과가 달라지는 상태</strong>입니다. 권한 있는 프로그램이 임시파일을 검사한 시점과 실제 사용한 시점 사이를 공격하면 <strong>TOCTOU(Time of Check to Time of Use)</strong> 취약점이 됩니다.</p>
              <h3>Hard Link와 Symbolic Link</h3>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>Hard Link</th><th>Symbolic Link</th></tr></thead><tbody>
                <tr><td><strong>연결 방식</strong></td><td>원본과 같은 i-node·데이터를 가리키는 또 다른 이름</td><td>원본의 경로를 저장한 별도 링크 파일</td></tr>
                <tr><td><strong>원본 삭제</strong></td><td>링크 수만 줄고 다른 링크로 데이터 접근 가능</td><td>경로의 대상이 사라져 끊어진 링크가 될 수 있음</td></tr>
                <tr><td><strong>파일시스템</strong></td><td>보통 같은 파일시스템 안에서만 가능</td><td>다른 파일시스템의 대상도 가리킬 수 있음</td></tr>
                <tr><td><strong>위험</strong></td><td>의도하지 않은 동일 객체 접근</td><td>검사 뒤 링크 대상을 바꾸는 경로 바꿔치기에 악용</td></tr>
              </tbody></table></div>
              <p>특히 <strong>SetUID</strong> 프로그램이 예측 가능한 이름으로 임시파일을 만들면 공격자가 먼저 심볼릭 링크를 두거나 검사와 사용 사이에 링크 대상을 바꿔 권한 있는 파일을 덮어쓰게 할 수 있습니다.</p>`
          },
          {
            id: "race-condition-defense", title: "Race Condition 대응책",
            content: `
              <ul>
                <li><strong>원자적 처리</strong>: 검사와 사용을 분리하지 말고 한 번의 안전한 파일 열기 동작으로 묶습니다.</li>
                <li><strong>예측 불가능한 임시파일</strong>: 안전한 전용 API로 임의 이름을 생성하고 독점 생성 옵션을 사용합니다.</li>
                <li><strong>링크 추적 제한</strong>: 심볼릭 링크를 따라가지 않는 옵션과 안전한 디렉터리·파일 디스크립터 기반 검사를 사용합니다.</li>
                <li><strong>권한 최소화</strong>: SetUID 사용을 줄이고 필요한 작업 동안만 권한을 상승합니다.</li>
                <li><strong>권한 마스크</strong>: 교재의 예처럼 <code>umask 022</code> 등으로 생성 파일이 다른 사용자에게 임의 수정되지 않게 합니다.</li>
                <li><strong>잠금과 동기화</strong>: 공유자원은 mutex·semaphore·파일 잠금 등으로 임계구역을 보호합니다.</li>
              </ul>
              <div class="important-box"><span class="box-title">핵심</span><p><strong>확인한 경로</strong>가 아니라 <strong>실제로 연 파일 객체</strong>가 의도한 대상인지 검증해야 합니다.</p></div>`
          },
          {
            id: "backdoor-overview", title: "백도어 개요와 유형",
            content: `
              <p><strong>백도어(Backdoor)</strong>는 정상 인증·접근통제 절차를 우회해 시스템에 다시 접근하도록 만든 비밀 통로입니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>목적·특징</th></tr></thead><tbody>
                <tr><td><strong>개발 과정의 Trapdoor</strong></td><td>개발·시험 편의를 위해 만든 우회 기능이 제거되지 않고 남은 경우</td></tr>
                <tr><td><strong>공격자가 설치한 백도어</strong></td><td>침입 후 지속적 재접속·명령 실행·탐지 회피를 위해 추가한 계정·서비스·코드</td></tr>
                <tr><td><strong>계정·인증 백도어</strong></td><td>숨은 계정, 고정 비밀번호, 인증 우회 로직</td></tr>
                <tr><td><strong>서비스·프로세스 백도어</strong></td><td>변조된 데몬, 비정상 포트, 정상 프로세스로 위장한 프로그램</td></tr>
              </tbody></table></div>
              <p>교재의 UNIX 사례처럼 권한이 낮은 웹 서비스가 동작하는 동안 공격자가 취약점을 이용해 접근한 뒤, 이후에는 높은 권한으로 접속되도록 데몬이나 설정을 변조할 수 있습니다. 백도어는 정상 기능처럼 보이게 숨는 경우가 많아 <strong>기준 상태와의 비교</strong>가 중요합니다.</p>`
          },
          {
            id: "backdoor-detection-response", title: "백도어 탐지와 대응",
            content: `
              <h3>정상 프로세스 기준선</h3>
              <p>현재 실행 중인 프로세스를 수시로 확인하고, 평소 존재하지 않던 이름·경로·부모 프로세스·네트워크 연결을 조사합니다. 공격자는 정상 Windows 프로세스와 비슷한 이름을 사용하므로 철자만 보지 말고 <strong>실행 경로와 전자서명</strong>까지 확인합니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>프로세스 예</th><th>정상 역할</th></tr></thead><tbody>
                <tr><td><strong>csrss.exe</strong></td><td>Windows 사용자 모드 구성요소와 세션 관련 처리</td></tr>
                <tr><td><strong>smss.exe</strong></td><td>세션 관리자</td></tr>
                <tr><td><strong>winlogon.exe</strong></td><td>대화형 로그온 처리</td></tr>
                <tr><td><strong>explorer.exe</strong></td><td>사용자 셸·작업 표시줄</td></tr>
                <tr><td><strong>spoolsv.exe</strong></td><td>프린터 스풀러 서비스</td></tr>
                <tr><td><strong>svchost.exe</strong></td><td>DLL 기반 Windows 서비스 호스팅</td></tr>
                <tr><td><strong>services.exe</strong></td><td>서비스 시작·중지와 관리</td></tr>
              </tbody></table></div>
              <h3>탐지·대응 절차</h3>
              <ol>
                <li>프로세스·서비스·자동실행·계정·열린 포트와 예약 작업을 기준선과 비교합니다.</li>
                <li><strong>HIDS</strong>와 체크섬으로 중요 프로그램·설정파일의 무결성 변화를 탐지합니다.</li>
                <li>침해가 의심되면 시스템을 격리하고 메모리·로그·디스크 증거를 보존합니다.</li>
                <li>백도어 파일만 삭제하지 말고 최초 침입 원인과 자격증명 유출을 함께 제거한 뒤 신뢰 가능한 이미지로 복구합니다.</li>
              </ol>`
          },
          {
            id: "resource-exhaustion", title: "시스템 자원 고갈 공격",
            content: `
              <p><strong>시스템 자원 고갈 공격(System Resource Exhaustion Attack)</strong>은 디스크·메모리·프로세스·파일 디스크립터 같은 유한 자원을 소진해 정상 서비스를 거부하게 만드는 공격입니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>유형</th><th>원리</th><th>대응</th></tr></thead><tbody>
                <tr><td><strong>Disk Exhaustion</strong></td><td>파일을 계속 생성하거나 로그·임시파일을 급증시켜 저장공간 소진</td><td>Quota, 별도 파티션, 로그 순환, 파일 수·증가율 경보</td></tr>
                <tr><td><strong>Memory Exhaustion</strong></td><td>메모리를 반복 할당하고 해제하지 않아 가용 메모리·Swap 소진</td><td>프로세스별 메모리 한도, 누수 점검, OOM 감시</td></tr>
                <tr><td><strong>Process Exhaustion</strong></td><td><code>fork()</code> 등을 반복해 프로세스 테이블과 CPU 소진</td><td>사용자별 프로세스 수 제한, cgroup·서비스 제한, 비정상 생성 탐지</td></tr>
                <tr><td><strong>Mass Process Kill</strong></td><td>획득한 권한으로 서비스 프로세스를 대량 종료</td><td>최소권한, 서비스 보호·감사, 재시작 정책, 관리자 접근통제</td></tr>
              </tbody></table></div>
              <p>대응의 공통 원칙은 <strong>자원별 상한 설정, 사용량 모니터링, 업무별 격리, 자동 복구, 원인 로그 보존</strong>입니다.</p>`
          },
          {
            id: "reverse-engineering", title: "리버스 엔지니어링",
            content: `
              <p><strong>리버스 엔지니어링(Reverse Engineering)</strong>은 완성된 장치·시스템·프로그램을 분석해 내부 구조와 동작 원리를 알아내는 과정입니다. 소프트웨어에서는 실행 파일을 분석해 원래의 알고리즘·자료구조·프로토콜을 추론합니다.</p>
              <h3>보안 관점의 위험</h3>
              <ul>
                <li>정상 분석·호환성·취약점 연구에도 사용되지만, 공격자는 분석을 통해 검증 로직과 숨은 취약점을 찾을 수 있습니다.</li>
                <li>원본 소스와 기계어 사이에는 정보 손실이 있어 완전한 원본 복원은 어렵지만 디스어셈블·디컴파일로 상당한 동작을 파악할 수 있습니다.</li>
              </ul>
              <h3>대응책</h3>
              <ul>
                <li><strong>난독화(Obfuscation)</strong>로 코드·제어 흐름을 분석하기 어렵게 합니다.</li>
                <li><strong>변조 방지·무결성 검증</strong>과 코드 서명을 적용합니다.</li>
                <li>비밀키와 핵심 비밀을 실행 파일에 하드코딩하지 않고 보호된 저장소·서버 측으로 분리합니다.</li>
                <li>난독화는 분석 비용을 높일 뿐 완전한 방지는 아니므로 안전한 설계와 취약점 제거가 우선입니다.</li>
              </ul>`
          },
          {
            id: "rootkit", title: "루트킷",
            content: `
              <p><strong>루트킷(Rootkit)</strong>은 침입자가 관리자 권한을 유지하면서 자신의 존재와 활동을 숨기도록 구성한 프로그램·도구의 집합입니다. 운영체제의 명령·라이브러리·커널 기능을 변조해 프로세스·파일·포트·계정을 보이지 않게 할 수 있습니다.</p>
              <h3>주요 은닉 대상</h3>
              <p><strong>ls·ps·netstat·login·top·find·ifconfig</strong> 같은 관리 명령, 인증 관련 프로그램, 네트워크 도구와 시스템 라이브러리가 변조될 수 있습니다. 따라서 침해된 시스템 자체의 명령 결과만 믿으면 안 됩니다.</p>
              <h3>확인·대응</h3>
              <ol>
                <li>실행 파일의 생성·수정 시간, 패키지 검증값과 배포판 원본의 해시를 비교합니다.</li>
                <li>읽기 전용 매체나 별도 신뢰 시스템의 도구로 프로세스·포트·파일을 교차 점검합니다.</li>
                <li>HIDS·EDR·커널 보호 기능과 보안 부팅을 사용해 변조 징후를 탐지합니다.</li>
                <li>확인되면 격리·증거보존 후 신뢰 가능한 이미지로 재설치하고 키·비밀번호를 교체하며 최초 침입 경로를 차단합니다.</li>
              </ol>
              <div class="important-box"><span class="box-title">주의</span><p><strong>트로이목마화된 시스템 명령</strong>은 정상처럼 보이면서 공격자의 파일과 프로세스를 결과에서 제외할 수 있습니다.</p></div>`
          },
          {
            id: "logic-bomb", title: "논리폭탄",
            content: `
              <p><strong>논리폭탄(Logic Bomb)</strong>은 특정 날짜·계정 상태·파일 존재 여부 같은 조건이 충족될 때 미리 삽입된 코드가 실행되는 악성 기능입니다.</p>
              <ul>
                <li>평소에는 숨어 있다가 정해진 <strong>Trigger</strong>가 발생하면 데이터 삭제·서비스 중단·설정 변경 등을 수행합니다.</li>
                <li>내부자가 퇴사·계정 삭제 같은 조건을 트리거로 설정하는 사례가 있으며, 다른 악성코드의 페이로드 실행 조건으로도 사용됩니다.</li>
                <li>증거 파일을 삭제하도록 설계되면 포렌식 분석을 어렵게 하고 공격자의 신원과 방식을 숨길 수 있습니다.</li>
              </ul>
              <h3>대응책</h3>
              <p>변경관리·코드 리뷰·직무분리, 무결성 검사, 예약 작업과 자동실행 점검, 중요 데이터의 오프라인 백업 및 복구훈련을 적용합니다.</p>
              <div class="important-box"><span class="box-title">SECTION 17 핵심 연결</span><p><strong>메모리 경계 검증 → 포맷 문자열 고정 → 공유자원 원자적 처리 → 프로세스·파일 기준선 유지 → 자원 상한 설정 → 무결성 검사·신뢰 이미지 복구</strong></p></div>`
          }
        ],
        content: ""
      },
      {
        id: "section-18", number: 18, title: "최신 보안 주제들",
        subtopics: [
          {
            id: "blockchain-overview", title: "블록체인 개요와 특징",
            content: `
              <p><strong>블록체인(Blockchain)</strong>은 온라인 금융거래 정보를 블록으로 연결해 P2P 네트워크에 분산·복제하고, 참여 노드가 공동으로 관리하는 <strong>분산원장(Distributed Ledger)</strong> 기술입니다. 중앙 서버에 거래원장을 집중하지 않고 참여자가 검증·합의한 동일 원장을 공유합니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>특징</th><th>핵심 내용</th></tr></thead><tbody>
                <tr><td><strong>탈중앙화(De-centralization)</strong></td><td>중앙 정부·은행 같은 제3의 통제기관 없이 참여자들이 거래를 직접 검증하고 승인·합의합니다.</td></tr>
                <tr><td><strong>투명성(Transparency)</strong></td><td>새 거래가 원장 참여자에게 전송·공유되어 누구나 기록을 검증할 수 있습니다. 참여자의 실명 대신 식별값을 사용해 익명성도 가질 수 있습니다.</td></tr>
                <tr><td><strong>불변성(Immutability)</strong></td><td>블록이 순차 연결되고 복제되므로 이미 기록된 내용을 임의로 수정·삭제하기 어렵습니다. 중간 블록을 바꾸면 뒤따르는 블록의 해시를 모두 다시 계산해야 합니다.</td></tr>
                <tr><td><strong>가용성(Availability)</strong></td><td>다수 노드가 동일 원장을 보유해 일부 시스템에 장애가 생겨도 전체 시스템은 계속 동작할 수 있습니다.</td></tr>
              </tbody></table></div>
              <div class="important-box"><span class="box-title">핵심</span><p><strong>분산 저장 + 참여자 검증 + 합의 + 해시 연결</strong>이 블록체인의 신뢰를 만드는 기본 구조입니다.</p></div>`
          },
          {
            id: "blockchain-foundation", title: "블록체인 기반 기술",
            content: `
              <h3>분산 네트워크</h3>
              <ul>
                <li>블록체인 정보는 네트워크 참여 <strong>노드(Node)</strong>가 보유하며 동일한 거래내역을 분산 저장합니다.</li>
                <li>거래를 승인하는 분산 합의제도로 무결성을 유지하고, 신규 거래는 P2P 네트워크에 <strong>브로드캐스트(Broadcast)</strong>되어 검증됩니다.</li>
                <li>공격자가 네트워크 계산 능력 또는 지분의 과반을 장악하면 원장 승인에 영향을 줄 수 있는 <strong>51% 공격</strong> 위험이 있지만, 대규모 공개망에서는 현실적인 비용이 매우 큽니다.</li>
              </ul>
              <h3>암호기술</h3>
              <ul>
                <li><strong>전자서명</strong>: 개인키로 거래를 서명하고 공개키로 검증해 거래 당사자와 거래내용의 무결성을 확인합니다. 공개키 주소는 실명과 직접 연결되지 않아 가명성을 제공합니다.</li>
                <li><strong>해시함수</strong>: 거래와 블록 헤더를 고정 길이 해시값으로 만들고, 이전 블록의 해시를 다음 블록에 포함해 변경 여부를 드러냅니다.</li>
                <li><strong>Merkle Tree</strong>: 각 거래 해시를 반복 결합해 하나의 <strong>Merkle Root</strong>로 만들며, 일부 거래만으로도 특정 거래의 포함 여부와 변조 여부를 효율적으로 검증합니다.</li>
              </ul>`
          },
          {
            id: "consensus-double-spending", title: "합의기법과 이중거래 방지",
            content: `
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>작동 원리</th><th>특징</th></tr></thead><tbody>
                <tr><td><strong>PoW<br>Proof of Work</strong></td><td>채굴자가 Nonce를 바꾸며 목표 난이도보다 작은 해시값을 찾고, 먼저 성공한 블록을 네트워크가 검증합니다.</td><td>보안성이 검증됐지만 계산량·전력 소모와 합의 시간이 큽니다. Bitcoin과 초기 Ethereum에서 사용했습니다.</td></tr>
                <tr><td><strong>PoS<br>Proof of Stake</strong></td><td>보유 지분(Stake) 등을 기준으로 검증자를 정해 블록 생성·검증 권한과 보상을 부여합니다.</td><td>PoW의 에너지 낭비를 줄입니다. Ethereum, Cardano, Tezos 등이 채택한 방식입니다.</td></tr>
              </tbody></table></div>
              <h3>이중거래(Double Spending) 방지</h3>
              <p>같은 디지털 자산을 둘 이상의 거래에 동시에 쓰려는 문제입니다. 거래 순서를 블록에 확정하고 모든 노드가 검증함으로써 막습니다. 체인이 갈라지는 <strong>Fork</strong>가 생기면 일반적으로 누적 작업량이 더 큰 유효 체인을 선택하는 <strong>The Longest Chain Wins</strong> 원칙을 적용합니다.</p>
              <ul>
                <li><strong>Hard Fork</strong>: 기존 규칙과 호환되지 않는 변경으로 체인이 영구 분기될 수 있습니다.</li>
                <li><strong>Soft Fork</strong>: 기존 규칙과 호환되는 범위에서 검증 규칙을 강화하는 변경입니다.</li>
              </ul>`
          },
          {
            id: "blockchain-operation", title: "블록체인 작동 원리와 블록 헤더",
            content: `
              <ol>
                <li>사용자가 전자서명한 거래를 네트워크에 전파합니다.</li>
                <li>노드가 서명·잔액·이중사용 여부를 검증하고 유효 거래를 모읍니다.</li>
                <li>채굴자 또는 검증자가 거래목록의 Merkle Root, 이전 블록 해시, Timestamp 등을 넣어 후보 블록을 구성합니다.</li>
                <li>PoW에서는 Nonce를 바꾸며 난이도 조건을 만족하는 해시를 찾고, 다른 노드의 검증·합의를 거쳐 블록을 체인에 추가합니다.</li>
              </ol>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>블록 헤더 항목</th><th>크기</th><th>역할</th></tr></thead><tbody>
                <tr><td><strong>Version</strong></td><td>4 bytes</td><td>블록 버전</td></tr>
                <tr><td><strong>Previous Block Hash</strong></td><td>32 bytes</td><td>이전 블록 헤더의 SHA-256 이중 해시값</td></tr>
                <tr><td><strong>Merkle Hash Root</strong></td><td>32 bytes</td><td>블록에 포함된 전체 거래의 Merkle Tree 루트</td></tr>
                <tr><td><strong>Timestamp</strong></td><td>4 bytes</td><td>블록 생성 시각</td></tr>
                <tr><td><strong>Bits</strong></td><td>4 bytes</td><td>작업증명에서 요구되는 난이도 목표</td></tr>
                <tr><td><strong>Nonce</strong></td><td>4 bytes</td><td>목표 해시를 찾기 위해 반복 변경하는 카운터</td></tr>
              </tbody></table></div>`
          },
          {
            id: "blockchain-types-risks", title: "블록체인 종류와 보안위협",
            content: `
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>참여·관리</th><th>특징</th></tr></thead><tbody>
                <tr><td><strong>퍼블릭 블록체인</strong></td><td>누구나 읽기·쓰기·합의 참여 가능</td><td>Bitcoin·Ethereum처럼 개방성이 높고 탈중앙화되어 있으나 처리속도가 비교적 낮습니다.</td></tr>
                <tr><td><strong>프라이빗 블록체인</strong></td><td>하나의 기관이 참여 권한과 규칙 관리</td><td>허가된 사용자만 참여하며 제어와 처리가 빠르지만 중앙관리 성격이 큽니다.</td></tr>
                <tr><td><strong>컨소시엄 블록체인</strong></td><td>여러 기관이 공동으로 참여자·권한 관리</td><td>퍼블릭과 프라이빗의 중간 형태로, 허가된 연합 참여자가 합의합니다.</td></tr>
              </tbody></table></div>
              <h3>주요 보안위협</h3>
              <ul>
                <li><strong>프라이버시</strong>: 불변성 때문에 개인정보 삭제와 <em>잊힐 권리</em>를 보장하기 어렵고, 공개 원장의 거래관계 분석으로 참여자 활동이 노출될 수 있습니다.</li>
                <li><strong>개인키 도난·분실</strong>: 개인키를 탈취당하면 공격자가 정상 참여자인 것처럼 거래할 수 있고, 분실하면 자산 이전과 신원 증명이 불가능해질 수 있습니다.</li>
                <li><strong>가용성 저하</strong>: 참여자와 데이터가 늘수록 원장 저장량과 검증 부하가 증가하며, 복잡한 합의과정 때문에 처리속도와 확장성이 제한될 수 있습니다.</li>
              </ul>`
          },
          {
            id: "iot-overview-usecases", title: "사물인터넷 개요와 활용",
            content: `
              <p><strong>사물인터넷(IoT, Internet of Things)</strong>은 센서·유무선 통신·인터페이스 기술을 이용해 현실 세계의 사물과 가상 세계를 연결하고, 정보를 수집·공유·처리하여 지능형 서비스를 제공하는 환경입니다. M2M(Machine to Machine)을 인터넷까지 확장해 사람과 사물, 사물과 사물이 상호작용합니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>활용 분야</th><th>사례</th></tr></thead><tbody>
                <tr><td><strong>스마트홈</strong></td><td>가전·냉난방·에너지·HVAC·방범·자녀/베이비 케어의 원격 모니터링과 자동 제어</td></tr>
                <tr><td><strong>의료</strong></td><td>생체정보·활동량 모니터링, 환자·생체정보 관리, 질병 예측과 건강관리</td></tr>
                <tr><td><strong>교통</strong></td><td>차량·인프라 센서, 사고예방, 교통정보, 자율주행과 차량 간 통신</td></tr>
                <tr><td><strong>환경·재난</strong></td><td>대기오염·수질·산사태·화재 감지, 위험지역 출입통제와 재난 예측</td></tr>
                <tr><td><strong>제조·건설·에너지</strong></td><td>스마트팩토리, 공정·재고 최적화, 시설 상태·안전 모니터링, Smart Metering과 에너지 절감</td></tr>
              </tbody></table></div>`
          },
          {
            id: "iot-security-protocols", title: "IoT 암호·통신·프로토콜",
            content: `
              <p>IoT 단말은 8·16·32비트 프로세서와 제한된 전력·메모리를 사용하므로 기밀성·무결성·인증을 제공하면서도 계산량이 작은 암호와 프로토콜이 필요합니다.</p>
              <ul>
                <li>대칭키 암호는 국제표준 <strong>AES</strong>와 국내 경량·표준 알고리즘 <strong>HIGHT, SEED, ARIA, LEA</strong> 등을 환경에 맞게 사용합니다.</li>
                <li>기기와 IoT Gateway 사이는 <strong>ZigBee, Bluetooth, 6LoWPAN, Z-Wave, IEEE 802.15.4, LoRa, Wi-Fi</strong> 등을 사용합니다.</li>
              </ul>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>기술</th><th>핵심 특징·보안</th></tr></thead><tbody>
                <tr><td><strong>6LoWPAN</strong></td><td>저전력 무선망에서 IPv6를 사용하며 MTU와 헤더를 경량화합니다. 128비트 AES와 IPsec을 이용해 기밀성·무결성을 보호할 수 있습니다.</td></tr>
                <tr><td><strong>Z-Wave</strong></td><td>홈 자동화용 저전력 무선기술로 저속 통신을 사용하며 AES 적용을 권장합니다.</td></tr>
                <tr><td><strong>LoRaWAN</strong></td><td>장거리·저전력 통신으로 Frame Payload Encryption에 AES-128 기반 보안을 사용합니다.</td></tr>
                <tr><td><strong>CoAP</strong></td><td>제약 기기용 REST 방식 프로토콜로 UDP에서 동작하며 DTLS와 AES·ECC·SHA 등을 적용할 수 있습니다.</td></tr>
                <tr><td><strong>MQTT / MQTT-SN</strong></td><td>발행/구독(Publish/Subscribe) 메시징. MQTT는 TCP, 센서망용 MQTT-SN은 UDP를 사용하며 TLS·DTLS로 보호합니다.</td></tr>
                <tr><td><strong>DDS</strong></td><td>높은 QoS가 필요한 실시간 데이터 분산·교환을 지원합니다.</td></tr>
              </tbody></table></div>
              <div class="important-box"><span class="box-title">구분</span><p>기존 SOAP·HTTP는 제약 단말에서 구현 부담이 크므로 <strong>CoAP·MQTT·DDS</strong> 같은 경량 프로토콜을 활용합니다.</p></div>`
          },
          {
            id: "cloud-overview-models", title: "클라우드 개요와 서비스 모델",
            content: `
              <p><strong>클라우드 컴퓨팅(Cloud Computing)</strong>은 집적·공유된 정보통신 자원을 네트워크를 통해 필요한 만큼 사용하고, 수요 변화에 따라 빠르게 확장·축소하며 사용량 기준으로 비용을 지불하는 컴퓨팅 환경입니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>구축형(On-premises)</th><th>클라우드</th></tr></thead><tbody>
                <tr><td>초기 비용</td><td>인프라·패키지 도입으로 높음</td><td>초기 투자가 낮고 사용량 기반</td></tr>
                <tr><td>자원·용량</td><td>고정 용량과 상세한 자체 설정</td><td>필요할 때 확장·축소</td></tr>
                <tr><td>구축</td><td>직접 설치</td><td>서비스를 선택해 신속 이용</td></tr>
                <tr><td>처리·운영</td><td>자체 시스템에서 처리·관리</td><td>인터넷을 통해 제공자의 자원·운영기능 활용</td></tr>
              </tbody></table></div>
              <h3>서비스 모델</h3>
              <ul>
                <li><strong>IaaS(Infrastructure as a Service)</strong>: 서버·스토리지·네트워크·가상화 인프라 제공</li>
                <li><strong>PaaS(Platform as a Service)</strong>: 운영체제·미들웨어·DB·개발 플랫폼 제공</li>
                <li><strong>SaaS(Software as a Service)</strong>: 완성된 응용 소프트웨어를 서비스로 제공</li>
              </ul>
              <h3>구축 형태</h3>
              <p><strong>Private Cloud</strong>는 조직 내부 전용, <strong>Public Cloud</strong>는 외부 제공자의 공동 서비스, <strong>Hybrid Cloud</strong>는 두 환경을 결합한 형태입니다.</p>`
          },
          {
            id: "virtualization-container", title: "가상화와 컨테이너",
            content: `
              <p><strong>가상화(Virtualization)</strong>는 하나의 물리 IT 자원을 논리적인 여러 자원으로 나누거나 여러 자원을 하나처럼 사용할 수 있게 하는 기술입니다. <strong>Hypervisor</strong>가 CPU·메모리·장치 자원을 각 가상머신에 논리적으로 할당·스케줄링합니다.</p>
              <p>가상화 대상과 범위에 따라 데스크톱·애플리케이션·서버·네트워크·스토리지 가상화 등으로 구분합니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>가상머신(VM)</th><th>컨테이너(Container)</th></tr></thead><tbody>
                <tr><td><strong>격리 방식</strong></td><td>Hypervisor 위에 각 Guest OS와 응용 실행</td><td>Host OS 커널을 공유하고 cgroup·namespace로 프로세스·자원 격리</td></tr>
                <tr><td><strong>운영체제</strong></td><td>VM마다 별도 Guest OS</td><td>Host OS 공유</td></tr>
                <tr><td><strong>크기·속도</strong></td><td>이미지가 크고 부팅·배포 부담이 큼</td><td>이미지가 작고 생성·실행·배포가 빠름</td></tr>
                <tr><td><strong>보안 관점</strong></td><td>강한 격리와 Hypervisor 보안이 중요</td><td>공유 커널 취약점, 권한·이미지·런타임 보안이 중요</td></tr>
              </tbody></table></div>`
          },
          {
            id: "secaas", title: "SECaaS 서비스",
            content: `
              <p><strong>SECaaS(Security as a Service)</strong>는 서비스 제공자가 보안 기능을 패키지 형태로 제공해 기업이 보안 운영 부담을 줄이고 전문 서비스를 이용하도록 하는 모델입니다. 클라우드에서는 CSP가 제공하는 SaaS형 보안 서비스의 일부로 볼 수 있습니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>서비스</th><th>기능</th></tr></thead><tbody>
                <tr><td><strong>IAM</strong></td><td>사용자 신원을 검증하고 확인된 신원에 근거해 정확한 접근권한을 부여·관리</td></tr>
                <tr><td><strong>Web Security</strong></td><td>소프트웨어·기기 설치 또는 프록시 방식으로 웹 트래픽의 악성코드·유해 접근을 실시간 차단</td></tr>
                <tr><td><strong>E-mail Security</strong></td><td>송수신 메일을 통제·필터링해 스팸, 악성코드, 피싱, 정보유출과 위험 첨부파일로부터 보호</td></tr>
              </tbody></table></div>`
          },
          {
            id: "ransomware-overview", title: "랜섬웨어 개요와 감염경로",
            content: `
              <p><strong>랜섬웨어(Ransomware)</strong>는 운영체제·문서·이미지·동영상 등 시스템과 파일을 암호화하거나 잠근 뒤 복구를 조건으로 금전을 요구하는 악성코드입니다.</p>
              <ul>
                <li>Windows뿐 아니라 Android·macOS 등 다양한 환경을 공격하며, 지정된 기간 안에 지불하지 않으면 금액을 올리거나 복구키를 삭제하겠다고 위협합니다.</li>
                <li>대표 사례: <strong>WannaCry, Locky, CryptXXX, CERBER, CryptoLocker, TeslaCrypt</strong></li>
              </ul>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>일반 악성코드</th><th>랜섬웨어</th></tr></thead><tbody>
                <tr><td>주요 동작</td><td>정보·파일 유출, DDoS, 원격제어 등</td><td>문서·사진·MBR 등 데이터 암호화 또는 시스템 잠금</td></tr>
                <tr><td>치료·복구</td><td>백신 등으로 악성코드 제거 가능</td><td>감염 제거 후에도 암호화된 파일 복구가 어려움</td></tr>
                <tr><td>피해 목적</td><td>정보탈취·서비스 방해 등</td><td>암호화폐 등 금전 요구를 통한 2차 피해</td></tr>
              </tbody></table></div>
              <h3>주요 감염경로</h3>
              <p><strong>신뢰할 수 없는 사이트, 스팸메일·스피어피싱, P2P 파일공유 사이트, SNS 링크·첨부파일</strong>을 통해 유입됩니다. 취약한 응용프로그램·운영체제·DB·웹서버와 광고망도 악용될 수 있으며, 감염 후 C&amp;C나 Tor 네트워크에 접속해 키를 교환하고 파일 확장자를 바꾸거나 파일·부트영역을 암호화합니다.</p>`
          },
          {
            id: "ransomware-response", title: "랜섬웨어 공격·대응",
            content: `
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>공격 단계</th><th>관찰·대응</th></tr></thead><tbody>
                <tr><td>① 감염경로 접속</td><td>비정상 증상과 감염범위를 확인합니다.</td></tr>
                <tr><td>② 랜섬웨어 다운로드·실행</td><td>즉시 네트워크를 분리하고 기관 보안담당자에게 신고합니다.</td></tr>
                <tr><td>③ 파일·MBR 등 암호화</td><td>증거를 보존한 뒤 악성코드를 제거하고 감염 시스템을 재구축합니다.</td></tr>
                <tr><td>④ 복호화 대가 요구</td><td>신뢰 가능한 오프라인 백업과 검증된 복구수단으로 복구합니다.</td></tr>
              </tbody></table></div>
              <h3>랜섬웨어 피해 예방 5대 수칙</h3>
              <ol>
                <li>운영체제와 모든 소프트웨어를 최신 버전으로 업데이트합니다.</li>
                <li>백신 소프트웨어를 설치하고 최신 상태로 유지합니다.</li>
                <li>출처가 불명확한 이메일·첨부파일·URL을 실행하지 않습니다.</li>
                <li>P2P 파일공유 등 신뢰할 수 없는 사이트의 파일 다운로드를 주의합니다.</li>
                <li>중요 자료는 정기적으로 별도 매체·클라우드 등에 백업하고 복구 가능성을 확인합니다.</li>
              </ol>
              <div class="important-box"><span class="box-title">중요</span><p>백업은 운영 시스템과 분리하고, 정상 백업인지 확인하는 <strong>복구훈련</strong>까지 해야 랜섬웨어 대응 수단이 됩니다.</p></div>`
          },
          {
            id: "apt", title: "APT 개요와 주요 침투기법",
            content: `
              <p><strong>APT(Advanced Persistent Threat, 지능형 지속 위협)</strong>는 특정 국가·기관·기업을 목표로 고급 공격기법을 사용해 장기간 은밀하게 침투하고 내부 정보를 수집·유출하는 표적 공격입니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>일반 공격</th><th>APT</th></tr></thead><tbody>
                <tr><td>대상</td><td>불특정 다수</td><td>국가·기관·핵심 조직 등 구체적 표적</td></tr>
                <tr><td>기간</td><td>일회성·단기</td><td>지속적·장기적</td></tr>
                <tr><td>수단</td><td>알려진 공격을 광범위하게 사용</td><td>표적 정보에 맞춘 사회공학·제로데이·맞춤형 악성코드</td></tr>
                <tr><td>목적</td><td>서비스 방해·일반 정보탈취 등</td><td>기밀자료·국가정보·핵심기술의 은밀한 장기 수집</td></tr>
              </tbody></table></div>
              <h3>주요 침투기법</h3>
              <ul>
                <li><strong>Spear Phishing</strong>: 표적과 관계된 내용을 이용해 첨부파일·링크 실행을 유도하는 맞춤형 피싱</li>
                <li><strong>Drive-by-download</strong>: 자주 방문하는 웹사이트를 미리 침해해 방문만으로 악성코드가 내려가게 하는 공격</li>
                <li><strong>Watering Hole</strong>: 표적 조직 구성원이 자주 방문하는 사이트를 분석해 감염시키고 접속자를 공격</li>
                <li><strong>USB 메모리</strong>: 이동식 매체에 악성코드를 심어 폐쇄망·내부망으로 침투</li>
              </ul>
              <p>APT는 일반적으로 <strong>초기 침투 → 내부 정찰·권한 확대 → 악성코드 설치·거점 유지 → 정보 수집·외부 유출</strong>의 흐름을 거칩니다.</p>`
          },
          {
            id: "cyber-kill-chain", title: "사이버 킬 체인",
            content: `
              <p><strong>사이버 킬 체인(Cyber Kill Chain)</strong>은 Lockheed Martin이 공격자의 침투 과정을 단계별로 분석해 각 단계에서 탐지·차단하기 위해 정리한 모델입니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>단계</th><th>행위</th></tr></thead><tbody>
                <tr><td>① <strong>정찰(Reconnaissance)</strong></td><td>이메일 주소, 조직·컨퍼런스 정보 등 표적 정보 수집</td></tr>
                <tr><td>② <strong>무기화(Weaponization)</strong></td><td>Exploit과 Backdoor를 결합해 Payload 제작</td></tr>
                <tr><td>③ <strong>전달(Delivery)</strong></td><td>이메일·웹사이트·USB 등으로 공격코드를 표적에게 전달</td></tr>
                <tr><td>④ <strong>취약점 악용(Exploitation)</strong></td><td>표적 시스템에서 취약점을 이용해 코드 실행</td></tr>
                <tr><td>⑤ <strong>설치(Installation)</strong></td><td>악성코드·Backdoor를 설치해 지속 거점 마련</td></tr>
                <tr><td>⑥ <strong>명령 및 제어(Command &amp; Control)</strong></td><td>C&amp;C 채널을 열어 원격 명령과 제어 수행</td></tr>
                <tr><td>⑦ <strong>목표 실행(Actions on Objectives)</strong></td><td>정보수집·유출·파괴 등 공격자의 최종 목적 달성</td></tr>
              </tbody></table></div>
              <p>앞 단계에서 탐지·차단할수록 피해가 작아지므로 단계별 로그·위협정보를 연결해 대응합니다.</p>`
          },
          {
            id: "supply-chain", title: "공급망 공격과 대응",
            content: `
              <p><strong>공급망(Supply Chain)</strong>은 원자재·부품부터 개발·제조·유통을 거쳐 제품과 서비스가 고객에게 전달되는 전체 과정입니다. <strong>공급망 공격(Supply Chain Attack)</strong>은 이 과정의 신뢰받는 개발사·협력사·배포 경로를 먼저 침해해 최종 사용자에게 변조된 소프트웨어나 하드웨어를 전달하는 공격입니다.</p>
              <h3>대표 방식</h3>
              <ul>
                <li>소프트웨어 <strong>빌드·업데이트 인프라</strong>와 배포 서버 변조</li>
                <li>인증서·개발계정·배포권한을 탈취해 정상 파일처럼 서명·배포</li>
                <li>하드웨어·펌웨어·외부 라이브러리·패키지 변조</li>
                <li>악성코드가 포함된 제품·업데이트를 협력사와 고객에게 판매·제공</li>
              </ul>
              <p>정상 공급자의 신뢰와 업데이트 경로를 악용하므로 APT의 표적 침투와 랜섬웨어의 대규모 확산에 모두 효과적인 수단이 될 수 있습니다.</p>
              <h3>대응방안</h3>
              <ol>
                <li><strong>개발·빌드·업데이트 서버 관리 강화</strong>: 접근권한 최소화, 변경감사, 네트워크 가시성 확보, 개발자 단말의 악성코드 유입 차단</li>
                <li><strong>Secure SDLC</strong>: 개발 초기부터 보안을 적용하고 업데이트 채널 암호화, 코드서명과 무결성 검증 수행</li>
                <li><strong>공급망 이해와 취약 구간 점검</strong>: 협력사·부품·외부코드·배포경로를 파악하고 중요한 지점을 지속 평가</li>
                <li><strong>최신 패치 적용</strong>: 보안장비와 사용자 PC의 운영체제·소프트웨어를 최신 상태로 유지</li>
                <li><strong>지속적인 보안교육</strong>: 의심 행동을 신고하고 대응절차를 따를 수 있도록 사용자·개발자·운영자 교육</li>
              </ol>
              <div class="important-box"><span class="box-title">SECTION 18 핵심 연결</span><p><strong>분산원장 신뢰 → 제약기기 경량보안 → 공유자원 책임모델 → 장기 표적공격 단계 차단 → 신뢰받는 공급경로 검증</strong></p></div>`
          }
        ],
        content: ""
      }
    ]
  },
  {
    part: 5,
    title: "네트워크 보안",
    sections: [
      {
        id: "section-19", number: 19, title: "네트워크 개요",
        subtopics: [
          {
            id: "protocol-overview", title: "프로토콜의 기본 개념",
            content: `
              <p><strong>프로토콜(Protocol)</strong>은 데이터 통신에서 신뢰성 있고 효율적이며 안전하게 정보를 주고받기 위해 송신자와 수신자가 미리 약속한 <strong>통신 규약</strong>입니다.</p>
              <ul>
                <li>송신자와 수신자가 효율적으로 접속하는 방법을 정합니다.</li>
                <li>통신회선을 통해 전달되는 정보의 형태와 표현방법을 정합니다.</li>
                <li>오류가 발생했을 때의 대처, 송·수신자 사이의 동기방식 등 통신에 필요한 약속을 포함합니다.</li>
              </ul>
              <div class="important-box"><span class="box-title">핵심 질문</span><p>프로토콜은 통신에서 <strong>무엇을, 어떻게, 언제</strong> 주고받을 것인지를 규정합니다.</p></div>`
          },
          {
            id: "protocol-elements", title: "프로토콜의 3대 구성요소",
            content: `
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>구성요소</th><th>의미</th><th>예</th></tr></thead><tbody>
                <tr><td><strong>구문<br>Syntax</strong></td><td>데이터의 구조·형식과 각 항목이 표현되는 순서</td><td>처음 8비트는 송신지 주소, 다음 8비트는 수신지 주소, 나머지는 메시지</td></tr>
                <tr><td><strong>의미<br>Semantics</strong></td><td>각 비트 영역이 나타내는 뜻과 그 값을 어떻게 해석·처리할지 규정</td><td>주소 필드가 송신지인지 수신지인지, 오류 발생 시 어떤 제어를 할지 결정</td></tr>
                <tr><td><strong>타이밍<br>Timing</strong></td><td>데이터를 언제, 얼마나 빠른 속도로 전송할지 규정</td><td>송신 속도와 수신 처리속도를 맞춰 데이터 손실 방지</td></tr>
              </tbody></table></div>
              <p>예를 들어 송신자가 100Mbps로 보내지만 수신자가 1Mbps로만 처리할 수 있다면 속도 조절이 없을 때 데이터가 손실될 수 있습니다.</p>`
          },
          {
            id: "protocol-functions", title: "프로토콜의 주요 기능",
            content: `
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>기능</th><th>내용</th></tr></thead><tbody>
                <tr><td><strong>주소 지정</strong></td><td>송신지와 목적지를 구분해 올바른 대상에게 데이터를 전달합니다.</td></tr>
                <tr><td><strong>단편화·재조립</strong></td><td>큰 데이터를 전송 가능한 작은 블록으로 나누고 목적지에서 원래 데이터로 합칩니다.</td></tr>
                <tr><td><strong>캡슐화</strong></td><td>데이터에 주소·오류검사·프로토콜 제어정보 등을 담은 헤더나 트레일러를 붙입니다.</td></tr>
                <tr><td><strong>연결 제어</strong></td><td>연결형(Connection-Oriented) 또는 비연결형(Connectionless) 통신을 설정하고 관리합니다.</td></tr>
                <tr><td><strong>흐름 제어</strong></td><td>수신자가 처리할 수 있도록 송신 데이터의 양이나 속도를 조절합니다.</td></tr>
                <tr><td><strong>오류 제어</strong></td><td>오류를 검출하고 필요한 경우 재전송해 데이터의 정확성을 높입니다.</td></tr>
                <tr><td><strong>동기화</strong></td><td>체크포인트 등 통신 상태를 맞추어 중단 후에도 정해진 지점부터 계속할 수 있게 합니다.</td></tr>
                <tr><td><strong>순서 결정</strong></td><td>데이터 블록에 순서를 부여해 목적지에서 올바른 순서로 재구성합니다.</td></tr>
                <tr><td><strong>다중화</strong></td><td>하나의 통신 경로를 여러 프로세스나 프로토콜이 함께 사용하도록 합니다.</td></tr>
                <tr><td><strong>전송 서비스</strong></td><td>우선순위, 서비스 등급, 보안 요구 등 부가적인 전송 품질을 제공합니다.</td></tr>
              </tbody></table></div>`
          },
          {
            id: "osi-overview", title: "OSI 참조 모델과 계층 구성",
            content: `
              <p><strong>OSI(Open Systems Interconnection) 참조 모델</strong>은 서로 다른 시스템 사이의 통신을 원활하게 하기 위해 ISO가 개발한 국제표준 네트워크 구조입니다. 특정 장비나 제조사에 종속되지 않는 <strong>개방형 시스템</strong> 사이의 상호연결을 목표로 합니다.</p>
              <ul>
                <li><strong>하위 계층</strong>: 1계층 물리, 2계층 데이터링크, 3계층 네트워크 — 실제 전송과 경로 선택 중심</li>
                <li><strong>중간 계층</strong>: 4계층 전송 — 하위 네트워크 서비스와 상위 사용자 서비스를 연결</li>
                <li><strong>상위 계층</strong>: 5계층 세션, 6계층 표현, 7계층 응용 — 사용자·응용프로그램 서비스 중심</li>
              </ul>
              <h3>계층 간 통신 원칙</h3>
              <ul>
                <li>한 시스템 안에서는 인접한 상·하위 계층이 <strong>인터페이스</strong>를 통해 서비스를 주고받습니다.</li>
                <li>서로 다른 시스템의 같은 계층은 해당 계층의 프로토콜을 이용해 논리적인 <strong>Peer-to-Peer 통신</strong>을 수행합니다.</li>
                <li>각 계층은 자신이 제공하는 기능을 상위 계층에 서비스하고, 하위 계층의 기능을 이용합니다.</li>
              </ul>`
          },
          {
            id: "physical-data-link", title: "물리 계층과 데이터링크 계층",
            content: `
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>계층</th><th>주요 역할</th><th>핵심 단위·구성</th></tr></thead><tbody>
                <tr><td><strong>1계층 물리<br>Physical</strong></td><td>데이터를 물리 매체를 통해 <strong>비트 스트림</strong>으로 전송하고, 물리 링크의 설정·유지·해제를 담당합니다. 장치와 전송매체 사이의 기계적·전기적·기능적·절차적 인터페이스를 규정합니다.</td><td>PDU: <strong>Bit Stream</strong><br>케이블, 커넥터, 전송신호·속도, 전송모드</td></tr>
                <tr><td><strong>2계층 데이터링크<br>Data Link</strong></td><td>물리 계층의 비트 전송을 신뢰 가능한 링크로 바꾸며 비트 동기, 식별, 오류 제어, 흐름 제어를 수행합니다.</td><td>PDU: <strong>Frame</strong><br>LLC(Logical Link Control), MAC(Media Access Control)</td></tr>
              </tbody></table></div>
              <p><strong>LLC</strong>는 상위 계층과의 논리적 연결·제어를, <strong>MAC</strong>은 장비 사이의 물리적 매체 접근과 전송을 담당합니다.</p>
              <div class="important-box"><span class="box-title">구분</span><p>물리 계층은 <strong>비트를 전달</strong>하고, 데이터링크 계층은 그 비트를 <strong>프레임으로 묶어 인접 노드 사이에서 신뢰성 있게 전달</strong>합니다.</p></div>`
          },
          {
            id: "network-transport", title: "네트워크 계층과 전송 계층",
            content: `
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>계층</th><th>주요 역할</th><th>핵심 구분</th></tr></thead><tbody>
                <tr><td><strong>3계층 네트워크<br>Network</strong></td><td>논리 주소를 사용해 출발지에서 목적지까지의 경로를 설정하고, 상위 계층의 데이터를 패킷으로 나누어 전달합니다. 라우팅·패킷 전달·혼잡 관련 기능을 수행합니다.</td><td>PDU: <strong>Packet</strong><br>대표 주소: IP</td></tr>
                <tr><td><strong>4계층 전송<br>Transport</strong></td><td>하위 계층의 전송 기능과 상위 계층의 사용자 서비스를 연결하고, 응용 프로세스 사이의 <strong>종단 간(End-to-End)</strong> 전송을 제어합니다.</td><td>PDU: <strong>Segment / User Datagram</strong><br>분할·재조립, 연결·흐름·오류 제어</td></tr>
              </tbody></table></div>
              <p>전송 계층의 종단 간 통신은 단순히 두 컴퓨터가 연결된다는 뜻이 아니라, 송신 컴퓨터의 <strong>응용 프로세스</strong>에서 수신 컴퓨터의 응용 프로세스까지 데이터를 전달한다는 의미입니다.</p>`
          },
          {
            id: "upper-layers", title: "세션·표현·응용 계층",
            content: `
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>계층</th><th>주요 역할</th><th>대표 기능</th></tr></thead><tbody>
                <tr><td><strong>5계층 세션<br>Session</strong></td><td>통신 시스템 사이의 대화 제어기(Dialog Controller)로서 세션을 설정·유지·종료하고 동기화합니다.</td><td>대화 방식 결정, 동기점(Checkpoint), 중단 후 복구, 세션 관리</td></tr>
                <tr><td><strong>6계층 표현<br>Presentation</strong></td><td>송신 데이터의 표현형식을 수신자가 이해할 수 있는 표준 형식으로 변환합니다.</td><td>인코딩·디코딩, 암호화·복호화, 압축·해제, 데이터 형식 변환</td></tr>
                <tr><td><strong>7계층 응용<br>Application</strong></td><td>사용자 또는 응용프로그램이 네트워크 서비스를 이용할 수 있도록 인터페이스를 제공합니다.</td><td>전자우편, 원격접속, 파일 접근·전송, 공유 데이터베이스, 네트워크 관리</td></tr>
              </tbody></table></div>
              <p>세션 계층이 실제 응용프로그램 자체인 것은 아니며, 응용프로그램의 통신 세션을 관리하는 기능을 제공합니다.</p>`
          },
          {
            id: "osi-summary", title: "OSI 계층별 PDU·주소·프로토콜",
            content: `
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>계층</th><th>PDU</th><th>주소·식별값</th><th>대표 예</th></tr></thead><tbody>
                <tr><td><strong>7 응용</strong></td><td rowspan="3">Message</td><td>이름·서비스 식별</td><td>FTP, TFTP, SMTP, Telnet, HTTP, DNS, DHCP</td></tr>
                <tr><td><strong>6 표현</strong></td><td>데이터 형식</td><td>ASN.1, JPEG, MPEG, MIME</td></tr>
                <tr><td><strong>5 세션</strong></td><td>세션 식별</td><td>RPC, NetBIOS 등</td></tr>
                <tr><td><strong>4 전송</strong></td><td>Segment / User Datagram</td><td><strong>Port Number</strong></td><td>TCP, UDP, SCTP</td></tr>
                <tr><td><strong>3 네트워크</strong></td><td>Packet</td><td><strong>Logical Address</strong></td><td>IP, ICMP, IGMP, ARP, RARP, NAT, RIP, BGP</td></tr>
                <tr><td><strong>2 데이터링크</strong></td><td>Frame</td><td><strong>Physical / Link Address</strong></td><td>Ethernet, Token Ring, PPP, SLIP, WLAN</td></tr>
                <tr><td><strong>1 물리</strong></td><td>Bit Stream</td><td>물리 신호</td><td>케이블·커넥터·전송매체</td></tr>
              </tbody></table></div>
              <div class="important-box"><span class="box-title">암기 흐름</span><p><strong>Message → Segment → Packet → Frame → Bit</strong> 순으로 아래 계층에 내려가며 전송 단위가 바뀝니다.</p></div>`
          },
          {
            id: "tcpip-overview", title: "TCP/IP 프로토콜 그룹",
            content: `
              <p><strong>TCP/IP(Transmission Control Protocol / Internet Protocol)</strong>는 인터넷에서 사용하는 상호작용하는 프로토콜의 집합으로, 여러 모듈이 계층적으로 서비스를 제공하는 <strong>프로토콜 스위트(Protocol Suite)</strong>입니다.</p>
              <ul>
                <li>상위 계층 프로토콜은 하나 이상의 하위 계층 프로토콜이 제공하는 서비스를 이용합니다.</li>
                <li>초기에는 응용·전송·인터넷·네트워크 접근의 4계층으로 설명했지만, 현재 교재에서는 데이터링크와 물리 계층을 나눈 <strong>5계층 모델</strong>을 사용합니다.</li>
              </ul>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>OSI 7계층</th><th>TCP/IP 5계층</th></tr></thead><tbody>
                <tr><td>응용 + 표현 + 세션</td><td><strong>응용(Application)</strong></td></tr>
                <tr><td>전송</td><td><strong>전송(Transport)</strong></td></tr>
                <tr><td>네트워크</td><td><strong>네트워크(Network)</strong></td></tr>
                <tr><td>데이터링크</td><td><strong>데이터링크(Data Link)</strong></td></tr>
                <tr><td>물리</td><td><strong>물리(Physical)</strong></td></tr>
              </tbody></table></div>
              <p>TCP/IP가 OSI보다 먼저 개발되었기 때문에 OSI의 세션·표현 계층이 별도로 존재하지 않고 그 기능이 응용 계층에 포함됩니다.</p>`
          },
          {
            id: "layered-devices", title: "계층적 통신과 장비의 동작 범위",
            content: `
              <p>송신 호스트의 각 계층은 데이터를 만들어 아래 계층으로 넘기고, 수신 호스트는 물리 계층에서 받은 데이터를 위 계층으로 올려 응용프로그램에 전달합니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>장비</th><th>관련 계층</th><th>역할</th></tr></thead><tbody>
                <tr><td><strong>호스트</strong></td><td>응용·전송·네트워크·데이터링크·물리</td><td>메시지 생성부터 물리 전송, 수신 후 응용 전달까지 전체 계층 사용</td></tr>
                <tr><td><strong>라우터</strong></td><td>네트워크·데이터링크·물리</td><td>목적지 논리 주소를 보고 다음 경로를 선택하며 링크마다 프레임을 다시 구성</td></tr>
                <tr><td><strong>스위치</strong></td><td>데이터링크·물리</td><td>링크 주소를 기준으로 같은 네트워크 안에서 프레임 전달</td></tr>
              </tbody></table></div>
              <div class="important-box"><span class="box-title">핵심</span><p>라우터는 일반적으로 <strong>3계층</strong>, 스위치는 일반적으로 <strong>2계층</strong>까지 처리하며, 종단 호스트는 모든 계층을 사용합니다.</p></div>`
          },
          {
            id: "tcpip-layer-functions", title: "TCP/IP 계층별 기능",
            content: `
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>계층</th><th>기능</th></tr></thead><tbody>
                <tr><td><strong>응용</strong></td><td>응용프로그램이 네트워크에 접근할 수 있는 인터페이스와 FTP·HTTP·DNS·메일 같은 서비스를 제공합니다.</td></tr>
                <tr><td><strong>전송</strong></td><td>종단 간 통신 서비스를 제공하며 TCP 또는 UDP를 사용합니다. 연결형·비연결형 전달, 흐름·오류 제어와 데이터 전달을 담당합니다.</td></tr>
                <tr><td><strong>네트워크</strong></td><td>IP 주소를 관리하고 패킷을 라우팅합니다. ARP는 논리 주소와 링크 주소의 대응을 돕고, ICMP는 패킷 전달 중 발생한 오류와 상태를 알립니다.</td></tr>
                <tr><td><strong>데이터링크</strong></td><td>전송 매체를 통해 인접한 노드 사이에서 프레임을 송·수신합니다.</td></tr>
                <tr><td><strong>물리</strong></td><td>링크를 통해 비트를 실제 신호로 전달합니다.</td></tr>
              </tbody></table></div>`
          },
          {
            id: "encapsulation", title: "캡슐화와 역캡슐화",
            content: `
              <p><strong>캡슐화(Encapsulation)</strong>는 데이터가 송신 호스트의 상위 계층에서 하위 계층으로 내려갈 때 각 계층의 제어정보를 헤더 또는 트레일러로 붙이는 과정입니다. <strong>역캡슐화(Decapsulation)</strong>는 목적지에서 각 계층의 제어정보를 확인·제거하며 데이터를 위 계층으로 올리는 과정입니다.</p>
              <pre class="notes-diagram">응용 데이터
   ↓ 전송 헤더 추가
세그먼트 / 사용자 데이터그램
   ↓ 네트워크 헤더 추가
패킷
   ↓ 링크 헤더·트레일러 추가
프레임
   ↓
비트 전송</pre>
              <ul>
                <li><strong>송신 호스트</strong>: 위에서 아래로 캡슐화</li>
                <li><strong>수신 호스트</strong>: 아래에서 위로 역캡슐화</li>
                <li><strong>라우터</strong>: 수신 프레임을 역캡슐화해 패킷의 경로를 확인한 뒤, 다음 링크에 맞는 새 프레임으로 다시 캡슐화</li>
                <li><strong>2계층 스위치</strong>: 프레임의 링크 주소를 확인해 전달하며 라우터처럼 네트워크 패킷까지 역캡슐화하지 않음</li>
              </ul>`
          },
          {
            id: "addressing", title: "물리·논리·포트 주소",
            content: `
              <p>TCP/IP 통신에는 서로 다른 계층에서 사용하는 <strong>물리(링크) 주소, 논리(IP) 주소, 포트 주소</strong>가 필요합니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>주소</th><th>식별 대상</th><th>전송 중 특징</th></tr></thead><tbody>
                <tr><td><strong>물리 주소<br>Physical / Link Address</strong></td><td>하나의 링크 안에서 다음 장비의 네트워크 인터페이스</td><td>프레임이 라우터를 지날 때마다 현재 링크의 송·수신 장비 주소로 <strong>홉마다 변경</strong>됩니다.</td></tr>
                <tr><td><strong>논리 주소<br>Logical / IP Address</strong></td><td>인터넷에 연결된 출발지·목적지 호스트</td><td>IPv4는 일반적으로 32비트 주소를 사용하며, 라우팅 중에도 <strong>종단 간 출발지·목적지 주소가 유지</strong>됩니다.</td></tr>
                <tr><td><strong>포트 주소<br>Port Number</strong></td><td>호스트 안에서 통신에 참여하는 응용 프로세스</td><td>여러 프로세스 중 데이터를 전달할 송신·수신 프로세스를 구분합니다.</td></tr>
              </tbody></table></div>
              <p>예를 들어 한 컴퓨터가 동시에 FTP와 TELNET 통신을 수행할 수 있는 것은 IP 주소가 호스트를 찾고, 서로 다른 <strong>포트 번호</strong>가 각 응용 프로세스를 구별하기 때문입니다.</p>
              <div class="important-box"><span class="box-title">주소 연결</span><p><strong>링크 주소는 다음 홉, IP 주소는 최종 호스트, 포트 번호는 최종 프로세스</strong>를 식별합니다.</p></div>`
          },
          {
            id: "multiplexing", title: "다중화와 역다중화",
            content: `
              <p>TCP/IP 프로토콜 그룹은 여러 응용·전송 프로토콜을 함께 사용하므로 계층 사이에서 <strong>다중화(Multiplexing)</strong>와 <strong>역다중화(Demultiplexing)</strong>가 필요합니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>동작</th><th>예</th></tr></thead><tbody>
                <tr><td><strong>다중화</strong></td><td>송신지에서 여러 상위 프로토콜의 데이터를 하나의 하위 계층으로 모아 전달</td><td>FTP·HTTP 데이터는 TCP로, DNS·SNMP 데이터는 UDP로 내려간 뒤 IP가 전달</td></tr>
                <tr><td><strong>역다중화</strong></td><td>목적지에서 헤더의 프로토콜 번호와 포트 번호를 확인해 알맞은 상위 프로토콜·프로세스로 분배</td><td>IP가 TCP/UDP로 구분하고, TCP/UDP가 목적지 포트에 따라 FTP·HTTP·DNS·SNMP에 전달</td></tr>
              </tbody></table></div>
              <div class="important-box"><span class="box-title">SECTION 19 핵심 연결</span><p><strong>통신 규약 정의 → 계층별 역할 분담 → 캡슐화로 제어정보 추가 → 주소로 장비·호스트·프로세스 식별 → 다중화로 여러 통신 공유</strong></p></div>`
          }
        ],
        content: ""
      },
      {
        id: "section-20",
        number: 20,
        title: "TCP/IP",
        subtopics: [
          {
            id: "data-link-layer", title: "데이터링크 계층",
            content: `
              <p><strong>데이터링크 계층</strong>은 하나의 링크에 연결된 인접한 노드 사이에서 데이터그램을 프레임으로 전달합니다. LAN이나 WAN은 여러 링크로 구성될 수 있으며, 패킷은 목적지까지 이동하면서 링크마다 서로 다른 프레임에 실립니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>서비스</th><th>내용</th></tr></thead><tbody>
                <tr><td><strong>프레이밍</strong></td><td>네트워크 계층의 데이터그램에 헤더·트레일러를 붙여 프레임을 만들고 링크 주소를 표시합니다.</td></tr>
                <tr><td><strong>흐름 제어</strong></td><td>송신 노드가 수신 노드의 처리 능력을 넘지 않도록 전송량을 조절합니다.</td></tr>
                <tr><td><strong>오류 제어</strong></td><td>손상·손실된 프레임을 검출하고 필요한 경우 재전송합니다.</td></tr>
                <tr><td><strong>접근 제어</strong></td><td>여러 장치가 같은 링크를 공유할 때 어느 장치가 매체를 사용할지 결정합니다.</td></tr>
              </tbody></table></div>
              <p>라우터는 입력 링크에서 받은 프레임을 벗겨 IP 데이터그램을 확인한 뒤, 출력 링크 형식에 맞는 새 프레임으로 다시 캡슐화합니다.</p>`
          },
          {
            id: "network-layer", title: "네트워크 계층과 포워딩",
            content: `
              <p><strong>네트워크 계층</strong>은 송신 호스트에서 수신 호스트까지 패킷을 전달하며, 대표 프로토콜은 IP입니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>기능</th><th>의미</th></tr></thead><tbody>
                <tr><td><strong>포워딩<br>Forwarding</strong></td><td>라우터가 패킷의 목적지 주소와 포워딩 테이블을 확인해 알맞은 출력 인터페이스로 보내는 동작입니다.</td></tr>
                <tr><td><strong>라우팅<br>Routing</strong></td><td>출발지에서 목적지까지 패킷이 거쳐 갈 최적 경로를 계산하고 포워딩 정보를 만드는 과정입니다.</td></tr>
              </tbody></table></div>
              <div class="important-box"><span class="box-title">구분</span><p><strong>라우팅은 경로를 결정</strong>하고, <strong>포워딩은 결정된 경로에 따라 패킷을 실제 출력 포트로 전달</strong>합니다.</p></div>`
          },
          {
            id: "classful-addressing", title: "클래스 기반 IPv4 주소",
            content: `
              <p>IPv4는 32비트 주소를 사용합니다. 초기에는 네트워크 크기에 따라 주소 공간을 A~E 클래스로 나누는 <strong>클래스 기반 주소 지정</strong>을 사용했습니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>클래스</th><th>선두 비트·첫 옥텟</th><th>기본 구분</th><th>용도</th></tr></thead><tbody>
                <tr><td><strong>A</strong></td><td>0 / 0~127</td><td>/8, 호스트 24비트</td><td>대규모 네트워크</td></tr>
                <tr><td><strong>B</strong></td><td>10 / 128~191</td><td>/16, 호스트 16비트</td><td>중규모 네트워크</td></tr>
                <tr><td><strong>C</strong></td><td>110 / 192~223</td><td>/24, 호스트 8비트</td><td>소규모 네트워크</td></tr>
                <tr><td><strong>D</strong></td><td>1110 / 224~239</td><td>네트워크·호스트 구분 없음</td><td>멀티캐스트</td></tr>
                <tr><td><strong>E</strong></td><td>1111 / 240~255</td><td>예약 영역</td><td>실험·향후 사용</td></tr>
              </tbody></table></div>
              <p>클래스 A·B·C에서 네트워크 주소와 브로드캐스트 주소를 제외한 일반 호스트 수는 각각 <strong>2<sup>24</sup>-2, 2<sup>16</sup>-2, 2<sup>8</sup>-2</strong>입니다. 고정된 경계 때문에 주소가 낭비되는 문제가 있습니다.</p>`
          },
          {
            id: "cidr-vlsm", title: "CIDR·서브네팅·VLSM",
            content: `
              <p><strong>CIDR(Classless Inter-Domain Routing)</strong>는 클래스 경계를 없애고 주소 뒤에 접두사 길이 <strong>/n</strong>을 붙여 네트워크 비트 수를 표현합니다.</p>
              <ul>
                <li><strong>서브네팅</strong>: 호스트 영역의 일부를 서브넷 ID로 빌려 하나의 네트워크를 더 작은 네트워크로 분할합니다.</li>
                <li><strong>슈퍼네팅</strong>: 여러 연속 네트워크를 더 큰 하나의 주소 블록으로 묶어 경로 정보를 줄입니다.</li>
                <li><strong>VLSM(Variable Length Subnet Mask)</strong>: 같은 주소 블록 안에서 서로 다른 길이의 서브넷 마스크를 사용해 실제 필요한 호스트 수에 맞게 주소를 배분합니다.</li>
              </ul>
              <div class="important-box"><span class="box-title">CIDR 장점</span><p>주소 공간을 필요한 크기만큼 할당하고 여러 경로를 하나로 집약할 수 있어 <strong>IPv4 주소 낭비와 라우팅 테이블 크기</strong>를 줄입니다.</p></div>`
          },
          {
            id: "special-ipv4", title: "특수 IPv4 주소",
            content: `
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>주소</th><th>의미</th></tr></thead><tbody>
                <tr><td><strong>0.0.0.0</strong></td><td>주소가 아직 정해지지 않은 호스트 또는 모든 로컬 주소를 뜻하는 미지정 주소로 사용됩니다.</td></tr>
                <tr><td><strong>255.255.255.255</strong></td><td>현재 로컬 네트워크의 모든 호스트로 보내는 제한적 브로드캐스트 주소입니다. 라우터를 넘어 전달되지 않습니다.</td></tr>
                <tr><td><strong>127.0.0.0/8</strong></td><td>자기 자신을 시험하는 루프백 주소 블록이며 대표 주소는 127.0.0.1입니다.</td></tr>
                <tr><td><strong>10.0.0.0/8</strong></td><td rowspan="3">공인 인터넷에서 직접 라우팅하지 않는 RFC 1918 사설 주소입니다.</td></tr>
                <tr><td><strong>172.16.0.0/12</strong></td></tr>
                <tr><td><strong>192.168.0.0/16</strong></td></tr>
              </tbody></table></div>`
          },
          {
            id: "ipv4-datagram", title: "IPv4 데이터그램",
            content: `
              <p>IPv4는 <strong>비연결형·비신뢰형</strong> 데이터그램 프로토콜로, 패킷의 도착·순서·지연을 보장하지 않는 <strong>최선형 전송(Best-Effort Delivery)</strong>을 제공합니다. 신뢰성이 필요하면 상위 계층의 TCP가 보완합니다.</p>
              <p>IPv4 데이터그램 헤더는 기본 20바이트이며 옵션이 있으면 최대 60바이트입니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>필드</th><th>역할</th></tr></thead><tbody>
                <tr><td><strong>Version·HLEN</strong></td><td>IP 버전과 헤더 길이</td></tr>
                <tr><td><strong>Service Type·Total Length</strong></td><td>서비스 특성과 전체 데이터그램 길이</td></tr>
                <tr><td><strong>Identification·Flags·Fragment Offset</strong></td><td>단편화된 데이터그램의 식별·제어·재조립 위치</td></tr>
                <tr><td><strong>TTL</strong></td><td>라우터를 지날 때마다 감소하며 0이 되면 폐기해 무한 순환을 방지</td></tr>
                <tr><td><strong>Protocol</strong></td><td>페이로드를 전달할 상위 프로토콜(TCP·UDP·ICMP 등) 식별</td></tr>
                <tr><td><strong>Header Checksum</strong></td><td>IPv4 헤더의 오류 검사</td></tr>
                <tr><td><strong>Source·Destination</strong></td><td>32비트 송신지·목적지 IP 주소</td></tr>
                <tr><td><strong>Options·Padding</strong></td><td>선택 기능과 4바이트 경계 맞춤</td></tr>
              </tbody></table></div>`
          },
          {
            id: "arp-rarp-garp", title: "ARP·RARP·GARP",
            content: `
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>프로토콜</th><th>주소 변환·동작</th></tr></thead><tbody>
                <tr><td><strong>ARP</strong></td><td>같은 링크에서 목적지 <strong>IP 주소에 대응하는 물리 주소</strong>를 구합니다. 요청은 대상 MAC을 모르므로 브로드캐스트하고, 응답은 일반적으로 요청자에게 유니캐스트합니다. 결과는 일정 시간 ARP Cache에 저장됩니다.</td></tr>
                <tr><td><strong>RARP</strong></td><td>자신의 <strong>물리 주소로 IP 주소</strong>를 알아냅니다. 요청은 브로드캐스트하고 RARP 서버가 응답하며, 현재는 주로 BOOTP·DHCP가 그 역할을 대신합니다.</td></tr>
                <tr><td><strong>GARP</strong></td><td>Sender IP와 Target IP가 같은 ARP 요청입니다. 자신의 주소 존재를 알리고 <strong>중복 IP 검사·ARP Cache 갱신</strong>에 사용됩니다.</td></tr>
              </tbody></table></div>
              <div class="important-box"><span class="box-title">보안 주의</span><p>ARP 응답은 인증되지 않으므로 공격자가 거짓 MAC 정보를 보내 ARP Cache를 변조하는 <strong>ARP Spoofing</strong>에 악용할 수 있습니다.</p></div>`
          },
          {
            id: "icmp-overview", title: "ICMP 구조와 오류 보고",
            content: `
              <p><strong>ICMPv4(Internet Control Message Protocol version 4)</strong>는 IP가 직접 제공하지 않는 오류 보고와 네트워크 상태 질의 기능을 보완합니다. IP 데이터그램에 캡슐화되어 전달되며, 오류를 수정하지 않고 송신자에게 상황을 알립니다.</p>
              <p>ICMP 메시지는 공통적으로 <strong>Type·Code·Checksum</strong> 필드를 가지며, 오류 보고 메시지와 질의 메시지로 나뉩니다.</p>
              <ul>
                <li>ICMP 오류 메시지에 대한 또 다른 ICMP 오류 메시지는 만들지 않습니다.</li>
                <li>단편화된 데이터그램은 첫 번째 단편에 대해서만 오류 메시지를 생성합니다.</li>
                <li>멀티캐스트 주소를 목적지로 한 데이터그램에는 오류 메시지를 만들지 않습니다.</li>
                <li>127.0.0.0/8·0.0.0.0 같은 특수 주소를 가진 데이터그램에도 오류 메시지를 만들지 않습니다.</li>
              </ul>`
          },
          {
            id: "icmp-messages", title: "주요 ICMP 메시지",
            content: `
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>Type</th><th>메시지</th><th>의미</th></tr></thead><tbody>
                <tr><td><strong>3</strong></td><td>Destination Unreachable</td><td>목적지 네트워크·호스트·프로토콜·포트 등에 도달하지 못함</td></tr>
                <tr><td><strong>4</strong></td><td>Source Quench</td><td>혼잡으로 전송 속도를 낮추라고 알리던 방식이며 현재는 사용이 중단된 기능</td></tr>
                <tr><td><strong>5</strong></td><td>Redirect</td><td>더 적절한 다음 라우터가 있음을 호스트에 알림</td></tr>
                <tr><td><strong>11</strong></td><td>Time Exceeded</td><td>Code 0은 전송 중 TTL 만료, Code 1은 단편 재조립 시간 만료</td></tr>
                <tr><td><strong>12</strong></td><td>Parameter Problem</td><td>IP 헤더 필드나 옵션에 문제가 있음</td></tr>
                <tr><td><strong>8 / 0</strong></td><td>Echo Request / Reply</td><td>호스트 도달 가능성 확인. <strong>ping</strong>이 사용</td></tr>
                <tr><td><strong>13 / 14</strong></td><td>Timestamp Request / Reply</td><td>왕복 시간과 시간 정보를 확인</td></tr>
              </tbody></table></div>
              <p><strong>traceroute</strong>는 TTL을 단계적으로 늘리며 ICMP Time Exceeded 응답을 확인해 목적지까지 거치는 라우터를 추적합니다.</p>`
          },
          {
            id: "ipv6-features", title: "IPv6 특징과 IPv4 비교",
            content: `
              <p>IPv4 주소 고갈과 인터넷 규모 확대에 대응하기 위해 IPv6가 설계되었습니다. IPv6는 <strong>128비트</strong> 주소를 사용해 약 3.4×10<sup>38</sup>개의 주소를 제공합니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>IPv4</th><th>IPv6</th></tr></thead><tbody>
                <tr><td><strong>주소 길이</strong></td><td>32비트</td><td>128비트</td></tr>
                <tr><td><strong>표기</strong></td><td>10진수 4개를 점으로 구분</td><td>16비트 8개를 16진수와 콜론으로 구분</td></tr>
                <tr><td><strong>주소 방식</strong></td><td>유니캐스트·멀티캐스트·브로드캐스트</td><td>유니캐스트·애니캐스트·멀티캐스트, 브로드캐스트 없음</td></tr>
                <tr><td><strong>헤더</strong></td><td>20~60바이트 가변</td><td>40바이트 고정 기본 헤더와 확장 헤더</td></tr>
                <tr><td><strong>헤더 체크섬</strong></td><td>사용</td><td>삭제하여 처리 부담 감소</td></tr>
                <tr><td><strong>단편화</strong></td><td>송신 호스트와 라우터 가능</td><td>송신 호스트만 수행, Path MTU Discovery 활용</td></tr>
                <tr><td><strong>보안·QoS</strong></td><td>IPsec 선택적 적용</td><td>IPsec 지원과 Flow Label을 고려한 설계</td></tr>
              </tbody></table></div>
              <p>NAT 없이 종단 간 연결성을 높이고, 더 단순한 기본 헤더로 라우터의 처리 효율을 개선한 것이 핵심입니다.</p>`
          },
          {
            id: "ipv6-addresses", title: "IPv6 주소 유형",
            content: `
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>유형</th><th>전달 대상</th></tr></thead><tbody>
                <tr><td><strong>Unicast</strong></td><td>하나의 인터페이스를 식별하며, 패킷을 특정 한 장치에 전달합니다.</td></tr>
                <tr><td><strong>Anycast</strong></td><td>여러 인터페이스가 같은 주소를 공유하며, 라우팅 기준으로 가장 가까운 하나에 전달합니다.</td></tr>
                <tr><td><strong>Multicast</strong></td><td>특정 그룹에 속한 여러 인터페이스에 전달합니다.</td></tr>
              </tbody></table></div>
              <div class="important-box"><span class="box-title">핵심</span><p>IPv6에는 <strong>브로드캐스트 주소가 없으며</strong>, 필요한 그룹 전송은 멀티캐스트가 대신합니다.</p></div>`
          },
          {
            id: "ipv6-transition", title: "IPv4에서 IPv6로 전환",
            content: `
              <p>IPv4와 IPv6는 헤더 형식과 주소 체계가 달라 한 번에 교체하기 어렵습니다. 전환 기간에는 다음 방식을 사용합니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>전략</th><th>동작</th></tr></thead><tbody>
                <tr><td><strong>이중 스택<br>Dual Stack</strong></td><td>호스트가 IPv4와 IPv6를 모두 구현하고 상대와 네트워크 환경에 맞는 프로토콜을 선택합니다.</td></tr>
                <tr><td><strong>터널링<br>Tunneling</strong></td><td>IPv6 패킷이 IPv4 구간을 지날 때 IPv4 패킷 안에 캡슐화하고, 터널 끝에서 다시 꺼냅니다.</td></tr>
                <tr><td><strong>헤더 변환<br>Header Translation</strong></td><td>한쪽은 IPv6, 다른 쪽은 IPv4만 사용할 때 중간 장비가 주소와 헤더 형식을 상호 변환합니다.</td></tr>
              </tbody></table></div>`
          },
          {
            id: "udp", title: "UDP 구조와 서비스",
            content: `
              <p><strong>UDP(User Datagram Protocol)</strong>는 비연결형·비신뢰형 전송 프로토콜입니다. 각 사용자 데이터그램은 서로 독립적이며 연결 설정 없이 빠르게 전달됩니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>UDP 헤더 필드</th><th>크기·의미</th></tr></thead><tbody>
                <tr><td><strong>Source Port</strong></td><td>16비트, 송신 프로세스 식별</td></tr>
                <tr><td><strong>Destination Port</strong></td><td>16비트, 수신 프로세스 식별</td></tr>
                <tr><td><strong>Total Length</strong></td><td>16비트, 헤더와 데이터의 전체 길이</td></tr>
                <tr><td><strong>Checksum</strong></td><td>16비트, 오류 검사. IPv4 UDP에서는 선택적</td></tr>
              </tbody></table></div>
              <ul>
                <li>헤더가 <strong>8바이트</strong>로 작고 흐름·오류·혼잡 제어를 직접 제공하지 않습니다.</li>
                <li>다중화·역다중화를 제공하며 IP 주소와 포트 번호를 결합한 소켓 주소로 프로세스를 식별합니다.</li>
                <li>오류 제어가 필요하면 응용프로그램이 직접 구현해야 합니다.</li>
                <li>대표 활용: <strong>DNS, SNMP, TFTP, RIP, 실시간 음성·영상</strong></li>
              </ul>`
          },
          {
            id: "tcp-services", title: "TCP 서비스와 UDP 비교",
            content: `
              <p><strong>TCP(Transmission Control Protocol)</strong>는 연결형·신뢰성 있는 전송 프로토콜로, 응용 프로세스 사이에 양방향 <strong>바이트 스트림</strong>을 제공합니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>TCP</th><th>UDP</th></tr></thead><tbody>
                <tr><td><strong>연결</strong></td><td>연결 설정 후 전송</td><td>연결 설정 없음</td></tr>
                <tr><td><strong>데이터 단위</strong></td><td>연속된 바이트 스트림</td><td>서로 독립된 데이터그램</td></tr>
                <tr><td><strong>신뢰성·순서</strong></td><td>확인응답·재전송·순서번호 사용</td><td>도착·순서 보장 없음</td></tr>
                <tr><td><strong>제어</strong></td><td>흐름·오류·혼잡 제어</td><td>자체 제어 기능 없음</td></tr>
                <tr><td><strong>통신</strong></td><td>전이중, 송·수신 버퍼 사용</td><td>각 데이터그램을 독립적으로 전달</td></tr>
                <tr><td><strong>특징</strong></td><td>신뢰성이 높지만 헤더와 처리 부담이 큼</td><td>단순하고 빠르며 오버헤드가 작음</td></tr>
              </tbody></table></div>
              <p>TCP는 연결지향 서비스지만 물리 회선을 만드는 것이 아니라 양 끝 TCP가 상태를 유지하는 <strong>논리적 연결</strong>을 설정합니다.</p>`
          },
          {
            id: "tcp-segment", title: "TCP 세그먼트와 플래그",
            content: `
              <p>TCP 패킷을 <strong>세그먼트(Segment)</strong>라고 하며, 기본 헤더는 20바이트이고 옵션을 포함하면 최대 60바이트입니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>필드</th><th>기능</th></tr></thead><tbody>
                <tr><td><strong>Source·Destination Port</strong></td><td>송신·수신 응용 프로세스의 16비트 포트 번호</td></tr>
                <tr><td><strong>Sequence Number</strong></td><td>세그먼트의 첫 데이터 바이트에 부여된 순서번호</td></tr>
                <tr><td><strong>Acknowledgment Number</strong></td><td>상대에게서 다음에 받기를 기대하는 바이트 번호</td></tr>
                <tr><td><strong>HLEN</strong></td><td>4바이트 단위의 TCP 헤더 길이</td></tr>
                <tr><td><strong>Window Size</strong></td><td>수신자가 추가로 받을 수 있는 바이트 수를 알려 흐름 제어</td></tr>
                <tr><td><strong>Checksum</strong></td><td>헤더와 데이터 오류 검사. TCP에서는 필수</td></tr>
                <tr><td><strong>Urgent Pointer</strong></td><td>URG가 1일 때 긴급 데이터의 끝 위치 표시</td></tr>
              </tbody></table></div>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>플래그</th><th>의미</th></tr></thead><tbody>
                <tr><td><strong>URG</strong></td><td>긴급 포인터 필드가 유효함</td></tr>
                <tr><td><strong>ACK</strong></td><td>확인응답 번호가 유효함</td></tr>
                <tr><td><strong>PSH</strong></td><td>수신 버퍼를 기다리지 말고 응용프로그램에 즉시 전달</td></tr>
                <tr><td><strong>RST</strong></td><td>연결 초기화·거부·강제 종료</td></tr>
                <tr><td><strong>SYN</strong></td><td>순서번호 동기화와 연결 설정 요청</td></tr>
                <tr><td><strong>FIN</strong></td><td>송신할 데이터가 없으며 연결 종료 요청</td></tr>
              </tbody></table></div>`
          },
          {
            id: "tcp-connection", title: "TCP 연결 설정과 SYN Flooding",
            content: `
              <p>TCP 연결 설정은 <strong>3-Way Handshake</strong>로 수행합니다.</p>
              <pre class="notes-diagram">1. Client → Server : SYN, Seq = x
2. Server → Client : SYN + ACK, Seq = y, Ack = x + 1
3. Client → Server : ACK, Ack = y + 1
→ 연결 설정 완료</pre>
              <ul>
                <li>SYN 세그먼트는 데이터가 없어도 순서번호 1개를 소비합니다.</li>
                <li>마지막 ACK는 일반적으로 순서번호를 소비하지 않습니다.</li>
              </ul>
              <div class="important-box"><span class="box-title">SYN Flooding</span><p>공격자가 다수의 SYN을 보내고 마지막 ACK를 완료하지 않아 서버에 <strong>Half-Open 연결</strong>을 쌓는 서비스 거부 공격입니다. 연결 대기 큐와 시스템 자원을 고갈시켜 정상 요청 처리를 방해합니다.</p></div>`
          },
          {
            id: "tcp-transfer", title: "TCP 데이터 전송",
            content: `
              <p>연결이 설정되면 양쪽이 동시에 데이터를 주고받는 <strong>전이중 통신</strong>을 수행합니다. TCP는 바이트 단위 순서번호와 확인응답을 사용해 분실·중복·순서 뒤바뀜을 제어합니다.</p>
              <ul>
                <li><strong>송·수신 버퍼</strong>가 응용프로그램의 처리 속도와 네트워크 전송 속도 차이를 흡수합니다.</li>
                <li><strong>ACK 번호</strong>는 성공적으로 받은 마지막 바이트 다음에 기대하는 바이트 번호입니다.</li>
                <li><strong>Window Size</strong>를 이용한 슬라이딩 윈도우 방식으로 상대가 받을 수 있는 양만큼 전송합니다.</li>
                <li>데이터와 ACK를 같은 세그먼트에 함께 실어 보내는 <strong>피기배킹(Piggybacking)</strong>을 사용할 수 있습니다.</li>
                <li>플래그와 재전송 타이머를 통해 오류를 복구하며, 구현에 따라 PSH로 데이터를 응용프로그램에 즉시 전달합니다.</li>
              </ul>`
          },
          {
            id: "tcp-termination", title: "TCP 연결 종료·반닫힘·RST",
            content: `
              <p>TCP는 양방향 연결을 각각 닫기 때문에 일반적인 완전 종료는 <strong>4개의 세그먼트</strong>를 사용합니다. 상대의 ACK와 FIN을 하나로 합치면 3개의 세그먼트로 끝날 수 있습니다.</p>
              <pre class="notes-diagram">1. A → B : FIN
2. B → A : ACK
3. B → A : FIN
4. A → B : ACK
→ 양방향 연결 종료</pre>
              <ul>
                <li><strong>Half-Close</strong>: 한쪽이 FIN을 보내 자신의 송신만 종료해도 반대쪽은 남은 데이터를 계속 보낼 수 있습니다.</li>
                <li><strong>FIN</strong>도 SYN처럼 순서번호 1개를 소비합니다.</li>
                <li><strong>RST</strong>: 존재하지 않는 연결 요청 거부, 현재 연결의 즉시 중지·강제 초기화에 사용합니다.</li>
              </ul>`
          },
          {
            id: "application-protocols", title: "HTTP·FTP·TELNET·DNS",
            content: `
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>프로토콜</th><th>주요 기능·특징</th></tr></thead><tbody>
                <tr><td><strong>HTTP</strong></td><td>웹 서버와 클라이언트 사이에서 하이퍼텍스트를 요청·응답으로 전달합니다. 기본 서버 포트는 <strong>TCP 80</strong>이며 클라이언트는 일반적으로 임시 포트를 사용합니다.</td></tr>
                <tr><td><strong>FTP</strong></td><td>한 호스트에서 다른 호스트로 파일을 복사·전송하기 위한 표준 프로토콜입니다. 서로 다른 파일 이름·표현 방식·디렉터리 구조 차이를 처리합니다.</td></tr>
                <tr><td><strong>TELNET</strong></td><td>원격 로그인과 터미널 접속을 제공하는 <strong>TCP 23</strong> 프로토콜입니다. 로그인 정보와 데이터가 평문으로 전송될 수 있으므로 현재는 암호화된 <strong>SSH</strong> 사용을 권장합니다.</td></tr>
                <tr><td><strong>DNS</strong></td><td>도메인 이름과 IP 주소를 대응시키는 계층적·분산 데이터베이스 시스템입니다. 도메인 이름 공간은 역트리 구조이며, 각 레이블을 점으로 구분해 FQDN을 표현합니다.</td></tr>
              </tbody></table></div>
              <div class="important-box"><span class="box-title">SECTION 20 핵심 흐름</span><p><strong>링크에서 프레임 전달 → IP 주소와 데이터그램으로 라우팅 → ARP·ICMP로 주소 해석·상태 보고 → TCP·UDP로 프로세스 간 전송 → 응용 프로토콜로 서비스 제공</strong></p></div>`
          }
        ],
        content: ""
      },
      {
        id: "section-21", number: 21, title: "라우팅",
        subtopics: [
          {
            id: "routing-overview", title: "라우팅 개요",
            content: `
              <p><strong>라우팅(Routing)</strong>은 패킷을 송신지에서 목적지까지 전달하기 위해 가능한 여러 경로 중 적절한 경로를 결정하고, 정해진 경로에 따라 패킷을 전달하는 일련의 과정입니다.</p>
              <ul>
                <li>라우터는 라우팅 기능을 수행하며 네트워크 계층 주소를 기준으로 경로를 선택합니다.</li>
                <li>하나의 목적지에 여러 경로가 있으면 라우팅 알고리즘의 <strong>메트릭(Metric)</strong>에 따라 최적 경로를 결정합니다.</li>
                <li><strong>라우팅 테이블</strong>에는 목적지 네트워크, 다음 홉(Next Hop) 또는 출력 인터페이스, 경로 비용 등이 저장됩니다.</li>
              </ul>
              <div class="important-box"><span class="box-title">구분</span><p><strong>라우팅은 최적 경로를 계산</strong>하고, <strong>포워딩은 라우팅 테이블에 따라 실제 패킷을 다음 홉으로 전달</strong>합니다.</p></div>`
          },
          {
            id: "static-dynamic-routing", title: "정적 라우팅과 동적 라우팅",
            content: `
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>정적 라우팅</th><th>동적 라우팅</th></tr></thead><tbody>
                <tr><td><strong>라우팅 테이블 관리</strong></td><td>관리자가 수동으로 경로 설정</td><td>라우팅 프로토콜이 경로 정보를 교환하여 자동 갱신</td></tr>
                <tr><td><strong>환경 변화</strong></td><td>관리자가 변경하기 전까지 기존 경로 유지</td><td>장애·토폴로지 변화를 인지해 새로운 경로 계산</td></tr>
                <tr><td><strong>관리·처리 부담</strong></td><td>소규모에서는 단순하지만 규모가 커질수록 관리 부담 증가</td><td>초기 설정 후 관리가 편리하지만 CPU·메모리·대역폭 사용</td></tr>
                <tr><td><strong>적합한 환경</strong></td><td>단일 경로·소규모·변화가 적은 네트워크</td><td>다중 경로·대규모·변화가 잦은 네트워크</td></tr>
                <tr><td><strong>보안 관점</strong></td><td>외부 라우팅 업데이트를 수신하지 않음</td><td>거짓 경로 유입을 막기 위한 인접 관계·업데이트 인증 필요</td></tr>
              </tbody></table></div>`
          },
          {
            id: "routing-protocol-as", title: "라우팅 프로토콜·AS·IGP/EGP",
            content: `
              <p><strong>Routed Protocol</strong>과 <strong>Routing Protocol</strong>은 역할이 다릅니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>역할</th><th>대표 예</th></tr></thead><tbody>
                <tr><td><strong>Routed Protocol</strong></td><td>주소 정보를 담아 실제 사용자 패킷이 목적지까지 전달되도록 함</td><td>IP, 과거의 IPX·AppleTalk</td></tr>
                <tr><td><strong>Routing Protocol</strong></td><td>라우터끼리 경로 정보를 교환하고 최적 경로를 계산해 라우팅 테이블 생성</td><td>RIP, OSPF, EIGRP, BGP</td></tr>
              </tbody></table></div>
              <p><strong>AS(Autonomous System, 자율 시스템)</strong>는 하나의 관리 정책 아래 운영되는 라우터와 네트워크의 집합입니다.</p>
              <ul>
                <li><strong>IGP(Interior Gateway Protocol)</strong>: 하나의 AS 내부에서 경로 정보를 교환합니다. RIP·OSPF·EIGRP 등이 해당합니다.</li>
                <li><strong>EGP(Exterior Gateway Protocol)</strong>: 서로 다른 AS 사이에서 경로 정보를 교환합니다. 현재 대표 프로토콜은 BGP입니다.</li>
              </ul>`
          },
          {
            id: "distance-vector", title: "거리 벡터 라우팅",
            content: `
              <p><strong>거리 벡터(Distance Vector)</strong> 라우팅은 각 목적지까지의 <strong>거리</strong>와 그 방향인 <strong>다음 홉</strong>을 이웃 라우터와 주기적으로 교환하는 방식입니다.</p>
              <ul>
                <li>초기에는 직접 연결된 이웃의 비용을 알고, 이웃이 제공한 정보를 반복적으로 반영해 경로를 학습합니다.</li>
                <li>전체 토폴로지나 목적지까지의 완전한 경로를 저장하기보다 목적지별 최소 비용과 다음 홉을 관리합니다.</li>
                <li>대표 알고리즘은 <strong>Bellman-Ford</strong>이며 대표 프로토콜은 RIP입니다.</li>
              </ul>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>포워딩 테이블 항목</th><th>의미</th></tr></thead><tbody>
                <tr><td><strong>Destination Network</strong></td><td>도달하려는 목적지 네트워크</td></tr>
                <tr><td><strong>Next Router</strong></td><td>패킷을 다음으로 전달할 이웃 라우터</td></tr>
                <tr><td><strong>Cost</strong></td><td>목적지까지의 홉 수 등 경로 비용</td></tr>
              </tbody></table></div>`
          },
          {
            id: "link-state", title: "링크 상태 라우팅",
            content: `
              <p><strong>링크 상태(Link State)</strong> 라우팅은 각 라우터가 자신과 직접 연결된 링크의 상태와 비용을 알리고, 이를 네트워크 전체에 <strong>플러딩(Flooding)</strong>하여 동일한 링크 상태 데이터베이스를 구성하는 방식입니다.</p>
              <ol>
                <li>이웃 라우터와 링크 상태·비용을 파악합니다.</li>
                <li>링크 상태 정보를 다른 라우터에 플러딩합니다.</li>
                <li>모든 라우터가 전체 토폴로지 지도인 <strong>LSDB(Link-State Database)</strong>를 만듭니다.</li>
                <li><strong>Dijkstra의 SPF(Shortest Path First)</strong> 알고리즘으로 자신을 루트로 한 최단 경로 트리를 계산합니다.</li>
              </ol>
              <p>거리 벡터보다 메모리와 계산량이 크지만 일반적으로 변화 반영과 수렴이 빠르며, 대표 프로토콜은 OSPF입니다.</p>`
          },
          {
            id: "path-vector", title: "경로 벡터 라우팅",
            content: `
              <p><strong>경로 벡터(Path Vector)</strong> 라우팅은 목적지까지의 비용뿐 아니라 지나가는 <strong>AS의 순서와 경로 속성</strong>을 함께 전달합니다.</p>
              <ul>
                <li>각 목적지에 대해 정책과 속성에 맞는 최적 경로를 선택합니다.</li>
                <li>자신의 AS 번호가 경로에 이미 있으면 순환 경로로 판단할 수 있어 AS 단위 루프를 방지합니다.</li>
                <li>대표 프로토콜은 AS 간 라우팅에 사용하는 <strong>BGP</strong>입니다.</li>
              </ul>
              <div class="important-box"><span class="box-title">알고리즘 연결</span><p><strong>Distance Vector → RIP</strong> · <strong>Link State → OSPF</strong> · <strong>Path Vector → BGP</strong></p></div>`
          },
          {
            id: "rip-overview", title: "RIP 개요·홉 카운트·포트",
            content: `
              <p><strong>RIP(Routing Information Protocol)</strong>는 거리 벡터 기반의 대표적인 내부 라우팅 프로토콜입니다. 설정이 간단하지만 대규모 네트워크에는 적합하지 않습니다.</p>
              <ul>
                <li>메트릭으로 목적지까지 거치는 라우터 수인 <strong>Hop Count</strong>만 사용합니다.</li>
                <li>최대 유효 홉 수는 <strong>15</strong>이며 <strong>16은 도달 불가(무한대)</strong>로 처리합니다.</li>
                <li>RIPv1·RIPv2는 <strong>UDP 520</strong>, IPv6용 RIPng는 <strong>UDP 521</strong>을 사용합니다.</li>
                <li>주기적으로 라우팅 정보를 교환하므로 단순하지만 회선 속도·지연·신뢰성은 메트릭에 반영하지 못합니다.</li>
              </ul>`
          },
          {
            id: "rip-problems", title: "RIP 문제점과 해결 기법",
            content: `
              <p>거리 벡터 방식은 변화된 경로 정보가 모든 라우터에 전달될 때까지 시간이 걸려 <strong>느린 수렴(Slow Convergence)</strong>, 라우팅 루프, <strong>Counting to Infinity</strong> 문제가 발생할 수 있습니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>기법</th><th>동작</th></tr></thead><tbody>
                <tr><td><strong>Triggered Update</strong></td><td>주기적 갱신 시각을 기다리지 않고 중요한 경로 변화가 발생하면 즉시 이웃에게 알립니다.</td></tr>
                <tr><td><strong>Hold-Down</strong></td><td>경로 장애를 알게 된 뒤 일정 시간 동안 불안정하거나 오래된 경로 정보를 받아들이지 않습니다.</td></tr>
                <tr><td><strong>Split Horizon</strong></td><td>어떤 인터페이스로 학습한 경로를 같은 인터페이스 방향으로 다시 광고하지 않습니다.</td></tr>
                <tr><td><strong>Route Poisoning</strong></td><td>장애 경로의 메트릭을 16으로 광고해 전체 네트워크에 도달 불가임을 알립니다.</td></tr>
              </tbody></table></div>`
          },
          {
            id: "ripv1-ripv2", title: "RIPv1과 RIPv2 비교",
            content: `
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>항목</th><th>RIPv1</th><th>RIPv2</th></tr></thead><tbody>
                <tr><td><strong>라우팅 방식</strong></td><td>Classful, 서브넷 마스크를 경로 정보에 포함하지 않음</td><td>Classless, 서브넷 마스크를 포함하여 CIDR·VLSM 지원</td></tr>
                <tr><td><strong>업데이트 전송</strong></td><td>Broadcast</td><td>Multicast <strong>224.0.0.9</strong></td></tr>
                <tr><td><strong>인증</strong></td><td>지원하지 않음</td><td>라우팅 업데이트 인증 지원</td></tr>
                <tr><td><strong>최대 홉</strong></td><td>15</td><td>15로 동일</td></tr>
                <tr><td><strong>호환</strong></td><td>RIPv1 형식</td><td>필요하면 RIPv1 형식으로 송·수신하도록 설정 가능</td></tr>
              </tbody></table></div>
              <p>RIPv2는 RIPv1의 주소 확장과 인증 문제를 보완했지만, 최대 15홉이라는 규모 제한은 그대로입니다.</p>`
          },
          {
            id: "igrp-eigrp", title: "IGRP와 EIGRP",
            content: `
              <p><strong>IGRP(Interior Gateway Routing Protocol)</strong>는 RIP의 15홉 제한과 단일 메트릭 문제를 보완하기 위해 제안된 Cisco의 내부 라우팅 프로토콜입니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>IGRP 메트릭 요소</th><th>의미</th></tr></thead><tbody>
                <tr><td><strong>Bandwidth</strong></td><td>경로 중 가장 낮은 회선 대역폭</td></tr>
                <tr><td><strong>Delay</strong></td><td>경로의 인터페이스 지연시간 합</td></tr>
                <tr><td><strong>Reliability</strong></td><td>회선 신뢰도를 수치로 표현</td></tr>
                <tr><td><strong>Load</strong></td><td>회선의 현재 부하 정도</td></tr>
                <tr><td><strong>MTU</strong></td><td>경로에서 전송 가능한 최대 프레임 크기</td></tr>
              </tbody></table></div>
              <p><strong>EIGRP(Enhanced IGRP)</strong>는 IGRP를 확장한 고급 거리 벡터 계열 프로토콜입니다.</p>
              <ul>
                <li><strong>DUAL(Diffusing Update Algorithm)</strong>로 빠른 수렴과 루프 없는 대체 경로 계산을 지원합니다.</li>
                <li>VLSM을 지원하며 전체 테이블 대신 변화된 정보만 보내는 <strong>부분·제한 업데이트</strong>로 대역폭을 절약합니다.</li>
                <li>IGRP는 현재 사용이 중단된 구형 프로토콜이며, 시험에서는 EIGRP와의 발전 관계를 중심으로 구분합니다.</li>
              </ul>`
          },
          {
            id: "ospf-overview", title: "OSPF 개요와 특징",
            content: `
              <p><strong>OSPF(Open Shortest Path First)</strong>는 AS 내부에서 사용하는 개방형 표준 <strong>링크 상태 라우팅 프로토콜</strong>입니다.</p>
              <ul>
                <li>링크 상태 정보를 플러딩하여 LSDB를 동기화하고 Dijkstra SPF 알고리즘으로 최단 경로를 계산합니다.</li>
                <li>변화가 있을 때 갱신 정보를 신속히 전달하므로 수렴이 빠르고 주기적인 전체 테이블 전송 부담을 줄입니다.</li>
                <li>경로 비용(Cost)을 메트릭으로 사용하고 Classless 방식으로 CIDR·VLSM을 지원합니다.</li>
                <li>RIP보다 큰 AS에 적합하며 라우팅 업데이트 인증도 지원합니다.</li>
              </ul>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>거리 벡터</th><th>링크 상태</th></tr></thead><tbody>
                <tr><td>이웃에게 주기적으로 경로 정보를 전달</td><td>링크 변화 시 링크 상태를 영역에 플러딩</td></tr>
                <tr><td>목적지·다음 홉·거리 중심</td><td>전체 토폴로지의 LSDB와 최단 경로 트리 유지</td></tr>
                <tr><td>단순하지만 수렴이 느리고 루프 가능</td><td>계산·메모리 부담은 크지만 수렴이 빠름</td></tr>
              </tbody></table></div>`
          },
          {
            id: "ospf-hierarchy", title: "OSPF 계층 구조",
            content: `
              <p>OSPF는 대규모 AS를 여러 <strong>Area</strong>로 나누는 계층 구조로 관리합니다.</p>
              <ul>
                <li><strong>Backbone Area(Area 0)</strong>: 모든 다른 영역을 연결하는 중심 영역입니다.</li>
                <li><strong>Internal Router</strong>: 모든 인터페이스가 같은 영역에 속한 라우터입니다.</li>
                <li><strong>Backbone Router</strong>: 하나 이상의 인터페이스가 Area 0에 속한 라우터입니다.</li>
                <li><strong>ABR(Area Border Router)</strong>: Area 0과 다른 영역을 연결하고 영역 사이의 경로 정보를 전달합니다.</li>
                <li><strong>ASBR(Autonomous System Boundary Router)</strong>: OSPF AS와 다른 라우팅 도메인·프로토콜을 연결합니다.</li>
              </ul>
              <p>링크 상태 정보는 주로 영역 내부에 제한되고, 영역 간 정보는 경계 라우터를 통해 요약·전달되어 라우팅 트래픽과 LSDB 규모를 줄입니다.</p>`
          },
          {
            id: "bgp", title: "BGP4와 AS 경로",
            content: `
              <p><strong>BGP4(Border Gateway Protocol version 4)</strong>는 현재 인터넷에서 AS 사이의 경로를 교환하는 대표적인 <strong>EGP</strong>이며 경로 벡터 방식으로 동작합니다.</p>
              <ul>
                <li>목적지까지의 홉 수 대신 패킷이 거치는 <strong>AS 번호의 순서(AS_PATH)</strong>와 여러 경로 속성을 사용합니다.</li>
                <li>단순 최단거리보다 사업자 정책·경로 속성에 따라 최적 경로를 선택하는 <strong>정책 기반 라우팅</strong>에 적합합니다.</li>
                <li>AS_PATH에 자신의 AS가 이미 포함된 경로를 거부하여 AS 간 루프를 방지합니다.</li>
                <li>이웃 관계와 업데이트 전달에 <strong>TCP 179</strong>를 사용합니다.</li>
              </ul>
              <div class="important-box"><span class="box-title">대표 분류</span><p><strong>AS 내부: RIP·EIGRP·OSPF</strong> / <strong>AS 간: BGP</strong></p></div>`
          },
          {
            id: "router-modes", title: "라우터 기능과 동작 모드",
            content: `
              <p><strong>라우터</strong>는 동일한 네트워크 계층 전송 프로토콜을 사용하는 서로 다른 네트워크를 연결하고, 패킷 헤더와 라우팅 테이블을 참고해 다음 홉을 결정합니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>모드</th><th>프롬프트 예</th><th>기능</th></tr></thead><tbody>
                <tr><td><strong>User EXEC</strong></td><td><code>Router&gt;</code></td><td>제한된 상태·연결 확인 명령 사용</td></tr>
                <tr><td><strong>Privileged EXEC</strong></td><td><code>Router#</code></td><td>전체 조회·관리 명령과 설정 모드 진입</td></tr>
                <tr><td><strong>Global Configuration</strong></td><td><code>Router(config)#</code></td><td>장비 전체 설정 변경</td></tr>
                <tr><td><strong>Interface</strong></td><td><code>Router(config-if)#</code></td><td>특정 인터페이스 설정</td></tr>
                <tr><td><strong>Line</strong></td><td><code>Router(config-line)#</code></td><td>Console·VTY 라인 설정</td></tr>
                <tr><td><strong>Router</strong></td><td><code>Router(config-router)#</code></td><td>라우팅 프로토콜 설정</td></tr>
                <tr><td><strong>ROMMON/RXBOOT</strong></td><td>복구 프롬프트</td><td>IOS 또는 구성 파일 문제 발생 시 복구</td></tr>
                <tr><td><strong>Setup</strong></td><td>대화형 설정</td><td>구성 파일이 없을 때 초기 설정 지원</td></tr>
              </tbody></table></div>
              <pre class="notes-diagram">Router&gt; enable
Router# configure terminal
Router(config)# interface ethernet 0
Router(config-if)# exit
Router(config)# end</pre>`
          },
          {
            id: "router-basic-config", title: "기본 라우터 설정 명령",
            content: `
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>목적</th><th>명령 예</th></tr></thead><tbody>
                <tr><td><strong>도움말</strong></td><td><code>?</code></td></tr>
                <tr><td><strong>호스트명 변경</strong></td><td><code>hostname Router-A</code></td></tr>
                <tr><td><strong>접속 배너</strong></td><td><code>banner motd # 경고 문구 #</code></td></tr>
                <tr><td><strong>시간 설정</strong></td><td><code>clock set HH:MM:SS DAY MONTH YEAR</code></td></tr>
                <tr><td><strong>인터페이스 주소</strong></td><td><code>interface serial 0</code><br><code>ip address 172.16.4.1 255.255.255.0</code><br><code>no shutdown</code></td></tr>
                <tr><td><strong>현재 설정 저장</strong></td><td><code>copy running-config startup-config</code></td></tr>
              </tbody></table></div>
              <p><strong>Running-config</strong>는 현재 동작 중인 RAM의 설정이고, <strong>Startup-config</strong>는 재부팅 후 적용할 NVRAM의 설정입니다.</p>
              <div class="important-box"><span class="box-title">보안 주의</span><p>교재의 TFTP 기반 구성 복사 방식은 인증과 암호화가 부족할 수 있으므로 운영 환경에서는 신뢰된 관리망과 안전한 전송 방식을 사용합니다.</p></div>`
          },
          {
            id: "router-password-hardening", title: "라우터 암호와 자체 보안 설정",
            content: `
              <p>Console·원격 관리·Privileged EXEC 접근을 각각 통제하고, 불필요한 프로토콜과 서비스를 제거해야 합니다.</p>
              <pre class="notes-diagram">Router(config)# line console 0
Router(config-line)# password ********
Router(config-line)# login

Router(config)# line vty 0 4
Router(config-line)# password ********
Router(config-line)# login

Router(config)# enable secret ********</pre>
              <ul>
                <li><strong>enable secret</strong>와 <strong>enable password</strong>가 함께 있으면 enable secret이 우선합니다.</li>
                <li>교재의 Type 5·MD5 설명은 구형 IOS 기준입니다. 현재는 더 강한 해시 방식과 개별 계정·AAA를 사용하고, 평문 Telnet 대신 <strong>SSH</strong>를 적용하는 것이 안전합니다.</li>
                <li>권한 레벨은 0~15 범위이며 필요한 명령만 사용할 수 있도록 최소권한을 적용합니다.</li>
                <li><code>no service udp-small-servers</code>, <code>no service pad</code>, <code>no service finger</code> 등으로 사용하지 않는 서비스를 비활성화합니다.</li>
              </ul>`
          },
          {
            id: "standard-acl", title: "Standard ACL",
            content: `
              <p><strong>Standard ACL</strong>은 패킷의 <strong>출발지 IP 주소</strong>만 검사해 허용하거나 차단합니다. 고전적인 번호 범위는 1~99입니다.</p>
              <pre class="notes-diagram">access-list ACL번호 {permit | deny} {출발지 [와일드카드] | any}

access-list 5 permit host 192.168.159.131
access-list 5 deny any</pre>
              <ul>
                <li><code>host 192.168.159.131</code>은 단일 호스트를 지정합니다.</li>
                <li>와일드카드 마스크의 <strong>0은 비교</strong>, <strong>1은 무시</strong>를 의미합니다.</li>
                <li>출발지만 식별하므로 정상 목적지 트래픽까지 과도하게 막지 않도록 일반적으로 <strong>목적지에 가까운 위치</strong>에 배치합니다.</li>
              </ul>`
          },
          {
            id: "extended-acl", title: "Extended ACL과 처리 규칙",
            content: `
              <p><strong>Extended ACL</strong>은 출발지·목적지 IP, 프로토콜, 출발지·목적지 포트까지 검사할 수 있습니다. 고전적인 번호 범위는 100~199입니다.</p>
              <pre class="notes-diagram">access-list ACL번호 {permit | deny} protocol
  출발지 [와일드카드] 목적지 [와일드카드] [eq 포트]

access-list 150 deny tcp 192.168.1.0 0.0.0.255
  host 100.100.100.1 eq 80</pre>
              <p>Extended ACL은 공격·불필요 트래픽이 네트워크를 오래 통과하지 않게 일반적으로 <strong>출발지에 가까운 위치</strong>에 배치합니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>ACL 핵심 규칙</th><th>내용</th></tr></thead><tbody>
                <tr><td><strong>위에서 아래로 검사</strong></td><td>처음 일치한 규칙을 적용하고 이후 규칙은 검사하지 않습니다.</td></tr>
                <tr><td><strong>Implicit Deny</strong></td><td>어떤 규칙에도 일치하지 않으면 마지막의 숨은 <code>deny any</code>에 의해 차단됩니다.</td></tr>
                <tr><td><strong>규칙 추가</strong></td><td>전통적인 번호 ACL에서 새 규칙은 목록의 마지막에 추가됩니다.</td></tr>
                <tr><td><strong>ACL 미적용</strong></td><td>인터페이스에 ACL이 연결되지 않았다면 기본적으로 패킷을 허용합니다.</td></tr>
              </tbody></table></div>
              <p>인터페이스에는 <code>ip access-group ACL번호 in</code> 또는 <code>out</code>으로 방향을 지정해 적용합니다.</p>`
          },
          {
            id: "ingress-egress-filtering", title: "Ingress·Egress Filtering",
            content: `
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>필터링</th><th>검사 방향과 목적</th></tr></thead><tbody>
                <tr><td><strong>Ingress Filtering</strong></td><td>외부에서 내부로 들어오는 패킷의 출발지 주소를 검사합니다. 외부 인터페이스에서 들어오면서 내부 주소를 출발지로 주장하는 스푸핑 패킷 등을 차단합니다.</td></tr>
                <tr><td><strong>Egress Filtering</strong></td><td>내부에서 외부로 나가는 패킷의 출발지 주소를 검사합니다. 조직이 사용하도록 허가한 내부 주소 대역이 아닌 패킷의 유출을 차단합니다.</td></tr>
              </tbody></table></div>
              <pre class="notes-diagram">! 외부에서 내부 주소를 사칭한 패킷 차단 예
access-list 15 deny 130.18.0.0 0.0.255.255
access-list 15 permit any
interface FastEthernet 0/0
 ip access-group 15 in

! 내부 허가 대역만 외부로 전송
access-list 16 permit 220.1.2.0 0.0.0.255
access-list 16 deny any
interface FastEthernet 0/0
 ip access-group 16 out</pre>`
          },
          {
            id: "null-routing-urpf", title: "Null Routing과 uRPF",
            content: `
              <p><strong>Null Routing(Blackhole Routing)</strong>은 특정 공격지·목적지 트래픽을 가상 폐기 인터페이스인 <strong>Null0</strong>으로 보내 조용히 버리는 방식입니다.</p>
              <pre class="notes-diagram">interface null 0
 no ip unreachables
ip route 211.1.1.1 255.255.255.255 null 0</pre>
              <p><code>no ip unreachables</code>는 폐기한 패킷에 대해 ICMP Destination Unreachable 응답을 보내지 않게 하여 추가 트래픽과 정보 노출을 줄입니다.</p>
              <p><strong>uRPF(Unicast Reverse Path Forwarding)</strong>는 들어온 패킷의 출발지 주소로 역방향 경로를 조회해 유효성을 검사하는 스푸핑 방지 기법입니다.</p>
              <pre class="notes-diagram">interface FastEthernet 0/0
 ip verify unicast reverse-path</pre>
              <div class="important-box"><span class="box-title">차이</span><p><strong>Null Routing은 지정한 트래픽을 폐기</strong>하고, <strong>uRPF는 출발지로 되돌아가는 정상 경로 존재 여부를 검사</strong>합니다. 비대칭 라우팅 환경에서는 uRPF 모드 선택에 주의합니다.</p></div>`
          },
          {
            id: "source-routing-security", title: "Source Routing·라우팅 프로토콜 보안",
            content: `
              <p><strong>Source Routing</strong>은 송신자가 IP 패킷이 지나갈 중간 라우터 경로를 직접 지정하는 방식입니다. 경로를 엄격히 지정하는 Strict 방식과 일부 경유지만 지정하는 Loose 방식이 있습니다.</p>
              <ul>
                <li>공격자가 보안장비가 기대한 정상 경로를 우회하거나 경로 기반 통제를 피하는 데 악용할 수 있으므로 필요하지 않다면 비활성화합니다.</li>
                <li><strong>정적 경로</strong>는 라우팅 업데이트를 받지 않아 단순하지만 장애 자동 우회가 어렵습니다.</li>
                <li><strong>동적 라우팅</strong>은 변조된 업데이트와 비인가 이웃 형성을 막도록 인증, 허용 이웃 제한, 관리망 분리와 최소한의 경로 광고를 적용합니다.</li>
              </ul>`
          },
          {
            id: "static-route", title: "정적 경로 설정",
            content: `
              <p>정적 경로는 관리자가 목적지 네트워크와 다음 홉 또는 출력 인터페이스를 직접 지정합니다.</p>
              <pre class="notes-diagram">Router(config)# ip route network mask
  {next-hop-address | exit-interface} [administrative-distance]</pre>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>항목</th><th>의미</th></tr></thead><tbody>
                <tr><td><strong>network</strong></td><td>목적지 네트워크 또는 서브넷</td></tr>
                <tr><td><strong>mask</strong></td><td>목적지의 서브넷 마스크</td></tr>
                <tr><td><strong>next-hop-address</strong></td><td>다음 라우터의 IP 주소</td></tr>
                <tr><td><strong>exit-interface</strong></td><td>패킷을 내보낼 로컬 인터페이스</td></tr>
                <tr><td><strong>administrative-distance</strong></td><td>경로 정보 출처의 신뢰 우선순위. 값이 작을수록 우선</td></tr>
              </tbody></table></div>`
          },
          {
            id: "router-resource-checks", title: "라우터 리소스 점검 명령",
            content: `
              <p><code>show</code> 계열 명령으로 라우터의 상태·설정·인터페이스·시스템 정보를 확인할 수 있습니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>명령</th><th>확인 내용</th></tr></thead><tbody>
                <tr><td><code>show controllers serial 0</code></td><td>직렬 인터페이스의 DTE·DCE 상태 등 하드웨어 컨트롤러 정보</td></tr>
                <tr><td><code>show history</code></td><td>명령 버퍼에 저장된 최근 입력 명령</td></tr>
                <tr><td><code>show interface serial 0</code></td><td>인터페이스 상태와 트래픽·오류 통계</td></tr>
                <tr><td><code>show running-config</code></td><td>RAM에서 현재 동작 중인 설정</td></tr>
                <tr><td><code>show startup-config</code></td><td>NVRAM에 저장되어 다음 부팅 때 적용할 설정</td></tr>
                <tr><td><code>show terminal</code></td><td>현재 터미널 설정과 History Size</td></tr>
                <tr><td><code>show version</code></td><td>IOS 버전, 부팅 정보, 메모리와 하드웨어 구성 등 시스템 정보</td></tr>
                <tr><td><code>show access-lists</code></td><td>설정된 ACL 규칙과 매치 현황</td></tr>
                <tr><td><code>show ip interface</code></td><td>인터페이스별 IP 설정과 적용된 ACL 방향</td></tr>
              </tbody></table></div>
              <div class="important-box"><span class="box-title">SECTION 21 핵심 흐름</span><p><strong>경로 선택 원리 → 라우팅 알고리즘 → RIP·EIGRP·OSPF·BGP → 라우터 설정·암호 → ACL·경계 필터링 → Null0·uRPF·상태 점검</strong></p></div>`
          }
        ],
        content: ""
      },
      {
        id: "section-22", number: 22, title: "네트워크 장비의 이해",
        subtopics: [
          {
            id: "network-device-layers", title: "네트워크 장비와 OSI 계층",
            content: `
              <p>네트워크 장비는 주로 처리하는 <strong>OSI 계층과 주소 정보</strong>에 따라 구분합니다. 상위 계층 장비일수록 더 많은 헤더·세션·응용 데이터를 확인해 정교한 제어를 수행할 수 있습니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>주요 계층</th><th>대표 장비</th><th>판단 기준·역할</th></tr></thead><tbody>
                <tr><td><strong>응용 계층</strong></td><td>Gateway, L7 Switch</td><td>응용 데이터와 서로 다른 프로토콜·환경의 변환</td></tr>
                <tr><td><strong>전송 계층</strong></td><td>L4 Switch</td><td>TCP·UDP와 포트 번호, 서비스별 부하분산</td></tr>
                <tr><td><strong>네트워크 계층</strong></td><td>Router, L3 Switch</td><td>IP 주소와 라우팅 테이블을 이용한 경로 선택</td></tr>
                <tr><td><strong>데이터링크 계층</strong></td><td>Bridge, L2 Switch</td><td>MAC 주소를 이용한 프레임 전달·필터링</td></tr>
                <tr><td><strong>물리 계층</strong></td><td>Repeater, Hub</td><td>비트 신호의 재생·증폭과 물리적 연결</td></tr>
              </tbody></table></div>
              <div class="important-box"><span class="box-title">계층 흐름</span><p><strong>Hub는 신호 → Bridge·L2 Switch는 MAC → Router·L3 Switch는 IP → L4 Switch는 Port → L7 Switch·Gateway는 응용 데이터와 프로토콜</strong>을 주로 다룹니다.</p></div>`
          },
          {
            id: "network-interface-card", title: "랜카드(NIC)",
            content: `
              <p><strong>랜카드(LAN Card, NIC)</strong>는 PC를 네트워크에 연결하여 정보를 송수신할 수 있게 하는 인터페이스 장치입니다.</p>
              <ul>
                <li>PC의 전송 요구를 네트워크 규격에 맞는 신호·프레임 형태로 만들어 매체로 보냅니다.</li>
                <li>수신한 정보를 해석해 PC가 처리할 수 있도록 전달합니다.</li>
                <li>운영체제와 랜카드가 통신하려면 해당 장치에 맞는 <strong>네트워크 드라이버</strong>가 필요합니다.</li>
              </ul>
              <p>랜카드는 일반적으로 제조 과정에서 부여되는 <strong>MAC 주소</strong>를 가지며, 동일 LAN에서 데이터링크 계층의 장치 식별에 사용됩니다.</p>`
          },
          {
            id: "repeater-hub", title: "리피터와 허브",
            content: `
              <p><strong>리피터(Repeater)</strong>와 <strong>허브(Hub)</strong>는 OSI 물리 계층에서 동작하며 약해지거나 왜곡된 신호를 원래 비트 형태로 <strong>재생(Regenerate)</strong>하여 전송 거리를 연장합니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>리피터</th><th>허브</th></tr></thead><tbody>
                <tr><td><strong>형태</strong></td><td>두 LAN 세그먼트를 연결하던 장치</td><td>리피터 기능을 여러 포트에 확장한 다중 포트 장치</td></tr>
                <tr><td><strong>주요 기능</strong></td><td>약해진 신호의 재생·중계</td><td>신호 재생과 여러 노드의 물리적 연결 지점 제공</td></tr>
                <tr><td><strong>전달 방식</strong></td><td colspan="2">수신한 신호를 목적지 판단 없이 다른 쪽 또는 다른 모든 포트로 전달</td></tr>
                <tr><td><strong>필터링</strong></td><td colspan="2">MAC·IP를 해석하지 않으므로 프레임 필터링 기능 없음</td></tr>
              </tbody></table></div>
              <p>허브에 연결된 한 장치가 데이터를 보내면 송신 포트를 제외한 모든 포트로 신호가 전달됩니다. 목적지 장치만 데이터를 받아들이고 나머지는 폐기하므로 연결 장치들이 <strong>하나의 충돌 도메인</strong>을 공유합니다.</p>
              <div class="important-box"><span class="box-title">시험 핵심</span><p><strong>Hub = Physical Layer + Multiport Repeater + 필터링 없음.</strong> 오늘날에는 동일 기능을 독립 장치보다 스위치 등 다른 네트워크 장비 내부에서 주로 제공합니다.</p></div>`
          },
          {
            id: "bridge-overview", title: "브리지(Bridge)",
            content: `
              <p><strong>브리지(Bridge)</strong>는 OSI 데이터링크 계층의 MAC 부계층에서 동작하며, 두 LAN 세그먼트를 연결하고 프레임의 목적지 MAC 주소를 기준으로 전달 여부와 출력 포트를 결정합니다.</p>
              <ul>
                <li>네트워크를 여러 세그먼트로 분할해 불필요한 트래픽과 충돌을 줄이고 통신 효율을 높입니다.</li>
                <li>필요한 프레임만 다른 세그먼트로 전달하여 네트워크 확장과 트래픽 격리에 사용합니다.</li>
                <li>분산된 네트워크 구성을 통해 세그먼트 간 접근을 통제하면 보안성을 높일 수 있습니다.</li>
                <li>포트가 많은 브리지를 발전시킨 형태가 일반적인 <strong>L2 스위치</strong>입니다.</li>
              </ul>
              <div class="important-box"><span class="box-title">허브와 차이</span><p>허브는 신호를 모든 포트로 반복하지만, 브리지는 <strong>프레임을 인식하고 MAC 주소를 기준으로 필요한 세그먼트에만 전달</strong>합니다.</p></div>`
          },
          {
            id: "mac-address-structure", title: "MAC 주소 구조",
            content: `
              <p><strong>MAC(Media Access Control) 주소</strong>는 네트워크 인터페이스를 식별하는 일반적인 48비트 하드웨어 주소이며 6개의 8비트 값을 16진수로 표시합니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>구성</th><th>길이</th><th>의미</th></tr></thead><tbody>
                <tr><td><strong>OUI / Vendor Code</strong></td><td>상위 24비트</td><td>IEEE가 제조사에 할당하는 식별 영역</td></tr>
                <tr><td><strong>Device / Serial 영역</strong></td><td>하위 24비트</td><td>제조사가 인터페이스별로 부여하는 식별 영역</td></tr>
              </tbody></table></div>
              <p>브리지와 L2 스위치는 수신 프레임의 출발지 MAC 주소를 학습해 <strong>MAC 주소 테이블</strong>을 만들고, 목적지 MAC 주소와 연결된 포트로 프레임을 전달합니다.</p>`
          },
          {
            id: "switch-overview-monitoring", title: "스위치 개요와 모니터링",
            content: `
              <p><strong>스위치(Switch)</strong>는 허브의 다중 포트 연결 기능과 브리지의 프레임 전달·필터링 기능을 결합한 장치입니다. 목적지 주소를 확인해 해당 장치가 연결된 포트로만 데이터를 전달합니다.</p>
              <ul>
                <li>포트별로 독립된 충돌 도메인을 형성하여 허브보다 충돌을 크게 줄입니다.</li>
                <li>수신 프레임의 출발지 MAC 주소를 학습하고, 목적지가 알려진 프레임은 해당 포트로만 전달합니다.</li>
                <li>목적지 MAC 주소를 아직 모르면 수신 포트를 제외한 같은 VLAN의 포트로 <strong>Flooding</strong>합니다.</li>
              </ul>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>모니터링 방식</th><th>설명</th></tr></thead><tbody>
                <tr><td><strong>Monitoring / SPAN Port</strong></td><td>선택한 포트 또는 VLAN의 트래픽을 모니터링 포트로 복제(Mirroring)하여 분석 장비에 전달</td></tr>
                <tr><td><strong>Network TAP</strong></td><td>통신 경로에 연결해 지나가는 패킷의 복사본을 별도 분석 장비로 제공하는 수동·전용 장비</td></tr>
              </tbody></table></div>
              <p>스위치 환경에서는 일반 포트가 다른 포트의 유니캐스트 트래픽을 직접 볼 수 없으므로, 패킷 분석 시 SPAN 포트나 TAP을 사용합니다.</p>`
          },
          {
            id: "l2-l3-switch", title: "L2·L3 스위치",
            content: `
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>L2 Switch</th><th>L3 Switch</th></tr></thead><tbody>
                <tr><td><strong>OSI 계층</strong></td><td>데이터링크 계층</td><td>네트워크 계층</td></tr>
                <tr><td><strong>판단 정보</strong></td><td>MAC 주소</td><td>IP 주소·라우팅 테이블</td></tr>
                <tr><td><strong>주요 기능</strong></td><td>MAC 주소 학습, 프레임 필터링·포워딩, VLAN 구성</td><td>L2 기능 + VLAN·네트워크 간 라우팅</td></tr>
                <tr><td><strong>구현 특징</strong></td><td>스위칭 회로를 이용한 고속 프레임 전달</td><td>라우팅 기능을 하드웨어 기반으로 고속 처리하여 Routing Switch라고도 함</td></tr>
              </tbody></table></div>
              <p>L3 스위치는 ASIC와 고속 스위칭 구조를 이용해 라우터의 경로 선택 기능을 빠르게 처리합니다. 주로 내부 LAN과 VLAN 간 통신에 사용하고, 라우터는 WAN 연결·다양한 회선·고급 경계 기능에 널리 사용합니다.</p>`
          },
          {
            id: "l4-l7-switch", title: "L4·L7 스위치",
            content: `
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>L4 Switch</th><th>L7 Switch</th></tr></thead><tbody>
                <tr><td><strong>주요 분석 정보</strong></td><td>출발지·목적지 IP, TCP/UDP 포트, 세션 정보</td><td>HTTP URL·Host·Cookie, 전자우편 문자열, FTP 파일명 등 응용 데이터</td></tr>
                <tr><td><strong>대표 기능</strong></td><td>서비스별 분배, Server Load Balancing, 상태 확인</td><td>콘텐츠 기반 분배·필터링, 세밀한 정책, 응용 계층 보안·최적화</td></tr>
                <tr><td><strong>서비스 구분 예</strong></td><td>HTTP, SMTP, FTP, DNS, Telnet 등의 포트 번호</td><td>같은 HTTP 안에서도 URL·요청 내용·세션 특성별 구분</td></tr>
                <tr><td><strong>특징</strong></td><td>서버 부하를 여러 장비에 분산</td><td>더 많은 데이터를 분석해 정교하지만 처리 부담이 큼</td></tr>
              </tbody></table></div>
              <div class="important-box"><span class="box-title">구분</span><p><strong>L4는 TCP/UDP와 포트 중심</strong>, <strong>L7은 실제 응용 데이터의 내용 중심</strong>으로 트래픽을 분류·제어합니다.</p></div>`
          },
          {
            id: "switch-forwarding-methods", title: "스위칭 전송 방식",
            content: `
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>방식</th><th>처리 시점</th><th>장점</th><th>주의점</th></tr></thead><tbody>
                <tr><td><strong>Store-and-Forward</strong></td><td>프레임 전체를 받은 뒤 FCS 등 오류를 검사하고 전달</td><td>오류 프레임을 폐기할 수 있어 신뢰성 높음</td><td>전체 수신을 기다리므로 상대적으로 지연 큼</td></tr>
                <tr><td><strong>Cut-Through</strong></td><td>목적지 MAC 주소를 확인하면 프레임 수신 중 전달 시작</td><td>처리 지연이 가장 작음</td><td>오류 프레임까지 전달할 수 있음</td></tr>
                <tr><td><strong>Fragment-Free</strong></td><td>충돌로 손상되기 쉬운 첫 64바이트(512비트)를 확인한 뒤 전달</td><td>Cut-Through보다 오류 검출에 유리하고 Store-and-Forward보다 빠름</td><td>프레임 전체의 오류를 검사하지는 않음</td></tr>
              </tbody></table></div>
              <div class="important-box"><span class="box-title">기억</span><p><strong>전체 확인 = Store-and-Forward / 목적지 주소만 확인 = Cut-Through / 앞 64바이트 확인 = Fragment-Free</strong></p></div>`
          },
          {
            id: "router-overview", title: "라우터(Router)",
            content: `
              <p><strong>라우터(Router)</strong>는 OSI 네트워크 계층에서 IP 주소와 라우팅 테이블을 이용해 서로 다른 네트워크를 연결하고 목적지까지의 효율적인 경로를 선택합니다.</p>
              <ul>
                <li>LAN과 LAN, LAN과 WAN을 연결하고 각 인터페이스에 물리 주소와 논리 주소를 가집니다.</li>
                <li>수신 프레임의 목적지 MAC 주소가 자신의 인터페이스와 일치하는지 확인한 뒤 IP 패킷을 처리합니다.</li>
                <li>다음 홉으로 전달할 때 기존 데이터링크 헤더를 제거하고 해당 링크에 맞는 새로운 출발지·목적지 MAC 주소로 프레임을 다시 만듭니다.</li>
                <li>손상되었거나 전달할 수 없는 패킷을 폐기하고 필요하면 ICMP 등으로 오류를 알립니다.</li>
              </ul>
              <div class="important-box"><span class="box-title">주소 변화</span><p>라우팅 과정에서 <strong>IP 출발지·목적지는 원칙적으로 종단 간 유지</strong>되지만, <strong>MAC 출발지·목적지는 링크를 지날 때마다 변경</strong>됩니다.</p></div>`
          },
          {
            id: "router-functions", title: "라우터의 주요 기능",
            content: `
              <ul>
                <li><strong>경로 선택</strong>: RIP·OSPF·BGP 등 라우팅 프로토콜이나 정적 경로로 목적지까지의 경로를 학습합니다.</li>
                <li><strong>브로드캐스트 격리</strong>: 기본적으로 LAN의 브로드캐스트를 다른 네트워크로 전달하지 않아 브로드캐스트 도메인을 분리합니다.</li>
                <li><strong>트래픽 필터링</strong>: ACL을 이용해 출발지·목적지·프로토콜·포트 조건으로 트래픽을 허용하거나 차단합니다.</li>
                <li><strong>네트워크 분할</strong>: 여러 네트워크를 연결하면서 세그먼트 간 트래픽을 필요한 범위로 제어합니다.</li>
                <li><strong>장애 대응</strong>: 라우팅 정보로 링크 단절·혼잡·경로 변화를 파악하고 사용 가능한 다른 경로를 선택합니다.</li>
              </ul>
              <p>라우터는 네트워크 경계를 형성하므로 효율적인 전달뿐 아니라 ACL, 경로 인증, 관리 인터페이스 보호 등 보안 설정이 중요합니다.</p>`
          },
          {
            id: "bridge-router-comparison", title: "브리지와 라우터 비교",
            content: `
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>Bridge</th><th>Router</th></tr></thead><tbody>
                <tr><td><strong>동작 계층</strong></td><td>데이터링크 계층</td><td>네트워크 계층</td></tr>
                <tr><td><strong>판단 정보</strong></td><td>MAC 주소</td><td>IP 주소</td></tr>
                <tr><td><strong>참조 테이블</strong></td><td>MAC 주소 테이블</td><td>라우팅 테이블</td></tr>
                <tr><td><strong>프레임 처리</strong></td><td>동일한 데이터링크 형식 안에서 프레임을 전달·필터링</td><td>링크마다 데이터링크 헤더를 제거하고 새로 생성</td></tr>
                <tr><td><strong>브로드캐스트</strong></td><td>같은 VLAN·브로드캐스트 도메인 안에서 전달</td><td>기본적으로 다른 네트워크로 전달하지 않음</td></tr>
                <tr><td><strong>도메인 분리</strong></td><td>충돌 도메인 분리</td><td>충돌 도메인과 브로드캐스트 도메인 분리</td></tr>
                <tr><td><strong>연결 대상</strong></td><td>같은 네트워크 계층 프로토콜을 사용하는 LAN 세그먼트</td><td>서로 다른 IP 네트워크·다양한 데이터링크 구간</td></tr>
              </tbody></table></div>`
          },
          {
            id: "gateway-overview", title: "게이트웨이(Gateway)",
            content: `
              <p><strong>게이트웨이(Gateway)</strong>는 서로 다른 프로토콜·데이터 형식·운영 환경을 사용하는 두 네트워크 사이에서 통신할 수 있도록 <strong>변환</strong>하는 장치 또는 소프트웨어를 포괄하는 용어입니다.</p>
              <ul>
                <li>OSI 모든 계층의 기능을 포함할 수 있으며 단순 경로 전달보다 복잡한 프로토콜·메시지·주소 형식 변환을 수행합니다.</li>
                <li>완전히 다른 구조의 네트워크나 응용 서비스를 연결하는 통역자 역할을 합니다.</li>
                <li>여러 계층의 변환을 집중 처리하므로 성능 병목이나 단일 장애 지점이 될 수 있어 용량·이중화 설계가 필요합니다.</li>
              </ul>
              <div class="important-box"><span class="box-title">용어 주의</span><p>호스트의 <strong>기본 게이트웨이(Default Gateway)</strong>는 일반적으로 외부 네트워크로 패킷을 보내는 라우터를 뜻합니다. 여기서의 일반적 Gateway는 서로 다른 환경을 변환·연결하는 더 넓은 개념입니다.</p></div>`
          },
          {
            id: "device-comparison", title: "네트워크 장비 종합 비교",
            content: `
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>장비</th><th>주 계층</th><th>확인 정보</th><th>핵심 역할</th><th>브로드캐스트 도메인 분리</th></tr></thead><tbody>
                <tr><td><strong>Repeater</strong></td><td>물리</td><td>전기·광 신호</td><td>신호 재생과 거리 연장</td><td>불가</td></tr>
                <tr><td><strong>Hub</strong></td><td>물리</td><td>비트 신호</td><td>다중 포트로 신호 반복</td><td>불가</td></tr>
                <tr><td><strong>Bridge</strong></td><td>데이터링크</td><td>MAC</td><td>두 세그먼트의 프레임 전달·필터링</td><td>불가</td></tr>
                <tr><td><strong>L2 Switch</strong></td><td>데이터링크</td><td>MAC</td><td>포트별 고속 프레임 스위칭·VLAN</td><td>VLAN별 분리</td></tr>
                <tr><td><strong>Router</strong></td><td>네트워크</td><td>IP</td><td>서로 다른 네트워크 연결과 경로 선택</td><td>가능</td></tr>
                <tr><td><strong>Gateway</strong></td><td>전 계층 가능</td><td>프로토콜·응용 데이터</td><td>서로 다른 환경의 변환·연결</td><td>구현에 따라 다름</td></tr>
              </tbody></table></div>
              <div class="important-box"><span class="box-title">시험 핵심</span><p><strong>신호 재생은 Repeater·Hub, MAC 기반 전달은 Bridge·L2 Switch, IP 기반 경로 선택은 Router, 서로 다른 프로토콜 변환은 Gateway</strong>입니다.</p></div>`
          },
          {
            id: "vlan-overview", title: "VLAN 개요",
            content: `
              <p><strong>VLAN(Virtual Local Area Network)</strong>은 물리적 배선이나 위치가 아니라 스위치의 소프트웨어 설정으로 하나의 LAN을 여러 <strong>논리적 LAN</strong>으로 분리하는 기술입니다.</p>
              <ul>
                <li>각 VLAN은 독립된 논리적 작업그룹이자 <strong>브로드캐스트 도메인</strong>을 형성합니다.</li>
                <li>서로 다른 스위치·장소에 연결된 장치도 같은 VLAN에 속하면 같은 논리적 LAN으로 구성할 수 있습니다.</li>
                <li>같은 스위치에 연결되어도 VLAN이 다르면 직접 통신할 수 없으며, 통신하려면 라우터나 L3 스위치의 <strong>Inter-VLAN Routing</strong>이 필요합니다.</li>
                <li>사용자의 부서·업무가 바뀌어도 케이블을 옮기지 않고 VLAN 설정을 변경해 논리적 그룹을 이동할 수 있습니다.</li>
              </ul>`
          },
          {
            id: "vlan-features-security", title: "VLAN 특징과 보안",
            content: `
              <ul>
                <li><strong>브로드캐스트 제어</strong>: VLAN별로 브로드캐스트 범위를 제한해 불필요한 트래픽을 줄입니다.</li>
                <li><strong>논리적 분리</strong>: 물리적 위치와 관계없이 부서·업무·보안 등급별 네트워크를 구성합니다.</li>
                <li><strong>정책 적용</strong>: 관리자는 VLAN별로 서로 다른 ACL, 방화벽, 접근통제와 보안 정책을 적용할 수 있습니다.</li>
                <li><strong>접근 제한</strong>: 다른 VLAN의 트래픽은 L3 장비를 거쳐야 하므로 그룹 간 통신을 정책으로 통제할 수 있습니다.</li>
              </ul>
              <p>예를 들어 급여 담당자를 별도 VLAN으로 분리하고 다른 부서에서 해당 VLAN으로 접근하는 트래픽을 차단할 수 있습니다.</p>
              <div class="important-box"><span class="box-title">보안 주의</span><p>VLAN은 네트워크를 논리적으로 분리하지만 그것만으로 완전한 보안 경계가 되지는 않습니다. <strong>Inter-VLAN ACL·방화벽 정책, 관리 포트 보호, VLAN 설정 점검</strong>을 함께 적용해야 합니다.</p></div>`
          },
          {
            id: "vlan-types", title: "VLAN 종류",
            content: `
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>종류</th><th>할당 기준</th><th>특징</th></tr></thead><tbody>
                <tr><td><strong>Port 기반 VLAN</strong></td><td>스위치 포트 번호</td><td>특정 포트를 VLAN에 고정 할당. 가장 단순하지만 다른 포트로 이동하면 다시 설정해야 함</td></tr>
                <tr><td><strong>MAC 기반 VLAN</strong></td><td>호스트의 MAC 주소</td><td>어느 포트에 연결해도 등록된 MAC에 따라 같은 VLAN에 속함. 각 장치의 MAC 등록·관리가 필요</td></tr>
                <tr><td><strong>Network Address 기반 VLAN</strong></td><td>IP 네트워크 주소 등</td><td>같은 네트워크 주소 조건을 가진 호스트를 하나의 VLAN으로 구성</td></tr>
                <tr><td><strong>Protocol 기반 VLAN</strong></td><td>TCP/IP, IPX/SPX 등 네트워크 프로토콜</td><td>프레임이 사용하는 프로토콜 종류에 따라 VLAN 분류</td></tr>
                <tr><td><strong>Multicast IP 기반 VLAN</strong></td><td>멀티캐스트 그룹 주소</td><td>특정 멀티캐스트 그룹에 참여하는 장치를 논리적 그룹으로 구성</td></tr>
                <tr><td><strong>조합형 VLAN</strong></td><td>포트·MAC·주소·프로토콜 등의 복수 조건</td><td>제품이 제공하는 여러 분류 기준을 목적에 맞게 조합</td></tr>
              </tbody></table></div>
              <div class="important-box"><span class="box-title">기억</span><p><strong>Port 기반은 연결 위치, MAC 기반은 장치, Network Address 기반은 논리 주소, Protocol 기반은 사용하는 프로토콜</strong>로 VLAN을 구분합니다.</p></div>`
          },
          {
            id: "vlan-benefits", title: "VLAN 장점",
            content: `
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>장점</th><th>내용</th></tr></thead><tbody>
                <tr><td><strong>비용·시간 절약</strong></td><td>사용자 이동·부서 변경 시 물리적 재배선보다 소프트웨어 설정으로 빠르게 논리적 그룹 변경</td></tr>
                <tr><td><strong>가상 작업그룹</strong></td><td>서로 다른 장소의 프로젝트 구성원을 같은 논리적 LAN과 브로드캐스트 그룹으로 구성</td></tr>
                <tr><td><strong>성능 향상</strong></td><td>브로드캐스트 도메인을 작게 나누어 불필요한 트래픽의 범위를 제한</td></tr>
                <tr><td><strong>관리 편의</strong></td><td>물리적 위치보다 조직·업무 기준으로 네트워크 구성과 정책을 일관되게 관리</td></tr>
                <tr><td><strong>보안 강화</strong></td><td>다른 VLAN과의 통신을 기본 분리하고 L3 정책을 통해 필요한 접근만 허용</td></tr>
              </tbody></table></div>
              <div class="important-box"><span class="box-title">SECTION 22 핵심 흐름</span><p><strong>물리 계층의 Repeater·Hub → MAC 기반 Bridge·L2 Switch → IP 기반 Router·L3 Switch → Port·Contents 기반 L4·L7 Switch → 프로토콜 변환 Gateway → 논리적 네트워크 분리 VLAN</strong></p></div>`
          }
        ],
        content: ""
      },
      {
        id: "section-23", number: 23, title: "무선통신 보안",
        subtopics: [
          {
            id: "wireless-network-types", title: "무선 네트워크 유형",
            content: `
              <p>무선 네트워크는 전파 도달 범위와 구성 목적에 따라 <strong>WPAN·WLAN·WMAN</strong>으로 구분합니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>구조·범위</th><th>대표 사용</th></tr></thead><tbody>
                <tr><td><strong>WPAN</strong></td><td>개인 주변의 단거리 Ad Hoc·Peer-to-Peer 네트워크</td><td>휴대폰·노트북·주변기기의 Bluetooth 연결</td></tr>
                <tr><td><strong>WLAN</strong></td><td>가정·건물·캠퍼스 범위의 무선 LAN</td><td>AP를 중심으로 구성하는 Wi-Fi</td></tr>
                <tr><td><strong>WMAN</strong></td><td>도시권처럼 넓은 지역을 연결하는 무선 MAN</td><td>지역 단위 광대역 무선 접속</td></tr>
              </tbody></table></div>
              <p>무선망은 이동성과 설치 편의성이 높지만 전파가 물리적 경계 밖까지 퍼져 도청·불법 접속·전파 방해에 노출되기 쉽습니다.</p>`
          },
          {
            id: "wireless-threats-characteristics", title: "무선 위협요소와 전파 특성",
            content: `
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>위협요소</th><th>보안상 의미</th></tr></thead><tbody>
                <tr><td><strong>Channel</strong></td><td>브로드캐스트 전파를 사용하므로 도청·재밍에 취약</td></tr>
                <tr><td><strong>Mobility</strong></td><td>이동·분실·도난과 비인가 위치에서의 접속 위험 증가</td></tr>
                <tr><td><strong>Resource</strong></td><td>단말의 CPU·메모리·전력 제약으로 보안기능 적용이 제한될 수 있음</td></tr>
                <tr><td><strong>Accessibility</strong></td><td>건물 밖에서도 전파에 접근할 수 있어 공격면이 넓음</td></tr>
              </tbody></table></div>
              <p>전파는 거리에 따라 약해지는 <strong>감쇠</strong>, 다른 신호와 겹치는 <strong>간섭</strong>, 반사·굴절로 여러 경로를 거치는 <strong>다중경로 전달</strong>, 높은 오류율의 영향을 받습니다.</p>
              <div class="important-box"><span class="box-title">장단점</span><p><strong>장점은 이동성·간편한 설치·확장성</strong>, <strong>단점은 전파 간섭·보안 취약성·낮은 안정성</strong>입니다.</p></div>`
          },
          {
            id: "csma-ca-hidden-node", title: "CSMA/CA와 숨겨진 노드",
            content: `
              <p>무선 LAN은 송신 중 충돌을 직접 검출하기 어려워 유선 Ethernet의 CSMA/CD 대신 <strong>CSMA/CA(Carrier Sense Multiple Access with Collision Avoidance)</strong>를 사용합니다.</p>
              <ul>
                <li>채널 사용 여부를 확인하고 임의의 Backoff 시간 뒤 전송하며 ACK로 수신을 확인합니다.</li>
                <li>필요하면 RTS/CTS로 전송 구간을 예약해 충돌 가능성을 낮춥니다.</li>
                <li><strong>Hidden Node</strong>: A와 C가 서로의 전파를 듣지 못하지만 둘 다 B와 통신할 때 동시에 B로 전송하여 충돌하는 문제입니다.</li>
              </ul>
              <div class="important-box"><span class="box-title">구분</span><p><strong>유선은 충돌 검출(CD)</strong>, <strong>무선은 충돌 회피(CA)</strong>가 핵심입니다.</p></div>`
          },
          {
            id: "ieee-80211-standards", title: "IEEE 802.11 주요 표준",
            content: `
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>표준</th><th>주파수·속도</th><th>핵심</th></tr></thead><tbody>
                <tr><td><strong>802.11</strong></td><td>2.4GHz / 초기 2Mbps</td><td>최초 무선 LAN 표준</td></tr>
                <tr><td><strong>802.11b</strong></td><td>2.4GHz / 11Mbps</td><td>보급이 넓었으나 간섭과 낮은 속도에 취약</td></tr>
                <tr><td><strong>802.11a</strong></td><td>5GHz / 54Mbps</td><td>간섭은 적지만 2.4GHz 규격과 주파수 호환 불가</td></tr>
                <tr><td><strong>802.11g</strong></td><td>2.4GHz / 54Mbps</td><td>802.11b와 호환되며 속도 향상</td></tr>
                <tr><td><strong>802.11i</strong></td><td>보안 표준</td><td>802.1X/EAP·TKIP·CCMP/AES, WPA2의 기반</td></tr>
                <tr><td><strong>802.11n</strong></td><td>2.4·5GHz / 최대 600Mbps</td><td>MIMO와 채널 결합으로 속도·범위 향상</td></tr>
              </tbody></table></div>`
          },
          {
            id: "wireless-ap-bridge", title: "무선 AP와 무선 브리지",
            content: `
              <p><strong>AP(Access Point)</strong>는 무선 단말을 유선 LAN에 연결하고 인증·암호화·SSID·채널 등의 설정을 제공합니다.</p>
              <ul>
                <li><strong>기업용 AP</strong>는 중앙관리·로밍·보안정책·다수 사용자 처리를 지원합니다.</li>
                <li><strong>소규모 AP</strong>는 라우팅·NAT·DHCP·VPN 기능을 함께 제공하기도 합니다.</li>
                <li><strong>무선 브리지</strong>는 떨어진 두 개 이상의 유선 LAN 구간을 무선 링크로 연결합니다.</li>
              </ul>
              <p>AP는 물리적 보호, 관리자 암호 변경, 최신 펌웨어, 불필요한 관리 서비스 차단과 전파 도달 범위 관리가 필요합니다.</p>`
          },
          {
            id: "bluetooth-structure-attacks", title: "Bluetooth 구조와 공격",
            content: `
              <p><strong>Bluetooth</strong>는 가까운 거리의 휴대폰·노트북·주변기기를 연결하는 저전력 WPAN 기술입니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>항목</th><th>내용</th></tr></thead><tbody>
                <tr><td><strong>Piconet</strong></td><td>하나의 Primary와 여러 Secondary로 구성되는 소규모 Bluetooth 망</td></tr>
                <tr><td><strong>Scatternet</strong></td><td>한 장치가 둘 이상의 Piconet에 참여해 여러 Piconet을 연결</td></tr>
                <tr><td><strong>Blueprinting</strong></td><td>주변 Bluetooth 장치와 서비스 정보를 탐색·식별</td></tr>
                <tr><td><strong>Bluesnarfing</strong></td><td>취약한 장치의 연락처·파일 등에 무단 접근</td></tr>
                <tr><td><strong>Bluebugging</strong></td><td>장치 제어 권한을 악용해 임의 명령·동작 수행</td></tr>
                <tr><td><strong>Bluejacking</strong></td><td>원치 않는 메시지·명함 등을 전송</td></tr>
              </tbody></table></div>`
          },
          {
            id: "wireless-vulnerability-overview", title: "무선 LAN 취약점 분석",
            content: `
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>분류</th><th>대표 위협</th><th>대응</th></tr></thead><tbody>
                <tr><td><strong>물리적</strong></td><td>AP 도난·파손, Reset, 전원·유선 LAN 차단</td><td>잠금·보호함·UPS·배선 보호·설정 백업</td></tr>
                <tr><td><strong>기술적</strong></td><td>도청, 재밍·DoS, Rogue AP, 약한 WEP·PSK</td><td>WPA2 이상·802.1X·WIDS/WIPS·강한 키</td></tr>
                <tr><td><strong>관리적</strong></td><td>장비 현황 미파악, 사용자 인식 부족, 과도한 전파 범위</td><td>자산대장·정기 점검·교육·출력 조정</td></tr>
              </tbody></table></div>
              <p><strong>Rogue AP</strong>는 승인 없이 설치된 AP이며, 공격자가 정상 AP처럼 위장해 인증정보와 트래픽을 수집하는 <strong>Evil Twin</strong>으로도 악용될 수 있습니다.</p>`
          },
          {
            id: "unauthorized-managerial", title: "비인가 접근과 관리 취약점",
            content: `
              <ul>
                <li><strong>SSID 노출</strong>: Beacon·Probe 과정에서 관찰할 수 있어 SSID 숨김만으로 보호할 수 없습니다.</li>
                <li><strong>MAC 주소 노출</strong>: 프레임에서 정상 단말 주소를 수집해 Spoofing할 수 있습니다.</li>
                <li><strong>장비 관리 미흡</strong>: AP·무선카드의 수량·위치·설정·펌웨어를 모르면 불법 장비 탐지가 어렵습니다.</li>
                <li><strong>전파 관리 미흡</strong>: 전파가 건물 밖까지 도달하면 물리적 진입 없이 접근할 수 있습니다.</li>
              </ul>
              <div class="important-box"><span class="box-title">핵심</span><p><strong>SSID 숨김과 MAC 필터링은 보조 통제</strong>이며 실제 인증·기밀성은 802.1X/EAP와 강한 암호화로 확보합니다.</p></div>`
          },
          {
            id: "ssid-mac-auth", title: "SSID·MAC 주소 인증",
            content: `
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>방식</th><th>동작</th><th>한계</th></tr></thead><tbody>
                <tr><td><strong>Open SSID</strong></td><td>AP가 Beacon으로 SSID를 알리고 단말이 선택</td><td>SSID는 비밀정보가 아니며 쉽게 수집됨</td></tr>
                <tr><td><strong>Closed SSID</strong></td><td>Beacon 공개를 줄이고 알고 있는 단말이 직접 입력</td><td>Probe·연결 프레임 분석으로 확인 가능</td></tr>
                <tr><td><strong>MAC Filtering</strong></td><td>등록한 무선카드의 MAC 주소만 허용</td><td>주소 위조 가능, 대규모 목록 관리 부담</td></tr>
              </tbody></table></div>`
          },
          {
            id: "wep-authentication", title: "WEP 인증과 취약점",
            content: `
              <p>WEP Shared Key 인증은 AP가 보낸 Challenge를 단말이 <strong>RC4와 공유키·IV</strong>로 암호화해 돌려주고, AP가 복호화하여 일치 여부를 확인합니다.</p>
              <ol><li>인증 요청</li><li>AP의 평문 Challenge 전송</li><li>단말의 암호화 Challenge 반환</li><li>AP의 복호화와 성공·실패 통보</li></ol>
              <p>평문과 암호문 쌍이 함께 노출되고 AP가 단말만 일방적으로 인증하므로 키스트림 추정과 가짜 AP 공격에 취약합니다.</p>
              <div class="important-box"><span class="box-title">Static·Dynamic WEP</span><p><strong>Static WEP</strong>는 고정 공유키를 사용합니다. <strong>Dynamic WEP</strong>는 802.1X로 키를 갱신하지만 RC4·짧은 IV 등 WEP의 구조적 약점은 남습니다.</p></div>`
          },
          {
            id: "eap-8021x", title: "EAP와 IEEE 802.1X",
            content: `
              <p><strong>EAP</strong>는 여러 인증 방법을 수용하는 확장형 인증 프레임워크이며, <strong>IEEE 802.1X</strong>는 인증 전 일반 네트워크 접근을 차단하는 포트 기반 접근통제 표준입니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>구성요소</th><th>역할</th></tr></thead><tbody>
                <tr><td><strong>Supplicant</strong></td><td>접속·인증을 요청하는 무선 단말</td></tr>
                <tr><td><strong>Authenticator</strong></td><td>AP·스위치. 포트를 통제하고 EAP를 중계</td></tr>
                <tr><td><strong>Authentication Server</strong></td><td>RADIUS 등 중앙 서버. 자격증명을 검증</td></tr>
              </tbody></table></div>
              <p>단말↔AP는 <strong>EAPOL</strong>, AP↔RADIUS는 <strong>EAP over RADIUS</strong>를 사용하며 EAP-TLS·EAP-TTLS·PEAP 등을 선택할 수 있습니다.</p>`
          },
          {
            id: "wep-encryption", title: "WEP 암호화와 구조적 약점",
            content: `
              <p>WEP는 공유키와 24비트 IV를 RC4에 넣어 키스트림을 만들고 평문·ICV와 XOR합니다. 수신자는 같은 키스트림으로 복호화하고 CRC-32 기반 ICV를 확인합니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>약점</th><th>설명</th></tr></thead><tbody>
                <tr><td><strong>24비트 IV</strong></td><td>반복 가능성이 높아 같은 키스트림 재사용 분석에 취약</td></tr>
                <tr><td><strong>공유 고정키</strong></td><td>한 번 유출되면 전체 무선망이 위험</td></tr>
                <tr><td><strong>RC4 약점</strong></td><td>다량의 패킷을 수집하면 통계적으로 키 추정 가능</td></tr>
                <tr><td><strong>CRC-32 ICV</strong></td><td>암호학적 MAC이 아니어서 위·변조 방지 능력이 약함</td></tr>
              </tbody></table></div>
              <div class="important-box"><span class="box-title">현재 기준</span><p>WEP는 사용하지 않고 <strong>WPA2-CCMP 이상</strong>을 적용합니다.</p></div>`
          },
          {
            id: "tkip-security", title: "TKIP 보안기술",
            content: `
              <p><strong>TKIP(Temporal Key Integrity Protocol)</strong>는 기존 WEP 장비를 개선하기 위해 WPA에 도입된 과도기적 기술입니다.</p>
              <ul>
                <li>RC4를 유지하면서 Key Mixing과 패킷별 Temporal Key를 적용합니다.</li>
                <li>IV를 48비트로 확장하고 Sequence Counter로 Replay를 줄입니다.</li>
                <li>CRC-32보다 강한 <strong>Michael MIC</strong>로 메시지 무결성을 확인합니다.</li>
              </ul>
              <p>RC4와 WEP 구조를 이어받아 근본적 한계가 있으므로 현재는 AES 기반 CCMP를 사용합니다.</p>`
          },
          {
            id: "ccmp-security", title: "CCMP 보안기술",
            content: `
              <p><strong>CCMP(Counter Mode with CBC-MAC Protocol)</strong>는 IEEE 802.11i와 WPA2의 핵심 암호화 방식입니다.</p>
              <ul>
                <li><strong>AES-128 Counter Mode</strong>로 기밀성을 제공합니다.</li>
                <li><strong>CBC-MAC</strong>으로 무결성과 송신자 인증을 제공합니다.</li>
                <li>48비트 <strong>PN(Packet Number)</strong>으로 Replay를 탐지합니다.</li>
              </ul>
              <div class="important-box"><span class="box-title">비교</span><p><strong>TKIP = RC4 + Michael MIC</strong>, <strong>CCMP = AES Counter Mode + CBC-MAC</strong>입니다.</p></div>`
          },
          {
            id: "wpa-wpa2", title: "WEP·WPA·WPA2 비교",
            content: `
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>WEP</th><th>WPA</th><th>WPA2</th></tr></thead><tbody>
                <tr><td><strong>암호화</strong></td><td>RC4</td><td>TKIP/RC4</td><td>CCMP/AES</td></tr>
                <tr><td><strong>무결성</strong></td><td>CRC-32 ICV</td><td>Michael MIC</td><td>CBC-MAC</td></tr>
                <tr><td><strong>표준</strong></td><td>초기 802.11</td><td>WEP 보완 중간 규격</td><td>802.11i 기반 RSN</td></tr>
                <tr><td><strong>보안 수준</strong></td><td>취약</td><td>향상됐으나 TKIP 한계</td><td>WEP·WPA보다 강함</td></tr>
              </tbody></table></div>
              <div class="important-box"><span class="box-title">흐름</span><p><strong>WEP → WPA/TKIP → WPA2/CCMP</strong> 순으로 보안성이 강화됩니다.</p></div>`
          },
          {
            id: "personal-enterprise", title: "WPA-Personal·Enterprise",
            content: `
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>Personal</th><th>Enterprise</th></tr></thead><tbody>
                <tr><td><strong>인증</strong></td><td>PSK(Pre-Shared Key)</td><td>802.1X/EAP + RADIUS</td></tr>
                <tr><td><strong>환경</strong></td><td>가정·소규모 조직</td><td>기업·기관의 다수 사용자</td></tr>
                <tr><td><strong>키 관리</strong></td><td>하나의 무선 암호를 공유</td><td>사용자별 계정·인증서와 동적 키 관리</td></tr>
                <tr><td><strong>위험</strong></td><td>짧은 PSK의 사전·무차별 대입 공격</td><td>인증서 검증·계정·RADIUS 설정 오류</td></tr>
              </tbody></table></div>
              <p>PSK 방식은 4-Way Handshake를 사용합니다. 충분히 긴 무작위 암호를 사용하고 조직 환경에서는 사용자별 폐기·추적이 가능한 Enterprise 방식을 우선합니다.</p>`
          },
          {
            id: "radius-wardriving", title: "RADIUS 인증과 War Driving",
            content: `
              <p>802.1X 환경에서 AP는 EAP 메시지를 RADIUS 서버에 중계합니다. 서버가 자격증명을 검증해 성공 여부와 키 자료를 전달하면 AP가 일반 데이터 통신을 허용합니다.</p>
              <ol><li>단말의 접속·인증 요청</li><li>AP의 EAP 중계</li><li>RADIUS와 단말의 EAP 인증</li><li>세션키 생성·배포와 포트 허용</li></ol>
              <p><strong>War Driving</strong>은 이동하면서 주변 AP의 위치·SSID·채널·보안설정을 탐색하는 행위입니다. 미승인 AP 탐지와 전파 범위·설정 점검이 필요합니다.</p>`
          },
          {
            id: "wap-overview", title: "WAP·WML·WAE",
            content: `
              <p><strong>WAP(Wireless Application Protocol)</strong>은 제한된 모바일 단말에서 웹·무선 데이터 서비스를 제공하기 위한 통합 규격입니다.</p>
              <ul>
                <li><strong>WAP Gateway</strong>: 무선 단말과 유선 웹 서버 사이에서 프로토콜·콘텐츠를 변환합니다.</li>
                <li><strong>WML</strong>: 작은 화면·제한된 입력 환경에 맞춘 무선 마크업 언어입니다.</li>
                <li><strong>WAE</strong>: 모바일 응용을 실행하기 위한 프레임워크와 도구의 집합입니다.</li>
              </ul>
              <p>기본 모델은 Client·Gateway·Origin Server로 구성됩니다.</p>`
          },
          {
            id: "wap-stack-wtls", title: "WAP 스택과 WTLS",
            content: `
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>계층</th><th>기능</th></tr></thead><tbody>
                <tr><td><strong>WAE</strong></td><td>무선 응용 실행 환경</td></tr>
                <tr><td><strong>WSP</strong></td><td>연결형·비연결형 무선 세션 서비스</td></tr>
                <tr><td><strong>WTP</strong></td><td>경량 요청·응답 트랜잭션 관리</td></tr>
                <tr><td><strong>WTLS</strong></td><td>TLS를 무선에 맞춘 기밀성·무결성·인증·DoS 보호</td></tr>
                <tr><td><strong>WDP</strong></td><td>여러 Bearer 위에 공통 데이터그램 서비스 제공</td></tr>
              </tbody></table></div>
              <p>초기 WAP은 단말↔Gateway의 WTLS와 Gateway↔Server의 TLS가 Gateway에서 끊겨 평문 처리 구간이 생기는 <strong>WAP Gap</strong> 문제가 있었습니다. WAP2는 표준 인터넷 프로토콜을 활용해 종단 간 TLS 적용을 강화했습니다.</p>`
          },
          {
            id: "device-authentication", title: "디바이스 인증 기술",
            content: `
              <p>기기인증은 접속 장치의 신원을 확인해 신뢰된 장치에만 서비스와 자원을 허용하는 기술입니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>방식</th><th>장점</th><th>단점</th></tr></thead><tbody>
                <tr><td><strong>ID·Password</strong></td><td>구현이 간단</td><td>추측·공유·재사용·피싱에 취약</td></tr>
                <tr><td><strong>MAC 주소</strong></td><td>장치 등록이 간단</td><td>수집·위조 가능, 관리 부담</td></tr>
                <tr><td><strong>암호 프로토콜</strong></td><td>서명·키 교환으로 강한 인증</td><td>키·인증서 관리와 연산 필요</td></tr>
                <tr><td><strong>Challenge-Response</strong></td><td>난수로 Replay 억제</td><td>공유 비밀·알고리즘의 안전성 필요</td></tr>
                <tr><td><strong>PKI·인증서</strong></td><td>기기별 폐기·추적·상호인증</td><td>CA·CRL/OCSP 운영이 복잡</td></tr>
              </tbody></table></div>`
          },
          {
            id: "rfid-threats", title: "RFID 개요와 공격",
            content: `
              <p><strong>RFID</strong>는 무선 주파수로 태그의 ID와 정보를 읽어 대상을 식별하며 태그는 Passive·Active 방식 등으로 나뉩니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>공격</th><th>내용</th></tr></thead><tbody>
                <tr><td><strong>도청</strong></td><td>리더와 태그 사이의 통신 수집</td></tr>
                <tr><td><strong>Traffic Analysis</strong></td><td>통신 시점·빈도로 이동·행동 추정</td></tr>
                <tr><td><strong>위조·Spoofing</strong></td><td>태그 데이터·응답을 복제해 정상 태그처럼 가장</td></tr>
                <tr><td><strong>DoS</strong></td><td>다량 질의·전파 방해로 정상 통신 차단</td></tr>
              </tbody></table></div>
              <p>태그의 계산·메모리·전력이 작아 복잡한 암호를 적용하기 어렵다는 점이 핵심 제약입니다.</p>`
          },
          {
            id: "rfid-defense", title: "RFID 보안기술",
            content: `
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>기술</th><th>동작·목적</th></tr></thead><tbody>
                <tr><td><strong>Kill Command</strong></td><td>유통 후 태그를 영구 비활성화해 추적 방지</td></tr>
                <tr><td><strong>Sleep·Wake</strong></td><td>잠시 정지한 뒤 인증 명령으로 재활성화</td></tr>
                <tr><td><strong>Blocker Tag</strong></td><td>다수 ID처럼 응답해 비인가 스캔 방해</td></tr>
                <tr><td><strong>Faraday Cage</strong></td><td>금속 차폐로 전파 송수신 차단</td></tr>
                <tr><td><strong>Jamming</strong></td><td>방해 신호로 접근 제한. 정상 통신도 방해 가능</td></tr>
                <tr><td><strong>Hash Lock</strong></td><td>해시 기반 잠금으로 인증된 리더에만 ID 제공</td></tr>
                <tr><td><strong>XOR·일회성 값</strong></td><td>저비용 연산으로 매 응답을 달리해 단순 복제 억제</td></tr>
              </tbody></table></div>`
          },
          {
            id: "ios-security", title: "iOS 보안과 취약점",
            content: `
              <p>iOS는 Darwin UNIX 기반의 폐쇄적 생태계와 통제된 배포 정책을 사용합니다.</p>
              <ul>
                <li><strong>Data Protection</strong>: 하드웨어 키와 암호화로 저장 데이터 보호</li>
                <li><strong>Code Signing</strong>: 신뢰된 서명의 코드만 설치·실행</li>
                <li><strong>Sandbox</strong>: 앱을 격리해 다른 앱·시스템 자원 접근 제한</li>
                <li><strong>중앙 배포·검증</strong>: 앱 심사와 업데이트로 악성 앱 유입 감소</li>
              </ul>
              <p><strong>Jailbreak</strong>는 권한 통제를 우회해 루트 접근을 얻는 행위로 무결성·샌드박스 보호를 약화합니다.</p>`
          },
          {
            id: "android-security", title: "Android 구조와 취약점",
            content: `
              <p>Android는 Linux Kernel 위에 Libraries·Android Runtime, Application Framework, Applications 계층을 둡니다.</p>
              <ul>
                <li><strong>권한 관리</strong>: 앱이 필요한 데이터·기능 권한을 선언하고 동의를 받습니다.</li>
                <li><strong>Application Signing</strong>: 제작자와 업데이트 연속성을 확인합니다.</li>
                <li><strong>Sandbox</strong>: 앱마다 별도 UID·프로세스로 격리합니다.</li>
                <li><strong>AndroidManifest.xml</strong>: 컴포넌트·권한·실행 조건·외부 노출 여부를 선언합니다.</li>
              </ul>
              <p>비공식 마켓·Sideloading, 과도한 권한, 업데이트 지연과 <strong>Rooting</strong>은 위험을 높입니다.</p>`
          },
          {
            id: "byod-security", title: "BYOD 보안과 관리기술",
            content: `
              <p><strong>BYOD</strong>는 개인 소유 단말을 업무에 사용하는 방식으로 생산성을 높이지만 개인·업무 데이터 혼재, 분실, 악성 앱과 미관리 단말 접속 위험을 만듭니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>기술</th><th>역할</th></tr></thead><tbody>
                <tr><td><strong>MDM</strong></td><td>단말 등록·정책·암호·업데이트·원격 잠금/삭제 등 기기 전체 관리</td></tr>
                <tr><td><strong>Containerization</strong></td><td>업무 앱·데이터를 개인 영역과 논리적으로 분리</td></tr>
                <tr><td><strong>Mobile Hypervisor</strong></td><td>개인·업무용 운영체제 환경을 분리 실행</td></tr>
                <tr><td><strong>MAM</strong></td><td>업무 애플리케이션과 데이터의 배포·정책 관리</td></tr>
                <tr><td><strong>NAC</strong></td><td>사용자·기기·보안상태를 검사해 접속 허용·격리·차단</td></tr>
              </tbody></table></div>
              <div class="important-box"><span class="box-title">SECTION 23 핵심 흐름</span><p><strong>무선 특성 → CSMA/CA·802.11 → AP·Bluetooth → 무선 취약점 → WEP·TKIP·CCMP → WPA2·802.1X/EAP → WAP·기기인증 → RFID → iOS·Android → BYOD</strong></p></div>`
          }
        ],
        content: ""
      },
      {
        id: "section-24", number: 24, title: "네트워크 관리",
        subtopics: [
          {
            id: "network-management-overview", title: "네트워크 관리 개요",
            content: `
              <p><strong>네트워크 관리</strong>는 네트워크 자원을 적절하게 관리하여 사업자와 사용자가 안정적인 서비스를 이용할 수 있게 하는 활동입니다.</p>
              <ul>
                <li>장비와 전송설비에서 트래픽·운영·유지보수 정보를 수집하고 분석합니다.</li>
                <li>분석 결과를 바탕으로 네트워크를 제어하고 장애가 발생하면 적절히 대응·보고합니다.</li>
                <li>규모가 커지고 서로 다른 종류의 네트워크가 공존할수록 전체 망의 원활한 운용을 위한 통합 관리가 중요합니다.</li>
              </ul>
              <div class="important-box"><span class="box-title">필요성</span><p>서비스 제공자는 장애를 줄이고 가용성과 품질을 유지해야 하며, 이는 인터넷 서비스에 대한 <strong>신뢰도</strong>와 직결됩니다.</p></div>`
          },
          {
            id: "network-five-functions", title: "네트워크 5대 관리 기능",
            content: `
              <p>네트워크 관리 기능은 <strong>FCAPS</strong>의 다섯 영역으로 정리할 수 있습니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>기능</th><th>목적</th><th>대표 활동</th></tr></thead><tbody>
                <tr><td><strong>Fault<br>장애 관리</strong></td><td>비정상 동작의 발견·격리·복구</td><td>장애 탐지, 경보, 원인 분석, 복구</td></tr>
                <tr><td><strong>Configuration<br>구성 관리</strong></td><td>장비와 구성요소의 관계·상태 파악</td><td>설정·버전·토폴로지·변경 이력 관리</td></tr>
                <tr><td><strong>Accounting<br>계정 관리</strong></td><td>자원 사용량의 측정·통제</td><td>사용자 인증, 사용량 집계, 요금 부과</td></tr>
                <tr><td><strong>Performance<br>성능 관리</strong></td><td>네트워크 동작·효율 측정</td><td>처리량·이용률·응답시간 수집과 분석</td></tr>
                <tr><td><strong>Security<br>보안 관리</strong></td><td>관리 대상과 정보의 보호</td><td>접근통제, 암호화, 보안 로그, 감사</td></tr>
              </tbody></table></div>
              <div class="important-box"><span class="box-title">암기</span><p><strong>F-C-A-P-S = 장애-구성-계정-성능-보안</strong>입니다. 교재의 제시 순서가 달라도 다섯 기능은 같습니다.</p></div>`
          },
          {
            id: "accounting-configuration", title: "계정 관리와 구성 관리",
            content: `
              <h3>계정 관리(Accounting Management)</h3>
              <ul>
                <li>개별 시스템의 활동으로 소비되는 네트워크 자원의 모든 정보를 관리합니다.</li>
                <li><strong>인증</strong>: 네트워크 자원에 접근하려는 사용자가 정당한 사용자인지 확인하고 접근 권한을 관리합니다.</li>
                <li><strong>과금</strong>: 사용자가 네트워크 자원을 얼마나 사용했는지 측정하여 요금을 산정합니다.</li>
              </ul>
              <h3>구성 관리(Configuration Management)</h3>
              <p>네트워크 구성요소 사이의 관계와 현재 상태를 파악하고, 장비 설정·소프트웨어 버전·연결 구조·변경 이력을 관리하여 일관된 운용 정보를 제공합니다.</p>`
          },
          {
            id: "performance-fault-security", title: "성능·장애·보안 관리",
            content: `
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>핵심 내용</th></tr></thead><tbody>
                <tr><td><strong>성능 관리</strong></td><td>장기간 처리량·이용률·지연 등을 측정하고 수집·분석하여 시스템 성능과 효율을 평가합니다.</td></tr>
                <tr><td><strong>장애 관리</strong></td><td>정상적으로 동작하지 않는 장비·회선·구성요소를 찾아 격리하고 원인을 분석하여 복구합니다.</td></tr>
                <tr><td><strong>보안 관리</strong></td><td>관리 대상에 접근할 수 있는 주체와 권한을 통제하고 관리 행위를 기록하며, 관리 통신과 데이터를 보호합니다.</td></tr>
              </tbody></table></div>
              <p>보안 관리에는 관리자 비밀번호·최소권한·접속 제한·보안 로그·암호화·회선 보호가 포함되며, 임시파일·백업·폐기 매체에서의 정보 유출도 통제해야 합니다.</p>`
          },
          {
            id: "snmp-overview", title: "SNMP 개념과 특징",
            content: `
              <p><strong>SNMP(Simple Network Management Protocol)</strong>는 Manager가 Agent를 통해 라우터·스위치·서버 등 네트워크 장비의 상태 정보를 조회하고 설정을 관리하는 응용 계층 프로토콜입니다.</p>
              <ul>
                <li>서로 다른 제조사의 장비라도 표준화된 관리 객체와 메시지로 감시할 수 있습니다.</li>
                <li>단순한 요청·응답 구조를 사용하여 LAN뿐 아니라 WAN으로 구성된 네트워크에도 적용할 수 있습니다.</li>
                <li>IP 위에서 주로 <strong>UDP</strong>를 사용하므로 구현 부담이 작지만 전송 신뢰성과 보안은 별도로 고려해야 합니다.</li>
              </ul>`
          },
          {
            id: "snmp-manager-agent", title: "SNMP Manager와 Agent",
            content: `
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>구성요소</th><th>역할</th></tr></thead><tbody>
                <tr><td><strong>Manager</strong></td><td>관리 대상 장비의 정보를 요청·수집하고, 설정 변경 명령을 보내며 경보를 수신하는 관리 시스템</td></tr>
                <tr><td><strong>Agent</strong></td><td>라우터·스위치·서버 등 관리 장비에서 동작하며 MIB의 상태 정보를 읽고 Manager 요청에 응답하는 프로그램</td></tr>
              </tbody></table></div>
              <p>Manager는 <strong>Polling</strong>으로 정보를 주기적으로 요청합니다. Agent는 요청에 응답하고, 장애나 임계치 초과 같은 이벤트가 발생하면 <strong>Trap</strong>을 이용해 비동기적으로 알립니다.</p>
              <div class="important-box"><span class="box-title">통신 방향</span><p><strong>요청·설정: Manager → Agent</strong> / <strong>응답·Trap: Agent → Manager</strong></p></div>`
          },
          {
            id: "snmp-components", title: "SNMP·SMI·MIB 구성",
            content: `
              <p>SNMP 기반 네트워크 관리는 서로 역할이 다른 <strong>SNMP·SMI·MIB</strong>로 구성됩니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>요소</th><th>역할</th></tr></thead><tbody>
                <tr><td><strong>SNMP</strong></td><td>Manager와 Agent가 교환할 메시지 형식과 관리 연산을 정의</td></tr>
                <tr><td><strong>SMI</strong></td><td>관리 객체의 이름, 자료형, 표현·인코딩 방법을 정하는 공통 규칙</td></tr>
                <tr><td><strong>MIB</strong></td><td>실제로 관리할 객체의 이름·OID·자료형·접근 속성·관계를 정의한 관리정보 집합</td></tr>
              </tbody></table></div>
              <div class="important-box"><span class="box-title">프로그래밍과 비교</span><p><strong>SMI = 언어 문법</strong>, <strong>MIB = 변수의 선언·정의</strong>, <strong>SNMP = 실제 명령을 수행하는 프로그램</strong>으로 생각하면 구분하기 쉽습니다.</p></div>`
          },
          {
            id: "smi-mib-details", title: "SMI와 MIB의 역할",
            content: `
              <h3>SMI(Structure of Management Information)</h3>
              <ul>
                <li>객체의 이름과 OID 체계, 객체 유형, 자료형, 값의 표현·부호화 규칙을 정의합니다.</li>
                <li>특정 장비가 어떤 객체를 몇 개 구현하는지 같은 실제 관리 항목 자체는 정하지 않습니다.</li>
              </ul>
              <h3>MIB(Management Information Base)</h3>
              <ul>
                <li>관리할 각 객체를 계층적인 OID로 식별하고 SMI 규칙에 맞춰 정의합니다.</li>
                <li>인터페이스 상태·트래픽 카운터·장비 정보처럼 Manager가 읽거나 설정할 변수를 제공합니다.</li>
              </ul>`
          },
          {
            id: "snmp-pdu-operations", title: "SNMP PDU와 주요 연산",
            content: `
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>분류</th><th>PDU</th><th>기능</th></tr></thead><tbody>
                <tr><td><strong>Read</strong></td><td>GetRequest</td><td>지정한 관리 객체의 값을 읽음</td></tr>
                <tr><td><strong>Read</strong></td><td>GetNextRequest</td><td>OID 순서상 다음 객체의 값을 읽어 MIB를 순회</td></tr>
                <tr><td><strong>Read</strong></td><td>GetBulkRequest</td><td>여러 객체를 한 번에 효율적으로 조회하며 SNMPv2부터 사용</td></tr>
                <tr><td><strong>Write</strong></td><td>SetRequest</td><td>Agent의 쓰기 가능한 관리 객체 값을 변경</td></tr>
                <tr><td><strong>Response</strong></td><td>Response</td><td>요청 결과와 오류 정보를 Manager에 반환</td></tr>
                <tr><td><strong>Notification</strong></td><td>Trap</td><td>Agent가 이벤트를 비동기 통보하며 별도 확인 응답이 없음</td></tr>
                <tr><td><strong>Notification</strong></td><td>InformRequest</td><td>다른 Manager에 확인 가능한 알림을 전송</td></tr>
                <tr><td><strong>관리</strong></td><td>Report</td><td>SNMPv3 처리·보안 관련 상태와 오류를 보고</td></tr>
              </tbody></table></div>
              <p>SNMPv1은 GetRequest·GetNextRequest·SetRequest·GetResponse·Trap을 중심으로 사용하며, SNMPv2/3에서는 GetBulk·Inform·Report 등이 추가됩니다.</p>`
          },
          {
            id: "snmp-message-ports", title: "SNMP 메시지 형식과 포트",
            content: `
              <p>SNMP 메시지는 일반적으로 <strong>IP 헤더 → UDP 헤더 → SNMP 버전 → 보안·인증 정보 → SNMP PDU</strong>의 형태로 전달됩니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>용도</th><th>전송</th><th>포트</th></tr></thead><tbody>
                <tr><td><strong>조회·설정 요청과 응답</strong></td><td>Manager ↔ Agent</td><td>Agent의 UDP <strong>161</strong></td></tr>
                <tr><td><strong>Trap·Inform 수신</strong></td><td>Agent → Manager</td><td>Manager의 UDP <strong>162</strong></td></tr>
              </tbody></table></div>
              <div class="important-box"><span class="box-title">포트 암기</span><p><strong>161 = Agent 관리 요청</strong>, <strong>162 = Manager 경보 수신</strong></p></div>`
          },
          {
            id: "community-string-security", title: "Community String과 보안",
            content: `
              <p>SNMPv1·v2c의 <strong>Community String</strong>은 Manager와 Agent 사이에서 접근 범위를 구분하는 공유 문자열로, 간단한 비밀번호처럼 사용됩니다.</p>
              <ul>
                <li><strong>Read-Only</strong>: MIB 값을 읽을 수 있으며 관례적 기본값은 <code>public</code>입니다.</li>
                <li><strong>Read-Write</strong>: 읽기와 설정 변경이 가능하며 관례적 기본값은 <code>private</code>입니다.</li>
                <li>문자열이 평문으로 전달되므로 도청·재사용·무차별 대입에 취약합니다.</li>
              </ul>
              <p>기본 문자열은 변경하고 관리망 접근을 제한해야 하며, 가능하면 사용자 기반 인증·무결성·암호화를 제공하는 <strong>SNMPv3</strong>를 사용합니다.</p>`
          },
          {
            id: "snmp-version-comparison", title: "SNMP 버전 비교",
            content: `
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>버전</th><th>특징</th><th>보안</th></tr></thead><tbody>
                <tr><td><strong>SNMPv1</strong></td><td>기본 Get·Set·Response·Trap 제공</td><td>평문 Community String</td></tr>
                <tr><td><strong>SNMPv2c</strong></td><td>GetBulk·개선된 오류처리·Trapv2·Inform 제공</td><td>여전히 평문 Community String</td></tr>
                <tr><td><strong>SNMPv3</strong></td><td>사용자 기반 관리와 보안 기능 통합</td><td>인증, 메시지 무결성, Replay 방지, 선택적 암호화</td></tr>
              </tbody></table></div>
              <div class="important-box"><span class="box-title">핵심</span><p><strong>v2c는 기능 향상, v3는 보안 향상</strong>으로 구분합니다.</p></div>`
          },
          {
            id: "telnet-remote-login", title: "TELNET 원격 로그인",
            content: `
              <p><strong>TELNET(Terminal Network)</strong>은 서로 다른 단말 환경을 가상 터미널 방식으로 연결해 원격 시스템에 로그인하고 명령을 실행하는 TCP/IP 응용 계층 프로토콜입니다.</p>
              <ul>
                <li>사용자 단말의 TELNET Client와 원격 장비의 TELNET Server가 통신합니다.</li>
                <li>기본 포트는 <strong>TCP 23</strong>입니다.</li>
                <li>아이디·비밀번호·명령·결과를 암호화하지 않고 평문으로 전달하여 도청과 세션 탈취에 취약합니다.</li>
              </ul>
              <div class="important-box"><span class="box-title">현재 기준</span><p>관리 목적의 원격 접속에는 TELNET 대신 <strong>SSH</strong>를 사용합니다.</p></div>`
          },
          {
            id: "rlogin-service", title: "Rlogin 서비스",
            content: `
              <p><strong>Rlogin(Remote Login)</strong>은 UNIX·BSD 계열 시스템 사이의 원격 로그인을 위해 설계된 서비스입니다.</p>
              <ul>
                <li>TELNET과 같은 원격 접속 기능을 제공하지만 구조가 단순하고 TELNET의 옵션 협상 기능을 제공하지 않습니다.</li>
                <li>전통적으로 TCP 513을 사용하며, 호스트 신뢰 관계와 평문 통신에 의존해 위조·도청 위험이 큽니다.</li>
                <li>Rlogin·Rsh·Rcp 같은 <strong>r-command</strong> 계열은 사용하지 않고 SSH 계열 기능으로 대체합니다.</li>
              </ul>`
          },
          {
            id: "remote-service-comparison", title: "TELNET·Rlogin·SSH 비교",
            content: `
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>TELNET</th><th>Rlogin</th><th>SSH</th></tr></thead><tbody>
                <tr><td><strong>주요 목적</strong></td><td>가상 터미널 원격 접속</td><td>UNIX 계열 원격 로그인</td><td>보안 원격 접속·터널·파일 전송</td></tr>
                <tr><td><strong>기본 포트</strong></td><td>TCP 23</td><td>TCP 513</td><td>TCP 22</td></tr>
                <tr><td><strong>보호</strong></td><td>평문</td><td>평문·호스트 신뢰</td><td>기밀성·무결성·인증 제공</td></tr>
                <tr><td><strong>현재 사용</strong></td><td>지양</td><td>지양</td><td>권장</td></tr>
              </tbody></table></div>`
          },
          {
            id: "ssh-overview", title: "SSH 개요와 특징",
            content: `
              <p><strong>SSH(Secure Shell)</strong>는 암호화된 채널을 통해 원격 로그인, 명령 실행, 파일 전송과 터널링을 제공하는 보안 프로토콜입니다.</p>
              <ul>
                <li>기본 포트는 <strong>TCP 22</strong>입니다.</li>
                <li>TELNET·Rlogin·FTP·Rcp처럼 평문을 사용하는 서비스의 취약점을 보완하기 위해 설계됐습니다.</li>
                <li>서버 인증, 선택적인 사용자 인증, 데이터 기밀성·무결성을 제공합니다.</li>
                <li>초기 SSH-1과 현재 표준인 SSH-2는 호환되지 않으며 <strong>SSH-2</strong>를 사용해야 합니다.</li>
              </ul>`
          },
          {
            id: "ssh-components", title: "SSH 프로토콜 구성",
            content: `
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>계층</th><th>역할</th></tr></thead><tbody>
                <tr><td><strong>SSH-TRANS</strong></td><td>TCP 위에서 서버 인증·키 교환을 수행하고 기밀성·무결성이 있는 안전한 전송 채널 생성</td></tr>
                <tr><td><strong>SSH-AUTH</strong></td><td>안전한 채널 위에서 비밀번호·공개키 등으로 클라이언트 사용자를 인증</td></tr>
                <tr><td><strong>SSH-CONN</strong></td><td>하나의 암호화 연결을 여러 논리 채널로 다중화하여 Shell·명령·포트 전달 등을 제공</td></tr>
                <tr><td><strong>SSH Application</strong></td><td>원격 로그인·파일 전송 등 실제 응용 서비스가 SSH-CONN 채널을 이용</td></tr>
              </tbody></table></div>
              <div class="important-box"><span class="box-title">순서</span><p><strong>TRANS로 안전한 채널 → AUTH로 사용자 인증 → CONN으로 여러 서비스 채널</strong></p></div>`
          },
          {
            id: "ssh-port-forwarding", title: "SSH 포트 포워딩",
            content: `
              <p><strong>Port Forwarding</strong>은 다른 응용프로그램의 TCP 연결을 SSH의 암호화된 터널 안으로 전달하는 기능입니다.</p>
              <ul>
                <li><strong>Local Forwarding</strong>: 로컬 포트로 들어온 연결을 SSH 서버를 거쳐 원격 목적지로 전달합니다.</li>
                <li><strong>Remote Forwarding</strong>: SSH 서버 측 포트의 연결을 클라이언트 측 네트워크로 전달합니다.</li>
                <li><strong>Dynamic Forwarding</strong>: 로컬에 SOCKS Proxy를 만들어 목적지별 연결을 동적으로 전달합니다.</li>
              </ul>
              <p>TELNET·SMTP 같은 평문 응용도 터널 구간에서는 보호할 수 있지만, <strong>SSH 터널의 양 끝 바깥 구간</strong>까지 자동으로 암호화되는 것은 아닙니다.</p>`
          },
          {
            id: "ssh-encryption-flow", title: "SSH 암호화 통신 과정",
            content: `
              <ol>
                <li>Client와 Server가 TCP 연결 후 SSH 버전과 사용할 암호 알고리즘을 협상합니다.</li>
                <li>Server의 Host Key를 확인하고 Diffie-Hellman 계열 키 교환으로 공유 비밀을 만든 뒤 대칭 세션키를 유도합니다.</li>
                <li>암호화·무결성 보호가 적용된 채널 안에서 비밀번호·공개키 등으로 사용자를 인증합니다.</li>
                <li>인증 후 Shell·명령 실행·파일 전송·포트 전달 데이터를 대칭키로 빠르게 암호화해 송수신합니다.</li>
              </ol>
              <p>교재에 등장하는 DES·3DES·RC4·IDEA와 SSH-1 방식은 역사적 규격입니다. 현재는 SSH-2와 검증된 현대 암호군을 사용하고, 서버 Host Key 지문을 확인하여 중간자 공격을 막아야 합니다.</p>
              <div class="important-box"><span class="box-title">SECTION 24 핵심 흐름</span><p><strong>FCAPS 5대 관리 → SNMP Manager·Agent → SMI·MIB → Get·Set·Response·Trap → UDP 161·162 → Community String·SNMPv3 → TELNET·Rlogin → SSH-TRANS·AUTH·CONN → Port Forwarding</strong></p></div>`
          }
        ],
        content: ""
      },
      {
        id: "section-25", number: 25, title: "네트워크 기반 프로그램 활용",
        subtopics: [
          {
            id: "network-program-overview", title: "네트워크 진단 명령 개요",
            content: `
              <p>네트워크 기반 프로그램은 호스트의 연결 상태, 패킷 이동 경로, TCP/IP 연결, 라우팅 테이블, 인터페이스 설정과 실제 패킷을 확인하는 진단 도구입니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>명령</th><th>주요 목적</th><th>핵심 확인 대상</th></tr></thead><tbody>
                <tr><td><strong>ping</strong></td><td>상대 호스트의 도달 가능성·응답시간 확인</td><td>ICMP Echo Request·Reply, RTT, 손실률</td></tr>
                <tr><td><strong>traceroute / tracert</strong></td><td>목적지까지 거치는 경로 추적</td><td>TTL, 중간 라우터, 홉별 지연</td></tr>
                <tr><td><strong>netstat</strong></td><td>연결·소켓·프로토콜·라우팅 상태 확인</td><td>Local/Foreign Address, State, 통계</td></tr>
                <tr><td><strong>route</strong></td><td>라우팅 테이블 조회·경로 추가·삭제</td><td>목적지, 게이트웨이, 넷마스크, 인터페이스</td></tr>
                <tr><td><strong>tcpdump</strong></td><td>인터페이스를 지나는 패킷 수집·분석</td><td>호스트·포트·프로토콜별 패킷</td></tr>
                <tr><td><strong>ifconfig / ipconfig</strong></td><td>네트워크 인터페이스 정보 조회·설정</td><td>IP, 서브넷 마스크, 게이트웨이, DNS</td></tr>
              </tbody></table></div>`
          },
          {
            id: "ping-principle", title: "ping 동작 원리",
            content: `
              <p><strong>ping(Packet Internet Groper)</strong>은 원격 호스트가 정상적으로 동작하고 네트워크를 통해 도달 가능한지 진단하는 유틸리티입니다.</p>
              <ol>
                <li>송신 호스트가 <strong>ICMP Echo Request(Type 8)</strong>를 보냅니다.</li>
                <li>수신 호스트가 요청을 받으면 <strong>ICMP Echo Reply(Type 0)</strong>로 응답합니다.</li>
                <li>송수신 시간으로 <strong>RTT(Round Trip Time)</strong>를 계산하고, 여러 번 전송해 손실률과 지연 변화를 확인합니다.</li>
              </ol>
              <div class="important-box"><span class="box-title">시험 핵심</span><p><strong>Echo Request는 Type 8, Echo Reply는 Type 0</strong>이며 두 메시지의 Code는 일반적으로 0입니다.</p></div>`
          },
          {
            id: "ping-syntax-options", title: "ping 문법과 주요 옵션",
            content: `
              <div class="code-block"><code>ping [option] ip_address | host_name</code></div>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>Linux 옵션</th><th>기능</th></tr></thead><tbody>
                <tr><td><strong>-c count</strong></td><td>지정한 횟수만큼 ICMP 패킷을 송신한 뒤 종료</td></tr>
                <tr><td><strong>-i wait</strong></td><td>패킷 송신 사이의 대기시간을 초 단위로 지정</td></tr>
                <tr><td><strong>-s packet_size</strong></td><td>ICMP 데이터 영역의 크기를 지정</td></tr>
              </tbody></table></div>
              <div class="code-block"><code>ping 192.168.0.100
ping www.example.com -s 100 -c 10</code></div>
              <p>Linux의 ping은 기본적으로 중단할 때까지 반복되므로 <strong>Ctrl+C</strong>로 종료합니다. Windows는 기본 횟수가 정해져 있으며 출력에 bytes, time, TTL과 송수신·손실 통계를 표시합니다.</p>`
          },
          {
            id: "ping-result-analysis", title: "ping 결과 해석과 보안",
            content: `
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>출력 항목</th><th>의미</th></tr></thead><tbody>
                <tr><td><strong>bytes</strong></td><td>응답으로 수신한 ICMP 데이터 크기</td></tr>
                <tr><td><strong>time</strong></td><td>Echo Request부터 Echo Reply까지의 왕복시간</td></tr>
                <tr><td><strong>TTL</strong></td><td>응답 IP 패킷에 남아 있는 Time To Live 값</td></tr>
                <tr><td><strong>Sent / Received / Lost</strong></td><td>송신·수신·손실 패킷 수와 손실률</td></tr>
                <tr><td><strong>Minimum / Maximum / Average</strong></td><td>왕복시간의 최솟값·최댓값·평균값</td></tr>
              </tbody></table></div>
              <p>응답이 없다고 반드시 호스트가 꺼진 것은 아닙니다. 중간 경로 장애, 패킷 손실, 방화벽의 ICMP 차단, 대상의 응답 제한도 원인이 될 수 있습니다.</p>
              <div class="important-box"><span class="box-title">보안 관점</span><p>ping은 장애 진단에 유용하지만 공격자가 활성 호스트 탐색과 네트워크 구조 파악에 사용할 수도 있습니다. 무조건 차단하기보다 필요한 ICMP 유형과 빈도를 정책으로 통제합니다.</p></div>`
          },
          {
            id: "traceroute-principle", title: "traceroute 동작 원리",
            content: `
              <p><strong>traceroute</strong>는 목적지까지 통과하는 라우터와 각 구간의 지연을 확인하는 경로 추적 도구입니다.</p>
              <ol>
                <li>첫 패킷의 IP 헤더 <strong>TTL을 1</strong>로 설정해 전송합니다.</li>
                <li>라우터는 패킷을 전달할 때마다 TTL을 1 감소시키고, 0이 되면 폐기한 뒤 <strong>ICMP Time Exceeded(Type 11)</strong>를 돌려보냅니다.</li>
                <li>다음 패킷은 TTL을 2, 3처럼 하나씩 늘려 보내므로 각 홉의 라우터 주소를 차례로 알아냅니다.</li>
                <li>목적지에 도달하면 UNIX 계열의 일반적 UDP 방식은 닫힌 고번호 포트에 대한 <strong>ICMP Destination Unreachable–Port Unreachable</strong> 응답으로 추적 완료를 판단합니다.</li>
              </ol>
              <div class="important-box"><span class="box-title">TTL의 역할</span><p>TTL은 라우팅 루프에서 패킷이 영구히 순환하는 것을 막으며, traceroute는 이 감소 규칙을 경로 탐색에 활용합니다.</p></div>`
          },
          {
            id: "traceroute-usage-options", title: "traceroute 문법과 옵션",
            content: `
              <div class="code-block"><code>traceroute [option] host | ip_address [packet_length]</code></div>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>옵션</th><th>기능</th></tr></thead><tbody>
                <tr><td><strong>-m max_hop</strong></td><td>추적할 최대 홉 수 지정</td></tr>
                <tr><td><strong>-p port</strong></td><td>목적지 UDP 포트의 시작값 지정. 전통적 기본값은 33434</td></tr>
                <tr><td><strong>-q count</strong></td><td>각 홉마다 보낼 탐사 패킷 수 지정. 일반적으로 기본 3회</td></tr>
                <tr><td><strong>-w time</strong></td><td>각 응답을 기다릴 제한시간 지정</td></tr>
              </tbody></table></div>
              <div class="code-block"><code>traceroute 192.168.0.100</code></div>
              <p>출력은 홉 번호, 라우터의 IP 주소 또는 이름, 탐사 패킷별 RTT를 보여줍니다. 제한시간 안에 응답이 없으면 <strong>*</strong>로 표시될 수 있습니다.</p>`
          },
          {
            id: "tracert-traceroute-comparison", title: "tracert와 traceroute 비교",
            content: `
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>Windows tracert</th><th>UNIX/Linux traceroute</th></tr></thead><tbody>
                <tr><td><strong>기본 탐사 패킷</strong></td><td>ICMP Echo Request</td><td>전통적으로 UDP 고번호 포트</td></tr>
                <tr><td><strong>중간 홉 응답</strong></td><td colspan="2">TTL 만료에 따른 ICMP Time Exceeded</td></tr>
                <tr><td><strong>목적지 응답</strong></td><td>ICMP Echo Reply</td><td>일반적 UDP 방식은 ICMP Port Unreachable</td></tr>
                <tr><td><strong>활용</strong></td><td colspan="2">경로 변화, 특정 홉 이후의 지연·손실, 라우팅 장애 구간 추정</td></tr>
              </tbody></table></div>
              <p>운영체제와 옵션에 따라 UDP·ICMP·TCP 탐사 방식을 선택할 수 있으므로 방화벽 정책에 따라 결과가 달라질 수 있습니다.</p>`
          },
          {
            id: "netstat-overview-options", title: "netstat 개요와 주요 옵션",
            content: `
              <p><strong>netstat(Network Statistics)</strong>은 TCP/IP 연결, 수신 대기 포트, 소켓, 인터페이스, 라우팅 테이블과 프로토콜 통계를 확인하는 명령입니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>옵션</th><th>기능</th></tr></thead><tbody>
                <tr><td><strong>-r</strong></td><td>라우팅 테이블 출력</td></tr>
                <tr><td><strong>-i [interval]</strong></td><td>네트워크 인터페이스 정보 또는 통계를 출력</td></tr>
                <tr><td><strong>-s</strong></td><td>TCP·UDP·IP·ICMP 등 프로토콜별 통계 출력</td></tr>
                <tr><td><strong>-a</strong></td><td>연결된 소켓과 수신 대기 소켓을 모두 표시</td></tr>
                <tr><td><strong>-n</strong></td><td>주소·포트를 이름으로 변환하지 않고 숫자로 표시</td></tr>
              </tbody></table></div>
              <div class="code-block"><code>netstat
netstat -an</code></div>`
          },
          {
            id: "netstat-fields", title: "netstat 출력 필드",
            content: `
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>필드</th><th>의미</th></tr></thead><tbody>
                <tr><td><strong>Proto</strong></td><td>연결이 사용하는 프로토콜</td></tr>
                <tr><td><strong>Recv-Q</strong></td><td>응용프로그램이 아직 읽지 않은 수신 대기 바이트</td></tr>
                <tr><td><strong>Send-Q</strong></td><td>상대에게 전송되었으나 확인되지 않았거나 송신 대기 중인 바이트</td></tr>
                <tr><td><strong>Local Address</strong></td><td>로컬 IP 주소와 로컬 응용프로그램이 사용하는 포트</td></tr>
                <tr><td><strong>Foreign Address</strong></td><td>원격 호스트의 IP 주소와 포트</td></tr>
                <tr><td><strong>State</strong></td><td>TCP 연결 또는 종료 과정의 현재 상태</td></tr>
              </tbody></table></div>
              <p><strong>-a와 -n을 함께 사용</strong>하면 이름 변환 지연 없이 모든 연결·수신 대기 상태를 숫자로 빠르게 확인할 수 있습니다.</p>`
          },
          {
            id: "tcp-connection-states", title: "TCP 연결 설정 상태",
            content: `
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>State</th><th>의미</th></tr></thead><tbody>
                <tr><td><strong>CLOSED</strong></td><td>연결이 없거나 완전히 종료된 상태</td></tr>
                <tr><td><strong>LISTEN</strong></td><td>서버가 클라이언트의 연결 요청을 기다리는 상태</td></tr>
                <tr><td><strong>SYN-SENT</strong></td><td>클라이언트가 SYN을 보낸 뒤 SYN+ACK를 기다리는 상태</td></tr>
                <tr><td><strong>SYN-RECEIVED</strong></td><td>서버가 SYN을 받고 SYN+ACK를 보낸 뒤 최종 ACK를 기다리는 상태</td></tr>
                <tr><td><strong>ESTABLISHED</strong></td><td>3-Way Handshake가 끝나 양쪽이 데이터를 송수신할 수 있는 상태</td></tr>
              </tbody></table></div>
              <div class="important-box"><span class="box-title">3-Way Handshake</span><p><strong>Client: CLOSED → SYN-SENT → ESTABLISHED</strong><br><strong>Server: CLOSED → LISTEN → SYN-RECEIVED → ESTABLISHED</strong></p></div>`
          },
          {
            id: "tcp-termination-states", title: "TCP 연결 종료 상태",
            content: `
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>State</th><th>의미</th></tr></thead><tbody>
                <tr><td><strong>FIN-WAIT-1</strong></td><td>능동 종료 측이 FIN을 보내고 ACK 또는 상대 FIN을 기다림</td></tr>
                <tr><td><strong>CLOSE-WAIT</strong></td><td>수동 종료 측이 상대 FIN을 받고 ACK한 뒤 응용프로그램의 종료를 기다림</td></tr>
                <tr><td><strong>FIN-WAIT-2</strong></td><td>자신의 FIN에 대한 ACK를 받고 상대의 FIN을 기다림</td></tr>
                <tr><td><strong>LAST-ACK</strong></td><td>수동 종료 측이 마지막 FIN을 보내고 최종 ACK를 기다림</td></tr>
                <tr><td><strong>TIME-WAIT</strong></td><td>마지막 ACK 재전송 가능성과 지연 세그먼트 소멸을 위해 일정 시간 대기</td></tr>
                <tr><td><strong>CLOSED</strong></td><td>연결이 완전히 종료됨</td></tr>
              </tbody></table></div>
              <div class="important-box"><span class="box-title">4-Way 종료 흐름</span><p><strong>FIN → ACK → FIN → ACK</strong>. 능동 종료 측은 일반적으로 FIN-WAIT-1·FIN-WAIT-2·TIME-WAIT를, 수동 종료 측은 CLOSE-WAIT·LAST-ACK를 거칩니다.</p></div>`
          },
          {
            id: "route-command", title: "route 명령과 문법",
            content: `
              <p><strong>route</strong>는 운영체제의 라우팅 테이블을 확인하거나 정적 경로를 추가·삭제하는 명령입니다.</p>
              <div class="code-block"><code>route add [-net | -host] destination [gw gateway] [netmask mask] [[dev] interface]
route del [-net | -host] destination [gw gateway] [netmask mask] [[dev] interface]</code></div>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>항목</th><th>의미</th></tr></thead><tbody>
                <tr><td><strong>add / del</strong></td><td>라우팅 경로 추가 / 삭제</td></tr>
                <tr><td><strong>-net / -host</strong></td><td>목적지를 네트워크 / 단일 호스트로 지정</td></tr>
                <tr><td><strong>gw</strong></td><td>패킷을 전달할 게이트웨이 지정</td></tr>
                <tr><td><strong>netmask</strong></td><td>목적지 네트워크의 서브넷 마스크 지정</td></tr>
                <tr><td><strong>dev</strong></td><td>사용할 네트워크 인터페이스 지정</td></tr>
              </tbody></table></div>`
          },
          {
            id: "route-examples", title: "route 설정 예시",
            content: `
              <div class="code-block"><code>route add -net 203.249.7.0 netmask 255.255.255.0 gw 192.168.1.100
route add default gw 192.168.0.1
route del -net 203.249.7.0 netmask 255.255.255.0 gw 192.168.1.100</code></div>
              <ul>
                <li>첫 번째 명령은 203.249.7.0/24로 가는 패킷을 게이트웨이 192.168.1.100으로 전달합니다.</li>
                <li><strong>default</strong>는 더 구체적인 경로가 없을 때 사용하는 기본 경로를 뜻합니다.</li>
                <li>잘못된 정적 경로는 통신 단절이나 의도하지 않은 우회 전송을 만들 수 있으므로 변경 전·후 라우팅 테이블을 확인해야 합니다.</li>
              </ul>
              <p>교재의 route는 전통적 명령이며 현대 Linux에서는 <strong>ip route</strong> 명령을 주로 사용합니다.</p>`
          },
          {
            id: "tcpdump-overview", title: "tcpdump 개요",
            content: `
              <p><strong>tcpdump</strong>는 지정한 네트워크 인터페이스를 통과하는 패킷을 캡처해 헤더와 내용을 출력하는 패킷 분석 도구입니다.</p>
              <ul>
                <li>장애 구간과 프로토콜 동작 확인, 로그 수집, 공격 흔적 추적과 이상 트래픽 분석에 활용합니다.</li>
                <li>UNIX/Linux에서 널리 사용하며 Windows 계열에서는 유사한 <strong>WinDump</strong>를 사용할 수 있습니다.</li>
                <li>호스트·네트워크·포트·프로토콜 조건을 조합한 필터로 필요한 패킷만 선택할 수 있습니다.</li>
              </ul>
              <div class="important-box"><span class="box-title">보안 주의</span><p>패킷에는 인증정보와 개인정보가 포함될 수 있으므로 승인된 네트워크에서 최소 범위로 수집하고 캡처 파일의 접근권한·보관기간을 통제해야 합니다.</p></div>`
          },
          {
            id: "tcpdump-options-examples", title: "tcpdump 옵션과 필터",
            content: `
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>옵션</th><th>기능</th></tr></thead><tbody>
                <tr><td><strong>-A</strong></td><td>패킷 내용을 ASCII로 표시</td></tr>
                <tr><td><strong>-c count</strong></td><td>지정한 수의 패킷을 받은 뒤 종료</td></tr>
                <tr><td><strong>-C file_size</strong></td><td>캡처 저장파일이 지정 크기에 도달하면 새 파일로 전환</td></tr>
                <tr><td><strong>-D</strong></td><td>캡처 가능한 네트워크 인터페이스 목록 표시</td></tr>
                <tr><td><strong>-i interface</strong></td><td>패킷을 수집할 인터페이스 지정</td></tr>
              </tbody></table></div>
              <div class="code-block"><code>tcpdump -i eth0
tcpdump host 211.47.66.50 and port 80</code></div>
              <p><strong>host</strong>는 특정 호스트, <strong>port</strong>는 특정 포트 조건이며 <strong>and·or·not</strong>으로 필터를 조합합니다.</p>`
          },
          {
            id: "ifconfig-overview-options", title: "ifconfig 개요와 옵션",
            content: `
              <p><strong>ifconfig(Interface Configuration)</strong>는 UNIX/Linux에서 인터페이스의 상태·주소를 확인하고 IP 주소, 넷마스크, 브로드캐스트 주소와 활성 상태를 설정하는 전통적 명령입니다.</p>
              <div class="code-block"><code>ifconfig [device] [ip_address] [netmask mask] [broadcast broadcast_ip] [up | down]</code></div>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>항목</th><th>기능</th></tr></thead><tbody>
                <tr><td><strong>device</strong></td><td>설정하거나 조회할 인터페이스 지정</td></tr>
                <tr><td><strong>ip_address</strong></td><td>인터페이스에 IP 주소 할당</td></tr>
                <tr><td><strong>netmask</strong></td><td>서브넷 마스크 지정</td></tr>
                <tr><td><strong>broadcast</strong></td><td>브로드캐스트 주소 지정</td></tr>
                <tr><td><strong>up / down</strong></td><td>인터페이스 활성화 / 비활성화</td></tr>
              </tbody></table></div>`
          },
          {
            id: "ifconfig-output-setting", title: "ifconfig 출력과 설정",
            content: `
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>출력</th><th>의미</th></tr></thead><tbody>
                <tr><td><strong>HWaddr / ether</strong></td><td>인터페이스의 MAC 주소</td></tr>
                <tr><td><strong>inet addr, Bcast, Mask</strong></td><td>IPv4 주소, 브로드캐스트 주소, 서브넷 마스크</td></tr>
                <tr><td><strong>UP·RUNNING·PROMISC·MULTICAST</strong></td><td>인터페이스 동작 상태와 지원·설정 플래그</td></tr>
                <tr><td><strong>MTU</strong></td><td>한 번에 전송할 수 있는 최대 프레임 데이터 크기</td></tr>
                <tr><td><strong>RX / TX packets·bytes</strong></td><td>수신·송신 패킷 수와 바이트 수, 오류·드롭 통계</td></tr>
                <tr><td><strong>collisions</strong></td><td>충돌 발생 횟수</td></tr>
              </tbody></table></div>
              <div class="code-block"><code>ifconfig -a
ifconfig eth0
ifconfig eth0 192.168.0.102 netmask 255.255.255.0 broadcast 192.168.0.255 up</code></div>
              <p>교재의 ifconfig는 전통적 도구이며 현대 Linux에서는 <strong>ip addr·ip link</strong> 명령을 주로 사용합니다.</p>`
          },
          {
            id: "ipconfig-options", title: "Windows ipconfig 옵션",
            content: `
              <p><strong>ipconfig</strong>는 Windows에서 네트워크 어댑터의 TCP/IP 설정을 조회하고 DHCP 임대와 DNS Resolver Cache를 관리하는 명령입니다.</p>
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>명령</th><th>기능</th></tr></thead><tbody>
                <tr><td><strong>ipconfig</strong></td><td>IPv4/IPv6 주소, 서브넷 마스크, 기본 게이트웨이 등 기본 설정 표시</td></tr>
                <tr><td><strong>ipconfig /all</strong></td><td>MAC 주소, DHCP·DNS 서버 등 전체 TCP/IP 구성 표시</td></tr>
                <tr><td><strong>ipconfig /release [adapter]</strong></td><td>지정 어댑터의 DHCP 임대 주소 해제</td></tr>
                <tr><td><strong>ipconfig /renew [adapter]</strong></td><td>지정 어댑터의 DHCP 임대 주소 갱신</td></tr>
                <tr><td><strong>ipconfig /displaydns</strong></td><td>DNS Resolver Cache 내용 표시</td></tr>
                <tr><td><strong>ipconfig /flushdns</strong></td><td>DNS Resolver Cache 삭제</td></tr>
                <tr><td><strong>ipconfig /registerdns</strong></td><td>DHCP 임대를 갱신하고 DNS 이름 등록을 다시 요청</td></tr>
              </tbody></table></div>`
          },
          {
            id: "diagnostic-sequence", title: "장애 진단 순서",
            content: `
              <ol>
                <li><strong>ifconfig / ipconfig</strong>로 로컬 IP·마스크·게이트웨이·인터페이스 상태를 확인합니다.</li>
                <li><strong>ping</strong>으로 Loopback → 로컬 게이트웨이 → 원격 IP → 도메인 이름 순서로 확인해 장애 범위를 좁힙니다.</li>
                <li><strong>traceroute / tracert</strong>로 응답이 끊기거나 지연이 커지는 홉을 찾습니다.</li>
                <li><strong>route / netstat -r</strong>로 목적지 경로와 기본 게이트웨이를 확인합니다.</li>
                <li><strong>netstat</strong>으로 서비스의 LISTEN 여부와 연결 상태를 확인합니다.</li>
                <li>필요한 경우 승인된 범위에서 <strong>tcpdump</strong>로 실제 패킷 송수신을 검증합니다.</li>
              </ol>
              <div class="important-box"><span class="box-title">판단 기준</span><p>한 명령의 결과만으로 단정하지 않고 <strong>로컬 설정 → 도달성 → 경로 → 소켓 상태 → 패킷</strong> 순으로 교차 확인합니다.</p></div>`
          },
          {
            id: "network-command-comparison", title: "명령어 핵심 비교",
            content: `
              <div class="table-scroll"><table class="concept-table"><thead><tr><th>질문</th><th>사용 명령</th></tr></thead><tbody>
                <tr><td>상대 호스트까지 통신이 되는가?</td><td><strong>ping</strong></td></tr>
                <tr><td>어느 라우터를 거쳐 가는가?</td><td><strong>traceroute / tracert</strong></td></tr>
                <tr><td>어떤 포트가 열려 있고 연결 상태는 무엇인가?</td><td><strong>netstat</strong></td></tr>
                <tr><td>목적지 패킷을 어느 게이트웨이로 보낼 것인가?</td><td><strong>route</strong></td></tr>
                <tr><td>실제로 어떤 패킷이 인터페이스를 지나가는가?</td><td><strong>tcpdump</strong></td></tr>
                <tr><td>내 인터페이스의 주소와 상태는 무엇인가?</td><td><strong>ifconfig / ipconfig</strong></td></tr>
              </tbody></table></div>
              <div class="important-box"><span class="box-title">SECTION 25 핵심 흐름</span><p><strong>ping의 ICMP Echo → traceroute의 TTL·Time Exceeded → netstat의 연결·State → route의 경로 설정 → tcpdump의 패킷 분석 → ifconfig·ipconfig의 인터페이스 설정</strong></p></div>`
          }
        ],
        content: ""
      },
      {
        id: "section-26", number: 26, title: "네트워크 기반 공격의 이해",
        subtopics: [
          {
            id: "network-threat-overview", title: "네트워크 위협과 공격 분류",
            content: `<p>네트워크는 다수의 호스트가 연결되고 자원을 공유하며 여러 운영체제·장비가 함께 동작하므로 공격 표면이 넓습니다. 연결 지점이 많을수록 한 지점의 취약점이 다른 시스템으로 확산될 수 있고 복잡한 구성은 설정 오류와 관리 누락 가능성을 높입니다.</p><div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>수동적 공격</th><th>능동적 공격</th></tr></thead><tbody><tr><td><strong>특징</strong></td><td>통신 내용을 몰래 관찰·수집</td><td>데이터·연결·서비스에 직접 변조나 방해</td></tr><tr><td><strong>탐지</strong></td><td>어려움</td><td>상대적으로 쉬움</td></tr><tr><td><strong>대표 예</strong></td><td>Sniffing, Eavesdropping</td><td>재전송, 변조, DoS/DDoS, Session Hijacking</td></tr><tr><td><strong>핵심 대응</strong></td><td>암호화와 무결성 보호</td><td>인증·접근통제·탐지·복구</td></tr></tbody></table></div>`
          },
          {
            id: "dos-overview", title: "DoS 개념과 분류",
            content: `<p><strong>DoS(Denial of Service)</strong>는 정당한 사용자가 시스템의 데이터나 자원을 적절한 시간 안에 사용하지 못하도록 과도한 부하나 비정상 동작을 유발하는 공격입니다. 한 공격원이 수행하면 DoS, 다수의 분산된 공격원이 수행하면 <strong>DDoS</strong>입니다.</p><div class="table-scroll"><table class="concept-table"><thead><tr><th>분류</th><th>원리</th><th>예</th></tr></thead><tbody><tr><td><strong>Poison Packet</strong></td><td>프로토콜·운영체제 취약점을 자극하는 비정상 패킷으로 오류·중단 유발</td><td>Ping of Death, Teardrop, LAND</td></tr><tr><td><strong>Flooding</strong></td><td>대량 요청으로 대역폭·연결·CPU·DB 자원 고갈</td><td>SYN/UDP/ICMP/HTTP Flooding</td></tr></tbody></table></div><div class="important-box"><span class="box-title">구분</span><p><strong>취약점 악용형</strong>은 패치가 중요하고, <strong>자원 고갈형</strong>은 필터링·용량·분산·Rate Limit을 함께 사용합니다.</p></div>`
          },
          {
            id: "syn-flooding", title: "TCP SYN Flooding",
            content: `<p>SYN Flooding은 TCP 3-Way Handshake의 <strong>Half-Open</strong> 상태를 악용합니다. 공격자가 출발지 주소를 위조한 SYN을 반복 전송하면 서버는 SYN+ACK를 보낸 뒤 마지막 ACK를 기다리며 연결 대기 큐와 메모리를 소모합니다.</p><ol><li>다수의 SYN이 도착합니다.</li><li>서버는 각 요청을 SYN-RECEIVED 상태로 유지합니다.</li><li>마지막 ACK가 오지 않아 Backlog Queue가 가득 차면 정상 연결도 받기 어려워집니다.</li></ol><div class="table-scroll"><table class="concept-table"><thead><tr><th>대응</th><th>설명</th></tr></thead><tbody><tr><td><strong>SYN Cookie</strong></td><td>검증 가능한 값을 순서번호에 넣고 ACK 도착 후 자원 할당</td></tr><tr><td><strong>Backlog·Timeout 조정</strong></td><td>대기 큐 확대와 Half-Open 유지시간 단축</td></tr><tr><td><strong>Rate Limit·SYN Proxy</strong></td><td>비정상 SYN을 제한하거나 중간 장비가 연결 성립 여부 확인</td></tr></tbody></table></div>`
          },
          {
            id: "smurf-land", title: "Smurf와 LAND Attack",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>공격</th><th>동작</th><th>핵심 대응</th></tr></thead><tbody><tr><td><strong>Smurf</strong></td><td>피해자의 IP로 Source를 위조한 ICMP Echo Request를 Directed Broadcast 주소로 보내 여러 호스트의 Echo Reply가 피해자에게 집중되게 함</td><td>IP Directed Broadcast 차단, Broadcast ICMP 무응답, Source 검증</td></tr><tr><td><strong>LAND</strong></td><td>Source IP·Port와 Destination IP·Port를 피해 시스템의 동일한 값으로 조작해 자기 자신과 연결하게 함</td><td>동일 Source/Destination 필터링, 패치, 비정상 TCP 탐지</td></tr></tbody></table></div><p>Smurf는 <strong>반사·증폭</strong>, LAND는 <strong>비정상 주소 조합</strong>이 핵심입니다.</p>`
          },
          {
            id: "fragmentation-dos", title: "Ping of Death·Teardrop·단편화 공격",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>공격</th><th>원리</th></tr></thead><tbody><tr><td><strong>Ping of Death</strong></td><td>재조립 결과가 IP 최대 크기 65,535바이트를 넘도록 조작된 ICMP 단편으로 구형 시스템 오류 유발</td></tr><tr><td><strong>Teardrop</strong></td><td>Fragment Offset을 겹치거나 비정상적으로 만들어 재조립 장애 유발</td></tr><tr><td><strong>Bonk / Boink</strong></td><td>단편 순서번호와 반복 패턴을 비정상 조작해 재조립 오류 유발</td></tr><tr><td><strong>Tiny Fragment</strong></td><td>TCP Header 일부가 다음 단편으로 넘어가도록 아주 작게 분할해 필터 검사 우회</td></tr><tr><td><strong>Fragment Overlap</strong></td><td>겹치는 Offset으로 필터가 본 내용과 최종 재조립 내용을 다르게 만듦</td></tr></tbody></table></div><p>운영체제·장비 패치와 비정상 단편의 차단·정규화가 근본 대응입니다.</p>`
          },
          {
            id: "ddos-overview-history", title: "DDoS 개요와 발전",
            content: `<p><strong>DDoS</strong>는 악성코드에 감염된 다수의 시스템을 동시에 제어하여 한 대상을 공격합니다. 단일 공격원보다 차단과 추적이 어렵고 공격 대역폭과 요청량을 크게 늘릴 수 있습니다.</p><ul><li><strong>초기</strong>: Ping of Death·Teardrop·Smurf·LAND</li><li><strong>봇넷 시대</strong>: Trinoo·TFN·Stacheldraht·TFN2K</li><li><strong>DDoS-for-Hire</strong>: 대규모 Botnet 임대형 공격 서비스</li><li><strong>현재</strong>: Mirai 계열 IoT Botnet과 Memcached·DNS 등 반사·증폭 결합</li></ul><p><strong>DRDoS</strong>는 공격자가 직접 피해자에게 보내는 대신 제3의 정상 서버를 반사체로 이용합니다.</p>`
          },
          {
            id: "ddos-components-botnet", title: "DDoS 구성요소와 Botnet",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>구성요소</th><th>역할</th></tr></thead><tbody><tr><td><strong>공격자</strong></td><td>공격을 계획하고 C&amp;C에 명령</td></tr><tr><td><strong>Master / C&amp;C Server</strong></td><td>공격 명령 전달과 감염 시스템 관리</td></tr><tr><td><strong>Handler</strong></td><td>다수 Agent를 중간에서 제어</td></tr><tr><td><strong>Agent / Zombie</strong></td><td>실제 공격 트래픽을 만드는 감염 호스트</td></tr><tr><td><strong>Victim</strong></td><td>공격 대상 시스템·네트워크</td></tr></tbody></table></div><p><strong>Bot</strong>은 원격 명령으로 악성 행위를 수행하는 감염 프로그램·기기이며 다수의 Bot을 묶은 네트워크가 <strong>Botnet</strong>입니다. 명령 채널은 IRC·HTTP·P2P 등으로 구성됩니다.</p>`
          },
          {
            id: "dns-sinkhole-evasion", title: "DNS Sinkhole과 Botnet 우회",
            content: `<p><strong>DNS Sinkhole</strong>은 감염 호스트가 C&amp;C 도메인을 질의할 때 실제 C&amp;C가 아닌 통제된 Sinkhole 주소를 응답하여 명령 연결을 차단하고 감염 장비를 식별합니다.</p><ol><li>악성 도메인·C&amp;C 목록을 DNS 정책에 반영합니다.</li><li>악성 도메인 질의에 Sinkhole IP를 응답합니다.</li><li>Sinkhole 접속 기록으로 감염 장비를 찾아 격리·치료합니다.</li></ol><div class="table-scroll"><table class="concept-table"><thead><tr><th>우회 기법</th><th>설명</th></tr></thead><tbody><tr><td><strong>Fast Flux</strong></td><td>한 도메인의 IP를 짧은 주기로 변경</td></tr><tr><td><strong>DGA</strong></td><td>알고리즘으로 다수 후보 도메인을 자동 생성</td></tr><tr><td><strong>Domain Shadowing</strong></td><td>탈취한 정상 도메인 아래 악성 Subdomain 생성</td></tr></tbody></table></div>`
          },
          {
            id: "traditional-ddos-tools", title: "전통적 DDoS 도구",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>도구</th><th>특징</th></tr></thead><tbody><tr><td><strong>Trinoo</strong></td><td>대표적 초기 분산 공격 도구, 주로 UDP Flooding</td></tr><tr><td><strong>TFN</strong></td><td>UDP Flood, TCP SYN Flood, ICMP Echo·Broadcast 공격 지원</td></tr><tr><td><strong>Stacheldraht</strong></td><td>TFN 계열에 Master–Agent 통신 암호화와 Agent 자동 갱신 결합</td></tr><tr><td><strong>TFN2K</strong></td><td>고정 Port에 의존하지 않고 통신 암호화와 다중 프로토콜 혼합</td></tr></tbody></table></div><p>공통 구조는 <strong>공격자 → Master/Handler → 다수 Agent → Victim</strong>입니다.</p>`
          },
          {
            id: "ddos-types", title: "최신 DDoS 유형 비교",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>대역폭 공격</th><th>연결 상태 공격</th><th>웹·DB 부하 공격</th></tr></thead><tbody><tr><td><strong>특성</strong></td><td>높은 bps</td><td>높은 pps·Connection</td><td>높은 HTTP·DB 처리량</td></tr><tr><td><strong>예</strong></td><td>UDP/ICMP Flood, DNS·NTP 증폭</td><td>SYN·ACK Flooding</td><td>GET/POST Flooding, Slow HTTP, HashDoS</td></tr><tr><td><strong>피해</strong></td><td>회선 포화</td><td>세션 테이블·Socket 고갈</td><td>Web·WAS·DB의 CPU·Thread 고갈</td></tr><tr><td><strong>프로토콜</strong></td><td>UDP·ICMP</td><td>TCP</td><td>HTTP·HTTPS</td></tr></tbody></table></div>`
          },
          {
            id: "udp-icmp-flooding", title: "UDP·ICMP Flooding",
            content: `<ul><li><strong>UDP Flooding</strong>: 대량 UDP Datagram을 여러 Port로 보내 회선과 처리 자원을 소진합니다. 연결 설정이 없어 Source 위조와 대량 전송이 쉽습니다.</li><li><strong>ICMP Flooding</strong>: ICMP Request를 대량 전송해 회선·CPU를 소모시키며 Reply를 유도하면 반사·증폭 구조로도 악용됩니다.</li></ul><p>비정상 PPS·BPS 탐지, Source 검증, 불필요 서비스 차단, Rate Limit과 상위 DDoS 방어서비스를 연계합니다.</p>`
          },
          {
            id: "drdos-reflection", title: "DRDoS와 반사·증폭 프로토콜",
            content: `<p><strong>DRDoS</strong>는 피해자의 IP로 Source를 위조한 작은 요청을 다수의 공개 서버에 보내 더 큰 응답이 피해자에게 집중되게 합니다.</p><div class="table-scroll"><table class="concept-table"><thead><tr><th>반사 서비스</th><th>악용 지점</th></tr></thead><tbody><tr><td><strong>DNS</strong></td><td>큰 Record·ANY 계열 응답과 공개 Resolver</td></tr><tr><td><strong>NTP</strong></td><td>구형 monlist 등 큰 상태 응답</td></tr><tr><td><strong>SNMP</strong></td><td>GetBulkRequest 같은 대량 MIB 응답</td></tr><tr><td><strong>CHARGEN</strong></td><td>문자열을 지속 반환</td></tr><tr><td><strong>CLDAP</strong></td><td>UDP Directory 질의의 큰 응답</td></tr><tr><td><strong>SSDP</strong></td><td>UPnP 장비 검색 응답</td></tr><tr><td><strong>Memcached</strong></td><td>작은 UDP 요청에 매우 큰 Cache 응답</td></tr><tr><td><strong>CoAP</strong></td><td>UDP 5683 기반 IoT 응답</td></tr></tbody></table></div><div class="important-box"><span class="box-title">핵심</span><p><strong>Reflection</strong>은 제3자 서버가 응답하게 하는 것이고, <strong>Amplification</strong>은 요청보다 응답을 크게 만드는 것입니다.</p></div>`
          },
          {
            id: "resource-exhaustion", title: "자원 소진형 공격",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>공격</th><th>소진 대상</th><th>징후</th></tr></thead><tbody><tr><td><strong>SYN Flooding</strong></td><td>Half-Open Queue·메모리</td><td>SYN_RECV와 SYN 비율 증가</td></tr><tr><td><strong>ACK Flooding</strong></td><td>방화벽·IPS 상태 검사와 대역폭</td><td>기존 세션과 맞지 않는 ACK 급증</td></tr><tr><td><strong>DNS Query Flooding</strong></td><td>DNS Thread·Cache·회선</td><td>무작위 또는 반복 질의 증가</td></tr></tbody></table></div><p><strong>bps·pps·동시 Connection·Protocol 비율·응답 오류율</strong>을 함께 관찰합니다.</p>`
          },
          {
            id: "web-db-load-attacks", title: "웹·DB 부하와 Slow HTTP 공격",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>공격</th><th>동작</th></tr></thead><tbody><tr><td><strong>GET Flooding</strong></td><td>대량 GET 요청으로 Web·WAS·DB 처리 자원 고갈</td></tr><tr><td><strong>Slowloris</strong></td><td>HTTP Header의 끝을 보내지 않고 조금씩 전송해 Connection 장시간 점유</td></tr><tr><td><strong>RUDY</strong></td><td>큰 Content-Length를 선언한 POST Body를 매우 천천히 전송</td></tr><tr><td><strong>Slow Read</strong></td><td>작은 TCP 수신 Window로 서버 응답을 지연시키며 Connection 유지</td></tr></tbody></table></div><p>Slow 공격은 낮은 대역폭으로도 연결을 오래 점유하므로 <strong>연결 유지시간·Header/Body 전송률</strong>이 중요합니다.</p>`
          },
          {
            id: "application-dos-variants", title: "응용계층 DoS 변형",
            content: `<ul><li><strong>Cache-Control GET Flooding</strong>: Cache를 사용하지 않게 하여 매번 원본 Web·DB 처리 유도</li><li><strong>Dynamic HTTP Request Flooding</strong>: URL·Query를 계속 바꿔 정적 패턴과 Cache 우회</li><li><strong>HashDoS</strong>: 충돌이 많이 발생하도록 조작된 매개변수로 Hash Table 처리와 CPU 소모</li><li><strong>HulkDoS</strong>: URL 값을 계속 바꾸는 GET Flooding</li><li><strong>SIP Flood</strong>: VoIP의 SIP INVITE 등 세션 요청으로 전화·중계 자원 고갈</li></ul><p>WAF·행위 기반 Rate Limit·Cache·인증·Connection Timeout·자원 격리를 함께 적용합니다.</p>`
          },
          {
            id: "ddos-response", title: "DDoS 방어 인프라와 대응 절차",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>방어 원칙</th><th>내용</th></tr></thead><tbody><tr><td><strong>용량·분산</strong></td><td>회선, 이중화, Load Balancer, CDN·Scrubbing 활용</td></tr><tr><td><strong>노출 최소화</strong></td><td>불필요 Port·서비스 차단, 외부·내부 시스템 분리</td></tr><tr><td><strong>정책·탐지</strong></td><td>TCP Proxy, Rate Limit, Whitelist, 상시 모니터링</td></tr><tr><td><strong>가용성 우선</strong></td><td>핵심 트래픽 우선 처리와 비핵심 기능 제한</td></tr></tbody></table></div><ol><li><strong>사전 준비</strong>: 연락망·우회 정책·방어 서비스 마련</li><li><strong>공격 판단</strong>: 장애·Flash Crowd·공격 구분</li><li><strong>정보 파악</strong>: 공격 유형과 표적 확인</li><li><strong>방어 적용</strong>: 필터·Rate Limit·우회·분산</li><li><strong>피해 확인·복구</strong>: 서비스·장비 정상화</li><li><strong>사후 조치</strong>: 로그 분석과 재발 방지</li></ol>`
          },
          {
            id: "attack-preparation", title: "공격 준비 3단계",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>단계</th><th>목적</th><th>대표 정보</th></tr></thead><tbody><tr><td><strong>Footprinting</strong></td><td>공개·간접 정보로 대상 윤곽 파악</td><td>도메인, IP 대역, DNS·Mail, 조직 정보</td></tr><tr><td><strong>Scanning</strong></td><td>네트워크와 시스템 직접 조사</td><td>활성 Host, Open Port, OS·서비스</td></tr><tr><td><strong>Enumeration</strong></td><td>수집 정보로 계정·자원·서비스를 구체적으로 열거</td><td>사용자·그룹, 공유 자원, 응용프로그램</td></tr></tbody></table></div><div class="important-box"><span class="box-title">순서</span><p><strong>Footprinting → Scanning → Enumeration</strong>으로 갈수록 직접 상호작용과 정보의 구체성이 커집니다.</p></div>`
          },
          {
            id: "scan-classification", title: "스캔 분류와 Sweep",
            content: `<p>Scanning은 활성 시스템과 서비스, Port, OS, 방화벽 정책을 확인합니다.</p><div class="table-scroll"><table class="concept-table"><thead><tr><th>분류</th><th>종류</th><th>목적</th></tr></thead><tbody><tr><td><strong>Sweep</strong></td><td>ICMP·TCP·UDP Sweep</td><td>IP 대역에서 활성 Host 탐색</td></tr><tr><td><strong>Open Scan</strong></td><td>TCP Full/Half Open, UDP</td><td>응답으로 Port 상태 확인</td></tr><tr><td><strong>Stealth Scan</strong></td><td>FIN·NULL·XMAS·ACK·Fragment</td><td>완전한 연결 없이 필터·Port 상태 추정</td></tr><tr><td><strong>Security Scan</strong></td><td>OS/System, Network Device, Application</td><td>취약점과 보안 설정 점검</td></tr></tbody></table></div>`
          },
          {
            id: "open-scan", title: "TCP·UDP Open Scan",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>방식</th><th>열린 Port</th><th>닫힌 Port</th><th>특징</th></tr></thead><tbody><tr><td><strong>TCP Full Open</strong></td><td>SYN+ACK 후 ACK</td><td>RST+ACK</td><td>정확하지만 Log가 남기 쉬움</td></tr><tr><td><strong>TCP Half Open</strong></td><td>SYN+ACK 후 RST</td><td>RST+ACK</td><td>Handshake를 완성하지 않는 SYN Scan</td></tr><tr><td><strong>UDP Scan</strong></td><td>무응답 또는 응용 응답</td><td>ICMP Port Unreachable</td><td>손실·필터링으로 판정이 느리고 불확실할 수 있음</td></tr></tbody></table></div>`
          },
          {
            id: "stealth-scan", title: "Stealth Scan 종류",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>스캔</th><th>전송</th><th>판단 포인트</th></tr></thead><tbody><tr><td><strong>FIN</strong></td><td>FIN</td><td>닫힌 Port의 RST, 열린 Port의 무응답</td></tr><tr><td><strong>NULL</strong></td><td>Flag 없음</td><td>RST 응답 여부</td></tr><tr><td><strong>XMAS</strong></td><td>FIN·PSH·URG</td><td>RST 응답 여부</td></tr><tr><td><strong>ACK</strong></td><td>ACK</td><td>Stateful Firewall 필터링 정책 추정</td></tr><tr><td><strong>Decoy</strong></td><td>여러 위조 Source 혼합</td><td>실제 Scanner 식별 방해</td></tr><tr><td><strong>FTP Bounce</strong></td><td>FTP PORT 동작</td><td>제3의 FTP Server를 중계점으로 이용</td></tr></tbody></table></div><p>OS·방화벽 구현에 따라 응답이 달라지므로 한 방식만으로 확정하지 않습니다.</p>`
          },
          {
            id: "nmap-os-enumeration", title: "Nmap·OS Fingerprinting·Enumeration",
            content: `<p><strong>Nmap</strong>은 Host·Port·Service·OS를 조사하는 대표적인 점검 도구입니다.</p><div class="table-scroll"><table class="concept-table"><thead><tr><th>옵션</th><th>기능</th></tr></thead><tbody><tr><td><strong>-sS / -sT / -sU</strong></td><td>TCP SYN / TCP Connect / UDP Scan</td></tr><tr><td><strong>-sF / -sN / -sX / -sA</strong></td><td>FIN / NULL / XMAS / ACK Scan</td></tr><tr><td><strong>-sn</strong></td><td>Port Scan 없이 Host Discovery</td></tr><tr><td><strong>-p</strong></td><td>대상 Port 지정</td></tr><tr><td><strong>-O</strong></td><td>OS 탐지</td></tr></tbody></table></div><p><strong>OS Fingerprinting</strong>은 ISN, TTL, ToS, TCP/IP Stack 응답과 Banner를 조합해 OS를 추정합니다. <strong>Enumeration</strong>은 공유 자원, 사용자·그룹, 실행 서비스와 응용프로그램을 구체적으로 확인합니다.</p>`
          },
          {
            id: "scan-defense", title: "Port Scan 대응",
            content: `<ul><li>불필요 Service·Port를 중지하거나 방화벽으로 차단합니다.</li><li>외부 공개 범위를 최소화하고 내부 중요 서버를 직접 노출하지 않습니다.</li><li>IDS/IPS로 여러 Port·Host 순차 탐색과 비정상 Flag 조합을 탐지합니다.</li><li>취약점 점검·Patch·접근제어·관리망 분리를 수행합니다.</li><li>Scan 자체뿐 아니라 <strong>이후 침입 시도</strong>까지 Log를 연계 분석합니다.</li></ul>`
          },
          {
            id: "sniffing-overview", title: "Sniffing 원리와 환경",
            content: `<p><strong>Sniffing</strong>은 네트워크를 지나는 다른 사용자의 Packet을 몰래 수집·분석하는 수동적 도청 공격입니다. 평문 Protocol은 ID·Password·Cookie·업무 내용이 노출될 수 있습니다.</p><ul><li><strong>Promiscuous Mode</strong>: NIC가 자신에게 온 Frame뿐 아니라 관찰 가능한 모든 Frame을 OS에 전달</li><li><strong>Hub 환경</strong>: Frame이 모든 Port로 복제되어 Promiscuous Mode만으로 수집 가능</li><li><strong>Switch 환경</strong>: 목적지 MAC Port로만 전달하므로 MAC Flooding·ARP Spoofing 같은 추가 기법 필요</li></ul><p>대표 Packet Analyzer는 Wireshark이며 승인된 진단 범위에서 사용해야 합니다.</p>`
          },
          {
            id: "switch-sniffing", title: "Switch 환경 Sniffing 기법",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>기법</th><th>원리</th></tr></thead><tbody><tr><td><strong>MAC Flooding / Switch Jamming</strong></td><td>위조 MAC을 대량 학습시켜 CAM Table을 고갈시키고 Frame Flooding 유도</td></tr><tr><td><strong>ARP Spoofing</strong></td><td>위조 ARP Reply로 ARP Cache를 바꾸어 트래픽을 공격자 MAC으로 유도</td></tr><tr><td><strong>ARP Redirect</strong></td><td>공격자가 자신을 Router처럼 보이게 하여 Broadcast 영역 트래픽 경유</td></tr><tr><td><strong>ICMP Redirect</strong></td><td>공격자를 더 나은 Gateway로 알리는 Redirect로 Route 변경</td></tr><tr><td><strong>SPAN / Port Mirroring 악용</strong></td><td>관리용 복제 Port에 무단 접근해 다른 Port 트래픽 관찰</td></tr></tbody></table></div>`
          },
          {
            id: "sniffing-defense", title: "Sniffing 탐지와 대응",
            content: `<p>Sniffing 대응은 탐지보다 평문을 없애는 <strong>암호화</strong>가 근본적입니다.</p><div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>방법</th></tr></thead><tbody><tr><td><strong>탐지</strong></td><td>위조 MAC Ping, ARP 감시, Reverse DNS 행동, Decoy 정보, ARPwatch·IDS</td></tr><tr><td><strong>L2 보호</strong></td><td>Port Security, Static ARP, DHCP Snooping·DAI, 관리 Port 접근통제</td></tr><tr><td><strong>암호화</strong></td><td>TLS/HTTPS, SSH, VPN, PGP·S/MIME</td></tr></tbody></table></div><p>Promiscuous Mode는 정상 관리 도구도 사용하므로 다른 징후와 함께 판단합니다.</p>`
          },
          {
            id: "spoofing-arp", title: "Spoofing 개요와 ARP Spoofing",
            content: `<p><strong>Spoofing</strong>은 신뢰받는 사용자·Host·주소인 것처럼 신원이나 통신 정보를 위조하는 공격입니다.</p><div class="table-scroll"><table class="concept-table"><thead><tr><th>종류</th><th>위조 대상</th><th>계층</th></tr></thead><tbody><tr><td><strong>ARP</strong></td><td>IP–MAC 대응</td><td>2계층</td></tr><tr><td><strong>IP</strong></td><td>Source IP</td><td>3계층</td></tr><tr><td><strong>Email</strong></td><td>메일 발신자</td><td>7계층</td></tr><tr><td><strong>Web</strong></td><td>가짜 Web 화면·URL</td><td>7계층</td></tr><tr><td><strong>DNS</strong></td><td>Domain의 IP 응답</td><td>7계층</td></tr></tbody></table></div><p>ARP는 인증 없이 Reply를 수용하고 Cache를 갱신하므로 공격자가 Gateway IP를 자신의 MAC과 연결하면 MITM 경로를 만들 수 있습니다. Static ARP, Port Security, DAI, ARP 감시와 암호화로 대응합니다.</p>`
          },
          {
            id: "ip-spoofing", title: "IP Spoofing과 대응",
            content: `<p><strong>IP Spoofing</strong>은 Source IP를 신뢰 관계가 설정된 Host 주소로 위조하여 접근통제나 세션을 우회하려는 공격입니다. 과거 rlogin·rsh 같은 IP 기반 신뢰 서비스에서 특히 위험했습니다.</p><ol><li>신뢰 Host의 주소와 통신 특성을 파악합니다.</li><li>신뢰 Host의 통신을 방해하고 그 주소로 Packet을 위조합니다.</li><li>응답을 직접 받지 못하는 Blind 공격은 TCP Sequence 추론이 필요할 수 있습니다.</li></ol><div class="important-box"><span class="box-title">대응</span><p><strong>Ingress/Egress Filtering·uRPF</strong>, IP 기반 신뢰 제거, 강한 상호인증, 무작위 TCP ISN, IPsec을 적용합니다.</p></div>`
          },
          {
            id: "dns-email-spoofing", title: "DNS·Email Spoofing",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>공격</th><th>동작</th><th>대응</th></tr></thead><tbody><tr><td><strong>DNS Spoofing</strong></td><td>정상 DNS보다 먼저 위조 Response를 보내 잘못된 IP를 Cache하게 함</td><td>DNSSEC, Transaction ID·Source Port 무작위화, 안전한 Resolver, Cache·hosts 점검</td></tr><tr><td><strong>Email Spoofing</strong></td><td>From·Envelope 정보를 위조해 신뢰받는 발신자로 위장</td><td>SPF·DKIM·DMARC, Content Filtering, Anti-Malware, 전자서명</td></tr></tbody></table></div><p>DNS Spoofing은 UDP의 비연결성과 먼저 도착한 응답을 받아들이는 동작을 악용해 사용자를 위조 Web Server로 유도할 수 있습니다.</p>`
          },
          {
            id: "session-hijacking-overview", title: "Session Hijacking 개요",
            content: `<p><strong>Session Hijacking</strong>은 인증이 완료된 사용자의 연결 상태나 Session Identifier를 탈취하여 별도의 로그인 없이 정상 사용자처럼 통신하는 공격입니다.</p><div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>탈취 대상</th><th>대표 방식</th></tr></thead><tbody><tr><td><strong>TCP Connection Hijacking</strong></td><td>IP·Port·Sequence 상태</td><td>순서번호 추론, Sniffing 기반 동기화</td></tr><tr><td><strong>HTTP Session Hijacking</strong></td><td>Cookie·URL·Hidden Field의 Session ID</td><td>Session ID 탈취·고정 후 권한 도용</td></tr></tbody></table></div><p>OTP는 재전송 공격을 줄이지만 인증 뒤 형성된 세션 자체가 탈취되면 별도 보호가 필요합니다.</p>`
          },
          {
            id: "tcp-sequence-hijacking", title: "순서번호 추론 기반 TCP Hijacking",
            content: `<p>초기 TCP처럼 ISN 생성 규칙이 예측 가능하면 공격자는 기존 통신을 보지 않고도 다음 순서번호를 추정해 신뢰받는 Client인 것처럼 Packet을 위조할 수 있습니다.</p><ol><li>여러 연결로 Server의 ISN 변화 패턴을 파악합니다.</li><li>정상 Client를 일시적으로 통신하지 못하게 하고 그 주소를 위조합니다.</li><li>예측한 ACK·Sequence로 연결을 성립시켜 Data나 명령을 주입합니다.</li></ol><p>응답을 직접 보지 못하면 <strong>Blind Hijacking</strong>이 되며 강한 무작위 ISN과 암호학적 세션 보호가 핵심입니다.</p>`
          },
          {
            id: "sniffing-tcp-hijacking", title: "Sniffing 기반 TCP Hijacking",
            content: `<p>공격자가 Client–Server 사이 Packet을 Sniffing하면 현재 Sequence·ACK·Window 값을 관찰해 유효 범위의 Packet을 주입할 수 있습니다.</p><ul><li><strong>동기화</strong>: 양쪽 Sequence가 상대 ACK와 수신 Window 안에 있는 정상 상태</li><li><strong>비동기화 유도</strong>: 위조 Data나 RST로 정상 Client와 Server의 순서 상태를 어긋나게 함</li><li><strong>ACK Storm</strong>: 기대하지 않은 Sequence에 서로 ACK를 반복하며 Packet이 급증</li><li><strong>재동기화</strong>: 공격자가 Sequence를 조정하거나 한쪽을 배제하고 세션 유지</li></ul><p>RST로 정상 Client를 끊고 Server에 위조 Packet을 주입하거나 양쪽을 계속 속여 중간에서 Relay할 수 있습니다.</p>`
          },
          {
            id: "hijacking-defense-http", title: "Hijacking 탐지·방어와 HTTP Session",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>영역</th><th>대응</th></tr></thead><tbody><tr><td><strong>탐지</strong></td><td>비정상 Retransmission, ACK Storm, Packet 순서 변화, 예상 밖 RST, 접속 위치·User-Agent 급변</td></tr><tr><td><strong>TCP 보호</strong></td><td>SSH·TLS·VPN, 강한 상호인증, 무작위 ISN, Patch와 Network Segmentation</td></tr><tr><td><strong>HTTP 보호</strong></td><td>전 구간 HTTPS, 로그인·권한상승 후 Session ID 재발급, 짧은 만료, Logout 무효화</td></tr><tr><td><strong>Cookie</strong></td><td>Secure·HttpOnly·SameSite, URL에 Session ID 노출 금지</td></tr></tbody></table></div><p>HTTP Session ID는 Web Server가 사용자를 식별하는 값이므로 기밀성·예측 불가능성·수명 관리가 중요합니다.</p>`
          },
          {
            id: "remote-exploit", title: "Remote Attack·Trojan·Exploit",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>용어</th><th>설명</th></tr></thead><tbody><tr><td><strong>Local Attack</strong></td><td>대상 시스템에 이미 접속한 뒤 로컬 권한으로 수행</td></tr><tr><td><strong>Remote Attack</strong></td><td>정상 접근권한 없이 네트워크를 통해 수행</td></tr><tr><td><strong>Trojan</strong></td><td>정상 프로그램처럼 위장해 실행을 유도하고 정보 탈취·원격 제어 수행</td></tr><tr><td><strong>Exploit</strong></td><td>Software·Hardware의 Bug나 취약점을 이용하도록 만든 명령·Script·Code·Data 또는 공격 행위</td></tr></tbody></table></div><p>Exploit은 실행 위치에 따라 Local·Remote, 목적에 따라 <strong>EoP·DoS·Spoofing</strong> 등으로 나뉩니다. 개발자에게 알려지지 않아 Patch가 없는 시점에 악용되는 공격이 <strong>Zero-Day Exploit</strong>입니다.</p><div class="important-box"><span class="box-title">SECTION 26 핵심 흐름</span><p><strong>수동·능동 위협 → DoS/DDoS·DRDoS → Botnet·Flooding → Footprinting·Scanning·Enumeration → Sniffing → Spoofing → TCP·HTTP Session Hijacking → Remote Attack·Exploit</strong></p></div>`
          }
        ],
        content: ""
      },
      {
        id: "section-27", number: 27, title: "IDS/IPS",
        subtopics: [
          {
            id: "ids-overview", title: "IDS 개요",
            content: `<p><strong>IDS(Intrusion Detection System, 침입탐지시스템)</strong>는 시스템과 네트워크에서 발생하는 사건을 실시간으로 감시·분석하여 비인가 사용, 오용, 남용과 보안정책 위반을 탐지하고 관리자에게 알리는 보안시스템입니다.</p><ul><li>정보시스템의 <strong>기밀성·무결성·가용성</strong>을 위협하는 행위를 관찰합니다.</li><li>방화벽을 통과했거나 내부에서 발생한 침입까지 탐지하여 경보와 대응 정보를 제공합니다.</li><li>기본 목적은 <strong>탐지와 경보</strong>이며, 자동 차단이 중심인 IPS와 구분합니다.</li></ul><div class="important-box"><span class="box-title">핵심</span><p><strong>Firewall = 접근통제 / IDS = 탐지·경보 / IPS = 탐지 후 실시간 차단</strong></p></div>`
          },
          {
            id: "ids-characteristics", title: "IDS 특징과 역할",
            content: `<ul><li>네트워크 Packet, 운영체제·응용프로그램 Log와 사용자 행위를 지속적으로 수집합니다.</li><li>알려진 공격 Pattern 또는 정상 상태와의 차이를 분석해 침입 가능성을 판단합니다.</li><li>공격 징후, 발생 시각, 대상, 공격 방법을 기록하여 사고 분석과 복구를 지원합니다.</li><li>내부자의 권한 오용과 방화벽을 우회한 공격을 보완할 수 있습니다.</li><li>탐지 정확도를 높이려면 탐지 규칙·정상 기준을 지속적으로 갱신하고 경보를 분석해야 합니다.</li></ul><p>IDS는 침입을 완전히 막는 단독 수단이 아니라 방화벽·백신·접근통제·Log 분석과 함께 사용하는 <strong>보완적 탐지 통제</strong>입니다.</p>`
          },
          {
            id: "ids-components", title: "IDS 구성요소",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>구성요소</th><th>기능</th></tr></thead><tbody><tr><td><strong>정보수집</strong><br>Sensor·Agent</td><td>Packet, Audit Trail, System·Application Log, 사용자 행위 등 탐지 자료 수집</td></tr><tr><td><strong>탐지·분석</strong><br>Analysis Engine</td><td>Signature·Rule·통계·Profile을 이용해 정상과 공격을 판정</td></tr><tr><td><strong>대응</strong></td><td>경보·Log·보고, 관리자 통보 또는 Session 차단·Rule 변경 등 수행</td></tr><tr><td><strong>관리 Console</strong></td><td>정책·Rule 설정, Event 상관분석, 경보 확인과 보고서 작성</td></tr></tbody></table></div><p><strong>수집 → 분석·판정 → 경보·대응 → 관리·개선</strong>의 순환 구조로 동작합니다.</p>`
          },
          {
            id: "ids-classification", title: "IDS 분류 기준",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>분류 기준</th><th>종류</th></tr></thead><tbody><tr><td><strong>탐지 방법</strong></td><td>오용 탐지(Misuse Detection), 이상 탐지(Anomaly Detection)</td></tr><tr><td><strong>데이터 수집원</strong></td><td>NIDS, HIDS, Hybrid·Distributed IDS</td></tr><tr><td><strong>탐지 시점</strong></td><td>사후 분석(Batch), 실시간 분석(Real-Time)</td></tr><tr><td><strong>대응 방법</strong></td><td>수동적 대응, 능동적 대응</td></tr></tbody></table></div><p>한 IDS는 여러 기준을 동시에 가질 수 있습니다. 예를 들어 네트워크 Packet을 실시간으로 Signature와 비교하고 경보를 보내는 시스템은 <strong>NIDS + 실시간 + 오용 탐지 + 수동 대응</strong>입니다.</p>`
          },
          {
            id: "misuse-detection", title: "오용 탐지",
            content: `<p><strong>오용 탐지(Misuse Detection)</strong>는 이미 알려진 공격의 Pattern·Signature·Rule을 미리 등록하고 수집된 Event가 일치하는지 검사하는 방식입니다.</p><div class="table-scroll"><table class="concept-table"><thead><tr><th>모델</th><th>원리</th></tr></thead><tbody><tr><td><strong>전문가 시스템</strong></td><td>If–Then 형태의 침입 규칙으로 Event를 판정</td></tr><tr><td><strong>상태 전이 모델</strong></td><td>공격이 진행되며 변하는 시스템 상태와 Event 순서를 추적</td></tr><tr><td><strong>Pattern Matching</strong></td><td>Packet·Log를 알려진 공격 Signature와 비교</td></tr></tbody></table></div><p>알려진 공격은 빠르고 정확하게 탐지해 <strong>False Positive가 비교적 낮지만</strong>, Rule에 없는 신종·변형 공격과 Zero-Day에는 취약합니다.</p>`
          },
          {
            id: "anomaly-detection", title: "이상 탐지",
            content: `<p><strong>이상 탐지(Anomaly Detection)</strong>는 정상 사용자의 행동·Traffic·자원 사용량을 Profile로 만든 뒤 기준에서 크게 벗어난 행위를 침입으로 판단합니다.</p><div class="table-scroll"><table class="concept-table"><thead><tr><th>모델</th><th>원리</th></tr></thead><tbody><tr><td><strong>통계적 분석</strong></td><td>평균·분산·빈도·임계값 등 정상 통계와 현재 행동 비교</td></tr><tr><td><strong>예측 가능한 Pattern 생성</strong></td><td>정상 Event의 순서·상관관계를 학습하고 예측에서 벗어난 행동 탐지</td></tr><tr><td><strong>신경망 모델</strong></td><td>정상·비정상 사례를 학습하여 새로운 Event를 분류</td></tr></tbody></table></div><p>예: 로그인 연속 실패, 평소보다 많은 Mail 전송, 장시간 높은 CPU 사용, 평균과 다른 Traffic 비율. 알려지지 않은 공격도 찾을 수 있지만 정상 기준 설정이 어렵고 <strong>False Positive가 많아질 수 있습니다.</strong></p>`
          },
          {
            id: "detection-method-comparison", title: "오용 탐지와 이상 탐지 비교",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>오용 탐지</th><th>이상 탐지</th></tr></thead><tbody><tr><td><strong>판단 기준</strong></td><td>알려진 공격 Signature·Rule</td><td>정상 행동 Profile과의 편차</td></tr><tr><td><strong>강점</strong></td><td>알려진 공격을 빠르고 정확하게 판별</td><td>신종·변형·Zero-Day 징후 탐지 가능</td></tr><tr><td><strong>약점</strong></td><td>Signature가 없는 공격 탐지 어려움</td><td>정상 기준 학습·임계값 설정이 어려움</td></tr><tr><td><strong>대표 오류</strong></td><td>False Negative 증가 가능</td><td>False Positive 증가 가능</td></tr><tr><td><strong>관리</strong></td><td>Signature DB 지속 갱신</td><td>Profile·Threshold 지속 조정</td></tr></tbody></table></div><div class="important-box"><span class="box-title">구분 암기</span><p><strong>오용 = 공격을 안다 / 이상 = 정상을 안다</strong></p></div>`
          },
          {
            id: "ids-response", title: "수동적·능동적 대응",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>수동적 대응</th><th>능동적 대응</th></tr></thead><tbody><tr><td><strong>동작</strong></td><td>정보를 수집·기록하고 관리자에게 알림</td><td>탐지 즉시 시스템이 차단·격리 등 수행</td></tr><tr><td><strong>방법</strong></td><td>Console 경보, Log, 상세 분석, E-mail·전화·SNMP Trap</td><td>Session 종료, Packet Drop, Firewall Rule 변경, 공격 Host 차단</td></tr><tr><td><strong>장점</strong></td><td>정상 사용자를 잘못 차단할 위험이 낮음</td><td>피해 확산 전에 빠르게 대응</td></tr><tr><td><strong>주의점</strong></td><td>관리자 판단과 조치까지 시간이 필요</td><td>오탐 시 정상 Service를 중단할 수 있음</td></tr></tbody></table></div><p>자동 대응은 신속하지만 탐지 결과와 정책의 신뢰도가 충분해야 하며, 중요한 차단은 단계적 대응과 관리자 검토를 함께 설계합니다.</p>`
          },
          {
            id: "nids", title: "NIDS",
            content: `<p><strong>NIDS(Network-based IDS)</strong>는 Network Segment를 흐르는 Packet의 Header·Payload와 통신 Pattern을 Sensor의 NIC <strong>Promiscuous Mode</strong>로 수집·분석합니다.</p><ul><li><strong>장점</strong>: 소수 Sensor로 여러 Host 감시, 운영체제 독립적, 관리가 비교적 쉬움, 공격자가 개별 Host의 감사자료를 지우더라도 Network 기록 보존 가능</li><li><strong>단점</strong>: 암호화 Traffic의 Payload 분석 곤란, 고속·대용량 또는 Switching 환경에서 Packet 누락 가능, Host 내부 행위·파일 변조를 알기 어려움</li></ul><p>SPAN·Port Mirroring 또는 Network TAP을 이용해 Traffic을 복제하여 Sensor에 전달할 수 있습니다.</p>`
          },
          {
            id: "hids", title: "HIDS",
            content: `<p><strong>HIDS(Host-based IDS)</strong>는 개별 Host에 Agent를 설치하여 System Call, Audit Log, Application Log, 파일 무결성, 사용자 행위 등을 분석합니다. 여러 Host를 함께 관리하면 Multi-host 기반으로 구성할 수 있습니다.</p><ul><li><strong>장점</strong>: 특정 Host의 행위를 정밀하게 탐지, 암호화 통신도 Host에서 복호화된 뒤의 Event 확인 가능, 파일·권한 변경과 내부 사용자 행위 탐지</li><li><strong>단점</strong>: Host마다 설치·관리 필요, CPU·Memory 등 자원 소모, OS별 호환성 필요, 침해 시 Agent·Log가 변조될 위험</li></ul><p>Web·DB·인증 Server처럼 <strong>중요도가 높은 시스템</strong>에 우선 설치합니다.</p>`
          },
          {
            id: "nids-hids-comparison", title: "NIDS와 HIDS 비교",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>NIDS</th><th>HIDS</th></tr></thead><tbody><tr><td><strong>데이터</strong></td><td>Network Packet·Session</td><td>System·Application Log, File, Process</td></tr><tr><td><strong>감시 범위</strong></td><td>Segment의 여러 Host</td><td>설치된 한 Host</td></tr><tr><td><strong>암호화 Traffic</strong></td><td>Payload 분석 어려움</td><td>종단에서 복호화된 Event 분석 가능</td></tr><tr><td><strong>성능 영향</strong></td><td>감시 대상 Host 영향이 작음</td><td>Agent가 Host 자원 사용</td></tr><tr><td><strong>강점</strong></td><td>Network Scan·Attack 흐름 파악</td><td>내부 행위·파일 변조·사용자 추적</td></tr></tbody></table></div><p>두 방식을 결합하면 Network 전후 맥락과 Host 내부 결과를 연계해 탐지 정확도를 높일 수 있습니다.</p>`
          },
          {
            id: "detection-timing", title: "탐지 시점에 따른 분류",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>설명</th><th>한계</th></tr></thead><tbody><tr><td><strong>사후 분석 시스템</strong></td><td>수집한 감사자료를 일정 시점에 일괄 분석</td><td>침입 발생 즉시 대응하기 어려움</td></tr><tr><td><strong>실시간 탐지 시스템</strong></td><td>정보 수집과 동시에 Event·Traffic을 분석하고 경보</td><td>대량 Traffic 처리 성능과 낮은 지연이 필요</td></tr></tbody></table></div><p>실시간이라고 해서 항상 차단하는 것은 아닙니다. <strong>실시간 탐지</strong>는 분석 시점, <strong>능동 대응·IPS</strong>는 탐지 후 행동을 의미합니다.</p>`
          },
          {
            id: "nids-placement", title: "NIDS 설치 위치",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>위치</th><th>관찰 내용과 특징</th></tr></thead><tbody><tr><td><strong>Router 앞</strong></td><td>Internet에서 들어오는 모든 공격 시도 관찰, 자료량이 매우 많음</td></tr><tr><td><strong>Router 뒤·Firewall 앞</strong></td><td>Router Filtering을 통과한 의심 Traffic과 Firewall 대상 공격 확인</td></tr><tr><td><strong>Firewall 뒤</strong></td><td>차단을 통과한 위험도가 높은 Traffic과 내부 정책 위반 분석</td></tr><tr><td><strong>내부 Network</strong></td><td>내부자 공격, Malware 확산, Firewall을 우회한 East–West Traffic 탐지</td></tr><tr><td><strong>DMZ</strong></td><td>외부 공개 Web·Mail·DNS Server에 대한 공격과 침해 징후 감시</td></tr></tbody></table></div><p>전체 Network에 하나만 두기보다 중요 Segment에 선택적으로 배치하며, HIDS는 별도 Network 위치보다 중요 Server 자체에 설치합니다.</p>`
          },
          {
            id: "false-positive-negative", title: "False Positive·False Negative",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>실제 상태</th><th>탐지 결과</th><th>오류</th></tr></thead><tbody><tr><td>정상</td><td>공격으로 경보</td><td><strong>False Positive(오탐)</strong></td></tr><tr><td>공격</td><td>정상으로 통과</td><td><strong>False Negative(미탐)</strong></td></tr><tr><td>공격</td><td>공격으로 탐지</td><td>True Positive</td></tr><tr><td>정상</td><td>정상으로 판단</td><td>True Negative</td></tr></tbody></table></div><p>Threshold를 민감하게 하면 더 많은 공격을 잡지만 False Positive가 늘 수 있고, 느슨하게 하면 경보는 줄지만 False Negative가 늘 수 있습니다. 환경별 Rule Tuning이 필요합니다.</p>`
          },
          {
            id: "base-rate-fallacy", title: "기본비율 오류",
            content: `<p><strong>기본비율 오류(Base-Rate Fallacy)</strong>는 실제 공격의 발생 비율이 매우 낮은 환경에서 탐지 정확도가 높아도 전체 경보 중 오탐이 큰 비중을 차지하는 현상입니다.</p><p>예를 들어 정상 Event가 압도적으로 많으면 작은 False Positive Rate도 많은 경보를 만들어 분석가의 피로와 진짜 공격 누락을 유발합니다.</p><div class="important-box"><span class="box-title">개선</span><p><strong>자산 중요도·위협정보·다른 Log와 상관분석 → Rule·Threshold 조정 → 반복 오탐 억제 → 경보 우선순위화</strong></p></div>`
          },
          {
            id: "honeypot-overview", title: "허니팟 개요",
            content: `<p><strong>Honeypot</strong>은 실제 업무 기능 없이 공격자가 관심을 가질 만한 Service·취약점을 가진 것처럼 보이게 만든 <strong>미끼형 보안자원</strong>입니다. 직접적인 Firewall 대체 수단이 아니라 공격을 유인해 탐지하고 정보를 수집하는 관찰 장치입니다.</p><ul><li>정상 사용 목적이 거의 없으므로 Honeypot과의 상호작용 자체가 의심 징후가 됩니다.</li><li>공격 도구·절차·명령·Exploit을 관찰해 Signature와 방어전략 개선에 활용합니다.</li><li>운영시스템과 격리하고 외부 공격의 중계지로 악용되지 않도록 Outbound Traffic을 통제해야 합니다.</li></ul>`
          },
          {
            id: "honeynet-operation", title: "Honeynet과 설계목표",
            content: `<p><strong>Honeynet</strong>은 여러 Honeypot과 감시·통제 장비로 구성한 미끼 Network로, 공격자의 행동과 공격 방법을 더 넓게 관찰합니다.</p><ol><li>중요 시스템으로 접근하는 공격자를 미끼 자원으로 유도합니다.</li><li>공격 과정과 사용 기법을 상세히 수집합니다.</li><li>공격자가 충분한 시간 머물게 하여 행동을 관찰합니다.</li><li>분석 결과를 IDS/IPS Rule, Patch 우선순위와 사고대응에 반영합니다.</li></ol><p><strong>Data Control</strong>로 외부 피해를 막고 <strong>Data Capture</strong>로 Packet·Log·명령을 수집하는 것이 핵심입니다.</p>`
          },
          {
            id: "honeypot-pros-cons", title: "허니팟 특징과 장단점",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>장점</th><th>단점</th></tr></thead><tbody><tr><td>정상 Traffic이 적어 수집 자료의 공격 관련성이 높음</td><td>Honeypot으로 유입되지 않은 공격은 볼 수 없음</td></tr><tr><td>오탐이 적고 새로운 공격·Zero-Day 징후 수집 가능</td><td>공격자가 미끼임을 알아채면 우회·역공격 가능</td></tr><tr><td>운영시스템의 성능에 미치는 영향이 작음</td><td>격리·감시가 부족하면 다른 시스템 공격의 발판이 될 수 있음</td></tr></tbody></table></div><p><strong>Enticement</strong>는 이미 공격 의도가 있는 사람을 미끼로 유인하는 것이고, <strong>Entrapment</strong>는 원래 범행 의도가 없던 사람에게 범행을 유도하는 개념으로 구분합니다.</p>`
          },
          {
            id: "snort-overview", title: "Snort 개요",
            content: `<p><strong>Snort</strong>는 실시간 Traffic 분석과 Packet Logging을 수행하는 대표적인 Open Source NIDS/IPS입니다. Protocol 분석, Content 검색과 Rule 기반 Pattern Matching으로 Port Scan, Buffer Overflow, CGI Attack, OS Fingerprinting 등 다양한 공격 징후를 탐지합니다.</p><ul><li>Rule·Signature를 갱신하거나 관리자가 Local Rule을 추가할 수 있습니다.</li><li>Packet Sniffer, Packet Logger, NIDS/Inline IPS Mode로 활용할 수 있습니다.</li><li>Rule은 크게 <strong>Header와 Option(Body)</strong>으로 구성됩니다.</li></ul>`
          },
          {
            id: "snort-rule-format", title: "Snort Rule 구조",
            content: `<div class="code-block"><code>alert tcp any any -&gt; 192.168.159.0/24 80 (msg:"Web alert"; content:"attack"; nocase; sid:1001001; rev:1;)</code></div><div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>포함 항목</th></tr></thead><tbody><tr><td><strong>Header</strong></td><td>Action, Protocol, Source IP·Port, Direction, Destination IP·Port</td></tr><tr><td><strong>Option</strong></td><td>Message, 탐지할 Content·Flag·Flow, Rule 식별자와 개정번호 등</td></tr></tbody></table></div><p>Header가 어떤 Packet을 검사할지 좁히고, 괄호 안 Option이 Payload·상태 등 세부 탐지 조건과 출력 내용을 정의합니다.</p>`
          },
          {
            id: "snort-actions", title: "Snort Action",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>Action</th><th>의미</th></tr></thead><tbody><tr><td><strong>alert</strong></td><td>경보를 발생시키고 Packet을 Log에 기록</td></tr><tr><td><strong>log</strong></td><td>Packet을 기록</td></tr><tr><td><strong>pass</strong></td><td>Packet을 무시</td></tr><tr><td><strong>activate</strong></td><td>경보 후 지정한 Dynamic Rule 활성화</td></tr><tr><td><strong>dynamic</strong></td><td>Activate Rule에 의해 활성화되어 Logging</td></tr><tr><td><strong>drop</strong></td><td>Packet을 차단하고 기록</td></tr><tr><td><strong>reject</strong></td><td>차단 후 TCP RST 또는 ICMP 오류 응답</td></tr><tr><td><strong>sdrop</strong></td><td>기록·응답 없이 조용히 차단</td></tr></tbody></table></div><p>지원 Action은 Snort Version과 실행 Mode에 따라 달라질 수 있으며, <strong>drop·reject·sdrop</strong>은 Inline IPS 운용과 연결됩니다.</p>`
          },
          {
            id: "snort-header", title: "Snort Header 항목",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>항목</th><th>표현 예</th></tr></thead><tbody><tr><td><strong>Protocol</strong></td><td>tcp, udp, icmp, ip</td></tr><tr><td><strong>IP Address</strong></td><td>단일 IP, <code>10.10.10.0/24</code>, 목록, <code>any</code>, <code>!</code> 부정</td></tr><tr><td><strong>Port</strong></td><td><code>80</code>, <code>1:1023</code>, <code>1024:</code>, <code>:1024</code>, <code>any</code></td></tr><tr><td><strong>Direction</strong></td><td><code>-&gt;</code> 단방향, <code>&lt;&gt;</code> 양방향</td></tr></tbody></table></div><p>Source와 Destination을 뒤바꾸지 않도록 Rule의 방향을 확인하고, CIDR·목록·부정 연산자로 검사 범위를 구체화합니다.</p>`
          },
          {
            id: "snort-options", title: "Snort 주요 Option",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>Option</th><th>기능</th></tr></thead><tbody><tr><td><strong>msg</strong></td><td>경보에 표시할 Message</td></tr><tr><td><strong>content</strong></td><td>Payload에서 찾을 문자열·Byte Pattern</td></tr><tr><td><strong>offset / depth</strong></td><td>검색 시작 위치 / 검색할 최대 범위</td></tr><tr><td><strong>nocase</strong></td><td>영문 대·소문자를 구분하지 않음</td></tr><tr><td><strong>flags</strong></td><td>TCP URG·ACK·PSH·RST·SYN·FIN Flag 조건</td></tr><tr><td><strong>flow</strong></td><td>established, to_server 등 TCP Session 방향·상태 지정</td></tr><tr><td><strong>sid / rev</strong></td><td>Rule 고유 ID / Rule 개정번호</td></tr><tr><td><strong>reference / classtype</strong></td><td>외부 취약점 참조 / 공격 분류와 우선순위</td></tr></tbody></table></div>`
          },
          {
            id: "snort-examples", title: "Snort Rule 예시",
            content: `<p><strong>FTP root 계정 접근 시도</strong></p><div class="code-block"><code>alert tcp any any -&gt; 10.10.10.0/24 21 (msg:"FTP root user access"; content:"USER root"; nocase; sid:1001001; rev:1;)</code></div><p>FTP Control 연결의 Payload에서 대·소문자와 관계없이 <code>USER root</code>를 찾습니다. 평문 FTP는 자격증명이 노출될 수 있으므로 안전한 Protocol로 전환해야 합니다.</p><p><strong>NULL Scan 탐지 개념</strong></p><div class="code-block"><code>alert tcp any any -&gt; 10.10.10.0/24 any (msg:"NULL Scan Detect"; flags:0; sid:1001002; rev:1;)</code></div><p>TCP 제어 Flag가 하나도 설정되지 않은 비정상 Packet을 탐지합니다. Rule 문법은 사용하는 Snort Version에 맞게 검증해야 합니다.</p>`
          },
          {
            id: "ips-overview", title: "IPS 개요",
            content: `<p><strong>IPS(Intrusion Prevention System, 침입방지시스템)</strong>는 Network 또는 Host에서 침입·악성 Traffic을 탐지한 뒤 <strong>실시간으로 차단</strong>하여 피해를 예방하는 능동형 보안시스템입니다.</p><ul><li>IDS의 탐지 기능에 Packet Drop, Session 종료, Host 격리, Rule 변경 같은 예방 기능을 결합합니다.</li><li>Network 기반 IPS는 Traffic 경로에 Inline으로 배치하고, Host 기반 IPS는 개별 시스템의 Process·System Call·행위를 통제합니다.</li><li>Firewall·IDS·Secure OS·Anti-Malware 등 여러 보안기술을 결합할 수 있습니다.</li></ul><p>IPS는 즉시 차단할 수 있으므로 탐지 정확도, 가용성, 지연시간과 우회 가능성을 함께 고려해야 합니다.</p>`
          },
          {
            id: "ips-necessity", title: "IPS 필요성과 한계",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>기존 통제</th><th>한계</th><th>IPS 보완</th></tr></thead><tbody><tr><td><strong>Firewall</strong></td><td>IP·Port 접근통제만으로 허용 Service 내부의 응용계층 공격 판별이 어려움</td><td>Payload·Session·행위 분석 후 차단</td></tr><tr><td><strong>IDS</strong></td><td>실시간 탐지는 가능하지만 기본적으로 경보 중심</td><td>탐지 즉시 Drop·Reset·격리</td></tr><tr><td><strong>Anti-Virus</strong></td><td>알려진 악성코드 Signature 의존</td><td>Network 행위·Exploit Pattern과 이상 행위 연계</td></tr><tr><td><strong>L7 Switch·DDoS 장비</strong></td><td>주로 부하분산·대용량 공격 완화에 초점</td><td>Session별 침입 탐지와 세밀한 차단</td></tr></tbody></table></div><p>다만 Zero-Day를 완벽히 차단하는 장비는 없으므로 Patch·Segmentation·EDR·Log 분석과 다층 방어가 필요합니다.</p>`
          },
          {
            id: "firewall-ids-ips-comparison", title: "Firewall·IDS·IPS 비교",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>Firewall</th><th>IDS</th><th>IPS</th></tr></thead><tbody><tr><td><strong>목적</strong></td><td>접근통제·허가</td><td>침입 탐지·경보</td><td>침입 탐지·차단</td></tr><tr><td><strong>배치</strong></td><td>Traffic 경로 Inline</td><td>주로 Traffic 복제·Host Agent</td><td>주로 Traffic 경로 Inline·Host Agent</td></tr><tr><td><strong>Packet 차단</strong></td><td>정책 기반 가능</td><td>기본적으로 불가</td><td>탐지 결과에 따라 가능</td></tr><tr><td><strong>Payload 분석</strong></td><td>기본 Packet Filtering은 제한적</td><td>가능</td><td>가능</td></tr><tr><td><strong>오용·이상 탐지</strong></td><td>제한적</td><td>가능</td><td>가능</td></tr><tr><td><strong>주의점</strong></td><td>내부·허용 Service 공격에 약함</td><td>오탐 분석과 별도 대응 필요</td><td>오탐 차단·병목·장애가 Service에 직접 영향</td></tr></tbody></table></div><div class="important-box"><span class="box-title">SECTION 27 핵심 흐름</span><p><strong>정보수집 → 오용·이상 탐지 → NIDS·HIDS → 오탐·미탐 조정 → Honeypot으로 공격 유인·관찰 → Snort Rule 분석 → IPS의 실시간 차단</strong></p></div>`
          }
        ],
        content: ""
      },
      {
        id: "section-28", number: 28, title: "침입차단시스템(Firewall)",
        subtopics: [
          {
            id: "firewall-overview", title: "방화벽 개요",
            content: `<p><strong>침입차단시스템(Firewall, 방화벽)</strong>은 서로 다른 신뢰 수준의 네트워크 경계에 설치하여 <strong>인가된 통신만 허용하고 비인가 통신은 차단</strong>하는 보안시스템입니다.</p><ul><li>외부 Internet과 내부 Network 사이를 통과하는 Inbound·Outbound Traffic을 보안정책에 따라 통제합니다.</li><li>내부 Network를 보호하는 <strong>Choke Point</strong>이자 모든 Traffic이 거쳐야 하는 단일 통제지점으로 구성합니다.</li><li>통신을 허용·차단하고 기록함으로써 접근통제, 감사와 보안정책 집행의 중심 역할을 합니다.</li></ul><div class="important-box"><span class="box-title">기본 조건</span><p><strong>모든 Traffic은 방화벽을 통과해야 하며, 허용된 Traffic만 통과하고, 방화벽 자체도 안전해야 합니다.</strong></p></div>`
          },
          {
            id: "firewall-characteristics", title: "방화벽 특징",
            content: `<ul><li><strong>집중관리</strong>: 여러 시스템의 보안기능을 경계의 한 지점에서 통합하여 관리합니다.</li><li><strong>보안정책 구현</strong>: Source·Destination·Protocol·Port·사용자·Service·시간대 등 정의된 규칙으로 통신을 판정합니다.</li><li><strong>내부망 보호</strong>: 외부로부터 내부 Network의 구조와 Host 정보를 숨기고 불필요한 접근을 제한합니다.</li><li><strong>감사자료 제공</strong>: 허용·차단 Traffic과 정책 위반 시도를 기록하여 사고 분석에 활용합니다.</li></ul><p>방화벽은 단독으로 모든 공격을 막는 장비가 아니라 IDS/IPS, Anti-Malware, VPN, 접근통제와 함께 사용하는 <strong>경계 보안 통제</strong>입니다.</p>`
          },
          {
            id: "firewall-access-auth-log", title: "접근통제·인증·감사",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>기능</th><th>내용</th></tr></thead><tbody><tr><td><strong>접근통제</strong></td><td>허용된 Host·Service만 외부와 통신하게 하고 Packet의 IP Address·Port 등을 분석하여 접근을 허용 또는 차단</td></tr><tr><td><strong>사용자 인증</strong></td><td>ID/Password, 인증서·Token 등으로 사용자를 식별·검증한 뒤 Service 이용 권한 부여</td></tr><tr><td><strong>감사·Log</strong></td><td>Traffic, 접속 시도, 정책 위반, 관리자 변경을 기록하여 사용 현황 분석과 침해사고 추적 지원</td></tr></tbody></table></div><p>Log는 방화벽 내부에만 두지 말고 중앙 Log Server로 전송하고 시간 동기화·무결성 보호·보존주기를 적용합니다.</p>`
          },
          {
            id: "firewall-direction-user-behavior", title: "방향·사용자·행위 제어",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>기능</th><th>판정 기준과 예</th></tr></thead><tbody><tr><td><strong>방향 제어</strong></td><td>Inbound·Outbound 방향에 따라 요청이 들어오거나 나갈 수 있는 경로와 Service를 통제</td></tr><tr><td><strong>사용자 제어</strong></td><td>사용자·Group·인증 결과에 따라 접근 가능한 Service와 자원 제한</td></tr><tr><td><strong>행위 제어</strong></td><td>Mail의 Spam 차단, FTP 명령 제한, 특정 Web Category 차단 등 Service 사용 방법 통제</td></tr></tbody></table></div><p>동일한 IP·Port라도 사용자와 Traffic 방향, Session 상태에 따라 서로 다른 정책을 적용할 수 있습니다.</p>`
          },
          {
            id: "firewall-privacy-service-encryption", title: "개인정보·서비스·암호화",
            content: `<ul><li><strong>Privacy 보호</strong>: 내부 Network 정보와 DNS·System 정보를 외부에서 직접 알기 어렵게 하여 정보노출을 줄입니다.</li><li><strong>Service 통제</strong>: 안전하지 않거나 불필요한 Service를 Filtering하여 공격표면을 줄입니다.</li><li><strong>데이터 암호화</strong>: 방화벽 사이에 VPN Tunnel을 구성하여 전송구간의 기밀성과 무결성을 보호할 수 있습니다.</li><li><strong>콘텐츠 통제</strong>: Proxy·Application Gateway와 연계하여 URL, File Type, 명령과 Payload를 검사합니다.</li></ul><p>NAT는 내부 주소 노출을 줄이는 데 도움을 주지만 그 자체가 인증·암호화 기능은 아니므로 보안정책을 별도로 적용해야 합니다.</p>`
          },
          {
            id: "firewall-limitations", title: "방화벽의 한계",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>한계</th><th>설명</th></tr></thead><tbody><tr><td><strong>허용 Service 공격</strong></td><td>허용된 Web·Mail Traffic 안의 Virus, Worm, XSS, 악성 File 등은 단순 IP·Port Filtering만으로 탐지하기 어려움</td></tr><tr><td><strong>내부자 공격</strong></td><td>신뢰받는 내부 사용자와 이미 침해된 내부 Host가 수행하는 공격을 경계 방화벽만으로 막기 어려움</td></tr><tr><td><strong>우회 통신</strong></td><td>Modem·무선·별도 회선·암호화 Tunnel 등 방화벽을 통과하지 않는 경로는 통제할 수 없음</td></tr><tr><td><strong>신종 공격</strong></td><td>정책과 탐지기능이 알지 못하는 새로운 공격을 완벽히 차단할 수 없음</td></tr><tr><td><strong>가용성·성능</strong></td><td>모든 Traffic이 집중되어 병목과 단일 장애점이 될 수 있음</td></tr></tbody></table></div><p>방화벽을 우회하는 경로를 제거하고 내부 Segmentation, Host 보안, IDS/IPS, Patch, Anti-Malware를 함께 적용해야 합니다.</p>`
          },
          {
            id: "firewall-pros-cons-future", title: "장단점과 발전 방향",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>장점</th><th>단점</th></tr></thead><tbody><tr><td>보안정책의 중앙집중 관리</td><td>허용된 Service 내부 공격 탐지 한계</td></tr><tr><td>내부망과 외부망의 직접 통신 제한</td><td>내부자·우회경로 공격 통제 곤란</td></tr><tr><td>Traffic 감시·기록과 내부정보 은닉</td><td>정책 오류 시 정상 Service 차단 또는 위험 Traffic 허용</td></tr><tr><td>인증·NAT·VPN 등 부가기능 제공</td><td>고속 Network에서 병목·장애점 가능</td></tr></tbody></table></div><p>향후 방화벽은 ASIC 등 전용 처리기술로 고속화되고, IDS/IPS·VPN·Anti-Virus·Application Control을 통합한 <strong>UTM(Unified Threat Management)</strong>과 차세대 방화벽 형태로 발전합니다.</p>`
          },
          {
            id: "firewall-design-principles", title: "방화벽 설계 원칙",
            content: `<ol><li><strong>보호 대상과 위협 식별</strong>: 어떤 자산을 어떤 위협에서 보호할 것인지 정합니다.</li><li><strong>사용자·Service 식별</strong>: 누가 어떤 Service와 자원에 접근할 수 있는지 정의합니다.</li><li><strong>보안 수준 결정</strong>: 업무 편의성과 위험을 비교하여 허용 범위를 결정합니다.</li><li><strong>단일 통과지점</strong>: 외부와 내부 사이의 모든 통신이 방화벽을 거치게 구성합니다.</li><li><strong>최소권한·최소 Service</strong>: 필요한 Protocol·Port·방향만 허용하고 나머지는 차단합니다.</li><li><strong>지속적인 관리</strong>: Rule, Object, Log, Patch와 구성 변경을 주기적으로 검토합니다.</li></ol><p>보안을 우선할 때는 <strong>명시적으로 허용되지 않은 것은 금지</strong>하는 Default Deny가 기본 원칙입니다.</p>`
          },
          {
            id: "firewall-operation-policy", title: "Deny All·Permit All 정책",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>정책</th><th>원칙</th><th>특징</th></tr></thead><tbody><tr><td><strong>Deny All</strong><br>Default Deny</td><td>모든 Traffic을 기본 차단하고 필요한 것만 예외적으로 허용</td><td>높은 보안성, 신규 Service는 허용 Rule을 추가해야 함</td></tr><tr><td><strong>Permit All</strong><br>Default Allow</td><td>모든 Traffic을 기본 허용하고 위험한 것만 예외적으로 차단</td><td>높은 편의성, 누락된 차단 Rule이 곧 보안위험이 됨</td></tr></tbody></table></div><div class="important-box"><span class="box-title">암기</span><p><strong>Deny All = 허용목록 중심 / Permit All = 차단목록 중심</strong></p></div>`
          },
          {
            id: "firewall-type-overview", title: "방화벽 유형 개요",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>유형</th><th>주요 계층·검사대상</th><th>특징</th></tr></thead><tbody><tr><td><strong>Packet Filtering</strong></td><td>Network·Transport Layer의 IP·Port·Protocol·Flag</td><td>빠르고 단순하지만 Payload 이해가 제한적</td></tr><tr><td><strong>Stateful Inspection</strong></td><td>Packet Header + Session 상태</td><td>State Table로 정상 연결에 속하는 Packet인지 검사</td></tr><tr><td><strong>Application Proxy</strong></td><td>Application Layer 명령·내용</td><td>Client–Server 연결을 분리하고 Service별 상세 통제</td></tr><tr><td><strong>Circuit-Level Gateway</strong></td><td>Session·회선 연결</td><td>SOCKS 등을 이용해 연결을 중계하며 Payload 검사는 제한적</td></tr></tbody></table></div><p>현대 방화벽은 여러 방식을 조합하며, 검사 깊이가 깊을수록 세밀한 통제가 가능하지만 처리비용과 지연이 커질 수 있습니다.</p>`
          },
          {
            id: "packet-filtering-overview", title: "Packet Filtering 개요",
            content: `<p><strong>Packet Filtering</strong>은 Router 또는 방화벽에서 Packet Header를 검사하여 미리 설정한 Rule과 일치하는지에 따라 허용·차단하는 방식입니다.</p><ul><li>발신지·목적지 IP Address</li><li>발신지·목적지 Port Number</li><li>Traffic 방향(Inbound·Outbound)</li><li>Protocol Type(IP, TCP, UDP, ICMP 등)</li><li>Packet 상태·TCP Flag(SYN, ACK 등)</li></ul><p>Rule은 위에서 아래로 순서대로 평가하며 처음 일치한 Rule의 Action을 수행하고, 일치하는 Rule이 없으면 Default Policy를 적용합니다.</p>`
          },
          {
            id: "packet-filtering-rules", title: "IP·Service 기반 Filtering",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>방식</th><th>예</th><th>주의점</th></tr></thead><tbody><tr><td><strong>IP 기반</strong></td><td>특정 외부 Host만 내부 Server에 접근 허용, 내부 Host의 외부 접근 허용</td><td>IP Spoofing과 주소 공유 환경을 고려</td></tr><tr><td><strong>Service 기반</strong></td><td>HTTP 80·HTTPS 443·SSH 22 등 필요한 Port만 허용</td><td>같은 Port 안의 악성 Payload는 판별하기 어려움</td></tr><tr><td><strong>방향 기반</strong></td><td>외부→내부 신규 연결은 차단하고 내부→외부 응답 Traffic 허용</td><td>Inbound·Outbound Interface와 Source·Destination을 혼동하지 않음</td></tr></tbody></table></div><p>예를 들어 외부에서 내부 Telnet Port 23으로 들어오는 TCP는 차단하고, 내부 Mail Server가 외부로 보내는 SMTP Traffic만 허용할 수 있습니다.</p>`
          },
          {
            id: "packet-filtering-pros-cons", title: "Packet Filtering 장단점",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>장점</th><th>단점</th></tr></thead><tbody><tr><td>Router·방화벽 경계에서 빠르게 1차 차단</td><td>응용 Service별 정교한 명령·내용 통제 어려움</td></tr><tr><td>구조와 동작이 단순하고 처리속도가 빠름</td><td>사용자 인증과 상세 Log 기능이 제한적</td></tr><tr><td>비용이 낮고 사용자에게 투명하게 동작</td><td>IP Spoofing·Packet Fragmentation에 취약할 수 있음</td></tr><tr><td>Rule과 Log를 중앙에서 관리 가능</td><td>Rule 수 증가와 잘못된 순서·구성이 보안위험 유발</td></tr></tbody></table></div><p>단순 Header Filtering만으로는 충분하지 않으므로 Stateful Inspection과 Application 보안을 결합합니다.</p>`
          },
          {
            id: "nat-overview", title: "NAT 개요와 주소 변환",
            content: `<p><strong>NAT(Network Address Translation)</strong>는 내부 Private IP와 외부 Public IP를 서로 변환하는 기술입니다. 방화벽과 Router가 주소를 변환하면서 내부 Network의 직접 노출을 줄이고 여러 Host가 제한된 Public IP를 공유하게 합니다.</p><ol><li>내부 Host가 외부로 Packet을 보내면 Source Private IP를 NAT Address로 변환합니다.</li><li>변환정보를 Table에 기록합니다.</li><li>외부 응답이 NAT Address로 도착하면 Table을 조회해 Destination을 원래 내부 Host로 복원합니다.</li></ol><ul><li>Private Address 사용으로 Public IPv4 주소 절약</li><li>내부·외부 Network의 주소체계 분리</li><li>외부에서 내부 Host로 직접 접근하는 경로 제한</li></ul>`
          },
          {
            id: "nat-types", title: "Static NAT·Dynamic NAT·PAT",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>매핑</th><th>특징</th></tr></thead><tbody><tr><td><strong>Static NAT</strong></td><td>내부 IP 1개 ↔ Public IP 1개</td><td>고정된 1:1 변환, 외부 공개 Server에 활용</td></tr><tr><td><strong>Dynamic NAT</strong></td><td>내부 IP ↔ Public IP Pool</td><td>통신 시 Pool에서 사용 가능한 주소를 동적으로 할당</td></tr><tr><td><strong>PAT</strong><br>Port Address Translation</td><td>여러 내부 IP:Port → 하나 또는 소수 Public IP의 서로 다른 Port</td><td>다대일 변환, 가장 많은 Host가 Public IP를 공유</td></tr></tbody></table></div><div class="important-box"><span class="box-title">구분</span><p><strong>Static = 1:1 고정 / Dynamic = Pool에서 주소 할당 / PAT = Port까지 바꾸는 다대일</strong></p></div>`
          },
          {
            id: "stateful-firewall-overview", title: "Stateful Inspection 개요",
            content: `<p><strong>Stateful Packet Inspection(SPI)</strong>은 개별 Packet의 Header뿐 아니라 <strong>연결 상태와 통신의 앞뒤 관계</strong>를 함께 검사하는 방화벽 방식입니다.</p><ul><li>TCP 연결의 SYN·SYN/ACK·ACK와 Sequence·ACK Number를 추적합니다.</li><li>정상적으로 생성된 Session에 속하는 Packet만 통과시킵니다.</li><li>외부에서 갑자기 들어온 위조 응답 Packet처럼 State Table에 없는 Traffic을 차단합니다.</li><li>Network와 Transport Layer 중심으로 동작하되 제품에 따라 Application 정보도 분석합니다.</li></ul><p>Packet Filtering보다 안전하면서 Proxy보다 사용자에게 투명하고 빠르게 동작하는 장점이 있습니다.</p>`
          },
          {
            id: "state-table-operation", title: "State Table과 동작 원리",
            content: `<p>Stateful Firewall은 허용된 연결의 정보를 Memory의 <strong>State Table</strong>에 저장합니다.</p><div class="table-scroll"><table class="concept-table"><thead><tr><th>저장 항목</th><th>예</th></tr></thead><tbody><tr><td>Protocol</td><td>TCP·UDP·ICMP</td></tr><tr><td>Source IP·Port</td><td>192.168.1.11:10001</td></tr><tr><td>Destination IP·Port</td><td>201.10.120.21:80</td></tr><tr><td>Connection State</td><td>NEW·ESTABLISHED·RELATED·INVALID</td></tr><tr><td>시간·Sequence 정보</td><td>Timeout, TCP Sequence·ACK</td></tr></tbody></table></div><ol><li>신규 연결 Packet이 정책에 맞으면 State를 생성합니다.</li><li>이후 Packet은 Rule 전체를 반복 검사하기보다 State Table과 비교합니다.</li><li>연결 종료 또는 Timeout 시 State를 삭제합니다.</li></ol>`
          },
          {
            id: "stateful-pros-cons", title: "Stateful Firewall 장단점",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>장점</th><th>단점</th></tr></thead><tbody><tr><td>Packet Header와 연결 상태를 함께 검사</td><td>State Table 유지에 Memory·CPU 사용</td></tr><tr><td>정상 Session의 응답 Traffic을 동적으로 허용</td><td>SYN Flooding 등으로 Table 자원이 소진될 수 있음</td></tr><tr><td>Rule을 단순화하고 처리 효율을 높임</td><td>초기 Packet의 조작·오판이 잘못된 State로 이어질 수 있음</td></tr><tr><td>Proxy보다 투명하고 호환성이 높음</td><td>Application Payload를 완전히 이해하지는 못함</td></tr></tbody></table></div><p>State Table 용량, Connection Timeout, SYN Cookie·Rate Limit과 고가용성 동기화를 함께 설계합니다.</p>`
          },
          {
            id: "dpi", title: "DPI와 검사 깊이",
            content: `<p><strong>DPI(Deep Packet Inspection, 심층 패킷 검사)</strong>는 Header뿐 아니라 Payload와 Application Protocol의 구조·내용까지 분석하여 Traffic을 식별·통제합니다.</p><div class="table-scroll"><table class="concept-table"><thead><tr><th>방식</th><th>검사 범위</th></tr></thead><tbody><tr><td><strong>Packet Filtering</strong></td><td>IP·Port·Protocol·Flag 중심</td></tr><tr><td><strong>Stateful Inspection</strong></td><td>Header + Connection State</td></tr><tr><td><strong>DPI</strong></td><td>Header + State + Payload·Application Pattern</td></tr></tbody></table></div><p>DPI는 File 전송, Application 식별, Malware Pattern과 정책 위반을 탐지할 수 있지만 암호화 Traffic, 처리부하, 개인정보 보호를 고려해야 합니다.</p>`
          },
          {
            id: "proxy-firewall-overview", title: "Proxy 방화벽 개요",
            content: `<p><strong>Proxy 방화벽</strong>은 Client와 Server가 직접 통신하지 않게 하고 방화벽의 Proxy Service가 양쪽 연결을 각각 대리하는 방식입니다.</p><ol><li>외부 Client는 Proxy에 접속합니다.</li><li>Proxy가 사용자를 인증하고 Application 요청과 정책을 검사합니다.</li><li>허용된 경우 Proxy가 내부 Server에 별도 연결을 생성합니다.</li><li>응답도 Proxy가 받아 검사한 뒤 Client에 전달합니다.</li></ol><ul><li><strong>장점</strong>: Application별 세밀한 제어, 상세 Log, 내부 주소 은닉, 두 Network의 직접 연결 차단</li><li><strong>단점</strong>: Service마다 Proxy 필요, 높은 처리비용과 지연, 일부 응용 호환성 문제</li></ul>`
          },
          {
            id: "bastion-host", title: "Bastion Host",
            content: `<p><strong>Bastion Host</strong>는 외부 공격에 노출되는 경계에서 내부 Network로 들어오는 접근을 집중적으로 통제하도록 특별히 강화한 시스템입니다.</p><ul><li>Proxy, 인증, Web·Mail·DNS 같은 공개 Service 또는 Gateway 역할을 수행합니다.</li><li>불필요한 계정·Service·Software를 제거하고 최신 Patch와 강한 인증을 적용합니다.</li><li>내부 Network와 직접 연결되므로 침해되면 피해가 커질 수 있어 최소기능 원칙으로 운영합니다.</li><li>공격자가 Local Log를 삭제할 수 있으므로 Remote Logging과 Log Backup을 사용합니다.</li></ul><p>Bastion Host는 공격자가 반드시 거쳐야 하는 <strong>강화된 경계 Host</strong>이지만 단일 장애점이 되지 않도록 이중화와 감시가 필요합니다.</p>`
          },
          {
            id: "bastion-host-principles", title: "Bastion Host 구축 원칙",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>원칙</th><th>내용</th></tr></thead><tbody><tr><td><strong>단순한 구조</strong></td><td>기능과 구성을 최소화하여 취약점과 관리 복잡성을 줄임</td></tr><tr><td><strong>비상대책</strong></td><td>침입·장애 시 격리, 차단, 복구와 대체 시스템 전환 절차 마련</td></tr><tr><td><strong>Log Backup</strong></td><td>중앙 Log Server로 실시간 전송하여 공격자의 삭제·변조에 대비</td></tr><tr><td><strong>최소 권한</strong></td><td>관리계정·Daemon·File Permission과 Network 접근을 필요한 범위로 제한</td></tr><tr><td><strong>지속 감시</strong></td><td>무결성 점검, Patch, 경보와 변경 이력 검토</td></tr></tbody></table></div>`
          },
          {
            id: "application-level-gateway", title: "Application-Level Gateway",
            content: `<p><strong>Application-Level Gateway(응용계층 Proxy)</strong>는 Application Protocol을 이해하는 전용 Proxy가 명령과 Data를 검사하여 허용·차단합니다.</p><ul><li>FTP에서 <strong>GET은 허용하고 PUT은 차단</strong>하는 것처럼 같은 Port 안에서도 명령별 정책을 적용할 수 있습니다.</li><li>HTTP URL·Method·Header, Mail 명령과 첨부파일 등 Application 정보에 따라 통제합니다.</li><li>사용자 인증, Service별 상세 Log와 Content Filtering이 가능합니다.</li><li>외부 Client와 내부 Server 사이의 직접 연결을 끊어 내부구조를 보호합니다.</li></ul><p>정교한 통제가 가능하지만 높은 대역폭·실시간 Application에 부담이 될 수 있고, 새로운 Service마다 해당 Proxy가 필요합니다.</p>`
          },
          {
            id: "circuit-level-gateway", title: "Circuit-Level Gateway",
            content: `<p><strong>Circuit-Level Gateway(회선 레벨 Gateway)</strong>는 SOCKS 같은 Protocol로 Client와 Server 사이의 TCP·Session 연결을 중계합니다.</p><ul><li>내부 Client가 Gateway에 접속하면 Gateway가 외부 Server와 별도 연결을 생성합니다.</li><li>연결 수립과 Source·Destination, Port, Session 상태를 확인하지만 Application Payload의 의미는 깊게 검사하지 않습니다.</li><li>실제 내부 Client의 IP Address를 외부에 노출하지 않습니다.</li><li>Application별 전용 Proxy가 없어도 여러 TCP Application을 지원할 수 있어 처리부하가 비교적 낮습니다.</li></ul><p>회선 수준의 연결 허용 여부는 통제하지만 허용된 연결 안에서 전달되는 악성 명령·Data를 식별하는 능력은 제한적입니다.</p>`
          },
          {
            id: "proxy-comparison", title: "Application·Circuit Proxy 비교",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>Application-Level Gateway</th><th>Circuit-Level Gateway</th></tr></thead><tbody><tr><td><strong>검사 범위</strong></td><td>Application 명령·내용까지 검사</td><td>연결·Session 수립과 중계 중심</td></tr><tr><td><strong>통제 수준</strong></td><td>Method·Command·Content별 세밀한 통제</td><td>Client·Server·Port·연결 여부 중심</td></tr><tr><td><strong>Proxy</strong></td><td>Application별 전용 Proxy 필요</td><td>SOCKS 등 범용 Gateway 활용 가능</td></tr><tr><td><strong>성능</strong></td><td>검사가 깊어 상대적으로 느림</td><td>Payload 분석이 적어 상대적으로 빠름</td></tr><tr><td><strong>보안성</strong></td><td>높은 Application 통제</td><td>허용 Session 내부 공격 탐지 한계</td></tr></tbody></table></div>`
          },
          {
            id: "screening-router", title: "Screening Router 구조",
            content: `<p><strong>Screening Router Architecture</strong>는 Internet과 내부 Network 사이에 Packet Filtering Router 하나를 두는 가장 단순한 구조입니다.</p><ul><li>IP·TCP/UDP Header를 분석하여 Source·Destination·Port·Direction별 접근을 허용·차단합니다.</li><li><strong>장점</strong>: 구조가 간단하고 비용이 낮으며 기존 Router에 Rule을 적용하기 쉬움</li><li><strong>단점</strong>: 방어계층이 하나뿐이며 Router가 침해되거나 Rule이 잘못되면 내부망이 직접 노출됨</li><li>사용자 인증·Application Log·Payload 검사 기능이 제한적입니다.</li></ul><p>중요 Network의 단독 방어구조보다는 다른 방화벽과 함께 1차 Filtering 장비로 사용합니다.</p>`
          },
          {
            id: "dual-homed-host", title: "Dual-Homed Host 구조",
            content: `<p><strong>Dual-Homed Host Architecture</strong>는 외부망과 내부망에 각각 연결되는 두 개의 Network Interface를 가진 Bastion Host를 경계에 두는 구조입니다.</p><ul><li>두 Interface 사이의 IP Forwarding을 끄고 Proxy를 통해서만 통신하게 합니다.</li><li>외부와 내부가 직접 Routing되지 않아 Screening Router보다 강한 논리적 분리를 제공합니다.</li><li><strong>장점</strong>: 외부에 내부망 구조를 숨기고 Proxy 인증·Log·Application 통제 가능</li><li><strong>단점</strong>: Bastion Host가 병목·단일 장애점이며 침해되면 내부망 위험, Service별 Proxy 관리 필요</li></ul>`
          },
          {
            id: "screened-host", title: "Screened Host Gateway 구조",
            content: `<p><strong>Screened Host Gateway Architecture</strong>는 Screening Router와 내부의 Bastion Host를 결합한 구조입니다.</p><ol><li>외부 Router가 1차 Packet Filtering을 수행합니다.</li><li>외부에서 내부로 들어오는 허용 Traffic을 Bastion Host로 제한합니다.</li><li>Bastion Host가 Proxy·인증·Application 검사를 수행합니다.</li></ol><ul><li><strong>장점</strong>: Router와 Bastion Host의 이중 방어, 내부 Host 직접 접근 제한, 중앙집중 관리</li><li><strong>단점</strong>: 두 장비의 정책을 일관되게 관리해야 하며 Bastion Host 침해 시 내부망 접근 위험</li></ul>`
          },
          {
            id: "screened-subnet", title: "Screened Subnet·DMZ 구조",
            content: `<p><strong>Screened Subnet Architecture</strong>는 외부 Router와 내부 Router 사이에 <strong>DMZ(DeMilitarized Zone)</strong>를 두고 공개 Server와 Bastion Host를 배치하는 구조입니다.</p><ul><li>외부 Router: Internet에서 DMZ로 들어오는 Traffic 1차 Filtering</li><li>DMZ: Web·Mail·DNS·Proxy 등 외부 공개 Service 배치</li><li>내부 Router: DMZ에서 내부 Network로 들어가는 Traffic을 다시 통제</li><li>한쪽 장비나 공개 Server가 침해되어도 다른 방어계층이 내부 Network를 보호합니다.</li></ul><p>가장 안전한 전통적 구조이지만 장비와 Network가 늘어 비용·설계·운영 복잡성이 큽니다. Honeypot을 DMZ에 둘 때도 Outbound 통제를 적용합니다.</p>`
          },
          {
            id: "firewall-architecture-comparison", title: "방화벽 구축 구조 비교",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>구조</th><th>핵심 구성</th><th>보안 수준·특징</th></tr></thead><tbody><tr><td><strong>Screening Router</strong></td><td>Packet Filter Router 1대</td><td>단순·저비용, 단일 방어계층</td></tr><tr><td><strong>Dual-Homed Host</strong></td><td>NIC 2개 Bastion Host, IP Forwarding 차단</td><td>Proxy를 통한 강한 분리, Host가 병목</td></tr><tr><td><strong>Screened Host</strong></td><td>Screening Router + Bastion Host</td><td>이중 방어, 정책 연계 필요</td></tr><tr><td><strong>Screened Subnet</strong></td><td>외부 Router + DMZ + 내부 Router</td><td>3계층 방어, 가장 안전하지만 복잡·고비용</td></tr></tbody></table></div><div class="important-box"><span class="box-title">보안 수준 흐름</span><p><strong>Screening Router → Dual-Homed/Screened Host → Screened Subnet</strong>으로 갈수록 방어계층과 관리 복잡성이 증가합니다.</p></div>`
          },
          {
            id: "iptables-overview", title: "iptables 개요와 주요 기능",
            content: `<p><strong>iptables</strong>는 Linux Kernel의 Netfilter 기능을 관리하여 Rule 기반 Packet Filtering과 NAT를 설정하는 도구입니다.</p><ul><li><strong>Connection Tracking</strong>: 통과하는 Packet의 연결 상태를 추적하고 State Table로 관리</li><li><strong>Packet Filtering</strong>: IP·Port·Protocol·Interface·State에 따라 허용·차단</li><li><strong>NAT</strong>: Source·Destination Address와 Port 변환</li><li><strong>Packet 조작</strong>: Mark·TTL 등 Packet 속성 변경</li><li><strong>Logging</strong>: 정책에 맞는 Packet 정보를 기록</li></ul><p>현행 Linux에서는 nftables가 널리 사용되지만, 정보보안기사 시험과 기존 시스템 관리에서는 iptables의 Table·Chain·Rule 구조가 중요합니다.</p>`
          },
          {
            id: "iptables-table-chain", title: "iptables Table·Chain",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>개념</th><th>내용</th></tr></thead><tbody><tr><td><strong>Table</strong></td><td>기능별 Rule 집합. 대표적으로 Filtering을 위한 <code>filter</code>, 주소 변환을 위한 <code>nat</code> Table 사용</td></tr><tr><td><strong>INPUT</strong></td><td>방화벽 Host 자체로 들어오는 Packet 처리</td></tr><tr><td><strong>OUTPUT</strong></td><td>방화벽 Host 자체에서 나가는 Packet 처리</td></tr><tr><td><strong>FORWARD</strong></td><td>방화벽을 통과하여 다른 Network·Host로 전달되는 Packet 처리</td></tr></tbody></table></div><p>Rule은 Chain의 위에서 아래로 검사하며 <strong>처음 일치한 Rule</strong>의 Target을 수행합니다. 끝까지 일치하지 않으면 Chain의 Default Policy를 적용합니다.</p>`
          },
          {
            id: "iptables-rule-management", title: "iptables Rule 관리",
            content: `<div class="code-block"><code>iptables [-t table] -[A|I|D|F|P] CHAIN rule</code></div><div class="table-scroll"><table class="concept-table"><thead><tr><th>Option</th><th>기능</th></tr></thead><tbody><tr><td><code>-t</code></td><td>Table 지정. 생략하면 기본 filter Table</td></tr><tr><td><code>-A</code></td><td>Chain 마지막에 Rule 추가(Append)</td></tr><tr><td><code>-I</code></td><td>Chain의 지정 위치에 Rule 삽입(Insert)</td></tr><tr><td><code>-D</code></td><td>지정 Rule 삭제(Delete)</td></tr><tr><td><code>-F</code></td><td>Chain의 모든 Rule 삭제(Flush)</td></tr><tr><td><code>-P</code></td><td>Chain의 Default Policy 설정</td></tr></tbody></table></div><p>Rule 순서가 결과를 바꾸므로 넓은 허용 Rule보다 구체적인 차단·허용 Rule의 위치를 먼저 검토합니다.</p>`
          },
          {
            id: "iptables-match-target", title: "iptables Match·Target",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>Option·Target</th><th>의미</th></tr></thead><tbody><tr><td><code>-p</code></td><td>Protocol 지정: tcp, udp, icmp</td></tr><tr><td><code>-s</code> / <code>-d</code></td><td>Source / Destination IP Address 지정</td></tr><tr><td><code>--sport</code> / <code>--dport</code></td><td>Source / Destination Port 지정</td></tr><tr><td><code>-i</code> / <code>-o</code></td><td>Inbound / Outbound Interface 지정</td></tr><tr><td><code>-j ACCEPT</code></td><td>Packet 허용</td></tr><tr><td><code>-j DROP</code></td><td>응답 없이 Packet 폐기</td></tr><tr><td><code>-j REJECT</code></td><td>Packet을 거부하고 오류 응답 전송</td></tr><tr><td><code>-j LOG</code></td><td>Packet 정보를 Log에 기록</td></tr></tbody></table></div><p>Port Option은 일반적으로 <code>-p tcp</code> 또는 <code>-p udp</code>와 함께 사용합니다.</p>`
          },
          {
            id: "iptables-examples", title: "iptables 기본 사용 예",
            content: `<p><strong>특정 Source IP 차단</strong></p><div class="code-block"><code>iptables -A INPUT -s 192.168.159.131 -j DROP</code></div><p><strong>위 Rule 삭제</strong></p><div class="code-block"><code>iptables -D INPUT -s 192.168.159.131 -j DROP</code></div><p><strong>목적지 Port 23(Telnet) 차단</strong></p><div class="code-block"><code>iptables -A INPUT -p tcp --dport 23 -j DROP</code></div><p><strong>목적지 Port 80(HTTP) 허용</strong></p><div class="code-block"><code>iptables -A INPUT -p tcp --dport 80 -j ACCEPT</code></div><p><strong>목적지 Port 1~1023 차단</strong></p><div class="code-block"><code>iptables -A INPUT -p tcp --dport :1023 -j DROP</code></div><p>운영환경에서는 원격관리 연결이 끊기지 않도록 현재 정책과 Rule 순서를 먼저 확인하고, 변경 전·후에 목록과 Log를 검증합니다.</p><div class="important-box"><span class="box-title">SECTION 28 핵심 흐름</span><p><strong>경계 접근통제 → Default Deny → Packet Filtering·NAT → Stateful Inspection → Proxy·Bastion Host → 구축 구조 선택 → iptables Rule 적용</strong></p></div>`
          }
        ],
        content: ""
      },
      {
        id: "section-29", number: 29, title: "VPN",
        subtopics: [
          {
            id: "vpn-overview-definition", title: "VPN 등장 배경과 정의",
            content: `<p><strong>VPN(Virtual Private Network, 가상 사설망)</strong>은 Internet 같은 공중망을 이용하면서도 전용회선처럼 안전한 사설 Network 서비스를 제공하는 기술입니다.</p><ul><li>본사·지사·국외 지점의 확대와 재택·이동근무 증가로 서로 떨어진 Network를 안전하게 연결할 필요가 커졌습니다.</li><li>전용회선은 독립성과 품질이 높지만 설치·임대·유지 비용이 크고 확장에 시간이 걸립니다.</li><li>VPN은 공중망 위에 논리적으로 분리된 경로를 만들고 암호화·인증·접근통제를 적용하여 전용망 효과를 얻습니다.</li></ul><div class="important-box"><span class="box-title">핵심 정의</span><p><strong>공중 Network를 사설 Network처럼 안전하게 이용하도록 구성한 논리적 전용망</strong></p></div>`
          },
          {
            id: "vpn-characteristics", title: "VPN 특징",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>특징</th><th>내용</th></tr></thead><tbody><tr><td><strong>가상성</strong></td><td>물리적인 전용회선 없이 공중망 위에 논리적인 사설 연결을 자동으로 구성</td></tr><tr><td><strong>보안성</strong></td><td>IPSec·TLS/SSL 등으로 암호화, 무결성, 인증과 접근통제를 적용</td></tr><tr><td><strong>확장성</strong></td><td>지점·사용자 추가와 이동근무 환경에 비교적 유연하게 대응</td></tr><tr><td><strong>경제성</strong></td><td>기존 Internet 회선을 활용하여 전용회선 구축·운영 비용을 절감</td></tr></tbody></table></div><p>VPN은 물리적으로 완전히 독립된 망이 아니라 공중망을 공유하므로 안전성은 Protocol, 암호 Algorithm, Key 관리와 단말 보안에 좌우됩니다.</p>`
          },
          {
            id: "vpn-security-services", title: "VPN 보안 기능",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>보안 기능</th><th>제공 내용</th></tr></thead><tbody><tr><td><strong>기밀성</strong></td><td>암호화하여 제3자가 Packet 내용을 알아보지 못하게 보호</td></tr><tr><td><strong>무결성</strong></td><td>Hash·MAC 등으로 전송 중 데이터의 변조 여부 확인</td></tr><tr><td><strong>데이터 근원 인증</strong></td><td>수신 Data가 주장한 송신자에게서 온 것인지 검증</td></tr><tr><td><strong>사용자 인증</strong></td><td>VPN 접속자가 허가된 사용자·장비인지 확인</td></tr><tr><td><strong>접근통제</strong></td><td>인증된 주체가 허용된 Network·Server·Service에만 접근하도록 제한</td></tr></tbody></table></div><p>단순 Packet Filtering만으로는 암호화된 Packet의 내용을 보호할 수 없으므로 VPN은 <strong>터널링 + 암호화 + 인증 + 접근통제</strong>를 함께 사용합니다.</p>`
          },
          {
            id: "vpn-implementation-technologies", title: "VPN 구현 기술",
            content: `<ol><li><strong>Tunneling</strong>: 원래 Packet을 다른 Protocol Packet 안에 캡슐화하여 두 종단 사이에 가상 통로를 만듭니다.</li><li><strong>암호화</strong>: 대칭키 Algorithm으로 Data를 빠르게 암호화하고 공개키 기술로 Key 교환·전자서명을 지원합니다.</li><li><strong>무결성·인증</strong>: MAC·Hash·전자서명·인증서로 Data와 사용자·장비의 신원을 검증합니다.</li><li><strong>접근통제</strong>: 접속정책에 따라 사용자가 이용할 수 있는 Network와 Service를 제한합니다.</li></ol><p>대칭키는 DES·3DES·AES 등이, 공개키는 RSA·ECC 등이 사용될 수 있습니다. DES·3DES·MD5·SHA-1은 교재와 시험에서 등장하지만 현재 신규 설계에서는 AES와 SHA-2 계열 등 더 강한 방식이 권장됩니다.</p>`
          },
          {
            id: "vpn-types-comparison", title: "Intranet·Extranet·Remote Access VPN",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>연결 대상</th><th>대표 형태</th></tr></thead><tbody><tr><td><strong>Intranet VPN</strong></td><td>기업 내부 본사·지사·지점의 LAN</td><td>Site-to-Site, 내부 조직 간 상시 연결</td></tr><tr><td><strong>Extranet VPN</strong></td><td>기업과 고객사·협력사·납품업체</td><td>허가된 외부 조직까지 Intranet을 제한적으로 확장</td></tr><tr><td><strong>Remote Access VPN</strong></td><td>재택근무자·출장자·이동 사용자와 기업망</td><td>Client-to-Site, 필요할 때 원격 접속</td></tr></tbody></table></div><p>Site-to-Site는 보안 Gateway끼리 망과 망을 연결하고, Remote Access는 사용자 단말이 VPN Gateway에 접속한다는 차이가 있습니다.</p>`
          },
          {
            id: "remote-access-vpn", title: "Remote Access VPN 구성",
            content: `<p><strong>Remote Access VPN</strong>은 재택·출장 사용자가 무선망이나 전화·Internet 접속을 통해 ISP의 접속장비와 기업 VPN Gateway에 연결하는 방식입니다.</p><ul><li>사용자는 VPN Client 또는 Web Browser로 접속하고 ID·Password, OTP, 인증서 등으로 인증합니다.</li><li>NAS(Network Access Server)는 접속 인증과 Tunnel 관련 기능을 수행하며 VPN 기능을 제공할 수 있습니다.</li><li>가장 중요한 요소는 언제 어디서 접속하더라도 사용자의 신원과 단말 상태를 확인하고 허용된 자원만 열어주는 것입니다.</li></ul><p>공용 Wi-Fi와 관리되지 않은 단말에서는 VPN만 믿지 말고 다중요소인증, 단말 보안, 최신 Patch와 분할 Tunneling 정책을 함께 적용합니다.</p>`
          },
          {
            id: "vpn-tunneling", title: "터널링 원리",
            content: `<p><strong>Tunneling</strong>은 송신자와 수신자 사이의 가상 연결을 만들기 위해 원래 Packet에 터널 Protocol의 Header를 추가하여 <strong>캡슐화</strong>하는 기술입니다.</p><ol><li>원래 Packet을 터널 구간에서 전달할 Packet의 Payload로 취급합니다.</li><li>터널 시작점이 외부 Header를 붙여 공중망으로 전송합니다.</li><li>터널 종단점이 외부 Header를 제거하고 원래 Packet을 목적지로 전달합니다.</li></ol><p>대표 Protocol에는 PPTP, L2F, L2TP, GRE, IPSec, MPLS가 있습니다. Tunneling 자체가 항상 암호화를 의미하지는 않으므로 Protocol별 보안기능을 확인해야 합니다.</p>`
          },
          {
            id: "tunneling-protocol-comparison", title: "터널링 계층별 비교",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>2계층 터널링</th><th>3계층 터널링</th><th>MPLS</th></tr></thead><tbody><tr><td><strong>대표 Protocol</strong></td><td>PPTP, L2F, L2TP</td><td>IPSec, GRE</td><td>MPLS</td></tr><tr><td><strong>캡슐화 대상</strong></td><td>PPP Frame과 IP·IPX 등 여러 Network 계층 Protocol</td><td>주로 IP Packet</td><td>Label이 붙은 Packet</td></tr><tr><td><strong>보안</strong></td><td>Protocol별 인증·암호화 기능이 다름</td><td>IPSec 사용 시 표준화된 인증·암호화 제공</td><td>Traffic 분리 중심, 기본적으로 암호화하지 않음</td></tr><tr><td><strong>특징</strong></td><td>PPP 기술 활용</td><td>Host·Gateway 간 다양한 구성</td><td>빠른 전달, Traffic Engineering·QoS</td></tr></tbody></table></div><p><strong>GRE</strong>도 여러 Protocol을 캡슐화할 수 있지만 자체 암호화·인증 기능이 없어 보안이 필요하면 IPSec과 함께 사용합니다.</p>`
          },
          {
            id: "pptp", title: "PPTP",
            content: `<p><strong>PPTP(Point-to-Point Tunneling Protocol)</strong>는 Microsoft 등이 개발한 2계층 VPN Protocol로, PPP Frame을 캡슐화하여 IP Network로 전송합니다.</p><ul><li>TCP 연결로 Tunnel의 생성·유지·관리를 제어하고 GRE를 이용해 PPP Data를 전달합니다.</li><li>Client-Server 구성이 쉽고 과거 이동 사용자의 원격접속 VPN에 널리 사용되었습니다.</li><li>PPP 인증과 MPPE 암호화에 의존하지만 알려진 취약점이 있어 현재는 안전한 VPN 방식으로 권장되지 않습니다.</li></ul><div class="important-box"><span class="box-title">시험 포인트</span><p><strong>PPTP = PPP 기반 + TCP 제어 연결 + GRE 데이터 전달</strong></p></div>`
          },
          {
            id: "l2f-l2tp", title: "L2F·L2TP",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>Protocol</th><th>특징</th></tr></thead><tbody><tr><td><strong>L2F(Layer 2 Forwarding)</strong></td><td>Cisco가 개발한 초기 2계층 Tunneling Protocol. 여러 연결을 하나의 Tunnel에서 지원하며 자체 암호화 기능은 없음</td></tr><tr><td><strong>L2TP(Layer 2 Tunneling Protocol)</strong></td><td>PPTP와 L2F의 장점을 결합하여 표준화. PPP Frame을 UDP로 운반하며 자체 암호화는 제공하지 않음</td></tr></tbody></table></div><p>L2TP는 보안이 필요할 때 일반적으로 <strong>L2TP/IPSec</strong> 형태로 사용하여 IPSec이 암호화·무결성·인증을 제공합니다.</p>`
          },
          {
            id: "ipsec-tunneling", title: "IPSec 터널링",
            content: `<p><strong>IPSec</strong>은 IP 계층에서 동작하는 표준화된 3계층 보안 Protocol로, Application 변경 없이 IP Packet을 보호합니다.</p><ul><li><strong>AH(Authentication Header)</strong>: 무결성·데이터 근원 인증·재전송 방지 제공, 기밀성은 제공하지 않음</li><li><strong>ESP(Encapsulating Security Payload)</strong>: 기밀성을 중심으로 무결성·인증·재전송 방지도 선택적으로 제공</li><li><strong>Transport Mode</strong>: 원래 IP Header는 유지하고 상위계층 Payload를 주로 보호</li><li><strong>Tunnel Mode</strong>: 원래 IP Packet 전체를 캡슐화하고 새 IP Header를 추가</li></ul><p>Host-to-Host에는 전송 모드를 사용할 수 있고, 보안 Gateway가 포함된 Site-to-Site에는 일반적으로 터널 모드를 사용합니다.</p>`
          },
          {
            id: "ssl-vpn", title: "SSL VPN",
            content: `<p><strong>SSL VPN</strong>은 TLS/SSL을 이용하여 Client와 Server 사이에 안전한 통신 Channel을 구성하는 원격접속 VPN입니다.</p><ul><li>Web Browser가 TLS를 기본 지원하므로 별도 전용 Client 설치 없이 Web Application에 접속하기 쉽습니다.</li><li>Application·URL·사용자별로 세밀한 접근통제를 적용할 수 있습니다.</li><li>인증서와 PKI의 공개키·개인키로 Server를 인증하고 Session Key를 안전하게 협상합니다.</li><li>Portal 방식, Application Proxy 방식, 전체 Network 연결을 제공하는 Tunnel 방식으로 구현할 수 있습니다.</li></ul><p>현재의 SSL VPN도 실제로는 취약한 구형 SSL이 아니라 안전한 버전의 <strong>TLS</strong>를 사용해야 합니다.</p>`
          },
          {
            id: "ipsec-ssl-vpn-comparison", title: "IPSec VPN·SSL VPN 비교",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>IPSec VPN</th><th>SSL VPN</th></tr></thead><tbody><tr><td><strong>동작 범위</strong></td><td>Network 계층의 IP Traffic</td><td>Transport/Application 계층 중심</td></tr><tr><td><strong>대표 접속</strong></td><td>Site-to-Site, Host-to-Host, Remote Access</td><td>Remote Access, Site-to-Remote</td></tr><tr><td><strong>Client</strong></td><td>전용 Client·OS 설정이 필요한 경우가 많음</td><td>Web Browser 이용 가능, 기능에 따라 Agent 필요</td></tr><tr><td><strong>접근 범위</strong></td><td>인증 후 내부 Network 전반에 넓게 연결하기 쉬움</td><td>Application·URL 단위의 세밀한 접근통제에 유리</td></tr><tr><td><strong>장점</strong></td><td>Application에 투명하고 광범위한 IP Service 보호</td><td>배포·사용이 편리하고 NAT·Firewall 통과가 비교적 용이</td></tr></tbody></table></div>`
          },
          {
            id: "socks-v5", title: "SOCKS v5",
            content: `<p><strong>SOCKS v5</strong>는 Session 계층의 Proxy Protocol로 Client를 대신하여 외부 Server에 연결하고 접근통제와 사용자 인증을 제공합니다.</p><ul><li>Firewall 또는 Proxy Host에서 동작하며 내부 Client의 직접 연결을 숨깁니다.</li><li>TCP뿐 아니라 UDP Proxy와 다양한 인증방식을 지원합니다.</li><li>자체적으로 강한 Data 암호화를 제공하는 VPN Protocol은 아니므로 기밀성이 필요하면 TLS·IPSec 등과 결합합니다.</li></ul><p>계층별 대표 예는 <strong>데이터링크 계층: PPTP·L2F·L2TP / Network 계층: IPSec / Session 계층: SOCKS v5</strong>입니다.</p>`
          },
          {
            id: "vpn-data-authentication", title: "데이터 인증",
            content: `<p><strong>데이터 인증</strong>은 수신 Packet이 주장한 송신자에게서 왔으며 전송 중 변조되지 않았는지를 확인하는 절차입니다.</p><ul><li>Hash 함수로 Data의 요약값을 만들고 MAC·HMAC 또는 전자서명으로 위조를 어렵게 합니다.</li><li>교재에서는 MD5·SHA-1이 대표 예로 등장하지만 충돌 취약점 때문에 현재 신규 시스템에서는 SHA-2 계열과 안전한 MAC을 사용합니다.</li><li>인증만으로는 내용을 숨기지 못하므로 기밀성이 필요하면 암호화를 함께 적용합니다.</li></ul>`
          },
          {
            id: "pap-chap", title: "PAP·CHAP 사용자 인증",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>PAP</th><th>CHAP</th></tr></thead><tbody><tr><td><strong>방식</strong></td><td>ID·Password를 전송하여 인증</td><td>Challenge-Response 기반 3-Way Handshake</td></tr><tr><td><strong>Password 전송</strong></td><td>보호되지 않으면 평문 노출 위험</td><td>Password 자체를 Network로 보내지 않음</td></tr><tr><td><strong>재인증</strong></td><td>접속 초기에 주로 수행</td><td>연결 중 불규칙하게 다시 Challenge 가능</td></tr><tr><td><strong>보안성</strong></td><td>낮음</td><td>PAP보다 높지만 안전한 Tunnel·MFA를 대체하지 못함</td></tr></tbody></table></div><p>PAP·CHAP은 PPP 양 끝이 직접 인증하는 <strong>Peer-to-Peer</strong> 방식입니다.</p>`
          },
          {
            id: "radius-tacacs", title: "RADIUS·TACACS 중앙 인증",
            content: `<p><strong>Client-Server 방식</strong>은 VPN Gateway·NAS가 중앙 인증 Server에 사용자의 신원과 권한 확인을 요청합니다.</p><div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>RADIUS</th><th>TACACS+</th></tr></thead><tbody><tr><td><strong>주요 용도</strong></td><td>Network 접속 사용자의 AAA</td><td>Network 장비 관리자 AAA와 명령 권한통제</td></tr><tr><td><strong>전송</strong></td><td>주로 UDP 1812·1813</td><td>TCP 49</td></tr><tr><td><strong>보호 범위</strong></td><td>전통적으로 Password 영역 중심 보호</td><td>Packet Body를 암호화하여 인증·인가 정보를 더 넓게 보호</td></tr><tr><td><strong>분리</strong></td><td>인증·인가 기능이 결합된 형태</td><td>인증·인가·계정관리를 독립적으로 운용 가능</td></tr></tbody></table></div>`
          },
          {
            id: "mpls-basics", title: "MPLS 기본 개념",
            content: `<p><strong>MPLS(Multi-Protocol Label Switching)</strong>는 Packet에 짧고 고정된 길이의 Label을 붙이고, Core Router가 IP 주소를 매번 길게 조회하는 대신 Label을 기준으로 전달하는 기술입니다.</p><ol><li>Edge Router가 Packet의 전달 등급에 맞는 Label을 부착합니다.</li><li>중간 Router가 수신 Label을 다음 Hop의 Label로 바꾸는 <strong>Label Swapping</strong>을 수행합니다.</li><li>출구 Router가 Label을 제거하고 원래 Packet을 전달합니다.</li></ol><p>2계층 Switching의 빠른 전달과 3계층 Routing의 경로 선택 장점을 결합한 <strong>2.5계층</strong> 기술로 설명합니다.</p>`
          },
          {
            id: "mpls-vpn", title: "MPLS VPN 특징",
            content: `<ul><li>Service 제공자의 MPLS Backbone에서 고객별 Routing 정보를 논리적으로 분리하여 여러 Intranet·Extranet VPN을 제공합니다.</li><li>고정 길이 Label로 Packet Forwarding과 Label Swapping을 빠르게 수행합니다.</li><li>Traffic Engineering, QoS, VoIP 등 다양한 Service 품질을 지원하기 좋습니다.</li><li>Internet 기반 VPN보다 Service 도입·운영관리가 편리할 수 있습니다.</li></ul><div class="important-box"><span class="box-title">주의</span><p><strong>MPLS VPN은 경로와 Routing 정보를 분리하지만 기본적으로 암호화하지 않습니다.</strong> 기밀성이 필요하면 IPSec 등 별도 암호화를 함께 사용합니다.</p></div>`
          },
          {
            id: "ipsec-overview", title: "IPSec 개요",
            content: `<p><strong>IPSec(IP Security Protocol)</strong>은 IP 계층에서 IP Packet의 기밀성·무결성·인증과 재전송 방지를 제공하는 보안 Protocol 집합입니다.</p><ul><li>Host-to-Host, Gateway-to-Gateway, Host-to-Gateway 구성이 가능합니다.</li><li>상위 Application이 IPSec을 의식하지 않아도 되어 기존 Application에 투명하게 보안을 제공합니다.</li><li>AH와 ESP로 Packet을 보호하고, SA와 IKE로 Algorithm·Key·정책을 관리합니다.</li><li>IPv4에서는 선택적으로 사용하며 IPv6에서도 표준화된 보안 확장 Header로 사용할 수 있습니다.</li></ul>`
          },
          {
            id: "ipsec-characteristics", title: "IPSec 특징",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>특징</th><th>내용</th></tr></thead><tbody><tr><td><strong>Network 계층 보안</strong></td><td>TCP·UDP와 Application 종류에 관계없이 IP Traffic을 보호</td></tr><tr><td><strong>강한 보안</strong></td><td>표준화된 암호화·무결성·인증·재전송 방지 제공</td></tr><tr><td><strong>구성 유연성</strong></td><td>Host와 보안 Gateway를 조합하여 Remote Access와 Site-to-Site 구성</td></tr><tr><td><strong>정책 기반 처리</strong></td><td>Traffic을 BYPASS·DISCARD·PROTECT로 분류해 선택적으로 보호</td></tr><tr><td><strong>단방향 SA</strong></td><td>송신·수신 방향마다 별도의 SA와 Key가 필요</td></tr></tbody></table></div>`
          },
          {
            id: "ipsec-services", title: "IPSec 보안 서비스",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>Service</th><th>의미</th></tr></thead><tbody><tr><td><strong>접근통제</strong></td><td>Security Policy에 따라 Packet의 허용·차단·보호 결정</td></tr><tr><td><strong>비연결형 무결성</strong></td><td>각 IP Packet이 전송 중 변조되지 않았는지 확인</td></tr><tr><td><strong>데이터 근원 인증</strong></td><td>Packet이 올바른 송신자에게서 왔는지 검증</td></tr><tr><td><strong>재전송 공격 방지</strong></td><td>Sequence Number와 수신 Window로 중복 Packet 차단</td></tr><tr><td><strong>기밀성</strong></td><td>ESP 암호화로 Packet 내용을 숨김</td></tr><tr><td><strong>제한된 Traffic 흐름 기밀성</strong></td><td>Padding 등으로 Traffic Pattern 노출을 일부 줄임</td></tr></tbody></table></div><p>교재의 DES·3DES, HMAC-MD5·HMAC-SHA-1, IKE·Diffie-Hellman은 IPSec 구성요소를 설명하는 예입니다. 현재는 AES-GCM·AES-CBC, SHA-2 계열과 안전한 DH Group 등을 우선합니다.</p>`
          },
          {
            id: "ah-services-header", title: "AH 서비스와 Header",
            content: `<p><strong>AH(Authentication Header, 인증 Header)</strong>는 IP Packet의 무결성, 데이터 근원 인증과 재전송 공격 방지를 제공합니다.</p><ul><li>Packet 내용을 암호화하지 않으므로 <strong>기밀성은 제공하지 않습니다.</strong></li><li>IP Header 중 전송 중 변하지 않는 Field와 Payload를 인증범위에 포함합니다.</li><li>TTL처럼 Router를 지나며 바뀌는 Mutable Field는 인증 계산에서 제외하거나 0으로 처리합니다.</li></ul><div class="table-scroll"><table class="concept-table"><thead><tr><th>AH Field</th><th>역할</th></tr></thead><tbody><tr><td>Next Header</td><td>AH 다음에 오는 상위 Protocol 표시</td></tr><tr><td>Payload Length</td><td>AH 길이 표시</td></tr><tr><td>SPI</td><td>적용할 Security Association 식별</td></tr><tr><td>Sequence Number</td><td>재전송 공격 탐지</td></tr><tr><td>Authentication Data</td><td>무결성·인증을 위한 ICV 저장</td></tr></tbody></table></div>`
          },
          {
            id: "ah-transport-tunnel", title: "AH 전송 모드·터널 모드",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>전송 모드</th><th>터널 모드</th></tr></thead><tbody><tr><td><strong>Packet 구성</strong></td><td>원래 IP Header 뒤에 AH 삽입</td><td>새 IP Header + AH + 원래 IP Packet</td></tr><tr><td><strong>보호 범위</strong></td><td>상위계층 Data와 원래 IP Header의 불변 Field 인증</td><td>원래 IP Packet 전체와 새 Header의 불변 Field 인증</td></tr><tr><td><strong>대표 용도</strong></td><td>Host-to-Host</td><td>Gateway-to-Gateway, Host-to-Gateway</td></tr></tbody></table></div><p>AH는 IP 주소 변환에 민감하여 NAT 환경과의 호환성이 나쁘고, 실무에서는 암호화까지 제공하는 ESP가 주로 사용됩니다.</p>`
          },
          {
            id: "esp-services-header", title: "ESP 서비스와 Header",
            content: `<p><strong>ESP(Encapsulating Security Payload)</strong>는 IP Payload를 암호화하여 기밀성을 제공하고, 구성에 따라 무결성·데이터 근원 인증·재전송 방지도 제공합니다.</p><div class="table-scroll"><table class="concept-table"><thead><tr><th>ESP Field</th><th>역할</th></tr></thead><tbody><tr><td>SPI</td><td>적용할 SA 식별</td></tr><tr><td>Sequence Number</td><td>재전송 Packet 탐지</td></tr><tr><td>Payload Data</td><td>암호화하여 보호하는 Data</td></tr><tr><td>Padding / Pad Length</td><td>Block 길이 정렬과 Traffic Pattern 은닉 보조</td></tr><tr><td>Next Header</td><td>내부 Payload의 Protocol 표시</td></tr><tr><td>Authentication Data</td><td>ESP Header·Payload·Trailer의 무결성·인증값</td></tr></tbody></table></div><p>ESP 인증은 일반적으로 바깥쪽 IP Header를 보호하지 않으며, 암호화 범위와 인증 범위도 서로 다릅니다.</p>`
          },
          {
            id: "esp-transport-tunnel", title: "ESP 전송 모드·터널 모드",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>전송 모드</th><th>터널 모드</th></tr></thead><tbody><tr><td><strong>Packet 구성</strong></td><td>원래 IP Header + ESP Header + 암호화된 상위계층 Data + Trailer/Auth</td><td>새 IP Header + ESP Header + 암호화된 원래 IP Packet + Trailer/Auth</td></tr><tr><td><strong>암호화 범위</strong></td><td>TCP/UDP Header와 Data 등 IP Payload</td><td>원래 IP Header를 포함한 원래 IP Packet 전체</td></tr><tr><td><strong>주소 노출</strong></td><td>원래 Source·Destination IP가 보임</td><td>외부에서는 Tunnel 양 끝의 새 IP 주소만 보임</td></tr><tr><td><strong>대표 용도</strong></td><td>Host-to-Host</td><td>Site-to-Site VPN, Remote Access VPN</td></tr></tbody></table></div>`
          },
          {
            id: "ah-esp-comparison", title: "AH·ESP 비교",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>보안 서비스</th><th>AH</th><th>ESP</th></tr></thead><tbody><tr><td>접근통제</td><td>O</td><td>O</td></tr><tr><td>비연결형 무결성</td><td>O</td><td>O</td></tr><tr><td>데이터 근원 인증</td><td>O</td><td>O</td></tr><tr><td>재전송 공격 방지</td><td>O</td><td>O</td></tr><tr><td><strong>기밀성</strong></td><td><strong>X</strong></td><td><strong>O</strong></td></tr><tr><td>제한된 Traffic 흐름 기밀성</td><td>X</td><td>O</td></tr><tr><td>IP Header 보호</td><td>불변 Field 인증</td><td>외부 IP Header는 기본 보호 대상 아님</td></tr></tbody></table></div><div class="important-box"><span class="box-title">가장 중요한 차이</span><p><strong>AH는 인증·무결성 중심이고 암호화하지 않으며, ESP는 암호화를 제공하고 필요 시 인증·무결성도 제공합니다.</strong></p></div>`
          },
          {
            id: "security-association", title: "SA(Security Association)",
            content: `<p><strong>SA(Security Association, 보안 연계)</strong>는 두 IPSec 개체가 특정 방향의 Traffic을 어떻게 보호할지 정한 단방향 논리적 연결입니다.</p><ul><li>사용 Protocol(AH 또는 ESP), Mode, 암호·인증 Algorithm, Key, 수명, Sequence Number 등의 보안 매개변수를 가집니다.</li><li>SA는 <strong>SPI + 목적지 IP 주소 + 보안 Protocol(AH/ESP)</strong>의 조합으로 식별합니다.</li><li>단방향이므로 양방향 통신에는 최소 2개의 SA가 필요하고, AH와 ESP를 함께 쓰면 더 많은 SA가 필요합니다.</li><li>여러 SA를 순서대로 적용하는 구성을 <strong>SA Bundle</strong>이라 합니다.</li></ul>`
          },
          {
            id: "spd-sad", title: "SPD·SAD",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>Database</th><th>저장 내용과 역할</th></tr></thead><tbody><tr><td><strong>SPD(Security Policy Database)</strong></td><td>어떤 Traffic을 BYPASS·DISCARD·PROTECT할지 정하는 정책 Rule 저장. Source·Destination·Protocol·Port 등 Selector로 판정</td></tr><tr><td><strong>SAD(Security Association Database)</strong></td><td>생성된 SA의 SPI, Mode, Algorithm, Key, 수명, Sequence Number와 Anti-Replay Window 등 실제 처리정보 저장</td></tr></tbody></table></div><p><strong>SPD가 처리 방향을 결정하고 SAD가 실제 보호 방법을 제공합니다.</strong> PROTECT 정책인데 일치하는 SA가 없으면 IKE를 통해 SA를 협상·생성합니다.</p>`
          },
          {
            id: "ipsec-outbound-processing", title: "IPSec 아웃바운드 처리",
            content: `<ol><li>상위계층에서 내려온 Packet의 Source·Destination·Protocol·Port로 SPD를 검색합니다.</li><li>일치 정책이 <strong>DISCARD</strong>이면 Packet을 폐기하고, <strong>BYPASS</strong>이면 IPSec 처리 없이 전송합니다.</li><li><strong>PROTECT</strong>이면 SAD에서 사용할 SA를 검색합니다.</li><li>SA가 없으면 IKE를 통해 상대와 정책·Algorithm·Key를 협상하여 SA를 생성합니다.</li><li>SA에 따라 AH 또는 ESP, 전송·터널 모드, 암호화·인증을 적용하고 Sequence Number를 증가시켜 전송합니다.</li></ol><p>Sequence Number가 한계에 도달하기 전에 새 SA와 Key로 교체하여 재사용을 방지합니다.</p>`
          },
          {
            id: "ipsec-inbound-processing", title: "IPSec 인바운드 처리",
            content: `<ol><li>수신 Packet이 AH·ESP로 보호되었는지 확인하고 SPI·목적지·Protocol로 SAD의 SA를 찾습니다.</li><li>일치하는 SA가 없거나 Sequence Number가 재전송 Window를 벗어나면 Packet을 폐기합니다.</li><li>AH는 무결성·인증을 검증하고, ESP는 무결성·인증 검증과 복호화를 수행합니다.</li><li>Tunnel Header와 Padding을 제거하여 원래 Packet을 복원합니다.</li><li>복원된 Packet이 SPD 정책과 일치하는지 확인한 뒤 상위계층으로 전달하거나 폐기합니다.</li></ol><p>보호되지 않은 Packet도 SPD에서 BYPASS가 허용된 경우에만 받아들이며 PROTECT가 요구되는 Traffic이면 폐기합니다.</p>`
          },
          {
            id: "ike-overview-components", title: "IKE 개요와 구성요소",
            content: `<p><strong>IKE(Internet Key Exchange)</strong>는 IPSec 통신에 사용할 보안정책, 인증방식, 암호·무결성 Algorithm과 Key를 협상하고 SA를 자동으로 생성·관리하는 Protocol입니다.</p><div class="table-scroll"><table class="concept-table"><thead><tr><th>기반 기술</th><th>역할</th></tr></thead><tbody><tr><td><strong>ISAKMP</strong></td><td>SA 협상·생성·수정·삭제와 Key 관리 Message의 Framework</td></tr><tr><td><strong>Oakley</strong></td><td>Diffie-Hellman 기반의 인증된 Key 교환 방식</td></tr><tr><td><strong>SKEME</strong></td><td>공개키와 대칭키 기술을 결합한 유연한 Key 교환 방식</td></tr></tbody></table></div><p>교재의 IKE 구조는 <strong>ISAKMP Framework + Oakley·SKEME Key 교환 기술</strong>의 결합으로 정리합니다.</p>`
          },
          {
            id: "ike-key-management", title: "IKE 키 관리 방식",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>방식</th><th>특징</th></tr></thead><tbody><tr><td><strong>Pre-Shared Key</strong></td><td>양쪽에 같은 비밀 Key를 미리 설정. 구성이 쉽지만 장비·사용자가 많아질수록 배포·변경·폐기가 어려움</td></tr><tr><td><strong>Public Key·인증서</strong></td><td>각 장비의 개인키와 CA 인증서로 신원을 확인. 대규모 환경에 유리하지만 PKI 구축·운영 필요</td></tr><tr><td><strong>Diffie-Hellman</strong></td><td>공중망에서 직접 비밀값을 보내지 않고 공유 Key Material을 생성. 인증과 결합해 중간자 공격을 방지</td></tr></tbody></table></div><p>IKE는 상대 인증 후 Child SA에 사용할 Session Key를 만들고, 정해진 수명에 따라 Rekey·삭제합니다. 현재 구현에서는 취약한 Algorithm과 작은 DH Group을 사용하지 않도록 정책을 강화합니다.</p>`
          },
          {
            id: "vpn-section-summary", title: "SECTION 29 핵심 흐름",
            content: `<div class="important-box"><span class="box-title">전체 흐름</span><p><strong>공중망 활용 → VPN 유형 선택 → Tunneling으로 가상 통로 구성 → 암호화·인증·접근통제 → IPSec의 AH·ESP와 전송/터널 모드 → SA·SPD·SAD로 정책 처리 → IKE로 Key와 SA 협상</strong></p></div><div class="table-scroll"><table class="concept-table"><thead><tr><th>빠른 구분</th><th>정답 키워드</th></tr></thead><tbody><tr><td>망과 망 연결</td><td>Site-to-Site, Tunnel Mode</td></tr><tr><td>원격 사용자 접속</td><td>Remote Access, SSL VPN·IPSec Client</td></tr><tr><td>인증만, 암호화 없음</td><td>AH</td></tr><tr><td>기밀성 제공</td><td>ESP</td></tr><tr><td>정책 저장</td><td>SPD</td></tr><tr><td>SA 상세정보 저장</td><td>SAD</td></tr><tr><td>Key·SA 협상</td><td>IKE</td></tr></tbody></table></div>`
          }
        ],
        content: ""
      },
      {
        id: "section-30", number: 30, title: "최신 네트워크 보안기술",
        subtopics: [
          {
            id: "traceback-overview", title: "공격 역추적 시스템 개요",
            content: `<p><strong>공격 역추적(Traceback)</strong>은 공격 Packet이 여러 중간 System과 위조된 Source 주소를 거쳐 오더라도 기록과 Network 정보를 연계해 <strong>실제 공격 경로와 근원지</strong>를 찾아가는 기술입니다.</p><ul><li>공격자의 신원·위치와 경유지를 파악하여 침해사고 조사, 공격 차단과 법적 대응의 근거를 확보합니다.</li><li>공격자가 여러 Stepping Stone을 사용하거나 Source IP를 Spoofing하면 수신지의 단일 Log만으로는 근원지를 확인하기 어렵습니다.</li><li>따라서 Host Log, Router·Firewall·IDS Log, Traffic 특징과 Packet 표식을 시간 순서로 연계해야 합니다.</li></ul><div class="important-box"><span class="box-title">핵심 구분</span><p><strong>연결 기반 공격은 TCP 연결 역추적</strong>, <strong>Source IP가 위조된 개별 Packet은 IP Packet 역추적</strong>을 중심으로 봅니다.</p></div>`
          },
          {
            id: "tcp-connection-traceback", title: "TCP 연결 역추적",
            content: `<p><strong>TCP 연결 역추적(TCP Connection Traceback)</strong>은 공격자가 접속한 중간 Host의 접속 기록을 이전 단계와 차례로 연결하여 실제 출발지를 찾는 방식입니다.</p><ol><li>피해 System에서 공격 Session의 Source·Destination IP, Port와 시간을 확인합니다.</li><li>바로 앞 경유지의 Login·Process·Connection Log에서 같은 시각의 연관된 입·출력 Connection을 찾습니다.</li><li>각 Stepping Stone을 역방향으로 반복 조사하여 최초 접속지에 접근합니다.</li></ol><p>연결이 유지 중이면 실시간 추적이 유리하고, 종료 후에는 보존된 Log와 시각 동기화가 중요합니다. Log가 삭제되었거나 관할이 다른 Network를 거치면 추적이 어려워질 수 있습니다.</p>`
          },
          {
            id: "ip-packet-traceback", title: "IP 패킷 역추적",
            content: `<p><strong>IP Packet Traceback</strong>은 공격자가 Source IP를 위조한 경우에도 Packet이 지나온 Router·Link 정보를 이용해 유입 경로를 찾는 기술입니다.</p><div class="table-scroll"><table class="concept-table"><thead><tr><th>방식</th><th>핵심 원리</th></tr></thead><tbody><tr><td><strong>Link Testing</strong></td><td>공격 Traffic이 진행되는 동안 인접 Link를 한 단계씩 확인해 상류 방향으로 추적</td></tr><tr><td><strong>Packet Marking</strong></td><td>Router가 Packet에 경로 정보를 확률적 또는 결정적으로 표시하고 피해자가 여러 Packet을 모아 경로 복원</td></tr><tr><td><strong>ICMP Traceback</strong></td><td>Router가 일정 확률로 경로 정보를 담은 별도 ICMP Message를 생성</td></tr><tr><td><strong>Logging·Hash</strong></td><td>Router가 Packet 요약값이나 통과 기록을 저장하고 사후에 조회하여 경로 재구성</td></tr></tbody></table></div><p>한 방식만으로 완벽히 해결하기보다 ISP·기관 간 협력, 일관된 시각정보와 충분한 Packet·Log가 함께 필요합니다.</p>`
          },
          {
            id: "traceback-comparison", title: "TCP·IP 역추적 비교",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>TCP 연결 역추적</th><th>IP Packet 역추적</th></tr></thead><tbody><tr><td><strong>주요 대상</strong></td><td>여러 Host를 경유한 연결형 공격</td><td>Source IP Spoofing, DoS·DDoS Packet</td></tr><tr><td><strong>핵심 자료</strong></td><td>Login·Connection·Process Log</td><td>Router 경로정보·표식·Packet Log</td></tr><tr><td><strong>추적 방법</strong></td><td>경유 Host의 연결을 Hop-by-Hop으로 연결</td><td>Packet이 지나온 Network 경로 재구성</td></tr><tr><td><strong>제약</strong></td><td>Log 삭제, Session 종료, 시각 불일치</td><td>Router 지원, 저장공간, 기관 간 협력, 경로 변화</td></tr></tbody></table></div><div class="important-box"><span class="box-title">공통 전제</span><p>정확한 역추적을 위해 <strong>NTP 기반 시각 동기화, Log 무결성·보존, 기관 간 협력</strong>이 필요합니다.</p></div>`
          },
          {
            id: "esm-overview", title: "ESM 개요",
            content: `<p><strong>ESM(Enterprise Security Management, 통합보안관리)</strong>은 Firewall, IDS/IPS, VPN, Anti-Virus, Server와 Network 장비 등 여러 보안 System에서 발생한 Event를 중앙에서 수집·분석·관리하는 체계입니다.</p><ul><li>서로 다른 장비의 Event를 한 화면에서 통합 Monitoring합니다.</li><li>개별 Event 간 상관관계를 분석하여 단독 Log로 찾기 어려운 복합 공격을 탐지합니다.</li><li>경보, 보고서, 통계와 대응 명령을 통해 관리자의 판단과 조치를 지원합니다.</li></ul><p><strong>개별 보안장비를 대체하는 제품이 아니라, 여러 보안장비를 중앙에서 연계·관리하는 상위 관리체계</strong>입니다.</p>`
          },
          {
            id: "esm-components", title: "ESM 구성요소",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>구성요소</th><th>역할</th></tr></thead><tbody><tr><td><strong>Agent</strong></td><td>각 보안장비·Server의 Log와 Event를 수집하고 필요한 형식으로 전송</td></tr><tr><td><strong>Manager</strong></td><td>수집정보의 정규화·저장·상관분석·정책 적용과 경보 생성</td></tr><tr><td><strong>Console</strong></td><td>관리자가 Dashboard, Event 조회, 정책설정, 보고서와 대응 상태를 확인</td></tr></tbody></table></div><p>대규모 환경에서는 중간 수집 Server나 계층형 Manager를 두어 Traffic과 분석 부하를 분산할 수 있습니다.</p>`
          },
          {
            id: "esm-processing", title: "ESM 처리 흐름과 상관분석",
            content: `<ol><li><strong>수집</strong>: 이기종 보안장비와 System의 Log·Event를 모읍니다.</li><li><strong>정규화</strong>: 서로 다른 형식의 시간·주소·위험도·Event 항목을 공통 형식으로 변환합니다.</li><li><strong>통합·저장</strong>: 중복을 줄이고 검색·분석 가능한 형태로 저장합니다.</li><li><strong>상관분석</strong>: 동일 Source의 반복 Scan 뒤 침입시도처럼 여러 Event의 시간·순서·속성을 Rule로 연계합니다.</li><li><strong>경보·대응</strong>: 위험도를 산정해 관리자에게 알리고 필요하면 연동장비의 차단정책을 적용합니다.</li></ol><div class="important-box"><span class="box-title">상관분석</span><p><strong>서로 다른 보안장비에서 발생한 관련 Event를 묶어 하나의 공격 시나리오로 판단</strong>하는 것이 ESM의 핵심입니다.</p></div>`
          },
          {
            id: "esm-benefits-limitations", title: "ESM 장점과 한계",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>장점</th><th>한계·주의사항</th></tr></thead><tbody><tr><td>분산된 보안 Event의 중앙 집중 관리</td><td>수집 대상과 Event가 많을수록 저장·분석 부하 증가</td></tr><tr><td>상관분석으로 복합 공격 탐지</td><td>Rule·정책 품질이 낮으면 오탐·미탐 증가</td></tr><tr><td>일관된 경보·보고서와 빠른 상황 파악</td><td>장비별 Log 형식의 정규화와 연동 유지 필요</td></tr><tr><td>정책 배포와 대응장비 연계 가능</td><td>자동 차단은 서비스 영향과 오탐 위험을 검토해야 함</td></tr></tbody></table></div>`
          },
          {
            id: "utm-overview", title: "UTM 개요",
            content: `<p><strong>UTM(Unified Threat Management, 통합위협관리)</strong>은 Firewall, IDS/IPS, VPN, Anti-Virus, Web Filtering 등 여러 보안기능을 하나의 장비나 Platform에 통합한 방식입니다.</p><ul><li>단일 관리화면과 정책으로 여러 경계 보안기능을 운영할 수 있습니다.</li><li>구축·관리가 단순하지만 한 장비에 기능이 집중되므로 성능 병목과 장애 영향 범위를 고려해야 합니다.</li><li>ESM이 여러 장비의 <strong>Event 통합관리</strong>에 초점을 둔다면 UTM은 여러 보안기능의 <strong>장비·기능 통합</strong>에 초점을 둡니다.</li></ul>`
          },
          {
            id: "utm-esm-comparison", title: "UTM·ESM 비교",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>UTM</th><th>ESM</th></tr></thead><tbody><tr><td><strong>통합 대상</strong></td><td>Firewall·IPS·VPN 등 보안 기능</td><td>여러 장비·System의 Log와 Event</td></tr><tr><td><strong>핵심 목적</strong></td><td>경계 보안기능을 한 Platform에서 처리</td><td>중앙 Monitoring과 상관분석·통합관리</td></tr><tr><td><strong>대표 위치</strong></td><td>Network 경계 또는 주요 구간</td><td>보안관제·관리 영역</td></tr><tr><td><strong>주의점</strong></td><td>성능 병목·단일 장애점</td><td>연동 복잡성·Rule 튜닝·대량 Event 처리</td></tr></tbody></table></div>`
          },
          {
            id: "nac-overview", title: "NAC 개요",
            content: `<p><strong>NAC(Network Access Control, 네트워크 접근통제)</strong>은 사용자와 단말이 Network에 접속하기 전·후에 신원과 보안상태를 확인하고 정책에 따라 허용·차단·격리하는 기술입니다.</p><ul><li>비인가 사용자·단말의 Network 접속을 통제합니다.</li><li>OS Patch, Anti-Virus, 보안설정 같은 단말 무결성 상태를 검사합니다.</li><li>정책을 만족하지 못한 단말은 Quarantine Network로 이동시켜 치료 후 재검사합니다.</li><li>접속 이후에도 상태와 행위를 Monitoring하여 정책 위반 시 권한을 변경하거나 차단할 수 있습니다.</li></ul>`
          },
          {
            id: "nac-components", title: "NAC 구성요소",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>구성요소</th><th>역할</th></tr></thead><tbody><tr><td><strong>Policy Server</strong></td><td>사용자·단말·보안상태에 따른 접속정책과 판정 수행</td></tr><tr><td><strong>Sensor / Enforcement Point</strong></td><td>Switch·AP·Gateway 등에서 단말을 탐지하고 허용·차단·격리 정책 집행</td></tr><tr><td><strong>Agent / Agentless 검사</strong></td><td>단말정보와 Patch·Anti-Virus·설정 등 무결성 상태 수집</td></tr><tr><td><strong>인증·연동 System</strong></td><td>802.1X, RADIUS, Directory, DHCP·Switch·보안 System과 정보 연계</td></tr><tr><td><strong>격리·치료 Server</strong></td><td>정책 미준수 단말에 Patch와 보안 Update를 제공한 뒤 재검사</td></tr></tbody></table></div>`
          },
          {
            id: "nac-control-flow", title: "NAC 접근통제 절차",
            content: `<ol><li><strong>접근 요청·단말 탐지</strong>: 새로 연결된 사용자와 단말의 위치·주소·종류를 확인합니다.</li><li><strong>인증</strong>: 계정, 인증서, 802.1X 등으로 사용자와 단말의 신원을 확인합니다.</li><li><strong>무결성 검사</strong>: Patch, Anti-Virus, 보안설정과 금지 Software 여부를 검사합니다.</li><li><strong>정책 판정</strong>: 역할, 위치, 시간과 보안상태를 기준으로 권한을 결정합니다.</li><li><strong>집행</strong>: 정상 단말은 허용하고 비인가 단말은 차단, 미준수 단말은 격리합니다.</li><li><strong>치료·재검사·Monitoring</strong>: 필요한 Update를 적용한 뒤 재접속시키고 접속 중 상태를 계속 확인합니다.</li></ol><div class="important-box"><span class="box-title">핵심 흐름</span><p><strong>탐지 → 인증 → 무결성 검사 → 정책 판정 → 허용·차단·격리 → 치료·재검사</strong></p></div>`
          },
          {
            id: "nac-deployment", title: "NAC 구성 방식",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>특징</th></tr></thead><tbody><tr><td><strong>In-Band</strong></td><td>NAC 장비가 실제 Traffic 경로에 위치해 통제를 직접 수행. 강한 통제가 가능하지만 병목·장애영향 고려</td></tr><tr><td><strong>Out-of-Band</strong></td><td>Traffic 경로 밖에서 Switch·AP 등 기존 장비에 정책을 지시. 성능영향이 적지만 연동과 우회방지 필요</td></tr><tr><td><strong>Agent 방식</strong></td><td>단말에 프로그램을 설치해 상세한 보안상태를 지속 수집</td></tr><tr><td><strong>Agentless 방식</strong></td><td>별도 설치 부담이 적지만 확인 가능한 단말정보와 통제범위가 제한될 수 있음</td></tr></tbody></table></div>`
          },
          {
            id: "nac-security-effects", title: "NAC 보안효과와 주의점",
            content: `<ul><li><strong>내부망 보호</strong>: 외부 침입뿐 아니라 내부의 비인가 단말과 감염 단말 확산을 통제합니다.</li><li><strong>정책 준수</strong>: 미패치 OS, 꺼진 Anti-Virus, 금지 Software 등 보안기준 위반을 탐지합니다.</li><li><strong>최소권한</strong>: 사용자 역할과 단말 상태에 따라 VLAN·Service 접근범위를 차등 적용합니다.</li><li><strong>가시성</strong>: 누가 어떤 단말로 어디에 접속했는지 자산·접속 현황을 파악합니다.</li></ul><p>단말 유형, BYOD·IoT, 인증 실패와 예외정책을 함께 설계해야 하며 NAC만으로 Endpoint 보안이나 Network Monitoring 전체를 대체할 수는 없습니다.</p>`
          },
          {
            id: "siem-overview", title: "SIEM 개요",
            content: `<p><strong>SIEM(Security Information and Event Management)</strong>은 조직 전체의 Log와 Security Event를 대규모로 수집·정규화·저장하고 실시간 상관분석과 검색을 제공하는 통합 보안분석 체계입니다.</p><ul><li><strong>SIM(Security Information Management)</strong>의 장기 저장·검색·보고 기능과 <strong>SEM(Security Event Management)</strong>의 실시간 Monitoring·상관분석·경보 기능을 결합합니다.</li><li>보안장비뿐 아니라 OS, Application, Cloud, 인증·자산 System 등 더 넓은 Data Source를 분석할 수 있습니다.</li><li>Compliance 보고, 침해사고 조사와 Threat Hunting의 기반 Data를 제공합니다.</li></ul>`
          },
          {
            id: "siem-processing", title: "SIEM 처리 기능",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>기능</th><th>내용</th></tr></thead><tbody><tr><td><strong>수집</strong></td><td>Agent, Syslog, API 등으로 다양한 Log·Event 수집</td></tr><tr><td><strong>Parsing·정규화</strong></td><td>서로 다른 원본 Log에서 공통 Field를 추출하고 형식을 통일</td></tr><tr><td><strong>저장·검색</strong></td><td>대용량 Data를 보존하고 조건·시간 범위에 따라 빠르게 조회</td></tr><tr><td><strong>상관분석</strong></td><td>Rule·통계·행위분석으로 관련 Event를 연결하고 위험도 산정</td></tr><tr><td><strong>경보·Dashboard</strong></td><td>우선순위가 높은 이상징후를 시각화하고 관리자에게 통보</td></tr><tr><td><strong>보고·조사</strong></td><td>규제준수 보고서, Timeline과 사고조사 근거 제공</td></tr></tbody></table></div>`
          },
          {
            id: "esm-siem-comparison", title: "ESM·SIEM 비교",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>ESM</th><th>SIEM</th></tr></thead><tbody><tr><td><strong>중심</strong></td><td>이기종 보안장비의 Event 통합관제·정책관리</td><td>조직 전반의 대용량 Log·Event 분석과 검색</td></tr><tr><td><strong>데이터 범위</strong></td><td>주로 보안장비 Event</td><td>보안장비·Server·Application·Cloud·인증 등 광범위</td></tr><tr><td><strong>주요 기능</strong></td><td>Monitoring, 상관분석, 경보, 장비 연동</td><td>실시간 분석 + 장기 저장·검색·보고·Threat Hunting</td></tr><tr><td><strong>관계</strong></td><td colspan="2">제품과 교재에 따라 기능 경계가 겹치며, SIEM을 ESM의 확장·발전 형태로 설명하기도 함</td></tr></tbody></table></div>`
          },
          {
            id: "soar-overview", title: "SOAR 개요",
            content: `<p><strong>SOAR(Security Orchestration, Automation and Response)</strong>는 여러 보안도구와 Data를 연계하고 반복적인 보안업무를 Playbook에 따라 자동화하여 사고 대응을 빠르고 일관되게 수행하는 Platform입니다.</p><div class="table-scroll"><table class="concept-table"><thead><tr><th>요소</th><th>의미</th></tr></thead><tbody><tr><td><strong>Orchestration</strong></td><td>SIEM, EDR, Firewall, Threat Intelligence, Ticket System 등 여러 도구·업무 절차 연결</td></tr><tr><td><strong>Automation</strong></td><td>정보 조회, IOC 확인, 계정·IP 차단, Ticket 생성 같은 반복 작업 자동 실행</td></tr><tr><td><strong>Response</strong></td><td>사고 분류, 조사, 조치, 복구와 결과 기록을 일관된 절차로 관리</td></tr></tbody></table></div>`
          },
          {
            id: "soar-playbook-flow", title: "SOAR Playbook 처리 흐름",
            content: `<ol><li>SIEM·EDR 등에서 Alert를 수신합니다.</li><li>IP·Domain·File Hash·사용자 정보를 수집하고 Threat Intelligence로 평판을 조회합니다.</li><li>Playbook의 조건에 따라 오탐 가능성과 위험도를 분류하고 Case를 생성합니다.</li><li>승인정책에 따라 계정 잠금, Host 격리, IP 차단 등 대응을 자동 또는 반자동 실행합니다.</li><li>결과를 Ticket과 보고서에 기록하고 담당자에게 전달합니다.</li></ol><p>서비스 중단 위험이 큰 조치는 <strong>Human-in-the-Loop</strong> 승인단계를 두고, 자동화 전후 결과와 되돌리기 절차를 남겨야 합니다.</p>`
          },
          {
            id: "siem-soar-comparison", title: "SIEM·SOAR 비교",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>SIEM</th><th>SOAR</th></tr></thead><tbody><tr><td><strong>핵심 질문</strong></td><td>무슨 일이 일어났는가?</td><td>이 Event에 어떻게 대응할 것인가?</td></tr><tr><td><strong>중심 기능</strong></td><td>Log 수집·검색·상관분석·탐지·경보</td><td>도구 연계·업무 자동화·Case·대응 절차</td></tr><tr><td><strong>주요 결과</strong></td><td>우선순위가 정해진 Alert와 분석정보</td><td>Playbook에 따른 조사·차단·복구·기록</td></tr><tr><td><strong>연계</strong></td><td>Alert와 Context를 SOAR에 제공</td><td>SIEM Alert를 보강하고 대응결과를 다시 전달</td></tr></tbody></table></div><div class="important-box"><span class="box-title">한 줄 구분</span><p><strong>SIEM은 탐지·분석, SOAR는 연계·자동 대응</strong>에 중심을 둡니다.</p></div>`
          },
          {
            id: "pms-overview-components", title: "PMS 개요와 구성요소",
            content: `<p><strong>PMS(Patch Management System, 패치관리시스템)</strong>는 조직 내 Server와 PC의 OS·Application 보안 Patch를 중앙에서 수집·검증·배포하고 설치 현황을 관리하는 System입니다.</p><div class="table-scroll"><table class="concept-table"><thead><tr><th>구성요소</th><th>역할</th></tr></thead><tbody><tr><td><strong>PMS Server</strong></td><td>Patch와 정책 수집·보관, 대상별 배포, 설치결과와 현황 관리</td></tr><tr><td><strong>Agent</strong></td><td>단말의 Software·Patch 상태 점검, Patch 수신·설치와 결과 보고</td></tr><tr><td><strong>관리 Console</strong></td><td>승인·배포 일정·대상 Group·실패 현황과 보고서 관리</td></tr><tr><td><strong>Patch Repository</strong></td><td>검증된 Patch File과 Metadata를 보관·분배</td></tr></tbody></table></div>`
          },
          {
            id: "pms-preparation", title: "PMS 준비 단계",
            content: `<ol><li><strong>자산·Version 파악</strong>: 관리대상 OS·Application·설치 Version과 중요도를 식별합니다.</li><li><strong>Patch 정보수집</strong>: Vendor 공지와 취약점 정보를 확인하고 필요한 Patch를 내려받습니다.</li><li><strong>무결성·출처 검증</strong>: 전자서명·Hash 등으로 File이 변조되지 않았는지 확인합니다.</li><li><strong>사전 Test</strong>: 운영환경과 유사한 Test Group에 적용하여 충돌, 성능과 서비스 영향을 확인합니다.</li><li><strong>승인·계획</strong>: 위험도와 업무영향에 따라 우선순위, 대상, 일정과 Rollback 방안을 정합니다.</li></ol><div class="important-box"><span class="box-title">준비 핵심</span><p><strong>Patch라고 즉시 전체 배포하지 않고 자산 확인 → 검증 → Test → 승인</strong>을 거칩니다.</p></div>`
          },
          {
            id: "pms-distribution", title: "PMS 분배·적용 단계",
            content: `<ol><li>부서·업무·OS·위험도에 따라 배포대상 Group을 지정합니다.</li><li>Network 부하와 업무시간을 고려해 중앙 Server 또는 분산 Server에서 Patch를 전송합니다.</li><li>지정된 유지보수 시간에 설치하고 필요한 경우 재부팅합니다.</li><li>Agent가 성공·실패·미적용 결과를 PMS Server에 보고합니다.</li><li>실패 원인을 조치해 재배포하고, 장애가 발생하면 준비된 Rollback 절차를 수행합니다.</li><li>전체 적용률과 예외·미준수 단말을 점검하여 관리대장을 갱신합니다.</li></ol><p>중요 Patch는 신속히 적용하되 가용성이 중요한 System은 Backup, 이중화, 복구 Test와 변경관리 절차를 함께 적용합니다.</p>`
          },
          {
            id: "security-platform-comparison", title: "UTM·ESM·NAC·SIEM·SOAR·PMS 비교",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>기술</th><th>핵심 목적</th><th>시험 키워드</th></tr></thead><tbody><tr><td><strong>UTM</strong></td><td>여러 경계 보안기능을 한 장비에 통합</td><td>기능 통합, Firewall·IPS·VPN</td></tr><tr><td><strong>ESM</strong></td><td>여러 보안장비의 Event 통합관리</td><td>Agent·Manager·Console, 상관분석</td></tr><tr><td><strong>NAC</strong></td><td>사용자·단말의 Network 접속 통제</td><td>인증, 무결성 검사, 격리·치료</td></tr><tr><td><strong>SIEM</strong></td><td>대용량 Log·Event 수집·분석·탐지</td><td>SIM+SEM, 정규화, 검색·상관분석</td></tr><tr><td><strong>SOAR</strong></td><td>보안도구 연계와 대응업무 자동화</td><td>Orchestration·Automation·Response, Playbook</td></tr><tr><td><strong>PMS</strong></td><td>Patch의 중앙 수집·검증·배포·현황관리</td><td>사전 Test, 배포, 결과보고, Rollback</td></tr></tbody></table></div>`
          },
          {
            id: "modern-network-security-summary", title: "SECTION 30 핵심 흐름",
            content: `<div class="important-box"><span class="box-title">전체 흐름</span><p><strong>공격 경로 역추적 → UTM으로 보안기능 통합 → ESM으로 보안장비 Event 통합 → NAC로 단말 접속·무결성 통제 → SIEM으로 대용량 Log 분석 → SOAR로 대응 자동화 → PMS로 취약한 단말의 Patch를 중앙 관리</strong></p></div><div class="table-scroll"><table class="concept-table"><thead><tr><th>빠른 구분</th><th>정답 키워드</th></tr></thead><tbody><tr><td>실제 공격 경로·근원지 확인</td><td>Traceback</td></tr><tr><td>보안기능을 한 장비에 통합</td><td>UTM</td></tr><tr><td>보안장비 Event 중앙관리</td><td>ESM</td></tr><tr><td>접속 전 단말 보안상태 검사</td><td>NAC</td></tr><tr><td>SIM+SEM, Log 기반 탐지</td><td>SIEM</td></tr><tr><td>Playbook 기반 자동 대응</td><td>SOAR</td></tr><tr><td>Patch 중앙 배포·설치현황</td><td>PMS</td></tr></tbody></table></div>`
          }
        ],
        content: ""
      }
    ]
  },
  {
    part: 6,
    title: "애플리케이션 보안",
    sections: [
      {
        id: "section-31",
        number: 31,
        title: "FTP 보안",
        subtopics: [
          {
            id: "ftp-overview", title: "FTP 개요와 연결 구조",
            content: `<p><strong>FTP(File Transfer Protocol)</strong>는 한 Host에서 다른 Host로 File을 전송하기 위한 TCP/IP 표준 응용계층 Protocol입니다. FTP Client와 Server가 상호작용하며, 명령과 실제 Data를 서로 다른 연결로 처리합니다.</p><div class="table-scroll"><table class="concept-table"><thead><tr><th>연결</th><th>역할</th><th>대표 Port</th></tr></thead><tbody><tr><td><strong>제어 연결(Control Connection)</strong></td><td>명령과 응답을 주고받으며 Login부터 Session 종료까지 유지</td><td>Server TCP 21</td></tr><tr><td><strong>데이터 연결(Data Connection)</strong></td><td>File·Directory 목록 등 실제 Data를 전송할 때 생성하고 전송 후 종료</td><td>Active Mode의 Server TCP 20 또는 Passive Mode의 Server 임의 Port</td></tr></tbody></table></div><div class="important-box"><span class="box-title">시험 핵심</span><p><strong>FTP는 제어 연결과 데이터 연결을 분리</strong>합니다. TCP 21은 제어, TCP 20은 Active Mode의 Server 측 Data Port입니다.</p></div>`
          },
          {
            id: "ftp-login-authentication", title: "FTP 로그인 순서와 인증",
            content: `<ol><li>Client가 Server의 TCP 21번 Port에 제어 연결을 설정합니다.</li><li><strong>USER</strong> 명령으로 사용자명을 전달합니다.</li><li><strong>PASS</strong> 명령으로 Password를 전달합니다.</li><li>Server는 계정정보를 대조하여 사용자 신원과 접근권한을 확인합니다.</li><li>인증에 성공하면 명령을 수행하고 필요한 경우 별도의 데이터 연결을 생성합니다.</li></ol><p>기본 FTP는 USER·PASS와 File 내용을 암호화하지 않으므로 Network에서 평문이 노출될 수 있습니다.</p>`
          },
          {
            id: "ftp-active-mode", title: "FTP 능동(Active) Mode",
            content: `<p><strong>Active Mode</strong>에서는 Client가 제어 연결을 만들지만, 데이터 연결은 <strong>Server가 Client 쪽으로 먼저 연결</strong>합니다.</p><ol><li>Client의 임의 Port(예: 5000) → Server TCP 21로 제어 연결을 설정합니다.</li><li>Client가 <strong>PORT</strong> 명령으로 Data 수신 Port(예: 5001)를 알려줍니다.</li><li>Server의 TCP 20 → Client가 지정한 Port로 데이터 연결을 시도합니다.</li><li>Directory 목록이나 File을 전송한 뒤 데이터 연결을 종료합니다.</li></ol><div class="important-box"><span class="box-title">Active 핵심</span><p><strong>제어: Client → Server 21 / 데이터: Server 20 → Client 지정 Port</strong></p></div><p>Client 측 Firewall이나 NAT가 외부 Server의 신규 연결을 차단하면 데이터 연결이 실패할 수 있습니다.</p>`
          },
          {
            id: "ftp-passive-mode", title: "FTP 수동(Passive) Mode",
            content: `<p><strong>Passive Mode</strong>에서는 제어 연결과 데이터 연결을 모두 <strong>Client가 Server 쪽으로 생성</strong>합니다.</p><ol><li>Client의 임의 Port → Server TCP 21로 제어 연결을 설정합니다.</li><li>Client가 <strong>PASV</strong> 명령을 전송합니다.</li><li>Server가 Data 대기용 임의 Port(예: 4900)를 열고 그 정보를 Client에 알립니다.</li><li>Client의 별도 임의 Port → Server가 알려준 Port로 데이터 연결을 설정합니다.</li><li>Data 전송을 마친 뒤 데이터 연결을 종료합니다.</li></ol><div class="important-box"><span class="box-title">Passive 핵심</span><p><strong>제어와 데이터 연결 모두 Client가 시작</strong>하므로 NAT·Firewall 환경에서 일반적으로 다루기 쉽습니다.</p></div>`
          },
          {
            id: "ftp-mode-comparison", title: "Active·Passive Mode 비교",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>Active Mode</th><th>Passive Mode</th></tr></thead><tbody><tr><td><strong>제어 연결</strong></td><td>Client → Server TCP 21</td><td>Client → Server TCP 21</td></tr><tr><td><strong>데이터 연결 시작</strong></td><td>Server → Client</td><td>Client → Server</td></tr><tr><td><strong>주요 명령</strong></td><td>PORT</td><td>PASV</td></tr><tr><td><strong>Server Data Port</strong></td><td>TCP 20</td><td>Server가 정한 임의 Port</td></tr><tr><td><strong>주의점</strong></td><td>Client의 Inbound 차단으로 실패 가능</td><td>Server의 Passive Port 범위 허용 필요</td></tr></tbody></table></div>`
          },
          {
            id: "anonymous-ftp", title: "Anonymous FTP",
            content: `<p><strong>Anonymous FTP</strong>는 Server에 개별 계정이 없는 사용자에게 공개 File을 검색·내려받을 수 있는 제한된 권한을 제공하는 방식입니다.</p><ul><li>사용자명은 일반적으로 <strong>anonymous</strong>를 사용합니다.</li><li>Password 대신 사용자의 전자우편 주소를 입력하도록 안내하는 경우가 많지만, 이것은 실질적인 신원검증 수단이 아닙니다.</li><li>Server는 접속기록을 남기고 공개 Directory에 한정하여 읽기 권한을 제공해야 합니다.</li><li>불필요하다면 서비스를 제거하고, 꼭 필요할 때만 최소 권한으로 운영합니다.</li></ul><div class="important-box"><span class="box-title">보안 주의</span><p>Anonymous 사용자의 Home·Root Directory와 공개 Directory 권한을 엄격히 분리하고, <strong>쓰기 권한을 주지 않는 것</strong>이 원칙입니다.</p></div>`
          },
          {
            id: "tftp-overview", title: "TFTP 개요",
            content: `<p><strong>TFTP(Trivial File Transfer Protocol)</strong>는 FTP의 모든 기능이 필요하지 않은 단순한 File 전송 환경을 위한 Protocol입니다.</p><ul><li>FTP가 TCP를 사용하는 것과 달리 <strong>UDP 69번 Port</strong>를 사용합니다.</li><li>원격 장비의 Boot Image나 설정 File 전송, Disk가 없는 Workstation의 Network Boot 등에 활용됩니다.</li><li>Directory 조회·삭제 등 복잡한 명령 없이 File 읽기·쓰기 중심으로 동작합니다.</li><li>사용자 인증과 암호화 기능을 기본 제공하지 않으므로 신뢰할 수 있는 관리 Network에서 제한적으로 사용해야 합니다.</li></ul>`
          },
          {
            id: "tftp-data-transfer", title: "TFTP 데이터 전송 방식",
            content: `<ol><li>Client가 읽기 또는 쓰기 요청을 전송합니다.</li><li>File을 <strong>Block</strong> 단위로 나누어 순서대로 전송합니다.</li><li>전통적인 TFTP의 Block Data는 최대 <strong>512Byte</strong>이며, 512Byte보다 작은 마지막 Block이 전송 종료를 나타냅니다.</li><li>UDP에는 자체 흐름·오류 제어가 없으므로 Block 번호를 붙이고 각 Block마다 <strong>ACK</strong>를 확인합니다.</li><li>응답이 없으면 Timeout 후 해당 Block을 재전송합니다.</li></ol><div class="important-box"><span class="box-title">시험 핵심</span><p><strong>UDP 69 + 512Byte Block + Block 번호 + ACK</strong></p></div>`
          },
          {
            id: "ftp-tftp-comparison", title: "FTP·TFTP 비교",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>FTP</th><th>TFTP</th></tr></thead><tbody><tr><td><strong>전송계층</strong></td><td>TCP</td><td>UDP</td></tr><tr><td><strong>대표 Port</strong></td><td>TCP 21, Active Data TCP 20</td><td>UDP 69</td></tr><tr><td><strong>기능</strong></td><td>조회·송수신·삭제 등 다양한 명령</td><td>읽기·쓰기 중심의 최소 기능</td></tr><tr><td><strong>데이터 표현</strong></td><td>여러 표현 형식 지원</td><td>ASCII·Binary 중심</td></tr><tr><td><strong>인증</strong></td><td>USER·PASS 방식 제공</td><td>기본 사용자 인증 없음</td></tr><tr><td><strong>특징</strong></td><td>기능이 풍부하지만 연결 구조가 복잡</td><td>단순하고 가볍지만 보안 기능 부족</td></tr></tbody></table></div>`
          },
          {
            id: "nfs-overview", title: "NFS(Network File System)",
            content: `<p><strong>NFS(Network File System)</strong>는 TCP/IP Network에서 원격 Host의 File System을 Local File System처럼 사용할 수 있게 하는 분산 File System입니다.</p><ul><li>Server가 Directory를 공유(Export)하고 Client가 이를 <strong>Mount</strong>하여 사용합니다.</li><li>공용 Data나 사용자가 필요한 File을 중앙 Host에 두어 여러 Client가 함께 사용할 수 있습니다.</li><li>Client에는 필요한 최소 File만 두고 저장공간과 Data를 중앙에서 관리할 수 있습니다.</li><li>공유 대상, 허용 Host, 읽기·쓰기 권한과 계정 매핑을 최소 권한으로 설정해야 합니다.</li></ul>`
          },
          {
            id: "samba-overview", title: "삼바(Samba)",
            content: `<p><strong>Samba</strong>는 <strong>SMB(Server Message Block)</strong> Protocol을 이용하여 UNIX/Linux와 Windows System 사이에 File 및 Printer 자원을 공유할 수 있게 합니다.</p><div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>NFS</th><th>Samba</th></tr></thead><tbody><tr><td><strong>주요 용도</strong></td><td>UNIX/Linux 계열 Network File System 공유</td><td>Windows와 UNIX/Linux 간 File·Printer 공유</td></tr><tr><td><strong>핵심 동작</strong></td><td>원격 Directory를 Mount</td><td>SMB Share에 접근</td></tr><tr><td><strong>보안 관리</strong></td><td>Export 대상·Host·권한 제한</td><td>Share·사용자·권한·접근 Host 제한</td></tr></tbody></table></div>`
          },
          {
            id: "ftp-security-risks", title: "FTP 보안 위험",
            content: `<p>기본 FTP는 초기 설계에서 기밀성 보호를 제공하지 않으므로 다음 위험이 있습니다.</p><ul><li><strong>계정정보 노출</strong>: USER·PASS가 평문으로 전달되어 Sniffing될 수 있습니다.</li><li><strong>전송내용 노출·변조</strong>: 제어·데이터 연결이 암호화되지 않아 File과 명령이 도청·변조될 수 있습니다.</li><li><strong>복잡한 연결 구조</strong>: 제어·데이터 Port가 분리되어 Firewall 정책과 Port 관리가 어려울 수 있습니다.</li><li><strong>익명·잘못된 권한</strong>: Anonymous FTP에 쓰기 권한이 있으면 악성 File 유포나 저장공간 악용으로 이어질 수 있습니다.</li></ul><p>평문 FTP 대신 암호화된 전송방식을 사용하고, 불필요한 FTP Service와 계정·권한을 제거해야 합니다.</p>`
          },
          {
            id: "ftps-sftp", title: "FTPS·SFTP 보안 전송",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>FTPS</th><th>SFTP</th></tr></thead><tbody><tr><td><strong>의미</strong></td><td>FTP over SSL/TLS</td><td>SSH File Transfer Protocol</td></tr><tr><td><strong>기반</strong></td><td>기존 FTP에 TLS 보안계층 적용</td><td>SSH 연결 위에서 File 전송</td></tr><tr><td><strong>연결 특성</strong></td><td>FTP의 제어·데이터 채널 구조 유지</td><td>일반적으로 하나의 SSH 연결 사용</td></tr><tr><td><strong>기본 Port</strong></td><td>Explicit 방식은 보통 TCP 21에서 시작</td><td>SSH와 같은 TCP 22</td></tr><tr><td><strong>핵심</strong></td><td>FTP 명령·인증·Data를 TLS로 보호</td><td>SSH 인증·암호화·무결성 보호 활용</td></tr></tbody></table></div><div class="important-box"><span class="box-title">혼동 주의</span><p><strong>SFTP는 FTPS의 다른 이름이 아닙니다.</strong> FTPS는 FTP+TLS, SFTP는 SSH 기반 File 전송 Protocol입니다.</p></div>`
          },
          {
            id: "tftp-security", title: "TFTP 보안",
            content: `<p>TFTP는 사용자 인증·암호화·정교한 접근통제를 기본 제공하지 않으므로 공격자가 File을 읽거나 덮어쓸 수 있는 위험이 있습니다.</p><ul><li>외부 Network에서 직접 접근하지 못하도록 Firewall·ACL로 허용 Host를 제한합니다.</li><li>Boot·설정 File 전송처럼 꼭 필요한 용도에만 사용합니다.</li><li><strong>Secure Mode</strong>로 TFTP의 Root Directory를 지정하여 상위·다른 Directory 접근을 차단합니다.</li><li>제공 Directory에는 최소한의 File만 두고 쓰기 권한을 제한합니다.</li><li>민감한 File은 TFTP로 전송하지 않고 별도의 안전한 관리 Network나 암호화 Protocol을 사용합니다.</li></ul>`
          },
          {
            id: "ftp-bounce-attack", title: "FTP Bounce Attack",
            content: `<p><strong>FTP Bounce Attack</strong>은 FTP의 제어 연결과 데이터 연결이 분리되고, Active Mode에서 PORT 명령으로 Data 목적지를 지정할 수 있다는 점을 악용합니다.</p><ol><li>공격자가 취약한 FTP Server에 접속합니다.</li><li>PORT 명령에 공격대상 Host의 IP와 Port를 지정합니다.</li><li>FTP Server가 자신의 Data Port를 이용해 제3의 대상에 연결을 시도합니다.</li><li>Server의 응답을 통해 대상 Port의 개방 여부를 확인하거나 FTP Server를 우회경유지로 악용합니다.</li></ol><div class="important-box"><span class="box-title">공격 핵심</span><p><strong>공격자 → FTP Server → 제3의 대상</strong> 구조이며, FTP Server가 대신 Port Scan·접속을 수행하게 만듭니다.</p></div>`
          },
          {
            id: "ftp-bounce-defense", title: "Bounce Attack 대응",
            content: `<ul><li>PORT 명령에 지정된 IP가 <strong>제어 연결을 맺은 Client IP와 다르면 거부</strong>합니다.</li><li>Data 목적지 Port를 Client의 비특권 Port 범위로 제한하고 낮은 Service Port 연결을 거부합니다.</li><li>Anonymous FTP에서 PORT 명령과 불필요한 Active Mode 사용을 제한합니다.</li><li>최신 FTP Daemon을 사용하고 Firewall에서 FTP Server가 내부·외부 임의 Host로 연결하지 못하게 통제합니다.</li><li>비정상 PORT 명령과 외부 목적지 연결 시도를 Log로 감시합니다.</li></ul>`
          },
          {
            id: "anonymous-ftp-security", title: "Anonymous FTP 취약점과 대응",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>위험</th><th>대응</th></tr></thead><tbody><tr><td>인증되지 않은 사용자의 Service 접근</td><td>필요하지 않으면 Anonymous FTP 비활성화</td></tr><tr><td>쓰기 권한을 이용한 악성코드·불법 File 업로드</td><td>읽기 전용 운영, 업로드 Directory 분리·실행권한 제거</td></tr><tr><td>System File·상위 Directory 노출</td><td>Anonymous Root를 별도로 격리하고 Directory 권한 최소화</td></tr><tr><td>Server 정보·사용자 정보 노출</td><td>Banner 최소화, Directory Listing과 Log 공개 금지</td></tr></tbody></table></div>`
          },
          {
            id: "ftp-access-control", title: "FTP 접근제어 설정",
            content: `<h3>ftpusers 파일</h3><p><code>ftpusers</code>는 FTP Login을 금지할 계정목록입니다. root와 주요 System 계정을 등록하여 Password가 노출되더라도 FTP로 접속하지 못하게 합니다. 즉 <strong>목록에 있는 계정은 접근 거부</strong>입니다.</p><h3>TCP Wrapper</h3><p><code>/etc/hosts.allow</code>와 <code>/etc/hosts.deny</code>를 이용해 접속을 허용·거부할 Client IP를 지정합니다. FTP Daemon이 TCP Wrapper를 지원하거나 연동되어 있어야 합니다.</p><div class="important-box"><span class="box-title">접근통제 원칙</span><p><strong>계정 차단(ftpusers) + 접속지 통제(TCP Wrapper·Firewall) + Directory 최소 권한 + Log 점검</strong></p></div>`
          },
          {
            id: "proftpd-overview", title: "proftpd 특징",
            content: `<p><strong>proftpd</strong>는 UNIX/Linux 환경에서 사용하는 FTP Server Daemon으로, 설정을 세밀하게 구성할 수 있습니다.</p><ul><li>안정적이고 빠른 FTP Service 운영을 목표로 합니다.</li><li><strong>xinetd</strong> 방식과 <strong>standalone</strong> 방식으로 실행할 수 있습니다.</li><li>접속 사용자·Directory·명령별 접근정책과 Session 제한을 설정할 수 있습니다.</li><li>root 직접 Login을 차단하고 최소 권한의 전용 계정으로 실행해야 합니다.</li></ul>`
          },
          {
            id: "proftpd-login-checks", title: "proftpd 로그인 확인 설정",
            content: `<ol><li><code>/etc/passwd</code>와 <code>/etc/shadow</code>에 사용자가 존재하고 인증 가능한 상태인지 확인합니다.</li><li><code>/etc/ftpusers</code>에 사용자가 등록되어 있는지 확인합니다. 등록된 계정은 FTP 접근이 거부됩니다.</li><li><code>/etc/shells</code>에 등록되지 않은 Login Shell을 사용하는 계정의 접근을 제한합니다.</li><li><code>RequireValidShell</code> 설정으로 유효한 Shell 요구 여부를 결정합니다.</li></ol><p>운영환경에서는 실제 Login이 필요 없는 Service 계정과 System 계정의 FTP 접근을 원칙적으로 차단합니다.</p>`
          },
          {
            id: "proftpd-options", title: "proftpd 주요 설정 옵션",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>옵션</th><th>역할</th></tr></thead><tbody><tr><td><strong>ServerType</strong></td><td>standalone 또는 inetd 실행방식 지정</td></tr><tr><td><strong>RootLogin</strong></td><td>root 계정의 FTP Login 허용 여부</td></tr><tr><td><strong>User / Group</strong></td><td>Daemon 실행 계정과 Group 지정</td></tr><tr><td><strong>ServerIdent</strong></td><td>접속 Banner의 Server 정보 표시 여부·문구 지정</td></tr><tr><td><strong>MaxClients</strong></td><td>동시에 허용할 최대 Client 수 제한</td></tr><tr><td><strong>TimeoutLogin</strong></td><td>Login 완료까지 허용하는 시간</td></tr><tr><td><strong>TimeoutIdle</strong></td><td>명령·전송 없이 유휴 상태로 둘 수 있는 시간</td></tr><tr><td><strong>TimeoutSession</strong></td><td>전체 Session의 최대 유지시간</td></tr><tr><td><strong>Limit</strong></td><td>사용 가능한 FTP Command를 사용자·Directory별로 제한</td></tr></tbody></table></div>`
          },
          {
            id: "vsftpd-overview", title: "vsftpd(Very Secure FTP Daemon)",
            content: `<p><strong>vsftpd(Very Secure FTP Daemon)</strong>는 보안성과 성능을 중시하는 FTP Server Daemon입니다.</p><ul><li>가상 IP별 환경설정(<code>listen_address</code>)과 가상 사용자 설정을 지원합니다.</li><li>사용자별 전송률과 접속 수를 제한할 수 있습니다.</li><li><strong>PAM</strong>을 이용한 사용자 인증·접근제어를 지원합니다.</li><li><strong>xferlog</strong> 형식의 전송 Log를 지원합니다.</li><li>standalone 방식과 xinetd 방식으로 운영할 수 있습니다.</li><li><code>tcp_wrappers</code> 설정을 통해 Host 기반 접근제어와 연동할 수 있습니다.</li></ul>`
          },
          {
            id: "vsftpd-files", title: "vsftpd 서비스 관련 파일",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>파일·Directory</th><th>설명</th></tr></thead><tbody><tr><td><code>/etc/vsftpd</code></td><td>vsftpd의 주요 설정·관리 File Directory</td></tr><tr><td><code>/etc/vsftpd/vsftpd.conf</code></td><td>vsftpd 주 설정 File</td></tr><tr><td><code>/etc/vsftpd/ftpusers</code></td><td>PAM 사용 여부와 관계없이 FTP 접속을 금지할 사용자 목록</td></tr><tr><td><code>/etc/vsftpd/user_list</code></td><td><code>userlist_deny</code> 값에 따라 접속 허용·거부에 사용할 사용자 목록</td></tr><tr><td><code>/etc/rc.d/init.d/vsftpd</code></td><td>전통적 SysV 환경의 vsftpd 시작·중지 Script</td></tr><tr><td><code>/etc/xinetd.d/vsftpd</code></td><td>xinetd 방식으로 실행할 때 사용하는 Service 설정 File</td></tr><tr><td><code>/var/log/xferlog</code></td><td>FTP Upload·Download 전송 Log</td></tr></tbody></table></div><p>배포판과 Version에 따라 File 위치나 Service 관리방식은 달라질 수 있으므로 운영환경의 실제 설정을 함께 확인합니다.</p>`
          },
          {
            id: "ftp-security-summary", title: "SECTION 31 핵심 흐름",
            content: `<div class="important-box"><span class="box-title">전체 흐름</span><p><strong>FTP = 제어·데이터 연결 분리 → Active는 Server가 Data 연결 시작, Passive는 Client가 시작 → 기본 FTP는 평문 → FTPS는 FTP+TLS, SFTP는 SSH 기반 → Anonymous·TFTP는 최소 권한과 격리 → Bounce Attack은 PORT 목적지 검증 → ftpusers·TCP Wrapper·Daemon 설정·Log로 접근통제</strong></p></div><div class="table-scroll"><table class="concept-table"><thead><tr><th>문제 키워드</th><th>정답</th></tr></thead><tbody><tr><td>TCP 21 제어, TCP 20 Active Data</td><td>FTP</td></tr><tr><td>PORT 명령, Server가 Data 연결 시작</td><td>Active Mode</td></tr><tr><td>PASV 명령, Client가 Data 연결 시작</td><td>Passive Mode</td></tr><tr><td>UDP 69, 512Byte Block, ACK</td><td>TFTP</td></tr><tr><td>FTP에 TLS 적용</td><td>FTPS</td></tr><tr><td>SSH 기반 File 전송</td><td>SFTP</td></tr><tr><td>FTP Server를 경유한 제3자 Port Scan</td><td>FTP Bounce Attack</td></tr><tr><td>FTP Login 금지 계정목록</td><td>ftpusers</td></tr></tbody></table></div>`
          }
        ],
        content: ""
      },
      {
        id: "section-32",
        number: 32,
        title: "이메일 보안",
        subtopics: [
          {
            id: "email-structure-overview", title: "전자우편 구조와 구성요소",
            content: `<p>전자우편은 사용자가 작성한 메시지가 여러 <strong>Mail Agent</strong>를 거쳐 수신자의 Mailbox에 저장되고, 수신자가 이를 가져오는 구조로 동작합니다.</p><div class="table-scroll"><table class="concept-table"><thead><tr><th>구성요소</th><th>역할</th><th>대표 예</th></tr></thead><tbody><tr><td><strong>MUA</strong><br><span class="term-en">Mail User Agent</span></td><td>사용자가 메일을 작성·송수신·관리하는 Client Program</td><td>Outlook, Thunderbird</td></tr><tr><td><strong>MTA</strong><br><span class="term-en">Mail Transfer Agent</span></td><td>주소를 해석하고 SMTP로 다른 Mail Server에 메일을 전달·중계</td><td>sendmail, qmail</td></tr><tr><td><strong>MDA</strong><br><span class="term-en">Mail Delivery Agent</span></td><td>MTA가 받은 메일을 최종 수신자의 Mailbox에 저장</td><td>procmail</td></tr><tr><td><strong>MRA</strong><br><span class="term-en">Mail Retrieval/Access Agent</span></td><td>Mailbox의 메일을 MUA가 POP3·IMAP으로 가져오게 함</td><td>POP3·IMAP Server</td></tr></tbody></table></div><div class="important-box"><span class="box-title">구성요소 흐름</span><p><strong>MUA → MTA → MTA → MDA → Mailbox → MRA → MUA</strong></p></div>`
          },
          {
            id: "email-delivery-flow", title: "전자우편 전달 과정",
            content: `<ol><li>송신자가 MUA에서 메시지를 작성하고 송신 Mail Server의 MTA에 전달합니다.</li><li>송신 MTA는 수신자 주소의 Domain을 확인하고 DNS의 MX 정보 등을 이용해 수신 Mail Server를 찾습니다.</li><li>송신 MTA와 수신 MTA가 SMTP로 메시지를 전달합니다.</li><li>수신 MDA가 메시지를 수신자의 Mailbox에 저장합니다.</li><li>수신자는 MUA에서 POP3 또는 IMAP을 사용해 Mailbox의 메시지를 확인합니다.</li></ol><p>같은 Mail Server 안의 사용자에게 보내는 경우에는 외부 중계를 거치지 않고 내부 MDA가 Mailbox로 전달할 수 있습니다.</p>`
          },
          {
            id: "smtp-overview", title: "SMTP 개요와 특징",
            content: `<p><strong>SMTP(Simple Mail Transfer Protocol)</strong>는 인터넷에서 전자우편을 전송하는 표준 응용계층 Protocol입니다. 송신자의 MUA에서 MTA로 메일을 제출하거나 MTA 사이에서 메일을 중계할 때 사용합니다.</p><ul><li>Client와 Server가 <strong>명령(Command)과 응답(Response)</strong>을 주고받는 방식으로 동작합니다.</li><li>기본 SMTP 자체는 메시지 기밀성을 제공하지 않으므로 안전한 전송을 위해 별도의 암호화 계층이나 메시지 암호화가 필요합니다.</li><li>수신 Mail Server를 찾을 때 DNS의 Mail 교환 정보를 이용합니다.</li><li>메일을 보내는 Protocol이며, Mailbox에서 메일을 가져오는 기능은 POP3·IMAP이 담당합니다.</li></ul>`
          },
          {
            id: "smtp-command-response", title: "SMTP 명령과 응답 구조",
            content: `<p>SMTP 명령은 <strong>명령어 + 선택적 인수</strong>로 구성되며, Server의 응답은 일반적으로 세 자리 숫자 상태코드와 설명문으로 구성됩니다.</p><div class="table-scroll"><table class="concept-table"><thead><tr><th>응답 범위</th><th>의미</th></tr></thead><tbody><tr><td><strong>2xx</strong></td><td>요청 성공·완료</td></tr><tr><td><strong>3xx</strong></td><td>추가 정보나 입력이 필요함</td></tr><tr><td><strong>4xx</strong></td><td>일시적 오류로 나중에 재시도 가능</td></tr><tr><td><strong>5xx</strong></td><td>영구적 오류 또는 요청 거부</td></tr></tbody></table></div><p>SMTP 명령·응답은 HTTP처럼 문자 기반이므로 통신 흐름을 사람이 읽고 분석하기 쉽습니다.</p>`
          },
          {
            id: "smtp-commands", title: "대표 SMTP 명령",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>명령</th><th>핵심 역할</th></tr></thead><tbody><tr><td><strong>HELO</strong></td><td>Client가 자신의 Domain을 알리고 SMTP Session을 초기화</td></tr><tr><td><strong>EHLO</strong></td><td>확장 SMTP 기능을 사용하는 Extended HELO</td></tr><tr><td><strong>MAIL FROM</strong></td><td>송신자 주소를 지정하여 Mail Transaction 시작</td></tr><tr><td><strong>RCPT TO</strong></td><td>수신자 주소 지정. 여러 명이면 반복 사용</td></tr><tr><td><strong>DATA</strong></td><td>Header와 본문을 포함한 실제 메시지 입력 시작</td></tr><tr><td><strong>RSET</strong></td><td>현재 Mail Transaction을 취소하고 상태 초기화</td></tr><tr><td><strong>VRFY</strong></td><td>지정한 사용자·Mailbox의 존재 여부 확인</td></tr><tr><td><strong>EXPN</strong></td><td>Mailing List의 구성원 목록 확장 요청</td></tr><tr><td><strong>HELP</strong></td><td>지원 명령에 대한 도움말 요청</td></tr><tr><td><strong>NOOP</strong></td><td>Session 상태만 확인하고 아무 작업도 하지 않음</td></tr><tr><td><strong>QUIT</strong></td><td>SMTP Session 종료</td></tr></tbody></table></div><div class="important-box"><span class="box-title">보안 주의</span><p><strong>VRFY·EXPN</strong>은 사용자나 Mailing List 정보를 노출할 수 있으므로 운영 Server에서는 제한하는 것이 안전합니다.</p></div>`
          },
          {
            id: "pop3-overview", title: "POP3(Post Office Protocol version 3)",
            content: `<p><strong>POP3</strong>는 Mail Server의 Mailbox에 도착한 메시지를 Client가 내려받기 위한 단순한 Protocol입니다.</p><ul><li>전통적으로 TCP <strong>110번 Port</strong>를 사용합니다.</li><li>Client가 Server에 연결한 뒤 <strong>USER·PASS</strong> 등으로 인증하고 메시지를 내려받습니다.</li><li>기본 사용방식은 Mail을 Local Client로 가져와 관리하는 형태에 적합합니다.</li><li>구조가 단순하지만 여러 기기에서 폴더·읽음 상태 등을 일관되게 관리하는 기능은 제한적입니다.</li></ul>`
          },
          {
            id: "imap4-overview", title: "IMAP4(Internet Message Access Protocol version 4)",
            content: `<p><strong>IMAP4</strong>는 Mail을 Server에 보관한 채 여러 기기에서 동기화하여 관리하기 위한 Protocol입니다.</p><ul><li>전통적으로 TCP <strong>143번 Port</strong>를 사용합니다.</li><li>메시지 Header를 먼저 보고 필요한 메시지만 선택하여 내려받을 수 있습니다.</li><li>Server에서 Mailbox를 검색할 수 있습니다.</li><li>메일 삭제 표시, Flag 설정, 이름 변경 등 Server의 Mailbox 상태를 관리할 수 있습니다.</li><li>여러 Mailbox·Folder를 계층적으로 구성할 수 있습니다.</li></ul>`
          },
          {
            id: "pop3-imap-comparison", title: "POP3·IMAP4 비교",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>POP3</th><th>IMAP4</th></tr></thead><tbody><tr><td><strong>핵심 목적</strong></td><td>메일을 Client로 내려받기</td><td>Server의 Mailbox를 원격 관리·동기화</td></tr><tr><td><strong>전통적 Port</strong></td><td>TCP 110</td><td>TCP 143</td></tr><tr><td><strong>보관 중심</strong></td><td>Local Client 중심</td><td>Mail Server 중심</td></tr><tr><td><strong>여러 기기 사용</strong></td><td>상태 동기화가 제한적</td><td>읽음·Flag·Folder 상태 동기화에 유리</td></tr><tr><td><strong>Server 검색·Folder</strong></td><td>기능이 단순함</td><td>검색·계층 Folder 등 다양한 기능</td></tr></tbody></table></div>`
          },
          {
            id: "pem-overview", title: "PEM(Privacy Enhanced Mail)",
            content: `<p><strong>PEM</strong>은 IETF에서 Internet Draft 단계로 제안한 전자우편 보안기술로, 기밀성·인증·무결성·부인방지를 목표로 합니다.</p><ul><li>기존 전자우편 Protocol을 이용하면서 암호화 정보, 전자서명, 암호화 방법 등을 메시지 본문에 Text 형식으로 구성합니다.</li><li>중앙집중적 인증·구현의 복잡성 때문에 널리 사용되지는 못했습니다.</li></ul><div class="table-scroll"><table class="concept-table"><thead><tr><th>PEM</th><th>PGP</th><th>S/MIME</th></tr></thead><tbody><tr><td>중앙집중 인증구조, Internet 표준 지향</td><td>분산 신뢰망, 구현·배포가 비교적 자유로움</td><td>X.509 인증서 기반, MIME 통합</td></tr></tbody></table></div>`
          },
          {
            id: "pgp-overview", title: "PGP(Pretty Good Privacy) 개요",
            content: `<p><strong>PGP</strong>는 Phil Zimmermann이 개발한 전자우편·File 보호용 공개 Software로, 암호화와 전자서명을 결합하여 기밀성·인증·무결성 등을 제공합니다.</p><ul><li>전자서명, 대칭키 암호, 공개키 암호, 압축과 Radix-64 변환을 조합합니다.</li><li>특정 OS에 종속되지 않고 여러 환경에서 사용할 수 있도록 설계되었습니다.</li><li>중앙 CA에 전적으로 의존하지 않고 사용자 간 신뢰를 연결하는 <strong>Web of Trust</strong>를 사용합니다.</li></ul>`
          },
          {
            id: "pgp-keyring-trust", title: "PGP 키링과 신뢰망",
            content: `<p>PGP 사용자는 두 종류의 Key Ring을 관리합니다.</p><div class="table-scroll"><table class="concept-table"><thead><tr><th>키링</th><th>저장 내용</th></tr></thead><tbody><tr><td><strong>Private-Key Ring</strong></td><td>자신이 보유한 개인키와 관련 식별정보</td></tr><tr><td><strong>Public-Key Ring</strong></td><td>통신 상대의 공개키와 소유자·신뢰정보</td></tr></tbody></table></div><p><strong>Web of Trust</strong>는 사용자가 다른 사용자의 공개키에 직접 서명하여 신뢰관계를 확장합니다. 동일인을 나타내는 공개키라도 서로 다른 사람이 부여한 신뢰수준은 다를 수 있습니다.</p><div class="important-box"><span class="box-title">PGP 신뢰 핵심</span><p><strong>중앙 CA 중심이 아니라 사용자가 서로의 공개키를 인증</strong>합니다.</p></div>`
          },
          {
            id: "pgp-security-services", title: "PGP가 제공하는 5가지 기능",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>기능</th><th>기본 처리</th></tr></thead><tbody><tr><td><strong>기밀성</strong></td><td>난수 Session Key로 메시지를 대칭키 암호화하고, Session Key는 수신자의 공개키로 암호화</td></tr><tr><td><strong>인증·전자서명</strong></td><td>메시지 Hash를 송신자의 개인키로 서명하고 수신자가 송신자의 공개키로 확인</td></tr><tr><td><strong>압축</strong></td><td>서명 후 암호화 전에 ZIP 방식으로 압축하여 전송량 절감</td></tr><tr><td><strong>전자우편 호환성</strong></td><td>Binary 결과를 <strong>Radix-64</strong> ASCII Text로 변환</td></tr><tr><td><strong>분할·재결합</strong></td><td>큰 메시지를 Mail System의 크기 제한에 맞게 분할하고 수신 측에서 재결합</td></tr></tbody></table></div>`
          },
          {
            id: "pgp-confidentiality-process", title: "PGP 기밀성 제공 과정",
            content: `<ol><li>송신자가 메시지를 생성합니다.</li><li>난수로 일회용 <strong>Session Key</strong>를 생성합니다.</li><li>Session Key로 메시지를 대칭키 암호화합니다.</li><li>수신자의 공개키로 Session Key를 암호화합니다.</li><li>암호화된 Session Key와 암호문을 결합하여 전송합니다.</li><li>수신자는 자신의 개인키로 Session Key를 복호화합니다.</li><li>복구한 Session Key로 메시지를 복호화합니다.</li></ol><p>빠른 대칭키 암호로 본문을 처리하고 공개키 암호로 Session Key를 보호하는 <strong>Hybrid 방식</strong>입니다.</p>`
          },
          {
            id: "pgp-authentication-process", title: "PGP 인증·전자서명 과정",
            content: `<ol><li>송신자가 메시지의 Hash 값을 계산합니다.</li><li>Hash 값을 송신자의 개인키로 암호화하여 전자서명을 만듭니다.</li><li>메시지와 전자서명을 결합하고 압축·Radix-64 변환 등을 거쳐 전송합니다.</li><li>수신자는 송신자의 공개키로 전자서명을 복호화해 Hash 값을 얻습니다.</li><li>수신 메시지에서 직접 계산한 Hash와 비교합니다.</li><li>두 값이 같으면 송신자 인증과 메시지 무결성을 확인합니다.</li></ol><p>기밀성과 인증을 함께 제공할 때는 일반적으로 <strong>서명한 뒤 압축하고, Session Key로 암호화</strong>합니다.</p>`
          },
          {
            id: "pgp-algorithms-compatibility", title: "PGP 알고리즘과 호환성 처리",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>목적</th><th>교재의 대표 항목</th></tr></thead><tbody><tr><td><strong>대칭키 암호</strong></td><td>IDEA, CAST, 3DES 등</td></tr><tr><td><strong>공개키 암호</strong></td><td>RSA, ElGamal</td></tr><tr><td><strong>전자서명·Hash</strong></td><td>RSA·DSS, SHA-1·MD5 등</td></tr><tr><td><strong>압축</strong></td><td>ZIP</td></tr><tr><td><strong>전자우편 호환성</strong></td><td>Radix-64</td></tr></tbody></table></div><div class="important-box"><span class="box-title">구형 알고리즘 주의</span><p>위 표의 MD5·SHA-1·IDEA·3DES 등은 교재의 PGP 처리 구조를 이해하기 위한 역사적·시험용 예시입니다. 실제 신규 시스템에서는 안전성이 검증된 최신 알고리즘과 구현을 사용해야 합니다.</p></div>`
          },
          {
            id: "mime-overview", title: "MIME 개요",
            content: `<p><strong>MIME(Multipurpose Internet Mail Extensions)</strong>은 ASCII Text 중심이던 전자우편에서 한글을 포함한 비ASCII Text, Image, Audio, Video, Application File 등을 전송할 수 있도록 메시지 형식과 변환 규칙을 확장합니다.</p><ul><li>송신 측은 비ASCII Data를 전송 가능한 형태로 변환합니다.</li><li>수신 측은 MIME Header를 보고 원래 형식으로 해석·복원합니다.</li><li>전자우편 Protocol 자체를 바꾸기보다 기존 Header에 MIME 정보를 추가합니다.</li></ul>`
          },
          {
            id: "mime-headers-content-types", title: "MIME 헤더와 내용 유형",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>MIME Header</th><th>역할</th></tr></thead><tbody><tr><td><strong>MIME-Version</strong></td><td>사용한 MIME Version 표시</td></tr><tr><td><strong>Content-Type</strong></td><td>본문 Data의 유형과 Subtype 지정</td></tr><tr><td><strong>Content-Transfer-Encoding</strong></td><td>전송을 위해 적용한 Encoding 방식 지정</td></tr><tr><td><strong>Content-ID</strong></td><td>여러 부분으로 구성된 메시지 안의 개별 내용을 식별</td></tr><tr><td><strong>Content-Description</strong></td><td>본문 내용에 대한 설명</td></tr></tbody></table></div><p>대표 Content-Type은 <strong>Text, Multipart, Message, Image, Video, Audio, Application</strong>이며 Slash 뒤에 Subtype을 적어 <code>text/plain</code>, <code>image/jpeg</code>처럼 표현합니다.</p>`
          },
          {
            id: "mime-base64", title: "Base64 변환",
            content: `<p><strong>Base64</strong>는 Binary Data를 Mail System이 처리하기 쉬운 ASCII 문자로 표현하는 Encoding입니다.</p><ol><li>입력 Data를 24bit 단위로 묶습니다.</li><li>24bit를 네 개의 6bit 단위로 분할합니다.</li><li>각 6bit 값을 Base64 문자표의 문자로 변환합니다.</li><li>입력 길이가 3Byte 배수가 아니면 Padding을 사용합니다.</li></ol><div class="important-box"><span class="box-title">혼동 주의</span><p><strong>Base64는 암호화가 아니라 Encoding</strong>이므로 기밀성을 제공하지 않습니다.</p></div>`
          },
          {
            id: "smime-overview", title: "S/MIME 개요와 동작",
            content: `<p><strong>S/MIME(Secure/Multipurpose Internet Mail Extensions)</strong>은 MIME 메시지에 암호화와 전자서명을 적용하는 전자우편 보안표준입니다. RSA Data Security의 기술과 <strong>X.509 인증서</strong> 기반 공개키 구조를 사용합니다.</p><ol><li>사용자가 Mail Client에서 메시지를 작성합니다.</li><li>S/MIME 처리를 적용해 전자서명·암호화된 MIME 메시지로 변환합니다.</li><li>일반 SMTP가 처리할 수 있는 형태로 Mail Server에 전송합니다.</li><li>수신 Client가 S/MIME 인증서와 개인키를 이용해 서명을 검증하고 복호화합니다.</li></ol><p>보안기능은 Mail Client에서 적용되므로 SMTP Server가 메시지 내용을 직접 보호하지 않아도 종단간 보안서비스를 제공할 수 있습니다.</p>`
          },
          {
            id: "smime-services-content", title: "S/MIME 보안서비스와 콘텐츠 유형",
            content: `<p>S/MIME는 메시지의 <strong>기밀성·무결성·사용자 인증·송신 사실 부인방지</strong>를 제공합니다.</p><div class="table-scroll"><table class="concept-table"><thead><tr><th>콘텐츠 유형</th><th>핵심 특징</th></tr></thead><tbody><tr><td><strong>Enveloped Data</strong></td><td>메시지를 Session Key로 암호화하고, 각 수신자의 공개키로 Session Key를 암호화</td></tr><tr><td><strong>Signed Data</strong></td><td>Hash와 전자서명을 메시지와 함께 Binary 형태로 전송</td></tr><tr><td><strong>Clear-Signed Data</strong></td><td>본문은 평문으로 두고 서명만 붙여 S/MIME를 모르는 수신자도 본문을 읽을 수 있음</td></tr><tr><td><strong>Signed and Enveloped Data</strong></td><td>전자서명과 암호화를 함께 적용하며 일반적으로 서명 후 암호화</td></tr></tbody></table></div>`
          },
          {
            id: "smime-certificates-functions", title: "S/MIME 인증서 처리와 추가 기능",
            content: `<ul><li>S/MIME는 공개키 인증에 <strong>X.509 v3 인증서</strong>를 사용합니다.</li><li>인증기관(CA)의 정책에 따라 Email 주소·Identity 등을 확인한 뒤 인증서를 발급합니다.</li><li>수신자는 인증서의 유효성, 신뢰경로, 만료·폐지 여부를 확인하여 서명자를 검증합니다.</li><li>표준은 서명된 수신확인, 보안 Label, Secure Mailing List, Signing Certificate 같은 확장 보안서비스도 정의합니다.</li></ul><div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>PGP</th><th>S/MIME</th></tr></thead><tbody><tr><td><strong>신뢰구조</strong></td><td>Web of Trust·Key Ring</td><td>CA·X.509 인증서</td></tr><tr><td><strong>메시지 형식</strong></td><td>PGP 자체 형식과 Radix-64</td><td>MIME 구조에 보안기능 통합</td></tr><tr><td><strong>주요 강점</strong></td><td>분산 신뢰와 유연성</td><td>기업 Mail Client·PKI 연동</td></tr></tbody></table></div>`
          },
          {
            id: "smime-algorithms", title: "S/MIME 암호 알고리즘 정리",
            content: `<p>교재에서는 S/MIME의 처리 예로 RSA·DSS, SHA-1·MD5, RC2·3DES 등을 제시합니다. 전체 구조의 핵심은 다음과 같습니다.</p><ul><li><strong>전자서명</strong>: 메시지 Hash를 송신자 개인키로 서명</li><li><strong>메시지 암호화</strong>: 난수로 생성한 Session Key로 본문을 대칭키 암호화</li><li><strong>Session Key 보호</strong>: 수신자 공개키로 Session Key를 암호화</li><li><strong>전자우편 호환성</strong>: MIME와 Base64 등의 Encoding을 이용</li></ul><p>MD5·SHA-1·RC2·3DES는 현재 신규 시스템에 권장되는 선택이 아니므로, 시험에서는 구조와 역사적 Algorithm 조합을 구분하여 학습합니다.</p>`
          },
          {
            id: "spf-overview", title: "SPF(Sender Policy Framework)",
            content: `<p><strong>SPF</strong>는 발신 Domain이 메일을 보낼 수 있는 Mail Server의 IP 정보를 DNS에 공개하고, 수신 Server가 실제 발신 IP와 비교하는 발신자 인증기술입니다.</p><ol><li>발신 Domain 관리자가 허용 Mail Server 정보를 DNS의 SPF Record로 등록합니다.</li><li>메일이 수신 Server에 도착합니다.</li><li>수신 Server가 발신 Domain의 SPF Record를 DNS에서 조회합니다.</li><li>실제 접속 IP가 허용목록에 포함되는지 확인합니다.</li><li>결과에 따라 통과·격리·거부 등 정책을 적용합니다.</li></ol><p>발신주소를 속이는 Spoofing을 줄이는 데 유용하지만, <strong>메일 본문이나 Header의 전자서명·무결성을 직접 제공하지는 않습니다.</strong></p>`
          },
          {
            id: "dkim-overview", title: "DKIM(DomainKeys Identified Mail)",
            content: `<p><strong>DKIM</strong>은 발신 Domain이 메일 Header와 본문 일부에 전자서명을 붙이고, 수신자가 DNS에 공개된 Domain 공개키로 서명을 검증하는 기술입니다.</p><ol><li>발신 Mail Server가 Domain 개인키로 메시지에 서명하고 DKIM-Signature Header를 추가합니다.</li><li>발신 Domain의 DNS에 Selector별 공개키를 등록합니다.</li><li>수신 Mail Server가 DKIM Header의 Domain·Selector를 확인합니다.</li><li>DNS에서 공개키를 조회하여 전자서명을 검증합니다.</li><li>검증 성공 시 메시지가 서명 후 변조되지 않았고 해당 Domain이 서명했음을 확인합니다.</li></ol><div class="important-box"><span class="box-title">S/MIME와 차이</span><p><strong>S/MIME는 사용자 중심 서명, DKIM은 발신 Domain·Mail Server 중심 서명</strong>입니다.</p></div>`
          },
          {
            id: "dmarc-overview", title: "DMARC(Domain-based Message Authentication, Reporting and Conformance)",
            content: `<p><strong>DMARC</strong>는 SPF와 DKIM의 인증결과를 Header의 발신 Domain과 정렬(Alignment)하여 판단하고, 실패 메일의 처리정책과 보고체계를 제공하는 기술입니다.</p><ul><li><strong>정렬</strong>: 사용자가 보는 From Domain이 SPF 또는 DKIM으로 인증된 Domain과 연결되는지 확인</li><li><strong>정책</strong>: 인증 실패 시 <code>none</code>, <code>quarantine</code>, <code>reject</code> 중 Domain 정책 적용</li><li><strong>보고</strong>: 수신 측이 인증결과와 실패현황을 발신 Domain 관리자에게 전달</li></ul><div class="important-box"><span class="box-title">인증기술 관계</span><p><strong>SPF = 발신 IP / DKIM = Domain 전자서명 / DMARC = 정렬 + 처리정책 + 보고</strong></p></div>`
          },
          {
            id: "email-auth-comparison", title: "SPF·DKIM·DMARC 비교",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>기술</th><th>검증 대상</th><th>DNS 정보</th><th>핵심 한계·보완</th></tr></thead><tbody><tr><td><strong>SPF</strong></td><td>발신 Server IP가 허용되었는지</td><td>허용 IP·Server 정책</td><td>메시지 내용 서명은 하지 않음</td></tr><tr><td><strong>DKIM</strong></td><td>Domain 서명과 메시지 무결성</td><td>Selector별 공개키</td><td>사용자에게 보이는 From과 별도일 수 있음</td></tr><tr><td><strong>DMARC</strong></td><td>SPF/DKIM 결과와 From Domain 정렬</td><td>정책·보고 주소</td><td>SPF·DKIM 설정과 운영이 전제</td></tr></tbody></table></div>`
          },
          {
            id: "spam-response-overview", title: "스팸 메일의 기술적 대응",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>대응 위치</th><th>주요 방식</th></tr></thead><tbody><tr><td><strong>Mail Server 차단</strong></td><td>Header·본문·첨부파일 검사, 송신 IP·주소 Blacklist, DNS 기반 차단, 수신자·시간대·전송량 기준 통제</td></tr><tr><td><strong>중계 통제</strong></td><td>인증되지 않은 사용자의 Relay를 차단하여 Open Relay 악용 방지</td></tr><tr><td><strong>Spam Filter Solution</strong></td><td>Mail Server 앞단에서 SMTP Traffic을 검사하고 정책·Pattern·평판 기반으로 분류</td></tr><tr><td><strong>Mail Client 보호</strong></td><td>사용자 Blacklist, 발신자 차단, Junk Mail 규칙 적용</td></tr><tr><td><strong>발신자 인증</strong></td><td>SPF·DKIM·DMARC 결과를 Filtering 정책에 반영</td></tr></tbody></table></div>`
          },
          {
            id: "spam-filter-functions", title: "스팸 필터 솔루션의 구성과 기능",
            content: `<p>스팸 Filter는 일반적으로 Mail Server 앞단의 Proxy 또는 Gateway처럼 동작하며 들어오고 나가는 SMTP Traffic을 검사합니다.</p><div class="table-scroll"><table class="concept-table"><thead><tr><th>필터</th><th>검사 대상</th></tr></thead><tbody><tr><td><strong>Mail Header Filtering</strong></td><td>From·To·Cc·Bcc, 비정상 Header와 Reply-To 등을 검사</td></tr><tr><td><strong>Subject Filtering</strong></td><td>광고·선정성 등 특정 문자열·Pattern 검사</td></tr><tr><td><strong>Body Filtering</strong></td><td>본문의 Keyword·URL·특정 문구와 악성 Pattern 검사</td></tr><tr><td><strong>Attachment Filtering</strong></td><td>확장자·파일명·크기·개수·실행 가능형식 등을 기준으로 차단</td></tr></tbody></table></div><p>정책만으로 오탐·미탐을 완전히 제거할 수 없으므로 Log 확인, Pattern 갱신과 사용자 신고·격리 절차를 함께 운영합니다.</p>`
          },
          {
            id: "sendmail-overview-files", title: "sendmail 개요와 주요 파일",
            content: `<p><strong>sendmail</strong>은 SMTP를 이용해 전자우편을 전송·중계하는 대표적인 MTA Software입니다.</p><div class="table-scroll"><table class="concept-table"><thead><tr><th>파일·Directory</th><th>역할</th></tr></thead><tbody><tr><td><code>/usr/sbin/sendmail</code></td><td>sendmail 주 실행 File</td></tr><tr><td><code>/usr/bin/makemap</code></td><td>access 등 Text 정책 File을 Database Map으로 생성</td></tr><tr><td><code>/var/spool/mqueue</code></td><td>전송 대기 중인 Message Queue</td></tr><tr><td><code>/var/spool/mail</code></td><td>사용자별 Mailbox가 저장되는 Directory</td></tr><tr><td><code>/etc/mail/access</code></td><td>Spam·Relay 차단을 위한 발신지·Domain 접근정책</td></tr><tr><td><code>/etc/mail/sendmail.cf</code></td><td>sendmail 주 설정 File</td></tr></tbody></table></div>`
          },
          {
            id: "sendmail-access-control", title: "/etc/mail/access 접근제어",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>제어 값</th><th>동작</th></tr></thead><tbody><tr><td><strong>RELAY</strong></td><td>지정 Host·Domain의 Mail Relay 허용</td></tr><tr><td><strong>REJECT</strong></td><td>접속 또는 Mail 수신을 거부하고 오류 응답 반환</td></tr><tr><td><strong>DISCARD</strong></td><td>송신 측에는 수신한 것처럼 응답하지만 메시지는 폐기</td></tr><tr><td><strong>OK</strong></td><td>다른 규칙과 관계없이 Mail 수신 허용</td></tr><tr><td><strong>501 메시지</strong></td><td>사용자에게 지정한 오류문구를 반환하며 거부</td></tr></tbody></table></div><p>수정한 <code>/etc/mail/access</code>는 환경에 맞는 <strong>makemap</strong> 명령으로 Database Map을 다시 생성해야 적용됩니다.</p><div class="important-box"><span class="box-title">운영 핵심</span><p><strong>불필요한 RELAY를 허용하지 않고 Open Relay를 차단</strong>해야 Spam 발송 경유지로 악용되는 것을 막을 수 있습니다.</p></div>`
          },
          {
            id: "email-security-summary", title: "SECTION 32 핵심 흐름",
            content: `<div class="important-box"><span class="box-title">전체 흐름</span><p><strong>MUA가 작성 → MTA가 SMTP로 전달 → MDA가 Mailbox 저장 → MRA가 POP3·IMAP으로 제공 → PGP·S/MIME가 메시지 보안 → MIME·Base64가 다양한 Content 전송 → SPF·DKIM·DMARC가 발신 Domain 인증 → Filter·sendmail access가 Spam과 Relay를 통제</strong></p></div><div class="table-scroll"><table class="concept-table"><thead><tr><th>문제 키워드</th><th>정답</th></tr></thead><tbody><tr><td>메일 전송·중계, 명령과 3자리 응답</td><td>SMTP</td></tr><tr><td>TCP 110, 내려받기 중심</td><td>POP3</td></tr><tr><td>TCP 143, Server Mailbox 동기화</td><td>IMAP4</td></tr><tr><td>Web of Trust·Key Ring·Radix-64</td><td>PGP</td></tr><tr><td>MIME+X.509 인증서 기반 보안</td><td>S/MIME</td></tr><tr><td>DNS의 허용 발신 Server IP</td><td>SPF</td></tr><tr><td>Domain 개인키 서명·DNS 공개키</td><td>DKIM</td></tr><tr><td>SPF/DKIM 정렬·정책·보고</td><td>DMARC</td></tr><tr><td>SMTP Relay 허용·거부 정책 File</td><td>/etc/mail/access</td></tr></tbody></table></div>`
          }
        ],
        content: ""
      },
      {
        id: "section-33",
        number: 33,
        title: "웹 보안(Web Security)",
        subtopics: [
          {
            id: "web-security-overview", title: "웹 보안 개요와 필요성",
            content: `<p><strong>웹 보안(Web Security)</strong>은 Web Server, Browser, Application과 그 사이의 통신을 공격·정보노출·변조로부터 보호하는 활동입니다.</p><ul><li>최근 Web은 전자결제·광고·정보제공·업무처리 등 다양한 Service를 제공하므로 공격자가 노리는 정보와 기능이 많습니다.</li><li>Web Server는 다수의 사용자에게 공개되므로 취약점이 악용되면 개인정보 유출, Service 중단, 악성코드 유포와 내부망 침투로 이어질 수 있습니다.</li><li>HTTP는 기본적으로 평문 Protocol이므로 별도 보호가 없으면 Message가 노출·변조될 수 있습니다.</li></ul><div class="important-box"><span class="box-title">보호 범위</span><p><strong>통신구간 암호화 + Web Server 보안설정 + Application 입력검증 + 안전한 개발·운영</strong>을 함께 적용해야 합니다.</p></div>`
          },
          {
            id: "web-traffic-security-layers", title: "계층별 웹 트래픽 보호방법",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>적용 위치</th><th>대표 기술</th><th>특징</th></tr></thead><tbody><tr><td><strong>Network 계층</strong></td><td>IPSec</td><td>Application과 무관하게 IP Packet을 보호하며 End-to-End 또는 Tunnel 형태로 적용</td></tr><tr><td><strong>Transport 계층</strong></td><td>SSL/TLS</td><td>TCP 위에서 Application Data에 기밀성·무결성·인증 제공</td></tr><tr><td><strong>Application 계층</strong></td><td>S-HTTP, SET 등</td><td>특정 Web Message나 업무 Application에 보안기능 적용</td></tr></tbody></table></div><p>IPSec은 Host·Network 수준, SSL/TLS는 Socket 통신 수준, S-HTTP 등은 Application Message 수준에서 보호합니다.</p>`
          },
          {
            id: "ssl-tls-overview", title: "SSL/TLS 개요와 기본 개념",
            content: `<p><strong>SSL(Secure Sockets Layer)</strong>과 <strong>TLS(Transport Layer Security)</strong>는 Client와 Server 사이의 안전한 통신을 위한 Protocol입니다.</p><ul><li><strong>기밀성</strong>: 대칭키 암호로 Application Data를 암호화합니다.</li><li><strong>무결성</strong>: MAC 또는 AEAD 방식으로 전송 중 변경 여부를 확인합니다.</li><li><strong>인증</strong>: 일반적으로 Server 인증서를 검증하며 필요하면 Client 인증도 수행합니다.</li><li><strong>위치</strong>: TCP 위, HTTP·FTP·SMTP 같은 Application Protocol 아래에서 동작합니다.</li></ul><p>SSL이라는 명칭이 널리 쓰이지만 현재 표준 계열은 TLS이며, 교재의 SSL 내용은 역사적 Version과 TLS 발전과정을 함께 이해하기 위한 범위입니다.</p>`
          },
          {
            id: "ssl-tls-history", title: "SSL에서 TLS 1.3까지",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>Version</th><th>핵심 내용</th></tr></thead><tbody><tr><td><strong>SSL 2.0·3.0</strong></td><td>Netscape가 개발한 초기 규격. 현재는 구조적 취약점 때문에 사용하지 않음</td></tr><tr><td><strong>TLS 1.0</strong></td><td>SSL 3.0을 기반으로 IETF가 표준화</td></tr><tr><td><strong>TLS 1.1</strong></td><td>CBC 관련 보호 등을 보완</td></tr><tr><td><strong>TLS 1.2</strong></td><td>AES 계열과 GCM 같은 AEAD, SHA-2 계열 등 현대적 Cipher Suite 지원 확대</td></tr><tr><td><strong>TLS 1.3</strong></td><td>취약한 구형 Algorithm 제거, Handshake 단순화, 연결설정 지연 감소, ECDHE 기반 Forward Secrecy 강화</td></tr></tbody></table></div><div class="important-box"><span class="box-title">시험 주의</span><p><strong>SSL 3.0·TLS 1.0·1.1 및 MD5·SHA-1·DES·3DES 등은 역사·시험 범위로 구분</strong>하고 신규 환경에는 안전한 Version과 Cipher Suite를 사용합니다.</p></div>`
          },
          {
            id: "tls-architecture", title: "TLS 구조",
            content: `<p>TLS는 TCP 위에 <strong>Record Protocol</strong>을 두고, 그 위에서 여러 상위 Protocol과 Application Data를 처리하는 계층구조입니다.</p><div class="table-scroll"><table class="concept-table"><thead><tr><th>구성</th><th>역할</th></tr></thead><tbody><tr><td><strong>Handshake Protocol</strong></td><td>Version·Cipher Suite 협상, 인증서 검증, Key 교환</td></tr><tr><td><strong>ChangeCipherSpec</strong></td><td>협상된 암호 규격과 Key를 이후 Record부터 적용한다는 신호</td></tr><tr><td><strong>Alert Protocol</strong></td><td>경고·오류와 연결종료 상태 전달</td></tr><tr><td><strong>Heartbeat Protocol</strong></td><td>연결 상대가 정상 동작하는지 확인</td></tr><tr><td><strong>Record Protocol</strong></td><td>상위 Data를 분할·보호해 TCP로 전달</td></tr></tbody></table></div>`
          },
          {
            id: "tls-protocol-roles", title: "TLS 하위 프로토콜의 역할",
            content: `<ul><li><strong>Record</strong>는 모든 TLS Message를 운반하는 공통 계층입니다.</li><li><strong>Handshake</strong>는 통신 전 보안 Parameter와 공유 Secret을 합의합니다.</li><li><strong>ChangeCipherSpec</strong>는 Pending 상태의 암호설정을 Current 상태로 전환합니다.</li><li><strong>Alert</strong>는 Warning·Fatal 수준과 오류코드를 전달합니다.</li><li><strong>Heartbeat</strong>는 Application Data를 보내지 않고도 상대의 가용성을 확인합니다.</li></ul><div class="important-box"><span class="box-title">구조 암기</span><p><strong>Handshake·ChangeCipherSpec·Alert·Heartbeat·Application Data → Record → TCP → IP</strong></p></div>`
          },
          {
            id: "tls-handshake-overview", title: "TLS Handshake 개요",
            content: `<p><strong>Handshake Protocol</strong>은 암호통신을 시작하기 전에 Client와 Server가 보안기능을 협상하고 인증·Key 교환을 수행하는 과정입니다.</p><ol><li>지원 TLS Version과 Random 값을 교환합니다.</li><li>사용할 Cipher Suite와 압축방법 등을 선택합니다.</li><li>Server 인증서를 검증하고 필요하면 Client도 인증합니다.</li><li>Key 교환으로 공통 Secret과 Session Key를 생성합니다.</li><li>Finished Message로 지금까지의 협상 내용이 변조되지 않았는지 확인합니다.</li></ol>`
          },
          {
            id: "tls-handshake-messages", title: "Handshake 메시지 유형",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>Message</th><th>주요 내용</th></tr></thead><tbody><tr><td><strong>HelloRequest</strong></td><td>Server가 Client에 새 Handshake 시작 요청</td></tr><tr><td><strong>ClientHello</strong></td><td>Version, Random, Session ID, 지원 Cipher Suite와 압축방법</td></tr><tr><td><strong>ServerHello</strong></td><td>선택한 Version·Cipher Suite·압축방법, Server Random과 Session ID</td></tr><tr><td><strong>Certificate</strong></td><td>Server 또는 Client 인증서 Chain</td></tr><tr><td><strong>ServerKeyExchange</strong></td><td>인증서만으로 부족할 때 Key 교환 Parameter와 서명</td></tr><tr><td><strong>CertificateRequest</strong></td><td>Server가 Client 인증서 요구</td></tr><tr><td><strong>ServerHelloDone</strong></td><td>Server 측 초기 협상 Message 종료</td></tr><tr><td><strong>ClientKeyExchange</strong></td><td>Pre-Master Secret 또는 Key 교환용 공개값</td></tr><tr><td><strong>CertificateVerify</strong></td><td>Client 인증서 개인키 소유 증명</td></tr><tr><td><strong>Finished</strong></td><td>Handshake 전체의 Hash 기반 검증값</td></tr></tbody></table></div>`
          },
          {
            id: "tls-handshake-stages", title: "Handshake 4단계 흐름",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>단계</th><th>핵심 흐름</th><th>확인 결과</th></tr></thead><tbody><tr><td><strong>1. 보안기능 협상</strong></td><td>ClientHello ↔ ServerHello</td><td>Version, Cipher Suite, Random, Session ID 결정</td></tr><tr><td><strong>2. Server 인증·Key 교환</strong></td><td>Certificate → ServerKeyExchange → CertificateRequest → ServerHelloDone</td><td>Client가 Server 신원과 공개키 확인</td></tr><tr><td><strong>3. Client 인증·Key 교환</strong></td><td>ClientCertificate → ClientKeyExchange → CertificateVerify</td><td>공유 Secret 생성, 필요 시 Server가 Client 인증</td></tr><tr><td><strong>4. 협상 완료</strong></td><td>ChangeCipherSpec·Finished 상호 교환</td><td>새 Key 적용과 Handshake 무결성 확인</td></tr></tbody></table></div>`
          },
          {
            id: "tls-cipher-suite-session", title: "Cipher Suite와 Session 재사용",
            content: `<p><strong>Cipher Suite</strong>는 Key 교환·인증, 대칭키 암호, 무결성 보호 Algorithm의 조합을 나타냅니다. 예를 들어 이름에 RSA·AES·CBC·SHA256 등이 포함되면 각각 인증/Key 교환, 암호화 방식, 운영 Mode, Hash·MAC 계열을 의미합니다.</p><ul><li><strong>Random</strong>: Client와 Server가 각각 제공하며 Key 생성에 사용합니다.</li><li><strong>Session ID</strong>: 기존 Session을 재사용하는 Abbreviated Handshake 판단에 사용합니다.</li><li><strong>Pre-Master Secret → Master Secret → Key Block</strong> 순서로 필요한 암호 Key와 MAC Secret 등을 생성합니다.</li></ul><p>교재의 RSA Key 교환 설명은 전통적 TLS Handshake 구조이며, TLS 1.3은 Forward Secrecy를 위해 (EC)DHE 계열을 중심으로 사용합니다.</p>`
          },
          {
            id: "tls-record-protocol", title: "TLS Record 프로토콜",
            content: `<p><strong>Record Protocol</strong>은 상위 계층 Data를 TLS Record로 만들어 TCP에 전달합니다.</p><ol><li>상위 Data를 처리 가능한 크기의 <strong>Fragment</strong>로 분할합니다.</li><li>필요한 경우 압축합니다.</li><li>MAC을 계산하거나 AEAD 방식으로 무결성을 함께 보호합니다.</li><li>대칭키 암호화합니다.</li><li>Content Type·Version·Length Header를 붙여 전송합니다.</li></ol><p>수신 측은 역순으로 Header 확인 → 복호화 → 무결성 검증 → 압축해제 → 재조립을 수행합니다.</p><div class="important-box"><span class="box-title">제공 서비스</span><p><strong>기밀성(Confidentiality) + 메시지 무결성(Message Integrity)</strong></p></div>`
          },
          {
            id: "tls-control-protocols", title: "ChangeCipherSpec·Alert·Heartbeat",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>Protocol</th><th>핵심</th></tr></thead><tbody><tr><td><strong>ChangeCipherSpec</strong></td><td>협상된 CipherSpec과 Key를 적용하도록 Pending 상태를 Current 상태로 전환하는 1Byte Message</td></tr><tr><td><strong>Alert</strong></td><td>Level(Warning/Fatal)과 Description을 전달. Fatal 오류이면 연결 종료</td></tr><tr><td><strong>Heartbeat</strong></td><td>요청 Payload를 상대가 되돌려주게 하여 연결·상대의 정상 동작 여부 확인</td></tr></tbody></table></div>`
          },
          {
            id: "tls-attacks", title: "SSL/TLS 주요 공격과 대응",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>공격</th><th>원인·영향</th><th>대응</th></tr></thead><tbody><tr><td><strong>Heartbleed</strong></td><td>OpenSSL Heartbeat 길이검증 오류로 Server Memory의 민감정보 노출</td><td>취약 Version 갱신, 인증서·Key 재발급과 Credential 변경</td></tr><tr><td><strong>POODLE</strong></td><td>Downgrade로 SSL 3.0 CBC Padding 약점을 악용해 암호문 일부 추론</td><td>SSL 3.0 비활성화, 안전한 TLS Version 사용</td></tr><tr><td><strong>FREAK</strong></td><td>취약 Client·Server를 RSA Export급 약한 Cipher로 강등</td><td>취약 Cipher 제거와 관련 Software Update</td></tr></tbody></table></div><p>공통 원칙은 <strong>구형 Version·취약 Cipher Suite 비활성화, 최신 Patch 적용, 인증서·Key 수명주기 관리</strong>입니다.</p>`
          },
          {
            id: "perfect-forward-secrecy", title: "완전 순방향 비밀성(PFS)",
            content: `<p><strong>PFS(Perfect Forward Secrecy)</strong>는 장기 개인키가 나중에 노출되더라도 과거 Session의 Traffic을 복호화할 수 없게 하는 성질입니다.</p><ul><li>각 Session마다 임시 Key 교환값을 사용합니다.</li><li>공격자가 암호화 Traffic을 저장해 두었다가 Server 개인키를 탈취해도 과거 Session Key를 복구하기 어렵습니다.</li><li>DHE·ECDHE처럼 Ephemeral Key 교환을 사용하는 Cipher Suite가 대표적입니다.</li></ul><div class="important-box"><span class="box-title">비교</span><p><strong>장기 Key 보호만으로 부족 → Session별 임시 Key를 사용해 과거 통신까지 분리</strong></p></div>`
          },
          {
            id: "https-shttp-comparison", title: "HTTPS와 S-HTTP 비교",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>HTTPS</th><th>S-HTTP</th></tr></thead><tbody><tr><td><strong>의미</strong></td><td>HTTP over SSL/TLS</td><td>Secure HTTP, HTTP Message 보안 확장</td></tr><tr><td><strong>보호 단위</strong></td><td>Client와 Server 사이 연결 전체</td><td>개별 HTTP Message</td></tr><tr><td><strong>대표 Port·URL</strong></td><td>TCP 443, <code>https://</code></td><td>구현에 따라 Message별 보안표시</td></tr><tr><td><strong>특징</strong></td><td>Browser에서 광범위하게 사용</td><td>HTTP 형식을 유지하며 선택적으로 암호화·서명</td></tr></tbody></table></div><p>HTTPS는 URL·문서내용·Cookie·Header 등 통신구간 전체를 TLS로 보호하지만, 종단점 내부의 Application 취약점까지 해결하지는 못합니다.</p>`
          },
          {
            id: "iis-security-settings", title: "IIS 보안 설정",
            content: `<ul><li><strong>권한 설정</strong>: Directory·File별 읽기, 쓰기, 실행, Script 권한을 필요한 범위에만 부여합니다.</li><li><strong>관리자 Page 접근통제</strong>: 관리자 URL을 추측하기 어렵게 구성하고 인증·접근 IP를 제한합니다.</li><li><strong>Method 제한</strong>: 사용하지 않는 PUT·DELETE·TRACE 등 HTTP Method를 차단합니다.</li><li><strong>Header 정보 숨김</strong>: Server 종류·Version처럼 공격자에게 도움이 되는 정보를 최소화합니다.</li><li><strong>Upload Directory 분리</strong>: 실행권한이 없는 별도 위치에 저장하고 Web Root와 분리합니다.</li></ul><div class="important-box"><span class="box-title">권한 원칙</span><p>Upload Directory에 Script 실행권한까지 주면 Webshell이 동작할 수 있으므로 <strong>쓰기와 실행 권한을 함께 주지 않습니다.</strong></p></div>`
          },
          {
            id: "apache-security-settings", title: "Apache 보안 설정",
            content: `<p>Apache는 root로 시작하더라도 실제 Request 처리 Process는 권한이 낮은 전용 계정으로 실행하도록 설정합니다.</p><div class="table-scroll"><table class="concept-table"><thead><tr><th>설정</th><th>보안 의미</th></tr></thead><tbody><tr><td><strong>User / Group</strong></td><td>Apache Child Process 실행계정을 최소 권한으로 지정</td></tr><tr><td><strong>ServerTokens</strong></td><td>응답 Header에 노출되는 Server 종류·Version·Module 정보 최소화</td></tr><tr><td><strong>ServerSignature</strong></td><td>Error Page의 Server 정보표시 제한</td></tr><tr><td><strong>Options -Indexes</strong></td><td>Index File이 없을 때 Directory 목록노출 차단</td></tr><tr><td><strong>Options -FollowSymLinks</strong></td><td>Symbolic Link를 통한 의도하지 않은 File 접근 제한</td></tr><tr><td><strong>Timeout·KeepAlive</strong></td><td>연결자원 장기점유를 줄이도록 적절한 값 설정</td></tr><tr><td><strong>MaxClients·MaxRequestWorkers</strong></td><td>동시 처리 Request 수를 System 용량에 맞게 제한</td></tr><tr><td><strong>ErrorLog·LogLevel</strong></td><td>보안 Event를 기록하되 과도한 내부정보 노출 방지</td></tr></tbody></table></div>`
          },
          {
            id: "search-engine-information-leak", title: "검색엔진·robots.txt 정보노출",
            content: `<p>검색엔진은 HTML뿐 아니라 Server에 공개된 문서·임시파일·관리 Page까지 수집할 수 있습니다. <strong>robots.txt</strong>는 Crawler에게 수집하지 말아야 할 경로를 알리는 권고문이지 접근통제 수단이 아닙니다.</p><ul><li>민감한 URL을 robots.txt에 적으면 오히려 공격자에게 경로목록을 알려줄 수 있습니다.</li><li>인증·인가 없이 공개된 Data는 검색결과나 Cache에 남을 수 있습니다.</li><li>중요 Page는 Server 인증·권한검사로 보호하고 검색엔진 제거요청과 Cache 관리도 함께 수행합니다.</li></ul>`
          },
          {
            id: "sql-injection-overview", title: "SQL Injection 개요",
            content: `<p><strong>SQL Injection</strong>은 Application이 외부입력값을 안전하게 처리하지 않고 SQL 문의 일부로 결합할 때, 공격자가 SQL 구문을 조작해 Database 정보를 조회·변경하거나 인증을 우회하는 취약점입니다.</p><ul><li>Login·검색·게시판 Parameter처럼 DB Query에 사용되는 입력값에서 발생합니다.</li><li>참과 거짓을 만드는 조건, 주석, UNION, 오류유발 함수 등을 이용할 수 있습니다.</li><li>영향은 Data 유출·변조·삭제, 권한우회와 DB 계정 권한에 따른 추가 피해입니다.</li></ul><div class="important-box"><span class="box-title">발생 원인</span><p><strong>사용자 입력을 SQL 구조와 분리하지 않은 동적 Query 작성</strong></p></div>`
          },
          {
            id: "sql-injection-types", title: "SQL Injection 공격 유형",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>유형</th><th>핵심 원리</th></tr></thead><tbody><tr><td><strong>Form SQL Injection</strong></td><td>Login Form 등의 인증 Query 조건을 항상 참이 되도록 조작</td></tr><tr><td><strong>UNION SQL Injection</strong></td><td>원래 Query 결과에 공격자가 원하는 다른 SELECT 결과를 결합</td></tr><tr><td><strong>Error-Based</strong></td><td>의도적으로 DB 오류를 발생시켜 Error Message에서 정보획득</td></tr><tr><td><strong>Blind SQL Injection</strong></td><td>Error가 숨겨져도 참·거짓에 따른 응답차이나 시간차로 정보를 추론</td></tr></tbody></table></div><p>UNION 방식은 Column 수와 Data Type 호환이 필요하며, Blind 방식은 직접 결과를 보지 못하므로 여러 조건을 반복해 한 글자씩 추론합니다.</p>`
          },
          {
            id: "sql-injection-defense", title: "SQL Injection 대응",
            content: `<ol><li><strong>Prepared Statement·Parameter Binding</strong>으로 SQL 구조와 입력 Data를 분리합니다.</li><li>입력값의 Type·길이·형식을 Allowlist 기준으로 검증합니다.</li><li>DB Error Message와 Query 구조를 사용자에게 노출하지 않습니다.</li><li>Application용 DB 계정에는 조회·입력 등 필요한 최소 권한만 부여합니다.</li><li>동적 SQL 생성이 불가피한 식별자·정렬항목은 사전 정의목록에서만 선택합니다.</li><li>WAF와 Log 감시는 보조수단으로 사용하고 근본 원인은 Application Code에서 제거합니다.</li></ol><div class="important-box"><span class="box-title">핵심</span><p><strong>특수문자 치환만으로 끝내지 말고 Parameterized Query를 우선 적용</strong>합니다.</p></div>`
          },
          {
            id: "xss-overview", title: "XSS 개요",
            content: `<p><strong>XSS(Cross-Site Scripting)</strong>는 신뢰하는 Web Page에 공격자가 만든 Script가 포함되어 피해자의 Browser에서 실행되는 취약점입니다.</p><ul><li>공격대상은 Server 자체보다 Page를 열어보는 <strong>사용자의 Browser</strong>입니다.</li><li>Cookie·Session 정보탈취, 가짜화면 표시, 입력값 가로채기, 악성 Site 이동 등이 발생할 수 있습니다.</li><li>입력값이 HTML·속성·JavaScript·URL 같은 출력 Context에 맞게 처리되지 않을 때 발생합니다.</li></ul>`
          },
          {
            id: "xss-types", title: "Stored·Reflected·DOM XSS",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>유형</th><th>저장 위치·실행 흐름</th><th>특징</th></tr></thead><tbody><tr><td><strong>Stored XSS</strong></td><td>악성 Script가 게시물·DB 등에 저장되고 다른 사용자가 Page를 열 때 실행</td><td>지속적으로 여러 사용자에게 영향</td></tr><tr><td><strong>Reflected XSS</strong></td><td>조작된 URL·Form 입력이 Server 응답에 그대로 반영되어 즉시 실행</td><td>피해자가 조작 Link를 열도록 유도해야 함</td></tr><tr><td><strong>DOM-Based XSS</strong></td><td>Client Script가 URL·DOM Data를 안전하지 않게 HTML에 삽입</td><td>Server 응답에 Payload가 직접 포함되지 않아도 Browser 안에서 발생</td></tr></tbody></table></div>`
          },
          {
            id: "xss-defense", title: "XSS 대응",
            content: `<ul><li><strong>출력 Encoding</strong>: HTML 본문·속성·JavaScript·URL 등 Context에 맞는 Encoding을 적용합니다.</li><li><strong>입력검증</strong>: 허용 문자·길이·형식을 제한하되 출력 Encoding을 대체하지는 않습니다.</li><li><strong>Sanitization</strong>: HTML 입력을 허용해야 한다면 검증된 Library로 위험 Tag·속성을 제거합니다.</li><li><strong>CSP</strong>: 허용 Script 출처를 제한하여 XSS 피해를 줄입니다.</li><li><strong>Cookie 보호</strong>: HttpOnly·Secure·SameSite 속성으로 탈취·오용 위험을 낮춥니다.</li><li><strong>Framework 기능</strong>: 기본 Escaping을 유지하고 위험한 Raw HTML API 사용을 제한합니다.</li></ul><p>단순히 <code>&lt;</code>와 <code>&gt;</code>만 치환하면 Event Handler·속성·JavaScript Context를 놓칠 수 있으므로 출력위치에 맞게 처리해야 합니다.</p>`
          },
          {
            id: "csrf-overview", title: "CSRF 개요와 공격 과정",
            content: `<p><strong>CSRF(Cross-Site Request Forgery)</strong>는 피해자가 정상 Site에 Login한 상태라는 점을 악용해, 공격자가 만든 Page나 Link가 피해자의 인증정보를 포함한 Request를 대신 보내게 하는 공격입니다.</p><ol><li>피해자가 정상 Site에 Login해 인증 Session을 유지합니다.</li><li>공격자가 상태변경 Request를 자동으로 보내는 Link·Form·Page를 준비합니다.</li><li>피해자가 공격자의 Content를 열면 Browser가 정상 Site의 Cookie를 함께 전송합니다.</li><li>Server가 Request의 출처와 사용자 의도를 확인하지 않으면 비밀번호 변경·게시물 등록·송금 등이 수행됩니다.</li></ol><div class="important-box"><span class="box-title">XSS와 차이</span><p><strong>XSS는 피해자 Browser에서 Script 실행 / CSRF는 피해자의 인증 Session을 이용해 Server에 위조 Request 전송</strong></p></div>`
          },
          {
            id: "csrf-defense", title: "CSRF 대응",
            content: `<ul><li>예측할 수 없고 Session에 연결된 <strong>CSRF Token</strong>을 상태변경 Request마다 검증합니다.</li><li>Cookie에 <strong>SameSite</strong> 속성을 적용해 Cross-Site 전송을 제한합니다.</li><li><strong>Origin·Referer Header</strong>를 검증해 허용 출처인지 확인합니다.</li><li>GET은 조회에만 사용하고 상태변경은 POST 등 적절한 Method로 처리합니다.</li><li>중요기능은 Password 재입력·OTP 등 <strong>재인증</strong>을 요구합니다.</li><li>XSS가 있으면 Token 탈취·Request 위조가 가능하므로 XSS도 함께 제거합니다.</li></ul>`
          },
          {
            id: "ssrf-overview", title: "SSRF 개요와 공격 과정",
            content: `<p><strong>SSRF(Server-Side Request Forgery)</strong>는 사용자가 입력한 URL 등을 Server가 대신 요청하는 기능을 악용해, 공격자가 외부에서 직접 접근할 수 없는 내부 Server·Cloud Metadata·관리 Service에 요청을 보내게 하는 취약점입니다.</p><ol><li>공격자가 URL 입력 Parameter를 내부주소나 관리 Port로 조작합니다.</li><li>취약한 Web Server가 해당 주소로 Request를 전송합니다.</li><li>내부 System은 신뢰하는 Web Server가 보낸 Request로 판단할 수 있습니다.</li><li>응답 또는 응답차이를 통해 내부정보를 조회하거나 추가행위를 시도합니다.</li></ol><div class="important-box"><span class="box-title">CSRF와 차이</span><p><strong>CSRF의 요청 주체는 피해자 Browser / SSRF의 요청 주체는 취약한 Server</strong></p></div>`
          },
          {
            id: "ssrf-defense", title: "SSRF 대응",
            content: `<ul><li>외부 URL 요청이 필요하다면 Protocol·Domain·Port를 <strong>Allowlist</strong>로 제한합니다.</li><li>localhost, Private IP, Link-Local, Cloud Metadata 주소와 내부 DNS 결과를 차단합니다.</li><li>Redirect 후 최종 목적지도 다시 검증하고 DNS Rebinding 가능성을 고려합니다.</li><li>Server의 Outbound Network를 Firewall·Proxy로 제한합니다.</li><li>내부 Service도 출발지 IP만 믿지 말고 인증·인가를 수행합니다.</li><li>응답본문·오류·시간차가 공격자에게 내부정보를 드러내지 않도록 제한합니다.</li></ul>`
          },
          {
            id: "direct-object-reference", title: "직접 객체 참조와 디렉터리 탐색",
            content: `<p>File명·Directory·Database Key 같은 내부 객체를 URL Parameter에 직접 사용하면서 권한검사를 하지 않으면 사용자가 값을 바꿔 다른 객체에 접근할 수 있습니다.</p><ul><li><strong>IDOR</strong>: 다른 사용자의 Document ID·Account ID 등으로 바꿔 조회·변경</li><li><strong>Directory Traversal</strong>: 상위 Directory 이동문자와 경로표현을 조합해 Web Root 밖의 File 접근</li><li><strong>File Download 취약점</strong>: Download Parameter 조작으로 설정·계정 File 등 중요정보 획득</li></ul><p>경로를 정규화한 뒤 허용된 Root 안에 있는지 확인하고, 객체마다 현재 사용자의 접근권한을 Server에서 검증해야 합니다.</p>`
          },
          {
            id: "file-upload-vulnerability", title: "파일 업로드 취약점",
            content: `<p>Upload 기능이 File의 종류·내용·저장위치·실행권한을 안전하게 제한하지 않으면 공격자가 Script나 실행 File을 올리고 Web Server에서 실행할 수 있습니다.</p><ul><li>확장자만 바꾸거나 다중 확장자·대소문자·MIME Type 조작으로 Filter를 우회할 수 있습니다.</li><li>Upload Directory에 Script 실행권한이 있으면 Webshell이 동작할 수 있습니다.</li><li>원본 File명을 그대로 사용하면 경로조작·덮어쓰기·추측 가능한 URL 문제가 생길 수 있습니다.</li></ul>`
          },
          {
            id: "webshell-reverse-shell", title: "Webshell과 Reverse Shell",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>동작</th><th>특징</th></tr></thead><tbody><tr><td><strong>Webshell</strong></td><td>공격자가 Upload한 Server-Side Script를 HTTP로 호출해 명령실행</td><td>Web Service Port를 사용하므로 정상 Traffic과 섞일 수 있음</td></tr><tr><td><strong>Reverse Shell</strong></td><td>침해 Server가 공격자 쪽으로 역방향 연결을 생성해 Shell 제공</td><td>Inbound 차단이 있어도 허용된 Outbound 연결을 악용할 수 있음</td></tr></tbody></table></div><p>Webshell 탐지는 File 무결성, 비정상 Process·Network 연결, Upload Directory의 Script, Web Log의 수상한 Request를 함께 분석합니다.</p>`
          },
          {
            id: "file-upload-defense", title: "파일 업로드·다운로드 대응",
            content: `<ul><li>허용 확장자·MIME Type·Magic Number를 함께 검사하고 File 내용을 검증합니다.</li><li>저장 File명은 Server가 임의값으로 재생성하며 원본 경로문자를 제거합니다.</li><li>Web Root 밖 또는 별도 Object Storage에 저장하고 실행권한을 제거합니다.</li><li>Image 등은 안전한 Library로 재처리하고 악성코드 검사를 수행합니다.</li><li>File 크기·개수·총량을 제한합니다.</li><li>Download는 File ID로 요청받아 Server가 권한검사 후 안전한 Header로 제공합니다.</li><li>사용자에게 실제 저장경로를 노출하지 않습니다.</li></ul>`
          },
          {
            id: "web-server-misconfiguration", title: "웹서버 보안설정 취약점",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>취약 설정</th><th>위험</th><th>대응</th></tr></thead><tbody><tr><td><strong>Directory Listing</strong></td><td>Index가 없을 때 File 목록·구조 노출</td><td>Listing 비활성화, Index와 권한설정</td></tr><tr><td><strong>Backup·Temporary File</strong></td><td>Source Code·계정·DB 접속정보 노출</td><td>배포 전 제거, 공개 Directory 밖 보관</td></tr><tr><td><strong>주석·Debug 정보</strong></td><td>내부경로·개발자 정보·취약 Logic 노출</td><td>운영 Build에서 Debug·민감 주석 제거</td></tr><tr><td><strong>불필요한 Method·Module</strong></td><td>공격표면 증가</td><td>필요한 기능만 허용</td></tr><tr><td><strong>Server Banner</strong></td><td>제품·Version 기반 공격정보 제공</td><td>Header·Error Page 정보 최소화</td></tr></tbody></table></div>`
          },
          {
            id: "special-character-filtering", title: "특수문자 필터링의 한계",
            content: `<p>SQL Injection·XSS 대응을 위해 특수문자를 단순 차단하는 방식은 Encoding·대체표현·Context 차이 때문에 우회될 수 있습니다.</p><ul><li>입력값은 Type·길이·형식의 Allowlist로 검증합니다.</li><li>SQL은 Prepared Statement로 구조와 Data를 분리합니다.</li><li>출력은 HTML·속성·JavaScript·URL Context에 맞게 Encoding합니다.</li><li>Client-Side 검증만 믿지 않고 Server에서 동일하거나 더 강한 검증을 수행합니다.</li></ul><div class="important-box"><span class="box-title">원칙</span><p><strong>입력검증 + 안전한 API + 출력 Encoding</strong>을 목적별로 나누어 적용합니다.</p></div>`
          },
          {
            id: "server-validation-session", title: "서버측 통제와 지속적인 세션 관리",
            content: `<ul><li>JavaScript·CSS 기반 Client 검증은 변조·우회될 수 있으므로 Security 결정은 반드시 Server에서 수행합니다.</li><li>모든 Page와 API에서 일관된 인증·인가를 적용하여 URL 직접접근으로 우회되지 않게 합니다.</li><li>Login 성공·권한변경 시 Session ID를 재발급해 Session Fixation을 방지합니다.</li><li>Session ID는 충분히 길고 예측 불가능하게 생성하며 URL에 노출하지 않습니다.</li><li>Idle Timeout·Absolute Timeout·Logout 시 Server 측 Session 무효화를 적용합니다.</li><li>Cookie에는 Secure·HttpOnly·SameSite와 적절한 Domain·Path를 설정합니다.</li></ul>`
          },
          {
            id: "waf-overview", title: "웹 방화벽(WAF)",
            content: `<p><strong>WAF(Web Application Firewall)</strong>는 Web Application 앞에서 HTTP/HTTPS Request와 Response를 분석해 SQL Injection·XSS·비정상 Upload·자동화 공격 등 Application 계층 위협을 탐지·차단합니다.</p><div class="table-scroll"><table class="concept-table"><thead><tr><th>기능</th><th>내용</th></tr></thead><tbody><tr><td><strong>요청검사</strong></td><td>URL·Header·Cookie·Parameter·Body Pattern과 행위 분석</td></tr><tr><td><strong>접근통제</strong></td><td>IP·지역·Session·Rate 기준 허용·차단</td></tr><tr><td><strong>Upload 보호</strong></td><td>File Type·크기·악성 Pattern 검사</td></tr><tr><td><strong>정보노출 방지</strong></td><td>Response의 민감정보·오류·개인정보 Pattern 탐지</td></tr><tr><td><strong>가상 Patch</strong></td><td>Application 수정 전 취약 Request를 임시차단</td></tr></tbody></table></div>`
          },
          {
            id: "waf-firewall-comparison", title: "WAF와 네트워크 방화벽 비교",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>WAF</th><th>Network Firewall</th></tr></thead><tbody><tr><td><strong>목적</strong></td><td>Web Application 공격차단</td><td>Network 접근통제</td></tr><tr><td><strong>분석 계층</strong></td><td>주로 Application Layer(7계층)</td><td>주로 Network·Transport Layer(3·4계층)</td></tr><tr><td><strong>검사 대상</strong></td><td>HTTP Method·URL·Header·Cookie·Parameter·Body</td><td>출발지·목적지 IP, Port, Protocol, 연결상태</td></tr></tbody></table></div><p>WAF는 보조 방어계층이며 취약한 Application Code 자체를 자동으로 안전하게 만들지는 못합니다.</p>`
          },
          {
            id: "sdlc-overview", title: "소프트웨어 개발 생명주기(SDLC)",
            content: `<p><strong>SDLC(Software Development Life Cycle)</strong>는 Software의 기획부터 폐기까지를 단계로 나누어 산출물과 활동을 관리하는 절차입니다.</p><ol><li><strong>타당성 검토·계획</strong>: 목표와 범위, 자원, 위험 검토</li><li><strong>요구사항 분석</strong>: 기능·비기능·보안 요구사항 정의</li><li><strong>설계</strong>: Architecture, Data, Interface와 보호대책 설계</li><li><strong>구현</strong>: Code 작성과 단위검증</li><li><strong>시험</strong>: 기능·통합·보안 Test 수행</li><li><strong>운영·유지보수</strong>: 배포, Monitoring, Patch와 변경관리</li><li><strong>폐기</strong>: Data 이전·안전한 삭제와 Service 종료</li></ol>`
          },
          {
            id: "software-lifecycle-models", title: "폭포수·프로토타이핑·나선형 모델",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>모델</th><th>특징</th></tr></thead><tbody><tr><td><strong>폭포수(Waterfall)</strong></td><td>단계를 순차적으로 진행해 산출물과 관리가 명확하지만 후반 변경비용이 큼</td></tr><tr><td><strong>프로토타이핑</strong></td><td>초기 Prototype으로 사용자 요구를 확인·보완한 뒤 System을 완성</td></tr><tr><td><strong>나선형(Spiral)</strong></td><td>계획·위험분석·개발·평가를 반복하며 위험을 줄이는 점진적 방식</td></tr></tbody></table></div><p>모델이 달라도 보안은 마지막 시험단계에만 추가하는 것이 아니라 각 단계의 활동과 산출물에 포함해야 합니다.</p>`
          },
          {
            id: "secure-sdlc", title: "S-SDLC 개발보안 방법론",
            content: `<p><strong>S-SDLC(Secure SDLC)</strong>는 기존 SDLC의 각 단계에 보안활동을 통합하여 신뢰할 수 있는 Software를 만드는 방법입니다.</p><div class="table-scroll"><table class="concept-table"><thead><tr><th>단계</th><th>대표 보안활동</th></tr></thead><tbody><tr><td><strong>요구사항</strong></td><td>보안 목표·규정·개인정보·인증·감사 요구 정의</td></tr><tr><td><strong>설계</strong></td><td>위협 Modeling, 공격표면 분석, 보안 Architecture·통제 설계</td></tr><tr><td><strong>구현</strong></td><td>Secure Coding 표준, Code Review, 정적분석, Dependency 점검</td></tr><tr><td><strong>시험</strong></td><td>동적분석·모의침투·취약점 조치와 재시험</td></tr><tr><td><strong>운영</strong></td><td>Log Monitoring, Patch·취약점·Incident·변경관리</td></tr></tbody></table></div>`
          },
          {
            id: "secure-coding-weaknesses", title: "시큐어 코딩 주요 취약점",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>분류</th><th>주요 취약점·오류</th><th>핵심 대응</th></tr></thead><tbody><tr><td><strong>입력값 검증·표현</strong></td><td>Buffer Overflow, Format String, SQL Injection, XSS</td><td>길이·Type 검증, 안전한 API, Parameter Binding, 출력 Encoding</td></tr><tr><td><strong>시간·상태</strong></td><td>Race Condition, Session 상태오류</td><td>원자적 처리, Lock, 상태전이 검증</td></tr><tr><td><strong>Error 처리</strong></td><td>민감정보 포함 Error, 예외 누락</td><td>사용자 Message 최소화, 중앙 예외처리와 안전한 Log</td></tr><tr><td><strong>Code 품질</strong></td><td>Null Pointer, Resource 누수, 초기화 오류</td><td>검증된 Pattern, 정적분석, Test</td></tr><tr><td><strong>캡슐화</strong></td><td>중요 Data·기능의 과도한 공개</td><td>접근범위 최소화, 내부상태 보호</td></tr><tr><td><strong>API 오용</strong></td><td>취약·위험 API와 잘못된 Parameter 사용</td><td>안전한 API Wrapper와 사용규칙 적용</td></tr></tbody></table></div>`
          },
          {
            id: "web-security-summary", title: "SECTION 33 핵심 흐름",
            content: `<div class="important-box"><span class="box-title">전체 흐름</span><p><strong>통신은 TLS로 보호 → Handshake에서 Version·Cipher·인증·Key 협상 → Record가 Data 암호화·무결성 보호 → Web Server 최소권한·정보노출 차단 → SQL Injection은 Query 분리 → XSS는 출력 Encoding → CSRF는 Token·SameSite → SSRF는 목적지·Outbound 통제 → File은 실행경로와 분리 → WAF로 보조방어 → S-SDLC로 개발 전 과정에 보안 통합</strong></p></div><div class="table-scroll"><table class="concept-table"><thead><tr><th>문제 키워드</th><th>정답</th></tr></thead><tbody><tr><td>TCP 위에서 암호화·무결성·인증</td><td>SSL/TLS</td></tr><tr><td>Version·Cipher Suite·Key 교환 협상</td><td>Handshake</td></tr><tr><td>과거 Session을 장기 개인키 노출에서 보호</td><td>PFS</td></tr><tr><td>항상 참 조건·UNION·오류·응답차이</td><td>SQL Injection</td></tr><tr><td>피해자 Browser에서 악성 Script 실행</td><td>XSS</td></tr><tr><td>피해자의 인증 Session으로 위조 요청</td><td>CSRF</td></tr><tr><td>취약한 Server가 내부주소로 요청</td><td>SSRF</td></tr><tr><td>HTTP/HTTPS Application 계층 공격차단</td><td>WAF</td></tr><tr><td>SDLC 각 단계에 보안활동 통합</td><td>S-SDLC</td></tr></tbody></table></div>`
          }
        ],
        content: ""
      },
      {
        id: "section-34",
        number: 34,
        title: "DHCP와 DNS 보안",
        subtopics: [
          {
            id: "dhcp-overview", title: "호스트 설정과 DHCP 개요",
            content: `<p>TCP/IP Network에 연결된 Host는 통신을 위해 <strong>IP Address·Subnet Mask·Default Gateway·DNS Server</strong> 등의 설정이 필요합니다. 각 장비를 수동으로 설정하면 이동이 잦은 Notebook·Smartphone과 대규모 Network에서 관리가 어렵고 주소충돌 가능성도 커집니다.</p><p><strong>DHCP(Dynamic Host Configuration Protocol)</strong>는 Client가 Network에 접속할 때 필요한 설정을 Server로부터 자동으로 받아 사용하게 하는 Application Layer Protocol입니다.</p><div class="important-box"><span class="box-title">핵심</span><p><strong>DHCP = BOOTP를 기반으로 IP 주소 Pool과 Lease를 이용해 Host 설정을 동적으로 제공</strong></p></div>`
          },
          {
            id: "host-configuration-protocols", title: "RARP·BOOTP·DHCP 비교",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>동작·특징</th><th>한계·차이</th></tr></thead><tbody><tr><td><strong>RARP</strong></td><td>MAC Address를 이용해 자신의 IP Address를 질의</td><td>동일 Network의 Server가 필요하며 IP 이외의 설정을 제공하기 어려움</td></tr><tr><td><strong>BOOTP</strong></td><td>UDP/IP를 이용해 IP·Boot 정보 등 Host 설정 제공</td><td>MAC과 IP를 미리 대응시키는 정적 할당 중심</td></tr><tr><td><strong>DHCP</strong></td><td>BOOTP를 확장해 Address Pool에서 IP와 각종 설정을 Lease 방식으로 제공</td><td>동적·자동·수동 할당을 지원하며 Server·Relay 보안이 중요</td></tr></tbody></table></div>`
          },
          {
            id: "rarp", title: "RARP(Reverse ARP)",
            content: `<p><strong>RARP</strong>는 자신의 Physical Address(MAC Address)는 알지만 IP Address를 모르는 Host가 IP를 알아내기 위해 사용하는 Protocol입니다. Request가 Broadcast이므로 같은 Network Segment 안의 RARP Server가 처리해야 합니다.</p><ul><li>Network마다 RARP Server가 필요합니다.</li><li>주로 IP Address 하나만 제공하므로 Gateway·DNS 같은 추가 설정을 전달하기 어렵습니다.</li><li>이러한 한계를 보완하기 위해 BOOTP가 등장했습니다.</li></ul>`
          },
          {
            id: "bootp", title: "BOOTP(Bootstrap Protocol)",
            content: `<p><strong>BOOTP</strong>는 Disk가 없거나 Boot 정보가 필요한 Computer에 Host 설정을 제공하기 위해 만들어졌습니다. Ethernet Frame에 직접 의존하던 RARP와 달리 <strong>UDP/IP</strong>를 사용하므로 Router를 통한 전달이 가능합니다.</p><ul><li>Server가 Client의 MAC Address와 할당할 IP Address를 미리 대응시켜 관리합니다.</li><li>IP Address뿐 아니라 Subnet Mask·Gateway·Boot File 등 여러 정보를 제공할 수 있습니다.</li><li>정적인 대응정보를 중심으로 동작하며, 재사용 가능한 Address Pool과 Lease 기능은 DHCP에서 강화되었습니다.</li></ul>`
          },
          {
            id: "dhcp-ports-allocation", title: "DHCP Port와 주소 할당 방식",
            content: `<p>DHCP는 <strong>UDP</strong>를 사용하며 Server는 <strong>67번 Port</strong>, Client는 <strong>68번 Port</strong>를 사용합니다.</p><div class="table-scroll"><table class="concept-table"><thead><tr><th>할당 방식</th><th>설명</th></tr></thead><tbody><tr><td><strong>수동 할당</strong></td><td>관리자가 특정 Client에 사용할 IP를 지정</td></tr><tr><td><strong>자동 할당</strong></td><td>Server가 사용 가능한 IP를 Client에 영구적으로 배정</td></tr><tr><td><strong>동적 할당</strong></td><td>일정한 Lease 기간 동안 IP를 빌려주고 만료 후 Pool로 회수</td></tr></tbody></table></div>`
          },
          {
            id: "dhcp-packet-fields", title: "DHCP 메시지 주요 필드",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>필드</th><th>역할</th></tr></thead><tbody><tr><td><strong>op</strong></td><td>Request 또는 Reply 구분</td></tr><tr><td><strong>htype·hlen</strong></td><td>Hardware Address 종류와 길이</td></tr><tr><td><strong>xid</strong></td><td>요청과 응답을 대응시키는 Transaction ID</td></tr><tr><td><strong>flags</strong></td><td>Broadcast 응답 여부 등 표시</td></tr><tr><td><strong>ciaddr</strong></td><td>Client가 이미 사용 중인 IP Address</td></tr><tr><td><strong>yiaddr</strong></td><td>Server가 Client에게 제공할 IP Address</td></tr><tr><td><strong>siaddr·giaddr</strong></td><td>Server와 Relay Agent의 IP Address</td></tr><tr><td><strong>chaddr</strong></td><td>Client Hardware Address</td></tr><tr><td><strong>options</strong></td><td>Message Type·Subnet Mask·Gateway·DNS·Lease 등 설정정보</td></tr></tbody></table></div>`
          },
          {
            id: "dhcp-message-types", title: "DHCP 메시지 종류",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>메시지</th><th>의미</th></tr></thead><tbody><tr><td><strong>DHCPDISCOVER</strong></td><td>Client가 DHCP Server와 사용 가능한 설정을 탐색</td></tr><tr><td><strong>DHCPOFFER</strong></td><td>Server가 사용 가능한 IP와 설정을 제안</td></tr><tr><td><strong>DHCPREQUEST</strong></td><td>Client가 선택한 Server와 IP를 알리고 할당을 요청</td></tr><tr><td><strong>DHCPACK</strong></td><td>Server가 Lease와 설정을 최종 승인</td></tr><tr><td><strong>DHCPNAK</strong></td><td>요청한 IP를 사용할 수 없음을 통지</td></tr><tr><td><strong>DHCPDECLINE</strong></td><td>Client가 제안된 IP의 충돌을 발견했음을 알림</td></tr><tr><td><strong>DHCPRELEASE</strong></td><td>Client가 사용 중인 IP를 반납</td></tr><tr><td><strong>DHCPINFORM</strong></td><td>IP를 이미 가진 Client가 추가 설정만 요청</td></tr></tbody></table></div>`
          },
          {
            id: "dhcp-dora", title: "DHCP DORA 동작 과정",
            content: `<ol><li><strong>Discover</strong>: 주소가 없는 Client가 DHCPDISCOVER를 Broadcast하여 Server를 찾습니다.</li><li><strong>Offer</strong>: Server가 DHCPOFFER로 사용 가능한 IP·Lease·Gateway·DNS 등을 제안합니다.</li><li><strong>Request</strong>: Client가 하나의 제안을 선택하여 DHCPREQUEST를 Broadcast합니다. 다른 Server도 자신의 제안이 선택되지 않았음을 알 수 있습니다.</li><li><strong>Acknowledge</strong>: 선택된 Server가 DHCPACK으로 할당을 승인하고 Client가 설정을 적용합니다.</li></ol><div class="important-box"><span class="box-title">암기</span><p><strong>DORA = Discover → Offer → Request → ACK</strong></p></div>`
          },
          {
            id: "dhcp-discover-offer", title: "Discover와 Offer",
            content: `<p>초기 Client는 자신의 IP를 모르므로 일반적으로 출발지 <strong>0.0.0.0:68</strong>, 목적지 <strong>255.255.255.255:67</strong>로 DHCPDISCOVER를 보냅니다. Message의 Transaction ID와 Client MAC Address로 요청을 식별합니다.</p><p>요청을 받은 DHCP Server는 Address Pool과 정책을 확인하고 DHCPOFFER에 제안 IP, Server 식별정보, Lease Time, Subnet Mask, Gateway, DNS Server 등의 값을 담아 응답합니다.</p>`
          },
          {
            id: "dhcp-request-ack", title: "Request·ACK·NAK",
            content: `<p>Client는 도착한 Offer 중 하나를 선택해 DHCPREQUEST를 Broadcast합니다. 선택된 Server는 <strong>DHCPACK</strong>으로 최종 설정과 Lease를 전달하며, 요청이 유효하지 않거나 주소를 제공할 수 없으면 <strong>DHCPNAK</strong>을 보내 Client가 처음부터 다시 시작하게 합니다.</p><p>동적 할당에서는 Lease가 끝나기 전에 Client가 DHCPREQUEST로 갱신을 시도하며, 사용이 끝난 주소는 다시 Address Pool로 돌아갑니다.</p>`
          },
          {
            id: "dhcp-relay", title: "DHCP Relay Agent",
            content: `<p>Router는 기본적으로 Broadcast를 다른 Network로 전달하지 않으므로 Subnet마다 DHCP Server를 두면 관리부담이 커집니다. <strong>DHCP Relay Agent</strong>는 Client의 Broadcast 요청을 받아 다른 Network의 DHCP Server로 Unicast 전달하고 응답을 Client에게 중계합니다.</p><ul><li><strong>giaddr</strong> 필드로 요청이 들어온 Network 정보를 Server에 알려 적절한 Address Pool을 선택하게 합니다.</li><li>Relay가 있으면 여러 Subnet이 중앙 DHCP Server를 함께 사용할 수 있습니다.</li></ul>`
          },
          {
            id: "dhcp-starvation", title: "DHCP Starvation 공격",
            content: `<p><strong>DHCP Starvation</strong>은 공격자가 다수의 위조 MAC Address로 DHCP 요청을 반복하여 Server의 할당 가능한 IP Address Pool을 고갈시키는 공격입니다. 정상 Client는 Offer를 받지 못해 Network를 사용할 수 없게 됩니다.</p><ul><li>Switch의 <strong>Port Security</strong>로 Port당 MAC 수를 제한합니다.</li><li><strong>DHCP Snooping</strong>으로 신뢰 Port의 DHCP 응답만 허용하고 비정상 요청률을 제한합니다.</li><li>Lease·Address Pool 사용량과 다량의 Discover·Request를 Monitoring합니다.</li><li>허가되지 않은 Rogue DHCP Server도 DHCP Snooping과 Network 접근통제로 차단합니다.</li></ul>`
          },
          {
            id: "dns-overview", title: "DNS의 필요성과 목적",
            content: `<p><strong>DNS(Domain Name System)</strong>는 사람이 기억하기 쉬운 Domain Name과 Network 통신에 사용하는 IP Address를 서로 대응시키는 분산형 Name Service입니다.</p><ul><li>작은 Network는 Hosts File로 대응정보를 관리할 수 있지만 Internet 규모에서는 중앙 File 하나로 관리하기 어렵습니다.</li><li>DNS는 계층적 Name Space와 분산 Database를 이용해 확장성·관리위임·장애분산을 제공합니다.</li><li>Forward Lookup은 Name에서 IP를, Reverse Lookup은 IP에서 Name을 찾습니다.</li></ul>`
          },
          {
            id: "dns-namespace", title: "DNS 네임 공간과 도메인",
            content: `<p>DNS Name Space는 맨 위의 <strong>Root(.)</strong>에서 시작해 TLD와 하위 Label로 이어지는 Tree 구조입니다. <strong>Domain</strong>은 이 Tree에서 한 Node를 Root로 하는 Subtree이며, Domain 안에는 더 작은 Subdomain이 포함될 수 있습니다.</p><p>예를 들어 <code>www.example.com.</code>은 Root 아래 <code>com</code>, <code>example</code>, <code>www</code> Label이 계층적으로 연결된 FQDN입니다.</p>`
          },
          {
            id: "domain-zone-comparison", title: "도메인과 영역(Zone) 비교",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>의미</th></tr></thead><tbody><tr><td><strong>Domain</strong></td><td>DNS Name Space에서 특정 Node 아래의 논리적인 전체 Subtree</td></tr><tr><td><strong>Zone</strong></td><td>한 Name Server가 권한을 가지고 관리하는 Domain의 연속된 부분</td></tr></tbody></table></div><p>하위 Domain을 다른 Name Server에 위임하면 상위 Domain의 논리적 범위에는 포함되지만 상위 Server가 관리하는 Zone에서는 빠질 수 있습니다. 즉 <strong>Domain은 Name Space 관점, Zone은 관리·권한 관점</strong>입니다.</p>`
          },
          {
            id: "zone-file", title: "Zone File",
            content: `<p><strong>Zone File</strong>은 특정 Zone에 대한 DNS Resource Record를 저장한 Database File입니다. BIND에서는 <code>named.conf</code>의 <code>zone</code> 선언이 사용할 Zone File과 Master·Slave Type 등을 지정합니다.</p><ul><li>Host Name과 Address, Name Server, Mail Server, Alias, 관리정보 등을 기록합니다.</li><li>변경할 때 SOA Serial을 증가시켜 Slave Server가 새 Version을 판단하게 합니다.</li><li>문법오류와 과도한 접근권한이 Service 장애나 정보노출로 이어질 수 있으므로 검증·권한관리가 필요합니다.</li></ul>`
          },
          {
            id: "dns-resource-records", title: "DNS Resource Record 유형",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>RR</th><th>역할</th></tr></thead><tbody><tr><td><strong>A</strong></td><td>Host Name을 IPv4 Address에 대응</td></tr><tr><td><strong>AAAA</strong></td><td>Host Name을 IPv6 Address에 대응</td></tr><tr><td><strong>NS</strong></td><td>Zone을 담당하는 Authoritative Name Server 지정</td></tr><tr><td><strong>CNAME</strong></td><td>Alias Name을 Canonical Name에 대응</td></tr><tr><td><strong>SOA</strong></td><td>Zone의 시작·관리권한, Primary Server, Serial과 갱신 Timer 정보</td></tr><tr><td><strong>PTR</strong></td><td>Reverse Lookup에서 IP Address를 Name에 대응</td></tr><tr><td><strong>MX</strong></td><td>Domain의 Mail Server와 우선순위 지정</td></tr><tr><td><strong>TXT</strong></td><td>임의 Text 정보 저장, SPF 등 정책표현에 활용</td></tr><tr><td><strong>ANY</strong></td><td>지원되는 여러 RR Type을 함께 요청하는 질의</td></tr><tr><td><strong>AXFR</strong></td><td>Zone 전체를 전송하는 Full Zone Transfer</td></tr><tr><td><strong>IXFR</strong></td><td>변경된 내용만 전송하는 Incremental Zone Transfer</td></tr></tbody></table></div>`
          },
          {
            id: "root-name-server", title: "Root Name Server",
            content: `<p><strong>Root Name Server</strong>는 DNS Tree의 최상위에서 TLD Name Server의 위치를 안내합니다. Root는 각 Domain의 최종 IP를 모두 저장하는 Server가 아니라 다음 질의대상에 대한 Referral을 제공하는 출발점입니다.</p><p>Root Server는 <strong>13개의 논리적 식별자(A~M)</strong>로 알려져 있으며, 실제 Service는 Anycast 등을 이용한 다수의 분산 Instance로 제공됩니다.</p>`
          },
          {
            id: "master-slave-zone-transfer", title: "Master·Slave와 Zone Transfer",
            content: `<p><strong>Master(Primary)</strong> Name Server는 Zone의 원본 Data를 관리하고, <strong>Slave(Secondary)</strong>는 Master의 Data를 Zone Transfer로 복제하여 동일한 질의 Service를 제공합니다. 이 구조는 가용성과 부하분산에 도움이 됩니다.</p><div class="table-scroll"><table class="concept-table"><thead><tr><th>전송</th><th>설명</th></tr></thead><tbody><tr><td><strong>AXFR</strong></td><td>Zone 전체 Data 전송</td></tr><tr><td><strong>IXFR</strong></td><td>Serial을 기준으로 변경분만 전송</td></tr></tbody></table></div><p>일반적인 Zone Transfer는 <strong>TCP 53</strong>을 사용합니다. 허용대상을 지정하지 않으면 공격자가 Zone의 Host 정보를 수집할 수 있으므로 Slave Server 등 필요한 IP만 허용해야 합니다.</p>`
          },
          {
            id: "dns-resolver", title: "Resolver와 해석기",
            content: `<p><strong>Resolver</strong>는 Application의 Domain Name 질의를 받아 DNS Server에 전달하고 결과를 Application에 돌려주는 기능입니다.</p><ul><li><strong>Stub Resolver</strong>: Client에 위치하며 Cache가 없거나 답을 모르면 설정된 Recursive DNS Server로 질의를 전달합니다.</li><li><strong>Recursive Resolver</strong>: Client를 대신해 Cache를 확인하고 Root·TLD·Authoritative Server에 질의하여 최종답을 구합니다.</li></ul>`
          },
          {
            id: "recursive-iterative-query", title: "재귀적·반복적 해석 비교",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>재귀적 해석(Recursive)</th><th>반복적 해석(Iterative)</th></tr></thead><tbody><tr><td><strong>요청받은 Server</strong></td><td>최종답 또는 Error가 나올 때까지 대신 질의</td><td>자신이 가진 최선의 답이나 다음 Server Referral 제공</td></tr><tr><td><strong>질의 반복 주체</strong></td><td>Recursive DNS Server</td><td>Resolver가 Referral을 따라 다음 Server에 다시 질의</td></tr><tr><td><strong>일반적 사용</strong></td><td>Client → Local Recursive Resolver</td><td>Resolver → Root·TLD·Authoritative Server</td></tr></tbody></table></div>`
          },
          {
            id: "authoritative-recursive-server", title: "Authoritative·Recursive DNS Server",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>Server</th><th>역할</th></tr></thead><tbody><tr><td><strong>Authoritative DNS</strong></td><td>자신이 관리하는 Zone의 원본 또는 복제 RR을 바탕으로 권한 있는 답변 제공</td></tr><tr><td><strong>Recursive DNS</strong></td><td>사용자를 대신해 여러 DNS Server에 질의하고 결과를 Cache하여 제공</td></tr></tbody></table></div><p>하나의 제품이 두 역할을 모두 수행할 수 있지만 외부에 공개하는 Authoritative Service와 내부 사용자의 Recursion을 분리하면 공격표면과 Cache Poisoning 위험을 줄일 수 있습니다.</p>`
          },
          {
            id: "dns-resolution-process", title: "DNS 이름 변환 과정",
            content: `<ol><li>Application이 Resolver에 Domain Name 해석을 요청합니다.</li><li>Resolver는 Browser·OS·Local DNS Cache와 Hosts 설정을 확인합니다.</li><li>답이 없으면 설정된 Recursive DNS Server에 질의합니다.</li><li>Resolver는 Cache를 확인하고 필요하면 Root → TLD → Authoritative Server 순으로 Referral을 따라 질의합니다.</li><li>Authoritative 답을 받으면 TTL 동안 Cache하고 Client에 IP Address를 반환합니다.</li><li>Client는 반환된 IP Address로 실제 Service에 접속합니다.</li></ol>`
          },
          {
            id: "dns-cache", title: "DNS Cache와 TTL",
            content: `<p>DNS Server와 Client는 반복질의의 지연과 Traffic을 줄이기 위해 응답을 <strong>TTL(Time To Live)</strong> 동안 Cache합니다.</p><ul><li>정상 응답뿐 아니라 Name이 존재하지 않는다는 결과도 <strong>Negative Caching</strong>할 수 있습니다.</li><li>TTL이 지나치게 길면 잘못되거나 변경된 Mapping이 오래 남고, 지나치게 짧으면 질의량이 증가합니다.</li><li>Cache의 무결성이 훼손되면 많은 사용자가 공격자의 IP로 연결될 수 있으므로 Cache Poisoning 방어가 중요합니다.</li></ul>`
          },
          {
            id: "hosts-file", title: "Hosts File과 조회 순서",
            content: `<p><strong>Hosts File</strong>은 Host Name과 IP Address의 정적 대응정보를 저장합니다. UNIX/Linux는 일반적으로 <code>/etc/hosts</code>, Windows는 <code>%SystemRoot%\\System32\\drivers\\etc\\hosts</code>를 사용합니다.</p><ul><li>DNS보다 먼저 Hosts File을 조회하도록 설정된 환경이 많습니다.</li><li>공격자가 Hosts File을 변조하면 정상 Domain을 Phishing Site로 연결할 수 있으므로 관리자 권한과 File 무결성을 보호해야 합니다.</li><li>실제 조회순서는 운영체제의 Name Service 설정에 따라 달라질 수 있습니다.</li></ul>`
          },
          {
            id: "dns-lookup-overview", title: "Forward·Reverse Lookup",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>입력</th><th>대표 RR·영역</th></tr></thead><tbody><tr><td><strong>Forward Lookup</strong></td><td>Domain Name → IP Address</td><td>A·AAAA</td></tr><tr><td><strong>Reverse Lookup</strong></td><td>IP Address → Domain Name</td><td>PTR, IPv4는 <code>in-addr.arpa</code></td></tr></tbody></table></div><p>Reverse Lookup은 Log 분석·Mail Server 검증·Network 진단 등에 사용하지만 PTR 결과만으로 상대의 신원을 완전히 신뢰해서는 안 됩니다.</p>`
          },
          {
            id: "nslookup", title: "nslookup 유틸리티",
            content: `<p><strong>nslookup(Name Server Lookup)</strong>은 DNS Server에 질의하여 Name·Address와 Resource Record를 확인하는 도구입니다.</p><div class="code-block"><code>nslookup [host] [server]</code></div><ul><li>Host를 바로 지정하는 비대화형 Mode와 여러 질의를 이어가는 대화형 Mode를 지원합니다.</li><li>응답에 사용된 DNS Server와 Authoritative 여부, 조회된 Address 등을 확인할 수 있습니다.</li><li>질의 Type을 지정하여 MX·NS·PTR 등 특정 RR도 점검할 수 있습니다.</li></ul>`
          },
          {
            id: "dig", title: "dig(Domain Information Groper)",
            content: `<p><strong>dig</strong>는 DNS Header·Flag·Answer·Authority·Additional Section 등 상세정보를 확인하기 좋은 진단도구입니다.</p><div class="code-block"><code>dig [@server] [name] [type] [option]</code></div><ul><li><code>@server</code>: 질의할 Name Server 지정</li><li><code>name</code>: 조회할 Domain Name</li><li><code>type</code>: A·AAAA·MX·NS·PTR·AXFR 등 RR Type</li><li>Script와 Batch 점검에 활용하기 쉽고 응답시간·Status도 확인할 수 있습니다.</li></ul>`
          },
          {
            id: "host-whois", title: "host와 whois",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>도구</th><th>용도</th></tr></thead><tbody><tr><td><strong>host</strong></td><td>Name·Address의 Forward/Reverse Lookup을 간단히 수행</td></tr><tr><td><strong>whois</strong></td><td>Domain 등록정보, Registrar·Name Server·Network 할당정보 등을 조회</td></tr></tbody></table></div><p><code>host [host] [server]</code> 형식으로 특정 Server에 질의할 수 있습니다. WHOIS 정보는 등록여부와 운영주체를 조사하는 데 유용하지만 개인정보 보호정책에 따라 일부 값이 비공개일 수 있습니다.</p>`
          },
          {
            id: "dns-security-overview", title: "DNS 보안 위협",
            content: `<p>DNS가 잘못된 Address를 반환하거나 사용할 수 없게 되면 Web·Mail 등 다양한 Internet Service에 연쇄적인 영향을 줍니다.</p><div class="table-scroll"><table class="concept-table"><thead><tr><th>위협</th><th>영향</th><th>필요한 보안</th></tr></thead><tbody><tr><td>Server·Zone Data 변조</td><td>정상 Name을 공격자 Address로 연결</td><td>관리자 인증·권한·File 무결성</td></tr><tr><td>응답 위조·변조</td><td>가짜 응답을 정상답으로 수용</td><td>Data Origin Authentication·Integrity</td></tr><tr><td>Cache Poisoning</td><td>오염된 Mapping이 TTL 동안 다수 사용자에게 제공</td><td>Transaction 보호·DNSSEC 검증</td></tr><tr><td>Flooding·Amplification</td><td>DNS Service 또는 피해 Network의 가용성 저하</td><td>Rate 제한·Recursion 통제·Monitoring</td></tr></tbody></table></div>`
          },
          {
            id: "dns-spoofing", title: "DNS Spoofing 개요",
            content: `<p><strong>DNS Spoofing</strong>은 피해자에게 전달되는 DNS Response의 IP Address를 조작하여 정상 Domain을 공격자의 Fake Site로 연결하는 공격입니다.</p><p>공격자는 사용자가 주소창에 정상 URL을 입력해도 악성 Server에 접속하게 만들어 Credential 탈취·악성코드 배포·통신가로채기를 시도합니다. 대표적인 방식은 <strong>Sniffing 기반 위조응답</strong>과 <strong>DNS Cache Poisoning</strong>입니다.</p>`
          },
          {
            id: "sniffing-dns-spoofing", title: "Sniffing 기반 DNS Spoofing",
            content: `<ol><li>공격자가 피해자의 DNS Query를 Sniffing하여 질의 Name과 Transaction ID 등을 확인합니다.</li><li>정상 DNS Server보다 먼저 동일한 식별정보를 사용한 위조 Response를 전송합니다.</li><li>피해자는 먼저 도착한 위조응답을 정상답으로 받아들여 공격자 IP로 접속합니다.</li></ol><p>동일 LAN처럼 Packet Sniffing과 빠른 응답전송이 가능한 환경에서 수행하기 쉽습니다. Switch 보안, ARP Spoofing 방어, 암호화된 Network 접근, DNSSEC 검증과 중요 Mapping Monitoring으로 위험을 줄입니다.</p>`
          },
          {
            id: "dns-cache-poisoning", title: "DNS Cache Poisoning",
            content: `<p><strong>DNS Cache Poisoning</strong>은 Recursive DNS Server의 Cache에 조작된 Name·Address Mapping을 저장시키는 공격입니다.</p><ol><li>공격자는 Target Resolver가 특정 Name을 질의하도록 유도합니다.</li><li>정상 Response보다 먼저 위조 Response를 다량 전송하며 Transaction ID와 Source Port를 맞추려고 시도합니다.</li><li>식별값이 일치한 위조답이 수용되면 잘못된 RR이 TTL 동안 Cache됩니다.</li><li>해당 Resolver를 사용하는 여러 Client가 공격자 Site로 연결됩니다.</li></ol><p>과거의 예측 가능한 Transaction ID나 고정 Source Port는 성공가능성을 높였습니다.</p>`
          },
          {
            id: "dns-attack-defense", title: "DNS 공격 대응",
            content: `<ul><li>DNS Software와 OS를 최신 상태로 유지하고 Transaction ID·Source Port를 충분히 Randomize합니다.</li><li>Recursive Query는 내부·신뢰 Client에만 허용하고 외부 공개 Authoritative Server와 역할을 분리합니다.</li><li>Zone Transfer는 승인된 Secondary Server만 허용하며 TSIG 등으로 Server 간 인증을 적용합니다.</li><li>DNS Response의 출발지·질의정보·Port가 요청과 일치하는지 검증하고 비정상 RR·TTL 변화를 Monitoring합니다.</li><li>DNSSEC Validation을 사용하여 서명되지 않았거나 검증에 실패한 Data를 신뢰하지 않습니다.</li><li>Response Rate Limiting과 Network DDoS 대책으로 Flooding·Amplification을 완화합니다.</li></ul>`
          },
          {
            id: "dnssec", title: "DNSSEC(DNS Security Extensions)",
            content: `<p><strong>DNSSEC</strong>는 DNS Data에 전자서명을 적용하여 응답의 <strong>출처 인증과 무결성</strong>을 검증하는 확장기술입니다. DNS Query·Response를 암호화하는 기술이 아니므로 <strong>기밀성은 제공하지 않습니다.</strong></p><div class="table-scroll"><table class="concept-table"><thead><tr><th>Record</th><th>역할</th></tr></thead><tbody><tr><td><strong>DNSKEY</strong></td><td>Zone의 공개키 제공</td></tr><tr><td><strong>RRSIG</strong></td><td>RRset에 대한 전자서명</td></tr><tr><td><strong>DS</strong></td><td>상위 Zone이 하위 Zone Key의 Digest를 보관하여 신뢰연결</td></tr><tr><td><strong>NSEC·NSEC3</strong></td><td>요청한 Name·Type이 존재하지 않음을 인증</td></tr></tbody></table></div><p>Root의 Trust Anchor부터 TLD와 하위 Zone으로 이어지는 <strong>Chain of Trust</strong>를 검증하여 Spoofing과 Cache Poisoning을 탐지합니다.</p>`
          },
          {
            id: "bind-files", title: "BIND 주요 파일과 명령",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>구성요소</th><th>역할</th></tr></thead><tbody><tr><td><code>/etc/named.conf</code></td><td>BIND의 Main 설정, options·ACL·zone 정의</td></tr><tr><td><code>/usr/sbin/named</code></td><td>BIND Name Server Daemon</td></tr><tr><td><code>named-checkconf</code></td><td><code>named.conf</code> 문법검사</td></tr><tr><td><code>named-checkzone</code></td><td>Zone Name과 Zone File 문법·일관성 검사</td></tr><tr><td><code>/etc/host.conf</code></td><td>전통적인 Name 조회순서와 일부 Resolver 동작설정</td></tr><tr><td><code>/etc/resolv.conf</code></td><td>Client가 사용할 Search Domain과 Name Server 지정</td></tr></tbody></table></div><p>배포판·BIND Version·Chroot 구성에 따라 실제 경로는 달라질 수 있습니다.</p>`
          },
          {
            id: "host-conf-resolv-conf", title: "host.conf와 resolv.conf",
            content: `<h3>/etc/host.conf</h3><p><code>order hosts, bind</code>처럼 Hosts File과 DNS의 조회순서를 지정하는 전통적 설정입니다. 현대 Linux에서는 <code>/etc/nsswitch.conf</code>의 <code>hosts:</code> 항목이 실제 순서를 결정하는 경우가 많습니다.</p><h3>/etc/resolv.conf</h3><ul><li><code>nameserver</code>: 질의할 DNS Server IP Address</li><li><code>search</code>: 짧은 Host Name 뒤에 순서대로 붙여 시도할 Domain 목록</li><li><code>domain</code>: Local Domain 지정</li><li><code>options</code>: Timeout·재시도 등 Resolver 선택사항</li></ul><p>일반 사용자가 임의로 변경하지 못하게 권한을 관리하고, 승인된 DNS Server만 설정해야 합니다.</p>`
          },
          {
            id: "named-conf", title: "named.conf 주요 보안 설정",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>설정</th><th>보안 목적</th></tr></thead><tbody><tr><td><strong>directory</strong></td><td>Zone File 등의 기준 Directory 지정</td></tr><tr><td><strong>listen-on / listen-on-v6</strong></td><td>DNS가 수신할 Interface·Address 제한</td></tr><tr><td><strong>allow-query</strong></td><td>질의를 허용할 Client 범위 지정</td></tr><tr><td><strong>recursion / allow-recursion</strong></td><td>Recursive Service 사용여부와 허용대상 제한</td></tr><tr><td><strong>allow-transfer</strong></td><td>Zone Transfer를 허용할 Secondary Server 제한</td></tr><tr><td><strong>version</strong></td><td>응답에서 상세 BIND Version 노출 최소화</td></tr><tr><td><strong>dnssec-validation</strong></td><td>Recursive Resolver의 DNSSEC 서명검증 설정</td></tr></tbody></table></div>`
          },
          {
            id: "bind-zone-configuration", title: "Master·Reverse Zone 설정",
            content: `<p><code>named.conf</code>의 <code>zone</code> Block은 관리할 Domain과 Server Type, Zone File을 연결합니다.</p><ul><li><strong>Forward Zone</strong>: Domain Name에서 IP Address를 찾는 A·AAAA 등의 Record 관리</li><li><strong>Reverse Zone</strong>: IP Address에서 Name을 찾는 PTR Record 관리</li><li><strong>type master</strong>: 원본 Zone File을 직접 관리</li><li><strong>type slave</strong>: Master 목록에서 Zone을 전송받아 저장</li></ul><p>Zone File은 Name Server 계정만 필요한 범위에서 읽고 쓸 수 있도록 권한을 최소화하고, 변경 후 문법검사와 Serial 증가를 확인합니다.</p>`
          },
          {
            id: "bind-hardening", title: "DNS Server 보안 강화",
            content: `<ul><li>Authoritative와 Recursive Server를 가능하면 분리하고 외부 Client의 Open Recursion을 금지합니다.</li><li>Daemon을 전용 저권한 계정과 Chroot·Sandbox 환경에서 실행합니다.</li><li>Zone Transfer는 승인된 Secondary IP만 허용하고 필요하면 TSIG로 인증합니다.</li><li>불필요한 Interface·IPv4/IPv6 Listener와 Query Type을 제한합니다.</li><li>BIND Version 정보를 숨기고 최신 Security Patch를 적용합니다.</li><li>설정 변경 전 <code>named-checkconf</code>, Zone 변경 전 <code>named-checkzone</code>으로 검증합니다.</li><li>Query Log·Failure·Response Rate·Cache 변화와 Zone File 무결성을 Monitoring합니다.</li><li>Firewall에서 일반 DNS UDP/TCP 53과 관리·Zone Transfer 경로를 정책에 맞게 제한합니다.</li></ul>`
          },
          {
            id: "dhcp-dns-summary", title: "SECTION 34 핵심 흐름",
            content: `<div class="important-box"><span class="box-title">전체 흐름</span><p><strong>RARP의 한계 → BOOTP의 UDP/IP 기반 정적설정 → DHCP의 Address Pool·Lease → DORA와 Relay → Starvation 방어 → DNS의 계층적 분산 Name Service → Domain과 Zone 구분 → RR·Master/Slave·Zone Transfer → 재귀/반복 질의와 Cache → Spoofing·Cache Poisoning → DNSSEC 검증 → BIND의 Recursion·Transfer·권한 최소화</strong></p></div><div class="table-scroll"><table class="concept-table"><thead><tr><th>문제 키워드</th><th>정답</th></tr></thead><tbody><tr><td>UDP 67 Server·68 Client, 동적 Host 설정</td><td>DHCP</td></tr><tr><td>Discover → Offer → Request → ACK</td><td>DORA</td></tr><tr><td>위조 MAC으로 Address Pool 고갈</td><td>DHCP Starvation</td></tr><tr><td>논리적 Subtree / Server의 관리범위</td><td>Domain / Zone</td></tr><tr><td>전체 Zone / 변경분 Zone 전송</td><td>AXFR / IXFR</td></tr><tr><td>Name→IP / IP→Name</td><td>Forward / Reverse Lookup</td></tr><tr><td>Resolver Cache에 조작 Mapping 저장</td><td>DNS Cache Poisoning</td></tr><tr><td>출처 인증·무결성, 기밀성 미제공</td><td>DNSSEC</td></tr></tbody></table></div>`
          }
        ],
        content: ""
      },
      {
        id: "section-35",
        number: 35,
        title: "데이터베이스 보안",
        subtopics: [
          {
            id: "database-overview", title: "데이터베이스 기본 개념",
            content: `<p><strong>데이터베이스(Database)</strong>는 조직의 업무에 필요한 데이터를 통합하여 저장하고 여러 사용자가 공동으로 이용할 수 있도록 관리하는 데이터의 집합입니다. 단순한 임시 입력자료가 아니라 지속적으로 유지·운영되는 데이터를 대상으로 합니다.</p><div class="important-box"><span class="box-title">핵심</span><p><strong>통합된 데이터 · 저장된 데이터 · 운영 데이터 · 공용 데이터</strong></p></div>`
          },
          {
            id: "database-characteristics", title: "데이터베이스의 네 가지 특성",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>특성</th><th>의미</th></tr></thead><tbody><tr><td><strong>통합된 데이터<br>(Integrated Data)</strong></td><td>원칙적으로 같은 데이터가 중복되지 않도록 통합합니다. 다만 처리효율을 위해 통제된 일부 중복을 허용할 수 있습니다.</td></tr><tr><td><strong>저장된 데이터<br>(Stored Data)</strong></td><td>종이나 서류함이 아니라 컴퓨터가 접근할 수 있는 저장매체에 저장된 데이터의 집합입니다.</td></tr><tr><td><strong>운영 데이터<br>(Operational Data)</strong></td><td>조직이 고유 기능을 수행하기 위해 반드시 유지해야 하는 데이터입니다. 일시적인 입력·출력·작업자료는 보통 운영 데이터로 보지 않습니다.</td></tr><tr><td><strong>공용 데이터<br>(Shared Data)</strong></td><td>한 조직의 여러 사용자와 응용프로그램이 공동으로 소유·유지·이용할 수 있는 데이터입니다.</td></tr></tbody></table></div>`
          },
          {
            id: "dbms-role", title: "DBMS의 역할",
            content: `<p><strong>DBMS(Database Management System)</strong>는 응용프로그램과 데이터베이스 사이에서 데이터의 정의·저장·검색·변경·공유를 관리합니다.</p><ul><li>여러 응용프로그램의 데이터 접근을 통합해 관리합니다.</li><li>동시접근, 무결성, 복구, 권한검사와 감사기록을 담당합니다.</li><li>데이터 파일을 사용자가 직접 다루지 않고 DBMS를 통해 일관된 방식으로 이용하게 합니다.</li></ul>`
          },
          {
            id: "database-key-overview", title: "키(Key)의 유형",
            content: `<p><strong>키(Key)</strong>는 Relation에서 Tuple을 식별하거나 Relation 사이의 관계를 표현하는 Attribute 또는 Attribute 집합입니다.</p><div class="table-scroll"><table class="concept-table"><thead><tr><th>키</th><th>핵심 조건</th></tr></thead><tbody><tr><td>후보키(Candidate Key)</td><td>유일성 + 최소성</td></tr><tr><td>슈퍼키(Super Key)</td><td>유일성</td></tr><tr><td>기본키(Primary Key)</td><td>후보키 중 대표로 선택</td></tr><tr><td>대체키(Alternate Key)</td><td>선택되지 않은 나머지 후보키</td></tr><tr><td>외래키(Foreign Key)</td><td>다른 Relation의 키를 참조</td></tr></tbody></table></div>`
          },
          {
            id: "candidate-super-key", title: "후보키와 슈퍼키",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>설명</th><th>예시</th></tr></thead><tbody><tr><td><strong>후보키</strong></td><td>Tuple을 유일하게 식별하면서 불필요한 Attribute가 없는 최소의 키</td><td><code>{학번}</code>, <code>{이름, 학과}</code></td></tr><tr><td><strong>슈퍼키</strong></td><td>Tuple을 유일하게 식별할 수 있는 Attribute 집합. 최소성은 요구하지 않음</td><td><code>{학번, 이름}</code>, <code>{이름, 학과, 학년}</code></td></tr></tbody></table></div><div class="important-box"><span class="box-title">구분</span><p><strong>후보키는 유일성과 최소성을 모두 만족하지만, 슈퍼키는 유일성만 만족하면 됩니다.</strong></p></div>`
          },
          {
            id: "primary-alternate-foreign-key", title: "기본키·대체키·외래키",
            content: `<ul><li><strong>기본키(Primary Key)</strong>: 여러 후보키 중 하나를 대표키로 선택한 것입니다.</li><li><strong>대체키(Alternate Key)</strong>: 후보키 가운데 기본키로 선택되지 않은 나머지 키입니다.</li><li><strong>외래키(Foreign Key)</strong>: 한 Relation의 Attribute가 다른 Relation의 기본키 등을 참조하여 Relation 사이의 관계를 표현하는 키입니다.</li></ul><p>기본키는 중복과 NULL을 허용하지 않으며, 외래키는 참조 무결성 규칙에 따라 관리합니다.</p>`
          },
          {
            id: "integrity-overview", title: "데이터베이스 무결성",
            content: `<p><strong>무결성(Integrity)</strong>은 데이터가 정확하고 일관되며 유효한 상태를 유지하는 성질입니다. 키 무결성·개체 무결성·참조 무결성은 Relation의 식별과 관계를 보호하는 기본 규칙입니다.</p>`
          },
          {
            id: "key-entity-referential-integrity", title: "키·개체·참조 무결성",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>종류</th><th>규칙</th></tr></thead><tbody><tr><td><strong>키 무결성</strong></td><td>한 Relation 안에서 같은 키 값을 가진 Tuple이 존재해서는 안 됩니다.</td></tr><tr><td><strong>개체 무결성</strong></td><td>기본키 값은 중복될 수 없고 NULL이 될 수 없습니다.</td></tr><tr><td><strong>참조 무결성</strong></td><td>외래키 값은 참조되는 Relation의 키 값으로 존재하거나 NULL이어야 합니다. 참조 Attribute의 Domain도 서로 호환되어야 합니다.</td></tr></tbody></table></div><p>존재하지 않는 행의 키를 외래키가 가리키는 상태를 허용하지 않는 것이 참조 무결성의 핵심입니다.</p>`
          },
          {
            id: "transaction-definition", title: "트랜잭션(Transaction)",
            content: `<p><strong>트랜잭션</strong>은 하나의 논리적 기능을 수행하기 위한 작업의 단위입니다.</p><ul><li>한꺼번에 모두 수행되거나 모두 취소되어야 하는 데이터베이스 연산입니다.</li><li>병행제어와 회복 작업에서 다루는 <strong>논리적 작업 단위(LUW: Logical Unit of Work)</strong>입니다.</li><li>예: 계좌이체는 출금과 입금이 함께 성공해야 하나의 트랜잭션이 완성됩니다.</li></ul>`
          },
          {
            id: "transaction-acid", title: "트랜잭션의 ACID 성질",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>성질</th><th>의미</th></tr></thead><tbody><tr><td><strong>원자성(Atomicity)</strong></td><td>트랜잭션의 모든 연산은 전부 완료되거나 전부 취소되어야 합니다. <strong>All or Nothing</strong></td></tr><tr><td><strong>일관성(Consistency)</strong></td><td>성공적으로 완료된 트랜잭션은 데이터베이스를 하나의 유효한 상태에서 다른 유효한 상태로 바꿉니다.</td></tr><tr><td><strong>격리성(Isolation)</strong></td><td>실행 중인 트랜잭션의 중간결과를 다른 트랜잭션이 함부로 보거나 간섭하지 못합니다.</td></tr><tr><td><strong>영속성(Durability)</strong></td><td>완료된 트랜잭션의 결과는 장애가 발생해도 지속적으로 보존되어야 합니다.</td></tr></tbody></table></div>`
          },
          {
            id: "database-security-overview", title: "데이터베이스 보안 개요",
            content: `<p><strong>데이터베이스 보안</strong>은 저장 데이터가 허가 없이 변경·파괴·노출되지 않게 하고, 의도적인 데이터베이스 Service 방해를 막는 활동입니다.</p><ul><li>Network와 Application의 취약점을 통해 데이터가 유출·변조·삭제될 수 있습니다.</li><li>보안 요구사항에는 접근통제, 무결성, 가용성, 기밀성, 사용자 인증, 감사와 책임추적성이 포함됩니다.</li><li>민감 데이터 자체의 보호와 DBMS 운영환경·계정·설정의 보호를 함께 수행해야 합니다.</li></ul>`
          },
          {
            id: "os-dbms-security-boundary", title: "OS 보안과 DBMS 보안",
            content: `<p>OS는 파일 단위로 접근을 제어하지만, DBMS는 Table·Column·Row 등 더 세밀한 논리 객체를 직접 관리합니다. 사용자는 데이터 파일을 직접 읽지 않고 DBMS 명령을 통해 접근하므로 OS 권한만으로는 충분하지 않습니다.</p><div class="important-box"><span class="box-title">핵심</span><p><strong>OS 파일보안 + DBMS의 인증·권한·감사·암호화 정책</strong>을 함께 적용해야 합니다.</p></div>`
          },
          {
            id: "database-security-threats", title: "데이터베이스 보안 위협",
            content: `<p>사용자가 우연히 또는 의도적으로 데이터를 공개하여 발생하는 <strong>부적절한 유출</strong>, 고의적인 처리나 부정확한 처리로 인한 <strong>무결성 손상</strong>, 정당한 사용자의 접근을 막는 <strong>서비스 거부</strong>가 주요 위협입니다.</p><div class="table-scroll"><table class="concept-table"><thead><tr><th>위협</th><th>영향</th></tr></thead><tbody><tr><td>비인가 조회·유출</td><td>기밀성 침해</td></tr><tr><td>비인가 삽입·수정·삭제</td><td>무결성 침해</td></tr><tr><td>DBMS·저장소·서비스 방해</td><td>가용성 침해</td></tr><tr><td>권한오용·감사 회피</td><td>책임추적성 저하</td></tr></tbody></table></div>`
          },
          {
            id: "aggregation-threat", title: "애그리게이션(Aggregation)",
            content: `<p><strong>애그리게이션</strong>은 개별적으로는 민감하지 않은 낮은 보안등급의 정보들을 수집·조합하여 더 높은 보안등급의 민감한 정보를 알아내는 행위입니다.</p><ul><li>각 자료에 대한 개별 접근은 정상일 수 있어 탐지와 대응이 어렵습니다.</li><li>여러 데이터 집합의 결합, 반복조회와 장기간의 축적이 위험을 키웁니다.</li><li>Query Pattern, 대량조회, Export와 비정상 조합행위를 함께 감시해야 합니다.</li></ul>`
          },
          {
            id: "inference-threat", title: "추론(Inference)",
            content: `<p><strong>추론</strong>은 일반적인 데이터로부터 비밀정보를 획득할 수 있는 가능성입니다. 사용자가 직접 접근할 수 없는 항목의 값을, 허용된 통계 Query나 다른 항목과의 관계를 이용해 추측할 수 있습니다.</p><p>개별 Query가 모두 허가되었더라도 여러 응답을 조합하면 민감정보가 노출될 수 있어 통제가 어렵습니다.</p>`
          },
          {
            id: "inference-countermeasures", title: "추론 방지 기법",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>기법</th><th>개념</th></tr></thead><tbody><tr><td><strong>Polyinstantiation</strong></td><td>서로 다른 보안등급에서 같은 키를 가진 것처럼 보이는 여러 Instance를 허용하여 민감정보의 존재를 숨김</td></tr><tr><td><strong>Partition</strong></td><td>데이터를 분리하여 한 사용자가 민감한 관계를 모두 결합하지 못하게 함</td></tr><tr><td><strong>Cell Suppression</strong></td><td>추론 위험이 있는 Cell이나 결과를 공개하지 않음</td></tr><tr><td><strong>Noise</strong></td><td>통계적 유용성을 해치지 않는 범위에서 잡음을 추가</td></tr><tr><td><strong>Perturbation</strong></td><td>원자료나 결과를 일정 규칙으로 변형하여 정확한 개인값 복원을 어렵게 함</td></tr></tbody></table></div>`
          },
          {
            id: "database-security-requirements", title: "데이터베이스 보안 요구사항",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>요구사항</th><th>내용</th></tr></thead><tbody><tr><td><strong>부적절한 접근 방지</strong></td><td>승인된 사용자에게만 권한을 부여하고 사용자·응용시스템의 요청이 정당한지 검사</td></tr><tr><td><strong>추론 방지</strong></td><td>통계 데이터로부터 관리되지 않은 개별 데이터 항목의 정보를 추측하지 못하게 함</td></tr><tr><td><strong>무결성 보장</strong></td><td>비인가 접근, 시스템 오류·고장·악성코드 등으로부터 저장 데이터 보호</td></tr><tr><td><strong>운영적 무결성</strong></td><td>트랜잭션 병행 처리 중에도 데이터의 논리적 일관성 보장</td></tr><tr><td><strong>의미적 무결성</strong></td><td>허용값과 규칙을 적용하여 변경 데이터의 논리적 일관성 보장</td></tr><tr><td><strong>감사 가능</strong></td><td>데이터베이스의 모든 접근지점에서 감사기록 생성</td></tr><tr><td><strong>사용자 인증</strong></td><td>운영체제에서 수행되는 사용자 인증보다 엄격한 인증 필요</td></tr><tr><td><strong>기밀성 보장</strong></td><td>중요 데이터의 기밀성을 보호하고 인가된 사용자에게만 접근 허용</td></tr></tbody></table></div>`
          },
          {
            id: "database-security-controls-overview", title: "데이터베이스 보안통제",
            content: `<p>데이터베이스 보호는 <strong>흐름통제·추론제어·접근제어</strong>를 중심으로 이루어집니다. 저장 데이터에 암호화를 적용하면 저장매체나 데이터 파일이 노출되더라도 권한 없는 사용자가 평문을 바로 확인하기 어렵게 할 수 있습니다.</p><div class="important-box"><span class="box-title">구분</span><p><strong>흐름통제</strong>는 보안등급 사이의 정보이동을, <strong>추론제어</strong>는 허용된 결과를 통한 민감정보 유추를, <strong>접근제어</strong>는 사용자와 객체의 권한을 통제합니다.</p></div>`
          },
          {
            id: "flow-control", title: "흐름통제(Flow Control)",
            content: `<p>객체 X의 값을 읽어 객체 Y에 기록하면 <strong>X → Y</strong>의 정보흐름이 발생합니다. <strong>흐름통제</strong>는 정보가 명시적 또는 암시적으로 높은 보안등급 객체에서 낮은 보안등급 객체로 이동하지 못하도록 감시합니다.</p><ul><li>허가된 Read와 Write의 조합으로 정보가 우회 이동하는지 확인합니다.</li><li>사용자 권한뿐 아니라 Source와 Destination 객체의 보안등급을 함께 고려합니다.</li></ul>`
          },
          {
            id: "inference-control", title: "추론제어(Inference Control)",
            content: `<p>사용자가 읽을 수 있는 데이터 항목 X에 함수 <strong>f</strong>를 적용하여 <strong>Y=f(X)</strong>를 얻을 때, 직접 읽을 수 없는 민감한 Y를 알아낼 수 있다면 <strong>추론채널(Inference Channel)</strong>이 형성됩니다.</p><p>추론제어는 허용된 Query와 통계 응답을 조합해 민감정보를 복원하는 간접적 정보노출을 막습니다.</p>`
          },
          {
            id: "statistical-inference-control", title: "통계적 추론 통제",
            content: `<ul><li>집계결과에서 특정 개인의 값을 알아낼 수 있는 작은 집단 Query를 제한합니다.</li><li>Query 결과의 최소 건수, 중복 Query, 질의 이력과 사용자별 누적정보를 검사합니다.</li><li>민감한 Cell을 숨기거나 Noise·Perturbation을 적용합니다.</li><li>너무 정확한 응답은 줄이고 통계적 유용성과 기밀성 사이의 균형을 맞춥니다.</li></ul><p>완전하고 일반적인 추론방지 기법은 어렵기 때문에 정책·Query 제한·Monitoring을 함께 적용합니다.</p>`
          },
          {
            id: "database-access-control", title: "데이터베이스 접근제어",
            content: `<p><strong>접근제어</strong>는 시스템 객체에 대한 모든 직접적 접근을 보호정책에서 정한 Mode와 규칙에 따라 상호 배타적으로 허용하거나 거부합니다.</p><p>운영체제는 주로 독립적인 파일을 객체로 다루지만, 데이터베이스 객체는 Record·Field·View처럼 서로 관련되어 있고 집계 Query로 여러 객체를 함께 읽을 수 있으므로 접근관계가 더 복잡합니다.</p>`
          },
          {
            id: "database-access-granularity", title: "접근제어 객체와 세분성",
            content: `<p>데이터베이스의 접근통제는 다음과 같은 여러 세분성(Granularity)에서 적용할 수 있습니다.</p><ul><li>전체 데이터베이스</li><li>Relation·Table</li><li>Column·Attribute</li><li>Row·Tuple</li><li>개별 데이터 요소</li></ul><p>세분화할수록 정밀한 통제가 가능하지만 정책·권한·감사 관리가 복잡해집니다. 특히 추론방지는 여러 세분성의 정보결합을 함께 고려해야 합니다.</p>`
          },
          {
            id: "sql-access-control", title: "SQL 기반 접근통제",
            content: `<p>일반적으로 DBA가 사용자의 업무에 필요한 권한을 <strong>GRANT</strong>로 부여하고 더 이상 필요하지 않은 권한은 <strong>REVOKE</strong>로 회수합니다. 권한은 최소권한 원칙에 따라 Table·View·Procedure 등 필요한 객체와 동작에만 부여합니다.</p>`
          },
          {
            id: "grant-revoke-syntax", title: "GRANT·REVOKE 문법",
            content: `<div class="code-block"><code>GRANT {privilege | role}
[ON object]
TO {user | role | PUBLIC}
[IDENTIFIED BY password]
[WITH GRANT OPTION];

REVOKE {privilege | role}
[ON object]
FROM {user | role | PUBLIC};</code></div><p><strong>GRANT</strong>는 접근권한이나 Role을 부여하고, <strong>REVOKE</strong>는 부여된 권한이나 Role을 취소합니다. 실제 지원절과 문법은 DBMS 제품별로 차이가 있을 수 있습니다.</p>`
          },
          {
            id: "grant-option-cascade", title: "WITH GRANT OPTION과 권한 연쇄",
            content: `<p><strong>WITH GRANT OPTION</strong>은 권한을 받은 사용자가 그 권한을 다른 사용자에게 다시 부여할 수 있게 합니다.</p><p>객체 소유자가 중간 사용자에게 준 권한을 회수하면 그 사용자가 다른 사용자에게 전파한 종속 권한도 함께 회수될 수 있습니다. 따라서 재위임 권한은 제한적으로 사용하고 권한 부여경로를 감사해야 합니다.</p>`
          },
          {
            id: "view-access-control", title: "뷰(View) 기반 접근통제",
            content: `<p><strong>View</strong>는 하나 이상의 기본 Table(Base Table)로부터 유도된 가상 Table(Virtual Table)입니다. 물리적으로 독립된 데이터가 저장되는 것이 아니라 SELECT Query 정의를 통해 필요한 내용만 보여줍니다.</p><ul><li>사용자별로 필요한 Row·Column만 선택하여 표시할 수 있습니다.</li><li>기본 Table 직접권한 없이 View를 통해 제한된 정보만 제공할 수 있습니다.</li><li>논리적 데이터 독립성과 세밀한 접근통제에 유용합니다.</li></ul>`
          },
          {
            id: "dbms-security-checklist", title: "DBMS 보안 취약점 점검",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>점검 내용</th></tr></thead><tbody><tr><td><strong>기본계정·Password</strong></td><td>Default Account 제거·잠금, 초기 Password 변경, 복잡도·주기·실패잠금 강화</td></tr><tr><td><strong>권한</strong></td><td>DBA·고권한 계정 최소화, 업무별 Role 분리, 불필요한 PUBLIC 권한 제거</td></tr><tr><td><strong>Network</strong></td><td>원격접속 대상과 Port 제한, 관리접속 분리, 암호화 통신 사용</td></tr><tr><td><strong>취약점·Patch</strong></td><td>정기 취약점 점검, DBMS·OS 보안 Patch 적용</td></tr><tr><td><strong>감사·암호화</strong></td><td>접속·권한·DDL·민감조회 Log 감시, 중요 데이터 암호화</td></tr></tbody></table></div>`
          },
          {
            id: "multilayer-database-security", title: "다중 수준 데이터베이스 보안",
            content: `<p>데이터베이스는 다른 수준의 분류값과 보안정책을 가진 데이터를 한 System 안에서 관리할 수 있습니다. 통제는 전체 DB, Relation, Attribute, Tuple, 개별 Data Element에 적용할 수 있습니다.</p><p>분류의 세분화 정도는 접근통제 방식과 정책 복잡도에 영향을 주며, 세부 데이터를 결합해 상위 등급 정보를 유추하는 추론공격도 함께 고려해야 합니다.</p>`
          },
          {
            id: "db-encryption-overview", title: "DB 암호화 방법 개요",
            content: `<p>데이터베이스 암호화는 크게 <strong>Column 암호화</strong>와 <strong>Block 암호화</strong> 방식으로 나눌 수 있습니다.</p><div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>대표 방식</th><th>특징</th></tr></thead><tbody><tr><td><strong>Column 암호화</strong></td><td>Plug-In, API, Hybrid</td><td>선택한 민감 Column을 응용 또는 DB 계층에서 암·복호화</td></tr><tr><td><strong>Block 암호화</strong></td><td>TDE, File 암호화</td><td>DB Page·File·저장매체 단위로 투명하게 암호화</td></tr></tbody></table></div><p>적용위치에 따라 Application 수정범위, DB Server 부하, 성능, Key 관리와 운영복잡도가 달라집니다.</p>`
          },
          {
            id: "plugin-encryption", title: "Plug-In 방식",
            content: `<p>암·복호화 Module을 DB Server에 설치하고 DBMS가 <strong>Plug-In</strong>으로 호출하는 Column 암호화 방식입니다.</p><ul><li>응용프로그램의 수정이 비교적 적고 중앙집중적으로 적용하기 쉽습니다.</li><li>기존 DB Schema에 대응하는 View를 만들고 암호화 대상 Table을 추가하는 작업이 필요할 수 있습니다.</li><li>DB Server에서 암·복호화가 수행되므로 추가 부하와 지연이 발생할 수 있습니다.</li></ul>`
          },
          {
            id: "api-encryption", title: "API 방식",
            content: `<p>암·복호화 Module을 API Library 형태로 각 Application Server에 설치하고 응용프로그램이 직접 호출하는 방식입니다.</p><ul><li>암·복호화가 Application 계층에서 수행되어 DB Server의 추가 암호화 부하를 줄일 수 있습니다.</li><li>DB에 저장되기 전부터 암호문을 전송하므로 전송구간의 평문노출을 줄일 수 있습니다.</li><li>각 응용프로그램에 API 호출 Logic을 추가해야 하므로 기존 System의 전면적인 수정이 필요할 수 있습니다.</li></ul>`
          },
          {
            id: "hybrid-encryption", title: "Hybrid 방식",
            content: `<p><strong>Hybrid 방식</strong>은 Plug-In 방식의 배치업무 성능저하를 보완하기 위해 API 방식을 함께 사용하는 구성입니다.</p><ul><li>일반적인 Online SQL은 API 방식으로 처리하여 성능을 확보합니다.</li><li>나머지 업무는 DB 내부 Plug-In 방식으로 암·복호화합니다.</li><li>두 방식을 함께 운영하므로 Module·Key·오류처리와 배포관리가 복잡해질 수 있습니다.</li></ul>`
          },
          {
            id: "tde-encryption", title: "TDE(Transparent Data Encryption)",
            content: `<p><strong>TDE</strong>는 DBMS Kernel 수준에서 암·복호화를 수행하는 투명한 데이터 암호화 방식입니다.</p><ul><li>Application 수정이나 DB Schema 변경이 거의 필요하지 않습니다.</li><li>DBMS Engine이 저장 전 암호화, 조회 시 복호화를 처리합니다.</li><li>Data File이나 Disk 유출에 대한 저장 데이터 보호에 유용합니다.</li><li>정상 DB 계정으로 조회한 결과는 복호화되므로 계정·권한 통제를 대체하지 않습니다.</li></ul>`
          },
          {
            id: "file-encryption", title: "File 암호화 방식",
            content: `<p><strong>File 암호화</strong>는 OS에서 제공하는 File 암호화 기능 등을 이용하여 저장 File 단위로 보호하는 방식입니다.</p><ul><li>DB Data File뿐 아니라 Log, Image, 음성·영상 등 다양한 File을 암호화할 수 있습니다.</li><li>Application보다 저장계층에서 동작하므로 적용이 비교적 투명합니다.</li><li>DB 내부의 Column별 세밀한 통제보다는 File 전체 보호에 적합합니다.</li></ul>`
          },
          {
            id: "encryption-method-comparison", title: "DB 암호화 방식 비교",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>방식</th><th>암·복호화 위치</th><th>Application 수정</th><th>주요 고려사항</th></tr></thead><tbody><tr><td><strong>Plug-In</strong></td><td>DB Server·DBMS Plug-In</td><td>비교적 적음</td><td>DB Server 부하, View·Schema 대응</td></tr><tr><td><strong>API</strong></td><td>Application Server</td><td>큼</td><td>개발범위, 배포·Library 관리</td></tr><tr><td><strong>Hybrid</strong></td><td>Application + DB Server</td><td>중간</td><td>성능과 운영복잡도의 균형</td></tr><tr><td><strong>TDE</strong></td><td>DBMS Kernel</td><td>거의 없음</td><td>저장 File 보호, 권한통제 별도 필요</td></tr><tr><td><strong>File 암호화</strong></td><td>OS·File System</td><td>적음</td><td>File 전체 보호, 세밀한 Column 통제 한계</td></tr></tbody></table></div>`
          },
          {
            id: "mssql-security", title: "MS-SQL 보안 관리",
            content: `<p>MS-SQL은 Login·Database User·Server Role·Database Role·객체 권한을 구분해 관리합니다. 고권한 계정과 OS 명령 실행기능이 노출되면 데이터베이스 권한을 넘어 운영체제까지 영향이 확장될 수 있으므로 최소권한과 기능제한이 중요합니다.</p>`
          },
          {
            id: "xp-cmdshell", title: "xp_cmdshell",
            content: `<p><strong>xp_cmdshell</strong>은 MS-SQL에서 운영체제 File이나 명령을 실행할 수 있게 하는 확장 Stored Procedure입니다.</p><ul><li>공격자가 SQL 관리자 권한을 획득하면 DB 권한뿐 아니라 실행계정의 OS 권한까지 악용할 수 있습니다.</li><li>기본적으로 비활성화하고 업무상 필요한 경우에만 제한된 Proxy Account와 엄격한 권한·감사를 적용합니다.</li><li>활성화 여부, 실행주체, 호출기록과 비정상 명령을 점검합니다.</li></ul>`
          },
          {
            id: "stored-procedure-security", title: "저장 프로시저의 역할과 보안",
            content: `<p><strong>Stored Procedure</strong>는 복잡한 SQL을 하나의 함수처럼 미리 저장하고 이름으로 호출하는 기능입니다. Application이 반복되는 Query 대신 Procedure를 호출하면 Network 전송량과 반복 Parsing을 줄이고 필요한 동작만 권한으로 제공할 수 있습니다.</p><p>하지만 Procedure 내부에서 동적 SQL을 안전하지 않게 만들거나 과도한 권한으로 실행하면 SQL Injection과 권한상승의 통로가 될 수 있으므로 Parameter Binding·소유권·실행권한·변경감사를 관리해야 합니다.</p>`
          },
          {
            id: "mssql-authentication", title: "MS-SQL 인증 모드",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>모드</th><th>설명</th></tr></thead><tbody><tr><td><strong>Windows 인증 모드</strong></td><td>Windows Login과 보안기능을 이용해 SQL Server에 인증합니다. 별도의 SQL Server ID·Password를 사용하지 않습니다.</td></tr><tr><td><strong>혼합 인증 모드</strong></td><td>Windows 인증과 SQL Server가 자체 관리하는 Login ID·Password 인증을 모두 허용합니다.</td></tr></tbody></table></div><p>가능하면 Windows 인증과 중앙 계정정책을 우선하고, SQL Login을 사용한다면 강한 Password·잠금·최소권한·접속제한을 적용합니다.</p>`
          },
          {
            id: "fixed-database-roles", title: "MS-SQL 고정 데이터베이스 역할",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>Role</th><th>권한</th></tr></thead><tbody><tr><td><strong>db_owner</strong></td><td>Database의 모든 유지관리와 구성작업 수행</td></tr><tr><td><strong>db_accessadmin</strong></td><td>Windows 사용자·그룹과 SQL Server Login의 DB 접근 추가·제거</td></tr><tr><td><strong>db_datareader</strong></td><td>모든 사용자 Table의 데이터 읽기</td></tr><tr><td><strong>db_datawriter</strong></td><td>모든 사용자 Table의 데이터 추가·삭제·변경</td></tr><tr><td><strong>db_ddladmin</strong></td><td>Database의 모든 DDL 명령 실행</td></tr><tr><td><strong>db_securityadmin</strong></td><td>Role Membership 수정과 권한관리</td></tr><tr><td><strong>db_backupoperator</strong></td><td>Database Backup 수행</td></tr><tr><td><strong>db_denydatareader</strong></td><td>모든 사용자 Table의 데이터 읽기 금지</td></tr><tr><td><strong>db_denydatawriter</strong></td><td>모든 사용자 Table의 데이터 추가·수정·삭제 금지</td></tr></tbody></table></div><p>고정 Role은 권한범위가 넓으므로 필요성을 검토하고 가능한 경우 업무별 사용자 정의 Role로 최소권한을 구성합니다.</p>`
          },
          {
            id: "database-security-summary", title: "SECTION 35 핵심 흐름",
            content: `<div class="important-box"><span class="box-title">전체 흐름</span><p><strong>통합·저장·운영·공용 데이터 → 후보키·슈퍼키·기본키·외래키 → 키·개체·참조 무결성 → 트랜잭션 ACID → 유출·변조·서비스 거부 → Aggregation·Inference → 흐름·추론·접근통제 → GRANT·REVOKE·View → 다중 수준 보안 → Plug-In·API·Hybrid·TDE·File 암호화 → MS-SQL 인증·Role·xp_cmdshell 관리</strong></p></div><div class="table-scroll"><table class="concept-table"><thead><tr><th>문제 키워드</th><th>정답</th></tr></thead><tbody><tr><td>유일성 + 최소성</td><td>후보키</td></tr><tr><td>기본키는 중복·NULL 금지</td><td>개체 무결성</td></tr><tr><td>All or Nothing</td><td>원자성</td></tr><tr><td>낮은 등급 정보를 조합해 민감정보 획득</td><td>Aggregation</td></tr><tr><td>허용된 결과로 비밀정보 유추</td><td>Inference</td></tr><tr><td>권한 부여 / 회수</td><td>GRANT / REVOKE</td></tr><tr><td>DBMS Kernel 수준의 투명한 암호화</td><td>TDE</td></tr><tr><td>OS 명령실행 확장 Stored Procedure</td><td>xp_cmdshell</td></tr></tbody></table></div>`
          }
        ],
        content: ""
      },
      {
        id: "section-36",
        number: 36,
        title: "전자상거래 보안",
        subtopics: [
          {
            id: "ecommerce-security-overview", title: "전자상거래 보안 개요",
            content: '<p><strong>전자상거래</strong>는 개방된 Network에서 거래 상대방을 직접 확인하지 않고 상품·서비스·대금을 교환하는 거래입니다. 편리성과 신속성이 큰 반면, 통신 상대의 실체와 전달 정보의 안전성을 별도로 보장해야 합니다.</p><ul><li>거래 당사자 인증, 메시지 인증, 구매자·판매자의 부인방지가 필요합니다.</li><li>개방된 통신망에서 개인정보와 결제정보가 노출·변조되지 않도록 보호해야 합니다.</li><li>전자지불을 포함한 거래 전체 과정에 신뢰할 수 있는 보안기술과 운영절차가 필요합니다.</li></ul>'
          },
          {
            id: "ecommerce-trust-model", title: "전자상거래의 신뢰 구조",
            content: '<p>전자상거래에서는 거래 상대방과 상품을 직접 확인하기 어려우므로 <strong>인증기관과 같은 신뢰할 수 있는 제3자</strong>가 거래주체의 신원과 거래사실을 증명할 수 있어야 합니다.</p><div class="important-box"><span class="box-title">핵심</span><p><strong>거래 상대 확인 → 거래내용 증명 → 안전한 전자지불 → 분쟁 시 책임추적</strong></p></div>'
          },
          {
            id: "ecommerce-attack-types", title: "전자상거래 보안 공격 유형",
            content: '<div class="table-scroll"><table class="concept-table"><thead><tr><th>공격 유형</th><th>설명</th></tr></thead><tbody><tr><td><strong>인증 공격</strong></td><td>공격자가 거래 당사자나 등록 사용자를 사칭하여 정당한 사용자처럼 행동합니다.</td></tr><tr><td><strong>송·수신 부인 공격</strong></td><td>메시지나 주문·결제정보를 보내거나 받고도 그 사실을 부인합니다.</td></tr><tr><td><strong>기밀성 공격</strong></td><td>전송되는 개인정보·결제정보·암호키·거래정보를 도청하거나 유출합니다.</td></tr><tr><td><strong>무결성 공격</strong></td><td>주문·송금·결제 데이터의 내용이나 금액을 가로채 변조합니다.</td></tr></tbody></table></div>'
          },
          {
            id: "ecommerce-security-requirements", title: "전자상거래 보안 요구사항",
            content: '<ul><li><strong>거래상대 확인</strong>: Network에서 상대방과 자산에 대한 신뢰 가능한 확인수단이 필요합니다.</li><li><strong>거래사실 증명</strong>: 거래 내용과 당사자의 행위를 신뢰할 수 있는 제3자가 증명할 수 있어야 합니다.</li><li><strong>전자지불 안전성</strong>: 결제과정의 위조·변조·도청·부인을 막고 결제결과를 정확히 보장해야 합니다.</li></ul>'
          },
          {
            id: "electronic-money-overview", title: "전자화폐 개요",
            content: '<p><strong>전자화폐(Electronic Money)</strong>는 Digital Data를 이용하여 가상공간에서 동전이나 지폐의 역할을 수행하는 지불수단입니다. 기본 구성주체는 은행(Bank), 고객·구매자(Consumer), 상점(Shop)입니다.</p><ul><li><strong>인출</strong>: 은행이 고객에게 전자화폐를 발행합니다.</li><li><strong>지불</strong>: 고객이 상점에 전자화폐를 전달합니다.</li><li><strong>예치</strong>: 상점이 받은 전자화폐를 은행에 입금하여 실제 화폐로 정산합니다.</li></ul>'
          },
          {
            id: "electronic-money-flow", title: "전자화폐 거래 흐름",
            content: '<div class="important-box"><span class="box-title">기본 흐름</span><p><strong>은행 ─ 인출 프로토콜 → 고객 ─ 지불 프로토콜 → 상점 ─ 입금 프로토콜 → 은행</strong></p></div><p>구성요소 사이에서 사용되는 인출·지불·입금 프로토콜은 전자화폐의 발행, 소유권 이전, 상환과 정산을 안전하게 처리해야 합니다.</p>'
          },
          {
            id: "electronic-money-requirements", title: "전자화폐의 기본 요구조건",
            content: '<div class="table-scroll"><table class="concept-table"><thead><tr><th>요구조건</th><th>핵심 의미</th></tr></thead><tbody><tr><td><strong>독립성(Independence)</strong></td><td>특정 Hardware나 물리 매체에 종속되지 않고 Network에서 전자적으로 이전할 수 있어야 합니다.</td></tr><tr><td><strong>재사용 불가능성·안전성(Security)</strong></td><td>불법 복사와 위조가 불가능하고 동일한 화폐가 중복 사용되지 않아야 합니다.</td></tr><tr><td><strong>익명성·추적 불가능성(Privacy·Untraceability)</strong></td><td>사용자의 사생활을 보호하고 정당한 거래내역이 함부로 연결·추적되지 않아야 합니다.</td></tr><tr><td><strong>오프라인성(Off-line)</strong></td><td>지불할 때 은행과 실시간으로 통신하지 않고 상점이 나중에 예치할 수 있어야 합니다.</td></tr><tr><td><strong>양도성(Transferability)</strong></td><td>받은 전자화폐를 다른 사용자나 상점에 다시 이전할 수 있어야 합니다.</td></tr><tr><td><strong>분할 가능성(Divisibility)</strong></td><td>필요한 금액만큼 나누어 사용할 수 있어야 합니다.</td></tr></tbody></table></div>'
          },
          {
            id: "electronic-money-control", title: "부정사용 통제 요구사항",
            content: '<ul><li><strong>부정 사용자의 익명성 취소</strong>: 정당한 거래의 익명성은 보호하되 불법사용이 확인되면 적법한 절차에 따라 신원을 추적할 수 있어야 합니다.</li><li><strong>이중사용 방지(Double-spending Prevention)</strong>: 같은 전자화폐를 두 번 이상 사용하면 은행이 이를 검출하고 차단할 수 있어야 합니다.</li></ul><p>익명성과 책임추적성은 서로 충돌할 수 있으므로 정책과 기술을 함께 설계해야 합니다.</p>'
          },
          {
            id: "electronic-payment-system", title: "전자지불 시스템 개요",
            content: '<p><strong>전자지불 시스템</strong>은 전자상거래에서 지불정보를 생성·전달·승인·정산하는 체계입니다. 대표 구성주체는 은행, 고객, 상점, 인증기관이며 지불방식에 따라 카드사·이동통신사·Payment Gateway가 추가됩니다.</p>'
          },
          {
            id: "payment-system-entities", title: "전자지불 구성주체",
            content: '<div class="table-scroll"><table class="concept-table"><thead><tr><th>구성주체</th><th>역할</th></tr></thead><tbody><tr><td><strong>은행</strong></td><td>전자화폐를 발행하고 결제·정산을 처리합니다.</td></tr><tr><td><strong>고객</strong></td><td>발급받은 전자지불수단으로 상품이나 서비스를 구매합니다.</td></tr><tr><td><strong>상점</strong></td><td>상품·서비스를 제공하고 지불정보를 승인·입금·정산 과정에 전달합니다.</td></tr><tr><td><strong>인증기관</strong></td><td>참여자의 신원과 공개키를 인증하여 거래주체 사이의 신뢰를 지원합니다.</td></tr></tbody></table></div>'
          },
          {
            id: "electronic-payment-types", title: "전자지불 시스템의 종류",
            content: '<div class="table-scroll"><table class="concept-table"><thead><tr><th>종류</th><th>설명</th></tr></thead><tbody><tr><td><strong>신용카드 지불</strong></td><td>가맹점이 카드정보를 받아 카드사에 승인을 요청하는 방식입니다. 오프라인 결제와 Online 결제로 나뉩니다.</td></tr><tr><td><strong>전자화폐 지불</strong></td><td>IC Card나 PC 등에 저장한 Digital Value를 Online 또는 Offline 구매에 사용합니다.</td></tr><tr><td><strong>계좌이체 지불</strong></td><td>Telebanking·Phone Banking과 PC Banking·Internet Banking을 이용합니다.</td></tr><tr><td><strong>Mobile 지불</strong></td><td>휴대전화번호나 UIM 등 Mobile 단말의 가입자정보를 이용하여 결제합니다.</td></tr></tbody></table></div>'
          },
          {
            id: "payment-broker-model", title: "지불 중개모델과 전자화폐 모델",
            content: '<p><strong>지불 중개모델</strong>은 독립적인 신용구조를 갖는 중개자가 구매자와 판매자 사이의 지불을 연결하는 방식입니다. 교재의 대표 예로 SET, CyberCash, First Virtual, SSL/TLS 기반 방식 등이 제시됩니다.</p><p><strong>전자화폐 시스템</strong>은 별도의 지불 중개 없이 전자적 가치 자체를 전달하는 모델이며 Mondex, E-Cash, Millicent, Proton 등이 역사적 사례로 제시됩니다.</p><p>제품과 서비스 명칭은 시험의 분류 예시이며 현재 사용현황과는 구분해서 학습합니다.</p>'
          },
          {
            id: "payment-security-requirements", title: "전자지불 시스템의 정보보호 요구사항",
            content: '<div class="table-scroll"><table class="concept-table"><thead><tr><th>요구사항</th><th>의미</th></tr></thead><tbody><tr><td><strong>위조 불가능성(Unforgeability)</strong></td><td>정당한 사용자 외에는 유효한 전자화폐나 지불정보를 만들 수 없어야 합니다.</td></tr><tr><td><strong>부인방지(Non-Repudiation)</strong></td><td>거래 당사자가 자신이 수행한 지불·수신 행위를 나중에 부인할 수 없어야 합니다.</td></tr><tr><td><strong>누명 방지(Framing-Freeness)</strong></td><td>일부 참여자가 결탁하더라도 정당한 사용자에게 부정거래의 책임을 뒤집어씌울 수 없어야 합니다.</td></tr><tr><td><strong>무결성·인증</strong></td><td>구매·지불 정보가 변조되지 않았고 정당한 참여자가 생성했음을 확인합니다.</td></tr><tr><td><strong>Privacy·Anonymity</strong></td><td>필요 이상의 개인정보와 거래관계를 노출하지 않습니다.</td></tr></tbody></table></div>'
          },
          {
            id: "payment-operational-requirements", title: "전자지불 운영 요구사항",
            content: '<p>전자지불 시스템은 보안성뿐 아니라 실제 서비스를 위한 운영조건도 충족해야 합니다.</p><ul><li><strong>원자성</strong>: 지불과 상품·서비스 제공이 일부만 성공하지 않도록 처리합니다.</li><li><strong>감사·분쟁해결</strong>: 거래기록을 검증하고 사고 발생 시 원인을 추적합니다.</li><li><strong>공정성</strong>: 어느 한쪽만 부당한 이익을 얻지 않게 합니다.</li><li><strong>상호운용성·교환성</strong>: 서로 다른 기관과 시스템 사이에서 사용할 수 있어야 합니다.</li><li><strong>확장성·가용성·효율성</strong>: 이용자와 거래량이 늘어도 안정적으로 처리해야 합니다.</li></ul>'
          },
          {
            id: "set-overview", title: "SET(Secure Electronic Transaction) 개요",
            content: '<p><strong>SET</strong>는 Visa와 MasterCard가 인터넷 신용카드 거래를 보호하기 위해 개발한 보안 프로토콜입니다. RSA 기반 암호화·전자서명·인증서 기술을 이용하여 참여자를 인증하고 주문정보와 지불정보를 분리해 보호합니다.</p><div class="important-box"><span class="box-title">핵심 기술</span><p><strong>전자봉투(Digital Envelope) + 이중서명(Dual Signature)</strong></p></div><p>SET는 전자상거래 보안의 역사적 표준으로 시험에서 중요하지만, 구현 복잡성 때문에 오늘날의 일반적인 Web 결제방식과는 구분해야 합니다.</p>'
          },
          {
            id: "set-security-goals", title: "SET의 보호 목표",
            content: '<ul><li>카드 소지자·가맹점·은행 등 거래 참여자를 인증합니다.</li><li>가맹점은 주문내용을 처리하면서 카드번호와 지불정보를 직접 보지 못하게 합니다.</li><li>Payment Gateway는 지불정보를 처리하지만 구매자의 상세 주문내용을 알 수 없게 합니다.</li><li>주문정보와 지불정보가 하나의 거래에 속한다는 사실은 이중서명으로 연결·검증합니다.</li></ul>'
          },
          {
            id: "set-participants", title: "SET 참여주체",
            content: '<div class="table-scroll"><table class="concept-table"><thead><tr><th>참여주체</th><th>역할</th></tr></thead><tbody><tr><td><strong>카드 소지자(Cardholder)</strong></td><td>발행사가 허가한 지불카드를 이용하여 구매하고 전자지갑을 사용합니다.</td></tr><tr><td><strong>발행사(Issuer)</strong></td><td>카드 소지자의 계좌를 만들고 카드를 발급한 금융기관입니다.</td></tr><tr><td><strong>가맹점(Merchant)</strong></td><td>상품·서비스를 제공하고 주문정보를 처리합니다.</td></tr><tr><td><strong>지불 은행(Acquirer)</strong></td><td>가맹점과 계약하여 카드거래의 승인·정산을 담당합니다.</td></tr><tr><td><strong>지불 게이트웨이(Payment Gateway)</strong></td><td>가맹점의 승인요청을 받아 금융망과 연결하고 지불 메시지를 처리합니다.</td></tr><tr><td><strong>인증기관(CA)</strong></td><td>SET 참여자의 공개키 인증서를 발행합니다.</td></tr></tbody></table></div>'
          },
          {
            id: "cardholder-issuer-merchant", title: "Cardholder·Issuer·Merchant",
            content: '<ul><li><strong>Cardholder</strong>: 발행사가 인정한 카드계정과 전자지갑을 이용하여 구매정보와 지불정보를 생성합니다.</li><li><strong>Issuer</strong>: 고객의 신용과 계정을 관리하고 카드를 발급합니다.</li><li><strong>Merchant</strong>: 주문정보를 확인하고 상품이나 서비스를 제공하지만 카드번호 등 민감 지불정보는 직접 확인하지 않습니다.</li></ul>'
          },
          {
            id: "acquirer-gateway-ca", title: "Acquirer·Payment Gateway·CA",
            content: '<ul><li><strong>Acquirer</strong>: 가맹점 계정을 개설하고 승인결과에 따라 실제 지불·정산을 처리합니다.</li><li><strong>Payment Gateway</strong>: 가맹점과 금융기관 사이에서 지불승인 메시지를 변환·전달하는 관문입니다.</li><li><strong>CA</strong>: Cardholder·Merchant·Gateway 등 참여자의 인증서를 발급하여 공개키의 신뢰성을 보장합니다.</li></ul>'
          },
          {
            id: "dual-signature-purpose", title: "이중서명(Dual Signature)의 목적",
            content: '<p><strong>이중서명</strong>은 하나의 거래에 속하는 주문정보(OI)와 지불정보(PI)를 서로 연결하면서도 각 수신자가 자신에게 필요한 정보만 보게 하는 SET의 핵심기술입니다.</p><div class="table-scroll"><table class="concept-table"><thead><tr><th>수신자</th><th>볼 수 있는 정보</th><th>볼 수 없는 정보</th></tr></thead><tbody><tr><td>가맹점</td><td>주문정보 OI</td><td>카드번호 등 지불정보 PI</td></tr><tr><td>Payment Gateway</td><td>지불정보 PI</td><td>상세 주문정보 OI</td></tr></tbody></table></div>'
          },
          {
            id: "dual-signature-creation", title: "이중서명 생성 과정",
            content: '<ol><li>카드 소지자는 주문정보 <strong>OI</strong>와 지불정보 <strong>PI</strong>를 각각 준비합니다.</li><li><code>OIMD = H(OI)</code>, <code>PIMD = H(PI)</code>로 두 Message Digest를 만듭니다.</li><li>두 Digest를 결합하여 다시 Hash한 뒤 카드 소지자의 개인키로 서명합니다.</li></ol><div class="important-box"><span class="box-title">공식</span><p><strong>DS = Sign<sub>KRc</sub>( H(PIMD ∥ OIMD) )</strong></p></div><p>따라서 OI나 PI 중 하나라도 바뀌면 결합된 Hash가 달라져 이중서명 검증에 실패합니다.</p>'
          },
          {
            id: "set-digital-envelope", title: "SET의 전자봉투",
            content: '<p>지불정보는 일회용 대칭키로 암호화하고, 그 대칭키는 Payment Gateway의 공개키로 암호화하여 함께 전달합니다.</p><ul><li>대량의 지불정보는 빠른 대칭키 암호로 보호합니다.</li><li>대칭키는 수신자의 공개키로 보호하므로 해당 개인키를 가진 Gateway만 복호화할 수 있습니다.</li><li>가맹점은 암호화된 지불정보를 중계하지만 내용을 알 수 없습니다.</li></ul>'
          },
          {
            id: "merchant-dual-signature-verification", title: "가맹점의 이중서명 검증",
            content: '<ol><li>가맹점은 카드 소지자에게 받은 주문정보 OI를 Hash하여 OIMD를 구합니다.</li><li>함께 전달받은 PIMD와 OIMD를 결합해 Hash합니다.</li><li>카드 소지자의 공개키로 이중서명을 검증합니다.</li></ol><p>가맹점은 PI의 실제 내용을 보지 않고도 주문정보와 지불정보가 동일한 거래에 연결되어 있고 변조되지 않았음을 확인할 수 있습니다.</p>'
          },
          {
            id: "gateway-dual-signature-verification", title: "Gateway의 이중서명 검증",
            content: '<ol><li>Payment Gateway는 자신의 개인키로 전자봉투의 대칭키를 복호화하고 PI를 확인합니다.</li><li>PI를 Hash하여 PIMD를 계산합니다.</li><li>가맹점으로부터 전달된 OIMD와 결합해 카드 소지자의 이중서명을 검증합니다.</li></ol><p>Gateway는 OI의 실제 내용을 보지 않고도 결제정보가 해당 주문과 연결되어 있고 변조되지 않았음을 확인합니다.</p>'
          },
          {
            id: "set-transaction-flow", title: "SET 거래 처리 흐름",
            content: '<ol><li>Cardholder가 OI·PI를 만들고 이중서명과 전자봉투를 생성합니다.</li><li>Merchant는 OI와 이중서명을 검증한 뒤 지불 관련 자료를 Payment Gateway로 전달합니다.</li><li>Gateway는 전자봉투를 열어 PI와 이중서명을 검증하고 Issuer·Acquirer를 통해 승인을 처리합니다.</li><li>승인결과가 Merchant에 전달되면 상품·서비스를 제공하고, 이후 정산을 수행합니다.</li></ol>'
          },
          {
            id: "set-advantages", title: "SET의 장점",
            content: '<ul><li>전자거래의 사기와 지불정보 변조를 방지합니다.</li><li>기존 신용카드 기반구조를 활용할 수 있습니다.</li><li>가맹점이 카드번호를 직접 보지 않게 하여 SSL만 사용하는 단순 결제방식의 개인정보 노출문제를 보완합니다.</li><li>전자서명과 인증서를 통해 참여자 인증·무결성·부인방지를 제공합니다.</li></ul>'
          },
          {
            id: "set-disadvantages", title: "SET의 단점",
            content: '<ul><li>인증서·전자봉투·이중서명 등으로 Protocol이 매우 복잡합니다.</li><li>RSA 연산과 다단계 검증으로 처리속도가 저하될 수 있습니다.</li><li>Cardholder에게 전자지갑 Software가 필요합니다.</li><li>Merchant에도 SET 처리 Software가 필요합니다.</li><li>Payment Gateway에 별도의 Hardware와 Software가 필요하여 구축·운영비용이 큽니다.</li></ul>'
          },
          {
            id: "ebxml-overview", title: "ebXML 개요",
            content: '<p><strong>ebXML(electronic business XML)</strong>은 기업이 지역과 구현환경에 관계없이 인터넷에서 전자상거래 정보를 교환할 수 있도록 만든 개방형 국제표준입니다. XML을 기반으로 하나의 세계적인 전자상거래 시장을 구성하는 것을 목표로 합니다.</p>'
          },
          {
            id: "ebxml-components", title: "ebXML 구성요소",
            content: '<div class="table-scroll"><table class="concept-table"><thead><tr><th>구성요소</th><th>역할</th></tr></thead><tbody><tr><td><strong>Business Process</strong></td><td>거래절차를 표준화된 방법으로 Modeling하여 System이 자동 인식·처리하게 합니다.</td></tr><tr><td><strong>Core Components</strong></td><td>전자문서의 공통 항목을 재사용 가능한 표준 Component로 정의합니다.</td></tr><tr><td><strong>Registry / Repository</strong></td><td>거래에 필요한 표준정보와 제출정보를 등록·검색·저장합니다.</td></tr><tr><td><strong>Trading Partners</strong></td><td>거래 당사자의 정보와 지원 가능한 업무협약 Profile을 표준형태로 표현합니다.</td></tr><tr><td><strong>Transport, Routing and Packaging</strong></td><td>메시지 전송·교환·묶음과 안전한 전달방법을 정의합니다.</td></tr></tbody></table></div>'
          },
          {
            id: "ebxml-reusability", title: "ebXML의 재활용성",
            content: '<p>XML 문서는 구성항목을 Element와 Tag로 표현하므로 공통 Component를 분리해 재사용할 수 있습니다.</p><ul><li>여러 문서에서 공통으로 쓰는 핵심 Component를 표준화합니다.</li><li>새 XML 문서를 만들 때 필요한 Component를 선택·결합하여 개발시간을 줄입니다.</li><li>문서개발이 끝난 뒤에도 새로 생긴 항목을 기존 Component에 추가하여 문서구성을 표준화할 수 있습니다.</li></ul>'
          },
          {
            id: "ebxml-business-process", title: "ebXML의 Business Process 활용",
            content: '<p>ebXML은 문서형식뿐 아니라 실제 거래의 <strong>Scenario 수준</strong>까지 표준화합니다. Business 전 과정을 Modeling해 거래 Scenario를 작성하고, 참여 System은 그 Scenario에 따라 B2B 거래를 자동화하여 실행할 수 있습니다.</p>'
          },
          {
            id: "wpki-overview", title: "WPKI(Wireless Public Key Infrastructure)",
            content: '<p><strong>WPKI</strong>는 WAP 환경에서 Server와 Client 사이의 인증서를 발급·관리하기 위한 무선환경용 공개키 기반구조입니다. 제한된 단말·통신환경에서도 신원인증, 공개키 검증과 안전한 전자거래를 지원합니다.</p><p>유선 인터넷의 PKI를 무선환경에 맞게 적용한 개념으로, Mobile 금융·증권·쇼핑 등에서 공인된 인증체계를 제공하기 위해 사용됩니다.</p>'
          },
          {
            id: "wpki-components", title: "WPKI 구성요소",
            content: '<div class="table-scroll"><table class="concept-table"><thead><tr><th>구성요소</th><th>역할</th></tr></thead><tbody><tr><td><strong>CA Server System</strong></td><td>인증서를 발급하고 관리합니다.</td></tr><tr><td><strong>RA Server System</strong></td><td>인증서 발급·관리 요청을 접수하고 CA에 중계합니다.</td></tr><tr><td><strong>Client System</strong></td><td>인증서 발급·관리 요청을 생성하고 인증서를 사용합니다.</td></tr><tr><td><strong>Directory Server System</strong></td><td>CA가 발행한 인증서와 관련정보를 저장·관리하여 조회할 수 있게 합니다.</td></tr></tbody></table></div>'
          },
          {
            id: "ecommerce-security-summary", title: "SECTION 36 핵심 흐름",
            content: '<div class="important-box"><span class="box-title">전체 흐름</span><p><strong>개방형 Network의 거래위험 → 인증·부인방지·기밀성·무결성 → 전자화폐의 인출·지불·예치 → 안전성·익명성·오프라인성·양도성·분할성 → 전자지불 구성과 정보보호 요구사항 → SET의 전자봉투·이중서명 → OI·PI 분리와 결합검증 → ebXML 표준 전자거래 → WPKI 무선 인증기반</strong></p></div><div class="table-scroll"><table class="concept-table"><thead><tr><th>문제 키워드</th><th>정답</th></tr></thead><tbody><tr><td>같은 전자화폐의 반복사용</td><td>Double-spending</td></tr><tr><td>은행과 실시간 통신 없이 지불</td><td>Off-line</td></tr><tr><td>누명을 씌울 수 없어야 함</td><td>Framing-Freeness</td></tr><tr><td>주문정보와 지불정보를 연결하되 서로 분리</td><td>SET의 이중서명</td></tr><tr><td>대칭키를 수신자의 공개키로 보호</td><td>전자봉투</td></tr><tr><td>Business Process·Core Components·Registry</td><td>ebXML</td></tr><tr><td>무선환경의 공개키 인증기반</td><td>WPKI</td></tr></tbody></table></div>'
          }
        ],
        content: ""
      },
      {
        id: "section-37",
        number: 37,
        title: "침해사고대응(디지털 포렌식)",
        subtopics: [
          {
            id: "hacking-overview", title: "해킹의 개요와 정의",
            content: `<p><strong>해킹(Hacking)</strong>은 컴퓨터·네트워크 시스템에 접근하여 구조와 동작을 분석하거나 기능을 변경하는 행위를 뜻합니다. 원래는 기술적 문제를 창의적으로 해결하는 의미로도 사용되었지만, 보안 분야에서는 흔히 <strong>권한 없이 시스템에 접근하거나 정상적인 서비스를 방해하는 행위</strong>를 가리킵니다.</p><div class="important-box"><span class="box-title">구분</span><p><strong>Hacking</strong>은 기술 탐구까지 포함하는 넓은 표현이고, <strong>Cracking</strong>은 악의적으로 보안을 깨뜨려 정보탈취·변조·파괴를 시도하는 행위를 강조합니다. 실제 법적 판단은 명칭보다 접근 권한과 행위의 위법성에 따라 이루어집니다.</p></div>`
          },
          {
            id: "hacker-types", title: "White Hat·Black Hat·Gray Hat·Hacktivism",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>의미</th></tr></thead><tbody><tr><td><strong>White Hat</strong></td><td>허가받은 범위에서 취약점을 점검하고 개선을 돕는 보안 전문가</td></tr><tr><td><strong>Black Hat</strong></td><td>금전·정보탈취·파괴 등 악의적 목적의 침해행위를 수행하는 공격자</td></tr><tr><td><strong>Gray Hat</strong></td><td>선의의 목적을 주장하더라도 사전허가 없이 점검하거나 공개하는 등 White Hat과 Black Hat의 중간적 성격을 보이는 사람</td></tr><tr><td><strong>Hacktivism</strong></td><td>정치·사회적 목적을 알리기 위해 해킹기술을 사용하는 행동주의</td></tr></tbody></table></div><p>보안점검은 목적이 선하더라도 반드시 소유자의 명시적 허가와 정해진 범위 안에서 수행해야 합니다.</p>`
          },
          {
            id: "hacker-levels", title: "해커의 수준별 분류",
            content: `<p>교재에서는 Gilbert Alaverdian의 분류를 바탕으로 기술수준을 다음 5단계로 설명합니다.</p><div class="table-scroll"><table class="concept-table"><thead><tr><th>등급</th><th>특징</th></tr></thead><tbody><tr><td><strong>Elite</strong></td><td>시스템 취약점을 스스로 발견하고 새로운 공격기법이나 도구를 만들 수 있는 최고 수준</td></tr><tr><td><strong>Semi Elite</strong></td><td>운영체제와 네트워크를 이해하고 알려진 취약점을 이용하거나 공격코드를 응용할 수 있는 수준</td></tr><tr><td><strong>Developed Kiddie</strong></td><td>기존 공격기법을 여러 차례 시도하고 일부 코드를 수정할 수 있으나 새로운 취약점을 찾는 능력은 부족한 수준</td></tr><tr><td><strong>Script Kiddie</strong></td><td>네트워크·운영체제 지식이 부족하며 다른 사람이 만든 도구와 Script를 내려받아 사용하는 수준</td></tr><tr><td><strong>Lamer</strong></td><td>기술이 거의 없으면서 해커라고 과시하고 GUI 도구·Trojan 등을 무분별하게 사용하는 초보 수준</td></tr></tbody></table></div>`
          },
          {
            id: "hacking-technology-evolution", title: "해킹기술의 변화",
            content: `<ol><li><strong>1990년대 초기</strong>: Network 이용과 공격도구가 제한적이어서 높은 기술지식이 필요했고 침해사례가 상대적으로 적었습니다.</li><li><strong>1990년대 중·후반</strong>: Internet 보급과 공개 공격도구 증가로 진입장벽이 낮아지고 침해사고가 빠르게 늘었습니다.</li><li><strong>최근</strong>: 금전·정보탈취·서비스 방해 등 목적이 뚜렷해지고 특정 조직을 장기간 노리는 공격이 증가했습니다. Botnet, Phishing·Pharming, Spyware, 악성 Script와 공급망 공격처럼 여러 수단이 결합됩니다.</li></ol>`
          },
          {
            id: "general-hacking-process", title: "일반적인 해킹 순서",
            content: `<ol><li><strong>대상 선정</strong></li><li><strong>취약점·환경 정보수집</strong></li><li><strong>취약점 분석</strong></li><li><strong>취약점 Exploit</strong></li><li><strong>관리자 권한 획득</strong></li><li><strong>Backdoor 설치·지속성 확보</strong></li><li><strong>다른 시스템 공격 또는 중요정보 훼손·서비스 중단</strong></li><li><strong>침입 Log 삭제 등 흔적 은폐</strong></li></ol><p>공격자는 수집한 정보를 바탕으로 인증정보를 탈취하거나 취약점을 악용해 침투하고, 권한상승과 내부이동을 거쳐 목적을 달성하려 합니다. 모든 공격이 이 순서를 그대로 따르는 것은 아니지만 <strong>정보수집 → 침투 → 권한확대 → 목적수행 → 흔적은폐</strong> 흐름으로 기억하면 좋습니다.</p>`
          },
          {
            id: "incident-response-overview", title: "침해사고 대응 개요",
            content: `<p><strong>침해사고 대응(Incident Response)</strong>은 보안사고를 탐지·분석하고 확산을 억제한 뒤, 피해 시스템을 복구하고 재발방지 대책을 적용하는 일련의 활동입니다.</p><div class="important-box"><span class="box-title">핵심 목표</span><p><strong>피해 최소화 → 증거 보존 → 원인·범위 규명 → 안전한 복구 → 재발 방지</strong></p></div><p>초기 대응에서 운영복구만 서두르면 휘발성 정보나 침입흔적을 잃을 수 있으므로, 업무연속성과 증거보존의 우선순위를 함께 판단해야 합니다.</p>`
          },
          {
            id: "cert-csirt-overview", title: "CERT·CSIRT 개요",
            content: `<p><strong>CERT(Computer Emergency Response Team)</strong> 또는 <strong>CSIRT(Computer Security Incident Response Team)</strong>는 컴퓨터 보안사고를 예방하고 사고 발생 시 조사·분석·대응·복구를 지원하는 전문조직입니다.</p><p>1988년 Morris Worm 사건을 계기로 미국 Carnegie Mellon University의 SEI에 CERT/CC가 만들어졌으며, 이후 국가·산업·기업 단위의 대응조직으로 확산되었습니다. CERT는 고유명칭으로, CSIRT는 보안사고 대응조직을 가리키는 일반적 표현으로 많이 사용됩니다.</p>`
          },
          {
            id: "cert-roles", title: "CERT의 역할",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>영역</th><th>주요 역할</th></tr></thead><tbody><tr><td><strong>예방</strong></td><td>취약점 진단·조치, 보안정책 수립, 대응기술 연구와 전파, 교육·훈련</td></tr><tr><td><strong>탐지·접수</strong></td><td>보안관제, 침해신고 접수, 사고 분류와 우선순위 결정</td></tr><tr><td><strong>대응·복구</strong></td><td>원인·영향범위 분석, 확산차단, 증거확보, 피해복구와 재발방지</td></tr><tr><td><strong>협력</strong></td><td>KrCERT/CC 등 외부기관과 위협·취약점·사고정보 교류</td></tr></tbody></table></div>`
          },
          {
            id: "incident-reporting-importance", title: "침해사고 신고의 중요성",
            content: `<ul><li>사고의 피해규모와 영향을 조기에 파악할 수 있습니다.</li><li>전문가가 Log·Memory·Disk 등 증거를 적절한 시점에 확보할 수 있습니다.</li><li>동일 공격의 재발과 다른 시스템으로의 확산을 막을 수 있습니다.</li><li>피해조사, 대외통지, 법적 대응과 복구절차를 체계적으로 준비할 수 있습니다.</li></ul><p>신고지연은 공격자의 활동시간을 늘리고 휘발성 증거와 Log가 사라질 가능성을 높입니다.</p>`
          },
          {
            id: "incident-response-seven-stages", title: "사고 대응 7단계 절차",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>단계</th><th>핵심 활동</th></tr></thead><tbody><tr><td><strong>1. 사고 전 준비</strong></td><td>대응팀·연락망·정책·도구·교육과 Log 체계 준비</td></tr><tr><td><strong>2. 사고 탐지</strong></td><td>신고와 이상징후, System·Network Log를 통해 사고 여부 식별</td></tr><tr><td><strong>3. 초기 대응</strong></td><td>초기증거 수집, 사고분류, 영향도 판단, 대응팀 호출</td></tr><tr><td><strong>4. 대응 전략 체계화</strong></td><td>격리·차단·조사·통지·복구 방법과 우선순위 결정</td></tr><tr><td><strong>5. 사고 조사</strong></td><td>Data 수집·분석으로 원인, 공격경로, 피해범위와 행위자 추적</td></tr><tr><td><strong>6. 보고서 작성</strong></td><td>발생경위·증거·분석결과·조치·개선사항 기록</td></tr><tr><td><strong>7. 복구 및 해결</strong></td><td>안전한 서비스 복원, Monitoring, 정책·기술·교육 개선</td></tr></tbody></table></div>`
          },
          {
            id: "pre-incident-preparation", title: "1단계 사고 전 준비",
            content: `<ul><li>사고유형별 대응계획과 의사결정 권한을 정하고 비상연락망을 최신화합니다.</li><li>자산목록·Network 구성도·업무중요도와 정상상태 기준선을 확보합니다.</li><li>시간동기화, 중앙 Log 수집, 보존기간과 접근권한을 설정합니다.</li><li>증거수집 도구, Write Blocker, 저장매체, 봉인용품과 서식을 준비합니다.</li><li>Tabletop Exercise와 모의훈련을 통해 실제 사고 전 절차를 점검합니다.</li></ul>`
          },
          {
            id: "detection-and-initial-response", title: "2·3단계 사고 탐지와 초기 대응",
            content: `<p><strong>사고 탐지</strong>에서는 사용자 신고, 보안장비 Alert, 비정상 Traffic, 계정·File·Process 변화와 Log를 서로 대조해 실제 사고인지 판단합니다.</p><p><strong>초기 대응</strong>에서는 최초 징후와 시간을 기록하고 사고유형·심각도·피해가능성을 분류합니다. 증거를 임의로 변경하지 않도록 주의하면서 필요한 휘발성 정보를 우선 수집하고 담당자와 대응팀에 알립니다.</p>`
          },
          {
            id: "strategy-and-investigation", title: "4·5단계 대응 전략과 사고 조사",
            content: `<p>대응전략은 공격확산, 업무영향, 증거보존과 법적 의무를 함께 고려해 수립합니다.</p><ul><li><strong>Containment</strong>: 감염 Host 격리, 악성 통신차단, 계정잠금 등으로 확산을 억제합니다.</li><li><strong>Eradication</strong>: 악성코드·Backdoor·취약한 계정과 설정 등 원인을 제거합니다.</li><li><strong>Investigation</strong>: 누가, 무엇을, 언제, 어디서, 어떻게 수행했는지와 최초 침투경로·영향범위를 규명합니다.</li><li><strong>Data 수집·분석</strong>: Memory·Disk Image·Network·Log·Cloud 기록을 연계하여 Timeline을 재구성합니다.</li></ul>`
          },
          {
            id: "reporting-and-recovery", title: "6·7단계 보고서 작성과 복구",
            content: `<p>보고서는 사고개요, Timeline, 수집증거, 분석방법, 피해범위, 대응조치와 판단근거를 객관적으로 기록합니다. 기술 담당자뿐 아니라 경영진·법무·감사기관이 이해할 수 있도록 사실과 추정을 구분해야 합니다.</p><p>복구 단계에서는 신뢰 가능한 Backup과 검증된 Image로 System을 복원하고 Patch·Credential 변경·설정강화를 적용합니다. 일정 기간 집중 Monitoring한 뒤 사후검토를 통해 정책·기술·교육과 대응절차를 개선합니다.</p>`
          },
          {
            id: "digital-forensics-overview", title: "디지털 포렌식 개요",
            content: `<p><strong>디지털 포렌식(Digital Forensics)</strong>은 컴퓨터·휴대전화·Email·SNS·Web·CCTV·Blackbox·Network 장비 등 디지털 장치와 정보시스템에서 법적 증거가 될 수 있는 자료를 <strong>과학적이고 적법한 절차</strong>로 식별·수집·보존·분석·보고하는 활동입니다.</p><p>침해사고 분석에서는 공격경로와 피해범위를 규명하고, 수사에서는 범죄사실을 입증하거나 반대사실을 확인하는 데 활용됩니다.</p>`
          },
          {
            id: "locard-exchange-principle", title: "로카르 교환법칙",
            content: `<p><strong>로카르 교환법칙(Locard's Exchange Principle)</strong>은 범죄자와 범죄현장이 접촉하면 서로 흔적을 남긴다는 원칙입니다.</p><p>Cyber 공간에서도 계정인증 기록, Process 실행, File 생성·변경, Browser History·Cookie, Network 연결, USB 사용과 Cloud 접속 등 다양한 Digital Trace가 남습니다. 포렌식은 흩어진 흔적을 연계해 사건의 흐름을 재구성합니다.</p>`
          },
          {
            id: "forensic-fundamental-principles", title: "포렌식의 기본 원칙",
            content: `<p>증거의 법적 효력을 유지하려면 <strong>발견(Discovery) → 인식(Recognition) → 수집(Collection) → 보존(Preservation)</strong> 전 과정이 적절해야 합니다.</p><div class="table-scroll"><table class="concept-table"><thead><tr><th>원칙</th><th>핵심</th></tr></thead><tbody><tr><td><strong>정당성</strong></td><td>영장·동의·법령 등 적법한 권한과 절차</td></tr><tr><td><strong>재현성</strong></td><td>같은 조건과 방법에서 같은 결과를 얻을 수 있음</td></tr><tr><td><strong>신속성</strong></td><td>휘발·삭제·변조되기 전에 필요한 증거를 확보</td></tr><tr><td><strong>연계 보관성</strong></td><td>수집부터 법정 제출까지 취급이력을 빠짐없이 기록</td></tr><tr><td><strong>무결성</strong></td><td>원본과 분석대상이 변경되지 않았음을 Hash 등으로 입증</td></tr></tbody></table></div>`
          },
          {
            id: "legitimacy-principle", title: "정당성의 원칙",
            content: `<p>모든 증거는 법률과 내부규정이 허용한 범위에서 적법한 절차로 수집해야 합니다. 수색·복제 범위가 권한을 넘지 않도록 영장, 사용자 동의, 조직의 보안정책과 관할 법령을 확인합니다.</p><p>위법하게 수집된 증거는 <strong>위법수집증거 배제법칙</strong>에 따라 증거능력이 부정될 수 있으므로, 기술적으로 얻을 수 있다는 이유만으로 무제한 수집해서는 안 됩니다.</p>`
          },
          {
            id: "reproducibility-and-speed", title: "재현성과 신속성의 원칙",
            content: `<h3>재현성</h3><p>증거수집·분석의 도구, Version, 명령, 설정과 결과를 기록하여 다른 분석자가 동일 조건에서 같은 결론을 검증할 수 있어야 합니다. 원본을 직접 반복분석하지 않고 검증된 복제본을 사용합니다.</p><h3>신속성</h3><p>Memory·Network Session·실행 Process 같은 휘발성 정보는 시간이 지나거나 전원이 꺼지면 사라집니다. 증거의 휘발성과 업무영향을 판단하여 사라지기 쉬운 자료부터 빠르게 확보합니다.</p>`
          },
          {
            id: "chain-of-custody-and-integrity", title: "연계 보관성과 무결성의 원칙",
            content: `<h3>연계 보관성(Chain of Custody)</h3><p>증거를 누가, 언제, 어디서, 어떤 목적으로 인계·인수·개봉·복제했는지 연속적으로 기록합니다. 봉인상태와 변경사항, 인계자·인수자의 서명도 남깁니다.</p><h3>무결성</h3><p>수집 직후와 복제·이송·분석 단계마다 Cryptographic Hash를 계산해 값이 같은지 확인합니다. 원본은 봉인·보관하고 분석은 Working Copy에서 수행합니다.</p>`
          },
          {
            id: "forensic-process-overview", title: "포렌식 수행 절차",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>단계</th><th>주요 활동</th></tr></thead><tbody><tr><td><strong>1. 수사 준비</strong></td><td>전문가·권한·도구·저장매체·절차 준비</td></tr><tr><td><strong>2. 증거물 획득</strong></td><td>현장·Live System·Network·저장매체에서 증거 식별·수집</td></tr><tr><td><strong>3. 보관 및 이송</strong></td><td>Hash·봉인·증거목록·Chain of Custody 유지</td></tr><tr><td><strong>4. 조사 및 분석</strong></td><td>복제본으로 Timeline·File·Log·Process·Network 분석</td></tr><tr><td><strong>5. 보고서 작성</strong></td><td>절차·도구·결과·한계·결론을 객관적으로 문서화</td></tr></tbody></table></div>`
          },
          {
            id: "forensic-preparation", title: "수사 준비",
            content: `<ul><li>사이버 포렌식 전문가와 사건별 역할을 지정합니다.</li><li>영장·동의서·내부권한과 수집범위를 확인합니다.</li><li>검증된 포렌식 Software, Write Blocker, Camera, 봉인재, Evidence Bag과 충분한 저장매체를 준비합니다.</li><li>현장 System의 Hardware·Software·Network 환경과 예상되는 암호화·Cloud 자료를 파악합니다.</li></ul>`
          },
          {
            id: "evidence-acquisition", title: "증거물 획득과 증거 수집",
            content: `<ul><li>불법행위가 발생한 장소에서 System·Network 상태를 기록하고 필요한 장비나 저장매체를 압수·확보합니다.</li><li>전원이 켜진 System에서는 Memory, Process, Network Connection 등 휘발성 증거의 우선수집 여부를 판단합니다.</li><li>Disk는 가능하면 <strong>Write Blocker</strong>를 사용하여 원본변경을 막고 <strong>Disk Imaging</strong>으로 Bit 단위 복제합니다.</li><li>수집 전후 Hash, 시각, 담당자, 도구와 명령을 기록합니다.</li></ul><p>File을 열어보는 것만으로도 마지막 접근시각이 바뀔 수 있으므로 원본에서 직접 탐색하지 않습니다.</p>`
          },
          {
            id: "evidence-preservation-transport", title: "보관 및 이송",
            content: `<p>획득한 증거는 Evidence Bag이나 적절한 포장재로 봉인하고, 충격·정전기·전자기장·열·습기와 무단접근으로부터 보호합니다. 증거마다 고유 식별번호를 붙이고 보관장소와 출입을 통제합니다.</p><p>담당자가 바뀔 때마다 인계시각, 목적, 봉인상태, 인계자·인수자와 서명을 기록하여 Chain of Custody가 끊기지 않게 합니다.</p>`
          },
          {
            id: "examination-and-analysis", title: "조사 및 분석",
            content: `<p>법정에서는 원본증거 제출을 원칙으로 하는 <strong>최량증거 원칙(Best Evidence Rule)</strong>이 중요합니다. Digital Evidence는 원본의 손상위험이 있으므로 무결성이 검증된 Forensic Image를 만들어 분석하고 원본은 안전하게 보존합니다.</p><div class="table-scroll"><table class="concept-table"><thead><tr><th>분석기능</th><th>내용</th></tr></thead><tbody><tr><td><strong>Disk Browsing</strong></td><td>Image 안의 Directory·File·Metadata·삭제흔적 탐색</td></tr><tr><td><strong>Data Viewing</strong></td><td>Text·Image·문서·Binary 내용 확인과 형식변환</td></tr><tr><td><strong>File Recovery</strong></td><td>삭제 File, Unallocated Space, File Slack에서 자료 복구</td></tr></tbody></table></div>`
          },
          {
            id: "forensic-report-writing", title: "보고서 작성",
            content: `<p>포렌식 전 과정을 단계별로 기록하여 증거자료로 사용할 수 있는 보고서를 작성합니다.</p><ul><li>사건개요, 수집대상, 일시·장소와 담당자</li><li>수집·보관·이송·분석의 모든 절차와 사용도구·Version</li><li>Hash 값, Timeline, 발견사항과 분석근거</li><li>사실·의견·추정의 구분, 분석한계와 재현방법</li><li>위법행위를 입증하거나 반박하는 객관적 결론</li></ul>`
          },
          {
            id: "forensic-technology-types", title: "포렌식 기술의 분류",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>기술</th><th>대상·분석내용</th></tr></thead><tbody><tr><td><strong>Disk 포렌식</strong></td><td>HDD·SSD·CD·DVD 등 저장매체의 File·삭제영역·Metadata</td></tr><tr><td><strong>System 포렌식</strong></td><td>운영체제, 응용프로그램, Process, Memory와 설정</td></tr><tr><td><strong>Network 포렌식</strong></td><td>Packet, Session, 장비·방화벽·IDS Log와 통신흐름</td></tr><tr><td><strong>Internet 포렌식</strong></td><td>Web·FTP·Email·게시물·Browser 흔적 등 Internet 활동</td></tr><tr><td><strong>Mobile 포렌식</strong></td><td>휴대전화·Tablet·PDA·Wearable·USB 등 휴대장치</td></tr><tr><td><strong>Database 포렌식</strong></td><td>DB Record·Transaction Log·계정·Query와 변경이력</td></tr><tr><td><strong>암호 포렌식</strong></td><td>암호화된 자료의 식별, Key·Password 관련 흔적과 복호화 가능성 분석</td></tr></tbody></table></div>`
          },
          {
            id: "digital-forensic-tools", title: "디지털 포렌식 도구",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>도구</th><th>특징</th></tr></thead><tbody><tr><td><strong>EnCase</strong></td><td>Guidance Software에서 개발된 상용 포렌식 도구로 증거수집·검증·검색·분석·보고 기능 제공</td></tr><tr><td><strong>FTK(Forensic Toolkit)</strong></td><td>AccessData 계열의 상용 포렌식 도구로 Disk Image 처리, Index 기반 검색, Email·File 분석과 보고 기능 제공</td></tr></tbody></table></div><p>도구의 제작사와 기능은 Version·인수관계에 따라 달라질 수 있습니다. 시험에서는 두 도구가 <strong>증거수집·검증·검색·분석·보고</strong>에 사용된다는 점을 중심으로 기억합니다.</p>`
          },
          {
            id: "forensic-roles", title: "1차 대응자·수사자·법정 현장 기술자",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>역할</th><th>주의사항·업무</th></tr></thead><tbody><tr><td><strong>1차 대응자</strong></td><td>현장을 통제하고 상태를 기록하며 증거손상을 막습니다. 전문교육이 없다면 꺼진 장치를 함부로 켜거나 켜진 장치를 임의로 끄지 않고 전문가 지시를 받습니다.</td></tr><tr><td><strong>수사자</strong></td><td>사건의 법적·사실적 관계를 조사하고 증거수집 범위와 수사방향을 결정합니다.</td></tr><tr><td><strong>법정 현장 기술자</strong></td><td>OS·File System·Network·Programming 등 기술지식과 포렌식 절차를 바탕으로 증거를 분석하고 법정에서 방법과 결과를 설명합니다.</td></tr></tbody></table></div>`
          },
          {
            id: "evidence-rules", title: "증거 규칙(Rules of Evidence)",
            content: `<p>Digital Evidence를 수집·조사·보존·제시하는 모든 과정은 관할 법률과 증거규칙을 따라야 합니다. 수사자는 지역별 법령, 영장범위, 개인정보·통신비밀 관련 규정과 조직정책을 숙지해야 합니다.</p><p>증거는 일반적으로 <strong>관련성·신뢰성·진정성·완전성</strong>을 설명할 수 있어야 하며, 원본 또는 원본과 동일함이 검증된 복제본을 적법한 절차로 제출해야 합니다.</p>`
          },
          {
            id: "chain-of-custody-record", title: "보관관리 사슬(Chain of Custody)",
            content: `<p>증거 담당자 목록은 증거의 연속성과 무결성을 입증하는 핵심기록입니다. 수집현장부터 법정제출까지 증거를 다룬 모든 사람과 장소·시간을 추적할 수 있어야 합니다.</p><div class="table-scroll"><table class="concept-table"><thead><tr><th>필수 기록</th><th>예시</th></tr></thead><tbody><tr><td>증거 식별정보</td><td>사건번호, 증거번호, 장치 Serial, 설명</td></tr><tr><td>인계·인수</td><td>인계자·인수자, 날짜·시각, 목적, 서명</td></tr><tr><td>상태변경</td><td>봉인 개봉·재봉인, 복제·분석, 보관장소 변경</td></tr><tr><td>무결성</td><td>수집·복제본의 Hash 값과 검증결과</td></tr></tbody></table></div>`
          },
          {
            id: "timeline-analysis", title: "Timeline 분석과 MAC Time",
            content: `<p>여러 File의 시간정보를 정렬해 사건 전후의 행위를 재구성합니다.</p><div class="table-scroll"><table class="concept-table"><thead><tr><th>시간</th><th>일반적 의미</th></tr></thead><tbody><tr><td><strong>mtime</strong></td><td>File 내용이 마지막으로 수정된 시각</td></tr><tr><td><strong>atime</strong></td><td>File을 마지막으로 읽거나 접근한 시각</td></tr><tr><td><strong>ctime</strong></td><td>Unix 계열에서 권한·소유자 등 Metadata가 마지막으로 변경된 시각</td></tr><tr><td><strong>btime / crtime</strong></td><td>File System이 지원할 때 확인할 수 있는 생성시각</td></tr></tbody></table></div><p>교재나 도구에 따라 MAC Time 표기가 다를 수 있으므로 대상 OS·File System의 정의, Time Zone과 시간동기화 상태를 함께 확인합니다.</p>`
          },
          {
            id: "signature-and-hash-analysis", title: "Signature·Hash 분석",
            content: `<h3>Signature 분석</h3><p>File Header의 고유 Signature와 확장자를 비교하여 확장자를 바꿔 숨긴 File이나 형식불일치를 탐지합니다.</p><h3>Hash 분석</h3><p>System File·수집증거의 Hash를 기존 정상값 또는 Known Hash Set과 비교해 변경·손상 여부를 확인합니다. 동일한 Hash는 분석대상과 원본 Image의 무결성을 입증하는 데 사용합니다.</p>`
          },
          {
            id: "log-and-process-analysis", title: "Log·Process 분석",
            content: `<h3>Log 분석</h3><p>인증, System, Web, DB, Firewall·IDS와 Application Log를 시간순으로 연계하여 공격자의 접근경로와 행위를 추적합니다.</p><h3>Process 분석</h3><p>실행 중인 Process, Parent·Child 관계, 실행경로, Network 연결, 열린 Handle과 Memory 내용을 분석하여 악성 Process·Code Injection·비정상 지속성을 찾습니다.</p>`
          },
          {
            id: "volatile-data-preservation", title: "사라지기 쉬운 데이터 보존",
            content: `<p>Register·Cache·Memory·실행 Process·Network Session처럼 전원차단이나 시간경과로 사라지는 정보는 Disk보다 먼저 수집할 필요가 있습니다. IETF RFC 3227은 증거수집 시 <strong>휘발성 순서(Order of Volatility)</strong>를 고려하도록 안내합니다.</p><ol><li>System 시각과 상태 기록</li><li>현재 Login 사용자·Network Connection·Routing Table·ARP Cache 확인</li><li>실행 Process·열린 File·Memory 수집</li><li>Temporary File System과 Disk Image 확보</li><li>원격 Log·물리구성과 장기보관 자료 수집</li></ol><p>수집명령 자체도 System을 바꾸므로 사용도구와 명령, 실행순서를 기록합니다.</p>`
          },
          {
            id: "digital-evidence-preservation", title: "디지털 증거 보존",
            content: `<p>Digital Evidence는 복제가 쉽지만 동시에 변경·삭제·손상되기도 쉽습니다. 첫 단계는 증거를 탐색하는 것이 아니라 <strong>원본과 동일한 Bitstream Image를 확보하고 무결성을 검증하는 것</strong>입니다.</p><ul><li>원본매체는 Write Blocker로 쓰기를 차단합니다.</li><li>Master Copy는 봉인·보관하고 Working Copy에서 분석합니다.</li><li>모든 Copy에 Hash를 계산해 단계별 동일성을 확인합니다.</li><li>Backup과 별도로 증거의 보관위치·접근권한·보존기간을 관리합니다.</li></ul>`
          },
          {
            id: "bitstream-image", title: "Bitstream Image",
            content: `<p><strong>Bitstream Image</strong>는 File 단위가 아니라 저장매체의 Sector를 처음부터 끝까지 Bit 단위로 복제한 포렌식 Image입니다.</p><p>정상 File뿐 아니라 삭제 File의 잔여 Data, Unallocated Space, File Slack과 File System Metadata까지 포함할 수 있습니다. 수집 전후 Cryptographic Hash를 비교하여 원본과 Image가 동일한지 확인합니다.</p>`
          },
          {
            id: "disk-copy-vs-imaging", title: "Disk 복사와 Disk Imaging 비교",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>일반 Disk 복사</th><th>Disk Imaging</th></tr></thead><tbody><tr><td><strong>저장방식</strong></td><td>File을 읽어 대상 위치에 기록</td><td>Sector-by-Sector Bitstream Clone</td></tr><tr><td><strong>저장대상</strong></td><td>보이는 File·Directory 중심</td><td>Disk의 물리·논리 영역 전체</td></tr><tr><td><strong>보존정보</strong></td><td>일부 Metadata·삭제영역이 빠질 수 있음</td><td>삭제흔적·Slack·Unallocated Space 포함 가능</td></tr><tr><td><strong>삭제 File 복구</strong></td><td>제한적이거나 불가능</td><td>덮어쓰지 않은 Sector에서 복구 가능</td></tr><tr><td><strong>무결성 검증</strong></td><td>복사방식에 따라 별도 확인</td><td>Image Hash로 원본과 동일성 검증</td></tr></tbody></table></div>`
          },
          {
            id: "digital-evidence-recovery", title: "디지털 증거 복구 개요",
            content: `<p>범죄자가 필요한 증거를 삭제하거나 다른 위치로 옮겨도 저장매체에는 흔적이 남을 수 있습니다. 운영체제는 File을 삭제할 때 Data 자체를 즉시 지우기보다 해당 영역을 <strong>사용 가능</strong>으로 표시하는 경우가 많기 때문입니다.</p><p>해당 영역이 새 Data로 덮어쓰기되기 전이라면 File System Metadata, Signature와 Data Carving을 이용해 일부 또는 전체를 복구할 수 있습니다.</p>`
          },
          {
            id: "anti-forensics", title: "안티 포렌식(Anti-Forensic)",
            content: `<p><strong>안티 포렌식</strong>은 Digital Evidence의 발견·수집·분석을 어렵게 하거나 신뢰성을 떨어뜨리기 위한 행위와 기술입니다.</p><ul><li>File 삭제와 Secure Wiping</li><li>Disk·File 암호화와 Key 은닉</li><li>Steganography로 Data 은닉</li><li>Timestamp·Log·File Metadata 조작</li><li>Rootkit·Memory-only Malware를 통한 흔적 은폐</li><li>File 분할·확장자 변경·난독화</li></ul><p>분석자는 하나의 흔적만 믿지 않고 Disk·Memory·Network·Log·Cloud 기록을 교차검증합니다.</p>`
          },
          {
            id: "deleted-data-recovery", title: "삭제된 데이터 복구",
            content: `<p>일반 삭제는 File Allocation Table이나 NTFS의 MFT 등 File System의 관리항목을 삭제상태로 표시할 뿐, 실제 Data Cluster를 즉시 덮어쓰지 않는 경우가 많습니다.</p><ol><li>삭제표시된 Directory Entry와 Metadata를 확인합니다.</li><li>남아 있는 Cluster 연결정보 또는 File Signature를 이용합니다.</li><li>조각난 File은 연속성·구조·내용을 검증하며 재구성합니다.</li><li>복구 결과의 Hash와 복구방법을 기록합니다.</li></ol><p>삭제 뒤 사용이 계속되면 새 Data가 같은 영역을 덮어써 복구가능성이 빠르게 낮아집니다.</p>`
          },
          {
            id: "hidden-data-search", title: "감춰진 데이터 찾기",
            content: `<p>숨겨진 Data는 공격을 규명하는 중요한 증거가 될 수 있습니다. 다음 영역을 함께 확인합니다.</p><ul><li>삭제·Format·재분할된 Partition과 <strong>Unallocated Space</strong></li><li>File 마지막 Cluster의 남는 부분인 <strong>File Slack</strong></li><li>SWAP·Page File, Hibernate File, Temporary File과 Cache</li><li>Bad Cluster로 표시된 영역, HPA·DCO 등 숨겨진 Disk 영역</li><li>NTFS Alternate Data Streams와 확장자를 바꾼 File</li><li>Memory Dump, USB 흔적, Cloud 동기화·Browser 자료</li></ul>`
          },
          {
            id: "temporary-internet-files", title: "Internet 임시파일과 사용자 흔적",
            content: `<p>Browser Cache·History·Cookie·Downloaded File은 사용자의 Internet 활동과 방문 Site를 확인하는 데 활용됩니다. 교재의 구형 Windows 경로 예시는 다음과 같습니다.</p><div class="table-scroll"><table class="concept-table"><thead><tr><th>종류</th><th>교재의 경로 예시</th></tr></thead><tbody><tr><td>임시 Internet 객체</td><td><code>%SystemRoot%\\Downloaded Program Files</code></td></tr><tr><td>임시 Internet File</td><td><code>%USERPROFILE%\\Local Settings\\Temporary Internet Files</code></td></tr><tr><td>방문한 Page</td><td><code>%USERPROFILE%\\Local Settings\\History</code></td></tr><tr><td>Web Site Cookie</td><td><code>%USERPROFILE%\\Cookies</code></td></tr></tbody></table></div><p>위 경로는 과거 Windows·Internet Explorer 계열 예시입니다. 현대 Browser는 사용자 Profile 아래의 각 Browser Data Directory에 Cache·History DB·Cookie DB를 저장하므로 OS와 Browser Version에 맞는 위치를 확인해야 합니다.</p>`
          },
          {
            id: "data-sanitization", title: "데이터 복구 방지(Data Sanitization)",
            content: `<p><strong>Data Sanitization</strong>은 저장매체를 재사용·양도·폐기할 때 Data를 복구할 수 없도록 제거하는 절차입니다. 정보등급, 매체종류, 고장여부와 재사용 필요성에 따라 논리적 삭제·암호학적 삭제·소자·물리적 파괴 중 적절한 방법을 선택하고 결과를 기록합니다.</p><p>휴지통 비우기나 단순 Format은 Data 복구를 막는 안전한 삭제방법이 아닙니다.</p>`
          },
          {
            id: "overwrite-degauss-destroy", title: "덮어쓰기·소자·물리적 파괴",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>방법</th><th>원리·적용</th><th>주의사항</th></tr></thead><tbody><tr><td><strong>Disk 덮어쓰기</strong></td><td>저장영역에 0·Random Pattern 등을 기록해 기존 Data를 대체</td><td>HDD 재사용에 활용할 수 있으나 불량·재할당 Sector와 SSD Wear Leveling 영역은 놓칠 수 있음</td></tr><tr><td><strong>소자(Degaussing)</strong></td><td>강한 자기장으로 자성매체의 자기배열을 제거</td><td>HDD·Magnetic Tape 대상이며 SSD·Optical Media에는 효과가 없음. 장치를 재사용하지 못할 수 있음</td></tr><tr><td><strong>물리적 파괴</strong></td><td>분쇄(가루로 만듦)·소각(태움)·연마(표면을 마모시킴)·염산 처리 등으로 매체를 복구 불가능하게 파괴</td><td>국가기밀 등 매우 민감한 자료의 폐기에 사용할 수 있으나 재사용할 수 없고 안전·환경규정을 따라야 함</td></tr></tbody></table></div><p>SSD와 암호화 저장장치는 제조사 Secure Erase·Sanitize 또는 <strong>Crypto Erase</strong>를 검토하고, 매우 민감한 자료는 정책에 따라 물리적 파괴를 함께 적용합니다.</p>`
          },
          {
            id: "incident-forensics-summary", title: "SECTION 37 핵심 흐름",
            content: `<div class="important-box"><span class="box-title">전체 흐름</span><p><strong>해킹의 변화·공격순서 → 침해사고 신고·CERT/CSIRT → 준비·탐지·초기대응·전략·조사·보고·복구 → Digital Forensics → 정당성·재현성·신속성·연계 보관성·무결성 → 준비·획득·보관·분석·보고 → Evidence Rule·Chain of Custody → Timeline·Signature·Hash·Log·Process 분석 → Bitstream Image → 삭제·숨김 Data 복구 → Data Sanitization</strong></p></div><div class="table-scroll"><table class="concept-table"><thead><tr><th>문제 키워드</th><th>정답</th></tr></thead><tbody><tr><td>접촉하면 반드시 흔적이 남음</td><td>Locard's Exchange Principle</td></tr><tr><td>증거 취급자를 시간순으로 추적</td><td>Chain of Custody</td></tr><tr><td>동일 조건에서 같은 결과</td><td>재현성의 원칙</td></tr><tr><td>휘발성 정보부터 수집</td><td>신속성·Order of Volatility</td></tr><tr><td>Sector 단위의 완전 복제</td><td>Bitstream Image</td></tr><tr><td>Header와 확장자를 비교</td><td>Signature 분석</td></tr><tr><td>강한 자기장으로 자성정보 제거</td><td>Degaussing</td></tr></tbody></table></div>`
          }
        ],
        content: ""
      },
      {
        id: "section-38",
        number: 38,
        title: "각종 애플리케이션 보안위협 및 대응책",
        subtopics: [
          {
            id: "application-security-overview", title: "애플리케이션 보안위협 개요",
            content: `<p>애플리케이션을 노리는 공격은 프로그램의 계산·입력자료·무선접속·실행코드와 사용자 신뢰를 악용합니다. 이 SECTION에서는 <strong>Salami 기법, Data Diddling, Evil Twin, Mobile Code, Java Applet과 ActiveX</strong>의 위협과 대응방식을 정리합니다.</p><div class="important-box"><span class="box-title">학습 흐름</span><p><strong>소액 절취·데이터 변조·가짜 접속점 → 이동하며 실행되는 Code → Java 보안구조 → Sandbox와 Authenticode</strong></p></div>`
          },
          {
            id: "salami-technique", title: "살라미 공격(Salami Technique)",
            content: `<p><strong>Salami Technique</strong>은 많은 사용자나 거래에서 눈치채기 어려운 매우 작은 금액을 반복해서 빼내어 공격자 계정에 모으는 공격입니다. 얇게 썬 Salami 조각처럼 한 번의 피해는 작지만 누적되면 큰 금액이 된다는 뜻에서 붙은 이름입니다.</p><p>대표적인 예는 금융기관의 계산 Program을 담당한 사람이 이자·환율·세금 계산에서 발생하는 <strong>절사·반올림 차액</strong>을 자신의 계정으로 보내도록 Logic을 조작하는 경우입니다.</p><div class="important-box"><span class="box-title">대응</span><p>금액 계산과 절사 규칙을 명확히 하고, 잔여금 계정·반올림 차액을 대사하며, Program 변경승인·Code Review·직무분리와 거래감사를 적용합니다.</p></div>`
          },
          {
            id: "data-diddling", title: "데이터 디들링(Data Diddling)",
            content: `<p><strong>Data Diddling</strong>은 원시자료 자체를 변조하거나 위조하여 다른 결과가 나오도록 만드는 수법입니다. 입력되기 전의 자료, 처리 중의 값 또는 출력자료를 바꾸어 공격자가 이익을 얻습니다.</p><ul><li>급여·거래금액·계좌번호와 같은 입력값 변경</li><li>처리 Program의 계산 Logic 또는 중간 Data 변조</li><li>청구서·정산결과·보고서 등 출력값 위조</li></ul><p>예를 들어 전산처리자가 신용카드 청구금액이나 급여자료를 바꾸어 실제보다 적게 납부하거나 더 많은 금액을 받는 방식입니다.</p><div class="important-box"><span class="box-title">대응</span><p><strong>입력 검증 → 처리 전후 대사 → 변경 Log와 무결성 검증 → 중요자료 이중승인</strong>으로 Data의 변조 여부를 확인합니다.</p></div>`
          },
          {
            id: "evil-twin-attack", title: "이블 트윈 공격(Evil Twin Attack)",
            content: `<p><strong>Evil Twin Attack</strong>은 실제 무선 AP와 같거나 비슷한 이름의 <strong>Rogue AP</strong>를 만들어 사용자를 접속시키는 Spoofing 공격입니다. 공격자는 정상 Wi-Fi처럼 보이는 접속점을 통해 인증정보와 통신내용을 가로채거나 사용자를 악성 Page로 유도할 수 있습니다.</p><p>교재에서는 Social Network에서 다른 사람의 이름·사진·개인정보를 이용해 동일인처럼 활동하는 온라인 사칭도 함께 설명합니다.</p><div class="table-scroll"><table class="concept-table"><thead><tr><th>공격형태</th><th>핵심</th></tr></thead><tbody><tr><td><strong>무선 Evil Twin</strong></td><td>정상 AP를 흉내 낸 Rogue AP로 접속을 유도하여 정보 탈취</td></tr><tr><td><strong>온라인 사칭</strong></td><td>수집한 개인정보로 가짜 계정·Profile을 만들어 피해자 행세</td></tr></tbody></table></div>`
          },
          {
            id: "evil-twin-response", title: "이블 트윈·온라인 사칭 대응",
            content: `<ul><li>SSID만 믿지 말고 제공자가 안내한 Network인지 확인합니다.</li><li>자동 Wi-Fi 연결을 끄고, 공개 무선망에서는 중요한 인증·금융거래를 피합니다.</li><li>인증서 경고와 비정상 Login Page를 확인하고 암호화된 연결을 사용합니다.</li><li>조직은 Rogue AP 탐지, 무선 Network Monitoring과 사용자 교육을 수행합니다.</li><li>온라인 계정은 다중인증을 적용하고 사칭 계정 발견 시 Service 운영자에게 신고합니다.</li></ul>`
          },
          {
            id: "java-security-overview", title: "Java 보안구조 개요",
            content: `<p>Java는 외부에서 받은 Code를 실행할 때 System 자원에 무제한 접근하지 못하도록 여러 보안 Component를 사용합니다. 교재의 기본 구조는 <strong>Class Loader → Bytecode Verifier → Security Manager</strong>입니다.</p><div class="important-box"><span class="box-title">핵심</span><p><strong>불러올 Class 구분 → Bytecode 형식·안전성 검사 → 실행 중 자원접근 통제</strong></p></div>`
          },
          {
            id: "java-class-loader", title: "클래스 로더(Class Loader)",
            content: `<p><strong>Class Loader</strong>는 Java Runtime 환경에서 필요한 Class를 불러오는 Component입니다. 실행 중에도 필요한 시점에 Class를 동적으로 Load할 수 있으며, Local Class와 외부에서 내려받은 Class의 출처와 이름공간을 구분하여 처리합니다.</p>`
          },
          {
            id: "java-bytecode-verifier", title: "바이트코드 검증기(Bytecode Verifier)",
            content: `<p><strong>Bytecode Verifier</strong>는 Java VM이 Class의 Bytecode를 Load할 때 형식과 규칙을 검사합니다. 잘못된 명령, 부적절한 형변환, Stack 사용오류와 접근규칙 위반처럼 Java VM의 안전성을 해칠 수 있는 Code가 실행되지 않도록 확인합니다.</p>`
          },
          {
            id: "java-security-manager", title: "보안관리자(Security Manager)",
            content: `<p><strong>Security Manager</strong>는 Application이 File·Network·System 자원과 사용자 Interface에 접근하는 방식을 제한하는 실행단계의 통제 Component입니다. 허용되지 않은 자원접근 요청을 차단하여 외부 Code가 System 전체에 영향을 주는 것을 막습니다.</p><p>이 SECTION의 Security Manager는 교재의 전통적인 Java Applet 보안모델을 설명하는 개념으로 이해하면 됩니다.</p>`
          },
          {
            id: "java-security-components", title: "Java 보안 구성요소 비교",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>구성요소</th><th>주요 역할</th><th>기억할 말</th></tr></thead><tbody><tr><td><strong>Class Loader</strong></td><td>Class를 Load하고 출처·이름공간을 구분</td><td>불러오기</td></tr><tr><td><strong>Bytecode Verifier</strong></td><td>Bytecode의 형식과 안전규칙을 검사</td><td>검증</td></tr><tr><td><strong>Security Manager</strong></td><td>실행 중 File·Network·System 자원접근 통제</td><td>권한 제한</td></tr></tbody></table></div>`
          },
          {
            id: "mobile-code-overview", title: "모바일 코드(Mobile Code) 개요",
            content: `<p><strong>Mobile Code</strong>는 Network를 통해 원격 System에서 Local System으로 이동한 뒤 사용자의 구체적인 명령 없이 실행될 수 있는 Program Code를 뜻합니다. 여러 Platform에서 실행될 수 있도록 만들어지며 Browser·문서·Message·Application 등을 통해 전달될 수 있습니다.</p><p>교재의 예로는 <strong>Java Applet, ActiveX, Script</strong>와 함께 Virus·Worm·Trojan Horse 같은 악성 Code가 제시됩니다.</p>`
          },
          {
            id: "java-applet", title: "Java Applet",
            content: `<p><strong>Java Applet</strong>은 작은 Java Program을 Server에서 내려받아 Client의 Java 실행환경에서 동작시키는 방식입니다. 과거 Web Page의 Multimedia와 상호작용 처리를 위해 사용되었으며, Client 자원을 이용하므로 외부 Code의 접근범위를 통제하는 Sandbox가 중요합니다.</p>`
          },
          {
            id: "activex-overview", title: "ActiveX 개요",
            content: `<p><strong>ActiveX</strong>는 Microsoft가 Internet 사용을 편리하게 하고 기존 Application을 Web과 연결하기 위해 개발한 Component 기술입니다. Web Page에서 내려받은 Code가 Client에서 실행되므로 제작자 신뢰성과 Code의 안전성을 사용자가 판단해야 합니다.</p><div class="important-box"><span class="box-title">주의</span><p>Java Applet과 ActiveX는 교재에서 애플리케이션 보안모델을 설명하기 위해 다루는 <strong>구형 Web 실행기술</strong>입니다. 시험에서는 각각의 보안방식 차이를 중심으로 기억합니다.</p></div>`
          },
          {
            id: "malicious-mobile-code", title: "악성 모바일 코드",
            content: `<p><strong>악성 Mobile Code</strong>는 Network와 Application을 통해 이동하여 피해 System에서 실행되는 유해 Code입니다.</p><ul><li>자기복제 능력이 있는 Computer Virus·Macro Virus·Worm</li><li>Email 첨부·본문 Script와 Instant Messaging을 이용하는 악성 Code</li><li>Internet Browser와 Plug-in 취약점을 악용하는 Code</li><li>Trojan Horse처럼 정상 Program으로 위장한 Code</li></ul><p>전달경로는 달라도 목표는 Code 실행, 정보탈취, System 변경과 다른 Host로의 확산입니다.</p>`
          },
          {
            id: "exploit-attack", title: "익스플로잇(Exploit) 공격",
            content: `<p><strong>Exploit</strong>은 Computer·Program·전자제품의 보안 취약점을 이용해 의도하지 않은 동작을 일으키는 공격 또는 공격 Code를 뜻합니다. 취약점을 악용하면 Service 거부, 권한획득과 Code 실행으로 이어질 수 있습니다.</p><p>교재의 예로 Buffer Overflow, CSRF, XSS 등이 제시되며, 핵심은 <strong>취약점이 공격 가능한 동작으로 연결되는 것</strong>입니다.</p>`
          },
          {
            id: "java-applet-sandbox", title: "Java Applet 샌드박스(Sandbox)",
            content: `<p><strong>Sandbox</strong>는 외부에서 받은 Program을 JVM 안의 제한된 보호영역에서 실행하여 System 자원접근과 악성 Code 확산을 막는 방식입니다.</p><ul><li>Applet이 File·Network·System 자원에 임의로 접근하지 못하도록 제한합니다.</li><li>외부 Code가 보호영역 밖으로 나가지 못하게 실행범위를 격리합니다.</li><li>Class Loader·Bytecode Verifier·Security Manager가 함께 신뢰경계를 유지합니다.</li></ul><p>Sandbox를 통과하거나 신뢰된 Code로 잘못 허용된 악성 Applet은 피해를 줄 수 있으므로, 출처와 서명검증이 함께 필요합니다.</p>`
          },
          {
            id: "sandbox-safe-unsafe", title: "Safe·Unsafe Sandbox 구조",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>상태</th></tr></thead><tbody><tr><td><strong>Safe</strong></td><td>Applet이 Sandbox 내부에 머물며 허용된 범위에서만 실행됨</td></tr><tr><td><strong>Unsafe</strong></td><td>Applet이 Sandbox 경계를 벗어나 Client의 System 자원에 접근함</td></tr></tbody></table></div><p>보안의 목적은 외부 Code를 무조건 신뢰하는 것이 아니라 <strong>검증된 최소권한 안에서 격리 실행</strong>하는 것입니다.</p>`
          },
          {
            id: "activex-authenticode", title: "ActiveX 인증코드(Authenticode)",
            content: `<p><strong>Authenticode</strong>는 전자서명을 이용하여 ActiveX Code의 게시자와 배포 후 무결성을 확인하는 기술입니다. 사용자는 제시된 인증서와 게시자 정보를 보고 설치 여부를 판단합니다.</p><div class="important-box"><span class="box-title">한계</span><p>전자서명은 <strong>누가 배포했고 Code가 변조되지 않았는지</strong>를 알려줄 뿐, Code 자체가 안전하다는 사실을 보증하지 않습니다. 악의적 게시자도 인증서를 얻을 수 있고 사용자가 위험을 정확히 이해하기 어려울 수 있습니다.</p></div>`
          },
          {
            id: "applet-activex-comparison", title: "Java Applet·ActiveX 보안 비교",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>Java Applet</th><th>ActiveX</th></tr></thead><tbody><tr><td><strong>실행방식</strong></td><td>Java VM에서 Bytecode 실행</td><td>Client에 Component를 내려받아 실행</td></tr><tr><td><strong>주요 보안방식</strong></td><td>Class Loader·Bytecode Verifier·Security Manager·Sandbox</td><td>Authenticode 전자서명과 사용자의 설치판단</td></tr><tr><td><strong>핵심 위험</strong></td><td>Sandbox 우회 또는 과도한 권한부여</td><td>서명된 악성 Code와 사용자의 잘못된 신뢰</td></tr></tbody></table></div>`
          },
          {
            id: "application-security-summary", title: "SECTION 38 핵심 흐름",
            content: `<div class="important-box"><span class="box-title">전체 흐름</span><p><strong>작은 금액 반복절취 Salami → 입출력자료 변조 Data Diddling → Rogue AP·온라인 사칭 Evil Twin → Java의 Class Loader·Bytecode Verifier·Security Manager → 이동하며 실행되는 Mobile Code → Java Applet·ActiveX → 악성 Mobile Code와 Exploit → Sandbox 격리 → Authenticode 게시자·무결성 확인</strong></p></div><div class="table-scroll"><table class="concept-table"><thead><tr><th>문제 키워드</th><th>정답</th></tr></thead><tbody><tr><td>소액을 반복해서 모아 큰 금액 절취</td><td>Salami Technique</td></tr><tr><td>입력·처리·출력자료 변조</td><td>Data Diddling</td></tr><tr><td>정상 AP를 흉내 낸 Rogue AP</td><td>Evil Twin Attack</td></tr><tr><td>Java Bytecode의 형식·안전성 검사</td><td>Bytecode Verifier</td></tr><tr><td>제한된 보호영역에서 외부 Code 실행</td><td>Sandbox</td></tr><tr><td>ActiveX 게시자·무결성 확인</td><td>Authenticode</td></tr></tbody></table></div>`
          }
        ],
        content: ""
      }
    ]
  },
  {
    part: 7,
    title: "정보보호 관리 및 법규",
    sections: [
      {
        id: "section-39",
        number: 39,
        title: "정보보호 거버넌스와 관리 체계 수립",
        subtopics: [
          {
            id: "governance-overview", title: "정보보호 거버넌스 개요",
            content: `<p><strong>정보보호 거버넌스(Information Security Governance)</strong>는 이사회와 경영진이 정보보호의 방향을 정하고, 조직의 위험이 허용 가능한 수준에서 관리되는지 감독하는 체계입니다.</p><p>정보보호를 기술부서만의 업무가 아니라 경영목표·의사결정·책임과 연결하여 지속적으로 관리하는 데 목적이 있습니다.</p>`
          },
          {
            id: "governance-background", title: "정보보호 거버넌스 등장 배경",
            content: `<ul><li>정보보호 투자가 조직의 목적과 방향에 부합해야 한다는 요구가 커졌습니다.</li><li>정보기술이 기업 운영의 핵심 요소가 되면서 IT Service의 <strong>가시성(Visibility)</strong>과 통제 가능성이 중요해졌습니다.</li><li>이사회와 경영진이 회사의 정보위험이 적절한 수준으로 관리되는지 확인할 수 있는 감독 Mechanism이 필요해졌습니다.</li></ul>`
          },
          {
            id: "governance-framework", title: "정보보호 거버넌스 프레임워크",
            content: `<p>정보보호 거버넌스는 기업 거버넌스의 한 부분으로서 비즈니스 전략과 정보보호의 연계, 관련 법규·규정의 준수, 의사결정 권한과 책임의 명확화를 위한 Process와 실행체계입니다.</p><div class="important-box"><span class="box-title">핵심</span><p><strong>경영목표와 연결된 방향 설정 → 책임과 권한 명확화 → 위험·자원 관리 → 성과 측정과 개선</strong>의 흐름으로 이해합니다.</p></div>`
          },
          {
            id: "governance-abcr", title: "거버넌스 목표 ABCR",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>표현</th><th>의미</th><th>핵심 질문</th></tr></thead><tbody><tr><td><strong>A</strong>ccountability</td><td>책임성</td><td>정보보호 성과와 결정에 누가 책임지는가?</td></tr><tr><td><strong>B</strong>usiness Alignment</td><td>비즈니스 연계</td><td>정보보호 활동이 경영목표 달성에 기여하는가?</td></tr><tr><td><strong>C</strong>ompliance</td><td>준거성</td><td>법·제도·내부규정을 준수하는가?</td></tr><tr><td><strong>R</strong>isk Management</td><td>위험관리</td><td>정보위험을 허용 가능한 수준으로 관리하는가?</td></tr></tbody></table></div>`
          },
          {
            id: "it-and-security-governance", title: "IT 거버넌스와 정보보호 거버넌스",
            content: `<p><strong>IT 거버넌스</strong>는 IT와 IT Process의 위험·자원 이용·성과의 균형을 맞추어 기업목표 달성에 가치를 제공하는 관계구조와 Process입니다.</p><p><strong>정보보호 거버넌스</strong>는 IT 거버넌스와 연계되어 정보자산 보호의 방향, 책임과 통제를 다룹니다. 이사회는 궁극적인 책임을 지며 경영진은 이사회와 함께 관리체계를 구현합니다.</p>`
          },
          {
            id: "governance-requirements", title: "정보보호 거버넌스 구현 요건",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>요건</th><th>관리 초점</th></tr></thead><tbody><tr><td><strong>전략적 연계</strong></td><td>비즈니스·IT·정보보호 전략을 연결</td></tr><tr><td><strong>위험 관리</strong></td><td>위험을 식별·평가하고 수용 가능한 수준으로 처리</td></tr><tr><td><strong>자원 관리</strong></td><td>인력·예산·정보자산·인프라를 효율적으로 배분</td></tr><tr><td><strong>성과 측정</strong></td><td>목표와 Process를 지표로 측정·보고·개선</td></tr><tr><td><strong>가치 전달</strong></td><td>정보보호 투자가 조직에 실질적 가치를 제공하도록 관리</td></tr></tbody></table></div>`
          },
          {
            id: "strategic-alignment", title: "전략적 연계(Strategic Alignment)",
            content: `<p>비즈니스 전략, IT 목표와 정보보호 전략이 서로 연결되어야 합니다. 최고정보보호책임자(CISO)의 역할과 책임을 명시하고, 정보보호 성과와 위험을 경영진에게 합리적으로 보고할 수 있는 Mechanism을 마련합니다.</p>`
          },
          {
            id: "risk-management", title: "위험 관리(Risk Management)",
            content: `<p>정보와 정보자산의 잠재적 위험을 줄이기 위해 조직에 적합한 위험관리체계를 수립하고 지속적으로 운영합니다. 위험을 모두 제거하는 것이 아니라 <strong>허용 가능한 수준</strong>으로 낮추며, 경영진이 잔여위험을 알고 승인하도록 합니다.</p>`
          },
          {
            id: "resource-management", title: "자원 관리(Resource Management)",
            content: `<p>효율적인 정보보호 지식과 기술을 유지하기 위해 인력·예산·정보자산·Infrastructure를 확보하고 적절히 배분합니다. 정책과 절차에 맞게 통제를 수행하고 조직의 정보보호 Architecture와 책임체계를 연계해야 합니다.</p>`
          },
          {
            id: "performance-management", title: "성과 관리(Performance Management)",
            content: `<p>정보보호 거버넌스의 목표와 Process를 지속적으로 Monitoring하고, 결과를 경영진에게 보고하며 Feedback을 통해 개선하는 체계를 운영합니다. 지표는 경영목표와 연결되어야 하며 통제의 실행 여부뿐 아니라 실제 효과도 평가해야 합니다.</p>`
          },
          {
            id: "value-delivery", title: "가치 전달(Value Delivery)",
            content: `<p>구성원에게 정보보호의 중요성과 가치를 교육하고, 한정된 자원을 중요한 위험과 업무에 우선 배분합니다. 정보보호 투자는 비용 자체가 아니라 업무 연속성·신뢰·법규준수와 손실예방에 제공하는 가치로 판단합니다.</p>`
          },
          {
            id: "it-security-management", title: "IT 보안관리 개요",
            content: `<p>Network로 연결된 정보환경이 확장되면서 다양한 정보보호 위협에 대응할 체계적인 관리가 필요해졌습니다. <strong>IT 보안관리</strong>는 조직의 정보자산과 Service를 적절한 수준으로 보호하기 위해 정책·위험·통제·운영을 통합 관리하는 활동입니다.</p><p>ISO는 이러한 활동을 공통 기준으로 운영할 수 있도록 <strong>ISO/IEC 27000 Series</strong>를 제공합니다.</p>`
          },
          {
            id: "iso27000-family", title: "ISO/IEC 27000 시리즈",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>표준</th><th>역할</th></tr></thead><tbody><tr><td><strong>ISO/IEC 27000</strong></td><td>ISMS 개요와 용어</td></tr><tr><td><strong>ISO/IEC 27001</strong></td><td>ISMS를 수립·운영·유지·개선하기 위한 인증 요구사항</td></tr><tr><td><strong>ISO/IEC 27002</strong></td><td>정보보호 통제의 실무지침(Code of Practice)</td></tr><tr><td><strong>ISO/IEC 27003</strong></td><td>ISMS 구현 안내</td></tr><tr><td><strong>ISO/IEC 27004</strong></td><td>통제와 ISMS 성과의 측정·평가</td></tr><tr><td><strong>ISO/IEC 27005</strong></td><td>정보보호 위험관리 지침</td></tr><tr><td><strong>ISO/IEC 27006</strong></td><td>ISMS 인증·심사기관에 대한 요구사항</td></tr></tbody></table></div>`
          },
          {
            id: "security-management-functions", title: "IT 보안관리 기능",
            content: `<p>기밀성·무결성·가용성·책임추적성·인증 및 신뢰성을 적절한 수준으로 유지하기 위한 Process를 말합니다.</p><ul><li>조직의 IT 보안 목적·전략·방침 결정</li><li>IT 보안 요구사항과 보호대상 식별</li><li>정보자산의 위협·취약점·위험 식별과 분석</li><li>적합한 통제대책 선정·명시</li><li>통제의 실행상태와 효과를 Monitoring하고 개선</li></ul>`
          },
          {
            id: "security-management-process", title: "IT 보안관리 프로세스",
            content: `<p>IT 보안관리는 개별 통제를 따로 적용하는 활동이 아니라 조직 전체를 보는 전사적·체계적 Process입니다. 위험평가 결과를 정책과 계획에 반영하고, 경영층에서 현장 운영까지 모든 계층이 연결되어야 합니다.</p><p>경영진은 정보보호의 목적을 이해하고 자원·권한·정책을 지원해야 하며, 결과를 정기적으로 검토해야 합니다.</p>`
          },
          {
            id: "pdca-cycle", title: "PDCA 관리 순환",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>단계</th><th>주요 활동</th></tr></thead><tbody><tr><td><strong>Plan</strong></td><td>보안정책·목표·Process·절차와 위험처리계획 수립</td></tr><tr><td><strong>Do</strong></td><td>수립한 통제와 위험처리계획의 실행·운영</td></tr><tr><td><strong>Check</strong></td><td>실행결과와 위험처리계획을 Monitoring·측정·검토</td></tr><tr><td><strong>Act</strong></td><td>감사·검토결과에 따라 시정·예방조치를 수행하고 지속 개선</td></tr></tbody></table></div><p>교재에서는 ISO 27001 관리 Process를 설명하는 대표 모델로 제시합니다.</p>`
          },
          {
            id: "iso27001-overview", title: "ISO/IEC 27001 개요",
            content: `<p><strong>ISO/IEC 27001</strong>은 영국 BSI의 BS 7799를 기반으로 발전한 정보보호관리체계(ISMS) 국제표준입니다. 조직의 위험을 기준으로 정보보호정책·조직·자산·인력·기술·운영을 관리하고 지속적으로 개선하기 위한 요구사항을 규정합니다.</p><div class="important-box"><span class="box-title">시험 포인트</span><p><strong>27001 = 인증 가능한 요구사항</strong>, <strong>27002 = 통제 구현을 위한 실무지침</strong>으로 구분합니다.</p></div>`
          },
          {
            id: "iso27001-management-clauses", title: "ISO 27001 관리 요구사항",
            content: `<p>ISO/IEC 27001:2013의 경영시스템 주요 조항은 <strong>조직의 상황, 리더십, 기획, 지원, 운영, 성과평가, 개선</strong>으로 구성됩니다. 조직은 범위와 이해관계자를 정하고, 위험을 평가·처리한 뒤 성과를 측정하고 부적합을 개선합니다.</p>`
          },
          {
            id: "iso27001-2013-annex-a", title: "ISO 27001:2013 통제영역",
            content: `<p>2013년판 Annex A는 <strong>14개 영역·114개 통제</strong>로 구성됩니다.</p><div class="table-scroll"><table class="concept-table"><thead><tr><th>영역</th><th>통제 수</th></tr></thead><tbody><tr><td>정보보호 정책</td><td>2</td></tr><tr><td>정보보호 조직</td><td>7</td></tr><tr><td>인적 자원 보안</td><td>6</td></tr><tr><td>자산 관리</td><td>10</td></tr><tr><td>접근통제</td><td>14</td></tr><tr><td>암호학</td><td>2</td></tr><tr><td>물리적·환경적 보안</td><td>15</td></tr><tr><td>운영 보안</td><td>14</td></tr><tr><td>통신 보안</td><td>7</td></tr><tr><td>시스템 획득·개발·유지보수</td><td>13</td></tr><tr><td>공급자 관계</td><td>5</td></tr><tr><td>정보보호 사고관리</td><td>7</td></tr><tr><td>업무연속성 관리의 정보보호 측면</td><td>4</td></tr><tr><td>준거성</td><td>8</td></tr></tbody><tfoot><tr><th>합계</th><th>114</th></tr></tfoot></table></div>`
          },
          {
            id: "iso27001-2022-annex-a", title: "ISO 27001:2022 통제구조",
            content: `<p>2022년판 Annex A는 기존 통제를 재구성하여 <strong>4개 테마·93개 통제</strong>로 정리했습니다.</p><div class="table-scroll"><table class="concept-table"><thead><tr><th>테마</th><th>통제 수</th><th>예시</th></tr></thead><tbody><tr><td><strong>조직적(Organizational)</strong></td><td>37</td><td>정책·조직·공급망·사고·연속성</td></tr><tr><td><strong>인적(People)</strong></td><td>8</td><td>고용·인식·교육·징계·퇴직</td></tr><tr><td><strong>물리적(Physical)</strong></td><td>14</td><td>구역·출입·장비·물리 Monitoring</td></tr><tr><td><strong>기술적(Technological)</strong></td><td>34</td><td>접근·암호·Network·개발·Logging</td></tr></tbody><tfoot><tr><th>합계</th><th>93</th><th></th></tr></tfoot></table></div>`
          },
          {
            id: "iso27001-new-controls", title: "ISO 27001:2022 신규 통제",
            content: `<p>교재가 제시하는 2022년판의 11개 신규 통제는 다음과 같습니다.</p><ul><li>위협 Intelligence</li><li>정보보호를 위한 Cloud Service 이용</li><li>업무연속성을 위한 ICT 준비</li><li>물리적 보안 Monitoring</li><li>구성 관리</li><li>정보 삭제</li><li>Data Masking</li><li>Data 유출 방지</li><li>Monitoring 활동</li><li>Web Filtering</li><li>Secure Coding</li></ul>`
          },
          {
            id: "iso27001-version-comparison", title: "ISO 27001 버전 비교",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>ISO 27001:2013</th><th>ISO 27001:2022</th></tr></thead><tbody><tr><td><strong>분류</strong></td><td>14개 영역</td><td>4개 테마</td></tr><tr><td><strong>통제 수</strong></td><td>114개</td><td>93개</td></tr><tr><td><strong>구조</strong></td><td>업무영역별 세분화</td><td>조직적·인적·물리적·기술적 통제로 통합</td></tr><tr><td><strong>신규 강조</strong></td><td>기존 ISMS 통제체계</td><td>Cloud·Threat Intelligence·Data 유출방지·Secure Coding 등</td></tr></tbody></table></div><p>통제 수가 줄었다고 보호범위가 축소된 것은 아니며, 기존 통제를 통합·재배치하고 새로운 통제를 추가한 것입니다.</p>`
          },
          {
            id: "security-policy-overview", title: "정보보호 정책 개요",
            content: `<p><strong>정보보호 정책(Security Policy)</strong>은 조직의 내·외부 환경과 업무성격에 맞는 정보보호 활동을 위해 정보자산을 어떻게 관리하고 보호할지 문서로 기술한 최상위 방침입니다.</p><p>구성원이 무엇을 지켜야 하는지, 경영진이 어느 수준의 위험을 수용하는지, 책임과 위반 시 조치를 명확히 합니다.</p>`
          },
          {
            id: "security-policy-components", title: "정보보호 정책의 주요 내용",
            content: `<ul><li>정책의 범위와 목적</li><li>보안조직·관리자·사용자의 역할과 책임</li><li>정보자산 소유자와 관리책임의 지정</li><li>정보분류와 허용되는 사용방식</li><li>접근통제·인적·물리적·기술적 보호원칙</li><li>보안인식과 교육</li><li>사고 탐지·보고·대응 Process</li><li>정책 검토주기와 변경·위반 통지방법</li><li>위반 시 징계와 법적 조치</li></ul>`
          },
          {
            id: "security-policy-role", title: "정보보호 정책의 역할",
            content: `<p>정보보호 정책은 임직원에게 책임과 행동기준을 제시하고, 조직의 비밀 및 지식재산권 보호의 기본을 제공합니다. 또한 경영목표와 보호활동을 연결해 조직 전체가 같은 방향과 우선순위를 공유하도록 합니다.</p>`
          },
          {
            id: "security-policy-revision", title: "정보보호 정책의 수정",
            content: `<p>위험분석과 위험관리 결과를 바탕으로 정책을 수정할 수 있습니다. 신규 System 도입, 기술·업무·법규 변화, 보안사고와 기존 통제의 문제점이 확인되면 정책이 현실적으로 작동하도록 갱신해야 합니다.</p>`
          },
          {
            id: "security-policy-requirements", title: "정책 구현을 위한 요건",
            content: `<ul><li>주로 최고정보보호책임자(CISO)가 개발·조정합니다.</li><li>모든 임직원이 이해할 수 있는 수준으로 작성하고 배포합니다.</li><li>최고경영진의 승인을 받아 조직의 위험수용 의사를 반영합니다.</li><li>전략적(Strategic)·일반적(General)·주제별(Current/Topical) 정책으로 구체화할 수 있습니다.</li><li>문서화와 교육을 통해 행동으로 실천되게 하고 법적 보호근거를 확보합니다.</li></ul>`
          },
          {
            id: "policy-hierarchy", title: "정책·표준·지침·절차 계층",
            content: `<div class="important-box"><span class="box-title">상위에서 하위로</span><p><strong>정책(Security Policy) → 의무 표준(Mandatory Standards) → 권고 지침(Recommended Guidelines) → 상세 절차(Detailed Procedures)</strong></p></div><p>정책은 전략적 방향을 정하고, 표준·지침·절차는 이를 현장에서 실행하는 전술적 문서입니다. 아래로 갈수록 내용이 구체적이고 변경주기가 짧아집니다.</p>`
          },
          {
            id: "standards", title: "표준(Standards)",
            content: `<p><strong>표준</strong>은 정책을 지원하기 위한 의무적 활동·행위·규칙 또는 기술 요구사항입니다. 조직 전체가 일관된 방식으로 통제를 구현하고 System 간 호환성과 통합성을 유지하도록 합니다.</p><p><strong>핵심 질문:</strong> 반드시 무엇을 해야 하는가?</p>`
          },
          {
            id: "baseline", title: "기준선(Baseline)",
            content: `<p><strong>기준선</strong>은 비교의 기준이 되는 현재 시점 또는 조직이 반드시 지켜야 할 <strong>최소 보호수준</strong>입니다. System 유형별 최소 설정과 보호조치를 제시해 보안수준이 그 아래로 내려가지 않게 합니다.</p>`
          },
          {
            id: "guidelines", title: "지침(Guidelines)",
            content: `<p><strong>지침</strong>은 사용자와 IT 직원이 바람직하게 따라야 할 권고사항입니다. 기술·인력·환경에 따라 정답이 달라질 수 있는 상황에서 판단을 돕고 유연성을 제공합니다. 표준처럼 강제적이지 않은 일반적 접근입니다.</p>`
          },
          {
            id: "procedures", title: "절차(Procedures)",
            content: `<p><strong>절차</strong>는 특정 업무를 수행하기 위한 단계별 작업지침입니다. Antivirus 설치, 계정 생성·삭제, Password 변경, Backup·복구, 변경요청 처리와 사고대응처럼 <strong>누가·언제·어떻게</strong> 수행하는지 구체적으로 설명합니다.</p><p>현장과 기술의 변화에 가장 가까워 정책문서 중 자주 수정됩니다.</p>`
          },
          {
            id: "policy-document-comparison", title: "정책 문서 비교",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>문서</th><th>성격</th><th>기억할 말</th></tr></thead><tbody><tr><td><strong>정책</strong></td><td>경영진이 승인하는 최상위 방향</td><td>왜·무엇을</td></tr><tr><td><strong>표준</strong></td><td>반드시 따라야 하는 공통 요구사항</td><td>의무</td></tr><tr><td><strong>기준선</strong></td><td>유형별 최소 보안수준</td><td>최소값</td></tr><tr><td><strong>지침</strong></td><td>판단을 돕는 권고사항</td><td>권고·유연성</td></tr><tr><td><strong>절차</strong></td><td>단계별 상세 작업방법</td><td>어떻게</td></tr></tbody></table></div>`
          },
          {
            id: "it-security-plan", title: "IT 보안계획 개요",
            content: `<p><strong>IT 보안계획</strong>은 정책을 체계적으로 실행하기 위한 중·장기 계획입니다. 무엇을 보호해야 하는지, 어떤 위험이 존재하는지, 어떤 통제를 언제 누가 적용할지 구체화합니다.</p><p>조직의 위험 Profile에서 식별한 결점을 적절한 방법으로 개선하는 실행 Roadmap으로 이해합니다.</p>`
          },
          {
            id: "security-plan-components", title: "IT 보안계획 구성요소",
            content: `<ul><li>위협·자산·취약점의 조합과 위험 식별</li><li>위험평가 결과와 우선순위</li><li>각 위험에 대한 수용·감소·회피·전가 등 처리방안</li><li>통제대책의 선정과 구현 일정</li><li>책임자·예산·자원과 개별 Project·Task</li><li>성과평가와 잔여위험</li><li>유지보수 요구사항 및 기타 의견</li></ul>`
          },
          {
            id: "security-plan-characteristics", title: "IT 보안계획의 특징",
            content: `<ul><li>전략적 계획에 포함되어 현재 전략과 장기 경영목표에 연결되어야 합니다.</li><li>장기적 관점에서 수립하되 기술환경과 위협의 변화를 이해해야 합니다.</li><li>최소 연 1회 검토하고 조직개편·Outsourcing·신규 System·중대사고 같은 중요 변화가 있으면 수정합니다.</li></ul>`
          },
          {
            id: "security-professional-overview", title: "정보보안전문가의 역할 개요",
            content: `<p>정보보안전문가는 조직 내 정보보호를 위한 촉진자·조정자 역할을 수행합니다. 한정된 인력과 예산 안에서 업무 우선순위를 정하고, 부서와 경영진이 정보보호 활동을 실제 업무에 적용하도록 연결합니다.</p>`
          },
          {
            id: "security-professional-roles", title: "정보보안전문가의 주요 역할",
            content: `<ul><li>정보보호 활동·교육·개발·Infrastructure를 위한 예산 확보</li><li>각 부서와 경영진에 정책·절차·기준선·표준·지침을 개발·제공</li><li>대상별 Security Awareness Program 개발과 운영</li><li>조직의 목표와 강점·약점·기회·위협 및 법·규제 이해</li><li>최신 위험·취약점·위협과 정부 법규의 준수상태 파악</li><li>최신 기술과 통제대책 학습</li></ul>`
          },
          {
            id: "security-organization-responsibilities", title: "정보보호조직 구성원의 책임",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>구성원</th><th>주요 책임</th></tr></thead><tbody><tr><td><strong>최고경영자·CISO</strong></td><td>정보보호에 대한 총괄 책임과 방향·자원 승인</td></tr><tr><td><strong>정보시스템 보안관리자</strong></td><td>정책·표준·통제·절차의 설계·구현·관리</td></tr><tr><td><strong>Data 관리자</strong></td><td>Data의 정확성·무결성 유지와 중요도·분류 결정</td></tr><tr><td><strong>Process 관리자</strong></td><td>담당 정보시스템에 정책에 맞는 보호조치 적용</td></tr><tr><td><strong>기술지원 인력</strong></td><td>보안대책과 Architecture에 대한 기술자문</td></tr><tr><td><strong>사용자</strong></td><td>승인된 절차와 사용규칙 준수</td></tr><tr><td><strong>정보시스템 감사자</strong></td><td>독립적 관점에서 통제와 목표의 적합성 확인</td></tr></tbody></table></div>`
          },
          {
            id: "security-oversight-committee", title: "전사적 보안감독위원회",
            content: `<p><strong>전사적 보안감독위원회(Enterprise-wide Security Oversight Committee)</strong>는 Security Council이라고도 하며, 부서 간 정보보호 활동을 조정하고 경영목표에 맞는 전사 보안방향을 감독합니다.</p><p>정책을 지원할 의사결정권과 예산권이 필요하므로 고위관리자가 참여하고, 정보보호를 조직 전체의 지속적인 기능으로 만듭니다.</p>`
          },
          {
            id: "vision-mission-statements", title: "비전·미션 선언문",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>내용</th></tr></thead><tbody><tr><td><strong>비전 선언문(Vision Statement)</strong></td><td>비즈니스 목표를 지원하기 위해 기밀성·무결성·가용성 요구를 도출하고 이해관계자가 공유할 장기적 지향점을 제시</td></tr><tr><td><strong>미션 선언문(Mission Statement)</strong></td><td>비전을 달성하기 위한 목표와 Roadmap을 제시하며 보안 Program 감독, 정책 검토·승인, Project 우선순위 결정 등을 포함</td></tr></tbody></table></div>`
          },
          {
            id: "oversight-committee-composition", title: "보안감독위원회 구성과 기능",
            content: `<ul><li>정책을 지원할 권한·예산을 가진 고위관리자 중심으로 구성합니다.</li><li>IT·인사·법무·감사·업무부서 등 이해관계자가 참여해 전사 관점을 확보합니다.</li><li>보안 Program과 정책을 검토·승인하고 위험·사고·성과를 정기적으로 보고받습니다.</li><li>부서 간 충돌을 조정하고 주요 정보보호 Project의 우선순위와 자원배분을 결정합니다.</li></ul>`
          },
          {
            id: "hr-security-lifecycle", title: "인적 자원 보안 개요",
            content: `<p><strong>인적 자원 보안</strong>은 직원·계약직·제3자의 실수, 절도, 사기와 시설·정보의 오용 위험을 줄이기 위한 통제입니다. 고용 전, 재직 중, 직무변경과 퇴직 이후까지 전체 고용주기를 관리합니다.</p>`
          },
          {
            id: "pre-employment-security", title: "고용 전 보안",
            content: `<p>업무의 민감도와 법적 범위를 고려하여 신원·경력·자격·평판을 확인하고, 접근권한을 부여하기 전에 위험을 평가합니다.</p><ul><li><strong>배경검사·심사:</strong> 검증된 객관적 자료를 이용해 위험을 줄이고 적합한 인력을 선발</li><li><strong>Reference Check:</strong> 지원자의 경력·학력·능력·이력을 독립적으로 확인</li><li><strong>고용계약:</strong> 기밀유지, 지식재산권, 보안의무와 위반책임을 명시</li><li><strong>NDA:</strong> 조직의 영업비밀·지식재산권과 민감정보의 비공개 약정</li></ul>`
          },
          {
            id: "during-employment-security", title: "고용기간 중 보안",
            content: `<p>모든 임직원을 대상으로 지속적인 보안인식·교육 Program을 운영하고, 정책을 정기적으로 갱신해 각자의 책임을 알게 해야 합니다. 접근권한과 직무는 실제 업무에 필요한 범위로 통제합니다.</p>`
          },
          {
            id: "least-privilege-and-sod", title: "최소권한·직무분리",
            content: `<ul><li><strong>최소권한(Least Privilege):</strong> 업무 수행에 필요한 최소한의 접근권한만 부여</li><li><strong>직무분리(Separation of Duties):</strong> 승인·처리·기록·검토처럼 양립할 수 없는 업무를 나누어 한 사람이 중요 Process 전체를 통제하지 못하게 함</li><li><strong>이중통제(Dual Control):</strong> 중요 작업을 2명 이상이 함께 수행하거나 승인하게 함</li></ul><p>소규모 조직에서 완전한 직무분리가 어렵다면 독립적 검토와 감사 같은 보완통제를 적용합니다.</p>`
          },
          {
            id: "job-rotation", title: "직무순환(Job Rotation)",
            content: `<p>직원이 오랫동안 같은 직무만 수행할 때 생길 수 있는 부정과 의존성을 줄이기 위해 일정 주기로 담당업무를 변경합니다. 다른 사람이 업무를 수행하면서 이상행위를 발견할 수 있고, 업무 Backup과 보안정책 준수도 강화됩니다.</p>`
          },
          {
            id: "mandatory-vacation", title: "강제휴가(Mandatory Vacation)",
            content: `<p>직무순환과 유사하게 일정 기간 직원이 강제로 업무에서 벗어나고 다른 사람이 해당 업무를 수행하게 하는 통제입니다. 보통 1~2주 동안 업무를 인계하여 숨겨진 부정이나 비정상 Process를 발견할 기회를 만듭니다.</p>`
          },
          {
            id: "termination-security", title: "고용종료 시 보안",
            content: `<p>퇴직·계약종료·해고 시점에는 논리적·물리적 접근을 신속하게 회수해야 합니다.</p><ul><li>접근제어목록과 계정에서 대상자 제거</li><li>개인 Access Code와 Token 폐기</li><li>Key·출입증·장비·문서와 저장매체 회수</li><li>출입 Card 재설정과 필요 시 물리 Lock 변경</li><li>업무상 필요한 범위에서 관계자에게 퇴직사실 통지</li><li>기밀유지와 자료반환 의무를 재확인하고 활동기록 보존</li></ul>`
          },
          {
            id: "friendly-unfriendly-departure", title: "우호적·비우호적 퇴직",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>보안조치</th></tr></thead><tbody><tr><td><strong>우호적 퇴직(Friendly Departure)</strong></td><td>퇴직일정에 맞춰 인수인계·퇴직면담·자산반납을 진행하고 마지막 근무시점에 접근권한을 종료</td></tr><tr><td><strong>비우호적 퇴직(Unfriendly Departure)</strong></td><td>통보 전에 계정과 원격접근을 차단하고 보안담당자·관리자 입회 아래 자산을 회수하며 필요하면 System 활동을 집중 Monitoring</td></tr></tbody></table></div><p>퇴직 형태와 관계없이 접근권한 회수·자산반납·기밀유지 의무는 동일하게 적용합니다.</p>`
          },
          {
            id: "section39-summary", title: "SECTION 39 핵심 흐름",
            content: `<div class="important-box"><span class="box-title">전체 흐름</span><p><strong>경영진의 정보보호 거버넌스 → 전략·위험·자원·성과·가치 관리 → ISO/IEC 27000 Series와 ISO 27001 → 정책·표준·기준선·지침·절차 → IT 보안계획 → 전문가·조직의 역할 → 전사 보안감독위원회 → 고용 전·재직 중·고용종료의 인적 보안</strong></p></div><div class="table-scroll"><table class="concept-table"><thead><tr><th>문제 키워드</th><th>정답</th></tr></thead><tbody><tr><td>책임성·비즈니스 연계·준거성·위험관리</td><td>ABCR</td></tr><tr><td>ISMS 인증 요구사항</td><td>ISO/IEC 27001</td></tr><tr><td>정보보호 통제 실무지침</td><td>ISO/IEC 27002</td></tr><tr><td>반드시 따라야 하는 공통 요구사항</td><td>표준</td></tr><tr><td>최소 보안수준</td><td>기준선</td></tr><tr><td>단계별 상세 작업방법</td><td>절차</td></tr><tr><td>한 사람이 중요 Process 전체를 통제하지 못하게 함</td><td>직무분리</td></tr><tr><td>담당업무를 주기적으로 변경</td><td>직무순환</td></tr><tr><td>다른 사람이 업무를 수행하도록 일정 기간 쉬게 함</td><td>강제휴가</td></tr></tbody></table></div>`
          }
        ],
        content: ""
      },
      {
        id: "section-40",
        number: 40,
        title: "정보보호 위험 관리",
        subtopics: [
          {
            id: "risk-management-overview", title: "위험관리(Risk Management) 개요",
            content: `<p><strong>위험관리</strong>는 조직의 자산에 대한 위협을 감수할 수 있는 수준으로 유지하기 위해 자산의 위험을 분석하고, 비용 대비 효과적인 보호대책을 마련하는 일련의 과정입니다.</p><p>보안정책을 바탕으로 위험을 분석·평가하고 대응책을 구현한 뒤 사후관리 결과를 다시 정책과 분석에 반영하는 <strong>지속적인 순환 활동</strong>입니다.</p>`
          },
          {
            id: "risk-management-process", title: "위험관리 과정",
            content: `<div class="flow-horizontal"><div class="flow-step">전략적 계획 수립</div><div class="flow-arrow">→</div><div class="flow-step">위험 구성요소 분석</div><div class="flow-arrow">→</div><div class="flow-step">위험평가</div><div class="flow-arrow">→</div><div class="flow-step">보호대책 선정</div><div class="flow-arrow">→</div><div class="flow-step">이행계획 수립</div></div><p>보안관리 활동에서는 <strong>보안정책 → 위험관리·위험분석 → 대응책 구현 → 사후관리</strong>가 연결되며, 각 단계의 결과가 앞 단계에 Feedback됩니다. 위험관리는 보안관리 활동에서 가장 핵심적인 부분입니다.</p>`
          },
          {
            id: "risk-management-necessity", title: "위험관리의 필요성",
            content: `<ul><li>자산의 가치와 손실을 측정하고 위협을 평가하여 조직이 수용할 수 있는 수준으로 위험을 낮춥니다.</li><li>보호대책의 우선순위를 정해 필요한 곳에 투자함으로써 과도한 투자와 과소 투자를 피합니다.</li><li>체계적인 분석 없이 대책을 세우면 취약점·위협의 우선순위를 정하기 어렵고, 보호대책을 마련했어도 위험이 계속될 수 있습니다.</li><li>시간이 지나면 보호대책의 효과가 감소하고 새로운 위험이 생기므로 지속적이고 반복적인 위험관리가 필요합니다.</li></ul>`
          },
          {
            id: "risk-definition", title: "위험(Risk)의 정의",
            content: `<p><strong>위험</strong>은 원하지 않는 사건이 발생하여 손실 또는 부정적인 영향을 미칠 가능성입니다. 위험의 유형과 규모를 확인하려면 위험에 관련된 모든 요소와 각 요소가 위험 규모에 미치는 영향을 분석해야 합니다.</p><p>위협이 실제 사건으로 이어지면 자산의 <strong>기밀성·무결성·가용성</strong>에 변화나 손실이 생길 수 있습니다.</p><div class="important-box"><span class="box-title">핵심 관계</span><p><strong>위험 = f(자산, 위협, 취약점, 보호대책)</strong></p></div>`
          },
          {
            id: "asset-component", title: "자산(Asset)",
            content: `<p>위험관리의 가장 큰 목적은 조직의 <strong>자산을 보호</strong>하는 것입니다. 자산은 조직이 업무를 수행하면서 사용하는 유형·무형의 가치 있는 대상으로, 업무에 직접 또는 간접적으로 영향을 받는 요소를 모두 포함합니다.</p>`
          },
          {
            id: "threat-component", title: "위협(Threat)",
            content: `<p><strong>위협</strong>은 자산에 손해를 초래할 수 있는 사건의 잠재적 원인(Source)이나 행위자(Agent)입니다.</p><ul><li><strong>환경적 위협:</strong> 자연재해, 장비 고장 등</li><li><strong>인간에 의한 위협:</strong> 의도적인 위협(Deliberate)과 우발적인 위협(Accidental)</li></ul>`
          },
          {
            id: "vulnerability-component", title: "취약점(Vulnerability)",
            content: `<p><strong>취약점</strong>은 위협에 이용될 수 있는 자산의 잠재적 속성 또는 약점이며 보안 취약점이라고도 합니다. 위협이 존재해도 이용할 취약점이 없다면 손실로 이어지지 않으므로, 취약점은 자산과 위협의 관계를 연결하는 요소입니다.</p>`
          },
          {
            id: "countermeasure-component", title: "보호대책(Safeguard·Countermeasure)",
            content: `<p>위험분석에서는 현재 설치된 보호대책을 식별하고 정상적으로 작동하는지 확인해야 합니다. 보호대책이 위협 발생 가능성이나 취약점을 실제로 줄이는지 검토하고, <strong>위험 감소효과와 비용효과성</strong>을 함께 고려하여 적절한 대책을 선정합니다.</p><p>조직은 위험을 감소시키는 통제 또는 위험을 회피하는 방법으로 자산을 보호합니다.</p>`
          },
          {
            id: "safeguard-types", title: "보호대책의 유형",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>유형</th><th>관점</th><th>예</th></tr></thead><tbody><tr><td><strong>기술적 보호대책</strong></td><td>보안 Solution의 도입 및 운영</td><td>Firewall, 접근통제 System, 암호화</td></tr><tr><td><strong>관리적 보호대책</strong></td><td>보안정책의 수립 및 시행</td><td>정책·절차, 직무분리, 교육</td></tr><tr><td><strong>물리적 보호대책</strong></td><td>시설물과 장비 보호</td><td>출입통제, 잠금장치, 감시장비</td></tr></tbody></table></div>`
          },
          {
            id: "control-timing-types", title: "예방·탐지·교정 통제",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>목적</th><th>교재 예시</th></tr></thead><tbody><tr><td><strong>예방 통제</strong></td><td>취약점을 제거하고 발생 가능한 위협을 막음</td><td>물리적 접근통제, 논리적 접근통제</td></tr><tr><td><strong>탐지 통제</strong></td><td>발생한 위협을 신속히 발견해 피해를 최소화</td><td>보안감사, 접근위반 Log, 침입탐지</td></tr><tr><td><strong>교정 통제</strong></td><td>탐지된 위협이 미친 피해를 복구</td><td>Audit Trail, 재해복구 계획</td></tr></tbody></table></div>`
          },
          {
            id: "risk-factor-relations", title: "위험 구성요소의 관계",
            content: `<ul><li>위협은 취약점을 공격하고, 자산은 취약점을 보유할 수 있습니다.</li><li>위협이 취약점을 이용하면 자산의 가치와 업무에 영향을 주어 위험이 증가합니다.</li><li>보안 요구사항은 자산에 필요한 보호수준을 정하며, 보호대책은 위협을 방어하고 취약점을 줄여 위험을 감소시킵니다.</li></ul><div class="important-box"><span class="box-title">관계 흐름</span><p><strong>위협 → 취약점 이용 → 자산 손실 → 위험 증가 → 보안 요구사항에 맞는 보호대책 적용 → 위험 감소</strong></p></div>`
          },
          {
            id: "total-residual-risk", title: "전체 위험과 잔여 위험",
            content: `<p><strong>전체 위험(Total Risk)</strong>은 보호대책을 적용하기 전에 조직이 직면하는 전체 위험이며, <strong>잔여 위험(Residual Risk)</strong>은 보호대책을 적용한 뒤에도 남는 위험입니다. 완전히 안전한 System은 없으므로 경영진은 남은 위험이 수용 가능한 수준인지 판단해야 합니다.</p><div class="important-box"><span class="box-title">개념식</span><p><strong>자산 × 위협 × 취약점 = 전체 위험</strong><br><strong>전체 위험 − 보호대책으로 감소시킨 위험 = 잔여 위험</strong></p></div><p>보호대책이 설치되지 않으면 전체 위험과 잔여 위험의 차이가 없으며, 대책의 효과가 클수록 잔여 위험은 작아집니다.</p>`
          },
          {
            id: "risk-analysis-overview", title: "위험분석(Risk Analysis) 개요",
            content: `<p><strong>위험분석</strong>은 자산의 취약점을 식별하고 존재하는 위협과 발생 가능성을 분석하여, 위험이 자산에 미칠 부정적 영향을 파악하는 과정입니다. 분석결과는 적절한 보호대책을 선정하는 근거가 됩니다.</p><p>조직은 자산 가치보다 더 큰 비용의 대책을 적용하지 않도록 <strong>Security Management</strong>와 비용효과성을 함께 고려해야 합니다. 교재에서는 정보보안관리 과정에서 위험분석이 큰 비중을 차지하는 핵심 Process라고 설명합니다.</p>`
          },
          {
            id: "risk-analysis-process", title: "위험분석과 위험관리 흐름",
            content: `<div class="flow-horizontal"><div class="flow-step">범위 분석</div><div class="flow-arrow">→</div><div class="flow-step">자산 식별</div><div class="flow-arrow">→</div><div class="flow-step">가치·중요도 평가</div><div class="flow-arrow">→</div><div class="flow-step">위협·취약점·기본보안 평가</div><div class="flow-arrow">→</div><div class="flow-step">위험평가</div><div class="flow-arrow">→</div><div class="flow-step">대책 선정</div><div class="flow-arrow">→</div><div class="flow-step">위험 수용</div></div><p>위험이 수용되지 않으면 평가와 대책선정을 반복하며, 수용되면 IT System 보안방침과 IT 보안계획에 반영합니다.</p>`
          },
          {
            id: "preliminary-risk-analysis", title: "사전 위험분석",
            content: `<p>위험분석 수준을 정하기 전에 사업환경을 파악하고 분석 수준을 결정합니다. 사전 위험분석은 조직이 수용할 수 없는 위험을 식별하고 허용 가능한 위험수준을 정하기 위한 것입니다.</p><p>보호하려는 대상 자산의 가치와 중요도, 보안상 우려되는 문제, 해당 자산이 조직의 임무와 업무에 미치는 영향을 함께 검토합니다.</p>`
          },
          {
            id: "baseline-approach", title: "기준선 접근법(Baseline Approach)",
            content: `<p>모든 System에 표준화된 보호대책의 기본수준을 Checklist 형태로 제공하고, 별도의 위험분석 없이 필요한 보호대책을 판단하는 방식입니다. BS 7799 또는 ISO 17799를 이용한 갭 분석이 예로 제시되며, 충분한 자원을 갖추기 어려운 소규모 조직에 적합합니다.</p><ul><li><strong>장점:</strong> 분석 시간과 자원을 줄이고 동일 조직의 System에 공통 기준을 빠르게 적용</li><li><strong>단점:</strong> 조직·System별 위험 차이를 반영하기 어렵고, 기준선이 너무 높으면 비용이 과다하며 너무 낮으면 보호가 부족</li></ul>`
          },
          {
            id: "informal-approach", title: "비정형화된 접근법(Informal Approach)",
            content: `<p>정형화되고 구조화된 방법이나 도구 대신 개인의 지식과 전문성을 이용해 위험을 분석하는 방식으로 <strong>전문가 의존적 접근법</strong>이라고도 합니다. 내부 또는 외부 전문가가 빠르게 수행할 수 있습니다.</p><ul><li><strong>장점:</strong> 전문가의 지식·경험을 활용하므로 비교적 짧은 시간과 적은 비용으로 수행</li><li><strong>단점:</strong> 구조적 Process가 없어 일부 위험을 놓칠 수 있고 결과가 사람에 따라 달라짐. 대책선정과 비용의 정당성을 설명하기 어렵고 담당자가 바뀌면 분석을 반복할 수 있음</li></ul>`
          },
          {
            id: "detailed-risk-analysis-approach", title: "상세 위험분석 접근법",
            content: `<p>가장 포괄적인 접근법으로 정형화되고 구조화된 Process를 이용하여 조직의 중요한 모든 IT System과 자산을 상세히 분석합니다. 자산 식별·가치평가, 위협·취약점 식별, 각 위험의 발생 가능성과 영향을 차례로 평가합니다.</p><ul><li><strong>장점:</strong> System의 보안위협을 가장 상세히 파악하고, 통제에 따른 보호효과를 명확히 확인하며 변화에 맞춰 지속 관리할 정보 제공</li><li><strong>단점:</strong> 시간·자원·전문가 비용이 많이 들고 분석 중 적절한 보안수준을 제공하지 못할 수 있음</li></ul>`
          },
          {
            id: "combined-approach", title: "통합된 접근법(Combined Approach)",
            content: `<p>고위험 영역은 상세 위험분석을 수행하고 나머지 영역은 기준선 접근법을 적용하는 복합 방식입니다. 전체 조직에 적정 보호수준을 빠르고 경제적으로 적용하면서 중요 System은 구체적으로 평가할 수 있습니다.</p><ul><li><strong>장점:</strong> 상세분석의 지연 문제를 줄이고 자산의 가치·특성·보호요구에 따라 유연하게 적용</li><li><strong>단점:</strong> 초기 고위험 영역을 잘못 식별하면 조직이 위험에 노출되거나, 불필요한 상세분석으로 비용이 늘 수 있음</li></ul>`
          },
          {
            id: "risk-analysis-approach-comparison", title: "위험분석 접근법 비교",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>방법</th><th>핵심</th><th>장점</th><th>주의점</th></tr></thead><tbody><tr><td><strong>기준선</strong></td><td>표준 Checklist와 기본 보호수준</td><td>빠르고 경제적</td><td>조직별 위험 차이 반영이 어려움</td></tr><tr><td><strong>비정형</strong></td><td>전문가 지식·경험</td><td>짧은 시간과 적은 비용</td><td>개인 의존성과 누락 가능성</td></tr><tr><td><strong>상세</strong></td><td>모든 중요자산을 정형적으로 분석</td><td>구체적이고 명확한 결과</td><td>많은 시간·비용·전문성 필요</td></tr><tr><td><strong>통합</strong></td><td>고위험은 상세, 나머지는 기준선</td><td>신속성과 정밀성의 결합</td><td>초기 고위험 식별이 중요</td></tr></tbody></table></div>`
          },
          {
            id: "detailed-analysis-overview", title: "상세 위험분석의 단계",
            content: `<p>Network와 System이 조직에 미치는 영향과 중요도가 높거나 자산 가치가 클 때 적용합니다.</p><div class="flow-horizontal"><div class="flow-step">자산 분석</div><div class="flow-arrow">→</div><div class="flow-step">위협 분석</div><div class="flow-arrow">→</div><div class="flow-step">취약점 분석</div><div class="flow-arrow">→</div><div class="flow-step">대응책 분석</div><div class="flow-arrow">→</div><div class="flow-step">위험평가</div><div class="flow-arrow">→</div><div class="flow-step">잔류위험 평가</div></div>`
          },
          {
            id: "asset-analysis-overview", title: "자산 분석 개요",
            content: `<p>자산분석은 조직의 자산규모를 파악하고 자산의 가치와 중요도를 산출하여 자산목록과 업무처리와의 관계를 확인하는 과정입니다.</p><div class="table-scroll"><table class="concept-table"><thead><tr><th>정량적 기준</th><th>정성적 기준</th></tr></thead><tbody><tr><td>자산도입 비용</td><td>업무처리에 대한 자산의 기여도</td></tr><tr><td>자산복구 비용</td><td>자산이 영향을 미치는 조직과 작업의 수</td></tr><tr><td>자산교체 비용</td><td>자산 복구에 필요한 시간</td></tr></tbody></table></div>`
          },
          {
            id: "asset-identification", title: "자산 식별과 분류",
            content: `<p>정보보호관리체계 범위 안의 자산을 조사하고 유형별로 분류합니다.</p><div class="table-scroll"><table class="concept-table"><thead><tr><th>자산 유형</th><th>설명</th></tr></thead><tbody><tr><td><strong>Data</strong></td><td>전산화된 정보: Data File, Database 내부 Data 등</td></tr><tr><td><strong>문서</strong></td><td>종이로 된 정보: 보고서, 계약서, 매뉴얼, 각종 대장 등</td></tr><tr><td><strong>Software</strong></td><td>Package Software, System Software, 응용 Program 등</td></tr></tbody></table></div>`
          },
          {
            id: "three-level-asset-evaluation", title: "3단계 자산평가",
            content: `<p>가장 단순하게 자산의 <strong>기밀성·무결성·가용성</strong> 중요도를 3단계로 평가할 수 있습니다.</p><ul><li>기밀성과 무결성은 주로 Data의 중요도로 결정합니다. 여러 수준이 섞이면 가장 높은 수준을 따릅니다.</li><li>가용성은 관련 응용 Service 또는 업무가 요구하는 가용성 가운데 가장 높은 수준을 따릅니다.</li></ul>`
          },
          {
            id: "asset-grouping", title: "자산 그룹핑",
            content: `<p>기밀성·무결성·가용성 평가결과를 바탕으로 자산유형·보안특성·중요도가 같은 자산을 공통 자산그룹으로 묶습니다. 같은 결과가 나오는 자산마다 동일한 평가작업을 반복하지 않기 위한 것입니다.</p><p>자산 수가 적고 평가결과 차이가 크지 않다면 반드시 그룹핑할 필요는 없습니다.</p>`
          },
          {
            id: "threat-analysis", title: "위협 분석",
            content: `<p>자산에 피해를 가할 수 있는 잠재적인 위협원을 파악하고 발생 가능한 위협을 산출합니다.</p><ul><li><strong>위협 식별:</strong> 담당자와의 협의·Interview·설문, 기존 위협분석 자료, 사고대응일지 등을 이용해 자산의 위협원을 식별</li><li><strong>위협평가:</strong> 식별한 위협이 자산에 미치는 영향과 발생 가능성·발생빈도를 평가</li></ul>`
          },
          {
            id: "vulnerability-analysis", title: "취약점 분석",
            content: `<p>자산분석으로 도출한 자산의 중요도를 바탕으로 자산이 보유한 취약점을 식별합니다. 위협원이 취약점을 이용하면 손실이 발생할 수 있습니다.</p><ul><li><strong>취약점 식별:</strong> 담당자와의 협의·Interview 또는 System 취약점 분석결과 등을 이용</li><li><strong>취약성 평가:</strong> 식별된 취약성이 자산에 미치는 영향을 평가</li></ul>`
          },
          {
            id: "countermeasure-analysis", title: "대응책 분석",
            content: `<p>Network나 System을 새로 구축할 때 운영 중인 자산에 필요한 대응책을 조사하고, 각 대응책이 제공할 수 있는 기능과 보호수준을 파악합니다.</p>`
          },
          {
            id: "risk-evaluation-doa", title: "위험평가와 목표 위험수준(DoA)",
            content: `<p>위험분석 결과를 이용하여 최종 위험도를 평가하고, 조직이 수용 가능한 <strong>목표 위험수준(DoA)</strong>을 정한 뒤 이를 기준으로 위험대응 대책의 우선순위를 결정합니다.</p><p>모든 위험에 대응하거나 위험을 완전히 제거하는 것은 불가능하므로 DoA를 초과하는 위험에 적절한 보호대책을 적용해야 합니다. 목표수준은 최고책임자·개인정보 보호책임자 등 경영진의 의사결정으로 정합니다.</p>`
          },
          {
            id: "residual-risk-assessment", title: "잔류 위험평가",
            content: `<p>위험분석 결과에 대한 최종평가 전에 계획한 보호대책을 적용했을 때 잔여위험이 허용 가능한 수준으로 낮아지는지 검증합니다.</p><ul><li>허용 가능한 수준에 도달하지 못하면 보호대책을 보완합니다.</li><li>예산 등 제약으로 추가조치가 어렵다면 경영진이 잔류위험 수용 여부를 결정합니다.</li></ul>`
          },
          {
            id: "risk-treatment-overview", title: "위험처리 전략",
            content: `<p>위험을 식별한 뒤 수용 가능성과 대책의 효과를 판단하여 <strong>수용·감소·전가·회피</strong> 중 적절한 전략을 선택합니다.</p><div class="table-scroll"><table class="concept-table"><thead><tr><th>전략</th><th>핵심 질문</th></tr></thead><tbody><tr><td><strong>수용</strong></td><td>현재 위험을 받아들일 수 있는가?</td></tr><tr><td><strong>감소</strong></td><td>통제로 발생 가능성이나 영향을 낮출 수 있는가?</td></tr><tr><td><strong>전가</strong></td><td>제3자와 책임·비용을 나눌 수 있는가?</td></tr><tr><td><strong>회피</strong></td><td>위험을 만드는 활동 자체를 중단할 수 있는가?</td></tr></tbody></table></div>`
          },
          {
            id: "risk-acceptance", title: "위험 수용(Risk Acceptance)",
            content: `<p>현재 위험을 받아들이고 잠재적 손실비용을 감수하는 전략입니다. 어떤 보호대책도 위험을 완전히 제거할 수 없으므로 일정 수준 이하의 위험은 인정하고 업무를 계속합니다.</p><p>대개 위험을 처리하는 비용이나 시간이 지나치게 클 때 선택하며, 관리층은 위험이 실제로 발생했을 때의 결과에 책임을 져야 합니다.</p>`
          },
          {
            id: "risk-reduction", title: "위험 감소(Risk Reduction·Mitigation)",
            content: `<p>위험이 실제로 발생했을 때의 <strong>영향</strong> 또는 위험의 <strong>발생 가능성</strong>을 낮추는 전략입니다.</p><ul><li><strong>영향 감소:</strong> Data Backup, Process 변경, 재난복구계획 수립, 중요장치 이중화</li><li><strong>발생 가능성 감소:</strong> Firewall 설치, 강한 인증수단, 기술적·관리적 통제</li></ul><p>대책비용과 실제 감소되는 위험의 크기를 비교하는 비용효과 분석이 필요합니다.</p>`
          },
          {
            id: "risk-transfer", title: "위험 전가(Risk Transition·Transfer)",
            content: `<p>위험에 대한 책임을 제3자와 공유하는 전략이며 위험전가에는 비용이 따릅니다. 보험가입, 다른 기관과의 계약·협약, Outsourcing을 통해 위험과 비용을 분담하고 계약조항과 공동대책으로 관리합니다.</p>`
          },
          {
            id: "risk-avoidance", title: "위험 회피(Risk Avoidance)",
            content: `<p>위험이 존재하는 Process나 사업을 수행하지 않고 포기하여 위험의 원인을 제거하는 전략입니다. 자산을 폐기·교체하거나 설계를 변경해 다른 대안을 선택합니다.</p><p>위험을 근본적으로 없앨 수 있지만, 유용한 기능이나 사업상 이익까지 포기할 수 있습니다.</p>`
          },
          {
            id: "quantitative-overview", title: "정량적 위험분석",
            content: `<p><strong>정량적 위험분석</strong>은 위험분석 Process의 각 요소에 금전적 가치와 수치자료를 부여하여 객관적으로 분석하는 방법입니다. 자산가치, 위험빈도, 취약성의 심각성, 피해영향, 보호대책 비용과 효과 등을 수치화하여 전체 위험을 판단합니다.</p><p>정성적 분석보다 수학적이고 객관적인 접근이며 비용·효과를 비교하기 좋습니다.</p>`
          },
          {
            id: "automated-risk-analysis", title: "자동 위험분석 방식",
            content: `<p>위험분석 공식에 필요한 Data를 모두 수집하고 결과를 일일이 해석하면 작업이 수작업으로 진행되어 어렵고 복잡해질 수 있습니다. 자동 위험분석 도구는 계산을 쉽고 정확하게 수행하도록 돕습니다.</p><p>수집된 Data를 다시 사용할 수 있어 수행시간을 줄이고, 위험분석팀이 경영진에게 보고서와 포괄적인 Graph를 제공하는 데 활용할 수 있습니다.</p>`
          },
          {
            id: "quantitative-analysis-steps", title: "정량적 위험분석 단계와 계산식",
            content: `<ol><li>각 자산의 가치를 결정합니다.</li><li>각 위험의 잠재적 손실을 계산합니다: 노출계수(EF), 단일손실예상액(SLE).</li><li>위험의 연간 발생률(ARO)을 계산합니다.</li><li>각 위험의 연간손실예상액(ALE)을 계산합니다.</li><li>위험 감소·전가·수용 전략을 비교합니다.</li></ol><div class="important-box"><span class="box-title">필수 공식</span><p><strong>SLE = 자산가치 × 노출계수(EF)</strong><br><strong>ALE = SLE × 연간발생률(ARO)</strong></p></div><ul><li><strong>EF:</strong> 한 번의 사고로 손실되는 자산가치의 비율</li><li><strong>SLE:</strong> 사고가 한 번 발생할 때 예상되는 손실액</li><li><strong>ARO:</strong> 1년 동안 사고가 발생할 것으로 예상되는 횟수</li><li><strong>ALE:</strong> 1년 동안 예상되는 전체 손실액</li></ul>`
          },
          {
            id: "quantitative-analysis-example", title: "정량적 위험분석 예",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>자산</th><th>위협</th><th>자산가치</th><th>EF</th><th>SLE</th><th>ARO</th><th>ALE</th></tr></thead><tbody><tr><td>고객 DB</td><td>해킹</td><td>$432,000</td><td>74%</td><td>$319,680</td><td>25%</td><td>$79,920</td></tr><tr><td>Word 문서</td><td>Virus</td><td>$9,450</td><td>17%</td><td>$1,607</td><td>90%</td><td>$1,446</td></tr><tr><td>Website</td><td>DDoS</td><td>$250,000</td><td>44%</td><td>$110,000</td><td>45%</td><td>$49,500</td></tr></tbody></table></div>`
          },
          {
            id: "cost-benefit-analysis", title: "보호대책 비용·이익 분석",
            content: `<p>보안통제는 비용효과적이어야 하며 보호대책의 비용이 보호로 얻는 효과를 초과하지 않아야 합니다.</p><div class="important-box"><span class="box-title">계산</span><p><strong>보호대책의 연간 가치 = 적용 전 ALE − 적용 후 ALE − 보호대책의 연간 비용</strong></p></div><p>예를 들어 적용 전 ALE가 $12,000, 적용 후 ALE가 $3,000, 보호대책의 연간 비용이 $650이면 연간 가치는 <strong>$8,350</strong>입니다.</p>`
          },
          {
            id: "qualitative-risk-analysis", title: "정성적 위험분석",
            content: `<p><strong>정성적 위험분석</strong>은 각 요소와 손실에 숫자나 화폐가치를 직접 부여하지 않고, 다양한 위험 가능성의 Scenario를 이용해 위험의 심각성과 자산 중요도의 우선순위를 정하는 방법입니다.</p><p>판단·직관·경험을 이용하며, 금액 산정이 어렵거나 빠른 우선순위 결정이 필요할 때 활용합니다.</p>`
          },
          {
            id: "quantitative-qualitative-comparison", title: "정량적·정성적 위험분석 비교",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>정량적 위험분석</th><th>정성적 위험분석</th></tr></thead><tbody><tr><td><strong>장점</strong></td><td>객관적 평가기준 적용, 자산가치·결과를 금전·확률로 표현해 이해가 쉬움, 위험관리 성과평가가 용이</td><td>분석 준비와 계산 노력이 적음, 자산의 금전가치와 비용·이익을 반드시 평가할 필요가 없음</td></tr><tr><td><strong>단점</strong></td><td>계산이 복잡하고 많은 시간·노력·비용 필요, 자동화 도구 의존 가능</td><td>평가자와 측정기준에 따라 결과가 달라질 수 있음, 측정결과와 비용·이익의 객관적 근거가 부족하며 성과를 수치화하기 어려움</td></tr></tbody></table></div>`
          },
          {
            id: "risk-analysis-methods", title: "정량적·정성적 분석방법의 종류",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>방법</th><th>설명</th></tr></thead><tbody><tr><td rowspan="4"><strong>정량적</strong></td><td><strong>과거자료 분석법</strong></td><td>과거 사고의 발생자료로 미래 위험의 발생 가능성을 예측. 자료가 많을수록 유리하지만 환경변화나 자료부족의 영향을 받음</td></tr><tr><td><strong>수학공식 접근법</strong></td><td>위험 발생빈도를 계산하는 식을 이용하여 미래 위험과 손실을 추정</td></tr><tr><td><strong>확률 분포법</strong></td><td>미래 사건을 확률분포로 추정하여 평균·최고·최저 등 위험값을 계산</td></tr><tr><td><strong>점수법</strong></td><td>위험요소에 가중치와 점수를 부여해 위험수준을 계산</td></tr><tr><td rowspan="4"><strong>정성적</strong></td><td><strong>Delphi법</strong></td><td>전문가들이 익명으로 의견을 제시하고 반복적으로 조정하여 합의된 위험평가를 도출</td></tr><tr><td><strong>Scenario법</strong></td><td>특정 사건이 발생한다고 가정하고 가능한 결과와 영향을 추정</td></tr><tr><td><strong>순위결정법</strong></td><td>위험요소별 손실을 비교해 상대적 우선순위를 결정</td></tr><tr><td><strong>Fuzzy 행렬법</strong></td><td>자산·위협·보호대책 등의 위험요소를 언어적 척도와 소속함수로 표현하고 계산</td></tr></tbody></table></div>`
          },
          {
            id: "section40-summary", title: "SECTION 40 핵심 흐름",
            content: `<div class="important-box"><span class="box-title">전체 흐름</span><p><strong>보안정책 → 위험관리 → 자산·위협·취약점·보호대책 식별 → 기준선/비정형/상세/통합 접근법 선택 → 자산·위협·취약점·대응책 분석 → DoA 기준 위험평가 → 잔류위험 평가 → 수용·감소·전가·회피 → 정량·정성 분석</strong></p></div><div class="table-scroll"><table class="concept-table"><thead><tr><th>문제 키워드</th><th>정답</th></tr></thead><tbody><tr><td>보호대책 적용 전 조직이 직면한 위험</td><td>전체 위험</td></tr><tr><td>보호대책 적용 후 남은 위험</td><td>잔여 위험</td></tr><tr><td>고위험은 상세분석, 나머지는 기준선</td><td>통합 접근법</td></tr><tr><td>수용 가능한 목표 위험수준</td><td>DoA</td></tr><tr><td>제3자와 책임·비용 공유</td><td>위험 전가</td></tr><tr><td>사업·Process를 중단하여 원인 제거</td><td>위험 회피</td></tr><tr><td>한 번의 사고 예상손실</td><td>SLE</td></tr><tr><td>연간 예상손실</td><td>ALE</td></tr><tr><td>전문가의 익명 의견을 반복 조정</td><td>Delphi법</td></tr></tbody></table></div>`
          }
        ],
        content: ""
      },
      {
        id: "section-41",
        number: 41,
        title: "BCP/DRP",
        subtopics: [
          {
            id: "bcp-drp-overview", title: "BCP/DRP 개요",
            content: `<p><strong>BCP/DRP</strong>는 재해·장애로 핵심 업무와 정보시스템이 중단되더라도 조직이 정해진 수준 안에서 업무를 계속하거나 신속히 복구하기 위한 계획입니다.</p><div class="important-box"><span class="box-title">학습 흐름</span><p><strong>BCP와 DRP 구분 → BIA → 복구전략·복구 사이트 → 가용성·백업·RAID → RPO·RTO·WRT·MTD → 테스트와 유지보수</strong></p></div>`
          },
          {
            id: "bcp-overview", title: "업무 연속성 계획(BCP)",
            content: `<p><strong>BCP(Business Continuity Planning)</strong>는 정보기술 부문뿐 아니라 인력·설비·자금 등 조직의 모든 자원을 대상으로, 장애나 재해가 발생해도 조직의 생존과 핵심 업무의 연속성을 보장하기 위한 예방·복구 계획입니다.</p><p>어떤 업무가 핵심이고 그 업무를 언제까지, 누구와 어떤 자원으로, 어느 수준까지 복구해야 하는지를 구체적으로 결정합니다.</p>`
          },
          {
            id: "business-impact-analysis", title: "업무 영향 분석(BIA)",
            content: `<p><strong>BIA(Business Impact Analysis)</strong>는 업무 중단이 조직에 미치는 영향을 분석하여 핵심 업무, 복구 우선순위와 목표를 정하는 과정입니다.</p><ul><li>주요·핵심 업무 Process 식별</li><li>재해 유형과 발생 가능성, 업무중단 지속시간 평가</li><li>Process별 중요도와 중단에 따른 업무·재정적 손실 평가</li><li>복구 우선순위와 복구대상 범위 결정</li><li>재해 발생 시 복원시간과 업무별 우선순위 설정</li></ul>`
          },
          {
            id: "bcp-five-steps", title: "BCP 수립 5단계",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>단계</th><th>핵심 내용</th></tr></thead><tbody><tr><td><strong>1. Project 범위 설정·기획</strong></td><td>BCP 개발의 방향·범위, 조직·시간·인원 정의</td></tr><tr><td><strong>2. BIA</strong></td><td>개별 업무를 식별하고 우선순위·복구목표 시간과 수준, 중단 시 재정적 손실 평가</td></tr><tr><td><strong>3. 복구전략 개발</strong></td><td>BIA 정보를 바탕으로 복구자원·대안 평가와 예상비용 산정</td></tr><tr><td><strong>4. 복구계획 수립</strong></td><td>실제 복구절차를 명시적인 문서로 작성</td></tr><tr><td><strong>5. 수행·Test·유지보수</strong></td><td>계획을 시행하고 향후 Test와 유지보수 관리절차 수립</td></tr></tbody></table></div><div class="important-box"><span class="box-title">암기</span><p><strong>범위·기획 → BIA → 복구전략 → 복구계획 → 수행·Test·유지보수</strong></p></div>`
          },
          {
            id: "bcp-scope-planning", title: "1단계: 범위 설정 및 기획",
            content: `<p>경영진의 지원 아래 BCP Project의 목적과 범위를 정하고 책임자·조직·일정·예산·인원을 정의합니다. 전사 업무와 정보자산의 범위를 분명히 해야 뒤 단계의 누락과 중복을 줄일 수 있습니다.</p>`
          },
          {
            id: "bcp-bia-phase", title: "2단계: 사업영향평가(BIA)",
            content: `<p>업무 단위별 중단 영향을 조사하고 핵심 Process의 의존자원, 허용 가능한 중단시간과 복구 우선순위를 결정합니다. 이 결과는 복구 사이트·백업·인력·비용을 선택하는 기준이 됩니다.</p>`
          },
          {
            id: "bcp-recovery-strategy-phase", title: "3단계: 복구전략 개발",
            content: `<p>BIA에서 수집한 정보를 바탕으로 대체 업무공간, 정보시스템, Network, 인력, Data와 공급망의 복구대안을 비교합니다. 각 대안의 복구성능과 구축·운영비용을 평가하여 목표시간을 충족할 전략을 선택합니다.</p>`
          },
          {
            id: "bcp-plan-development", title: "4단계: 복구계획 수립",
            content: `<p>재해선언, 비상연락, 초기대응, 업무전환, System 복구, 정상복귀와 사후보고 절차를 문서화합니다. 담당자·대체자·연락처·필요자원·의사결정 권한과 단계별 Check List를 명확히 기록합니다.</p>`
          },
          {
            id: "bcp-implementation-maintenance", title: "5단계: 수행·테스트·유지보수",
            content: `<p>계획의 실제 수행 가능성을 정기적으로 Test하고 발견된 문제를 수정합니다. 조직·업무·System·외부 공급자가 바뀔 때 문서를 갱신하고 교육과 훈련을 반복해야 BCP가 실효성을 유지합니다.</p>`
          },
          {
            id: "drp-overview", title: "재난 복구 계획(DRP)",
            content: `<p><strong>DRP(Disaster Recovery Planning)</strong>는 장기간 재해로 시설 접근이 불가능하거나 정보시스템이 중단된 상황에 대비하여 대체 Site에서 System·Application·Computer 설비와 Data를 복구하고 IT 운영을 재개하기 위한 기술 중심 계획입니다.</p><p>자연재해·화재·대규모 정전·시설폐쇄처럼 장기간 영향을 주는 사건을 주로 다루며, 단순한 개별 Application 오류 같은 일상적 운영장애 처리와는 범위가 다릅니다.</p>`
          },
          {
            id: "bcp-drp-comparison", title: "BCP와 DRP 비교",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>BCP</th><th>DRP</th></tr></thead><tbody><tr><td><strong>목적</strong></td><td>조직의 핵심 업무 연속성과 생존 보장</td><td>재해 후 IT 시설·System·Data 복구</td></tr><tr><td><strong>범위</strong></td><td>인력·업무·시설·자금·공급자·IT 등 전사</td><td>정보시스템과 기술 인프라 중심</td></tr><tr><td><strong>관계</strong></td><td>업무연속성을 위한 상위의 포괄적 계획</td><td>BCP를 지원하는 기술적 복구계획</td></tr></tbody></table></div>`
          },
          {
            id: "bcm-overview", title: "업무 연속성 관리(BCM)",
            content: `<p><strong>BCM(Business Continuity Management)</strong>은 조직의 위협과 업무중단 영향을 파악하고, 이해관계자의 이익과 조직의 명성·가치를 보호하면서 핵심 업무를 계속할 수 있도록 대응체계를 수립·운영·검토·개선하는 관리 Process입니다.</p><div class="table-scroll"><table class="concept-table"><thead><tr><th>단계</th><th>내용</th></tr></thead><tbody><tr><td><strong>계획</strong></td><td>업무연속성 관리에 필요한 통제와 절차 수립</td></tr><tr><td><strong>운영</strong></td><td>업무연속성 Process 실행·운영</td></tr><tr><td><strong>검토·개선</strong></td><td>목표 대비 성과를 점검하고 경영진에 보고하여 교정·예방조치 수행</td></tr></tbody></table></div>`
          },
          {
            id: "recovery-strategy-overview", title: "복구전략 개요",
            content: `<p>복구전략은 BIA에서 식별한 위험에 대응하기 위한 복구 구성과 효율성, 비용효과적인 복구 Mechanism을 결정하는 단계입니다. 업무의 허용 중단시간과 Data 손실범위에 맞춰 Site·장비·Software·Network·인력·백업 방식을 조합합니다.</p>`
          },
          {
            id: "recovery-site-tradeoff", title: "2차 사이트 선택 기준",
            content: `<p>재해복구 Site는 일반적으로 <strong>복구가 빠르고 준비수준이 높을수록 구축·유지비용과 운영 복잡도가 커집니다.</strong></p><div class="important-box"><span class="box-title">관계</span><p><strong>Cold → Warm → Hot → Mirror</strong> 순으로 구축비용·운영준비도는 높아지고 재해복구 시간은 짧아집니다.</p></div>`
          },
          {
            id: "mirror-site", title: "미러 사이트(Mirror Site)",
            content: `<p><strong>Mirror Site</strong>는 주 Center와 동일한 수준의 자원을 별도 장소에 구축하고 Data와 상태를 실시간 동기화하는 방식입니다. 재해 시 즉시 또는 거의 즉시 전환할 수 있어 RTO가 가장 짧고 Data 최신성이 높습니다.</p><ul><li><strong>장점:</strong> 높은 온전성·가용성, 신속한 업무재개</li><li><strong>단점:</strong> 초기 구축비와 유지관리비가 가장 높고 운영·전환구조가 복잡함</li></ul>`
          },
          {
            id: "hot-site", title: "핫 사이트(Hot Site)",
            content: `<p><strong>Hot Site</strong>는 주 Center와 동일하거나 유사한 System·Network·Application 환경을 Standby 상태로 유지하는 방식입니다. 재해 시 최신 Data를 적용하고 짧은 시간 안에 운영을 시작할 수 있습니다.</p><ul><li>DB·Application 등 Data를 정기적 또는 빈번하게 갱신</li><li>초기투자·유지비가 크지만 복구시간은 수시간 수준으로 짧음</li></ul>`
          },
          {
            id: "warm-site", title: "웜 사이트(Warm Site)",
            content: `<p><strong>Warm Site</strong>는 핵심 장비와 기본 운영환경은 준비하지만 최신 Data와 모든 부가자원까지 실시간으로 갖추지는 않은 중간 수준의 Site입니다. 재해 발생 후 Backup을 복원하고 추가설정·시험을 거쳐야 하므로 완전복구까지 수일이 걸릴 수 있습니다.</p><p>Hot Site보다 저렴하지만 복구시간과 Data 손실 가능성은 더 큽니다.</p>`
          },
          {
            id: "cold-site", title: "콜드 사이트(Cold Site)",
            content: `<p><strong>Cold Site</strong>는 Data를 원격지에 보관하고 전력·통신·공간 같은 최소 환경만 확보한 방식입니다. 재해 후 장비와 Software를 조달·설치하고 Backup Data를 복구해야 합니다.</p><ul><li><strong>장점:</strong> 구축·유지비용이 가장 낮음</li><li><strong>단점:</strong> 복구에 수주 이상 걸릴 수 있고 신뢰성과 Test 준비도가 낮음</li></ul>`
          },
          {
            id: "recovery-site-comparison", title: "재해복구 사이트 비교",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>유형</th><th>Data·설비 준비</th><th>RTO 경향</th><th>비용</th><th>특징</th></tr></thead><tbody><tr><td><strong>Mirror</strong></td><td>동일자원·실시간 동기화</td><td>즉시</td><td>최고</td><td>높은 가용성·최신 Data</td></tr><tr><td><strong>Hot</strong></td><td>운영설비 준비·빈번한 Data 갱신</td><td>수시간</td><td>높음</td><td>신속한 전환 가능</td></tr><tr><td><strong>Warm</strong></td><td>핵심설비 준비·Backup 복원 필요</td><td>수일</td><td>중간</td><td>비용과 복구시간의 절충</td></tr><tr><td><strong>Cold</strong></td><td>장소·기본설비 중심</td><td>수주 이상</td><td>낮음</td><td>장비조달·설치부터 수행</td></tr></tbody></table></div>`
          },
          {
            id: "tertiary-site", title: "제3의 사이트(Tertiary Site)",
            content: `<p><strong>Tertiary Site</strong>는 BIA에서 필요할 때 이용할 수 없는 백업시설의 위험을 고려하여 구축하는 추가 백업 Site입니다. 주 백업 Site까지 가동하지 못하는 상황에 대비하므로 <strong>백업을 위한 백업</strong>이라고도 합니다.</p>`
          },
          {
            id: "mutual-aid-agreement", title: "상호 지원계약(Mutual Aid Agreement)",
            content: `<p>유사한 장비·환경을 가진 두 조직이 재난 시 서로의 시설과 자원을 제공하기로 체결하는 상호협정입니다.</p><ul><li><strong>장점:</strong> 별도 복구 Site보다 저렴하고 특정 장비 장애의 대안이 될 수 있음</li><li><strong>단점:</strong> 보안·운영통제 문제, 계약 강제의 어려움, 양쪽이 동시에 피해를 입거나 업무량·장비구성이 변하면 지원이 부족할 수 있음</li></ul>`
          },
          {
            id: "hardware-software-backup", title: "하드웨어 및 소프트웨어 백업",
            content: `<p>핵심 장비는 목표 복구시간 안에 대체·복구할 수 있도록 예비장비, 유지보수 계약과 Off-site 전략을 마련합니다. 재해가 주 Center 전체에 영향을 줄 수 있으므로 중요 Backup과 장비는 동일 위험지역 밖에 두는 것이 원칙입니다.</p><p>복구 Site 서비스 수준은 SLA로 명시하며 목표 가용성, 복구시간, 지원범위와 책임을 확인합니다.</p>`
          },
          {
            id: "reliability-metrics", title: "MTBF·MTTF·MTTR",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>지표</th><th>의미</th><th>대표 계산</th></tr></thead><tbody><tr><td><strong>MTBF</strong><br>Mean Time Between Failure</td><td>수리 가능한 장비의 평균 고장 간격</td><td>총 정상운영시간 ÷ 고장횟수</td></tr><tr><td><strong>MTTF</strong><br>Mean Time To Failure</td><td>장비가 고장날 때까지의 평균 동작시간</td><td>총 동작시간 ÷ 고장횟수</td></tr><tr><td><strong>MTTR</strong><br>Mean Time To Repair</td><td>고장 후 수리·복구에 걸리는 평균시간</td><td>총 수리시간 ÷ 수리횟수</td></tr></tbody></table></div><p><strong>MTBF·MTTF는 클수록, MTTR은 작을수록</strong> 신뢰성과 가용성이 높습니다.</p>`
          },
          {
            id: "availability-sla", title: "가용성과 SLA",
            content: `<p>수리 가능한 System의 대표적인 가용성 계산식은 다음과 같습니다.</p><div class="important-box"><span class="box-title">가용성</span><p><strong>Availability = MTBF ÷ (MTBF + MTTR)</strong></p></div><p>가용성을 SLA 기준으로 정할 때 계획정지 포함 여부와 측정기간·측정지점을 명확히 해야 합니다. Off-site를 제공받는 경우에도 목표 가용성과 복구지원 수준을 계약으로 확인합니다.</p>`
          },
          {
            id: "software-backup", title: "소프트웨어 백업",
            content: `<p>기업은 Mission-Critical 업무에 필요한 운영체제, Application, 설정, License와 설치자료의 목록을 관리하고 복구 가능한 형태로 보관해야 합니다. 중요 Software와 Backup 사본은 최소 2개 이상 준비하고 그중 하나는 주 Site와 다른 안전한 Off-site에 보관합니다.</p>`
          },
          {
            id: "raid-overview", title: "RAID 개요",
            content: `<p><strong>RAID(Redundant Array of Independent Disks)</strong>는 여러 개의 물리 Disk를 하나의 논리적 Array로 구성하여 Data를 분산·중복 저장하는 기술입니다. Level에 따라 Striping, Mirroring, ECC와 Parity를 조합합니다.</p><p>RAID는 Disk 장애에 대한 가용성을 높이지만 삭제·변조·Ransomware·화재까지 막는 Backup은 아니므로 별도의 Data Backup이 필요합니다.</p>`
          },
          {
            id: "raid-purpose", title: "RAID의 목적",
            content: `<ul><li>저용량·저성능 Disk 여러 개를 조합해 고용량·고성능·고가용성 Storage 구성</li><li>Data 중복저장과 오류검증으로 결함 허용성 향상</li><li>Disk I/O를 분산해 읽기·쓰기 성능 개선</li></ul>`
          },
          {
            id: "raid-level-0", title: "RAID 0: Striping",
            content: `<p><strong>RAID 0</strong>은 Data를 Block 단위로 여러 Disk에 나누어 저장하는 Striping 방식입니다. 입출력 성능과 사용 가능한 용량은 높지만 중복정보가 없어 <strong>Fault Tolerance를 제공하지 않습니다.</strong> 한 Disk만 고장 나도 전체 Array의 Data를 사용할 수 없습니다.</p>`
          },
          {
            id: "raid-level-1", title: "RAID 1: Mirroring",
            content: `<p><strong>RAID 1</strong>은 같은 Data를 두 개 이상의 Disk에 동시에 저장하는 Mirroring 방식입니다. 한 Disk에 장애가 발생해도 복제 Disk로 운영할 수 있어 복구가 단순하지만, 동일한 Data를 중복 저장하므로 실제 사용용량은 줄어듭니다.</p>`
          },
          {
            id: "raid-level-2", title: "RAID 2: Hamming Code ECC",
            content: `<p><strong>RAID 2</strong>는 Data를 Bit 단위로 Striping하고 오류 식별·수정을 위한 <strong>Hamming Code 기반 ECC</strong>를 별도 Disk에 함께 저장합니다. 모든 Disk가 동기적으로 동작하며 현대 Storage에서는 거의 사용되지 않습니다.</p>`
          },
          {
            id: "raid-level-3", title: "RAID 3: Byte-level Parity",
            content: `<p><strong>RAID 3</strong>은 Data를 Byte 단위로 여러 Disk에 분산하고 Parity를 전용 Disk에 저장합니다. 대용량 연속전송에는 유리하지만 모든 작업에 여러 Disk가 함께 참여하고 Parity Disk가 병목점이 될 수 있습니다.</p>`
          },
          {
            id: "raid-level-4", title: "RAID 4: Block-level Parity",
            content: `<p><strong>RAID 4</strong>는 RAID 3과 동일한 구조이지만 Data를 Block 단위로 분산하고 Parity는 전용 Disk에 저장합니다. 서로 다른 Data Disk를 독립적으로 읽을 수 있으나 쓰기 작업이 Parity Disk에 집중되어 성능이 떨어질 수 있습니다.</p>`
          },
          {
            id: "raid-level-5", title: "RAID 5: Distributed Parity",
            content: `<p><strong>RAID 5</strong>는 Data와 Parity를 Block 단위로 모든 Disk에 분산하여 저장합니다. 전용 Parity Disk가 필요하지 않아 RAID 3·4의 병목을 줄이고, 한 Disk 장애에도 Parity로 Data를 재구성할 수 있습니다.</p>`
          },
          {
            id: "nested-raid", title: "RAID 0+1과 RAID 1+0",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>구조</th><th>장애 특성</th></tr></thead><tbody><tr><td><strong>RAID 0+1</strong></td><td>Striping한 묶음을 다시 Mirroring</td><td>Disk 하나가 고장 나면 해당 Stripe 묶음 전체를 잃은 것으로 처리하여 추가장애 허용범위가 좁음</td></tr><tr><td><strong>RAID 1+0</strong></td><td>Mirroring한 Disk 쌍들을 Striping</td><td>같은 Mirror 쌍의 두 Disk가 함께 고장 나지 않으면 여러 Disk 장애도 견딜 수 있어 일반적으로 더 유리</td></tr></tbody></table></div>`
          },
          {
            id: "raid-level-comparison", title: "RAID Level 핵심 비교",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>Level</th><th>핵심 방식</th><th>결함 허용</th></tr></thead><tbody><tr><td><strong>0</strong></td><td>Block Striping</td><td>없음</td></tr><tr><td><strong>1</strong></td><td>Mirroring</td><td>복제본으로 복구</td></tr><tr><td><strong>2</strong></td><td>Bit Striping + Hamming ECC</td><td>ECC Disk 사용</td></tr><tr><td><strong>3</strong></td><td>Byte Striping + 전용 Parity</td><td>1 Disk 장애</td></tr><tr><td><strong>4</strong></td><td>Block Striping + 전용 Parity</td><td>1 Disk 장애</td></tr><tr><td><strong>5</strong></td><td>Block Striping + 분산 Parity</td><td>1 Disk 장애</td></tr></tbody></table></div>`
          },
          {
            id: "data-backup-types", title: "데이터 백업의 유형",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>백업 대상</th><th>복구 방식</th></tr></thead><tbody><tr><td><strong>전체 백업(Full)</strong></td><td>선택한 모든 Data</td><td>가장 최근 Full Backup 하나로 복구</td></tr><tr><td><strong>차등 백업(Differential)</strong></td><td>마지막 Full Backup 이후 변경된 모든 Data</td><td>Full + 가장 최근 Differential</td></tr><tr><td><strong>증분 백업(Incremental)</strong></td><td>마지막 Backup 이후 변경된 Data</td><td>Full + 이후의 모든 Incremental을 순서대로 적용</td></tr></tbody></table></div>`
          },
          {
            id: "backup-method-selection", title: "백업 방법 선택 시 고려사항",
            content: `<ul><li>Full Backup은 시간·저장공간을 많이 쓰지만 복구가 가장 단순합니다.</li><li>Differential은 날짜가 지날수록 Backup량이 커지지만 복구는 Full과 최신 Differential만 필요합니다.</li><li>Incremental은 Backup량과 시간이 가장 적지만 복구 시 여러 증분본을 순서대로 적용해야 하므로 복잡하고 오래 걸립니다.</li></ul><p>업무의 RPO·RTO, Data 변경량, 저장비용과 복구훈련 결과를 함께 고려하여 주기와 방식을 선택합니다.</p>`
          },
          {
            id: "disaster-recovery-timeline", title: "재해 대응 및 복구 Timeline",
            content: `<p>재해 이전의 정상운영부터 사고발생, 복구, 업무정상화까지를 시간축으로 보면 각 복구목표의 관계를 쉽게 이해할 수 있습니다.</p><div class="important-box"><span class="box-title">시간 관계</span><p><strong>Data 기준점 ─ RPO ─ 사고발생 ─ RTO ─ System 복구 ─ WRT ─ 업무 정상화</strong><br><strong>MTD = RTO + WRT</strong></p></div>`
          },
          {
            id: "rpo-definition", title: "RPO(Recovery Point Objective)",
            content: `<p><strong>RPO</strong>는 재해로 Data가 손실되었을 때 어느 시점의 Data까지 복구할 것인지 정하는 <strong>복구 목표시점</strong>입니다. 시간으로 표현하며 허용 가능한 최대 Data 손실량을 뜻합니다.</p><p>RPO가 짧을수록 더 자주 Backup하거나 실시간 복제가 필요합니다.</p>`
          },
          {
            id: "rto-rp-definition", title: "RTO와 RP",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>용어</th><th>의미</th></tr></thead><tbody><tr><td><strong>RTO</strong><br>Recovery Time Objective</td><td>재해 후 Service·System이 목표 수준으로 복구되어야 하는 최대 목표시간. MTD보다 짧아야 함</td></tr><tr><td><strong>RP</strong><br>Recovery Processing</td><td>실제로 업무기능을 복구하는 데 걸리는 복구처리 기간</td></tr></tbody></table></div><p>RTO는 조직이 정한 <strong>목표</strong>이고, 실제 수행시간을 측정해 목표 충족여부를 확인합니다.</p>`
          },
          {
            id: "wrt-mtd-definition", title: "WRT와 MTD",
            content: `<p><strong>WRT(Work Recovery Time)</strong>는 IT System이 복구된 뒤 Data 확인, 업무 Process 재개와 정상 서비스 수준 회복까지 필요한 시간입니다.</p><p><strong>MTD(Maximum Tolerable Downtime)</strong>는 조직이 감내할 수 있는 최대 업무중단시간이며 <strong>MTD = RTO + WRT</strong> 관계로 정리합니다.</p><div class="important-box"><span class="box-title">시험 핵심</span><p><strong>복구할 Data 시점 = RPO / System 복구 목표시간 = RTO / 업무 정상화 추가시간 = WRT / 최대 허용중단 = MTD</strong></p></div>`
          },
          {
            id: "bcp-drp-test-types", title: "BCP/DRP 테스트 종류",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>종류</th><th>수행 방식·특징</th></tr></thead><tbody><tr><td><strong>Check List</strong></td><td>각 부서가 BCP 문서를 Check List로 검토·점검하는 문서 Test</td></tr><tr><td><strong>구조적 Walk-through</strong></td><td>각 기능 대표자가 회의에서 Scenario와 절차를 단계별 검토하고 구조적인 의사결정에 따라 확인</td></tr><tr><td><strong>Simulation</strong></td><td>가상재해를 설정하고 2차 Site로 재배치하는 과정까지 수행하지만 실제 정보처리는 하지 않음</td></tr><tr><td><strong>병행 Test</strong></td><td>1차와 2차 Site에서 업무를 동시에 병행처리하여 결과 비교</td></tr><tr><td><strong>완전중단 Test</strong></td><td>1차 Site 운영을 실제로 중단하고 2차 Site에서 업무처리. 가장 현실적이지만 위험이 커 사고대비 복구계획이 필수</td></tr></tbody></table></div>`
          },
          {
            id: "bcp-drp-test-considerations", title: "테스트 시 고려사항",
            content: `<ul><li>Test 일정과 영향을 반드시 사전에 공지합니다.</li><li>핵심 인력을 포함한 관련 직원이 참여하도록 합니다.</li><li>실제 업무에 큰 피해가 없도록 업무 폭주시간대를 피합니다.</li><li>Test 결과, 문제점, 복구시간과 개선조치를 기록하고 계획을 수정합니다.</li></ul>`
          },
          {
            id: "bcp-training-maintenance", title: "교육·훈련과 지속적 개선",
            content: `<p>BCP/DRP는 문서 작성으로 끝나지 않습니다. 담당자와 대체인력을 교육하고 연락망·자원목록·복구절차를 정기적으로 점검해야 합니다. 조직개편, 신규 System 도입, Site 이전, 공급자와 법규 변경이 있으면 BIA와 복구계획을 함께 갱신합니다.</p>`
          },
          {
            id: "section41-summary", title: "SECTION 41 핵심 흐름",
            content: `<div class="important-box"><span class="box-title">전체 흐름</span><p><strong>BCP 업무연속성 → DRP IT 재해복구 → 범위·기획 → BIA → 복구전략 → 복구계획 → 수행·Test·유지보수 → Mirror·Hot·Warm·Cold → MTBF·MTTF·MTTR·가용성 → RAID·Data Backup → RPO·RTO·WRT·MTD → Check List·Walk-through·Simulation·병행·완전중단 Test</strong></p></div><div class="table-scroll"><table class="concept-table"><thead><tr><th>문제 키워드</th><th>정답</th></tr></thead><tbody><tr><td>업무중단 영향과 복구 우선순위 분석</td><td>BIA</td></tr><tr><td>실시간 동기화·즉시 전환</td><td>Mirror Site</td></tr><tr><td>장소·기본설비만 확보</td><td>Cold Site</td></tr><tr><td>평균 고장 간격</td><td>MTBF</td></tr><tr><td>분산 Parity</td><td>RAID 5</td></tr><tr><td>마지막 Full 이후의 모든 변경</td><td>Differential Backup</td></tr><tr><td>허용 가능한 Data 손실시점</td><td>RPO</td></tr><tr><td>System 복구 목표시간</td><td>RTO</td></tr><tr><td>최대 업무중단시간</td><td>MTD = RTO + WRT</td></tr></tbody></table></div>`
          }
        ],
        content: ""
      },
      {
        id: "section-42",
        number: 42,
        title: "정보보호 인증제도",
        subtopics: [
          {
            id: "security-product-evaluation", title: "보안제품 평가 방법",
            content: `<p><strong>보안제품 평가</strong>는 제품·시스템이 주장하는 보안기능과 보증수준을 공통 기준에 따라 확인하는 과정입니다. 평가결과는 서로 다른 제품의 보안성을 비교하고 도입 위험을 줄이는 근거가 됩니다.</p><div class="table-scroll"><table class="concept-table"><thead><tr><th>평가 방법</th><th>핵심 내용</th></tr></thead><tbody><tr><td><strong>보증 평가<br>Assurance Evaluation</strong></td><td>소스코드, TCB, 접근통제 Architecture, 감사·참조모니터·보안 Kernel, 보호 Mechanism 등 설계·구현의 증거를 검사</td></tr><tr><td><strong>침투 평가<br>Penetration Evaluation</strong></td><td>표준화된 공격기법으로 기능을 시험·측정하여 식별·인증·접근제어 등 보안요소의 견고성과 침투 가능성을 확인</td></tr></tbody></table></div>`
          },
          {
            id: "evaluation-criteria-history", title: "보안제품 평가기준의 발전",
            content: `<p>국가·지역마다 달랐던 기준을 통합하기 위해 미국의 <strong>TCSEC</strong>, 유럽의 <strong>ITSEC</strong>, 캐나다의 <strong>CTCPEC</strong> 등이 사용되었고, 이후 국제 공통기준인 <strong>CC(Common Criteria)</strong>로 통합되었습니다.</p><div class="table-scroll"><table class="concept-table"><thead><tr><th>기준</th><th>지역·기관</th><th>특징</th></tr></thead><tbody><tr><td><strong>TCSEC</strong></td><td>미국 NCSC</td><td>D·C1·C2·B1·B2·B3·A1 등급, 기밀성 중심</td></tr><tr><td><strong>ITSEC</strong></td><td>영국·독일·프랑스·네덜란드</td><td>기능성과 보증수준을 분리, E0~E6</td></tr><tr><td><strong>CC</strong></td><td>국제표준 ISO/IEC 15408</td><td>SFR·SAR와 EAL1~EAL7 사용</td></tr></tbody></table></div>`
          },
          {
            id: "tcsec-overview", title: "TCSEC 개요",
            content: `<p><strong>TCSEC(Trusted Computer System Evaluation Criteria)</strong>는 미국 국방부의 컴퓨터 보안 평가기준으로, 표지 색 때문에 <strong>Orange Book</strong>이라고도 합니다. Rainbow Series 가운데 하나이며 1983년 공개되어 1985년 정식 표준이 되었습니다.</p><p>TCB, Reference Monitor, Security Kernel 개념을 바탕으로 보안기능과 보증요구사항을 등급화하고, 이 기준에 맞춰 개발된 제품의 보안성을 평가합니다.</p>`
          },
          {
            id: "tcsec-level-structure", title: "TCSEC 등급 구조",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>분류</th><th>등급</th><th>의미</th></tr></thead><tbody><tr><td><strong>D</strong></td><td>D</td><td>최소 보호</td></tr><tr><td><strong>C</strong></td><td>C1, C2</td><td>임의적 보호·통제된 접근 보호</td></tr><tr><td><strong>B</strong></td><td>B1, B2, B3</td><td>강제적 접근통제와 보안 Label, 구조화·보안영역</td></tr><tr><td><strong>A</strong></td><td>A1</td><td>검증된 설계</td></tr></tbody></table></div><p>보호수준은 <strong>D → C1 → C2 → B1 → B2 → B3 → A1</strong> 순으로 높아집니다.</p>`
          },
          {
            id: "tcsec-d-c-levels", title: "TCSEC D·C 등급",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>등급</th><th>명칭</th><th>핵심 요구사항</th></tr></thead><tbody><tr><td><strong>D</strong></td><td>Minimal Protection</td><td>평가등급을 충족하지 못한 최소 보호수준</td></tr><tr><td><strong>C1</strong></td><td>Discretionary Security Protection</td><td>사용자 간 정보 침범 방지, 소유자가 객체 접근권한을 결정하는 DAC</td></tr><tr><td><strong>C2</strong></td><td>Controlled Access Protection</td><td>C1 + 개별 Login, 사용자의 행위 추적이 가능한 감사·책임추적성, 객체 재사용 보호 강화</td></tr></tbody></table></div>`
          },
          {
            id: "tcsec-b-levels", title: "TCSEC B 등급",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>등급</th><th>명칭</th><th>핵심 요구사항</th></tr></thead><tbody><tr><td><strong>B1</strong></td><td>Labeled Security Protection</td><td>주체·객체에 보안 Label 부여, 명확한 등급과 MAC 적용</td></tr><tr><td><strong>B2</strong></td><td>Structured Protection</td><td>명확한 보안정책 Model, 구조화된 TCB, Covert Channel 분석과 강화된 감시</td></tr><tr><td><strong>B3</strong></td><td>Security Domains</td><td>보안에 불필요한 부분을 최소화하고 높은 내침투성·감사·관리기능을 갖춘 보안영역</td></tr></tbody></table></div>`
          },
          {
            id: "tcsec-a1-level", title: "TCSEC A1 검증된 설계",
            content: `<p><strong>A1(Verified Design)</strong>은 B3의 기능을 포함하면서 설계와 구현의 대응관계를 <strong>형식적 방법</strong>으로 검증하고, 개발·배포과정의 형상관리를 강화한 최고 보증등급입니다. 보안기능의 추가보다 B3 설계가 정확히 구현되었음을 엄밀하게 증명하는 데 초점이 있습니다.</p>`
          },
          {
            id: "tcsec-cumulative-rules", title: "TCSEC 등급 적용 원칙",
            content: `<ul><li>등급은 각각 독립적인 점수가 아니라 아래 등급의 요구사항을 포함하는 <strong>누적 구조</strong>입니다.</li><li>상위 등급은 자신의 수준에 해당하는 보증요구를 모두 충족해야 합니다.</li><li>기능이 특정 등급에 해당하더라도 보증요구를 충족하지 못하면 더 낮은 등급으로 평가됩니다.</li></ul>`
          },
          {
            id: "tcsec-limitations", title: "TCSEC의 문제점",
            content: `<ul><li>군사용 컴퓨터의 요구사항과 기대수준을 중심으로 하여 상업환경에 그대로 적용하기 어렵습니다.</li><li>운영체제 위주여서 Network·Database 같은 분야를 충분히 다루지 못합니다.</li><li>보안의 세 속성 중 <strong>기밀성</strong>에 집중하고 무결성·가용성 요구가 약합니다.</li><li>정부·군 분류에는 적합하지만 민간 상업부문의 보호분류와는 맞지 않을 수 있습니다.</li><li>Standalone System 중심이라 Network System의 복합적인 보호문제를 충분히 설명하지 못합니다.</li></ul>`
          },
          {
            id: "trusted-network-interpretation", title: "Red Book과 TNI",
            content: `<p>TCSEC이 단일 System 보안에 치우친 한계를 보완하려고 <strong>TNI(Trusted Network Interpretation)</strong>가 제시되었습니다. 표지 색 때문에 <strong>Red Book</strong>이라 하며, Network와 그 구성요소의 보안요구를 다룹니다. LAN·WAN처럼 여러 System이 연결된 환경에 TCSEC 개념을 확장한 기준입니다.</p>`
          },
          {
            id: "itsec-overview", title: "ITSEC 개요",
            content: `<p><strong>ITSEC(Information Technology Security Evaluation Criteria)</strong>는 영국·독일·프랑스·네덜란드 등 유럽 국가의 평가기준을 통합한 기준입니다. 제품의 <strong>기능성</strong>과 그 기능이 올바르게 구현되었다는 <strong>보증수준</strong>을 분리하여 평가하며, 보증등급은 E0~E6으로 표현합니다.</p>`
          },
          {
            id: "tcsec-itsec-comparison", title: "TCSEC와 ITSEC 비교",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>TCSEC</th><th>ITSEC</th></tr></thead><tbody><tr><td><strong>평가 방식</strong></td><td>기능성과 보증요구를 등급 안에 결합</td><td>기능성과 보증수준을 분리</td></tr><tr><td><strong>중점</strong></td><td>기밀성·군사용 운영체제 중심</td><td>기밀성·무결성·가용성을 비교적 균형 있게 평가</td></tr><tr><td><strong>대상</strong></td><td>Standalone System 위주</td><td>Network System까지 폭넓게 적용</td></tr><tr><td><strong>유연성</strong></td><td>정해진 등급구조</td><td>제품별 기능요구와 보증수준 조합 가능</td></tr></tbody></table></div>`
          },
          {
            id: "cc-background", title: "공통평가기준(CC)의 등장 배경",
            content: `<p>서로 다른 지역기준 때문에 같은 제품이 국가마다 중복평가를 받아야 했고, 기능성과 보증성의 결합방식도 달랐습니다. ISO는 1990년 국제적으로 사용할 공통 평가기준의 필요성을 확인했고, TCSEC·ITSEC·CTCPEC 등 여러 기준의 장점을 결합하여 <strong>CC(Common Criteria)</strong>를 만들었습니다.</p>`
          },
          {
            id: "cc-overview", title: "CC(Common Criteria) 개요",
            content: `<p><strong>CC</strong>는 정보기술제품의 보안기능과 보증요구를 명세하고 평가하는 국제표준 <strong>ISO/IEC 15408</strong>입니다. 제품의 설계·개발·구현·운영과정에서 보안요구를 정의하고, 문서화된 증거와 시험을 통해 그 요구가 충족되는지 평가합니다.</p><p>보호하고 싶은 환경의 공통 요구는 <strong>PP</strong>, 실제 제품에 적용한 구체적 요구는 <strong>ST</strong>, 평가대상 제품은 <strong>TOE</strong>, 평가결과 보증수준은 <strong>EAL</strong>로 표현합니다.</p>`
          },
          {
            id: "cc-components", title: "CC의 구성요소",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>구성요소</th><th>의미</th></tr></thead><tbody><tr><td><strong>PP</strong><br>Protection Profile</td><td>특정 제품군·환경에서 공통으로 필요한 보안문제를 해결하기 위한 구현 독립적 요구사항</td></tr><tr><td><strong>ST</strong><br>Security Target</td><td>Vendor가 특정 TOE에 적용한 보안기능과 보증수단의 구체적 명세</td></tr><tr><td><strong>TOE</strong><br>Target of Evaluation</td><td>평가 대상이 되는 제품 또는 System</td></tr><tr><td><strong>SFR</strong><br>Security Functional Requirements</td><td>TOE가 제공해야 할 보안기능 요구사항</td></tr><tr><td><strong>SAR</strong><br>Security Assurance Requirements</td><td>그 기능이 올바르게 구현되었음을 보증하기 위한 요구사항</td></tr><tr><td><strong>EAL</strong><br>Evaluation Assurance Level</td><td>평가에서 부여하는 보증수준 EAL1~EAL7</td></tr></tbody></table></div>`
          },
          {
            id: "cc-eal-levels", title: "CC 등급별 보증수준(EAL)",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>등급</th><th>명칭</th><th>핵심</th></tr></thead><tbody><tr><td><strong>EAL1</strong></td><td>Functionally Tested</td><td>기능 시험</td></tr><tr><td><strong>EAL2</strong></td><td>Structurally Tested</td><td>구조적 시험, 개발자 시험자료와 독립시험</td></tr><tr><td><strong>EAL3</strong></td><td>Methodically Tested and Checked</td><td>방법론적 시험·검토와 개발과정 통제</td></tr><tr><td><strong>EAL4</strong></td><td>Methodically Designed, Tested and Reviewed</td><td>방법론적 설계·시험·검토</td></tr><tr><td><strong>EAL5</strong></td><td>Semiformally Designed and Tested</td><td>준정형적 설계·시험</td></tr><tr><td><strong>EAL6</strong></td><td>Semiformally Verified Design and Tested</td><td>준정형적 검증설계·시험, 높은 가치자산</td></tr><tr><td><strong>EAL7</strong></td><td>Formally Verified Design and Tested</td><td>정형적으로 검증된 설계·시험, 최고수준의 위험환경</td></tr></tbody></table></div>`
          },
          {
            id: "pp-st-comparison", title: "PP와 ST 비교",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>PP</th><th>ST</th></tr></thead><tbody><tr><td><strong>구현 독립성</strong></td><td>구현에 독립적</td><td>특정 제품에 종속</td></tr><tr><td><strong>적용 제품</strong></td><td>제품군에 범용 적용</td><td>하나의 TOE에 적용</td></tr><tr><td><strong>보호 요구</strong></td><td>동일 유형 제품의 공통 요구</td><td>해당 제품의 구체적 기능·보증수단</td></tr><tr><td><strong>표현</strong></td><td>What I want?</td><td>What I have?</td></tr></tbody></table></div><p>ST는 하나 이상의 PP를 만족하도록 작성할 수 있지만, PP를 인용하지 않고 제품 고유의 보안목표를 직접 정의할 수도 있습니다.</p>`
          },
          {
            id: "cc-documents", title: "CC 문서 구성",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>문서</th><th>내용</th></tr></thead><tbody><tr><td><strong>ISO/IEC 15408-1</strong></td><td>소개·일반모델: 평가원칙, TOE, 보안환경, PP·ST와 평가개념</td></tr><tr><td><strong>ISO/IEC 15408-2</strong></td><td>보안 기능 구성요소: SFR의 Class·Family·Component 계층</td></tr><tr><td><strong>ISO/IEC 15408-3</strong></td><td>보안 보증 구성요소: SAR와 EAL, PP·ST 평가기준</td></tr></tbody></table></div>`
          },
          {
            id: "ccra-overview", title: "국제상호인정협정(CCRA)",
            content: `<p><strong>CCRA(Common Criteria Recognition Arrangement)</strong>는 한 회원국에서 CC에 따라 평가·인증한 정보보호제품의 결과를 다른 회원국도 인정하는 협정입니다. 중복평가를 줄여 국제유통과 상호신뢰를 높입니다.</p><p>교재 기준으로 EAL1~EAL4 수준의 평가결과가 상호인정 범위에 들어가며, 인증기관은 인증서를 발급하고 평가기관의 활동을 감독합니다.</p>`
          },
          {
            id: "domestic-evaluation-standards", title: "국내 평가·인증과 등급 대응",
            content: `<p>국내에서는 국제 CC 평가기준을 수용하여 정보보호제품을 평가하고, 인증정책과 제도운영은 관계기관이 역할을 나누어 수행합니다. 과거 기준의 K1~K7은 각각 CC의 EAL1~EAL7과 대응하여 이해할 수 있습니다.</p><div class="important-box"><span class="box-title">등급 흐름</span><p><strong>CC EAL1~EAL7 ↔ 국내 K1~K7</strong><br>TCSEC은 D·C1·C2·B1·B2·B3·A1, ITSEC은 E0~E6 체계를 사용합니다.</p></div>`
          },
          {
            id: "isms-overview", title: "정보보호관리체계 인증 개요",
            content: `<p>조직이 스스로 수립·운영한 정보보호 관리체계는 내부 이해관계 때문에 객관적인 수준을 판단하기 어렵습니다. <strong>정보보호관리체계 인증</strong>은 독립된 외부기관이 정책·조직·위험관리·보호대책의 수립과 운영을 평가하여 일정수준 이상임을 인증하는 제도입니다.</p>`
          },
          {
            id: "bs7799-overview", title: "BS7799(ISO/IEC 17799)",
            content: `<p><strong>BS7799</strong>는 영국에서 제정된 정보보호 관리체계 표준으로, 조직이 체계적으로 정보보호를 운영하는지 평가·인증하기 위한 기반이 되었습니다. 국제적으로 널리 채택되며 <strong>ISO/IEC 17799</strong>로 발전했고 여러 국가의 관리체계 표준에 영향을 주었습니다.</p><ul><li><strong>Part 1</strong>: 최적 실무지침(Code of Practice)</li><li><strong>Part 2</strong>: 관리체계 수립·운영과 인증을 위한 요구사항</li></ul>`
          },
          {
            id: "bs7799-domains", title: "BS7799의 10개 관리영역",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>영역</th><th>핵심</th></tr></thead><tbody><tr><td>1. 보안정책</td><td>경영방침·정책 수립과 검토</td></tr><tr><td>2. 보안조직</td><td>책임·역할·외부접근 관리</td></tr><tr><td>3. 자산 분류·통제</td><td>자산목록·중요도·책임</td></tr><tr><td>4. 인적 보안</td><td>채용·교육·퇴직과 책임</td></tr><tr><td>5. 물리·환경 보안</td><td>보호구역·설비·출입통제</td></tr><tr><td>6. 통신·운영관리</td><td>절차·Network·매체·악성코드 대응</td></tr><tr><td>7. 접근통제</td><td>계정·권한·System 접근</td></tr><tr><td>8. 개발·유지보수</td><td>개발보안·암호·변경통제</td></tr><tr><td>9. 업무 연속성</td><td>BCP와 재해복구</td></tr><tr><td>10. 준거성</td><td>법·계약·정책 준수</td></tr></tbody></table></div>`
          },
          {
            id: "ismsp-overview", title: "ISMS-P 기본 개념",
            content: `<p><strong>ISMS-P(Personal Information & Information Security Management System)</strong>는 정보보호와 개인정보보호를 위한 조직의 관리체계가 인증기준에 적합한지를 심사하여 인증하는 제도입니다.</p><p>기존 <strong>ISMS</strong>와 <strong>PIMS</strong> 인증을 통합하여 2018년 11월부터 시행했습니다. 정보보호만 필요한 조직은 ISMS 인증을, 개인정보 처리까지 포함한 통합관리체계를 평가받으려면 ISMS-P 인증을 선택할 수 있습니다.</p>`
          },
          {
            id: "ismsp-legal-basis", title: "ISMS-P 근거와 인증 구분",
            content: `<p>ISMS-P는 정보보호 및 개인정보보호 관련 법령을 근거로 운영되며, 조직의 서비스 범위와 개인정보 처리여부에 따라 인증범위가 달라집니다.</p><div class="table-scroll"><table class="concept-table"><thead><tr><th>인증</th><th>평가 범위</th></tr></thead><tbody><tr><td><strong>ISMS</strong></td><td>관리체계 수립·운영 + 정보보호 보호대책</td></tr><tr><td><strong>ISMS-P</strong></td><td>ISMS 범위 + 개인정보 처리단계별 보호요구사항</td></tr></tbody></table></div>`
          },
          {
            id: "ismsp-criteria-structure", title: "ISMS-P 인증기준 구조",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>영역</th><th>인증기준 수</th><th>내용</th></tr></thead><tbody><tr><td><strong>1. 관리체계 수립·운영</strong></td><td>16개</td><td>기반 마련, 위험관리, 운영, 점검·개선</td></tr><tr><td><strong>2. 보호대책 요구사항</strong></td><td>64개</td><td>정책·조직·자산부터 재해복구까지 12개 분야</td></tr><tr><td><strong>3. 개인정보 처리단계 요구사항</strong></td><td>21개</td><td>수집·보유·이용·제공·파기·정보주체 권리</td></tr></tbody></table></div><div class="important-box"><span class="box-title">개수 암기</span><p><strong>16 + 64 + 21 = 총 101개 인증기준</strong><br>ISMS는 개인정보 처리단계 21개를 제외한 80개 기준을 적용합니다.</p></div>`
          },
          {
            id: "ismsp-management-cycle", title: "관리체계 수립·운영 4단계",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>단계</th><th>핵심 활동</th></tr></thead><tbody><tr><td><strong>1. 관리체계 기반 마련</strong></td><td>경영진 참여, 최고책임자 지정, 조직·범위·정책·자원</td></tr><tr><td><strong>2. 위험관리</strong></td><td>자산 식별, 현황·흐름분석, 위험평가, 보호대책 선정</td></tr><tr><td><strong>3. 관리체계 운영</strong></td><td>보호대책 구현, 공유, 운영현황 관리</td></tr><tr><td><strong>4. 점검 및 개선</strong></td><td>법적 요구사항 검토, 독립적 점검, 문제점 개선</td></tr></tbody></table></div><p>이 과정은 <strong>Plan → Do → Check → Act</strong>의 순환구조로 지속적으로 반복합니다.</p>`
          },
          {
            id: "management-foundation-leadership", title: "경영진 참여와 최고책임자 지정",
            content: `<ul><li>최고경영진은 관리체계 전반에 참여하고 중요한 정보보호·개인정보보호 의사결정을 지원해야 합니다.</li><li>경영진 참여를 입증할 수 있도록 보고·검토·승인 등 책임과 역할을 문서화합니다.</li><li>최고경영자는 정보보호 최고책임자와 개인정보보호 책임자를 공식 지정하고 조직 내에서 필요한 권한과 책임을 부여합니다.</li><li>최고책임자는 정기적으로 활동현황과 보호조치 결과를 경영진에게 보고합니다.</li></ul>`
          },
          {
            id: "management-foundation-organization", title: "조직 구성·범위 설정",
            content: `<p>효율적인 관리체계 운영을 위해 전담조직·위원회·실무조직의 역할과 책임을 정의하고 의사결정 체계를 마련합니다. 조직 규모와 업무특성을 반영하되 관련 부서가 참여할 수 있어야 합니다.</p><p>인증범위에는 조직의 핵심 Service와 개인정보 처리현황에 영향을 주는 업무·조직·자산·물리적 위치를 빠짐없이 포함하고, 제외항목은 사유와 책임자 승인을 기록합니다.</p>`
          },
          {
            id: "management-foundation-policy-resources", title: "정책 수립과 자원 할당",
            content: `<ul><li>상위 정책에서 지침·절차·Manual·Guide로 이어지는 정책체계를 수립하고 경영진 승인을 받아 조직과 관계자에게 전달합니다.</li><li>정책에는 경영진의 의지와 방향, 목적·범위, 적용근거, 수행조직·책임이 포함되어야 합니다.</li><li>관리체계를 효과적으로 운영할 전문인력·예산·시설 등 필요한 자원을 확보하고, 최고책임자는 연간계획을 수립해 추진결과를 평가합니다.</li></ul>`
          },
          {
            id: "risk-management-assets-status", title: "위험관리: 자산·현황 식별",
            content: `<ul><li>관리체계 범위의 정보자산을 빠짐없이 식별·분류하고 중요도와 책임자를 정해 최신상태로 관리합니다.</li><li>법적 요구사항과 업무에 미치는 영향을 고려하여 중요도를 산정하고 보안등급을 부여합니다.</li><li>정보서비스와 개인정보 처리현황, 업무절차·흐름을 분석해 문서화하고 최소 연 1회 이상 검토합니다.</li><li>수집·저장·이용·제공·파기 등 개인정보 흐름을 확인하여 경영진이 위험평가에 활용하도록 합니다.</li></ul>`
          },
          {
            id: "risk-assessment-control-selection", title: "위험평가와 보호대책 선정",
            content: `<p>조직의 대내외 환경에서 발생할 수 있는 위협정보를 수집하고, 조직에 맞는 위험평가 방법을 정해 최소 연 1회 평가합니다. 경영진은 수용 가능한 목표 위험수준을 정하고 이를 초과하는 위험을 식별해야 합니다.</p><p>평가결과를 바탕으로 우선순위를 정하고 위험처리전략과 보호대책을 선택합니다. 선택한 통제는 관리체계 전 영역에 일관되게 적용하며 최고책임자·경영진이 결과와 잔여위험을 이해하고 승인해야 합니다.</p>`
          },
          {
            id: "ismsp-operation", title: "관리체계 운영",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>활동</th><th>내용</th></tr></thead><tbody><tr><td><strong>보호대책 구현</strong></td><td>선정한 대책의 우선순위·일정·담당자·예산을 포함한 이행계획 수립, 경영진 승인</td></tr><tr><td><strong>보호대책 공유</strong></td><td>구현·운영을 담당하는 부서와 담당자에게 관련 내용을 지속적으로 공유</td></tr><tr><td><strong>운영현황 관리</strong></td><td>상시·주기적 운영활동의 수행내역과 증적을 기록하고 경영진이 효과성을 확인</td></tr></tbody></table></div>`
          },
          {
            id: "ismsp-check-improve", title: "관리체계 점검 및 개선",
            content: `<ul><li>관련 법령·규제·계약 요구사항을 정기적으로 파악하고 준수여부를 지속적으로 검토합니다.</li><li>관리체계가 효과적으로 운영되는지 독립성과 전문성을 갖춘 인력이 최소 연 1회 점검하고 결과를 경영진에게 보고합니다.</li><li>법적 준수검토와 내부점검에서 발견된 문제의 원인을 분석하고 재발방지대책을 수립·이행합니다.</li><li>개선조치의 정확성과 효과를 확인할 기준·절차를 마련해 지속적으로 관리체계를 개선합니다.</li></ul>`
          },
          {
            id: "ismsp-controls-overview", title: "보호대책 요구사항 12개 분야",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>분야</th><th>기준 수</th><th>핵심</th></tr></thead><tbody><tr><td>정책·조직·자산관리</td><td>3</td><td>정책 유지, 조직 운영, 자산관리</td></tr><tr><td>인적 보안</td><td>6</td><td>직무·권한·서약·교육·퇴직·위반조치</td></tr><tr><td>외부자 보안</td><td>4</td><td>현황·계약·이행·변경/만료</td></tr><tr><td>물리 보안</td><td>7</td><td>보호구역·출입·설비·반출입·사무실</td></tr><tr><td>인증 및 권한관리</td><td>6</td><td>계정·식별·인증·비밀번호·특수권한·검토</td></tr><tr><td>접근통제</td><td>7</td><td>Network·System·Application·DB·무선·원격·Internet</td></tr><tr><td>암호화 적용</td><td>2</td><td>암호정책·Key 관리</td></tr><tr><td>개발·도입 보안</td><td>6</td><td>요구사항·설계·시험·Source·환경이관</td></tr><tr><td>System·Service 운영관리</td><td>7</td><td>변경·장애·Backup·Log·시간·폐기·서비스</td></tr><tr><td>System·Service 보안관리</td><td>9</td><td>보안System·Cloud·공개Server·전자거래·단말·Patch</td></tr><tr><td>사고 예방·대응</td><td>5</td><td>대응체계·취약점·Monitoring·훈련·복구</td></tr><tr><td>재해복구</td><td>2</td><td>안전조치·시험과 개선</td></tr></tbody></table></div>`
          },
          {
            id: "policy-organization-assets", title: "정책·조직·자산관리",
            content: `<ul><li><strong>정책 유지관리</strong>: 법령·조직·환경 변화와 점검결과를 반영해 정기적으로 검토·개정합니다.</li><li><strong>조직 운영</strong>: 최고책임자와 협의체·실무조직의 활동을 주기적으로 평가하고 개선합니다.</li><li><strong>정보자산 관리</strong>: 생성·도입·저장·이용·폐기 등 Life Cycle에 따른 절차와 보호책임을 정하고 자산목록을 최신화합니다.</li></ul>`
          },
          {
            id: "personnel-security-controls", title: "인적 보안",
            content: `<ul><li>개인정보·중요정보 취급과 핵심 System 접근 직무를 정의하고 담당자·외부자 명단을 최신화합니다.</li><li>권한 오·남용을 막기 위해 <strong>직무분리</strong> 기준을 적용하고 분리가 어려우면 보완통제를 둡니다.</li><li>임직원·임시직원·외부자의 보안책임과 비밀유지의무를 보안서약서로 확인합니다.</li><li>연간 교육계획에 따라 대상별 정보보호·개인정보보호 교육과 훈련을 실시하고 효과를 평가합니다.</li><li>퇴직·직무변경 시 자산반납, 계정·권한 회수, 인수인계와 비밀유지 확인을 수행합니다.</li><li>법령·규정 위반 시 징계 등 조치절차를 수립·이행합니다.</li></ul>`
          },
          {
            id: "external-party-security", title: "외부자 보안",
            content: `<ul><li>업무 위탁·외부 Service·시설 이용현황을 식별하고 위험과 법적 요구를 분석합니다.</li><li>계약서에 정보보호·개인정보보호 요구, 책임, 재위탁, 사고통지, 점검권한, 위반 시 조치를 반영합니다.</li><li>외부자가 계약상 보호조치를 이행하는지 주기적으로 점검하고 위반사항을 개선합니다.</li><li>계약 변경·만료·종료 시 계정·권한 회수, 정보자산 반납·삭제, 비밀유지 지속여부를 확인합니다.</li></ul>`
          },
          {
            id: "physical-security-controls", title: "물리 보안",
            content: `<ul><li>물리·환경 위협으로부터 중요설비와 자산을 보호하도록 통제구역·제한구역·접견구역을 지정합니다.</li><li>출입권한을 최소화하고 방문자 승인·기록·동행, 출입기록 정기검토를 수행합니다.</li><li>전력·항온항습·화재·누수에 대비한 UPS·Generator·소방시설·경보와 유지보수계약을 운영합니다.</li><li>보호구역 내 작업승인·기록, Mobile·저장매체 반출입 통제, 문서·공용PC·복합기·Whiteboard의 Clean Desk 보호를 적용합니다.</li></ul>`
          },
          {
            id: "authentication-privilege-controls", title: "인증 및 권한관리",
            content: `<ul><li>사용자 계정 등록·변경·삭제·해지와 권한부여·변경·말소 절차를 마련하고 승인·책임추적성을 확보합니다.</li><li>사용자를 유일하게 식별하며 공용 Identifier는 불가피한 경우에만 승인해 사용합니다.</li><li>중요정보 접근에는 안전한 인증방식을 적용하고 Login 실패횟수 제한, 경고, Session Timeout을 사용합니다.</li><li>비밀번호 작성규칙·변경주기·안전한 보관을 정하고 Default Password를 변경합니다.</li><li>관리자 등 특수계정은 최소인원에만 부여하고 별도목록·승인·감사로 통제합니다.</li><li>계정·권한의 적정성을 정기적으로 검토해 불필요한 권한을 회수합니다.</li></ul>`
          },
          {
            id: "access-control-controls", title: "접근통제",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>대상</th><th>핵심 통제</th></tr></thead><tbody><tr><td><strong>Network</strong></td><td>DMZ·VLAN·Firewall 등으로 영역 분리, 인가된 Traffic만 허용</td></tr><tr><td><strong>정보System</strong></td><td>Server·Network Device 접근방식과 관리자 접속을 통제</td></tr><tr><td><strong>Application</strong></td><td>업무·직무 중요도에 맞춰 Menu·기능별 접근권한 차등</td></tr><tr><td><strong>Database</strong></td><td>Table·View 등 Object와 사용자 유형·정보 중요도별 권한 통제</td></tr><tr><td><strong>무선 Network</strong></td><td>사용자 인증·전송암호화·AP 통제, Rogue AP 탐지</td></tr><tr><td><strong>원격접근</strong></td><td>불가피한 경우 승인, 접근대상·방법·시간 제한, VPN·강화인증 적용</td></tr><tr><td><strong>Internet</strong></td><td>유출·악성 Site·업무방해를 줄이도록 접속정책과 Filtering 적용</td></tr></tbody></table></div>`
          },
          {
            id: "cryptography-controls", title: "암호화 적용",
            content: `<ul><li>법적 요구와 정보 중요도·위험을 반영해 저장·전송·전달 시 사용할 안전한 암호 Algorithm과 암호화 대상을 정책으로 정합니다.</li><li>암호 Key의 생성·이용·보관·배포·변경·폐기 절차를 수립하고 별도의 안전한 장소에 보관하며 접근권한을 최소화합니다.</li></ul>`
          },
          {
            id: "secure-development-controls", title: "정보System 도입 및 개발 보안",
            content: `<ul><li>신규 도입·개발·변경 시 법령, 최신 보안취약점, 인증·암호화·Log 요구를 포함한 보안요구사항을 정의합니다.</li><li>분석·설계 단계에서 요구사항 반영여부를 검토하고 구현·시험·운영이관 전 취약점과 보안기능을 확인합니다.</li><li>개발·시험환경을 운영환경과 분리하고 불가피하면 접근통제·Monitoring·백업 등 보완통제를 적용합니다.</li><li>시험 Data에 운영 중인 실제 개인정보 사용을 피하고 필요 시 비식별·변환·폐기합니다.</li><li>Source Program은 인가된 인원만 접근하게 하고 변경이력·Version을 관리합니다.</li><li>운영환경 이관은 승인·시험·Rollback 절차와 이관내역을 기록합니다.</li></ul>`
          },
          {
            id: "operations-change-continuity", title: "System·Service 운영관리",
            content: `<ul><li>자산 변경절차를 수립하고 변경 전 성능·보안영향을 분석합니다.</li><li>가용성·용량·성능을 지속 Monitoring하고 장애탐지·보고·복구와 재발방지 절차를 운영합니다.</li><li>복구목표에 맞춰 Backup 대상·주기·방법·보관장소·기간·복구절차를 정하고 정기적으로 복구 Test를 합니다.</li><li>Server·DB·보안System 등 접속·행위 Log를 안전하게 보관하고 위·변조와 무단접근을 통제합니다.</li><li>신뢰할 수 있는 Log 분석을 위해 System 시간을 표준시간으로 동기화합니다.</li><li>저장매체 재사용·폐기 시 복구할 수 없도록 안전하게 삭제·파기하고 외부업체 작업을 확인합니다.</li></ul>`
          },
          {
            id: "service-security-controls", title: "System·Service 보안관리",
            content: `<ul><li>Firewall·IDS/IPS·백신 등 보안System의 정책·Rule을 최신화하고 관리자 접근과 우회경로를 통제합니다.</li><li>Cloud 이용 시 책임분담, 접근통제, Data 이전·반환·폐기와 계약종료 절차를 정의합니다.</li><li>공개 Server는 내부 Network와 분리하고 DMZ에 배치하며 불필요 Service·계정을 제거합니다.</li><li>전자거래·FinTech Service는 인증·암호화·무결성·거래부인방지·사고대응을 적용합니다.</li><li>조직 간 중요정보 전송에는 협약·암호화·SLA 등 안전한 전달절차를 마련합니다.</li><li>업무용 PC·Mobile Device는 인증·암호화·악성코드방지·분실대응·원격삭제 정책을 적용합니다.</li><li>USB 등 보조저장매체는 허가·등록·반출입·암호화·폐기와 사용기록으로 통제합니다.</li><li>Patch는 중요도·영향을 평가해 최신상태를 유지하고 긴급취약점에 신속 대응합니다.</li><li>악성코드 방지Program을 최신화하고 탐지·격리·복구절차를 운영합니다.</li></ul>`
          },
          {
            id: "incident-response-controls", title: "사고 예방 및 대응",
            content: `<ul><li>침해사고와 개인정보 유출을 신속히 탐지·분석·공유할 대응조직, 절차, 비상연락망과 외부기관 협조체계를 마련합니다.</li><li>정기적으로 취약점을 점검하고 발견된 문제의 중요도와 영향을 평가해 신속히 조치합니다.</li><li>침입·정보유출·부정접근 징후를 지속 Monitoring하고 비정상행위를 분석합니다.</li><li>침해사고 Scenario로 최소 연 1회 모의훈련을 실시하고 절차·연락체계를 개선합니다.</li><li>사고 발생 시 이용자·관계기관 신고, 원인분석, 증거보존, 재발방지와 유사사고 예방조치를 수행합니다.</li></ul>`
          },
          {
            id: "disaster-recovery-controls", title: "재해복구 요구사항",
            content: `<ul><li>자연재해·통신·전력장애·해킹 등으로 핵심 Service가 중단될 위험을 분석하고 복구목표·조직·절차·비상연락체계·복구자원을 포함한 재해복구계획을 수립합니다.</li><li>재해복구계획을 정기적으로 시험하고 결과와 환경변화를 반영해 복구절차와 대책을 개선합니다.</li></ul>`
          },
          {
            id: "privacy-lifecycle-overview", title: "개인정보 처리단계별 요구사항",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>단계</th><th>기준 수</th><th>핵심</th></tr></thead><tbody><tr><td><strong>수집 시 보호조치</strong></td><td>7</td><td>적법한 수집·이용, 동의, 민감·고유식별정보, 간접수집</td></tr><tr><td><strong>보유·이용 시 보호조치</strong></td><td>5</td><td>목적 내 이용, 품질·정확성, 표시·광고, 영상정보처리기기</td></tr><tr><td><strong>제공 시 보호조치</strong></td><td>4</td><td>제3자 제공, 국외이전, 처리위탁·재위탁</td></tr><tr><td><strong>파기 시 보호조치</strong></td><td>2</td><td>보유기간 종료·목적달성 시 파기, 안전한 파기방법</td></tr><tr><td><strong>정보주체 권리보호</strong></td><td>3</td><td>열람·정정·삭제·처리정지와 권리행사 절차</td></tr></tbody></table></div><div class="important-box"><span class="box-title">개수 암기</span><p><strong>7 + 5 + 4 + 2 + 3 = 21개</strong></p></div>`
          },
          {
            id: "privacy-collection-use", title: "개인정보 수집·보유·이용 보호",
            content: `<ul><li>법적 근거 또는 정보주체 동의에 따라 필요한 최소한의 개인정보만 수집하고 목적·항목·보유기간·거부권을 알립니다.</li><li>민감정보·고유식별정보·아동정보는 별도의 법적 요건과 강화된 보호조치를 적용합니다.</li><li>수집목적 범위에서 이용하고 정보의 정확성·최신성을 유지하며, 목적달성 또는 보유기간 종료 시 지체 없이 파기합니다.</li><li>영상정보처리기기와 개인정보 표시·광고 등 처리형태별 요구사항을 준수합니다.</li></ul>`
          },
          {
            id: "privacy-provision-destruction-rights", title: "개인정보 제공·파기·권리보호",
            content: `<ul><li>제3자 제공·국외이전·처리위탁 시 제공받는 자, 목적, 항목, 기간과 안전조치를 명확히 하고 필요한 동의를 받습니다.</li><li>위탁자는 수탁자 선정·계약·교육·감독·재위탁을 관리하고 책임관계를 분명히 합니다.</li><li>파기 시 복구·재생할 수 없는 방법을 사용하며 법령상 분리보관 대상은 다른 개인정보와 분리합니다.</li><li>정보주체의 열람·정정·삭제·처리정지·동의철회 요구를 위한 절차와 처리기한을 마련합니다.</li></ul>`
          },
          {
            id: "gdpr-overview", title: "GDPR 개요·목적",
            content: `<p><strong>GDPR(General Data Protection Regulation)</strong>은 EU의 개인정보보호 규정으로, 정보주체의 권리를 강화하고 EU 역내에서 개인정보가 자유롭게 이동할 수 있는 통일된 보호체계를 만드는 것이 목적입니다.</p><p>Directive가 아니라 회원국에 직접 적용되는 <strong>Regulation</strong> 형식이며 2016년 제정되어 2018년 5월 25일부터 본격 시행되었습니다.</p>`
          },
          {
            id: "gdpr-effect-scope", title: "GDPR 법적 효력·적용범위",
            content: `<ul><li>EU 회원국마다 달랐던 개인정보보호 규정을 통일하여 기업의 규제준수기준을 명확하게 합니다.</li><li>EU에 사업장이 있는 Controller·Processor뿐 아니라, EU 거주자에게 상품·Service를 제공하거나 행동을 Monitoring하는 역외기업에도 적용될 수 있습니다.</li><li>One-stop-shop에 따라 여러 회원국에 걸친 처리사안은 원칙적으로 주된 감독기관이 중심이 되어 처리합니다.</li></ul>`
          },
          {
            id: "gdpr-major-changes", title: "GDPR 시행에 따른 주요 변화",
            content: `<ul><li>아동이 정보사회 Service에 직접 동의할 수 있는 기준연령은 원칙적으로 <strong>16세</strong>이며 회원국이 <strong>13세</strong>까지 낮출 수 있습니다.</li><li>공공기관, 대규모의 정기적·체계적 Monitoring, 민감정보·범죄정보 대규모 처리를 핵심활동으로 하는 조직은 <strong>DPO</strong>를 지정해야 합니다.</li><li>개인정보보호 원칙 위반 등 중대한 위반에는 더 높은 과징금이 적용됩니다.</li><li>Privacy by Design·by Default, 처리활동 기록, 침해통지와 Data 이동권 등 책임성이 강화됩니다.</li></ul>`
          },
          {
            id: "gdpr-dpo-fines", title: "DPO와 GDPR 과징금",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>내용</th></tr></thead><tbody><tr><td><strong>DPO</strong><br>Data Protection Officer</td><td>규정준수 조언, 교육·감독, 영향평가와 감독기관 협력. 독립성을 보장하고 이해상충을 피해야 함</td></tr><tr><td><strong>일반 위반</strong></td><td>직전 회계연도 전세계 매출의 2% 또는 1,000만 Euro 중 큰 금액</td></tr><tr><td><strong>중대한 위반</strong></td><td>직전 회계연도 전세계 매출의 4% 또는 2,000만 Euro 중 큰 금액</td></tr></tbody></table></div>`
          },
          {
            id: "gdpr-data-subject-rights", title: "GDPR 정보주체 권리",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>권리</th><th>핵심</th></tr></thead><tbody><tr><td><strong>고지받을 권리</strong></td><td>누가·왜·무엇을 처리하는지 명확히 안내</td></tr><tr><td><strong>열람권</strong></td><td>처리여부와 자신의 개인정보 확인</td></tr><tr><td><strong>정정권</strong></td><td>부정확한 정보의 수정·보완 요구</td></tr><tr><td><strong>삭제권</strong></td><td>잊힐 권리, 불필요한 정보의 삭제 요구</td></tr><tr><td><strong>처리제한권</strong></td><td>일정 사유에서 이용·제공 등 처리 제한</td></tr><tr><td><strong>Data 이동권</strong></td><td>기계판독 가능한 형식으로 받아 다른 사업자에 이전</td></tr><tr><td><strong>반대권</strong></td><td>직접 Marketing 등 특정 처리에 반대</td></tr><tr><td><strong>자동화 결정 관련 권리</strong></td><td>Profiling 등 자동화된 결정만으로 중대한 영향을 받지 않을 권리</td></tr></tbody></table></div>`
          },
          {
            id: "oecd-security-guidelines", title: "OECD 정보보호 가이드라인 9원칙",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>원칙</th><th>핵심</th></tr></thead><tbody><tr><td>1. 인식 Awareness</td><td>System·Network 보안의 필요성과 자신의 역할 인식</td></tr><tr><td>2. 책임 Responsibility</td><td>보안에 대한 책임</td></tr><tr><td>3. 대응 Response</td><td>사고 예방·탐지·대응에 신속히 협력</td></tr><tr><td>4. 윤리 Ethics</td><td>타인의 정당한 이익 존중</td></tr><tr><td>5. 민주주의 Democracy</td><td>표현·정보흐름 등 민주적 가치 존중</td></tr><tr><td>6. 위험평가 Risk Assessment</td><td>위험을 식별·평가</td></tr><tr><td>7. 보안설계·이행</td><td>보안을 핵심설계요소로 구현</td></tr><tr><td>8. 보안관리</td><td>종합적 관리체계와 통제 운영</td></tr><tr><td>9. 재평가 Reassessment</td><td>정책·절차·조치를 주기적으로 재검토</td></tr></tbody></table></div>`
          },
          {
            id: "cyber-crisis-alert", title: "사이버 위기 경보",
            content: `<p>사이버 공격의 수준과 영향에 따라 <strong>관심 → 주의 → 경계 → 심각</strong>의 4단계 경보를 발령합니다.</p><div class="table-scroll"><table class="concept-table"><thead><tr><th>단계</th><th>상황</th></tr></thead><tbody><tr><td><strong>관심</strong></td><td>국외 침해사고 증가, 국내 유입 가능성 또는 취약점·악성코드 위협 증가</td></tr><tr><td><strong>주의</strong></td><td>일부 Network·System 장애나 침해사고가 발생하여 피해확산 가능성이 커짐</td></tr><tr><td><strong>경계</strong></td><td>복수 System·Service에 피해가 확산되고 대규모 장애 가능성이 높아짐</td></tr><tr><td><strong>심각</strong></td><td>국가적 차원의 광범위한 피해와 핵심기반 Service 장애가 발생하거나 임박</td></tr></tbody></table></div>`
          },
          {
            id: "section42-summary", title: "SECTION 42 핵심 흐름",
            content: `<div class="important-box"><span class="box-title">전체 흐름</span><p><strong>보안제품 평가 → TCSEC D·C·B·A → ITSEC 기능/보증 분리 → CC의 PP·ST·TOE·SFR·SAR·EAL → CCRA 상호인정 → BS7799 → ISMS-P 16·64·21 → 관리체계 PDCA → 보호대책 12개 분야 → 개인정보 처리단계 → GDPR·OECD·사이버 위기경보</strong></p></div><div class="table-scroll"><table class="concept-table"><thead><tr><th>문제 키워드</th><th>정답</th></tr></thead><tbody><tr><td>Orange Book</td><td>TCSEC</td></tr><tr><td>기능성과 보증수준을 분리</td><td>ITSEC</td></tr><tr><td>평가대상 제품</td><td>TOE</td></tr><tr><td>구현 독립적 공통 보호요구</td><td>PP</td></tr><tr><td>특정 제품의 보안명세</td><td>ST</td></tr><tr><td>CC 보증등급</td><td>EAL1~EAL7</td></tr><tr><td>관리체계·보호대책·개인정보 기준</td><td>16 + 64 + 21 = 101</td></tr><tr><td>ISMS 적용 기준</td><td>80개</td></tr><tr><td>GDPR 중대한 위반</td><td>매출 4% 또는 2,000만 Euro 중 큰 금액</td></tr><tr><td>사이버 위기경보</td><td>관심 → 주의 → 경계 → 심각</td></tr></tbody></table></div>`
          }
        ],
        content: ""
      },
      {
        id: "section-43",
        number: 43,
        title: "정보보호 관련 법규",
        subtopics: [
          {
            id: "privacy-act-overview", title: "개인정보 보호법 개요·목적",
            content: `<p><strong>개인정보 보호법</strong>은 개인정보의 처리와 보호에 관한 사항을 정하여 개인의 자유와 권리를 보호하고, 궁극적으로 개인의 존엄과 가치를 구현하기 위한 일반법입니다.</p><p>교재는 <strong>2025.10.2. 시행 기준</strong>으로 정리되어 있습니다. 공공·민간을 포괄하며 다른 법률에 특별한 규정이 없으면 개인정보 처리·보호에 이 법을 적용합니다.</p>`
          },
          {
            id: "privacy-act-structure", title: "개인정보 보호법 전체 구조",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>영역</th><th>핵심 내용</th></tr></thead><tbody><tr><td><strong>총칙·정책</strong></td><td>목적·정의·보호원칙·정보주체 권리·보호위원회·기본계획</td></tr><tr><td><strong>개인정보 처리</strong></td><td>수집·이용·제공·목적 외 이용, 파기, 동의, 민감·고유식별정보, 영상정보, 위탁</td></tr><tr><td><strong>안전한 관리</strong></td><td>안전조치, 처리방침, 보호책임자, 국내대리인, 영향평가, 유출통지</td></tr><tr><td><strong>권리·분쟁</strong></td><td>열람·정정·삭제·처리정지, 손해배상, 분쟁조정</td></tr><tr><td><strong>가명정보</strong></td><td>통계·연구·공익 기록보존을 위한 가명처리, 결합, 안전조치</td></tr></tbody></table></div>`
          },
          {
            id: "privacy-key-definitions", title: "개인정보 보호법 주요 용어",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>용어</th><th>정의</th></tr></thead><tbody><tr><td><strong>개인정보</strong></td><td>살아 있는 개인에 관한 정보로서 성명·주민등록번호·영상 등으로 개인을 알아볼 수 있거나, 다른 정보와 쉽게 결합하여 알아볼 수 있는 정보</td></tr><tr><td><strong>가명정보</strong></td><td>추가정보 없이는 특정 개인을 알아볼 수 없도록 가명처리한 개인정보</td></tr><tr><td><strong>처리</strong></td><td>수집·생성·연계·연동·기록·저장·보유·가공·편집·검색·출력·정정·복구·이용·제공·공개·파기 등</td></tr><tr><td><strong>정보주체</strong></td><td>처리되는 정보에 의해 알아볼 수 있는 사람으로서 그 정보의 주체</td></tr><tr><td><strong>개인정보파일</strong></td><td>일정한 규칙에 따라 체계적으로 배열·구성한 개인정보 집합물</td></tr><tr><td><strong>공공기관</strong></td><td>국회·법원·행정기관·지방자치단체와 법령에서 정한 기관</td></tr></tbody></table></div>`
          },
          {
            id: "visual-scientific-definitions", title: "영상정보처리기기·과학적 연구",
            content: `<ul><li><strong>고정형 영상정보처리기기</strong>: 일정한 공간에 지속적 또는 주기적으로 설치해 사람·사물의 영상을 촬영하거나 전송하는 장치(CCTV·Network Camera 등)</li><li><strong>이동형 영상정보처리기기</strong>: 사람이 착용·휴대하거나 이동 가능한 물체에 부착해 영상을 촬영·전송하는 장치</li><li><strong>과학적 연구</strong>: 기술개발·실증, 기초·응용연구와 민간투자 연구 등 과학적 방법을 적용하는 연구</li></ul>`
          },
          {
            id: "privacy-principles", title: "개인정보 보호원칙 8가지",
            content: `<ol><li>처리목적을 명확히 하고 목적에 필요한 범위에서 최소한만 적법·정당하게 수집</li><li>처리목적 범위에서 적합하게 처리하며 목적 외 활용 금지</li><li>처리목적에 필요한 범위에서 정확성·완전성·최신성 보장</li><li>권리침해 가능성과 위험 정도를 고려해 안전하게 관리</li><li>처리방침 등 처리사항을 공개하고 열람청구권 등 권리 보장</li><li>사생활 침해를 최소화하는 방법으로 처리</li><li>익명처리가 가능하면 익명으로, 목적달성이 어렵다면 가명으로 처리</li><li>법정 책임과 의무를 준수하고 신뢰 확보를 위해 노력</li></ol>`
          },
          {
            id: "data-subject-rights", title: "정보주체의 권리",
            content: `<ul><li>개인정보 처리에 관한 정보를 제공받을 권리</li><li>동의 여부와 범위 등을 선택·결정할 권리인 <strong>개인정보 자기결정권</strong></li><li>개인정보의 처리 여부를 확인하고 열람을 요구할 권리</li><li>처리정지·정정·삭제·파기를 요구할 권리</li><li>개인정보 처리로 생긴 피해를 신속하고 공정한 절차로 구제받을 권리</li></ul>`
          },
          {
            id: "privacy-other-laws", title: "다른 법률과의 관계",
            content: `<p>개인정보 처리·보호에 관하여 다른 법률에 특별한 규정이 있으면 그 법률을 우선 적용하고, 특별한 규정이 없는 사항은 개인정보 보호법을 적용합니다.</p><div class="important-box"><span class="box-title">시험 핵심</span><p><strong>개인정보 보호법 = 일반법 / 개별 분야의 특별규정 = 특별법 우선</strong></p></div>`
          },
          {
            id: "privacy-commission", title: "개인정보 보호위원회",
            content: `<p><strong>개인정보 보호위원회</strong>는 국무총리 소속의 중앙행정기관으로 개인정보 보호정책을 독립적으로 수행합니다. 위원장·부위원장을 포함한 <strong>9명</strong>의 위원으로 구성합니다.</p><p>개인정보 침해요인 평가, 기본계획·시행계획, 법령·제도 개선, 조사·처분, 권리구제와 국제협력 등 개인정보 보호정책의 핵심 사안을 심의·의결합니다.</p>`
          },
          {
            id: "privacy-policy-plans", title: "기본계획·시행계획과 보호지침",
            content: `<ul><li>보호위원회는 개인정보 보호의 기본목표와 추진방향, 제도개선, 침해방지, 교육·홍보와 국제협력 등을 포함한 <strong>기본계획</strong>을 수립합니다.</li><li>중앙행정기관은 기본계획에 따라 소관 분야의 <strong>시행계획</strong>을 수립·시행합니다.</li><li>보호위원회는 개인정보 처리의 기준, 침해유형과 예방조치 등을 담은 <strong>개인정보 보호지침</strong>을 정할 수 있습니다.</li></ul>`
          },
          {
            id: "privacy-officer", title: "개인정보 보호책임자(CPO)",
            content: `<p>개인정보처리자는 개인정보 처리업무를 총괄하는 <strong>개인정보 보호책임자</strong>를 지정해야 합니다.</p><ul><li>개인정보 보호계획 수립·시행</li><li>처리실태와 관행의 조사·개선</li><li>불만처리와 피해구제</li><li>유출·오용·남용 방지를 위한 내부통제 구축</li><li>교육계획·처리방침 수립과 개인정보파일 보호·감독</li><li>보유기간 경과 또는 목적달성 개인정보 파기</li></ul>`
          },
          {
            id: "privacy-collection-use", title: "개인정보 수집·이용(제15조)",
            content: `<p>개인정보는 정보주체 동의, 법률상 의무, 공공기관의 소관업무, 계약 체결·이행, 급박한 생명·신체·재산상 이익, 정당한 이익 등의 법적 근거가 있을 때 수집·이용할 수 있습니다.</p><p>동의를 받을 때에는 <strong>수집·이용 목적, 수집항목, 보유·이용기간, 동의 거부권과 불이익</strong>을 알려야 하며 필요한 최소한의 정보만 수집해야 합니다.</p>`
          },
          {
            id: "privacy-third-party", title: "제3자 제공(제17조)",
            content: `<p>정보주체의 동의 또는 법률상 근거가 있을 때 개인정보를 제3자에게 제공할 수 있습니다. 동의 시에는 <strong>제공받는 자, 제공 목적, 제공항목, 보유·이용기간, 거부권과 불이익</strong>을 알려야 합니다.</p><p>수집·이용과 제3자 제공은 법적 근거와 고지내용이 다르므로 각각 구분합니다.</p>`
          },
          {
            id: "privacy-purpose-limits", title: "목적 외 이용·제공 제한(제18조)",
            content: `<p>원칙적으로 수집목적 범위를 초과해 이용하거나 제3자에게 제공할 수 없습니다. 다만 별도 동의, 다른 법률의 특별규정, 급박한 생명·신체·재산상 이익, 범죄수사·재판·공공안전 등 법에서 정한 경우에는 예외적으로 허용할 수 있습니다.</p><div class="important-box"><span class="box-title">구분</span><p><strong>제15조 = 수집·이용 / 제17조 = 제3자 제공 / 제18조 = 목적 외 이용·제공</strong></p></div>`
          },
          {
            id: "privacy-indirect-notice", title: "정보주체 이외로부터 수집한 개인정보의 통지",
            content: `<p>정보주체 이외의 자로부터 개인정보를 수집해 처리하는 경우 정보주체가 요구하면 <strong>수집 출처, 처리목적, 처리정지를 요구할 권리</strong>를 알려야 합니다. 일정 규모 이상의 개인정보처리자는 요구가 없어도 법정 사항을 통지해야 할 수 있습니다.</p>`
          },
          {
            id: "privacy-use-history", title: "개인정보 이용·제공 내역의 통지",
            content: `<p>대통령령으로 정하는 기준에 해당하는 개인정보처리자는 정보주체에게 개인정보의 이용·제공내역이나 그 내역을 확인할 수 있는 정보시스템 접속방법을 정기적으로 통지해야 합니다. 다만 연락처 등 통지에 필요한 정보가 없으면 예외가 될 수 있습니다.</p>`
          },
          {
            id: "privacy-destruction", title: "개인정보의 파기(제21조)",
            content: `<p>보유기간 경과 또는 처리목적 달성 등 개인정보가 불필요해지면 지체 없이 파기해야 합니다. 다른 법령에 따라 보존해야 하는 경우에는 다른 개인정보와 분리하여 저장·관리합니다.</p><p>전자적 파일은 복구·재생되지 않도록 영구삭제하고, 기록물·인쇄물은 파쇄 또는 소각 등으로 파기합니다.</p>`
          },
          {
            id: "privacy-consent-method", title: "동의를 받는 방법(제22조)",
            content: `<p>동의사항을 명확히 구분하여 정보주체가 알아보기 쉽게 알려야 합니다. 수집·이용, 제3자 제공, 민감정보, 고유식별정보 등 법에서 별도 동의를 요구하는 항목은 각각 구분해 동의를 받습니다.</p><p>동의하지 않았다는 이유로 선택정보와 관계없는 Service 제공을 거부해서는 안 됩니다.</p>`
          },
          {
            id: "privacy-children", title: "아동의 개인정보 보호",
            content: `<p>만 14세 미만 아동의 개인정보를 처리하기 위해 동의를 받아야 하는 경우 법정대리인의 동의를 받아야 하며, 법정대리인 확인에 필요한 최소한의 정보는 동의 없이 수집할 수 있습니다.</p><p>아동이 이해하기 쉬운 양식과 명확한 언어로 동의사항을 안내해야 합니다.</p>`
          },
          {
            id: "privacy-sensitive-unique", title: "민감정보·고유식별정보 처리 제한",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>처리 원칙</th></tr></thead><tbody><tr><td><strong>민감정보</strong></td><td>사상·신념, 노동조합·정당 가입, 정치적 견해, 건강·성생활, 유전·범죄경력 등. 별도 동의 또는 법령상 근거 필요</td></tr><tr><td><strong>고유식별정보</strong></td><td>주민등록번호·여권번호·운전면허번호·외국인등록번호. 별도 동의 또는 법령상 근거가 있는 경우 처리</td></tr><tr><td><strong>주민등록번호</strong></td><td>법률·대통령령 등 명확한 근거, 급박한 생명·신체·재산상 이익 등 제한된 경우만 처리</td></tr></tbody></table></div>`
          },
          {
            id: "privacy-cctv", title: "고정형 영상정보처리기기",
            content: `<p>공개된 장소의 고정형 영상정보처리기기는 법령상 허용, 범죄예방·수사, 시설안전·화재예방, 교통단속·정보수집 등 정당한 목적에서 설치·운영할 수 있습니다.</p><ul><li>설치목적·장소·촬영범위·시간·관리책임자 등을 표시한 안내판 설치</li><li>목적 외 임의조작과 다른 곳 촬영, 녹음 금지</li><li>운영·관리방침 수립, 접근통제와 안전조치</li></ul>`
          },
          {
            id: "privacy-mobile-camera", title: "이동형 영상정보처리기기",
            content: `<p>업무목적으로 이동형 영상정보처리기기를 이용해 사람 또는 사물과 관련된 영상을 촬영하는 경우 법적 근거 또는 정보주체 동의가 필요합니다.</p><p>불빛·소리·안내판 등으로 촬영 사실을 명확히 표시해야 하며, 목욕실·화장실·탈의실처럼 사생활 침해 우려가 큰 장소의 촬영은 원칙적으로 금지합니다.</p>`
          },
          {
            id: "privacy-outsourcing-transfer", title: "업무위탁·영업양도에 따른 처리",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>구분</th><th>핵심</th></tr></thead><tbody><tr><td><strong>업무위탁</strong></td><td>목적·범위, 안전조치, 감독, 재위탁 제한, 손해배상책임 등을 문서화하고 위탁자가 수탁자를 교육·감독</td></tr><tr><td><strong>제3자 제공</strong></td><td>제공받는 자의 목적을 위해 개인정보가 이전되며 원칙적으로 정보주체 동의 필요</td></tr><tr><td><strong>영업양도</strong></td><td>영업 전부·일부의 양도·합병 등으로 이전할 때 이전 사실, 받는 자의 연락처, 거부방법 등을 사전 통지</td></tr></tbody></table></div>`
          },
          {
            id: "privacy-handler-supervision", title: "개인정보취급자 감독",
            content: `<p>개인정보처리자는 임직원·파견근로자·시간제근로자 등 지휘·감독을 받아 개인정보를 처리하는 사람의 접근권한을 업무상 필요한 최소범위로 제한하고 정기적인 교육과 관리·감독을 실시해야 합니다.</p>`
          },
          {
            id: "pseudonymized-data", title: "가명정보 처리 특례",
            content: `<p>개인정보처리자는 <strong>통계작성, 과학적 연구, 공익적 기록보존</strong>을 위해 정보주체 동의 없이 가명정보를 처리할 수 있습니다.</p><ul><li>가명정보와 추가정보를 분리보관하고 접근권한을 분리</li><li>특정 개인을 알아보기 위한 재식별 행위 금지</li><li>재식별 정보가 생성되면 즉시 처리중지·회수·파기</li><li>서로 다른 개인정보처리자 간 결합은 전문기관을 통해 수행</li></ul>`
          },
          {
            id: "privacy-safety-measures", title: "개인정보 안전조치(제29조)",
            content: `<p>개인정보가 분실·도난·유출·위조·변조·훼손되지 않도록 내부관리계획 수립, 접근통제·권한관리, 암호화, 접속기록 보관·점검, 보안Program, 물리적 보호조치 등 기술적·관리적·물리적 조치를 해야 합니다.</p>`
          },
          {
            id: "privacy-policy-domestic-agent", title: "처리방침·국내대리인·개인정보파일",
            content: `<ul><li><strong>개인정보 처리방침</strong>: 처리목적·항목·기간·제3자 제공·위탁·권리행사·안전조치·보호책임자 등을 공개</li><li><strong>국내대리인</strong>: 국내 주소나 영업소가 없는 국외 개인정보처리자 중 법정 기준에 해당하면 국내대리인을 지정</li><li><strong>개인정보파일 등록·공개</strong>: 공공기관은 운용하는 개인정보파일을 보호위원회에 등록하고 변경사항도 등록</li></ul>`
          },
          {
            id: "privacy-impact-assessment", title: "개인정보 영향평가(PIA)",
            content: `<p>대규모 개인정보파일 운용 등으로 정보주체 권리침해 위험이 큰 경우 처리시스템의 구축·변경 전에 위험요인을 분석하고 개선사항을 도출하는 <strong>개인정보 영향평가</strong>를 수행합니다.</p><p>처리 개인정보의 수, 민감·고유식별정보 여부, 연계 가능성과 침해위험 등을 고려하며 공공기관은 지정된 평가기관에 영향평가를 의뢰합니다.</p>`
          },
          {
            id: "privacy-breach-notification", title: "개인정보 유출 통지·신고",
            content: `<p>개인정보 유출 사실을 알게 되면 정보주체에게 유출항목·시점과 경위, 피해 최소화 방법, 대응조치와 피해구제 절차, 담당부서 연락처 등을 알려야 합니다.</p><p>원칙적으로 <strong>72시간 이내</strong> 통지하며 법정 기준에 해당하면 보호위원회 또는 전문기관에 신고합니다. 1천명 이상 유출 등 중대한 경우 홈페이지 등에 <strong>30일 이상</strong> 게시하는 방법을 병행할 수 있습니다.</p>`
          },
          {
            id: "privacy-rights-remedies", title: "열람·정정·삭제·처리정지와 손해배상",
            content: `<ul><li><strong>열람</strong>: 처리하는 개인정보와 처리목적·보유기간·제공내역 등을 요구</li><li><strong>정정·삭제</strong>: 사실과 다르거나 법적 근거 없이 처리되는 정보의 정정·삭제 요구</li><li><strong>처리정지</strong>: 개인정보 처리의 전부 또는 일부 정지를 요구</li><li><strong>손해배상</strong>: 법 위반으로 손해를 입은 정보주체는 배상을 청구할 수 있으며 고의·중대한 과실에는 가중배상 가능</li></ul>`
          },
          {
            id: "privacy-dispute-resolution", title: "개인정보 분쟁조정위원회",
            content: `<p>개인정보 분쟁을 소송 전에 신속하고 자율적으로 해결하기 위해 <strong>개인정보 분쟁조정위원회</strong>를 둡니다. 조정 신청, 사실조사, 자료요청, 합의권고와 조정안 제시를 수행합니다.</p><p>여러 정보주체가 같거나 유사한 피해를 입은 경우에는 <strong>집단분쟁조정</strong>을 신청할 수 있습니다.</p>`
          },
          {
            id: "privacy-safety-standards", title: "안전성 확보조치 기준 핵심 용어",
            content: `<p>안전성 확보조치 기준은 개인정보의 처리규모·유형과 위험을 고려해 구체적인 보호조치를 정합니다.</p><div class="table-scroll"><table class="concept-table"><thead><tr><th>용어</th><th>핵심</th></tr></thead><tbody><tr><td>개인정보처리시스템</td><td>Database 등 개인정보를 처리하도록 체계적으로 구성한 System</td></tr><tr><td>접속기록</td><td>계정·접속일시·접속지·처리내역 등을 전자적으로 기록한 것</td></tr><tr><td>접근통제</td><td>권한 없는 접근을 차단하기 위한 정책·절차·기술</td></tr><tr><td>침입차단·탐지System</td><td>비인가 접근 차단 또는 이상행위 탐지</td></tr><tr><td>보조저장매체</td><td>HDD·USB 등 자료를 저장할 수 있는 매체</td></tr></tbody></table></div>`
          },
          {
            id: "privacy-internal-plan", title: "내부관리계획·접근권한 관리",
            content: `<ul><li>보호책임자 지정, 보호조직 구성, 교육·점검, 접근권한, 암호화, 접속기록, 악성Program, 물리보안, 재해대비와 파기 등을 포함한 내부관리계획을 수립·시행합니다.</li><li>개인정보 처리규모에 따라 유형을 구분해 통제수준을 적용합니다.</li><li>업무상 필요한 최소권한만 부여하고 인사이동·퇴직 시 지체 없이 변경·말소합니다.</li><li>계정 공유를 금지하고 안전한 인증수단과 비밀번호 작성규칙을 적용합니다.</li></ul>`
          },
          {
            id: "privacy-access-encryption", title: "접근통제와 암호화",
            content: `<ul><li>외부에서 개인정보처리시스템에 접속할 때 VPN·전용선·다중인증 등 안전한 접속수단을 적용합니다.</li><li>권한 없는 Internet·P2P·공유설정 등을 제한하고 불법접근 시도를 탐지·차단합니다.</li><li>비밀번호는 일방향 암호화하며 고유식별정보·생체정보 등 중요정보는 전송·저장 시 안전한 암호알고리즘으로 암호화합니다.</li><li>Internet·DMZ 구간에 주민등록번호를 저장할 때는 암호화합니다.</li></ul>`
          },
          {
            id: "privacy-logs-malware-physical", title: "접속기록·악성Program·물리·재해대책",
            content: `<ul><li>접속기록을 위·변조되지 않도록 보관하고 정기 점검합니다. 대규모·민감·고유식별정보 처리 등 법정 대상은 더 긴 기간 보관합니다.</li><li>백신 등 보안Program을 설치하고 자동 또는 지체 없는 Update를 실시합니다.</li><li>전산실·자료보관실은 출입통제하고 보조저장매체 반출입과 보관을 관리합니다.</li><li>재해·재난에 대비한 위기대응 절차와 Backup·복구계획을 마련합니다.</li><li>출력물·복사물은 목적과 사용자를 확인하고 불필요해지면 복구할 수 없게 파기합니다.</li></ul>`
          },
          {
            id: "network-act-overview", title: "정보통신망법 개요·목적",
            content: `<p><strong>정보통신망 이용촉진 및 정보보호 등에 관한 법률</strong>은 정보통신망의 이용을 촉진하고 이용자를 보호하며, 정보통신망을 건전하고 안전하게 이용할 수 있는 환경을 조성하는 법입니다.</p><p>교재는 <strong>2025.7.22. 시행 기준</strong>이며 개인정보 보호조항 상당 부분은 개인정보 보호법으로 이관되고 망의 안전성·이용자 보호·침해사고 대응이 중심입니다.</p>`
          },
          {
            id: "network-act-definitions", title: "정보통신망법 주요 용어",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>용어</th><th>의미</th></tr></thead><tbody><tr><td><strong>정보통신망</strong></td><td>전기통신설비와 컴퓨터·이용기술을 활용해 정보를 수집·가공·저장·검색·송신·수신하는 정보통신체제</td></tr><tr><td><strong>정보통신서비스 제공자</strong></td><td>전기통신사업자와 영리를 목적으로 전기통신서비스를 이용해 정보를 제공·매개하는 자</td></tr><tr><td><strong>침해사고</strong></td><td>전자적 침해행위로 정보통신망 또는 관련 정보시스템이 공격받는 사태</td></tr><tr><td><strong>정보통신망 연결기기</strong></td><td>정보통신망에 연결되어 자료를 송·수신하는 기기·설비</td></tr></tbody></table></div>`
          },
          {
            id: "network-policy-responsibility", title: "제공자·이용자의 책무와 주요 시책",
            content: `<ul><li>제공자는 이용자를 보호하고 건전·안전한 정보통신망을 제공하며 권익보호와 정보이용능력 향상에 노력합니다.</li><li>이용자는 건전한 정보사회 조성에 협력해야 합니다.</li><li>정부는 정보통신망 이용 활성화, 이용자 보호, 개인정보·청소년 보호, 불법정보 방지, 안전성·신뢰성 확보와 침해사고 대응정책을 마련합니다.</li></ul>`
          },
          {
            id: "network-access-permission", title: "접근권한에 대한 동의(제22조의2)",
            content: `<p>정보통신서비스 제공자는 Smart Phone App 등이 정보통신망 연결기기의 정보·기능에 접근하려면 <strong>필수적 접근권한</strong>과 <strong>선택적 접근권한</strong>을 구분하고 항목·이유를 명확히 알려 동의를 받아야 합니다.</p><p>선택적 접근권한에 동의하지 않았다는 이유로 해당 권한과 무관한 Service 제공을 거부해서는 안 됩니다.</p>`
          },
          {
            id: "network-resident-number", title: "주민등록번호 사용 제한",
            content: `<p>정보통신서비스 제공자는 법령상 예외를 제외하고 이용자의 주민등록번호를 수집·이용할 수 없으며, 주민등록번호를 사용하지 않는 본인확인방법을 제공해야 합니다.</p><p>주민등록번호를 처리할 수 있는 예외에도 본인확인 목적과 법령상 근거를 확인하고 안전조치를 적용합니다.</p>`
          },
          {
            id: "identity-verification-agency", title: "본인확인기관 지정·취소",
            content: `<p>방송통신위원회는 대체수단 개발·제공·관리능력, 기술·재정 능력, 시설 안정성과 보호조치 등을 갖춘 기관을 <strong>본인확인기관</strong>으로 지정할 수 있습니다.</p><p>거짓 지정, 업무정지 명령 위반, 장기간 업무 미수행 등 법정 사유가 있으면 업무정지 또는 지정취소가 가능합니다.</p>`
          },
          {
            id: "network-youth-rights", title: "청소년 보호와 이용자 권리보호",
            content: `<ul><li>음란·폭력정보 등 청소년유해정보로부터 청소년을 보호하기 위한 내용선별 Software, 표시·고지, 교육·홍보 등의 시책을 마련합니다.</li><li>타인의 사생활 침해 또는 명예훼손 정보가 유통되지 않도록 제공자와 이용자가 노력해야 합니다.</li><li>권리침해 정보에 대한 삭제·반박내용 게재 등 구제절차를 운영할 수 있습니다.</li></ul>`
          },
          {
            id: "illegal-information", title: "불법정보 유통금지(제44조의7)",
            content: `<p>정보통신망을 통해 다음 정보의 유통을 금지합니다.</p><ul><li>음란한 부호·문언·음향·화상·영상</li><li>비방 목적으로 타인의 명예를 훼손하는 정보</li><li>공포심·불안감을 반복적으로 유발하는 정보</li><li>정당한 사유 없이 정보통신System·Data·Program을 훼손·변경·위조하거나 운용을 방해하는 정보</li><li>청소년유해매체물 표시의무를 이행하지 않은 정보, 법령상 금지되는 사행행위·개인정보 거래·국가기밀 등</li></ul>`
          },
          {
            id: "network-illegal-content-response", title: "불법촬영물 등 유통방지 책임",
            content: `<p>일정 규모 이상의 부가통신사업자는 불법촬영물·허위영상물·아동·청소년 성착취물의 신고·삭제요청을 처리하고 기술적·관리적 조치와 투명성 보고를 수행해야 합니다.</p><p>검색제한, 식별·차단기술, 신고기능과 조치결과 통지 등 유통방지에 필요한 체계를 갖춥니다.</p>`
          },
          {
            id: "network-child-protection", title: "14세 미만 아동의 이동통신 이용 보호",
            content: `<p>이동통신Service 제공자는 14세 미만 아동과 계약할 때 청소년유해정보 차단수단을 제공하고, 법정대리인에게 차단수단의 종류·내용과 이용방법을 안내하는 등 아동 보호조치를 수행합니다.</p>`
          },
          {
            id: "network-security-measures", title: "정보통신망 안정성 확보(제45조)",
            content: `<p>정보통신서비스 제공자와 집적정보통신시설 사업자 등은 정보통신망의 안정성과 정보의 신뢰성을 확보하기 위해 기술적·물리적 보호조치를 해야 합니다.</p><ul><li>정당한 권한 없는 접근 차단</li><li>정보의 불법 유출·위조·변조·삭제 방지</li><li>정보통신망의 안정적 운영을 위한 보호</li><li>침해사고 예방·대응과 복구</li></ul>`
          },
          {
            id: "network-preinspection-ciso", title: "사전점검과 정보보호 최고책임자",
            content: `<ul><li><strong>정보보호 사전점검</strong>: 신규 정보통신망 구축 또는 Service 제공 전에 설계·구축 단계부터 보호조치를 확인</li><li><strong>CISO</strong>: 정보보호 최고책임자를 지정해 정보보호 계획·정책 수립, 실태조사, 위험분석·개선, 교육, 침해사고 예방·대응을 총괄</li></ul>`
          },
          {
            id: "network-isms", title: "정보보호 관리체계(ISMS) 인증",
            content: `<p>과학기술정보통신부는 정보통신망의 안정성·신뢰성 확보를 위한 관리적·기술적·물리적 보호조치가 인증기준에 적합한지 평가하여 <strong>ISMS 인증</strong>을 할 수 있습니다.</p><p>ISP, IDC, 일정 규모 이상의 매출·세입 또는 이용자 수를 가진 정보통신서비스 제공자 등 법정 대상은 인증을 받아야 하며, ISMS-P를 받은 경우에도 ISMS 인증을 받은 것으로 봅니다. 인증 유효기간은 <strong>3년</strong>입니다.</p>`
          },
          {
            id: "network-security-grade", title: "정보보호 관리등급",
            content: `<p>정보보호 관리체계를 유지하는 기업의 정보보호 수준을 측정하여 등급을 부여할 수 있습니다. 거짓이나 부정한 방법으로 등급을 받거나 등급기준에 미달하면 등급을 취소할 수 있습니다.</p>`
          },
          {
            id: "network-intrusion-prohibition", title: "침해행위 등의 금지(제48조)",
            content: `<ul><li>정당한 접근권한 없이 또는 허용범위를 넘어 정보통신망에 침입</li><li>정당한 사유 없이 악성Program을 전달·유포</li><li>대량 신호·Data 전송 등으로 Network 장애를 일으키는 행위</li></ul><div class="important-box"><span class="box-title">대표 공격</span><p><strong>무단침입 / Malware 유포 / DoS·DDoS</strong></p></div>`
          },
          {
            id: "network-incident-response", title: "침해사고 대응(제48조의2)",
            content: `<p>과학기술정보통신부장관은 침해사고의 예방·대응을 위해 침해사고 정보 수집·전파, 예보·경보, 긴급조치와 그 밖의 필요한 대응조치를 수행합니다.</p><p>관계기관·주요정보통신서비스 제공자 등에게 침해사고 관련정보 제공을 요청하고 침해사고의 소통량·접속경로 등을 분석할 수 있습니다.</p>`
          },
          {
            id: "network-incident-report", title: "침해사고 신고(제48조의3)",
            content: `<p>정보통신서비스 제공자는 침해사고가 발생하면 즉시 과학기술정보통신부장관 또는 한국인터넷진흥원에 신고해야 합니다.</p><p>신고 내용에는 발생 일시·장소, 피해내용, 원인과 대응현황 등이 포함되며, 관계기관은 피해확산 방지와 신속한 대응에 필요한 조치를 수행합니다.</p>`
          },
          {
            id: "network-act-summary", title: "정보통신망법 핵심 흐름",
            content: `<div class="important-box"><span class="box-title">전체 흐름</span><p><strong>이용촉진·이용자 보호 → App 접근권한 동의 → 주민등록번호 제한·본인확인기관 → 청소년·권리 보호 → 불법정보·불법촬영물 유통방지 → 안정성 확보 → 사전점검·CISO → ISMS·관리등급 → 침입·Malware·DoS 금지 → 침해사고 대응·신고</strong></p></div>`
          },
          {
            id: "infrastructure-act-overview", title: "정보통신기반 보호법 개요·목적",
            content: `<p><strong>정보통신기반 보호법</strong>은 전자적 침해행위에 대비해 주요정보통신기반시설의 보호에 관한 대책을 수립·시행하고, 이를 범국가적으로 대응하도록 하여 국가안전과 국민생활의 안정을 보장하는 법입니다.</p><p>교재는 <strong>2025.1.24. 시행 기준</strong>입니다.</p>`
          },
          {
            id: "infrastructure-key-definitions", title: "주요정보통신기반시설 핵심 용어",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>용어</th><th>의미</th></tr></thead><tbody><tr><td><strong>주요정보통신기반시설</strong></td><td>국가안전·행정·국방·치안·금융·통신·운송·에너지 등 주요 업무와 관련된 전자적 제어·관리시스템 및 정보통신망</td></tr><tr><td><strong>취약점</strong></td><td>해킹·컴퓨터바이러스 등 전자적 침해행위에 의해 정상기능이 방해받을 수 있는 정보시스템의 결함</td></tr><tr><td><strong>전자적 침해행위</strong></td><td>해킹·Computer Virus·Logic Bomb·전자기파 등으로 정보통신기반시설을 공격하는 행위</td></tr></tbody></table></div>`
          },
          {
            id: "infrastructure-protection-committee", title: "정보통신기반보호위원회",
            content: `<p>국무총리 소속으로 <strong>정보통신기반보호위원회</strong>를 두며 위원장은 국무조정실장입니다. 주요정보통신기반시설 보호정책과 보호계획을 심의·조정합니다.</p><ul><li>보호계획 수립지침과 종합계획</li><li>주요정보통신기반시설 보호정책의 조정</li><li>제도개선, 취약점 분석·평가와 보호지원</li><li>그 밖의 주요 보호사항</li></ul>`
          },
          {
            id: "critical-infrastructure-designation", title: "주요정보통신기반시설 지정",
            content: `<p>중앙행정기관의 장은 소관 정보통신기반시설 중 국가적으로 중요한 시설을 주요정보통신기반시설로 지정할 수 있습니다.</p><div class="table-scroll"><table class="concept-table"><thead><tr><th>지정기준</th><th>판단 내용</th></tr></thead><tbody><tr><td>업무 중요성</td><td>국가·사회 기능에 미치는 영향</td></tr><tr><td>의존도</td><td>다른 기반시설이나 기능이 해당 시설에 의존하는 정도</td></tr><tr><td>상호연계성</td><td>다른 정보통신기반시설과의 연결 정도</td></tr><tr><td>대체수단</td><td>장애 시 대체 가능성</td></tr><tr><td>복구 난이도</td><td>침해사고 피해규모와 복구에 필요한 시간·비용</td></tr></tbody></table></div>`
          },
          {
            id: "critical-designation-process", title: "지정·취소 절차와 관리기관",
            content: `<p>중앙행정기관의 장은 관계기관과 협의하고 필요한 경우 정보통신기반보호위원회의 심의를 거쳐 지정합니다. 관할이 불명확한 시설은 과학기술정보통신부장관과 국가정보원장이 조정할 수 있습니다.</p><p>지정사유가 없어지면 지정취소가 가능하며 국가안전보장에 필요한 경우 위원회의 심의를 거칩니다. 시설을 운영·관리하는 자는 <strong>관리기관</strong>이 됩니다.</p>`
          },
          {
            id: "infrastructure-vulnerability-analysis", title: "취약점 분석·평가",
            content: `<p>관리기관의 장은 주요정보통신기반시설의 보호대책을 수립하기 위해 취약점을 분석·평가하고, 새 취약점을 발견하면 제거하며 장기적으로 관리합니다.</p><p>분석·평가에는 자산 식별, 위협·취약점 분석, 위험도 산정과 보호대책 도출이 포함됩니다. 국가안보 관련 시설은 국가정보원이, 그 밖의 시설은 관계전문기관이 지원할 수 있습니다.</p>`
          },
          {
            id: "vulnerability-cycle-center", title: "분석·평가 주기와 전문기관",
            content: `<ul><li>관리기관은 정기적으로 취약점 분석·평가를 실시하고 결과를 보호대책에 반영합니다.</li><li>전자적 침해위협이 증가하거나 시설·System이 크게 변경되면 추가 분석·평가를 수행합니다.</li><li>정보공유·분석센터, 한국인터넷진흥원과 관련 전문기관이 기술적 분석과 대책 수립을 지원할 수 있습니다.</li></ul>`
          },
          {
            id: "infrastructure-protection-measures", title: "보호대책 수립(제5조)",
            content: `<p>관리기관의 장은 취약점 분석·평가 결과에 따라 주요정보통신기반시설을 안전하게 보호하기 위한 관리적·기술적·물리적 대책을 수립·시행합니다.</p><p>중앙행정기관은 보호대책 수립지침을 마련하고 관리기관의 이행여부를 확인하며, 필요하면 개선을 권고할 수 있습니다.</p>`
          },
          {
            id: "infrastructure-plan-support", title: "보호계획·이행확인·보호지원",
            content: `<ul><li>관계 중앙행정기관은 매년 소관 주요정보통신기반시설의 보호계획을 수립해 위원회에 제출합니다.</li><li>보호대책 이행자료를 제출받아 이행여부를 확인하고 미흡하면 개선을 요구합니다.</li><li>국가는 기술개발, 전문인력 양성, 국제협력과 침해사고 예방·복구를 지원할 수 있습니다.</li><li>보호계획에는 관리·운영, 취약점 분석, 침해사고 예방·복구와 기술지원 등이 포함됩니다.</li></ul>`
          },
          {
            id: "infrastructure-intrusion-prohibition", title: "기반시설 침해행위 금지(제12조)",
            content: `<p>다음 방법으로 주요정보통신기반시설을 교란·마비·파괴하는 행위를 금지합니다.</p><ol><li>접근권한 없이 또는 허용범위를 넘어 침입</li><li>Data를 파괴하거나 정보의 위조·변조·훼손</li><li>Malware·Logic Bomb 등을 투입</li><li>대량 신호·Data 전송 등으로 정보처리에 오류를 발생시키는 행위</li></ol>`
          },
          {
            id: "infrastructure-incident-notice", title: "침해사고 통지와 복구조치",
            content: `<p>관리기관은 침해사고로 소관 주요정보통신기반시설이 교란·마비·파괴된 경우 관계 중앙행정기관, 수사기관 또는 한국인터넷진흥원 등 관계기관에 통지해야 합니다.</p><p>관리기관은 시설의 복구와 보호에 필요한 조치를 신속히 수행하고, 필요하면 관계 중앙행정기관·과학기술정보통신부·국가정보원·인터넷진흥원 등에 기술지원과 인력지원을 요청할 수 있습니다.</p>`
          },
          {
            id: "infrastructure-countermeasure-hq", title: "대책본부 구성",
            content: `<p>대규모 침해사고가 발생해 여러 주요정보통신기반시설에 중대한 영향을 미치면 한시적으로 <strong>대책본부</strong>를 구성·운영할 수 있습니다.</p><p>대책본부는 사고정보 수집·분석, 긴급대응, 관계기관 협조와 복구지원을 총괄하며 침해사고가 발생한 시설을 관할하는 중앙행정기관과 긴밀히 협력합니다.</p>`
          },
          {
            id: "isac-center", title: "정보공유·분석센터(ISAC)",
            content: `<p><strong>ISAC(Information Sharing & Analysis Center)</strong>은 분야별 침해위협과 취약점 정보를 분석·공유하여 주요정보통신기반시설을 공동으로 보호하는 조직입니다.</p><ul><li>취약점·침해요인과 대응방안 분석</li><li>침해사고 정보 수집·공유와 실시간 경보</li><li>관계기관·회원사의 공동대응 지원</li></ul><p>금융·통신 등 분야별로 복수의 관리기관이 공동 구축·운영할 수 있습니다.</p>`
          },
          {
            id: "section43-law-comparison", title: "세 법률 비교",
            content: `<div class="table-scroll"><table class="concept-table"><thead><tr><th>법률</th><th>주요 보호대상</th><th>핵심 키워드</th></tr></thead><tbody><tr><td><strong>개인정보 보호법</strong></td><td>개인정보와 정보주체 권리</td><td>수집·이용·제공·파기·가명정보·안전조치·권리구제</td></tr><tr><td><strong>정보통신망법</strong></td><td>정보통신망·Service 이용자</td><td>접근권한·청소년·불법정보·ISMS·침해사고</td></tr><tr><td><strong>정보통신기반 보호법</strong></td><td>국가 중요 기반시설</td><td>시설 지정·취약점 분석·보호대책·복구·ISAC</td></tr></tbody></table></div>`
          },
          {
            id: "section43-summary", title: "SECTION 43 핵심 흐름",
            content: `<div class="important-box"><span class="box-title">전체 흐름</span><p><strong>개인정보 보호법: 원칙·권리 → 수집·제공·파기 → 민감·고유식별·영상정보 → 위탁·가명정보 → 안전조치·PIA·유출통지 → 권리구제·분쟁조정 → 안전성 확보조치</strong></p><p><strong>정보통신망법: 이용자 보호 → 접근권한·본인확인 → 청소년·불법정보 → 안정성·CISO·ISMS → 침입금지·사고대응·신고</strong></p><p><strong>정보통신기반 보호법: 기반시설 지정 → 취약점 분석·평가 → 보호대책·보호계획 → 침해금지·통지·복구 → 대책본부·ISAC</strong></p></div>`
          }
        ],
        content: ""
      }
    ]
  }
];
