
import Link from 'next/link';
import Image from 'next/image';
import heroPic from "../public/images/index-hero.jpg";
import profilePic from "../public/images/profile.jpg";

const Index = () => {
  return (
    <>
      <div>
        <Image src={heroPic} alt='hero' />
        <div>
          <h1>I'm Abe Hiroki!</h1>
          <h2>JavaScript Developer</h2>
        </div>
      </div>
      <div>
        <div>
          <div>
            <h2>JavaScript Nerd</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It as survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including varsions of Lorem Ipsum.</p>
          </div>
          <div>
            <Image src={profilePic} alt='hero' />
          </div>
        </div>
        <div>
          <h2>Skills</h2>
          <div>
            <div><img src='/images/javascript.svg' alt='javascript' /><span>JavaScript / 10 yers</span></div>
            <div><img src='/images/react.svg' alt='react' /><span>React / 5 years</span></div>
            <div><img src='/images/gatsby.svg' alt='gatsby' /><span>Gatsby / 3 years</span></div>
            <div><img src='/images/next.svg' alt='next' /><span>Next.JS / 3 years</span></div>
          </div>
        </div>
        <div>
          <Link href="/contact">Make It Happen!</Link>
        </div>
      </div>
    </>
  )
}

export default Index

