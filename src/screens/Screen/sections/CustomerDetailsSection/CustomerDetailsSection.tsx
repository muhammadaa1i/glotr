import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  RadioGroup,
  RadioGroupItem,
} from "../../../../components/ui/radio-group";

export const CustomerDetailsSection = (): JSX.Element => {
  // Delivery options data for mapping
  const deliveryOptions = [
    {
      id: "express",
      title: "Экспресс доставка",
      description: "Доставим в течении 2-3 дней (150 000 сум)",
      defaultChecked: false,
    },
    {
      id: "standard",
      title: "Стандартная доставка",
      description: "Доставим в течении 2-3 дней (100 000 сум)",
      defaultChecked: true,
    },
  ];

  return (
    <div className="flex flex-col items-start gap-5 w-full">
      <div className="flex flex-col items-start gap-6 w-full">
        <div className="flex flex-col items-start gap-1.5 w-full">
          <h3 className="font-bold text-[#344054] text-sm leading-4 [font-family:'Gilroy-Bold',Helvetica]">
            Способы доставки
          </h3>
          <p className="font-medium text-[#667085] text-xs leading-4 [font-family:'Gilroy-Medium',Helvetica]">
            Выберите подходящий для вас способ доставки
          </p>
        </div>

        <RadioGroup defaultValue="standard" className="w-full space-y-2">
          {deliveryOptions.map((option) => (
            <Card
              key={option.id}
              className="bg-[#f5f6f8] border-none rounded-lg p-0"
            >
              <CardContent className="flex items-start gap-3 p-3">
                <RadioGroupItem
                  value={option.id}
                  id={option.id}
                  className={`w-6 h-6 ${option.defaultChecked ? "bg-[#f24236] border-[#f24236]" : "bg-white border-[#d0d5dd]"}`}
                />
                <div className="flex flex-col gap-1.5">
                  <h4 className="font-semibold text-black text-sm leading-[18px] [font-family:'Gilroy-SemiBold',Helvetica]">
                    {option.title}
                  </h4>
                  <p className="font-medium text-[#515962] text-xs leading-4 [font-family:'Gilroy-Medium',Helvetica]">
                    {option.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
};
