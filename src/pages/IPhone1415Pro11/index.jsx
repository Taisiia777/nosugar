import { Helmet } from "react-helmet";
import { Img, Heading, Button } from "../../components";
import React from "react";

export default function IPhone1415Pro11Page() {
  return (
    <>
      <Helmet>
        <title>nosugar</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex h-[730px] w-full items-center justify-center bg-[url(/public/images/img_iphone_14_15_pro.png)] bg-cover bg-no-repeat p-3.5 lg:h-auto md:h-auto">
        <div className="flex w-[19%] flex-col items-center gap-8 lg:w-full md:w-full">
          <Heading as="h1">Ваш аккаунт</Heading>
          <div className="self-stretch">
            <div className="flex items-center gap-[18px]">
              <div className="flex flex-col items-center justify-center rounded-[50px] bg-green-100 p-[25px] sm:p-4">
                <Img src="images/img_lock_black_900.svg" alt="lock" className="h-[48px]" />
                <Heading size="headingxl" as="h2" className="mb-[26px] self-end md:text-[22px]">
                  @nobrucewayne
                </Heading>
              </div>
            </div>
            <div className="mt-[-27px] flex flex-col gap-[7px]">
              <Button size="md" className="w-full rounded-[20px] lg:text-[17px] sm:px-4">
                МОИ БАЛЛЫ: 999
              </Button>
              <Button color="light_green_900" size="md" className="w-full rounded-[20px] lg:text-[17px] sm:px-4">
                МОИ ЗАКАЗЫ
              </Button>
              <Button color="light_green_900" size="md" className="w-full rounded-[20px] lg:text-[17px] sm:px-4">
                ПРОГРАММА ЛОЯЛЬНОСТИ
              </Button>
            </div>
          </div>
          <div className="mt-[149px] flex flex-col items-center gap-2.5">
            <Button size="sm" shape="round" className="min-w-[84px] lg:text-[13px]">
              Выйти
            </Button>
            <div className="flex justify-center self-stretch rounded-[20px] bg-green-100 p-[18px]">
              <div className="flex w-[79%] items-center justify-between gap-5 lg:w-full md:w-full">
                <Img src="images/img_lock.svg" alt="lock" className="h-[30px] w-[30px] self-end" />
                <Img src="images/img_user.svg" alt="user" className="h-[30px] w-[30px] self-end" />
                <div className="relative h-[34px] w-[16%]">
                  <Heading size="headingxs" as="h3" className="absolute right-[0.00px] top-[0.00px] m-auto h-[10px] w-[21px] rounded-[5px] bg-light_green-900 text-center">
                    999
                  </Heading>
                  <Img src="images/img_cart.svg" alt="cart" className="absolute bottom-[-0.38px] left-[0.00px] m-auto h-[30px] w-[30px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
