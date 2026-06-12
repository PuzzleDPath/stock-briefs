# AMD — Advanced Micro Devices
_Brief generated: 2026-06-12_

### 1. Company snapshot

AMD ออกแบบและขายชิปสำหรับ data center, PC, เกมคอนโซล, และอุปกรณ์อุตสาหกรรม — ไม่มีโรงงานผลิตเอง ใช้ TSMC เป็นผู้ผลิต ลูกค้าหลักคือ hyperscaler ขนาดใหญ่ (Microsoft, Meta, Google) ที่ซื้อทั้ง GPU series Instinct สำหรับ AI training/inference และ CPU server ชื่อ EPYC ซึ่งแย่งส่วนแบ่งตลาดจาก Intel มาอย่างต่อเนื่อง segment ที่เติบโตเร็วที่สุดคือ Data Center ซึ่ง FY2025 ใหญ่กว่า Client+Gaming+Embedded รวมกันแล้ว

### 2. Fundamentals signal

- **Revenue เร่งตัวจาก AI cycle:** $22.7B (FY2023) → $25.8B (FY2024, +14%) → $34.6B (FY2025, +34%) — Data Center โตระเบิด $6.5B → $12.6B → $16.6B ใน 2 ปี
- **Gross margin ขยับขึ้น, operating leverage เริ่มปรากฏ:** Gross margin 46% → 49% → 50%; operating margin 2% → 7% → 11% (FY2023–25) — scale ดูดซับค่าใช้จ่าย R&D/SG&A ได้มากขึ้น
- **Balance sheet net cash positive:** Cash $5.5B vs debt $3.2B → net cash ~$2.3B; ไม่มีความเสี่ยงสภาพคล่อง
- **ลงทุนเพิ่มขึ้น + ซื้อหุ้นคืน ไม่มีปันผล:** Capex $546M (FY2023) → $974M (FY2025); Buyback $985M → $1.3B — ลงทุนในตัวเองขนานกับส่งเงินคืน shareholder
- **Embedded ยังฟื้นช้า:** $5.3B → $3.6B → $3.5B (FY2023–25) — segment นี้ทรงตัวและยังไม่เป็น growth driver

### 3. Latest earnings (Q1 2026)

- Revenue $10.3B (+38% YoY) เกิน guidance สูงสุด (source: sources/AMD/q-latest-call.md)
- Data Center $5.8B (+57% YoY), operating income $1.6B at 28% margin (source: sources/AMD/q-latest-call.md)
- Client + Gaming $3.6B (+23% YoY): Client $2.9B (+26%), Gaming $720M (+11%) (source: sources/AMD/q-latest-call.md)
- Embedded $873M (+6% YoY), operating margin 39% (source: sources/AMD/q-latest-call.md)
- Gross margin 55% (+170bps YoY); EPS diluted $1.37 (+43% YoY); FCF record $2.6B (25% of revenue) (source: sources/AMD/q-latest-call.md)
- Guidance Q2 2026: revenue ~$11.2B (±$300M), gross margin ~56% (source: sources/AMD/q-latest-call.md)
- Meta partnership: MI450 custom GPU, up to 6GW compute, shipments starting H2 2026 (source: sources/AMD/q-latest-call.md)
- H2 2026 risk: PC + gaming demand คาดลดลง >20% จาก memory/component cost สูง (source: sources/AMD/q-latest-call.md)

### 4. Bull case / Bear case

**Bull:**
- **Counter-positioning vs Intel ที่ยัง work:** EPYC server CPU วัดได้จากตัวเลขจริง — cloud instances เกิน 1,600 (+50% YoY), hyperscaler ขยาย EPYC footprint ต่อเนื่อง; Intel Granite Rapids เป็น known competitive response แต่ AMD ยังนำอยู่ในแง่ performance per socket
- **AI GPU optionality กำลัง convert:** MI300/MI350 landing ใน hyperscalers จริง; Meta MI450 partnership ถ้า convert เต็มที่จะเป็น revenue ขนาดใหญ่ในปี 2027+
- **Scale economics กำลังเริ่มทำงาน:** Operating margin 11% FY2025 จาก 2% FY2023 — ถ้า revenue ยังเร่งตัว margin expansion จะต่อเนื่อง

**Bear (Rey):**
- **ROCm คือ ceiling จริง ไม่ใช่ hardware:** MI300/MI350 wins และ Meta MI450 partnership ไม่ได้ยืนยันว่าใช้สำหรับ AI training — อาจเป็นแค่ inference ซึ่ง compute intensity ต่ำกว่าและ revenue density น้อยกว่า Training workload ต้องการ software depth ระดับ CUDA ที่ ROCm ยังไม่มี — ถ้า MI450 เป็น inference-only, bull thesis อ่อนกว่าที่ดูมาก
- **MI450 รามป์มาพร้อม margin ต่ำกว่าค่าเฉลี่ย + H2 2026 ไม่มี buffer:** CFO ยอมรับชัดว่า MI450 gross margin ต่ำกว่า blended rate — ถ้า MI450 เร่งใน H2 ขณะ PC/Gaming ลด >20% พร้อมกัน margin expansion story reverse โดยไม่มี segment ใดรับแรงแทน
- **Data Center concentrated ใน 3 hyperscalers ที่กำลังสร้าง silicon เอง:** Microsoft (Maia), Meta (MTIA), Google (TPU) คือทั้ง biggest customer และ potential competitor Meta MI450 partnership คือ upside วันนี้ แต่พร้อมกัน Meta กำลัง develop institutional muscle ที่จะ design around AMD ในรุ่นถัดไป — concentration risk นี้ไม่มีในส่วน bull

### 5. Kill conditions

- **Data Center revenue ต่ำกว่า $5.0B ในไตรมาสใดของปี 2026 หรือ Data Center YoY growth ต่ำกว่า 20% สองไตรมาสติด** — Q1 record $5.8B ที่ +57%; ถ้า drop มาถึง $5B = hyperscaler order pushout หรือ custom silicon displacement เริ่มแล้ว ไม่ใช่แค่ risk อนาคต สังเกตได้จาก quarterly earnings
- **Gross margin ต่ำกว่าหรือเท่ากับ 52% ในไตรมาสใดที่ MI450 เป็น volume driver หลัก (H2 2026+)** — ยืนยันว่า dilution warning ของ CFO materializing เร็วกว่า mix-shift จะ offset; margin expansion story ที่ drive re-rating FY2023–25 สิ้นสุด
- **Hyperscaler ใดใน 3 ราย (Microsoft, Meta, Google) ประกาศลด AMD GPU procurement เพื่อเอา in-house silicon แทน** — สังเกตได้จาก earnings call language, supply chain news, หรือ AMD-powered cloud instance count flat/down จาก 1,600+

### 6. What to ask before owning it

1. ROCm mature แค่ไหนในปี 2026 — Meta ใช้ MI450 สำหรับ training หรือแค่ inference?
2. MI450 margin dilution จะ peak และ reverse เมื่อไหร่ — mechanism คืออะไร?
3. Intel Clearwater Forest / Granite Rapids กัด EPYC market share กี่ % จริงๆ ในปี 2027?
4. H2 2026 PC demand ลด >20% — AMD ต้อง lean บน Data Center หนักแค่ไหน และ cycle นั้น sustainable ไหม?
5. Embedded $3.5B ที่ฟื้นช้า — recovery ใน FY2027 จะ material หรือแค่ rounding error?

---

## Verdict (Neon)

**WATCH**

AMD มีข้อได้เปรียบด้าน CPU ที่วัดได้จากตัวเลขจริง และ AI GPU กำลัง convert เป็น revenue แต่ยังมีคำถามสำคัญที่ verify ไม่ได้ว่า MI450 จะแข่งกับ NVDA ใน training workload ได้จริงแค่ไหน และ H2 2026 จะเป็นปีที่ margin ถูกกดจาก product transition ก่อนที่ผลจะออก ยังไม่ใช่เวลาที่ดีที่สุดในการเข้า เพราะ thesis ยังต้องการข้อมูลยืนยันก่อน

**เหตุผลหลัก:**
- ROCm ecosystem กับ MI450 execution ใน AI training ยังไม่มีข้อมูลเพียงพอให้ verify ได้ว่าจะปิด gap กับ CUDA จริง — ถ้า verify ไม่ได้ ไม่ใส่ confidence
- H2 2026 มีความเสี่ยง margin ถูกกดจาก product transition cycle และการแข่งขันที่รุนแรงขึ้นทั้งจาก NVDA และ custom silicon ของ hyperscaler
- Semiconductor concentration ใน portfolio ปัจจุบันอยู่ที่ >51% (NVDA + AVGO) แล้ว การเพิ่ม AMD จะ concentrate risk ใน sector เดิมโดยไม่มี cash buffer รองรับ

**Portfolio fit:** NVDA และ AVGO รวมกันอยู่ที่ 51.16% ของพอร์ตแล้ว และ AVGO เองก็มี AI chip exposure คล้ายกัน — AMD จะเพิ่ม semiconductor concentration ขึ้นอีกโดยที่ cash อยู่ที่ 0% ซึ่งต่ำกว่า minimum rule อยู่แล้ว ถ้าจะเพิ่ม exposure ใน AI chip ตอนนี้ การ add NVDA ที่รู้จักดีกว่าน่าจะ justify ได้ง่ายกว่า

**Checkpoint ก่อนเปลี่ยนเป็น add:**
① MI450 revenue ramp ใน Q3 2026 earnings (ประมาณ ต.ค. 2026) — ถ้า Data Center GPU revenue เติบโต QoQ อย่างน้อย 15% และ management ยืนยัน hyperscaler customer ชื่อที่ verify ได้ ถือว่าผ่าน
② ROCm adoption: มี third-party benchmark หรือ case study จาก cloud provider จริงๆ (ไม่ใช่แค่ AMD บอกเอง) ที่แสดงว่า software stack ใช้งานได้ใน production training workload ก่อน Q4 2026
③ พอร์ตมี cash buffer กลับมาที่ minimum 15% ก่อน — ไม่ว่า thesis จะดีแค่ไหน การซื้อตอน cash = 0% คือ timing ที่แย่สำหรับมือใหม่ที่ต้องการ room to maneuver

---

## Fact Check (Eve)

**Source files ที่ตรวจ:** `sources/AMD/10-k-latest.md`, `sources/AMD/q-latest-call.md`

**ผลสรุป:** 34 ✅ Confirmed / 0 ⚠️ Unconfirmed / 4 ❌ No source (judgment/portfolio — ปกติ)

**ไม่มีตัวเลขที่ต้อง reconcile — ทุก numerical claim ใน brief trace กลับไปที่ source files ได้ครบ**

**รายการ No source (judgment — คงไว้ได้):**
- ROCm ceiling argument — analytical judgment, ไม่ใช่ตัวเลขจาก filing
- Hyperscaler concentration risk (Maia, MTIA, TPU) — analytical framing
- Kill conditions thresholds ($5.0B, 52%) — investment decision rules
- Portfolio allocation figures (NVDA + AVGO 51.16%, cash 0%) — portfolio data ไม่ใช่ AMD filing

**ตัวเลขหลักทุกตัวใน Fundamentals signal และ Latest earnings ได้รับการยืนยันจาก source files ทั้งหมด**
