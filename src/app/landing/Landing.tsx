'use client'

import { motion } from "framer-motion"

import ExperienceSection from '../components/experience/ExperienceSection';
import ProjectsSection from '../components/projects/ProjectSection';
import ProfileAvatar from '../components/sidebar/profile/ProfileAvatar';
import SkillSection from '../components/skills/SkillSection';
import SummarySection from '../components/summary/SummarySection';
import dynamic from 'next/dynamic'

import data from '../data/cv-data.json';
import EducationInfo from '../components/sidebar/education/EducationInfo';
import LanguageInfo from '../components/sidebar/languages/LanguageInfo';


const ContactInfo = dynamic(
  () => import('../components/sidebar/contact/ContactInfo'),
  { ssr: false }
)


export default function Landing() {
  return (
    <body>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="wrapper mt-lg-5 rounded-1">
        <div className="sidebar-wrapper rounded-1">
          <ProfileAvatar fullName={data.fullName} title={data.jobTitle} url={data.avatarUrl} />
          <ContactInfo
            linkedin={data.socialMedia.linkedin}
            phone={data.socialMedia.phone}
            email={data.socialMedia.email}
            website={data.socialMedia.website}
            behance={data.socialMedia.behance}

          />
          <EducationInfo education={data.education} />
          <LanguageInfo languages={data.languages} />
        </div>

        <div className="main-wrapper">
          <SummarySection summary={data.summary} />
          <ExperienceSection experiences={data.experiences} />
          <ProjectsSection projects={data.projects} />
          <SkillSection skills={data.skills} />
        </div>
      </motion.div>

      <footer className="footer">
        <div className="text-center">

          <small className="copyright">
            Designed with
            {' '}
            <i className="fa-solid fa-heart" />
            {' '}
            by
            {' '}
            <a href="http://themes.3rdwavemedia.com" target="_blank" rel="noreferrer">Xiaoying Riley</a>
            {' '}
            for developers
          </small>
        </div>
      </footer>
    </body>
  );
}
