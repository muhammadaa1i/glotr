import {
  ClockIcon,
  GlobeIcon,
  HeartIcon,
  MapPinIcon,
  PhoneIcon,
  XIcon,
} from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const SidebarNavigationSection = (): JSX.Element => {
  // Company information data
  const companyInfo = [
    {
      icon: <HeartIcon className="w-5 h-5" />,
      label: "Компания",
      value: "E-bidet Uzbekistan",
      action: null,
    },
    {
      icon: <MapPinIcon className="w-5 h-5" />,
      label: "Адрес",
      value: "г.Ташкент, ул. Саларская 35 В две строки",
      action: null,
    },
    {
      icon: <ClockIcon className="w-5 h-5" />,
      label: "График работы",
      value: "",
      action: {
        text: "Посмотреть",
        color: "text-[#f24236] underline",
      },
    },
    {
      icon: <PhoneIcon className="w-5 h-5" />,
      label: "Номер телефона",
      value: "+998 90 900 90 90",
      action: null,
    },
    {
      icon: <GlobeIcon className="w-5 h-5" />,
      label: "Сайт",
      value: "",
      action: {
        text: "wellblue.gl.uz",
        color: "text-[#f24236] underline",
      },
    },
  ];

  return (
    <div className="flex flex-col w-[312px] h-[777px] gap-6 bg-white">
      <div className="flex h-[60px] items-center justify-between p-4 w-full bg-[#f5f6f8]">
        <div className="[font-family:'Gilroy-Bold',Helvetica] font-bold text-[#344054] text-lg leading-[22px]">
          Подтвердите заказ
        </div>
        <XIcon className="w-6 h-6" />
      </div>

      <div className="flex flex-col items-start gap-6 px-4 py-0 w-full">
        {/* Company Card */}
        <Card className="w-full bg-[#f5f6f8] border-none">
          <CardContent className="p-3">
            <div className="flex items-center gap-3 w-full">
              <div className="relative w-[54px] h-[54px] bg-white rounded-lg overflow-hidden border border-solid border-[#d0d5dd]">
                <img
                  className="absolute w-[54px] h-[54px] top-0 left-0 object-cover"
                  alt="Company logo"
                  src="public/image-1530.png"
                />
              </div>

              <div className="flex flex-col w-[181px] items-start gap-1.5">
                <div className="self-stretch [font-family:'Gilroy-Bold',Helvetica] font-bold text-[#344054] text-sm leading-4">
                  E-bidet Uzbekistan
                </div>
                <div className="self-stretch [font-family:'Gilroy-Medium',Helvetica] font-medium text-[#667085] text-xs leading-[14px]">
                  Ташкент, Шайхантахурский район
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Order Confirmation Card */}
        <Card className="w-full bg-[#f5f6f8] border-none">
          <CardContent className="p-3 flex flex-col items-center justify-center">
            <div className="flex flex-col w-[260px] items-center justify-end gap-2">
              <div className="relative w-10 h-10 bg-[url(public/vector-2.svg)] bg-[100%_100%]">
                <img
                  className="absolute w-[27px] h-5 top-2.5 left-[7px]"
                  alt="Order confirmation icon"
                  src="public/group-1.png"
                />
              </div>

              <div className="self-stretch [font-family:'Gilroy-Bold',Helvetica] font-bold text-[#344054] text-sm text-center leading-4">
                Номер заказа: 3957
              </div>

              <div className="self-stretch [font-family:'Gilroy-Medium',Helvetica] font-medium text-[#667085] text-xs text-center leading-[14px]">
                Ваш заказ успешно принят <br />и передан на обработку продавцу.
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Company Details Card */}
        <Card className="w-full border-[0.6px] border-solid border-[#e8eaed] rounded-lg overflow-hidden">
          <CardContent className="p-0">
            {companyInfo.map((item, index) => (
              <React.Fragment key={index}>
                <div className="flex items-start h-10">
                  <div className="flex h-10 items-center gap-1.5 pl-3 pr-2 py-3.5 flex-1">
                    {item.icon}
                    <div className="[font-family:'Gilroy-Medium',Helvetica] font-medium text-light-themetextmain text-xs leading-[14px] whitespace-nowrap">
                      {item.label}
                    </div>
                  </div>

                  <div className="inline-flex min-w-[105px] h-10 items-end justify-center flex-col pl-2 pr-4">
                    {item.action ? (
                      <div
                        className={`[font-family:'Gilroy-SemiBold',Helvetica] font-semibold text-xs leading-[14px] ${item.action.color}`}
                      >
                        {item.action.text}
                      </div>
                    ) : (
                      <div className="[font-family:'Gilroy-Medium',Helvetica] font-medium text-light-themetextmain text-right text-xs leading-[14px]">
                        {item.value}
                      </div>
                    )}
                  </div>
                </div>
                {index < companyInfo.length - 1 && <Separator />}
              </React.Fragment>
            ))}
          </CardContent>
        </Card>

        {/* All Products Button */}
        <Button className="w-full h-10 bg-[#f24236] hover:bg-[#f24236]/90 text-white rounded-lg">
          <span className="[font-family:'Gilroy-SemiBold',Helvetica] font-semibold text-sm text-center leading-4">
            Все товары продавца
          </span>
        </Button>
      </div>
    </div>
  );
};
