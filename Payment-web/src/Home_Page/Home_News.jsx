import React from 'react';
import News1 from '../assets/images/index/news-1.png';
import News2 from '../assets/images/index/news-2.png';
import News3 from '../assets/images/index/news-3.png';

const newsItems = [
  {
    image: News1,
    title: 'Choosing a Payment Gateway: Key Factors to Consider',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates magni veniam officia?.',
    date: '2023/06/12',
    comments: 0,
  },
  {
    image: News2,
    title: 'Top Strategies to do Successful Online Business',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aperiam doloribus totam.',
    date: '2023/06/12',
    comments: 0,
  },
  {
    image: News3,
    title: 'The Benefits of Microfinancing for Small Business',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, error impedit.',
    date: '2023/06/12',
    comments: 0,
  },
];

const Home_News = () => {
  return (
    <section className="news-cards">
      <div className="container">
        <h2 className="text-center">OUR LATEST NEWS & EVENTS</h2>
        <p className="text-center news-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eum vitae voluptatibus ad laudantium culpa
          consequatur aperiam nulla.
        </p>
        <div className="row d-flex gap-md-0 gap-sm-5 gap-4">
          {newsItems.map((news, index) => (
            <div className="col-lg-4 col-md-4 d-flex" data-aos="flip-right" key={index}>
              <div className="card news-card-back">
                <img src={news.image} alt="news" />
                <div className="card-body">
                  <a href="#">
                    <h5>{news.title}</h5>
                  </a>
                  <p className="card-text p-f-s">{news.desc}</p>
                </div>
                <hr className="dotted-line" />
                <div className="card-viewer d-flex justify-content-between">
                  <div>
                    <i className="fa-solid fa-calendar-days"></i>
                    <span>{news.date}</span>
                  </div>
                  <div>
                    <i className="fa-regular fa-message"></i>
                    <span>{news.comments}</span>
                  </div>
                </div>
                <div className="news-link">
                  <a className="btn-hover1" href="#">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home_News;
