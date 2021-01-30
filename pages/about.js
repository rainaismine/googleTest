import Page from '../components/Page'
import Ad from "../components/Adsense";

export default function About() {
  return (
    <Page>
      <h1>This is the About page</h1>
        <Ad slotId='6605228185' width={728} height={90} />
    </Page>
  )
}
