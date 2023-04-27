import Link from 'next/link';
import YourComponent from '../images/Images';


export default function FirstPost() {
    return(
        <>
        <h1>First Post</h1>
        <h2>
            back to  <Link href="/">home</Link>
        </h2>
        {/* <img src="/images/profile.jpg" alt="Your Name" /> */}
        <YourComponent />
        </>
    ) 
  }
  