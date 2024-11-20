import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";

import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import {
  SearchIcon,

} from "@/components/icons";
import Image from "next/image";

export const Navbar = () => {

  return (
    <div>
      <div className="bg-[#F0F1F1] py-[5px]  ">
        <div className="container mx-auto max-w-[1350px] lg:flex justify-between lg:px-[61px]">
          <div className=" flex items-center justify-between lg:w-[25%]">
            <Link href="" className="text-[#F97316] flex gap-2 items-center ">
              <span className="text-xs font-normal"> English</span>

              <span><Image width={10} height={10} src="/assets/arrowUp.png" alt="logo" /></span>
            </Link>
            <Link href="" className=" text-black text-xs font-normal">
              Help Center
            </Link>
            <p className=" text-xs font-normal">
              Helpline: 0964781656
            </p>

          </div>
          <div className=" flex items-center justify-between lg:w-[25%]">
            <Link href="" className="text-black text-xs font-normal">
              Become a Seller
            </Link>
            <Link href="" className=" text-black text-xs font-normal">
              Order Track
            </Link>
            <Link href="" className="text-[#F97316] text-xs font-normal">
              Sign up / Login
            </Link>

          </div>
        </div>

      </div>
      <div className="my-2 bg-[#ffff] flex justify-between container mx-auto max-w-[1350px] lg:px-[61px] ">
        <div className=" flex items-center gap-5">
          <p className="h-[37px] w-[125px]">

            <Image width={300} height={300} src="/assets/AlzafLogo.png" alt="logo" />
          </p>
          <form className="flex items-center">
            <input
              className=" h-[44px] w-[700px] bg-[#EFF0F5] rounded-s-xl ps-3"
              placeholder="Search Product"

            />
            <p className="h-[44px] ms-[-10px] w-[47px] rounded-xl bg-[#F97316] flex justify-center items-center">

              <SearchIcon className=" text-white h-[24px] w-[24px] " />
            </p>

          </form>
        </div>
        <div className="flex items-center gap-3">
          <Link className="h-8 w-8 rounded-lg bg-[#EFF0F5] flex justify-center items-center" href=''>
            <Image width={20} height={20} src="/assets/avatar.png" alt="logo" />
          </Link>
          <Link className="h-8 w-8 rounded-lg bg-[#EFF0F5] flex justify-center items-center" href=''>
            <Image width={20} height={20} src="/assets/love.png" alt="logo" />
          </Link>
          <Link className="h-8 w-8 rounded-lg bg-[#EFF0F5] flex justify-center items-center" href=''>
            <Image width={20} height={20} src="/assets/buscat.png" alt="logo" />
          </Link>
          <Link className="" href=''>
            <Image width={177} height={44} src="/assets/serviceLogo.png" alt="logo" />
          </Link>

        </div>
      </div>
     


    </div>

  );
};
