import { ChevronRightIcon, MenuIcon, SearchIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Sheet, SheetContent } from "../../components/ui/sheet";
import { ActionButtonsSection } from "./sections/ActionButtonsSection";
import { CompanyInfoSection } from "./sections/CompanyInfoSection";
import { ContactInfoSection } from "./sections/ContactInfoSection";
import { CustomerDetailsSection } from "./sections/CustomerDetailsSection";
import { FooterSection } from "./sections/FooterSection";
import { NotificationSection } from "./sections/NotificationSection";
import { OrderConfirmationSection } from "./sections/OrderConfirmationSection";
import { OrderSummarySection } from "./sections/OrderSummarySection";
import { SidebarNavigationSection } from "./sections/SidebarNavigationSection";

export const Screen = (): JSX.Element => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full max-w-[360px] relative">
        <div className="flex flex-col w-full items-center gap-6 bg-white">
          <header className="flex flex-col h-[60px] items-start w-full">
            <div className="flex h-[60px] items-center gap-3.5 p-4 w-full bg-white">
              <Button
                variant="ghost"
                size="icon"
                className="h-10 p-2"
                onClick={() => setSidebarOpen(true)}
              >
                <MenuIcon className="w-6 h-6" />
              </Button>

              <div className="flex items-center gap-2 px-4 py-2 flex-1 bg-[#f5f6f8] rounded-lg">
                <div className="inline-flex items-center gap-1.5">
                  <SearchIcon className="w-5 h-5 text-[#667085]" />
                  <span className="font-medium text-[#667085] text-xs leading-[14px] whitespace-nowrap">
                    Искать на Glotr
                  </span>
                </div>
              </div>
            </div>
          </header>

          <div className="flex flex-col w-[328px] items-start gap-6">
            <div className="flex items-start gap-1 w-full">
              <ChevronRightIcon className="w-5 h-5" />
              <h1 className="font-bold text-[#344054] text-lg leading-[22px] whitespace-nowrap">
                Оформление заказа
              </h1>
            </div>

            <div className="flex flex-col items-start gap-6 w-full">
              <CompanyInfoSection />
              <ContactInfoSection />
              <CustomerDetailsSection />
              <OrderConfirmationSection />
            </div>
          </div>

          <NotificationSection />

          <div className="w-[328px] h-px">
            <img
              className="w-full h-px object-cover"
              alt="Line"
              src="public/line-4.svg"
            />
          </div>

          <OrderSummarySection />
          <ActionButtonsSection />

          <Button className="w-[328px] h-10 bg-[#f24236] hover:bg-[#d93a2f] text-white rounded-lg">
            Оформить заказ
          </Button>

          <FooterSection />
        </div>

        <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
          <SheetContent side="left" className="p-0 w-[360px]">
            <SidebarNavigationSection />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};
