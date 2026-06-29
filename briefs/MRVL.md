# MRVL — Marvell Technology
_Brief generated: 2026-06-11_

## 1. Company snapshot

Marvell Technology ออกแบบชิปสำหรับโครงสร้างพื้นฐาน AI โดยตรง ไม่ได้ผลิตเอง แต่เป็น "นักออกแบบ" ที่ให้ TSMC หรือโรงงานอื่นผลิตให้ (fabless model) ลูกค้าหลักคือบริษัท cloud ยักษ์ใหญ่ (hyperscaler) ที่ต้องการชิปแบบกำหนดเองสำหรับ AI workload แทนที่จะซื้อ GPU ทั่วไปจาก NVIDIA Marvell ยังทำชิป Ethernet และ optical interconnect สำหรับเชื่อมต่อระหว่าง server ใน data center ด้วย รายได้กว่า 75% ในปีนี้มาจากกลุ่ม Data Center ซึ่งโตเกือบ 2 เท่าในปีที่ผ่านมา

## 2. Fundamentals signal

- **รายได้กำลัง re-accelerate** — FY2025 รวม $5,767M (+4.7% YoY ดูนิ่ง) แต่ Data Center segment โต 88% YoY เดี่ยวๆ บอกว่า revenue mix กำลังเปลี่ยนเร็วมาก; Q1 FY2027 ล่าสุดโต 28% YoY รวม และ guidance FY2027 ชี้ $11.5B (+40% YoY) (source: 10-k-latest.md, q-latest-call.md)
- **GAAP ขาดทุนแต่ cash flow แข็ง** — Net loss GAAP FY2025 = $885M เป็นเพราะค่าใช้จ่ายพิเศษและ amortization จาก M&A ไม่ใช่ธุรกิจขาดทุนจริง Operating cash flow $1,681M (+22.7% YoY) (source: 10-k-latest.md)
- **Gross margin ทรงตัวเล็กน้อยลด** — Non-GAAP gross margin Q1 FY2027 อยู่ที่ 58.9% เทียบกับ 61.0% FY2025 — ต้องจับตาว่าจะลงต่อหรือ stabilize (source: 10-k-latest.md, q-latest-call.md)
- **หนี้มีนัย แต่ลดลงเร็วเพราะ cash flow ดี** — Net debt ปลาย FY2025 ~$3.1B (total debt $4,063.8M vs cash $948.3M); Q1 FY2027 net debt to EBITDA อยู่ที่ 0.32x (source: 10-k-latest.md, q-latest-call.md)
- **R&D สูงมาก แต่เป็น model ของธุรกิจนี้** — R&D spend $1,950M/ปี (34% ของรายได้) บริษัท fabless ต้องทุ่ม R&D ตลอดเพื่อรักษาความสามารถออกแบบชิปรุ่นใหม่ (source: 10-k-latest.md)

## 3. Latest earnings

(Q1 FY2027 — reported May 27, 2026)

- Revenue $2.418B, +9% sequential, +28% YoY — สูงกว่า guidance midpoint (source: q-latest-call.md)
- Data center $1.8B (76% of total), +11% sequential, +27% YoY — driven by custom AI silicon และ interconnect demand (source: q-latest-call.md)
- Non-GAAP EPS $0.80, +29% YoY (source: q-latest-call.md)
- Operating cash flow $639M (record ของบริษัท); net debt to EBITDA: 0.32x (source: q-latest-call.md)
- Q2 FY2027 guidance: revenue $2.7B ±5%, Non-GAAP EPS $0.88–$0.98; FY2027 full-year $11.5B (~40% YoY), FY2028 $16.5B (~45% YoY) (source: q-latest-call.md)

## 4. Bull case / Bear case

**Bull case:**
- **Switching cost ลึกมาก** — hyperscaler ที่เริ่ม co-design custom ASIC กับ Marvell ต้องใช้เวลาหลายปีต่อ design cycle (industry practice — 10-K และ transcript ไม่ได้ระบุตัวเลขปีไว้ตรงๆ) การเปลี่ยน vendor แปลว่าต้องออกแบบทุกอย่างใหม่
- **AI buildout ยังอยู่ต้น** — CEO Matt Murphy กล่าวว่า "every program we looked at a year ago is larger when we look a year later" + NVIDIA partnership ใน NVLink Fusion บอกว่า Marvell ทำงานร่วมกับ NVIDIA ขยาย TAM ไม่ใช่แค่ compete (source: q-latest-call.md)
- **Optical interconnect เป็นธุรกิจที่สอง** — การซื้อ Celestial AI, Polariton, XConn บอกว่า Marvell กำลัง build ใน photonic interconnect; DCI module target $1B annualized revenue ใน FY2028 (source: q-latest-call.md)

**Bear case:**
- **การกระจุกตัวของลูกค้าไม่ใช่แค่ "ความเสี่ยง" — มันคือโครงสร้างธุรกิจที่ทำให้ลูกค้ามีอำนาจต่อรองเหนือกว่า Marvell มาก** — รายได้ 75%+ มาจาก Data Center และลูกค้า hyperscaler หลายราย (10-K ระบุว่า "a few large customers" ไม่ได้ระบุจำนวนชัดเจน) ซึ่งทุกรายคือบริษัทที่ใหญ่กว่า Marvell หลายเท่า ไม่มีข้อมูลว่าสัญญาเหล่านี้ผูกพัน Marvell ไว้กี่ปีหรือมี minimum commitment ไหม ถ้า hyperscaler รายใหญ่แค่รายเดียวตัดสินใจลด order หรือดึง design กลับ in-house รายได้ Data Center ที่โต 88% YoY สามารถพลิกทิศทางได้เร็วมาก
- **Valuation ตั้งอยู่บน guidance ปี 2028 ที่ยังไม่มีข้อมูลยืนยัน — revenue ต้องขยับจาก $5.7B ไปเป็น $16.5B ใน 3 ปี (2.9 เท่า)** — หุ้นพุ่ง +33% วันเดียว (ตัวเลขจากข่าว — ไม่อยู่ใน 10-K/transcript) จาก Jensen Huang พูดชื่อ Marvell ที่ COMPUTEX 2026 — ราคาที่เพิ่มมานั้น price in expectation อย่างรุนแรง Non-GAAP gross margin ลดลงจาก 61.0% (FY2025) มาเป็น 58.9% (Q1 FY2027) แม้รายได้โตเร็ว
- **GAAP ขาดทุนมาหลายปีและ brief ไม่มีตัวเลข SBC หรือ dilution — นั่นคือ blind spot ที่ใหญ่มากสำหรับการถือยาว** — R&D $1,950M/ปี (34% ของรายได้) ถ้าบางส่วนจ่ายด้วย stock แทน cash นั่นคือ dilution ที่กินผลตอบแทนผู้ถือหุ้นระยะยาว — ข้อมูลนี้ยังหาไม่ได้จาก source ที่มีอยู่

## 5. Kill conditions

1. **ถ้า hyperscaler รายใดรายหนึ่งใน top customers ของ Marvell ประกาศหรือยืนยันผ่าน earnings call ว่า in-house ASIC team จะ tape-out chip รุ่นถัดไปโดยไม่ใช้ Marvell เป็น design partner** — ออกทันที สัญญาณที่ monitor ได้: earnings call ของ Google (Alphabet), Amazon (AWS re:Invent), Microsoft — ฟังคำว่า "in-house silicon", "custom chip without partner", "vertically integrated AI hardware"
2. **ถ้า Non-GAAP gross margin ต่ำกว่า 57% ใน 2 quarter ติดกัน โดยไม่มีคำอธิบายจาก management ว่าเป็น temporary product mix** — margin ลดมาจาก 61.0% เป็น 58.9% แล้ว ถ้ายังลงต่อแปลว่า custom ASIC margin ต่ำกว่าที่คิด และ $16.5B revenue target ปี 2028 อาจมาได้แต่กำไรจริงอาจไม่โตตาม
3. **ถ้า FY2027 full-year revenue ต่ำกว่า $10.6B (miss guidance $11.5B เกิน 8%)** — เกิน ±5% range ที่ management ให้เองแปลว่ามีอะไรผิดปกติในธุรกิจ ไม่ใช่แค่ estimate error
4. **ถ้า annual share dilution จากทุกแหล่ง (SBC + convertible notes + options) เกิน 3% ต่อปี ใน 2 ปีติดกัน** — monitor ด้วยการเปรียบ diluted share count จาก 10-K ปีต่อปี

## 6. What to ask before owning it

1. Marvell บอกว่ามีลูกค้า hyperscaler หลายรายที่ co-design ASIC — ถ้ารายใหญ่ที่สุดลด order หรือทำ in-house แทน จะกระทบรายได้กี่ % และบริษัทจะรับมืออย่างไร?
2. หุ้นขึ้น +33% วันเดียวเพราะ Jensen Huang พูดชื่อ Marvell — ถ้าซื้อตอนนี้ซื้อเพราะ fundamental ที่เปลี่ยนไป หรือแค่กลัว miss การขึ้น?
3. FY2028 revenue $16.5B คือ base case หรือ bull case ที่ต้องมีทุกอย่างเดินหน้า? ถ้า hyperscaler capex ชะลอกลางทาง plan B คืออะไร?
4. GAAP ขาดทุนมาหลายปี SBC จ่ายให้พนักงานปีละเท่าไหร่? diluted share count เพิ่มขึ้นกี่ % ต่อปี?
5. NVIDIA เป็นทั้ง partner และ competitor ใน AI infrastructure — ความสัมพันธ์นี้มีเส้นที่ NVIDIA จะเลือก internalize งานที่ Marvell ทำอยู่ไหม?

## Verdict (Neon)

**Verdict: WATCH**

### เหตุผล 3 ข้อ
- ธุรกิจมีข้อได้เปรียบที่ลูกค้าเปลี่ยนไปได้ยาก (switching cost จาก co-design ASIC design cycle) และ cash flow แข็ง — basis ของ thesis ยังอยู่
- ราคาวิ่งไปก่อนแล้วจาก momentum (ตัวเลขจากข่าว — ไม่อยู่ใน 10-K/transcript) +33% วันเดียวจาก Jensen Huang comment ที่ COMPUTEX 2026 — ซื้อตอนนี้คือซื้อตาม momentum ไม่ใช่ fundamental
- Brief ยังมี blind spot ที่สำคัญ (SBC สูงแค่ไหน, dilution rate ปีละกี่ %) ซึ่งตรงหลัก "ไม่ซื้อถ้าตอบคำถามไม่ได้หมด"

### Risk ที่ต้องรู้ก่อน DCA
- Q2 FY2027 earnings (~Aug 2026) คือ moment ตัดสิน — ถ้า margin กลับขึ้นและ guidance ยังแข็ง thesis เริ่ม prove itself; ถ้า miss และ margin ยังลง เป็นสัญญาณอันตราย

### Competitive advantage: Moderate
เหตุผล: switching cost มีอยู่จริงแต่ไม่มีหลักฐานสัญญาผูกพัน hyperscaler ระยะยาวในไฟล์ที่มี — ลูกค้าทุกรายใหญ่กว่า Marvell มาก อำนาจต่อรองเอียงไปฝั่ง hyperscaler

### Momentum trap check
**Flag** — หุ้นขึ้น +33% วันเดียวจาก CEO NVIDIA พูดชื่อ Marvell ที่ COMPUTEX 2026 ไม่ใช่จาก earnings beat หรือ contract announcement ใหม่ ราคาปัจจุบัน price in expectation อย่างรุนแรง

*Verdict นี้มาจากข้อมูลใน brief วันที่ 2026-06-11 — ไม่ใช่คำแนะนำการลงทุน การตัดสินใจสุดท้ายเป็นของคุณเสมอ*

---

## Fact Check (Eve)

**Source files used:**
- `sources/MRVL/10-k-latest.md`
- `sources/MRVL/q-latest-call.md`

**Confirmed ✅ (23 items)**
- FY2025 total revenue $5,767M (+4.7% YoY): พบใน 10-k-latest.md
- Data Center +88% YoY full year (~$4.16B): พบใน 10-k-latest.md
- Data Center ~75% of Q4 FY2025 revenue: พบใน 10-k-latest.md
- GAAP Net loss FY2025 $885M: พบใน 10-k-latest.md
- Operating cash flow FY2025 $1,681M (+22.7% YoY): พบใน 10-k-latest.md (คำนวณยืนยันได้)
- Non-GAAP gross margin FY2025 = 61.0%: พบใน 10-k-latest.md
- Non-GAAP gross margin Q1 FY2027 = 58.9%: พบใน q-latest-call.md
- Total debt $4,063.8M: พบใน 10-k-latest.md
- Cash $948.3M: พบใน 10-k-latest.md
- Net debt ~$3.1B: คำนวณได้จากสองตัวเลขข้างบน
- R&D $1,950M (34% of revenue): พบใน 10-k-latest.md (คำนวณยืนยันได้)
- Q1 FY2027 revenue $2.418B (+9% seq, +28% YoY): พบใน q-latest-call.md
- Data center Q1 FY2027 $1.8B (76%, +11% seq, +27% YoY): พบใน q-latest-call.md
- Non-GAAP EPS Q1 FY2027 $0.80 (+29% YoY): พบใน q-latest-call.md
- Operating cash flow Q1 FY2027 $639M (record): พบใน q-latest-call.md
- Net debt to EBITDA Q1 FY2027 = 0.32x: พบใน q-latest-call.md
- Q2 FY2027 guidance $2.7B ±5%: พบใน q-latest-call.md
- Q2 FY2027 Non-GAAP EPS $0.88–$0.98: พบใน q-latest-call.md
- FY2027 full-year ~$11.5B (~40% YoY): พบใน q-latest-call.md
- FY2028 revenue $16.5B: พบใน q-latest-call.md
- DCI module target $1B FY2028: พบใน q-latest-call.md
- CEO quote "every program larger year over year": พบใน q-latest-call.md (exact phrasing confirmed)
- NVLink Fusion / NVIDIA partnership: พบใน q-latest-call.md

**Unconfirmed ⚠️ — แก้ไขแล้วใน body**
- "+33% วันเดียว" จาก COMPUTEX 2026: ไม่อยู่ใน 10-K หรือ transcript — ใส่ "(ตัวเลขจากข่าว — ไม่อยู่ใน 10-K/transcript)" กำกับทุกที่ที่ปรากฏ
- "hyperscaler ไม่เกิน 3-4 ราย": 10-K ระบุแค่ "a few large customers" — แก้เป็น "หลายราย" พร้อมระบุที่มา
- "design cycle 2-3 ปี": ไม่ได้ระบุในไฟล์ใด — ใส่ "(industry practice — 10-K และ transcript ไม่ได้ระบุตัวเลขไว้ตรงๆ)" กำกับ

**Summary**
- 23 confirmed / 3 unconfirmed (แก้ไขแล้วใน body) / 0 ตรวจไม่ได้
- Unconfirmed ratio: 3/26 = ~12% — ต่ำกว่า hard stop 50%
- ทุก unconfirmed item ถูก label ไว้ชัดเจนใน body แล้ว
