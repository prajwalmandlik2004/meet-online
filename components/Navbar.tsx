'use client';

import Image from 'next/image';
import Link from 'next/link';
import SuprSendInbox from '@suprsend/react-inbox'
import 'react-toastify/dist/ReactToastify.css'
import { SignedIn, UserButton } from '@clerk/nextjs';
import suprsend from "@suprsend/web-sdk";


import MobileNav from './MobileNav';

const Navbar = () => {

  try {
    suprsend.init(process.env.NEXT_PUBLIC_WORKSPACE_KEY!, process.env.NEXT_PUBLIC_WORKSPACE_SECRET!);
  } catch (error) {
    console.error('Failed to initialize Suprsend SDK:', error);
  }

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
        workspaceKey='LcNGew7JxPiRFTdMpGD0'
        subscriberId="4VlSBD2VlSzovKG9Ke281OmO7vVb_mvzKTQ3o54jdXw"
        distinctId='prajwalmandlik2004@gmail.com'
        theme={{
          badge: { backgroundColor: 'white', color: 'black' },
          bell: { color: 'white' }
        }}
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





