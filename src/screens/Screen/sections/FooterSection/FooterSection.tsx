import { FacebookIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const FooterSection = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full items-start justify-end bg-white">
      <div className="flex flex-col items-start gap-5 px-4 py-6 w-full">
        <Card className="w-full border-none shadow-none">
          <CardContent className="flex flex-col items-center gap-7 p-0">
            <div className="flex flex-col items-start gap-5 w-full">
              {/* Logo */}
              <div className="relative h-7 w-[146px]">
                <div className="h-7">
                  <div className="relative w-[106px] h-7">
                    <img
                      className="absolute w-[31px] h-7 top-0 left-0"
                      alt="Vector"
                      src="public/vector.svg"
                    />
                    <img
                      className="absolute w-[18px] h-[17px] top-0 left-0"
                      alt="Vector"
                      src="public/vector-1.svg"
                    />
                    <img
                      className="absolute w-[106px] h-[26px] top-0 left-0"
                      alt="Group"
                      src="public/group.png"
                    />
                  </div>
                </div>
              </div>

              {/* Sell on Glotr Button */}
              <Button className="w-full justify-center rounded-lg bg-gradient-to-b from-[rgb(242,66,54)] to-[rgb(228.44,46.66,34.27)] hover:from-[rgb(242,66,54)] hover:to-[rgb(208,46,34)]">
                <div className="flex items-center gap-2">
                  <div className="relative w-6 h-6 overflow-hidden">
                    <img
                      className="w-5 h-[18px]"
                      alt="Icon"
                      src="public/icon.png"
                    />
                  </div>
                  <span className="font-semibold text-white text-sm leading-4">
                    Продавать на Glotr
                  </span>
                </div>
              </Button>

              {/* Description */}
              <p className="text-sm font-medium text-[#667085] leading-[18px]">
                Glotr - это самый быстрый и лучший способ организовать продажи в
                интернете.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Social Media Section */}
        <div className="flex flex-col items-center justify-center gap-4 w-full">
          <div className="flex flex-col items-center gap-3.5 w-full rounded-lg">
            <Separator className="w-full bg-[#f0f0f0]" />

            <div className="flex flex-col items-center justify-center gap-3 w-full">
              <div className="flex items-center justify-between w-full">
                {/* Telegram */}
                <div className="flex flex-col items-center gap-2 flex-1">
                  <div className="relative w-6 h-6">
                    <img
                      className="w-[23px] h-[21px]"
                      alt="Telegram Icon"
                      src="public/icon-1.svg"
                    />
                  </div>
                  <div className="text-xs font-medium text-[#344054] text-center leading-[14px]">
                    Telegram-канал
                  </div>
                </div>

                {/* FacebookIcon */}
                <div className="flex flex-col items-center gap-2 flex-1">
                  <FacebookIcon className="w-6 h-6 text-[#344054]" />
                  <div className="text-xs font-medium text-[#344054] text-center leading-[14px]">
                    FacebookIcon
                  </div>
                </div>

                {/* InstagramIcon */}
                <div className="flex flex-col items-center gap-2 flex-1">
                  <div className="relative w-6 h-6">
                    <div className="relative w-[22px] h-[22px] bg-[url(public/rectangle-240662921.svg)] bg-[100%_100%]">
                      <div className="relative w-0.5 h-0.5 top-1 left-[15px] bg-[#344054] rounded-[10px]" />
                    </div>
                  </div>
                  <div className="text-xs font-medium text-[#344054] text-center leading-[14px]">
                    InstagramIcon
                  </div>
                </div>
              </div>
            </div>

            <Separator className="w-full bg-[#f0f0f0]" />
          </div>
        </div>

        {/* Copyright */}
        <div className="text-sm font-medium text-[#667085] text-center leading-4 mx-auto">
          © Copyright 2012-2024 Glotr.uz
        </div>
      </div>
    </div>
  );
};
