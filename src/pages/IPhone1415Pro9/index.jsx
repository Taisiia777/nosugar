import { Helmet } from "react-helmet";
import { Button, Heading } from "../../components";
import React from "react";

export default function IPhone1415Pro9Page() {
  return (
    <>
      <Helmet>
        <title>nosugar</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex h-[730px] w-full flex-col items-center bg-[url(/public/images/img_iphone_14_15_pro.png)] bg-cover bg-no-repeat px-14 py-[70px] lg:h-auto lg:py-8 md:h-auto md:p-5 sm:h-auto sm:py-4">
        <Heading size="heading2xl" as="h1" className="mt-10 md:text-3xl sm:text-[28px]">
          ВХОД:
        </Heading>
        <Heading as="h2" className="mt-5">
          Введите номер карты:
        </Heading>
        <Heading size="headingmd" as="h2" className="mt-[39px] !text-light_green-900">
          #### #### #### ####
        </Heading>
        <div className="h-px w-[20%] bg-light_green-900" />
        <Button size="sm" shape="round" className="mb-5 mt-[55px] min-w-[82px] lg:text-[13px]">
          Войти
        </Button>
      </div>
    </>
  );
}
