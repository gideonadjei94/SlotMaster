import { nylas, nylasConfig } from "@/app/utils/nylas";
import { redirect } from "next/navigation";

export async function GET() {
  const authUrl = nylas.auth.urlForOAuth2({
    clientId: nylasConfig.clientId,
    redirectUri: nylasConfig.redirectUri,
  });

  return redirect(authUrl);
}