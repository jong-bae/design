// 시안 3종이 함께 쓰는 더미 데이터, 화면 전환, 아이콘, SVG 차트 헬퍼
const DESK = {
  status: { reg: '등록', acc: '접수', prog: '처리중', hold: '보류', done: '완료', cancel: '취소' },
  me: { name: '정다은 프로', dept: '인사지원팀', role: '마스터', initial: '정' },

  // 팀 문의함 목록 (최신순). pct 는 목표기한 대비 경과 비율.
  rows: [
    { no: '2026-000132', text: '3층 병동 안내 모니터 전원이 켜지지 않습니다. 전원 케이블은 확인했습니다.', who: '이지은 간호사', org: '서울병원', dept: '병동팀', task: 'PC·모니터', type: '오류문의', at: '2026-11-26 10:02', age: '20분', pct: 0.1, owner: '', st: 'reg' },
    { no: '2026-000131', text: 'PACS 판독 화면에서 이전 영상이 불러와지지 않습니다. 오전부터 계속 로딩만 됩니다.', who: '김하나 간호사', org: '강남병원', dept: '외래팀', task: 'PACS', type: '오류문의', at: '2026-11-26 09:12', age: '1시간 10분', pct: 0.3, owner: '', st: 'reg', urgent: true },
    { no: '2026-000130', text: '외래 접수 PC 두 대가 인터넷에 연결되지 않아요. 랜선은 꽂혀 있습니다.', who: '박서연 간호조무사', org: '부천병원', dept: '원무팀', task: '네트워크', type: '오류문의', at: '2026-11-26 08:41', age: '1시간 20분', pct: 0.34, owner: '', st: 'reg', urgent: true },
    { no: '2026-000129', text: '처방 화면에서 11월 20일에 추가된 약품(코드 HM-20481)이 조회되지 않습니다. 진료 중이라 빠른 확인 부탁드립니다.', who: '이도윤 원장', org: '대전병원', dept: '진료부', task: 'EMR', type: '오류문의', at: '2026-11-25 17:30', age: '1시간 50분', pct: 0.22, owner: '홍길동 프로', st: 'prog' },
    { no: '2026-000128', text: '지난주 급여명세서 PDF 비밀번호를 모르겠습니다.', who: '최민지 간호사', org: '서울병원', dept: '병동팀', task: '급여', type: '사용문의', at: '2026-11-25 15:02', age: '4시간 20분', pct: 0.54, owner: '', st: 'reg', priv: true },
    { no: '2026-000127', text: '홈페이지 의료진 소개 사진 교체 요청드립니다. 새 사진 파일 첨부했습니다.', who: '정수현 팀장', org: '본원', dept: '홍보팀', task: '홈페이지', type: '요청', at: '2026-11-24 14:20', age: '1.8일', pct: 1.3, owner: '', st: 'reg' },
    { no: '2026-000126', text: '진료실 프린터 토너 교체 방법이 궁금합니다.', who: '한지민 간호사', org: '부천병원', dept: '진료부', task: 'PC·프린터', type: '사용문의', at: '2026-11-24 10:05', age: '5시간 10분', pct: 0.4, owner: '이서준 프로', st: 'prog' },
    { no: '2026-000125', text: '한약 조제 프로그램에서 처방전을 출력하면 용법 문구가 잘려서 나옵니다.', who: '오세훈 한약사', org: '강남병원', dept: '한약실', task: '한약 조제', type: '오류문의', at: '2026-11-21 16:48', age: '보류 중', pct: 0.6, owner: '홍길동 프로', st: 'hold' },
    { no: '2026-000124', text: '신규 입사자 EMR 계정 발급을 요청합니다. 12월 1일 입사 예정입니다.', who: '윤채원 팀장', org: '대전병원', dept: '간호팀', task: '계정', type: '요청', at: '2026-11-21 11:15', age: '', pct: 0, owner: '이서준 프로', st: 'done' },
    { no: '2026-000123', text: 'VPN 접속 시 인증서 오류가 납니다. 어제까지는 잘 되었습니다.', who: '강민호 연구원', org: '연구소', dept: '한의학연구팀', task: 'VPN', type: '오류문의', at: '2026-11-20 09:40', age: '', pct: 0, owner: '박지훈 프로', st: 'done' },
    { no: '2026-000122', text: '환자 호출벨을 병동 PC와 연동할 수 있는지 문의드립니다.', who: '임소라 간호사', org: '서울병원', dept: '병동팀', task: '기타', type: '개선문의', at: '2026-11-19 14:30', age: '', pct: 0, owner: '', st: 'cancel' },
  ],

  // 처리 상세 화면에 쓰는 문의(000129)와 타임라인
  detail: {
    no: '2026-000129', st: 'prog', task: 'EMR', type: '오류문의', team: '의료정보실 > 의료정보1팀 > EMR',
    who: '이도윤 원장', org: '대전병원 진료부', tel: '042-1234-5678', mail: 'dy.lee@example.co.kr',
    text: '처방 화면에서 11월 20일에 추가된 약품(코드 HM-20481)이 조회되지 않습니다.\n진료 중이라 빠른 확인 부탁드립니다.',
    file: '처방화면_캡처.png (212KB)',
    steps: [['등록', '11-25 17:30'], ['접수', '11-26 09:05'], ['처리중', '11-26 09:20'], ['완료', '']],
    timeline: [
      { k: 'req', who: '이도윤 원장', at: '2026-11-25 17:30', text: '문의를 등록했습니다.' },
      { k: 'sys', at: '2026-11-25 17:30', text: '의료정보1팀 문의함으로 전달되었습니다.' },
      { k: 'sys', at: '2026-11-26 09:05', text: '홍길동 프로가 담당했습니다. 상태 접수' },
      { k: 'reply', who: '홍길동 프로', at: '2026-11-26 09:20', text: '확인 중입니다. 약품 마스터가 처방 화면에 반영되는 시점을 보고 있습니다. 다른 진료실에서도 같은 증상인지 알려 주세요.' },
      { k: 'cmt', who: '이도윤 원장', at: '2026-11-26 09:41', text: '3진료실과 5진료실 모두 같습니다.' },
      { k: 'memo', who: '홍길동 프로', at: '2026-11-26 09:50', text: '11/20 02:00 약품 마스터 배치가 실패한 로그가 있음. 약제팀 확인 필요. 재반영 후 요청자에게 안내.' },
    ],
  },

  // 집계현황
  recv: [118, 126, 142, 131, 149, 138, 152, 160, 147, 171, 129],
  done: [112, 121, 139, 128, 144, 140, 148, 155, 150, 163, 121],
  teams: [
    { n: '의료정보1팀', recv: 512, done: 502, open: 10, hold: 3, rate: '98.0%', first: '48분', span: '1.1일', sla: '94.2%', sat: '4.5', cnt: 201 },
    { n: '의료정보2팀', recv: 388, done: 375, open: 13, hold: 2, rate: '96.6%', first: '1시간 05분', span: '1.3일', sla: '92.0%', sat: '4.3', cnt: 158 },
    { n: '인사지원팀', recv: 241, done: 240, open: 1, hold: 1, rate: '99.6%', first: '52분', span: '0.9일', sla: '96.3%', sat: '4.7', cnt: 97 },
    { n: '인프라팀', recv: 214, done: 203, open: 11, hold: 2, rate: '94.9%', first: '1시간 38분', span: '1.8일', sla: '86.4%', sat: '4.2', cnt: 82 },
    { n: '홈페이지팀', recv: 143, done: 139, open: 4, hold: 1, rate: '97.2%', first: '1시간 12분', span: '1.5일', sla: '90.1%', sat: '4.4', cnt: 46 },
    { n: '보안팀', recv: 65, done: 62, open: 3, hold: 0, rate: '95.4%', first: '1시간 20분', span: '1.6일', sla: '89.2%', sat: '4.5', cnt: 28 },
  ],
  sat: [{ k: 5, n: 372 }, { k: 4, n: 170 }, { k: 3, n: 48 }, { k: 2, n: 14 }, { k: 1, n: 8 }],
  metrics: [
    ['접수', '1,563', '건'], ['완료', '1,521', '건'], ['완료율', '97.3', '%'], ['미처리 잔량', '42', '건, 보류 9'],
    ['평균 첫 응답', '1시간 03분', ''], ['평균 처리소요', '1.3', '일'], ['목표 준수율', '92.3', '%'], ['만족도 평균', '4.4', '점, 응답 612'],
  ],

  badge: (st) => `<span class="bd bd-${st}">${DESK.status[st]}</span>`,

  icons: {
    dash: '<rect x="3" y="3" width="7" height="9"/><rect x="14" y="3" width="7" height="5"/><rect x="14" y="12" width="7" height="9"/><rect x="3" y="16" width="7" height="5"/>',
    inbox: '<path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.5 5.1 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.5-6.9A2 2 0 0 0 16.7 4H7.3a2 2 0 0 0-1.8 1.1z"/>',
    help: '<circle cx="12" cy="12" r="10"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>',
    list: '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
    chart: '<path d="M3 3v18h18"/><path d="M7 15v3M12 9v9M17 5v13"/>',
    gear: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9 7 7M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
    bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.9 1.9 0 0 0 3.4 0"/>',
    down: '<path d="M12 3v12m0 0-4-4m4 4 4-4M4 21h16"/>',
    chev: '<path d="m6 9 6 6 6-6"/>',
    clip: '<path d="m21 11-8.6 8.6a5 5 0 0 1-7-7L14 4a3.3 3.3 0 0 1 4.7 4.7l-8.6 8.6a1.7 1.7 0 0 1-2.4-2.4L15 7"/>',
    lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
    check: '<path d="m5 12 5 5 9-10"/>',
    back: '<path d="m15 6-6 6 6 6"/>',
  },
  icon: (n) => `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${DESK.icons[n]}</svg>`,

  // 접수(막대)와 완료(선) 월별 추이
  trend(el) {
    const W = 720, H = 250, l = 36, r = 8, t = 12, b = 28, max = 200, n = this.recv.length;
    const gw = (W - l - r) / n, ph = H - t - b, yv = (v) => t + ph * (1 - v / max);
    let grid = '', bars = '', dots = '', lbls = '', pts = [];
    for (let v = 0; v <= max; v += 50) grid += `<line class="c-grid" x1="${l}" x2="${W - r}" y1="${yv(v)}" y2="${yv(v)}"/><text class="c-lbl" x="${l - 6}" y="${yv(v) + 4}" text-anchor="end">${v}</text>`;
    this.recv.forEach((v, i) => {
      const cx = l + gw * (i + 0.5);
      bars += `<rect class="c-bar" x="${cx - gw * 0.3}" y="${yv(v)}" width="${gw * 0.6}" height="${ph * v / max}"><title>${i + 1}월 접수 ${v}건</title></rect>`;
      pts.push(`${cx},${yv(this.done[i])}`);
      dots += `<circle class="c-dot" cx="${cx}" cy="${yv(this.done[i])}" r="3.5"><title>${i + 1}월 완료 ${this.done[i]}건</title></circle>`;
      lbls += `<text class="c-lbl" x="${cx}" y="${H - 8}" text-anchor="middle">${i + 1}월</text>`;
    });
    el.innerHTML = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="월별 접수와 완료 추이">${grid}${bars}<polyline class="c-line" points="${pts.join(' ')}"/>${dots}${lbls}</svg>`;
  },

  // 만족도 분포 도넛. 색은 각 시안 CSS의 .a1~.a5
  donut(el) {
    const r = 42, C = 2 * Math.PI * r, total = this.sat.reduce((a, s) => a + s.n, 0);
    let off = 0;
    const arcs = this.sat.map((s) => {
      const len = C * s.n / total;
      const a = `<circle class="c-arc a${s.k}" cx="60" cy="60" r="${r}" stroke-dasharray="${len} ${C - len}" stroke-dashoffset="${-off}"><title>${s.k}점 ${s.n}명</title></circle>`;
      off += len;
      return a;
    }).join('');
    el.innerHTML = `<svg viewBox="0 0 120 120" role="img" aria-label="만족도 분포"><g transform="rotate(-90 60 60)">${arcs}</g><text class="c-big" x="60" y="64" text-anchor="middle">4.4</text><text class="c-lbl" x="60" y="80" text-anchor="middle">612명 응답</text></svg>`;
  },

  // 해시(#login #list #detail #stats)로 화면을 바꾼다. 이 시안에 없는 메뉴(href="#")는 이동하지 않는다.
  init() {
    document.querySelectorAll('[data-i]').forEach((e) => { e.innerHTML = DESK.icon(e.dataset.i); });
    document.addEventListener('click', (e) => { if (e.target.closest('a[href="#"]')) e.preventDefault(); });
    const go = () => {
      const s = location.hash.slice(1) || 'login';
      document.querySelectorAll('[data-screen]').forEach((e) => { e.hidden = e.dataset.screen !== s; });
      document.querySelector('.shell').hidden = s === 'login';
      document.querySelectorAll('[data-nav]').forEach((a) => {
        const on = a.dataset.nav === (s === 'detail' ? 'list' : s);
        on ? a.setAttribute('aria-current', 'page') : a.removeAttribute('aria-current');
      });
      scrollTo(0, 0);
    };
    addEventListener('hashchange', go);
    go();
  },
};
