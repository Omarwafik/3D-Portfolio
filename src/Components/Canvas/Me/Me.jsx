import me from '../../../assets/Me.jpg'
import style from './Me.module.css'
const Me = () => {
  return (
    <div className={`${style["me"]} rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-12`}>
      <div className="rounded-full p-1 w-fit">
        <img
          src={me}
          alt="me"
            className="w-[250px] h-[250px] md:w-[265px] md:h-[265px] max-w-[280px] max-h-[280px] rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default Me
