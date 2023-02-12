import { useRouter } from "next/router"

const StudioPage = () => {
  const router = useRouter()
  const studioName = router.query.studioName

  return <h2>{studioName}</h2>
}

export default StudioPage
