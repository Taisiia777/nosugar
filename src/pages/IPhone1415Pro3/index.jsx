import { Helmet } from "react-helmet";
import { Button, Heading, SelectBox } from "../../components";
import React from "react";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" }
];

export default function IPhone1415Pro3Page() {
  return (
    <>
      <Helmet>
        <title>nosugar</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex h-[730px] w-full items-start justify-center bg-[url(/public/images/img_iphone_14_15_pro.png)] bg-cover bg-no-repeat p-[18px] lg:h-auto md:w-full">
        <div className="mb-20 flex w-[19%] flex-col items-center lg:w-full md:w-full">
          <Heading as="h1">Выберите ресторан</Heading>
          <SelectBox
            shape="round"
            name="arrowdown"
            placeholder="{ ул. Адресованная 18 }"
            options={dropDownOptions}
            className="mt-4 gap-px self-stretch font-thin sm:p-4"
          />
          <Heading as="h2" className="mt-[22px]">
            Выберите время заказа
          </Heading>
          <div className="mt-[7px] flex w-[68%] items-center lg:w-full md:w-full">
            <Button color="light_green_900" size="lg" className="w-full flex-1 rounded-[20px] lg:text-3xl md:text-3xl sm:px-4 sm:text-[28px]">
              18
            </Button>
            <Heading size="heading2xl" as="h2" className="md:text-3xl sm:text-[28px]">
              !
            </Heading>
            <Button color="light_green_900" size="lg" className="w-full flex-1 rounded-[20px] lg:text-3xl md:text-3xl sm:px-4 sm:text-[28px]">
              18
            </Button>
          </div>
          <Button size="sm" shape="round" className="mt-[275px] min-w-[175px] lg:text-[13px]">
            Перейти к оплате
          </Button>
        </div>
      </div>
    </>
  );
}
