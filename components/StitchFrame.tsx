"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

type StitchFrameProps = {
  html: string;
  title: string;
};

export function StitchFrame({ html, title }: StitchFrameProps) {
  const router = useRouter();

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (
        event.data &&
        typeof event.data === "object" &&
        event.data.type === "navigate" &&
        typeof event.data.href === "string"
      ) {
        router.push(event.data.href);
      }
    }

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [router]);

  return (
    <iframe
      className="fixed inset-0 h-screen w-screen border-0"
      srcDoc={html}
      title={title}
    />
  );
}
