# NVDA — NVIDIA Corporation
_Brief generated: 2026-06-13_

### 1. Company snapshot

NVIDIA ออกแบบและขาย GPU และชิปสำหรับ AI infrastructure ให้กับ hyperscalers, cloud providers, รัฐบาล, และบริษัทที่สร้าง AI ทุกขนาด รายได้กว่า 90% มาจากส่วน Data Center ซึ่งขาย GPU clusters, networking chips และซอฟต์แวร์ที่รัน AI ลูกค้าหลักคือ hyperscalers อย่าง AWS, Microsoft Azure, Google Cloud รวมถึงรัฐบาลทั่วโลกที่กำลังสร้าง sovereign AI infrastructure ของตัวเอง นอกจาก GPU สำหรับ training/inference NVIDIA กำลัง expand เข้า CPU (Vera platform) และ Physical AI/Automotive

### 2. Fundamentals signal

- รายได้เร่งตัวแรง: $130.5B (FY2025) → $215.9B (FY2026) +65% YoY, Data Center +68%, Networking +142% (source: sources/NVDA/10-k-latest.md)
- Gross margin 75.0% (FY2025) → 71.1% (FY2026) เพราะ Blackwell product transition + $4.5B H20 inventory writedown จาก export controls; Q1 FY2027 guidance กลับมา ~75% Non-GAAP / 74.9% GAAP (source: sources/NVDA/10-k-latest.md)
- Balance sheet แข็ง: Total current assets $125.6B (cash & equivalents $10.6B), LT debt $7.5B, Shareholders' equity $157.3B (source: sources/NVDA/10-k-latest.md)
- FCF มหาศาล คืนผู้ถือหุ้นเป็นหลัก: FCF $96.6B (FY2026), buyback $40.1B + dividend $974M = $41.1B คืนผู้ถือหุ้น, buyback authorization เหลืออีก $58.5B (source: sources/NVDA/10-k-latest.md)
- Customer concentration สูงผิดปกติ: 2 ลูกค้ารายใหญ่ (ไม่เปิดเผยชื่อ) คิดเป็น 23% + 16% = 39% ของรายได้รวม (~$84B derived — ตัวเลขนี้คำนวณ ไม่ได้ระบุตรงในไฟล์) (source: sources/NVDA/10-k-latest.md)

### 3. Latest earnings (Q1 FY2027, reported May 20, 2026)

- Revenue $82B +85% YoY, +20% sequential — record sequential increase $13.5B (source: sources/NVDA/q1fy27-call.md)
- Data Center $75B +92% YoY — computing $60B, networking $15B (nearly tripled YoY) (source: sources/NVDA/q1fy27-call.md)
- Non-GAAP gross margin 75%, GAAP gross margin 74.9% (source: sources/NVDA/q1fy27-call.md)
- FCF $49B quarter เดียว (ขึ้นจาก $35B quarter ก่อน) (source: sources/NVDA/q1fy27-call.md)
- Guidance Q2 FY2027: Revenue $91B ±2%, gross margin ~75% Non-GAAP — China data center compute = $0 ในตัวเลขนี้ (source: sources/NVDA/q1fy27-call.md)

### 4. Bull case / Bear case

**Bull case:**
- CUDA ecosystem — ทีม AI ทั่วโลก optimize code บน NVIDIA architecture ก่อนเสมอ การย้ายออกไม่ใช่แค่เปลี่ยนชิปแต่ต้องเขียน codebase ใหม่ทั้งหมด (switching cost moat) — brief นี้ไม่มีตัวเลข % AI workloads บน NVIDIA vs alternatives ยืนยัน เป็น narrative claim
- Sovereign AI: ~40 ประเทศกำลังสร้าง national AI infrastructure, Sovereign revenue โต 80%+ YoY — เป็น demand wave นอก hyperscaler แต่ revenue ยังไม่ถูก break out แยกใน financials (source: sources/NVDA/q1fy27-call.md)
- Vera CPU + Physical AI: production shipments เริ่ม Q3 2026, management ระบุ TAM ~$200B — ยังไม่มี customer announcements หรือ backlog ยืนยัน (source: sources/NVDA/q1fy27-call.md)

**Bear case (Rey):**
- Customer concentration และ competitive risk คือ risk เดียวกัน: 2 ลูกค้าที่เป็น 39% ของรายได้ (~$84B derived) กำลังพัฒนา custom AI chip ของตัวเองอยู่ (Google TPU, Amazon Trainium, Microsoft Maia, Meta MTIA) ถ้า hyperscaler ย้าย workload มาใช้ in-house silicon มากขึ้นแม้เพียง 20% demand NVIDIA กระทบทันที และ brief นี้ไม่มีข้อมูลว่า in-house chip เหล่านั้นไปถึงไหนแล้ว
- Export control สามารถทำให้รายได้หายชั่วข้ามคืนโดยไม่มีสัญญาณล่วงหน้า: $4.5B H20 writedown ใน 1 quarter เป็นหลักฐานที่เกิดขึ้นจริงแล้ว ตอนนี้ China = $0 ในทุก guidance และถ้า BIS ขยาย controls ไปยัง Middle East sovereign AI customers (UAE, Saudi Arabia) Sovereign AI bull case พังด้วยพร้อมกัน
- Gross margin จะ crack ทุก product cycle: 75.0% → 71.1% ใน Blackwell transition เป็น pattern ไม่ใช่ exception Rubin platform กำลังมา ถ้าทำตาม playbook เดิม margin drop อีกรอบเป็น base case ไม่ใช่ tail risk ที่ $91B quarterly revenue ทุก 5 point drop = ~$4.5B gross profit หายต่อ quarter

### 5. Kill conditions

- ลูกค้า top-2 ประกาศลด capex, delay order, หรือเปิดเผยว่า in-house silicon handle มากกว่า 20% ของ AI training workloads — ติดตามทุก quarter จากภาษาใน earnings call ของ AWS/Azure/Google เกี่ยวกับ "internal silicon" และ AI infrastructure capex guidance
- AMD หรือ hyperscaler custom chip ได้ verifiable market share: cloud providers เพิ่ม non-NVIDIA GPU option ใน catalog หรือ >15% ของ new GPU cluster deployments ใช้ non-NVIDIA silicon (วัดจาก MLPerf benchmark results + cloud pricing catalogs รายไตรมาส)
- BIS ขยาย export controls ไปยัง Middle East sovereign AI buyers และ NVIDIA ยืนยัน forward revenue impact >$5B ใน 12 เดือน — watch BIS rule updates + geographic revenue disclosures ใน 10-Q ทุก quarter
- Gross margin ต่ำกว่า 70% ในไตรมาสใดก็ตาม โดย management อธิบายว่ามาจาก product transition (ไม่ใช่ one-time writedown) — สัญญาณว่า Rubin ramp กำลังทำตาม Blackwell playbook

### 6. What to ask before owning it

1. CUDA moat แน่นแค่ไหน — มี case ของ company ที่ย้ายออกจาก NVIDIA ไปใช้ alternative จริงๆ ไหม? ตัวเลข % AI workloads บน NVIDIA vs alternatives หาได้จากที่ไหน?
2. ลูกค้า 2 รายที่เป็น 39% คือใคร (10-K ไม่เปิดเผย) และ in-house chip ของพวกเขาแต่ละรายไปถึงไหนแล้ว?
3. China เคยเป็น % รายได้เท่าไหร่ก่อนถูกบล็อก — lost revenue นั้นใหญ่แค่ไหนในภาพรวม?
4. Vera CPU จะ cannibalize GPU revenue ของ NVIDIA เองไหม หรือจะ expand TAM?
5. ราคา $199 vs analyst consensus $298-$311 — analyst ตั้ง target บนสมมติฐาน growth rate เท่าไหร่ใน FY2028 และรวม China revenue กลับมาไว้ในโมเดลด้วยไหม?

---

## Verdict (Neon)

**WATCH**

CUDA switching cost มีน้ำหนักจริงแต่ยัง narrative-based, customer concentration circular risk ยังไม่มีคำตอบ

**เหตุผล 3 ข้อ:**
- CUDA ecosystem สร้าง switching cost จริง — ทีม AI ทั่วโลก optimize code บน NVIDIA architecture ก่อนเสมอ การย้ายออกต้องเขียน codebase ใหม่ทั้งหมด แต่ไม่มีตัวเลข % workloads ที่วัดได้ ยัง narrative-based
- Fundamentals แข็งมากจริง — revenue +65% YoY, FCF $49B ใน 1 quarter เดียว, gross margin กลับ 75% หลัง Blackwell dip
- Long-term fit ตรงกับสไตล์ — ถือยาว 1 ปี+, โอกาสเติบโตสูง, Kill conditions ชัดและ track ได้จริงทุก quarter

**Competitive advantage: Moderate** — switching cost จาก CUDA ecosystem มีน้ำหนักแต่ยัง narrative-based, hyperscaler custom chip กำลัง erode moat ที่ปลายน้ำ (inference workloads)

**Momentum trap check:** Flag — revenue +85% YoY กับ gap ระหว่างราคา $199 กับ consensus $298-$311 ใหญ่มากพอที่ต้องถามว่า target ตั้งบนสมมติฐานอะไร ถ้ารวม China กลับมาหรือ Sovereign AI expansion ที่ยังไม่มี revenue break out ตัวเลข target อาจ inflated

**What to watch ก่อนพิจารณา:** (1) top-2 customers คือใครและ custom chip ไปถึงไหน, (2) China เคยเป็น % รายได้เท่าไหร่, (3) analyst target $298-$311 ตั้งบน growth assumption อะไร

_ไม่ใช่คำแนะนำการลงทุน การตัดสินใจสุดท้ายเป็นของคุณเสมอ_

---

## Fact Check (Eve)

**Source files:** sources/NVDA/10-k-latest.md · sources/NVDA/q1fy27-call.md · sources/NVDA/news-latest.md
**ผล: 27 confirmed / 3 flagged (1 mislabeled แก้แล้ว, 2 derived/narrative) / 0 ตรวจไม่ได้**

**Confirmed highlights:**
- ✅ Revenue $130.5B/$215.9B (FY2025/FY2026), +65% YoY — 10-k-latest.md
- ✅ Data Center +68%, Networking +142% — 10-k-latest.md
- ✅ Gross margin 75.0% → 71.1%, $4.5B H20 writedown — 10-k-latest.md
- ✅ Total current assets $125.6B (cash & equivalents $10.6B), LT debt $7.5B, Shareholders' equity $157.3B — 10-k-latest.md
- ✅ FCF $96.6B, buyback $40.1B, dividend $974M — 10-k-latest.md
- ✅ Customer concentration 23% + 16% = 39% — 10-k-latest.md
- ✅ Q1 FY2027 revenue $82B +85% YoY +20% sequential — q1fy27-call.md
- ✅ Data Center $75B +92%, computing $60B, networking $15B — q1fy27-call.md
- ✅ Gross margin Non-GAAP 75%, GAAP 74.9% — q1fy27-call.md
- ✅ FCF $49B Q1 FY2027 — q1fy27-call.md
- ✅ Q2 guidance $91B ±2%, China = $0 — q1fy27-call.md
- ✅ Sovereign AI ~40 countries, 80%+ YoY — q1fy27-call.md
- ✅ Vera CPU TAM ~$200B, production Q3 2026 — q1fy27-call.md
- ✅ Analyst target $298-$311, price ~$199 — news-latest.md

**Flagged (reconciled):**
- ⚠️ "เงินสด $125.6B" (mislabeled — was Total Current Assets) → แก้เป็น "Total current assets $125.6B; cash & equivalents $10.6B" แล้วใน body
- ⚠️ "~$84B customer concentration" — derived calculation, ใส่ note "(derived — ไม่ได้ระบุตรงในไฟล์)" แล้ว
- ⚠️ "CUDA switching cost" — narrative claim ไม่มี numeric source, ใส่ note แล้ว
