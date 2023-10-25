import Layout from "./layout/Layout";
import "./Annoucement.css";
import Zoom from "react-reveal/Zoom";

const Annoucement = () => {
    return (
        <Layout title="Annoucement">
            <div className="Annoucement">
                <div className="Annoucement-1">
                    <Zoom bottom cascade>
                        <h3>ประกาศแจ้งบุคคลพ้นสภาพการเป็นพนักงาน</h3>
                        <h3>บริษัท บิ๊กเบรน สตูดิโอ จำกัด</h3>
                        <div className="">
                            <div className="">
                                <p>
                                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;ทางบริษัท บิ๊กเบรน
                                    สตูดิโอ จำกัดขอประกาศแจ้งการพันสภาพการเป็นพนักงาน
                                </p>
                                <p>ของ นางสาวศิภัสส์ฎา อภิวันท์ (เจด)</p>
                                <p>
                                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;นับตังแต่วันที่ 29
                                    พฤศจิกายน พ.ศ. 2564 เป็นต้นไป ทางบริษัทฯ ไม่ขอรับผิดชอบ ต่อการ
                                </p>
                                <p>กระทำใดๆ ทั้งสิ้น ของ นางสาวศิภัสสฎา อภิวันท์ (เจด)</p>
                                <p>
                                    &nbsp; &nbsp; &nbsp; &nbsp;
                                    &nbsp;&nbsp;หากบุคคลนั้นกระทำการแอบอ้างใช้ชื่อบริษัทฯ หรือ
                                    ชื่อใกล้เคียงอื่นๆ รวมถึงใช้ชื่อพนักงานเพื่อ
                                </p>
                                <p>
                                    แอบอ้าง หรือกระทำการใดๆ ก็ตามทั้งก่อนหน้า และ
                                    หลังจากพ้นสภาพพนักงานไป ทางบริษัทฯ ไม่มี
                                </p>
                                <p>ส่วนรับผิดชอบกับความเสียหายที่เกิดขึ้นทั้งสิ้น</p>
                                <p>
                                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                    &nbsp;จึงเรียนมาเพื่อให้บริษัทที่เกี่ยวข้อง ทั้งลูกค้าใหม่ และ
                                    ลูกค้าเดิมให้ทราบโดยทั่วกัน เพื่อไม่ให้เกิด
                                </p>
                                <p>
                                    ความสับสน และ
                                    การเข้าใจผิดว่าบุคลดังกล่าวมีส่วนเกี่ยวข้องกับการประกอบธุรกรรม
                                    และ ธุรกิจ
                                </p>
                                <p>การค้าของบริษัทฯ ประกาศให้ทราบโดยทั่วกัน</p>
                            </div>
                        </div>
                    </Zoom>
                </div>
            </div>
        </Layout>
    );
};

export default Annoucement;
