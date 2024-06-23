import { Helmet } from "react-helmet";
import { Img, Heading, Button } from "../../components";
import IPhone1415Pro12Row from "../../components/IPhone1415Pro12Row";
import React from "react";

export default function IPhone1415Pro12Page() {
  return (
    <>
      <Helmet>
        <title>nosugar</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex h-[730px] w-full flex-col items-center gap-[23px] bg-[url(/public/images/img_iphone_14_15_pro.png)] bg-cover bg-no-repeat p-2.5 lg:h-auto md:h-auto">
        <Heading as="h1" className="mt-[5px]">
          Мои заказы
        </Heading>
        <div className="flex w-[19%] flex-col items-center lg:w-full md:w-full">
          <div className="flex gap-[13px] self-stretch md:flex-row">
            <IPhone1415Pro12Row className="bg-light_green-900" />
            <IPhone1415Pro12Row
              orderdate="Заказ от 06.06.2024"
              restaurantaddress="Ул. Адресованная 15"
              deliverytime="15:00"
              showbutton="Получено"
              price="8 999 RUB"
              className="bg-light_green-900_87 opacity-50"
            />
          </div>
        </div>
        <Button size="sm" shape="round" className="mt-[419px] min-w-[83px] lg:text-[13px]">
          Назад
        </Button>
        <div className="mt-3.5 flex justify-center self-stretch rounded-[20px] bg-green-100 p-[18px]">
          <div className="flex w-[79%] items-center justify-between gap-5 lg:w-full md:w-full">
            <Img src="images/img_lock.svg" alt="lock" className="h-[30px] w-[30px] self-end" />
            <Img src="images/img_user.svg" alt="user" className="h-[30px] w-[30px] self-end" />
            <div className="relative h-[34px] w-[16%]">
              <Heading size="headingxs" as="h2" className="absolute right-[0.00px] top-[0.00px] m-auto h-[10px] w-[21px] rounded-[5px] bg-light_green-900 text-center">
                999
              </Heading>
              <Img src="images/img_cart.svg" alt="cart" className="absolute bottom-[-0.38px] left-[0.00px] m-auto h-[30px] w-[30px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
