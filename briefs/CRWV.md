# CRWV — CoreWeave
_Brief generated: 2026-06-12_

### 1. Company snapshot

CoreWeave เป็น cloud ที่สร้างมาเพื่อ AI โดยเฉพาะ — เช่า GPU cluster ขนาดยักษ์ให้บริษัทที่ต้องการ AI compute แบบ reserve ล่วงหน้า ไม่ใช่ AWS ทั่วไป แต่เน้น training และ inference workload ที่ต้องการ GPU จำนวนมาก ลูกค้าหลักคือ Microsoft (67% ของรายได้ FY2025), OpenAI และ Meta สัญญาเป็นแบบ multi-year committed spend IPO มีนาคม 2025 บน Nasdaq มี data center 43 แห่งใน 20 ประเทศ พลังงาน active 850+ MW

### 2. Fundamentals signal

- **Revenue ระเบิด:** $229M → $1,915M → $5,131M (FY2023→24→25) +168% YoY FY2025; guidance FY2026 = $12–13B
- **Gross margin ดี แต่ GAAP ขาดทุนหนักจาก structure:** Gross margin ~71.7% FY2025 แต่ GAAP net loss ($1.17B) เพราะ depreciation และ interest expense สูง Adjusted EBITDA $3.09B (บวก) — gap ระหว่าง GAAP กับ adjusted ใหญ่มาก ต้องอ่านทั้งสองตัว
- **หนี้ขยายเร็วกว่า equity:** Long-term debt $14.7B (จาก $5.5B ใน 1 ปี), FCF FY2025 = -$7.2B, capex $10.3B FY2025 — growth ทั้งหมด fund ด้วยหนี้ใหม่ ไม่ใช่กำไร
- **Backlog คือ visibility ที่ดีที่สุดของบริษัทนี้:** RPO สิ้น FY2025 = $60.7B → สิ้น Q1 2026 = $99.4B (+50% QoQ) — contracted revenue ล่วงหน้าเกือบ $100B
- **Customer concentration คือ risk หลักใน 10-K:** Microsoft 67% ของ FY2025 revenue — 10-K ระบุเป็น material risk factor โดยตรง

### 3. Latest earnings (Q1 2026)

- Revenue $2.1B (+112% YoY, +32% QoQ) (source: sources/CRWV/q1-2026-call.md)
- Adjusted EBITDA $1.2B (margin 56%) +91% YoY; Adjusted Operating Income $21M (margin 1%) (source: sources/CRWV/q1-2026-call.md)
- Net loss GAAP ($740M); interest expense $536M ใน Q1 เดียว (source: sources/CRWV/q1-2026-call.md)
- Contracted backlog (RPO) $99.4B (+50% QoQ, ~4x YoY) — ลูกค้า 10 รายที่ commit $1B+ แต่ละราย; financial services (Jane Street, Hudson River Trading) ใกล้ $10B (source: sources/CRWV/q1-2026-call.md)
- Cash $3.3B (source: sources/CRWV/q1-2026-call.md)
- Guidance Q2 2026: revenue $2.45–2.6B, Adj. Op. Income $30–90M, interest expense $650–730M, capex $7–9B (source: sources/CRWV/q1-2026-call.md)
- Guidance FY2026: revenue $12–13B (reaffirmed), Adj. Op. Income $900M–$1.1B, Exit ARR $18–19B (floor raised $1B), capex $31–35B (source: sources/CRWV/q1-2026-call.md)
- 2027 target: $30B+ annualized run-rate revenue, 75%+ contracted ไว้แล้ว (source: sources/CRWV/q1-2026-call.md)

### 4. Bull case / Bear case

**Bull:**
- **Scale economies ที่ยังไม่เกิด:** infrastructure ที่สร้างไปแล้วมี fixed cost สูง แต่ margin ต่อ workload เพิ่มตาม utilization เมื่อ capex cycle ลดลงใน 2027+ cash flow จะ flip บวก (ยังไม่มีข้อมูล model ชัดเจนว่าทำได้จริงเมื่อไหร่)
- **Switching cost สูงจาก multi-year commitment:** ลูกค้าเซ็นสัญญาหลายปีล่วงหน้า backlog $99.4B ทำ revenue visibility สูงมาก migrate ออกยากเพราะ workflow ฝังอยู่กับ infrastructure
- **Counter-positioning vs. AWS/Azure:** focus เฉพาะ AI GPU ราคาและ latency ดีกว่าสำหรับ GPU cluster ขนาดใหญ่ (ยังไม่มีข้อมูล benchmark เปรียบเทียบ verify)

**Bear (Rey):**
- **Microsoft ไม่ใช่ competitive advantage — เป็น single point of failure:** 67% revenue มาจาก counterparty ที่กำลังสร้าง Maia 100 custom AI accelerator เอง ถ้า Microsoft redirect 30%+ ของ spend ออกจาก CoreWeave จะสูญ $2–3B+ annual revenue จากการตัดสินใจของคนเดียว — CoreWeave ไม่มีอำนาจต่อรอง
- **Debt structure ไม่รอดถ้า demand ชะลอ:** debt $14.7B + bond ใหม่ $3.55B (ตัวเลขจากข่าว — ไม่อยู่ใน 10-K/transcript) + interest expense $536M Q1 คิดเป็น run-rate ประมาณ $2.1B+/ปี (ประมาณการจาก Q1 run-rate — Q2 guidance interest $650–730M ชี้ว่า run-rate จริงสูงกว่านี้) + capex $31–35B ปีนี้ — buffer จาก EBITDA $3.09B หลังหัก interest얇มาก ถ้า revenue miss หรือ credit market ตึงโอกาส distress สูง
- **Backlog $99.4B เป็น visibility ไม่ใช่ guarantee:** ไม่ทราบ cancellation penalty; ส่วนที่มาจาก non-investment-grade AI startup อยู่ที่ต่ำกว่า 30% ของ backlog — ถ้า 15% ของส่วนนั้น default ก็คือ $4–5B phantom revenue ที่หายไปในไตรมาสเดียว

### 5. Kill conditions

- **Microsoft ลด committed spend มากกว่า 20% ที่ renewal** หรือ Microsoft ประกาศว่า Maia/Azure AI รับ 25%+ ของ GPU workload ที่เคย source จาก CoreWeave — สังเกตได้จาก Microsoft earnings call และ CoreWeave 10-Q customer concentration disclosure
- **Adjusted EBITDA minus cash interest ต่ำกว่า $500M** หรือ CoreWeave ออก equity raise ที่ราคาต่ำกว่า prior quarter 20%+ — forced dilution signal ว่า runway พัง
- **Backlog (RPO) QoQ ติดลบ** หรือ RPO ลดลง >$5B ใน 1 quarter จาก customer default/renegotiation — สังเกตได้จาก 10-Q RPO disclosure ทุกไตรมาส

### 6. What to ask before owning it

1. Backlog $99.4B มี cancellation penalty จริงไหม — ถ้า AI startup ล้ม CoreWeave รับ downside แค่ไหน อ่านจาก contract terms ใน 10-K
2. Microsoft สร้าง Maia 100 เอง — timeline การ deploy คือเมื่อไหร่ และมันทดแทน GPU ที่ซื้อจาก CoreWeave ได้กี่ %?
3. $31–35B capex FY2026 fund ด้วยอะไร — equity, debt, หรือ operating cash flow — และ dilution จะหนักแค่ไหน?
4. ถ้า AI demand ชะลอ 2 ปีตั้งแต่วันนี้ CoreWeave service debt ไหวไหมโดยไม่ต้อง raise ฉุกเฉิน?
5. Nasdaq-100 inclusion 22 มิ.ย. จะทำหุ้นขึ้นจาก passive fund buying — นั่นคือ entry point จริงหรือ momentum trap?

---

## Verdict (Neon)

**PASS**

Microsoft 67% concentration + กำลังสร้าง Maia 100 in-house = single point of failure ที่ใหญ่เกินไป Debt $14.7B + capex $31–35B ปีนี้ + interest run-rate $2B+/ปี ทำให้ buffer얇มาก คำถามใน "What to ask" ยังตอบไม่ได้หลายข้อ ต้องเข้าใจให้ชัดก่อนซื้อ

**เหตุผลหลัก:**
- Microsoft คือทั้ง biggest customer และ potential competitor ที่กำลัง build alternative เอง — ไม่มีสถานการณ์ที่คุณในฐานะนักลงทุนป้องกันได้ถ้าเขาตัดสินใจย้าย workload
- Leverage สูงมากจนเป็น pattern ที่อันตราย — บริษัทต้องการ capital market สนับสนุนต่อเนื่อง ถ้า sentiment เปลี่ยนโครงสร้างสั่น
- ยังตอบ 5 คำถามใน "What to ask" ไม่ได้เลย — หลักคือไม่ซื้อถ้ายังตอบคำถามไม่ได้หมด

**What to watch:** CRWV ให้ AI-infra exposure ในรูปแบบที่มีหนี้และ concentration risk สูงกว่า large-cap chip names มาก — ต้องชั่ง risk ที่เพิ่มเทียบกับ exposure ที่ได้

---

## Fact Check (Eve)

**Source files ที่ตรวจ:** `sources/CRWV/10-k-latest.md`, `sources/CRWV/q1-2026-call.md`, `sources/CRWV/news-latest.md`

**ผลสรุป:** 40 ✅ Confirmed / 2 ⚠️ Unconfirmed (reconcile แล้วในตัว brief)

**รายการ Unconfirmed ที่ reconcile แล้ว:**
- **"30%+ non-investment-grade"** — source ระบุ "less than 30%" แก้ไขแล้วในตัว brief เป็น "ต่ำกว่า 30%" พร้อมปรับ impact calculation
- **"interest $2.1B/year"** — เป็น derived calculation จาก Q1 run-rate เพิ่ม note "(ประมาณการจาก Q1 run-rate — Q2 guidance ชี้ว่า run-rate จริงสูงกว่า)" แล้ว
- **Bond ใหม่ $3.55B** — มาจาก news-latest.md ไม่ใช่ 10-K/transcript เพิ่ม note "(ตัวเลขจากข่าว — ไม่อยู่ใน 10-K/transcript)" แล้ว

**ตัวเลขหลักทุกตัวใน Fundamentals signal และ Latest earnings ได้รับการยืนยันจาก source files ทั้งหมด**
