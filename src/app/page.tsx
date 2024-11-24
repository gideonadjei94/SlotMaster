import { redirect } from "next/navigation";
import { Navbar } from "./components/Navbar";
import { auth } from "./utils/auth";
import { Hero } from "./components/Hero";
import { Cable, CloudRain, TabletSmartphone, Zap } from "lucide-react";

export default async function Home() {
  const session = await auth();
  if (session?.user) {
    return redirect("/dashboard");
  }
  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
      <Navbar />
      <Hero />

      <div className="py-10">
        <div className="max-w-2xl mx-auto lg:text-center">
          <p className="font-semibold leading-7 text-primary">
            Schedule faster
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Schedule meetings in minutes!
          </h1>
          <p className="mt-2 text-base leading-snug text-muted-foreground">
            With SlotMaster you can schedule meetings in minutes. We make it
            easy
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <div className="grid max-w-2xl gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16 ">
                <div className="text-base font-medium leading-7">
                  <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-primary">
                    <feature.icon className="size-6 text-white" />
                  </div>
                  {feature.name}
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-snug">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    name: "Free and Easy Sign-Up",
    description:
      "Get started with SlotMaster effortlessly. Create an account in seconds without any fees or hidden costs.",
    icon: CloudRain,
  },
  {
    name: "Fast Scheduling",
    description:
      "Save time with our optimized scheduling tool, enabling instant availability sharing and meeting confirmations.",
    icon: Zap,
  },
  {
    name: "Seamless Integration",
    description:
      "Connect effortlessly with popular calendars and productivity apps to streamline your workflow.",
    icon: Cable,
  },
  {
    name: "Anywhere Access",
    description:
      "Schedule and manage appointments from desktop, tablet, or smartphone.",
    icon: TabletSmartphone,
  },
];
