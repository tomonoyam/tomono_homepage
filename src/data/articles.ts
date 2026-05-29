export interface Article {
  chapter: string;
  chapterSlug: string;
  chapterColor: string;
  no: string;
  slug: string;
  title: string;
  sub: string;
  desc: string;
  level: '入門' | '中級' | '上級';
  time: string;
  date: string;
  tags: string[];
}

export const chapters = [
  { id: '01', title: 'AUTOSAR入門', slug: 'autosar', color: 'cyan',   accent: 'from-cyan-500/30 to-teal-500/30',     border: 'border-cyan-800/50' },
  { id: '02', title: 'CAN通信',     slug: 'can',     color: 'blue',   accent: 'from-blue-500/30 to-cyan-500/30',     border: 'border-blue-800/50' },
  { id: '03', title: 'BSW',         slug: 'bsw',     color: 'indigo', accent: 'from-indigo-500/30 to-blue-500/30',   border: 'border-indigo-800/50' },
  { id: '04', title: 'RTE',         slug: 'rte',     color: 'purple', accent: 'from-purple-500/30 to-violet-500/30', border: 'border-purple-800/50' },
  { id: '05', title: 'SWC',         slug: 'swc',     color: 'violet', accent: 'from-violet-500/30 to-purple-500/30', border: 'border-violet-800/50' },
  { id: '06', title: '診断通信',    slug: 'diagnostics', color: 'amber', accent: 'from-amber-500/30 to-orange-500/30', border: 'border-amber-800/50' },
  { id: '07', title: '組み込みC',  slug: 'embedded-c', color: 'green', accent: 'from-green-500/30 to-teal-500/30',  border: 'border-green-800/50' },
  { id: '08', title: '車載ソフト設計', slug: 'design', color: 'amber', accent: 'from-amber-500/30 to-red-500/30',   border: 'border-amber-800/50' },
] as const;

export const articles: Article[] = [
  // AUTOSAR入門
  { chapter: 'AUTOSAR入門', chapterSlug: 'autosar', chapterColor: 'cyan',   no: '01', slug: 'what-is-autosar',   title: 'AUTOSARとは何か',              sub: '魔法体系の全体像 — 誕生の必然',             desc: 'AUTOSARの誕生背景、三つの目標、スタック全体像を解説。',              level: '入門', time: '8分',  date: '2026-05-01', tags: ['AUTOSAR', 'CP', 'Adaptive', '入門'] },
  { chapter: 'AUTOSAR入門', chapterSlug: 'autosar', chapterColor: 'cyan',   no: '02', slug: 'cp-vs-ap',          title: 'Classic vs Adaptive Platform',  sub: '二つの魔法体系 — 用途による分岐',           desc: 'CP と AP の OS・通信・言語・安全レベルを10項目で比較。',              level: '中級', time: '12分', date: '2026-05-03', tags: ['CP', 'AP', 'AUTOSAR', 'Ethernet'] },
  { chapter: 'AUTOSAR入門', chapterSlug: 'autosar', chapterColor: 'cyan',   no: '03', slug: 'arxml-and-tools',   title: 'ARXMLとツールチェーン',          sub: '魔導書の言語 — 設計から生成まで',           desc: 'ARXML の構造・Vector DaVinci・EB tresos・開発ワークフロー。',         level: '中級', time: '14分', date: '2026-05-05', tags: ['ARXML', 'DaVinci', 'EB tresos', 'ツール'] },
  // CAN通信
  { chapter: 'CAN通信',     chapterSlug: 'can',     chapterColor: 'blue',   no: '01', slug: 'what-is-can',       title: 'CANとは何か',                   sub: '魔法陣の通信路 — その正体',                desc: 'バス型トポロジ・差動2線・メッセージベース設計の理由。',                level: '入門', time: '8分',  date: '2025-05-01', tags: ['CAN', 'バス', '差動信号', '入門'] },
  { chapter: 'CAN通信',     chapterSlug: 'can',     chapterColor: 'blue',   no: '02', slug: 'frame-structure',   title: 'フレーム構造',                  sub: '呪文の解剖 — ビット列の意味',              desc: 'SOF・ID・DLC・DATA・CRC・ACKを1フィールドずつ解剖。',                level: '中級', time: '12分', date: '2025-05-05', tags: ['CANフレーム', 'CRC', 'ビットスタッフィング'] },
  { chapter: 'CAN通信',     chapterSlug: 'can',     chapterColor: 'blue',   no: '03', slug: 'arbitration-and-error', title: '調停とエラー処理',            sub: '仲裁の魔法 — バスを制する者',              desc: 'ワイヤードOR・非破壊調停・エラーカウンタ・Bus-Off。',                 level: '中級', time: '14分', date: '2025-05-10', tags: ['調停', 'Bus-Off', 'エラー', 'CAN'] },
  // BSW
  { chapter: 'BSW',         chapterSlug: 'bsw',     chapterColor: 'indigo', no: '01', slug: 'what-is-bsw',       title: 'BSWとは何か',                   sub: '世界の基盤魔術 — その正体',                desc: '3層構造・主要モジュール・RTEとの境界を入門レベルで解剖。',            level: '入門', time: '8分',  date: '2025-04-01', tags: ['BSW', 'MCAL', 'Services', '入門'] },
  { chapter: 'BSW',         chapterSlug: 'bsw',     chapterColor: 'indigo', no: '02', slug: 'com-stack',         title: '通信スタック',                  sub: 'Com Stack — 呪文を伝達する魔導機構',        desc: 'SWC→RTE→Com→PduR→CanIf→Can→HWの7層を送受信両方向で追う。',         level: '中級', time: '15分', date: '2025-04-05', tags: ['Com', 'PduR', 'CanIf', '通信'] },
  { chapter: 'BSW',         chapterSlug: 'bsw',     chapterColor: 'indigo', no: '03', slug: 'os',                title: 'AUTOSAR OS',                   sub: '時を刻む魔術 — タスクと優先度',            desc: 'OSEK由来の静的RTOS。タスク・ISR・リソース・アラームを完全解説。',     level: '中級', time: '12分', date: '2025-04-10', tags: ['OS', 'OSEK', 'タスク', 'リアルタイム'] },
  // RTE
  { chapter: 'RTE',         chapterSlug: 'rte',     chapterColor: 'purple', no: '01', slug: 'what-is-rte',       title: 'RTEとは何か',                   sub: '召喚陣の正体 — なぜ存在するか',            desc: '生成コードという発想、SWC独立性とBSW抽象化の橋渡し。',               level: '入門', time: '8分',  date: '2025-05-15', tags: ['RTE', '生成コード', 'SWC', '入門'] },
  { chapter: 'RTE',         chapterSlug: 'rte',     chapterColor: 'purple', no: '02', slug: 'port-and-interface', title: 'ポートとインターフェース',       sub: '契約の魔法陣 — 接続の設計',                desc: 'R/PPort・S/R Interface・C/S Interface・Connector・ARXML定義。',       level: '中級', time: '14分', date: '2025-05-20', tags: ['Port', 'S/R', 'C/S', 'Interface'] },
  { chapter: 'RTE',         chapterSlug: 'rte',     chapterColor: 'purple', no: '03', slug: 'generated-code',    title: '生成コードを読む',              sub: '魔導書の解読 — Rte_*.h の世界',            desc: 'Write/Read/Call APIの実装・Runnableスケジューリング・デバッグ術。',   level: '上級', time: '18分', date: '2025-05-25', tags: ['RTE生成', 'デバッグ', 'コード読解'] },
  // SWC
  { chapter: 'SWC',         chapterSlug: 'swc',     chapterColor: 'violet', no: '01', slug: 'what-is-swc',       title: 'SWCとは何か',                   sub: '術者の正体 — 独立した呪文の担い手',         desc: '三つの美徳(独立性・ポータビリティ・テスタビリティ)と最小実装。',     level: '入門', time: '8分',  date: '2025-05-28', tags: ['SWC', 'ポータビリティ', 'テスト', '入門'] },
  { chapter: 'SWC',         chapterSlug: 'swc',     chapterColor: 'violet', no: '02', slug: 'atomic-and-composition', title: 'Atomic と Composition',  sub: '術者の分類 — 個と集合の設計',              desc: 'Atomic SWC・Composition SWC・Delegation Connectorの設計論。',        level: '中級', time: '12分', date: '2025-05-28', tags: ['Atomic', 'Composition', '設計', 'Delegation'] },
  { chapter: 'SWC',         chapterSlug: 'swc',     chapterColor: 'violet', no: '03', slug: 'runnable-and-event', title: 'Runnable とイベント',           sub: '詠唱の引き金 — いつ、誰が呼ぶのか',        desc: 'TimingEvent・DataReceivedEvent・WCET・IRVを現場目線で解説。',        level: '中級', time: '14分', date: '2025-05-28', tags: ['Runnable', 'RTE Event', 'WCET', 'IRV'] },
  // 診断通信
  { chapter: '診断通信',    chapterSlug: 'diagnostics', chapterColor: 'amber', no: '01', slug: 'what-is-uds',  title: 'UDSとは何か',                   sub: '診断魔法陣の全体像 — ISO 14229の世界',     desc: 'セッション・Seed/Key認証・ISO-TP・AUTOSARのDcm連携。',              level: '入門', time: '9分',  date: '2025-05-28', tags: ['UDS', 'ISO14229', 'ISO-TP', '診断'] },
  { chapter: '診断通信',    chapterSlug: 'diagnostics', chapterColor: 'amber', no: '02', slug: 'service-ids',  title: 'サービスID完全ガイド',          sub: '呪文の辞書 — SIDとその使い方',             desc: '0x10〜0x3Eの主要SID、フラッシュ全シーケンス、suppress技法。',       level: '中級', time: '16分', date: '2025-05-28', tags: ['SID', 'UDS', 'フラッシュ', '診断'] },
  { chapter: '診断通信',    chapterSlug: 'diagnostics', chapterColor: 'amber', no: '03', slug: 'dtc',          title: 'DTC — 故障コードの魔術',        sub: '診断書の読み方 — DTCとDemの世界',          desc: 'DTCの3byte構造・ステータスバイト8bit・Dem・デバウンス処理。',        level: '中級', time: '14分', date: '2025-05-28', tags: ['DTC', 'Dem', 'デバウンス', '機能安全'] },
  // 組み込みC
  { chapter: '組み込みC',  chapterSlug: 'embedded-c', chapterColor: 'green', no: '01', slug: 'misra-c',       title: 'MISRA-C — 安全の掟',            sub: '術者の言語規律 — なぜ制約が強さになるか',  desc: 'MISRA-C:2012必須ルール・静的解析ツール・Deviationの使い方。',       level: '入門', time: '10分', date: '2026-05-29', tags: ['MISRA-C', '静的解析', 'Deviation', '品質'] },
  { chapter: '組み込みC',  chapterSlug: 'embedded-c', chapterColor: 'green', no: '02', slug: 'pointers-and-memory', title: 'ポインタとメモリ管理',       sub: '記憶の魔術 — アドレスを制する者',          desc: 'volatile・レジスタマップ・const ROM配置・構造体アライメント。',      level: '中級', time: '14分', date: '2026-05-29', tags: ['volatile', 'ポインタ', 'レジスタ', 'メモリ'] },
  { chapter: '組み込みC',  chapterSlug: 'embedded-c', chapterColor: 'green', no: '03', slug: 'interrupt-and-register', title: '割込みとレジスタ操作',    sub: '時間の魔法 — 非同期世界を制御する',         desc: 'ISR・クリティカルセクション・割込みレイテンシ・NVIC優先度。',        level: '中級', time: '15分', date: '2026-05-29', tags: ['ISR', '割込み', 'NVIC', 'クリティカルセクション'] },
  // 車載ソフト設計
  { chapter: '車載ソフト設計', chapterSlug: 'design', chapterColor: 'amber', no: '01', slug: 'functional-safety', title: '機能安全とISO 26262',         sub: '命を守る魔法陣 — 安全の設計思想',           desc: 'HARA・ASIL決定・MC/DC・安全証跡の仕組みを入門レベルで解説。',      level: '入門', time: '11分', date: '2026-05-29', tags: ['ISO26262', 'ASIL', 'HARA', '機能安全'] },
  { chapter: '車載ソフト設計', chapterSlug: 'design', chapterColor: 'amber', no: '02', slug: 'fmea-and-design',   title: 'FMEAと設計パターン',           sub: '故障の先読み — 壊れても安全であるために',    desc: 'FMEA・デフォルト値・フェイルセーフ・Watchdog・冗長化の設計論。',    level: '中級', time: '14分', date: '2026-05-29', tags: ['FMEA', 'フェイルセーフ', 'Watchdog', '設計'] },
  { chapter: '車載ソフト設計', chapterSlug: 'design', chapterColor: 'amber', no: '03', slug: 'realtime-design',   title: 'リアルタイム設計',             sub: '時間の呪縛 — デッドラインを守る術',          desc: 'RMS・CPU負荷率計算・ジッター対策・Schedule Tableの設計基礎。',      level: '中級', time: '16分', date: '2026-05-29', tags: ['リアルタイム', 'RMS', 'CPU負荷', 'WCET'] },
];

export const colorMap: Record<string, { border: string; text: string; bg: string; badge: string }> = {
  cyan:   { border: 'border-cyan-800/60',   text: 'text-cyan-400',   bg: 'bg-cyan-950/30',   badge: 'border-cyan-700/50 text-cyan-400 bg-cyan-950/30' },
  blue:   { border: 'border-blue-800/60',   text: 'text-blue-400',   bg: 'bg-blue-950/30',   badge: 'border-blue-700/50 text-blue-400 bg-blue-950/30' },
  indigo: { border: 'border-indigo-800/60', text: 'text-indigo-400', bg: 'bg-indigo-950/30', badge: 'border-indigo-700/50 text-indigo-400 bg-indigo-950/30' },
  purple: { border: 'border-purple-800/60', text: 'text-purple-400', bg: 'bg-purple-950/30', badge: 'border-purple-700/50 text-purple-400 bg-purple-950/30' },
  violet: { border: 'border-violet-800/60', text: 'text-violet-400', bg: 'bg-violet-950/30', badge: 'border-violet-700/50 text-violet-400 bg-violet-950/30' },
  amber:  { border: 'border-amber-800/60',  text: 'text-amber-400',  bg: 'bg-amber-950/30',  badge: 'border-amber-700/50 text-amber-400 bg-amber-950/30' },
  green:  { border: 'border-green-800/60',  text: 'text-green-400',  bg: 'bg-green-950/30',  badge: 'border-green-700/50 text-green-400 bg-green-950/30' },
  teal:   { border: 'border-teal-800/60',   text: 'text-teal-400',   bg: 'bg-teal-950/30',   badge: 'border-teal-700/50 text-teal-400 bg-teal-950/30' },
};
