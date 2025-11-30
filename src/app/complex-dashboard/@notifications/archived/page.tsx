import Card from "@/src/components/card";
import Link from "next/link";
import React from "react";

function ArchivedNotifications() {
  return (
    <Card>
      <div className="flex flex-col items-center text-zinc-600 font-bold"> <div>Archived Notifications</div>
      <Link href="/complex-dashboard">Default</Link></div>
     
    </Card>
  );
}

export default ArchivedNotifications;
