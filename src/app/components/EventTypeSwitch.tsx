"use client";
import { Switch } from "@/components/ui/switch";
import { useFormState } from "react-dom";
import { UpdateEventStatusAction } from "../actions";
import { useEffect, useTransition } from "react";
import { toast } from "sonner";

export function MenuActiveSwitch({
  initialChecked,
  eventTypeId,
}: {
  initialChecked: boolean;
  eventTypeId: string;
}) {
  const [isPending, startTransion] = useTransition();
  const [state, action] = useFormState(UpdateEventStatusAction, undefined);

  useEffect(() => {
    if (state?.status === "success") {
      toast.success(state.message);
    } else if (state?.status === "error") {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <Switch
      disabled={isPending}
      defaultChecked={initialChecked}
      onCheckedChange={(isChecked) =>
        startTransion(() => {
          action({
            eventTypeId: eventTypeId,
            isChecked: isChecked,
          });
        })
      }
    />
  );
}
