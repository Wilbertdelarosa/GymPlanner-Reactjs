import React from 'react';
import '../App.css';
import { Button } from './Button';
import './styles/HeroSection.css';

function HeroSection() {
  return (

    <div className='hero-container'>
      <h1>Create a Gym Planner</h1>
      <p>Manage your workout</p>

      <div className='hero-btns'>
        
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          >
          GET STARTED
        </Button>

        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}>
          Login <i class="fas fa-sign-in-alt"></i>
        </Button>
        
      </div>
    </div>

  );
}

export default HeroSection;




