import { notFound, redirect } from "next/navigation";
import { auth } from "../utils/auth";
import { requireUser } from "../utils/hook";
import prisma from "../utils/db";
import { EmptyState } from "../components/EmptyState";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  EllipsisVertical,
  ExternalLink,
  Link2,
  Pen,
  Trash2,
  Users2,
} from "lucide-react";
import { Switch } from "@/components/ui/switch";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CopyLinkMenuItem } from "../components/CopyLinkMenu";
import { MenuActiveSwitch } from "../components/EventTypeSwitch";

async function getData(userId: string) {
  const data = await prisma.user?.findUnique({
    where: {
      id: userId,
    },
    select: {
      userName: true,
      eventType: {
        select: {
          id: true,
          active: true,
          title: true,
          url: true,
          duration: true,
        },
      },
    },
  });

  if (!data) {
    return notFound();
  }
  return data;
}
export default async function DashboardPage() {
  const session = await requireUser();
  const data = await getData(session.user?.id as string);
  return (
    <>
      {data.eventType.length === 0 ? (
        <EmptyState
          title="You have no Event Types"
          description="You can create your first event type by clicking the button below"
          buttonText="Add event type"
          href="/dashboard/new"
        />
      ) : (
        <>
          <div className="flex items-center justify-between px-2">
            <div className="hidden sm:grid gap-y-1">
              <h1 className="text-2xl md:text-3xl font-semibold">
                Event Types
              </h1>
              <p className="text-muted-foreground">
                Create and manage your events right here
              </p>
            </div>

            <Button asChild>
              <Link href="/dashboard/new">Create New Event</Link>
            </Button>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {data.eventType.map((event) => (
              <div
                className="overflow-hidden shadow rounded-lg border relative"
                key={event.id}
              >
                <div className="absolute top-2 right-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="icon">
                        <EllipsisVertical className="size-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Event</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuGroup>
                        <DropdownMenuItem asChild>
                          <Link
                            href={`/${data.userName}/${event.url}`}
                            className="flex items-center"
                          >
                            <ExternalLink className="mr-2 size-4" />
                            Preview
                          </Link>
                        </DropdownMenuItem>

                        <CopyLinkMenuItem
                          meetingUrl={`${process.env.NEXT_PUBLIC_URL}/${data.userName}/${event.url}`}
                        />

                        <DropdownMenuItem asChild>
                          <Link href={`/dashboard/event/${event.id}`}>
                            <Pen className="mr-2 size-4" />
                            Edit
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                      <DropdownMenuSeparator />

                      <DropdownMenuItem className="text-red-500" asChild>
                        <Link href={`/dashboard/event/${event.id}/delete`}>
                          <Trash2 className="size-4 mr-2" color="red" />
                          Delete
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <Link href="/" className="flex items-center p-5">
                  <div className="flex-shrink-0">
                    <Users2 className="size-6" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-muted-foreground">
                        {event.duration} Minutes Meeting
                      </dt>
                      <dd className="text-lg font-medium">{event.title}</dd>
                    </dl>
                  </div>
                </Link>

                <div className="bg-muted px-5 py-3 flex justify-between items-center">
                  <MenuActiveSwitch
                    initialChecked={event.active}
                    eventTypeId={event.id}
                  />

                  <Button asChild>
                    <Link href={`/dashboard/event/${event.id}`}>
                      Edit Event
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}
