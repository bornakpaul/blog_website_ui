import React from 'react';
import Edit from '../img/edit.png';
import Delete from '../img/delete.png';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="image" />
        <div className="user">
        <img src="https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="image" />
        <div className="info">
          <span>John</span>
          <p>Posted 2 days ago</p>
        </div>
        <div className="edit">
          <Link to={`/write?edit=2`}>
          <img src={Edit} alt="edit button" />
          </Link>
          <img src={Delete} alt="delete button" />
        </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque repellendus earum laudantium, quam illo qui eos suscipit labore culpa maxime, nihil voluptatibus corrupti nemo quae optio blanditiis sapiente omnis minus explicabo fuga fugiat. <br/><br/>Architecto commodi quibusdam illo autem aperiam nihil facilis, optio nemo maiores amet, saepe molestiae harum voluptas laborum officiis hic? Exercitationem adipisci molestiae quos voluptatum at quae aspernatur atque repellat, eos perferendis magni ab. Atque, possimus non! Quidem necessitatibus nobis ab tempora laboriosam, minima quae placeat sint ullam corporis illum temporibus totam aliquam cupiditate <br/><br/>neque deserunt provident rerum ut! Numquam, aperiam officia! Recusandae maxime praesentium, repellat rerum eaque at quae magnam minima! Vero autem distinctio vel tempora voluptatibus commodi quaerat earum, sunt a porro, fugit numquam soluta inventore, beatae libero deleniti! Nihil illo dolorem maxime, ipsum nemo quas eius, quis corporis excepturi, eveniet veritatis fugiat in. Reprehenderit, quod? Assumenda, expedita architecto doloribus, deleniti nam accusamus hic veritatis quasi explicabo voluptas excepturi. Illum reiciendis iusto nisi tempore quam maiores possimus repellendus repellat consectetur,<br/><br/>odio sed corporis ducimus, laboriosam, unde incidunt quisquam eum sunt? Dolorum reprehenderit praesentium est eius asperiores saepe, quasi eveniet tempore cupiditate voluptate blanditiis provident accusantium eos esse dolore, sequi deserunt. Tenetur accusamus totam non molestias quasi earum reiciendis nesciunt, error asperiores, ea explicabo modi, voluptas ex? Deleniti libero at, vero suscipit odio minima mollitia laborum quasi sapiente accusamus provident aspernatur magnam! Praesentium ipsa alias, asperiores reprehenderit maxime dicta dignissimos soluta perspiciatis ipsum quae eius dolorum laborum numquam exercitationem nihil. Ab dignissimos asperiores est voluptatem. Fuga expedita modi eum quos. Magnam, quas odio, aut eaque optio iusto minus delectus nulla alias laboriosam sit provident. Accusamus odit reprehenderit sed officia aspernatur ad consequatur quo suscipit aliquid harum quidem tenetur, soluta facilis laudantium alias, totam, voluptate sint? Quisquam debitis vel <br/><br/> praesentium repudiandae animi magnam recusandae repellat beatae temporibus et? Molestias accusantium modi delectus assumenda fugiat incidunt voluptates iusto hic rerum, quia, ut facilis! Aliquid, autem, necessitatibus maiores, fugiat commodi a cupiditate sint est velit molestiae debitis quaerat quibusdam laudantium adipisci sequi et. Optio voluptatum consequatur repudiandae quisquam non consectetur nisi, ut labore, adipisci laborum maxime in obcaecati quod ea? Blanditiis eligendi nostrum neque modi libero? Sunt, iure! Molestiae provident necessitatibus error eveniet soluta culpa sed iure inventore reprehenderit ea, ut ducimus aliquam sunt labore ipsa fuga saepe maiores at praesentium, hic rem! Odio consequuntur, sed quia blanditiis quod autem veniam, debitis mollitia temporibus iure provident rerum aliquam. Culpa, facilis.</p>
      </div>
      <Menu/>
    </div>
  )
}

export default Single
