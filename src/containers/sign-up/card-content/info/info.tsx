import * as React from 'react';

import { Title } from '../title/title';

import './info.css';

export type Props = { update: (e: React.FormEvent<HTMLInputElement | HTMLSelectElement>) => void };

const roles: string[] = [
  'Angular dev',
  'React dev',
  'Manager',
];


// tslint:disable-next-line
export const Info = (props: Props) => (
  <div>
    <Title title='Please tell us your name ...' icon='fa fa-id-card-o' />
    <div className='col-md-12'>
      <select onChange={props.update} name='title' className='form-control'>
        <option disabled > select your title</option>
        {roles.map((item: string, i: number) => (<option key={i}>{item}</option>))}
      </select>
      <input type='text' className='form-control'
        placeholder='Name' name='name' onInput={props.update} />
      <input type='text' className='form-control'
        placeholder='Surname' name='surname' onInput={props.update} />
    </div>
  </div>
);
