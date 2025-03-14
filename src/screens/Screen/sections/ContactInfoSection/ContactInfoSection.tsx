import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Label } from "../../../../components/ui/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "../../../../components/ui/radio-group";

export const ContactInfoSection = (): JSX.Element => {
  // Payment methods data for mapping
  const paymentMethods = [
    {
      id: "card",
      title: "Картой",
      description: "",
      selected: false,
    },
    {
      id: "cash",
      title: "Наличными",
      description: "Оплата при получении",
      selected: true,
    },
    {
      id: "card-on-delivery",
      title: "Картой при получении",
      description: "",
      selected: false,
    },
  ];

  return (
    <div className="flex flex-col items-start gap-5 w-full">
      <div className="flex flex-col items-start gap-6 w-full">
        <div className="flex flex-col items-start gap-1.5 w-full">
          <h3 className="w-full mt-[-1.00px] [font-family:'Gilroy-Bold',Helvetica] font-bold text-[#344054] text-sm leading-4">
            Способы оплаты
          </h3>
          <p className="[font-family:'Gilroy-Medium',Helvetica] font-medium text-[#667085] text-xs leading-4">
            Выберите подходящий для вас способ оплаты
          </p>
        </div>

        <RadioGroup defaultValue="cash" className="w-full space-y-2">
          {paymentMethods.map((method) => (
            <Card
              key={method.id}
              className="bg-[#f5f6f8] border-none rounded-lg p-0"
            >
              <CardContent className="flex items-center gap-3 p-3">
                <RadioGroupItem
                  value={method.id}
                  id={method.id}
                  className={
                    method.selected
                      ? "bg-[#f24236] border-[#f24236]"
                      : "bg-white border-[#d0d5dd]"
                  }
                />
                <div className="flex flex-col">
                  <Label
                    htmlFor={method.id}
                    className="[font-family:'Gilroy-SemiBold',Helvetica] font-semibold text-black text-sm leading-[18px]"
                  >
                    {method.title}
                  </Label>
                  {method.description && (
                    <p className="[font-family:'Gilroy-Medium',Helvetica] font-medium text-[#515962] text-xs leading-4">
                      {method.description}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
};
