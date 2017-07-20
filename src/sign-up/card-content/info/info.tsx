import * as React from 'react';

import { Title } from '../title/title';

import './info.css';

// tslint:disable-next-line
export const Info = (props: { update: React.EventHandler<any> }) => {

  const roles: string[] = [
    'Angular dev',
    'React dev',
    'Manager',
  ];

  return (
    <div>
      <Title title='Please tell us your name ...' icon='fa fa-id-card-o'/>
      <select onChange={props.update} name='title' className='form-control'>
        <option disabled selected> select your title</option>
        {roles.map((item: string, i: number) => (<option key={i}>{item}</option>))}
      </select>
      <div>
        <input type='text' className='form-control'
          placeholder='Name' name='name' onInput={props.update}/>
        <input type='text' className='form-control'
          placeholder='Surname' name='surname' onInput={props.update}/>
      </div>
    </div>
  );
};