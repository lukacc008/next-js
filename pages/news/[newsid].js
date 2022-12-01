import { useRouter } from "next/router"

// moj-domain.com/news/something-important

function DetailPage() {
  const router = useRouter();

  console.log (router.query.newsid);

    return <h1>The Detail Page</h1>
  }
  
  export default DetailPage;