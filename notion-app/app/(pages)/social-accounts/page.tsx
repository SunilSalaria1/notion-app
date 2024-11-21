import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
    Github,
    Twitter,
    Facebook,
    Linkedin,
    Apple,
  } from "lucide-react"
import { Metadata } from "next";
import React from "react";

const metadata: Metadata = {
    title: "Accounts",
    description:
      "Connected accounts",
  };

const ConnectedAccount = ({
  icon: Icon,
  name,
  username,
  connected,
}: {
  icon: any;
  name: string;
  username: string;
  connected: boolean;
}) => (
  <div className="flex items-center justify-between space-x-4">
    <div className="flex items-center space-x-4">
      <div className="bg-primary/10 p-2 rounded-full">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div>
        <p className="text-sm font-medium leading-none">{name}</p>
        {username && (
          <p className="text-sm text-muted-foreground">{username}</p>
        )}
      </div>
    </div>
    <Button variant={connected ? "outline" : "default"} className={`w-48`} size="lg">
      {connected ? "Disconnect" : "Connect"}
    </Button>
  </div>
);

function Page() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">
          Manage Your Connected Accounts
        </h2>
        <p className="text-lg text-muted-foreground">
          Connect or disconnect your accounts from third-party services.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Social Media Accounts</CardTitle>
          <CardDescription>
            Manage your connected social media accounts
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <ConnectedAccount
            icon={Twitter}
            name="Twitter"
            username="@johndoe"
            connected={true}
          />
          <ConnectedAccount
            icon={Facebook}
            name="Facebook"
            username="John Doe"
            connected={true}
          />
          <ConnectedAccount icon={Linkedin} name="LinkedIn" connected={false} username={""} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Development Accounts</CardTitle>
          <CardDescription>
            Manage your connected development accounts
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <ConnectedAccount
            icon={Github}
            name="GitHub"
            username="johndoe"
            connected={true}
          />
          {/* <ConnectedAccount
            icon={Google}
            name="Google"
            username="john.doe@gmail.com"
            connected={true}
          /> */}
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Other Accounts</CardTitle>
          <CardDescription>Manage other connected accounts</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <ConnectedAccount icon={Apple} name="Apple" connected={false} username={""} />
        </CardContent>
      </Card>
    </div>
  );
}

export default Page;
