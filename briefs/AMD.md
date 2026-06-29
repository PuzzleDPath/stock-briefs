# AMD — Advanced Micro Devices
_Brief generated: 2026-06-28_

## อ่านง่าย

**ทำอะไร:** AMD คือบริษัทที่ออกแบบชิปคอมพิวเตอร์ ทั้ง CPU (สมองของคอม) และ GPU (ชิปสำหรับประมวลผล AI และเรนเดอร์กราฟิก) โดยไม่มีโรงงานเป็นของตัวเอง ส่งแบบให้ TSMC ผลิตให้ ลูกค้าหลักคือบริษัทใหญ่อย่าง Microsoft และ Meta ที่ต้องการชิปสำหรับ data center ของพวกเขา

**ทำไมน่าสนใจ:** ธุรกิจ AI data center ของ AMD โตเร็วมาก และ Meta เพิ่งล็อคดีลสั่งชิป GPU ที่ออกแบบพิเศษจาก AMD โดยเฉพาะ ซึ่งจะเริ่มส่งมอบในครึ่งปีหลังของปี 2026

**ต้องระวัง:** NVIDIA ยังครองตลาด AI GPU อยู่แน่น เพราะมีระบบซอฟต์แวร์ที่นักพัฒนาทั่วโลกคุ้นเคยจนยากจะเปลี่ยน และตอนนี้ AMD มี Meta เป็นลูกค้ารายใหญ่รายเดียวในส่วน AI GPU พิเศษนี้ ถ้า Meta ลดออร์เดอร์กระทบตรงๆ

**สรุปสั้นๆ:** AMD โตจริงและมีดีลใหญ่อยู่ในมือ แต่ Neon ให้สถานะ WATCH ไว้ก่อน เพราะอยากรอดูว่าจะมีลูกค้ารายที่สองมายืนยันแบบ Meta ไหม ก่อนจะมั่นใจได้ว่าบริษัทกำลังสร้างฐานลูกค้า AI จริงๆ ไม่ใช่แค่พึ่งรายเดียว

---

## 1. Company snapshot

AMD (Advanced Micro Devices) ออกแบบและขายชิปประเภท CPU, GPU, และ adaptive computing solutions แบบ fabless — ไม่มีโรงงานผลิตเอง ส่งออกแบบให้ TSMC ผลิต ลูกค้าหลักคือ data center hyperscalers (Microsoft, Meta) ที่ต้องการชิปสำหรับ AI server รวมถึงผู้ผลิต PC และคอนโซลเกม (Sony, Microsoft) รายได้ FY2025 รวม $34.6bn มาจากกลุ่ม Data Center ~48% ซึ่งกำลังโตเร็วมากจาก AI server demand

## 2. Fundamentals signal

- **Revenue ขึ้นเร็วและต่อเนื่อง:** $22,680M (FY2023) → $25,785M (FY2024) → $34,639M (FY2025) โต 34% YoY ใน FY2025 แรงขับหลักคือ Data Center ที่โตจาก $6,496M → $16,635M ใน 3 ปี (source: sources/AMD/10-k-latest.md)
- **Margin ขยายทุกชั้น:** Gross margin 46% → 49% → 50%, Operating margin 2% → 7% → 11% — scale ได้จริง ค่าใช้จ่าย leverage ดีขึ้นเรื่อยๆ (source: sources/AMD/10-k-latest.md)
- **Balance sheet ไม่มีปัญหา:** Cash $5,539M vs Debt $3,222M → net cash บวก ไม่มีสัญญาณกดดัน (source: sources/AMD/10-k-latest.md)
- **Capital allocation เน้น reinvest + buyback:** CapEx FY2025 $974M, buyback $1,316M — ไม่จ่าย dividend คืนเงินผ่านหุ้นและลงทุนในธุรกิจต่อ (source: sources/AMD/10-k-latest.md)
- **Embedded ยังซบเซา:** ลดลงต่อเนื่องจาก $5,317M (FY2023) → $3,454M (FY2025) — drag ที่ต้องติดตามว่าจะ recovery หรือโครงสร้างเปลี่ยนถาวร (source: sources/AMD/10-k-latest.md)

## 3. Latest earnings (Q1 2026)

- Revenue Q1 2026: $10.3B (+38% YoY) (source: sources/AMD/q-latest-call.md)
- EPS: $1.37 (+43% YoY) (source: sources/AMD/q-latest-call.md)
- Gross margin: 55% (+170 bps YoY) (source: sources/AMD/q-latest-call.md)
- Data Center: $5.8B (+57% YoY), Client+Gaming: $3.6B (+23% YoY), Embedded: $873M (+6% YoY) (source: sources/AMD/q-latest-call.md)
- FCF: $2.6B (record, 25% of revenue) (source: sources/AMD/q-latest-call.md)
- Q2 2026 Guidance: ~$11.2B (±$300M, +~46% YoY), gross margin ~56% (source: sources/AMD/q-latest-call.md)
- PC/Gaming คาดลดลง >20% H2 2026 จาก elevated memory/component costs (source: sources/AMD/q-latest-call.md)
- CEO Lisa Su: Meta ล็อค AMD Instinct GPU deal (custom MI450) up to 6 GW, shipments H2 2026 (source: sources/AMD/q-latest-call.md)
- CFO: MI450 ramp มี margin ต่ำกว่าค่าเฉลี่ย แต่ offset ด้วย server CPU + client mix; OpEx +42% YoY (R&D โตเร็วกว่า SG&A) (source: sources/AMD/q-latest-call.md)

## 4. Bull case / Bear case

**Bull case:**
- Data Center โต 57% YoY ใน Q1 2026 และ Meta deal (custom MI450, up to 6 GW) คือ pipeline ที่จับต้องได้แล้ว ไม่ใช่แค่ hype
- Fabless model ไม่ต้องแบก heavy capex อย่าง IDM — operating leverage ชัดเจนจาก margin ที่ขยายทุกชั้นใน 3 ปี
- Lisa Su มีประวัติ execution ที่พิสูจน์แล้ว — พลิก AMD จากขาดทุนมาเป็นผู้แข่งขันจริงใน CPU/GPU ได้ภายใน 5 ปี

**Bear case (from Rey):**
1. **Meta deal คือ custom chip สำหรับลูกค้าเดียว:** MI450 มี margin ต่ำกว่าค่าเฉลี่ย (CFO ยืนยัน) และยังไม่มีหลักฐานว่า hyperscaler อื่น (Azure, GCP, AWS) จะซื้อ MI450-class custom silicon ด้วย ถ้า Meta พัฒนา in-house silicon ต่อ (MTIA) AMD ถือ custom chip ที่หาผู้ซื้อรายที่สองไม่ได้
2. **Operating leverage วิ่งถอยหลัง:** Q1 2026 OpEx +42% YoY เกิน Revenue +38% YoY — AMD กำลังใช้จ่ายเกินรายได้ ถ้า Data Center ชะลอแม้เล็กน้อยหรือ PC/Gaming decline ลึกกว่าคาด cost base ดูดซับไม่ได้
3. **Software gap (ROCm vs CUDA) คือ weakness ที่หนักที่สุดและ brief แรกไม่พูดถึงเลย:** NVIDIA มี CUDA ecosystem ที่สะสมมาหลายปีจน ML frameworks ทุกตัว (PyTorch, TensorFlow) ทำงานบน CUDA เป็น default AMD's ROCm ยังตามไม่ทันในแง่ compatibility และ performance บน training workloads (ข้อมูลบริบทอุตสาหกรรม — ไม่มีใน source files) hyperscaler ส่วนใหญ่ใช้ AMD สำหรับ inference tier (margin ต่ำ commoditizable) ไม่ใช่ frontier model training (margin สูง defensible)

## 5. Kill conditions

1. **MI450 ไม่มี hyperscaler รายที่สอง:** ไม่มีการประกาศ Instinct MI-series custom silicon deal กับ hyperscaler นอกเหนือจาก Meta ใน 4 quarter หลัง MI450 volume ramp เริ่ม (H2 2026) — ติดตาม AMD earnings call disclosures ทุก quarter
2. **Data Center gross margin <52% ติด 2 quarter ขณะ MI450 ramping:** Q2 2026 guidance gross margin ~56% ถ้าลงเกิน 4 percentage points จาก peak และอยู่ต่ำกว่า 52% ติด 2 quarter "high-margin AI GPU" narrative ไม่เป็นจริง — AMD trade margin เพื่อ market share แทน
3. **OpEx growth เกิน revenue growth ติด 2 quarter:** Q1 2026 ทำแล้ว (+42% vs +38%) ถ้า Q2+Q3 2026 ยังเป็นแบบนี้ operating leverage structurally absent ไม่ใช่แค่ ramp cost ชั่วคราว
4. **ROCm ไม่ปิด gap ที่วัดได้:** ไม่มี public confirmation (earnings call, technical blog, หรือ benchmark อิสระ) ว่า Microsoft Azure, Google Cloud, หรือ AWS รัน frontier model training workloads บน AMD Instinct อย่างมีนัย สิ้น FY2026 — AMD ชนะ inference ไม่ validate AI GPU moat story
5. **Embedded ไม่กลับมา >$1.2B/quarter ภายใน Q4 2026:** Embedded เคย run rate $5.3bn/ปี ตอนนี้ $873M/quarter ถ้าไม่ฟื้นสู่อย่างน้อย $1.2B/quarter ($4.8bn annualized) ภายใน Q4 2026 นี่ไม่ใช่ cyclical trough — เป็น structural share loss และ AMD ต้องพึ่ง AI GPU เพียงอย่างเดียวสำหรับ margin

## 6. What to ask before owning it

1. คุณเข้าใจไหมว่า AMD แตกต่างจาก NVIDIA อย่างไรใน AI GPU จริงๆ? ทำไม hyperscaler บางเจ้าถึงเลือก AMD — เป็นเพราะราคา เพราะ performance บน inference หรือเพราะ supply constraint ของ NVIDIA?
2. Meta deal (custom MI450) เป็น recurring หรือเปล่า? ถ้า Meta ลด order รุ่นถัดไปหรือหัน in-house AMD ทดแทนรายได้ที่หายด้วยอะไร?
3. Embedded ที่ยังซบเซา — thesis ของคุณ depend on Embedded recovery ไหม? ถ้าไม่ฟื้นใน 2026 คุณยังถือต่อไหม?
4. AMD พึ่ง TSMC 100% สำหรับ leading-edge node — ถ้า TSMC มีปัญหา capacity หรือ geopolitical กระทบ AMD supply chain อย่างไร?
5. ราคาที่คิดจะซื้อ implied P/E เท่าไหร่? AMD ที่ margin ยังต่ำกว่า NVIDIA และ competitive advantage ยัง Moderate ควร trade ที่ multiple เท่าไหร่?

## Verdict (Neon)

**WATCH**

มี moat ใน CPU จริง (switching cost) แต่ฝั่ง AI GPU ยังไม่ Strong พอ รอพิสูจน์

### เกณฑ์ 5 ข้อ
- Moat: ❌ switching cost (CPU/x86 design win) = Moderate — มีจริงใน CPU แต่ AI GPU ยังไม่มีหลักฐาน durable advantage (vs NVIDIA)
- Growth: ✅ AI infrastructure + Data Center demand — โตเร็ว (revenue +34% FY2025, EPS +43% Q1 2026)
- Macro: ✅ ไม่พึ่ง Fed — growth ขับด้วย AI infrastructure demand ไม่ใช่ rate
- Momentum trap: ✅ ผ่าน — growth มาก่อนราคาวิ่ง
- Kill conditions: ✅ 5 ข้อวัดได้จากตัวเลขจริง

### Risk ก่อน DCA
- เป็น strong #2 ใน CPU (vs Intel) แต่ยังไกลจาก #1 ใน AI GPU (vs NVIDIA) — competitive advantage ยัง Moderate
- ได้เปรียบ price/performance บน inference tier แต่ยังไม่มีหลักฐาน training workload wins

### จะเป็น BUY เมื่อ
hyperscaler ที่สอง (Azure, GCP, AWS) ยืนยัน MI-series deal + Data Center gross margin ยืนเหนือ 52% ผ่าน MI450 ramp + Embedded กลับมา >$1.2B/quarter

_verdict นี้มาจากข้อมูลใน brief วันที่ 2026-06-28 — ไม่ใช่คำแนะนำการลงทุน การตัดสินใจสุดท้ายเป็นของ owner เสมอ_

## Fact Check (Eve)

**Source files checked:**
- `sources/AMD/10-k-latest.md` (FY2025 10-K, covers FY2023–FY2025)
- `sources/AMD/q-latest-call.md` (Q1 2026 earnings call, May 6 2026)
- `sources/AMD/news-latest.md` (news/analyst moves, fetched 2026-06-28)

**27 confirmed / 1 reconciled:**

- ⚠️ "NVIDIA มี CUDA ecosystem ที่สะสมมาหลายปี" — context claim ที่ไม่มีใน source files (industry knowledge) → ระบุไว้แล้วใน body ว่า "(ข้อมูลบริบทอุตสาหกรรม — ไม่มีใน source files)" ลบตัวเลขเฉพาะออกแล้ว
- ✅ Kill condition thresholds — เป็น editorial analytical thresholds ไม่ใช่ factual claims จาก source ไม่ต้อง verify
