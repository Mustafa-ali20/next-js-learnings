import { useRouter } from "next/navigation";
import React, { startTransition } from "react";

function ErrorBoundry({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };
  return (
    <div>
      {error.message}
      <button onClick={reload}>try again</button>
    </div>
  );
}

export default ErrorBoundry;
