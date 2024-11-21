import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Toaster } from "@/components/ui/toaster";
import {
  Activity,
  AlertCircle,
  Bell,
  Calendar,
  Link2,
  Mail,
  Lock,
  MessageSquare,
  Phone,
  Settings2,
  Star,
  Users,
  Save,
} from "lucide-react";
import { Metadata } from "next";
import React from "react";

const metadata: Metadata = {
  title: "Notification Preferences",
  description:
    "Manage how you receive notifications across different categories.",
};

const NotificationOption = ({
  icon: Icon,
  label,
  description,
  id,
}: {
  icon: any;
  label: string;
  description: string;
  id: string;
}) => (
  <div className="flex items-center justify-between space-x-4">
    <div className="flex items-center space-x-4">
      <Icon className="w-6 h-6 text-primary" />
      <div>
        <Label htmlFor={id}>{label}</Label>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
    <Switch id={id} />
  </div>
);

function Page() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">
          Notification Preferences
        </h2>
        <p className="text-xl text-muted-foreground">
          Manage how you receive notifications across different categories.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 mb-9">
        <Card>
          <CardHeader>
            <CardTitle>General Notifications</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <NotificationOption
              icon={Bell}
              label="All Notifications"
              description="Receive all notifications"
              id="all-notifications"
            />
            <NotificationOption
              icon={Mail}
              label="Email Notifications"
              description="Receive notifications via email"
              id="email-notifications"
            />
            <NotificationOption
              icon={AlertCircle}
              label="Push Notifications"
              description="Receive push notifications on your devices"
              id="push-notifications"
            />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Communication</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <NotificationOption
              icon={MessageSquare}
              label="Message Notifications"
              description="Receive notifications for new messages"
              id="message-notifications"
            />
            <NotificationOption
              icon={Phone}
              label="Call Notifications"
              description="Receive notifications for incoming calls"
              id="call-notifications"
            />
            <NotificationOption
              icon={Users}
              label="Group Activity"
              description="Notifications for group chats and activities"
              id="group-notifications"
            />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Content Updates</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <NotificationOption
              icon={Star}
              label="New Features"
              description="Get notified about new features and updates"
              id="feature-notifications"
            />
            <NotificationOption
              icon={Activity}
              label="Account Activity"
              description="Notifications about your account activity"
              id="account-notifications"
            />
            <NotificationOption
              icon={Calendar}
              label="Event Reminders"
              description="Receive reminders for upcoming events"
              id="event-notifications"
            />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Privacy and Security</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <NotificationOption
              icon={Lock}
              label="Security Alerts"
              description="Get notified about important security events"
              id="security-notifications"
            />
            <NotificationOption
              icon={Settings2}
              label="Settings Changes"
              description="Notifications for changes to your account settings"
              id="settings-notifications"
            />
            <NotificationOption
              icon={Link2}
              label="New Logins"
              description="Get alerted about new logins to your account"
              id="login-notifications"
            />
          </CardContent>
        </Card>
      </div>
      <div className="text-end">
        <Button variant={"default"}>
          <Save /> Save
        </Button>
      </div>
    </div>
  );
}

export default Page;
