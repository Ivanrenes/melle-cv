'use client'

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faBehance, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGlobe, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tooltip } from 'bootstrap';
import { useEffect } from 'react';

interface ContactInfoProps {
  email?: string ;
  phone?: string;
  website?: string;
  linkedin?: string;
  behance?: string;
}

export default function ContactInfo({
  email, phone, website, linkedin, behance,
}: ContactInfoProps) {


  useEffect(() => {
    if (typeof window !== "undefined") {
      const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
      tooltipTriggerList.map((tooltipTriggerEl) => new Tooltip(tooltipTriggerEl));
    }
  }, [document])

  return (
    <div className="contact-container container-block">
      <ul className="list-unstyled contact-list">

        {email && (
        <li className="d-flex align-items-center email" data-bs-toggle="tooltip" data-bs-placement="top" title={email}>
          <FontAwesomeIcon icon={faEnvelope} />
          <a className="text-truncate" href={`mailto: ${email}`}>{email}</a>
        </li>
        )}
        {phone && (
        <li className="d-flex align-items-center phone" data-bs-toggle="tooltip" data-bs-placement="top" title={phone}>
          <FontAwesomeIcon icon={faPhone} />
          <a  className="text-truncate" href={`tel:${phone}`}>{phone}</a>
        </li>
        )}
        {website && (
        <li className="d-flex align-items-center website" data-bs-toggle="tooltip" data-bs-placement="top" title={website}>
          <FontAwesomeIcon icon={faGlobe} />
          <a className="text-truncate" href={website} target="_blank" rel="noreferrer">{website}</a>
        </li>
        )}
        {linkedin && (
        <li className="d-flex align-items-center linkedin" data-bs-toggle="tooltip" data-bs-placement="top" title={linkedin}>
          <FontAwesomeIcon icon={faLinkedin as IconProp} />
          <a className="text-truncate" href={linkedin} target="_blank" rel="noreferrer">{linkedin}</a>
        </li>
        )}
        {behance && (
        <li className="d-flex align-items-center behance" data-bs-toggle="tooltip" data-bs-placement="top" title={behance}>
          <FontAwesomeIcon icon={faBehance as IconProp} />
          <a className="text-truncate" href={behance} target="_blank" rel="noreferrer">{behance}</a>
        </li>
        )}
      </ul>
    </div>
  );
}

