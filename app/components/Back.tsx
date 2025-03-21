"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface BackButtonProps {
  backUrl?: string;
}

export default function BackButton({ backUrl }: BackButtonProps) {
  const router = useRouter();

  if (backUrl) {
    return (
      <Link href={backUrl} className="flex items-center gap-2">
        <ArrowLeft className="h-6 w-6" />
      </Link>
    );
  }

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center gap-2 z-50"
    >
      <ArrowLeft className="h-6 w-6 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700" />
    </button>
  );
}