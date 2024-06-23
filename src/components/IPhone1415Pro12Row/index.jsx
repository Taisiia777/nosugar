import { Heading, Button, Text } from "../../components";
import React from "react";

export default function IPhone1415Pro12Row({
  orderdate = "Заказ от 09.06.2024",
  restaurantaddress = "ул. Адресзаведения 18",
  deliverytime = "18:30",
  showqrbutton = "Показать QR",
  price = "2 999 RUB",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex items-center w-full p-1.5 rounded-[20px]`}>
      <div className="flex w-full flex-col items-end">
        <Text as="p" className="mr-4">
          {orderdate}
        </Text>
        <Heading size="headingxs" as="p" className="mt-1.5 text-white-a700_66">
          {restaurantaddress}
        </Heading>
        <Heading size="headingxs" as="p" className="mr-1.4 mt-1 text-white-a700_66">
          {deliverytime}
        </Heading>
        <div className="mt-2.5 flex items-center gap-1.5 self-stretch">
          <Button shape="round" className="min-w-[89px] rounded-[12px]">
            {showqrbutton}
          </Button>
          <Heading size="headingxs" as="p">
            {price}
          </Heading>
        </div>
      </div>
    </div>
  );
}
