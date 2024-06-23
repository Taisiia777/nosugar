import { Helmet } from "react-helmet";
import { Img, Heading, Button, Text } from "../../components";
import React, { Suspense } from "react";

export default function IPhone1415Pro2Page() {
  return (
    <>
      <Helmet>
        <title>nosugar</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex h-[730px] w-full flex-col items-center bg-[url(/public/images/img_iphone_14_15_pro.png)] bg-cover bg-no-repeat p-3.5 lg:h-auto md:h-auto">
        <div className="flex w-[19%] flex-col items-center justify-center lg:w-full md:w-full">
          <Heading as="h1">ХРЮМЗНЯ</Heading>
        </div>
        <div className="mt-[66px] flex flex-col gap-[7px] self-stretch">
          <Suspense fallback={<div>Loading feed...</div>}>
            {[...Array(3)].map((d, index) => (
              <div key={"list" + index} className="flex flex-1 rounded-[20px] bg-light_green-900 p-[9px]">
                <div className="flex flex-col items-start justify-between gap-5">
                  <div className="mt-[11px] flex w-full items-start justify-between gap-5">
                    <Heading size="headings" as="h2" className="mt-[22px] !text-white_a700_19">
                      Изображение
                    </Heading>
                    <div className="flex w-[5%] flex-col items-start gap-[29px]">
                      <Text as="p">Название продукта</Text>
                      <div className="flex items-center justify-between gap-5 self-stretch">
                        <div className="flex w-[47%] flex-wrap items-center justify-center gap-[7px]">
                          <Heading size="headings" as="h3" className="flex h-[24px] w-[24px] items-center justify-center rounded-[12px] bg-green-100 text-center !text-black-900">
                            1 шт.
                          </Heading>
                          <Heading size="headings" as="h5" className="flex h-[24px] w-[25px] items-center justify-center rounded-[12px] bg-green-100 text-center !text-black-900">
                            +
                          </Heading>
                        </div>
                        <Heading size="headings" as="h6" className="self-end">
                          999 RUB
                        </Heading>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Suspense>
        </div>
        <Text as="p" className="mt-6 !text-light_green-900">
          Добавить комментарий к заказу
        </Text>
        <div className="mt-[7px] h-px w-full self-stretch bg-light_green-900" />
        <div className="flex flex-col items-end justify-end">
          <Heading as="h2" className="mr-[766px] mt-[21px] lg:mr-0 md:mr-0">
            ИТОГО: 2 997 RUB
          </Heading>
        </div>
      </div>
      <div className="flex w-[19%] flex-col items-center justify-end gap-2.5 lg:w-full md:w-full">
        <Button size="sm" shape="round" className="mt-[70px] min-w-[169px] lg:text-[13px]">
          Уточнить детали
        </Button>
        <div className="flex justify-center self-stretch rounded-[20px] bg-green-100 p-[18px]">
          <div className="flex w-[79%] items-center justify-between gap-5 lg:w-full md:w-full">
            <Img src="images/img_lock.svg" alt="lock" className="h-[30px] w-[30px] self-end" />
            <Img src="images/img_user.svg" alt="user" className="h-[30px] w-[30px] self-end" />
            <div className="relative h-[34px] w-[16%]">
              <Heading size="headingsxs" as="h2" className="absolute right-[0.00px] top-[0.00px] m-auto h-[10px] w-[21px] rounded-[5px] bg-light_green-900 text-center">
                999
              </Heading>
              <Img src="images/img_cart.svg" alt="cart" className="absolute bottom-[0.38px] left-[0.00px] m-auto h-[30px] w-[30px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
