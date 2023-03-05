import React from 'react'

const Menu = () => {
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
    <div className='menu'>
      <h1>Other posts you may like</h1>
      {posts.map(post=>
      <div className="post" key={post.id}>
          <img src={post.img} alt="image" />
          <h2>{post.title}</h2>
          <button>Read more</button>
      </div>
     )}
    </div>
  )
}

export default Menu
