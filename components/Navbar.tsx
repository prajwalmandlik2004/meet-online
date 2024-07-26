'use client';


import Image from 'next/image';
import Link from 'next/link';
import SuprSendInbox from '@suprsend/react-inbox'
import 'react-toastify/dist/ReactToastify.css'
import { SignedIn, UserButton } from '@clerk/nextjs';

import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/meet_two.png"
          width={32}
          height={32}
          alt="yoom logo"
          className="max-sm:size-10"
        />
        <p className="text-[26px] font-extrabold text-white max-sm:hidden pl-3">
          Meetify
        </p>
      </Link>

      <SuprSendInbox
          // apiKey="SS.r94lBmP84X3KToAdw9w04MQmLTB5ly0KhWJqe4MJfn8"
          // bellComponent={() => <Bell></Bell>}
          // theme={{badge : {backgroundColor : 'red'}}}
          // themeType={theme}
          workspaceKey='LcNGew7JxPiRFTdMpGD0'
          // workspaceSecret='SS.WSS.rrUdk4sxsgrNvmfjECgxDh5VzhakmfkfSqaIJ1Me'
          subscriberId="4VlSBD2VlSzovKG9Ke281OmO7vVb_mvzKTQ3o54jdXw"
          distinctId='prajwalmandlik2004@gmail.com'
        />



      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>

        <MobileNav />
      </div>

    </nav>
  );
};

export default Navbar;




