import { EditEventForm } from "@/app/components/EditEventTypeForm";
import prisma from "@/app/utils/db";
import { notFound } from "next/navigation";

async function getData(eventTypeId: string) {
  const data = await prisma.eventType.findUnique({
    where: {
      id: eventTypeId,
    },
    select: {
      title: true,
      description: true,
      duration: true,
      url: true,
      id: true,
      videoCallSoftware: true,
    },
  });

  if (!data) {
    return notFound();
  }

  return data;
}

export default async function EditRoute({
  params,
}: {
  params: { eventTypeId: string };
}) {
  const data = await getData(params.eventTypeId);
  return (
    <EditEventForm
      id={data.id}
      callProvider={data.videoCallSoftware}
      duration={data.duration}
      title={data.title}
      url={data.url}
      description={data.description}
    />
  );
}
