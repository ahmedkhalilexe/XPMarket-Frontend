import {cn} from "@/lib/utils";
import React, {ButtonHTMLAttributes} from "react";
import {Button} from "@/components/ui/button";

export default function CtaButton({
                                      className,
                                      ...props
                                  }: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <Button
            className={cn("p-2 font-semibold rounded-lg drop-shadow-md", className)}
            {...props}
        ></Button>
    );
}
