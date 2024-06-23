import { Helmet } from "react-helmet";
import { Button, Heading } from "../../components";
import React from "react";

export default function IPhone1415Pro8Page() {
  return (
    <>
      <Helmet>
        <title>nosugar</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex h-[730px] w-full flex-col items-center bg-[url(/public/images/img_iphone_14_15_pro.png)] bg-cover bg-no-repeat p-7 lg:h-auto md:h-auto sm:p-4">
        <Heading size="heading2xl" as="h1" className="mt-[42px] md:text-3xl sm:text-[28px]">
          ВХОД:
        </Heading>
        <Heading as="h2" className="mt-5">
          Программа лояльности
        </Heading>
        <div className="flex w-[19%] flex-col gap-[7px] lg:w-full md:w-full">
          <Button size="md" className="w-full rounded-[20px] lg:text-[17px] sm:px-4">
            У МЕНЯ УЖЕ ЕСТЬ КАРТА
          </Button>
          <Button color="light_green_900" size="md" className="w-full rounded-[20px] lg:text-[17px] sm:px-4">
            ЗАРЕГИСТРИРОВАТЬСЯ
          </Button>
        </div>
        <Button size="sm" shape="round" className="mt-[337px] min-w-[129px] lg:text-[13px]">
          Пропустить
        </Button>
      </div>
    </>
  );
}
