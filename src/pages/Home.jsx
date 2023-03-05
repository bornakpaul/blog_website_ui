import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const posts = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit, amet",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia minima nam architecto, delectus voluptas hic eveniet cupiditate sit accusantium! Illum, eaque maxime. Magni placeat excepturi laudantium laborum inventore tenetur. Doloribus explicabo nisi deleniti, consectetur officiis error, ipsam quod dicta quo",
      img: "https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit, amet",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia minima nam architecto, delectus voluptas hic eveniet cupiditate sit accusantium! Illum, eaque maxime. Magni placeat excepturi laudantium laborum inventore tenetur. Doloribus explicabo nisi deleniti, consectetur officiis error, ipsam quod dicta quo",
      img: "https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit, amet",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia minima nam architecto, delectus voluptas hic eveniet cupiditate sit accusantium! Illum, eaque maxime. Magni placeat excepturi laudantium laborum inventore tenetur. Doloribus explicabo nisi deleniti, consectetur officiis error, ipsam quod dicta quo",
      img: "https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit, amet",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia minima nam architecto, delectus voluptas hic eveniet cupiditate sit accusantium! Illum, eaque maxime. Magni placeat excepturi laudantium laborum inventore tenetur. Doloribus explicabo nisi deleniti, consectetur officiis error, ipsam quod dicta quo",
      img: "https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
  ];

  return (
    <div className='home'>
      <div className="posts">
        {posts.map(post=>(
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="post_image" />
            </div>
            <div className="content">
              <Link className='link' to={`/post/${post.id}`}>
              <h1>
                {post.title}
              </h1>
              </Link>
              <p>
                {post.desc}
              </p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
