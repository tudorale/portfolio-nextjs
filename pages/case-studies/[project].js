import {useEffect, useState}from 'react'
import { useRouter } from 'next/router'

function Project() {

    const router = useRouter();
    const path = router.query.project;
    const [exists, setExists] = useState();
    const [data, setData] = useState();

    useEffect(async () => {
        const res = await fetch("http://localhost:3000/api/projects");
        const data = await res.json();
        setData(data);
        console.log(data)
    }, [path])

  return (
    <>
    </>
  )
}

export default Project;