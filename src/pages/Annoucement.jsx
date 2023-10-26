import Layout from "./layout/Layout";
import "./Annoucement.css";
import { Fade } from "react-awesome-reveal";

const Annoucement = () => {
    return (
        <Layout title="Annoucement">
            <div className="Annoucement">
                <div className="Annoucement-1">
                    <Fade direction="up">
                        <h3>ประกาศแจ้งบุคคลพ้นสภาพการเป็นพนักงาน</h3>
                        <h3>บริษัท บิ๊กเบรน สตูดิโอ จำกัด</h3>
                        <div className="">
                            <div className="">
                                <Fade direction="up" cascade damping={0.1}>
                                    <p>
                                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;ทางบริษัท บิ๊กเบรน
                                        สตูดิโอ จำกัดขอประกาศแจ้งการพันสภาพการเป็นพนักงาน ของ
                                        นางสาวศิภัสส์ฎา อภิวันท์ (เจด)
                                    </p>
                                    <p>
                                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;นับตังแต่วันที่ 29
                                        พฤศจิกายน พ.ศ. 2564 เป็นต้นไป ทางบริษัทฯ ไม่ขอรับผิดชอบ
                                        ต่อการ กระทำใดๆ ทั้งสิ้น ของ นางสาวศิภัสสฎา อภิวันท์ (เจด)
                                    </p>
                                    <p>
                                        &nbsp; &nbsp; &nbsp; &nbsp;
                                        &nbsp;&nbsp;หากบุคคลนั้นกระทำการแอบอ้างใช้ชื่อบริษัทฯ หรือ
                                        ชื่อใกล้เคียงอื่นๆ รวมถึงใช้ชื่อพนักงานเพื่อ แอบอ้าง
                                        หรือกระทำการใดๆ ก็ตามทั้งก่อนหน้า และ
                                        หลังจากพ้นสภาพพนักงานไป ทางบริษัทฯ ไม่มี &nbsp;
                                        ส่วนรับผิดชอบกับความเสียหายที่เกิดขึ้นทั้งสิ้น
                                    </p>
                                    <p>
                                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                        &nbsp;จึงเรียนมาเพื่อให้บริษัทที่เกี่ยวข้อง ทั้งลูกค้าใหม่
                                        และ ลูกค้าเดิมให้ทราบโดยทั่วกัน เพื่อไม่ให้เกิด ความสับสน
                                        และ
                                        การเข้าใจผิดว่าบุคลดังกล่าวมีส่วนเกี่ยวข้องกับการประกอบธุรกรรม
                                        และ ธุรกิจ การค้าของบริษัทฯ ประกาศให้ทราบโดยทั่วกัน
                                    </p>
                                </Fade>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </Layout>
    );
};

export default Annoucement;
