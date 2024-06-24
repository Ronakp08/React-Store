import React from 'react'

function Footer() {
  return (
    <footer>
      <div className="sponsors md:px-60">
      <div className='border-t border-b mx-auto flex items-start flex-col py-10 sm:flex-row'>
      <ul className='p-2 rounded w-fit flex pl-4 md:pr-60'>
        <li className='hover:underline'>Terms &nbsp; </li>
        <span> · </span>
        <li className='hover:underline'>&nbsp;Privacy Policy</li>
      </ul>
        <div className="flex-1 flex flex-col sm:flex-row px-4 items-start justify-between">
        <ul className='text-sm'>
          <li className='font-bold text-lg text-[#5092FF]'>Products</li>
          <li>Web Studio</li>
          <li>DynamicBox Flex</li>
          <li>Programming Forms</li>
          <li>Integrations</li>
          <li>Command Line</li>
        </ul>
        <ul className='text-sm'>
          <li className='font-bold text-lg text-[#5092FF]'>Resources</li>
          <li>Documentation</li>
          <li>Tutorials</li>
          <li>Guide</li>
          <li>Blogs</li>
          <li>Support Center</li>
        </ul>
        <ul className='text-sm'>
          <li className='font-bold text-lg text-[#5092FF]'>Company</li>
          <li>Home</li>
          <li>About Us</li>
          <li>Pricing</li>
          <li>Privacy Policy</li>
          <li>Contact</li>
        </ul>
        <ul className='text-sm'>
          <li className='font-bold text-lg text-[#5092FF]'>Subscribe</li>
          <li>Get latest news and articles</li>
          <li><input type="email" className='mt-2 outline-none bg-transparent ring-white ring-1 px-2 rounded' placeholder='Email'/></li>
        </ul>
        </div>
      </div>
      </div>
        <div className='text-center pb-4 text-2xl font-serif'>
            Made with ❤️ by <a className='text-[#5092FF] font-semibold' href="https://ronak-codes.vercel.app/" target='_blank' rel='noreferrer'>RonakCodes</a>
        </div>
    </footer>
  )
}

export default Footer