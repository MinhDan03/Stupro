
import Image from "next/image";
import Link from "next/link";
export default function Login() {
  return (
    <>
      <div className="w-full h-screen bg-white justify-start items-start inline-flex">
        <div className="grow shrink basis-0 self-stretch p-10 bg-[#000000] flex-col justify-between items-start inline-flex">
          <Link href={'/'} className="justify-start items-center gap-2 inline-flex">
            <div className="w-6 h-6 relative">
                <Image src='/logo.svg' width={24} height={24} alt="Logo"/>
            </div>
            <div className="text-white text-lg font-medium font-['Inter'] leading-7">
            Stupro
            </div>
          </Link>
          <div className="self-stretch h-[84px] flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch text-white text-lg font-normal font-['Inter'] leading-7">
              “This library has saved me countless hours of work and helped me
              deliver stunning designs to my clients faster than ever before.”
            </div>
            <div className="text-white text-sm font-normal font-['Inter'] leading-tight">
              Sofia Davis
            </div>
          </div>
        </div>
        <div className="grow shrink basis-0 self-stretch flex-col justify-center items-center gap-6 inline-flex relative">
          <Link href={'signup'} className="absolute right-[67px] top-[32px] px-[16px] py-[8px] rounded-md cursor-pointer hover:bg-accent">
            <div className="text-[#08080a] text-base font-bold font-['Inter'] leading-tight">
              Đăng ký
            </div>
          </Link>
          <div className="py-2 flex-col justify-center items-center gap-3 flex">
            <div className="text-[#08080a] text-2xl font-semibold font-['Inter'] leading-loose">
              Đăng nhập
            </div>
            <div className="text-zinc-700 text-base font-medium font-['Inter'] leading-tight">
              Vui lòng nhập thông tin để đăng nhập
            </div>
          </div>
          <div className="h-72 flex-col justify-start items-center gap-6 flex">
            <div className="self-stretch h-[168px] flex-col justify-start items-center gap-2 flex">
              <div className="self-stretch h-9 px-3 py-1 bg-white rounded-md shadow border border-[#e3e3e7] justify-start items-center inline-flex">
                <input type="text" className="w-[227px] text-black text-base font-medium font-['Inter'] outline-none placeholder:text-black" placeholder="Nhập email" name="" id="" />
              </div>
              <div className="self-stretch h-9 px-3 py-1 bg-white rounded-md shadow border border-[#e3e3e7] justify-start items-center inline-flex">
                <input type="password" className="w-[227px] text-black text-base font-normal font-['Inter'] outline-none placeholder:text-black" placeholder="Nhập mật khẩu" name="" id="" />
              </div>
              <div className="self-stretch py-2 justify-end items-center gap-2.5 inline-flex">
                <div className="text-center text-zinc-700 text-base font-normal font-['Inter'] leading-tight hover:text-zinc-900">
                  <Link href={'forgot_password'}>Quên mật khẩu?</Link>
                </div>
              </div>
              <Link href={'/'} className="self-stretch h-9 px-4 py-2 bg-[#000000] rounded-md shadow justify-center items-center gap-2 inline-flex">
                <div className="text-[#f9f9f9] text-base font-bold font-['Inter'] leading-tight">
                  Đăng nhập
                </div>
              </Link>
            </div>
            <div className="self-stretch justify-center items-start inline-flex">
              <div className="grow shrink basis-0 py-4 flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="self-stretch h-px border border-[#e3e3e7]" />
              </div>
              <div className="p-2.5 bg-white flex-col justify-start items-center gap-2.5 inline-flex">
                <div className="justify-center items-start gap-2.5 inline-flex">
                  <div className="text-center text-zinc-500 text-xs font-normal font-['Inter'] leading-none">
                    Hoặc
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 py-4 flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="self-stretch h-px border border-[#e3e3e7]" />
              </div>
            </div>
            <Link href={'google'} className="self-stretch h-9 px-4 py-2 bg-white rounded-md shadow border border-[#e3e3e7] justify-center items-center gap-2 inline-flex">
              <div className="w-4 h-4 relative">
                <Image src='/google.svg' width={16} height={16} alt="google"/>
              </div>
              <div className="text-[#000000] text-base font-medium font-['Inter'] leading-tight">
                Đăng nhập với Google
              </div>
            </Link>
          </div>
          <div className="text-center">
            <span className="text-zinc-600 text-xs font-normal font-['Inter'] leading-tight">
              Bằng cách nhấp vào "Đăng nhập," bạn đồng ý với
              <br />
            </span>
            <Link href={'/'} className="text-zinc-600 text-xs font-normal font-['Inter'] underline leading-tight">
              Điều khoản Dịch vụ
            </Link>
            <span className="text-zinc-600 text-xs font-normal font-['Inter'] leading-tight">
              {" "}
              và{" "}
            </span>
            <Link href={'/'} className="text-zinc-600 text-xs font-normal font-['Inter'] underline leading-tight">
              Chính sách Bảo mật
            </Link>
            <span className="text-zinc-600 text-xs font-normal font-['Inter'] leading-tight">
              {" "}
              của chúng tôi.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}