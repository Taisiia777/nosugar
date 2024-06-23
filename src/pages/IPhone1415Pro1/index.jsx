import { Helmet } from "react-helmet";
import { Img, Heading } from "../../components";
import IPhone1415Pro1Row from "../../components/IPhone1415Pro1Row";
import React, { Suspense } from "react";

const data = [
  {
    productname: "Название продукта",
    productimage: "*Изображение*",
    addtocartbutton: "В КОРЗИНУ",
    productprice: "999 RUB",
  },
  {
    productname: "Название продукта",
    productimage: "*Изображение*",
    addtocartbutton: "В КОРЗИНУ",
    productprice: "999 RUB",
  },
  {
    productname: "Название продукта",
    productimage: "*Изображение*",
    addtocartbutton: "В КОРЗИНУ",
    productprice: "999 RUB",
  },
  {
    productname: "Название продукта",
    productimage: "*Изображение*",
    addtocartbutton: "В КОРЗИНУ",
    productprice: "999 RUB",
  },
];

export default function IPhone1415Pro1Page() {
  return (
    <>
      <Helmet>
        <title>nosugar</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex h-[730px] w-full flex-col items-center gap-[62px] bg-[url(/public/images/img_iphone_14_15_pro.png)] bg-cover bg-no-repeat p-4 lg:h-auto lg:pl-[62px] lg:pr-[62px] lg:pt-[21px] lg:pb-[21px] md:pl-[36px] md:pr-[36px] md:pt-[21px] md:pb-[21px] sm:pl-[18px] sm:pr-[18px] sm:pt-[21px] sm:pb-[21px]">
        <div className="grid w-[19%] grid-cols-2 justify-center gap-[7px] lg:grid-cols-2 md:grid-cols-1">
          <Suspense fallback={<div>Loading feed...</div>}>
            {data.map((d, index) => (
              <IPhone1415Pro1Row {...d} key={"grid" + index} className="rounded-[20px] bg-light_green-900" />
            ))}
          </Suspense>
        </div>
      </div>
      <div className="flex w-[19%] justify-center rounded-[20px] bg-green-100 p-[18px] lg:w-full md:w-full">
        <div className="flex w-[79%] items-center justify-between gap-5 lg:w-full md:w-full">
          <Img src="images/img_lock.svg" alt="lock" className="h-[30px] w-[30px] self-end" />
          <Img src="images/img_user.svg" alt="user" className="h-[30px] w-[30px] self-end" />
          <div className="relative h-[34px] w-[16%]">
            <div className="absolute right-[0.00px] top-[0.38px] m-auto h-[10px] w-[21px] rounded-[5px] bg-light_green-900">
              <Heading size="headingxs" as="h1" className="absolute right-[-3.00px] top-[0.00px] m-auto">
                999
              </Heading>
            </div>
            <Img src="images/img_cart.svg" alt="cart" className="absolute bottom-[-0.38px] left-[0.00px] m-auto h-[30px] w-[30px]" />
          </div>
        </div>
      </div>
    </>
  );
}
