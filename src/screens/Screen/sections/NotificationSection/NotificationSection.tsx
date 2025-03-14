import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const NotificationSection = (): JSX.Element => {
  // Product data for mapping
  const cartItems = [
    {
      id: 1,
      name: "Apple iPhone 15 128GB E-sim Qora Smartfoni",
      quantity: 1,
      price: "14 689 000 сум",
      image: "public/2272131-2.png",
    },
    {
      id: 2,
      name: "Apple iPhone 15 128GB E-sim Qora Smartfoni",
      quantity: 1,
      price: "14 689 000 сум",
      image: "public/2272131-2-1.png",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-6 w-full">
      <h2 className="w-full max-w-[328px] [font-family:'Gilroy-Bold',Helvetica] font-bold text-[#344054] text-sm leading-4">
        Корзина заказа
      </h2>

      <div className="flex flex-col items-start gap-3 w-full max-w-[328px]">
        {cartItems.map((item) => (
          <Card
            key={item.id}
            className="w-full bg-[#f5f6f8] rounded-lg overflow-hidden border-none"
          >
            <CardContent className="p-3">
              <div className="flex items-start gap-3.5">
                <div className="w-[60px] h-[60px] bg-white rounded overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    alt="Product"
                    src={item.image}
                  />
                </div>

                <div className="flex flex-col items-start justify-between h-full">
                  <p className="w-[222px] [font-family:'Gilroy-Medium',Helvetica] font-medium text-[#667085] text-xs leading-[14px]">
                    {item.name}
                  </p>

                  <div className="flex items-start gap-3.5">
                    <span className="[font-family:'Gilroy-SemiBold',Helvetica] font-semibold text-[#344054] text-sm leading-4 whitespace-nowrap">
                      x{item.quantity}
                    </span>

                    <span className="[font-family:'Gilroy-SemiBold',Helvetica] font-semibold text-[#344054] text-sm leading-4 whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
