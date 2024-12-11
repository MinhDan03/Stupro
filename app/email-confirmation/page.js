import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
export default function EmailConfirmation() {
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
        <Link href={'login'} className="absolute right-[67px] top-[32px] px-[16px] py-[8px] rounded-md cursor-pointer hover:bg-accent">
            <div className="text-[#08080a] text-base font-bold font-['Inter'] leading-tight">
              Đăng nhập
            </div>
          </Link>
          <div className="py-2 flex-col justify-center items-center gap-3 flex">
            <div className="text-[#08080a] text-2xl font-semibold font-['Inter'] leading-loose">
              Xác thực email
            </div>
            <div className="text-zinc-700 text-sm font-normal font-['Inter'] leading-tight">
              Vui lòng nhập mã xác thực chúng tôi đã gửi qua email
            </div>
          </div>
          <div className="h-[241px] flex-col justify-start items-center gap-6 flex">
            <div className="self-stretch h-[124px] flex-col justify-start items-center gap-2 flex">
              <div className="self-stretch justify-center items-center gap-2 inline-flex">
                {/* Mã xác thực */}
                <input type="text" maxLength={1} className="w-9 h-9 px-3 py-1 bg-white rounded-md shadow border border-[#e3e3e7] justify-start items-center flex"/>
                <input type="text" maxLength={1} className="w-9 h-9 px-3 py-1 bg-white rounded-md shadow border border-[#e3e3e7] justify-start items-center flex"/>
                <input type="text" maxLength={1} className="w-9 h-9 px-3 py-1 bg-white rounded-md shadow border border-[#e3e3e7] justify-start items-center flex"/>
                <input type="text" maxLength={1} className="w-9 h-9 px-3 py-1 bg-white rounded-md shadow border border-[#e3e3e7] justify-start items-center flex"/>
                <input type="text" maxLength={1} className="w-9 h-9 px-3 py-1 bg-white rounded-md shadow border border-[#e3e3e7] justify-start items-center flex"/>
                <input type="text" maxLength={1} className="w-9 h-9 px-3 py-1 bg-white rounded-md shadow border border-[#e3e3e7] justify-start items-center flex"/>
              </div>
              <div className="self-stretch py-2 justify-center items-center gap-2 inline-flex">
                <div className="text-center text-zinc-700 text-sm font-normal font-['Inter'] leading-tight">
                  Chưa nhận được mã?
                </div>
                <div className="text-center text-zinc-500 text-sm font-normal font-['Inter'] leading-tight">
                  Gửi lại (30s)
                </div>
              </div>
              <Link href={'continue'} className="self-stretch h-9 px-4 py-2 bg-[#000000] rounded-md shadow justify-center items-center gap-2 inline-flex">
                <div className="text-[#f9f9f9] text-base font-medium font-['Inter'] leading-tight">
                  Tiếp tục
                </div>
              </Link>
            </div>
            <div className="self-stretch justify-center items-start inline-flex">
              <div className="grow shrink basis-0 py-4 flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="self-stretch h-px border border-[#e3e3e7]" />
              </div>
            </div>
            <Link href={'/signup'} className="self-stretch h-9 px-4 py-2 bg-white rounded-md shadow border border-[#e3e3e7] justify-center items-center gap-2 inline-flex">
              <div className="w-4 h-4 relative">
              <ChevronLeft size={16} />
              </div>
              <div className="text-[#17171b] text-base font-medium font-['Inter'] leading-tight">
                Quay lại
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
