import Card from "@/src/components/card";
import Link from "next/link";
import React from "react";

function Notifications() {
  return (
    <Card>
      <div className="p-6 flex flex-col">
        <div className="flex items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-600">
            Notifications Analytics
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-md p-3 text-center">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">1.2k</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Total</div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-md p-3 text-center">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">+8.4%</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Change</div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-md p-3 text-center">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">24</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Unread</div>
          </div>
        </div>
      </div>
      <Link className="text-zinc-500 font-black" href="/complex-dashboard/archived">Archived</Link>
    </Card>
  );
}

export default Notifications;
