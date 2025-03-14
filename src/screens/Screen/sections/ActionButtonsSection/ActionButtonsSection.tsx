import React from "react";
import { Checkbox } from "../../../../components/ui/checkbox";
import { Label } from "../../../../components/ui/label";

export const ActionButtonsSection = (): JSX.Element => {
  return (
    <div className="flex items-start gap-2">
      <Checkbox
        id="terms"
        className="h-5 w-5 rounded bg-[#f24236] border-0 data-[state=checked]:bg-[#f24236]"
      />
      <Label
        htmlFor="terms"
        className="text-xs font-medium leading-3 cursor-pointer"
      >
        <span className="text-[#667085]">Я согласен с условиями </span>
        <span className="text-[#2159d0]">пользовательского соглашения</span>
      </Label>
    </div>
  );
};
