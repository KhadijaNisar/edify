import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Services from '@/components/Services'
import Faq from '@/components/FAQ/Faq'
import Certificate  from '@/components/certificate'
import Courses from '@/components/courses'
import Testimonial from '@/components/testimonial'
import About from '@/components/About/about'
import JoinEvents from '@/components/JoinEvents'
import OurCourses from '@/components/OurCourses/ourCourses'
import Contact from '@/components/Contact'
import SignIn from '@/components/signIn'
import EventDetails from '@/components/eventDetails'
import CourseCategory from '@/components/courseCategory'
import ErrorPage from '@/components/errorPage'
import Team from '@/components/team'
import Destinations from '@/components/destinations'

export default function Home() {
  return (
    <>
      <Header></Header>
      {/* <EventDetails></EventDetails> */}
      {/* <CourseCategory></CourseCategory> */}
      {/* <ErrorPage></ErrorPage> */}
      {/* <SignIn></SignIn> */}
      {/* <Team></Team> */}
      {/* <Destinations></Destinations> */}
      {/* <Contact></Contact> */}
      {/* <OurCourses></OurCourses> */}
      <About></About>
      {/* <JoinEvents></JoinEvents> */}
      {/* <Testimonial></Testimonial> */}
      {/* <Services></Services> */}
      {/* <Certificate></Certificate> */}
      {/* <Courses></Courses> */}
      {/* <Faq></Faq> */}

    </>
  )
}
