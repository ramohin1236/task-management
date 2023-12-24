/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import bannerImg from '/public/task management1.jpg'

const Banner = () => {
    return (
        <div >
            <img src={bannerImg} alt="task_management" />
        <div className='text-center'>
        <Link to='/login'>
        <button className='btn btn-primary px-8 '>Let's Explore</button>
        
        </Link>

        </div>
        </div>
    );
};

export default Banner;