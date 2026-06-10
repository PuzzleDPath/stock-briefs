# TSM — Taiwan Semiconductor Manufacturing Company
*Brief date: 2026-06-10 | Source: Sova (20-F FY2024), Vyse (Q1 2026 earnings call), Tracer (news 7 วัน)*


---

## 1. Company snapshot

TSMC (Taiwan Semiconductor Manufacturing Company) คือโรงงานผลิตชิปที่ใหญ่ที่สุดในโลกแบบ pure-play foundry — บริษัทไม่ออกแบบชิปเอง แต่รับผลิตให้กับบริษัทที่ออกแบบชิปอย่าง Apple, NVIDIA, AMD, Qualcomm รายได้หลักมาจากค่าผลิตชิปใน node ต่างๆ โดย node ที่ล้ำที่สุดอย่าง 3nm และ 5nm คิดราคาต่อ wafer ได้สูงกว่ามาก กลุ่ม HPC (High Performance Computing) รวมชิป AI และ data center คิดเป็น 61% ของรายได้ใน Q1 2026 ขณะที่ smartphone คิด 26% TSMC เป็นผู้รับประโยชน์โดยตรงจากกระแส AI โดยไม่ต้องแข่งกับลูกค้าของตัวเอง

---

## 2. Fundamentals signal

- **Revenue โตแรงหลัง 1 ปีที่สะดุด** — FY2022 +42.6% YoY → FY2023 -4.5% YoY → FY2024 US$90.08bn (+33.9% YoY ทำ all-time high); guidance ปี 2026 คาด "above 30% USD growth" อีกปี — HPC/AI ขับเคลื่อนหลัก
- **Margin ขยายตัวต่อเนื่อง** — Gross margin 54.4% (FY2023) → 56.1% (FY2024) → 66.2% (Q1 2026) สะท้อน product mix เอียงไปทาง advanced node มากขึ้นทุกไตรมาส
- **Balance sheet: net cash บวก** — เงินสดและลงทุนระยะสั้น NT$2,127.63bn เทียบหนี้สิน NT$1,047.04bn net cash บวก NT$1,080.58bn ณ ปี 2024 (ตรวจสอบใน 20-F FY2024)
- **Capex สูงสุดในประวัติบริษัท** — FY2024 US$29.76bn → 2026 ยืนยัน $52-56B สร้าง fab ใหม่ใน Arizona, ญี่ปุ่น, ยุโรป กด FCF ระยะสั้น แต่บริษัทเดิมพันกับ demand ระยะยาว
- **HPC shift คือ story หลัก** — HPC จาก ~40% ปี 2022 เป็น 61% ใน Q1 2026 เพราะ AI accelerator ต้องการ advanced node ที่ TSMC ผลิตได้ใน volume เกือบคนเดียว

---

## 3. Latest earnings — Q1 2026

- Revenue **$35.9B** (+6.4% QoQ) บีต guidance; full-year 2026 guidance ยืน "above 30% USD growth" (source: sources/TSM/q1-2026-call.md)
- **Gross margin 66.2%** (up 390 bps QoQ); **Operating margin 58.1%**; **EPS TWD 22.08**; ROE 40.5% — margin ดีสุดในประวัติบริษัท (source: sources/TSM/q1-2026-call.md)
- HPC 61% ของรายได้ (+20% QoQ), smartphone 26% (-11% QoQ); advanced nodes (7nm ลงมา) = **74% ของ wafer revenue** (source: sources/TSM/q1-2026-call.md)
- **Q2 2026 guidance**: revenue $39.0–$40.2B (~10% QoQ growth), gross margin 65.5–67.5%, operating margin 56.5–58.5% (source: sources/TSM/q1-2026-call.md)
- CEO C.C. Wei ระบุ "agentic AI" shift จาก query-mode ไป command-and-action mode ทำ token consumption พุ่งขึ้น; CFO Wendell Huang คาด N3 gross margin แตะระดับ corporate margin ใน H2 2026 (source: sources/TSM/q1-2026-call.md)

---

## 4. Bull case / Bear case

**Bull case**
- Process know-how สะสม 30 ปีทำให้ Apple, NVIDIA, AMD ไม่มีทางเลือกอื่นใน advanced node ในระยะ 2-3 ปี — ความได้เปรียบนี้ไม่ได้มาจาก IP ที่ล็อกได้ แต่มาจากทักษะสะสมที่ copy ไม่ทัน
- AI demand structurally โต — agentic AI เพิ่ม compute per task; AI revenue guidance ปรับขึ้นเป็น +55% CAGR ถึงปี 2029 (management estimate, ตรวจสอบใน earnings call)
- Pricing power กำลังเกิดขึ้นจริง — วางแผนขึ้นราคา 3nm สูงสุด 15% ใน H2 2026 (ยังไม่ confirmed ว่าลูกค้า accept แล้ว)

**Bear case**
- Overseas fab ทำให้ cost structure สูงขึ้นถาวร และ compound ทุก site ที่เพิ่ม — Arizona ต้นทุนต่อ wafer ~4-5x Taiwan CFO ยืนยันแล้วว่า dilution เพิ่มจาก 2-3% เป็น 3-4% ก่อนที่ Arizona phase 2-3, Europe (Dresden), Japan (Kumamoto phase 2) จะ operational CHIPS Act และแรงกดดันจาก US government เป็น structural obligation ออกไม่ได้ — 66.2% Q1 2026 gross margin คือ Taiwan-fab peak reading ที่ถ่ายก่อน overseas capacity เต็ม คำถามที่สำคัญกว่าคือ margin จะเป็นเท่าไหร่ใน 2028 ตอน Arizona run at scale
- $52-56B capex bet บน demand ปี 2028-2029 แต่ข้อมูลจริงมีแค่ 1-2 ปีของ AI boom ถ้า hyperscaler shift ไปที่ inference chip ที่ใช้ node เก่ากว่า FCF $30B+ จะหายไปเร็วที่ $52B+ capex — เป็น pattern เดียวกับที่กด revenue -4.5% ใน FY2023 หลัง over-ordering cycle FY2022
- Taiwan AI chip export restriction (Jun 2026) เป็น unpriced risk ที่ bull case ไม่ได้คิดถึงเลย — ถ้า Taiwan รัฐบาล formalize มาตรการจำกัดการส่งออก AI chip ลูกค้า TSMC โดน delivery disruption ไม่ว่า TSMC จะผลิตได้แค่ไหน hyperscaler จะกดดัน TSMC ให้ risk discount หรือ accelerate funding ทางเลือกอื่น (Samsung/Intel Foundry) เป็น insurance

---

## 5. Kill conditions

- **Gross margin ต่ำกว่า 57% ใน quarter ใดหลัง Q3 2026 หรือต่ำกว่า 53% สอง quarter ติด** โดย CFO ระบุสาเหตุว่าเป็น overseas fab cost — monitor earnings call transcript ทุกไตรมาส (guided ปัจจุบัน 65.5–67.5%)
- **Apple shift tape-out leading-edge node (3nm ลงมา) ไปที่ Samsung Foundry ใน production volume >5%** ของ Apple silicon procurement ใน fiscal year เดียว (ไม่ใช่แค่ qualification run) — signal จาก Apple supply chain disclosures + teardown reports Apple ~25% รายได้ shift 30% กระทบ top line ~7-8%
- **NVIDIA ประกาศ >15% ของ production volume บน non-TSMC foundry** ใน node เดียวกัน — signal จาก NVIDIA earnings call + analyst wafer shipment data; NVIDIA ~11-12% รายได้ และเป็น AI revenue driver หลัก
- **Taiwan รัฐบาล formalize AI chip export restriction AND hyperscaler รายใหญ่ 1 ราย ยืนยัน delivery uncertainty** พร้อมกัน — ต้องเกิดทั้งสองเงื่อนไขพร้อมกัน; signal จาก official policy announcement + hyperscaler earnings call commentary
- **TSMC ปรับ capex guidance ลง >10% จาก $52-56B โดยอ้างเหตุ demand visibility** (ไม่ใช่ efficiency improvement) — language ใน earnings call สำคัญ ต้องแยก "demand soft" กับ "we are more efficient" ให้ออก
- **Arizona Fab 21 yield gap เกิน 8 percentage points ต่ำกว่า Taiwan fab** ที่ node เดียวกัน ยืนยันโดย TSMC หรือ 2+ analyst channel checks — ยืนยัน structural human capital disadvantage ที่แก้ไม่หาย

---

## 6. What to ask before owning it

1. ผมเข้าใจ geopolitical risk ของ TSMC มากแค่ไหน — ถ้าสถานการณ์ Taiwan ตึงเครียด ผมจะถือต่อหรือตัดขาดทุนได้ก่อนเกิดเหตุ?
2. หุ้นขึ้นมาเกือบ 100% ใน 52 สัปดาห์แล้ว — ผม comfortable กับ valuation ปัจจุบันไหม หรือควรรอ pullback?
3. ถ้า AI hype ชะลอลง 1 ปี thesis ของผมยังอยู่ไหม — thesis ขึ้นกับ AI boom หรือขึ้นกับบริษัทนี้โดยตรง?
4. CapEx $52-56B ต่อปี — ผมเข้าใจว่าทำไมบริษัทลงทุนหนักขนาดนี้ และ risk ของ overbuilding คืออะไร?
5. Taiwan กำลังพิจารณา AI chip export restriction — ถ้า formalize จริง กระทบ thesis ของผมยังไง?

---

## Verdict (Neon)

**WATCH**

TSMC มีความได้เปรียบที่แกร่งที่สุดในอุตสาหกรรม — process know-how 30 ปีที่ลอกไม่ได้ใน 2-3 ปี, gross margin ขยายจาก 54% เป็น 66% พิสูจน์ว่า pricing power มีจริง, ลูกค้า Apple/NVIDIA/AMD หนีไปไหนไม่ได้ในระยะสั้น แต่ยังเป็น WATCH ไม่ใช่ BUY เพราะ (1) development ล่าสุด Jun 2026 เรื่อง Taiwan กำลังพิจารณา AI chip export restriction คือ risk ที่ยังอ่านผลลัพธ์ไม่ออกและมีน้ำหนักพอที่จะเปลี่ยน thesis ได้ทั้งหมด (2) ถ้ามี NVDA และ AVGO อยู่แล้วรวม ~51% การเพิ่ม TSM จะ overlap exposure กับ AI chip sector ซ้ำโดยตรง

**ก่อนกดซื้อ:** รอให้ Taiwan รัฐบาล clarify จุดยืน AI chip export restriction ชัดเจน (formal policy หรือ dropped) — ถ้าข่าวนี้คลี่คลายไปทางไม่มีการจำกัด และ Q2 2026 earnings (16 ก.ค. 2026) ยืนยัน gross margin ไม่ต่ำกว่า 65.5% ตาม guidance ค่อยกลับมาประเมินใหม่

*Moat: Strong — process know-how 30 ปี + switching cost สูงมาก ลูกค้า Apple/NVIDIA/AMD ออกไม่ได้ในระยะสั้น*
*Momentum flag: +100% ใน 52 สัปดาห์ แต่ fundamental รองรับจริง (revenue +33.9%, margin expansion structural) — ไม่ใช่ momentum ล้วนๆ แต่ valuation ต้องตั้งคำถามก่อนซื้อ*

---

*Sources: TSMC 20-F FY2024 (SEC EDGAR CIK 0001046179) · Q1 2026 earnings call (sources/TSM/q1-2026-call.md) · news 2026-06-10 (sources/TSM/news-latest.md)*
*ไม่ใช่คำแนะนำการลงทุน การตัดสินใจสุดท้ายเป็นของคุณเสมอ*
