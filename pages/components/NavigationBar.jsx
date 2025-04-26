import Link from "next/link";

function NavigationBar(){
  return(
    <div>
      <div>
        <Link href={'#Projects'}>
          <input type="button" 
            value="Projects" 
            onClick={()=>console.log("Projects")} 
          />
        </Link>
        <Link href={'#Github'}>
          <input type="button" 
            value="Github" 
            onClick={()=>console.log("Github")} 
          />
        </Link>
        <Link href={'#SayHello'}>
          <input type="button" 
            value="Say Hello!" 
            onClick={()=>console.log("Say Hello!")} 
          />
        </Link>
      </div>
    </div>
  );
}

export default NavigationBar