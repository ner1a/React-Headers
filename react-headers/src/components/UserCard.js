import Pp from '../img/profile-user.svg'
import App from '../App';
import { param } from 'jquery';


function UserCard(params) {

    return <>
        <div className="user-card">
            <div className="nameAndPicture">
            <img src={Pp} alt="Profile picture"/>
            <span className="isim">{params.name}</span>
            </div>
            <div className="user-card__info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, unde sapiente. Dignissimos voluptatibus neque quis eaque aspernatur quibusdam assumenda, 
                nobis sint quasi excepturi molestiae aliquam cumque quia, ratione accusamus odit eveniet aliquid dolore quae facere delectus cum et rem tempora! Aliquid tempora, 
                laudantium officiis reprehenderit libero rerum voluptate pariatur dolor perspiciatis provident adipisci! Asperiores, obcaecati? Commodi dolore aliquam obcaecati 
                dolorum beatae suscipit consectetur expedita, labore veritatis vero id optio sunt, ea placeat fuga tempore voluptate nesciunt facilis eaque eos maxime est cumque 
                provident unde. Culpa vel libero officiis tempora, dicta illo sunt suscipit itaque velit est quos repudiandae vero excepturi sit, voluptas quae laborum non ducimus 
                alias laudantium minima et, optio asperiores. Exercitationem dolor esse quis omnis ut quidem earum, deleniti, sequi dolorum, quas odit? Numquam laudantium veritatis 
                fuga saepe porro neque quis placeat amet unde architecto quidem optio suscipit repellendus quo repudiandae enim doloremque, non sed. Vitae porro necessitatibus illum 
                recusandae cupiditate quasi, quaerat alias magni sapiente accusantium repudiandae nihil enim eius aliquid reprehenderit incidunt sunt laboriosam iusto eaque inventore 
                debitis dignissimos nobis provident maxime. Ratione temporibus architecto in optio, itaque, voluptatem ab, dicta officiis eligendi deleniti amet rerum molestiae nisi 
                aspernatur repudiandae? Non, doloremque itaque eos accusamus deleniti incidunt nihil alias cupiditate ad, at reiciendis corporis repudiandae quasi unde. Vero in temporibus 
                possimus praesentium quia quod eius cupiditate quae fuga dolorem. Perferendis dolore cum vero eius et quaerat voluptatum saepe? Quidem soluta vero omnis minima molestiae 
                voluptatibus doloremque aperiam debitis tempora iure alias, explicabo placeat sequi maxime nihil?
            </div>
        </div>
    </>    
}

export default UserCard