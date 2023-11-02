import Layout from "../../pages/layout/Layout.jsx";
import "./Annoucement.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Anim from "../../component/Anim.jsx";

const Annoucement = () => {
    return (
        <Layout title="Annoucement">
            <Container fluid="md" className="g-0">
                <Row>
                    <Col className="mx-3 annoucement">
                        <Anim type="fadeInUp" cascade>
                            <h3>ประกาศแจ้งบุคคลพ้นสภาพการเป็นพนักงาน</h3>
                            <h3>บริษัท บิ๊กเบรน สตูดิโอ จำกัด</h3>
                            <p>
                                ทางบริษัท บิ๊กเบรน สตูดิโอ จำกัดขอประกาศแจ้งการพันสภาพการเป็นพนักงาน
                                ของ นางสาวศิภัสส์ฎา อภิวันท์ (เจด)
                            </p>
                            <p>
                                นับตังแต่วันที่ 29 พฤศจิกายน พ.ศ. 2564 เป็นต้นไป ทางบริษัทฯ
                                ไม่ขอรับผิดชอบ ต่อการ กระทำใดๆ ทั้งสิ้น ของ นางสาวศิภัสสฎา อภิวันท์
                                (เจด)
                            </p>
                            <p>
                                หากบุคคลนั้นกระทำการแอบอ้างใช้ชื่อบริษัทฯ หรือ ชื่อใกล้เคียงอื่นๆ
                                รวมถึงใช้ชื่อพนักงานเพื่อ แอบอ้าง หรือกระทำการใดๆ ก็ตามทั้งก่อนหน้า
                                และ หลังจากพ้นสภาพพนักงานไป ทางบริษัทฯ ไม่มี
                                ส่วนรับผิดชอบกับความเสียหายที่เกิดขึ้นทั้งสิ้น
                            </p>
                            <p>
                                จึงเรียนมาเพื่อให้บริษัทที่เกี่ยวข้อง ทั้งลูกค้าใหม่ และ
                                ลูกค้าเดิมให้ทราบโดยทั่วกัน เพื่อไม่ให้เกิด ความสับสน และ
                                การเข้าใจผิดว่าบุคลดังกล่าวมีส่วนเกี่ยวข้องกับการประกอบธุรกรรม และ
                                ธุรกิจ การค้าของบริษัทฯ ประกาศให้ทราบโดยทั่วกัน
                            </p>
                        </Anim>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};

export default Annoucement;
