// @ts-ignore
import { useNavigate } from 'react-router-dom';
import landing_page from '../assets/images/landing_page.svg';

const Home = () => {
  const navigate = useNavigate();
  return (
    <section className='hero'>
      <section className='right'>
        <div>
          <h1 className='hero__title'>
            Imagine if <br />
            <span className='hero__title-decorated'>Snapchat</span> <br /> had
            events.
          </h1>
          <p className='hero__text'>
            Easily host and share events with your friends across any social
            media.
          </p>
          <button
            type='button'
            className='hero__button hero__button--desktop'
            onClick={() => {
              navigate('/create');
            }}
          >
            🎉 Create my event
          </button>
        </div>
      </section>

      <section className='left'>
        <img src={landing_page} alt='landing page' className='hero__image' />

        <button
          type='button'
          className='hero__button'
          onClick={() => {
            navigate('/create');
          }}
        >
          🎉 Create my event
        </button>
      </section>
    </section>
  );
};

export default Home;
