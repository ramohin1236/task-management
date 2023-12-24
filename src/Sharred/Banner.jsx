import bannerImg from '/public/task management1.jpg'

const Banner = () => {
    return (
        <div >
            <img src={bannerImg} alt="task_management" />
        <div className='text-center'>
        <button className='btn btn-primary px-8 '>Click me</button>

        </div>
        </div>
    );
};

export default Banner;