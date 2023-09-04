import '@/styles/globals.css'
import '@/styles/about.css'
import '@/styles/Plans.css'
import '@/styles/Events.css'
import '@/styles/ourCourses.css'
import '@/styles/contact.css'
import '@/styles/error.css'
import '@/styles/signInUp.css'
import '@/styles/eventDetails.css'
import '@/styles/team.css'
import "@fortawesome/fontawesome-svg-core/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
