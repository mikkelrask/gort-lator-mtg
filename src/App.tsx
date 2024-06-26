import 'reactjs-mtg-card/dist/index.css'
import 'keyrune/css/keyrune.min.css'
import { MagicCard } from 'reactjs-mtg-card'
import './App.css'

function App() {
  return (
    <MagicCard
      cardColor="red"
      name='Gort Lator'
      manaCost='{5}{U}{B}'
      descriptions={[
        'Ph.d in alchemy and black magic. Classic reptilian, necromantic, orb ponderering wizard. Refuses to walk - always hovering an inch above ground. Lives in a rickety <i>sort-of-house</i>.', 'Agrees that the act of waking ghouls with magic does sound pretty darn scary but isn\'t gross or disgusting.', 'While under transport gain additional {5} evasion of sheer hate towards others with the excuse:'
      ]}
      type='Legendary Creature - Reptilian Wizard'
      expansionSymbol="https://cloud.tmsgv.xyz/s/87GRCcWK7ekH5J3/download/Citroen-Logo-PNG-Clipart.png"
      artUrl="https://cloud.tmsgv.xyz/apps/files_sharing/publicpreview/CR5JsGfL6eb5KQr?file=/newsquare.jpg&fileId=6823&x=3440&y=1440&a=true&etag=48405a22769fa25e65b38d82353ed1cc"
      flavorText={[
        '<strong><i>"Jeg\' en troldman for fa\'en" - Gort Lator</i></strong> 🧙'
      ]}
      fotterLeftText={[
        '200/549 R',
        'OGxRAP ©2024; O.C.P'
      ]}
      fotterRightText={[
        'dm: OmniConsumerProducts'
      ]}
    />
  )
}

export default App
