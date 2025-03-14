import React from "react";
import { Input } from "../../../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import { Textarea } from "../../../../components/ui/textarea";

export const OrderConfirmationSection = (): JSX.Element => {
  // Data for form fields
  const addressFormFields = [
    { id: "region", label: "Регион", type: "select" },
    { id: "city", label: "Район/Город", type: "select" },
    { id: "address", label: "Адрес", type: "input" },
    { id: "landmark", label: "Ориентир", type: "input" },
    { id: "comments", label: "Комментарии", type: "textarea" },
  ];

  return (
    <section className="flex flex-col items-start gap-5 w-full">
      <div className="flex flex-col items-start gap-6 w-full">
        {/* Header section */}
        <div className="flex flex-col items-start gap-1.5 w-full">
          <h3 className="w-full [font-family:'Gilroy-Bold',Helvetica] font-bold text-[#344054] text-sm leading-4">
            Адрес доставки
          </h3>
          <p className="w-full [font-family:'Gilroy-Medium',Helvetica] font-medium text-[#667085] text-xs leading-4">
            Регион доставки устанавливается продавцами самостоятельно. Если вы
            не нашли в списке ваш регион, значит продавец не осуществляет
            доставку по вашему региону.
          </p>
        </div>

        {/* Country field */}
        <div className="w-full max-w-[328px] flex flex-col items-start gap-2">
          <label className="w-full [font-family:'Gilroy-SemiBold',Helvetica] font-semibold text-[#344054] text-xs leading-[14px]">
            Страна
          </label>
          <Select defaultValue="uzbekistan">
            <SelectTrigger className="w-full h-[46px] border border-[#d0d5dd] rounded-lg">
              <SelectValue className="[font-family:'Gilroy-Medium',Helvetica] font-medium text-[#344054] text-sm leading-4">
                Узбекистан
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="uzbekistan">Узбекистан</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Dynamic form fields */}
        {addressFormFields.map((field) => (
          <div
            key={field.id}
            className="w-full max-w-[328px] flex flex-col items-start gap-2"
          >
            <label className="w-full [font-family:'Gilroy-SemiBold',Helvetica] font-semibold text-[#344054] text-xs leading-[14px]">
              {field.label}
            </label>

            {field.type === "select" && (
              <Select>
                <SelectTrigger className="w-full h-[46px] border border-[#d0d5dd] rounded-lg flex justify-between items-center">
                  <SelectValue placeholder="" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="placeholder">
                    Выберите {field.label.toLowerCase()}
                  </SelectItem>
                </SelectContent>
              </Select>
            )}

            {field.type === "input" && (
              <Input className="w-full h-[46px] border border-[#d0d5dd] rounded-lg" />
            )}

            {field.type === "textarea" && (
              <Textarea className="w-full h-[102px] border border-[#d0d5dd] rounded-lg resize-none" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
