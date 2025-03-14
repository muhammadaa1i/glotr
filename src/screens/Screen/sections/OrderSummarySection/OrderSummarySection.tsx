import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const OrderSummarySection = (): JSX.Element => {
  // Data for order summary items
  const orderSummaryData = [
    { label: "Оплата:", value: "Наличными", isTotal: false },
    { label: "Доставка:", value: "100 000 сум", isTotal: false },
    { label: "Итоговая сумма:", value: "29 140 000 сум", isTotal: true },
  ];

  return (
    <Card className="border-none shadow-none">
      <CardContent className="flex flex-col gap-3 p-0">
        <div className="flex flex-col gap-3">
          {orderSummaryData.slice(0, 2).map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center w-full"
            >
              <div className="font-semibold text-[#344054] text-sm leading-4">
                {item.label}
              </div>
              <div className="font-semibold text-[#344054] text-sm leading-4">
                {item.value}
              </div>
            </div>
          ))}
        </div>

        {/* Total amount with slightly larger text */}
        <div className="flex justify-between items-center w-full">
          <div className="font-semibold text-[#344054] text-sm leading-4">
            {orderSummaryData[2].label}
          </div>
          <div className="font-semibold text-[#344054] text-base leading-5">
            {orderSummaryData[2].value}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
