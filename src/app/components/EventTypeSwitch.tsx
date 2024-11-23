"use client";
import { Switch } from "@/components/ui/switch";
import { useFormState } from "react-dom";
import { UpdateEventStatusAction } from "../actions";

export function MenuActiveSwitch({
  initialChecked,
  eventTypeId,
}: {
  initialChecked: boolean;
  eventTypeId: string;
}) {
  const [state, action] = useFormState(UpdateEventStatusAction, undefined);
  return <Switch defaultChecked={initialChecked} />;
}
