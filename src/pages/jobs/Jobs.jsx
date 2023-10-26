import { useState } from "react";
import Layout from "../layout/Layout";
import "./Jobs.css";
import { links, jobsList } from "./jobdata";
import { Fade, Zoom } from "react-awesome-reveal";
import { IoArrowForward } from "react-icons/io5";

const Jobs = () => {
    const [active, setActive] = useState(0);

    const ImgHeader = () => {
        return (
            <img
                src="/img/jobs/we_need_you.webp"
                alt="jobs"
                className={active === 0 ? "jobs-img" : "jobs-img-active"}
            />
        );
    };

    const GetJobs = ({ jobsindex }) => {
        if (jobsindex > 0) {
            return jobsList
                .filter((job, idx) => idx === jobsindex - 1)
                .map((job, idx) => (
                    <div key={idx} className="jobs-main">
                        <Fade direction="up" cascade damping={0.1}>
                            <div className="jobs-header">
                                <img src={`/img/jobs/icon_jobs_${jobsindex}.webp`} alt={job.name} />
                                <h1>{job.name}</h1>
                            </div>
                            <div className="description">
                                <h2>{job.jobdescription.title}</h2>
                                <p>{job.jobdescription.description}</p>
                            </div>
                            <div className="requirements">
                                <h2>{job.requirements.title}</h2>
                                <ul>
                                    {job.requirements.list.map((requirement, idxx) => (
                                        <li key={idxx}>{requirement}</li>
                                    ))}
                                </ul>
                            </div>
                        </Fade>
                    </div>
                ));
        }
    };

    const jobsChange = (index) => {
        setActive(index);
    };

    return (
        <Layout title="Jobs">
            <div className="jobs-container">
                {active === 0 && (
                    <Zoom direction="up">
                        <ImgHeader />
                    </Zoom>
                )}

                <ul className={active === 0 ? "jobs-list" : "jobs-list-active"}>
                    {links.map((link, index) => (
                        <li key={index} className="jobs-item">
                            <Fade direction="left" cascade damping={0.1} delay={300} duration={500}>
                                <button
                                    onClick={() => jobsChange(index + 1)}
                                    className={
                                        active === index + 1 ? "jobs-link active" : "jobs-link"
                                    }
                                >
                                    {active === index + 1 && (
                                        <IoArrowForward className="jobs-link-icon" />
                                    )}
                                    {link.name}
                                </button>
                            </Fade>
                        </li>
                    ))}
                </ul>
                <div className="jobs-main-container">
                    {/* <Outlet /> */}
                    {active > 0 && <GetJobs jobsindex={active} />}
                </div>
            </div>
        </Layout>
    );
};

export default Jobs;