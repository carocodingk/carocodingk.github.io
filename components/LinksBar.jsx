import Link from "next/link";
import style from "../styles/components.module.css"

function LinksBar(){
  return(
    <div id={style.linksbar}>
        <Link href={'#Projects'}>
          <input type="button" 
            className={style.linksbar_button}
            value="Projects" 
            onClick={()=>console.log("Projects")} 
          />
        </Link>
        <Link href={'https://github.com/carocodingk/'}>
          <input type="button" 
            className={style.linksbar_button}
            value="Github" 
            onClick={()=>console.log("Github")} 
          />
        </Link>
        <Link href={'#SayHello'}>
          <input type="button" 
            className={style.linksbar_button}
            value="Say Hello!" 
            onClick={()=>console.log("Say Hello!")} 
          />
        </Link>
    </div>
  );
}

export default LinksBar