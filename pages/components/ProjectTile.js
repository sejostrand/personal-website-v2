import React from 'react';
import Image from 'next/image';
import { SiGithub } from 'react-icons/si';
import { BsWindow } from 'react-icons/bs';

const ProjectTile = (props) => {
  return (
    <div className=''>
      <div className=''>
        <Image src={props.imageURL} width='310' height='150' />
      </div>
      <div className=''>
        <div className=''>
          <h3 className=''>{props.label}</h3>
          <div className=''>
            <BsWindow className='' />
            <SiGithub className='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTile;
