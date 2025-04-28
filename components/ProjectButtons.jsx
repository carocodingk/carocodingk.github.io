import Link from "next/link";

function ProjectButtons({url1, url2}){
  return(
    <div>
      <Link href={url1}>
        <input type="button"
          value={'Github'}
        />
      </Link>
      <Link href={url2}>
        <input type="button"
          value={'site'}
        />
      </Link>
    </div>
  );
}

export default ProjectButtons;