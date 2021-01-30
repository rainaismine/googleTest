import Header from './Header'
import Adsense from "./Adsense";
import Ad from "./Adsense";

export default function Page({ children }) {
  return (
    <div>

      <Header />
      {children}
        <Ad slotId='6605228185' width={728} height={90} />
      hello
    </div>
  )
}
