import { Helmet } from "react-helmet";
import { Img, Heading, Text } from "../../components";
import React from "react";

export default function IPhone1415Pro4Page() {
  return (
    <>
      <Helmet>
        <title>nosugar</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex h-[730px] w-full flex-col items-center bg-[url(/public/images/img_iphone_14_15_pro.png)] bg-cover bg-no-repeat p-[15px] lg:h-auto md:h-auto">
        <div className="w-[19%] lg:w-full md:w-full">
          <div className="flex flex-col items-center">
            <Heading as="h1">Оплатите заказ</Heading>
            <div className="mt-[45px] flex flex-col items-center self-stretch">
              <Heading as="h2">СУММА: 2 997 RUB</Heading>
              <div className="mt-5 flex justify-center self-stretch rounded-[20px] bg-black-900 p-[13px]">
                <Img src="images/img_image_2.png" alt="imagettwo" className="h-[47px] w-[68%] rounded-[23px] object-cover" />
              </div>
              <Text size="text5" as="p" className="mt-[29px] !text-light_green-900">
                оплатить баллами (макс. 999)
              </Text>
              <div className="mt-[11px] flex flex-col items-center gap-6 self-stretch">
                <div className="h-px w-full self-stretch bg-light_green-900" />
                <Text size="textmd" as="p">
                  Всего баллов: 999
                </Text>
              </div>
            </div>
            <Heading size="headingmd" as="h3" className="mt-[188px] self-end">
              Сумма заказа: 2 997 RUB
            </Heading>
          </div>
          <div className="flex flex-col items-end justify-end">
            <Heading as="h2" className="mr-[764px] mt-[45px] lg:mr-0 md:mr-0">
              ИТОГО: 1 000 RUB
            </Heading>
          </div>
        </div>
      </div>
      <div className="w-[19%] lg:w-full md:w-full">
        <div className="mt-[25px] flex justify-center self-stretch rounded-[20px] bg-green-100 p-[18px]">
          <div className="flex w-[79%] items-center justify-between gap-5 lg:w-full md:w-full">
            <Img src="images/img_lock.svg" alt="lock" className="h-[30px] w-[30px] self-end" />
            <Img src="images/img_user.svg" alt="user" className="h-[30px] w-[30px] self-end" />
            <div className="relative h-[34px] w-[16%]">
              <Heading size="headingxs" as="h2" className="absolute right-[0.00px] top-[0.00px] m-auto h-[10px] w-[21px] rounded-[5px] bg-light_green-900 text-center">
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
