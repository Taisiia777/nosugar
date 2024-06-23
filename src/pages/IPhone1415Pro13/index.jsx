import { Helmet } from "react-helmet";
import { Button, Heading, Img } from "../../components";
import React from "react";

export default function IPhone1415Pro13Page() {
  return (
    <>
      <Helmet>
        <title>nosugar</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex h-[730px] w-full flex-col items-center bg-[url(/public/images/img_iphone_14_15_pro.png)] bg-cover bg-no-repeat p-7 lg:h-auto md:h-auto sm:p-4">
        <Heading size="heading2xl" as="h1" className="mt-10 md:text-3xl sm:text-[28px]">
          Заказ от 09.06.2024
        </Heading>
        <Img
          src="images/img_image_3.png"
          alt="imagethree"
          className="mt-[22px] h-[316px] w-[17%] rounded-[40px] object-cover"
        />
        <Heading as="h2" className="mt-[23px]">
          Для получения заказа
          <br />
          покажите QR-код выше на кассе
        </Heading>
        <Heading as="h2" className="mt-[50px] !text-white_a700_7f">
          Номер заказа: #123123
        </Heading>
        <Button size="sm" shape="round" className="mt-[53px] min-w-[83px] lg:text-[13px]">
          Назад
        </Button>
      </div>
    </>
  );
}
