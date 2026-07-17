# NVDA — NVIDIA Corporation
_Brief generated: 2026-06-30_

## อ่านง่าย

**ทำอะไร:** NVIDIA ออกแบบชิปพิเศษสำหรับงาน AI — บริษัทยักษ์ใหญ่อย่าง Microsoft, Amazon, Google ซื้อไปใช้สร้างระบบ AI ของตัวเอง รายได้เกือบทั้งหมดมาจากกลุ่มนี้

**ทำไมน่าสนใจ:** นักพัฒนา AI ทั่วโลกเรียนและใช้ platform ของ NVIDIA (ชื่อ CUDA) มาหลายสิบปีจนเปลี่ยนไปใช้ของคู่แข่งยากมาก เหมือนทุกคนในวงการเขียนโค้ดด้วย "ภาษา" ของ NVIDIA อยู่แล้ว ถอนตัวได้ยากกว่าที่คิด

**ต้องระวัง:** ลูกค้าหลักอย่าง Microsoft และ Amazon กำลังพัฒนาชิป AI ของตัวเองอยู่แล้ว — ถ้าเขาหันมาใช้ของตัวเองมากขึ้น รายได้ NVIDIA กระทบหนักแน่ นอกจากนี้รัฐบาลสหรัฐจำกัดการส่งออกชิปไปบางประเทศอยู่ ถ้าขยายวงกว้างขึ้นอีกคือความเสี่ยงใหญ่ที่คาดการณ์ยาก

**สรุปสั้นๆ:** NVIDIA อยู่ตรงกลางของกระแส AI ที่โตเร็วมาก ตัวเลขโตจริง และมีข้อได้เปรียบที่คู่แข่งลอกยาก แต่ราคาหุ้นตอนนี้ถือว่าแพงอยู่แล้ว — Neon ให้ผลบวกเพราะ moat แข็ง ตัวเลขพื้นฐานดีที่สุดในกลุ่ม และกำหนด "เงื่อนไขที่จะทำให้ thesis พัง" ไว้ชัดเจน ไม่ใช่เพราะฟันธงว่าราคาจะขึ้น

## 1. Company snapshot

NVIDIA ออกแบบและขาย GPU, CPU, DPU และ networking chips สำหรับ data center ลูกค้าหลักคือ hyperscaler และ cloud provider เช่น Microsoft, Amazon, Google ที่สร้าง AI infrastructure รายได้ 92% มาจากกลุ่ม Data Center ส่วนที่เหลือเป็น Gaming, Professional Visualization และ Automotive จุดแข็งหลักคือ CUDA ecosystem ที่ developer/researcher ทั่วโลกใช้มาหลายสิบปีจนเปลี่ยนไปใช้ platform อื่นยากมาก (switching cost สูง) ลูกค้าสองรายรวมกันมีสัดส่วนถึง 39% ของรายได้ใน Q2 FY2026 ดังนั้น concentration risk มีอยู่จริงและต้องจับตา

## 2. Fundamentals signal

- **Revenue — เร่งต่อเนื่อง:** FY2026 $215.9B +65% YoY จาก $130.5B FY2025 โดย Data Center $193.7B (+68%) คือแรงขับหลัก; Data Center Networking เร่งแรงสุดที่ +142% (source: 10-k-latest.md)
- **Margin — ลดชั่วคราว แต่ฟื้นแล้ว:** Gross margin GAAP FY2026 ลดจาก 75.0% เหลือ 71.1% จาก Hopper→Blackwell transition + H20 inventory loss $4.5B; Q1 FY2027 non-GAAP ฟื้นกลับ 75% แล้ว (source: 10-k-latest.md, q-latest-call.md)
- **Balance sheet — แข็งแกร่ง:** Total current assets $125.6B (cash & equivalents จริง $10.6B), หนี้รวม $8.5B, shareholders' equity $157.3B, total assets $206.8B (source: 10-k-latest.md)
- **Capital allocation — FCF สูงมาก:** FCF FY2026 $96.6B; Q1 FY2027 FCF $49B (จาก $35B ไตรมาสก่อน); buyback FY2026 $40.1B + ปันผล $974M; remaining authorization $58.5B หลัง FY2026 + new $80B ใน Q1 FY2027 (source: 10-k-latest.md, q-latest-call.md)
- **Concentration risk:** ลูกค้า 2 ราย (Customer A 23%, Customer B 16%) = 39% ของรายได้ Q2 FY2026 (source: 10-k-latest.md)

## 3. Latest earnings — Q1 FY2027 (May 20, 2026)

- Revenue $82B +85% YoY +20% QoQ — ไตรมาสที่ 14 ติดกันที่โต QoQ (source: sources/NVDA/q-latest-call.md)
- Data Center $75B (92% of total) +92% YoY — computing $60B, networking $15B (nearly tripled YoY) (source: sources/NVDA/q-latest-call.md)
- Hyperscale subsegment $38B; ACIE (AI Cloud, Industrial, Enterprise) $37B +31% QoQ (source: sources/NVDA/q-latest-call.md)
- Non-GAAP gross margin 75%; FCF $49B (จาก $35B ไตรมาสก่อน); returned $20B to shareholders; ปันผลขึ้นจาก $0.01 → $0.25/share (source: sources/NVDA/q-latest-call.md)
- Q2 FY2027 guidance: $91B ±2%, non-GAAP gross margin 75% ±50 bps (GAAP 74.9%), GAAP OpEx ~$8.5B; China data center compute ไม่รวมใน guidance (ไม่มี H200 shipment) (source: sources/NVDA/q-latest-call.md)

## 4. Bull case / Bear case

**Bull case:**
- **CUDA switching cost (switching cost power)** — developer/researcher เขียนโค้ดบน CUDA มาหลายสิบปี ย้ายไป platform อื่น (ROCm, Gaudi) หมายถึง retrain ทั้งองค์กร demand ไม่หายง่ายๆ แม้ competitor ออก chip ใหม่ (narrative claim — ไม่มีตัวเลข % workloads ยืนยัน)
- **Blackwell ramp** — throughput 2.7x, cost-per-token ลด 60% ใน 6 เดือน (ตัวเลขจาก NVDA เอง ยังไม่มี independent benchmark); H100 cloud rental prices +20% YoY สะท้อน demand layer ที่ยังแน่น (source: q-latest-call.md)
- **TAM expansion** — Vera CPU เปิด addressable market ~$200B, standalone CPU revenue projected $20B ปีนี้ (marketing claim — ยังไม่มี revenue จริง ต้องติดตาม); sovereign AI 40+ ประเทศโต 80%+ YoY (ไม่มีตัวเลขฐาน absolute) (source: q-latest-call.md)

**Bear case (Rey):**
- **Hyperscaler in-house chips ไม่ใช่ hypothetical** — Google TPU v5, Microsoft Maia 100, Amazon Trainium2 shipping แล้ว ลูกค้า 2 ราย = 39% revenue ถ้าย้ายแค่ 20% workload ไป in-house chip กระทบทันที และไม่มีลูกค้าใหม่มาทดแทนได้ทัน
- **Export control ปิด China ถาวร + Middle East คือ tripwire ถัดไป** — "sovereign AI 40+ ประเทศ" bull case เน้น UAE/Saudi ซึ่ง BIS กำลัง negotiate ข้อจำกัด ถ้าล็อกทั้งสองตลาดพร้อมกัน TAM expansion story พังทั้งหมด ทั้งที่ China ถูกปิดไปแล้ว
- **Priced for acceleration ไม่ใช่ continuation** — hyperscaler รวม capex ผ่าน $250B/ปี ทุก earnings call ถูก shareholders ถาม ROI; ถ้า capex growth rate ลดจาก 80% → 25% revenue NVDA compress ทันที และ multiple ปัจจุบัน indefensible

## 5. Kill conditions (Rey)

- **Hyperscaler capex slowdown:** ลูกค้า 2 ใน 4 (Microsoft/Google/Amazon/Meta) รายงาน Data Center capex growth ต่ำกว่า 20% YoY สองไตรมาสติด — สังเกตได้จาก hyperscaler earnings ก่อน NVDA 4-6 สัปดาห์
- **BIS export restriction ใหม่:** BIS ออก export license restriction ครอบ UAE, Saudi Arabia หรือ Singapore — สังเกตได้ทันทีจาก Federal Register ก่อนเข้า guidance ของ NVDA
- **Margin collapse ขณะ revenue ยังโต:** Non-GAAP gross margin ต่ำกว่า 73% ในไตรมาสที่ Data Center revenue ยังโต YoY — combination นี้ปิด loophole "transition noise" และบ่งชี้ pricing power erosion จริง หรือ hyperscaler ใช้ in-house chip เป็น leverage กด discount

## 6. What to ask before owning it

1. ทำไม developer ถึงเลือก CUDA แทน ROCm หรือ Intel Gaudi? switching cost แข็งแค่ไหนในทางปฏิบัติ — มีองค์กรไหนที่เคย migrate ออกแล้วกลับมาได้บ้าง?
2. ถ้า hyperscaler 1-2 ราย shift workload ไป in-house chip 20% รายได้ NVDA กระทบแค่ไหน? ธุรกิจอื่น (Gaming, Auto ฯลฯ) พอชดเชยได้ไหม?
3. ราคา ~$195 ต้องการ revenue growth อีกเท่าไหรและนานแค่ไหน จึงจะ justify ได้? ตลาด price in อะไรไว้แล้ว?
4. VeraRubin/Vera CPU มีลูกค้าจริงสั่ง order แล้วหรือยัง หรือยังเป็นแค่ pre-announcement?
5. BIS/export rule — มีช่องทางติดตาม Federal Register หรือ BIS semiconductor updates ได้ไหม เพื่อจับ kill condition ข้อ 2 ได้ทันก่อน NVDA guidance ออกมา?

## Verdict (Neon)

**BUY**

CUDA switching cost ล็อค developer ทั่วโลกไว้แน่น และ fundamental Q1 FY2027 แข็งที่สุดในกลุ่ม

### เกณฑ์ 5 ข้อ
- Moat: ✅ switching cost (CUDA ecosystem) = Strong — developer/researcher ย้ายออกต้อง retrain ทั้งองค์กร สะสมมา 15+ ปี
- Growth: ✅ Blackwell ramp + AI infra demand — โตเร็ว (+85% YoY Q1 FY2027, guidance $91B Q2)
- Macro: ✅ ไม่พึ่ง — thesis ขับด้วย product cycle + CUDA lock-in ไม่ใช่ Fed/rate
- Momentum trap: ✅ ผ่าน — FCF $49B, margin ฟื้น 75%, revenue acceleration 3 ไตรมาสติด รองรับราคา
- Kill conditions: ✅ 3 ข้อวัดได้ — capex growth hyperscaler, BIS export restriction, gross margin ต่ำกว่า 73% ขณะ revenue ยังโต

### Risk ก่อน DCA
- Customer concentration สูง: 2 รายรวม 39% ของ revenue ถ้าใครเร่ง in-house chip แม้แค่ 20% workload กระทบทันที ไม่มีลูกค้ามาทดแทนได้เร็ว
- Export control เป็น binary risk: China ปิดแล้ว UAE/Saudi อยู่ระหว่าง BIS negotiate — ถ้าล็อกพร้อมกันสองตลาด sovereign AI bull case พังทั้งหมด ต้องอ่าน Federal Register เป็นสัญญาณแรก

_verdict นี้มาจากข้อมูลใน brief วันที่ 2026-06-30 — ไม่ใช่คำแนะนำการลงทุน การตัดสินใจสุดท้ายเป็นของ owner เสมอ_

## Fact Check (Eve)

**Source files:** sources/NVDA/10-k-latest.md (FY2026 10-K, fetched 2026-06-07), sources/NVDA/q-latest-call.md (Q1 FY2027, fetched 2026-06-07), sources/NVDA/news-latest.md (fetched 2026-06-30)

**37/38 ตัวเลข confirmed** | 1 แก้ไขก่อน save | 0 no source

**แก้ไขแล้ว:** "Cash $125.6B" ติด label ผิด — ค่านี้คือ Total Current Assets ไม่ใช่ cash จริง; cash & equivalents จริงอยู่ที่ $10.6B; แก้ไขใน Section 2 แล้ว

**No section ที่ตรวจไม่ได้** — ทุก section มี source file ครบ
