import { CheckCircleIcon, HeartIcon, MapPinIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const CompanyInfoSection = (): JSX.Element => {
  // Data for the order information
  const orderData = {
    orderNumber: "3957",
    companyName: "E-Scoot Uzbekistan",
    address: "Ташкент, ул. Сапожная, 31/8 для проката",
  };

  return (
    <Card className="w-full border-0 shadow-none">
      <CardContent className="p-4">
        <div className="flex flex-col items-center gap-4 text-center">
          <CheckCircleIcon className="h-10 w-10 text-green-500" />

          <div className="space-y-1">
            <h3 className="font-bold text-[#344054]">
              Номер заказа: {orderData.orderNumber}
            </h3>
            <p className="text-sm text-[#667085]">
              Ваш заказ принят <br />и передан на обработку продавцу
            </p>
          </div>

          <div className="flex w-full items-center justify-between border-t border-[#d0d5dd] pt-4">
            <div className="flex items-center gap-2">
              <HeartIcon className="h-5 w-5 text-[#667085]" />
              <span className="text-sm text-[#667085]">Коллекция</span>
            </div>
            <span className="text-sm font-medium">{orderData.companyName}</span>
          </div>

          <div className="flex w-full items-start gap-2">
            <MapPinIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#667085]" />
            <span className="text-sm text-left text-[#667085]">
              {orderData.address}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
