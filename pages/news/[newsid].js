import { useRouter } from "next/router"

// moj-domain.com/news/something-important

function DetailPage() {
  const router = useRouter();

  const newsId = router.query.newsid;

    return <h1>The Detail Page</h1>
  }
  
  export default DetailPage;