import Page from '../components/Page'
import Ad from "../components/Adsense";

export default function Home() {
  return (
    <Page>
      <h1>This is the Home page</h1>
        <Ad slotId='6605228185' width={728} height={90} />
    </Page>
  )
}
